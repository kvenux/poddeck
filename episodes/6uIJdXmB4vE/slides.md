---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The Last Generation of Mathematicians'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
themeConfig:
  paginationX: ''
  paginationY: ''
---

<div class="mt-14 text-sm tracking-[0.3em] uppercase opacity-55">Theories of Everything</div>

# The Last Generation of Mathematicians

<div class="mt-6 text-2xl text-purple-700">当 AI 加速数学，证明、理解与职业会怎样重写？</div>

<div class="mt-10 text-base opacity-70">
Jacob Tsimerman × Curt Jaimungal<br>
约 89 分钟 · 2026 年 8 月
</div>

<div class="mt-10 inline-block px-5 py-2 rounded-full bg-purple-50 border border-purple-200 text-sm">
数学自动化 · 证明与理解 · 人类角色 · AI Safety · 年轻人的选择
</div>

---

# 为什么这期值得听？

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 领奖后的转身
拿到 Fields Medal 十天后，Tsimerman 首次上播客，解释为何暂别学界、加入 OpenAI 的 AI safety 团队。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 数学为何先被改写
数学是相对封闭的符号系统，不必等待材料、实验和现实反馈；因此 AI 进步可能更快传导到研究前沿。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 瓶颈从证明转向阅读
问题未必是机器写出人类完全看不懂的证明，而是它产出得比人类消化、归类和共享更快。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 理解到底是什么
证明、直觉、定义与玩具例子承担不同功能；能在具体情境中运用，可能比复述一般性证明更接近理解。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 没有稳定的人类护城河
即使把价值转向提问、定义和理论构建，也必须继续追问：为什么 AI 不会很快学会这些？
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 年轻人如何下注
继续学热爱的数学，但别低头等待风潮过去；尽早接触 AI，理解新工作节奏，并为职业路径保留弹性。
</div>

</div>

---

# 十天：荣誉、离开与哀伤叠在一起

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm">

<div class="p-5 rounded bg-yellow-50 border-t-4 border-yellow-500">

### Fields Medal
访谈拍摄前十天，他获得数学最高荣誉；这是他的第一次播客对谈。
</div>

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### 暂别 academia
领奖当天，他在台上宣布暂时离开学界，转向 OpenAI 的 AI safety 工作。
</div>

<div class="p-5 rounded bg-purple-50 border-t-4 border-purple-500">

### 不是否定数学
他仍然热爱现有问题；哀伤来自熟悉的研究节奏、身份与师生契约正在失去确定性。
</div>

</div>

<div class="mt-8 p-5 text-xl italic border-l-4 border-purple-500 bg-purple-50 rounded text-left">
“I'm definitely grieving.”
<div class="text-xs opacity-60 mt-2 not-italic">— 开场谈 AI 对数学家工作方式的冲击</div>
</div>

---
layout: two-cols
---

# 为什么数学可能更早被 AI 加速？

<div class="space-y-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
数学主要在定义、符号与逻辑关系中展开，不必先获取材料、搭实验或等待现实世界反馈。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
模型可以在同一数字环境里读文献、提出猜想、尝试证明，并接受形式化或人工检查。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
能力提升一旦越过阈值，输出速度可能迅速超过数学家的阅读带宽。
</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200 italic">
“math is a closed system”
<div class="text-xs opacity-60 mt-1 not-italic">— Tsimerman 解释反直觉的加速原因</div>
</div>

<div class="text-xs opacity-60"><strong>作者示意</strong>：右图不表示具体年份，只表示访谈描述的能力与产出关系。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./scaling-curve.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 从协作到持续运行的数学机器

<div class="space-y-4 mt-5 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
他近期让模型检查一份证明：模型找到错误，却无法修复；最后由他完成修复。这仍是真实协作。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
下一阶段可能是数学家提示模型完成喜欢的问题，再由人补少量专业判断。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
更远处，他设想至少有一套系统持续提出猜想、解决问题、发明定义并归类结果。
</div>

<div class="text-xs opacity-60"><strong>作者概括</strong>：这是一条角色迁移路径，不是带时间承诺的预测。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./rsp-ladder.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 真正逼近的不是外星证明，而是产出洪水

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-sm">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 目前没有发生
现有系统的思路仍建立在人类工作之上，写作更杂乱，通常需要数学家重新组织；并非凭空吐出无法理解的全新认知。

