---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Skill Issue: Andrej Karpathy on Code Agents, AutoResearch, and the Loopy Era of AI'
info: |
  Andrej Karpathy 做客 No Priors，聊 code agents、AutoResearch、
  以及"循环时代"的 AI：编程为什么变成了"表达意图"、为什么瓶颈是你自己、
  家庭智能体 Dobby、软件如何退化成 API endpoints、模型的锯齿状智能与物种化。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Skill Issue

<div class="text-lg opacity-80 mt-4">Code Agents · AutoResearch · the Loopy Era of AI</div>

<div class="mt-10 text-sm opacity-60">
Andrej Karpathy · No Priors Podcast<br/>
Eureka Labs 创始人 · 前 Tesla AI 总监 · OpenAI 创始成员
</div>

<div class="mt-8 text-xs opacity-50">
一场关于"循环"的对谈：当瓶颈从算力变成你自己，<br/>
"写代码"这个词本身已经不再准确。
</div>

---

# 为什么这期值得看

<div class="text-sm opacity-70 mb-4">Karpathy 不是在预测远方，而是在描述他这几个月每天 16 小时真实在做的事。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 编程之死
"写代码"不再准确——更像是一整天对 agents 表达意图。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Skill Issue
做不成往往不是模型不行，而是你"还没学会用"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 你就是瓶颈
算力焦虑变成了 token 吞吐焦虑——系统在等你。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### AutoResearch
把自己移出循环，让 agents 跑得更久、更多。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 锯齿状智能
既像博士生，又像十岁小孩——能力分布极不均匀。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 数字先沸腾
数字世界先被重写，物理世界更慢——工作随之重组。

</div>

</div>

---
layout: two-cols
---

# "写代码"已经不准确了

Karpathy 描述自己从去年 12 月起的状态：几乎没有手敲过几行代码。

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"I spend 16 hours a day expressing intent to my agents, making things happen."
<div class="not-italic text-xs opacity-60 mt-1">— 他说连"writing code"这个词都不再准确</div>
</div>

<div class="mt-3 text-xs opacity-70">
比例的迁移：曾经 80% 自己写、20% 交给 agent；后来变成 20/80；现在"比这还极端"。<br/>
你开始用非常 high-level 的方式看一个 repo——把不冲突的 feature 分给 agent A、agent B，
像项目的<strong>总调度</strong>一样在 repo、分支、任务之间来回审查、合并、派活。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./orchestration.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Skill issue：不是能力问题，是技巧问题

<div class="text-sm opacity-70 mb-4">东西跑不起来时，Karpathy 的第一反应不是"模型不行"。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 不是先怪模型
而是先问自己：指令够好吗？memory 系统接对了吗？任务切得够清楚吗？整个流程并行得够好吗？

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 而是怪自己的技巧
"许多问题更像 skill issue，而不是 capability issue。"——上限被炸开了，差的是你用它的功夫。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"many problems are more like a skill issue than a capability issue."
</div>

<div class="mt-3 text-xs opacity-70">
他还提到一种强烈的焦虑：如果不在最前沿，会非常不安——因为这件事"远没有被探索完"。
</div>

---

# 你，就是系统里的瓶颈

<div class="text-sm opacity-70 mb-4">过去工程任务的瓶颈是"算力不够"，现在突然变成"我自己"。</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 读博时
GPU 没跑满会焦虑——算力闲着没用。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 现在
焦虑迁移到了 token 吞吐——Codex 配额满了就想换 Claude。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 新肌肉记忆
agent 在跑时，第一反应不再是"等它"，而是 <strong>"why don't I open a few more?"</strong>

</div>

</div>

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 italic text-sm">
"If you still haven't maxed out your tokens, your subscription, your compute, then you are the bottleneck in the system."
</div>

<div class="mt-2 text-xs opacity-70">
Peter Steinberger 把这个推到极致：一排显示器、一堆 Codex 实例，每个跑 20 分钟，不停在不同 repo 之间派活。
</div>

---

# Personality 不是装饰，是产品体验的一部分

<div class="text-sm opacity-70 mb-4">Karpathy 越来越觉得 agent 的"性格"很重要。</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Claude
"做得好"，感觉像一个真正会合作的队友。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Codex
更干、更冷——"我帮你做完了，但不太在乎你在做什么"。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### ChatGPT
往往更乐观，更容易顺着你。

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">
"if Claude praises me, I feel like I actually want to 'earn that praise.'"
<div class="not-italic text-xs opacity-60 mt-1">— 给它半生不熟的想法它反应平淡；自己觉得想法真好时，它的反馈也更强</div>
</div>

