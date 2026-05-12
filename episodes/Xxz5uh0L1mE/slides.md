---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '139. 【Agent的综述】和苏煜聊Agent技术史、OpenClaw Moment、边界的消弭和社会的辐射'
info: |
  张小珺 Jùn｜商业访谈录 #139
  嘉宾：苏煜（俄亥俄州立大学教授 / NeoCognition 创始人 / 2025 斯隆研究奖得主）
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Agent 的综述

### 技术史 · OpenClaw Moment · 边界的消弭 · 社会的辐射

<div class="mt-12 text-lg opacity-80">

嘉宾：**苏煜**

俄亥俄州立大学计算机系教授 · NeoCognition 创始人 · 2025 斯隆研究奖得主

</div>

<div class="mt-8 text-sm opacity-60">

张小珺 Jùn｜商业访谈录 · #139 · 2026-05-01 · 2h 17min

</div>

---

# 这期为什么值得听

<div class="text-sm opacity-70 mb-4">本节目笔记原话：「Agent 是 2026 年的高频词，深入技术原理层，清晰了解技术脉络。」</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 一段技术史
Logical → Neural → Semantic Parsing → Language Agent，60 年的脉络一次梳清。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### OpenClaw Moment
嘉宾原话："和 ChatGPT Moment 有非常多相似的地方"。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 边界的消弭
Coding / Browser / Desktop 的界线在被 Agent 抹平。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 中美差异
两条科技辐射 pattern：美国向上集中，中国向下扩散。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 新公司 NeoCognition
刚融完 $40M 的 seed round，方向是 Language Agent。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 2026 瓶颈与赌注
Agent 现在最大的瓶颈是什么？大厂们各自押什么？

</div>

</div>

---

# 嘉宾：苏煜

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### 学术身份
- **俄亥俄州立大学**计算机系教授
- **2025 年斯隆研究奖**得主
- 研究方向：**Language Agent**

### 创业身份
- **NeoCognition** 创始人
- 最近融完一轮 **$40M seed round**

</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### 嘉宾原话

<div class="italic mt-2">

"我是最早从 **Semantic Parsing** 转型做 **Language Agent** 的学者之一。"

</div>

<div class="text-sm opacity-60 mt-3 not-italic">

—— 这是节目里给自己的定位

</div>

</div>

</div>

<div class="mt-6 text-sm opacity-60">

主持人介绍：「苏煜是少数见证过 Agent 演化史的学者。」

</div>

---
layout: two-cols
---

# Agent 技术演进的四个阶段

<div class="text-sm opacity-70 mb-4">本节目是一次"技术综述"——主线就是这条时间轴。</div>

<div class="space-y-3 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<b>① Logical Agent</b><br>
<span class="opacity-70">1960s — 1990s · 符号 / 规则系统</span>
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<b>② Neural Agent</b><br>
<span class="opacity-70">2000 年以后 · 神经代理</span>
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<b>③ Semantic Parsing</b><br>
<span class="opacity-70">另一条线 · 语义解析</span>
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<b>④ Language Agent</b><br>
<span class="opacity-70">过去三年 · 当下主线</span>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-timeline.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# ① Logical Agent（1960s — 1990s）

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 本节话题
节目第 03:30 — 苏煜复盘 Agent 史的起点。

时代关键词：符号、规则、可解释。

</div>

<div class="p-4 rounded border-l-4 border-gray-400 bg-gray-50">

### 作者概括
这一段 AI 的世界观是：**把世界写成逻辑式**，让机器在符号上做推理。

擅长封闭领域；不擅长开放世界。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**为什么从这里讲起？** 苏煜的逻辑是：要看清 Language Agent 为什么不同，先要看它之前的 Agent 长什么样。

</div>

---

# ② Neural Agent（2000 年以后）

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 本节话题
节目第 03:30 段落 — 第二个阶段。

时代关键词：神经网络、表征学习、端到端。

</div>

<div class="p-4 rounded border-l-4 border-gray-400 bg-gray-50">

### 作者概括
神经代理把"显式规则"换成了"权重里的隐式知识"。

擅长感知与模式识别；推理与组合泛化仍是难点。

</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-white border border-gray-200">
<b>逻辑代理</b><br>
<span class="opacity-70">写规则</span>
</div>

<div class="p-3 rounded bg-white border border-gray-200">
<b>神经代理</b><br>
<span class="opacity-70">学权重</span>
</div>

