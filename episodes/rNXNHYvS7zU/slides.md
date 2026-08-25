---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Physicist: "It Was Hiding in Plain Sight"'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
coverDate: '2026-07'
themeConfig:
  paginationX: r
  paginationY: t
  paginationPagesDisabled: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
---

<div class="mt-16 text-sm tracking-[0.28em] uppercase text-red-600 font-semibold">Theories of Everything · Philip Mannheim</div>

# Physicist:<br>It Was Hiding in Plain Sight

<div class="mx-auto mt-6 max-w-3xl text-xl leading-8 opacity-75">
共形引力如何试图用一套对称性，同时重写暗物质、宇宙学常数与量子引力
</div>

<div class="mt-10 flex justify-center gap-3 text-sm">
  <span class="px-4 py-2 rounded-full bg-blue-50 border border-blue-200">约 153 分钟</span>
  <span class="px-4 py-2 rounded-full bg-purple-50 border border-purple-200">理论物理</span>
  <span class="px-4 py-2 rounded-full bg-red-50 border border-red-200">非主流重力方案</span>
</div>

<div class="mt-14 text-sm opacity-55">PodDeck · 2026-07</div>

---

# Why this episode matters

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-[14px] leading-6">

<div class="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500">

### 拆开爱因斯坦理论
一般协变、度规描述重力与具体场方程，并不是同一个逻辑层次。
</div>

<div class="p-4 rounded-lg bg-purple-50 border-l-4 border-purple-500">

### 从对称性重选引力
以局域共形对称和无量纲耦合为起点，得到四阶 Weyl 引力。
</div>

<div class="p-4 rounded-lg bg-green-50 border-l-4 border-green-500">

### 不添加暗物质晕
把局部势与宇宙整体的线性、二次势共同放进星系动力学。
</div>

<div class="p-4 rounded-lg bg-orange-50 border-l-4 border-orange-500">

### 直面 ghost
用 PT/CPT 对称与不同的对偶空间，重新解释负范数问题。
</div>

<div class="p-4 rounded-lg bg-red-50 border-l-4 border-red-500">

### 宇宙没有奇点
负曲率方案主张有限的早期尺度、持续加速，并且不需要暴胀。
</div>

<div class="p-4 rounded-lg bg-yellow-50 border-l-4 border-yellow-500">

### 保留可证伪边界
CMB 涨落、大尺度结构和非渐近平坦透镜仍是未完成的关键检验。
</div>

</div>

<div class="mt-5 text-xs opacity-55">阅读说明：英文引号内均为逐字字幕；其余中文为作者据本期访谈整理，不代表学界共识。</div>

---

# 这不是一个补丁，而是一条连续推理链

<div class="grid grid-cols-5 gap-3 mt-7 text-center text-[13px] leading-5">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500"><b>1 · 缺口</b><br><span class="opacity-70">太阳系只验证了特定尺度上的解</span></div>
<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500"><b>2 · 原则</b><br><span class="opacity-70">局域共形对称选择 Weyl² 作用量</span></div>
<div class="p-4 rounded bg-green-50 border-t-4 border-green-500"><b>3 · 星系</b><br><span class="opacity-70">1/r 与 r 共同产生近似平坦曲线</span></div>
<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500"><b>4 · 量子</b><br><span class="opacity-70">四阶传播子要求重建 Hilbert 空间</span></div>
<div class="p-4 rounded bg-red-50 border-t-4 border-red-500"><b>5 · 检验</b><br><span class="opacity-70">用涨落、结构与透镜决定成败</span></div>

</div>

<div class="mt-8 p-5 rounded-lg bg-slate-50 border border-slate-200 text-lg leading-8">
Mannheim 的核心主张是：先固定对称性与量子一致性，再看经典极限和天文数据；不要先假定 Einstein 场方程在所有尺度都不变。
</div>

<div class="mt-5 grid grid-cols-2 gap-5 text-sm text-left">
<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500"><b>本 deck 做什么</b>：忠实重建访谈中的论证与数据口径。</div>
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500"><b>本 deck 不做什么</b>：不把替代理论的自述写成已获验证的结论。</div>
</div>

---

# 爱因斯坦的两步，确定性并不相同

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7 text-left">

<div class="p-5 rounded-lg bg-blue-50 border-l-4 border-blue-500">

### 几何框架

- 任意坐标变换下，物理规律保持协变
- 度规与联络进入粒子的测地线方程
- Riemann 张量非零，意味着曲率不能被坐标变换消去
- 惯性质量与引力质量以相同权重进入
</div>

