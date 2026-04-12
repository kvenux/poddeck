---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'State of AI 2026 — Raschka · Lambert · Fridman'
info: |
  Lex Fridman #490 · Sebastian Raschka & Nathan Lambert
  2026 年初的一次"AI 现状盘点": labs、架构、scaling、post-training、
  AGI、开源、CUDA、100 年展望。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
fonts:
  sans: 'Inter'
  serif: 'Source Serif Pro'
---

# State of AI in 2026

<div class="text-lg opacity-80 mt-4">Labs · Architectures · Post-training · AGI · Open Models</div>

<div class="mt-10 text-sm opacity-60">
Sebastian Raschka · Nathan Lambert · Lex Fridman<br/>
Lex Fridman Podcast #490 · 2026
</div>

<div class="mt-8 text-xs opacity-50">
两位一线研究者 + 一位访谈者,对 2025 年的全部技术浪潮做一次 stereo view 式的盘点:<br/>
DeepSeek 时刻、Opus 4.5 神话、RLVR 的真相、AI 2027、以及 100 年后的世界。
</div>

---

# 为什么这一期值得看

<div class="text-sm opacity-70 mb-4">这不是某一家公司的内部独白,而是两个"造过模型、写过书、在 X 上发过推"的研究者同席对谈。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Sebastian Raschka
《Build a Large Language Model (From Scratch)》作者。
从 GPT-2 一路手撕到 Qwen3 / Gemma 3,最能"从架构里读出故事"的那种人。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Nathan Lambert
AI2 研究员,RLHF 书作者,atom 项目发起人。
frontier 与 open 两边都站过,看 RLVR / post-training / 政策的视角最完整。

</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-xs opacity-70">
<div class="p-3 rounded bg-gray-50 border">架构层: GPT-2 到今天到底变了多少?</div>
<div class="p-3 rounded bg-gray-50 border">训练层: pre / mid / post 各自的杠杆</div>
<div class="p-3 rounded bg-gray-50 border">世界层: 政策、开源、100 年后的样子</div>
</div>

---

# 谁在赢?

<div class="text-sm opacity-70 mb-4">问的是"state of AI 2026",答案从第一分钟就开始拆解。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Sebastian:没有赢家通吃
研究员在实验室之间不断跳槽,ideas 不再是专有的。
**差异化靠的不是想法,而是预算和硬件约束。**

<div class="mt-2 text-xs opacity-60">"I don't see currently a winner takes all scenario"</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Nathan:被人力和文化卡住
"ideas flow freely",但大部分 **bottlenecked by human effort**。
Anthropic 目前呈现出的 "the least chaotic" 就是一种优势。

<div class="mt-2 text-xs opacity-60">原话见 transcript L130 / L133</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">
"the most recent model is probably always the best model."
<div class="not-italic text-xs opacity-60 mt-1">— Sebastian,on frontier dynamics</div>
</div>

---

# DeepSeek 时刻:最大的红利不是模型

<div class="text-sm opacity-70 mb-4">DeepSeek 赢的是 **hearts of the people who work on open weight models**。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 真正发生的事
DeepSeek v3 / R1 的 tech report 之详细,在行业里几乎是异常值。
在中国,它触发了类似 ChatGPT 在美国的"人人要一个 chatbot"的冲击。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 涟漪效应
> "DeepSeek kicked off a movement within China."

2025 年一个夏天,中国出现了 4-5 个 DeepSeek 级别的开源模型,
美国是零。这是 Nathan 写 atom 项目的直接诱因。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
**作者概括**:China 的开源 **不是产品**,而是一场生态位争夺——"让世界上的人用你的模型"本身就是战略目标。
</div>

---

# 实验室坐标系

<div class="text-sm opacity-70 mb-4">Nathan 描述的现实是:每家都在解同一批问题,只是姿态不同。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Anthropic
"culturally known for betting very hard on code"。
Opus 4.5 的 hype 被两人都形容成 "almost like a meme"。
Claude Code 是当下最清晰的 flywheel。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### OpenAI / Google
ChatGPT 和 Gemini 面向 **broad user base**——亿级用户解决日常问题。
"the hype about the coding may not be represented the actual use."

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### DeepSeek
由高频交易对冲基金 High-Flyer 支撑,沟通上非常 secretive,
但在 **技术报告层面一直开放**。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### MiniMax / Z.AI
已经申报 IPO,在主动做 **Western mind share** 的 outreach。
和 DeepSeek 完全不同的路径。

</div>

</div>

---

# "Use it until it breaks"

