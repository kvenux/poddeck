---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '149. 亲历中美neo labs资本狂潮，和清华刘子鸣聊：AI for AI、机制可解释性和Max Tegmark'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 把 AI 研究本身变成可训练对象

<div class="text-xl opacity-80 mt-5">AI for AI、Physics of AI 与 Neo Lab 的一条非典型路线</div>

<div class="mt-10 text-sm opacity-60">
张小珺 × 刘子鸣<br/>
清华大学人工智能学院助理教授 · 圆环智能首席科学家 · 2026 年 7 月
</div>

<div class="mt-8 text-xs opacity-50">
从 KAN、机制可解释性，到原模型、Auto Research 与 Vibe Training
</div>

---

# 为什么这期值得看

<div class="text-sm opacity-70 mb-4">这不是一场单纯的融资复盘，而是一条从科学方法论通向产品形态的完整推演。</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 物理学反转
AI 从研究物理的工具，变成被物理方法研究的对象。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### KAN 的起点
一次反对意见、两周原型和一周可视化，怎样改变研究方向？
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 研究的语言
为什么 Coding 已可规模化，而 Research 还缺结构化语料？
</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-left">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 原模型
输入模型与训练条件，直接预测训练曲线并筛选架构。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Neo Lab
为何中美同时出现研究驱动、资本密集的新组织形态？
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 产品终局
Training Copilot 如何走向 Autopilot 与 Vibe Training？
</div>

</div>

---

# 一条不断交换主语与宾语的研究路径

<div class="grid grid-cols-5 gap-3 mt-6 text-left text-sm">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs font-bold text-blue-700">2017 · 北大</div>

### GAN 入门
用生成对抗网络做高能物理任务；第一个项目并不成功，却打开了 AI 世界。
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs font-bold text-green-700">本科后期</div>

### AI for Physics
既不完全理论，也不完全实验；AI 是连接理论与实验的桥。
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-xs font-bold text-purple-700">2022 以后</div>

### Physics of AI
ChatGPT 出现后，研究对象反转：用物理思想理解和设计 AI。
</div>

<div class="p-3 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-xs font-bold text-orange-700">博士阶段</div>

### 可解释性与 KAN
从黑盒内部机制，继续走向神经网络与符号公式的统一。
</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-xs font-bold text-red-700">2026 · 回国</div>

### Auto Research
把人的研究脑回路外化，让 AI 自动化 Physics of AI。
</div>

</div>

<div class="mt-6 p-4 rounded bg-gray-50 border border-gray-200 text-left text-sm">
贯穿始终的问题只有一个：能否把研究者偶然提出新架构的过程，变成可重复、可训练、可规模化的系统？
</div>

---
layout: two-cols
---

# AI for AI 的完整链条

<div class="text-sm opacity-70 mb-4">刘子鸣的定义比常见的 Coding Agent 路线多了一个中间层。</div>

<div class="space-y-3 text-left text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>AI for Physics</strong><br/>让 AI 服务自然科学，物理是最终对象。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Physics of AI</strong><br/>用物理学的观察、压缩和控制实验理解 AI。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>AI for Physics of AI for AI</strong><br/>再用 AI 加速这门科学，并闭环到新模型设计。
</div>

</div>

<div class="mt-4 text-xs opacity-60 text-left">本页为访谈路线的结构化概括。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./research-pivot.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# KAN：一次从反对意见开始的架构实验

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-3xl font-bold text-red-600">1989</div>

### Max 的警告
一篇旧论文指出，带严格条件的 Kolmogorov–Arnold 表征在最坏情况下无法成为实用算法。
</div>

<div class="p-5 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-3xl font-bold text-orange-600">2 周</div>

### 先做出原型
他不把最坏情况当作全部现实，先问它能否在某些结构良好的场景中有用。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-3xl font-bold text-green-600">1 周</div>

### 再画出内部
可视化把端到端预测变成可观察结构，也最终说服了 Max Tegmark。
</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-lg text-left">
“我们居然能够看到这个网络 它的脑子里面到底在想什么”
<div class="not-italic text-xs opacity-60 mt-2">— 00:13:16，刘子鸣转述 Max Tegmark 看到 KAN 可视化后的反应</div>
</div>

---

# KAN 真正关心的不是一张榜单

<div class="text-sm opacity-70 mb-5">它承载的是一个更早、更长期的执念：让连接主义与符号主义在同一个模型里相遇。</div>

<div class="grid grid-cols-3 gap-5 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 神经网络
擅长从数据学习，保留经验性与端到端能力。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 符号公式
提供更强的压缩、更清晰的结构和可解释入口。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 双重身份
像波粒二象性：既是神经网络，也能被看作符号公式。
</div>