<div class="p-5 rounded-lg bg-orange-50 border-l-4 border-orange-500">

### 动力学选择

- 还需要一条方程决定度规本身
- Einstein 以 Poisson 方程为经典起点，构造二阶场方程
- 太阳系检验支持相应解，却不自动证明它在所有尺度唯一
- Mannheim 把这里视为可重新打开的选择点
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">
关键区分：一般协变规定方程如何变换；场方程规定自然选择哪一种几何。
</div>

---
layout: two-cols
---

# 一般相对论不是单一黑盒

<div class="text-[15px] leading-7 mt-4 text-left">

Mannheim 接受 Einstein 方案中三件基础结构：

- 一般坐标协变
- 度规作为引力场
- 粒子沿测地线响应几何

他挑战的是最下层：<b>决定度规的方程是否必须是二阶 Einstein 方程。</b>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm text-left">
如果不同方程在太阳系给出同一个外部解，那么短程成功本身不足以排除长程出现额外项。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./gravity-layers.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 从二阶到四阶：不唯一性藏在哪里

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded-lg bg-blue-50 border-2 border-blue-200">
<div class="text-2xl font-bold text-blue-700">∇²φ = ρ</div>
<div class="mt-3 text-lg">φ ∼ 1/r</div>
<div class="mt-3 text-xs opacity-65">熟悉的 Newton/Poisson 结构</div>
</div>

<div class="p-5 rounded-lg bg-purple-50 border-2 border-purple-200">
<div class="text-2xl font-bold text-purple-700">∇⁴φ = ρ</div>
<div class="mt-3 text-lg">φ ∼ 1/r + r</div>
<div class="mt-3 text-xs opacity-65">短程保留 1/r，长程多出线性项</div>
</div>

<div class="p-5 rounded-lg bg-orange-50 border-2 border-orange-200">
<div class="text-2xl font-bold text-orange-700">∇⁶φ = ρ</div>
<div class="mt-3 text-lg">φ ∼ 1/r + r + r³</div>
<div class="mt-3 text-xs opacity-65">更高阶继续允许额外解</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left leading-7">
这些增长项在太阳系尺度可以极小，却会在星系尺度被放大。暗物质问题因此也可能被解释为：我们把短程方程无条件外推到了长程。
</div>

---
layout: two-cols
---

# 同一个短程极限，不同的长程物理

<div class="text-[15px] leading-7 mt-4 text-left">

这张图是整期访谈最重要的数学直觉：

- 二阶与四阶理论都能容纳 $1/r$
- 四阶理论额外容纳随 $r$ 增长的解
- 太阳系只强力约束左侧的共同部分
- 星系旋转曲线才开始区分右侧的额外部分

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm text-left">
作者概括：问题不是 Einstein 解错了，而是同一观测解未必只来自 Einstein 方程。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./order-potentials.excalidraw" class="w-[465px]" :darkMode="false" :background="false" />
</div>

---

# 量子引力的目标，也可能一开始就定窄了

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 通常的路线

先把 Einstein 引力当作唯一正确的经典理论，再寻找一个高能量子理论，使它在低能极限回到 Einstein 方程。

难点是 Newton 常数带有量纲，微扰量子化不可重整化；高阶发散需要不断加入新反项。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Mannheim 的路线

先要求候选引力像电弱强相互作用一样具有无量纲耦合、可重整化，再检查它是否在已检验尺度上回到正确的经典解。

四阶 Weyl² 作用量因此不是修饰项，而是量子一致性驱动的起点。
</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
他的反事实问题是：若量子场论早于 Einstein 引力成熟，物理学家是否还会从一个不可重整化的经典作用量开始？
</div>

---

# 共形对称为何会同时触及质量与重力

<div class="grid grid-cols-3 gap-4 mt-6 text-[14px] leading-6 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 几何含义
局域缩放改变长度，却保持角度与光锥结构；Weyl 张量平方给出相应的局域不变量。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 量子含义
四阶度规作用量的耦合常数无量纲，改善高动量传播子的紫外行为。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 质量含义
基本作用量不放入显式质量尺度；质量由真空中的动态对称破缺产生。
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-left">
<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500"><b>条件一</b>：理论处在重整化群固定点，使量子修正以受控方式组织。</div>
<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500"><b>条件二</b>：不存在基本标量质量项；Higgs 应表现为动态束缚态。</div>
</div>

---
layout: two-cols
---