<div class="mt-2 text-xs opacity-70">
他承认这听起来有点荒谬，但正说明：personality 层不是可有可无的附加项。
</div>

---

# Dobby：一个看家的家庭智能体

<div class="text-sm opacity-70 mb-4">一月份 Karpathy 搭了个家用 background agent，叫 Dobby。</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 它怎么开始的
让它扫本地网络上的智能家居子系统——它真的扫了 IP、找到 Sonos，发现接口几乎没保护，就自己去逆向 API，回来问要不要试。三个 prompt 之后，书房里的音乐响了。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 它接管了什么
灯光、暖通、窗帘、泳池、SPA、安防系统。门口摄像头先做变化检测，再交给视觉模型分析——然后直接在 WhatsApp 上发消息。

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic text-sm">
"a FedEx truck just stopped at the door, you may have a package."
<div class="not-italic text-xs opacity-60 mt-1">— Dobby 直接发到他的 WhatsApp，附一张门口的照片</div>
</div>

<div class="mt-2 text-xs opacity-70">
以前控制这些要用六个完全不同的 app，现在基本都不开了。"Dobby really feels like it's watching the house for me."
</div>

---
layout: two-cols
---

# 软件可能退化成一堆 API endpoints

很多软件今天的 UX 层，也许根本不需要存在。

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"Many apps may ultimately degrade into a set of API endpoints, called by an agent, with the agent acting as the intelligent glue layer that binds them together."
</div>

<div class="mt-3 text-xs opacity-70">
他举跑步机的例子：当然有配套 app，但他不想打开网页按一堆按钮——他真正想说的是
"帮我记一下这周做了几次有氧"。<br/>
未来很多工具会更 <strong>agent-first</strong>，而不是 UI-first。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./api-glue.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 人们想要的，是"能替你操作软件的实体"

<div class="text-sm opacity-70 mb-4">学一个新 UI 本身就是一种成本。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 普通人想象的 AI 不是
一个"原始的 LLM token 生成器"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 而是
一个有身份、有记忆的实体——你可以告诉它事情，它会记住，会持续替你处理问题，像藏在 WhatsApp 后面的某个存在。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括</strong>：所以很多行业会被重新配置——客户不再只有人类，还有"代表人类行动的 agents"。
这也是 Karpathy 对"agent-first 工具"判断的另一面。
</div>

<div class="mt-3 text-xs opacity-70">
他暂时没把 Dobby 接进 email、日历这类核心系统：一是会分心，二是一旦交出整个数字生活的权限，
安全和隐私就变得非常严肃，而这些系统的边缘还很粗糙。
</div>

---
layout: two-cols
---

# AutoResearch：把自己移出循环

问 Karpathy "AutoResearch" 背后真正的动机时，他的回答很直接。

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">
"The core motivation is: to remove myself as the bottleneck."
</div>

<div class="mt-3 text-xs opacity-70">
如果你还坐在循环里——盯着结果、再决定下一步——系统就会被你堵住。<br/>
现阶段的玩法是 <strong>leverage</strong>：他只想偶尔贡献一点点 token，
而大量工作以他的名义持续发生。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./leverage-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 递归自我改进不是玩具

<div class="text-sm opacity-70 mb-4">Karpathy 本来没指望 AutoResearch 立刻就 work。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 实验场
他在一个自己"极其熟悉"的 GPT-2 mini playground 上跑实验——他以为这个 repo 早就被自己调透了。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 结果
它居然挖出了他没见过的东西——比如 weight decay 和某些超参之间的交互，还是有 gain。

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
他由此意识到：这种 <strong>"recursive self-improvement"</strong> 不是一个玩具。
</div>

<div class="mt-3 text-xs opacity-70">
前沿实验室当然也在往这个方向走：先在小模型上做大量探索，再把结论外推到大模型。
</div>

---

# 研究组织，可以是"一堆 Markdown 文件"

<div class="text-sm opacity-70 mb-4">如果研究流程本身要被重写，那它该长什么样？</div>

<div class="mt-2 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"You can even understand a research organization as a set of Markdown files"
<div class="not-italic text-xs opacity-60 mt-1">— 定义所有角色、流程、接口、怎么协作、怎么开会、怎么选题、怎么合并结果</div>
</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-xs">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 写成代码
"组织方法"一旦写成代码，就能被优化、被比较、被进化。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 同台竞技
让很多人各写一版 program MD，同样硬件预算下，看谁的版本带来更大改进。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 再喂回去
把结果喂回模型，让模型写出更好的下一版。

</div>

</div>

<div class="mt-4 text-xs opacity-70">
于是整个过程像被一层层抬升：LLM → agent → multi-agent → 指令优化 → 对"组织本身"的元优化——几乎无限扩张。
</div>

