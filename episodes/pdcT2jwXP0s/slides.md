---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '"再造一个CUDA"：英伟达的第二护城河与"超级碗"阳谋'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# "再造一个CUDA"

英伟达的第二护城河 与 "超级碗"阳谋

<div class="mt-12 text-sm opacity-60">
硅谷101 · 深度解析 GTC 2025
</div>

<div class="mt-2 text-xs opacity-50">
主持人 陈茜 / 多位机构投资人与芯片从业者
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 1. GTC 2025 真的"平淡"吗
路线图都被消化，股价当天跌 3.3%。但与机构和芯片从业者深聊之后，画面完全不同。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 2. Scale Up + Scale Out
老黄想讲的新故事不是单卡，而是把"一整个数据中心"当成一个计算单元。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 3. Dynamo = 第二个 CUDA？
开源的推理调度软件，被嘉宾视为英伟达在推理侧再造的护城河。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 4. AMD / ASIC / 云厂商
"大家都有机会，但是机会不大。" 真正的对手已经不是 AMD 了。

</div>

</div>

---

# GTC 2025：一场"看似平淡"的 Keynote

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**台上**
- 芯片路线图被市场提前消化
- 很多梗都是老梗
- 与迪士尼合作的机器人 Blue 是去年登台过的旧面孔
- Keynote 中 PPT 与流程出现各种小错误

<div class="mt-3 text-sm opacity-70">
"我刚听完黄仁勋的 Keynote 演讲之后，第一反应也觉得，好像不如去年那么震撼和精彩。"
</div>

</div>

<div>

**台下**
<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded">

**当天股价 -3.3%**
华尔街对 AI 芯片需求可持续性存疑

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded">

**但是**——
机构投资人和芯片从业者认为英伟达"正在和竞争对手们继续甩开差距"

</div>

</div>

</div>

---
layout: two-cols
---

# 核心叙事：Scale Up + Scale Out

老黄反复强调的，不是某一颗芯片，而是更宏观的叙事：

- **Scale Up（纵向扩展）**：通过 NVLink 把单系统功能推到极致
- **Scale Out（横向扩展）**：通过 CPO 硅光交换机把数据中心规模化拼起来

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">

"以后计算单元不是 GPU，甚至不是服务器，而是一整个数据中心。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scale-up-out.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Scale Up：路线图被"统一编号"

<div class="grid grid-cols-4 gap-3 mt-6">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-center">

### Blackwell Ultra
<div class="text-2xl font-bold text-blue-600 my-2">NVL72</div>
<div class="text-xs opacity-70">2025 H2 出货<br/>72 GPU / rack<br/>1.5× GB200</div>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-center">

### Vera Rubin
<div class="text-2xl font-bold text-green-600 my-2">NVL144</div>
<div class="text-xs opacity-70">2026 H2 出货<br/>3.3× vs GB300</div>

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-center">

### Rubin Ultra
<div class="text-2xl font-bold text-orange-600 my-2">NVL576</div>
<div class="text-xs opacity-70">2027 H2 出货<br/>14× vs GB300</div>

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-center">

### Feynman
<div class="text-2xl font-bold text-purple-600 my-2">2028+</div>
<div class="text-xs opacity-70">下一代物理学家命名</div>

</div>

</div>

<div class="mt-6 text-sm opacity-70">
**"黄氏算法"被重新定义**：从 Rubin 起，GPU 数量按"封装中的 GPU 数量"算，不再按"封装数量"算 —— 同一台 NVL72 在新口径下就是 144。
</div>

<div class="mt-3 p-3 bg-gray-50 border-l-4 border-gray-400 rounded text-sm italic">

"按英伟达这样的节奏发布产品，已经是执行力非常强了。一般的芯片公司，产品到产品之间可能需要 3 到 4 年。"

</div>

---
layout: two-cols
---

# Scale Out：CPO 硅光交换机

