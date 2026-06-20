---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '亲手帮忙装了台量子计算机,量子时代要来了吗?'
info: |
  硅谷101 深度——Roger 带我们走进硅谷量子实验室,讲清 Willow 突破、五家巨头的不同路线,以及量子计算到底离我们有多远。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 亲手帮忙装了台量子计算机

## 量子时代,要来了吗?

<div class="mt-12 text-sm opacity-70">
硅谷101 · 走进硅谷量子计算实验室 · 对话 Roger(Caltech 量子团队博士 / Berkeley 博士后)
</div>

<div class="mt-4 text-xs opacity-50">
"从去年 2024 年年末开始,硅谷的科技领袖们之间迎来了一场激烈的'量子'较量"
</div>

---

# 为什么这期值得看完

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Willow 时刻

谷歌新芯片 Willow 把量子计算从"科学问题"变成了"工程挑战"——业内称之为**量子计算的 Transformer 时刻**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 五家巨头的不同基因

IBM 求稳、谷歌灵活、亚马逊弯道超车、英伟达卖铲子、微软押拓扑——每家在量子赛道上仍然复刻了自己原来的成功路径。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 真实的应用已经开始

新加坡金管局直接把研发资金给银行,材料科学家在用量子机模拟分子——金融和材料是最早的两个落地领域。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 区块链坐立不安

椭圆曲线对当前的量子算法已经是 Quantum Safe 的,但是 Vitalik 早就在准备硬分叉方案。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### AI 的下一个突破口

Transformer 撞上数据墙;量子的"高维空间"可能让 AI 不再需要喂整个图书馆。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 时间线的共识

业内人不喜欢"再等 10、20、30 年"这种懒答案——但他们大致认同:**20 年左右**是大多数人会签字的数字。

</div>

</div>

---

# 三个月的过山车行情

<div class="text-sm opacity-60 mb-4">2024 年末到 2025 年初,量子计算概念股的全程戏剧。</div>

<div class="space-y-2 mt-2">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 flex items-baseline gap-4">
<div class="text-sm font-mono w-24 opacity-70 shrink-0">2024-12-09</div>
<div><strong>谷歌发布 Willow</strong>——"最新量子处理器 Willow 的突破性成果,引发资本市场剧烈波动",量子概念股一个月内翻了几倍。</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 flex items-baseline gap-4">
<div class="text-sm font-mono w-24 opacity-70 shrink-0">2025-01 初</div>
<div><strong>黄仁勋泼冷水</strong>——"有用的量子计算还要等十几年";扎克伯格公开附议。概念股狂跌。</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 flex items-baseline gap-4">
<div class="text-sm font-mono w-24 opacity-70 shrink-0">2025-02-19</div>
<div><strong>微软发 Majorana 1</strong>——"全球首款'拓扑体'量子计算芯片",给市场注入新的乐观情绪,概念股反弹。</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
为什么科技大佬之间会出现这么强的分歧?——这期视频试图回答。
</div>

---
layout: two-cols
---

# 比特 vs 量子比特

经典比特任何时刻只能是 0 或 1。

量子比特可以**同时**处于 0 和 1 的叠加态——更准确地说,是处于一种**概率分布状态**。

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
"就像薛定谔的猫,既是活的又是死的;或者你可以想象一枚正在快速旋转的硬币——在它停下来之前,同时具有'可能是正面'和'可能是反面'的特性。"
</div>

<div class="mt-3 text-xs opacity-60">
旋转的状态,某种程度上类似于量子比特的叠加态。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./qubit-vs-bit.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 量子纠缠——魔术手套的比喻

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### 嘉宾的比喻

> 想象两个魔术手套,把它们**分开放置,即使相隔很远**——它们依然保持着神奇的联系。

当你戴上左手手套时,它会随机变成红色或蓝色;而远处的右手手套,**会立即变成相反的颜色**。

</div>

<div class="p-5 rounded border-2 border-purple-300 bg-purple-50">

### 为什么这是计算优势

一个量子比特的状态改变,会立即影响到与之纠缠的其他量子比特。

3 个量子比特由于叠加态的存在,可以**同时表示 2³ = 8 种状态**,可以同时对这 8 种状态运算——而传统计算机只能一个一个地处理。

</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
"当量子比特数量增加的时候,这种优势会呈指数级增长。"
</div>

---

# 维度爆炸——从《三体》借的比喻

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 二维平面

经典比特就像被限制在二维平面上的生物,只能"左右前后"移动——绕开障碍物要走很长的弯路。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 进入三维

