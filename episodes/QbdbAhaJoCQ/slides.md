---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'General relativity from first principles – Adam Brown'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 从第一性原理理解广义相对论

<div class="text-3xl mt-5 font-semibold">光速上限、弯曲时空与黑洞</div>

<div class="text-xl mt-7 opacity-75">
Adam Brown · Google DeepMind BlueShift 负责人、前物理学家
</div>

<div class="text-base mt-3 opacity-55">
Dwarkesh Podcast · 2026.07 · 约 1 小时 38 分钟
</div>

<div class="mt-12 mx-auto max-w-3xl p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
这不是公式速记，而是一条推理路线：从光速不能被超越，走到重力必须改写我们对直线、时间与能量的理解。
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-4 mt-7 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 从冲突开始
牛顿引力看似能瞬时传递影响，与光速上限正面冲突。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 抓住一个巧合
惯性质量与引力质量相等，成为等效原理的入口。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 重写直线
自由落体不是被力拉弯，而是在弯曲时空里走直线。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 进入黑洞
事件视界、时间膨胀与能量红移由同一组结构控制。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 区分视角
远方观察者与下落者看到不同过程，却没有物理矛盾。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 从思想到证据
水星、日食、恒星轨道、LIGO 与射电望远镜共同验真。

</div>

</div>

---

# 一条跨越 228 年的推理线

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

<div class="text-xs font-bold text-blue-600">1687 · Newton</div>

### 力与反平方律
$ma=F$ 保留下来；引力的瞬时反平方力需要被替换。

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

<div class="text-xs font-bold text-green-600">1905 · Special Relativity</div>

### 光速成为原则
电磁、强核力、弱核力都能容纳有限传播速度，重力仍未纳入。

</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

<div class="text-xs font-bold text-purple-600">1915 · General Relativity</div>

### 重力也不能例外
时空几何承担引力的角色，并决定自由物体如何运动。

</div>

</div>

<div class="mt-8 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left text-sm">
转录概括：Einstein 用约十年把特殊相对论的光速约束推广到重力；关键不是再补一项力，而是改变运动发生的舞台。
</div>

---
layout: two-cols
---

# 牛顿引力的第一处裂缝

<div class="text-sm opacity-60 mb-5">作者概括 · 右图为转录中的太阳—地球思想实验</div>

若太阳的位置发生变化，牛顿的反平方律会让地球处的力立刻变化。

- 影响看起来无需传播时间
- 于是重力可被用作超光速信号
- Einstein 不愿给重力开例外
- 因此需要一种与特殊相对论相容的引力理论

<div class="mt-7 p-4 rounded bg-red-50 border-l-4 border-red-500 text-lg italic">
"Nothing can go faster than light, not even gravity."
<div class="text-xs opacity-60 mt-2 not-italic">— Adam 对广义相对论的口号式概括</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./speed-limit.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 保留什么，替换什么

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 保留：运动定律

- $ma=F$ 仍有意义
- 无外力时，物体仍沿直线运动
- 但力、加速度和直线都要升级定义

</div>

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 替换：引力定律

- 瞬时反平方力不能是最终理论
- 运动物体的电磁学提供先例
- 重力的吸引号与质量角色提示：复制 Maxwell 的做法还不够

</div>

</div>

<div class="mt-8 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
关键转向：问题从怎样修补一项力，变成什么样的时空结构会让牛顿极限在远距离自动出现。
</div>

---

# 等效原理：一个精确得惊人的巧合

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 惯性质量
决定物体抵抗加速度的程度，出现在 $ma=F$ 中。

</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### 引力质量
决定物体被引力拉动的程度，出现在牛顿引力中。

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### 实验事实
两者相等：Newton 时代约到千分之一，Einstein 时代约到十亿分之一，如今到 $10^{-15}$。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left text-sm">
因此真空中的羽毛与砖块同速下落：更重的物体受力更大，同时也更难被加速，两项恰好抵消。
</div>

---

# 水桶实验：惯性力为什么像重力

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 站在地面看
水有向下落的趋势，但水桶转得足够快；水还没离开，桶底已再次来到它下方。