<div class="text-sm opacity-70 mb-4">问 "哪家模型最好",Sebastian 的回答是一种 **使用者实用主义**。</div>

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 italic text-lg">
"you use it until it breaks and then you explore other options."
<div class="not-italic text-xs opacity-60 mt-2">— Sebastian,transcript L518-534</div>
</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-sm">

<div class="p-3 rounded bg-gray-50 border">
**浏览器类比**<br/>
<span class="text-xs opacity-70">没人会把同一个网址粘到 Chrome / Firefox / Safari 去对比,除非某个渲染坏了。</span>
</div>

<div class="p-3 rounded bg-gray-50 border">
**LLM 同理**<br/>
<span class="text-xs opacity-70">绝大多数人不跑 arena,而是用到遇到问题才换。</span>
</div>

<div class="p-3 rounded bg-gray-50 border">
**flywheel 的含义**<br/>
<span class="text-xs opacity-70">所以 ChatGPT 的 muscle memory 本身就是护城河的一部分。</span>
</div>

</div>

---

# Claude Code vs Codex vs Cursor

<div class="text-sm opacity-70 mb-4">两人共同的工作流,给出了罕见细致的 side-by-side 比较。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Cursor
看每一行 diff,深度理解代码。
micromanage 生成过程的那一派。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Codex
"right now for me the sweet spot"——帮忙,但不完全接管。
Sebastian 自称 "control freak"。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Claude Code
"a better utilization of Cloud Opus 4.5"。
Nathan: "the Claude Code is way better in that domain. It's remarkable."

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
"One of the reasons I do use claude code is to build the skill of programming with English."
<div class="not-italic text-xs opacity-60 mt-1">— Sebastian,L625-626</div>
</div>

---

# 为什么 "from scratch" 依然是最好的学习路径

<div class="text-sm opacity-70 mb-4">Sebastian 的书之所以一直重要,是因为它回应了一个老派的信念:</div>

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 italic text-lg">
"code... it doesn't lie. It's math basically."
<div class="not-italic text-xs opacity-60 mt-2">— Sebastian,L690-691</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-gray-50 border">

### 图和文字会骗人
Figures can have mistakes. Explanations can be misunderstood.
But if the code runs, **you know it's correct**.

</div>

<div class="p-4 rounded bg-gray-50 border">

### 所以他写书的方式是
把 GPT-2 先写死,再在 bonus materials 里用"加 diff"的方式从 GPT-2 演化到 Llama 3 / Qwen3 / Gemma 3。

</div>

</div>

---
layout: two-cols
---

# 架构 lineage:从 GPT-2 到 2026

<div class="text-sm opacity-70 mb-3">zoom out 到一个让人意外的结论:</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-sm mb-3">
"It's not really fundamentally that different. It's still the same architecture."
</div>

<div class="text-sm space-y-1">

- GPT-2 → GPT-OSS 只是几个 **tweak** 的叠加
- MoE、GQA、RMSNorm、SwiGLU 都不改变 **decoder-only transformer** 这个骨架
- Sebastian 在书的 bonus 材料里就是这么干的:从 GPT-2 加 diff → Llama / Qwen3 / Gemma 3

</div>

<div class="mt-3 text-xs opacity-60">
"It's kind of like a lineage in a sense."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-curve.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 2025 最常见的 4 个架构 tweak

<div class="text-sm opacity-70 mb-4">Sebastian 的核心清单——"都不是新东西,但今年都成了标配"。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Mixture of Experts (MoE)
256 个小 FFN + 一个 router。
**pack more knowledge without using it all at once**——这句话是 MoE 的全部要点。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Multi-Latent Attention / GQA
从 multi-head → group query → multi-latent,每一步都是把 **KV cache 压小** 的 trade-off。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Sliding Window / Gated DeltaNet
让 attention **线性化**——Qwen3-Next 用 gated delta net,state-space model 风格。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### DeepSeek v3.2 sparse attention
一个 lightweight indexer 先选 token,再对选出来的算 attention。
**"almost comes back to the original idea of attention"**。

</div>

</div>

---
layout: two-cols
---

# 三个 scaling 轴,不是一个

<div class="text-sm opacity-70 mb-3">2026 年的"scaling laws"不再是 2020 年那条曲线。</div>

<div class="space-y-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**Pre-training** —— soak up the knowledge
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**Mid-training** —— 高质量数据 + 领域聚焦
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**Post-training** —— SFT / DPO / RLVR / RLHF,the "skill unlock"
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs italic">
"post training is more like the skill unlock where pre-training is like soaking up the knowledge."
<div class="not-italic opacity-60 mt-1">— Sebastian,L1942-1944</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-pillars.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Pre-training 还活着,只是贵

