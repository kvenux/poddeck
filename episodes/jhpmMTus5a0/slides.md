---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The AI Memory Problem: Why Long Context Isn’t Enough — Dan Biderman, Engram Co-founder & CEO'
date: '2026-07'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
themeConfig:
  paginationPagesDisabled: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
---

<div class="mt-14 text-sm font-semibold tracking-[0.28em] text-violet-600">LATENT SPACE · PODDECK</div>

# The AI Memory Problem

## Why Long Context Isn’t Enough

<div class="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-600">
Dan Biderman 谈 AI 的长期记忆：从上下文管理、权重内学习，<br>到真正属于个人与团队的持续学习模型
</div>

<div class="mt-10 text-sm text-slate-500">
Dan Biderman · Engram Co-founder & CEO · 约 50 分钟
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-4 mt-7 text-left">

<div class="p-4 rounded-xl bg-red-50 border-l-4 border-red-500">

### 长上下文 ≠ 理解
窗口能装下数据，不代表模型能整体推理；输入越多，context rot 越明显。

</div>

<div class="p-4 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 记忆不只在文本里
笔记与 RAG 保留可审计事实，参数化记忆承担直觉、关联与技能。

</div>

<div class="p-4 rounded-xl bg-purple-50 border-l-4 border-purple-500">

### 训练时间可以搬家
把反复 prefill 的成本前移，用 cartridge 把知识压成可加载的模型状态。

</div>

<div class="p-4 rounded-xl bg-orange-50 border-l-4 border-orange-500">

### 企业数据会急剧膨胀
AI agent 持续生成代码、文档和演示，知识工作区可能逼近互联网级规模。

</div>

<div class="p-4 rounded-xl bg-green-50 border-l-4 border-green-500">

### 个性化必须有所有权
长期目标不是统一模型，而是每个人都控制一组随使用持续更新的权重。

</div>

<div class="p-4 rounded-xl bg-yellow-50 border-l-4 border-yellow-500">

### 效率就是智能的一部分
更少 token、更少能量完成更难任务，决定 agent 能否走向更长 horizon。

</div>

</div>

---

# 一条始终围绕效率的研究路径

<div class="grid grid-cols-3 gap-5 mt-7 text-left">

<div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
<div class="text-xs font-bold text-slate-500">01 · 行动</div>

### 海军特种行动
识别高风险想法、争取资源、把研究与 pitching 变成可执行项目。
</div>

<div class="p-5 rounded-xl bg-blue-50 border border-blue-200">
<div class="text-xs font-bold text-blue-600">02 · 方法</div>

### 计算神经科学
从小样本与半监督学习出发，用成本—准确率 Pareto 曲线思考问题。
</div>

<div class="p-5 rounded-xl bg-purple-50 border border-purple-200">
<div class="text-xs font-bold text-purple-600">03 · 迁移</div>

### LLM 与 agents
从 Mosaic、Stanford 的大知识库 agent 工作，走向持续学习与模型记忆。
</div>

</div>

<div class="mt-7 p-5 rounded-xl bg-yellow-50 border-l-4 border-yellow-500 text-xl italic">
“how to do more with less”
<div class="text-xs not-italic opacity-60 mt-2">— Dan 对自己学术训练的概括</div>
</div>

---
layout: two-cols
---

# Cartridge：从阅读到学习

<div class="pr-4 text-left">

Dan 描述的流程不是即时检索，而是让模型提前学习一个语料库：

<div class="space-y-3 mt-5">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
先让模型自问问题、做测验、尝试解决任务。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
再用 gradient descent 把知识压进参数化表示。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
需要时加载 cartridge，以更少 token 开始推理。
</div>

</div>

<div class="mt-5 text-sm text-slate-600">
嘉宾给出的目标量级是约 <strong>1000×</strong> 压缩；这是 Engram 的技术主张，不是本 deck 的独立测量。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cartridge-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 菜谱 + 直觉：两种记忆

<div class="pr-4 text-left">

<div class="p-4 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 文本外部记忆
菜谱、实验日志、wiki、RAG；精确、可读、可回查。
</div>

<div class="p-4 rounded-xl bg-orange-50 border-l-4 border-orange-500 mt-4">

