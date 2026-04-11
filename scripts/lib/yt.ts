import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { glob } from 'node:fs/promises'
import { run } from './spawn.ts'
import { log } from './log.ts'

export interface VideoEntry {
  id: string
  title: string
  uploadDate?: string
  duration?: string
  url: string
}

/**
 * List most recent N videos from a YouTube channel/playlist URL.
 * Uses --flat-playlist for speed (no per-video metadata).
 */
export async function listChannelVideos(channelUrl: string, limit = 20): Promise<VideoEntry[]> {
  log.raw(`yt-dlp --flat-playlist ${channelUrl} (limit ${limit})`)
  // Use tab as separator — not present in YouTube titles, unlike `|`
  const { stdout } = await run('yt-dlp', [
    '--flat-playlist',
    '--print', '%(id)s\t%(title)s\t%(upload_date)s',
    '--playlist-end', String(limit),
    channelUrl,
  ], { reject: false })

  const lines = stdout.split('\n').filter(l => l.trim())
  return lines.slice(0, limit).map(line => {
    const [id, title, uploadDate] = line.split('\t')
    return {
      id,
      title: (title || '(unknown)').trim(),
      uploadDate: uploadDate && uploadDate !== 'NA' ? uploadDate : undefined,
      url: `https://youtube.com/watch?v=${id}`,
    }
  })
}

/**
 * Download auto-generated English subtitles for a video.
 * Returns the path to the downloaded VTT file.
 */
export async function downloadAutoSubs(videoId: string, outDir: string): Promise<string> {
  const url = `https://youtube.com/watch?v=${videoId}`
  log.raw(`yt-dlp --write-auto-sub --skip-download ${videoId}`)

  await run('yt-dlp', [
    '--write-auto-sub',
    '--sub-lang', 'en-orig,en',
    '--skip-download',
    '--sub-format', 'vtt',
    '-o', `${outDir}/${videoId}.%(ext)s`,
    url,
  ], { reject: true })

  // find the resulting vtt file
  const candidates = []
  for await (const f of glob(`${outDir}/${videoId}*.vtt`)) candidates.push(f)
  if (candidates.length === 0) {
    throw new Error(`No VTT file produced for ${videoId}`)
  }
  // prefer en-orig over en
  const vtt = candidates.find(f => f.includes('.en-orig.vtt')) || candidates[0]
  return resolve(vtt)
}

/**
 * Clean a VTT subtitle file into plain text.
 * Removes timestamps, positioning tags, repeated lines.
 */
export function cleanVtt(vttPath: string): string {
  const content = readFileSync(vttPath, 'utf-8')
  const lines = content.split('\n')
  const seen = new Set<string>()
  const out: string[] = []

  for (let line of lines) {
    line = line.trim()
    if (!line) continue
    if (line === 'WEBVTT') continue
    if (line.startsWith('Kind:') || line.startsWith('Language:')) continue
    if (/^\d+$/.test(line)) continue
    if (/^\d{2}:\d{2}/.test(line)) continue
    // strip in-line tags like <00:00:00.080><c>
    const clean = line.replace(/<[^>]+>/g, '').trim()
    if (!clean) continue
    if (seen.has(clean)) continue
    seen.add(clean)
    out.push(clean)
  }

  return out.join('\n')
}
