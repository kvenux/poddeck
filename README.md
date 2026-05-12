# PodDeck

**Live**: https://kvenux.github.io/poddeck/

把你订阅的长播客访谈自动转成结构化的 Slidev 演示文稿，部署到 GitHub Pages。每集 20-50 页，含嘉宾原话引用和手绘示意图，10-15 分钟读完 2-5 小时访谈的核心。

## 当前状态

- ✅ 端到端 pipeline 跑通：discover → download → generate → build → deploy
- ✅ **7 集已生成**（Dario / Jensen / Boris / Tao / EV7 / OpenClaw Peter / Vikings+Ragnar）
- ✅ 5 个订阅频道扫描完毕，**54 集待生成**（≥60min 阈值，跨 5 source）
- ✅ Landing page 含搜索 / 标签筛选 / 源头筛选 / 全局返回按钮
- ✅ GitHub Pages 自动部署（push main 触发）

## 订阅的频道

| Source | 频道 | 2026 集数 (≥60min) |
|---|---|---|
| Lex Fridman Podcast | `@lexfridman` | 7 |
| Dwarkesh Podcast | `@DwarkeshPatel` | 6 |
| Lenny's Podcast | `@LennysPodcast` | 21 |
| Huberman Lab | `@hubermanlab` | 14（≥90min）|
| Theories of Everything | `@TheoriesofEverything` | 11 |

## 核心工作流

```
┌───────────────┐  yt-dlp --dump-json
│ sources.yml   │───────────────┐
└───────────────┘               │
                                ▼
                ┌──────────────────────────┐
                │ data/scan-cache/*.jsonl  │  full metadata (gitignored)
                └────────┬─────────────────┘
                         │ plan.ts (date + duration filter + dedup)
                         ▼
                ┌──────────────────────────┐
                │ data/plans/<source>.yml  │  状态追踪，git 提交
                └────────┬─────────────────┘
                         │ run-plan.ts (yt-dlp 下载字幕 + claude -p 生成)
                         ▼
                ┌──────────────────────────┐
                │ episodes/<id>/           │  slides.md + meta.yml
                └────────┬─────────────────┘
                         │ build-all.ts (slidev build + astro build)
                         ▼
                    dist/ → GH Pages
```

## 命令速查

```bash
# 装依赖
pnpm install

# 1. 扫频道抓最新 metadata（~5-15 分钟并行）
pnpm run cache:refresh
pnpm run cache:refresh -- --id=lex-fridman     # 单源

# 2. 从 cache 生成 plan（秒级）
pnpm run plan
pnpm run plan -- --min-duration=5400           # 临时改阈值到 90 min

# 3. 执行 plan 中 pending 的条目
pnpm run plan:run                              # 跑所有 pending
pnpm run plan:run -- --limit=3                 # 只跑 3 集
pnpm run plan:run -- --concurrency=2           # 并行 2 subprocess
pnpm run plan:run -- --id=lex-fridman          # 限定某源
pnpm run plan:run -- --dry-run                 # 预览不执行

# 4. 构建 + 本地预览
pnpm run build                                 # 所有 generated 集 + landing → dist/
pnpm run preview                               # http://localhost:4173

# 5. 单集开发模式（热重载）
pnpm run dev:episode <videoId>

# 分析（无 API 调用）
pnpm run analyze                               # 30/60/90 min 阈值统计表
pnpm run analyze -- --thresholds=45,60,120
```

**一键从 0 到部署**：
```bash
pnpm run cache:refresh && pnpm run plan && pnpm run plan:run && pnpm run build
git add -A && git commit -m "new episodes" && git push
# push 自动触发 GH Actions 部署到 https://kvenux.github.io/poddeck/
```

## 添加新源头

编辑 `sources.yml`：

```yaml
sources:
  - id: my-new-channel
    name: My New Podcast
    channel: https://youtube.com/@somechannel
    min_duration: 3600         # 60 分钟下限（秒）
    min_date: "20260101"       # 最早发布日期
    cache_limit: 350           # refresh-cache 扫多少个
    color: "#dc2626"           # landing 颜色
    description: 简短描述
    filter_keywords: [AI, agent, llm]  # 可选
```

然后：
```bash
pnpm run cache:refresh -- --id=my-new-channel
pnpm run plan
pnpm run plan:run -- --id=my-new-channel
pnpm run build && git add -A && git commit -m "add source" && git push
```

## 自动生成的关键设计

CC 子进程通过 `claude -p` 启动，独立于父进程。关键 flags：

- `--model opus`
- `--append-system-prompt scripts/prompts/slides-system-rules.md` — **硬规则注入系统提示词**
- `--add-dir episodes --add-dir data/transcripts`
- `--allowedTools Read,Write,Edit,Bash,Grep,Glob`

硬规则（`scripts/prompts/slides-system-rules.md`）：

1. 每条引言必须 grep 验证存在于 transcript（防编造）
2. 不许跨 episode 串台（Boris 的 miso 不要写到 Jensen）
3. 不许编造公司名 / 年份 / 数字
4. 长度按 transcript 长度 scale：
   - 1h → 22-28 页
   - 1-1.5h → 28-35 页
   - 2-3h → 35-45 页
   - 3h+ → 42-55 页
