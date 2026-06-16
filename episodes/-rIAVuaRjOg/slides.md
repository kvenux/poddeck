---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Making DeepSeek v4 outperform Opus 4.7 with Taste — Ahmad Awais, CommandCode.ai'
info: |
  Ahmad Awais 在 Latent Space 聊他怎么用一套确定性的 "repair logic"
  让开源模型在编码 agent 里跑出 Opus 级体验，以及 Taste 这个自动学习的偏好引擎。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Making DeepSeek v4<br/>outperform Opus 4.7<br/>with Taste

<div class="mt-6 text-xl opacity-80">Ahmad Awais · CommandCode.ai</div>

<div class="mt-2 text-sm opacity-60">Latent Space · 2026 年 5 月</div>

<div class="mt-10 px-12 text-base opacity-75 italic">
关于"工具调用混乱"、3,200 行修复代码、和一个让开源模型瞬间变聪明的<br/>
确定性补丁系统。
</div>

---

# 这一期为什么值得听

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个反直觉的发现
DeepSeek/Kimi/MiniMax 在编码 agent 里"很慢、很笨"——其实问题不在模型本身。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 一套可复用的方法
3,200 行确定性 "repair files" → 16,000 条 patch，覆盖 600 亿 tokens。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 同一套思路，跨域复制
工具调用 → 设计 slop → 安全代码，本质都是"contract gap"。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Taste：自动学习的偏好引擎
每个 repo 一份 markdown，记录你的微决策，合并时由 PR 审核。

</div>

</div>

---

# 嘉宾：Ahmad Awais

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**履历**

- 写了 27 年代码，发布 300+ 开源项目
- 13 年 WordPress core 经验
- VP DevRel @ RapidAPI
- 在 Google / Airbnb 短暂工作过
- 现为 **CommandCode.ai** 创始人

**与 AI 的起点**

2020 年 7 月，Greg Brockman 和 Sam Altman 给了他 GPT-3 早期访问。  
他做的第一件事：**让 LLM 补全下一行代码** —— 比 GitHub Copilot 早一年多。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 项目时间线

`2020` Corona CLI 走红，第一个 AI CLI 玩具 (CLAI)  

`2024` LangBase 上线，做 AI cloud / 记忆基础设施  
**1.2B agent runs / 月**

`2025` 转向编码 agent，命名 **Command Code**  
$5M 种子轮 · Matt Mullenweg 是天使投资人之一  

`2026.5` 这次访谈：揭示 "tool confusion" 现象

</div>

</div>

---

# 一个核心信念

<div class="mt-12 p-8 text-2xl italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-40 rounded">

"there is only one type of agent, and that is a coding agent. it can do it all."

</div>

<div class="mt-4 text-sm opacity-60 text-right">— Ahmad, 解释为什么从 LangBase 的记忆/MCP 抽象转向纯编码 agent</div>

<div class="mt-10 grid grid-cols-2 gap-6">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 为什么是编码 agent
能写代码 = 能调用任何工具、生成任何工件、修改自己的环境。把这能力藏在 "memory primitive" 后面是浪费。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 紧接的悖论
"programmers stopped writing code." 那 taste 从谁那儿学？  
**答：直接从模型本身学。**

</div>

</div>

---

# 然后他发现了"Tool Confusion"

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

时间：2026 年 5 月，DeepSeek V4 Pro 刚发布约一个月。  
社区一半人说 "DeepSeek 好到吓人"，一半人说 "DeepSeek 慢得离谱"。

Ahmad 在 Command Code 上每天处理几十亿 tokens，他需要做出判断——**DeepSeek V4 Pro 是不是真能替代 Opus**。

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 现象
- 一个 tool call 失败，模型不会改正
- 它会把**同一个错误调用**重复发出
- 在十亿 tokens 的样本里，**平均 56 次**

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 他给它起的名字
**Tool Confusion**

不是模型笨，是模型**听不进**返回来的 schema 错误。

</div>

</div>

---
layout: two-cols
---

