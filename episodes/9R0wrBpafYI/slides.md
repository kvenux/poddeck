---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Quantum Mechanics Explained FROM SCRATCH'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
coverDate: '2026-07'
themeConfig:
  paginationX: r
  paginationY: t
  paginationPagesDisabled: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
---

<div class="mt-18 text-sm tracking-[0.28em] uppercase text-red-600 font-semibold">Theories of Everything · Tim Maudlin</div>

# Quantum Mechanics Explained<br>FROM SCRATCH

<div class="mx-auto mt-6 max-w-3xl text-xl leading-8 opacity-75">
从光量子、波函数与 Born 规则出发，重建 Einstein–EPR–Bell 的真实逻辑
</div>

<div class="mt-10 flex justify-center gap-3 text-sm">
  <span class="px-4 py-2 rounded-full bg-blue-50 border border-blue-200">约 179 分钟</span>
  <span class="px-4 py-2 rounded-full bg-purple-50 border border-purple-200">零基础推导</span>
  <span class="px-4 py-2 rounded-full bg-red-50 border border-red-200">量子基础</span>
</div>

<div class="mt-14 text-sm opacity-55">PodDeck · 2026-07</div>

---

# Why this episode matters

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-[15px] leading-6">

<div class="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500">

### 从头搭建
从 1905 年光电效应开始，不预设量子力学背景。
</div>

<div class="p-4 rounded-lg bg-green-50 border-l-4 border-green-500">

### 分开数学与物理
波函数会算什么，和它究竟描述什么，是两道不同的问题。
</div>

<div class="p-4 rounded-lg bg-orange-50 border-l-4 border-orange-500">

### 还原 Einstein
他的核心忧虑是远距作用，不只是随机性。
</div>

<div class="p-4 rounded-lg bg-purple-50 border-l-4 border-purple-500">

### 拆开 EPR
正确性、完备性、实在判据与局域性逐层进入论证。
</div>

<div class="p-4 rounded-lg bg-red-50 border-l-4 border-red-500">

### 清除误解
不能超光速发信号，不等于不存在超光速物理影响。
</div>

<div class="p-4 rounded-lg bg-yellow-50 border-l-4 border-yellow-500">

### 通向 Bell
先理解 EPR 如何推理，才看得见 Bell 的反转究竟反转了什么。
</div>

</div>

<div class="mt-5 text-xs opacity-55">阅读说明：英文引号内是逐字字幕；其余中文均为作者据本期内容整理。</div>

---

# 一条世纪线索，而不是一堆名词

<div class="grid grid-cols-7 gap-2 mt-7 text-center text-sm">

<div class="p-3 rounded bg-slate-50 border-t-4 border-slate-400"><b>1900</b><br><span class="text-xs">Planck<br>黑体计算</span></div>
<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500"><b>1905</b><br><span class="text-xs">Einstein<br>光量子</span></div>
<div class="p-3 rounded bg-green-50 border-t-4 border-green-500"><b>1924</b><br><span class="text-xs">de Broglie<br>物质波</span></div>
<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500"><b>1925–26</b><br><span class="text-xs">矩阵力学<br>波动力学</span></div>
<div class="p-3 rounded bg-orange-50 border-t-4 border-orange-500"><b>1927</b><br><span class="text-xs">Solvay<br>针孔质疑</span></div>
<div class="p-3 rounded bg-red-50 border-t-4 border-red-500"><b>1935</b><br><span class="text-xs">EPR<br>完备性</span></div>
<div class="p-3 rounded bg-yellow-50 border-t-4 border-yellow-500"><b>Bell</b><br><span class="text-xs">沿用 EPR<br>推翻局域性</span></div>

</div>

<div class="mt-8 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-lg leading-8">
本期的主线始终是同一个问题：<b>波函数给出的量子描述，究竟是对单个物理系统的完整描述，还是只是一种统计描述？</b>
</div>

<div class="grid grid-cols-2 gap-5 mt-5 text-sm">
<div class="p-4 rounded border border-gray-200"><b>Act I</b>：量子理论如何形成，以及 Einstein 1927 年的担忧</div>
<div class="p-4 rounded border border-gray-200"><b>Act II</b>：EPR 如何把担忧变成一个明确的逻辑论证</div>
</div>

---