</div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### 跟着水一起看
旋转参考系里出现离心力，把水压向桶底。它的作用强度同样正比于惯性质量。

</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
转录概括：离心力与 Coriolis 力不是新的基本相互作用，而是参考系偏离直线运动时出现的惯性力。引力质量与惯性质量相等，使 Einstein 得以追问重力是否也属于这一类。
</div>

---
layout: two-cols
---

# 重力也是惯性力？

<div class="text-sm opacity-60 mb-5">作者概括 · 右图把等效原理压缩成一条推理链</div>

如果惯性力的荷天然等于惯性质量，而重力的荷也等于惯性质量，那么：

- 引力质量与惯性质量相等不再是偶然
- 自由落体者应当没有局部重力感
- 坐在椅子上的人反而在偏离自然轨迹
- 代价是重新定义直线

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-base italic">
"that gravity itself is an inertial force?"
<div class="text-xs opacity-60 mt-2 not-italic">— Adam 复述 Einstein 在 1907 年的核心问题</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./equivalence-leap.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 谁真的在走直线？

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 坐在椅子上
高度不变，看起来没有运动；但椅子持续阻止身体自由下落，因此这条世界线不是自然直线。

</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 抛起的粉笔
高度—时间图上画出抛物线；在释放到接住之间，它没有承受非引力外力，因此走的是时空直线。

</div>

</div>

<div class="mt-8 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
直线不再由纸面形状决定，而由时空几何决定。自由落体就是广义相对论里的惯性运动。
</div>

---
layout: two-cols
---

# 地图类比：弯曲会欺骗平面

<div class="text-sm opacity-60 mb-5">转录故事 · San Francisco 到 London 的航线</div>

在平面航线图上，经过 Greenland 的路线像是绕远；放回球面，它接近最短路径。

- 曲面上的直线称为测地线
- 把曲面压到平面必然产生扭曲
- 同理，把弯曲时空假装成平直时空，会误判自由落体的轨迹

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-lg italic">
"In fact, you are in a curved spacetime."
<div class="text-xs opacity-60 mt-2 not-italic">— Adam，从地图类比回到引力</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./curved-straight.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 场方程：几何在左，物质在右

$$
G_{\mu\nu}=\frac{8\pi G}{c^4}T_{\mu\nu}
$$

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 左侧 · 时空曲率
$G_{\mu\nu}$ 概括时空如何弯曲；平直时空时相应曲率为零。

</div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### 右侧 · 质量与能量
$T_{\mu\nu}$ 是质量的相对论推广，包含各种质量与能量形式。

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
转录概括：方程不是直接给出一项引力，而是把物质分布翻译成时空几何。
</div>

---
layout: two-cols
---

# 广义相对论的一句话循环

<div class="text-sm opacity-60 mb-5">作者概括 · 右图把场方程与测地线连接起来</div>

第一步，质量与能量决定时空如何弯曲。

第二步，弯曲后的时空重新定义直线。

第三步，自由物体沿这些直线运动；若坚持用平直时空解释，就会把几何效应看成引力。

<div class="mt-7 p-4 rounded bg-green-50 border-l-4 border-green-500 text-xl italic">
"matter tells spacetime how to curve."
<div class="text-xs opacity-60 mt-2 not-italic">— Adam 对 Einstein 场方程的上半句概括</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./matter-curvature-motion.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 一套理论跨越多少尺度

<div class="grid grid-cols-4 gap-4 mt-8 text-left">

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 地面
苹果、粉笔与电梯中的自由落体。

</div>

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 太阳系
水星轨道与光线经过太阳时的偏折。

</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 星系
恒星围绕不可见致密天体运行，银河尺度动力学被描述。

</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 宇宙
时空整体的膨胀，以及宇宙可能的命运。

</div>

</div>

<div class="mt-9 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
Newton 统一了天与地；广义相对论保留这种统一，并把适用范围扩到黑洞和整个宇宙。
</div>

---

# Schwarzschild：战壕里的精确解

<div class="grid grid-cols-3 gap-5 mt-7 text-left">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### Einstein 的预期
场方程过于复杂，可能只能靠近似求解。

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### 意外的求解者
一战中的 Prussian 炮兵军官 Schwarzschild，在计算炮弹轨迹之余研究新方程。

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### 几个月内
他写出中心质量周围时空的精确解；后来人们才理解它描述了黑洞。

