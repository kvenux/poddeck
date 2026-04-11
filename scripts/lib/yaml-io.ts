import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { parse, stringify } from 'yaml'

export function readYaml<T = any>(path: string, fallback?: T): T {
  if (!existsSync(path)) {
    if (fallback !== undefined) return fallback
    throw new Error(`File not found: ${path}`)
  }
  return parse(readFileSync(path, 'utf-8')) as T
}

export function writeYaml(path: string, data: unknown): void {
  writeFileSync(path, stringify(data, { indent: 2, lineWidth: 120 }), 'utf-8')
}
