---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Grant Sanderson (@3blue1brown) – AI disproved a famous math conjecture. Now what?'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
themeConfig:
  paginationPagesDisabled: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
---

# AI 推翻了一个著名数学猜想，然后呢？

<div class="mt-5 text-2xl font-semibold text-purple-700">
Grant Sanderson（3Blue1Brown）谈 AI 数学的下一道门槛
</div>

<div class="mt-10 text-lg opacity-75">
从 IMO、黎曼猜想到 Galois：<br/>
会证明，只是数学智能故事的开头
</div>

<div class="mt-10 text-sm opacity-55">
Dwarkesh Podcast · 2026-06 · 1 小时 33 分
</div>

---

# 为什么这期值得看

<div class="text-sm opacity-65 mb-4">一次反例发现，把问题从能力榜单推向了数学创造、验证机制与人的长期角色。</div>

<div class="grid grid-cols-3 gap-4 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 能力不是平滑上升
AI 在数学上形成尖峰；放大到数学内部，几何、组合等子领域仍然高低不平。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 证明之外的创造
下一道门槛可能是提出好猜想、发明好定义，以及建立能够统一旧领域的新对象。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 百年才兑现的洞见
Galois 理论提醒我们：真正有价值的概念，可能无法在一次训练回合里获得奖励。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 可验证还不够
数学进展快，也因为问题能被大量复制、重放和训练；这解释了它与真实世界任务的差距。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 证明与理解分离
AI 可以先给出正确结果，人类随后面对新的工作：把证明压缩成可解释、可导航的思想。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 写作与教学仍不同
好的解释依赖策展；好的教学还要识别学习者的心智结构，并重新组织他的问题。

</div>

</div>

---

# 数学是 AI 能力前沿的一根尖刺

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 宏观层
AI 能力前沿并不整齐。数学恰好位于领先的尖峰之一，因此它能提前暴露能力增长的形状。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 微观层
数学内部仍然呈分形般的参差：同一套系统能快速解决一类题，也会在另一类题上卡住。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 判断边界
IMO 金牌不等于所有白领工作已被自动化；不同任务的瓶颈可能根本不是同一种能力。

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
<strong>核心判断：</strong>一次 benchmark 被攻克，证明水位上涨；它没有证明所有能力都同步上涨。
</div>

---
layout: two-cols
---

# 同一场 IMO，四个子领域并不等高

<div class="space-y-4 mt-5 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>题目结构</strong><br/>IMO 涉及几何、数论、代数、组合四类问题，一场考试共有六题。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>几何尖峰</strong><br/>Grant 回顾 2024 年的系统：几何题可用暴力求解器在约 19 秒内完成。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>组合低谷</strong><br/>当年两道组合题成为失分点；若题目分布更偏几何，成绩可能已达到金牌线。
</div>

</div>