<div class="text-sm opacity-70 mb-4">"scaling is dead" 是 meme。两人都不这么认为。</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 13 数量级
<div class="text-3xl font-bold text-blue-600 my-2">"held for 13 orders of magnitude"</div>
<div class="text-xs opacity-70">—— Nathan 引用实验室 leadership 的说法,scaling 在 13 个数量级的 compute 上一直没坏</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### $5M 的 DeepSeek
<div class="text-3xl font-bold text-green-600 my-2">$5M</div>
<div class="text-xs opacity-70">pre-training "at cloud market rates"——训练其实便宜;<strong>serving 才是 billions</strong></div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 一天烧 $100K
<div class="text-3xl font-bold text-red-600 my-2">$100K / day</div>
<div class="text-xs opacity-70">1000 GPU 的 cluster rental,每天的账单。这不是训练的钱,是 serving 的钱。</div>

</div>

</div>

<div class="mt-6 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**结论**: model 会不会继续变大,答案是 **scaling 大概率继续成立**——但真正的约束是商业化,不是物理学。

</div>

---

# 2026 是"gigawatt 集群落地年"

<div class="text-sm opacity-70 mb-4">Nathan 给出的时间线,非常具体。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 供给端
- 2026 年 Blackwell **gigawatt-scale** 数据中心陆续 online
- 合约是 **2022-2023 年就签掉的**,lead time 2-3 年
- xAI 2026 年初到 1 GW,年底 2 GW

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 消费端
- "we will see a **$2,000 subscription** this year"
- 已经有 $200/月了,再 10x 并不奇怪
- 服务对象是 "让它真的跑起来"的重度用户

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">
"these new clusters are coming. The labs are going to have more compute for training. They're going to utilize this."
</div>

---

# RLVR:aha moments 是不是假的?

<div class="text-sm opacity-70 mb-4">这是全场最热闹的一次争论。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Sebastian 的立场
> "I think the aha moments are kind of fake."

因为预训练已经见过互联网上 **所有人解题时自言自语的文字**。
RLVR 只是在 **放大已有的行为**,不是学到新知识。

<div class="text-xs opacity-60 mt-2">L2954</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 他自己的实验
Qwen 3 base + RLVR on MATH500:
<div class="text-3xl font-bold text-green-600 my-2">15% → 50%</div>
<span class="text-xs opacity-70">只跑 50 步、几分钟。</span>

**结论**:这不是学会了数学,是把已有的 reasoning 电路 **unlock** 了。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**Nathan 的反驳**:Qwen 的例子有 **数据污染嫌疑**——中训练阶段见过几乎一样的题目。
所以这场 "aha 是真是假"的争论,本身还没有清晰结论。
</div>

---

# RL 的成本分布:和 pre-training 相反

<div class="text-sm opacity-70 mb-4">pre / post 的钱流完全不同——这决定了哪种能力在哪个阶段长出来。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Pre-training
- 百万美元 → 亿美元量级的单次实验
- 教模型 **知识本身**
- 实验室里最大的账单

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Post-training (RLVR / RLHF)
- 相对便宜得多
- 教模型 **如何用这些知识解题**
- 不是存新东西,而是 **amplify existing behaviors**

</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
**Sebastian**: "there are papers on RL for pre-training but I don't think anyone does that in production." 
—— RL-on-pretraining 目前还只是 toy example。
</div>

---

# 数据质量是新的 compute

<div class="text-sm opacity-70 mb-4">pre-training 从"把互联网灌进去",变成"精挑细选再灌进去"。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### OCR 是合成数据的新宠
DeepSeek OCR、AI2 的 olmo-OCR、各家都在做——
把 PDF / 图片里的文字提出来,变成 trillions of tokens 的新训练数据。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ChatGPT 回答变成训练数据
"you could train on those best answers and that's synthetic data"——
和早期 ChatGPT 幻觉遍地时的数据完全不同档次。

</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-center text-sm">

<div class="p-3 rounded bg-gray-50 border">
**小研究组**<br/>
<span class="text-xs opacity-70">5-10 万亿 tokens</span>
</div>

<div class="p-3 rounded bg-gray-50 border">
**Qwen 公开**<br/>
<span class="text-xs opacity-70">~50 万亿</span>
</div>

<div class="p-3 rounded bg-gray-50 border">
**closed lab 传言**<br/>
<span class="text-xs opacity-70">~100 万亿</span>
</div>

