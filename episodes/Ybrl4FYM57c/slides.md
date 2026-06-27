---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'What happens after coding is solved? — Fiona Fung'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 当 coding 不再是瓶颈，会发生什么？

### Fiona Fung — Claude Code & Co-work 负责人

<div class="mt-8 text-base opacity-75">

带过 Visual Studio、Facebook Marketplace、Meta 智能眼镜、Instagram。
25 年工程师，现在管着改变工程师工作方式的那个团队。

</div>

<div class="mt-6 text-sm opacity-60">

Lenny's Podcast · 2026

</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 来自当事人
Claude Code 和 Co-work 团队的总负责人，亲身处在"工程的工作方式"被重写的中心。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 8x 的数据
Anthropic 工程师人均季度产出代码量是 2025 年的 8 倍。曲线长这样：平、平、平、爆。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 不是抽象口号
每一条建议都有具体来源：早晨的 Claude session、bad/sad 框架、JIT planning、pair-wise programming lunch。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 关心被落下的人
小生意主、还没上车的人、刚毕业的下一代工程师——她花了很多时间想这件事。

</div>

</div>

---

# Fiona 的 25 年弧线

<div class="grid grid-cols-5 gap-3 mt-8">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

### IBM
<div class="text-xs opacity-70 mt-2">DB2 / OS Services</div>
<div class="text-xs opacity-60 mt-1">Vim, 终端 debug</div>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

### Microsoft
<div class="text-xs opacity-70 mt-2">Visual Studio editor</div>
<div class="text-xs opacity-60 mt-1">11 年，用 VS 写 VS</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-center">

### Meta
<div class="text-xs opacity-70 mt-2">Marketplace / 智能眼镜 / Orion AR</div>
<div class="text-xs opacity-60 mt-1">500 人组</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-center">

### Instagram
<div class="text-xs opacity-70 mt-2">Infra / Growth / Integrity & Safety</div>

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-center">

### Anthropic
<div class="text-xs opacity-70 mt-2">Claude Code + Co-work</div>
<div class="text-xs opacity-60 mt-1">Boris、Kat 的老板</div>

</div>

</div>

<div class="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

她说从 IBM 到 Microsoft 是一次"我以前不知道 IDE 是什么"的跃迁——刚进 VS 团队还以为 Visual Studio 是"更好的画图程序"。**每一次工具跃迁，她都在最前线**。

</div>

---
layout: two-cols
---

# 那张 8x 的图

Anthropic 公布的内部数据：

<div class="mt-4 space-y-2 text-sm">

- 工程师**人均季度代码产出**
- 从 2021 到 2025，**平 / 平 / 平 / 平**
- 然后**直冲云霄**

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

> "Anthropic engineers, on average, ship eight times as much code per quarter as they did compared to 2025."

<div class="text-xs opacity-60 mt-2">— 开场白</div>

</div>

<div class="mt-4 text-sm opacity-70">

这不是更努力的工程师——是工作方式被重写。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./eight-x-curve.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 核心论断：coding 不再是瓶颈

<div class="mt-8 p-8 bg-blue-50 border-l-4 border-blue-500 rounded text-2xl italic text-center">

"Coding is no longer the bottleneck. It's lifted the ceiling of what anyone is able to do."

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 旧世界
工程时间是稀缺资源；CD 烧录有硬死线；所以前期做大量规划，省着用工程师。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 新世界
工程师、设计师、PM——**所有人都在 Claude Code 里 check in 代码**。
瓶颈从"产出"挪到了**验证（verification）**。

</div>

</div>

---

# "我不是 Android 工程师，但..."

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">

"Actually is not a mobile engineer by trade, but we really needed to update this feature to also have a mobile footprint... thanks to Claude, actually I can actually have a partner and actually also do this on the mobile surfaces."

<div class="text-xs not-italic opacity-60 mt-2">— Fiona 描述昨天和一位工程师的对话</div>

</div>

<div class="mt-6 p-5 bg-orange-50 border-l-4 border-orange-500 rounded">

### 这就是 "lifted the ceiling" 的真实含义

不是"工程师变成 1.5 倍生产力"——是**一个非移动端工程师，今天就能交付一个移动端 feature**。

Lenny 接话的那句更准：