量子比特能同时处于叠加,还能与其他量子比特产生纠缠——**这就像获得了往"上下"方向延展的能力,打开了全新的计算维度**。

</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-sm opacity-70">10 个量子比特</div>
<div class="text-2xl font-bold text-green-700 my-1">2¹⁰ = 1024</div>
<div class="text-xs opacity-60">维度</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-sm opacity-70">50 个量子比特</div>
<div class="text-2xl font-bold text-orange-700 my-1">超级计算机</div>
<div class="text-xs opacity-60">已无法模拟</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-sm opacity-70">100 个量子比特</div>
<div class="text-2xl font-bold text-red-700 my-1">2¹⁰⁰</div>
<div class="text-xs opacity-60">超出宇宙原子数</div>
</div>

</div>

<div class="mt-4 text-sm opacity-60">
"它不是简单地让计算变得更快,而是提供了一种全新的计算维度。"
</div>

---

# 但是,量子态极其脆弱

<div class="mt-6 p-5 bg-red-50 border-l-4 border-red-500 rounded italic text-lg">
"控制量子态就像在悬崖边跳舞——量子比特极其脆弱,稍受干扰就会失去量子态,这被称为'退相干'现象。"
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 越大越难

随着量子比特数量增加,整个系统的错误率**急剧累积上升**。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 搭积木比喻

> "搭得越高,搭的过程中的一点点错误就会累积,然后积木越来越容易崩塌。"

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 这个难题困扰科学家几十年——直到 Willow 带来转机。

</div>

---
layout: two-cols
---

# Willow 摘下了 1995 年以来的圣杯

<div class="text-sm opacity-70 mb-3">谷歌 2024 年 12 月发布,核心突破不是单纯做大,而是<strong>错误率随规模下降</strong>。</div>

<div class="space-y-2">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
团队从 <strong>3 × 3</strong> 量子比特网格开始测试,扩展到 <strong>5 × 5</strong>,最后到 <strong>7 × 7</strong>。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>每次扩展,错误率都会降低一半</strong>——业界称之为<strong>"低于阈值"(below threshold)</strong>。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
"他们摘下了 1995 年以来量子计算领域的圣杯。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./below-threshold.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Willow 到底做了什么

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 基准计算用时
<div class="text-3xl font-bold text-blue-600 my-2">&lt; 5 分钟</div>
<div class="text-xs opacity-70">完成 Willow 的标准基准任务</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 经典计算机需要
<div class="text-3xl font-bold text-red-600 my-2">10²⁵ 年</div>
<div class="text-xs opacity-70">"远远超过了宇宙的年龄"</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### Willow 量子比特数
<div class="text-3xl font-bold text-purple-600 my-2">105</div>
<div class="text-xs opacity-70">用得越多,错误反而越少</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 交响乐团的反直觉

过去的量子计算机像一个庞大交响乐团——用的乐器越多反而越容易跑调。

Willow **打破了这个魔咒**:量子比特用得越多,错误反而越少。

</div>

<div class="mt-4 text-sm opacity-60">
"作为首个实现'低于阈值'的系统,Willow 证明了:实用的超大型量子计算机,确实可以构建。"
</div>

---

# Transformer 时刻 → 量子 GPT 时刻

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### 现在:Transformer 时刻

类比深度学习:Transformer 架构**证明了深度学习模型可以不断地堆叠、持续地扩大**。

Willow 也首次证明了量子计算机能够在**保持稳定性的同时不断地扩展规模**。

</div>

<div class="p-5 rounded border-2 border-green-300 bg-green-50">

### ~2030:量子 GPT 时刻

嘉宾给的明确标准:"**量子计算机能够可靠地解决大规模的质因数分解问题**"——这是真正展现实用价值的转折点。

按谷歌和 IBM 公开路线图:**2030–2032 年**做出完备的、容错的量子计算机。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
"特别是 Willow 这个出现之后,对追求这个方向来说有更明确的那个 5 到 6 年的一个时间线——因为工程上已经验证到第一步了。"
</div>

---

# 谷歌的下一站:100 万量子比特

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Willow 在谷歌六步战略中的位置

