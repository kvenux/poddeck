# Slidev 最佳实践与操作流程

这是一个用 Slidev 把长播客/访谈/文章转成结构化演示文稿的工作流记录。

## 技术栈

- **Slidev** — 基于 Markdown 的开发者演示框架
- **Theme**: `slidev-theme-academic`（学术/深度内容最合适），`colorSchema: light`
- **Addon**: `slidev-addon-excalidraw`（手绘风格示意图）
- **Skill**: 官方 Slidev Skill 已全局安装到 `~/.agents/skills/slidev/`，通过 `npx skills add slidevjs/slidev -y -g` 安装

## 项目结构

```
dario-slides/
├── slides.md                  # 主 Markdown 源文件
├── public/                    # 静态资源
│   ├── *.excalidraw          # 手绘图源文件（JSON）
│   └── *.png / *.svg         # 其它图片
├── screenshots/              # 导出的 PNG（用于视觉验证）
├── dist/                     # 静态 HTML 构建产物
└── package.json
```

## 命令速查

```bash
npm run dev                              # 启动 dev server (3030)
npx slidev build --base /                # 构建为静态 SPA
npx slidev export --format png --output screenshots   # 导出 PNG 逐页检查
npx slidev export                        # 导出 PDF（需要 playwright-chromium）
```

导出 PDF/PNG 前需要先 `npm install -D playwright-chromium`。

---

## 内容生成流程

### 1. 故事化，不要框架化

跟着原文的叙事脉络走，不要硬套"元认知/第一性原理"这种抽象框架。让每个点自然引出下一个点——访谈本身就是最好的结构。

### 2. 识别三种内容并分别处理

| 类型 | 处理方式 |
|------|----------|
| 主要论点 | 普通 slide，用卡片/边框/颜色区分层次 |
| 金句 | `layout: quote` 或 `layout: statement` |
| 数据/事实 | 做成彩色卡片网格（不要用 `layout: fact`——academic 主题下会左上角空荡） |

### 3. 去掉章节分隔页

不要用 `layout: section` 做 "Part 1/2/3..." 的过渡页。它们内容太薄，翻起来像填充物。内容自己流畅衔接更好。

### 4. 每页信息密度要够

- **避免一页只有一句引言或一个数字**（会显得非常空）
- 为关键数字补足上下文（"这个数字是什么？为什么值得关注？意味着什么？"）
- 金句页也要加出处或解释性副标题

---

## 视觉最佳实践

### Two-cols 大图布局是王牌

每 3-5 页就应该有一张 two-cols（左文右大图）。这种页面视觉冲击力最强、信息密度最高。

```md
---
layout: two-cols
---

# 标题

左侧要点
- 点 1
- 点 2

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./diagram.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>
```

**关键**：右侧必须用 `flex justify-center items-center h-full pl-4` 包装，否则图会贴边。

### Excalidraw 手绘图 vs Mermaid 流程图

| 场景 | 用什么 |
|------|--------|
| 概念示意、有机的形状、类比、hero image | **Excalidraw** |
| 流程步骤、状态机、有向无环图 | **Mermaid**（但要注意 scale） |
| 多于 5 个节点的步骤图 | **不要用 Mermaid TD**，改用卡片网格 |

### Mermaid 的坑

- `scale: 0.7` 对简短 LR 流程图 OK
- TD 流程图 5+ 节点会超出 slide 底部被裁掉
- 解决方案：把流程改写成 `grid grid-cols-2` 的彩色卡片（每步一张卡）+ 最后一步 `col-span-2` 作总结。这样更可控、更美观、不会被裁。

### v-mark 的坑

`v-mark.highlight.yellow` 作用到 **会自动换行的中文文本** 上时，高亮矩形会错位、溢出、覆盖其它元素。

- ❌ 不要在长中文短语上用 `.highlight`
- ✅ 短英文词或单行文本可以用
- ✅ 替代方案：`<strong>`、`bg-yellow-100`、彩色边框

### 颜色卡片配色系统（已验证）

| 语义 | 配色 |
|------|------|
| 中性信息 | `bg-blue-50 border-l-4 border-blue-500` |
| 成功/积极 | `bg-green-50 border-l-4 border-green-500` |
| 警告/强调 | `bg-yellow-50 border-l-4 border-yellow-500` |
| 危险/风险 | `bg-red-50 border-l-4 border-red-500` |
| 过渡/中立 | `bg-purple-50 border-l-4 border-purple-500` |
| 行动项 | `bg-orange-50 border-l-4 border-orange-500` |

---

## 动画哲学

**默认不加动画**。每次翻页所有内容一次性展示。

- ❌ 不要用 `<v-click>` / `<v-clicks>` 包裹大段内容
- ❌ 不要用 `v-clicks` 搞渐进披露
- ✅ 让每页都是一个完整的"海报"
- ✅ 特殊场景（如 magic-move 代码变形）再考虑交互