# Planck 算对了；Einstein 才提出物理量子

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded-lg bg-slate-50 border-l-4 border-slate-400">

### Planck · 1900

- 目标是得到正确的黑体辐射谱
- 在统计计算里停止取零极限
- 引入由常数 $h$ 标记的小区域
- Maudlin 强调：这未必已经是一套明确的量子物理假说
</div>

<div class="p-5 rounded-lg bg-blue-50 border-l-4 border-blue-500">

### Einstein · 1905

- 面对光电效应的阈值现象
- 把能量传递理解成离散小包
- 用 $E=h\nu$ 连接频率与单个能量包
- 量子化从计算技巧变成物理解释
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
关键区别不在谁先写出 h，而在谁把离散结构当作世界如何工作的假说。
</div>

---
layout: two-cols
---

# 光电效应的阈值

<div class="text-[15px] leading-7 mt-4">

经典波图景预期：亮度与频率都能增加输入能量。

但实验呈现两个分离的旋钮：

- <b>频率低于临界值</b>：再亮也没有电流，只会加热金属
- <b>频率越高</b>：每个能量包携带的能量越大
- <b>超过阈值后提高亮度</b>：增加能量包数量，于是电流增大

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
频率决定单包能量；亮度决定包的数量。阈值由前者跨过。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./quantum-threshold.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# 为什么海浪类比在这里失效

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded-lg bg-blue-50 border-2 border-blue-200">

### 连续波击打海滩

能量沿波前分散。海滩上的许多石子都被轻微扰动；增加振幅意味着把更多能量连续地铺开。
</div>

<div class="p-5 rounded-lg bg-orange-50 border-2 border-orange-200">

### 离散能量包击打金属

少数电子一次获得足够能量而逸出，其他电子没有反应。低于单包阈值时，增加数量也无济于事。
</div>

</div>

<div class="mt-7 grid grid-cols-3 gap-4 text-center">
<div class="p-4 rounded bg-slate-50"><div class="text-3xl font-bold text-slate-600">波</div><div class="text-xs mt-2">干涉、折射、衍射</div></div>
<div class="p-4 rounded bg-purple-50"><div class="text-3xl font-bold text-purple-600">同一对象</div><div class="text-xs mt-2">始终要用一套理论描述</div></div>
<div class="p-4 rounded bg-orange-50"><div class="text-3xl font-bold text-orange-600">粒子</div><div class="text-xs mt-2">能量离散地被交付</div></div>
</div>

---

# 波粒二象性不是模式开关

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded-lg bg-red-50 border-l-4 border-red-500">

### 容易误导的图景

把量子对象想成在粒子模式与波模式之间切换，再把观察当作触发器。

问题是：理论必须说明何时、由什么物理机制完成切换。
</div>

<div class="p-5 rounded-lg bg-green-50 border-l-4 border-green-500">

### Maudlin 的修正

同一个对象始终表现出某些波特征，也表现出某些粒子特征。改变实验装置后，干涉会连续地衰减，而不是突然换挡。
</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
双缝里的 which-way 条件首先是物理装置的改变；把它压缩成观察使波变粒子，会丢掉 Schrödinger 演化本身。
</div>

---

# de Broglie 把 Einstein 的方向倒过来

<div class="grid grid-cols-2 gap-6 mt-5 text-[15px] leading-7">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Einstein

从光的频率出发，把能量写成

$$E=h\nu$$

经典上像波的光，显出粒子式能量传递。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### de Broglie

从粒子的动量与能量出发，反推出

$$\lambda=\frac{h}{p}, \qquad \nu=\frac{E}{h}$$

经典上像粒子的电子，也应显出波动行为。
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">
这一步把光的反常行为推广成普遍原则：物质粒子也可以有频率、波长与干涉。
</div>

---
layout: two-cols
---

# 物质波：粒子与波如何同场

<div class="text-[15px] leading-7 mt-4">

de Broglie 的思路不是抹掉粒子，而是给粒子关联波动结构。

- 粒子提供位置与轨迹的直观载体
- 波提供波长、频率、衍射与干涉
- Planck 常数把两套经典描述接到一起
- 后来的 pilot-wave 图景会把两者都保留下来

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
这让波样与粒子样行为可以来自两个共同存在的物理成分，而不需要对象在两种身份间跳变。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./wave-particle.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# 1925 与 1926：两种新量子力学

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Heisenberg · 矩阵力学