<div class="mt-5 text-xs opacity-65">访谈中的谨慎边界：能力很强，不等于已经产生不可通约的数学语言。</div>
</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 更现实的压力
证明原则上可以理解，但增长速度超过人类阅读、消化和建立共同语言的速度。

<div class="mt-5 p-3 rounded bg-white border border-green-200 italic text-base">
“produce results faster than we know”
</div>
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border border-yellow-200 text-sm">
数学的稀缺资源正在变化：从找到一条证明，转向决定读什么、相信什么、如何把它接入已有知识。
</div>

---

# 一位专家，也只能拥有自己的小角落

<div class="grid grid-cols-3 gap-5 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">几周</div>
<div class="mt-2 text-sm">理解一篇远离自己领域的证明，可能需要的投入</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-600">10,000</div>
<div class="mt-2 text-sm">他设想某一领域可能累积到的结果规模</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-4xl font-bold text-orange-600">5</div>
<div class="mt-2 text-sm">一个领域可能继续裂变出的新领域数量</div>
</div>

</div>

<div class="grid grid-cols-2 gap-5 mt-7 text-sm text-left">
<div class="p-4 rounded border-l-4 border-green-500 bg-green-50"><strong>同一小领域</strong><br>优秀结果的核心想法，可能用五分钟建立共享理解。</div>
<div class="p-4 rounded border-l-4 border-red-500 bg-red-50"><strong>跨越远领域</strong><br>术语、例子与背景都不同，桥接成本会陡增。</div>
</div>

<div class="mt-5 text-xs opacity-60">这些数字来自他用于说明未来信息过载的设想，不是已经发生的统计。</div>

---
layout: two-cols
zoom: 0.86
---

# 新稀缺品：给数学建立导航系统

<div class="space-y-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 选择方向
哪些问题值得投入？哪些连接只是噪声？强大的求解能力仍需要目标。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 建立层次
结果要被归类、总结、压缩为主线，否则每个研究者都面对无法穷尽的文献海洋。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 接回世界
数学、物理和工程之间的应用回路可能从几十年缩短到更快的迭代。
</div>

<div class="text-xs opacity-60"><strong>作者概括</strong>：右图把访谈分散讨论的未来数学工作串成一层层导航栈。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./co-design-stack.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 一份证明同时承担两种功能

<div class="grid grid-cols-2 gap-7 mt-7 text-left text-sm">

<div class="p-6 rounded bg-blue-50 border-t-4 border-blue-500">

### 作为证书
定理可以被写成形式系统中的陈述；证明是一连串有效推导。即使没人逐步理解，列车仍可能照常运行。

<div class="mt-5 text-xs opacity-65">Lean 证书强化的是这一面：推导是否符合形式规则。</div>
</div>

<div class="p-6 rounded bg-purple-50 border-t-4 border-purple-500">

### 作为共同理解
证明还要向共同体传递为什么成立、关键机制在哪里，以及它与其他结果怎样相连。

<div class="mt-5 text-xs opacity-65">这一面无法只靠技术正确性自动完成。</div>
</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border border-yellow-200 text-center text-lg">
形式正确回答能否依赖；共同理解回答如何继续思考。
</div>

---

# Lean 检查的是代码，不替你检查问题

<div class="grid grid-cols-3 gap-5 mt-6 text-left text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 1. 写下陈述
先把自然语言中的猜想编码为形式对象。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 2. 验证推导
Lean 可以逐行检查：给定这个形式陈述，证明是否成立。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 3. 回看建模
人仍要确认：代码表达的真是我们关心的数学命题，而不是相似但错误的替身。
</div>

</div>

<div class="mt-8 grid grid-cols-2 gap-5 text-sm text-left">
<div class="p-4 rounded border border-blue-200 bg-blue-50"><strong>数学内部</strong><br>形式化后，规则检查可以非常强。</div>
<div class="p-4 rounded border border-orange-200 bg-orange-50"><strong>物理连接现实</strong><br>还要判断模型是否抓住实际现象，验证入口更复杂。</div>
</div>

<div class="mt-5 text-xs opacity-60"><strong>作者概括</strong>：验证链最脆弱的地方，常在形式系统的入口。</div>

---

# 黑箱不是 AI 才带来的

<div class="grid grid-cols-3 gap-5 mt-6 text-left text-sm">

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### 从头掌握
自己真正做过、能重建关键步骤、能解释为什么某条路线有效。
</div>