# Tool Confusion 是怎么发生的

**典型场景**

Agent 想 list 一些文件 / 读一个日志 / 跑一段 shell。

它发出 tool call，但 args 形状错了——比如该传数组的地方传了个 JSON 字符串，该传 number 的地方传了 null。

**Zod 解析失败 → 抛错给模型。**

正常情况下，一个"足够聪明"的 LLM 应该读懂 schema error 并修正下一次调用。

**DeepSeek V4 Pro 不会。**

它会原样重发，平均 **56 次**。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tool-confusion.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 那个出名的标签：alpha male energy

<div class="mt-10 p-8 text-2xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"DeepSeek V4 Pro has this weird alpha male energy where whatever it sends you, it thinks that that is the right thing to do."

</div>

<div class="mt-6 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">

**Ahmad 的假设**（他自己说这是 hot take / vibe 推测）：

很多开源模型在训练中被告知 *"你看到的训练数据都是高质量的、来自更强的模型"*——  
所以它们的天性变成：**我说的就是对的，别试图纠正我。**

</div>

---
layout: two-cols
---

# 解法：Repair, don't reject

**核心思路**

不要把 Zod error 原样抛回去——**先把 args 修好，把结果返回，然后顺便附一个 hint** 告诉模型"你本来该这么写"。

**关键观察**

> "the moment you send the result with the repair logic, right after that the third tool call is fixed."

不是第二次。**第三次**调用就开始自我纠正。

**结构**

- 每条 repair 是一个文件
- 一个 patch = 一个 file（像 DB migration）
- 起步 **3,200 行** → 现在 **16,000 条 variation**

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./repair-logic.excalidraw"
  class="w-[520px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 这个比喻最能解释 repair 哲学

<div class="mt-12 p-8 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"think of it like you're teaching somebody how to drive a car. and they're about to hit another car. instead of telling them what to do correctly, you'll first try to save them and then you will explain why you saved them."

</div>

<div class="mt-8 grid grid-cols-3 gap-3 text-center">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 传统做法
抛出 schema error  
→ 模型懵 → 重试 → 还是错

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Repair 做法
先修好 args，把**正确结果**塞回去  
+ 附一句 "本来该这么写"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 第三次调用
模型已经吃到正确结果  
**自动改对**下一次输入

</div>

</div>

---

# 为什么 Claude Code 不替你修

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

许多人想用开源模型，但用法是——**把 Claude Code 当 harness**，改一下 base URL 和 API key，指向 DeepSeek。

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### Claude Code 的隐藏
- 工具调用错误**藏在 Ctrl-O 后**
- 用户根本看不到 "每个 session 50+ 次 tool call 失败"
- 只感觉 "DeepSeek 怎么这么慢"

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Ahmad 的判断
> "they didn't build their coding agent for open models."

修开源模型不是 Anthropic 的利益所在——所以错误被静默吞掉是合理的。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**作者概括**：这不是阴谋，是产品定位。但副作用是——开源模型在 Claude Code 里永远拿不到公平评测。

</div>

---

# 规模：这不是 DeepSeek 独有

<div class="mt-8 grid grid-cols-4 gap-3 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 模型覆盖
<div class="text-3xl font-bold text-blue-600 my-2">DeepSeek<br/>Kimi<br/>MiniMax</div>
<div class="text-xs opacity-70">同一个 pattern</div>

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### Repair 变体
<div class="text-4xl font-bold text-green-600 my-2">16,000</div>
<div class="text-xs opacity-70">不同的修复规则</div>

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### 累计 tokens
<div class="text-4xl font-bold text-orange-600 my-2">600 B</div>
<div class="text-xs opacity-70">作为修复数据来源</div>

</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### 起步代码量
<div class="text-4xl font-bold text-purple-600 my-2">3,200</div>
<div class="text-xs opacity-70">行的初版 repair 代码</div>

</div>

</div>

<div class="mt-8 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

> "we have been able to figure out how to deterministically fix tool calling for open source models or open models."

