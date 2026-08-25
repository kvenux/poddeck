---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '🔬Causal Models Need Causal Data - Xaira’s X-Cell model (Bo Wang & Ci Chu)'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
themeConfig:
  paginationPagesDisabled: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
---

# Causal Models Need Causal Data

<div class="text-3xl font-semibold text-purple-700 mt-4">Xaira 的 X-Cell 如何学习细胞干预</div>

<div class="mt-10 text-lg opacity-75">
Bo Wang × Ci Chu<br/>
从高通量 Perturb-seq，到跨细胞情境的因果泛化
</div>

<div class="mt-10 text-sm opacity-55">
Latent Space · AI for Science · 约 90 分钟
</div>

---

# 为什么这期值得看

<div class="text-sm opacity-70 mb-4">这不是一场只谈模型结构的访谈；核心问题是：什么数据，才配训练一个能回答反事实问题的模型？</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-left">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 因果数据
观察到基因共同变化，不等于知道谁调控谁。要预测干预结果，训练集也必须包含干预。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 实验规模
把 pooled CRISPR 与单细胞 RNA 测序结合，形成基因干预 × 全转录组读出的二维数据。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 情境泛化
模型真正的价值，不是复述已测细胞系，而是迁移到激活细胞、留出细胞类型和原代供体细胞。

</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-left">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 模型架构
X-Cell 用扩散式生成替代对基因顺序的强假设，并用多种生物先验做条件化。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 评测标准
低 MAE 未必表示学到了干预方向；更关键的是预测的表达变化是否贴近真实变化。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 下一代瓶颈
蛋白组规模化测量，以及不杀死细胞的纵向观测，决定 Virtual Cell 能否从静态走向动态。

</div>

</div>

---

# 两位嘉宾，把 AI 与湿实验接在一起

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Bo Wang
Xaira Therapeutics 生物医学 AI 负责人。此前任多伦多大学副教授，研究单细胞基础模型，并带领 X-Cell 的模型工作。

<div class="mt-3 text-sm opacity-70">视角：模型、架构、泛化、学术训练</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Ci Chu
Xaira Therapeutics AI-enabled Discovery 负责人。团队建设高通量生物实验体系，为模型生成因果训练数据。

<div class="mt-3 text-sm opacity-70">视角：湿实验、数据质量、规模化、药物发现</div>

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">

### 对谈的共同立场
AI for Science 的边界不在模型能生成什么，而在它能否接受真实实验检验，并把结果重新送回数据与模型循环。

</div>

---
layout: two-cols
---

# Xaira 的目标：三层模型形成闭环

<div class="space-y-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>蛋白设计</strong><br/>围绕可成药靶点设计分子。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>X-Cell / Virtual Cell</strong><br/>预测基因或药物干预如何改变细胞状态。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>患者表征</strong><br/>理解哪些患者更可能响应哪种治疗。
</div>

</div>

<div class="mt-5 text-xs opacity-60">作者概括：价值来自连接，而不是三个孤立的模型排行榜。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./xaira-platforms.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 药物发现被压缩成三件事，每件都极难

<div class="grid grid-cols-3 gap-5 mt-7 text-center">

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl mb-3">🎯</div>

### 找对靶点
干预哪个基因或通路，才能产生治疗相关的细胞变化？
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl mb-3">🧬</div>

### 做对分子
设计能作用于靶点、同时具备所需性质的蛋白或药物分子。
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl mb-3">🧑‍⚕️</div>

### 给对患者
把分子层信号和临床响应连起来，识别真正可能受益的人群。
</div>

</div>

<div class="mt-7 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-left">
蛋白设计进展更快，一个重要原因是 PDB 等数据库积累了约 70 年的高质量结构数据；细胞因果数据与匹配临床注释的患者数据远没有达到同等规模。
</div>

---

# Virtual Cell 到底要预测什么？

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 输入：细胞状态 + 干预
人类细胞约有 20,000 个基因；多数细胞在一个时点有约 4,000–5,000 个基因处于较活跃表达状态。干预相当于把一个基因的旋钮调低。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 输出：新的细胞状态
模型要预测其余基因如何变化，进一步才可能推断通路、细胞功能和药物响应。