# 质量从真空进入，而非写进作用量

<div class="text-[15px] leading-7 mt-4 text-left">

Mannheim 的动态图景分成三步：

1. 基本方程保持共形对称，不含显式质量尺度
2. 真空选择打破对称性，形成长程有序
3. 费米子与 Higgs 类束缚态获得动态质量

这样，质量属于所处的量子态，而不是基本算符的固定参数。

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm text-left">
这也解释了他为什么把复合 Higgs、层级问题、宇宙学常数和共形引力视为同一问题链。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./dynamic-mass.excalidraw" class="w-[465px]" :darkMode="false" :background="false" />
</div>

---

# 基本 Higgs，还是动态 Higgs？

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 基本标量

- 双阱势中的 $-\mu^2\phi^2$ 显式放入尺度
- 标量自能产生严重的二次发散
- 需要额外机制保护 125 GeV 附近的质量
- 作用量层面已经破坏尺度不变性
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 动态束缚态

- 基本拉格朗日量不含标量质量尺度
- 真空的动态序参量生成质量
- Higgs 与 Goldstone 模式由同一机制出现
- 层级问题被改写为真空动力学问题
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-center text-lg">
访谈中的比喻：若 Higgs 是基本粒子，它给万物质量；若它是动态的，则真正给万物质量的是<b>真空</b>。
</div>

---

# 宇宙学常数：相变释放的能量去了哪里？

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-700">TeV</div>
<div class="mt-3 text-sm">电弱相变至少涉及的能标</div>
</div>

<div class="p-5 rounded bg-red-50 border-2 border-red-200">
<div class="text-4xl font-bold text-red-700">10⁶⁰</div>
<div class="mt-3 text-sm">访谈估算：相变真空能与观测上限的量级差</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-700">10¹²⁰</div>
<div class="mt-3 text-sm">若把估算推至 Planck 尺度，问题更严重</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left leading-7">
Mannheim 的主张是：共形理论要求能动张量的迹为零，因此动态生成的宇宙学常数不能独立于物质项任意变大；同一个约束还把宇宙学常数与其他能量密度联系起来。
</div>

---

# 1980 年代的下注：先看自然是否喜欢它

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 动机

Mannheim 与 Demosthenes Kazanas 想用共形对称控制宇宙学常数，于 1987–1988 年写下 Weyl 张量平方作用量。

同事反复提醒：四阶理论带有 ghost，不可能是幺正量子理论。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 做法

当时没有现成软件直接给出 Weyl 张量及其四阶方程。他们用 Maxima 自己搭工具，花四个月确认方程。

真正求出静态球对称解，却只用了一下午。
</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 italic text-xl">
“one afternoon to solve them.”
<div class="text-xs opacity-60 mt-2 not-italic">— Mannheim 回忆四个月推导之后的求解</div>
</div>

---
layout: two-cols
---

# 四个月写方程，一下午看见新势

<div class="text-[15px] leading-7 mt-4 text-left">

静态球对称解给出两项：

$$\phi(r)=-\frac{\beta}{r}+\gamma r$$

- $1/r$ 恢复太阳系熟悉的 Newton 势
- $r$ 是四阶方程允许的新增长项
- 两者一降一升，立即提示平坦旋转曲线

</div>

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm text-left">
发现的戏剧性不在复杂公式，而在新解的物理含义一眼可见。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./discovery-timeline.excalidraw" class="w-[465px]" :darkMode="false" :background="false" />
</div>

---

# 平坦旋转曲线需要的不是平坦势

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Newton 项

$1/r$ 势随半径减弱，对应 Kepler 式下降趋势。若它在所有尺度都是唯一贡献，星系外缘速度也应下降。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 线性项

$r$ 势随半径增强。它不需要自己是平的；只需补偿 Newton 项的下降，合成结果就能接近平坦。
</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 text-center text-xl">
下降项 + 上升项 → 近似恒定的轨道速度
</div>

<div class="mt-5 text-sm opacity-65">这是共形引力解释星系旋转曲线的最小机制，不需要在每个星系外包一层新的暗物质晕。</div>

---
layout: two-cols
---

# 一降一升，平均才会变平

<div class="text-[15px] leading-7 mt-4 text-left">

图中三条线表达的是趋势，而不是逐点拟合：

- 蓝线：局部 Newton 势贡献逐渐减弱
- 橙线：线性势贡献逐渐增强
- 绿线：两者在观测半径内形成近似平台

