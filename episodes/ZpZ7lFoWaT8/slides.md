---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Anthropic Felix Rieseberg on AI Coworkers'
info: |
  Felix Rieseberg (Anthropic) on Latent Space — Claude Codework, local-first agents, skills, VM sandboxing, and the future of knowledge work.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Local-First AI 同事

## Felix Rieseberg · Latent Space · 2026-03

<div class="mt-10 text-sm opacity-70">
Anthropic Codework 团队 · Electron 项目原作者 · 前 Slack / Microsoft
</div>

<div class="mt-4 text-xs opacity-50">
"Silicon Valley overall is under valuing the local computer."
</div>

---

# 这一小时值得听的六个原因

<div class="grid grid-cols-3 gap-3 mt-6">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 反 Cloud 直觉

Silicon Valley 把本地电脑贱卖了。Felix 认为 Claude 就该在**你自己的机器上**。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### VM 是关键

Codework = Claude Code + 一台自己的 Linux 虚拟机。让 Claude 拥有和你**一样的工具集**。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Skills 起源

Barry 想连数据仓库。他没写 tool,只写了一个 markdown 文件"这是 endpoint,你自己搞"。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 授权疲劳

approve 每一步 = 不是自动化。sandbox 是那条中间路。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 就业焦虑

Anthropic 是"deeply worried"关于 junior 的。这不是姿态,是他们说的原话。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### Chromium 崇拜

Electron 之父讲他为什么还在 ship 200MB 的 Chromium。答案会让你重新认识 OS。

</div>

</div>

---

# Codework 是什么

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-lg">

"Codework is Claude Code running in a virtual machine with a little bit of padding, a little bit more guardrails."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded border border-gray-200">

### 起源

2025 年 12 月,Anthropic 内部发现越来越多**非技术用户**把 Claude Code 用在**非编码**任务上 —— 报销、Obsidian 笔记、整理文件。

</div>

<div class="p-4 rounded border border-gray-200">

### 定位

**不是** Claude Code 的降级版。是超集。给不想开终端的人一个入口,同时不损失 Claude Code 的 agent 能力。

</div>

</div>

<div class="mt-4 text-xs opacity-60">
上下文:transcript 里 Felix 反复澄清 —— "user-friendly" 不是 dumbed-down,而是 VS Code-style 的可扩展超集。
</div>

---
layout: two-cols
---

# 分层

Codework 不是重写 Claude Code,而是把它包起来:

- **上层**: system prompt、ask-user、planning 都是提示词工程
- **中层**: skills、plugins、Chrome 子 agent 是**能力**
- **底层**: 一个轻量级 Linux VM 提供**隔离**
- **宿主**: 复用 Apple / Microsoft 已经打磨好的虚拟化框架

Felix 强调:上下两层里"probably actually live in the system prompt"。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./codework-stack.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "10 天做出来的"

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

Felix 想澄清:这个数字被过度渲染了。

</div>

<div class="mt-4 p-5 border border-gray-200 rounded italic text-lg">

"Whenever people mention this like 10-day number. I do think it's important for me to mention that we didn't start with scratch. There was like a lot of stuff already happening."

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Anthropic 的实况

"a very prototype demo-first culture" —— 内部有大量 prototype 从未公开。Codework 是**挑出对的拼图**。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 新范式

"we live in like an interesting new world where **execution is actually quite cheap**."

</div>

</div>

---

# Ideas are cheap 反过来了

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50">

### 旧世界

PM 找几个客户,低带宽访谈,写 spec,做设计,执行。选 A 还是 B 是**昂贵的决定**。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 现在

"just like build all the candidates very quickly. Let's build all of them and then pick the best ones."

</div>

</div>

<div class="mt-6 p-4 border border-purple-300 bg-purple-50 rounded text-sm">

**Felix 个人立场**: "I will probably no longer try to come up with a really good product without testing out with people." —— A/B 不再是分叉,是**一起 ship 出来对比**。