</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-sm text-center">
<div class="p-4 rounded bg-purple-50 border-2 border-purple-200"><strong>描述</strong><br/>这个细胞现在是什么</div>
<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200"><strong>反事实</strong><br/>若抑制某基因会怎样</div>
<div class="p-4 rounded bg-orange-50 border-2 border-orange-200"><strong>动态</strong><br/>状态随时间如何演化</div>
</div>

<div class="mt-5 text-xs opacity-60">Virtual Cell 是高层概念；基础模型只是其中的表征起点。</div>

---
layout: two-cols
---

# 从写规则，到让模型学习

<div class="mt-6 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### Virtual Cell 1.0
尝试用少量预设微分方程描述通路响应；访谈将其总结为一次失败尝试，因为生物系统过于复杂。

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Virtual Cell 2.0
把单细胞数据交给生成模型，让模型学习细胞类型、干预响应、空间关系与时间变化。

</div>

<div class="quote-en mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-lg italic">
"if we cannot describe, let's learn it."
<div class="text-xs opacity-60 mt-1 not-italic">— Bo Wang，谈数据驱动的 Virtual Cell</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./virtual-cell-shift.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 基础模型不等于 Virtual Cell

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Foundation model
- 学到语义化的细胞表征
- 对齐不同实验室、技术与批次
- 擅长整合、分类等描述任务

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Virtual Cell
- 预测干预后的表达变化
- 覆盖未见过的细胞情境
- 进一步建模空间与时间动态

</div>

</div>

<div class="quote-en mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xl italic">
"the foundation model is really just the starting point."
<div class="text-xs opacity-60 mt-2 not-italic">— Bo Wang</div>
</div>

<div class="mt-5 text-sm opacity-70">作者概括：表征回答相似性；Virtual Cell 还必须回答干预、方向和变化。</div>

---

# 因果任务，需要因果数据

<div class="quote-en mt-4 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-xl italic">
"For that I think we need causal data."
<div class="text-xs opacity-60 mt-1 not-italic">— Ci Chu，区分表征模型与 Virtual Cell</div>
</div>

<div class="grid grid-cols-2 gap-5 mt-5 text-left text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 观察数据的盲区
如果 A、B、C 总是一起升降，可以构造 A→B/C、B→A/C，甚至共同原因等多种网络；相关性无法唯一确定箭头方向。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 干预数据的价值
主动压低 A，再测 B、C 的变化，才能把反事实问题写进训练样本：如果真的这样做，会发生什么？

</div>

</div>

<div class="quote-en mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"Fundamentally, we believe observational data are underpowered to learn causality truly."
</div>

---
layout: two-cols
---

# 观察只能看到共变，干预才能辨方向

<div class="space-y-4 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>观察</strong>：A、B、C 一起变化，但可能存在多套同样解释数据的因果结构。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>干预</strong>：用 CRISPR 抑制 A，读取 B、C 的表达变化，得到有方向的证据。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>训练目标</strong>：模型学习的不是细胞长得像什么，而是动作与响应之间的映射。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./causal-data.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Perturb-seq 把实验铺成一张二维表

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 一条轴：做什么干预
CRISPR guide RNA 把 Cas9 系统带到目标基因启动子，压低该基因的表达。条形码让研究者知道每个细胞收到哪条 guide。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 另一条轴：测到什么变化
单细胞 RNA 测序同时读取每个细胞约 20,000 个基因的表达，形成全转录组响应。

</div>

</div>

<div class="mt-6 p-5 rounded bg-green-50 border-l-4 border-green-500">

### 关键的规模化技巧
不是为 20,000 个基因分别开 20,000 次实验，而是在同一个 pooled experiment 中，让不同细胞各自承载一个干预，再用条形码拆解结果。

</div>

<div class="mt-5 text-sm opacity-70">结果：每一行是一个基因干预，每一列是一个被测表达特征。</div>

---
layout: two-cols
---

# 四步构建因果矩阵