Keynote 上演示时"那几根黄色的线被缠在一起，弄了好久才弄开"——但这才是这次最颠覆的部分。

**CPO = Co-packaged Optics**

- 把原本插在交换机上的可插拔光模块
- 直接和 ASIC 一体化封装
- 光信号不再绕到光纤收发器，直接进交换芯片

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cpo-evolution.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# CPO 带来了什么

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 能效
<div class="text-4xl font-bold text-blue-600 my-2">3.5×</div>
<div class="text-xs opacity-70">vs 传统网络</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 可靠性
<div class="text-4xl font-bold text-green-600 my-2">10×</div>
<div class="text-xs opacity-70">网络可靠性提升</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 部署速度
<div class="text-4xl font-bold text-orange-600 my-2">1.3×</div>
<div class="text-xs opacity-70">部署时间缩短</div>

</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 旧：可插拔光纤收发器
<div class="text-3xl font-bold text-red-600 my-2">30–33 W</div>
<div class="text-xs opacity-70">每端口功耗</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 新：CPO 集成
<div class="text-3xl font-bold text-green-600 my-2">9 W</div>
<div class="text-xs opacity-70">每端口功耗</div>

</div>

</div>

---

# 为什么 CPO 突然成了"必需品"

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"OpenAI 去年做 4o 的时候，4o 之后训练它经常会训飞了。因为它那个时候的 Frontier model 已经基本穷尽了大部分的数据，所以它训练失败的次数很多。**GPT-5 的训练失败次数也非常多。**"

<div class="not-italic text-xs opacity-60 mt-2">— 嘉宾谈大模型训练实况</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

**逻辑链**

1. 越往前沿走，训练失败次数越多
2. 失败多 → 你必须做大量实验
3. 实验要短 ——
   <span class="italic">"你不能说我一个实验丢出去两个礼拜没消息，这是不能忍受的。"</span>
4. 想缩短时间 → 必须提速 GPU 之间的数据通讯
5. CPO 就是为这个准备的

</div>

---

# 一段小八卦：CPO 不是英伟达发明的

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

**老黄在 keynote 怎么说**

"我们发明了世界上首个 MRM（微镜）技术 …… 这是它的样子。"

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**光学行业从业者怎么说**

CPO 这个技术从 **2000 年左右**业界就在研究，最早叫 *Monolithic Integrated Photonic IC*。最大的研究支持机构是 **Intel** —— 当年是为大数据驱动的。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**英伟达的硅光是收购来的**

- 2019 年收购以色列 **Mellanox**
- Mellanox 的硅光技术又来自 2013 年收购的 **Kotura**
- 老黄"为这个技术找到了一个能让它走进千千万万家的应用：AI 数据中心"

</div>

---
layout: two-cols
---

# 硅光为什么这么难

<div class="mt-3">

**精度要求是疯狂的**

- 微环谐振器比头发还小 **10 倍**
- 一个纳米级误差，对应的光波长就完全过不去
- 每个 micro resonator 都需要：
  - 自己的 heating pad
  - 精密反馈温度调控
  - 在 50 GHz 速度下保持对齐

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs italic">

"在硅基光子的行业中，大家也不用提良率，因为大家都知道良率非常非常的差。"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./microring-scale.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 良率出来都是 0：每一代都从头来

<div class="mt-6 flex justify-around items-end">

<div class="text-center">
<div class="p-3 rounded bg-gray-50 border-2 border-gray-200">
<div class="text-2xl font-bold">100G</div>
<div class="text-xs opacity-60 mt-1">2012 年节点</div>
</div>
<div class="text-xs mt-2 opacity-70">Apache Spark 起步<br/>Snowflake 出现</div>
</div>

<div class="text-center text-2xl opacity-40">→</div>

<div class="text-center">
<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-300">
<div class="text-2xl font-bold">400G</div>
<div class="text-xs opacity-60 mt-1">Google 推动</div>
</div>
</div>

