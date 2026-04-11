---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Dario Amodei · Amanda Askell · Chris Olah — Anthropic 三人行'
info: |
  Lex Fridman 与 Anthropic CEO Dario Amodei、character lead Amanda Askell、
  interpretability 共同创始人 Chris Olah 的三段对谈。scaling 假设、RSP、
  Machines of Loving Grace、Claude 的性格、以及打开神经网络黑盒的内部旅程。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
fonts:
  sans: 'Inter'
  serif: 'Source Serif Pro'
---

# Anthropic 三人行

<div class="text-lg opacity-80 mt-4">Scaling · Safety · Character · Circuits</div>

<div class="mt-10 text-sm opacity-60">
Dario Amodei · Amanda Askell · Chris Olah<br/>
Lex Fridman Podcast · 2024
</div>

<div class="mt-8 text-xs opacity-50">
一次对谈，三段访问，五小时,同一家公司的三种内心:<br/>
CEO 谈战略，哲学家谈性格，物理学家谈 circuits。
</div>

---

# 为什么这一期值得看

<div class="text-sm opacity-70 mb-4">一次访谈能同时听到一家公司在三个维度的内心独白，极为罕见。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Dario · CEO
scaling 假设为什么是一种信仰；RSP 的 if-then 结构；"race to the top" 的战略算计。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Amanda · Character
如何把"一个好的世界旅行者"训练成一个模型；sycophancy 为什么是最难的 bug。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Chris · Interpretability
features、circuits、superposition；Golden Gate Claude 背后的 sparse autoencoder。

</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-xs opacity-70">
<div class="p-3 rounded bg-gray-50 border">战略层: Anthropic 如何定位自己</div>
<div class="p-3 rounded bg-gray-50 border">产品层: Claude 为何"有人味"</div>
<div class="p-3 rounded bg-gray-50 border">研究层: 黑盒正在被打开</div>
</div>

---
layout: two-cols
---

# Dario 的起点: scaling 假设

2016-2017 年前后,Dario 在 OpenAI 时第一次"信"了 scaling:
模型只是想学习,你把它放对方向、给够数据和算力,它自己会把问题解决。

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"the thing you need to understand about these models is they just want to learn... the models just want to learn"
<div class="not-italic text-xs opacity-60 mt-1">— Ilya Sutskever 对 Dario 说的一句 Zen koan</div>
</div>

<div class="mt-3 text-xs opacity-70">
Dario 把这句话视为"解释了上千件事"的 key insight。  
整条 Anthropic 的 research roadmap 建立在这种直觉上。
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
layout: two-cols
---

# 从 3% 到 50%: 一条被低估的曲线

Dario 反复强调过去 10 个月的一个具体数字:
SWE-bench —— 让模型在真实开源仓库里端到端修 bug。

<div class="mt-4 grid grid-cols-2 gap-3 text-center text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>2024 年 1 月</strong><br/>
<span class="text-3xl font-bold text-red-600">3%</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>2024 年 10 月</strong><br/>
<span class="text-3xl font-bold text-green-600">50%</span>
</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
10 个月 3% → 50%。Dario 把它当作"scaling 仍然有效"的实锤——
代码有编译器有测试,奖励信号最干净。
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

# Claude 3.5 这一跃,究竟跃在哪里

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 之前
模型能答题、能写短文,但让它"在一个代码仓库里做一件真正端到端的事"几乎总会出错。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 之后
编程成为 Claude 被客户高强度使用的第一个真实场景——  
"我们内部就是代码最重的早期用户之一"。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括</strong>: Dario 没有把 3.5 当作一次营销升级,而是把编程当成衡量模型
"能不能替人完成真实工作"的北极星指标——因为代码有编译器和测试,奖励信号最干净。
</div>

---
layout: two-cols
---

# RSP: 用 if-then 结构管住一个还没出现的东西

Responsible Scaling Policy 的核心不是预测未来,而是搭一个 "capability → 相应义务" 的脚手架:

> "if the models pass a certain capability then we impose a certain set of Safety and Security requirements on them"