> "Now it's about how ambitious can you be? Everything is now possible in theory."

</div>

---
layout: two-cols
---

# 经理的清晨仪式

她在所有 repo 里挂了一个**常驻 Claude Code remote session**：

<div class="mt-4 space-y-2 text-sm">

- 接入所有 Slack 反馈频道
- 接入所有 metrics dashboard
- 接入所有 incident 记录

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

每月她会和 report **共享屏幕**，跑这个 session，一起聊：
"这个月谁 ship 了什么？市场反馈如何？incident 有共性吗？哪里是质量热区？"

</div>

<div class="mt-4 text-sm opacity-70">

"我一年前根本不可能拿到这些 insight。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./manager-session.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 从 prompt 到 routine：抽象层又往上抽了一层

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-400">

### 以前
早晨手动起一个 prompt：
"扫一下 feedback 频道"

每天重复。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 现在（routines）
设一个**定时 routine**：
每天早上自动跑、生成总结、**还能 spawn 子 agent 自己写 PR**。

醒来直接 review PR。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 下一步
"verification really good → just go for it"

让 routine 在质量框架内自己 merge。

</div>

</div>

<div class="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

> "The level of abstraction keeps pulling up a little bit." — Fiona

人类做的事从"敲键盘"变成"写 prompt"，又变成"写一个会写 prompt 的 routine"。

</div>

---
layout: two-cols
---

# 招人：两种 profile，缺一不可

她加入 Claude Code 团队后，先做了一次 listening tour——

发现团队里 **product generalists** 已经很多，**deep systems / distributed systems 背景**的人却缺。

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Creative builders** — 心里有产品愿景的"dreamers"，能从 idea 走到 ship-iterate-polish。

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Deep systems experts** — for the hard parts。模型再强，**trust but verify**，verify 是这群人的活。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-profiles.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# TDD 复活：以前像被逼吃西兰花

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 2000 年代的 TDD
她记得是 2000 年代的"潮流"——先写 test、看着 fail、再写实现。

> "It was almost like you have to eat the broccoli first."

写 test 是一种**纳税**：抢走了"看到产品 ship 出去"的兴奋感。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 在 Claude Code 上修第一个 bug
她说她做的第一件事是让 Claude：
"帮我写 test，先确认 fail，然后再修代码。"

> "That used to be just this tax I remember having to pay. The fact that that's now automated..."

**老原则突然变得高效了**——因为模型可以替你吃西兰花。

</div>

</div>

---
layout: two-cols
---

# Bad vs. Sad：一个让质量可以横向比较的框架

她在团队里推的简单分类：

<div class="mt-4 space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**Bad** — 不可恢复的 error
你的工作丢了，比如 CLI crash。
**优先级最高。**

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**Sad** — 可恢复的痛点
比如 UI flickering。单看不致命，但**叠多了 → 变成 bad**。

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

不同 surface（CLI/web/agent）原本各有各的 dashboard，难比较。
有了 bad/sad，**每个团队自己定义什么算 bad/sad**，跨团队就能比"质量趋势"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./bad-vs-sad.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 还有一个 dashboard：F-word 频次

<div class="mt-6 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### Lenny：

> "I know that you guys have this dashboard that tracks just like F-words, like how often people are like... cuz they're so pissed and frustrated."

### Fiona：

> "Actually I remember yeah, that was last September... that was an engineer on the team of hey, we should maybe track swear words. I'm like, oh that's a great idea."

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**为什么这条聪明**：经典 reliability 指标（time to load、error rate）很难告诉你"用户当下感觉如何"。
**情绪是 leading indicator**——脏话上升 = 体验崩了，无论 latency 看起来多好。

</div>

---

# Don't forsake motion for progress

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xl text-center">

"Don't forsake motion for progress."

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

### 反例：从 lines of code 到 token-maxing

工程组用过的所有"产出"指标都掉进同一个坑——

- **lines of code**：引入大 library 就爆表
- 升级 framework，代码变少但**输出更强**
- **token usage**：同一个坑，新名字

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 她的姿势

**zoom out**：

- 我们在解决什么问题？
- 什么指标能反映这个问题？
- **这个指标现在还服务于初衷吗？**

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

她说自己也踩过 metric 的坑——下一页讲那个具体故事。

</div>

---