<div class="text-center text-2xl opacity-40">→</div>

<div class="text-center">
<div class="p-3 rounded bg-orange-50 border-2 border-orange-300">
<div class="text-2xl font-bold">800G</div>
<div class="text-xs opacity-60 mt-1">疫情之前</div>
</div>
</div>

<div class="text-center text-2xl opacity-40">→</div>

<div class="text-center">
<div class="p-3 rounded bg-red-50 border-2 border-red-300">
<div class="text-2xl font-bold">CPO</div>
<div class="text-xs opacity-60 mt-1">AI 时代</div>
</div>
</div>

</div>

<div class="mt-8 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm italic">

"从 100G 到 200G、200G 到 400G、400G 到 800G —— 都是 0。一出来良率都是 0。然后你的研发费用基本上就是 5 个亿美元往上走。"

</div>

---

# 是 LLM 把这件事变得"值得做"

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">

"如果这个 LLM 只是一个千亿美元级的市场的话，老黄根本就不会干这个事。这个研发太贵了。现在已经到了万亿美元级的市场，老黄说——那好了，有钱来了。"

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-lg">

"反正这个东西是不违反这个世界的物理定律的，你只要砸钱砸得够狠，不违反物理定律的事情都是能做成的。"

</div>

<div class="mt-6 text-sm opacity-70">

**作者概括**：这其实是 800G 历史的重演——市场需求倒逼研发，钱够了，良率问题、温控问题就一点点磨过去。差别是这次的应用规模大到不需要再"找应用"了。

</div>

---
layout: two-cols
---

# Dynamo：嘉宾口中的"第二个 CUDA"

Keynote 上软件侧的最大动作：开源 **NVIDIA Dynamo**——AI 推理服务软件，Triton 推理服务器的"接班人"。

**为什么算第二个 CUDA**

- 早期布局一个新方向（推理）
- 开源 + 免费 + 把生态做厚
- 给客户实打实降本，绑定使用

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">

"英伟达基本上 60% 以上的护城河，都来自于软件。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dynamo-routing.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Dynamo 的四大组件

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 1. GPU Planner
动态加减 GPU，避免配置过度或不足。

<div class="text-xs opacity-70 mt-2">类比：餐厅高峰加派厨师，闲时关闭厨房</div>

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 2. Smart Router
LLM 感知的路由器，把请求送到"已经握有相关 KV 缓存"的 GPU。

<div class="text-xs opacity-70 mt-2">类比：客服系统把老客户接给之前服务过他的接线员</div>

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 3. Low-Latency Comm Library
推理优化的 GPU-to-GPU 通信库，加速异构设备数据交换。

<div class="text-xs opacity-70 mt-2">直接踩 NVLink + CPO 的硬件优势</div>

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 4. Memory Manager
在低成本显存与高速显存间智能搬移 KV 缓存。

<div class="text-xs opacity-70 mt-2">类比：不常用工具进仓库，工作台留给最紧要的活</div>

</div>

</div>

---

# Dynamo 带来的性能数据

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-300 text-center">

### AI 工厂整体
<div class="text-5xl font-bold text-blue-600 my-3">40×</div>
<div class="text-sm opacity-70">Blackwell NVLink72 + Dynamo<br/>vs Hopper（英伟达官方数据）</div>

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-300 text-center">

### 单 GPU 每秒 token
<div class="text-5xl font-bold text-green-600 my-3">30×</div>
<div class="text-sm opacity-70">在 GB200 NVL72 集群上跑 DeepSeek-R1</div>

</div>

</div>

<div class="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-lg text-center">

"the more you buy, the more you save"<br/>
现在甚至比这个以前还要更好——<br/>
**"the more you make"**

</div>

<div class="text-xs opacity-60 text-center mt-2">老黄的"买得越多省得越多" → "赚得越多"</div>

---

# 真有人能挑战英伟达吗？

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">