<div class="p-3 rounded bg-purple-50 border border-purple-200">
<b>语言代理</b><br>
<span class="opacity-70">用语言</span>
</div>

</div>

---

# ③ Semantic Parsing —— 另一边的故事

<div class="text-sm opacity-70 mb-4">节目把这条线单独拎出来，因为它直接通向 Language Agent。</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 嘉宾原话
"**我是最早从 Semantic Parsing 转型做 Language Agent 的学者之一。**"

<div class="text-sm opacity-60 mt-2">
— 节目 45:18 章节
</div>

</div>

<div class="p-4 rounded border-l-4 border-gray-400 bg-gray-50">

### 作者概括
Semantic Parsing 的目标：把自然语言 → 结构化表示（SQL、API 调用、程序）。

它解决的问题恰好就是后来的 Language Agent 要解决的：**让语言驱动行为**。

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-300 rounded text-sm">

**关键转折**：当 LLM 把"自然语言 → 程序"变成默认能力，Semantic Parsing 这一支研究者自然成了 Language Agent 的第一批人。

</div>

---

# ④ Language Agent 登场

<div class="mt-6 p-6 text-xl italic border-l-4 border-purple-500 bg-purple-50 rounded">

"过去三年 Language Agent 的发展速度比过去几十年都要快。"

</div>

<div class="mt-3 text-sm opacity-60">
— 苏煜，节目 29:28 章节
</div>

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-4 rounded bg-gray-50 border-2 border-gray-200">

### 1960s–1990s
<div class="text-3xl font-bold text-gray-500 my-2">30+ 年</div>
<div class="text-xs opacity-70">Logical Agent</div>

</div>

<div class="p-4 rounded bg-gray-50 border-2 border-gray-200">

### 2000s–2020s
<div class="text-3xl font-bold text-gray-500 my-2">20 年</div>
<div class="text-xs opacity-70">Neural + Semantic Parsing</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-400">

### 2023–2026
<div class="text-3xl font-bold text-purple-600 my-2">3 年</div>
<div class="text-xs opacity-70">Language Agent 大爆发</div>

</div>

</div>

---
layout: two-cols
---

# 语言：人类文明的指数引擎

<div class="text-sm opacity-70 mb-4">节目第 27:21 章节展开。</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">

"人类的进化史来说，语言非常晚发生，但对人类文明有了指数型发展。"

<div class="text-xs opacity-60 mt-2 not-italic">
— 苏煜
</div>

</div>

<div class="mt-4 p-3 rounded border-l-4 border-gray-400 bg-gray-50 text-sm">

**作者概括**：这是节目里苏煜把"为什么 Language 是关键"挂到人类学层面——他借用了"语言出现得很晚但带来指数曲线"这个类比，去解释 Language Agent 为什么不是又一个小迭代。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./language-curve.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 过去三年的节奏对比

<div class="text-sm opacity-70 mb-4">29:28 — 复盘 Language Agent 上的"关键工作"。</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-4 rounded border-l-4 border-gray-400 bg-gray-50">

### 之前几十年
- 一条研究线推进几年才换一代
- 工业落地多数停在 demo
- 评测集进步 = 几个百分点

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50">

### 过去三年
- **几个月**一代新范式
- 同时间在产业里大规模上线
- 几个评测的天花板被反复掀掉

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**节目的核心判断**：这不是平稳的演进——是嘉宾说的"过去三年比过去几十年都要快"。
本节目花了一整段去复盘究竟是哪些工作把节奏抬起来了。

</div>

---
layout: two-cols
---

# At the end of the day —— universal digital agent

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic mt-4">

"At the end of the day，大家想要的就是 **universal digital agent**；**边界的消弭和 coding 有关**。"

<div class="text-xs opacity-60 mt-2 not-italic">
— 苏煜，节目 40:56 章节
</div>

</div>

<div class="mt-4 p-3 rounded border-l-4 border-gray-400 bg-gray-50 text-sm">

**作者概括**：所有大厂在做的事情，最终的目标函数都收敛到——一个能跨场景的通用数字代理。

而打通这些场景的关键介质，是**代码**。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./boundary-dissolve.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么 coding 是关键介质

<div class="text-sm opacity-70 mb-4">作者基于嘉宾"边界的消弭和 coding 有关"展开。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 介质统一
代码是数字世界里**最通用的接口**——文件、API、命令、UI 自动化最终都能落到代码。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 可验证
代码的输出**可执行、可测试、可回滚**——给 Agent 的训练循环提供天然信号。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 可组合
不同任务的边界（browser / desktop / mobile）一旦能用代码表达，**就被消弭**。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