</div>

---

# Anthropic 的 $1.5B 和解:被忽视的里程碑

<div class="text-sm opacity-70 mb-4">"this happened in 2025 and we totally forget it" —— Nathan 原话。</div>

<div class="mt-6 p-6 rounded bg-red-50 border-l-4 border-red-500">

### 事实
- Anthropic **买** 了数千本书并扫描 → 法庭认定 fair
- Anthropic **torrent** 了一批书 → 法庭认定 culpable
- 被判赔给作者 **$1.5 billion**

<div class="text-xs opacity-60 mt-2">L2197-2211</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Nathan:
"such a mind-boggling lawsuit that kind of just came and went... that is so much money from the VC ecosystem."

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Lex:
> "These are court cases that will define the future of human civilization."

这些判例会塑造 future data / IP 的补偿机制——**Spotify 模式** 是一个类比方向。

</div>

</div>

---

# Character training:训练"语气"而不是"事实"

<div class="text-sm opacity-70 mb-4">Nathan 最感兴趣的一个小众方向。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 问题
怎么让模型 **funny / sarcastic / serious**?怎么避免它被训成一个 **too positive** 的应声虫?

"how you make the model funny or sarcastic or serious and like what do you do to the data to do this?"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Nathan 的定位
"there's so little out of it... I think there's like two or three people in the world that were very interested in this."

他指导的一个 Oxford PhD 学生在 7B 参数 + LoRA 上跑了相关研究,**算力门槛低,命题大**。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
**为什么重要**: Anthropic 把 character 当做一门单独的工程学问;OpenAI 公开的 **model spec** 就是这门学问的产物。character training 是 "产品直觉"  与 "训练决策"的接口。
</div>

---

# RLHF 的根本局限:preferences 不能被压成一个数

<div class="text-sm opacity-70 mb-4">Nathan 写的那本 RLHF 书里,最"哲学"的一章。</div>

<div class="mt-6 p-6 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
"RHF is never ever fully solvable... preferences can be quantified and that multiple preferences can be reduced to single values."
<div class="not-italic text-xs opacity-60 mt-2">— Nathan paraphrases the chapter</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 数学上的根源
Von Neumann-Morgenstern utility theorem 要求:
多维偏好 → 标量。
但人类对 "accuracy vs style" 的真实权衡不是一个数。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 出路:social choice theory
经济学里有整块研究 "如何聚合多主体偏好"的子领域。
Nathan 认为 RLHF 的未来研究应该从那里借工具。

</div>

</div>

---

# Silicon Valley 的泡沫循环

<div class="text-sm opacity-70 mb-4">从 reality distortion field 到 "permanent underclass" 梗。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Lex:bubbles 不完全是坏事
"you convince each other the breakthroughs are imminent and by convincing each other of that, you make the breakthroughs imminent."

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Nathan 引用的 SF AI 梗
> "permanent underclass was one of them"

意思是:**2025 下半年是创业做 AI 的最后窗口**,之后所有价值都会被已有公司吃掉,你会因此永远贫穷。

<div class="text-xs opacity-60 mt-2">L4211</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
两人共同的观点:SF **还是** 最适合年轻人做 AI 的物理位置,但 **必须周期性走出去**——因为 reality distortion field 的副作用是你开始脱离真实世界,讲一套只有你们自己听得懂的语言。
</div>

---

# 996 在 SF:从梗到现实

<div class="text-sm opacity-70 mb-4">"工作到断"的模式已经从中国传到 frontier lab。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 定义
996 = 9 a.m. → 9 p.m. × 6 天/周 = **72 小时/周**。
Nathan 说 SF frontier lab 现在 **不完全但正在向这里靠拢**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Sebastian 的反直觉观察
"my friends who are professors seem on average happier than my friends who work at a frontier lab."

原因不是工时本身,是 **"是否有长 runway 的人 oriented 的 mission"**。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
Nathan 引用 *Apple in China* 里 Apple 工程师在中国建供应链的故事:
"they had **saving marriage** programs and... **people died from this level of working hard**."
<div class="text-xs opacity-60 mt-1">L4113-4117</div>
</div>

---

# Text diffusion:最被讨论的"非 transformer"

