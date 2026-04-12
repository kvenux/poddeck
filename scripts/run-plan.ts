// Execute pending entries in data/plans/*.yml:
//   1. download subtitle via yt-dlp → data/transcripts/<id>.txt
//   2. scaffold episodes/<id>/ from _templates
//   3. invoke claude -p to generate slides.md + meta.yml
//   4. update plan entry status (pending → generated | failed)
//
// Usage:
//   pnpm run plan:run                              # all pending across all plans
//   pnpm run plan:run -- --id=lex-fridman          # only this source
//   pnpm run plan:run -- --limit=3                 # process at most N episodes
//   pnpm run plan:run -- --concurrency=2           # parallel generation
//   pnpm run plan:run -- --dry-run                 # show what would be done
//
// Status updates are written back to data/plans/<source>.yml after each episode.
// This means interruptions are safe — re-run picks up from where we left off.

import { resolve, join } from 'node:path'
import {
  readFileSync, writeFileSync, existsSync, mkdirSync, cpSync, readdirSync, unlinkSync,
} from 'node:fs'
import { glob } from 'node:fs/promises'
import { spawn } from 'node:child_process'
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
const limit = Number(process.argv.find(a => a.startsWith('--limit='))?.split('=')[1] ?? 9999)
const concurrency = Number(process.argv.find(a => a.startsWith('--concurrency='))?.split('=')[1] ?? 1)
const dryRun = process.argv.includes('--dry-run')

interface PlanEntry {
  id: string
  title: string
  duration: number
  upload_date: string
  url: string
  status: 'pending' | 'downloaded' | 'generated' | 'failed'
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

function resolveClaudeCli(): string {
  const candidates = [
    'C:\\nvm4w\\nodejs\\node_modules\\@anthropic-ai\\claude-code\\cli.js',
  ]
  for (const p of candidates) if (existsSync(p)) return p
  throw new Error('cannot locate @anthropic-ai/claude-code/cli.js')
}

function renderTask(entry: PlanEntry, sourceId: string): string {
  return readFileSync(TASK_FILE, 'utf-8')
    .replaceAll('{{ID}}', entry.id)
    .replaceAll('{{SOURCE}}', sourceId)
    .replaceAll('{{TITLE}}', entry.title)
}

function generateOne(entry: PlanEntry, sourceId: string): Promise<boolean> {
  const cliJs = resolveClaudeCli()
  const systemRules = readFileSync(RULES_FILE, 'utf-8')
  const taskPrompt = renderTask(entry, sourceId)
  const logPath = join(ROOT, 'logs', `generate-${entry.id}.log`)
  mkdirSync(join(ROOT, 'logs'), { recursive: true })
  const fs = require('node:fs')
  const logFd = fs.openSync(logPath, 'w')

  log.raw(`  spawning claude -p for ${entry.id} → logs/${entry.id}.log`)
  return new Promise(resolveFn => {
    const child = spawn(process.execPath, [
      cliJs,
      '-p',
      '--model', 'opus',
      '--append-system-prompt', systemRules,
      '--add-dir', EPISODES_DIR,
      '--add-dir', TRANSCRIPTS_DIR,
      '--allowedTools', 'Read,Write,Edit,Bash,Grep,Glob',
      '--permission-mode', 'bypassPermissions',
      taskPrompt,
    ], {
      cwd: ROOT,
      stdio: ['ignore', logFd, logFd],
      shell: false,
      windowsHide: true,
    })
    child.on('close', code => {
      fs.closeSync(logFd)
      resolveFn(code === 0)
    })
    child.on('error', err => {
      log.err(`  spawn error: ${err.message}`)
      fs.closeSync(logFd)
      resolveFn(false)
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

  const ok = await generateOne(entry, sourceId)
  entry.status = ok ? 'generated' : 'failed'
  savePlan(planPath, plan)
  log.ok(`  → status=${entry.status}`)
}

async function main() {
  log.step(`Run-plan — concurrency=${concurrency}, limit=${limit}${dryRun ? ' (DRY RUN)' : ''}`)

  const plans = loadPlans()
  const targetPlans = onlyId ? plans.filter(p => p.source === onlyId) : plans
  if (targetPlans.length === 0) {
    log.warn('no matching plans')
    return
  }

  // Flatten all pending entries with their plan context, sorted by upload_date desc
  const allPending: { entry: PlanEntry; sourceId: string; plan: PlanFile; planPath: string }[] = []
  for (const { source, path, plan } of targetPlans) {
    for (const entry of plan.episodes) {
      if (entry.status === 'pending') {
        allPending.push({ entry, sourceId: source, plan, planPath: path })
      }
    }
  }
  allPending.sort((a, b) => b.entry.upload_date.localeCompare(a.entry.upload_date))

  if (allPending.length === 0) {
    log.info('No pending entries — all plans up to date')
    return
  }

  const toProcess = allPending.slice(0, limit)
  log.info(`${allPending.length} pending, will process ${toProcess.length}`)

  // Concurrency: run N at a time
  const queue = [...toProcess]
  const workers: Promise<void>[] = []
  async function worker(): Promise<void> {
    while (queue.length > 0) {
      const item = queue.shift()
      if (!item) break
      await processEntry(item.entry, item.sourceId, item.plan, item.planPath)
    }
  }
  for (let i = 0; i < concurrency; i++) workers.push(worker())
  await Promise.all(workers)

  log.ok('\nRun-plan complete')
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