<div class="space-y-4 mt-6 text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500"><strong>1. 编码</strong>：guide RNA 同时承担地址与条形码。</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500"><strong>2. 并行</strong>：每个细胞一个干预，所有基因在同一池中展开。</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500"><strong>3. 读取</strong>：单细胞 RNA-seq 读出完整表达状态。</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500"><strong>4. 拼表</strong>：干预 × 基因变化，直接服务反事实训练。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./perturbseq-pipeline.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 科研方法能跑通，不代表工业规模能跑稳

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 数量级改变
严格质控后的 2,500 万细胞，背后要处理数千万乃至数亿细胞；小实验的手法会被规模放大成系统误差。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 14 小时工作日
鲜活细胞在漫长流程里会产生压力信号；最后测到的可能既是生物响应，也是实验流程本身。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 时间解耦
团队引入化学固定，在流程开始时锁住细胞状态，再验证后续分子步骤与数据质量不被破坏。

</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500">
这里的核心工程工作不是把一个 assay 机械地重复更多次，而是重新设计流程，让规模、质量和批次一致性同时成立。
</div>

---

# 数据集的规模，不只是一串细胞数

<div class="grid grid-cols-4 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-600">25M</div>
<div class="mt-2 text-sm">严格质量筛选后的细胞</div>
</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">16</div>
<div class="mt-2 text-sm">Pisces 数据中的细胞类型</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-600">7</div>
<div class="mt-2 text-sm">合并的全基因组 Perturb-seq campaigns</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-4xl font-bold text-orange-600">4.9B</div>
<div class="mt-2 text-sm">X-Cell 大模型参数量</div>
</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-7 text-left text-sm">
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500"><strong>密度</strong>：每个干预都读取全转录组，而非只看一个终点指标。</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500"><strong>多样性</strong>：不同细胞类型与状态，让模型能区分通用效应和情境特异效应。</div>
</div>

<div class="mt-5 text-xs opacity-55">这些数字来自访谈对预印本和数据生成流程的描述。</div>

---

# 真正要优化的是 information content

<div class="quote-en mt-5 p-6 rounded bg-purple-50 border-l-4 border-purple-500 text-2xl italic">
"It's about bits per dollar and information content."
<div class="text-xs opacity-60 mt-2 not-italic">— Ci Chu，谈为什么情境多样性比单纯堆细胞更重要</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>低信息重复</strong><br/>同一细胞系、同一状态、更多重复，会提高精度，却未必扩大模型可学习的因果结构。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>情境扩展</strong><br/>不同细胞类型、激活状态和发育阶段，暴露相同干预在不同背景下的变化。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>泛化机会</strong><br/>只有训练数据覆盖足够多的变化轴，模型才可能在未见情境中组合已有规律。
</div>

</div>

---
layout: two-cols
---

# 为什么还需要模型：最重要的系统无法穷举

<div class="space-y-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
细胞系容易培养，也适合全基因组规模筛选；若问题只限于已测细胞系，直接做实验即可。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
真正高价值的情境是原代细胞、器官、共培养、动物乃至患者；它们昂贵、稀缺，无法穷举所有干预。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
模型在可规模化数据上学习，再为复杂系统生成高质量假设，由湿实验做少量、昂贵而关键的验证。
</div>

</div>

<div class="mt-5 text-xs opacity-60">作者概括：Virtual Cell 是实验预算的放大器，不是实验的替代品。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./context-bridge.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 从 smoothie，到单细胞，再到空间坐标

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Bulk RNA-seq
把一块组织磨碎后测总体 RNA。能看到约 20,000 个基因，却不知道信号来自免疫细胞、皮肤细胞还是其他细胞。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Single-cell RNA-seq
逐细胞归属表达信号，知道是哪类细胞产生了变化；但细胞在组织中的位置关系丢失。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Spatial omics
保留 XY 坐标与分子读出，能分析 T 细胞是否接近、进入或攻击肿瘤，以及邻域如何改变状态。

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500">
空间模型的难点是：表示一个细胞时，不能再只看它自己，还要联合学习邻近 niche。当前公开的 X-Cell 版本尚未处理空间组学；嘉宾将其列为后续方向。
</div>

---

# 为什么从自回归切换到扩散

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 自回归：像打字
按顺序生成下一个 token，需要先为基因设定某种顺序。但基因表达本质上是一张矩阵，交换列顺序并不会改变生物学。

