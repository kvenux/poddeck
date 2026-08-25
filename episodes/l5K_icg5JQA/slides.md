---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '挑战GPU、绕过HBM，深挖史上最大芯片背后的Cerebras'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
themeConfig:
  paginationPagesDisabled: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
---

# 挑战 GPU、绕过 HBM

## 深挖史上最大芯片背后的 Cerebras

<div class="mt-7 text-xl opacity-75">硅谷101 · 一场持续十年的晶圆级计算赌局</div>

<div class="mt-10 mx-auto max-w-3xl p-5 rounded-xl bg-blue-50 border border-blue-200 text-base opacity-90">
当 AI 的瓶颈从模型规模转向实时推理，<strong>一整片晶圆</strong>为什么突然从工程异端变成商业答案？
</div>

<div class="mt-5 text-sm opacity-55">Cerebras · Wafer-Scale Engine · Inference · IPO</div>

---

# 为什么这一期值得看

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 起点不是芯片
百度团队从 3 亿参数语言模型和 Scaling Law，看见未来算力缺口。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 路线不是更好 GPU
Cerebras 把计算、内存和互联放进整片晶圆，直接减少数据搬运。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 疯狂可以被验证
良率、散热、编译器和框架兼容，被拆成逐项可证伪的工程问题。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 技术领先不等于市场
第一代只卖十几台；国家实验室先证明价值，大客户才带来规模收入。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 推理重写产品定义
从卖超级计算机，到用 OpenAI API 兼容接口提供高速推理云。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### IPO 不是爽文结尾
供应链、客户集中、竞争和毛利率，开始接受资本市场逐项审判。

</div>

</div>

---

# 一切从 3 亿参数、三个月训练开始

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-sm opacity-65">百度语言模型</div>
<div class="text-4xl font-bold text-blue-600 my-3">3 亿</div>
<div class="text-sm">参数规模 · 当时全球最大</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-sm opacity-65">一次训练</div>
<div class="text-4xl font-bold text-purple-600 my-3">3 个月</div>
<div class="text-sm">即便已有大型 CUDA 集群</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-sm opacity-65">观察到的规律</div>
<div class="text-2xl font-bold text-orange-600 my-4">模型 × 数据 × 算力</div>
<div class="text-sm">提升可以预测，并近似线性</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 text-xl italic">
“智能居然有路可达”
<div class="text-xs opacity-60 mt-2 not-italic">— Greg Diamos 回忆第一次看到 Scaling Law</div>
</div>

---
layout: two-cols
---

# Scaling Law 把瓶颈推到底层

<div class="space-y-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>研究发现</strong><br/>模型越大、数据越多、算力越强，效果越好。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>直接推论</strong><br/>未来真正有用的模型，需要的算力会超过当时 GPU 集群的供给能力。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>硬件命题</strong><br/>问题不再只是如何训练模型，而是怎样重新设计承载 AI 的机器。
</div>

</div>

<div class="mt-4 text-xs opacity-60">作者概括：Scaling Law 同时是一条能力曲线，也是一张硬件需求单。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./scaling-gap.excalidraw" class="w-[475px]" :darkMode="false" :background="false" />
</div>

---

# 2015 年，他们押注一个尚未存在的市场

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 五位工程师的出发点

- Andrew Feldman、Gary Lauterbach、Michael James、Sean Lie、J-P Fricker
- 曾在 SeaMicro 共事
- 希望有一天名字进入计算机历史博物馆

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 当时还不存在的条件

- Transformer 尚未出现
- 大模型产业尚未成型
- 主流仍是扩大 GPU 集群，再补软件和高速互联

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border border-yellow-200 text-center">
他们没有先问怎样做一块更快的 GPU，而是先问：<strong>如果 AI 是全新的计算负载，机器是否也该重新设计？</strong>
</div>

---
layout: two-cols
---

# GPU 集群与晶圆级引擎：两条路线

