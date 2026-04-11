---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Head of Claude Code: What happens after coding is solved | Boris Cherny'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Coding is solved.<br/>Now what?

<div class="text-2xl mt-6 opacity-80">Boris Cherny — Head of Claude Code @ Anthropic</div>

<div class="mt-12 text-sm opacity-60">
Lenny's Podcast · ~1 小时访谈 · Claude Code 一周岁
</div>

<div class="mt-2 text-xs opacity-50">
"100% of my code is written by Claude Code. I have not edited a single line by hand since November."
</div>

---

# 这期为什么值得听

<div class="text-sm opacity-60 mb-6">Claude Code 上线一年。它的负责人复盘了过去一年发生了什么，以及"编码被解决之后"会是什么。</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold text-blue-900">从一个 hack 到 4% of GitHub</div>
<div class="text-xs mt-1 opacity-70">terminal-only 起家，最早内部发帖只收到 2 个赞</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold text-green-900">"Coding is largely solved"</div>
<div class="text-xs mt-1 opacity-70">下一站是让模型帮你想做什么 / co-work 进入非技术领域</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold text-orange-900">200% 的人均生产力</div>
<div class="text-xs mt-1 opacity-70">Anthropic 内部一年的实际数字 vs Boris 在 Meta 时的"几个百分点"</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="font-bold text-purple-900">Latent demand × 印刷术</div>
<div class="text-xs mt-1 opacity-70">为什么"用户在用奇怪方式滥用你产品"是最强信号</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold text-red-900">"Underfund everything a little bit"</div>
<div class="text-xs mt-1 opacity-70">少派人 + 多发 token，会得到更多创新而不是更少</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="font-bold text-yellow-900">为 6 个月后的模型而建</div>
<div class="text-xs mt-1 opacity-70">前 6 个月 PMF 会很差，然后突然 click</div>
</div>

</div>

---

# 一年发生了什么：硬数据

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### GitHub 公开 commits
<div class="text-4xl font-bold text-blue-600 my-2">4%</div>
<div class="text-xs opacity-70">来自 semi analysis 报告。私有仓库比例更高。预测年底到 1/5。</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Anthropic 内部
<div class="text-4xl font-bold text-green-600 my-2">+200%</div>
<div class="text-xs opacity-70">"productivity per engineer has increased 200%" — Boris 原话</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Boris 个人
<div class="text-4xl font-bold text-orange-600 my-2">100%</div>
<div class="text-xs opacity-70">"I have not edited a single line by hand since November."</div>

</div>

</div>

<div class="mt-8 p-4 bg-gray-50 rounded text-sm opacity-80">
Boris 在 Meta 的旧岗位 ——  跨 Facebook / Instagram / WhatsApp 抓代码质量 ——  那时候"hundreds of engineers working on it you would see a gain of like a few percentage points"。一整年几个点的提升，跟今天每个工程师 +200% 不在一个量级。
</div>

---

# 起点：一个被两个赞淹没的内部 demo

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**这条产品线的胚胎**

加入 Anthropic 后 Boris 做的第一件事：

- 第一个月：纯 hacking，做了一堆没上线的 prototype
- 第二个月：进 post-training 团队，理解模型本身
- 然后回来开始 prototype 后来叫 Claude Code 的东西

最早的版本叫 **Claude CLI**，他给模型一个 bash tool，问"我现在在听什么音乐"——模型自己写代码读了系统状态回答了。

</div>

<div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="text-sm italic">"I made a post about it and I announced it internally and it got two likes."</div>
<div class="text-xs opacity-60 mt-2 not-italic">— 内部第一次公开 Claude Code 时的反应</div>
</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
为什么是 terminal？不是产品决策，是"前几个月只有他一个人，terminal 是最容易写的"。但后来他刻意保留了它——因为模型进化太快，没有别的 form factor 跟得上。
</div>

</div>

</div>

---
layout: two-cols
---

# Code → Tools → Computer

Anthropic 一直以来对模型能力的内部 mental model：

<div class="space-y-2 mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>1. Coding</strong> · 模型先在写代码上变聪明
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>2. Tool use</strong> · 然后学会调用工具、采取行动
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>3. Computer use</strong> · 最后能直接操作整台电脑
</div>

</div>

<div class="mt-4 text-xs opacity-70">
"this is the way that we know the models are going to develop... it's also the way that we get to learn about safety, study it, and improve it the most."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./co-design-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 不是一夜爆红：三次拐点

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-gray-50 border-l-4 border-gray-400 rounded">

### Feb 2025
**外部发布**

"It was not initially a hit." 一批 early adopters 用上了，但大部分人不知道这是干嘛的。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### May 2025 · Opus 4
**第一次拐点**