</div>

</div>

<div class="mt-5 p-4 rounded bg-red-50 border-l-4 border-red-500 text-left text-sm">
真正困难的不只是求出解，而是解释事件视界。包括 Einstein 在内的物理学家为此困惑了约半个世纪。
</div>

---

# 黑洞先以逃逸速度露出影子

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 从 Newton 出发
地球逃逸速度约 **11 km/s**；天体越重、越紧凑，逃逸速度越高。

18 世纪的 Michell 与 Laplace 已追问：若逃逸速度达到光速，会发生什么？

</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 临界半径

令逃逸速度等于 $c$，得到：

$r=\dfrac{2GM}{c^2}$

Newton 式推理理由并不完整，但这个因子 2 恰好与 Schwarzschild 半径一致。

</div>

</div>

---

# 放下砖块：能量守恒逼出新物理

<div class="grid grid-cols-3 gap-4 mt-7 text-left">

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### 1 · 缓慢下降
用绳和滑轮把质量为 $m$ 的砖块降向中心天体，把引力势能留在远方做功。

</div>

<div class="p-5 rounded bg-yellow-50 border-t-4 border-yellow-500">

### 2 · 越来越紧凑
Newton 近似给出的提取比例约为 $GM/(rc^2)$；半径越小，比例越高。

</div>

<div class="p-5 rounded bg-red-50 border-t-4 border-red-500">

### 3 · 悖论
若 $r\le GM/c^2$，近似式会声称可取出超过砖块全部静质量能量，暗示近似必然失效。

</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-left text-sm">
广义相对论的解法不是让近距离重力变弱，而是让保持静止所需的加速度在事件视界处发散；砖块最终会从手中被夺走。
</div>

---
layout: two-cols
---

# 黑洞外的三个关键半径

<div class="text-sm opacity-60 mb-5">作者概括 · 右图按 Schwarzschild 坐标标出三个区域</div>

<div class="space-y-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>r &gt; 3GM/c²</strong>：角动量通常帮助维持轨道，远处行为接近 Newton。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>2GM/c² &lt; r &lt; 3GM/c²</strong>：轨道运动反而增加下落趋势，无法靠弹道轨道再次逃出。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>r ≤ 2GM/c²</strong>：越过事件视界后，所有未来路径都指向奇点。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./horizon-zones.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# Schwarzschild 解的三个同源公式

<div class="grid grid-cols-3 gap-4 mt-7 text-left text-sm">

<div class="p-5 rounded bg-red-50 border-t-4 border-red-500">

### 静止加速度
$a=\dfrac{GM}{r^2\sqrt{1-2GM/(c^2r)}}$
越靠近视界，保持静止越困难；在视界处发散。

</div>

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### 时间膨胀
$d\tau=dt\sqrt{1-2GM/(c^2r)}$
深处时钟相对远方走得更慢。

</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### 能量提取
$\eta=1-\sqrt{1-2GM/(c^2r)}$
把物体降向视界，理论上可把提取比例推近 100%。

</div>

</div>

<div class="mt-7 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-left text-sm">
三个公式都围绕同一个平方根因子展开；弱场极限把它 Taylor 展开后，第一项回到 Newton 结果。
</div>

---

# 为什么转得更快也救不了你

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 远离黑洞
轨道角动量产生离心效应，像国际空间站绕地球一样，能够抵消一部分向内趋势。

</div>

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 接近黑洞
广义相对论中所有能量都参与引力。轨道动能越大，也带来更强的向内耦合；进入 $3GM/c^2$ 后，这一项占上风。

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
转录概括：黑洞并不会无条件吸走远方一切；远处可以稳定绕行。真正的不可逆边界是事件视界。
</div>

---
layout: two-cols
---

# 时间、红移与能量

<div class="text-sm opacity-60 mb-5">作者概括 · 右图连接时钟、光的频率与能量</div>

靠近黑洞的观察者向远方发送光：