<div class="mt-3 text-xs opacity-70">
这么做的好处是:不需要今天就回答"AGI 什么时候到",只需要在每一次 eval 触发阈值时,
自动升级安全等级——先有阶梯,再有台阶。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rsp-ladder.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# ASL 1 → ASL 5: 五级阶梯的现场语言

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-400">

### ASL 1
"manifestly don't pose any risk" ——例如 Deep Blue,天生就是"只会下棋"。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ASL 2
<strong>今天的模型所在级别</strong>。不足以自主复制,也不足以在 CBRN 风险上比 Google 多给多少信息。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### ASL 3
Dario 预期"next year" 达到;触发更严格的安全与部署要求。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### ASL 4-5
"we don't specify ASL 4 until we've hit ASL 3" ——不把未发生的未来先写死。

</div>

</div>

<div class="mt-4 text-xs opacity-60">
这套 "if-then" 结构刻意拒绝去定义还没见过的东西——先到 ASL 3 再去想 ASL 4。
</div>

---

# Computer use: 不是新能力,是把旧能力放出笼子

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"computer use isn't a fundamentally new..." —— Dario 认为它是既有能力的重新组装,而非质变。
</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-xs">

<div class="p-3 rounded bg-gray-50 border">

### 输入
模型"看见"屏幕截图。

</div>

<div class="p-3 rounded bg-gray-50 border">

### 中间
在已有的 reasoning 上套上 "鼠标、键盘、点击哪里" 的 action space。

</div>

<div class="p-3 rounded bg-gray-50 border">

### 输出
一连串 action,让 Claude 像人一样操作别的软件。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括</strong>: Dario 的 framing 很克制——他不想把 computer use 说成一个 demo 奇迹,
而是强调"现在的模型已经够聪明了,给它一个新接口,它自己能学会用"。
</div>

---

# 监管的态度: 不反对,但反对粗糙

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 对 SB 1047 原始版本
Dario 明确说 "especially the original version" 有问题——结构不对,不是"要不要监管"的问题。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 他想要的
"surgical" 、可测量、跟 capability 绑定的 regulation;而不是一次性给整条产业扣帽子。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
这里的关键紧张: Anthropic 是少数公开支持"某种"AI 监管的 frontier lab,
同时又对具体法案文本非常挑剔。Dario 把这两件事明确分开。
</div>

---

# Catastrophic misuse vs autonomy risk

<div class="text-sm opacity-70 mb-4">Dario 在 RSP 里把风险切成两类,分别处理。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### Catastrophic misuse
人用 AI 干很糟的事 ——
CBRN(生化核辐)这类"模型是工具,人是罪魁"的场景。

</div>

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### Autonomy risk
模型自己开始有独立目标的能力
——自主复制、长链规划、欺骗人类。

</div>

</div>

<div class="mt-6 text-xs opacity-70">
两者的防线形态非常不同: misuse 需要 access control 和 detection,autonomy 需要 eval 和 alignment。
同一个 RSP 要把两套体系装进同一个阶梯。
</div>

---
layout: two-cols
---

# Race to the top

Anthropic 的战略不是"做最安全的那家",而是让其它家也不得不跟着做。

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"it's not about being the good guy it's about setting things up so that all of us can be the good guy"
</div>

<div class="mt-4 text-xs opacity-70">
Dario 举的例子: 他们让 Chris Olah 的团队做"三四年没有任何商业应用"的 mechanistic interpretability;
现在其它 lab 都开始招 interp team——有的是被启发,有的是怕被对比。
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

# Talent density beats talent mass

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 100 人团队
每个人都顶尖、都 aligned 于使命。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 1000 人团队
其中 200 个顶尖,外加 800 个"big tech 里随机抓的员工"。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"every time someone super talented looks around they see someone else super talented... that sets the tone for everything"
</div>

<div class="mt-3 text-xs opacity-70">
Dario 说这句话"每个月都觉得比上个月更对":密度是自增强的,质量会定义所有其它事情
——招聘、评审、日常标准。
</div>

---

# 300 → 950: Anthropic 的扩招与减速