<div class="mt-3 text-sm opacity-70">类比：I → like → coffee</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 扩散：像反复编辑
从粗糙、噪声化的表达状态开始，多步更新整张状态，逐渐逼近干预后的全转录组分布。

<div class="mt-3 text-sm opacity-70">类比：一遍遍改写整句话，而非固定从左到右</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
预印本中，随着 diffusion steps 增加，损失持续下降、预测与真实数据的拟合提高；模型学会了迭代修正预测。
</div>

---
layout: two-cols
---

# X-Cell 迭代生成完整细胞状态

<div class="space-y-4 mt-6 text-sm">

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-500"><strong>起点</strong>：带噪的高维基因表达表示。</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500"><strong>条件</strong>：细胞情境、干预 token 与训练中学到的生物先验。</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500"><strong>过程</strong>：双向、多步更新，不依赖人为规定的基因生成顺序。</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500"><strong>输出</strong>：干预后的完整转录组状态，而非少数预定义基因。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./diffusion-refinement.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 五类生物先验，给生成过程加条件

<div class="grid grid-cols-5 gap-3 mt-6 text-center text-sm">

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-2xl mb-2">📚</div>
<strong>文献</strong><br/>GenePT 式文本嵌入
</div>

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-2xl mb-2">🕸️</div>
<strong>PPI</strong><br/>蛋白互作网络
</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-2xl mb-2">🎗️</div>
<strong>DepMap</strong><br/>癌症必需基因信息
</div>

<div class="p-3 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-2xl mb-2">🔬</div>
<strong>形态</strong><br/>细胞 morphology
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-2xl mb-2">🧬</div>
<strong>scGPT</strong><br/>细胞类型嵌入
</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>训练后不必每次重新提供</strong><br/>这些条件已经进入模型的可学习参数。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>权重带来可解释线索</strong><br/>不同细胞类型依赖不同先验，可观察哪些知识源更重要。
</div>

</div>

---

# X-Cell 的 ablation 给出一个清晰优先级

<div class="quote-en mt-5 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-xl italic">
"the amount of the data sets matter the most."
<div class="text-xs opacity-60 mt-1 not-italic">— Bo Wang，谈数据、架构与先验的相对贡献</div>
</div>

<div class="mt-7 flex items-center justify-center gap-4 text-center">

<div class="w-56 p-5 rounded bg-green-50 border-2 border-green-300">
<div class="text-xs opacity-60">第一优先</div>
<div class="text-2xl font-bold text-green-700 mt-1">质量 × 数量 × 规模</div>
<div class="text-sm mt-2">因果数据本身</div>
</div>

<div class="text-3xl opacity-50">→</div>

<div class="w-48 p-5 rounded bg-blue-50 border-2 border-blue-300">
<div class="text-xs opacity-60">第二优先</div>
<div class="text-2xl font-bold text-blue-700 mt-1">架构</div>
<div class="text-sm mt-2">扩散式生成</div>
</div>

<div class="text-3xl opacity-50">→</div>

<div class="w-48 p-5 rounded bg-purple-50 border-2 border-purple-300">
<div class="text-xs opacity-60">第三优先</div>
<div class="text-2xl font-bold text-purple-700 mt-1">先验</div>
<div class="text-sm mt-2">情境依赖增益</div>
</div>

</div>

<div class="mt-6 text-sm opacity-70">这只是嘉宾对当前 X-Cell 实验的排序，不应外推为所有生物模型的普遍定律。</div>

---

# 泛化测试 1：只看静息 T 细胞，预测激活状态

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 训练
模型看到静息 T 细胞的全基因组干预屏幕，也被告知激活 T 细胞本身长什么样；但没看过激活状态下的干预效果。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 基线
线性方法把静息状态里的干预 delta 直接平移到激活状态，相当于把激活与基因干预的效果简单相加。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 结果
X-Cell 不只预测已知 TCR complex 的效应，也预测到筛选中发现的候选 T 细胞失活因子，团队计划继续做湿实验验证。

</div>

</div>

<div class="quote-en mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-lg italic">
"the holy grail of virtual cell is to have a model to generalize to unseen context"
<div class="text-xs opacity-60 mt-1 not-italic">— Bo Wang</div>
</div>

