// Execute pending entries in data/plans/*.yml:
//   1. download subtitle via yt-dlp → data/transcripts/<id>.txt
//   2. scaffold episodes/<id>/ from _templates
//   3. invoke claude -p or codex exec to generate slides.md + meta.yml
//   4. update plan entry status (pending → generated | failed)
//
// Usage:
//   pnpm run plan:run                              # all pending across all plans
//   pnpm run plan:run -- --id=lex-fridman          # only this source
//   pnpm run plan:run -- --episode-id=abc123,def456 # only exact video IDs
//   pnpm run plan:run -- --limit=3                 # process at most N episodes
//   pnpm run plan:run -- --concurrency=2           # parallel generation
//   pnpm run plan:run -- --engine=codex --model=gpt-5.6-sol --effort=xhigh
//   pnpm run plan:run -- --dry-run                 # show what would be done
//
// Status updates are written back to data/plans/<source>.yml after each episode.
// This means interruptions are safe — re-run picks up from where we left off.

import { resolve, join } from 'node:path'
import {
  readFileSync, writeFileSync, existsSync, mkdirSync, cpSync, readdirSync, unlinkSync,
} from 'node:fs'
import { glob } from 'node:fs/promises'
import { spawn, execSync } from 'node:child_process'
import { readYaml, writeYaml } from './lib/yaml-io.ts'
import { run as shellRun } from './lib/spawn.ts'
import { downloadAutoSubs, cleanVtt } from './lib/yt.ts'
import { log } from './lib/log.ts'
import type { SourcesFile } from './lib/types.ts'

const ROOT = process.cwd()
const SOURCES_PATH = resolve(ROOT, 'sources.yml')
const PLANS_DIR = resolve(ROOT, 'data/plans')
const TRANSCRIPTS_DIR = resolve(ROOT, 'data/transcripts')
const TEMP_VTT_DIR = resolve(ROOT, 'data/temp-vtt')
const EPISODES_DIR = resolve(ROOT, 'episodes')
const TEMPLATES_DIR = resolve(EPISODES_DIR, '_templates')
const PROMPTS_DIR = resolve(ROOT, 'scripts/prompts')
const RULES_FILE = resolve(PROMPTS_DIR, 'slides-system-rules.md')
const TASK_FILE = resolve(PROMPTS_DIR, 'slides-task.md')

const onlyId = process.argv.find(a => a.startsWith('--id='))?.split('=')[1]
const episodeIds = new Set(
  (process.argv.find(a => a.startsWith('--episode-id='))?.split('=')[1] ?? '')
    .split(',')
    .map(id => id.trim())
    .filter(Boolean),
)
const limit = Number(process.argv.find(a => a.startsWith('--limit='))?.split('=')[1] ?? 9999)
const concurrency = Number(process.argv.find(a => a.startsWith('--concurrency='))?.split('=')[1] ?? 1)
const dryRun = process.argv.includes('--dry-run')
const onlyCategory = process.argv.find(a => a.startsWith('--category='))?.split('=')[1]
const engine = process.argv.find(a => a.startsWith('--engine='))?.split('=')[1] ?? 'claude'
const model = process.argv.find(a => a.startsWith('--model='))?.split('=')[1]
  ?? (engine === 'codex' ? 'gpt-5.6-sol' : 'opus')
const effort = process.argv.find(a => a.startsWith('--effort='))?.split('=')[1] ?? 'xhigh'

if (engine !== 'claude' && engine !== 'codex') {
  throw new Error(`unsupported engine: ${engine}`)
}

// Shared state for rate-limit detection and token tracking
let rateLimited = false
const stats = {
  generated: 0,
  failed: 0,
  skippedRateLimit: 0,
  totalInputTokens: 0,
  totalOutputTokens: 0,
  totalDurationMs: 0,
  episodes: [] as { id: string; inputTokens: number; outputTokens: number; durationMs: number; status: string }[],
}

interface PlanEntry {
  id: string
  title: string
  duration: number
  upload_date: string
  url: string
  status: 'pending' | 'downloaded' | 'generated' | 'failed'
  category?: string
  priority: number
}

interface PlanFile {
  source: string
  refreshed_at: string
  min_duration: number
  min_date: string
  total_candidates: number
  done: number
  pending: number
  episodes: PlanEntry[]
}

function loadPlans(): { source: string; path: string; plan: PlanFile }[] {
  if (!existsSync(PLANS_DIR)) {
    log.err(`${PLANS_DIR} not found — run \`pnpm run plan\` first`)
    process.exit(1)
  }
  const files = readdirSync(PLANS_DIR).filter(f => f.endsWith('.yml'))
  return files.map(f => {
    const path = join(PLANS_DIR, f)
    const plan = readYaml<PlanFile>(path)
    return { source: plan.source, path, plan }
  })
}