<div class="space-y-4 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>GPU 集群</strong><br/>模型切片分到多卡；参数、梯度和激活值跨显存、计算单元、GPU 与服务器移动。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>晶圆级引擎</strong><br/>把尽可能多的计算、内存和互联放在同一片硅上，让通信留在晶圆内部。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>真正的竞争单位</strong><br/>不是单个核心的峰值，而是完成一次 AI 工作负载时，数据要走多远。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./wafer-vs-cluster.excalidraw" class="w-[485px]" :darkMode="false" :background="false" />
</div>

---

# 绕过 HBM：核心是缩短数据路径

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-sm opacity-65">晶圆面积</div>
<div class="text-4xl font-bold text-blue-600 my-3">58×</div>
<div class="text-sm">相对最大 GPU</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-sm opacity-65">内存与计算</div>
<div class="text-3xl font-bold text-green-600 my-3">同一片硅</div>
<div class="text-sm">减少芯片外往返</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-sm opacity-65">内存带宽</div>
<div class="text-4xl font-bold text-purple-600 my-3">数千倍量级</div>
<div class="text-sm">Cerebras 对 GPU 的口径</div>
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-left text-sm">
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500"><strong>传统路径：</strong>HBM 与计算芯片分开；每次传输都受内存带宽约束。</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500"><strong>WSE 路径：</strong>把跨 GPU、服务器、网络的移动，尽量变成片上移动。</div>
</div>

---

# 四周尽调：先把信念拆成五个问题

<div class="grid grid-cols-3 gap-4 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500"><strong>01 · 良率</strong><br/>一整片晶圆存在缺陷时，会不会整颗报废？</div>
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500"><strong>02 · 首次流片</strong><br/>失败是否会吞掉几千万美元和数月时间？</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500"><strong>03 · 局部容错</strong><br/>坏区能否被识别、绕开，系统继续运行？</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500"><strong>04 · 编译映射</strong><br/>真实 AI 工作负载能否映射到新架构？</div>
<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>05 · 框架兼容</strong><br/>客户能否接入既有机器学习框架？</div>
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500"><strong>验证方式</strong><br/>把百度 3 亿参数模型接入编辑器，在模拟器上测试。</div>

</div>

<div class="mt-5 p-4 rounded bg-slate-50 border border-slate-200 text-center">
投资判断不是证明所有风险消失，而是判断：<strong>哪些风险可验证，哪些风险能用时间和资金解决。</strong>
</div>

---
layout: two-cols
---

# 办公室里的那一刻：它不是山寨 GPU

<div class="space-y-3 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500"><strong>实验笔记本</strong><br/>团队先解释如何把更多处理器真正集成在一起。</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500"><strong>巨大热交换器</strong><br/>散热工程师搬出直接对接芯片本体的金属结构。</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500"><strong>整片晶圆</strong><br/>Greg 才意识到：他们不只是在设想，实验室里已经有了一片。</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“原来你们真的在尝试造一颗更大的芯片”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./office-reveal.excalidraw" class="w-[475px]" :darkMode="false" :background="false" />
</div>

---

# 良率不是抽象恐惧，而是一道算术题

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-3xl font-bold text-blue-600 mb-2">0.001</div>
每平方毫米缺陷数<br/><span class="text-xs opacity-60">台积电 5nm 口径</span>
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-3xl font-bold text-purple-600 mb-2">46,225</div>
平方毫米<br/><span class="text-xs opacity-60">WSE-3 面积</span>
</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-3xl font-bold text-red-600 mb-2">≈ 46</div>
一片晶圆上的缺陷<br/><span class="text-xs opacity-60">不能靠完美制造</span>
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-3xl font-bold text-green-600 mb-2">0.05</div>
平方毫米 / 核心<br/><span class="text-xs opacity-60">把损失做小</span>
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-left">
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">传统假设：只要一个缺陷击中关键区域，整块巨型芯片就可能报废。</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">Cerebras 的转换：接受缺陷一定存在，再把损失范围和绕行能力写进架构。</div>
</div>

---
layout: two-cols
---

# 两层容错：微小核心 + 动态绕障