- 1925 年的突破
- 采用当时许多经典训练物理学家不熟悉的矩阵语言
- 与本期前面的波与粒子故事并不自然衔接
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Schrödinger · 波动力学

- 1926 年提出
- 用波函数和波动方程组织理论
- 在若干情形下与矩阵力学给出同样预测
- 因熟悉波动数学而迅速成为常用表达
</div>

</div>

<div class="mt-7 text-center p-5 rounded-lg bg-purple-50 border border-purple-200">
预测可等价，不代表物理意义已经澄清：波函数究竟是什么，仍然悬而未决。
</div>

---

# 波函数先是一种动力学对象

<div class="grid grid-cols-3 gap-4 mt-6 text-[14px] leading-6">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 数学载体
波函数是定义在系统配置空间上的复值函数。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 演化规律
Schrödinger 方程让它像波一样传播、展开、折射并发生干涉。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 尚缺解释
仅有方程并没有说明波函数代表单个系统、集合，还是别的东西。
</div>

</div>

<div class="mt-7 p-5 rounded bg-slate-50 border-l-4 border-slate-500 text-[15px] leading-7">
Schrödinger 最初三部分讨论定态解，使用实值函数来求原子允许的能级；进入非定态问题后，他才被迫使用复值函数，并对此并不满意。
</div>

<div class="mt-5 text-sm opacity-65">教学中的起点常常是历史发展的终点，因此容易把波函数、复数与概率误看成一次性出现的整包概念。</div>

---

# Born 规则把概率接到波函数上

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Schrödinger 方程负责什么

给定波函数后，规定它如何连续演化。它本身是一条波动动力学方程。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Born 规则增加什么

对复波函数取模平方，把所得数值解释为测量结果的概率。
</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
<div class="p-4 rounded border border-gray-200"><b>输入</b><br>系统的波函数</div>
<div class="p-4 rounded border border-gray-200"><b>演化</b><br>Schrödinger 方程</div>
<div class="p-4 rounded border border-gray-200"><b>读出</b><br>Born 概率</div>
</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
概率并非波动方程里自动显现的意义，而是后来加入的解释规则；这正是完备性争论的入口。
</div>

---

# Copenhagen 把三项主张绑成一包

<div class="grid grid-cols-3 gap-4 mt-6 text-[14px] leading-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1 · 完备性
波函数已经说尽系统的一切物理事实。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 2 · 根本概率
Born 概率反映自然本身的非决定性，而非无知。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 3 · 放弃图像
无法用经典图像理解，不是理论欠缺，而是人的直觉越界。
</div>

</div>

<div class="mt-8 p-5 rounded-lg bg-red-50 border-2 border-red-200 text-[16px] leading-7">
Einstein 的攻击点不是量子预测不准。他接受预测成功，质疑的是：为什么要把这套成功的统计形式主义宣布为物理描述的终点？
</div>

---
layout: two-cols
---

# 1927：针孔与半球屏

<div class="text-[15px] leading-7 mt-4">

Einstein 在第五届 Solvay 会议提出一个单粒子装置：

1. 电子束射向带小孔的屏障
2. 穿孔后的波向各方向衍射
3. 等距的半球形感光屏包围小孔
4. 每次实验只出现一个点

</div>

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
装置迫使人回答：向整个半球扩散的波，如何描述最终只在一点留下痕迹的单个电子？
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./pinhole.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 同一个 ψ，有两种物理读法

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Conception 1 · 集合描述

波函数描述无限多次实验组成的电子云。每个电子走一条方向不同的轨迹，叠加后形成半球分布。

<div class="mt-3 text-sm opacity-70">优点：点状结果与统计图样可以同时保留。</div>
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Conception 2 · 个体完备描述

波函数完整描述单个电子。波扩散到所有屏面位置，单个电子也必须以某种意义扩散到那里。

<div class="mt-3 text-sm opacity-70">代价：必须解释为何同一电子不会在多个位置留下点。</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
争论的核心不是公式，而是公式的指称对象：一个个体，还是一个集合。
</div>

---

# 一个点，迫使全局波瞬间消失

<div class="grid grid-cols-3 gap-4 mt-6 text-[14px] leading-6">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 之前
波已经到达半球屏的许多位置。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 发生
屏上某处形成一个点状响应。
</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">

