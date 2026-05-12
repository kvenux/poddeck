// Refresh data/scan-cache/<source>.jsonl by calling yt-dlp --dump-json
// on each source channel in sources.yml.
//
// Usage:
//   pnpm run cache:refresh                        # all sources, default limit
//   pnpm run cache:refresh -- --id=lex-fridman    # single source
//   pnpm run cache:refresh -- --limit=500         # more items per scan
//
// This is expensive (several minutes per source) because --dump-json fetches
// full video metadata (duration, upload_date, description, etc).

import { resolve, join } from 'node:path'
import { mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { spawn } from 'node:child_process'
import { readYaml } from './lib/yaml-io.ts'
import { log } from './lib/log.ts'
import type { SourcesFile } from './lib/types.ts'

const ROOT = process.cwd()
const SOURCES_PATH = resolve(ROOT, 'sources.yml')
const CACHE_DIR = resolve(ROOT, 'data/scan-cache')

const onlyId = process.argv.find(a => a.startsWith('--id='))?.split('=')[1]
const limitArg = process.argv.find(a => a.startsWith('--limit='))?.split('=')[1]
const defaultLimit = Number(
  limitArg ?? 350,
)
const dateAfter = process.argv.find(a => a.startsWith('--after='))?.split('=')[1] ?? '20260101'

const isWin = process.platform === 'win32'

function resolveCmd(cmd: string): string {
  if (!isWin) return cmd
  if (/\.(exe|cmd|bat|com|ps1)$/i.test(cmd)) return cmd
  return `${cmd}.exe`
}

function fetchOne(source: { id: string; channel: string }, limit: number): Promise<void> {
  return new Promise((resolveFn, rej) => {
    const outPath = join(CACHE_DIR, `${source.id}.jsonl`)
    log.info(`${source.id} → ${outPath} (limit ${limit})`)
    const fs = require('node:fs')
    const outFd = fs.openSync(outPath, 'w')
    const child = spawn(resolveCmd('yt-dlp'), [
      '--dump-json',
      '--dateafter', dateAfter,
      '--playlist-end', String(limit),
      source.channel,
    ], {
      stdio: ['ignore', outFd, 'ignore'],
      shell: false,
      windowsHide: true,
      env: { ...process.env, PYTHONIOENCODING: 'utf-8', PYTHONUTF8: '1' },
    })
    child.on('close', code => {
      fs.closeSync(outFd)
      if (code !== 0) {
        log.warn(`  ${source.id}: yt-dlp exited ${code}`)
      }
      // Always count lines to confirm
      const lines = fs.readFileSync(outPath, 'utf-8').split('\n').filter((l: string) => l.trim()).length
      log.ok(`  ${source.id}: ${lines} entries written`)
      resolveFn()
    })
    child.on('error', err => rej(err))
  })
}

async function main() {
  log.step(`Refresh scan-cache — dateafter ${dateAfter}, limit ${defaultLimit}`)

  mkdirSync(CACHE_DIR, { recursive: true })

  const sourcesFile = readYaml<SourcesFile>(SOURCES_PATH)
  const targets = onlyId
    ? sourcesFile.sources.filter(s => s.id === onlyId)
    : sourcesFile.sources

  if (targets.length === 0) {
    log.warn('no sources to refresh')
    return
  }

  log.info(`will refresh ${targets.length} source(s) in parallel`)

  // Run all in parallel — each writes to its own file, no race
  await Promise.all(targets.map(s => {
    const limit = limitArg ? defaultLimit : ((s as any).cache_limit ?? defaultLimit)
    return fetchOne(s, limit).catch(err => {
      log.err(`${s.id} failed: ${err.message}`)
    })
  }))

  log.ok('\nCache refresh complete')
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