2023 年华美半导体协会上，一位 AI 芯片从业者 challenge 黄仁勋：稀疏化、RISC-V、wafer-scale Cerebras …… 我们这些定制 AI 芯片，是不是还有机会？

老黄的回答是——

</div>

<div class="mt-6 p-6 bg-purple-50 border-l-4 border-purple-500 rounded">

<div class="text-3xl font-bold text-center text-purple-700 my-3">
"大家都有机会，但是机会不大。"
</div>

<div class="text-sm opacity-70 text-center mt-3">
当时大家觉得非常好笑，老黄还是非常幽默的。<br/>
但两年后，无论是投资人还是芯片领域的人，都基本赞同这个结论。
</div>

</div>

---

# AMD：参数好看，但软件烂

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 纸面上：MI300 vs H100

- 内存容量看起来更大
- 价格比英伟达便宜约 40%
- 参数表非常美

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 真测起来

- **ROCm（CUDA 对标品）"全是 bug"**
- 模型根本跑不通、推不出来
- 实际性能远低于参数

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

"AMD 目前我理解它能做得比较成熟的，就是 8 张卡互联。就 8 个卡，你看英伟达在 2027 年都要 576 个卡互联了。**这之间的差距已经没办法去弥补了。**"

</div>

<div class="mt-3 text-xs opacity-60">
说明：嘉宾在原话中提到 MI300 内存 190G 时口误，已在原视频字幕中更正为 128G（MI350 为 192G）。
</div>

---
layout: two-cols
---

# 集群差距比单卡差距更要命

**为什么互联差距更难追**

- AMD 没有 NV Switch 的对位芯片
- 它的 NVLink 替代品稳定效率约为 1/2
- 没有 NV Switch 就做不了大集群
- 所以"只有这 8 个卡"

**真正在卖的不是 GPU，是"GPU + 互联 + 调度"打包**

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./interconnect-gap.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# ASIC："Groq 和 ASIC，它们不配活着吗？"

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### TPU 的硬约束

- 核心晶体管单元比英伟达大 **2–4 倍**（设计能力不足导致）
- 大就意味着良率低 —— **不到 90%**（英伟达可能 99%）
- 量产很难

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### ASIC 的商业约束

- "我谷歌的芯片只能在谷歌的生产里用"
- 亚马逊芯片只能在亚马逊用
- 通用性很窄，**出不来**

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**有意思的反例**：

谷歌自己有那么多 TPU，但**也采购了大量英伟达的卡**——因为英伟达的卡要用在云上给客户用，TPU 只用在它内部的训练和搜索上。**ASIC 和 GPU 会共存，但英伟达拿走绝大部分通用计算。**

</div>

---

# 老黄的"旧卡推理 + 新卡训练"

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

**策略**

- **新一代卡** → 卖给训练侧客户（在意时间）
- **上一代旧卡** → 卖给推理侧客户（在意成本）
- 旧卡已经折旧了，**用折旧后的旧卡成本去打 AMD / 初创的新卡**

</div>

<div class="mt-6 p-5 bg-green-50 border-l-4 border-green-500 rounded">

**真正的杀招：训练和推理共享同一套软件框架**

- 客户做 software 部署的成本大幅降低
- 同一个 CUDA / Dynamo 同时支撑两个场景
- 想从英伟达迁出，要同时迁两套

</div>

<div class="mt-4 text-sm opacity-70 italic text-center">

"在产能受限的情况下，就针对训练做一直做这种又大又能够 scale out 的卡，但是只是旧卡用来做推理。"

</div>

---

# 真正的对手不是 AMD，是云厂商

<div class="mt-6 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

<div class="text-lg italic">

"如果把视角放大一点，Nvidia 其实它不是在和 AMD、Groq 或者 ASIC 这些去竞争。**它其实是在和这些云计算的厂商，在跟 Amazon、Microsoft 去竞争。** 算力是这里面非常非常重要的一个子战场。"

