// End-to-end local updater for scheduled runs:
//   1. refresh YouTube scan cache
//   2. update data/plans/*.yml
//   3. run Claude Code deck generation for pending entries
//   4. install/build
//   5. commit and push to trigger GitHub Pages deploy
//
// Usage:
//   pnpm run auto:update -- --limit=2
//   pnpm run auto:update -- --id=latent-space --limit=1 --no-push
//   pnpm run auto:update -- --category=ai-tech --limit=3

import { spawn } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { readYaml } from './lib/yaml-io.ts'
import { log } from './lib/log.ts'

const ROOT = process.cwd()
const PLANS_DIR = resolve(ROOT, 'data/plans')
const EPISODES_DIR = resolve(ROOT, 'episodes')
const TRANSCRIPTS_DIR = resolve(ROOT, 'data/transcripts')

const onlyId = argValue('--id')
const category = argValue('--category')
const processLimit = Number(argValue('--limit') ?? 3)
const processConcurrency = Number(argValue('--concurrency') ?? 1)
const cacheLimit = argValue('--cache-limit')
const after = argValue('--after')
const dryRun = process.argv.includes('--dry-run')
const noPush = process.argv.includes('--no-push')
const noCommit = process.argv.includes('--no-commit')
const noBuild = process.argv.includes('--no-build')
const commitMessage = argValue('--message') ?? 'auto update podcast decks'

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
  episodes: PlanEntry[]
}

function argValue(name: string): string | undefined {
  const found = process.argv.find(a => a.startsWith(`${name}=`))
  return found?.slice(name.length + 1)
}

function isWin(): boolean {
  return process.platform === 'win32'
}

function command(name: string): string {
  if (!isWin()) return name
  if (/\.(exe|cmd|bat|com)$/i.test(name)) return name
  return name === 'pnpm' || name === 'gh' ? `${name}.cmd` : `${name}.exe`
}

function run(cmd: string, args: string[], opts: { allowFail?: boolean } = {}): Promise<number> {
  log.raw(`$ ${cmd} ${args.join(' ')}`)
  return new Promise((resolveFn, rejectFn) => {
    const resolved = command(cmd)
    const needsShell = isWin() && /\.(cmd|bat)$/i.test(resolved)
    const child = spawn(resolved, args, {
      cwd: ROOT,
      stdio: 'inherit',
      shell: needsShell,
      windowsHide: true,
      env: { ...process.env, PYTHONIOENCODING: 'utf-8', PYTHONUTF8: '1' },
    })
    child.on('close', code => {
      const exitCode = code ?? 0
      if (exitCode !== 0 && !opts.allowFail) {
        rejectFn(new Error(`${cmd} exited ${exitCode}`))
        return
      }
      resolveFn(exitCode)
    })
    child.on('error', err => rejectFn(err))
  })
}

function capture(cmd: string, args: string[], opts: { allowFail?: boolean } = {}): Promise<string> {
  return new Promise((resolveFn, rejectFn) => {
    const resolved = command(cmd)
    const needsShell = isWin() && /\.(cmd|bat)$/i.test(resolved)
    const child = spawn(resolved, args, {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: needsShell,
      windowsHide: true,
      env: { ...process.env, PYTHONIOENCODING: 'utf-8', PYTHONUTF8: '1' },
    })
    let stdout = ''
    let stderr = ''
    child.stdout.on('data', d => { stdout += d.toString() })
    child.stderr.on('data', d => { stderr += d.toString() })
    child.on('close', code => {
      const exitCode = code ?? 0
      if (exitCode !== 0 && !opts.allowFail) {
        rejectFn(new Error(`${cmd} exited ${exitCode}\n${stderr}`))
        return
      }
      resolveFn(stdout)
    })
    child.on('error', err => rejectFn(err))
  })
}

function loadPlans(): { path: string; plan: PlanFile }[] {
  if (!existsSync(PLANS_DIR)) return []
  return readdirSync(PLANS_DIR)
    .filter(f => f.endsWith('.yml'))
    .map(f => {
      const path = join(PLANS_DIR, f)
      return { path, plan: readYaml<PlanFile>(path) }
    })
    .filter(({ plan }) => !onlyId || plan.source === onlyId)
}

function generatedEpisodeIds(): Set<string> {
  const ids = new Set<string>()
  if (!existsSync(EPISODES_DIR)) return ids
  for (const id of readdirSync(EPISODES_DIR)) {
    if (id.startsWith('_')) continue
    if (existsSync(join(EPISODES_DIR, id, 'meta.yml'))) ids.add(id)
  }
  return ids
}

