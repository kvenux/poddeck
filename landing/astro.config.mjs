import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// Env-driven base path: set PODDECK_BASE=/poddeck/ in CI for GH Pages,
// leave unset locally for preview via `serve dist` on http://localhost:4173
const base = process.env.PODDECK_BASE || '/'
const site = process.env.PODDECK_SITE || 'http://localhost:4173'

export default defineConfig({
  integrations: [tailwind()],
  site,
  base,
  trailingSlash: 'always',
})
