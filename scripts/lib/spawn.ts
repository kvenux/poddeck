import { spawn } from 'node:child_process'

export interface SpawnResult {
  stdout: string
  stderr: string
  code: number
}

const isWin = process.platform === 'win32'
import { existsSync } from 'node:fs'
import { delimiter } from 'node:path'

/**
 * On Windows, Node's child_process.spawn needs an executable with extension.
 * Try .exe first (native binaries like yt-dlp), fall back to .cmd (npm shims like npx).
 */
function resolveCmd(cmd: string): string {
  if (!isWin) return cmd
  if (/\.(exe|cmd|bat|com|ps1)$/i.test(cmd)) return cmd

  const paths = (process.env.PATH || '').split(delimiter)
  for (const p of paths) {
    if (!p) continue
    for (const ext of ['.exe', '.cmd', '.bat']) {
      const full = `${p}\\${cmd}${ext}`
      if (existsSync(full)) return full
    }
  }
  // fall back — let spawn error out with a clearer message
  return `${cmd}.exe`
}

/**
 * Run a command and collect stdout/stderr.
 * Uses shell: false to avoid argument quoting issues (format strings etc.).
 */
export function run(
  cmd: string,
  args: string[],
  opts: { cwd?: string; reject?: boolean } = { reject: true },
): Promise<SpawnResult> {
  return new Promise((resolve, rej) => {
    const resolved = resolveCmd(cmd)
    // Node on Windows can't spawn .cmd/.bat directly with shell: false
    const needsShell = isWin && /\.(cmd|bat)$/i.test(resolved)
    const child = spawn(resolved, args, {
      cwd: opts.cwd,
      shell: needsShell,
      stdio: ['ignore', 'pipe', 'pipe'],
      windowsHide: true,
      env: {
        ...process.env,
        // Force Python (yt-dlp) to emit UTF-8 on Windows instead of cp936/cp1252
        PYTHONIOENCODING: 'utf-8',
        PYTHONUTF8: '1',
      },
    })
    let stdout = ''
    let stderr = ''
    child.stdout.on('data', d => { stdout += d.toString() })
    child.stderr.on('data', d => { stderr += d.toString() })
    child.on('close', code => {
      const result = { stdout, stderr, code: code ?? 0 }
      if (code !== 0 && opts.reject !== false) {
        const err = new Error(`${cmd} exited ${code}\n${stderr}`)
        ;(err as any).result = result
        rej(err)
        return
      }
      resolve(result)
    })
    child.on('error', err => rej(err))
  })
}
