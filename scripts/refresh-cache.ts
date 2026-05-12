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
import { mkdirSync, readFileSync, renameSync, writeFileSync, existsSync, unlinkSync } from 'node:fs'
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

function runToFile(args: string[], outPath: string): Promise<number> {
  return new Promise((resolveFn, rej) => {
    const fs = require('node:fs')
    const outFd = fs.openSync(outPath, 'w')
    const child = spawn(resolveCmd('yt-dlp'), args, {
      stdio: ['ignore', outFd, 'ignore'],
      shell: false,
      windowsHide: true,
      env: { ...process.env, PYTHONIOENCODING: 'utf-8', PYTHONUTF8: '1' },
    })
    child.on('close', code => {
      fs.closeSync(outFd)
      resolveFn(code ?? 0)
    })
    child.on('error', err => rej(err))
  })
}

function runCapture(args: string[]): Promise<{ code: number; stdout: string }> {
  return new Promise((resolveFn, rej) => {
    const child = spawn(resolveCmd('yt-dlp'), args, {
      stdio: ['ignore', 'pipe', 'ignore'],
      shell: false,
      windowsHide: true,
      env: { ...process.env, PYTHONIOENCODING: 'utf-8', PYTHONUTF8: '1' },
    })
    let stdout = ''
    child.stdout.on('data', d => { stdout += d.toString() })
    child.on('close', code => resolveFn({ code: code ?? 0, stdout }))
    child.on('error', err => rej(err))
  })
}

function countLines(path: string): number {
  if (!existsSync(path)) return 0
  return readFileSync(path, 'utf-8').split('\n').filter((l: string) => l.trim()).length
}

function videosUrl(channel: string): string {
  return channel.endsWith('/videos') ? channel : `${channel.replace(/\/$/, '')}/videos`
}

function ymd(date: Date): string {
  const y = date.getUTCFullYear()
  const m = String(date.getUTCMonth() + 1).padStart(2, '0')
  const d = String(date.getUTCDate()).padStart(2, '0')
  return `${y}${m}${d}`
}

async function rssDates(channelId: string): Promise<Map<string, string>> {
  const dates = new Map<string, string>()
  try {
    const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`
    const res = await fetch(url)
    if (!res.ok) return dates
    const xml = await res.text()
    for (const entry of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
      const block = entry[1]
      const id = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]
      const published = block.match(/<published>([^<]+)<\/published>/)?.[1]
      if (id && published) dates.set(id, ymd(new Date(published)))
    }
  } catch {}
  return dates
}

async function fallbackFlat(source: { id: string; channel: string }, limit: number, outPath: string): Promise<number> {
  log.warn(`  ${source.id}: falling back to flat playlist scan`)
  const { code, stdout } = await runCapture([
    '--flat-playlist',
    '--dump-json',
    '--playlist-end', String(limit),
    videosUrl(source.channel),
  ])
  if (code !== 0 || !stdout.trim()) return 0

  const rows = stdout.split('\n').filter(Boolean).map(line => {
    try { return JSON.parse(line) } catch { return null }
  }).filter(Boolean)

  const channelId = rows.find((row: any) => row.playlist_id)?.playlist_id
  const dates = channelId ? await rssDates(channelId) : new Map<string, string>()
  const normalized = rows
    .filter((row: any) => row.id && typeof row.duration === 'number')
    .map((row: any) => ({
      id: row.id,
      title: row.title || '(no title)',
      duration: Math.round(row.duration),
      upload_date: dates.get(row.id) || '',
      webpage_url: row.webpage_url || row.url || `https://youtube.com/watch?v=${row.id}`,
    }))
    .filter((row: any) => row.upload_date && row.upload_date >= dateAfter)

  if (normalized.length === 0) return 0
  writeFileSync(outPath, normalized.map(row => JSON.stringify(row)).join('\n') + '\n', 'utf-8')
  return normalized.length
}

async function fetchOne(source: { id: string; channel: string }, limit: number): Promise<void> {
  const outPath = join(CACHE_DIR, `${source.id}.jsonl`)
  const tmpPath = join(CACHE_DIR, `${source.id}.jsonl.tmp`)
  log.info(`${source.id} → ${outPath} (limit ${limit})`)

  const code = await runToFile([
    '--dump-json',
    '--dateafter', dateAfter,
    '--playlist-end', String(limit),
    source.channel,
  ], tmpPath)

  if (code === 0 && countLines(tmpPath) > 0) {
    renameSync(tmpPath, outPath)
    log.ok(`  ${source.id}: ${countLines(outPath)} entries written`)
    return
  }

  try { if (existsSync(tmpPath)) unlinkSync(tmpPath) } catch {}
  log.warn(`  ${source.id}: yt-dlp full scan exited ${code}`)
  const fallbackLines = await fallbackFlat(source, limit, outPath)
  if (fallbackLines > 0) {
    log.ok(`  ${source.id}: ${fallbackLines} fallback entries written`)
    return
  }

  log.warn(`  ${source.id}: keeping existing cache (${countLines(outPath)} entries)`)
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