</div>

---

# 核心押注:本地才是家

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50">

"Silicon Valley overall is under valuing the local computer."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded border border-gray-200">

### Felix 的默认反驳

"How come we're all using MacBooks and not like an iPad or a Chromebook?"

如果本地没有价值,大家早该切 iPad 了。

</div>

<div class="p-4 rounded border border-gray-200">

### 推理

Claude 要**极其有用**,就得**触到你自己触得到的一切**。否则会被 "hamstrung in like all these complex ways"。

</div>

</div>

---
layout: two-cols
---

# 为什么不干脆全 Cloud?

Felix 举了一个"你以为很容易"的例子:

- 桌面 app 有权限读你的 **Chrome cookies**
- 直接把它们同步到云端,Claude 就能替你上银行、订机票
- **但是** —— 银行看到两个不同 IP 上同一个 auth,直接锁号
- 你只好带着护照去柜台

<div class="mt-4 p-3 text-sm bg-yellow-50 border-l-4 border-yellow-500 rounded">
"the world is not ready for this kind of stuff."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./local-vs-cloud.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 拟人化到底

<div class="mt-4 p-6 text-xl italic border-l-4 border-purple-500 bg-purple-50 rounded">

"It often is quite useful if you do like anthropomorphize Cloud aggressively and just be like, 'This is a person.'"

</div>

<div class="mt-6 p-4 border border-gray-200 rounded">

### Felix 给他爸的类比

如果你是开发者,老板说"你不需要电脑,我给你发邮件,你把代码发回来" —— **that maybe work for Pedro on the back, but that is not very effective.**

</div>

<div class="mt-4 p-3 text-sm bg-green-50 border-l-4 border-green-500 rounded">
所以给 Claude 一台自己的电脑 —— 装 Python、装 Node、装 Homebrew,都不必再跑去问 marketing 或 legal。
</div>

---

# Skills 的起源:Barry 的偷懒

<div class="mt-4 p-5 border border-gray-200 rounded">

Barry 在 desktop app 里试做"给非程序员的 Coda"。第一个 use case 永远是 **data analysis**。他要连内部**数据仓库**。

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"They just like made an .md file where we're like 'Dear Cloud, if you want to get data, here's the endpoint, here's what the API looks like, you figure it out.'"

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">

**关键升维**:不是给 Claude 一个 CLI、不是给它一个 MCP,而是**直接甩 endpoint**。上一层抽象。

</div>

<div class="mt-2 text-xs opacity-60">
这个 pattern 好用到一个程度,团队开始复用它 —— 结果就是 Skills。
</div>

---
layout: two-cols
---

# Skills = markdown 而已

Felix 反复讲这一点:

- Skills **不是**新的协议
- Skills **是**一堆文件和文件夹
- 一个 skill 里没有 schema、没有 tutorial
- "Just like explain it to Claude the way you would explain it to me"
- 一条短信都能是一个 skill

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
Swyx: 我告诉它"把一切包成 skill",然后又让它"把这个 skill 拆成三个"。它就照做了。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./skills-are-files.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 但 Skill 跨 agent 的同步没解

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50">

### 用户的问题(Alessio)

我有个"添加访客到办公室"的 skill 在 Zoe 里 —— 但 Codework 里没有。改一个还得手动 copy 到另一个。

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### Felix 的当前答案

Plugins 是 skills 的容器;可以挂 GitHub repo 当 marketplace。**格式**是共通的。

</div>

</div>

<div class="mt-6 p-4 border border-purple-300 bg-purple-50 rounded">

### 未解:公私分离

一个"订机票"的 skill,<strong>普适部分</strong>(便宜更好)和<strong>个人部分</strong>(我偏好靠窗)怎么分层?Felix: "someone is going to come up with like an interesting way." —— 目前没有。

</div>

---

# 一句话吐槽:订机票不是好 demo

<div class="mt-6 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50 rounded">

"I don't actually think AI should be booking flights ... I just want to book my flight myself."