ASL3-class 模型出来，"everyone started to use Claude Code for the first time"。增长开始指数。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Nov 2025
**第二次拐点**

Boris 个人当月起 100% 代码由 Claude Code 写。"the growth just keeps getting steeper."

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>作者概括</strong>：Code with Claude (May 2025) 上 Boris 预测"年底前你可能不再需要 IDE"——他说"the room audibly gasped"。当时听上去疯狂，半年后变成日常。
</div>

---

# 为什么是指数：scaling laws 思维

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

Boris 解释 Anthropic 为什么把"年底 100%"写进自己的预测：

> "if you look at our co-founders like three of them were the first three authors on the scaling laws paper... we really just think in exponentials."

**他做的事**：把 Claude 写的代码占比这条线"trace"到底，发现年底必然过 100%。  
**所以**这不是赌徒预言，是把已经在发生的曲线延长。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<div class="italic">"all I did was trace the line and yeah, in November that happened for me personally."</div>
<div class="text-xs opacity-60 mt-2 not-italic">不是直觉，是延长线。直觉总是滞后的。</div>
</div>

</div>

---

# Coding 已经被解决了

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50">
"At this point it's safe to say that coding is largely solved. At least for the kind of programming that I do, it's just a solved problem because Claude can do it."
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>下一站 1：Claude 自己产出 ideas</strong><br/>
读 feedback channel、bug 报告、telemetry，自己提 PR——"more like a co-worker"。
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>下一站 2：跨出 coding</strong><br/>
co-work 是这一波的第一个产品形态。Boris 用它付停车罚单、做整个团队的项目管理。
</div>

</div>

---

# Memory leak 的故事：你比模型老化得快

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

Claude Code 出现内存泄漏。Boris 是老牌工程师，他做的事是"老办法"：

- 取 heap snapshot
- 塞进 debugger
- 一行一行追

旁边一个**新人**直接对 Claude Code 说"hey，看起来有 leak，你查一下"——

Claude 取 snapshot、**给自己写了个分析小工具**（"sort of like a just in time program"）、定位问题、提交 PR ——  比 Boris 更快。

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<div class="italic">"for those of us that have been using the model for a long time, you still have to kind of transport yourself to the current moment and not get stuck back in an old model because it's not Sonnet 3.5 anymore."</div>
<div class="text-xs opacity-60 mt-2 not-italic">— Boris 自陈：他自己常常掉进"旧模型脑回路"里</div>
</div>

</div>

---

# 团队原则：Underfund everything

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

反直觉但是反复被验证：

<div class="space-y-3 mt-4">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>原则 1</strong> · "Underresource things a little bit at the start"
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>原则 2</strong> · 一个 project 只放一个工程师，他自然会 force-multiply with Claude
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>原则 3</strong> · "if you can do something today, you should just do it today"
</div>

</div>

</div>

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm mb-3">
<div class="italic">"if you hire great engineers, they'll figure out how to do it... start by just giving engineers as many tokens as possible."</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>具体到数字</strong>：Anthropic 内部已经开始看到一些工程师"spending hundreds of thousands a month in tokens"。Boris 的建议——别太早 cost cut。
</div>

</div>

</div>

---
layout: two-cols
---

# Latent Demand

Boris 心里"the single most important principle in product"：

**当用户在用一个不是为他们设计的产品做某件事时，那就是你的下一个产品。**

经典例子（来自 Facebook 同事 Fiona）：

- Facebook Marketplace 起源 = 观察到 **40% of posts in Facebook groups 是在买卖东西**
- Facebook Dating 起源 = 60% 的 profile views 是异性陌生人之间

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./latent-demand.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Latent demand → co-work

<div class="text-sm opacity-70 mb-4">Boris 看到的、那些"在 terminal 里折磨自己的非工程师"：</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
用 Claude Code 种番茄
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
分析自己的基因组
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
从坏掉的硬盘里恢复婚礼照片
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
解读自己的 MRI
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
最早的信号其实是<strong>内部</strong>：Anthropic 数据科学家 Brendan 自己开 terminal 装 Node、装 Claude Code，在终端里跑 SQL 分析。"the next week all the data scientists were doing the same thing." → 这一信号最终长成了 co-work。
</div>

---

# Latent demand 的第二种用法

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**传统**：看用户在硬撑做什么，把它变容易。

**新版**（最近 6 个月才出现）：  
**看模型在硬撑做什么，把它变容易。**

研究里叫 "being on distribution"。在产品里，就是 latent demand 应用到模型本身。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<div class="italic">"For Claude Code, we inverted that. We said the product is the model. We want to expose it. We want to put the minimal scaffolding around it. Give it the minimal set of tools."</div>
</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>反面</strong>：很多人在做 LLM 产品时把模型"放进盒子"——上面套一个固定 workflow（"先做 step 1，再做 step 2"）。Boris 说一年前这种 scaffolding 能帮忙，今天大部分时候你会得到<strong>更差</strong>的结果。
</div>