Willow 是谷歌"可执行有用应用"量子计算机**六步战略中的第二个里程碑**——他们已经发布到了 2030 年以后的路线图。

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-sm opacity-70">今天 · Willow</div>
<div class="text-2xl font-bold text-blue-700 my-2">~105 量子比特</div>
<div class="text-xs opacity-60">第一个"低于阈值"芯片</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-sm opacity-70">~2030</div>
<div class="text-2xl font-bold text-orange-700 my-2">完备 · 容错</div>
<div class="text-xs opacity-60">指数级加速算法</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-sm opacity-70">最终目标</div>
<div class="text-2xl font-bold text-purple-700 my-2">100 万</div>
<div class="text-xs opacity-60">个量子比特的系统</div>
</div>

</div>

<div class="mt-6 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
"我们其实看到的是一个路线图的精准地完成,也就是说,我们非常可信它的后面路线图。"
</div>

---
layout: two-cols
---

# 量子机器其实长这样

嘉宾带我们走进硅谷一家量子实验室,指着冰箱一样的圆筒说:这就是**全世界最冷、也许是宇宙中最安静的地方**。

<div class="mt-4 space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>绝对零度附近</strong>——量子芯片要在差不多绝对零度才能工作
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>多层屏蔽</strong>——磁场屏蔽、红外屏蔽、超导屏蔽、真空罩,"像俄罗斯套娃一样"
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>芯片本身只有 1 cm²</strong>——一个芯粒(Chiplet)或叫裸片(Die)
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./russian-doll.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 量子测控系统——室温到绝对零度的桥

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 室温端

通过**高速电子电路**产生相应的**微波控制信号**,去控制和编程量子芯片。

中文叫<strong>"量子测控系统"</strong>。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 绝对零度端

量子芯片放在最里面,通过线一层层连到外面来。

> "量子芯片本质上,就像所有芯片一样,你去进行操控——有 I/O 才有工作,没有 I 和 O 是没有意义的。"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 这块只有 1 cm²

> "如果这里面有量子芯片的话,就会放这个小方块里面——其实量子芯片就很小,就这么一点,就是一个 1 cm 大的一个芯粒,或者叫裸片。"

</div>

---
layout: two-cols
---

# 三大玩家的"师承"

要溯源美国巨头的量子部门,**都要追溯到几所顶尖高校的小圈子**。

<div class="mt-4 space-y-3">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Yale → IBM</strong>——Robert Schoelkopf 教授和 Michel Devoret 教授门对门,Devoret 的学生 Chad Rigetti 后来 2013 年创立 Rigetti Computing,如今是量子概念股之一。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>UCSB → Google</strong>——2014 年谷歌<strong>一举收购了加州大学圣巴巴拉分校的整个量子计算团队</strong>,几经发展才有了现在的 Willow。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>Caltech → Amazon</strong>——2021 年亚马逊大手笔把加州理工的量子实验室收入麾下,创立 AWS 量子计算中心。嘉宾 Roger 正是当年那里的博士。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lineage.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# IBM 的"求稳"路线

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 信念:固定参数

把量子比特和耦合**都做成固定的**,不需要很多控制参数就能让芯片运转。

小规模上很稳定。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 代价:制造精度

> "你不可调的参太多了——那就意味着你在造的过程中就必须得非常精准,而且那个精准度要随着你的芯片做的越大越精准。"

两个比特好造;造 10、100、1000 个的时候就是大问题。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### IBM 的赌注

IBM **有自己的芯片工厂**,有信心把制造精度做到位——这是大公司用钱和资源压出来的路。

> "用业内人士的话说,这就是'求稳'的路线。"

</div>

---

# Google 的"可调"路线

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"UCSB 团队其实是全部都可调——你就没必要那么依靠制造,制造可以差一点。"
</div>

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 安卓思路

不要求每个零件都完美,但是要保证整体能够运行。

2019 年 Sycamore 实验时,**他们用的芯片制造大部分还依靠的是 UCSB 大学的洁净室**——证明了可行性之后,Google 才给了他们更多经费。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Move fast, break things

> "不锈钢能上天,为什么我一定要用全世界最好的铝合金呢?"

代价:每个部件包括量子比特、耦合、保真度,**都做到了优秀但不领先的地步**——所以从去年第一次的纠错成果到 Willow,**花了整整一年迭代芯片**。

</div>

</div>

---

# Amazon 的"激进"路线

<div class="mt-6 p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 直接换赛道

2020 年亚马逊入局——**直接给了一位顶尖教授一整栋楼和 100 多人的团队**,希望后来者居上。

他们不走 Google / IBM 的通用量子纠错,而是押注一种全新的超导量子比特:**Cat Qubits(猫量子比特)**。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 理论优势