---
layout: two-cols
---

# 三组测试，都把情境留在训练集之外

<div class="space-y-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500"><strong>状态外推</strong><br/>静息 T 细胞 → 激活 T 细胞。</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500"><strong>细胞类型外推</strong><br/>训练时完全留出一个 iPSC 分化细胞类型。</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500"><strong>实验系统外推</strong><br/>T 细胞系 → 多位供体的原代 T 细胞。</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
这些是早期证据，不等于已经证明可泛化到器官、动物或患者；嘉宾反复强调还需要更多生物验证。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./generalization-tests.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 线性基线之争，首先是评测之争

<div class="quote-en mt-4 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xl italic">
"What gets measured will get improved"
<div class="text-xs opacity-60 mt-1 not-italic">— Ci Chu，谈统一 benchmark 的缺失</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-5 text-left text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### MAE 的陷阱
单细胞表达非常稀疏，平均细胞 profile 可能得到很低 MAE，甚至低于被当作 ground truth 的技术重复。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 更难作弊的 delta
比较干预前后基因表达变化的预测与真实变化，例如 Pearson delta；方向错了，很难靠平均值掩盖。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 视觉上的 wow moment
把线性预测、ground truth 与 X-Cell 热图并排，嘉宾称 X-Cell 的变化图明显更接近真实数据。

</div>

</div>

---

# 生物效应分成两类，模型必须同时学会

<div class="grid grid-cols-2 gap-7 mt-6 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### Context-universal
某些基因在不同细胞类型中做相似的事。访谈以 housekeeping genes 为例：维持基础生命活动，跨情境效应更稳定。

<div class="mt-4 text-center text-2xl text-blue-700">同一干预 → 相似变化</div>

</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### Context-specific
另一些基因只在特定细胞背景中显现作用。例如与神经分化相关的基因，只在 iPSC 实验中突出。

<div class="mt-4 text-center text-2xl text-purple-700">同一干预 × 不同细胞 → 不同变化</div>

</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500">
这解释了非线性模型的潜在价值：既复用跨情境规律，又根据细胞状态调整局部因果效应。
</div>

---

# 从细胞泛化到患者，距离仍然很长

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-red-50 border-2 border-red-200">
<div class="text-4xl font-bold text-red-600">90%</div>
<div class="mt-2 text-sm">访谈称仍无治法的疾病比例</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-4xl font-bold text-orange-600">5–10%</div>
<div class="mt-2 text-sm">访谈给出的 Phase III 成功率低值</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-600">3 层</div>
<div class="mt-2 text-sm">细胞因果 → 分子设计 → 患者表征</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left">

<p><strong>X-Cell 目前证明了什么：</strong>在若干未见细胞情境中出现早期泛化信号，包括原代 T 细胞。它尚未证明能够直接预测患者疗效。</p>

</div>

<div class="mt-4 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">

<p><strong>长期愿景是什么：</strong>让细胞因果模型与患者表征相连，更早识别药物可能对哪类患者有效，再通过临床与真实世界数据验证。</p>

</div>

---
layout: two-cols
---

# 数据平台沿三条轴扩张

<div class="space-y-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>测量轴</strong>：RNA → 蛋白、代谢物、脂质、蛋白互作、空间位置与修饰状态。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>干预轴</strong>：单基因 loss-of-function → 通路激活/抑制 → 组合干预。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>情境轴</strong>：细胞系单培养 → 原代细胞、类器官、直接体内筛选。
</div>

</div>

<div class="mt-5 text-xs opacity-60">当前单基因模型可用于生成组合干预假设，但嘉宾明确提醒：没有组合干预训练数据，准确度未必足够。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-axes.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Agentic AI 改变了科研日常，但没有取消判断责任

<div class="quote-en mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 text-lg italic">
"The pace of AI is just so incredibly fast"
<div class="text-xs opacity-60 mt-1 not-italic">— Bo Wang，谈学界追赶速度</div>
</div>

<div class="grid grid-cols-2 gap-5 mt-5 text-left text-sm">