### 参数化内部记忆
手感、味觉、关联与创新；无需每次从第一行重新阅读。
</div>

<div class="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 italic text-[15px]">
“current LLMs are like coming into the kitchen first time every time”
</div>

<div class="mt-2 text-xs text-slate-500">作者概括：Engram 要补的不是更多菜谱，而是会被经验改变的厨师。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./chef-memory.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 长上下文的核心误解

<div class="pr-4 text-left">

<div class="text-2xl font-semibold leading-snug mt-3">
可放入窗口，是<strong class="text-red-600">接口能力</strong>；<br>
能跨全部信息推理，是<strong class="text-blue-600">认知能力</strong>。
</div>

<div class="mt-6 p-5 rounded-xl bg-red-50 border-l-4 border-red-500 text-lg italic">
“the more context you feed to the model, the more confused it gets”
</div>

<div class="mt-5 text-sm leading-relaxed text-slate-600">
Dan 把 continual learning 与 memory 看成<strong>伪装成长上下文的问题</strong>：即使理论上能看到整个公司，模型仍要付出读取成本，并在整体推理中丢失准确度。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./context-rot.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 10M token 窗口也没有消除问题

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded-xl bg-green-50 border-l-4 border-green-500">

### 能解决的

- API 不报错，材料可以被一次性送入
- 某些明确、局部、可检索的问题有更大覆盖面
- 少做一部分人工切块与外部 orchestration

</div>

<div class="p-6 rounded-xl bg-red-50 border-l-4 border-red-500">

### 仍解决不了的

- 重读全部历史带来的 token 与 latency 成本
- 大量弱相关信息造成的注意力稀释
- 欠明确任务需要的跨文档整体判断

</div>

</div>

<div class="mt-7 p-4 rounded-xl bg-yellow-50 border border-yellow-200 text-center">
Dan 的判断：context rot 在 <strong>10 million context window</strong> 量级仍会存在。
</div>

---

# Compaction：有效，但天然有损

<div class="grid grid-cols-3 gap-4 mt-7 text-left">

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 选择
模型自己管理上下文，逐步保留某些 token、驱逐另一些 token。
</div>

<div class="p-5 rounded-xl bg-red-50 border-l-4 border-red-500">

### 代价
当前做法倾向于确定性的 in / out；深层 session 里会出现遗忘与混乱。
</div>

<div class="p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">

### 补层
神经记忆 trace 同样有损，但把保留的信息放到权重表示，而非继续堆文本。
</div>

</div>

<div class="mt-7 p-5 rounded-xl bg-slate-50 border border-slate-200 text-xl italic text-center">
“compaction by definition is lossy”
</div>

---

# 18 个月后的知识工作区

<div class="grid grid-cols-3 gap-5 mt-7 text-center">

<div class="p-5 rounded-xl bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">Agents</div>
<div class="mt-3 text-sm">持续生成代码、文档、演示与中间产物</div>
</div>

<div class="p-5 rounded-xl bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-600">18 months</div>
<div class="mt-3 text-sm">Dan 用来描述数据膨胀速度的时间窗口</div>
</div>

<div class="p-5 rounded-xl bg-orange-50 border-2 border-orange-200">
<div class="text-4xl font-bold text-orange-600">Trillions?</div>
<div class="mt-3 text-sm">AI-native 公司内部 proprietary data 的可能规模</div>
</div>

</div>

<div class="mt-7 p-5 rounded-xl bg-yellow-50 border-l-4 border-yellow-500 text-xl italic text-center">
“maybe trillions of tokens”
<div class="text-xs not-italic opacity-60 mt-2">— 明确是嘉宾的前瞻估计，不是已发生的事实</div>
</div>

---

# 文本知识库到了极限，会暴露三个问题

<div class="space-y-4 mt-7 text-left">

<div class="grid grid-cols-[150px_1fr] gap-4 items-center p-4 rounded-xl bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700">更新复杂度</div>
<div>万亿 token 怎样持续生成准确、不过期的 wiki 与索引？</div>
</div>

<div class="grid grid-cols-[150px_1fr] gap-4 items-center p-4 rounded-xl bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700">冷启动成本</div>
<div>不了解公司的 frontier model，每个请求都要重读大量背景。</div>
</div>