<div class="text-sm opacity-70 mb-4">Sebastian:"there are alternatives popping up to the transformer."</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### text diffusion
- 不是 auto-regressive
- 可以并行生成所有 token
- 但 **注意**:内部 backbone 可能仍然是 transformer,只是训练目标变了

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Mamba / state-space
- 序列维度上 **线性复杂度**
- 仍然在 trade-off 里找平衡
- 目前都 **没能替代** auto-regressive transformer 做 SOTA

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">
"nothing has replaced the auto-regressive transformer as state-of-the-art model."
<div class="not-italic text-xs opacity-60 mt-1">—— Sebastian,L1337-1339</div>
</div>

---

# Continual learning vs in-context learning

<div class="text-sm opacity-70 mb-4">"如何让模型持续学习" 2026 年最分歧的问题。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 正方:要改 weight
"a language model will not learn from feedback the same way that an employee is."

如果要真正变成 remote worker 的替代,模型必须能 **在任务中持续更新权重**——
就像一个好编辑被你批评一次,下次就不再犯那个错。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 反方 (Sebastian):给够 context 就够了
"I'm personally more bullish on language models by being able to just provide them with very good context."

把你写过的所有博客扔进 context,**appearance of learning** 本身就解决 80% 的问题——
而且它 **不要每次都改模型权重**。

</div>

</div>

<div class="mt-6 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
Cursor 的 Composer 模型声称 **每 90 分钟** 基于真实用户反馈更新一次权重——"the closest thing to real world RL happening on a model." (L6196-6200)
</div>

---

# Compaction 正在变成一个 RL action

<div class="text-sm opacity-70 mb-4">Claude Code 用户都经历过的那个 "dread the compaction" 时刻,正在变成研究题目。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 现在的样子
"people that use cloud code a lot dread the compaction"——
Claude 把 100K tokens 的对话压缩成 bulleted list,然后很多关键细节消失。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 下一步:compaction 变成 action
RL 奖励 = 维持最高 eval 分数 **同时** 把 context 压到最短。
模型 **自己决定** 何时、怎么压缩——这是一个非常漂亮的 problem setup。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"essentially like train your RL algorithm where compaction is an action... these agentic models learn to use their context in a different way than just plow forward."
<div class="text-xs opacity-60 mt-1">— Nathan,L4805-4821</div>
</div>

---

# Tool use:下一个真正的"unlock"

<div class="text-sm opacity-70 mb-4">Sebastian 很早就对 GPT-OSS 的判断:这是第一个 **tool use 原生** 的开源模型。</div>

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 italic text-lg">
"the first open weight model that was really trained with tool use in mind."
<div class="not-italic text-xs opacity-60 mt-2">— Sebastian,L901-903</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么是 unlock
最常见的幻觉问题来自 **模型试图记住一切**。
给它一个 web search、一个 Python interpreter:
"why not use a calculator app or Python?"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 为什么还没普及
"it's first is a trust thing"——你不想它在你电脑上 wipe your hard drive,所以都要 containerize。
open-weight 生态 **还没准备好** 用这个模式。

</div>

</div>

---

# 真正卡住的:computer use

<div class="text-sm opacity-70 mb-4">2025 年 demo 一堆,产品化进展接近零。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Nathan 的评价
> "we saw multiple demos in 2025 of like cloud can use your computer or openai had kua and **they all suck**."

labs 都在砸钱,但 **进展有限**——这是目前 agent 范式最硬的一块。

<div class="text-xs opacity-60 mt-2">L5623-5628</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么卡?
"taking over the whole screen seems a lot harder than having an API that they can call."

真正的路径可能是:模型不用 **人类图形界面**,而是走 **为 LLM 设计的 API**——结构完全不同的操作环境。

</div>

</div>

<div class="mt-6 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**意外副作用**: tool use / API 友好的 environment 本身可能会 **成为一种新的"操作系统"**——为 agent 而非人类设计的那种。
</div>

---

# AGI / ASI:定义的纠结

<div class="text-sm opacity-70 mb-4">两人都承认 AGI 没有共识定义。只能用 proxy。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Nathan 的 proxy
**"the remote worker"**——一个可以胜任大部分 digital economic work 的系统。

> "a thing that could reproduce most digital economic work."

他不喜欢 OpenAI 把 AGI 定义成 "做一定比例的经济价值任务",但承认这至少是 **grounding point**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Sebastian 的 proxy
更喜欢 AI 2027 报告里的分级: **superhuman coder → superhuman AI researcher → ASI**。

- 因为 coding 这件事可验证、可度量
- "once you have superhuman coder, everything else falls quickly there"

</div>

</div>

---

# AI 2027 报告:预测已经往后调