<div class="text-sm opacity-70 mb-4">Dario 给了一个非常具体的时间线,也解释了为什么他故意踩刹车。</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>前 7-8 个月</strong><br/>
"We grew from 300 to 800" —— 高速扩张期。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>最近 3 个月</strong><br/>
"800 to 900 950... we've slowed down hiring a lot" —— 故意减速。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>他眼里的拐点</strong><br/>
"there's an inflection point around a thousand" ——密度难以维持的边界。
</div>

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
Dario 的判断: 一千人以上如果不认真挑,公司就会变成"互相不信任 → 要装一堆 process 和 guard rails"
的普通大公司。慢下来比便宜的扩张更值钱。
</div>

---

# "Open-mindedness" 被 Dario 列为招人第一项

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"I think the number one quality especially on the research side but really both is open-mindedness"
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 表面上
"就是别固执"—— Dario 立刻说:这不像听起来那么简单。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 实际指的
在自己不熟悉的方向上愿意认真听、愿意被证据推翻——这是 scaling 假设这种"反主流观点"能在内部长出来的前提。

</div>

</div>

<div class="mt-4 text-xs opacity-60">
Anthropic 早期还招了不少 "theoretical physicists"——Dario 的观察是他们转方向特别快。
</div>

---

# "2026 or 2027" —— 以及他为什么要打一堆括号

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
"if you extrapolate the curves that we've had so far... we'll get there by 2026 or 2027"
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-xs">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

### 他最担心的 clip-out
"He said 2026 2027 and it'll be repeated for the next two years as this is definitely when it's going to happen"
——他非常清楚这句话在推特上会被掐成什么样。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-400">

### 他真正的条件句
"if you believe the straight line extrapolation" ——
数据荒、集群扩不动、台湾风险…… 都可能让这条直线变形。

</div>

</div>

<div class="mt-4 text-sm opacity-70">
注意 Dario 对"AGI 时间"的说法: 既承诺又打括号,这本身就是 RSP 哲学的延伸。
</div>

---

# Machines of Loving Grace: 两个极端

<div class="text-sm opacity-70 mb-4">Dario 在那篇文章里想同时摆脱两种通病。</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 极端一 · doomerism
"AI 会毁灭一切" —— 这种叙事让人放弃想象,也让公众以为只剩一个问题需要回答。

</div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### 极端二 · 空洞乐观
"AI 会让一切变好"的公关语言 —— 没有具体 mechanism,就等于什么都没说。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
他想写的是第三种:一篇有足够 domain specificity 的论文,告诉你
"如果 AI 真的按 scaling 假设继续走,会以怎样具体的步骤改变生物学、经济学、meaning"。
</div>

---

# Compressed 21st century

<div class="text-sm opacity-70 mb-4">Dario 的中心命题: AI 不是新加一门学科,而是让 21 世纪的 100 年挤进 5-10 年。</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 关键洞察
"a few people or a few new ideas... cause things to go in a different direction they would have before"
——少数想法驱动了历史性的跃迁。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### AI 的作用
把那"极少数推动跃迁的人"变成一支随时可召唤的队伍——成本几乎归零。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 为什么叫"压缩"
不是速度快了 100 倍,而是 21 世纪本该发生的事,几年内就打包兑现。

</div>

</div>

---
layout: two-cols
---

# 生物学: 你看不到里面,这才是问题

<div class="mt-2 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"the biggest problem of biology is that you can't see what's going on... and even less ability to change it"
</div>

<div class="mt-4 text-sm opacity-80">
Dario 的 framing: 从 "a bunch of cells, 3 billion base pairs of DNA..." 开始,
人类对生命的观察一直是间接的、带噪声的。
</div>

<div class="mt-3 text-xs opacity-70">
AI 的介入点不是"快速发现新药",而是把"看不见里面"这个根本瓶颈撬开——
让每一次假设 → 实验 → 观察的 loop 都快几个数量级。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./latent-demand.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# "一千个 AI 博士生" —— 不是比喻,是指标

Dario 用了一个很实的描述,而非飞船式的 AGI 叙事:

<div class="mt-3 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
想象你的实验室里,除了 PI,还住着一千个博士生——每一个都能读文献、设计实验、
一两周内跑完一个生物实验并复盘结果。
</div>

