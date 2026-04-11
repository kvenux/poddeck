// Load sources.yml + episodes.yml + each episode's meta.yml
// Returns structured data for landing page consumption.

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { parse } from 'yaml'

const PROJECT_ROOT = resolve(process.cwd(), '..')   // landing/ → poddeck/

export interface Source {
  id: string
  name: string
  channel: string
  filter_keywords?: string[]
  color?: string
  description?: string
}

export interface EpisodeMeta {
  id: string
  source: string
  title: string
  guest?: string
  guest_role?: string
  published?: string
  duration?: string
  url: string
  thumbnail?: string
  status: 'generated' | 'downloaded' | 'queued' | string
  tags?: string[]
  summary?: string
  core_ideas?: string[]
  base?: string
}

export interface EpisodeWithSource extends EpisodeMeta {
  sourceRef: Source
}

function readYaml<T>(path: string, fallback?: T): T {
  if (!existsSync(path)) {
    if (fallback !== undefined) return fallback
    throw new Error(`Missing ${path}`)
  }
  return parse(readFileSync(path, 'utf-8')) as T
}

export function loadSources(): Source[] {
  const { sources } = readYaml<{ sources: Source[] }>(
    resolve(PROJECT_ROOT, 'sources.yml'),
  )
  return sources
}

export function loadEpisodes(): EpisodeWithSource[] {
  const sources = loadSources()
  const sourceMap = Object.fromEntries(sources.map(s => [s.id, s]))

  // Prefer per-episode meta.yml (has richest info). Fall back to episodes.yml.
  const episodesDir = resolve(PROJECT_ROOT, 'episodes')
  const results: EpisodeWithSource[] = []

  // Collect metas from episodes/<id>/meta.yml
  const seenIds = new Set<string>()
  if (existsSync(episodesDir)) {
    for (const entry of readdirSync(episodesDir)) {
      const epDir = join(episodesDir, entry)
      if (!statSync(epDir).isDirectory()) continue
      const metaPath = join(epDir, 'meta.yml')
      if (!existsSync(metaPath)) continue
      const meta = readYaml<EpisodeMeta>(metaPath)
      meta.base = meta.base || `/episodes/${meta.id}/`
      const sourceRef = sourceMap[meta.source]
      if (!sourceRef) continue
      results.push({ ...meta, sourceRef })
      seenIds.add(meta.id)
    }
  }

  // Also include entries from episodes.yml that don't have per-episode meta (status: downloaded etc)
  const { episodes } = readYaml<{ episodes: EpisodeMeta[] }>(
    resolve(PROJECT_ROOT, 'episodes.yml'),
    { episodes: [] },
  )
  for (const ep of episodes) {
    if (seenIds.has(ep.id)) continue
    const sourceRef = sourceMap[ep.source]
    if (!sourceRef) continue
    results.push({
      ...ep,
      base: ep.base || `/episodes/${ep.id}/`,
      sourceRef,
      thumbnail: ep.thumbnail || `https://img.youtube.com/vi/${ep.id}/hqdefault.jpg`,
    })
  }

  // Sort: generated first, then downloaded, then other. Within status, by title.
  const statusOrder: Record<string, number> = {
    generated: 0,
    downloaded: 1,
    queued: 2,
    failed: 3,
  }
  results.sort((a, b) => {
    const sa = statusOrder[a.status] ?? 99
    const sb = statusOrder[b.status] ?? 99
    if (sa !== sb) return sa - sb
    return a.title.localeCompare(b.title)
  })

  return results
}

export function collectTags(episodes: EpisodeWithSource[]): { tag: string; count: number }[] {
  const counts: Record<string, number> = {}
  for (const ep of episodes) {
    for (const tag of ep.tags || []) {
      counts[tag] = (counts[tag] || 0) + 1
    }
  }
  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}