### 必须同时发生
其他位置的波函数立即归零，否则还可能形成第二个点。
</div>

</div>

<div class="mt-8 p-5 rounded-lg bg-red-50 border-l-4 border-red-600 text-[16px] leading-7">
若波函数是个体系统的完整物理状态，坍缩就不能只是记账变化；它必须是瞬时、全局的物理变化，因此与相对论的同时性结构发生冲突。
</div>

<div class="mt-5 text-sm opacity-65">这个 1927 年例子只有一个粒子，没有纠缠，也不涉及发送信号。</div>

---

# 坍缩何时可以只是知识更新

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 若 ψ 完备

知道波函数就等于知道全部物理事实。没有额外事实可供学习，因此发现落点后不能说只是更新知识。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 若 ψ 不完备

系统还包含粒子的实际位置或轨迹。落点揭示了原先未知的事实，概率更新可以只是 Bayesian 更新。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500">
把坍缩解释成主观更新，并不能与波函数完备性同时免费获得；前者需要一个尚未被波函数编码的对象作为更新目标。
</div>

---
layout: two-cols
---

# Pilot wave：把波与粒子都留下

<div class="text-[15px] leading-7 mt-4">

de Broglie 的路线为针孔实验提供一幅局域图景：

- 波通过针孔并影响后续运动方向
- 粒子始终位于某处并沿确定轨迹前进
- 屏上的点出现在粒子真正撞击的位置
- 许多次实验的轨迹分布重现波的衍射图样

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
在单粒子情形里，这套图景不需要远距作用；麻烦要到多粒子系统才真正升级。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./pilot-wave.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# 局域性至少有两个层次

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 本体局域性

把世界切成任意小而略有重叠的区域；给出每个区域的完整物理状态，就确定了整体状态。

经典场是典型例子：每一点都有场强与方向。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 动力学局域性

一个区域的变化只能通过有限速度传播，逐步影响邻近区域；不能瞬间改变遥远地点。

EPR 与 Einstein 所依赖的是这个无远距作用原则。
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
两者相关但不相同：一个问世界状态如何拼接，另一个问影响如何传播。
</div>

---
layout: two-cols
---

# 为什么局域性也是实验方法的前提

<div class="text-[15px] leading-7 mt-4">

局域微分方程让科学家能够只检查一个小区域：

- 当前变化由附近状态决定
- 外界影响必须连续穿过边界
- 屏蔽与隔离因此具有意义
- 小系统可以作为近似独立的实验对象

</div>

<div class="mt-5 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">
若任意远处事件都能依法瞬间改变实验室，判断本地现象是否遵守定律就必须检查整个宇宙。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./locality.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 多粒子把波函数推入配置空间

<div class="text-[15px] leading-7 mt-4">

配置空间用一个点同时编码所有粒子的位置：

- 1 个粒子 → 3 维
- 2 个粒子 → 6 维
- 3 个粒子 → 9 维
- 4 个粒子 → 12 维

相空间还会把每个粒子的动量一并编码，因此每个粒子对应 6 个维度。

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
高维空间本身不是量子力学发明；新问题在于，量子理论从这个抽象空间出发，却不清楚如何还原为三维空间中的完整物理图景。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./configuration-space.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# 经典力学与量子力学对配置空间的用法不同

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 经典力学

先有三维物理空间中的粒子与力，再把整个构型压缩成高维空间中的一点。高维表示是数学便利。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 量子力学

波函数原生定义在配置空间上。若它是完整而基本的物理对象，高维空间就不再只是方便的记法。
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500">
Einstein 的担心：在物理空间里，距离决定何为近邻作用；到了配置空间，如何表达只在小空间距离上传播的力，反而变得不自然。
</div>

---

# 1935：EPR 把旧问题变成双粒子论证

<div class="grid grid-cols-3 gap-4 mt-6 text-[14px] leading-6">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 概念部分
定义正确性、完备性与物理实在判据。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 逻辑部分
从局域性与完美相关推出波函数描述不完备。
</div>

<div class="p-4 rounded bg-slate-50 border-t-4 border-slate-500">

### 技术部分
原始位置与动量态有数学细节；Maudlin 暂时搁置，因为不改变论证结构。
</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-[15px] leading-7">
双粒子的修辞力量来自可把一个送到 Alice、另一个送到 Bob，并让两间实验室相距任意遥远：远距扰动不再是抽象措辞，而是清晰的因果问题。
</div>