</div>

<div class="mt-6 p-4 border border-gray-200 rounded text-sm">

**为什么它成了默认 demo**:因为它同时含"普适 + 个人"两半 —— 便宜更好 vs. 靠窗、爱哪个机场。

**为什么它还是烂 demo**:大部分人 **不希望** AI 决定这种带情绪的选择。

</div>

<div class="mt-2 text-xs opacity-60">
作者概括:这是 Felix 对"agent 演示套路"的一次直球反击 —— 找不带情绪的任务再来找我。
</div>

---

# Model overhang:脚手架会不会没了?

<div class="mt-4 p-5 italic border-l-4 border-blue-500 bg-blue-50 rounded text-lg">

"We still have a bit of sort of like **model overhang** where the model is dramatically more capable than users have been using it for."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 路线 A · 精细雕琢

给模型更好的 scaffolding,针对某个 vertical 优化 —— 短期效果拔群。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 路线 B · 只等下一版

放开权限、把安全边界筑好,**"just simply wait a second for the next model drop"**。

</div>

</div>

<div class="mt-4 p-3 text-sm bg-yellow-50 border-l-4 border-yellow-500 rounded">
Felix 的当前立场:**leaning into the latter**。特化会被泛化模型吃掉。
</div>

---
layout: two-cols
---

# Approve 每一步 ≠ 自动化

<div class="mt-4 p-4 italic bg-blue-50 border-l-4 border-blue-500 rounded">

"It's not automation if you don't delegate."

</div>

Felix 的判断:

- 100% 对齐永远做不到
- **不能等到那时候**
- 用 Swiss cheese model —— 层层拦截
- Sandbox 是最实用的中间层

<div class="mt-4 p-3 text-sm bg-purple-50 border-l-4 border-purple-500 rounded">
Alessio 补充:今天 npm install 就有全 user 权限,能读 ~/.ssh —— "Crazy that that is the default"。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./approval-spectrum.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# VM 的技术选型

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### macOS

用 **Apple Virtualization Framework**。Felix: "Apple really cooked with the virtualization framework. It is very, very good."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Windows

用 **Windows Host Compute System** —— 就是 WSL 2 的那个引擎。"one of the diamonds within Windows."

</div>

</div>

<div class="mt-6 p-4 border border-gray-200 rounded">

### 为什么值得

即便公司 IT 锁死了主机,VM 里的 Claude 也可以随便装 Python、Node、Homebrew。IT 只关心 VM 边界的**网络和文件系统**,不必再审"能不能装 Homebrew"这种问题。

</div>

<div class="mt-2 text-xs opacity-60">
Felix 顺手说了个小坑:macOS 显示 10GB 是显示 bug,盘上其实压缩了空 sector。
</div>

---

# Automation Empire:像 Factorio 一样

<div class="mt-6 p-6 text-xl italic border-l-4 border-green-500 bg-green-50 rounded">

"It's a little bit like playing Factorio but for your own life. You start really small ... once it clicks, you keep adding onto this like automation empire just like make your life easier and easier."

</div>

<div class="mt-6 p-4 border border-gray-200 rounded">

### Felix 的最爱 skill

每天早上 Codework 扫他的日历:有没有冲突?"如果 Dario 加了个会,别把 Dario 挤出去"这种规则写在 prompt 里。

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
先从"点点点手动"的任务起
</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
让它一步步替你做
</div>
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
自动化范围随信任扩大
</div>

</div>

---

# Swyx 的多 Claude 编排

<div class="mt-4 p-4 border border-gray-200 rounded">

**场景**:每天早上要过一遍 crash dashboard,挑出可修的 bug。

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"Tell Claude Code, I want you to go to all these crash tools. I want you to find all the bugs that you think are fixable ... And then I want you to tell **another Cloud** to like fix all of that."

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 主 Claude

分类 + 为每个可修 bug 写一个 markdown prompt 文件

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 子 Claude

