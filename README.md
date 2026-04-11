# PodDeck

Claude Code 驱动的播客 → Slidev 演示文稿汇聚站。

从 YouTube 链接下载字幕，由本地 Claude Code 自动转换成 Slidev 演示，汇聚部署到 GitHub Pages。

## 状态

🚧 早期开发中 — see [plan.md](./plan.md)

当前阶段：**P1 骨架** (进行中)

## 快速入门

```bash
pnpm install

# 启动单个 episode 的 Slidev dev server（P1 已可用）
pnpm run dev:episode ugvHCXCOmm4

# 其它命令 (P2 之后)
pnpm run refresh     # discover + download + generate + sync + build
```

## 目录

```
sources.yml        频道订阅源（手动维护）
tags.yml           标签词表
episodes.yml       episode 元数据（脚本维护）
CLAUDE.md          Slidev 生成最佳实践（给 Claude Code 看的）
plan.md            项目完整规划

episodes/<id>/     每集独立的 Slidev 项目
data/transcripts/  已下载字幕 txt
landing/           Astro 主站（P4）
scripts/           Pipeline 脚本（P2-P5）
```