<div class="p-5 rounded bg-yellow-50 border-t-4 border-yellow-500">

### 知道大意
理解主线与用途，却不能现场重现全部细节。
</div>

<div class="p-5 rounded bg-red-50 border-t-4 border-red-500">

### 只认名字
知道某定理被共同体接受，在自己的证明中把它作为基础设施使用。
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
Charles Fefferman 给年轻时的 Tsimerman 的建议：三层知识永远都会存在；关键是让第一层持续增长，不要让黑箱无限堆积。
</div>

<div class="mt-5 text-xs opacity-60">因此，AI 不是第一次让数学依赖不可完全展开的背景知识；它可能把依赖规模推到新的量级。</div>

---
layout: two-cols
---

# 理解不是复述，而是能落到例子

<div class="space-y-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
数学家会在脑中携带一组玩具问题和熟悉的构造，用它们快速测试新方法究竟做了什么。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
当合作者的一句简写突然能映射到内部图景，理解会出现明显的点击感。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
只会写一般性证明不一定是最佳测试；能否在几个可手算的例子中工作，往往更有说服力。
</div>

<div class="text-xs opacity-60"><strong>作者示意</strong>：右图不是等级排名，而是工作理解会调用的多种表示。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./character-space.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
zoom: 0.92
---

# 直觉、严谨与例子形成循环

<div class="space-y-4 mt-5 text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 直觉先指方向
直觉是高阶启发式：模糊，却能提示某种更清楚的理论可能存在。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 定义接受压力测试
反例可能说明定义抓错了对象，也可能迫使人承认原有直觉需要更新。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 严谨反过来校准直觉
当形式体系足够稳固，它不再只是包装直觉，而能审判直觉。
</div>

<div class="text-xs opacity-60"><strong>作者概括</strong>：数学理解来自三者来回作用，而非从直觉单向翻译为证明。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./three-pillars.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 问题求解与理论构建，不是两条平行线

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-sm">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 具体谜题推动定义
为了攻克问题，数学家寻找最有效的对象、语言与区分方式。
</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 好定义生成新问题
一套定义把混乱压缩成结构，又会暴露新的联系、反例和更高层问题。
</div>

</div>

<div class="mt-8 flex items-center justify-center gap-4 text-sm">
<div class="px-5 py-4 rounded-full bg-orange-50 border-2 border-orange-300">谜题</div>
<div class="text-2xl text-orange-500">→</div>
<div class="px-5 py-4 rounded-full bg-blue-50 border-2 border-blue-300">定义</div>
<div class="text-2xl text-blue-500">→</div>
<div class="px-5 py-4 rounded-full bg-purple-50 border-2 border-purple-300">理论</div>
<div class="text-2xl text-purple-500">→</div>
<div class="px-5 py-4 rounded-full bg-green-50 border-2 border-green-300">新谜题</div>
</div>

<div class="mt-8 p-4 rounded bg-yellow-50 border border-yellow-200 text-sm">
这也是他不相信人类可永久退守理论构建的原因：如果这些环节互相生成，模型学会其中一个，就会继续追逐其余环节。
</div>

---

# 纯数学与应用之间，几十年的延迟可能被压缩

<div class="grid grid-cols-3 gap-5 mt-6 text-left text-sm">

<div class="p-5 rounded bg-purple-50 border-t-4 border-purple-500">

### 现在：好奇心先行
纯数学往往因美感、结构和谜题本身而发展，不以即时应用为前提。
</div>

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### 之后：应用偶然出现
成熟理论可能多年甚至几十年后进入物理、信息论或工程。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### AI：缩短往返
物理问题提出缺口后，系统或许能迅速生成所需数学，再把结果送回应用侧。
</div>

</div>

<div class="mt-8 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
访谈没有声称这条回路已经闭合；Tsimerman 明确把它当作超出自身专业、但值得期待的可能性。
</div>

<div class="mt-5 text-xs opacity-60"><strong>证据边界</strong>：这是关于未来研究节奏的推演，不是已有系统能力声明。</div>

---

# 为什么 Deep Blue 的类比不够

<div class="grid grid-cols-2 gap-7 mt-6 text-left text-sm">

<div class="p-6 rounded bg-blue-50 border-t-4 border-blue-500">

### Chess

- 核心一直是人类棋手之间的竞技
- 机器更强后，人类赛事仍保留观看价值
- AI 改变训练方式，却没有替代比赛对象

