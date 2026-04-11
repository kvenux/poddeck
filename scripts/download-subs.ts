// Read data/queue.yml, download auto subs for each entry, clean VTT → txt,
// move cleaned txt to data/transcripts/<id>.txt, append to episodes.yml,
// remove from queue.
//
// Usage:
//   pnpm run download              # process all queue entries
//   pnpm run download -- --id=XYZ  # process a single id (for debugging)

import { resolve } from 'node:path'
import { writeFileSync, mkdirSync, existsSync, unlinkSync } from 'node:fs'
import { glob } from 'node:fs/promises'
import { readYaml, writeYaml } from './lib/yaml-io.ts'
import { downloadAutoSubs, cleanVtt } from './lib/yt.ts'
import { log } from './lib/log.ts'
import type { EpisodesFile, QueueFile, Episode } from './lib/types.ts'

const ROOT = process.cwd()
const QUEUE_PATH = resolve(ROOT, 'data/queue.yml')
const EPISODES_PATH = resolve(ROOT, 'episodes.yml')
const TRANSCRIPTS_DIR = resolve(ROOT, 'data/transcripts')
const TEMP_DIR = resolve(ROOT, 'data/temp-vtt')

const onlyId = process.argv.find(a => a.startsWith('--id='))?.split('=')[1]

async function main() {
  log.step(`Download — processing queue`)

  const queueFile = readYaml<QueueFile>(QUEUE_PATH, { queue: [] })
  const episodesFile = readYaml<EpisodesFile>(EPISODES_PATH, { episodes: [] })

  if (queueFile.queue.length === 0) {
    log.info('Queue is empty.')
    return
  }

  mkdirSync(TRANSCRIPTS_DIR, { recursive: true })
  mkdirSync(TEMP_DIR, { recursive: true })

  const toProcess = onlyId
    ? queueFile.queue.filter(e => e.id === onlyId)
    : queueFile.queue

  if (onlyId && toProcess.length === 0) {
    log.warn(`No queue entry with id=${onlyId}`)
    return
  }

  const processed: string[] = []
  const failed: string[] = []

  for (const entry of toProcess) {
    log.info(`${entry.id} — ${entry.title.slice(0, 70)}`)
    try {
      const vttPath = await downloadAutoSubs(entry.id, TEMP_DIR)
      log.raw(`downloaded ${vttPath}`)

      const txt = cleanVtt(vttPath)
      const outPath = resolve(TRANSCRIPTS_DIR, `${entry.id}.txt`)
      writeFileSync(outPath, txt, 'utf-8')
      log.ok(`  cleaned → ${outPath} (${txt.length} chars)`)

      // cleanup all vtt files for this id (en-orig + en might both exist)
      for await (const f of glob(`${TEMP_DIR}/${entry.id}*.vtt`)) {
        try { unlinkSync(f) } catch {}
      }

      // add or update in episodes.yml
      const existingIdx = episodesFile.episodes.findIndex(e => e.id === entry.id)
      const newEpisode: Episode = {
        id: entry.id,
        source: entry.source,
        title: entry.title,
        url: entry.url,
        published: entry.uploadDate,
        status: 'downloaded',
      }
      if (existingIdx >= 0) {
        episodesFile.episodes[existingIdx] = {
          ...episodesFile.episodes[existingIdx],
          ...newEpisode,
        }
      } else {
        episodesFile.episodes.push(newEpisode)
      }

      processed.push(entry.id)
    } catch (e: any) {
      log.err(`  failed: ${e.message}`)
      failed.push(entry.id)
    }
  }

  // remove processed from queue
  queueFile.queue = queueFile.queue.filter(e => !processed.includes(e.id))
  writeYaml(QUEUE_PATH, queueFile)
  writeYaml(EPISODES_PATH, episodesFile)

  // cleanup temp-vtt if empty
  try {
    if (existsSync(TEMP_DIR)) {
      const fs = await import('node:fs/promises')
      const entries = await fs.readdir(TEMP_DIR)
      if (entries.length === 0) await fs.rmdir(TEMP_DIR)
    }
  } catch {}

  log.ok(`\nProcessed ${processed.length}, failed ${failed.length}, queue left ${queueFile.queue.length}`)
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
