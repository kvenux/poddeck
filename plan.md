# PodDeck — 项目规划

本地 Claude Code 驱动的播客 → Slidev 演示文稿汇聚站，部署到 GitHub Pages。

## 技术栈决策总览

| 领域 | 选型 |
|------|------|
| 名称 | **PodDeck** |
| Slides 引擎 | Slidev (`slidev-theme-academic` + `slidev-addon-excalidraw`) |
| Landing 站 | Astro + Tailwind |
| 生成机制 | Claude Code headless `claude -p` |
| 发现机制 | 频道订阅 + 关键词过滤 + auto_tag |
| 标签策略 | LLM 自动提取 + 预定义词表约束 |
| 触发 | 本地命令（必需）+ GitHub Actions cron |
| 语言 | 中文 |
| 部署 | GitHub Pages（纯静态） |

## 目录结构

```
poddeck/
├── .github/workflows/
│   ├── discover.yml          # cron: 每天扫描新集，提交字幕，发 issue 提醒
│   └── deploy.yml            # push 触发: 构建全站并部署 gh-pages
├── CLAUDE.md                 # 全局 playbook（复用 dario-slides 那份）
├── README.md
├── plan.md                   # 本文件
├── package.json              # pnpm workspace 根
├── pnpm-workspace.yaml
├── sources.yml               # 频道订阅配置（手动维护）
├── tags.yml                  # 标签词表（手动维护）
├── episodes.yml              # episode DB（脚本自动维护）
├── data/
│   ├── transcripts/          # 原始字幕 txt
│   │   └── <videoId>.txt
│   └── queue.yml             # 待生成队列
├── episodes/                 # 每集一个独立 slidev project
│   └── <videoId>/
│       ├── slides.md
│       ├── meta.yml
│       ├── package.json
│       ├── public/*.excalidraw
│       └── dist/
├── landing/                  # Astro 主站
│   ├── astro.config.mjs
│   ├── src/
│   │   ├── pages/
│   │   ├── content/episodes/
│   │   ├── components/
│   │   └── layouts/
│   └── package.json
├── scripts/
│   ├── discover.ts
│   ├── download-subs.ts
│   ├── generate-slides.ts
│   ├── extract-tags.ts
│   ├── sync-metadata.ts
│   ├── build-all.ts
│   └── prompts/
│       ├── slides.md
│       └── tags.md
└── dist/                     # 最终部署产物
    ├── index.html
    ├── sources/
    ├── tags/
    └── episodes/<videoId>/
```

## 数据模型

### sources.yml（手动维护）

```yaml
sources:
  - id: lex-fridman
    name: Lex Fridman Podcast
    channel: https://youtube.com/@lexfridman
    filter_keywords: [AI, Anthropic, NVIDIA, robotics]
    auto_tag: true
    color: "#1e40af"
    description: 深度技术访谈
```

### tags.yml（词表约束）

```yaml
categories:
  topic:
    - ai-safety
    - ai-products
    - hardware
    - startup
    - productivity
    - interpretability
  format:
    - interview
    - monologue
    - panel
  guest-role:
    - ceo
    - researcher
    - engineer
```

### episodes.yml（脚本自动维护）

```yaml
episodes:
  - id: ugvHCXCOmm4
    source: lex-fridman
    title: "Dario Amodei: Anthropic CEO on Claude, AGI & the Future"
    url: https://youtube.com/watch?v=ugvHCXCOmm4
    published: 2024-11-11
    duration: 5h26m
    tags: [ai-safety, interview, ceo, interpretability]
    status: generated
    slides_path: episodes/ugvHCXCOmm4/
```

## Pipeline

```
discover → download → generate → sync → build
 (CI+本地)   (CI+本地)   (只本地)    (CI+本地)  (CI+本地)
```

- **discover** — 读 sources.yml，调 yt-dlp 列出频道最近 N 集，应用过滤，写 queue.yml
- **download** — 读 queue.yml，yt-dlp 下载字幕，清洗 VTT → txt，写 data/transcripts/
- **generate** — 调 `claude -p` 生成 slides.md + 提取 tags（只能本地）
- **sync** — 扫 episodes/*/meta.yml → landing/src/content/
- **build** — 每集 slidev build + Astro build → dist/

## GitHub Actions

- **discover.yml** — cron 每天 03:00 UTC，发现+下载+提交字幕，给新集创建 issue
- **deploy.yml** — push 到 main 触发，build-all + 部署 gh-pages

## 本地命令

```bash
pnpm run discover
pnpm run download
pnpm run generate [id]
pnpm run sync
pnpm run build
pnpm run preview
pnpm run refresh        # 一键 discover + download + generate + sync + build

pnpm run dev:landing    # Astro dev
pnpm run dev:episode <id>  # 某集 slidev dev
```

## 分阶段 Roadmap

| Phase | 内容 | 估时 | 验证方式 |
|-------|------|------|----------|
| **P1 骨架** | 建目录、pnpm workspace、schema 文件、迁移 dario-slides 作为种子 | 1 天 | `dev:episode dario` 能跑 + playwright 截图 |
| **P2 字幕管道** | discover.ts + download-subs.ts + 清洗脚本 | 1-2 天 | 能拉到 3 个 source 的最近集 |
| **P3 生成管道** | Claude Code headless 调用 + prompt 模板 + extract-tags | 2-3 天 | 能跑通 1 集端到端 |
| **P4 Landing** | Astro + 3 个页面 + 组件 + 连通 episodes.yml | 2-3 天 | 首页可筛选 + playwright 截图验证 |
| **P5 Build Pipeline** | build-all.ts + 完整 dist 可预览 | 1 天 | preview 整站 + 跳转 episode 无误 |
| **P6 CI 自动化** | deploy.yml + discover.yml cron | 1 天 | Actions 跑通 + gh-pages 可访问 |
| **P7 Polish** | SEO、缩略图、搜索、RSS | 1-2 天 | 各页面 lighthouse 跑一遍 |

## 风险

1. **Claude Code headless 只能本地** — cron 仅发现+下载，生成要手动
2. **字幕可用性** — ~5% 视频无自动字幕，P7 考虑 whisper fallback
3. **Excalidraw 图** — LLM 生成 JSON 成功率不高，P1 建模板库，Prompt 里引导复用
4. **Build time** — N 集串行 build 慢，未来用 turbo incremental
5. **字幕英文 vs slide 中文** — CC 在生成时同时做翻译+总结

## 操作纪律

- **每个 Phase 写完都要用 playwright 自己验证**，不相信自己的声称
- **在看到运行结果之前都不算完成**
- **运行结果要带怀疑眼光审视**，宁可多跑一次也不放过可疑之处
- **不要过度包装自己**，失败了就说失败了