function savePlan(path: string, plan: PlanFile): void {
  plan.pending = plan.episodes.filter(e => e.status === 'pending').length
  plan.done = plan.episodes.filter(e => e.status === 'generated').length
  writeYaml(path, plan)
}

function scaffoldEpisode(id: string): void {
  const dir = join(EPISODES_DIR, id)
  if (existsSync(join(dir, 'package.json'))) return
  mkdirSync(dir, { recursive: true })
  // Copy package.json, rewrite name
  const pkg = JSON.parse(readFileSync(join(TEMPLATES_DIR, 'package.json'), 'utf-8'))
  pkg.name = `episode-${id}`
  writeFileSync(join(dir, 'package.json'), JSON.stringify(pkg, null, 2) + '\n')
  // Copy global-bottom.vue
  cpSync(join(TEMPLATES_DIR, 'global-bottom.vue'), join(dir, 'global-bottom.vue'))
  // Copy public/ (excalidraw templates)
  cpSync(join(TEMPLATES_DIR, 'public'), join(dir, 'public'), { recursive: true })
}

async function ensureTranscript(id: string): Promise<void> {
  const txtPath = join(TRANSCRIPTS_DIR, `${id}.txt`)
  if (existsSync(txtPath)) {
    log.raw(`  transcript exists: ${id}.txt`)
    return
  }
  mkdirSync(TRANSCRIPTS_DIR, { recursive: true })
  mkdirSync(TEMP_VTT_DIR, { recursive: true })
  log.raw(`  downloading subtitle ${id}`)
  const vttPath = await downloadAutoSubs(id, TEMP_VTT_DIR)
  const txt = cleanVtt(vttPath)
  writeFileSync(txtPath, txt, 'utf-8')
  log.ok(`    cleaned → ${txtPath} (${txt.length} chars)`)
  // Cleanup all vtt for this id
  for await (const f of glob(`${TEMP_VTT_DIR}/${id}*.vtt`)) {
    try { unlinkSync(f) } catch {}
  }
}

function resolveClaudeBin(): string {
  const candidates = [
    'C:\\nvm4w\\nodejs\\node_modules\\@anthropic-ai\\claude-code\\bin\\claude.exe',
  ]
  for (const p of candidates) if (existsSync(p)) return p
  throw new Error('cannot locate @anthropic-ai/claude-code/bin/claude.exe')
}

function resolveCodexBin(): string {
  try {
    const npmRoot = execSync('npm root -g', { encoding: 'utf-8' }).trim()
    const p = join(
      npmRoot,
      '@openai', 'codex', 'node_modules', '@openai', 'codex-win32-x64',
      'vendor', 'x86_64-pc-windows-msvc', 'bin', 'codex.exe',
    )
    if (existsSync(p)) return p
  } catch {}
  throw new Error('cannot locate @openai/codex native binary')
}

function renderTask(entry: PlanEntry, sourceId: string): string {
  return readFileSync(TASK_FILE, 'utf-8')
    .replaceAll('{{ID}}', entry.id)
    .replaceAll('{{SOURCE}}', sourceId)
    .replaceAll('{{TITLE}}', entry.title)
}

interface GenerateResult {
  ok: boolean
  inputTokens: number
  outputTokens: number
  durationMs: number
  isRateLimit: boolean
}

function parseTokensFromLog(logPath: string): { inputTokens: number; outputTokens: number; isRateLimit: boolean } {
  let inputTokens = 0, outputTokens = 0, isRateLimit = false
  try {
    const content = readFileSync(logPath, 'utf-8').trim()
    // Parse stream-json: each line is a JSON event, look for result type
    for (const line of content.split('\n')) {
      try {
        const evt = JSON.parse(line)
        if (evt.type === 'result' && evt.result?.usage) {
          inputTokens = evt.result.usage.input_tokens ?? 0
          outputTokens = evt.result.usage.output_tokens ?? 0
        }
        if (evt.type === 'turn.completed' && evt.usage) {
          inputTokens = evt.usage.input_tokens ?? inputTokens
          outputTokens = evt.usage.output_tokens ?? outputTokens
        }

        // Only inspect structured API/error events. Searching the whole log is
        // unsafe because transcripts, memory snippets, and tool output can all
        // legitimately contain phrases such as "rate limit".
        const errorText = (() => {
          if (evt.type === 'result' && (evt.is_error || evt.api_error_status === 429)) {
            return JSON.stringify({
              status: evt.api_error_status,
              error: evt.error,
              result: evt.result,
            })
          }
          if (evt.type === 'error' || evt.type === 'turn.failed') {
            return JSON.stringify(evt.error ?? evt.message ?? evt)
          }
          if (evt.error === 'rate_limit' || evt.error?.type === 'rate_limit' || evt.error?.code === 429) {
            return JSON.stringify(evt.error)
          }
          return ''
        })()
        if (/hit your limit|rate[ _-]?limit|too many requests|\b429\b/i.test(errorText)) {
          isRateLimit = true
        }
      } catch {}
    }
  } catch {}
  return { inputTokens, outputTokens, isRateLimit }
}