用 `claude-code-remote` **递归调用自己**,一个 markdown 一个 job

</div>

</div>

<div class="mt-3 text-xs opacity-60">
Felix 后来把它叫做"多播多个 Codework" —— 不用 sub-agent 是因为 remote 可以 fire-and-forget 去开会。
</div>

---

# 就业焦虑不是姿态

<div class="mt-4 p-6 italic border-l-4 border-red-500 bg-red-50 rounded text-lg">

"Anthropic as a group of people, we're **deeply worried** about the impact that the tools are going to have on the labor market, especially for like junior employees."

</div>

<div class="mt-4 p-4 border border-gray-200 rounded text-sm">

**Felix 的诚实**:很多我们讨厌的"杂活",过去正是**给 entry-level 分配的活**。自动化掉它,junior 的入口就没了。

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Felix 承认自己不是那个人**:社会级、政府级、经济学家级的讨论 —— "We're probably not talking enough."

</div>

---

# Alessio 的半玩笑答案:模拟器

<div class="mt-4 p-4 border border-gray-200 rounded">

### 观察

Junior 工程师头三年里,"真正学到东西的高光时刻"其实只有一小撮。剩下都在填空。

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 想法

用 AI 把这几年**压缩成密集训练**。"You want to come work at Jane Street? We'll just put you in the **simulator** for like 3 months."

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**局限**:工程有反馈闭环。销售、市场 —— 目前没有可信的 feedback loop 去 simulate。

</div>

<div class="mt-2 text-xs opacity-60">
作者概括:类似"付费上大学"—— 只不过学到的是<strong>能被真环境验证</strong>的技能。
</div>

---

# Felix 的类比:Waterloo 模型

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

Felix 在带团队时反复注意到:**Waterloo 的 new grad 明显更成熟**。

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50">

### 德国传统 CS

"要成为医生,得先修 4 年生物学。" 新人从没在真产品里 ship 过东西。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 滑铁卢

课程里内建 co-op —— junior 已经**在 Apple、Google、Tesla 走了一圈**。像收集无限宝石。

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
Felix: 也许这是 AI 时代 junior 阶段被压缩后,<strong>唯一可行的模板</strong>。
</div>

---

# 多 agent 未来:给 Claude 一个 Slack handle?

<div class="mt-4 p-5 italic border-l-4 border-blue-500 bg-blue-50 rounded">

"At what point do we just assign these things their own Gmail account and we just give them their own like **Slack handle** ... they will just like use the same tools we humans use to interact with each other."

</div>

<div class="mt-4 p-4 border border-gray-200 rounded text-sm">

**已经在发生**:Anthropic 的 finance 团队大量投在 Office / Google Docs 集成。Claude 现在**直接在 Google Doc 里留 comment**,不用他们自己造协议。

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

Felix 的忧虑:"building something very powerful and building something creepy often goes hand in hand." —— 两个人的电脑通过 BLE 就能发现彼此,但不代表你**希望** agent 就这么互相 sniff。

</div>

---

# Windows 95 in JavaScript

<div class="mt-4 p-4 border border-gray-200 rounded">

Felix 在 Slack 时跟同事**争论 Electron 值不值得**。他花一晚上,把 Windows 95 塞进浏览器 —— 用一个叫 **v86** 的 x86 模拟器(WebAssembly),不是他写的。

</div>

<div class="mt-4 p-5 italic border-l-4 border-purple-500 bg-purple-50 rounded">

"I still am very upset that I can run all of Windows 95 in JavaScript and launch Microsoft Excel inside the virtualized JavaScript Windows 95 machine ... faster than I can do a lot of other things in like traditional SaaS applications."

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
真正的点不是恶搞 —— 是让所有讨论 Electron "太重"的人停一秒。
</div>

---
layout: two-cols
---

# 为什么还要 ship 200MB Chromium

Felix 的辩护(他真的写过一版 Slack 用 OS WebView):