</div>

<div class="p-6 rounded bg-purple-50 border-t-4 border-purple-500">

### Mathematics

- 社会不仅关心谁最会做数学
- 还在乎得到什么理论与理解
- 如果机器直接生成结果，研究活动本身会被重排

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border border-yellow-200 text-center text-lg">
棋类首先展示人的能力；数学还承担生成公共知识的功能。
</div>

---

# 十二年、五年，与每周重新定向

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-4xl font-bold text-blue-600">12–13 年</div>
<div class="mt-3 text-sm">他投入 André–Oort 方向的大致时间；漫长周期让研究者能逐步建立地图。</div>
</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-4xl font-bold text-purple-600">约 5 年</div>
<div class="mt-3 text-sm">他投入 Griffiths 相关工作的时间；若计入先前积累，跨度还会更长。</div>
</div>

</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-sm text-center">
<div class="p-4 rounded bg-green-50 border border-green-200"><strong>多年</strong><br>深入问题与语言</div>
<div class="p-4 rounded bg-orange-50 border border-orange-200"><strong>一个月</strong><br>频繁更换地图</div>
<div class="p-4 rounded bg-red-50 border border-red-200"><strong>一周</strong><br>人类来不及重新定向</div>
</div>

<div class="mt-6 text-xs opacity-60">后两档是访谈中的假设情景，用来说明节奏变化，不是对某个具体模型的发布日期预测。</div>

---

# 即兴喜剧补上数学缺失的一面

<div class="grid grid-cols-2 gap-7 mt-6 text-left text-sm">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 数学：不断增加控制
把概念压缩得更简单、把技巧变得可调用、让神秘逐渐消失；同一个卡点可能陪伴几个月甚至几年。
</div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### Improv：主动交出控制
没有作业，也不能预先写完；要接住搭档、允许自己显得笨拙，并在当下共同完成场景。
</div>

</div>

<div class="mt-8 p-5 text-xl italic border-l-4 border-green-500 bg-green-50 rounded text-left">
“fully present and listening.”
<div class="text-xs opacity-60 mt-2 not-italic">— 他认为即兴喜剧更依赖同理心与真实反应，而不只是反应快</div>
</div>

---

# 数学既协作，也保留无法外包的孤独

<div class="grid grid-cols-3 gap-5 mt-6 text-left text-sm">

<div class="p-5 rounded bg-yellow-50 border-t-4 border-yellow-500">

### 竞赛起点
他从数学竞赛成长：和朋友一起训练，却要独自完成四个半小时的比赛。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### 研究转向
如今他总与别人合作，因为更有趣，也更有效；共同语言能让关键想法快速传播。
</div>

<div class="p-5 rounded bg-purple-50 border-t-4 border-purple-500">

### 认知边界
合作者能帮助澄清，但每个人最终都要把外部简写接入自己的例子与内部图景。
</div>

</div>

<div class="mt-8 p-5 rounded bg-blue-50 border border-blue-200 text-center text-lg">
AI 可以加入协作网络，却不会自动替你完成理解发生的那一刻。
</div>

<div class="mt-4 text-xs opacity-60"><strong>作者概括</strong>：这是访谈对协作与个人理解张力的总结。</div>

---

# 前沿模型的访问权，会放大已有优势

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-sm">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 公平性问题
少数顶尖研究者提前获得更强模型、充足 token 与算力，相当于多出一批高速研究助手。
</div>

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 这并非全新机制
过去更好的职位、同事、实验经费与机构，也会让既有成功继续转化为新的成功。
</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-sm text-center">
<div class="p-4 rounded bg-green-50 border border-green-200"><strong>普遍开放</strong><br>公平，但资源压力更大</div>
<div class="p-4 rounded bg-yellow-50 border border-yellow-200"><strong>轮换访问</strong><br>扩大机会，协调更复杂</div>
<div class="p-4 rounded bg-purple-50 border border-purple-200"><strong>优先强者</strong><br>高效，却强化累积优势</div>
</div>

<div class="mt-6 text-xs opacity-60">Tsimerman 承认问题成立，但没有在访谈中给出确定的制度方案。</div>

---

# 把价值移到理论构建，也未必稳定

<div class="grid grid-cols-3 gap-5 mt-6 text-left text-sm">

<div class="p-5 rounded bg-orange-50 border-t-4 border-orange-500">