---

# 正确，不等于完备

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Correctness · 正确性

理论结论与实验经验符合到什么程度。EPR 并不否认标准量子力学预测成功。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Completeness · 完备性

物理实在中的每一个要素，都必须在理论描述中有对应项。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
温度可以正确描述一杯水的某个宏观方面，却没有列出所有微观状态。若基础理论承认自己不完备，就等于承认更细的物理描述仍然存在。
</div>

---
layout: two-cols
---

# EPR 的物理实在判据

<div class="text-[15px] leading-7 mt-4">

判据只给出<b>充分条件</b>，不是实在的完整定义：

1. 不以任何方式扰动系统
2. 仍能以概率 1 预测某物理量
3. 则系统中存在与该物理量对应的实在要素

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
如果操作前后物理状态没有改变，而操作后能确定结果，那么决定结果的属性在操作前就已存在。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./reality-criterion.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# Alice 与 Bob：关键是因果隔离

<div class="text-[15px] leading-7 mt-4">

共同源制备一对粒子，分别送入相距极远的实验室。

- 两边的实验可处于类空间分离
- 连光都来不及从一边传到另一边
- Alice 可自由操作自己的粒子
- EPR 默认为：她的操作不扰动 Bob 的粒子，反之亦然

</div>

<div class="mt-5 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">
否认这一步不是推翻实在判据，而是直接接受一边的操作会瞬间改变另一边。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./alice-bob.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# EPR 态：部分没有动量，整体却有

<div class="grid grid-cols-3 gap-4 mt-6 text-[14px] leading-6">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 粒子 1
不是动量本征态；按 Copenhagen 说法，没有确定动量。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 联合系统
是总动量为零的本征态，确定拥有总动量 0。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 粒子 2
同样没有确定动量，但与粒子 1 的测量结果严格相反。
</div>

</div>

<div class="mt-7 p-5 rounded bg-red-50 border-l-4 border-red-500 text-[15px] leading-7">
奇异之处不是相关本身，而是：若部分都没有动量，整体的零动量就不能像经典物理那样由两个局部动量相加得到。
</div>

---

# 完美反相关意味着什么

<div class="mt-7 flex items-center justify-center gap-5 text-center">
<div class="w-52 p-5 rounded-lg bg-blue-50 border-2 border-blue-200">
<div class="text-sm opacity-60">Alice 测得</div>
<div class="text-4xl font-bold text-blue-600 my-3">p</div>
<div class="text-xs">具体值无法预先知道</div>
</div>
<div class="text-4xl text-slate-400">+</div>
<div class="w-52 p-5 rounded-lg bg-orange-50 border-2 border-orange-200">
<div class="text-sm opacity-60">Bob 必测得</div>
<div class="text-4xl font-bold text-orange-600 my-3">−p</div>
<div class="text-xs">同样无法单独预先知道</div>
</div>
<div class="text-4xl text-slate-400">=</div>
<div class="w-40 p-5 rounded-lg bg-green-50 border-2 border-green-200">
<div class="text-sm opacity-60">总动量</div>
<div class="text-4xl font-bold text-green-600 my-3">0</div>
<div class="text-xs">可以确定预测</div>
</div>
</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500">
联合态可由所有 p 与 −p 的乘积态叠加而成；每个分量总动量为零，因此整体总动量也确定为零。
</div>

---
layout: two-cols
---

# 只用动量，就能完成 EPR 论证

<div class="text-[14px] leading-6 mt-4">

1. Alice 与 Bob 都知道粒子由 EPR 态制备
2. Alice 测自己粒子的动量，得到 $p$
3. 她于是确定 Bob 将得到 $-p$
4. 局域性保证 Alice 没有扰动 Bob
5. 实在判据推出：Bob 的粒子原先已有决定结果的实在要素
6. EPR 波函数没有给出这个具体值，因此描述不完备

</div>

<div class="mt-4 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
Maudlin 强调：不必再引入位置，结论已经成立。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./epr-logic.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# 逻辑只留下两个出口

<div class="grid grid-cols-2 gap-7 mt-7 text-[16px] leading-7">

<div class="p-6 rounded-lg bg-blue-50 border-2 border-blue-300">