5. 至少 **20%** 的 slide 含 Excalidraw 手绘图
6. 倒数第二页必须是 6-10 条 grep-verified 核心金句
7. 必须自己 export PNG 逐页 audit 再声称完成
8. YouTube 字幕 `quad code` → 写 `Claude Code`（正规化对照表）

## 项目结构

```
poddeck/
├── sources.yml              # 频道订阅
├── tags.yml                 # 标签词表
├── episodes.yml             # 老的 episode 目录（plan 接管后逐步废弃）
├── CLAUDE.md                # Slidev 项目级规范（给 CC 看）
├── plan.md                  # 项目整体规划
│
├── data/
│   ├── transcripts/         # 清洗过的字幕（git 提交）
│   ├── scan-cache/          # yt-dlp JSONL（gitignored）
│   └── plans/               # 执行计划（git 提交）
│
├── episodes/
│   ├── _templates/          # 新 episode scaffold
│   └── <videoId>/           # 每集独立 Slidev 项目
│
├── landing/                 # Astro 主站
│
├── scripts/
│   ├── prompts/slides-system-rules.md   # ★ 硬规则
│   ├── refresh-cache.ts     # yt-dlp full metadata
│   ├── plan.ts              # cache → plan
│   ├── run-plan.ts          # plan → generate
│   ├── build-all.ts         # build 所有 → dist/
│   ├── analyze-scan.ts      # 时长统计表
│   └── lib/                 # 共享 lib
│
└── .github/workflows/
    └── deploy.yml           # push main 或 manual 触发部署
```

## 部署

### 自动部署

push 到 `main` branch 就会触发 `.github/workflows/deploy.yml`：
1. `pnpm install`
2. 装 `playwright-chromium` 浏览器
3. `pnpm run build`（`PODDECK_BASE=/poddeck/`）
4. Upload artifact → Deploy GitHub Pages

耗时 1-3 分钟。

## 自动更新

本地端到端更新入口：

```bash
pnpm run auto:update -- --limit=2 --concurrency=1
```

流程是：刷新 `data/scan-cache/` → 更新 `data/plans/` → 对 pending 条目运行 `claude -p` 生成 deck → `pnpm install` → `pnpm run build` → commit → push。push 到 `main` 后由 GitHub Pages workflow 构建部署。

常用参数：

- `--id=latent-space`：只更新一个 source。
- `--category=ai-tech`：只跑某个 category 的 pending 条目。
- `--cache-limit=50`：覆盖 `sources.yml` 里的扫描数量，适合定时快扫。
- `--after=20260501`：只扫描某个日期之后的视频。
- `--no-push`：只本地 commit，不触发 Pages。
- `--dry-run`：刷新 cache/plan 并展示将要生成的条目。

Windows Task Scheduler 可以直接调用 wrapper：

```powershell
powershell -ExecutionPolicy Bypass -File C:\Users\kvenu\playground\sub-wiki\poddeck\scripts\auto-update.ps1 -Limit 2
```

### 手动部署

GitHub → Actions → "Deploy to GitHub Pages" → Run workflow。

### 仓库设置

- Settings → Pages → Source: **GitHub Actions**（已启用）
- GH Pages URL：https://kvenux.github.io/poddeck/

## 已知限制

- **生成必须本地**：`claude -p` 走本地 Claude Max/Pro 订阅，CI 上没有登录态，所以 generate 阶段**不能在 GitHub Actions 跑**。CI 只负责 build 已有的 episode 目录 + 部署。
- **约 5% 视频没自动字幕**：这类 episode 会 download 失败，需要 fallback 到 whisper（未实装）。
- **scan-cache 较大**：5 个源的 full JSONL 总共 ~150 MB，不 commit 到 git。`cache:refresh` 可按需重跑。
- **55 MB Dwarkesh jsonl** 超 GitHub 50 MB 推荐限制——已 gitignore。未来如果要 CI build 时 cache 可以 compact：只保留 id/title/duration/upload_date，JSONL 会缩到 1-2 MB。
- **GH Pages 深度链接**：访问 `/episodes/<id>/5` 时先 hit `/404.html`，client-side 重定向到 `/episodes/<id>/`。冷加载会丢一帧。

## 生成数据实测

| Episode | 时长 | 页数 | 手绘图 | Quotes verified |
|---|---|---|---|---|
| Dario Amodei | 5h 26m | 43 | 9 | 25 |
| Jensen Huang | 2h 17m | 30 | 6 | 14 |
| Boris Cherny | 1h 24m | 27 | 6 | 14 |
| Terence Tao | 1h 28m | 23 | 4 | 18 |
| EV7 State of AI 2026 | 4h 25m | 44 | 2 | 85 |
| OpenClaw Peter | 3h 15m | ~30 | - | - |
| Vikings / Ragnar | 1h 33m | 42 | - | - |

总计 **~240 页 / ~30 张手绘图 / ~150 条 grep 验证的引言**，全部由 `claude -p` 自动生成无人工改动。

## 致谢

灵感来自 Lex Fridman、Dwarkesh、Lenny's 每期都有大量值得记住的金句但回看成本太高。

Slides 由 [Slidev](https://sli.dev) 渲染。生成由 [Claude Code](https://claude.com/claude-code) 驱动。