<div class="space-y-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>把核心做小</strong><br/>单核心约 0.05 平方毫米；同一缺陷造成的损失远小于大核心。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>预留 1%–1.5%</strong><br/>备用核心平时关闭，制造测试后用于替换坏区。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>片上网络重路由</strong><br/>屏蔽坏核心，把工作负载重新映射到正常区域。
</div>

</div>

<div class="mt-4 text-xs opacity-60">创新不在发明冗余，而在把冗余与绕障放大到整张晶圆。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./yield-routing.excalidraw" class="w-[490px]" :darkMode="false" :background="false" />
</div>

---

# 三年隐身：每六周重复同一个坏消息

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-red-50 border-2 border-red-200">
<div class="text-sm opacity-65">每月烧钱</div>
<div class="text-3xl font-bold text-red-600 my-4">约 800 万美元</div>
<div class="text-sm">芯片、散热、供电、机架接口同时重做</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-sm opacity-65">持续时间</div>
<div class="text-4xl font-bold text-orange-600 my-3">3 年</div>
<div class="text-sm">接近 3 亿美元投入在未公开产品上</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-sm opacity-65">晶圆功耗</div>
<div class="text-4xl font-bold text-purple-600 my-3">25 kW</div>
<div class="text-sm">集中在餐盘大小的面积</div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-5 text-left">
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 italic">“芯片还是不能用”<div class="text-xs opacity-60 mt-1 not-italic">— 董事会反复听到的进度</div></div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 italic">“没人做过这件事”<div class="text-xs opacity-60 mt-1 not-italic">— 2019 年第一次真正跑起来</div></div>
</div>

---

# WSE-1 不是一颗单卖的芯片，而是一台系统

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-sm opacity-65">片上核心</div>
<div class="text-4xl font-bold text-blue-600 my-3">40 万</div>
<div class="text-sm">AI 计算核心</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-sm opacity-65">片上 SRAM</div>
<div class="text-4xl font-bold text-purple-600 my-3">18 GB</div>
<div class="text-sm">同期 GPU 片上内存仅几十 MB</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-sm opacity-65">交付形态</div>
<div class="text-4xl font-bold text-green-600 my-3">CS-1</div>
<div class="text-sm">冰箱大小，可直接进数据中心机柜</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
晶圆只是第一层。散热、供电、接口与软件必须一起交付，客户得到的才是一台可运行的 AI 超级计算机。
</div>

---

# 最早买单的不是互联网公司，而是国家实验室

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 阿贡国家实验室
分析新冠病毒变异序列；相关实验协助获得 2022 年戈登贝尔特别奖。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Lawrence Livermore
使用 Cerebras 系统运行核聚变模拟。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 国家能源技术实验室
测试结果比实验室自己的超级计算机快约 <strong>500 倍</strong>。

</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-sm">
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500"><strong>为什么是他们：</strong>任务严肃、计算密集，且愿意采用非主流架构。</div>
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500"><strong>他们证明了什么：</strong>晶圆级计算不仅能制造，也能在真实科学工作负载里落地。</div>
</div>

---

# 技术领先的商业低谷：市场还没追上来

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-red-50 border-2 border-red-200">
<div class="text-sm opacity-65">第一代</div>
<div class="text-4xl font-bold text-red-600 my-3">十几台</div>
<div class="text-sm">解决难题，但市场没有形成</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-sm opacity-65">第二代</div>
<div class="text-4xl font-bold text-orange-600 my-3">约 300 台</div>
<div class="text-sm">技术验证开始扩散</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-sm opacity-65">第三代</div>
<div class="text-4xl font-bold text-green-600 my-3">上万台规模</div>
<div class="text-sm">推理需求推动规模化</div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-5 text-left">
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">“技术验证本身是不够的”</div>
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">“你真的需要一个大客户”</div>
</div>

---
layout: two-cols
---

# G42：把收入带进来，也把审查带进来

<div class="space-y-3 mt-5 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>商业放大器</strong><br/>Condor Galaxy 合同超过 10 亿美元，让 Cerebras 获得真正规模收入。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>客户集中</strong><br/>G42 占营收比重从 2023 年超过 83%，升至 2024 年上半年的 87%。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>监管反作用</strong><br/>CFIUS 启动国家安全审查；Cerebras 最终撤回第一次 S-1 申请。
</div>