**需要的量子纠错更小**——绕开通用纠错算法的高复杂度。

理论上有更好的可扩展性。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 现实困境

> "至少到目前为止,没有公开的信息表明他们把这个做到了可扩展。"

到那个时候都没人做出**超过一个量子比特的耦合**。

</div>

</div>

---

# 三种赛车手的隐喻

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### IBM
**经过精心调校的豪华跑车**

每次展示的都是完全验证过的成果。

<div class="text-xs opacity-60 mt-2">稳扎稳打、按部就班</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Google
**可能不那么完美但够快的赛车**

先证明可行性再慢慢优化。

<div class="text-xs opacity-60 mt-2">小步快跑</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Amazon
**在车库里研发全新的引擎**

通过巨额投入直接跨越发展阶段。

<div class="text-xs opacity-60 mt-2">一步到位</div>

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 趋同的迹象

Willow 发布之后,IBM 原本坚持的"固定参数"路线**也开始向谷歌的"可调"路线靠拢**——业界正在围绕被验证的方向收敛。

</div>

---

# 英伟达——"加速计算平台"

<div class="mt-6 p-5 bg-green-50 border-l-4 border-green-500 rounded italic text-lg">
"Accelerate computing platform company"——这是英伟达对自己的定位。
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一手:GPU 加速量子设计

英伟达和谷歌**今年已经发布了**做成这个事情的第一步——**用 GPU 甚至用人工智能,来加速最底层的芯片仿真和设计的优化**。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 一手:混合量子平台

帮企业**在真正的量子计算机出现之前,就开始准备**——硬件没到位,先把开发栈占了。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 英伟达的态度其实很实际

> "量子计算是不可避免的下一代超算平台,GPU 显然是不想被排除在外的。"

——而戏剧性的是,这家此前唱衰量子计算的公司,在 2025 年 3 月的 GTC 大会上专门办了<strong>"量子日"活动</strong>。

</div>

---
layout: two-cols
---

# 微软的另一条路:拓扑量子计算

<div class="text-sm opacity-70 mb-3">微软**没有像 IBM 和 Google 那样投入巨资去研发超导量子**——选了一条更难但理论上更稳定的路:拓扑量子计算。</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>拓扑保护</strong>:信息藏在大结构当中,<strong>一些小扰动不会影响</strong>——只有剧烈的全局变化(如系统断裂)才能破坏。
</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>马约拉纳粒子</strong>:自身是自身的反物质,可以成对出现,<strong>它们之间的状态是拓扑保护的</strong>——量子信息存储在两个分开的粒子之间的"拓扑连接"里。
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
哪怕其中一个粒子受到局部干扰,**整体信息依然不会丢失**——天然带量子纠错。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./topology.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 甜甜圈和耳机线——拓扑保护的两个比喻

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-2 border-orange-300 bg-orange-50">

### 甜甜圈

> "一个甜甜圈中间有个洞,不管你怎么拉、压、捏这个甜甜圈,它的洞都不会消失——除非你把它整体撕开。"

形状具有"拓扑保护",你**不能通过小的变形去改变它的基本特性**(也就是洞的数量)。

</div>

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### 耳机线上打的结

> "你在上面打了个结——如果你只是拉伸或挤压耳机线,这个结依然在那儿,不会松开。"

但如果你**剪断**耳机线,这个结才会消失。

</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 拓扑 vs 谷歌路线的区别

> "量子纠错是一种通过控制来保护量子信息,而拓扑比特本身就自带量子信息保护。"

</div>

---

# 微软的争议:Majorana 1 真的实现了吗?

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 微软在押什么

发布**全球首款"拓扑体"量子计算芯片 Majorana 1**——证明了这种新路径的可行性。

最终目标:在**巴掌大的芯片上放入 100 万个量子比特**。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 业内人不全信

《华尔街日报》引用物理学家质疑:微软发布会上**展示的数据"只是初步数据"**,并不能确凿证明这一进展。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 这种质疑有历史

> "过去十年,马约拉纳费米子被很多实验室和团队研究,但都没有让人信服的进展。"

发表在《自然》杂志上的**数篇相关论文后来都被陆续撤回**。包括微软的科学家 Leo Kouwenhoven 在 **2018 年**发表的论文——号称观察到了马约拉纳费米子,但在 **2021 年承认"技术错误"而撤回**。

</div>

---

# 五家巨头的基因 = 五条量子路线

<div class="grid grid-cols-5 gap-3 mt-6">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### IBM
**稳健**