function plannedPendingIds(): string[] {
  const items: { id: string; uploadDate: string; category?: string }[] = []
  for (const { plan } of loadPlans()) {
    for (const entry of plan.episodes) {
      if (entry.status !== 'pending') continue
      if (category && entry.category !== category) continue
      items.push({ id: entry.id, uploadDate: entry.upload_date, category: entry.category })
    }
  }

  const categoryPriority: Record<string, number> = {
    'ai-tech': 0,
    'ai-tech-rest': 1,
    'mind-body': 2,
    science: 3,
    business: 4,
    culture: 5,
  }

  items.sort((a, b) => {
    const ca = categoryPriority[a.category ?? ''] ?? 99
    const cb = categoryPriority[b.category ?? ''] ?? 99
    if (ca !== cb) return ca - cb
    return b.uploadDate.localeCompare(a.uploadDate)
  })
  return items.slice(0, processLimit).map(i => i.id)
}

function stagePathsFor(ids: Set<string>): string[] {
  const paths = [
    'data/plans',
    'pnpm-lock.yaml',
  ]
  for (const id of ids) {
    const transcript = join(TRANSCRIPTS_DIR, `${id}.txt`)
    const episode = join(EPISODES_DIR, id)
    if (existsSync(transcript)) paths.push(`data/transcripts/${id}.txt`)
    if (existsSync(episode)) paths.push(`episodes/${id}`)
  }
  return paths
}

async function hasStagedChanges(): Promise<boolean> {
  const code = await run('git', ['diff', '--cached', '--quiet'], { allowFail: true })
  return code !== 0
}

async function main() {
  if (!Number.isFinite(processLimit) || processLimit < 1) {
    throw new Error('--limit must be a positive number')
  }
  if (!Number.isFinite(processConcurrency) || processConcurrency < 1) {
    throw new Error('--concurrency must be a positive number')
  }

  log.step('Auto update — refresh cache')
  const refreshArgs = ['run', 'cache:refresh', '--']
  if (onlyId) refreshArgs.push(`--id=${onlyId}`)
  if (cacheLimit) refreshArgs.push(`--limit=${cacheLimit}`)
  if (after) refreshArgs.push(`--after=${after}`)
  await run('pnpm', refreshArgs)

  log.step('Auto update — update plans')
  const planArgs = ['run', 'plan', '--']
  if (onlyId) planArgs.push(`--id=${onlyId}`)
  await run('pnpm', planArgs)

  const beforeGenerated = generatedEpisodeIds()
  const targetIds = new Set(plannedPendingIds())
  if (targetIds.size === 0) {
    log.info('No pending entries after refresh/plan. Nothing to generate.')
    return
  }
  log.info(`will try ${targetIds.size} pending entr${targetIds.size === 1 ? 'y' : 'ies'}: ${[...targetIds].join(', ')}`)

  log.step('Auto update — generate decks with Claude Code')
  const runPlanArgs = ['run', 'plan:run', '--', `--limit=${processLimit}`, `--concurrency=${processConcurrency}`]
  if (onlyId) runPlanArgs.push(`--id=${onlyId}`)
  if (category) runPlanArgs.push(`--category=${category}`)
  if (dryRun) runPlanArgs.push('--dry-run')
  await run('pnpm', runPlanArgs, { allowFail: true })

  const afterGenerated = generatedEpisodeIds()
  const newGenerated = new Set([...afterGenerated].filter(id => !beforeGenerated.has(id)))
  const touchedIds = new Set([...targetIds, ...newGenerated])

  if (!dryRun) {
    log.step('Auto update — sync dependencies')
    await run('pnpm', ['install'])
  }

  if (!dryRun && !noBuild && newGenerated.size > 0) {
    log.step('Auto update — build site')
    await run('pnpm', ['run', 'build'])
  } else if (newGenerated.size === 0) {
    log.warn('No newly generated episodes; skipping build.')
  }

  if (dryRun || noCommit) {
    log.info('Skipping commit/push by request.')
    return
  }

  log.step('Auto update — commit')
  await run('git', ['add', ...stagePathsFor(touchedIds)])
  if (!(await hasStagedChanges())) {
    log.info('No staged changes to commit.')
    return
  }
  await run('git', ['commit', '-m', commitMessage])

  if (noPush) {
    log.info('Committed locally; --no-push set, so GitHub Pages deploy was not triggered.')
    return
  }

  log.step('Auto update — push and wait for GitHub Pages')
  await run('git', ['push'])
  const runs = await capture('gh', ['run', 'list', '--limit', '1', '--json', 'databaseId', '--jq', '.[0].databaseId'], { allowFail: true })
  const runId = runs.trim()
  if (runId) {
    await run('gh', ['run', 'watch', runId, '--exit-status'], { allowFail: true })
  } else {
    log.warn('Could not find latest GitHub Actions run; push completed.')
  }

  log.ok(`Auto update complete. New generated: ${[...newGenerated].join(', ') || 'none'}`)
}

main().catch(err => {
  log.err(err.stack || err.message)
  process.exit(1)
})