</div>

<div class="mt-4 text-xs opacity-60">同一个客户既验证商业模式，也暴露单一客户与地缘政治风险。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./g42-double-edge.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 从训练到推理：同一台机器遇到新市场

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 训练

- 建造模型的一次性巨大计算过程
- 海量数据可切成批次并行处理
- GPU 擅长大规模矩阵乘法
- 竞争焦点是吞吐与扩展

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 推理

- 每生成一个 token，才能继续下一个
- decode 沿时间顺序串行推进
- 权重、缓存与计算单元反复搬运数据
- 竞争焦点变成延迟与内存带宽

</div>

</div>

<div class="mt-7 p-4 rounded bg-green-50 border border-green-200 text-center">
Cerebras 原本为训练的数据搬运而生；生成式 AI 普及后，这个优势更直接地表现为用户等待时间。
</div>

---
layout: two-cols
---

# Decode 的硬约束：下一个 token 不能提前算

<div class="space-y-4 mt-6 text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>严格串行</strong><br/>token 2 依赖 token 1，token 3 又依赖 token 2。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>每步都要搬数据</strong><br/>模型权重与缓存持续在内存和计算单元之间移动。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 italic">
“最关键的就是内存带宽”
<div class="text-xs opacity-60 mt-1 not-italic">— Cerebras 对推理硬件瓶颈的判断</div>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./decode-bottleneck.excalidraw" class="w-[490px]" :darkMode="false" :background="false" />
</div>

---

# 速度优势如何变成产品指标

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-sm opacity-65">相对 GPU</div>
<div class="text-4xl font-bold text-blue-600 my-3">约 15×</div>
<div class="text-sm">Cerebras 所述推理速度优势</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-sm opacity-65">Cerebras 平均输出</div>
<div class="text-4xl font-bold text-green-600 my-3">&gt; 2,000</div>
<div class="text-sm">token / 秒</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-sm opacity-65">传统方案对比</div>
<div class="text-4xl font-bold text-orange-600 my-3">200–300</div>
<div class="text-sm">token / 秒</div>
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-left text-sm">
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500"><strong>接入成本：</strong>兼容 OpenAI API；替换 API key 即可把请求送到 Cerebras 后端。</div>
<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>真正价值：</strong>速度不只是同一功能更快，也决定某些实时交互能否成立。</div>
</div>

---

<h1 style="font-size: 3.2rem; line-height: 1.1; text-align: left; margin: 0 0 1.25rem 0;">速度改变交互方式</h1>

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 代码理解
鼠标悬停后立即生成项目调用图；若等待 5–10 秒，开发者思路已经被打断。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 实时教育
AI 一边在虚拟黑板画图，一边回应用户圈选和追问，才更像真正的老师。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### AI 科学家
在药物研发会议进行时检索论文、测试假设，并直接参与讨论。

</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-xl italic text-center">
“而互动的本质 就在于速度”
</div>

---
layout: two-cols
---

# Prefill 与 Decode：不必由同一种芯片包办

<div class="space-y-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Prefill · 处理 prompt</strong><br/>可并行，适合 AWS 的训练芯片承担。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Decode · 生成答案</strong><br/>严格串行，由 Cerebras 巨型芯片发挥高带宽优势。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>系统级合作</strong><br/>把推理拆开，再让不同硬件各做擅长的一段。
</div>

</div>

<div class="mt-4 text-xs opacity-60">这也解释了 Cerebras 为什么公开表示会与各家 Hyperscaler 讨论合作，Nvidia 除外。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./prefill-decode.excalidraw" class="w-[490px]" :darkMode="false" :background="false" />
</div>

---

