param(
  [int]$Limit = 2,
  [int]$Concurrency = 1,
  [string]$Id = "",
  [string]$Category = "",
  [string]$After = "",
  [string]$CacheLimit = "",
  [switch]$NoPush,
  [switch]$DryRun
)

$ErrorActionPreference = "Continue"
if (Get-Variable PSNativeCommandUseErrorActionPreference -ErrorAction SilentlyContinue) {
  $PSNativeCommandUseErrorActionPreference = $false
}
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()
$OutputEncoding = [System.Text.UTF8Encoding]::new()

$Repo = Split-Path -Parent $PSScriptRoot
Set-Location $Repo -ErrorAction Stop

New-Item -ItemType Directory -Force -Path "logs" | Out-Null
$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$logPath = Join-Path $Repo "logs\auto-update-$stamp.log"

$argsList = @("--limit=$Limit", "--concurrency=$Concurrency")
if ($Id) { $argsList += "--id=$Id" }
if ($Category) { $argsList += "--category=$Category" }
if ($After) { $argsList += "--after=$After" }
if ($CacheLimit) { $argsList += "--cache-limit=$CacheLimit" }
if ($NoPush) { $argsList += "--no-push" }
if ($DryRun) { $argsList += "--dry-run" }

$pnpm = (Get-Command pnpm -ErrorAction Stop).Source
$pnpmArgs = @("run", "auto:update", "--") + $argsList
$errPath = "$logPath.err"
$process = Start-Process `
  -FilePath $pnpm `
  -ArgumentList $pnpmArgs `
  -WorkingDirectory $Repo `
  -NoNewWindow `
  -Wait `
  -PassThru `
  -RedirectStandardOutput $logPath `
  -RedirectStandardError $errPath

if (Test-Path $logPath) { Get-Content -Encoding utf8 $logPath }
if (Test-Path $errPath) { Get-Content -Encoding utf8 $errPath }
exit $process.ExitCode