</div>

<div class="mt-7 p-5 rounded bg-gray-50 border border-gray-200 text-left">
<strong>关键回看：</strong>他在 2021 年已开始思考这种统一；后来发现写出的方程对应 1957 年的 Kolmogorov–Arnold 表征，并获得万能逼近性质的理论支撑。
</div>

---

# 从发明一个架构，到发明架构的机器

<div class="mt-7 p-6 text-2xl italic border-l-4 border-purple-500 bg-purple-50 text-left">
“我觉得设计模型本身 应该是一门科学”
<div class="not-italic text-xs opacity-60 mt-3">— 00:16:19，KAN 成功之后的研究重心</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<strong>过去的问题</strong><br/>Transformer、GAN、ResNet 的关键设计高度依赖人的灵感与试错。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<strong>真正的瓶颈</strong><br/>算力和数据可以扩张，提出模型设计洞见的过程却难以扩张。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<strong>新的目标</strong><br/>不只是把 KAN 用到更多任务，而是复现提出新架构这件事本身。
</div>

</div>

---

# Transformer 的成功，不等于模型设计已结束

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 语言给了模型一份礼物
- 人类语言已经高度压缩
- Transformer 的优势之一，是让上下文信息高效传播
- 只要模型能吃下这种压缩过的模态，就可能表现得很强
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 视觉没有同样的捷径
- 原始变量更多，冗余与噪声更大
- 世界模型需要发现更抽象的表征
- 仅靠记住更多数据，很难自然获得人类式抽象
</div>

</div>

<div class="mt-7 p-5 rounded bg-red-50 border-l-4 border-red-500 text-left">
<strong>访谈中的判断：</strong>后 LLM 时代，模型设计会重新变重要；需要解决的不是 Transformer 这个名字，而是信息传播与抽象机制。
</div>

---
layout: two-cols
---

# 科学，就是不断压缩

<div class="text-sm opacity-70 mb-4">刘子鸣用天文学史解释经验数据如何逐层变成理论。</div>

<div class="space-y-3 text-left text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>第谷：数据层</strong><br/>记录星体在何时、何地出现，保存一整张观测表。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>开普勒：经验规律</strong><br/>用椭圆轨道和定律压缩大量观测。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>牛顿：理论层</strong><br/>用更短的统一公式解释并预测多条经验规律。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./astronomy-compression.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# AI 可能处在 1.5，也可能只有 0.5

<div class="grid grid-cols-2 gap-5 mt-5 text-left">

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-4xl font-bold text-yellow-600">1.5</div>

### 乐观读法
实验已经很多，但经验规律仍少；Scaling Law 类似开普勒阶段，是少数可复用的规律。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-4xl font-bold text-red-600">0.5</div>

### 悲观读法
研究过早收敛到 Transformer，像只盯着一片星区，还没有建立覆盖整片星空的数据。
</div>

</div>

<div class="mt-6 p-5 text-xl italic border-l-4 border-purple-500 bg-purple-50 text-left">
“我们现在还远远没有到AI的牛顿这个状态”
<div class="not-italic text-xs opacity-60 mt-2">— 00:26:31，谈 AI 经验规律与统一理论的距离</div>
</div>

---

# 六个月的 Stanford，改变了风险坐标

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### MIT：相信理论先行
原先相信少数聪明人可以写出 AI 的物理学，从第一性原理推出更优架构。
</div>

<div class="p-5 rounded bg-orange-50 border-t-4 border-orange-500">

### Peer：把危险变成可选项
风格相近的朋友开始创业，会迫使自己重新判断是否过于保守、停在舒适区。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### Stanford：看到组织加速
目睹神经科学团队从筹划到发布，也看到纯科学家转向创业者。
</div>

</div>

<div class="mt-7 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<strong>改变后的判断：</strong>古法科研可以继续追求理解，但难以 scale insight；创业提供了更快的试验节奏、更高的人才密度和更多资源。
</div>

---

# Neo Lab 为什么在此刻集中出现

<div class="grid grid-cols-2 gap-5 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 人才选择改变
顶尖研究者不只在学界与大厂之间选择；他们也希望用自己的路线寻找下一种范式，而不是成为大组织的一颗螺丝钉。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 当前范式留下缺口
世界模型与 Auto Research 都处在早期，需要研究、架构和数据方法的探索，不是简单堆资源就能完成。
</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center text-sm">

<div class="p-4 rounded bg-gray-50 border border-gray-200">
<div class="text-2xl font-bold text-gray-600">3 月</div>
回国
</div>

