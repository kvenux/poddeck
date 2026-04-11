// Scan all sources in sources.yml, find new episodes, apply keyword filter,
// write to data/queue.yml.
//
// Usage: pnpm run discover [--limit N]

import { resolve } from 'node:path'
import { readYaml, writeYaml } from './lib/yaml-io.ts'
import { listChannelVideos } from './lib/yt.ts'
import { log } from './lib/log.ts'
import type { SourcesFile, EpisodesFile, QueueFile, QueueEntry } from './lib/types.ts'

const ROOT = process.cwd()
const SOURCES_PATH = resolve(ROOT, 'sources.yml')
const EPISODES_PATH = resolve(ROOT, 'episodes.yml')
const QUEUE_PATH = resolve(ROOT, 'data/queue.yml')

const LIMIT = Number(process.argv.find(a => a.startsWith('--limit='))?.split('=')[1] ?? 15)

async function main() {
  log.step(`Discover — scanning sources (limit ${LIMIT} per source)`)

  const sourcesFile = readYaml<SourcesFile>(SOURCES_PATH)
  const episodesFile = readYaml<EpisodesFile>(EPISODES_PATH, { episodes: [] })
  const existingIds = new Set(episodesFile.episodes.map(e => e.id))

  const newEntries: QueueEntry[] = []

  for (const source of sourcesFile.sources) {
    log.info(`${source.name} (${source.id})`)
    let videos
    try {
      videos = await listChannelVideos(source.channel, LIMIT)
    } catch (e: any) {
      log.err(`  failed to list ${source.channel}: ${e.message}`)
      continue
    }
    log.raw(`found ${videos.length} recent videos`)

    const keywords = source.filter_keywords ?? []
    const keywordPatterns = keywords.map(
      k => new RegExp(`\\b${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i'),
    )
    const perSourceLimit = source.episode_limit ?? 2
    let accepted = 0

    for (const video of videos) {
      if (accepted >= perSourceLimit) break
      if (existingIds.has(video.id)) continue

      if (keywordPatterns.length > 0) {
        const matched = keywordPatterns.some(re => re.test(video.title))
        if (!matched) continue
      }

      newEntries.push({
        id: video.id,
        source: source.id,
        title: video.title,
        url: video.url,
        uploadDate: video.uploadDate,
      })
      accepted++
      log.ok(`  queued ${video.id} — ${video.title.slice(0, 60)}`)
    }
  }

  if (newEntries.length === 0) {
    log.info('No new episodes matched filters. Queue unchanged.')
    return
  }

  // merge with existing queue (de-dup by id)
  const existingQueue = readYaml<QueueFile>(QUEUE_PATH, { queue: [] })
  const existingQueueIds = new Set(existingQueue.queue.map(q => q.id))
  const mergedQueue = [
    ...existingQueue.queue,
    ...newEntries.filter(e => !existingQueueIds.has(e.id)),
  ]

  writeYaml(QUEUE_PATH, { queue: mergedQueue })
  log.ok(`\nWrote ${mergedQueue.length} entries to ${QUEUE_PATH} (+${newEntries.length} new)`)
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
