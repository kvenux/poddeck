// Read .jsonl files in data/scan-cache/ and compute episode counts
// at multiple duration thresholds. Re-runnable; no API calls.
//
// Usage:
//   pnpm tsx scripts/analyze-scan.ts                    # default thresholds 30/60/90 min
//   pnpm tsx scripts/analyze-scan.ts --thresholds=20,30,45,60,90

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { resolve, join, basename } from 'node:path'

const ROOT = process.cwd()
const CACHE = resolve(ROOT, 'data/scan-cache')

const thresholdsArg = process.argv.find(a => a.startsWith('--thresholds='))?.split('=')[1]
const thresholds = (thresholdsArg ? thresholdsArg.split(',').map(Number) : [30, 60, 90])
  .map(n => n * 60) // → seconds

interface Entry {
  id: string
  title: string
  duration: number
  upload_date: string
  source: string
}

function loadAll(): Entry[] {
  if (!existsSync(CACHE)) {
    console.error(`No scan cache at ${CACHE}. Run scan first.`)
    process.exit(1)
  }
  const files = readdirSync(CACHE).filter(f => f.endsWith('.jsonl'))
  const all: Entry[] = []
  for (const f of files) {
    const source = basename(f, '.jsonl')
    const lines = readFileSync(join(CACHE, f), 'utf-8').split('\n').filter(Boolean)
    for (const line of lines) {
      try {
        const j = JSON.parse(line)
        if (typeof j.duration !== 'number') continue
        all.push({
          id: j.id,
          title: j.title || '(no title)',
          duration: j.duration,
          upload_date: j.upload_date || '',
          source,
        })
      } catch (e) {
        // skip non-JSON lines
      }
    }
  }
  return all
}

function fmt(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  return h > 0 ? `${h}h${m}m` : `${m}m`
}

function pad(s: string, w: number): string {
  return s.length >= w ? s : s + ' '.repeat(w - s.length)
}

function main() {
  const all = loadAll()
  const sources = [...new Set(all.map(e => e.source))].sort()

  console.log(`\nLoaded ${all.length} entries from ${sources.length} sources\n`)

  // Header
  const cols = ['source', 'total', ...thresholds.map(t => `≥${t / 60}m`)]
  const widths = [14, 6, ...thresholds.map(() => 6)]
  console.log(cols.map((c, i) => pad(c, widths[i])).join(' │ '))
  console.log(widths.map(w => '─'.repeat(w)).join('─┼─'))

  let totals = new Array(thresholds.length + 1).fill(0)
  for (const source of sources) {
    const entries = all.filter(e => e.source === source)
    const counts = thresholds.map(t => entries.filter(e => e.duration >= t).length)
    totals[0] += entries.length
    counts.forEach((c, i) => totals[i + 1] += c)
    const row = [source, String(entries.length), ...counts.map(String)]
    console.log(row.map((c, i) => pad(c, widths[i])).join(' │ '))
  }
  console.log(widths.map(w => '─'.repeat(w)).join('─┼─'))
  const totalRow = ['TOTAL', String(totals[0]), ...totals.slice(1).map(String)]
  console.log(totalRow.map((c, i) => pad(c, widths[i])).join(' │ '))

  // Bonus: distribution per source
  console.log('\nDuration distribution (≥30 min, longest 5):')
  for (const source of sources) {
    const longest = all.filter(e => e.source === source && e.duration >= 1800)
      .sort((a, b) => b.duration - a.duration).slice(0, 5)
    if (longest.length === 0) continue
    console.log(`\n  ${source}:`)
    for (const ep of longest) {
      console.log(`    ${fmt(ep.duration).padStart(6)}  ${ep.upload_date}  ${ep.title.slice(0, 65)}`)
    }
  }
}

main()