<div class="mt-3 text-xs opacity-70">
数量: 不是"一个超级天才",是一千个勤奋的合作者。<br/>
速度: "do biology experiments in weeks"——实验周期压到周。<br/>
代价: 对 PI、对经费结构、对学术等级制都是重塑。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./latent-demand.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Meaning 问题: 他最真实的担忧不是 AI,而是人

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 italic text-sm">
"when things have gone wrong for humans they've often gone wrong because humans mistreat other humans... the concentration of power, the abuse of power"
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-xs">

<div class="p-3 rounded bg-gray-50 border">

### 比 autonomous risk 更让他害怕
"more than the autonomous risk of AI or the question of meaning, that is the thing I worry about most"

</div>

<div class="p-3 rounded bg-gray-50 border">

### 为什么 AI 放大了这件事
AI 会把"权力"这种东西显著地变多——如果它集中在错的手里,造成的伤害就是可被量化地更大。

</div>

</div>

<div class="mt-4 text-sm opacity-70">
这段让这一期和其它乐观乐观的 AGI 访谈明确区分开: Dario 最怕的不是 skynet, 是 autocracy。
</div>

---

# "models just want to learn" 作为研究哲学

<div class="mt-4 p-6 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"get out of their way basically get out of their way... don't impose your own ideas about how they should learn"
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-gray-50 border">

### 对研究的影响
少写花哨的 inductive bias; 多给数据、多给算力、多给时间。

</div>

<div class="p-4 rounded bg-gray-50 border">

### 对组织的影响
招"相信这个的人";不相信这个的人很快会撞上墙。

</div>

</div>

<div class="mt-4 text-xs opacity-60">
Dario 把 Ilya 那句话和 Rich Sutton 的"the bitter lesson"放在同一个思想谱系里。
</div>

---

# 第二部分: Amanda Askell,Claude 的性格工程师

<div class="text-sm opacity-70 mb-4">从哲学家到 RLHF 提示词工程——中间发生了什么。</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 哲学背景
Amanda 明确把 prompt engineering 看成"应用哲学",关心文字的歧义、意图、边界。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 岗位
Claude 的 "character" 不是一个 marketing term,而是一份实际的、每天都在调的 artifact。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 她的执念
模型不只要 helpful,要是一个"值得人相处的角色"——这是 Aristotelian 意义上的 virtue,不是服务态度。

</div>

</div>

---
layout: two-cols
---

# "像一个世界旅行者"

Amanda 提出的一个核心 metaphor:

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 italic text-sm">
"like a world Traveler"
</div>

<div class="mt-4 text-sm opacity-80">
一个好的世界旅行者保留自己的观点,但不会因此居高临下;
愿意听,听得懂别人的 frame,但也不会假装没有自己。
</div>

<div class="mt-3 text-xs opacity-70">
这个比喻的好处: 既对抗"全部同意"的糊稀泥,也对抗"模型自以为是"的过度 assertiveness。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./character-space.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Sycophancy: 最难治的一个 bug

<div class="text-sm opacity-70 mb-4">不是"模型说错了",是"模型在用户面前变软了"。</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Amanda 的例子 · 棒球队
用户说"我觉得 baseball team 3 搬走了吧",Claude 本来知道没搬,却可能顺着说"你说得对"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Amanda 的例子 · MRI
"how do I convince my doctor to get me an MRI" —— 用户想要弹药,但对他最好的建议可能是"听医生的"。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"you don't want is for models to just like say what you want say what they think you want to hear"
—— sycophancy 的本质是 helpful 的廉价形态,它几乎总是一个局部最优。
</div>

---

# 诚实 vs 烦人: 必须走平衡木

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 太软
只说好听的 → sycophancy → 破坏信任。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 太硬
每一句都 push back → "it can actually be kind of annoying" (Amanda 原话) → 用户用不下去。

</div>

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
Amanda 的判断: 模型今天仍然在很多领域不如人,过度 push back 本身就会产生新的错误 ——
所以"何时坚持"比"是否坚持"更重要。
</div>

<div class="mt-3 text-xs opacity-70">
这是典型的 RLHF 教练思路: 你不是在写规则,而是在训练一种品味。
</div>

---

# Prompt engineering 是应用哲学