- OS 自带的 WebView 修 bug 要等**下一次系统升级**
- Slack 里 YouTube 视频渲染异常 —— 你不能对用户说"你的 MacBook 太旧"
- Chromium 什么破 GPU 都能兼容 —— `chrome://gpu` 里列的都是它绕过去的驱动 bug
- **24 小时**内会修

<div class="mt-3 p-3 text-sm bg-yellow-50 border-l-4 border-yellow-500 rounded">
Unreal Engine 也用 Chromium 渲染文本。这就是那个"看不见的操作系统"。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./chromium-super-os.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Tauri?Felix 的实用取舍

<div class="mt-4 p-4 border border-gray-200 rounded">

Swyx: "我的看法是,默认 Tauri,除非你真的需要 Electron 的火力。"

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 小 app / 用户忍得住

系统 WebView 完全够。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 大 app / 用户不会忍

嵌入自己的 Chromium 才能对渲染栈**有掌控**。

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
Swyx 提议的 AGI 时刻:"Cloud can build Chromium" —— 不是造轮子,是真能干 Chromium 那种<strong>极其特化、极其庞大</strong>的 codebase。Felix: 现在还完全做不到,tooling 都是 Chromium 专属的。
</div>

---

# 未来:更多"你的电脑"

<div class="mt-4 p-4 border border-gray-200 rounded">

Felix 对 Codework 未来的三个投入方向:

</div>

<div class="mt-4 grid grid-cols-3 gap-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1. Compute 关系

"the one in front of you? or like a VM on your computer? or like a computer somewhere else?" —— 悬而未决。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2. 独立时间跨度

从"回答问题"到"接手更长更宽的任务",逐步爬坡。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 3. Remote control

现在还没有,"coming soon"。

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

Felix 想留的余量:"我给 Claude 装一个第二光标"曾是内部畅想 —— 但 macOS/Windows 的模型都是**单前台窗口**,操作系统这一层跟不上。

</div>

---

# Anthropic Labs:公司里的"疯人院"

<div class="mt-6 p-6 italic border-l-4 border-purple-500 bg-purple-50 rounded text-lg">

"The Labs team is primarily working on things that you don't see in public yet ... **things that make really no sense for anyone else to work on**."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 定义

一个专门做**极不合理**的赌注的团队。半破的、极其外围的想法。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 结构

Codework 属于更大的 Claude Code 组;Labs 是另一支,最近**变大了**,Mike 刚加入作 IC。

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这一小时里最值得记住的几句 · 全部可在 transcript grep 到</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Silicon Valley overall is under valuing the local computer."
<div class="text-xs opacity-60 mt-1 not-italic">— Felix,开场即中心论点</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"Execution is actually quite cheap ... just build all of them and then pick the best ones."
<div class="text-xs opacity-60 mt-1 not-italic">— Felix,Anthropic 新工作方式</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Dear Cloud, if you want to get data, here's the endpoint ... you figure it out."
<div class="text-xs opacity-60 mt-1 not-italic">— Barry 写的第一个 skill,一切的起点</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"It's not automation if you don't delegate."
<div class="text-xs opacity-60 mt-1 not-italic">— 论 approval exhaustion</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"A little bit like playing Factorio but for your own life."
<div class="text-xs opacity-60 mt-1 not-italic">— Codework 的用法学</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"Anthropic ... we're deeply worried about the impact ... on the labor market, especially for like junior employees."
<div class="text-xs opacity-60 mt-1 not-italic">— 不是姿态,是原话</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"I don't actually think AI should be booking flights ... I just want to book my flight myself."
<div class="text-xs opacity-60 mt-1 not-italic">— 对 agent 演示套路的反击</div>
</div>

</div>

---
layout: end
---

# 让 Claude 住在你自己的电脑里

<div class="mt-8 text-xl italic opacity-80">
"The safest thing is to do nothing."
</div>

<div class="mt-2 text-sm opacity-60">
—— Felix Rieseberg · Latent Space · 2026-03
</div>