<div class="grid grid-cols-[150px_1fr] gap-4 items-center p-4 rounded-xl bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-red-700">整体性缺失</div>
<div>有些答案不在任何单份文件中，只存在于跨项目的缺口、状态与关联里。</div>
</div>

</div>

<div class="mt-6 text-sm text-slate-500">作者概括：检索擅长找到已经写出的事实，不天然等于学习过整个工作空间。</div>

---
layout: two-cols
---

# KV cache：80 GB 悖论

<div class="pr-4 text-left">

Dan 用一个 Llama 模型的系统例子说明 KV cache 的不对称：

<div class="grid grid-cols-2 gap-3 mt-5 text-center">

<div class="p-4 rounded-xl bg-orange-50 border border-orange-200">
<div class="text-3xl font-bold text-orange-600">~80 GB</div>
<div class="text-xs mt-2">读一篇几十 KB 的 Wikipedia 文章时，嘉宾所述的运行中 brain state</div>
</div>

<div class="p-4 rounded-xl bg-blue-50 border border-blue-200">
<div class="text-3xl font-bold text-blue-600">~140 GB</div>
<div class="text-xs mt-2">同一例子中，整个模型的 FP16 参数量级</div>
</div>

</div>

<div class="mt-5 p-4 rounded-xl bg-red-50 border-l-4 border-red-500 text-sm">
短暂读取一篇 Taylor Swift 文章，GPU memory 消耗竟与承载大规模预训练知识的参数同阶。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./kv-cache.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 把 compute 前移到预学习阶段

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded-xl bg-red-50 border-l-4 border-red-500">

### 传统路径：反复 prefill

1. 每次请求重新读 corpus
2. 建立巨大的 KV cache
3. 付出重复 token、memory 与 latency

</div>

<div class="p-6 rounded-xl bg-green-50 border-l-4 border-green-500">

### Engram 路径：预先学习

1. 在其他时间扩大 training compute
2. 保存紧凑的参数化 adapter / cartridge
3. 运行时加载后直接 decode，或只做少量 prefill

</div>

</div>

<div class="mt-7 p-4 rounded-xl bg-purple-50 border border-purple-200 text-center">
这与数据中心把 <strong>prefill</strong> 和 <strong>decode</strong> 拆到不同专用硬件的趋势相呼应。
</div>

---

# 律所案例：哪些 M&A 今年还没完成？

<div class="grid grid-cols-[1fr_70px_1fr] gap-4 mt-7 items-stretch text-left">

<div class="p-5 rounded-xl bg-slate-50 border border-slate-200">

### 输入散在各处
每个 client matter 都有文件、邮件、融资、并购、贷款与交易进度。
</div>

<div class="flex items-center justify-center text-4xl text-slate-400">→</div>

<div class="p-5 rounded-xl bg-red-50 border-l-4 border-red-500">

### 答案是一种缺失
没有文档会直接标明未完成；系统必须逐案理解哪个 loop 没有闭合。
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-6">
<div class="p-4 rounded-xl bg-orange-50 border border-orange-200 text-center">
Frontier model + compaction 可以做<br><strong>但单次查询可能消耗 thousands of dollars</strong>
</div>
<div class="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
Dan 提到 Engram 与 <strong>Harvey</strong> 面对这类超大文件系统和整体性问题
</div>
</div>

---

# 真正难的是整体，而不是单条召回

<div class="mt-8 p-7 rounded-2xl bg-purple-50 border-l-4 border-purple-500 text-2xl italic text-center leading-relaxed">
“where the whole is greater than the sum of its parts”
</div>

<div class="grid grid-cols-3 gap-4 mt-8 text-left">

<div class="p-4 rounded-xl bg-blue-50 border border-blue-200">
<strong>Search</strong><br><span class="text-sm">哪份文件包含某个词或事实？</span>
</div>

<div class="p-4 rounded-xl bg-orange-50 border border-orange-200">
<strong>State</strong><br><span class="text-sm">跨文件的项目现在处于什么阶段？</span>
</div>