### 出口 A · 描述不完备

Bob 的粒子拥有波函数未记录的物理属性。量子形式主义可以正确，但不是全部故事。
</div>

<div class="p-6 rounded-lg bg-red-50 border-2 border-red-300">

### 出口 B · 接受远距作用

Alice 的实验瞬间改变 Bob 的物理状态，使原先没有确定动量的粒子获得确定动量。
</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-[15px] leading-7">
Einstein 选择 A。Copenhagen 阵营既不愿承认远距作用，也不愿承认描述不完备，Maudlin 认为这正是回应失焦的根源。
</div>

---

# 位置让矛盾更尖锐，但不是必要步骤

<div class="grid grid-cols-3 gap-4 mt-6 text-[14px] leading-6">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 若 Alice 测动量
她能确定预测 Bob 的动量；局域性推出 Bob 原先已有动量。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 若 Alice 测位置
同样结构推出 Bob 原先已有位置。
</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">

### Copenhagen 的困难
不存在同时为位置与动量本征态的波函数，无法表示二者同时实在。
</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500">
原论文用位置与动量完成更强版本；Maudlin 的简化指出，只要一个可预测但未被波函数编码的物理量，就足以证明不完备。
</div>

---

# 不能发信号，为什么仍然可能不局域

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 信号需要控制

发送者必须能选择某个操作；接收者必须能观察到依选择而变化的结果。随机落点无法组成协议。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 远距作用只需要改变

一个地点的事件立即改变远处物理状态，即使双方无法控制结果、无法编码消息，动力学仍可能非局域。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
无超光速信号只是一个操作性限制；它不能自动证明底层物理过程符合相对论。
</div>

---

# EPR 没有预设决定论

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 常见误读

Einstein 因不喜欢掷骰子而预先要求所有结果确定；EPR 因此从一开始就偷渡了决定论。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 实际逻辑

起点是局域因果与完美相关。若两边没有相互影响，任何残余随机性都会破坏每次严格相反的结果，因此决定性是推出来的。
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500">
输入：无远距作用。中间条件：完美相关。输出：局域理论若要复现这种相关，就必须决定测量结果。
</div>

---

# 完美相关与不完美相关，能推出不同强度

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 完美相关

- Alice 能以概率 1 预测 Bob
- 推出 Bob 有对应实在要素
- 局域理论还必须是决定论的
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 强但不完美的相关

- Alice 的观察仍能改善对 Bob 的预测
- 若 Bob 未被扰动，初始描述仍遗漏信息
- 仍推出不完备，但不能再推出决定论
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
用现代信息论语言说：关键不是必须得到百分之百确定性，而是 Alice 是否在不扰动 Bob 的情况下获得关于 Bob 的 Shannon 信息。
</div>

---
layout: two-cols
---

# 袜子与钞票：相关本身并不神秘

<div class="text-[15px] leading-7 mt-4">

Bell 用 Bertlmann 总穿不同颜色袜子的习惯说明普通反相关：

- 看见右脚是粉色，立刻知道左脚不是粉色
- 撕成两半的钞票分别装入信封也一样
- 观察一边没有改变另一边
- 信息更新之所以可能，是因为最初描述不完备

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
真正怪异的是坚持袜子在被看见前没有颜色，却又要求两边每次都选出不同颜色。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./correlations.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# 守恒律不能替 Copenhagen 补上局部属性

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 经典守恒图景

整体动量始终是所有局部粒子动量之和。总动量为零，意味着两个局部动量相反。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Copenhagen 图景

测量前两个粒子都没有动量，却说联合系统有确定总动量。全局守恒不能再由局部量相加解释。
</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border-l-4 border-orange-500">
若局部动量在测量时才出现，另一边的相反动量也必须同时在遥远处出现。把相关命名为动量守恒，并没有解释这个生成机制。
</div>

---

# 反事实确定性只是决定论的另一个名字

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 决定论理论

给定足够完整的初始条件，可以断言在另一种实验选择下结果本来会是什么。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 非决定论理论

只能列出另一种选择下可能发生什么及其概率，不能指定唯一会发生的结果。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
因此用拒绝 counterfactual definiteness 逃离 EPR，只是换一种术语说自己拒绝决定论；但决定论并不是 EPR 的前提，而是完美相关加局域性的推论。
</div>

