// Propagate episodes/_templates/global-bottom.vue to every generated episode.
//
// Each episode is an independent Slidev project with its own copy of
// global-bottom.vue (the shared chrome: back button + share button + counter).
// When the template changes, run this to push it to all decks.
//
// Usage: pnpm run sync:global-bottom            # apply
//        pnpm run sync:global-bottom -- --check # report drift, write nothing (exit 1 if any)

import { resolve, join } from 'node:path'
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { log } from './lib/log.ts'

const ROOT = process.cwd()
const EPISODES_DIR = resolve(ROOT, 'episodes')
const TEMPLATE = join(EPISODES_DIR, '_templates', 'global-bottom.vue')

const checkOnly = process.argv.includes('--check')

function main() {
  if (!existsSync(TEMPLATE)) {
    log.err(`template not found: ${TEMPLATE}`)
    process.exit(1)
  }
  const want = readFileSync(TEMPLATE, 'utf-8')

  const targets: string[] = []
  for (const entry of readdirSync(EPISODES_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    if (entry.name === '_templates') continue
    const file = join(EPISODES_DIR, entry.name, 'global-bottom.vue')
    if (existsSync(file)) targets.push(file)
  }

  let changed = 0
  for (const file of targets) {
    const current = readFileSync(file, 'utf-8')
    if (current === want) continue
    changed += 1
    if (checkOnly) {
      log.warn(`drift: ${file}`)
    } else {
      // writeFileSync bumps mtime, so build-all.ts shouldBuildEpisode() rebuilds it
      writeFileSync(file, want, 'utf-8')
    }
  }

  if (checkOnly) {
    if (changed === 0) {
      log.ok(`all ${targets.length} episode global-bottom.vue match the template`)
      process.exit(0)
    }
    log.err(`${changed}/${targets.length} episode(s) drifted from template`)
    process.exit(1)
  }

  log.ok(`synced global-bottom.vue → ${changed} updated, ${targets.length - changed} already current (of ${targets.length} episodes)`)
}

main()