---

# 印刷术：Boris 找到的历史类比

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

他需要给"一年内编程职业被改写"找一个历史比例尺。最贴的是 **Gutenberg 印刷术**。

- 1400s 中叶欧洲：识字率 < 1%（基本只有 scribes）
- 印刷术出现后**50 年内**，印刷材料超过此前**1000 年**总和
- 成本下降约 100x
- 但识字率走到 ~70% 需要 **200 年** —— 因为还要等教育系统、自由时间这些配套

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Boris 的类比心得</strong>：scribe 当时被采访说"我**最高兴**的是不用再抄书了，我可以专心画插图、装订。" 他觉得自己作为工程师的感受和那位 scribe 一模一样——苦活外包出去之后，能做的都是更想做的部分。
</div>

</div>

---
layout: two-cols
---

# 印刷术之后的几百年

类比"识字率 1% → 70%"：当所有人都能编程之后会发生什么？

> "I imagine a world... a few years in the future where everyone is able to program... what does that unlock? Anyone can just build software anytime. And I have no idea."

**Boris 的诚实**：他不假装知道答案。他只说——印刷术不来，今天我们用的话筒、podcast、互联网都不存在。"我们没法预测，但它一定会展开。"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./printing-press.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Co-work 是怎么 10 天里造出来的

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

- 之前几个月团队（Felix、Sam、Jenny 等）在试各种方向，没找到对的产品形态
- 最后某人提议："要不我们就把 Claude Code 直接装进 desktop app？"
- 完整的实现是用 **Claude Code 自己写的**，10 天
- 包括给 co-work 配套的一整个 **virtual machine sandbox**
- 上线时刻意叫 "research preview" —— 就为了能早点放出去观察

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<div class="italic">"the model's in this new setting, it's doing these tasks that are not engineering tasks, it's an agent that's acting on your behalf... we have to make sure it's safe in the real world. And so that's why we release a little early."</div>
</div>

</div>

---
layout: two-cols
---

# 安全的三层结构

为什么"早点放出去"对 Anthropic 是安全策略而不是赌博：

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Layer 1 · Alignment + 机制可解释</strong><br/>训练时直接监控神经元（比如 deception 相关的那些）
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Layer 2 · Evals</strong><br/>Boris 比喻"模型在 petri dish 里"，丢进合成情境里看它怎么反应
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Layer 3 · In the wild</strong><br/>真实用户、真实任务。前两层都过了不代表这一层过，所以早发布
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./safety-layers.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Race to the top

<div class="mt-6 p-6 border-l-4 border-blue-500 bg-blue-50">

Anthropic 内部把这个叫 **race to the top**。具体到 Claude Code：他们把跑 agent 的 sandbox **开源**了，"works with any agent, not just Claude Code"。

<div class="text-sm opacity-70 mt-3">
"we wanted to make it really easy for others to do the same thing... this is the lever that we have."
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
机制可解释性的工作也"open source it... we publish very freely... so we can inspire other labs to do it in a way that's safe." Boris 把 Chris Olah 的 mechanistic interpretability 工作单独 shoutout 了一遍。
</div>

---
layout: two-cols
---

# Bitter lesson + 为 6 个月后造产品

Rich Sutton 的 bitter lesson：**更通用的模型最终总是赢过更专门的方案。**

Boris 把这条原则推到产品里：

- 别 fine-tune
- 别堆 workflow scaffold
- "scaffolding can improve performance maybe 10-20%, but often these gains just get wiped out with the next model"
- → **build for the model six months from now**

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./build-future-model.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 这条路线**很难受**

<div class="mt-6 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50">
"your product market fit won't be very good for the first 6 months, but if you build for the model 6 months out, when that model comes out you're just going to hit the ground running and the product is going to click."
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Boris 自己的经历</strong><br/>Sonnet 3.5 时代 Claude Code 写他 ~20% 代码；May 2025（Opus 4 / Sonnet 4）那次 inflect；Nov 2025 到 100%。中间那几个月看上去像是"产品没有 PMF"——其实是在等模型。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>具体能赌的方向</strong><br/>「会越来越擅长 use tools / use computers」「会越来越擅长 run for long periods」——Sonnet 3.5 时代 15-30 秒就跑飞，Opus 4.6 普通任务能无人值守 20-30 分钟，长任务能跑数小时甚至几周。
</div>

</div>

---

# Pro tips：怎么用好 Claude Code

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 1. 用最强的模型
**Opus 4.6 + maximum effort**

便宜模型经常不便宜——它"takes more tokens in the end to do the same task"。少 handholding 反而省钱。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 2. 用 Plan Mode
**80% 的任务都从 plan mode 开始**