<div class="p-4 rounded-xl bg-green-50 border border-green-200">
<strong>Learning</strong><br><span class="text-sm">从全部经验形成可迁移的新关联。</span>
</div>

</div>

<div class="mt-5 text-sm text-slate-500">Dan 的类比：预训练之所以不是对整个 Web 做 RAG，正因为学习会在权重中形成关联。</div>

---

# 路线图：先企业，后个人设备

<div class="relative mt-8">
<div class="absolute left-[16%] right-[16%] top-12 h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-green-300"></div>

<div class="grid grid-cols-3 gap-6 relative text-center">

<div>
<div class="mx-auto w-24 h-24 rounded-full bg-blue-50 border-4 border-blue-300 flex items-center justify-center text-3xl">🏢</div>
<div class="mt-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
<strong>近期</strong><br>企业知识密集、AI 使用频繁，是最现实的持续学习场景。
</div>
</div>

<div>
<div class="mx-auto w-24 h-24 rounded-full bg-purple-50 border-4 border-purple-300 flex items-center justify-center text-3xl">🧩</div>
<div class="mt-4 p-4 rounded-xl bg-purple-50 border border-purple-200">
<strong>中期</strong><br>每个团队与个人拥有可交换、可更新的 parameter-efficient adapters。
</div>
</div>

<div>
<div class="mx-auto w-24 h-24 rounded-full bg-green-50 border-4 border-green-300 flex items-center justify-center text-3xl">💻</div>
<div class="mt-4 p-4 rounded-xl bg-green-50 border border-green-200">
<strong>长期</strong><br>个性化模型状态运行在用户自己的设备上。
</div>
</div>

</div>
</div>

---

# Tamagotchi 式个性化模型

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded-xl bg-green-50 border-l-4 border-green-500">

### 越使用，越适合你

- 读到更多个人与团队数据
- 从每次协作形成新的经验
- 用更少提示理解你的工作方式

</div>

<div class="p-6 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 权重属于使用者

- 用户控制这组模型状态
- 投入数据与反馈的收益回到本人
- 改进不是等待未来的统一版本，而是发生在当前个人模型

</div>

</div>

<div class="mt-7 p-5 rounded-xl bg-yellow-50 border border-yellow-200 text-xl italic text-center">
“the more time they spend with the model, the better it gets for them”
</div>

---
layout: two-cols
---

# 健康记忆，也要学会遗忘

<div class="pr-4 text-left">

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500 text-xl italic">
“a certain amount of forgetting is healthy”
</div>

<div class="grid grid-cols-2 gap-3 mt-5 text-sm">

<div class="p-4 rounded-xl bg-blue-50 border border-blue-200">
<strong>更适合内化</strong><br>高频、稳定、能改变后续行为的知识，例如长期地址或工作习惯。
</div>

<div class="p-4 rounded-xl bg-orange-50 border border-orange-200">
<strong>更适合外置</strong><br>短期、精确、需审计的事实，例如今晚的酒店房号。
</div>

</div>

<div class="mt-5 text-sm text-slate-600">边界并非固定规则：每个人、每家企业的数据分布都不同，人工 heuristic 很快会变成 whack-a-mole。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./memory-placement.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Holy grail：模型自己管理记忆

<div class="grid grid-cols-3 gap-5 mt-7 text-center">

<div class="p-5 rounded-xl bg-blue-50 border-2 border-blue-200">
<div class="text-3xl mb-3">📓</div>

### Notebook
保存可检索、可解释、可审计的信息
</div>

<div class="p-5 rounded-xl bg-purple-50 border-2 border-purple-200">
<div class="text-3xl mb-3">🧠</div>

### Neural memory
用参数化关联承载熟悉感、技能与长期模式
</div>

<div class="p-5 rounded-xl bg-orange-50 border-2 border-orange-200">
<div class="text-3xl mb-3">🧭</div>

### Learned policy
依据显著性、重复频率与可行动性选择读取路径
</div>

</div>

<div class="mt-7 p-5 rounded-xl bg-slate-50 border border-slate-200 text-xl italic text-center">
“the holy grail is have the model learn for itself”
</div>

<div class="mt-4 text-xs text-slate-500 text-center">Dan 明确说仍需要更多突破；这是一项目标，不是已经完成的能力。</div>