<div class="p-4 rounded bg-gray-50 border border-gray-200">
<div class="text-2xl font-bold text-gray-600">4 月底</div>
入职清华
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">
<div class="text-2xl font-bold text-orange-600">5 月底</div>
参与融资
</div>

</div>

<div class="mt-4 text-xs opacity-60">以上时间线与市场体感均来自本期访谈。</div>

---

# 两个最活跃方向，补的是两种不同缺口

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-6 rounded bg-purple-50 border-t-4 border-purple-500">

### Auto Research
<div class="text-sm opacity-70 mb-3">目标：训练 AI Researcher</div>

- Coding Agent 之后的自然延伸
- 缺的不是代码执行力，而是研究过程的结构
- 需要把观察、假设、干预和结论沉淀成数据
</div>

<div class="p-6 rounded bg-green-50 border-t-4 border-green-500">

### World Model
<div class="text-sm opacity-70 mb-3">目标：给机器人训练脑子</div>

- 视觉等模态没有语言那样的高压缩先验
- 需要新的架构与抽象能力
- 面向物理世界的感知、预测与控制
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left text-sm">
<strong>共同点：</strong>都打不到现有范式的舒适区；早期必须保留大量 Research，而不是立刻按成熟产品线运行。
</div>

---

# Neo Lab 是一种阶段性组织

<div class="mt-6 p-5 text-2xl italic border-l-4 border-orange-500 bg-orange-50 text-left">
“他既不是lab也不是公司”
<div class="not-italic text-xs opacity-60 mt-2">— 01:31:49，刘子鸣对 Neo Lab 组织形态的定义</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<strong>0–6 个月</strong><br/>侧重 R&D、Demo 与产品雏形，路线仍快速变化。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<strong>6–12 个月</strong><br/>给研究足够空间，避免为短期交差过早锁定一个差方向。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<strong>一旦 grok</strong><br/>当原型与方向变清晰，组织就应转入公司式产品化与商业化。
</div>

</div>

<div class="mt-5 p-3 rounded bg-red-50 border-l-4 border-red-500 text-left text-sm">
资本端则呈现连续融资与快速 close；这进一步压缩了研究、产品和叙事同时推进的时间。
</div>

---

# Coding 已有语料，Research 还没有

<div class="mt-6 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50 text-left">
“Research和Coding 有很大的不同”
<div class="not-italic text-xs opacity-60 mt-2">— 00:39:45，解释为什么 Coding Agent 的成功不能直接复制到科研</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Coding
- 高度结构化
- GitHub 提供大量、高质量、可执行的数据
- 对错更容易通过运行与测试反馈
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Research
- 过程跳跃、隐性的判断更多
- 论文主要保存结果，未必保存探索路径
- 研究直觉与品位仍缺少可训练的表示
</div>

</div>

---
layout: two-cols
---

# OPHIS：研究循环

<div class="text-sm opacity-70 mb-4">字幕逐字拼作 O-P-H-I-S；它把来回跳跃的研究过程标注成五类节点。</div>

<div class="space-y-2 text-left text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>O · Observation</strong>　观察到了什么现象？</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>P · Problem</strong>　现象暴露了什么问题？</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>H · Hypothesis</strong>　对问题提出什么假设？</div>
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><strong>I · Intervention</strong>　下一步做什么操作？</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>S · Speed up</strong>　干预是否带来训练提升？</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./ophis-loop.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 论文保存结果，系统要保存过程

<div class="text-sm opacity-70 mb-5">下面的比例和采集量是刘子鸣在访谈中的粗略估计，并非已经完成的数据集统计。</div>

<div class="grid grid-cols-3 gap-5 mt-5 text-center">

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-4xl font-bold text-blue-600">约 1%</div>
<div class="mt-2 text-sm">AI 论文能较清楚呈现研究推理链</div>
</div>

<div class="p-5 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-4xl font-bold text-orange-600">200 / 天</div>
<div class="mt-2 text-sm">20 名学生与员工，每人每天约 10 条</div>
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-4xl font-bold text-green-600">1 万 / 2 月</div>
<div class="mt-2 text-sm">预估可开始训练保留团队判断的模型</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<strong>采集原则：</strong>做下一个实验前，先评价上一轮做了什么、得出什么结论，再允许进入下一步。当前设想是偏流程化的强制记录系统。
</div>

---

# 第一个可训练目标，不是终极原模型

<div class="grid grid-cols-4 gap-3 mt-7 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs font-bold text-blue-700">01 · 环境</div>