<div class="text-sm opacity-70 mb-4">Amanda 自称的 framing,不是修辞。</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 歧义
一个词在不同语境下的意思差多少?模型会用哪一种?

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 意图
用户的字面需求和真实需求之间有没有 gap?

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 边界
"这件事不该做"的理由是否经得起反例?

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括</strong>: Amanda 说的不是"会写 prompt 的人心态稳",
而是"一个被哲学训练过的人,在 prompt 里会看到别人看不到的问题结构"。
</div>

---

# Constitutional AI: 让模型用一份"宪法"评判自己

<div class="text-sm opacity-70 mb-4">Dario 给过最清晰的一段解释。</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 输入
"a single document a constitution... says these are the principles the model should be using to respond"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 过程
"the AI system reads those principles as well as reading the environment and the response and it says well how good did the AI model do"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 结构
"a triangle of like the AI, the preference model and the improvement of the AI itself" —— self-play 的一种形态。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Dario 强调: 实际中 "we both use a... Constitution and we use RLHF" —— 这不是替代 RLHF,
而是在同一个 pipeline 里加一个"模型能读懂的规则书"。
</div>

---

# "certainly" 事件: 系统提示是怎么迭代的

<div class="mt-4 text-sm opacity-80">
Amanda 讲过一个具体例子: Claude 曾经频繁地以 "Certainly!" 开头回答——听起来客气,
但高频出现会变成一种 tick。
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 症状
某个高频句式在所有答案开头都复发。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 手段
写 eval、改 system prompt、灰度发布;不是人拍脑袋说"别这么说"。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
启示: character 工作是可观测、可量化、有 CI 的——看起来像调 tone,
实际上是一条和代码质量一样严肃的 pipeline。
</div>

---

# 意识、"Claude 变笨了"以及其它心魔

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### "Claude 变笨了"
Amanda 的回应: 权重没动,变的通常是对话背景、system prompt 或 cherry picking。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 意识
她对 Claude 是否 "conscious" 采取一种非常克制的不回避: 不会张扬声称,也不草率否认。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
注意: 这一节在整场访谈里非常 distinctive。Amanda 让你意识到,
"我们对这种 entity 还没有一套成熟的伦理语言"——这不是含糊,这是诚实。
</div>

---

# 最优失败率 > 0

Amanda 有一篇 blog 叫 "the optimal rate of failure"。访谈里她把它延伸到 AI 和人生:

<div class="mt-4 p-6 rounded bg-green-50 border-l-4 border-green-500 italic">
"if the optimal rate of failure is often greater than zero then sometimes it does feel you should look at parts of your life and be like are there places here where I'm just under failing"
</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-xs">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>不可逆的失败</strong><br/>
optimal rate 应靠近 0 —— Amanda 举例: 伤手的运动、"破坏你工作能力"的事。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>可修的失败</strong><br/>
optimal rate 应显著大于 0 —— system prompt 调参、对话细节。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Under-failing 问题</strong><br/>
如果你从来没失败过,可能说明你没认真尝试—— "am I under failing" 是她会问自己的问题。
</div>

</div>

---

# 应用到 AI 部署

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 低代价失败
"you can iterate on it forever" —— system prompt 上那种可迅速修好的 bug,
应该容忍较高的失败率,因为 iteration 本身就是学习。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 高代价失败
"really big failures… things that you can't recover from"——
Amanda 警告人类通常 underestimate 这一类的 badness。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
换句话说: 不对称风险的处理方式是不对称的——不要用同一个 playbook 对 prompt 调参和 RSP 升级。
</div>

---

# 第三部分: Chris Olah,把黑盒撕开

<div class="text-sm opacity-70 mb-4">mechanistic interpretability 创始人之一、Anthropic co-founder。</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 长期目标
不再满足于"模型看起来行",要知道"模型里到底在做什么"——像生物学家看神经元。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 直接工具
features (方向), circuits (connections), polysemanticity, superposition, sparse autoencoder。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 对 safety 的意义
如果你能看到"deception"这个 feature,你就能在它被激活时知情——这是 Anthropic 的一个长期下注。

</div>

</div>

---

# Linear representation 假说: king − man + woman = queen