- 远方看见深处时钟变慢
- 光的振荡频率随之降低，发生红移
- 单个光子的能量也降低
- 反向发送时则发生蓝移

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-base italic">
"Time passes slower down here than it does up here."
<div class="text-xs opacity-60 mt-2 not-italic">— Adam，对重力时间膨胀的直观总结</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./time-redshift.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 时间膨胀早已进入工程系统

<div class="grid grid-cols-3 gap-5 mt-7 text-left">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### Harvard · 1950s
物理系把两台原子钟放在楼内不同高度，观察到高处的钟更快。

</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### GPS · 现在
地面时钟相对轨道原子钟更慢；系统必须扣除这一差异，否则定位会持续漂移。

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### 两种时间膨胀
特殊相对论来自相对运动；重力时间膨胀来自处在不同引力势。两种效应可以叠加。

</div>

</div>

<div class="mt-8 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">
黑洞把效应放大到极端，GPS 则证明同一结构在日常弱场环境里也必须被认真计算。
</div>

---

# 砖块可以交出多少静质量能量？

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### Newton 近似的误导
继续把 $GM/(rc^2)$ 外推，会得到超过 100% 的荒谬结果，因为弱场近似已越界。

</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### GR 的精确上限
精确比例 $1-\sqrt{1-2GM/(c^2r)}$ 随着砖块逼近视界趋向 100%，却不会越过 100%。

</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
把砖块缓慢降到视界上方，远方滑轮系统原则上可获得几乎全部 mc²；松手后砖块落入黑洞。
</div>

---
layout: two-cols
---

# 能源阶梯：重力触及其余反应碰不到的部分

<div class="text-sm opacity-60 mb-5">转录数字 · 右图按可提取静质量能量比例排列</div>

- 化学键约 $10^{-10}$：只改动原子间电磁结合
- 裂变约 $10^{-3}$，聚变约 $10^{-2}$：触及核结合能
- 质子与中子的静质量仍占绝大部分
- 黑洞引力原则上可把比例推近 100%

<div class="mt-7 p-4 rounded bg-green-50 border-l-4 border-green-500 text-lg italic">
"It is the most efficient possible power plant"
<div class="text-xs opacity-60 mt-2 not-italic">— Adam，谈黑洞作为极限能量提取装置</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./energy-ladder.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 掉入黑洞：两个视角都成立

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 远方观察者
下落者先加速，随后因时间膨胀看起来越来越慢；发出的光不断红移，最终从红色淡入黑暗。观察者永远看不到其穿越视界。

</div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### 自由下落者
自己的钟始终每秒走一秒；穿越大黑洞的视界时可以没有局部异常，真正致命的是更深处的奇点与潮汐力。

</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
差别来自观察与坐标，而非两个互相矛盾的事件版本。事件视界是关于未来还能否逃出的全局边界。
</div>

---
layout: two-cols
---

# 越过视界：判决已下，死亡未到

<div class="text-sm opacity-60 mb-5">作者概括 · 右图区分事件视界与奇点</div>

- 大黑洞的视界处潮汐力可以很小
- 越过视界后，没有火箭能改变必须走向奇点的未来
- 黑洞越大，从视界到奇点可经历的时间越长
- 死亡发生在强潮汐力接近奇点时，不是必然发生在视界本身

<div class="mt-7 p-4 rounded bg-red-50 border-l-4 border-red-500 text-xl italic">
"You are doomed, but you are not dead."
<div class="text-xs opacity-60 mt-2 not-italic">— Adam，区分不可逃脱与即时毁灭</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./fall-perspectives.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 黑洞：从数学解到真实天体

<div class="grid grid-cols-3 gap-5 mt-7 text-left">

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### 理论：Penrose 与 Hawking
黑洞形成不是精细调参的病态特例，而是广义相对论在一般初始条件下的普遍结果。

</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 轨道：Sagittarius A*
数十年的恒星轨迹指向银河中心一个极重、极暗、极紧凑的天体。

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### 信号：LIGO 与 EHT
引力波记录黑洞并合；全球射电望远镜看到落入黑洞的物质发出辐射。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left text-sm">
证据并非单一照片：动力学、时空振动与吸积辐射从不同机制指向同一类对象。
</div>