### 科研版沙盒
系统既是数据采集器，也是能执行各种研究操作的环境。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-xs font-bold text-purple-700">02 · 轨迹</div>

### 保存过程
记录观察、尝试、失败、结论，以及节点之间的跳转。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-xs font-bold text-orange-700">03 · 预测</div>

### Next Action
根据学生当前状态，预测下一步应做什么，而非先预测最终曲线。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs font-bold text-green-700">04 · 外化</div>

### 研究教练
把资深研究者的反馈复制成可随时调用的模型能力。
</div>

</div>

<div class="mt-7 p-4 rounded bg-gray-50 border border-gray-200 text-left">
<strong>边界：</strong>这是近期路线；原模型仍是北极星目标。访谈也强调，团队在高频迭代，路线可能按周甚至按小时变化。
</div>

---

# 研究直觉，也许只是没有被追问到底

<div class="mt-7 p-6 text-2xl italic border-l-4 border-red-500 bg-red-50 text-left">
“研究品位研究直觉其实是一个遮羞布”
<div class="not-italic text-xs opacity-60 mt-3">— 01:28:47，谈如何把顿悟变成训练数据</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<strong>提出想法</strong><br/>有能力得到一个好点子，并不等于理解自己如何得到它。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<strong>继续拷问</strong><br/>追问观察、类比、假设和判断来自哪里，把隐性步骤语言化。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<strong>留下轨迹</strong><br/>记录不必完美替代大脑，但至少让模型获得可学习的研究过程。
</div>

</div>

---

# 60 天人体实验：先把自己训练成原模型

<div class="grid grid-cols-4 gap-3 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-3xl font-bold text-blue-600">01</div>
每天随机选模型与数据集。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-3xl font-bold text-purple-600">02</div>
实验前先预测训练曲线。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-3xl font-bold text-orange-600">40–50 天</div>
预测开始变准，甚至可跨 Language 与 Vision。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-3xl font-bold text-green-600">约 60 天</div>
持续记录，形成对原模型可行性的个人证据。
</div>

</div>

<div class="mt-6 p-5 text-xl italic border-l-4 border-green-500 bg-green-50 text-left">
“我突然grock了 我突然顿悟了”
<div class="not-italic text-xs opacity-60 mt-2">— 00:50:01，描述训练到四五十天后的变化</div>
</div>

<div class="mt-4 text-xs opacity-60 text-left">限制：他能部分预测结果，却仍无法把脑中的视觉或潜空间推理完整写成自然语言。</div>

---
layout: two-cols
---

# 原模型：模型的世界模型

<div class="text-sm opacity-70 mb-4">不是预测 Next Token，也不是预测世界的 Next State，而是预测训练的 Next Curve。</div>

<div class="space-y-3 text-left text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>输入</strong><br/>模型架构、数据集、优化器及其他训练条件。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>监督目标</strong><br/>真实训练得到的曲线；每组模型—曲线形成一个数据点。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>用途</strong><br/>先为 100 个架构做廉价预测和排序，再对少数候选做真实实验。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./meta-model.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 从结构化研究，到机器发现新架构

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs font-bold text-blue-700">近期</div>

### 结构化 Research
建立 OPHIS 语言、采集研究轨迹，训练 Next Action 模型。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-xs font-bold text-purple-700">中期</div>

### Research Model
把不同研究者的反馈、选择和实验路径沉淀为可调用能力。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs font-bold text-green-700">北极星</div>

### 原模型
端到端理解模型与训练曲线的映射，跨越 Transformer 的局部最优。
</div>

</div>

<div class="mt-7 p-5 text-xl italic border-l-4 border-orange-500 bg-orange-50 text-left">
“最终我们是希望下一个Transformer 不是人发现的 不是人拍脑袋发现的”
<div class="not-italic text-xs opacity-60 mt-2">— 00:56:07，原模型路线的终极目标</div>
</div>

---

# 勤奋与聪明，是两条正交路线

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 更勤奋的 AI for AI
- 延伸 Coding Agent 的高行动力
- 不停执行、试错和迭代
- 用更多尝试提高命中概率
</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 更聪明的 AI for AI
- 先获得理解与机制洞见
- 在实验前筛掉低潜力想法
- 用更少尝试换更高命中率
</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">
<strong>访谈判断：</strong>两条路线并不矛盾。高效执行与高质量判断最终需要整合；分歧只是从哪一端先进入。
</div>

---

# Auto Research 的验收标准，必须足够硬

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-3xl font-bold text-blue-600">垂直领域</div>
不必一开始通用；先在一个明确领域提出全新架构。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-3xl font-bold text-orange-600">10% 级</div>
不是涨 1 个点，而是像访谈中引用的 ResNet 案例一样形成显著领先。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-3xl font-bold text-green-600">可验证</div>
榜单效果、真实实验与研究者认可共同构成外部证据。
</div>