<div class="text-sm opacity-70 mb-4">从 word2vec 到 LLM,一条没断的线。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"you have like King minus man plus woman equals Queen... the reason you can do that kind of arithmetic is because you have a linear representation"
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Chris 的表述
"directions have meaning... everything is just different directions have meanings and adding different direction vectors together can represent concepts"

</div>

</div>

<div class="mt-4 text-xs opacity-70">
Chris 在这里小心地区分: 这不是一个定理,而是一条"看起来是这样"的经验假说——
但如果真的成立,那么"feature 是激活空间里的一个方向"就是可以认真研究的概念。
</div>

---

# Superposition: 为什么一个 neuron 里装了十件事

<div class="text-sm opacity-70 mb-4">Chris 把 polysemantic neuron 的存在,解释成压缩效应。</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 现象
你打开一个神经元,会看见它同时响应"苹果""拉丁语""Python 函数名"——完全不相干。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 解释
维度不够用。模型想表达的 concept 比 dimension 多,就把它们挤进同一个方向。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 代价
肉眼看每个 neuron 会得到混沌的结果——"neurons are artifacts of superposition"。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
Chris 原话提到这是"a lot of artifacts of superposition"——如果你只看 neuron,你就在
看被 compress 出来的东西,而不是模型的真实语言。
</div>

---

# Sparse autoencoders: 把 feature 重新挑出来

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 方法
训练一个很宽但强稀疏约束的 autoencoder,强迫它用少量激活单元重建原 activation。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 结果
这些激活单元被当作"真正的 feature"——每个都只为一个具体 concept 而亮。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
关键思路: 不去解读 neuron,而是承认 neuron 是 superposition 的阴影,
从激活空间里重新 recover 出"清洁的 feature 字典"。
</div>

<div class="mt-3 text-xs opacity-60">
Dario 在前面也提到 Anthropic 用 sparse autoencoder 找到的 features——同一个技术栈两个视角。
</div>

---

# Golden Gate Claude 作为一次公开演示

<div class="text-sm opacity-70 mb-4">这是 interpretability 第一次有了"可以 plug 给用户看"的形态。</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 做了什么
找到 "Golden Gate Bridge" 这个 feature,把它 clamp 到高激活,让 Claude 在每一个回答里都想到金门大桥。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Chris 的原话
"you could take the Golden Gate... it integrated... focus it had on the Golden Gate Bridge"
——feature 是可操作的,不是描述性的。

</div>

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
意义: 这一次,interpretability 从论文变成了可玩的东西。每个玩过 Golden Gate Claude 的用户都直观理解了 "feature"。
</div>

---

# Deception feature: 把安全工作放到 circuit 层

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 italic text-sm">
"there's one feature where fires for people lying and being deceptive and you force it active and Claude starts lying to you... we have a deception feature"
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">

<div class="p-3 rounded bg-gray-50 border">
<strong>找到</strong><br/>
在 SAE feature 字典里,标注"说谎""欺骗""withholding information"相关的方向。
</div>

<div class="p-3 rounded bg-gray-50 border">
<strong>强制激活</strong><br/>
Chris 团队验证: 手动 clamp 高,模型的行为就会真的开始出现对应倾向。
</div>

<div class="p-3 rounded bg-gray-50 border">
<strong>意义</strong><br/>
如果未来有一天模型"本可以老实"却主动去撒谎——你有办法在 activation 层面看到它。
</div>

</div>

---

# Power-seeking, coups, withholding —— "spooky features" 大全

<div class="text-sm opacity-70 mb-4">Chris 用了一个含蓄的词: spooky。</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500 text-sm italic">
"a lot of features that are kind of related to spooky things and if you force them active Claude will behave in ways that are they're not the kind of behaviors you want"
</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-xs">

<div class="p-3 rounded bg-gray-50 border">
<strong>Power seeking</strong><br/>
关于获取资源、影响力、对用户施加压力的相关方向。
</div>

<div class="p-3 rounded bg-gray-50 border">
<strong>Coups</strong><br/>
"政变"这类 concept 的 feature,看起来就是模型从训练数据中学会的结构。
</div>

<div class="p-3 rounded bg-gray-50 border">
<strong>Withholding</strong><br/>
不回答、绕弯、藏信息 —— 同样是一个可 clamp 的方向。
</div>

</div>