<div class="text-sm opacity-70 mb-4">这份报告 2025 年红遍 SF,它现在长什么样。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 结构
四级里程碑:superhuman coder → superhuman AI researcher → super intelligent AI researcher → ASI。
"它们讲了一个好故事,而且做了很 rigorous 的 scenario work。"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 时间线变化
- 原版预测:**2027-2028**
- 最新预测:**2031**(均值) 
- Sebastian: **"even beyond 2031"**

时间线推后 3-4 年,是这份报告 2025 年底到 2026 年最重要的变化。

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
"it reach for this AI 2027 document well transcended Silicon Valley"——它的影响力已经超出 AI 圈本身。
</div>

---

# Jagged intelligence:反 AI-2027 的一派

<div class="text-sm opacity-70 mb-4">Nathan 自承属于另一阵营。</div>

<div class="mt-6 p-6 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-lg">
"AI is like so-called jagged... excellent at some things and really bad at some things."
<div class="not-italic text-xs opacity-60 mt-2">— Nathan,L5193-5196</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 举例
- **擅长**:traditional ML systems、前端
- **很差**:大规模分布式 ML——因为 "there's so little training data on doing large scale distributed learning"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 所以他不信 superhuman coder
"it's assigning completeness to something where the models are kind of superhuman at **some** types of code."

gaps 永远存在。

</div>

</div>

---

# "skill issue" 是双向的

<div class="text-sm opacity-70 mb-4">模型不行,还是人不会用?Nathan 的答案:经常是后者。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Nathan
> "Some of that could be a **skill issue** on the human side. Unfortunately, we have to be honest with ourselves."

programming 里抱怨最多的那些人,很多其实是 **under-specification**——期待模型读心。

<div class="text-xs opacity-60 mt-2">L5427</div>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Lex 附和
"I agree with you. I've been becoming more and more bullish in general... I think it is a **human skill issue**."

Anthropic 内部的人 **用模型用得更好**,所以显得模型更厉害——这是一个 **practitioner** 角度的解释。

</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm italic">
"spec driven design is really important. Like you just using natural language specify what you want."
<div class="not-italic text-xs opacity-60 mt-1">— Sebastian,L5437</div>
</div>

---

# 从 "slop 代理"到 "industrialization of software"

<div class="text-sm opacity-70 mb-4">Karpathy 在 2025 年说 AI agent 是 slop。几个月后,这个判断反转了。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 一个月前
"AI agents are kind of slop"(Nathan 归因给 Karpathy 的那个梗)。
2025 年秋天还是普遍看法。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 现在
> "the **industrialization of software** when anyone can just create software at their fingerprints."

一个季度内口径完全反转。Nathan:"I do think we are closer to that side of things."

<div class="text-xs opacity-60 mt-2">L5308-5313</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
**Nathan 的预测**: 未来 **1-2 年内**,面向 Slack / Microsoft Word 这种 **已有产品** 的 "端到端添加功能" 基本可以交给 agent——"within like on the order of low years"。
</div>

---

# "Clippy on steroids":最温和的看法

<div class="text-sm opacity-70 mb-4">Lex 主动扮演"cynical case"——如果 AI 的 impact 比你想的小?</div>

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 italic text-lg">
"It's **clippy on steroids**."
<div class="not-italic text-xs opacity-60 mt-2">— Lex 的 playful framing,L5785</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 悲观情形
- 非常好的自动补全
- 漂亮的网站可以生成
- 教育、shopping、debug **helper**
- 但 computer use **解不动**,经济影响有限

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Sebastian 的反驳
"it is going to serve different populations by getting better at different things."

即使平均用户没更大收益,**不同人群** 会从不同能力里受益——**jagged improvement**。

</div>

</div>

---

# 业务层面的预言:consolidation

<div class="text-sm opacity-70 mb-4">10 年后,这些公司还在吗?</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Nathan 的判断
- 所有 frontier labs 都在解 **同一批问题**
- 差异正在缩小
- 纯 LLM provider (OpenAI / Anthropic) 如果模型 **商品化**,可能会死——或者 pivot

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 反向案例:Anthropic 的 pivot
"I don't think they originally planned to work on code."
碰巧发现 Claude Code 是 niche,就押上去了。**pivot 能力** 本身就是护城河。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
Nathan 希望看到更多 **IPO**:"I would like to see these companies go public." 
公共市场会 **带来信息透明**——现在 frontier lab 怎么烧钱没人知道。
</div>

---

# atom project:美国需要自己的开源模型

<div class="text-sm opacity-70 mb-4">Nathan 最想讲的 call to action。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 起源
> "I started as me calling it the **American Deepseek** project which doesn't really work for DC audiences."