</div>

<div class="text-xs opacity-60 mt-2">— 嘉宾对竞争格局的重新框定</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 训练侧
"绝对的霸主地位"<br/>
<span class="text-xs opacity-60">毫无疑问</span>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 推理侧
竞争会更激烈<br/>
<span class="text-xs opacity-60">但旧卡 + Dynamo 已铺好</span>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### 端侧
未来 AMD 的机会窗口<br/>
<span class="text-xs opacity-60">"AMD 配在这个市场上活着"</span>

</div>

</div>

---
layout: two-cols
---

# "超级碗"阳谋：每个人都是赢家

老黄自己对去年和今年的 GTC 做了个类比：

- 去年 = **Rock Concert** 秀肌肉
- 今年 = **Super Bowl** 美国春晚

Super Bowl 的特别之处：**每一个参与方都是赢家**。两队、广告商、转播商、观赛游客——人人有收益。

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded italic">

"Nvidia is gonna make everyone a winner."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./super-bowl.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 三个 AI 基础设施 + 一张万亿赌桌

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 云端
AI Infrastructure<br/>
<span class="text-xs opacity-60">超大规模</span>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 企业级
AI Infrastructure<br/>
<span class="text-xs opacity-60">私有部署</span>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 机器人
AI Infrastructure<br/>
<span class="text-xs opacity-60">Physical AI</span>

</div>

</div>

<div class="mt-8 p-5 bg-purple-50 border-l-4 border-purple-500 rounded text-center">

<div class="text-sm opacity-70">黄仁勋的预测</div>
<div class="text-5xl font-bold text-purple-700 my-3">$1 万亿</div>
<div class="text-sm opacity-70">2028 年数据中心支出</div>

</div>

---

# 那股价的下一个故事是什么

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**嘉宾的诚实答案：GPT-5**

</div>

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"投资人都是一帮简单粗暴的人。他就是要看到，大家不要想得太复杂，说白了就是要 **GPT-5 出来了**，让大家明显地看到——我们堆算力还是特别有效，而且确实把模型带到了下一个境界。那可能就又都冲回来了。"

</div>

<div class="mt-5 p-5 bg-orange-50 border-l-4 border-orange-500 rounded">

**如果 GPT-5 不出来怎么办？**

> "我觉得就是要花相当长一段时间，世界真的理解了英伟达在生态链中的这么一个特别重要的作用，股价才会慢慢有它该有的位置。"

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"它出了这个 Dynamo，其实就相当于是在大模型 AI 领域，又再造了一个 CUDA。"
<div class="text-xs opacity-60 mt-1 not-italic">— 嘉宾 / 对 Dynamo 的定性</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"大家都有机会，但是机会不大。"
<div class="text-xs opacity-60 mt-1 not-italic">— 黄仁勋 2023 / 对 AI 芯片同行</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"你不能说我一个实验丢出去两个礼拜没消息，这是不能忍受的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 嘉宾 / 解释为什么必须做 CPO</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"不违反物理定律的事情都是能做成的——只要你砸钱砸得够狠。"
<div class="text-xs opacity-60 mt-1 not-italic">— 嘉宾 / 解释硅光为什么终于做出来了</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"AMD 的软件让你用的时候就全是 bug，你根本就跑不通模型。"
<div class="text-xs opacity-60 mt-1 not-italic">— 嘉宾 / 对 ROCm 的实测体验</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"在 GPU 领域，除了英伟达以外，只有 AMD 配在这个市场上活着。"
<div class="text-xs opacity-60 mt-1 not-italic">— 嘉宾 / 论 GPU 市场格局</div>
</div>

</div>

---
layout: end
---

# Nvidia is gonna make everyone a winner.

<div class="mt-6 text-sm opacity-60">
硅谷101 · GTC 2025 深度解析 · 主持人 陈茜
</div>