### 第一轮自动化
Agent 群快速寻找开放猜想并尝试证明，单篇结果的稀缺性下降。
</div>

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### 人类重新定价
价值似乎转向吸收大量信息、提出好定义、建立组织原则与清晰理论。
</div>

<div class="p-5 rounded bg-red-50 border-t-4 border-red-500">

### 下一轮追问
一旦这些活动有样本、反馈和训练目标，AI 为什么不会继续追上？
</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
他赞同应该思考新的价值分配，但拒绝过早宣布一个稳定均衡；任何人类新角色，都要接受同一个可自动化性测试。
</div>

<div class="mt-5 text-xs opacity-60"><strong>作者概括</strong>：自动化不是把人推到固定上层，而可能一层层抬高抽象层级。</div>

---
zoom: 0.92
---

# 技术能力不是社会安排

<div class="grid grid-cols-2 gap-5 mt-6 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 公司
能集中人才与资源，也受利润动机约束。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 政府
可以制定公共规则，却也可能形成更深的权力滥用。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 学界与非营利组织
能提供独立研究、验证工具和不同的风险视角。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 公众选择
未来的人类角色不只由谁效率最高决定，也取决于社会希望为人保留什么。
</div>

</div>

<div class="mt-7 p-5 text-lg italic border-l-4 border-yellow-500 bg-yellow-50 rounded text-left">
“We have the power to decide.”
<div class="text-xs opacity-60 mt-2 not-italic">— 关于数学共同体如何回应超人类能力</div>
</div>

---

# 为什么他把下一步放在 AI safety

<div class="grid grid-cols-3 gap-5 mt-6 text-left text-sm">

<div class="p-5 rounded bg-purple-50 border-t-4 border-purple-500">

### 个人选择
如果确信转型会自然走向好结果，他几乎肯定会留在 academia；离开是因为他不相信好均衡会自动出现。
</div>

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### 工作规模
他呼吁理论、治理与社会层面的共同投入，并用大规模 Manhattan Project 来形容所需动员。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### 多中心生态
公司、政府机构、独立非营利组织和验证基础设施都应参与；把所有人集中到一处并不健康。
</div>

</div>

<div class="mt-8 p-5 rounded bg-red-50 border-l-4 border-red-500 text-sm">
他的核心担忧不是 AI 变强本身，而是持续无约束优化、把控制权不断交出去，却没有提前约定人类想要的制度边界。
</div>

---
layout: two-cols
---

# 六小时做完一款打字游戏

<div class="space-y-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
他想给侄女重做童年打字游戏：字母外星人下降，按下对应键就消灭它。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
原以为先讨论设计、第三周才会有成品；编码 Agent 第一次回应就交回大约 15 个文件。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
纠正几处愚蠢决定后，大约六小时便有了带图形、声音且能运行的完整游戏。
</div>

<div class="text-xs opacity-60">字幕把产品名写成 cloud code；按 AI 语境规范化为 <strong>Claude Code</strong>，但图中只保留通用 coding agent。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./latent-demand.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 输出变快后，人从制作者变成管理者

<div class="grid grid-cols-4 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 1. 说清意图
目标、受众与体验，比亲手写每行代码更重要。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 2. 接住大批输出
结果提前到来，原有按周安排的项目节奏失效。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 3. 判断哪里不对
不必通读所有 JavaScript 文件，但必须识别不合理决策。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 4. 决定下一步
新瓶颈是消化、取舍、排序和继续提出要求。
</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border border-yellow-200 text-center text-lg">
数学研究也可能经历同样变化：进展本身变便宜，方向感与判断变昂贵。
</div>

<div class="mt-4 text-xs opacity-60"><strong>作者概括</strong>：代码故事是他理解未来数学工作节奏的亲身预演。</div>

---

# 给 19 岁数学爱好者：热爱与对冲同时成立

<div class="grid grid-cols-3 gap-5 mt-6 text-left text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 继续学数学
如果真的喜欢，就去学习、做题、欣赏结构；研究职业变化不等于数学活动消失。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 尽早接触 AI
把它用于真实项目，体验结果提前到来、工作如何拆分，以及自己还缺哪些判断能力。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 别只押纯数学职业
了解世界、AI 与一定程度的计算机科学，别低头等待一切恢复原状。
</div>

</div>