---

# 用户反馈不是 ground truth

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded-xl bg-green-50 border-l-4 border-green-500">

### 更紧的学习闭环
用户的 thumbs up / down 或自然语言修正，会直接触发面向该用户的训练与练习。
</div>

<div class="p-6 rounded-xl bg-red-50 border-l-4 border-red-500">

### 仍需判断可信度
用户也会犯错；随着模型能力提高，它必须学会区分有价值反馈与应忽略的反馈。
</div>

</div>

<div class="mt-7 p-5 rounded-xl bg-yellow-50 border border-yellow-200 text-xl italic text-center">
“not everything that a user tells you is ground truth”
</div>

<div class="mt-4 text-sm text-slate-500 text-center">目标不是去掉用户控制，而是不依赖用户监督每一步。</div>

---
layout: two-cols
---

# Memory 也要参与 routing

<div class="pr-4 text-left">

<div class="p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500 text-xl italic">
“the solution will involve some form of routing”
</div>

<div class="space-y-3 mt-5 text-sm">

<div class="p-3 rounded bg-blue-50 border border-blue-200">
熟悉你的长期记忆层先判断：问题在哪里、哪些历史最重要。
</div>

<div class="p-3 rounded bg-green-50 border border-green-200">
简单任务留给更便宜的模型；超出能力时，再调用更强的 frontier model。
</div>

<div class="p-3 rounded bg-orange-50 border border-orange-200">
难点是模型版本持续变化，router 要同时优化能力、时机与成本。
</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./memory-routing.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 效率不是低配，它定义了能力边界

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded-xl bg-slate-50 border border-slate-200">
<div class="text-xs font-bold text-slate-500">当前主范式</div>

### More with more
更大模型、更多数据、更多 test-time compute，把能力推到今天的位置。
</div>

<div class="p-6 rounded-xl bg-green-50 border-l-4 border-green-500">
<div class="text-xs font-bold text-green-600">Dan 期待的下一层</div>

### More with less
更少 token、更少能量、更短路径，才能把同一预算延伸到更长、更难的任务。
</div>

</div>

<div class="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
Dan 将变聪明描述为：用更少能量解决越来越难的问题。
</div>

<div class="mt-3 p-4 rounded-xl bg-yellow-50 border border-yellow-200 text-center italic">
“the more you can do with less the more ambitious tasks you can solve”
</div>

---

# 研究团队要先赢得资格

<div class="grid grid-cols-3 gap-5 mt-7 text-left">

<div class="p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">

### 组合
资深 PhD 提供统计、系统与人机协作直觉；新研究者带来速度与新鲜视角。
</div>

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 专注
团队集中在 memory、continual learning，以及把知识写入参数化表示。
</div>

<div class="p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500">

### 约束
创业公司不能只是 research club；产品必须被分发，并让用户愿意付出信任与预算。
</div>

</div>

<div class="mt-7 p-5 rounded-xl bg-slate-50 border border-slate-200 text-xl italic text-center">
“the thing that's missing is products and products need to be distributed”
</div>

---
layout: two-cols
---

# 个性记忆：新基础设施

<div class="pr-4 text-left">

如果每个人与团队都有独立 adapter，部署形态会完全改变：

<div class="space-y-3 mt-5">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Millions of endpoints</strong> 分散存储在不同位置。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
推理前要从 disk 高效读取到 <strong>HBM</strong>，并快速 swap。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
训练、更新、版本与推理 workload 需要新的调度与隔离方式。
</div>

</div>

<div class="mt-5 text-sm text-slate-600">因此 Engram 所需的不只是 memory researcher，也包括 LLM performance 与大型 API / database 工程能力。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./memory-infra.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 访谈留下的开放问题

<div class="grid grid-cols-2 gap-4 mt-6 text-left">

<div class="p-4 rounded-xl bg-red-50 border-l-4 border-red-500">
<strong>灾难性破坏</strong><br><span class="text-sm">持续更新时，如何不摧毁模型已有能力？</span>
</div>

