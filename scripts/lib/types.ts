export interface Source {
  id: string
  name: string
  channel: string
  filter_keywords?: string[]
  episode_limit?: number
  auto_tag?: boolean
  color?: string
  description?: string
}

export interface SourcesFile {
  sources: Source[]
}

export type EpisodeStatus =
  | 'queued'
  | 'downloading'
  | 'downloaded'
  | 'generating'
  | 'generated'
  | 'failed'

export interface Episode {
  id: string
  source: string
  title: string
  url: string
  published?: string
  duration?: string
  tags?: string[]
  status: EpisodeStatus
  slides_path?: string
  error?: string
}

export interface EpisodesFile {
  episodes: Episode[]
}

export interface QueueEntry {
  id: string
  source: string
  title: string
  url: string
  uploadDate?: string
}

export interface QueueFile {
  queue: QueueEntry[]
}
