import { existsSync, readFileSync, writeFileSync, mkdirSync, cpSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { EpisodeMeta } from './types.ts'

const HERE = dirname(fileURLToPath(import.meta.url))
const DECK_STAGE_JS = readFileSync(join(HERE, 'deck-stage.js'), 'utf-8').replace(/<\/script/gi, '<\\/script')

interface ThemeSpec {
  id: string
  label: string
  bg: string
  card: string
  tint: string
  ink: string
  muted: string
  accent: string
  warn: string
  line: string
  outerBg: string
  serifTitle: boolean
  fallbackCover: string
}

const THEMES: Record<string, ThemeSpec> = {
  'ai-tech': {
    id: 'ai-tech',
    label: 'AI & TECH',
    bg: '#F5F6F8',
    card: '#FFFFFF',
    tint: '#EAF4F1',
    ink: '#111318',
    muted: '#525866',
    accent: '#007A5E',
    warn: '#C93022',
    line: 'rgba(17,19,24,0.12)',
    outerBg: '#E3E6EC',
    serifTitle: false,
    fallbackCover: 'ai-tech.jpg',
  },
  hardware: {
    id: 'hardware',
    label: 'HARDWARE & ROBOTICS',
    bg: '#F1F0EC',
    card: '#FFFFFF',
    tint: '#FBF0EC',
    ink: '#16181C',
    muted: '#5A606B',
    accent: '#E84C22',
    warn: '#B92B1C',
    line: 'rgba(22,24,28,0.14)',
    outerBg: '#DFDDD6',
    serifTitle: false,
    fallbackCover: 'hardware.jpg',
  },
  science: {
    id: 'science',
    label: 'SCIENCE & RESEARCH',
    bg: '#F6F2E9',
    card: '#FCF9F2',
    tint: '#ECE6D8',
    ink: '#181A1F',
    muted: '#555D6B',
    accent: '#1B4B7A',
    warn: '#9E322B',
    line: 'rgba(24,26,31,0.14)',
    outerBg: '#E6E0D3',
    serifTitle: true,
    fallbackCover: 'science.jpg',
  },
  business: {
    id: 'business',
    label: 'BUSINESS & STRATEGY',
    bg: '#F4F2EE',
    card: '#FFFFFF',
    tint: '#F5ECE9',
    ink: '#18181B',
    muted: '#57534E',
    accent: '#9E2A2B',
    warn: '#B45309',
    line: 'rgba(24,24,27,0.13)',
    outerBg: '#E4E0D8',
    serifTitle: true,
    fallbackCover: 'science.jpg',
  },
  'mind-body': {
    id: 'mind-body',
    label: 'MIND & BODY',
    bg: '#F3F5F2',
    card: '#FFFFFF',
    tint: '#E7F0EA',
    ink: '#16211B',
    muted: '#4E5D54',
    accent: '#246B52',
    warn: '#B4432C',
    line: 'rgba(22,33,27,0.13)',
    outerBg: '#E0E6DF',
    serifTitle: true,
    fallbackCover: 'science.jpg',
  },
  culture: {
    id: 'culture',
    label: 'CULTURE & HISTORY',
    bg: '#F7F3EB',
    card: '#FDFBF6',
    tint: '#EFE7D6',
    ink: '#1D1B18',
    muted: '#5C564C',
    accent: '#9C6A22',
    warn: '#9E322B',
    line: 'rgba(29,27,24,0.14)',
    outerBg: '#E8E0D0',
    serifTitle: true,
    fallbackCover: 'science.jpg',
  },
}

const coverCache = new Map<string, string>()
function getFallbackCoverDataUri(filename: string): string {
  if (coverCache.has(filename)) return coverCache.get(filename)!
  const p = join(HERE, 'huashu-covers', filename)
  if (!existsSync(p)) return ''
  const uri = `data:image/jpeg;base64,${readFileSync(p).toString('base64')}`
  coverCache.set(filename, uri)
  return uri
}

function pickTheme(meta: EpisodeMeta): ThemeSpec {
  const tags = new Set((meta.tags || []).map((t) => t.toLowerCase()))
  if (tags.has('robotics') || tags.has('hardware') || tags.has('chips')) {
    return THEMES.hardware
  }
  const cat = (meta.category || '').toLowerCase()
  if (cat === 'science') return THEMES.science
  if (cat === 'business') return THEMES.business
  if (cat === 'mind-body') return THEMES['mind-body']
  if (cat === 'culture') return THEMES.culture
  return THEMES['ai-tech']
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// Convert Excalidraw JSON into a clean, theme-matched Huashu-Design light SVG
function renderExcalidrawToSvg(filePath: string, theme: ThemeSpec): string {
  if (!existsSync(filePath)) return ''
  let data: { elements?: any[] }
  try {
    data = JSON.parse(readFileSync(filePath, 'utf-8'))
  } catch {
    return ''
  }
  const elements = (data.elements || []).filter((el) => el && !el.isDeleted)
  if (elements.length === 0) return ''

  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  for (const el of elements) {
    const x = Number(el.x) || 0
    const y = Number(el.y) || 0
    const w = Number(el.width) || 0
    const h = Number(el.height) || 0
    if (Array.isArray(el.points) && el.points.length > 0) {
      for (const [px, py] of el.points) {
        minX = Math.min(minX, x + px)
        minY = Math.min(minY, y + py)
        maxX = Math.max(maxX, x + px)
        maxY = Math.max(maxY, y + py)
      }
    } else {
      minX = Math.min(minX, x, x + w)
      minY = Math.min(minY, y, y + h)
      maxX = Math.max(maxX, x, x + w)
      maxY = Math.max(maxY, y, y + h)
    }
  }

  if (!Number.isFinite(minX)) return ''
  const pad = 36
  const vx = Math.floor(minX - pad)
  const vy = Math.floor(minY - pad)
  const vw = Math.max(200, Math.ceil(maxX - minX + pad * 2))
  const vh = Math.max(140, Math.ceil(maxY - minY + pad * 2))

  // Map Excalidraw rainbow fills onto unified light theme tokens
  const mapFill = (bg?: string): string => {
    if (!bg || bg === 'transparent') return 'none'
    const low = bg.toLowerCase()
    if (low === '#ffffff' || low === '#fff') return theme.card
    if (low.includes('ff') && (low.includes('c9') || low.includes('a8') || low.includes('ec'))) {
      return '#FDF2F0'
    }
    if (low.includes('b2') || low.includes('d3') || low.includes('a5') || low.includes('ee') || low.includes('e5')) {
      return theme.tint
    }
    return theme.card
  }

  const mapStroke = (st?: string): string => {
    if (!st || st === 'transparent') return 'none'
    const low = st.toLowerCase()
    if (low === '#1e1e1e' || low === '#000000' || low === '#333333' || low === '#495057') return theme.ink
    if (low.includes('e03131') || low.includes('c92a2a') || low.includes('f03e3e') || low.includes('d9480f')) return theme.warn
    return theme.accent
  }

  const markerId = `arr-${Math.abs(vx * 31 + vy * 17 + elements.length)}`
  const parts: string[] = [
    `<svg viewBox="${vx} ${vy} ${vw} ${vh}" xmlns="http://www.w3.org/2000/svg" class="hs-excalidraw-svg">`,
    `<defs><marker id="${markerId}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 1 1 L 9 5 L 1 9 z" fill="${theme.accent}"/></marker></defs>`,
    `<rect x="${vx}" y="${vy}" width="${vw}" height="${vh}" fill="${theme.card}" stroke="${theme.line}" stroke-width="1.5"/>`,
  ]

  // Render shapes first, then lines/arrows, then text on top
  const shapes = elements.filter((e) => e.type === 'rectangle' || e.type === 'ellipse' || e.type === 'diamond')
  const connectors = elements.filter((e) => e.type === 'arrow' || e.type === 'line')
  const texts = elements.filter((e) => e.type === 'text')

  for (const el of shapes) {
    const x = Number(el.x) || 0
    const y = Number(el.y) || 0
    const w = Math.abs(Number(el.width) || 0)
    const h = Math.abs(Number(el.height) || 0)
    const fill = mapFill(el.backgroundColor)
    const stroke = mapStroke(el.strokeColor)
    const sw = Math.max(1.5, Math.min(3, Number(el.strokeWidth) || 2))
    const dash = el.strokeStyle === 'dashed' ? ' stroke-dasharray="8 6"' : el.strokeStyle === 'dotted' ? ' stroke-dasharray="3 4"' : ''
    if (el.type === 'rectangle') {
      const rx = el.roundness ? 6 : 0
      parts.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"${dash}/>`)
    } else if (el.type === 'ellipse') {
      parts.push(`<ellipse cx="${x + w / 2}" cy="${y + h / 2}" rx="${w / 2}" ry="${h / 2}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"${dash}/>`)
    } else if (el.type === 'diamond') {
      const pts = `${x + w / 2},${y} ${x + w},${y + h / 2} ${x + w / 2},${y + h} ${x},${y + h / 2}`
      parts.push(`<polygon points="${pts}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"${dash}/>`)
    }
  }

  for (const el of connectors) {
    if (!Array.isArray(el.points) || el.points.length < 2) continue
    const x = Number(el.x) || 0
    const y = Number(el.y) || 0
    const d = el.points
      .map(([px, py]: [number, number], idx: number) => `${idx === 0 ? 'M' : 'L'} ${(x + px).toFixed(1)} ${(y + py).toFixed(1)}`)
      .join(' ')
    const stroke = mapStroke(el.strokeColor)
    const sw = Math.max(1.8, Math.min(3, Number(el.strokeWidth) || 2))
    const dash = el.strokeStyle === 'dashed' ? ' stroke-dasharray="8 6"' : ''
    const endMark = el.type === 'arrow' && el.endArrowhead !== null ? ` marker-end="url(#${markerId})"` : ''
    const startMark = el.type === 'arrow' && el.startArrowhead ? ` marker-start="url(#${markerId})"` : ''
    parts.push(`<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"${dash}${startMark}${endMark}/>`)
  }

  for (const el of texts) {
    const rawText = String(el.text || el.originalText || '').trim()
    if (!rawText) continue
    const x = Number(el.x) || 0
    const y = Number(el.y) || 0
    const w = Number(el.width) || 120
    const h = Number(el.height) || 24
    const fs = Math.max(14, Math.min(26, Number(el.fontSize) || 17))
    const align = el.textAlign || 'left'
    const anchor = align === 'center' ? 'middle' : align === 'right' ? 'end' : 'start'
    const tx = align === 'center' ? x + w / 2 : align === 'right' ? x + w : x
    const lines = rawText.split(/\r?\n/)
    const lh = fs * 1.32
    const totalH = lines.length * lh
    const startY = y + (h - totalH) / 2 + fs * 0.9
    const fill = el.strokeColor && el.strokeColor.toLowerCase() !== '#1e1e1e' ? mapStroke(el.strokeColor) : theme.ink
    const tspans = lines
      .map((line, i) => `<tspan x="${tx.toFixed(1)}" dy="${i === 0 ? 0 : lh.toFixed(1)}">${escapeHtml(line)}</tspan>`)
      .join('')
    parts.push(
      `<text x="${tx.toFixed(1)}" y="${startY.toFixed(1)}" font-family="Inter, Noto Sans SC, sans-serif" font-size="${fs}" font-weight="${fs >= 20 ? 700 : 500}" fill="${fill}" text-anchor="${anchor}">${tspans}</text>`
    )
  }

  parts.push('</svg>')
  return parts.join('')
}

interface RawSlide {
  layout?: string
  raw: string
}

function splitSlidevMarkdown(md: string): RawSlide[] {
  const lines = md.split(/\r?\n/)
  const slides: RawSlide[] = []
  let i = 0

  // Skip initial deck frontmatter
  if (lines[0]?.trim() === '---') {
    i = 1
    while (i < lines.length && lines[i].trim() !== '---') i++
    i++
  }

  let buf: string[] = []
  let currentLayout: string | undefined

  const flush = () => {
    const joined = buf.join('\n').trim()
    if (joined) slides.push({ layout: currentLayout, raw: joined })
    buf = []
    currentLayout = undefined
  }

  while (i < lines.length) {
    if (lines[i].trim() === '---') {
      // Check if next few lines are per-slide frontmatter
      let j = i + 1
      let fmEnd = -1
      let isFm = false
      while (j < lines.length && j < i + 10) {
        const t = lines[j].trim()
        if (t === '---') {
          fmEnd = j
          break
        }
        if (/^(layout|class|transition|clicks|hide|background):/.test(t)) {
          isFm = true
        }
        if (t !== '' && !/^[a-zA-Z_-]+:/.test(t)) break
        j++
      }
      flush()
      if (isFm && fmEnd !== -1) {
        const fmLines = lines.slice(i + 1, fmEnd)
        for (const fl of fmLines) {
          const m = fl.match(/^layout:\s*(\S+)/)
          if (m) currentLayout = m[1].trim()
        }
        i = fmEnd + 1
        continue
      }
      i++
      continue
    }
    buf.push(lines[i])
    i++
  }
  flush()
  return slides
}

function stripLeadingEmoji(text: string): string {
  return text.replace(/^[\p{Extended_Pictographic}\uFE0F\u200D\s]+/u, '').trim()
}

function renderInlineMarkdown(s: string): string {
  // Preserve inline HTML tags while converting markdown bold/italic/code/links
  let out = s
  out = out.replace(/`([^`]+)`/g, '<code class="hs-code">$1</code>')
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  out = out.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>')
  out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
  return out
}

// Transform Slidev rainbow Tailwind classes into clean Huashu-Design classes
function sanitizeClassAttr(cls: string): string {
  const tokens = cls.split(/\s+/).filter(Boolean)
  const out: string[] = []
  const hasRainbowBg = tokens.some((t) => /^bg-(blue|green|red|orange|purple|yellow|amber|indigo|pink|teal|cyan|emerald|rose|violet)-(50|100|200)$/.test(t))
  const hasBorderAccent = tokens.some((t) => /^border-(l-4|2|blue|green|red|orange|purple|yellow|amber|indigo|pink)/.test(t))
  const isRed = tokens.some((t) => /red|rose/.test(t))
  const isGreenOrBlue = tokens.some((t) => /green|emerald|teal|blue/.test(t))
  const isItalic = tokens.includes('italic')

  if (hasRainbowBg || hasBorderAccent) {
    if (isItalic && !tokens.some((t) => t.startsWith('grid'))) {
      out.push(isRed ? 'hs-quote hs-quote-warn' : 'hs-quote')
    } else if (isRed) {
      out.push('hs-card hs-card-warn')
    } else if (isGreenOrBlue) {
      out.push('hs-card hs-card-accent')
    } else {
      out.push('hs-card')
    }
  }

  for (const t of tokens) {
    if (t === 'grid') out.push('hs-grid')
    else if (t === 'grid-cols-1') out.push('hs-cols-1')
    else if (t === 'grid-cols-2') out.push('hs-cols-2')
    else if (t === 'grid-cols-3') out.push('hs-cols-3')
    else if (t === 'grid-cols-4') out.push('hs-cols-4')
    else if (t === 'text-center') out.push('hs-center')
    else if (t === 'italic') out.push('hs-italic')
    else if (t === 'font-bold') out.push('hs-bold')
    else if (/^space-y-/.test(t)) out.push('hs-stack')
    else if (/^mt-(6|8|10|12)/.test(t)) out.push('hs-mt-lg')
    else if (/^mt-(2|3|4|5)/.test(t)) out.push('hs-mt-sm')
    else if (/^mb-/.test(t)) out.push('hs-mb-sm')
    else if (/^text-(4xl|5xl|6xl)/.test(t)) out.push('hs-stat-xl')
    else if (/^text-(2xl|3xl)/.test(t)) out.push('hs-stat-lg')
    else if (/^opacity-(50|60|70)/.test(t)) out.push('hs-muted')
  }
  return Array.from(new Set(out)).join(' ')
}

function renderMarkdownBlock(md: string, epDir: string, theme: ThemeSpec): string {
  // 1. Replace <Excalidraw ... /> with inline theme-matched SVG
  let text = md.replace(/<Excalidraw[\s\S]*?\/>/g, (tag) => {
    const m = tag.match(/drawFilePath=["']([^"']+)["']/)
    if (!m) return ''
    const rel = m[1].replace(/^\.\//, '')
    const full = join(epDir, 'public', rel)
    const svg = renderExcalidrawToSvg(full, theme)
    return svg ? `<div class="hs-diagram">${svg}</div>` : ''
  })

  // 2. Sanitize <div class="..."> and <span class="...">
  text = text.replace(/<(div|span|p)\s+class="([^"]*)"([^>]*)>/g, (_m, tag, cls, rest) => {
    const clean = sanitizeClassAttr(cls)
    return clean ? `<${tag} class="${clean}"${rest}>` : `<${tag}${rest}>`
  })

  // 3. Process line by line for headings, lists, blockquotes, tables, paragraphs
  const lines = text.split(/\r?\n/)
  const out: string[] = []
  let inUl = false
  let inTable = false
  let tableHeaderDone = false

  const closeLists = () => {
    if (inUl) { out.push('</ul>'); inUl = false }
    if (inTable) { out.push('</tbody></table>'); inTable = false; tableHeaderDone = false }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    if (!trimmed) {
      closeLists()
      continue
    }

    // HTML tag lines pass through directly
    if (/^<\/?(div|section|svg|img|table|tr|td|th|thead|tbody|figure|figcaption|br|hr|style|script)\b/i.test(trimmed)) {
      closeLists()
      out.push(trimmed)
      continue
    }

    // Markdown table
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (inUl) { out.push('</ul>'); inUl = false }
      const cells = trimmed.slice(1, -1).split('|').map((c) => c.trim())
      if (cells.every((c) => /^[-:]+$/.test(c))) continue
      if (!inTable) {
        inTable = true
        tableHeaderDone = false
        out.push('<table class="hs-table"><thead><tr>' + cells.map((c) => `<th>${renderInlineMarkdown(c)}</th>`).join('') + '</tr></thead><tbody>')
        tableHeaderDone = true
      } else if (tableHeaderDone) {
        out.push('<tr>' + cells.map((c) => `<td>${renderInlineMarkdown(c)}</td>`).join('') + '</tr>')
      }
      continue
    } else if (inTable) {
      out.push('</tbody></table>')
      inTable = false
      tableHeaderDone = false
    }

    // Headings
    const hMatch = trimmed.match(/^(#{1,4})\s+(.+)$/)
    if (hMatch) {
      closeLists()
      const level = hMatch[1].length
      const content = renderInlineMarkdown(stripLeadingEmoji(hMatch[2]))
      if (level === 1) out.push(`<h2 class="hs-h1">${content}</h2>`)
      else if (level === 2) out.push(`<h3 class="hs-h2">${content}</h3>`)
      else out.push(`<h4 class="hs-h3">${content}</h4>`)
      continue
    }

    // Blockquote
    if (trimmed.startsWith('>')) {
      closeLists()
      const q = renderInlineMarkdown(trimmed.replace(/^>\s*/, ''))
      out.push(`<blockquote class="hs-quote">${q}</blockquote>`)
      continue
    }

    // Unordered list
    const liMatch = trimmed.match(/^[-*]\s+(.+)$/)
    if (liMatch) {
      if (!inUl) { out.push('<ul class="hs-list">'); inUl = true }
      out.push(`<li>${renderInlineMarkdown(liMatch[1])}</li>`)
      continue
    }

    // Regular paragraph
    closeLists()
    out.push(`<p class="hs-p">${renderInlineMarkdown(trimmed)}</p>`)
  }
  closeLists()
  return out.join('\n')
}

function stripHtmlTags(s: string): string {
  return s.replace(/<br\s*\/?>/gi, ' · ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

function buildCoverSlide(meta: EpisodeMeta, firstSlideRaw: string, theme: ThemeSpec): string {
  const title = stripHtmlTags(stripLeadingEmoji(meta.title || ''))
  const lines = firstSlideRaw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
  const rawH1 = lines.find((l) => l.startsWith('# '))?.replace(/^#\s+/, '') || title
  const h1 = stripHtmlTags(stripLeadingEmoji(rawH1))
  const rawSub = lines.find((l) => l.startsWith('## ') || l.startsWith('### '))?.replace(/^#{2,3}\s+/, '')
    || (meta.summary ? meta.summary.split(/[。\n]/)[0].trim() : '')
  const subtitle = stripHtmlTags(rawSub)
  const fallbackUri = getFallbackCoverDataUri(theme.fallbackCover)
  const thumb = meta.thumbnail || fallbackUri
  const onErrorAttr = fallbackUri ? ` onerror="this.onerror=null;this.src='${fallbackUri}'"` : ''
  const guestLine = [meta.guest, meta.guest_role].filter(Boolean).join(' · ')
  const pubLine = [meta.source?.toUpperCase(), meta.published].filter(Boolean).join(' · ')

  return `
<section>
  <div class="slide slide-cover">
    <div class="masthead">
      <span>${escapeHtml(pubLine || 'PODDECK EDITORIAL')}</span>
      <span class="topic">${escapeHtml(theme.label)}</span>
    </div>
    <div class="cover-split">
      <div class="cover-text">
        <div class="kicker">${escapeHtml(meta.source ? meta.source.toUpperCase() + ' · EPISODE DECK' : 'PODDECK MONOGRAPH')}</div>
        <h1 class="cover-h1">${escapeHtml(stripLeadingEmoji(h1))}</h1>
        ${subtitle ? `<p class="cover-sub">${escapeHtml(subtitle)}</p>` : ''}
        <div class="cover-meta">
          ${guestLine ? `<div class="cover-guest">${escapeHtml(guestLine)}</div>` : ''}
          ${meta.summary ? `<p class="cover-summary">${escapeHtml(meta.summary.trim().slice(0, 180))}${meta.summary.trim().length > 180 ? '…' : ''}</p>` : ''}
        </div>
      </div>
      <div class="cover-visual">
        <div class="cover-plate">
          <img src="${thumb}" alt="${escapeHtml(title)}"${onErrorAttr} />
        </div>
      </div>
    </div>
  </div>
</section>`
}

function buildContentSlide(slide: RawSlide, idx: number, meta: EpisodeMeta, epDir: string, theme: ThemeSpec): string {
  if (slide.layout === 'end') {
    const html = renderMarkdownBlock(slide.raw, epDir, theme)
    return `
<section>
  <div class="slide slide-end">
    <div class="end-inner">
      <div class="kicker">${escapeHtml(meta.guest || meta.source?.toUpperCase() || 'PODDECK')}</div>
      ${html}
      <div class="end-rule"></div>
    </div>
  </div>
</section>`
  }

  // Extract first H1 as slide header so two-cols splits align cleanly under the title
  const raw = slide.raw
  const hasTwoCols = slide.layout === 'two-cols' || raw.includes('::right::')
  const charCount = raw.replace(/<[^>]+>/g, '').length
  const denseClass = charCount > 520 ? ' is-dense' : ''

  let bodyHtml = ''
  if (hasTwoCols && raw.includes('::right::')) {
    const [leftRaw, rightRaw] = raw.split('::right::')
    const leftHtml = renderMarkdownBlock(leftRaw, epDir, theme)
    const rightHtml = renderMarkdownBlock(rightRaw, epDir, theme)
    bodyHtml = `<div class="two-cols"><div class="col-left">${leftHtml}</div><div class="col-right">${rightHtml}</div></div>`
  } else {
    bodyHtml = `<div class="single-col">${renderMarkdownBlock(raw, epDir, theme)}</div>`
  }

  return `
<section>
  <div class="slide${denseClass}">
    <div class="masthead">
      <span>${escapeHtml(stripLeadingEmoji(meta.title || meta.id).slice(0, 64))}</span>
      <span class="topic">${escapeHtml(theme.label)}</span>
    </div>
    <div class="slide-body">
      ${bodyHtml}
    </div>
  </div>
</section>`
}

export function injectBackHomeLink(html: string, siteBase: string): string {
  if (html.includes('poddeck-home-pill')) return html
  const pill = `<a href="${siteBase}" class="poddeck-home-pill" title="返回 PodDeck 首页">← PodDeck</a>
<style>
  .poddeck-home-pill {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 9999;
    padding: 7px 14px;
    border-radius: 999px;
    background: rgba(17, 19, 24, 0.72);
    color: #fff;
    font-family: -apple-system, 'PingFang SC', 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    opacity: 0.65;
    transition: opacity 0.2s, transform 0.2s;
    backdrop-filter: blur(6px);
  }
  .poddeck-home-pill:hover { opacity: 1; transform: translateY(-1px); }
  @media print { .poddeck-home-pill { display: none !important; } }
</style>`
  return html.replace('</body>', `${pill}\n</body>`)
}

export function compileEpisodeToHuashuHtml(epDir: string, meta: EpisodeMeta, siteBase: string): string {
  const slidesPath = join(epDir, 'slides.md')
  const md = readFileSync(slidesPath, 'utf-8')
  const theme = pickTheme(meta)
  const rawSlides = splitSlidevMarkdown(md)

  const sections: string[] = []
  rawSlides.forEach((s, i) => {
    if (i === 0) sections.push(buildCoverSlide(meta, s.raw, theme))
    else sections.push(buildContentSlide(s, i, meta, epDir, theme))
  })

  const titleFont = theme.serifTitle
    ? `'Playfair Display', 'Noto Serif SC', Georgia, 'Songti SC', serif`
    : `'Inter', 'Noto Sans SC', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif`

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(meta.title || meta.id)} · PodDeck</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700;900&family=Noto+Serif+SC:wght@600;700;900&family=Playfair+Display:ital,wght@0,700;1,500&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: ${theme.bg};
    --card: ${theme.card};
    --tint: ${theme.tint};
    --ink: ${theme.ink};
    --muted: ${theme.muted};
    --accent: ${theme.accent};
    --warn: ${theme.warn};
    --line: ${theme.line};
    --title-font: ${titleFont};
    --sans: 'Inter', 'Noto Sans SC', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
    --mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; background: ${theme.outerBg}; overflow: hidden; font-family: var(--sans); }

  deck-stage > section { width: 1920px; height: 1080px; overflow: hidden; position: relative; }
  deck-stage > section.active { display: block; }

  .slide {
    width: 1920px;
    height: 1080px;
    padding: 64px 96px 68px;
    display: flex;
    flex-direction: column;
    background: var(--bg);
    color: var(--ink);
    overflow: hidden;
  }

  .masthead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 18px;
    border-bottom: 1.5px solid var(--ink);
    font-family: var(--mono);
    font-size: 16px;
    letter-spacing: 0.06em;
    color: var(--muted);
    flex-shrink: 0;
  }
  .masthead .topic { color: var(--accent); font-weight: 700; }

  .kicker {
    font-family: var(--mono);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: var(--accent);
    margin-bottom: 16px;
  }

  /* Cover */
  .cover-split {
    flex: 1;
    display: grid;
    grid-template-columns: 1.08fr 0.92fr;
    gap: 64px;
    align-items: center;
    min-height: 0;
  }
  .cover-h1 {
    font-family: var(--title-font);
    font-size: 74px;
    font-weight: 900;
    line-height: 1.12;
    letter-spacing: -0.025em;
    color: var(--ink);
  }
  .cover-sub {
    margin-top: 24px;
    font-size: 27px;
    line-height: 1.5;
    color: var(--muted);
  }
  .cover-meta {
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1.5px solid var(--line);
  }
  .cover-guest {
    font-family: var(--mono);
    font-size: 18px;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 12px;
  }
  .cover-summary {
    font-size: 22px;
    line-height: 1.58;
    color: var(--muted);
  }
  .cover-plate {
    width: 100%;
    border: 1px solid var(--line);
    background: var(--card);
    padding: 16px;
    box-shadow: 0 18px 44px rgba(17,19,24,0.06);
  }
  .cover-plate img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
  }

  /* Content layout */
  .slide-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 26px;
    min-height: 0;
    overflow: hidden;
  }
  .single-col {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .two-cols {
    display: grid;
    grid-template-columns: 1.04fr 0.96fr;
    gap: 56px;
    align-items: center;
    height: 100%;
  }
  .col-left, .col-right {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 0;
  }

  /* Typography */
  .hs-h1 {
    font-family: var(--title-font);
    font-size: 52px;
    font-weight: 900;
    line-height: 1.16;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
    color: var(--ink);
  }
  .hs-h2 {
    font-family: var(--title-font);
    font-size: 34px;
    font-weight: 800;
    line-height: 1.25;
    color: var(--ink);
  }
  .hs-h3 {
    font-size: 26px;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 8px;
    color: var(--ink);
  }
  .hs-p {
    font-size: 24px;
    line-height: 1.56;
    color: var(--ink);
  }
  .hs-muted { color: var(--muted); font-size: 21px; }
  .hs-italic { font-style: italic; }
  .hs-bold { font-weight: 700; }
  .hs-center { text-align: center; }
  .hs-code {
    font-family: var(--mono);
    font-size: 0.88em;
    background: var(--tint);
    color: var(--accent);
    padding: 2px 8px;
  }

  /* Lists */
  .hs-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .hs-list li {
    font-size: 24px;
    line-height: 1.52;
    padding-left: 24px;
    position: relative;
  }
  .hs-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 13px;
    width: 8px;
    height: 8px;
    background: var(--accent);
  }

  /* Grids & Clean Architectural Cards (Zero rainbow slop) */
  .hs-grid { display: grid; gap: 24px; align-items: stretch; }
  .hs-cols-1 { grid-template-columns: 1fr; gap: 16px; }
  .hs-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .hs-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .hs-cols-4 { grid-template-columns: repeat(4, 1fr); }
  .hs-stack { display: flex; flex-direction: column; gap: 14px; }
  .hs-mt-sm { margin-top: 10px; }
  .hs-mt-lg { margin-top: 20px; }
  .hs-mb-sm { margin-bottom: 8px; }

  .hs-card {
    background: var(--card);
    border: 1px solid var(--line);
    border-top: 3px solid var(--ink);
    padding: 24px 28px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .hs-card-accent {
    background: var(--card);
    border-top-color: var(--accent);
  }
  .hs-card-warn {
    background: var(--card);
    border-top-color: var(--warn);
  }
  .hs-card .hs-p, .hs-card li { font-size: 22px; line-height: 1.5; color: var(--muted); }
  .hs-card strong { color: var(--ink); }

  .hs-quote {
    background: var(--tint);
    border-left: 4px solid var(--accent);
    padding: 22px 28px;
    font-family: var(--title-font);
    font-size: 25px;
    line-height: 1.48;
    color: var(--ink);
  }
  .hs-quote-warn { border-left-color: var(--warn); }

  .hs-stat-xl { font-size: 76px; font-weight: 900; color: var(--accent); line-height: 1.05; }
  .hs-stat-lg { font-size: 46px; font-weight: 900; color: var(--accent); line-height: 1.1; }

  /* Tables */
  .hs-table { width: 100%; border-collapse: collapse; background: var(--card); border: 1px solid var(--line); }
  .hs-table th {
    text-align: left;
    padding: 16px 20px;
    font-family: var(--mono);
    font-size: 18px;
    border-bottom: 2px solid var(--ink);
    color: var(--accent);
  }
  .hs-table td {
    padding: 14px 20px;
    font-size: 21px;
    border-bottom: 1px solid var(--line);
    color: var(--ink);
  }

  /* Diagrams & Images */
  .hs-diagram { width: 100%; display: flex; justify-content: center; align-items: center; }
  .hs-excalidraw-svg { width: 100%; max-height: 680px; height: auto; display: block; }
  .slide-body img { max-width: 100%; max-height: 640px; object-fit: contain; border: 1px solid var(--line); background: var(--card); }

  /* Dense slide auto-compaction so text never overflows 1080px */
  .is-dense .hs-h1 { font-size: 44px; margin-bottom: 4px; }
  .is-dense .hs-h3 { font-size: 22px; margin-bottom: 4px; }
  .is-dense .hs-p, .is-dense .hs-list li { font-size: 20px; line-height: 1.44; }
  .is-dense .hs-card { padding: 18px 22px; gap: 6px; }
  .is-dense .hs-card .hs-p, .is-dense .hs-card li { font-size: 19px; line-height: 1.42; }
  .is-dense .hs-quote { padding: 16px 22px; font-size: 21px; }
  .is-dense .hs-grid { gap: 16px; }
  .is-dense .hs-stack { gap: 10px; }

  /* End slide */
  .slide-end { justify-content: center; align-items: center; text-align: center; }
  .end-inner { max-width: 1420px; display: flex; flex-direction: column; align-items: center; gap: 24px; }
  .slide-end .hs-h1 { font-size: 68px; line-height: 1.2; }
  .end-rule { width: 80px; height: 3px; background: var(--accent); margin-top: 16px; }
</style>
</head>
<body>
<deck-stage width="1920" height="1080">
${sections.join('\n')}
</deck-stage>
<script>
${DECK_STAGE_JS}
</script>
</body>
</html>`

  return injectBackHomeLink(html, siteBase)
}

export function buildHuashuEpisode(epDir: string, meta: EpisodeMeta, siteBase: string): string {
  const distDir = join(epDir, 'dist')
  mkdirSync(distDir, { recursive: true })

  // Copy public/ assets (for any episodes with custom ./art/*.png references)
  const pubDir = join(epDir, 'public')
  if (existsSync(pubDir)) {
    cpSync(pubDir, distDir, { recursive: true })
  }

  const handcraftedPath = join(epDir, 'huashu-deck.html')
  let html: string
  if (existsSync(handcraftedPath)) {
    html = injectBackHomeLink(readFileSync(handcraftedPath, 'utf-8'), siteBase)
  } else {
    html = compileEpisodeToHuashuHtml(epDir, meta, siteBase)
  }

  writeFileSync(join(distDir, 'index.html'), html, 'utf-8')
  return distDir
}