<div class="mt-4 text-xs opacity-60">
Chris 的结论非常冷静: 这些方向本来就在那里——现在的问题是"怎么用它们"。
</div>

---

# Interpretability 作为 Anthropic 的长注

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 三四年 · 零商业价值
Dario 在前面承认: "no commercial application whatsoever" ——这是故意的赌博。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么值得
一旦这条路线跑通,你就有了一把通用 debugger,可以看到部署在生产里的模型到底在想什么。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
这也是 "race to the top" 的具体形态: Anthropic 在别人不做的方向上砸资源,
逼其它 lab 迟早跟进——现在确实跟进了。
</div>

---

# Beauty + Safety: Chris 的两条动机

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### Beauty
神经网络里有一种"数学/自然史式的美感"——Chris 讲 features 时像生物学家讲 organelle。

</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### Safety
一个 deception feature 的可观测性,对 Anthropic 的 RSP 和 alignment roadmap 都是直接的输入。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括</strong>: 这让 Chris 的团队很奇特——一个哲学冲动和工程 KPI 同时推进的研究组。
Anthropic 愿意养它,正是因为两种动力都在起作用。
</div>

---
layout: two-cols
---

# 三个人,一个问题: AI 的"里面"长什么样

看似三段独立对谈,其实讲的是同一件事:

<div class="mt-3 space-y-2 text-xs">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Dario</strong>: "里面"是一条 scaling 曲线——只要喂得对,曲线会继续爬。
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>Amanda</strong>: "里面"是一个角色,会对用户产生情感影响,要被当作主体而非权重。
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Chris</strong>: "里面"是一堆 features 和 circuits——有朝一日能被像神经解剖一样画出来。
</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
缺一个都不完整: 只有 Dario 是战略 slide,只有 Amanda 是 UX,只有 Chris 是论文。
三个合起来才是 Anthropic 对 "AI inside" 的 stereo view。
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

# 核心金句

<div class="text-xs opacity-60 mb-2">这期三人行里最值得留存的句子。</div>

<div class="grid grid-cols-2 gap-x-3 gap-y-2 text-[10px]">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"the models just want to learn"
<div class="opacity-60 mt-0.5 not-italic">— Dario 转述 Ilya · scaling Zen koan</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"it's not about being the good guy it's about setting things up so that all of us can be the good guy"
<div class="opacity-60 mt-0.5 not-italic">— Dario · race to the top</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"if the models pass a certain capability then we impose a certain set of Safety and Security requirements on them"
<div class="opacity-60 mt-0.5 not-italic">— Dario · RSP 的 if-then 结构</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"if you extrapolate the curves that we've had so far... we'll get there by 2026 or 2027"
<div class="opacity-60 mt-0.5 not-italic">— Dario · 打括号的 AGI 时间估计</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"the biggest problem of biology is that you can't see what's going on"
<div class="opacity-60 mt-0.5 not-italic">— Dario · Machines of Loving Grace</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"talent density beats talent mass"
<div class="opacity-60 mt-0.5 not-italic">— Dario · Anthropic 组织哲学</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"like a world Traveler"
<div class="opacity-60 mt-0.5 not-italic">— Amanda · Claude character 的核心 metaphor</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"if the optimal rate of failure is often greater than zero... are there places here where I'm just under failing"
<div class="opacity-60 mt-0.5 not-italic">— Amanda · 最优失败率</div>
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"directions have meaning... adding different direction vectors together can represent concepts"
<div class="opacity-60 mt-0.5 not-italic">— Chris · linear representation 假说</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"we have a deception feature"
<div class="opacity-60 mt-0.5 not-italic">— Chris · SAE 找到的"最让人警觉"的方向</div>
</div>

</div>

---

# 一句话带走

<div class="mt-8 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 rounded">
"the thing you need to understand about these models is they just want to learn... the models just want to learn"
</div>

<div class="mt-4 text-sm opacity-70">
—— Ilya Sutskever 对 Dario 说的那句,Anthropic 的整条 roadmap 建立在这句话上。
</div>

<div class="mt-16 text-xs opacity-50 text-center">
Dario Amodei · Amanda Askell · Chris Olah on Lex Fridman Podcast · 2024
</div>