---

# Bohr 的回应为什么没有命中论证

<div class="grid grid-cols-3 gap-4 mt-6 text-[14px] leading-6">

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">

### 可用回应 1
明确接受 Alice 的操作会改变 Bob 的物理状态。
</div>

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 可用回应 2
承认波函数不是系统的完整物理描述。
</div>

<div class="p-4 rounded bg-slate-50 border-t-4 border-slate-500">

### 实际回应
回到单粒子位置—动量测量、互补性与可视化等旧主题，没有明确选择两个逻辑出口之一。
</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-[15px] leading-7">
Maudlin 提到一个极具讽刺意味的细节：收录 Bohr 回应的文集把两页排反了，许多读者竟未察觉，因为原文的论证线索本就难以追踪。
</div>

---

# Schrödinger 看见了纠缠的中心地位

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 直接回应 EPR

1935 年的论文 The Present Situation in Quantum Mechanics，也就是著名的猫论文，是受 EPR 刺激而写。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 命名新现象

Schrödinger 在其中引入德语 Verschrankung，后来译作 entanglement，并把它视为 EPR 论证的关键结构。
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500">
EPR 不只是制造一场哲学争论；它把纠缠从数学形式中的特征，推到量子理论物理意义的中心。
</div>

---

# Bell 的反转：用 Einstein 的工具反对 Einstein

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-[13px] leading-5">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500"><b>EPR 起点</b><br><span class="opacity-70">无远距作用</span></div>
<div class="p-4 rounded bg-green-50 border-t-4 border-green-500"><b>EPR 推论</b><br><span class="opacity-70">量子描述不完备</span></div>
<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500"><b>Bell 接手</b><br><span class="opacity-70">考察所有局域补充理论</span></div>
<div class="p-4 rounded bg-red-50 border-t-4 border-red-500"><b>最终反转</b><br><span class="opacity-70">局域理论无法给出正确预测</span></div>

</div>

<div class="mt-8 p-6 rounded-lg bg-red-50 border-l-4 border-red-600 text-[17px] leading-8">
Einstein 用 EPR 论证迫使 Copenhagen 面对不完备或远距作用。Bell 从同一论证出发，却进一步证明：仅靠局域的隐藏结构，不能恢复量子预测。
</div>

<div class="mt-5 text-sm opacity-65">这期停在 Bell 正式论证之前，但已经把他需要的全部逻辑地基铺好。</div>

---

# 核心金句

<div class="text-xs opacity-55 mb-3">以下英文均逐字核对本期字幕；标签说明其所在语境。</div>

<div class="grid grid-cols-2 gap-2.5 text-[12px] leading-4">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">“That's action at a distance.”<div class="text-[10px] opacity-60 mt-1 not-italic">针孔屏上一个点使远处波函数归零</div></div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">“You only ever get one spot.”<div class="text-[10px] opacity-60 mt-1 not-italic">单粒子实验的经验约束</div></div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">“the wave guides the particle.”<div class="text-[10px] opacity-60 mt-1 not-italic">pilot-wave 的最简物理图景</div></div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">“Mathematically nothing at all.”<div class="text-[10px] opacity-60 mt-1 not-italic">经典与量子配置空间的数学差别</div></div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">“Signaling is a red herring.”<div class="text-[10px] opacity-60 mt-1 not-italic">相对论问题不只关于可控通信</div></div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">“quantum description is incomplete, QED.”<div class="text-[10px] opacity-60 mt-1 not-italic">简化的动量版 EPR 结论</div></div>

<div class="p-3 bg-slate-50 border-l-4 border-slate-500 rounded italic">“The answer is no.”<div class="text-[10px] opacity-60 mt-1 not-italic">EPR 是否预设决定论</div></div>

<div class="p-3 bg-pink-50 border-l-4 border-pink-500 rounded italic">“Spooky is just rhetorical.”<div class="text-[10px] opacity-60 mt-1 not-italic">spooky 并非另一类远距作用</div></div>

</div>

---
layout: end
---

# “But, you can't understand Bell.”

<div class="mt-6 text-lg opacity-70">先把 EPR 的前提、推理与误读厘清，Bell 的真正冲击才会显现。</div>

<div class="mt-12 text-sm opacity-50">Tim Maudlin · Theories of Everything</div>