---
layout: two-cols
---

# 黑洞证据的三角互证

<div class="text-sm opacity-60 mb-5">转录事实 · 右图按观测方式而非仪器品牌组织</div>

**看引力效应**：恒星绕 Sagittarius A* 运行，暴露不可见中心质量。

**感受时空振动**：LIGO 在 2015 年末记录到约两颗 30 倍太阳质量黑洞的并合信号，源距约 16 亿光年。

**看吸积辐射**：Event Horizon Telescope 汇聚全球射电望远镜，分辨黑洞周边发亮物质。

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-lg italic">
"we not only saw black holes, we felt them."
<div class="text-xs opacity-60 mt-2 not-italic">— Adam，谈 LIGO 打开的观测通道</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./evidence-triangle.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 日食验证：三次远征

<div class="text-sm opacity-60 mb-5">转录故事 · 三次远征与一次预测修正</div>

- **1911 · Argentina**：云层遮蔽，未能测量
- **Crimea · Krupp 资助**：一战爆发，德国队员被拘留
- 这些失败反而避免了过早检验 Einstein 当时仍错误的预测
- **1919 · Eddington**：英国远征确认偏折量符合修正后的广义相对论

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
历史意义：一场英国实验确认德国来源的理论，也成为战后和解叙事的一部分，并把 Einstein 推向全球知名。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./eclipse-timeline.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 为什么光线偏折是决定性检验

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 已知异常：Mercury
广义相对论精确解释了 Newton 体系下水星轨道的偏差，但这个答案在理论出现前已经知道。

</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 新预测：光线偏折
Newton 式计算也给出偏折；完整广义相对论给出的结果是它的两倍。预先给出不同数值，再由日食观测区分，证据力更强。

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xl italic">
"you actually get double the Newtonian answer."
<div class="text-xs opacity-60 mt-2 not-italic">— Adam，对两套理论预测差异的总结</div>
</div>

---

# 从 Einstein 的孤独推理，到 AI 科学

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 理论搜索能走多远
广义相对论只依赖少量经验线索，却获得巨大解释力。Adam 提醒，这更像历史极端值；若一致理论有无限多个，单靠一致性与美感无法选出正确答案。

</div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### AI 的另一种价值
大量模型可以并行探索低概率分支；更重要的是，它们也可能把机器找到的证明与理论压缩成人类可理解的解释。

</div>

</div>

<div class="mt-8 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-lg italic">
"we also expect these large language models to be superhuman explainers."
<div class="text-xs opacity-60 mt-2 not-italic">— Adam，对机器证明不会必然导致人类理解断裂的判断</div>
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">全部逐字回查本集转录；标签说明语境，不改写引文。</div>

<div class="grid grid-cols-2 gap-3 text-left text-[13px] leading-snug">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Nothing can go faster than light, not even gravity."
<div class="text-xs opacity-60 mt-1 not-italic">— 光速约束</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"that gravity itself is an inertial force?"
<div class="text-xs opacity-60 mt-1 not-italic">— 等效原理的跳跃</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"In fact, you are in a curved spacetime."
<div class="text-xs opacity-60 mt-1 not-italic">— 重新定义直线</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"matter tells spacetime how to curve."
<div class="text-xs opacity-60 mt-1 not-italic">— 场方程</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Time passes slower down here than it does up here."
<div class="text-xs opacity-60 mt-1 not-italic">— 重力时间膨胀</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"You are doomed, but you are not dead."
<div class="text-xs opacity-60 mt-1 not-italic">— 穿越事件视界</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"It is the most efficient possible power plant"
<div class="text-xs opacity-60 mt-1 not-italic">— 黑洞能量提取</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"We're extremely confident at this stage that black holes exist."
<div class="text-xs opacity-60 mt-1 not-italic">— 多通道证据</div>
</div>

</div>

---
layout: end
---

# "Frankly, our universe should be honored"

<div class="mt-7 text-xl opacity-70">— Adam Brown</div>

<div class="mt-12 text-base opacity-55">
从一只旋转的水桶，到整个宇宙的起源与命运：<br>广义相对论的美，来自同一组原则在所有尺度上保持一致。
</div>
