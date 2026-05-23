# PodDeck Agent Notes

## Subtitle Download Fallback

Primary path:

```powershell
pnpm run plan:run -- --category=<category>
```

This uses `yt-dlp` through `scripts/lib/yt.ts` to download subtitles into `data/transcripts/<videoId>.txt`.

If command-line subtitle download fails with YouTube bot/login errors, do not keep retrying the same `yt-dlp` command. Typical error:

```text
Sign in to confirm you're not a bot. Use --cookies-from-browser or --cookies
```

Fallback path:

1. Try `yt-dlp --cookies-from-browser chrome` or `yt-dlp --cookies-from-browser edge` only if the browser cookie DB is readable.
2. If Chrome/Edge is running and cookies are locked, either ask the user to close the browser or switch to the browser fallback.
3. Use Playwright/browser automation against DownSub:

```text
https://downsub.com/zh/site/youtube/
```

Recommended browser fallback flow:

1. Open DownSub in a real browser context, not headless Chromium if Cloudflare blocks it.
2. Submit the YouTube URL.
3. Prefer `TXT` for the original language:
   - English shows usually use `[TXT] English (auto-generated)`.
   - Chinese shows should prefer Chinese/Chinese Simplified if available.
4. Save the downloaded text to:

```text
data/transcripts/<videoId>.txt
```

5. Verify file existence and size before rerunning generation.

Known behavior:

- DownSub may succeed when `yt-dlp` is blocked by YouTube anti-bot checks.
- DownSub can still return `抱歉!找不到字幕。`; in that case the video likely has no public subtitle track available through DownSub. Do not mark it generated. Leave the plan entry pending or decide whether to skip/transcribe from audio.
- After manually downloading transcripts, rerun:

```powershell
pnpm run plan:run -- --category=<category>
```

`run-plan.ts` will detect existing `data/transcripts/<videoId>.txt` and skip the subtitle download step.