**为什么**：
1. 看演讲时频繁按空格很分心
2. `slidev export` 默认只截第一个 click 状态——如果用了 v-click，导出的 PDF/PNG 会漏掉大部分内容
3. 静态 slide 更容易审查和校对

---

## 视觉验证流程（重要）

**每次重要修改后，必须导出 PNG 检查实际渲染**。dev server 上看起来对的东西，导出后可能完全不同。

```bash
# 1. 确保 playwright-chromium 已安装
npm install -D playwright-chromium

# 2. 导出全部 slides 为 PNG
npx slidev export --format png --output screenshots

# 3. 用 Read 工具逐页检查可疑页面
# Read C:/path/to/screenshots/6.png
```

**必须检查的页面**：
- 所有含 `mermaid` 的页（防止被裁）
- 所有用 `v-mark` 的页（防止高亮错位）
- 所有 `layout: fact` / `layout: quote` 的页（可能太空）
- 所有 `two-cols` 页（确认图片大小/位置对）
- 有大量文字的页（防止溢出）

---

## 主题选择

实测过的：

| 主题 | 安装 | 适合 |
|------|------|------|
| `@slidev/theme-default` | 默认 | 通用、中性 |
| `@slidev/theme-seriph` | `npm i @slidev/theme-seriph` | 优雅衬线、长文访谈 |
| `slidev-theme-academic` | `npm i slidev-theme-academic` | **当前使用**、深度内容、学术感 |

切换主题记得 `colorSchema: light`（避免默认跟随系统暗色）。

主题画廊：https://sli.dev/resources/theme-gallery

---

## Frontmatter 模板

```yaml
---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '演示标题'
info: |
  简短说明
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---
```

- `mdc: true` — 启用 MDC 语法（`::component{}`、`{style="..."}`）
- `drawings.persist: false` — 关闭持久化绘图（不需要时）
- `transition: slide-left` — 温和的默认过渡

---

## 常用 slide 模板

### 彩色卡片网格（事实/对比）

```md
# 标题

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 标签
<div class="text-4xl font-bold text-red-600 my-2">数字</div>
<div class="text-xs opacity-70">说明</div>

</div>
<!-- ...重复 -->
</div>
```

### 左右对比

```md
# 标题

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 对比 A
内容...

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 对比 B
内容...

</div>

</div>
```

### 引文加背景

```md
<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">

"引文内容"

</div>

<div class="mt-6 text-sm opacity-70">
补充说明（谁说的、什么场景）
</div>
```

---

## Excalidraw 手绘图提示

- 文件放在 `public/*.excalidraw`，引用用 `./name.excalidraw`
- 手写 JSON 的话用 `fillStyle: "hachure"` + `roughness: 1.5` 才像手绘
- 最简方案：去 https://excalidraw.com 画好后导出 `.excalidraw` 到 `public/`
- 图片在 two-cols 右侧时推荐宽度 `w-[460px]` 或 `w-[480px]`

---

## 反模式（不要做）

- ❌ 用 `layout: section` 章节分隔页（太空）
- ❌ 用 `layout: fact` 放孤零零的数字（academic 主题下左上角空荡荡）
- ❌ 在长中文短语上用 `v-mark.highlight`（渲染会错位）
- ❌ 超过 5 节点的 mermaid TD 流程图（会被裁）
- ❌ 大量 `<v-click>` 渐进披露（导出会漏内容）
- ❌ 章节分隔页后马上再一页全文字（节奏不对）
- ❌ 没导出 PNG 验证就声称"做好了"
- ❌ 写完 slides.md 就收工，不逐页审查
- ❌ 10-15 页就算一个 episode（不够深度，对不起 2 小时的访谈）
- ❌ 整个 deck 只有 0-1 张手绘图（视觉密度不够）
- ❌ 没有核心金句总结页（读者记不住东西）
- ❌ episode 没有返回 landing 的入口（用户迷路）

---

## Episode 必备清单（每个 deck 都要有）

### 结构要求（硬指标）

1. **长度**：至少 **18-24 页**。2+ 小时的访谈至少值得 20 页。
2. **手绘图比例**：**至少 20%** 的页面用 Excalidraw（5 页里有 1 页）。一个 20 页 deck 至少 4 张手绘图。
3. **核心金句页**：倒数第二页必须是"核心金句"——4-6 条精选引言，每条配简短 context。
4. **返回按钮**：每个 episode 必须有 `global-bottom.vue` 提供返回 landing 的入口。
5. **开场**：前 2 页讲清楚"为什么这期特别"——不只是标题，要让读者 10 秒内理解要讲什么。
6. **结构感**：不要平铺直叙。每 3-5 页应该有一次视觉 break（quote / statement / 大图）。

### `global-bottom.vue` 标准模板

每个 `episodes/<id>/` 目录下都应该有这个文件：