依托芯片制造优势,追求高性能

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Google
**灵活**

率先证明量子优越性,可编程路线

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Amazon
**弯道超车**

大手笔投入,Cat Qubits 探索

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Nvidia
**重生态**

混合计算,发挥 GPU 优势

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Microsoft
**重平台**

押注拓扑量子 + 软件生态

</div>

</div>

<div class="mt-8 p-5 bg-indigo-50 border-l-4 border-indigo-500 rounded italic">
"这些巨头的量子布局似乎都带着各家公司的'基因'——在量子计算这个新赛道上,每家公司都在试图复制自己在传统计算时代的成功经验。"
</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

### 嘉宾的"反内卷"判断

> "黑猫白猫,能抓住耗子的就是好猫。"——不论是哪种路线的突破,对于科技界来说都是好消息。

</div>

---

# 量子 × AI——可能的下一个范式

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">

### Transformer 的瓶颈

> "基于 Transformer 架构的传统 AI 正在遭遇泛化性不足的困境——它们需要消耗海量的数据才能够提升性能。"

更严峻的是:**我们可能已经没有足够的优质数据**来支撑 AI 向 AGI 迈进了。

</div>

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 量子提供的解法

10 个量子比特 = 2¹⁰ 维度空间。

把低维数据**映射到高维空间**,让模型更容易学到数据里的 pattern——"就像从高空俯瞰,能够看到地面上的全局图案"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 反直觉的结果

> "AI 可能只需要阅读几本代表性的书,就可以掌握写作技巧——不是像现在这样需要消化整个图书馆的内容。"

数据量减小一个数量级以上,经济性会反而提升。

</div>

</div>

---

# 量子 × 加密货币——"4000 qubit 警戒线"

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 为什么加密社区紧张

量子计算机最早被设想的应用之一,**就是破解当前广泛使用的非对称加密算法**——这关系到整个互联网的安全体系。

</div>

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 警戒线

> "当量子计算机达到**大约 4000 个稳定的量子比特**的时候,就可能会威胁到现有的加密体系。"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 现状是相对安全的

> "现在用的这个椭圆曲线本身,就认为至少对于目前这一代的在研究的量子计算的算法,是已经是比较安全的了。"

</div>

</div>

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

### 行业立场分裂

**Avalanche 创始人 Emin Gün Sirer**:"目前的量子计算能力尚不足以威胁加密货币安全。"

**PayPal 前主席 David Marcus**:"Willow 的进展表明,量子抗性技术发展需要加速。"

</div>

---

# 区块链的应对:硬分叉是不可避免的

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 三个应对方向

- **后量子密码学**——开发量子机面前也安全的算法
- **量子密钥分发**——用量子力学原理实现绝对安全
- **可升级架构**——让系统能灵活应对未来威胁

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 已经在动手的项目

**StarkWare** 很早就在讨论 Quantum Resistance 相关研究,设计 ZK 平台时已有考虑。

**Ethereum Research** 本身在做很多这方面的研究——以太坊创始人 **Vitalik** 早就建议通过硬分叉来增强抗性。

</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 为什么必须硬分叉

> "量子计算如果能破解这个加密的话,它动到的是以太坊的根基——所以它甚至是比共识层还要基础的东西,所以它一定会通过硬分叉来解决。"

比特币也是一样——必须通过硬分叉来升级。

</div>

---

# 反过来看:量子也能给区块链开新可能

<div class="mt-6 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### 量子一次性交易

量子态有一个独特性质:**读取一次以后就会坍缩**。

> "你其实可以通过一个量子态被读取过一次以后它就会坍缩这样的一个现象,去保证用一种**离线(off chain)的方式**去创建一个防止双花的方式。"

</div>

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 现在防双花的方式

把交易放到链上,**通过全球共识**来知道你是不是现在的拥有者。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 量子时代的可能性

利用坍缩,可能实现**临时的或者是短暂的区块链**——而不是每一个链的每一个交易都需要上链。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
"很多人担心量子计算会是一个对区块链有害的新闻——其实在我看来,它也有可能让区块链的发展有更多的可能性。"
</div>

---

# 应用 1:金融——新加坡金管局直给银行

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 为什么银行走在最前面

不是偶然——基于**三个独特优势**:掌握最真实的用户数据、面临明确的应用场景、具备充足的研发资源。

</div>

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2024 年 7 月,MAS 的开创性项目