---

# AutoResearch 的前提：一个能被清晰评估的指标

<div class="text-sm opacity-70 mb-4">这套玩法并不是对所有任务都成立。</div>

<div class="mt-2 p-4 rounded bg-green-50 border-l-4 border-green-500 italic text-sm">
"The most important prerequisite is that you need an objective metric that can be clearly evaluated."
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 非常适合
让一个 CUDA kernel、或模型里某段代码更高效——目标极清晰：行为一样，但更快、更便宜、更好。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 难以全自动
一旦任务没有清晰、自动、低歧义的评估标准——不是 agent 做不了，而是你无法验证它是否真的做得"更好"。

</div>

</div>

<div class="mt-4 text-xs opacity-70">
他也提醒：今天的模型已经很强，但边缘仍然粗糙。
</div>

---

# 锯齿状智能：博士生与十岁小孩共存

<div class="mt-4 p-6 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"I often feel like I'm talking to a very capable PhD student, and at the same time like I'm talking to a ten-year-old kid."
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 你能感到它很强
某些方向上的能力确实接近专家。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 又常感到奇怪的不均匀
有时它会在一个"明显到不可能错"的问题上浪费大量算力。

</div>

</div>

<div class="mt-4 text-xs opacity-70">
人也有弱点，但模型的"锯齿状弱点"更极端、更不连续。这种 jaggedness 真的很奇怪。
</div>

---

# 编程变强 ≠ 全面变强

<div class="text-sm opacity-70 mb-4">很多人以为只要 coding 变强，其它能力会"免费"一起变强。Karpathy 不信这条。</div>

<div class="mt-2 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
一个很典型的例子是<strong>讲笑话</strong>。今天问最先进的模型讲个笑话，它大概率还是给你流传多年的老梗：
</div>

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"Why don't scientists trust atoms? Because atoms make up everything."
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-xs">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 有 RL reward 覆盖的地方
可验证、可优化——模型进步非常快。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 没有清晰 reward 信号的地方
不会自动同步变强。可能有一些泛化，但不那么线性、不那么平滑。

</div>

</div>

---

# 模型会"物种化"

<div class="text-sm opacity-70 mb-4">未来不一定是一个全能的统一模型。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 今天的实验室
更像在造一个"单一栽培"的模型——把所有能力塞进一个脑子。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 但自然界里
"intelligence is never a single form."——不同的生态位长出完全不同的脑结构。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
所以未来很可能出现更小、更专门的模型——围绕具体任务在延迟、吞吐、能力分布上做定制优化。
</div>

<div class="mt-3 text-xs opacity-70">
只是今天"如何稳定改权重、做深度微调、做持续学习"的工程还不成熟——最成熟的做法仍然是在 context window 里做事。
</div>

---
layout: two-cols
---

# Folding@home 式的开放研究

Karpathy 设想一种系统：生成候选解很贵，但验证候选解相对便宜。

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"This feels a bit like Folding@home, SETI@home, and even to some extent like blockchain."
</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic text-xs">
"here it's not blocks but commits; not mining but experimental search."
</div>

<div class="mt-3 text-xs opacity-70">
一群互不信任的贡献者 + 一组负责验证的可信节点。只要 sandbox、安全隔离、验证管线设计得够好，
就能组织起全球零散的算力——甚至让"按兴趣捐算力"变得有意义。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./open-research.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 数字世界先沸腾，物理世界更慢

把今天的 AI 理解成"数字世界里的工人"：它最擅长操作数字信息，而不是直接操作原子世界。

<div class="mt-3 text-xs opacity-70">
复制、修改、传输 bit，远比重塑物理世界快。所以 Karpathy 的直觉一直是：
数字空间会先被大规模重写、沸腾、重组；物理世界会更慢。<br/><br/>
但这个<strong>接口</strong>很有意思——它不一定要从"昂贵的机器人"开始。
摄像头、传感器、现成硬件、软件接口，已经是进入物理世界的能力了。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./digital-physical.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 工作市场：杠杆，以及 Jevons 悖论

<div class="text-sm opacity-70 mb-4">如果你在找工作、或在想"现在该学什么"——Karpathy 的建议。</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 第一件事
别忽视它，也别因为害怕而回避。这些工具至少现在是<strong>赋能工具</strong>。大多数工作本质上是一串任务，其中一些已经能明显被加速。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 对软件工程
他其实是乐观的。软件的需求接近无限，过去的限制不是没需求，而是太贵、太慢、太难做。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
门槛一降，<strong>Jevons 悖论</strong>很可能出现："when something gets cheaper, demand can actually increase."
就像 ATM 没有直接淘汰银行柜员——网点变便宜了，银行能开更多，总需求反而被放大。
</div>