这个结构把暗物质问题从缺少什么粒子，改写为是否遗漏了引力方程的长程解。

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm text-left">
注意：理论仍需用真实光度分布、气体质量和宇宙学参数完成定量拟合。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./rotation-balance.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 一个星系同时受到局部与宇宙整体影响

<div class="grid grid-cols-2 gap-5 mt-5 text-[14px] leading-6 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 局部 $1/r$
来自星系内部可见物质，保留熟悉的 Newton 短程行为。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 局部线性项
同一局部源在四阶方程中还产生随 $r$ 增长的贡献。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 全局线性项
负曲率宇宙在星系静止系中表现为一个普适线性势，把远方宇宙带入局部动力学。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 全局二次项
宇宙学涨落给出普适的负二次势；在足够大半径上压低速度并限定星系尺寸。
</div>

</div>

<div class="mt-6 p-5 rounded bg-slate-50 border border-slate-200 text-lg">
Mannheim 把这理解为 Mach 式局部—整体联系：星系并非在渐近平坦、与外界隔绝的背景中运动。
</div>

---

# 138 个星系：参数经济性是他的核心证据

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-5xl font-bold text-green-700">138</div>
<div class="mt-3 text-sm">访谈中报告的星系旋转曲线样本</div>
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-5xl font-bold text-blue-700">固定</div>
<div class="mt-3 text-sm">同一组普适线性/二次宇宙学参数</div>
</div>

<div class="p-5 rounded bg-red-50 border-2 border-red-200">
<div class="text-5xl font-bold text-red-700">276</div>
<div class="mt-3 text-sm">按每个暗晕两个参数计算的额外参数数</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left leading-7">
他的论证不是仅凭一条曲线说故事，而是强调跨星系共用参数。这里的 138 与 276 是嘉宾在访谈中的口径；本 deck 未独立复核原始拟合数据集。
</div>

---

# 最有说服力的故事，来自一次失败

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500"><b>预测</b><br><span class="text-xs">线性项最终应让曲线继续上升</span></div>
<div class="p-4 rounded bg-red-50 border-t-4 border-red-500"><b>失败</b><br><span class="text-xs">约 200 个外缘数据点没有上升</span></div>
<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500"><b>剩余项</b><br><span class="text-xs">理论中还有一个普适二次势</span></div>
<div class="p-4 rounded bg-green-50 border-t-4 border-green-500"><b>结果</b><br><span class="text-xs">一个参数同时压低这 200 个点</span></div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-left text-[15px] leading-7">
<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500"><b>有限尺寸</b>：负二次项继续增大时，速度平方会走向零，因此束缚星系不能无限延伸。</div>
<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500"><b>检验价值</b>：这一项在看见失败前已经存在于理论里，因而比事后为每个星系单独加参数更受约束。</div>
</div>

---

# 暗物质被替换成了什么？

<div class="mt-7 p-7 rounded-xl bg-purple-50 border-2 border-purple-200 text-2xl italic leading-10">
“and it's been hiding in plain sight.”
<div class="mt-3 text-sm opacity-60 not-italic">— Mannheim 对 missing mass 的总结</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-[14px] leading-6">
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500"><b>没有删除可见物质</b><br>星系内部光度与气体仍提供局部源。</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500"><b>没有添加未知晕</b><br>缺失的动力学效应由方程的长程项承担。</div>
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500"><b>加入宇宙整体</b><br>远方可见宇宙与宇宙学涨落进入局部旋转曲线。</div>
</div>

<div class="mt-6 text-sm opacity-65">这只是共形引力对星系尺度暗物质问题的解释；它不能自动替代结构形成、CMB 与星系团透镜检验。</div>

---

# 负曲率把宇宙学推向持续加速

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-700">k &lt; 0</div>
<div class="mt-3 text-sm">负空间曲率像凹透镜，推动光线发散</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-700">−1 &lt; q₀ &lt; 0</div>
<div class="mt-3 text-sm">理论给减速参数设置的区间</div>
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-700">q₀ = −0.37</div>
<div class="mt-3 text-sm">访谈报告的一参数超新星拟合结果</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-left leading-7">
标准图景让宇宙在晚期才转入加速；Mannheim 的背景宇宙从始至终都加速，因此高红移距离关系会逐渐偏离标准模型，构成直接可检验差异。
</div>

---
layout: two-cols
---

# 无 Big Bang：用有限最小尺度避开奇点

<div class="text-[15px] leading-7 mt-4 text-left">

在 Mannheim 的共形宇宙学中，引力方程中物质项的有效符号改变：