"边界的消弭和 coding 有关" —— 这一句把 universal digital agent 的可行路径用一个词点明。

</div>

---
layout: two-cols
---

# OpenClaw Moment

<div class="text-sm opacity-70 mb-3">节目 48:56 章节，节目方挑出来当作三大金句之一。</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic">

"OpenClaw Moment 和 ChatGPT Moment 有非常多相似的地方。"

<div class="text-xs opacity-60 mt-2 not-italic">
— 苏煜
</div>

</div>

<div class="mt-4 p-3 rounded border-l-4 border-gray-400 bg-gray-50 text-sm">

**作者概括**：

- ChatGPT Moment = 第一幕 Chat 的破圈时刻
- OpenClaw Moment = 第二幕 Agent 的对应时刻

嘉宾认为两者在"突破能力门槛、引爆产业军备竞赛"上结构相似。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./moment-parallel.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 苏煜的个人转型路径

<div class="text-sm opacity-70 mb-4">节目 45:18 章节。</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-orange-50 border-2 border-orange-300">

### 过去
**Semantic Parsing**
<div class="text-xs opacity-70 mt-2">自然语言 → 结构化表示</div>

</div>

<div class="flex items-center justify-center text-3xl text-purple-500 font-bold">→</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-400">

### 现在
**Language Agent**
<div class="text-xs opacity-70 mt-2">语言驱动行为</div>

</div>

</div>

<div class="mt-8 p-5 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"我是最早从 Semantic Parsing 转型做 Language Agent 的学者之一。"

<div class="text-xs opacity-60 mt-2 not-italic">— 苏煜</div>

</div>

<div class="mt-4 text-sm opacity-70">

**作者补充**：这条个人路径，恰好和节目里的"技术演进史"主线咬合——一个研究者亲历了 Semantic Parsing → Language Agent 的跨越。

</div>

---
layout: two-cols
---

# 中美科技辐射的两种 pattern

<div class="text-sm opacity-70 mb-3">节目 55:10 章节。</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500 italic">

"中美科技辐射的 pattern 不同，**中国更全民化，在应用层的动作更快**。"

<div class="text-xs opacity-60 mt-2 not-italic">— 苏煜</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>美国</b><br>
<span class="opacity-80">基模能力向头部集中</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<b>中国</b><br>
<span class="opacity-80">应用层扩散更快</span>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./us-china-pattern.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 创业新公司 —— NeoCognition

<div class="text-sm opacity-70 mb-4">节目 1:02:05 章节。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 融资节奏

<div class="text-4xl font-bold text-green-700 my-3">$40M</div>

**seed round** —— 节目里直接给出的数字。

<div class="text-xs opacity-60 mt-2">嘉宾原话：「创业新公司 NeoCognition，最近融完了一轮 $40M 的 seed round」</div>

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 学术资本

<div class="my-3">
<div class="text-xl font-bold text-purple-700">2025 斯隆研究奖</div>
<div class="text-xs opacity-70 mt-1">Sloan Research Fellowship</div>
</div>

苏煜带着学术身份切到 Agent 创业——是这期节目讨论"边界消弭"的现场注脚。

</div>

</div>

<div class="mt-6 p-3 rounded bg-gray-50 text-sm border border-gray-200">

**作者概括**：节目在这一段讨论了一家 Language Agent 公司在 2026 年初的窗口期，能拿到怎样的早期资本——一轮 seed 就 $40M，是个不小的数字。

</div>

---

# 三个深度技术话题

<div class="text-sm opacity-70 mb-4">节目 1:20:30 章节展开。</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Continual Learning

**持续学习**

Agent 如何在部署后继续学习、不"冻结在训练截止日"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 世界模型

**World Model**

Agent 在脑中如何建一份对世界（数字 / 物理）的预测式表征。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### GUI vs. CLI

**交互形态之争**

Agent 该看像素截屏、还是该走命令行 / API？

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**作者概括**：这三个题目放一起，本质都在问同一件事——**Agent 能力的下一阶段瓶颈在哪？**
持续学习对应"知识更新"，世界模型对应"长程推理"，GUI/CLI 对应"动作空间"。

</div>

---

# 2026 年的瓶颈与预期

<div class="text-sm opacity-70 mb-4">节目 1:44:34 章节直接命名：「Agent 现在最大的瓶颈是什么？对 2026 年 Agent 进展的预期？」</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 节目里讨论的瓶颈维度