<div class="mt-8 p-5 text-2xl italic border-l-4 border-purple-500 bg-purple-50 rounded text-left">
“Hedge your bets.”
<div class="text-xs opacity-60 mt-2 not-italic">— 对当下考虑纯数学职业的年轻人</div>
</div>

---

# 学习需要一段没有答案的时间

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-sm">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 依赖如何形成
学生随时偷看书本或 LLM 的下一步，很难诚实判断自己的能力；熟悉感会伪装成掌握。
</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 反馈如何纠正
他让学生先独立做三十分钟；一次糟糕的期中考试会清楚暴露差距，促使他们在期末前改变练习方式。
</div>

</div>

<div class="mt-7 grid grid-cols-3 gap-4 text-sm text-center">
<div class="p-4 rounded bg-blue-50 border border-blue-200">先独立尝试</div>
<div class="p-4 rounded bg-yellow-50 border border-yellow-200">暴露薄弱环节</div>
<div class="p-4 rounded bg-purple-50 border border-purple-200">再用工具修正</div>
</div>

<div class="mt-6 text-xs opacity-60">他的判断并非所有旧技能都要保留；若某项能力真的不再影响表现，人们停止练习它也可以是合理适应。</div>

---

# LLM 是起点，但不能成为全部认知过程

<div class="grid grid-cols-3 gap-5 mt-6 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### 搜索入口
他用 LLM 学新主题、了解历史与政治，甚至拍下坏掉的水槽询问问题；它像 Google 与 Wikipedia 的新入口。
</div>

<div class="p-5 rounded bg-red-50 border-t-4 border-red-500">

### 认知风险
使用过度会让大脑退出任务；尤其在学习阶段，答案来得过快会遮蔽真正的能力缺口。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### 适应机制
考试与真实工作会把表现差异显露出来；只要激励仍要求某种能力，人们通常会重新学习它。
</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
关键不是守住每一项旧技能，而是分辨：哪些只是过时的手工步骤，哪些仍是判断、迁移与独立工作所需的基础。
</div>

---

# 风险之外，他看到的是更大的参与面

<div class="grid grid-cols-4 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 个性化导师
把化学、物理讲到能接上自己的数学背景。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 创作工具
写音乐剧、做音乐、设计游戏，缩短不喜欢的准备工作。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 补齐技能缺口
让人直接靠近真正觉得有趣的部分，而不被所有前置技能挡住。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 新的参与方式
更多人能以不同深度接触数学、艺术与复杂工具。
</div>

</div>

<div class="mt-8 p-5 text-2xl italic border-l-4 border-green-500 bg-green-50 rounded text-left">
“the promise is enormous.”
<div class="text-xs opacity-60 mt-2 not-italic">— 在集中谈风险之后，他描述 AI 可能释放的学习与创作空间</div>
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">八句原文均已在本集 transcript 中逐字检索命中：</div>

<div class="grid grid-cols-2 gap-3 text-sm text-left">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
“I'm definitely grieving.”
<div class="text-xs opacity-60 mt-1 not-italic">— 熟悉的数学家身份与工作节奏正在变化</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
“math is a closed system”
<div class="text-xs opacity-60 mt-1 not-italic">— 数学为何可能比直觉预期更早被 AI 加速</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
“produce results faster than we know”
<div class="text-xs opacity-60 mt-1 not-italic">— 近期瓶颈是人类消化速度</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
“We have the power to decide.”
<div class="text-xs opacity-60 mt-1 not-italic">— 技术事实不预先决定社会制度</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
“fully present and listening.”
<div class="text-xs opacity-60 mt-1 not-italic">— 即兴喜剧训练同理心与放下控制</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
“the big deal of our lifetimes.”
<div class="text-xs opacity-60 mt-1 not-italic">— 他回忆自己转变对 AI 判断的时刻</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
“Hedge your bets.”
<div class="text-xs opacity-60 mt-1 not-italic">— 给想走纯数学职业的年轻人</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
“the promise is enormous.”
<div class="text-xs opacity-60 mt-1 not-italic">— 风险之外的学习与创作可能性</div>
</div>

</div>

---
layout: end
class: text-center
---

# “We're living in crazy times.”

<div class="mt-8 text-xl opacity-75">数学不会停止，但数学家与数学共同体必须重新决定自己的位置。</div>

<div class="mt-12 text-sm opacity-55">Jacob Tsimerman × Curt Jaimungal · Theories of Everything</div>