<div class="mt-4 text-xs opacity-55 text-left">作者概括：benchmark 的单一总分，会掩盖能力曲线内部的锯齿。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./imo-spikes.excalidraw" class="w-[440px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 如果 AI 证明黎曼猜想，可能有三种形状

<div class="space-y-4 mt-5 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>闪电连接</strong><br/>把两个成熟领域中的对象突然连起来；起点和终点都熟悉，因此人类容易解析。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>建造新山</strong><br/>先发明一整套新理论，再从山顶解决旧问题；理解成本来自学习新概念体系。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>纯粹苦干</strong><br/>用极长推理链推进，没有压缩后的新对象；结果可能正确，却难以形成理解。
</div>

</div>

<div class="mt-4 text-xs opacity-55 text-left">作者概括：结果相同，知识增量与消化成本可以完全不同。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./solution-paths.excalidraw" class="w-[445px]" :darkMode="false" :background="false" />
</div>

---

# Montgomery 与 Dyson：一次午餐式的闪电连接

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 数论一侧
Hugh Montgomery 研究黎曼 ζ 函数零点之间的统计相关，写下一个特殊表达式。

</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 识别瞬间
物理学家 Freeman Dyson 认出：相似形式出现在随机 Hermitian 矩阵的特征值统计中。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 新研究方向
两个看似分离的对象因此被并置，促使数学家探索随机矩阵理论与 ζ 函数之间的关系。

</div>

</div>

<div class="mt-7 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
Grant 的关键期待：模型同时熟悉量子物理与解析数论，跨领域偶遇不必再依赖两位专家恰好坐在一起。
</div>

---

# Fermat 最终定理：先有两座山，才有桥

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 问题极简
当指数大于三时，方程 xⁿ + yⁿ = zⁿ 是否存在整数解？表面上像一个初等数论问题。

<div class="mt-4 text-sm opacity-65">难点不在表达问题，而在找到正确的概念高度。</div>

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 解法极重
真正的证明依赖围绕椭圆曲线与模形式长期建立的两套思想，再提出把它们连接起来的正确问题。

<div class="mt-4 text-sm opacity-65">这里需要的不只是搜索，而是创造可供搜索的新空间。</div>

</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-left">
如果黎曼猜想也要求建立一座新的理论之山，那会比 IMO 解题更接近一种能够外溢到其他领域的通用创造力。
</div>

---

# 单位距离猜想的反例，改变了追问方式

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 已经发生的跨域连接
访谈把这次反例视为一个明确里程碑：AI 使用既有数学对象与关系，在自然语言推理中推进到可由数学家检查的结论。

</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 目标线随之移动
当连接旧知识已不再只是设想，下一步就不能继续只问能否解题，而要问它能否决定什么值得研究。

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">

### 这期真正的问题
AI 能否提出有生产力的猜想、创造新定义，甚至建立一个后来会统一多个领域的对象？

</div>

---

# 下一道门槛：从证明者到问题与定义的发明者

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 定理层
在给定对象、假设与目标后，找到一条正确证明；它最容易形成清晰的通过标准。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 猜想层
从大量现象中选出值得投入的命题；价值不仅在真假，还在它会组织多少后续工作。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 定义层
创造一个能够压缩结构、暴露联系的新对象；它可能重画整个研究领域的地图。

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
难点：证明有终点，定义的价值常常只有在多年后、跨领域应用出现时才显现。
</div>

---

# 好猜想很难成为一个干净的 benchmark

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 可报道的能力
一个猜想被证明或推翻，可以明确验收，也能形成清晰标题；训练环境同样容易围绕结果构建。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 难计分的能力
一个新猜想是否深刻、一个新定义是否有生命力，没有立即可计算的分数，也容易诱发事后移动目标线。

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">

### Grant 提出的现实测量
观察数学家的语气变化：从用模型完成手头问题，转向让模型参与决定研究领域接下来应该探索什么。访谈团队在 2025 年中至 2026 年的采访中已感到这种变化。

</div>

---
layout: two-cols
---

# Galois 理论：一次长达百年的验证回路

<div class="space-y-3 mt-4 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Lagrange</strong><br/>把五次方程与根的对称性联系起来，提出了正确方向，却没有解决问题。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Abel 与 Galois</strong><br/>Abel 证明一般五次方程不可用根式求解；Galois 把注意力推向公式背后的对称结构。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Liouville 与 Jordan</strong><br/>Galois 去世后，笔记又经历约二十年被重新发现，再经历约二十年形成现代化处理。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>20 世纪的兑现</strong><br/>群论后来进入物理，并参与了从对称结构预测夸克的工作。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./galois-century.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# Galois：当时的奖励函数一直说不合格

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 同行没有立即通过
年轻的 Galois 多次投稿被拒；笔记不完整、理论表达也不清楚，当时的学院无法确认其价值。

</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 旧问题已有人解决
Abel 已证明一般五次方程无根式公式，因此 Galois 的价值不能只用是否拿下同一问题衡量。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 真正贡献是新抽象
他把注意力从具体公式提升到支配公式的对称性；这个概念后来成为大量数学与物理工作的语言。

</div>

</div>

<div class="mt-7 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
训练难题：怎样奖励一种尚未解决目标问题、却正在创造未来研究语言的直觉？
</div>

---

# 优雅或许意味着：用更短的概念压缩更多结构

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 只奖励完成
系统可能找到一份上千页的正确证明。它完成了目标，却没有提供能够迁移、教学或继续研究的结构。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 同时奖励压缩
更短、更具预测力的概念，把许多局部步骤折叠为一个可复用对象；这更接近数学家所说的优雅。

</div>

</div>

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left">

### 可能的方向
Grant 提到用概念的简洁程度乃至 Kolmogorov complexity 去逼近优雅，但他同时强调：这并不是一个容易定义的奖励。

</div>

---

# 定理经济正在松动：证明只是价值链的一段

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 上游
选择对象、发明定义、提出值得追踪的问题。这一步决定了未来的研究空间。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 中游
构造引理与证明。历史上它最容易得到署名与声望，也最适合自动验证。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 下游
整理证明、压缩概念、解释为什么成立，并把结果接回已有知识地图。

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
当 AI 自动化中游，学术共同体必须重新分配注意力：哪一步真正创造了长期价值？
</div>

---
layout: two-cols
---

# 证明完成，不代表理解完成

<div class="space-y-4 mt-5 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>第一层：正确性</strong><br/>一条形式或自然语言证明，经过人工或机器检查后成立。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>第二层：解释性</strong><br/>找到为什么成立的短结构，让读者不必重放所有局部步骤。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>第三层：可生长性</strong><br/>解释暴露新的问题、对象与联系，使结果成为下一轮研究的起点。
</div>

</div>

<div class="mt-4 text-xs opacity-55 text-left">作者概括：AI 先压低证明成本，也会把解释问题显露为独立任务。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./proof-explanation.excalidraw" class="w-[440px]" :darkMode="false" :background="false" />
</div>

---

# 当答案近乎无限，人类角色更像策展人

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### AI 提供的供给
证明、解释和新对象的数量可能快速膨胀，形成一个任何个人都不可能完整浏览的数学空间。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 人类提供的导航
研究者与讲解者选择什么值得看、如何安排进入顺序，并借由长期关系建立可信的兴趣入口。

</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left">

### Grant 对自己工作的拆解
制作视频的时间不只花在视觉上；大量工作发生在更早处：决定什么值得说、什么值得放进读者面前。

</div>

---

# Langlands 视角：数学研究也可以先画地图

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 目标解题
从一个已知问题出发，集中寻找能够把它拿下的路线；结果天然适合计分。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 寻找桥梁
在尚无明确目标时，先探索远处领域之间可能存在的对应关系，逐步补全知识地图。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### AI 的放大器角色
模型的跨领域广度，可能让它成为超级连接器；短期有用进展更可能是填充地图，而非只清空问题清单。

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
这类进展依然需要人在环路中判断：一条新连接究竟只是形式相似，还是值得组织研究计划。
</div>

---

# 自回归为什么可能错过低概率的桥

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 上下文的引力
逐 token 预测会沿当前问题最自然的局部方向前进。模型越贴合上下文，越可能忽略来自远处领域的低概率概念。

</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 连接的悖论
真正有价值的桥，恰恰可能不是下一个最可预测的 token；单纯提高随机性也不能保证在正确位置偏离。

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">

### Grant 的技术追问
既有智能是否已被锁在生成机制中，只需要更好的激发方式；还是系统必须先变得更聪明，才能把跨域连接本身预测为下一步？

</div>

---
layout: two-cols
---

# 训练突破更可能来自环境，而非一句架构口号

<div class="space-y-4 mt-5 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>设计前沿问题</strong><br/>构造必须连接多个领域才能解开的任务，而不是只增加同类难度。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>制造可重放经验</strong><br/>让系统反复尝试、回顾错误、搜索更大范围，并得到稳定反馈。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>把有效策略写回数据</strong><br/>成功轨迹会提高退后一步、跨库搜索、重新评估等动作的概率。
</div>

</div>

<div class="mt-4 text-xs opacity-55 text-left">作者概括：关键问题是环境持续奖励什么行为。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./training-environment.excalidraw" class="w-[445px]" :darkMode="false" :background="false" />
</div>

---

# 数字心智的优势，不只在单体智商

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 任意复制
同一能力水位可以生成许多副本，同时覆盖大量问题，而不是等待少数天才依次处理。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 知识合并
不同运行得到的线索可以被汇总，让局部发现进入下一轮搜索，而不随个人生命史消失。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 上下文可操控
系统可以主动清空思路、注入不同偏见，或让证明与反证路线并行展开。

</div>

</div>

<div class="mt-7 p-4 rounded bg-green-50 border-l-4 border-green-500 text-left">
因此，即使单个模型尚未超过顶尖数学家，规模化并行也可能把同一水位系统性地应用到整个可达问题空间。
</div>

---
layout: two-cols
---

# 多 Agent：共享知识，也要隔离上下文

<div class="space-y-4 mt-5 text-sm text-left">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>路线 A</strong><br/>尝试证明命题，继承支持它的背景与常用策略。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>路线 B</strong><br/>尝试反驳命题，主动寻找反例和隐含假设。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>协调层</strong><br/>比较两条路线的证据，只合并有用结果，不让早期错误锁死所有副本。
</div>

</div>

<div class="mt-4 text-xs opacity-55 text-left">作者概括：多样性不是调高温度，而是明确设计不同研究程序。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./context-ensemble.excalidraw" class="w-[445px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 数学进展快：因为它既可验证，又可反复刷

<div class="space-y-4 mt-5 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>可验证</strong><br/>最终答案、证明或反例能够得到相对明确的对错反馈。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>可反复训练</strong><br/>同一任务能从相同起点并行重放，成功与失败之间的差异更容易归因。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>真实世界缺口</strong><br/>网页、市场和组织每日变化，起点难以冻结，海量并行尝试也会受到成本与访问限制。
</div>

</div>

<div class="mt-4 text-xs opacity-55 text-left">Grant 与 Dwarkesh 的共同判断：代码和数学是少数同时满足两项条件的领域。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./grindability-grid.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# Lean 不是全部引擎，却可能成为可信绿勾

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 对当前能力：可能被高估
单位距离反例的公开推理使用自然语言；IMO 系统也从早期形式化路线转向自然语言，说明突破并不必然依赖 Lean。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 对规模化可信度：仍然关键
如果 AI 每天生成大量论文，哪怕 99/100 正确，数学家也可能不愿承担寻找那一个错误的成本。形式化证明可以提供最低限度的正确性保证。

</div>

</div>

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left">

### 两种验证可以并存
自然语言 verifier 帮助快速训练与筛选；Lean 把最终结果锁定为机器可检查对象，让人把注意力集中在理解与价值判断上。

</div>

---
layout: two-cols
---

# AI Mathlib：一棵可以持续生长的逻辑树

<div class="space-y-4 mt-5 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>根</strong><br/>从形式化公理、定义与已有 Mathlib 出发，每一步都能自动检查。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>枝</strong><br/>并行探索新定理、新定义与不同公理系统；绝大多数方向可能没有价值。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>岛屿</strong><br/>少数分支形成丰富结构，再由 supervisor 或数学家判断其是否值得解释和连接现实问题。
</div>

</div>

<div class="mt-4 text-xs opacity-55 text-left">访谈设想：让系统运行十年后再回来查看；正确性可自动积累，趣味性仍需筛选。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./mathlib-tree.excalidraw" class="w-[445px]" :darkMode="false" :background="false" />
</div>

---

# 为什么写作比数学更难被同一种训练方式推进

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 数学与代码是模块化的
函数、引理可以有不同写法，只要它们稳定地产生正确结果；过程质量与最终功能可以分开评价。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 写作的过程就是产品
段落、句子、词序本身构成体验。没有一个独立于文本的功能结果，可以替低质量表达兜底。

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">

### 更深一层
模型可以很好地蒸馏已有观点，却仍难判断何时应该做一次不可预测但真正有洞见的转向；奖励也容易被表面合格的文章劫持。

</div>

---

# 好写作要求持续模拟读者的心智

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 当前画面
每个词都会改变读者脑中先出现的形象；调整语序，也会改变后续理解的入口。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 未来回忆
好的间隔复习卡片，要预测三个月后的学习者会如何联想、会误取哪条线索。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 具身差距
Grant 用面部表情识别作类比：人类会借自己的身体与心智模拟别人，模型没有同样的现成硬件。

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
因此，清晰复述知识不等于知道此刻应该怎样改变一个具体读者的理解结构。
</div>

---
layout: two-cols
---

# 用 LLM 学习：让人类资源定主干，让模型修枝

<div class="space-y-4 mt-5 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>人类作者</strong><br/>书、课程或视频先安排概念顺序，建立学习动机与问题链。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>LLM 辅助</strong><br/>回答局部疑问、补充背景、定位资料，并围绕主干做小范围探索。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>学习者控制</strong><br/>暂停、交叉阅读、验证来源，再回到由好教师设计的进度线上。
</div>

</div>

<div class="mt-4 text-xs opacity-55 text-left">访谈中的实践：课程视频、教材与 LLM 各占一块屏幕，但概念顺序仍由人类教师策展。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./learning-triad.excalidraw" class="w-[445px]" :darkMode="false" :background="false" />
</div>

---

# 解释者有三层，最高层会重构你的问题

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 第一层：顺着回答
模型接受问题里的概念组织，给出局部解释；当问题本身暴露误解时，它仍可能继续跑下去。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 第二层：清晰纠正
好的解释者看出你问错了方向，指出更有效的概念结构与问题顺序。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 第三层：教学柔术
顶尖教师先认真理解学生的另类路径，再把它接到正确答案与更广泛用途上。

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
教学的难点不只是生成解释，而是从一个问题反推出学习者当前的心智模型。
</div>

---

# 数学职业建议：先画清价值从哪里来

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 公共研究
社会通过基金与制度为基础科学付费；共同体内部判断什么结果值得声望与后续资源。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 机构与教学
专家为大学带来品牌，也直接教育学生。Grant 认为教学的关系、辅导与激励属性非常稳定。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 策展与传播
数学探索可以作为娱乐、解释与公共文化产品；Grant 自己就是偶然进入了这条价值路径。

</div>

</div>

<div class="mt-7 p-4 rounded bg-green-50 border-l-4 border-green-500 text-left">
对学生更通用的建议：理解资金来源、自己增加的价值，以及两者之间的真实连接，不要只沿着擅长解题的奖励轨道前进。
</div>

---

# AI 数学之后：人的杠杆可能更大，也可能暴露无用

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 乐观路径
如果 AI 产生大量新数学，人类会需要解释它看见了什么、选择哪些方向服务工程，并把少数相关洞见接到 PDE、仿真、材料与设计等领域。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 尴尬路径
数学进展即使加速 10 倍，也可能仍与物理应用脱节；更快的纯数学会反过来检验长期应用承诺是否真实。

</div>

</div>

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left">

### Grant 的谨慎预期
未来五年若完全没有可直接归因于 AI 数学进展的经济改进，会令人失望且有些意外；但他没有把每个理论突破都写成即时产业跃迁。

</div>

---

# 核心金句

<div class="text-xs opacity-55 mb-3">以下 8 句均已对照本集 transcript 做固定字符串验证。</div>

<div class="grid grid-cols-2 gap-2 text-left text-[11px] leading-snug">

<div class="p-2.5 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“there's a spiky frontier to AI, and math is just right there in one of the spikes.”
<div class="mt-1 text-[10px] opacity-55 not-italic">能力形状 · 数学为何领先</div>
</div>

<div class="p-2.5 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“We need the conjecture generator and then the definition generator.”
<div class="mt-1 text-[10px] opacity-55 not-italic">下一门槛 · 从解题到创造研究空间</div>
</div>

<div class="p-2.5 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“I want to propose the idea of an unsolved expository problem.”
<div class="mt-1 text-[10px] opacity-55 not-italic">Timothy Chow 的表述 · 已证明仍未理解</div>
</div>

<div class="p-2.5 rounded bg-green-50 border-l-4 border-green-500 italic">
“The AI solved the thing, so the art exists.”
<div class="mt-1 text-[10px] opacity-55 not-italic">策展隐喻 · 人仍要决定看什么</div>
</div>

<div class="p-2.5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
“I think it's more productive to reason, instead of architecture or even loss function, about data.”
<div class="mt-1 text-[10px] opacity-55 not-italic">训练机制 · 环境奖励什么行为</div>
</div>

<div class="p-2.5 rounded bg-red-50 border-l-4 border-red-500 italic">
“It's not just verifiability; it has to be grindable.”
<div class="mt-1 text-[10px] opacity-55 not-italic">领域差异 · 数学与代码为何进展快</div>
</div>

<div class="p-2.5 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“It can't be slop in the way that code can be slop and still produce the outcome you want.”
<div class="mt-1 text-[10px] opacity-55 not-italic">写作瓶颈 · 文本本身就是产品</div>
</div>

<div class="p-2.5 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“LLMs aren't doing that. They aren't reframing your question.”
<div class="mt-1 text-[10px] opacity-55 not-italic">教学层级 · 回答不等于重构理解</div>
</div>

</div>

---
layout: end
---

# “the end goal is understanding, human understanding.”

<div class="mt-8 text-lg opacity-70">
证明可以先由机器完成；<br/>
什么值得理解、怎样被人理解，才是下一段故事。
</div>

<div class="mt-10 text-sm opacity-50">Grant Sanderson × Dwarkesh Patel</div>