- 模型基础能力天花板
- 长程任务的稳定性
- 工具与环境的接口
- 评测体系怎么建

<div class="text-xs opacity-60 mt-3">（作者概括的讨论维度，不是嘉宾原话清单）</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 2026 预期：苏煜的话题方向

- 哪些能力会先突破
- 哪些场景会先出现"可用"的 Agent
- 哪些"自然而然的下一步"还没人做

<div class="text-xs opacity-60 mt-3">（节目章节标题；具体观点需听原节目）</div>

</div>

</div>

<div class="mt-6 p-3 rounded bg-gray-50 text-sm border border-gray-200">

**为什么这一节重要**：1:44 这个时间点意味着节目把"前面所有技术综述"导出到一个判断——**到底什么会卡住、什么会突破。**

</div>

---

# 大厂们在 Agent 上的 bets

<div class="text-sm opacity-70 mb-4">节目 1:47:09 章节：「各个大厂都在 Agent 上 bet 什么，有什么有意思的 bets？」</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个观察框架

每家大厂的 bet 其实由三件事决定：

- **基模能力**的起点
- **分发渠道**的形状
- **历史包袱**的方向

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 节目里被点到的层面

- 模型层 vs. 应用层的赌注差异
- "通用 Agent" vs. "垂直 Agent" 的路线分叉
- 中美玩家在 Agent 上的不同切入

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**作者概括**：本节是节目临近尾声的"行业地图"环节，对前面所有技术综述给出一次"应用到现实"的对照。
具体每家的 bet 细节可以直接听节目这一段。

</div>

---

# 我们这代人经历了 Agent 的完整周期

<div class="text-sm opacity-70 mb-6">节目 1:52:47 章节标题。</div>

<div class="p-6 text-xl italic border-l-4 border-purple-500 bg-purple-50 rounded">

"我们这一代人经历了 Agent 的完整周期，我喜欢搭建 conceptional framework。"

<div class="text-sm opacity-60 mt-3 not-italic">— 苏煜</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### "完整周期"指什么？
作者概括：苏煜的学术生涯横跨了 **Logical → Neural → Semantic Parsing → Language Agent**——这就是这期节目复盘的那条主线。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 为什么是 conceptional framework？
作者概括：见过完整周期的人，写一份"思维框架"比写一篇单点 paper 更稀缺——这也是为什么这期节目是综述、不是新结果。

</div>

</div>

---

# 一句话定调本期节目

<div class="mt-12 p-8 text-2xl italic border-l-4 border-purple-500 bg-purple-50 rounded text-center">

"Agent 是 2026 年的高频词，深入技术原理层，清晰了解技术脉络。"

</div>

<div class="mt-6 text-center text-sm opacity-60">

— 节目笔记/highlights 原话

</div>

<div class="mt-12 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-gray-50 border border-gray-200 text-center">
<b>是什么</b><br>
<span class="opacity-70">综述，不是某个新结果</span>
</div>

<div class="p-3 rounded bg-gray-50 border border-gray-200 text-center">
<b>给谁的</b><br>
<span class="opacity-70">想看清 Agent 脉络的人</span>
</div>

<div class="p-3 rounded bg-gray-50 border border-gray-200 text-center">
<b>读完拿到</b><br>
<span class="opacity-70">一个 conceptional framework</span>
</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句（均为节目笔记 / 章节标题中可验证的原话）：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"过去三年 Language Agent 的发展速度比过去几十年都要快。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜 · 节目 29:28</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"OpenClaw Moment 和 ChatGPT Moment 有非常多相似的地方。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜 · 节目 48:56</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"At the end of the day，大家想要的就是 universal digital agent；边界的消弭和 coding 有关。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜 · 节目 40:56</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"人类的进化史来说，语言非常晚发生，但对人类文明有了指数型发展。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜 · 节目 27:21</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"中美科技辐射的 pattern 不同，中国更全民化，在应用层的动作更快。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜 · 节目 55:10</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"我们这一代人经历了 Agent 的完整周期，我喜欢搭建 conceptional framework。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苏煜 · 节目 1:52:47</div>
</div>

</div>

---
layout: end
---

# 边界的消弭，正在发生

"At the end of the day，大家想要的就是 universal digital agent。"

<div class="mt-6 text-sm opacity-60">

苏煜｜张小珺 Jùn 商业访谈录 #139 · 2026-05-01

</div>
