// Build pipeline:
// 1. Build each generated episode's slidev → episodes/<id>/dist
// 2. Build landing → landing/dist
// 3. Assemble final poddeck/dist with:
//    - landing dist at root
//    - each episode dist at /episodes/<id>/
//
// Usage: pnpm run build

import { fileURLToPath } from 'node:url'
import { resolve, join } from 'node:path'
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, cpSync, rmSync, writeFileSync } from 'node:fs'
import { readYaml } from './lib/yaml-io.ts'
import { run } from './lib/spawn.ts'
import { log } from './lib/log.ts'
import { buildHuashuEpisode } from './lib/huashu-deck.ts'
import type { EpisodeMeta } from './lib/types.ts'

const ROOT = process.cwd()
const EPISODES_DIR = resolve(ROOT, 'episodes')
const LANDING_DIR = resolve(ROOT, 'landing')
const DIST_DIR = resolve(ROOT, 'dist')

const IGNORED_EPISODE_INPUT_DIRS = new Set(['dist', 'node_modules', '.slidev'])
const IGNORED_EPISODE_INPUT_FILES = new Set(['index.html'])

function latestInputMtimeMs(dir: string): number {
  let latest = 0

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (IGNORED_EPISODE_INPUT_DIRS.has(entry.name)) continue
    if (IGNORED_EPISODE_INPUT_FILES.has(entry.name)) continue

    const path = join(dir, entry.name)
    const stat = statSync(path)
    if (entry.isDirectory()) {
      latest = Math.max(latest, latestInputMtimeMs(path))
      continue
    }
    if (entry.isFile()) {
      latest = Math.max(latest, stat.mtimeMs)
    }
  }

  return latest
}

export function shouldBuildEpisode(dir: string): boolean {
  const indexPath = join(dir, 'dist', 'index.html')
  if (!existsSync(indexPath)) return true

  const distMtime = statSync(indexPath).mtimeMs
  return latestInputMtimeMs(dir) > distMtime
}

async function buildEpisode(id: string, siteBase: string): Promise<string | null> {
  const dir = join(EPISODES_DIR, id)
  const metaPath = join(dir, 'meta.yml')
  if (!existsSync(metaPath)) {
    log.warn(`  skip ${id} — no meta.yml`)
    return null
  }
  const meta = readYaml<EpisodeMeta>(metaPath)
  if (meta.status !== 'generated') {
    log.raw(`  skip ${id} (status=${meta.status})`)
    return null
  }

  const distPath = join(dir, 'dist')
  const indexPath = join(distPath, 'index.html')
  const isAlreadyHuashu = existsSync(indexPath) && readFileSync(indexPath, 'utf-8').includes('<deck-stage')
  if (isAlreadyHuashu && !shouldBuildEpisode(dir) && !process.env.FORCE_REBUILD) {
    log.raw(`  skip ${id} (up to date)`)
    return distPath
  }

  try {
    buildHuashuEpisode(dir, meta, siteBase)
    log.ok(`  ${id} built (huashu-design)`)
    return distPath
  } catch (e: any) {
    log.err(`  ${id} build failed: ${e?.message || e}`)
    return null
  }
}

async function buildLanding(): Promise<string> {
  log.info('building landing')
  const { code, stderr } = await run('npx', ['astro', 'build'], {
    cwd: LANDING_DIR,
    reject: false,
  })
  if (code !== 0) {
    throw new Error(`landing build failed: ${stderr.slice(0, 400)}`)
  }
  log.ok('  landing built')
  return join(LANDING_DIR, 'dist')
}

async function main() {
  log.step('Build all — assembling dist/')

  // Site base path — matches landing/astro.config.mjs `base`.
  // Local:    PODDECK_BASE unset → /
  // CI/prod:  PODDECK_BASE=/poddeck/ → https://kvenux.github.io/poddeck/
  const SITE_BASE = process.env.PODDECK_BASE || '/'

  // Collect all generated episodes
  const episodes: { id: string; base: string }[] = []
  for (const entry of readdirSync(EPISODES_DIR)) {
    const metaPath = join(EPISODES_DIR, entry, 'meta.yml')
    if (!existsSync(metaPath)) continue
    const meta = readYaml<EpisodeMeta>(metaPath)
    if (meta.status === 'generated') {
      episodes.push({ id: entry, base: `${SITE_BASE}episodes/${entry}/` })
    }
  }
  log.info(`found ${episodes.length} generated episodes (base=${SITE_BASE})`)

  // Clean dist
  if (existsSync(DIST_DIR)) rmSync(DIST_DIR, { recursive: true, force: true })
  mkdirSync(DIST_DIR, { recursive: true })

  // Build all episodes
  log.step('Building episodes (Huashu-Design unified-light single-file)')
  const episodeDists: { id: string; path: string }[] = []
  for (const ep of episodes) {
    const distPath = await buildEpisode(ep.id, SITE_BASE)
    if (distPath) episodeDists.push({ id: ep.id, path: distPath })
  }

  // Build landing
  log.step('Building landing')
  const landingDist = await buildLanding()

  // Assemble
  log.step('Assembling final dist/')
  log.raw(`copying ${landingDist} → ${DIST_DIR}`)
  cpSync(landingDist, DIST_DIR, { recursive: true })

  const epOut = join(DIST_DIR, 'episodes')
  mkdirSync(epOut, { recursive: true })
  for (const ep of episodeDists) {
    const dst = join(epOut, ep.id)
    log.raw(`copying ${ep.path} → ${dst}`)
    cpSync(ep.path, dst, { recursive: true })
  }

  // Write serve.json so `serve` does SPA fallback for each episode
  // Each /episodes/<id>/<anything> → /episodes/<id>/index.html
  // Note: `serve` doesn't apply the site base, so these paths are relative to dist/ root.
  const rewrites = episodeDists.map(ep => ({
    source: `/episodes/${ep.id}/**`,
    destination: `/episodes/${ep.id}/index.html`,
  }))
  writeFileSync(
    join(DIST_DIR, 'serve.json'),
    JSON.stringify({ rewrites }, null, 2),
    'utf-8',
  )
  log.ok(`  wrote serve.json with ${rewrites.length} rewrites`)

  log.ok(`\nFinal dist assembled at ${DIST_DIR}`)
  log.info('serve locally with:  npx serve dist')
}

if (resolve(process.argv[1] || '') === fileURLToPath(import.meta.url)) {
  main().catch(e => {
    log.err(e.stack || e.message)
    process.exit(1)
  })
}