<div class="p-4 rounded-xl bg-orange-50 border-l-4 border-orange-500">
<strong>学习选择</strong><br><span class="text-sm">什么数据值得进入权重，什么只应短暂保留？</span>
</div>

<div class="p-4 rounded-xl bg-purple-50 border-l-4 border-purple-500">
<strong>可解释与审计</strong><br><span class="text-sm">参数化关联怎样与可追溯的文本证据共同工作？</span>
</div>

<div class="p-4 rounded-xl bg-blue-50 border-l-4 border-blue-500">
<strong>自主 routing</strong><br><span class="text-sm">模型怎样在笔记、个人记忆与 frontier model 之间选择？</span>
</div>

<div class="p-4 rounded-xl bg-green-50 border-l-4 border-green-500">
<strong>个性化所有权</strong><br><span class="text-sm">用户如何控制、迁移、删除属于自己的模型状态？</span>
</div>

<div class="p-4 rounded-xl bg-yellow-50 border-l-4 border-yellow-500">
<strong>经济性</strong><br><span class="text-sm">预训练 cartridge 的成本，何时低于重复读取 corpus？</span>
</div>

</div>

<div class="mt-5 text-xs text-slate-500 text-center">作者概括：访谈给出方向、例子与赌注，没有宣称这些问题已经被完整解决。</div>

---

# 核心金句

<div class="text-xs text-slate-500 mb-3">8 句均逐字回查本期 transcript；标签说明它们在对谈中的语境。</div>

<div class="grid grid-cols-2 gap-3 text-left text-[13px] leading-snug">

<div class="p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500 italic">
“how to do more with less”
<div class="text-[10px] not-italic opacity-60 mt-1">研究取向 · 以成本—准确率曲线理解智能</div>
</div>

<div class="p-3 rounded-lg bg-red-50 border-l-4 border-red-500 italic">
“compaction by definition is lossy”
<div class="text-[10px] not-italic opacity-60 mt-1">上下文管理 · 保留与驱逐必然损失信息</div>
</div>

<div class="p-3 rounded-lg bg-purple-50 border-l-4 border-purple-500 italic">
“where the whole is greater than the sum of its parts”
<div class="text-[10px] not-italic opacity-60 mt-1">企业知识 · 整体状态不是单条文档召回</div>
</div>

<div class="p-3 rounded-lg bg-green-50 border-l-4 border-green-500 italic">
“a certain amount of forgetting is healthy”
<div class="text-[10px] not-italic opacity-60 mt-1">记忆选择 · 并非所有信息都应被内化</div>
</div>

<div class="p-3 rounded-lg bg-orange-50 border-l-4 border-orange-500 italic">
“the holy grail is have the model learn for itself”
<div class="text-[10px] not-italic opacity-60 mt-1">自主学习 · 模型自己判断写入 notebook 或 weights</div>
</div>

<div class="p-3 rounded-lg bg-yellow-50 border-l-4 border-yellow-500 italic">
“not everything that a user tells you is ground truth”
<div class="text-[10px] not-italic opacity-60 mt-1">反馈机制 · 个性化也需要辨别错误信号</div>
</div>

<div class="p-3 rounded-lg bg-cyan-50 border-l-4 border-cyan-500 italic">
“the solution will involve some form of routing”
<div class="text-[10px] not-italic opacity-60 mt-1">系统组合 · memory layer 与多种模型协作</div>
</div>

<div class="p-3 rounded-lg bg-slate-50 border-l-4 border-slate-500 italic">
“the more you can do with less the more ambitious tasks you can solve”
<div class="text-[10px] not-italic opacity-60 mt-1">能力边界 · 效率决定可承担的 horizon</div>
</div>

</div>

---
layout: end
---

# “My weights have been updated.”

<div class="mt-6 text-lg text-gray-300">— Dan Biderman，在这场边做饭边谈记忆的对话结尾</div>

<div class="mt-10 text-sm tracking-wide text-violet-600">LATENT SPACE · PODDECK</div>

<style>
.slidev-layout h1 {
  font-weight: 750;
  letter-spacing: -0.025em;
}
.slidev-layout h3 {
  margin-bottom: 0.35rem;
}
.slidev-layout p,
.slidev-layout li {
  line-height: 1.55;
}
</style>