# Facebook Marketplace 的"卖家数"陷阱

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 早期 Marketplace 按地区发布，扩张前要过一道闸——**卖家数**。

Fiona 自己运营的第一个地区，结果出来了：

> "I'm like how in this area the number of sellers is low, but actually people are finding items that they're looking for."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 旧 metric
卖家数低 → 还不能扩张
**会卡住一个其实在运转良好的地区**

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 新发现
不是卖家少——而是有**少量"power sellers"**撑起了供给。

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**作者概括**：metric 是有保质期的。设计它时正确，半年后可能就在阻碍真实目标。

</div>

---
layout: two-cols
---

# Latent demand：用户在为你跳火圈

她在 Anthropic 学到的"找下一个产品"的方法：

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Co-work 的起源**：很多非 coder 在用 Claude Code 干 coding 以外的活。"能不能让这个体验好一点？"

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Claude for Small Business**：她自己拉小生意主朋友 onboard Co-work 时发现他们一直在手动 toggle plugin。"那就打包成一个 bundle 吧。"

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

通用规律：**when you see people jumping through hoops to make something work, can you make that an even smoother experience?**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./latent-demand-cowork.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一个具体的小生意故事：餐厅菜单定价

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

Fiona 帮一个开两家餐厅的朋友 onboard Co-work。朋友打开她的"杂物抽屉"文件夹：

> "I know I have a few menus in here and I can't find it."

让 Co-work 扫一遍目录、找到菜单。然后朋友提了一个 Fiona 完全没想到的用法：

</div>

<div class="mt-4 p-5 bg-green-50 border-l-4 border-green-500 rounded italic">

"I want to make sure I keep my prices reasonable for locals and tourists. Hey Claude, look across my style of cuisine in this area is a comparable."

<div class="text-xs not-italic opacity-60 mt-2">— Fiona 转述</div>

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

**作者概括**：产品团队脑子里的用例 ≠ 用户真正用它的方式。
你打死想不到的"市场分析助手"，对方一边洗碗一边就用上了。

</div>

---

# 害怕 → "我能做点什么？"

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

她注意到很多对 AI 反感的人，**底下其实是恐惧**——感觉一切失控、世界正在抛下自己。

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 失控感的思路
"It's happening to me." → 越想越焦虑

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Fiona 的反问
**"What is within my control? What can I do about it?"**

> "Is it happening to you, or is it happening for you?"

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">

她另一句口头禅：**"What would you do if you're not afraid?"** + **"Do something scary once in a while."**

</div>

---

# 银行柜员的伏笔

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

高中时她想进工程系，但**没钱付学费**——Ontario 的助学金 OSAP 能 cover 多少完全是未知。这个未知让她睡不着。

她问自己："我能做的一件事是什么？"

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 行动
National Bank of Canada 在学校贴了张招高中实习银行柜员的传单——最低工资。

她讨厌会计课，但还是去了。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 结果
整个夏天 + 周末做了**两年**柜员。
那笔钱成了她付学费的**生命线**——尤其当 2000 年 dot-com 泡沫破裂、实习机会缩水的时候。

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

她把这个故事接到今天的 AI 焦虑：**Find one action that's within your control. Take it.**

</div>

---

# Lenny 用得最多的一句格言

<div class="mt-8 p-8 bg-blue-50 border-l-4 border-blue-500 rounded text-center">

<div class="text-3xl italic">

"The cave you fear contains the treasure you seek."

</div>

<div class="text-sm opacity-60 mt-4">

— Lenny: "the quote that I have probably used the most on this podcast of all quotes"

</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**Fiona 当场说要"偷"这句**：

> "Mhm. I'm going to I'm going to steal your quote."

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

她加了一句注脚：

> "Don't do all the scary things, like maybe don't jump off a cliff, but maybe in career moves it's probably a good choice."

</div>

</div>

---

# High agency + high accountability：一枚硬币的两面

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### High agency
> "Hey here's a problem and then it's really everybody on the team has ideas for how to address the problem."

每个人都有空间提出怎么解决——**freedom to cook**。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### High accountability
> "With high agency is also high accountability."

agency 不是放任。每件事都要回答：
**"What's the hypothesis of what you're trying to solve?"**

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

她总结："making sure folks have that freedom to cook... but then it's also like, okay, what's the accountability for it?"