- 尺度因子不必回到零
- 早期宇宙保留有限半径
- 没有 Big Bang 奇点
- horizon 与 flatness 问题不再需要暴胀来修补

</div>

<div class="mt-5 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm text-left">
这是一套候选宇宙学的主张；是否能同时复现 CMB 峰、大尺度结构和元素丰度，仍需完整计算。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./no-singularity.excalidraw" class="w-[465px]" :darkMode="false" :background="false" />
</div>

---

# 标准宇宙学的压力，并不等于替代理论已经胜出

<div class="grid grid-cols-3 gap-4 mt-6 text-[14px] leading-6 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### Hubble tension
访谈列出约 68 km/s/Mpc 的 CMB 推断与约 73 km/s/Mpc 的距离阶梯结果；Mannheim 认为差距严肃，但尚不足以单独推翻标准模型。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 动态暗能量迹象
若暗能量随红移变化，常数本身为何没有达到巨大真空能量级的问题仍然存在，甚至更难处理。
</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">

### 他自己的缺口
背景加速曲线只是第一步；涨落方程必须复现 CMB 与结构形成，否则整套方案仍不完整。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-lg">
真正的比较不是谁能指出对方的问题，而是谁能用同一组方程覆盖更多独立数据。
</div>

---

# Ghost 问题：四阶理论最危险的一关

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 传统诊断

四阶传播子可写成两个二阶传播子的差。中间的负号常被解释为负范数态，意味着概率为负、理论非幺正。

这也是 Mannheim 的同事早年反对共形引力的主要理由。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Bender–Mannheim 转向

2008 年 Mannheim 听 Carl Bender 讲 Lee 模型的 PT 对称处理；二人到 Los Alamos，用三天识别出共形引力并非 Hermitian 理论，而是 PT 对称理论。

问题从消灭一个态，变成重新定义它的对偶空间。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic text-xl">
“You're in the wrong Hilbert space.”
<div class="text-xs opacity-60 mt-2 not-italic">— 对负范数诊断的核心反驳</div>
</div>

---
layout: two-cols
---

# 改变内积，ghost 诊断随之改变

<div class="text-[15px] leading-7 mt-4 text-left">

标准量子力学常把 bra 取成 ket 的 Hermitian 共轭；Bender 与 Mannheim 主张这不是最一般选择。

- 非 Hermitian Hamiltonian 仍可能有实谱
- 反线性 PT/CPT 对称允许实本征值或共轭复数对
- bra 应取 PT/CPT 对偶，而非默认 Hermitian 对偶
- 正确内积恢复概率守恒与幺正性

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm text-left">
他们的结论不是把传播子中的负号删掉，而是说从 C-number 传播子不能反推出 Hilbert 空间。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./pt-hilbert.excalidraw" class="w-[465px]" :darkMode="false" :background="false" />
</div>

---

# Hermiticity 是充分条件，不是最终物理原则

<div class="grid grid-cols-3 gap-4 mt-6 text-[14px] leading-6 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 实谱
Hermitian Hamiltonian 保证实本征值；但具有反线性对称的非 Hermitian Hamiltonian 也可能拥有实谱。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 概率
Hermiticity 保证标准内积下概率守恒；若内积改用 CPT 对偶，概率仍可守恒。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 幺正
真正要保住的是随时间演化的总概率，而不是把某一种数学表示当成唯一物理定义。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-lg leading-8">
作者概括：这条路线把量子引力的禁区从高阶方程不允许，改成高阶方程要求一个不同的量子内积结构。
</div>

---

# 有引力波，却没有可观测的 graviton 粒子

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 经典层面

共形引力仍是协变的度规理论，因此存在传播的引力辐射解。这里并未否认经典引力波。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 量子层面

Mannheim 主张相应激发是零范数态，而非正范数的可观测粒子，因此量子化引力辐射不必产生通常意义上的 graviton。
</div>

</div>

<div class="mt-7 p-5 rounded bg-red-50 border-l-4 border-red-500 italic text-2xl">
“It's neither. It doesn't exist.”
<div class="text-xs opacity-60 mt-2 not-italic">— 回答 graviton 是复合还是基本粒子</div>
</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
明确标注为推测：他进一步猜想波函数坍缩也许与不可观测的零范数引力激发有关；访谈没有给出完整机制或实验验证。
</div>

---

# 衰变与共振：增长模和衰减模必须成对