---

# 该去 frontier lab 吗？

<div class="text-sm opacity-70 mb-4">"如果你这么看，最该去的地方还是前沿实验室吗？"——答案没那么简单。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 实验室之内
当然很重要。但一旦进入一个组织，你就不再是完全自由的 agent——会承受很多显性和隐性的压力：有些话能说，有些难说；有些问题能参与，有些不能。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 实验室之外
你可能有更多机会在<strong>生态层面</strong>产生影响：做工具、塑造工作流、推开放基础设施、做教育、创造新的协作范式。

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
所以他不会把"最有价值的位置"等同于"加入某一家特定的前沿公司"。
</div>

---

# 开源 vs 闭源：他偏向开源

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 闭源智能的极度集中
本身带有结构性风险。回看历史——无论政治还是经济——权力过度集中通常没什么好的记录。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 软件史的类比
Windows、macOS 当然强，但像 Linux 这样的开放系统最终支撑了海量的真实世界计算。AI 可能走类似的路径。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"I don't think 'concentrate the most important intelligent systems into as few hands as possible' is a healthy end state."
</div>

---

# Agentic web：互联网变成一张"工作面"

<div class="text-sm opacity-70 mb-4">数字与物理世界的接口，是接下来特别值得看的地方。</div>

<div class="mt-2 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"the internet will no longer be just websites browsed by humans, but will become a working surface where agents consume, generate, verify, and exchange information with each other."
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### agents 终会撞进现实
一旦 agents 开始互相对话、执行任务、形成 agent 经济，最终得去碰传感器、设备、外部系统、收集新数据。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 训练管线随之重组
越来越多系统会围绕"喂 agents""喂训练流程"重新组织——LLM 训练本身就是个典型例子。

</div>

</div>

---

# 教育：把"如何解释"编码进 agent

<div class="text-sm opacity-70 mb-4">Karpathy 做过 MicroGPT——一个尽量只为"清晰"而非"速度"优化的小教学场。但他觉得教育本身会变。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 过去
教育是课程、讲座、文档。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 接下来
"I write what I believe is the best explanatory path into skills and prompts that an agent can execute."——学生不懂某个点，agent 能用三种不同方式解释、带他走代码、按背景调整顺序。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
"The things the agent can't do are your real work; the things the agent can already do well, it will soon do better than you."
</div>

<div class="mt-2 text-xs opacity-70">
真正重要的，是你能否把洞察、判断、解释结构准确地注入 agent——而这个边界一直在移动。
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-2">这期对谈里最值得留存的句子（均可在 transcript 中检索）。</div>

<div class="grid grid-cols-2 gap-x-3 gap-y-2 text-[11px]">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"I spend 16 hours a day expressing intent to my agents, making things happen."
<div class="opacity-60 mt-0.5 not-italic">— 编程已经不是"写代码"</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"many problems are more like a skill issue than a capability issue."
<div class="opacity-60 mt-0.5 not-italic">— 上限被炸开，差的是技巧</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"If you still haven't maxed out your tokens... then you are the bottleneck in the system."
<div class="opacity-60 mt-0.5 not-italic">— 算力焦虑迁移成 token 吞吐焦虑</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"The core motivation is: to remove myself as the bottleneck."
<div class="opacity-60 mt-0.5 not-italic">— AutoResearch 的真正动机</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"I often feel like I'm talking to a very capable PhD student, and at the same time like I'm talking to a ten-year-old kid."
<div class="opacity-60 mt-0.5 not-italic">— 锯齿状智能</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Why don't scientists trust atoms? Because atoms make up everything."
<div class="opacity-60 mt-0.5 not-italic">— 模型还在讲多年老梗：coding 强 ≠ 全面强</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"You can even understand a research organization as a set of Markdown files"
<div class="opacity-60 mt-0.5 not-italic">— program MD，可优化、可进化</div>
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"This feels a bit like Folding@home, SETI@home, and even to some extent like blockchain."
<div class="opacity-60 mt-0.5 not-italic">— 把全球零散算力组织进开放研究</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"The things the agent can't do are your real work; the things the agent can already do well, it will soon do better than you."
<div class="opacity-60 mt-0.5 not-italic">— 人的价值边界一直在移动</div>
</div>

</div>

---
layout: end
---

# "everything feels like a 'skill issue'"

<div class="mt-6 text-base opacity-70">
当瓶颈从算力变成你自己，无限扩张的诱惑也变成了一种近乎成瘾的焦虑——<br/>
这就是 Karpathy 口中"循环时代"的真实质感。
</div>

<div class="mt-10 text-xs opacity-50">
Andrej Karpathy · No Priors Podcast
</div>
