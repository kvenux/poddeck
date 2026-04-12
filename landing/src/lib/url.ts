// Prepend Astro's configured base path to an internal path.
// Works in both .astro templates and server-side data.ts.
//
// Usage:
//   import { url } from '../lib/url'
//   <a href={url('/sources/lex-fridman/')}>
//
// With base = '/poddeck/', url('/sources/lex-fridman/') → '/poddeck/sources/lex-fridman/'

export function url(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const cleanBase = base.endsWith('/') ? base : base + '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return cleanBase + cleanPath
}