# 十年里，产品从芯片长成基础设施

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-2xl font-bold text-blue-600 mb-2">2019</div>
<strong>芯片</strong><br/>WSE-1<br/><span class="text-xs opacity-60">第一款晶圆级芯片</span>
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-2xl font-bold text-green-600 mb-2">CS-1 / CS-2</div>
<strong>系统</strong><br/>散热、供电、接口与软件一体交付
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-2xl font-bold text-purple-600 mb-2">Andromeda</div>
<strong>集群</strong><br/>16 台 CS-2 · 1,350 万核心 · 超过 1 exaflop
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-2xl font-bold text-orange-600 mb-2">2024</div>
<strong>云服务</strong><br/>Cerebras Inference · API 调用
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-center">
“转型为一家推理基础设施公司”
</div>

---

# 绕开三处拥堵，不等于供应链没有风险

<div class="grid grid-cols-3 gap-4 mt-5 text-center">

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-2xl font-bold text-green-600 mb-3">不依赖 HBM</div>
内存与计算同片，避开当下最紧张的高带宽内存供应。
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-2xl font-bold text-blue-600 mb-3">不依赖 CoWoS</div>
不走 GPU 与 HBM 的先进封装路线。
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-2xl font-bold text-purple-600 mb-3">不依赖 3nm</div>
WSE-3 与扩产计划建立在台积电 5nm 上。
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-5 text-left text-sm">
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500"><strong>仍然集中：</strong>台积电是目前唯一能制造 Cerebras 芯片的代工厂，产能依旧决定扩张上限。</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500"><strong>竞争加剧：</strong>GPU、云厂商 ASIC、TPU、Trainium 与新推理芯片同时争夺市场。</div>
</div>

---

# 上市之后，技术优势开始接受利润检验

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-sm opacity-65">首日收盘</div>
<div class="text-4xl font-bold text-blue-600 my-3">311 美元</div>
<div class="text-sm">涨幅 68%</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-sm opacity-65">融资规模</div>
<div class="text-4xl font-bold text-purple-600 my-3">55.5 亿美元</div>
<div class="text-sm">盘中市值一度触及千亿美元</div>
</div>

<div class="p-5 rounded bg-red-50 border-2 border-red-200">
<div class="text-sm opacity-65">第二季度指引</div>
<div class="text-4xl font-bold text-red-600 my-3">36%–38%</div>
<div class="text-sm">调整后毛利率 · 低于第一季度 47%</div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-5 text-left text-sm">
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500"><strong>规模代价：</strong>数据中心、电力、冷却、制造和软件栈都需要巨额投入。</div>
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500"><strong>市场追问：</strong>高速推理能否形成长期不可替代的产品，并留下稳定利润。</div>
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">8 条直接引文，均已按 transcript 固定字符串核验。</div>

<div class="grid grid-cols-2 gap-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
“智能居然有路可达”
<div class="text-xs opacity-60 mt-1 not-italic">— Scaling Law 让智能第一次显得可工程化</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
“拆解成很多很小、可以逐一验证的问题”
<div class="text-xs opacity-60 mt-1 not-italic">— 周楠的四周技术尽调</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
“那46个缺陷 被悄悄地隐藏掉了”
<div class="text-xs opacity-60 mt-1 not-italic">— 微小核心、冗余与片上重路由</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
“技术验证本身是不够的”
<div class="text-xs opacity-60 mt-1 not-italic">— 深科技必须跨过真实部署与收入</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
“最关键的就是内存带宽”
<div class="text-xs opacity-60 mt-1 not-italic">— Decode 把数据搬运推到前台</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
“而互动的本质 就在于速度”
<div class="text-xs opacity-60 mt-1 not-italic">— 实时代码、教育与科研场景</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
“它不是一个英伟达挑战者上市的爽文”
<div class="text-xs opacity-60 mt-1 not-italic">— 十年路径是对基础设施需求变化的回应</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
“真实到资本市场开始用毛利率来审判它”
<div class="text-xs opacity-60 mt-1 not-italic">— 硬科技进入主流世界的代价</div>
</div>

</div>

---
layout: end
---

# “真实到资本市场开始用毛利率来审判它”

<div class="mt-8 text-lg opacity-75">
真正的胜利不是把不可能的芯片造出来，<br/>而是让它在供应链、客户与利润约束下持续成立。
</div>

<div class="mt-7 text-sm opacity-50">硅谷101 · Cerebras · 2026</div>