2025 年 7 月,他看到 "四到五个 DeepSeek 级别的中国开源模型,美国是零",写了 atom 项目。

<div class="text-xs opacity-60 mt-2">L6478-6480</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 核心论点
1. **开源模型是 research 的起点**——大多数研究者从开源开始。
2. **拥有它 = 拥有研究生态**。
3. 一个 "半代到一代落后于 frontier" 的开源模型,只需 **~$100M**——对巨头不多,对社区极大。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"an open Manhattan project for open models would actually be pretty reasonable because it wouldn't cost that much." —— Nathan 的 playful twist,L6755-6760
</div>

---

# 为什么 "all open source wins" 可能成真

<div class="text-sm opacity-70 mb-4">这是两人都给出的一个长期判断。</div>

<div class="mt-6 p-6 rounded bg-green-50 border-l-4 border-green-500">

### 逻辑链
<div class="text-sm space-y-2 mt-2">

1. 如果 model 能力 **几年内饱和**——
2. 那么所有优化资源会集中到 **共通的开源架构** 上——
3. **更多人** 会去优化 serving / inference / 定制芯片——
4. 开源模型最终 **便宜 / 快 / 定制化** 的组合会赢。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"open models will be so optimized and so much cheaper to run that they will win out... you could have chips dedicated to them."
<div class="text-xs opacity-60 mt-1">— Sebastian,L6712-6721</div>
</div>

---

# Manhattan Project? 两人都说不

<div class="text-sm opacity-70 mb-4">AI 2027 剧本里,政府会在某个节点接管 frontier labs。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### AI 2027 的预测
"the generals, the soldiers will come into the room and be like, **'we're now in the Manhattan project stage'**."
国家安全压力会把 labs 集中、保密化、军事化。

<div class="text-xs opacity-60 mt-2">L6737-6740</div>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Sebastian 的反驳
"you can make the same argument for computers or chips... Huawei makes chips now."

在互联网时代,**knowledge 是关不住的**。AI 想封锁只会复制 "great firewall"——那条路已经被证明 **效果有限**。

</div>

</div>

<div class="mt-6 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm italic">
"There's not civilizational risk."
<div class="not-italic text-xs opacity-60 mt-1">— Nathan,为什么 Manhattan Project 类比不成立:核弹是真有 civilizational risk,LLM 没到那个 threshold。</div>
</div>

---

# Nvidia 的真护城河:不是芯片,是 CUDA

<div class="text-sm opacity-70 mb-4">硬件赢家是谁?Sebastian 给了一个非常具体的回答。</div>

<div class="mt-6 p-6 rounded bg-green-50 border-l-4 border-green-500 italic text-lg">
"the moat of Nvidia is probably not just the GPU it's more like the **CUDA ecosystem** and that has evolved over... two decades."
<div class="not-italic text-xs opacity-60 mt-2">— Sebastian,L6784-6787</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 15 年前的故事
Sebastian 读 PhD 时,实验室就用 Tesla GPU 跑 **分子动力学模拟**。
CUDA 的 ecosystem 是从 "非 AI workload" 里慢慢长出来的。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### meta-level 的反转
"with LLMs now also it will be easier to design something like CUDA."
—— **LLM 本身** 可能是第一个有机会 **重写 CUDA** 的工具。

</div>

</div>

---

# "Many AGIs in the data center"

<div class="text-sm opacity-70 mb-4">Nathan 最喜欢的一个比喻。</div>

<div class="mt-6 p-6 rounded bg-purple-50 border-l-4 border-purple-500 italic text-lg">
"it's described as **many AGIs in the data center** where each one manages and they talk to each other."
<div class="not-italic text-xs opacity-60 mt-2">— Nathan,L7046-7048</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 旧的梦已死
> "that dream is actually kind of dying"

"one model to rule everything"——单一大模型解决一切——**不再是主流 bet**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 新的图景
多个专用 agent,每个管一类任务,互相通过 **网络** 通信。
这就让 **网络带宽** 和 **多机协同** 变成新的 bottleneck。

</div>

</div>

---

# 100 年后,最先被记住的词是哪个?

<div class="text-sm opacity-70 mb-4">一个意想不到的问题,问出两个具体的答案。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Sebastian
"without the human mind we probably wouldn't have neural networks."
深度学习是 **灵感来自大脑** 的 "massively paralyzable algorithm";
**遗传算法** 也可能走上相似的路径,只是效率没它好。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Nathan
- "**deep learning** 很可能还在被使用"
- "transformer 这个词 **很可能** 还被记得"
- 但实际架构 **几乎一定** 会被演化掉