<div class="grid grid-cols-2 gap-6 mt-6 text-[15px] leading-7 text-left">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 复能量成对

反线性对称要求复本征值以 $E\pm i\Gamma$ 成对出现。一个模随时间衰减，另一个对应产物的增长；完整系统的总概率保持不变。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 时间延迟与提前

通常共振带来约 $\hbar/\Gamma$ 的时间延迟；共轭模带来时间提前。两者合并后，谱线仍形成一个峰，却不必服从单一衰减模的时间解释。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-lg">
这部分把 PT/CPT 结构从抽象内积推进到可讨论的衰变、共振和时间测量，但仍需要与具体实验逐项比较。
</div>

---
layout: two-cols
---

# 决胜点在尚未完成的观测闭环

<div class="text-[15px] leading-7 mt-4 text-left">

访谈给出了一条清晰的证据边界：

- <b>已有口径</b>：星系旋转曲线与背景超新星距离拟合
- <b>正在计算</b>：CMB 各向异性与宇宙涨落
- <b>必须覆盖</b>：大尺度结构形成
- <b>方法需重做</b>：非渐近平坦几何中的星系/星系团透镜

</div>

<div class="mt-5 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm text-left">
只要这些独立检验不能同时通过，共形引力就还不是暗物质与标准宇宙学的完整替代。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./test-frontier.excalidraw" class="w-[465px]" :darkMode="false" :background="false" />
</div>

---

# 这期最值得带走的，不只是一个替代理论

<div class="grid grid-cols-3 gap-4 mt-6 text-[14px] leading-6 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 区分原则与方程
成功的解不必唯一决定产生它的方程；尺度变化可能暴露被短程实验遮住的新项。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 让失败约束理论
200 个未按预期上升的数据点迫使剩余二次项承担真实预测，而不是被忽略。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 给新理论同样门槛
指出标准模型的张力不够；替代理论也必须计算涨落、结构与透镜。
</div>

</div>

<div class="mt-7 grid grid-cols-3 gap-4 text-center">
<div class="p-4 rounded bg-purple-50 border border-purple-200 italic">“don't trust experts.”<div class="text-xs opacity-60 mt-2 not-italic">给学生的建议</div></div>
<div class="p-4 rounded bg-yellow-50 border border-yellow-200 italic">“never lose sight of data.”<div class="text-xs opacity-60 mt-2 not-italic">对数学诱惑的提醒</div></div>
<div class="p-4 rounded bg-red-50 border border-red-200 italic">“physics is an experimental science.”<div class="text-xs opacity-60 mt-2 not-italic">最终裁判</div></div>
</div>

---

# 核心金句

<div class="text-xs opacity-55 mb-3">以下 8 条均已用固定字符串回查本集 transcript。</div>

<div class="grid grid-cols-2 gap-3 text-[12px] leading-5 text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">“and it's been hiding in plain sight.”<div class="text-[10px] opacity-60 mt-1 not-italic">暗物质问题 · 宇宙整体一直在场</div></div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">“It's neither. It doesn't exist.”<div class="text-[10px] opacity-60 mt-1 not-italic">Graviton · 零范数态而非可观测粒子</div></div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">“one afternoon to solve them.”<div class="text-[10px] opacity-60 mt-1 not-italic">发现史 · 四个月推导后的快速求解</div></div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">“You're in the wrong Hilbert space.”<div class="text-[10px] opacity-60 mt-1 not-italic">Ghost · 负范数来自错误的对偶空间</div></div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">“don't trust experts.”<div class="text-[10px] opacity-60 mt-1 not-italic">研究建议 · 专家也由错误累积经验</div></div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">“never lose sight of data.”<div class="text-[10px] opacity-60 mt-1 not-italic">方法论 · 数学必须回到观测</div></div>

<div class="p-3 rounded bg-slate-50 border-l-4 border-slate-500 italic">“physics is an experimental science.”<div class="text-[10px] opacity-60 mt-1 not-italic">证据边界 · 理论由实验裁决</div></div>

<div class="p-3 rounded bg-emerald-50 border-l-4 border-emerald-500 italic">“Nature will tell you what to do.”<div class="text-[10px] opacity-60 mt-1 not-italic">长期研究 · 顺着自然给出的约束前进</div></div>

</div>

---
layout: end
---

# “Nature will tell you what to do.”

<div class="mt-7 text-xl opacity-70">Philip Mannheim</div>

<div class="mt-10 text-sm opacity-50">让数据决定共形引力是新基础，还是一条走得很远的岔路。</div>