这套补丁可以拆出去，任何编码 agent 都能用。Ahmad 把它公开了。

</div>

---

# 一个 vibe check：投资人也吓了一跳

<div class="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">

Ahmad 推送 repair 更新后，他们的投资人之一——**Tom Preston-Werner 的基金 PW**——的 GP 私聊问他：

</div>

<div class="mt-6 p-8 text-2xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"what did you do? why is DeepSeek V4 flash super solid now?"

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 修复前
DeepSeek V4 flash 在他们家几乎不可用——tool call 失败堆积。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 修复后
"the vibe of the model completely changes. it starts doing things in a different way."

</div>

</div>

---

# 一个反直觉的副作用：权限让模型变笨

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

Ahmad 观察到的现象：**任何编码 agent，开着 permission prompts 跑时模型更笨；完全 bypass permissions 跑时模型更聪明。**

即使你一直按 yes / accept，模型也会被 "permission block 的慢" 引偏方向。

</div>

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 有权限阻塞时
- tool call 节奏被打断
- 模型更保守
- 探索能力下降

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 完全 bypass 时
- 更有创造力
- 探索得更多、更深
- 能连续跑更长时间

</div>

</div>

<div class="mt-6 p-3 text-sm text-center opacity-70 italic">

**作者概括**：tool call 错误少 → 模型上下文不被噪声污染 → 行为质量更高。这与他的 "repair logic 让模型瞬间聪明" 的发现是同一回事。

</div>

---

# 一个具体的极端用户

<div class="mt-8 grid grid-cols-3 gap-3 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 单用户 tokens
<div class="text-4xl font-bold text-blue-600 my-2">70 B</div>
<div class="text-xs opacity-70">DeepSeek 上累计</div>

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### 单 session 时长
<div class="text-3xl font-bold text-orange-600 my-2">12 小时+</div>
<div class="text-xs opacity-70">"constantly run DeepSeek<br/>with Command Code"</div>

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### 怎么被发现的
<div class="text-2xl font-bold text-green-600 my-2">弄崩了 usage 页</div>
<div class="text-xs opacity-70">数字溢出 → 排查发现</div>

</div>

</div>

<div class="mt-8 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

**Ahmad 自评**："I personally have not done that, right?"  
连他自己都没这么 hardcore 用过——但这正是 tool confusion 修好之后才可能出现的用法。

</div>

---

# $1/月的 Go Plan：用价格证明开源能打

<div class="mt-6 grid grid-cols-2 gap-6">

<div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 为了证明给社区看

他们推出 Go Plan：

- 价格：**$1 / 月**
- 配额：**6 亿 tokens** 的 DeepSeek 免费 pro

> "just to prove like open models are actually really really good and they are catching up."

</div>

</div>

<div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">

### 后续效应

Ahmad 觉得（他用了 "I think I would it wouldn't be too far to say"）这件事可能间接推动了 DeepSeek 自己降价——既然别人能用 DeepSeek 跑出 Opus 体验，他们也该这么定位自己。

</div>

<div class="mt-4 p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 一个意外的后续

DeepSeek 团队在 Ahmad 的帖子下被大量 tag → 一周后宣布**招聘 DeepSeek Code 的工程师**。

</div>

</div>

</div>

---
layout: two-cols
---

# 同一招怎么打到"设计 slop"

**问题**

所有 LLM 在生成 UI 时都会写出**同一种丑**：
- 永远的 indigo 紫色渐变
- 3 张卡片一排，左边一道边线
- HSL 颜色，lightness 完全失控

**Ahmad 的发现**

跟一群优秀设计师聊后，他发现：

设计 slop 也是**有限集合**——可以被确定性修。

**框架长这样**

- **24** 份参考文档
- **10** 个 design smell
- **7** 个表面意图模式（监控、chrome 等）
- 强制 LLM 用 **OKLCH** 而不是 HSL

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./design-slop.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一句话总结整个思路

<div class="mt-16 p-8 text-2xl italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 rounded text-center">