这是 Claude Code 团队文化的中轴。

</div>

---

# 每个 manager 都从 IC 开始（并继续当 IC）

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

Fiona 加入 Claude Code 后做的第一件不寻常的事：把所有 manager 岗位**改成"先 IC 一段时间，再开始带人"**。

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 给新 manager 的好处
落地不用立刻"挖出 manager toolbox 做 manager-y things"——
有时间真去 ship PR、读 codebase、和队友建立 rapport。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 给老 manager 的好处（包括她自己）
她做的 PR 其实不复杂——"it's more about me using the product every day just to keep that touch."

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

她从 Meta 来的时候也这样：interview as manager，**前一个季度照样当 IC**——为了知道"作为一个 Meta 工程师 ship 是什么感觉"。

</div>

---

# Dog fooding 的执念

她从 Boris、Kat 团队成员那里听到最多的关键词，就是**她对"亲自用产品"的偏执**。

<div class="mt-6 grid grid-cols-3 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### VR 团队
她用 VR 总能撞到**奇怪的"地板高度 bug"**——成了她的固定贡献：质量把关。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Marketplace
她离开团队后回去卖一台旧 MacBook Air——**立刻就被一个新型骗局盯上**。一个她在岗时没见过的 scam vector。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### Chile / LTE
Marketplace 扩张到智利前数据不好。她飞过去落地，**Android + 弱 LTE → feed 根本加载不出来**。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

> "If you have the data and you have an anecdote, trust the anecdote over the data."

— Lenny 引 Jeff Bezos

</div>

---

# 但是有代价：工程师开始变孤独

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

> "It can start being a lonely experience cuz we all started just working with our agent so much."

— Fiona

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 旧 flow
团队一起搞——后端、前端、iOS 一个 squad 围着同一个 feature 拧。
**flow 是社交的副产品。**

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Claude Code 团队的对策
**Pair-wise programming lunch** + hackathon。

她说每次看别人怎么用 Claude Code，"I learn something myself as well"——因为每个人的 flow 都不一样。

</div>

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Lenny 的比喻**：像幼儿园的 parallel play——大家坐在一起，**各自做自己的事，但看着对方在做什么**。

</div>

---

# 同时多了一种新负担：context switching

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

> "With routines and everything being more async... I think there is starting to be a high load on our context switching. I do see the context switching load increasing."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 以前
**Book focus time 写代码** — 防止被打断毁掉 flow。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 现在
**Book focus time 去 catch up 自己之前 async kick off 的 agent**——结果反而要专门"集中精力当 reviewer"。

</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

Lenny："Do you have any thoughts on a solution there?"

Fiona："I haven't cracked it yet."

**承认还没解决的问题，比假装解决了更有说服力。**

</div>

---

# 下一代工程师怎么学？

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded italic">

> "I really do think how we grow the next generation, just because how you and me got to our engineering path is just so different."

— Fiona

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 她的担心
如果新人从不需要看代码，**怎么学到"double-click 到自己依赖的那一层"**？
她反复强调这个"double click"——理解你的 dependency 是经验。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 她的猜想
> "I wonder if it's almost like you go more towards a fellowship or apprenticeship program."

实习还不够——3 个月、小项目。**真正的师徒制**可能要回来。

</div>

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**作者概括**：她不打包票"基础不重要了"，也不打包票"基础永远重要"——她说"什么是基础"会重新洗牌。

</div>

---

# 规划方式的进化：从 6 个月到 JIT

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 一开始（她自己引入的）
**6 个月路线图**——以为很轻量了

3 个月后她发现"have we still referenced [it]?"——根本没人再翻。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 修正
**1 个月计划，每周对一次** —— 一张 Excel，列优先级，每周快速核对"还是这些吗？"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 现在试的
**JIT planning（just-in-time）** + 思考"can we actually automate this更?"

不想让"更新 spreadsheet"变成 tax。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

> "I call it JIT planning now, like just-in-time planning."

她把"自己引入的流程然后自己又干掉"当成一种健康信号——下一张 slide 就讲这个。

</div>

---

# 文化里有一条："explicit permission to kill processes"

<div class="mt-6 p-6 bg-orange-50 border-l-4 border-orange-500 rounded italic text-lg">