实现简单到诡异——"we inject one sentence into the model's prompt to say please don't write any code yet"。

终端里 `Shift+Tab Shift+Tab`。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 3. 换 form factor
**别只在 terminal 里**

Boris 的代码现在大约 1/3 在 terminal、1/3 在 desktop app、**1/3 在 iOS app**。"the same Claude agent running everywhere."

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
他强调 plan mode 的反直觉之处——backstage 的实现就是 prompt 里加一句话，没有任何 fancy 的 orchestrator。这就是 bitter lesson 在产品端的样子。
</div>

---

# 当下他在屏幕另一头的样子

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

录这期播客的同时，Boris 屏幕上有 **5 个 agent** 在跑：

- 早晨醒来第一件事：打开 iOS 上的 Claude code tab、敲指令唤回昨晚的 agent 看结果
- 团队的 weekly status：co-work 自动每周一去 Slack 戳没填表的工程师
- 个人事务：付停车罚单、退订阅
- 当时正在用 Claude Code 做的 PR：每天 10、20、30 个

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<div class="italic">"every day I ship like 10, 20, 30 PRs... I have not edited a single line by hand since November. And yeah, that that's been it."</div>
</div>

</div>

---

# 角色边界正在模糊

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

Claude Code 团队的现状：

- "everyone codes" —— 包括 PM、EM、designer、finance、data scientist
- 角色之间已经有 **~50% 重叠**
- 剩下的 50% 是各自侧重："I code a little bit more vs cat RPM does a little more coordination, planning, forecasting"

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-xs">
Boris 的预测：到年底，"the title software engineer is going to start to go away and it's just going to be replaced by builder."
</div>

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>给个体的建议</strong>：成为 generalist。"some of the strongest engineers are hybrid product and infrastructure engineers, or product engineers with really great design sense" —— 跨学科的人会是被回报最多的。
</div>

</div>

---

# Common sense

<div class="mt-8 p-6 text-2xl italic border-l-4 border-blue-500 bg-blue-50">
"Use common sense."
</div>

<div class="mt-4 text-sm opacity-70">
Boris 被问到 life motto 时给的答案。他展开说——
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<strong>他看到的最大失败模式</strong><br/>"people just failing to use common sense. They follow a process without thinking about it. They just do a thing without thinking about it."
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>他看到的最佳模式</strong><br/>"people thinking from first principles and just developing their own common sense. If something smells weird, then you know it's probably not a good idea."
</div>

</div>

---

# Post-AGI: Miso

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

Boris 加入 Anthropic 之前，住在日本的乡下，是镇上唯一的工程师、唯一的英语使用者。每周骑车去农贸市场，用做 miso 和邻居换 pickles 来交朋友。

**白 miso 至少 3 个月**，红 miso 要 2-3-4 年。

> "miso is this interesting thing where it teaches you to think on these long time scales. That's just very different than engineering."

被问到 "post-AGI 你会做什么"——

</div>

<div>

<div class="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded text-lg italic">
"if I wasn't at Anthropic, I'd probably be making miso."
</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>这件事和访谈的连接</strong>：他说他之所以加入 Anthropic，部分原因是住在乡下的时候在读 sci-fi、用季节和 miso 这种长时间尺度思考——"I felt like I had to contribute to it going a little bit better."
</div>

</div>

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这一期 Boris 自己反复回到的几句：</div>

<div class="space-y-2">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs">
"100% of my code is written by Claude Code. I have not edited a single line by hand since November."
<div class="opacity-60 mt-0.5 not-italic">— 个人状态</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic text-xs">
"At this point it's safe to say that coding is largely solved."
<div class="opacity-60 mt-0.5 not-italic">— 谈下一个前沿</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic text-xs">
"productivity per engineer has increased 200%."
<div class="opacity-60 mt-0.5 not-italic">— Anthropic 内部一年的实际提升</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic text-xs">
"We said the product is the model. We want to put the minimal scaffolding around it."
<div class="opacity-60 mt-0.5 not-italic">— 设计 Claude Code 的核心反转</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic text-xs">
"if you build for the model 6 months out, when that model comes out you're just going to hit the ground running."
<div class="opacity-60 mt-0.5 not-italic">— 给做 AI 产品的人的核心建议</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-xs">
"the title software engineer is going to start to go away and it's just going to be replaced by builder."
<div class="opacity-60 mt-0.5 not-italic">— 对年底的预测</div>
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs">
"Use common sense." <span class="opacity-60 not-italic">— Life motto</span>
</div>

</div>

---
layout: end
---

# "It just feels like this is 1% done."

<div class="mt-6 text-sm opacity-60">
— Boris Cherny, on Lenny's Podcast
</div>