> "新加坡金管局他的那个项目就是不跟任何科研机构合作,他直接把钱是给到那个银行——你要拿到那笔钱,你必须是个银行。"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 银行在做的三件事

- 用量子算法**优化交易策略**
- 用量子机器学习**提升风险预测准确性**
- 在更大的解空间中**寻找投资组合最优配置**

</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
"真正的创新往往来自那些最接近实际问题的使用者。"——这是 MAS 设计的核心理念。
</div>

---

# 应用 2:材料科学——星舰隔热瓦也许不需要了

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 天然契合

> "量子计算机本质上就是一个量子系统,**天然适合模拟其他的量子系统的行为**——因为它本身就基于量子力学原理。"

</div>

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 经典计算的极限

模拟一个包含 **100 个电子的分子系统**时,需要存储空间可能**超过整个宇宙中所有原子的数量**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 量子机的"原生支持"

能够自然地处理量子叠加和量子纠缠,**高效地模拟这种量子系统**。

</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 最具想象力的两个方向

> "要么太空电梯的那个绳索——要么就是 Elon Musk 的星舰可以连那个隔热瓦都不需要——比如说这种特殊的金属可以直接承担返回的那个高热。"

</div>

---

# 概念股的过山车 + 黄仁勋的态度转弯

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 市场的反复

**Rigetti、D-Wave Quantum、IonQ** 等量子计算概念股,**几个月之内一度翻好几倍**,之后又在市场争议之际疯狂下跌。

> "这反应出市场和外界对量子计算这项特殊技术并存的期待和质疑——当然也有炒作和投机。"

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 戏剧性的转向

此前唱衰量子计算的英伟达,<strong>突然宣布将在 2025 年 3 月的 GTC 大会上举办"量子日"活动</strong>。

黄仁勋和一众量子计算领域的领袖们,**将一起探讨量子计算的可能性**——市场再次充满期待。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

### 嘉宾的判断

> "他(黄仁勋)有可能会预测失误——在未来三到五年内,可能会有某些技术可以实现足够多真正有用的逻辑量子比特,从而解决某些极其棘手的难题。"

</div>

---
layout: two-cols
---

# 时间线的共识:20 年

<div class="text-sm opacity-70 mb-3">嘉宾不喜欢"还要 10 年、20 年、30 年"这种话——他说这是一种<strong>"懒惰"的说法</strong>。但如果一定要给个数字……</div>

<div class="mt-4 space-y-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
"如果你说真正能派上用场的量子计算机<strong>只有 15 年,那可能太过乐观了</strong>。"
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
"如果说 <strong>30 年,可能又过于保守了</strong>。"
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
"但如果你说 <strong>20 年——我想我们业内大多数人都会认同这个时间点</strong>。"
</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
"历史告诉我们,<strong>一旦技术的可扩展性得到证明</strong>,那么实现突破的时间往往比人们预期的要短很多。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./timeline.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句:</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"他们摘下了 1995 年以来量子计算领域的圣杯。"
<div class="text-xs opacity-60 mt-1 not-italic">— 业内对 Willow 实现"低于阈值"的评价</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"Willow 是量子计算的 Transformer 时刻——那么真正的'量子 GPT 时刻'可能会在 2030 年左右到来。"
<div class="text-xs opacity-60 mt-1 not-italic">— 嘉宾对量子路线节奏的类比</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"不锈钢能上天,为什么我一定要用全世界最好的铝合金呢?"
<div class="text-xs opacity-60 mt-1 not-italic">— 嘉宾解释 Google "可调路线" 背后的工程哲学</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"黑猫白猫,能抓住耗子的就是好猫——不论是哪种路线的突破,对于科技界来说都是好消息。"
<div class="text-xs opacity-60 mt-1 not-italic">— 对五家巨头不同技术路线的总结</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">
"量子计算如果能破解这个加密的话,它动到的是以太坊的根基,所以它一定会通过硬分叉来解决。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于区块链如何应对量子威胁</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"如果你说只有 15 年,那可能太过乐观了;如果说 30 年,可能又过于保守了。但如果你说 20 年——我想我们业内大多数人都会认同这个时间点。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于"量子计算何时实用"</div>
</div>

</div>

---
layout: end
---

# 量子计算真正到我们面前的这条道路,也不会一帆风顺。

<div class="mt-8 text-base opacity-80 italic">
"也许会比很多人想象中,更早地到达我们身边。"
</div>

<div class="mt-3 text-sm opacity-60">
—— 硅谷101 · 量子计算专题
</div>