<div class="quote-en p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"now we let the agent do most of the coding but we spend most of time debugging"
<div class="text-xs opacity-60 mt-1 not-italic">— 编码时间转为审查时间</div>
</div>

<div class="quote-en p-4 rounded bg-green-50 border-l-4 border-green-500 italic">
"you still need to kind of validate your model using real world evidence"
<div class="text-xs opacity-60 mt-1 not-italic">— 判断最终回到实验与临床</div>
</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
嘉宾给学生的建议不是多烧 token，而是形成更高的研究 taste：知道该问什么、怎样发现 AI 生成的 bug、何时必须回到真实证据。
</div>

---

# 学界负责开路，产业负责把路铺宽

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 学界的结构性优势
- 自由探索小众或尚无商业路径的问题
- 教学迫使研究者持续更新知识并重新解释
- 湿实验创新常带偶然性，周期长、早期不确定
- 某些医疗数据可通过学术医院获得

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 产业的结构性优势
- 资金、GPU 与大规模实验设施
- 将学术原型工业化、稳健化
- 生成既大规模又高质量的训练数据
- 把多平台连接到真实药物开发流程

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 为什么强调开放科学
团队公开部分模型与数据，是因为 Virtual Cell 仍处早期；共同协议、共享数据与可迭代模型，曾在蛋白结构领域形成正反馈，也可能加速细胞模型。

</div>

---

# 如果有一根魔法棒，他们会先解决什么？

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Ci Chu：规模化蛋白测量
RNA 预示哪些蛋白会被制造，但蛋白才是细胞中的主要功能单元。丰度、翻译后修饰、定位与构象状态都重要，却还不能像基因组那样高通量测量。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Bo Wang：同一细胞的纵向测量
当前测转录组往往必须杀死细胞，所以模型看到的是不同细胞的静态切片。若能反复观察同一组细胞，才可能学习真实时间动力学。

</div>

</div>

<div class="quote-en mt-6 p-5 rounded bg-green-50 border-l-4 border-green-500 text-lg italic">
"RNA is amazing. It foreshadows which proteins are going to get made but protein by and large are the functional units in a cell."
<div class="text-xs opacity-60 mt-1 not-italic">— Ci Chu</div>
</div>

<div class="mt-5 text-sm opacity-70">作者概括：下一代 Virtual Cell 需要从 RNA 静态快照，走向多模态、可定位、可连续观测的细胞电影。</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">8 条原句均已对照本集逐字稿检索；字幕换行已在展示时合并。</div>

<div class="grid grid-cols-2 gap-2.5 text-[12px] leading-snug text-left">

<div class="quote-en p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"AI models always begin with the data."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 数据是模型设计的起点</div>
</div>

<div class="quote-en p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"For that I think we need causal data."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 反事实任务需要干预数据</div>
</div>

<div class="quote-en p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
"It's about bits per dollar and information content."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 多样性比单纯细胞数更关键</div>
</div>

<div class="quote-en p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
"the holy grail of virtual cell is to have a model to generalize to unseen context"
<div class="text-[10px] opacity-60 mt-1 not-italic">— 泛化才是模型存在的理由</div>
</div>

<div class="quote-en p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
"What gets measured will get improved"
<div class="text-[10px] opacity-60 mt-1 not-italic">— benchmark 决定优化方向</div>
</div>

<div class="quote-en p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
"now we let the agent do most of the coding but we spend most of time debugging"
<div class="text-[10px] opacity-60 mt-1 not-italic">— 科研编码转向审查</div>
</div>

<div class="quote-en p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"you still need to kind of validate your model using real world evidence"
<div class="text-[10px] opacity-60 mt-1 not-italic">— 真实证据是最终反馈信号</div>
</div>

<div class="quote-en p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
"RNA is amazing. It foreshadows which proteins are going to get made but protein by and large are the functional units in a cell."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 下一代数据瓶颈在蛋白</div>
</div>

</div>

---
layout: end
---

<div class="quote-en text-3xl font-semibold leading-relaxed max-w-4xl mx-auto">
"the right data set with the right AI model will lead to huge improvements"
</div>

<div class="mt-8 text-sm opacity-60">
Bo Wang & Ci Chu · Xaira X-Cell · Latent Space
</div>