function generateOne(entry: PlanEntry, sourceId: string): Promise<GenerateResult> {
  const systemRules = readFileSync(RULES_FILE, 'utf-8')
  const taskPrompt = renderTask(entry, sourceId)
  const logPath = join(ROOT, 'logs', `generate-${entry.id}.log`)
  mkdirSync(join(ROOT, 'logs'), { recursive: true })
  const fs = require('node:fs')
  const logFd = fs.openSync(logPath, 'w')
  const startTime = Date.now()

  const executable = engine === 'codex' ? resolveCodexBin() : resolveClaudeBin()
  const args = engine === 'codex'
    ? [
        'exec',
        '--model', model,
        '--config', `model_reasoning_effort="${effort}"`,
        '--dangerously-bypass-approvals-and-sandbox',
        '--json',
        '--color', 'never',
        '--cd', ROOT,
        `${systemRules}\n\n# Episode task\n\n${taskPrompt}`,
      ]
    : [
        '-p',
        '--model', model,
        '--verbose',
        '--output-format', 'stream-json',
        '--append-system-prompt', systemRules,
        '--add-dir', EPISODES_DIR,
        '--add-dir', TRANSCRIPTS_DIR,
        '--allowedTools', 'Read,Write,Edit,Bash,Grep,Glob',
        '--permission-mode', 'bypassPermissions',
        taskPrompt,
      ]

  log.raw(`  spawning ${engine} (${model}, effort=${effort}) for ${entry.id} → logs/generate-${entry.id}.log`)
  return new Promise(resolveFn => {
    const child = spawn(executable, args, {
      cwd: ROOT,
      stdio: ['ignore', logFd, logFd],
      shell: false,
      windowsHide: true,
    })
    child.on('close', code => {
      fs.closeSync(logFd)
      const durationMs = Date.now() - startTime
      const { inputTokens, outputTokens, isRateLimit } = parseTokensFromLog(logPath)
      resolveFn({ ok: code === 0 && !isRateLimit, inputTokens, outputTokens, durationMs, isRateLimit })
    })
    child.on('error', err => {
      log.err(`  spawn error: ${err.message}`)
      fs.closeSync(logFd)
      resolveFn({ ok: false, inputTokens: 0, outputTokens: 0, durationMs: Date.now() - startTime, isRateLimit: false })
    })
  })
}

async function processEntry(
  entry: PlanEntry,
  sourceId: string,
  plan: PlanFile,
  planPath: string,
): Promise<void> {
  log.step(`[${sourceId}] ${entry.id} — ${entry.title.slice(0, 70)}`)

  if (dryRun) {
    log.info('  (dry-run) would download + generate')
    return
  }

  try {
    await ensureTranscript(entry.id)
    entry.status = 'downloaded'
    savePlan(planPath, plan)
  } catch (e: any) {
    log.err(`  download failed: ${e.message}`)
    entry.status = 'failed'
    savePlan(planPath, plan)
    return
  }

  scaffoldEpisode(entry.id)

  const result = await generateOne(entry, sourceId)
  entry.status = result.ok ? 'generated' : 'failed'
  savePlan(planPath, plan)

  const durationStr = (result.durationMs / 1000 / 60).toFixed(1) + 'min'
  const tokenStr = result.inputTokens > 0
    ? `${(result.inputTokens / 1000).toFixed(0)}k in / ${(result.outputTokens / 1000).toFixed(0)}k out`
    : 'no token data'
  log.ok(`  → status=${entry.status}  ⏱ ${durationStr}  📊 ${tokenStr}`)

  // Track stats
  stats.episodes.push({
    id: entry.id,
    inputTokens: result.inputTokens,
    outputTokens: result.outputTokens,
    durationMs: result.durationMs,
    status: entry.status,
  })
  stats.totalInputTokens += result.inputTokens
  stats.totalOutputTokens += result.outputTokens
  stats.totalDurationMs += result.durationMs
  if (result.ok) stats.generated++
  else stats.failed++

  if (result.isRateLimit) {
    rateLimited = true
    log.err('  ⚠ Rate limit hit — stopping queue, remaining entries stay pending')
  }

  if (!result.ok && !result.isRateLimit) {
    const logPath = join(ROOT, 'logs', `generate-${entry.id}.log`)
    try {
      const tail = readFileSync(logPath, 'utf-8').trim().split('\n').slice(-20).join('\n')
      log.err(`  ── log tail ──\n${tail}\n  ── end ──`)
    } catch {}
  }
}