```vue
<template>
  <a href="/" class="poddeck-back" title="返回 PodDeck">← PodDeck</a>
</template>

<style scoped>
.poddeck-back {
  position: fixed;
  bottom: 14px;
  left: 14px;
  z-index: 100;
  font-size: 11px;
  color: rgba(30,30,30,0.55);
  text-decoration: none;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0,0,0,0.08);
}
.poddeck-back:hover {
  color: rgba(30,30,30,0.95);
  background: white;
}
</style>
```

### 核心金句页模板

```md
# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"第一个金句原文"
<div class="text-xs opacity-60 mt-1 not-italic">— 出自/context</div>
</div>

<!-- 重复 4-6 次，每条用不同颜色 -->

</div>
```

---

## 🚨 事实准确性（最高优先级）

**这是比任何视觉细节都重要的铁律。** 违反这条的内容必须全部删除。

### 三条不可妥协的规则

1. **每一句引言必须能在 transcript 里 grep 到**  
   不能"Jensen 大概会说..."这样写。不能把其他访谈的内容串到另一个人身上。
   写完后**必须**用 `Grep` 在 `data/transcripts/<id>.txt` 里验证关键词和人名。

2. **不要在不同访谈之间串台**  
   上一期访谈的"miso"是 Boris 说的，不是 Jensen 说的。不要因为两个故事都"感觉对味"就交叉。  
   **每写一个 episode 之前，清空脑子里其他 episode 的 context，只看当前 transcript。**

3. **不要编细节**  
   Jensen 说"DRAM CEO 们"，就不要加"Samsung 和 SK Hynix"。  
   Jensen 说"3 年前"，就不要写"2016-2018"。  
   Jensen 说"GPU 在太空"，就不要给他加一句他没说过的 "Not this decade, but someone's going to do it"。  
   **你不是 ghostwriter，你是 transcriber。**

### 生成流程（硬流程）

写 slides.md 时必须遵守：

1. **先读 transcript 的相关段落**（`Grep` 关键词，然后 `Read` 该行前后 30 行）
2. **每一句引用、每一个数字、每一个具体细节**都先在 transcript 里找到出处
3. 如果找不到原文出处就 **不要写**——这是模糊的框架，用"嘉宾讲了..."带过
4. 对每一页标注心理 tag：**事实 / 框架**
   - **事实**（F）= 嘉宾原话或可直接验证的数字
   - **框架**（F★）= 作者的概括、gloss、或教学用类比（这些必须明确，不能伪装成嘉宾原话）
5. **核心金句页只能用带精确出处的引言**（可以搜到原文的）

### 审查时的必查项

对每一页都要问：

- [ ] 这一页里的每一句引言，都能在 transcript 里找到原文吗？
- [ ] 具体数字（年份、金额、百分比、公司名）都核对过了吗？
- [ ] 有没有把其他 episode 的内容串进来？
- [ ] 我写的"嘉宾讲了一个鲜为人知的故事"里，这个故事是不是被我自己脑补出来的？

**任何一条回答"不确定"——立即去 transcript 验证。不验证不许继续。**

---

## 页面逐页审查流程（必须执行）

**写完 slides.md 不算完**。必须执行以下审查循环：

1. `pnpm run build` 产出 dist
2. 启 `npx serve dist -p 4173`
3. 用 playwright 截图 **每一页**（不是抽样）
4. 逐页 `Read` 截图，对每一页问自己：

   - [ ] 信息密度够吗？还是只有标题 + 一行字？
   - [ ] 视觉上是否有东西？（卡片/边框/颜色/图）
   - [ ] 这一页如果单独存在，读者能理解吗？
   - [ ] 这一页的核心 takeaway 是什么？一句话能概括吗？
   - [ ] 是否和前后页有节奏/层次？或者只是重复的 bullet 列表？
   - [ ] 中文/英文排版有没有溢出、错位？
   - [ ] 如果有图，图和文字有没有冲突/冗余？

5. 对每一页列出具体问题（不是"看起来还行"），然后修
6. 改完重新 build → 重新截图 → 再审查
7. 直到每一页都能自己说"这一页我满意"

**不做这个审查，所有的工作都只是"半成品"**。

---

## 全 deck 长度与结构指南

对于 2+ 小时的访谈，目标结构：

| 段落 | 页数 | 内容 |
|---|---|---|
| 开场 | 2 | Cover + "为什么这期特别" |
| 核心论点 1-3 | 4-6 | 最重要的主题，每个 1-2 页 + 可能的大图 |
| 故事 / 反直觉点 | 3-5 | 嘉宾讲的具体故事、数据、反例 |
| 深度/哲学 | 2-4 | 嘉宾的世界观、价值判断 |
| 核心金句 | 1 | 4-6 条精选引言 |
| 结尾 | 1 | end layout |

**总计：13-19 页是底线，20-25 页是目标**。低于 13 页就是偷懒。
