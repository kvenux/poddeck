// Build pipeline:
// 1. Build each generated episode's slidev → episodes/<id>/dist
// 2. Build landing → landing/dist
// 3. Assemble final poddeck/dist with:
//    - landing dist at root
//    - each episode dist at /episodes/<id>/
//
// Usage: pnpm run build

import { resolve, join } from 'node:path'
import { existsSync, mkdirSync, readdirSync, statSync, cpSync, rmSync, writeFileSync } from 'node:fs'
import { readYaml } from './lib/yaml-io.ts'
import { run } from './lib/spawn.ts'
import { log } from './lib/log.ts'
import type { EpisodeMeta } from './lib/types.ts'

const ROOT = process.cwd()
const EPISODES_DIR = resolve(ROOT, 'episodes')
const LANDING_DIR = resolve(ROOT, 'landing')
const DIST_DIR = resolve(ROOT, 'dist')

async function buildEpisode(id: string, base: string): Promise<string | null> {
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

  log.info(`building ${id}`)

  // slidev build needs the base path for correct asset URLs in final bundle
  const { code, stderr } = await run('npx', [
    'slidev', 'build',
    '--base', base,
    '--out', 'dist',
  ], { cwd: dir, reject: false })

  if (code !== 0) {
    log.err(`  ${id} build failed: ${stderr.slice(0, 200)}`)
    return null
  }
  log.ok(`  ${id} built`)
  return join(dir, 'dist')
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

  // Collect all generated episodes
  const episodes: { id: string; base: string }[] = []
  for (const entry of readdirSync(EPISODES_DIR)) {
    const metaPath = join(EPISODES_DIR, entry, 'meta.yml')
    if (!existsSync(metaPath)) continue
    const meta = readYaml<EpisodeMeta>(metaPath)
    if (meta.status === 'generated') {
      episodes.push({ id: entry, base: `/episodes/${entry}/` })
    }
  }
  log.info(`found ${episodes.length} generated episodes`)

  // Clean dist
  if (existsSync(DIST_DIR)) rmSync(DIST_DIR, { recursive: true, force: true })
  mkdirSync(DIST_DIR, { recursive: true })

  // Build all episodes
  log.step('Building episodes')
  const episodeDists: { id: string; path: string }[] = []
  for (const ep of episodes) {
    const distPath = await buildEpisode(ep.id, ep.base)
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

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
