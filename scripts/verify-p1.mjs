#!/usr/bin/env node
// P1 verification script — navigate to the migrated slidev instance and screenshot
// Usage: node scripts/verify-p1.mjs

import { chromium } from 'playwright-chromium'
import { existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'

const PORT = 3031
const URL = `http://localhost:${PORT}/`
const OUT_DIR = resolve('verify-p1-screenshots')

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })

console.log(`→ Launching browser, navigating to ${URL}`)

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } })
const page = await context.newPage()

// Track errors
const errors = []
page.on('console', msg => {
  if (msg.type() === 'error') errors.push(`[console] ${msg.text()}`)
})
page.on('pageerror', err => errors.push(`[pageerror] ${err.message}`))

try {
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 })
} catch (e) {
  console.error(`❌ Navigation failed: ${e.message}`)
  await browser.close()
  process.exit(1)
}

// Wait a bit extra for Slidev hydration
await page.waitForTimeout(1500)

// Check if we landed on an error page
const title = await page.title()
const bodyText = await page.evaluate(() => document.body.innerText.substring(0, 200))

console.log(`\nPage title: ${title}`)
console.log(`First 200 chars of body:\n${bodyText}\n`)

// Screenshot slide 1 (cover)
await page.screenshot({ path: resolve(OUT_DIR, 'slide-1-cover.png'), fullPage: false })
console.log('✓ Screenshot slide 1')

// Navigate to slide 5 (scaling curve two-cols — critical page with excalidraw)
await page.goto(`${URL}5`, { waitUntil: 'networkidle' })
await page.waitForTimeout(2000)  // excalidraw SVG loading
await page.screenshot({ path: resolve(OUT_DIR, 'slide-5-scaling-curve.png'), fullPage: false })
console.log('✓ Screenshot slide 5 (scaling curve excalidraw)')

// Slide 10 - character-space excalidraw
await page.goto(`${URL}10`, { waitUntil: 'networkidle' })
await page.waitForTimeout(2000)
await page.screenshot({ path: resolve(OUT_DIR, 'slide-10-character-space.png'), fullPage: false })
console.log('✓ Screenshot slide 10 (character space excalidraw)')

// Slide 19 - RSP ladder
await page.goto(`${URL}19`, { waitUntil: 'networkidle' })
await page.waitForTimeout(2000)
await page.screenshot({ path: resolve(OUT_DIR, 'slide-19-rsp-ladder.png'), fullPage: false })
console.log('✓ Screenshot slide 19 (RSP ladder excalidraw)')

await browser.close()

if (errors.length) {
  console.log(`\n⚠ ${errors.length} console/page errors:`)
  errors.slice(0, 10).forEach(e => console.log(' ', e))
  process.exit(1)
}

console.log(`\n✓ All screenshots saved to ${OUT_DIR}`)