async function main() {
  log.step(`Run-plan — engine=${engine}, model=${model}, effort=${effort}, concurrency=${concurrency}, limit=${limit}${dryRun ? ' (DRY RUN)' : ''}`)

  const plans = loadPlans()
  const targetPlans = onlyId ? plans.filter(p => p.source === onlyId) : plans
  if (targetPlans.length === 0) {
    log.warn('no matching plans')
    return
  }

  // Flatten all pending entries with their plan context, sorted by upload_date desc
  const allPending: { entry: PlanEntry; sourceId: string; plan: PlanFile; planPath: string }[] = []
  for (const { source, path, plan } of targetPlans) {
    let planChanged = false
    for (const entry of plan.episodes) {
      const requested = episodeIds.size === 0 || episodeIds.has(entry.id)
      const hasArtifacts = existsSync(join(EPISODES_DIR, entry.id, 'slides.md'))
        && existsSync(join(EPISODES_DIR, entry.id, 'meta.yml'))
      if (requested && hasArtifacts) {
        if (entry.status !== 'generated') {
          entry.status = 'generated'
          planChanged = true
          log.info(`  ${entry.id}: existing slides.md + meta.yml, marking generated`)
        }
        continue
      }
      const statusEligible = episodeIds.size > 0
        ? entry.status !== 'generated'
        : entry.status === 'pending'
      if (statusEligible && requested) {
        allPending.push({ entry, sourceId: source, plan, planPath: path })
      }
    }
    if (planChanged) savePlan(path, plan)
  }

  if (episodeIds.size > 0) {
    const matched = new Set(allPending.map(item => item.entry.id))
    const missing = [...episodeIds].filter(id => !matched.has(id))
    if (missing.length > 0) {
      log.warn(`requested episode IDs not pending/found: ${missing.join(', ')}`)
    }
  }
  // Filter by category if --category specified
  if (onlyCategory) {
    const filtered = allPending.filter(p => p.entry.category === onlyCategory)
    allPending.length = 0
    allPending.push(...filtered)
  }

  const categoryPriority: Record<string, number> = {
    'ai-tech': 0, 'mind-body': 1, 'science': 2, 'business': 3, 'culture': 4,
  }
  allPending.sort((a, b) => {
    const ca = categoryPriority[a.entry.category ?? ''] ?? 99
    const cb = categoryPriority[b.entry.category ?? ''] ?? 99
    if (ca !== cb) return ca - cb
    return b.entry.upload_date.localeCompare(a.entry.upload_date)
  })

  if (allPending.length === 0) {
    log.info('No pending entries — all plans up to date')
    return
  }

  const toProcess = allPending.slice(0, limit)
  log.info(`${allPending.length} pending, will process ${toProcess.length}${onlyCategory ? ` (category: ${onlyCategory})` : ''}`)

  // Concurrency: run N at a time
  const queue = [...toProcess]
  const workers: Promise<void>[] = []
  async function worker(): Promise<void> {
    while (queue.length > 0) {
      if (rateLimited) {
        stats.skippedRateLimit += queue.length
        queue.length = 0
        break
      }
      const item = queue.shift()
      if (!item) break
      try {
        await processEntry(item.entry, item.sourceId, item.plan, item.planPath)
      } catch (err: any) {
        log.err(`  UNHANDLED in ${item.entry.id}: ${err.stack || err.message}`)
        item.entry.status = 'failed'
        savePlan(item.planPath, item.plan)
      }
    }
  }
  for (let i = 0; i < concurrency; i++) workers.push(worker())
  await Promise.all(workers)

  // Print summary
  log.ok('\n══════════ Run-plan Summary ══════════')
  log.ok(`  ✅ Generated: ${stats.generated}`)
  if (stats.failed > 0) log.err(`  ❌ Failed: ${stats.failed}`)
  if (stats.skippedRateLimit > 0) log.warn(`  ⏭ Skipped (rate limit): ${stats.skippedRateLimit}`)
  log.ok(`  ⏱ Total time: ${(stats.totalDurationMs / 1000 / 60).toFixed(1)} min`)
  if (stats.totalInputTokens > 0) {
    log.ok(`  📊 Total tokens: ${(stats.totalInputTokens / 1000).toFixed(0)}k input / ${(stats.totalOutputTokens / 1000).toFixed(0)}k output`)
  }
  if (stats.episodes.length > 0) {
    log.ok('  ── Per episode ──')
    for (const ep of stats.episodes) {
      const d = (ep.durationMs / 1000 / 60).toFixed(1)
      const t = ep.inputTokens > 0
        ? `${(ep.inputTokens / 1000).toFixed(0)}k/${(ep.outputTokens / 1000).toFixed(0)}k`
        : '-'
      log.ok(`    ${ep.status === 'generated' ? '✅' : '❌'} ${ep.id}  ${d}min  ${t}`)
    }
  }
  log.ok('══════════════════════════════════════')
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