</div>

<div class="mt-7 p-5 text-xl italic border-l-4 border-red-500 bg-red-50 text-left">
“但是现在的AI仍然不会做抽象”
<div class="not-italic text-xs opacity-60 mt-2">— 01:17:27，说明 Auto Research 对 AGI 仍非充分条件</div>
</div>

<div class="mt-4 text-xs opacity-60 text-left">访谈中的边界：垂直 Auto Research 可以先不解决持续学习；真正的 AGI 仍需要抽象与持续学习能力。</div>

---
layout: two-cols
---

# 三种尺度：适用条件地图

<div class="space-y-3 text-left text-sm mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>空间更细</strong><br/>不仅看端到端行为，也看内部神经元与表征。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>时间更细</strong><br/>不仅看最终模型，也看训练过程如何演化。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>平行宇宙</strong><br/>通过改变超参数与环境做控制实验，比较不同相。
</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 italic text-left text-sm">
“可能换一个随机数种子 它这个故事就完全不对了”
<div class="not-italic text-xs opacity-60 mt-1">— 01:08:17，对过度微观解释的稳健性警告</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./three-lenses.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 产品终局：从 Copilot 到 Vibe Training

<div class="grid grid-cols-4 gap-3 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs font-bold text-blue-700">01 · 需求</div>

### 用户描述目标
不要求用户先成为 AI Researcher，也不要求指定 Transformer。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-xs font-bold text-purple-700">02 · 约束</div>

### 给出预算
访谈用 100 元举例：系统要在预算内寻找尽可能好的方案。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-xs font-bold text-orange-700">03 · 自动化</div>

### 设计与训练
端到端选择架构、训练模型并完成部署。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs font-bold text-green-700">04 · 交付</div>

### 私有模型
不同个人与垂直领域，都能得到贴合需求的模型。
</div>

</div>

<div class="mt-6 p-5 text-xl italic border-l-4 border-green-500 bg-green-50 text-left">
“我们最后要做的一个产品 它是一个training autopilot”
<div class="not-italic text-xs opacity-60 mt-2">— 01:20:35；短期形态则是 Training Copilot</div>
</div>

<div class="mt-4 text-xs opacity-60 text-left">仍未解决的问题：需求会如何涌现、训练成本能降到哪里，以及模型是否真的会从巨头走向人人可训。</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">8 条原话均已按字幕逐字核验；右下角为访谈时间。</div>

<div class="grid grid-cols-2 gap-3 text-left text-[12px] leading-snug">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
“我觉得设计模型本身 应该是一门科学”
<div class="not-italic text-[10px] opacity-60 mt-1">架构设计 · 00:16:19</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
“我们现在还远远没有到AI的牛顿这个状态”
<div class="not-italic text-[10px] opacity-60 mt-1">AI 的科学阶段 · 00:26:31</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
“Research和Coding 有很大的不同”
<div class="not-italic text-[10px] opacity-60 mt-1">结构化数据 · 00:39:45</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
“我突然grock了 我突然顿悟了”
<div class="not-italic text-[10px] opacity-60 mt-1">60 天自我训练 · 00:50:01</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
“研究品位研究直觉其实是一个遮羞布”
<div class="not-italic text-[10px] opacity-60 mt-1">研究思维链 · 01:28:47</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
“最终我们是希望下一个Transformer 不是人发现的 不是人拍脑袋发现的”
<div class="not-italic text-[10px] opacity-60 mt-1">原模型北极星 · 00:56:07</div>
</div>

<div class="p-3 bg-gray-50 border-l-4 border-gray-500 rounded italic">
“可能换一个随机数种子 它这个故事就完全不对了”
<div class="not-italic text-[10px] opacity-60 mt-1">可解释性的稳健性 · 01:08:17</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
“我们最后要做的一个产品 它是一个training autopilot”
<div class="not-italic text-[10px] opacity-60 mt-1">产品形态 · 01:20:35</div>
</div>

</div>

---
layout: end
---

# 从理解模型，到让每个人训练模型

<div class="mt-10 text-2xl italic max-w-3xl mx-auto">
“如果我们能deliver那个vibe training autopilot 那就相当于是平权了”
</div>

<div class="mt-8 text-sm opacity-60">
— 刘子鸣 · 01:25:42
</div>

<div class="mt-10 text-xs opacity-45">张小珺 Xiaojun Podcast · EP.149</div>