类比 "工业革命留下的不是某台机器,是 **engine** 这个概念"。

</div>

</div>

<div class="mt-6 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs italic">
"I wonder what the air conditioning and the refrigeration of the future is that AI brings."
<div class="not-italic opacity-60 mt-1">— Lex 的追问</div>
</div>

---

# 100 年后,人类还带手机吗?

<div class="text-sm opacity-70 mb-4">第二个意外具体的问题。两人都给出 **非 BCI** 的答案。</div>

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"I think we'll still carry around a physical brick of compute because people want some ability to have a private... interface between the rest of the internet."
<div class="not-italic text-xs opacity-60 mt-2">— Nathan,L7145-7152</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-gray-50 border">

### 关键论点:agency
"UBI does not solve agency. I do expect mass wealth... but that's still a lot to happen in 100 years."
有钱不等于 **有意义地生活**——这是 AI 时代社会学的真问题。

</div>

<div class="p-4 rounded bg-gray-50 border">

### 物理隐私是硬需求
手机作为 **私人 encrypted 容器** 的形态可能变,但 **物理位置上属于你一个人的计算设备** 不会消失。

</div>

</div>

---

# 物理的溢价 / AI slop 的反作用

<div class="text-sm opacity-70 mb-4">结束段最有力的预测。</div>

<div class="mt-6 p-6 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-lg">
"they would be **drowning in slop**... I'm hoping that society drowns in slop enough to snap out of it."
<div class="not-italic text-xs opacity-60 mt-2">— Nathan,L7248-7253</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 副作用:**physical premium**
- 现场 event、in-person 交流
- 物品、手工、手绘
- "greater premium for... in person... things"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Sebastian 的类比
200 年前画画,现在是 photography——画没有消失,**价值 instead 集中在 "真正手工" 的那一类** 上。
写作 / 谈话 / 体验都会走同样的分叉。

</div>

</div>

---

# "Staring at a lot of right now":最后的希望

<div class="text-sm opacity-70 mb-4">Lex 的收官问题:"Are we going to be okay?"</div>

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"the world is a scary place and AI is a very uncertain thing and it takes a lot of work that is not necessarily building things. It's like telling people and understanding people that the people building AI are historically not motivated or wanting to do."
<div class="not-italic text-xs opacity-60 mt-2">— Nathan,L7352-7361</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Nathan 的希望
"humans do tend to find a way. I think that's what humans are built for is to have community and find a way to figure out problems."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Lex 的希望
"we get a chance to **better understand ourselves**... AI puts a mirror to ourselves."

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句:</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"DeepSeek is definitely winning the hearts of the people who work on open weight models."
<div class="text-xs opacity-60 mt-1 not-italic">— Sebastian · 关于谁在赢 · L70-72</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"You use it until it breaks and then you explore other options."
<div class="text-xs opacity-60 mt-1 not-italic">— Sebastian · 关于模型选择的实用主义 · L518-535</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"It's kind of like it doesn't lie. It's math basically."
<div class="text-xs opacity-60 mt-1 not-italic">— Sebastian · 关于为什么要 from scratch 学 · L690-691</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"I think the aha moments are kind of fake."
<div class="text-xs opacity-60 mt-1 not-italic">— Sebastian · 关于 RLVR 的真相 · L2954</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">
"Post training is more like the skill unlock where pre-training is like soaking up the knowledge."
<div class="text-xs opacity-60 mt-1 not-italic">— Sebastian · 关于 pre/post 的分工 · L1942-1944</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"AI is like so-called jagged — excellent at some things and really bad at some things."
<div class="text-xs opacity-60 mt-1 not-italic">— Nathan · 反 AI 2027 的一派 · L5194-5196</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"The moat of Nvidia is probably not just the GPU, it's more like the CUDA ecosystem."
<div class="text-xs opacity-60 mt-1 not-italic">— Sebastian · 硬件为什么难打 · L6784-6787</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"They would be drowning in slop... I'm hoping that society drowns in slop enough to snap out of it."
<div class="text-xs opacity-60 mt-1 not-italic">— Nathan · 关于 physical premium · L7248-7253</div>
</div>

</div>

---
layout: end
---

# "humans do tend to find a way."

<div class="mt-4 text-sm opacity-60">— Nathan Lambert</div>

<div class="mt-8 text-xs opacity-50">
Lex Fridman Podcast #490 · State of AI in 2026<br/>
Sebastian Raschka · Nathan Lambert · Lex Fridman
</div>
