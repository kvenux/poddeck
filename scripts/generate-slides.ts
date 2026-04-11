// Generate slides for an episode by spawning `claude -p` headless with:
//   --append-system-prompt     → inject HARD RULES into system prompt
//   --add-dir                  → grant tool access to episode dir + transcripts
//   --allowed-tools            → Read/Write/Edit/Bash/Grep/Glob
//
// Note: we do NOT use --bare because it disables keychain auth.
// CLAUDE.md still auto-loads (contains project conventions, not the hard rules).
//
// Usage:
//   pnpm run generate --id=<videoId>       # single episode
//   pnpm run generate                      # all downloaded episodes

import { resolve, join } from 'node:path'
import {
  readFileSync, existsSync, mkdirSync, writeFileSync, cpSync,
} from 'node:fs'
import { spawn, execSync } from 'node:child_process'
import { readYaml, writeYaml } from './lib/yaml-io.ts'
import { log } from './lib/log.ts'
import type { EpisodesFile, Episode, SourcesFile } from './lib/types.ts'

// Resolve the actual Node.js entry of the claude CLI so we can spawn `node` directly,
// avoiding Windows' inability to spawn .cmd files without shell: true.
function resolveClaudeCli(): string {
  // Parse the claude.cmd shim to find the js entry path
  // Hardcoded fallback
  const candidates = [
    'C:\\nvm4w\\nodejs\\node_modules\\@anthropic-ai\\claude-code\\cli.js',
  ]
  for (const p of candidates) {
    if (existsSync(p)) return p
  }
  // Try npm to resolve
  try {
    const npmPrefix = execSync('npm config get prefix', { encoding: 'utf-8' }).trim()
    const p = join(npmPrefix, 'node_modules', '@anthropic-ai', 'claude-code', 'cli.js')
    if (existsSync(p)) return p
  } catch {}
  throw new Error('Could not locate @anthropic-ai/claude-code/cli.js')
}

const ROOT = process.cwd()
const EPISODES_DIR = resolve(ROOT, 'episodes')
const TEMPLATES_DIR = resolve(EPISODES_DIR, '_templates')
const PROMPTS_DIR = resolve(ROOT, 'scripts/prompts')
const RULES_FILE = resolve(PROMPTS_DIR, 'slides-system-rules.md')
const TASK_FILE = resolve(PROMPTS_DIR, 'slides-task.md')
const EPISODES_YAML = resolve(ROOT, 'episodes.yml')
const TRANSCRIPTS_DIR = resolve(ROOT, 'data/transcripts')

const onlyId = process.argv.find(a => a.startsWith('--id='))?.split('=')[1]

function scaffoldEpisode(id: string): void {
  const dir = join(EPISODES_DIR, id)
  if (existsSync(dir)) {
    log.raw(`  ${id}: dir exists, leaving in place`)
    return
  }
  log.raw(`  ${id}: scaffolding from _templates/`)
  mkdirSync(dir, { recursive: true })
  // copy package.json and rewrite name
  const pkg = JSON.parse(readFileSync(join(TEMPLATES_DIR, 'package.json'), 'utf-8'))
  pkg.name = `episode-${id}`
  writeFileSync(join(dir, 'package.json'), JSON.stringify(pkg, null, 2) + '\n')
  // copy global-bottom.vue
  cpSync(join(TEMPLATES_DIR, 'global-bottom.vue'), join(dir, 'global-bottom.vue'))
  // copy public/ excalidraw templates (CC can reuse or delete as needed)
  cpSync(join(TEMPLATES_DIR, 'public'), join(dir, 'public'), { recursive: true })
}

function renderTask(id: string, source: string, title: string): string {
  return readFileSync(TASK_FILE, 'utf-8')
    .replaceAll('{{ID}}', id)
    .replaceAll('{{SOURCE}}', source)
    .replaceAll('{{TITLE}}', title)
}

async function generateOne(ep: Episode, sourcesFile: SourcesFile): Promise<boolean> {
  log.step(`Generating ${ep.id} — ${ep.title.slice(0, 60)}`)

  // sanity check transcript exists
  const transcriptPath = join(TRANSCRIPTS_DIR, `${ep.id}.txt`)
  if (!existsSync(transcriptPath)) {
    log.err(`  transcript not found: ${transcriptPath}`)
    return false
  }

  // scaffold
  scaffoldEpisode(ep.id)

  // prepare the task prompt
  const taskPrompt = renderTask(ep.id, ep.source, ep.title)
  const systemRules = readFileSync(RULES_FILE, 'utf-8')

  const cliJs = resolveClaudeCli()
  log.raw(`spawning node ${cliJs.split(/[\\/]/).slice(-3).join('/')}`)

  return new Promise<boolean>((resolvePromise) => {
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
      stdio: ['ignore', 'inherit', 'inherit'],
      shell: false,
      windowsHide: false,
    })

    child.on('close', code => {
      if (code === 0) {
        log.ok(`  ${ep.id} generation returned 0`)
        resolvePromise(true)
      } else {
        log.err(`  ${ep.id} claude exited ${code}`)
        resolvePromise(false)
      }
    })
    child.on('error', err => {
      log.err(`  spawn error: ${err.message}`)
      resolvePromise(false)
    })
  })
}

async function main() {
  log.step('Generate slides — selecting episodes')

  const episodesFile = readYaml<EpisodesFile>(EPISODES_YAML)
  const sourcesFile = readYaml<SourcesFile>(resolve(ROOT, 'sources.yml'))

  const candidates = onlyId
    ? episodesFile.episodes.filter(e => e.id === onlyId)
    : episodesFile.episodes.filter(e => e.status === 'downloaded')

  if (candidates.length === 0) {
    log.warn('no episodes to generate')
    return
  }

  log.info(`will generate ${candidates.length} episode(s)`)
  for (const ep of candidates) log.raw(`  - ${ep.id} (${ep.status})`)

  // Status is encoded by the presence of episodes/<id>/meta.yml (written by the
  // subprocess on success) and episodes/<id>/.failed (touched on failure).
  // The episodes.yml file is NOT mutated here — that avoids write races when
  // multiple `generate` invocations run in parallel. Run `pnpm run sync` later
  // to reconstruct episodes.yml from per-episode meta.yml + .failed markers.

  for (const ep of candidates) {
    const ok = await generateOne(ep, sourcesFile)
    if (!ok) {
      try {
        writeFileSync(join(EPISODES_DIR, ep.id, '.failed'), new Date().toISOString())
      } catch {}
    }
  }

  log.ok('\nall done')
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