"Explicit permission to kill processes that no longer serve us."

<div class="text-xs not-italic opacity-60 mt-2">— Fiona 描述 Claude Code + Co-work 团队文化</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 她给所有 leader 的具体作业

挑**一件你 dread 做、或者特别 noisy / 特别贵 / 特别手工**的流程。问自己一个问题：

**"Is it still serving its purpose?"**

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

她自己最近"杀掉"的就是 6 个月路线图（上一页）——而且是她**自己引入**的那个。
"Always be open to learning"——包括你自己半年前推过的东西。

</div>

---
layout: two-cols
---

# Bonus：编织 = 编译

Boris 说："在很多重要会议里，能听见 Fiona **knitting 的 click-clack**。"

她解释：

<div class="mt-4 space-y-2 text-sm">

- 两种针法：**knit and purl → 0 和 1**
- "So many concepts of **stacks and queues**"
- "I'm kind of like a **compiler**, generating an executable when I knit"

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

而且她有点"yarn addiction"——她奶奶八岁时教她织毛衣的店，这辈子的小生意热情就从那来。

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

AGI 之后她想做什么？**"Open up a yarn store in my grandmother's name."**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./knit-purl.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 什么让她睡不着觉

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"The thing that keeps me up at night is... how we maintain the culture as we are growing. Culture is like a living breathing thing. It's not just a poster you slap on a wall."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 她要守的东西
- 多元视角
- 开放、诚实、健康的辩论
- "**One team mentality**" — 接近终点线时回头看，**有没有队友需要拉一把**

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 她的噩梦
新 manager 来了，她问 "How are things going?"，对方答："Everything's fine."
而她明知道**屋子在烧**。

**装好是更可怕的灾难。**

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

她请所有新 manager 在 1:1 上"talk about what's not going well"——能聊出来才能一起解决。

</div>

---

# 一句生活信条：be kind

<div class="mt-8 p-8 bg-blue-50 border-l-4 border-blue-500 rounded text-center">

<div class="text-3xl italic">

"In a world where you can be anything, **be kind**."

</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 一个 COVID 期间的小故事

她奶奶在 Canada 的养老院，因为疫情家人都进不去。某天上午 12 点突然能 FaceTime 5 分钟——同一时间她有一个**很在意的 1:1**。

她临时改约，自责"so last minute"。对方答："Yeah, totally. No problem at all."

> "He totally didn't make it into a big deal but that made the biggest difference to me that I got to say hi to my grandmother."

</div>

<div class="mt-4 text-sm opacity-60 text-center">

小善意——**你永远不知道它对另一个人有多大。**

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">从 90 分钟对谈里精挑的几句，每一句都能在 transcript 里 grep 到：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"Coding is no longer the bottleneck. It's lifted the ceiling of what anyone is able to do."
<div class="text-xs opacity-60 mt-1 not-italic">— 全集核心论点</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"With high agency is also high accountability... making sure folks have that freedom to cook."
<div class="text-xs opacity-60 mt-1 not-italic">— 团队文化轴心</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"Make new mistakes."
<div class="text-xs opacity-60 mt-1 not-italic">— Fiona 的口头禅；零失误意味着跑得不够快</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"Don't forsake motion for progress."
<div class="text-xs opacity-60 mt-1 not-italic">— 对 token-maxing / lines-of-code 等"动作型"指标的警惕</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"It can start being a lonely experience cuz we all started just working with our agent so much."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于工程师在 AI 时代被忽略的代价</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"Explicit permission to kill processes that no longer serve us."
<div class="text-xs opacity-60 mt-1 not-italic">— 给所有 leader 的具体作业</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"What is within my control? What can I do about it?"
<div class="text-xs opacity-60 mt-1 not-italic">— 给所有对 AI 感到恐惧/失控的人的实操建议</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"In a world where you can be anything, be kind."
<div class="text-xs opacity-60 mt-1 not-italic">— 她的生活信条</div>
</div>

</div>

---
layout: end
---

# 当 coding 不再是瓶颈

<div class="mt-8 text-2xl italic opacity-80">

"Now, it's about how ambitious can you be?"

</div>

<div class="mt-12 text-sm opacity-60">

Fiona Fung · Claude Code & Co-work · Lenny's Podcast

</div>
