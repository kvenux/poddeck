# PodDeck

把你订阅的播客自动转换成结构化的 Slidev 演示文稿，部署到 GitHub Pages。

每集 = 一个 ~30 页的 deck，含核心论点、嘉宾原话引用、手绘示意图。
全部由本地 Claude Code（headless `claude -p`）自动生成。

## 当前状态

- ✅ Pipeline 完整跑通：discover → download → generate → build → deploy
- ✅ 6 集已生成（Dario / Jensen / Boris / Tao / OpenClaw Peter / State of AI）
- ✅ Landing page 含搜索 / 标签筛选 / 源头筛选
- ✅ GH Pages 部署（手动触发 `workflow_dispatch`）

## 快速开始

```bash
# 装依赖
pnpm install

# 跑完整 pipeline (扫频道找新集 → 下载字幕 → CC 生成 slides → 构建)
pnpm run discover           # 扫所有源，找出新集 → data/queue.yml
pnpm run download           # 下载字幕 + 清洗 → data/transcripts/
pnpm run generate           # 调 claude -p 生成所有 status=downloaded 的集
pnpm run build              # build 所有 generated 集 + Astro landing → dist/
pnpm run preview            # 本地预览 dist/

# 单集生成
pnpm run generate -- --id=<videoId>

# 单集开发模式 (热重载)
pnpm run dev:episode <videoId>
```

## 项目结构

```
poddeck/
├── sources.yml              # 频道订阅 (手动维护)
├── tags.yml                 # 标签词表 (手动维护，约束 LLM)
├── episodes.yml             # episode 目录 (脚本维护)
├── plan.md                  # 项目规划
├── CLAUDE.md                # Slidev 项目级规范 (CLAUDE Code 自动加载)
│
├── data/
│   ├── transcripts/         # 清洗过的字幕 .txt (git 提交)
│   └── queue.yml            # 待生成队列 (git ignored)
│
├── episodes/
│   ├── _templates/          # 新 episode 的 scaffold (package.json + global-bottom.vue + 6 张通用 excalidraw)
│   └── <videoId>/           # 每集独立 Slidev 项目
│       ├── slides.md        # CC 生成
│       ├── meta.yml         # CC 生成
│       ├── public/*.excalidraw   # CC 生成 / 复用 _templates
│       ├── package.json
│       └── global-bottom.vue
│
├── landing/                 # Astro 主站
│   └── src/
│       ├── pages/
│       │   ├── index.astro              # 首页 + 搜索
│       │   ├── sources/[id].astro       # 单源头页
│       │   └── tags/[tag].astro         # 单标签页
│       ├── components/
│       │   ├── EpisodeCard.astro
│       │   └── SearchBox.astro
│       └── lib/data.ts                  # 从 episodes/*/meta.yml 聚合
│
├── scripts/
│   ├── discover.ts          # yt-dlp 扫频道找新集
│   ├── download-subs.ts     # yt-dlp 下载 VTT 清洗成 txt
│   ├── generate-slides.ts   # 调 claude -p 生成 slides.md + meta.yml
│   ├── build-all.ts         # slidev build × N + astro build + 组装 dist/
│   ├── prompts/
│   │   ├── slides-system-rules.md   # 注入 CC 子进程系统提示词的硬规则
│   │   └── slides-task.md           # 任务模板 (含 {{ID}} 占位)
│   └── lib/                 # yaml-io / spawn / yt / log / types
│
└── .github/workflows/
    └── deploy.yml           # workflow_dispatch 手动触发部署
```

## 自动生成的关键设计

CC 子进程通过 `claude -p` 启动，独立于父进程。关键 flag：

- `--model opus` — 强制 opus
- `--append-system-prompt scripts/prompts/slides-system-rules.md` — **硬规则注入系统提示词**，CC 子进程绕不开
- `--add-dir episodes --add-dir data/transcripts` — 限制工具访问范围
- `--allowedTools Read,Write,Edit,Bash,Grep,Glob`

硬规则覆盖：
1. 每条引言必须 grep 验证存在于 transcript
2. 不许跨 episode 串台 (Boris 的 miso 不要写到 Jensen 里)
3. 不许编造细节 (公司名 / 年份 / 数字)
4. 长度按 transcript 长度 scale (1.5h → 28+ 页, 5h+ → 42+ 页)
5. 至少 20% 的 slide 含 Excalidraw 手绘图
6. 倒数第二页必须是 6-10 条 grep-verified 核心金句
7. 必须自己 export PNG 逐页 audit
8. YouTube 字幕 "quad code" → 写 "Claude Code" (字幕识别错误正规化表)

## 添加新源头

```yaml
# sources.yml
sources:
  - id: my-new-channel
    name: My New Podcast
    channel: https://youtube.com/@somechannel
    filter_keywords: [AI, agent, llm]    # word-boundary 匹配标题
    episode_limit: 2                      # 每次 discover 最多保留多少
    color: "#dc2626"
    description: 描述...
```

然后：
```bash
pnpm run discover
pnpm run download
pnpm run generate
pnpm run build
```

## 部署到 GitHub Pages

仓库设置：
1. Settings → Pages → Source: GitHub Actions
2. 推到 GitHub
3. Actions 标签 → "Deploy to GitHub Pages" → Run workflow

不会自动部署（无 cron, 无 push trigger）。每次部署都是显式手动触发。

## 已知限制

- **生成阶段必须本地**：`claude -p` 走的是本地 Claude Code 订阅 / API key，不能在 CI 自动跑（CI 上没有登录态）。Discover/Download 可以在 CI 跑。
- **约 5% 视频没有自动字幕**：这种 episode 会 download 失败，需要 fallback 到 whisper（未实现）
- **excalidraw 模板库**：CC 会优先复用 `_templates/public/` 里的图，也会按需新建（写 JSON）。新建的图质量取决于 CC 对 excalidraw schema 的掌握
- **GH Pages 深度链接**：直接访问 `/episodes/<id>/5` 时，会先 hit `/404.html`，client-side 重定向到 `/episodes/<id>/`，再用 hash 让 SPA 自己处理。冷加载会丢一帧

## 灵感 / 致谢

灵感来自 Lex Fridman、Dwarkesh、Lenny 这些播客每期都有大量值得记住的金句但回看成本太高。

Slides 由 [Slidev](https://sli.dev) 渲染。生成由 [Claude Code](https://claude.com/claude-code) 驱动。