"it's not a capability gap. it's more like a contract gap in what your hardness is telling an LLM to do versus what your user is saying."

</div>

<div class="mt-10 grid grid-cols-3 gap-3 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 工具调用
Zod schema 失败 → patch 修复 → 继续

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### UI 设计
indigo 渐变 → /design skill → OKLCH

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 安全代码
（在做）从日志学常见漏洞 → 自动 patch 包

</div>

</div>

<div class="mt-6 p-3 text-sm text-center opacity-70 italic">

模型能力不缺，缺的是 "你想要什么" 的明确合同。

</div>

---

# 颜色细节：为什么强迫 LLM 用 OKLCH

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### LLM 用 HSL 时
- 它们**没法控制 lightness**
- 同一调色板里几个颜色"看起来不一致"
- 对人眼非常明显

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### LLM 用 OKLCH 时
- 颜色空间感知均匀
- LLM 居然**很擅长**用 OKLCH 调色
- 整套配色看起来专业

</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

> "I personally don't use OKLCH, but apparently LLMs are really good at it."

Ahmad 不爱用，但他的设计师朋友们都用——这变成 Command Code design skill 的 hard rule 之一。

</div>

<div class="mt-4 p-3 text-sm opacity-70 italic">

附注：Ahmad 在原文里说他"love the purple color"——他抱怨的不是紫色，是"indigo slop"那个特定的紫蓝渐变。

</div>

---
layout: two-cols
---

# Taste：另一个产品支柱

**核心定义**

Taste 是一个 **meta-neuro-symbolic** 模型。  
不是用户写规则，而是从你的行为**自动学**——并产出 markdown 文件，提交进你自己的 git repo。

**例子**

- 总用 `pnpm` 装包，但 link 本地 CLI 时用 `npm link`
- 喜欢 `vitest` + `ts-up`
- PR 工作流："先 rebase main → push branch → 切回 main"

**关键设计**

KL-divergence loop：**如果 LLM 已经知道的事，就不要进 taste 文件**——那是没用的 context。

**Skills vs Taste**

> "taste is the highest order bit, which is managing your skills and rules."

Taste 是引擎，自动管理 skills。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./taste-engine.excalidraw"
  class="w-[520px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Rules 是宏决策，Taste 是微决策

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Rules / agent.md / claude.md
**人坐下来写的宏决策。**

- "always use TypeScript"
- "prefer pnpm"
- "test with vitest"

**问题**：
- 你坐下来时**想得很宏大**
- 写完后**永远不更新**
- 真出错时**已过时**

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Taste
**机器从合并时刻自动学的微决策。**

- "我的 PR 流程是 rebase → push → 切回 main"
- "Commander 已被 Meow 替换掉"
- "这个 --local debug option 不要进 help"

**优点**：
- **永不过时**——每次 merge 都更新
- 完全透明——是 repo 里的 markdown
- PR 审查时你能看到每条变化

</div>

</div>

---

# Taste 真长这样

<div class="mt-6 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

Ahmad 给的例子：他用 Command Code 建过 **70+ 个 CLI**。  
所有这些经验最后浓缩成**一个**关于 CLI 建设的 taste 文件——很小、很具体。

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 提取出的微规则示例

- 用 `pnpm` 做 build dependencies
- 版本号从 `0.0.1` 起步
- 交互场景用 **clack**
- 命令注册用 **commander → meow**（已被自动替换）

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 复用方式

```
$ npx taste pull
```

把这个文件拉到新仓库 → 任何 coding agent 接到 "follow my taste of building CLIs" 就能复刻你的口味。

</div>

</div>

---

# 一个聪明的成本组合拳

<div class="mt-10 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">

Ahmad 观察到他们 Discord 里**正在发生的用法**：

</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-center">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 第一步：起手
用**高质量贵模型**（Opus、GPT 5.5）跑一个项目  
→ 在过程中**沉淀** taste 文件

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 第二步：复制
带着这份 taste 文件去开下一个项目

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 第三步：降本
用**便宜模型**接着干  
便宜模型 + 好 taste ≈ 贵模型独立工作

</div>

</div>

<div class="mt-8 p-5 bg-purple-50 border-l-4 border-purple-500 rounded text-center italic">

Taste 是把贵模型的"判断力"凝固成 markdown，让便宜模型借用。

</div>

---

# 一个 70+ 开发者研究的数据点

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

Command Code 团队跑过一个**70+ 开发者**的研究，测的是——

**"用户需要手动编辑 LLM 生成的代码 / 中途打断方向"的次数**。

</div>

<div class="mt-8 p-8 text-2xl italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 rounded text-center">

"they found that their number of edits or steers went down."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 含义
不是 LLM 变聪明了，是它**更早就被告知**了你的口味——所以一开始就不会走偏。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 配合 repair logic 看
Repair 修的是 tool 层失误，Taste 修的是品味层失误。两层一起，让中途打断的成本降到最低。

</div>

</div>

---
layout: two-cols
---

# 路线图：三种哲学，他们选 Apple

**即将发生的事**

- 即将**开源** Command Code（6 年的 codebase）
- 希望在 SF 的 AI Engineer Conference 上宣布
- Matt Mullenweg 听说后联系，**成为天使投资人之一**

**三种产品哲学**

- **Windows** —— 每个游戏都能跑 · Open Code
- **Linux** —— 你造自己的驱动 · Pi
- **Apple** —— best of best, 可 hack · **Command Code**

不做 "1500 个模型的 soup"——选择有限模型 + 可深度 hack。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-philosophies.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一个有趣的尾声

<div class="mt-10 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### DeepSeek Code 来了

Ahmad 发完那个 tool confusion 帖之后**约一周**，DeepSeek 官方宣布要做 **DeepSeek Code**——也就是他们自己的编码 agent。

但 Ahmad 提醒：DeepSeek Code 只会服务 DeepSeek 模型。Command Code 的卖点是**跨模型**。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Qwen 3.7 Max 异常受欢迎

访谈录制时，**Qwen 3.7 Max** 刚发布 2–3 天，已经是 Command Code 上第二常用的模型。

> "Qwen 3.7 max is the second most used model on Command Code right now. it's just two or three days old."

开源模型的迭代速度可能比我们以为的更快。

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句（均经 transcript 验证）：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"there is only one type of agent, and that is a coding agent. it can do it all."
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么从 LangBase 抽象转向纯编码 agent</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"programmers stopped writing code. so, who are we going to learn taste from? we started learning taste from models."
<div class="text-xs opacity-60 mt-1 not-italic">— Taste 系统的起源</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"DeepSeek V4 Pro has this weird alpha male energy where whatever it sends you, it thinks that that is the right thing to do."
<div class="text-xs opacity-60 mt-1 not-italic">— Tool Confusion 现象的拟人化</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"like teaching somebody how to drive a car — instead of telling them what to do correctly, you'll first try to save them and then explain why you saved them."
<div class="text-xs opacity-60 mt-1 not-italic">— Repair logic 的核心比喻</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"it's not a capability gap. it's more like a contract gap in what your hardness is telling an LLM to do versus what your user is saying."
<div class="text-xs opacity-60 mt-1 not-italic">— 设计 slop / 工具失败的共同诊断</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"taste is the highest order bit, which is managing your skills and rules."
<div class="text-xs opacity-60 mt-1 not-italic">— Taste 与 Skill 的关系</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"build it like Apple. it will have the best of the best models, both open and closed. it will not have every model, but it will be hackable in any way."
<div class="text-xs opacity-60 mt-1 not-italic">— Command Code 的产品哲学</div>
</div>

</div>

---
layout: end
---

# 模型不是不够聪明<br/>是没人告诉它该听话

<div class="mt-8 text-base opacity-70 italic">

"the vibe of the model completely changes. it starts doing things in a different way."

</div>

<div class="mt-4 text-sm opacity-60">

Ahmad Awais · CommandCode.ai · Latent Space, 2026

</div>
