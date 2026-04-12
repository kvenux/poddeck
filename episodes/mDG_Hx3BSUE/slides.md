---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Dylan Patel — The single biggest bottleneck to scaling AI compute'
info: |
  SemiAnalysis CEO Dylan Patel 从 $600B 超大规模资本开支讲到 3.5 台 EUV 光刻机 = 1 GW
  算力的硬约束，解释为什么半导体——而非电力——才是 AI 真正的天花板。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
fonts:
  sans: 'Inter'
  serif: 'Source Serif Pro'
---

# The Single Biggest Bottleneck to Scaling AI Compute

<div class="text-lg opacity-80 mt-4">半导体供应链才是 AI 的终极瓶颈</div>

<div class="mt-10 text-sm opacity-60">
Dylan Patel · SemiAnalysis CEO<br/>
Dwarkesh Podcast · 2025
</div>

<div class="mt-8 text-xs opacity-50">
Big 4 资本开支 $600B · Anthropic 收入月增 $6B · ASML 每年只能造 70 台 EUV<br/>
当所有人都在谈电力瓶颈时，真正的约束在晶圆厂深处
</div>

---

# 为什么这一期值得看

<div class="text-sm opacity-70 mb-4">一位坐拥 AI 基础设施最全数据的人，把整条供应链从头拆到尾。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### $600B 资本开支去哪了
Big 4 今年合计 $600B capex——大部分不是今年上线的算力，而是未来 3-5 年的涡轮机定金、土地和电力协议。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 半导体才是真瓶颈
电力和数据中心可以扩，但 EUV 光刻机每年只能多造几十台——这才是 2028-30 年的硬上限。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 内存危机正在挤压消费者
DRAM 价格翻了 3-4 倍，智能手机出货量可能腰斩，iPhone BOM 增加 $150。

</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Anthropic vs OpenAI 算力竞赛
Anthropic 保守签约，OpenAI 激进锁定 5 年合同——commitment 差异正在兑现为真实的算力差距。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 中美半导体长期博弈
快时间线美国赢，慢时间线中国赢——取决于 AI 何时真正产生经济回报。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 太空数据中心？不是这个十年
芯片而非能源才是约束——在地球上尽快部署芯片比送上太空更有价值。

</div>

</div>

---

# $600B 资本开支：大部分不是今年的算力

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

### 今年增量：~20 GW
Dylan 指出今年美国增量 AI 数据中心容量约 20 GW，但 $600B capex 中很大一部分用于未来几年的准备工作。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 一万亿的乘数
加上供应链其余部分（涡轮机、土地、电力协议、半导体），总投入达万亿美元量级。

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-4">

**Google $180B capex 的去向：**
- 2028-29 年涡轮机定金
- 2027 年数据中心建设
- 电力购买协议和预付款

</div>

<div class="mt-4 p-4 text-sm italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20">

Dylan: 当整条供应链加起来达到万亿美元量级时，大家真正应该关注的是——这些钱在向哪个时间点汇聚。

</div>

</div>

</div>

---

# Anthropic vs OpenAI：算力 Commitment 之战

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### OpenAI：激进签约
- 绝大多数算力签了 **5 年长约**
- 大量与 CoreWeave、Oracle 合作
- 甚至找了从未建过数据中心的 SoftBank Energy
- 曾一度被市场质疑付不起——但融了 $110B 后所有人又信了

</div>

<div class="p-4 rounded border-l-4 border-blue-400 bg-blue-50 bg-opacity-30">

### Anthropic：保守策略
- 签合同但有意"低估"，不想冒破产风险
- 最大供应商是 Google 和 Amazon（质量最高）
- 现在收入暴涨后被迫转向更多新兴供应商
- Dylan 估计年底可达 **5-6 GW**（含 Bedrock/Vertex/Foundry）

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>关键洞察</strong>：早期锁定算力的人在长约中获得了巨大的利润率优势。Anthropic 的"保守"在收入爆发后变成了真实的算力缺口——它不得不以更高价格在现货市场补算力。

</div>

---

# GPU 越旧越值钱？反直觉的折旧逻辑

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mb-4">

### 传统观点 vs 现实
Michael Burr 认为 GPU 折旧应该 3 年。但 Dylan 指出，由于模型进步让 H100 能跑更强的模型（如 GPT-5.4 远优于 GPT-4 且更便宜），H100 的实际价值反而上升了。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 定价逻辑已变
在算力极度短缺的环境中，GPU 价格不由"能买到的下一代更好芯片"决定，而由"这块芯片今天能产出多少价值"决定。

</div>

</div>

<div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded mb-4">

### H100 现货价飙升
Dylan 提到有 AI 实验室以 **$2.40/小时** 签了 2-3 年的 H100 合同——而 H100 全周期部署成本只有 $1.40/小时。利润率极高。

</div>

<div class="mt-4 p-6 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20">

"an H100 is worth more today than it was 3 years ago"

<div class="text-xs opacity-60 mt-1 not-italic">— Dylan Patel</div>
</div>

</div>

</div>

---
layout: two-cols
---

# 瓶颈正在迁移

2023 年瓶颈是 CoS/封装，2024 年是电力和数据中心，2025-26 年转向内存和逻辑晶圆——最终在 2028-30 年落到 ASML 的 EUV 光刻机。

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**为什么越来越难？** 数据中心不到 1 年就能建好。晶圆厂要 2-3 ��。ASML 的 EUV 光刻机供应链有 **10,000+ 供应商**，每台造价 $3-4 亿，年产仅约 70 台。

</div>

<div class="mt-3 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

Dylan 直言：电力供应链"足够简单"，可以通过资本主义和人类创造力解决。但半导体供应链的复杂度完全不在一个量级。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./bottleneck-shift.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# AI 计算供应链全景

从上到下，利润被逐层截留。越靠近底层的玩家，lead time 越长，锁定能力越强。

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>AI Labs</strong>：Anthropic / OpenAI 是最大的终端买家，争夺算力
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Cloud</strong>：AWS / GCP / CoreWeave 签长约锁利润
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>Chip</strong>：Nvidia 已签 $90B 长期合同，是 TSMC 最大客���
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>Fab + Memory</strong>：TSMC + SK Hynix / Samsung，产能用尽
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Tooling</strong>：ASML + Zeiss + Cymer——最长 lead time，最终瓶颈
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./supply-chain-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# EUV 光刻机：地球上最复杂的量产机器

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded mb-3">

### 四大核心组件
1. **EUV 光源**（Cymer / 圣迭戈）：锡滴被激光连续击打 3 次，激发 13.5nm 极紫外光
2. **投影光学**（Carl Zeiss）：18 面多层反射镜，需纳米级精度
3. **掩模台**（Wilmington, CT）：加速度高达 **9G**
4. **晶圆台**（欧洲）：与掩模台反向运动，同样 9G

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

组装在荷兰 Veldhoven → 拆卸 → 多架飞机运输 → 客户现场重新组装测试。整个过程耗时数月。

</div>

</div>

<div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded mb-3">

### 为什么不能快速扩产？
- 供应链有 **10,000+** 独立供应商
- Carl Zeiss 的镜片产能没有扩过——因为他们不认为 AI 需求能持续
- 每个零件精度要求 **亚纳米级**（overlay 误差 < 3nm）
- 年产量从 60 台到 100 台，已经是极限扩张

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

Dylan 的评价：ASML 可能是世界上"最慷慨"的公司之一——拥有绝对垄断却没有像 Nvidia 那样激进提价，始终让工具能力增长快于价格增长。

</div>

</div>

</div>

---
layout: two-cols
---

# EUV 算术：3.5 台机器 = 1 GW 算力

制造 1 GW 的 Rubin 芯片需要：
- ~55,000 片 3nm 晶圆（每片 20 道 EUV）
- ~6,000 片 5nm 晶圆
- ~170,000 片 DRAM 晶圆

总计约 **200 万次 EUV 曝光**。

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

一台 EUV 每小时处理 ~75 片晶圆，开机率 ~90%。算下来 **3.5 台 EUV = 1 GW**。

</div>

<div class="mt-3 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**关键对比**：1 GW 数据中心造价约 $500 亿，但支撑它的 3.5 台 EUV 仅值 ~$12 亿。上千亿的经济价值被 $12 亿的工具产能卡住。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./euv-math.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 到 2030 年能有多少 AI ���力？

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 现有 EUV 存量
<div class="text-4xl font-bold text-blue-600 my-2">250-300</div>
<div class="text-xs opacity-70">当前全球已部署的 EUV 工具</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 每年新增
<div class="text-4xl font-bold text-orange-600 my-2">70→100</div>
<div class="text-xs opacity-70">从今年的 ~70 台增长到 2030 年的 ~100 台</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 2030 年总量
<div class="text-4xl font-bold text-red-600 my-2">~700</div>
<div class="text-xs opacity-70">700 ÷ 3.5/GW = ~200 GW 理论上限</div>

</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">

**Sam Altman 要 52 GW/年**——只占 200 GW 的 25%，考虑到他今年约占 Blackwell GPU 的 25%，这个数字"其实很合理"。但当你把 Elon（100 GW/年）、Anthropic、Google、Meta 全加起来——供应链根本不可能满足所有人。

</div>

---
layout: two-cols
---

# 内存危机：AI 正在吃掉消费者的 DRAM

30% 的大厂 capex 正流向内存。HBM 每个 bit 消耗的晶圆面积是普通 DRAM 的 3-4 倍，这意味着每释放 1 bit AI 内存，要从消费市场挤走 4 bit。

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
DRAM 价格已翻 3-4 倍：从 ~$3-4/GB 涨到 ~$12/GB
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
iPhone BOM 增加 ~$150（DRAM + NAND 共同影响）
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
小米、OPPO 砍低端和中端机型出货量达一半
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
Dylan 预测智能手机总出货量从 1.1B 降到可能 5-6 亿
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./memory-squeeze.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么不用普通 DRAM 替代 HBM？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mb-4">

### 带宽差一个数量级
- HBM4 单 stack：**2048 bit 宽**，10 GT/s → ~2.5 TB/s
- DDR5 同面积：**64-128 bit 宽**，~8 GT/s → ~64-128 GB/s
- 同等芯片边缘面积（~13mm），HBM 带宽是 DDR 的 **~20x**

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

Dwarkesh 问：能不能做一个 "Claude Code slow mode"，用低带宽换低成本？Dylan 说：没人真的想等——最高价值的任务也有时间敏感性。

</div>

</div>

<div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded mb-4">

### 四个约束维度
推理性能受限于四个因素中任何一个：
1. **算力 (FLOPs)**
2. **网络带��**
3. **内存带宽** ← HBM 核心优势
4. **内存容量**

换成 DDR 后容量翻 4x，但带宽暴跌 → 大量算力闲置等待数据。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**关键认知**：你真正关心的指标是每片晶圆能提供的带宽（bandwidth per wafer），而不是每片晶圆的存储位数（bits per wafer）。

</div>

</div>

</div>

---

# 为什么不回到 7nm 造更多芯片？

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

Dwarkesh 提出：A100 到 B100 的 FP16 性能差只有 ~3x，但制程从 7nm 到 4nm——看起来制程带来的提升不大。能否重新启用 7nm 产线？

</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### Dylan 的反驳：FLOPs 不是公平比较

- 每代芯片优化的 numeric 不同（FP16 → FP8 → FP4）
- 真正的性能差距来自 **片内通信 vs 片间���信**
- Blackwell vs Hopper 跑 DeepSeek/Kimi K2.5，100 tokens/s 时性能差 **~20x**——远超 FLOPs 差距

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 通信带宽的阶梯

| 域 | 带宽量级 |
|---|---|
| 片内 | 数十 TB/s |
| 片间（同 rack） | TB/s |
| 跨 rack | 数百 GB/s |
| 跨数据中心 | GB/s |

每跨一层，效率损失一个数量级。先进制程能把更多算力塞进单芯片，减少跨层通信。

</div>

</div>

---
layout: two-cols
---

# 三大 Scale-Up 架构对比

不同的 AI 芯片厂商选择了不同的 scale-up 拓扑——这直接决定了大模型能用多少芯片高效协同���

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
**Nvidia NVL72**：72 GPU all-to-all，交换拓扑，从 H100 的 8 GPU 一步跳到 72
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
**Google TPU Pods**：4000-9000 芯片，torus 拓扑（每芯片连 6 邻居），必须跳转
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
**Amazon Trainium**：混合方案，部分 all-to-all + 部��� torus
</div>

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

三家都在向 **dragonfly 拓扑** 收敛：部分全连接 + 组间连接，兼顾规模和效率。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaleup-compare.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么小模型 + 快迭代 > 大模型？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mb-4">

### 算力分配的三个池子
1. **推理**（inference）= 收入
2. **开发**（pre-training + RL）= 下一代模型
3. **研究**（实验、探索）= 计算效率增益

Dylan 认为研究带来的效率增益最大——模型成本每年降 10x 甚至更多。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Google 是例外**：因为 TPU Pod 巨大且统一，Google 能高效训练最大的生产模型（Gemini Pro 参数量超过 Opus 和 GPT-5.4）。

</div>

</div>

<div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded mb-4">

### 小模型的复利效应

5T 参数模型 RL 每个 rollout 比 1T 模型大 5 倍。即使大模型 sample efficiency 好 2 倍，小模型仍然能做 2 倍的 rollout，更快完成 RL，更早投入研究辅助下一代模型。

**这个复利循环是所有实验室都在追求的**：最快的 takeoff。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

其他实验室（Anthropic / OpenAI）面对异构算力（H100、H200、Blackwell、Trainium、TPU），优化大模型的难度远高于 Google 的纯 TPU 集群。

</div>

</div>

</div>

---

# Google 的觉醒与 Anthropic 的信息不对称

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

Dylan 分享了一个细节：2024 年 Q3 初，Anthropic 的 compute team（来自 Google 的两位核心人员）发现了 TPU 产能缺口，在六周内多次追加了大量 TPU 容量——Google 甚至要去跟 TSMC 解释这波突然增长。

</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Anthropic 先看到了
大量新增 TPU 产能实际是卖给了 Anthropic。Google 自己在 Gemini 收入起飞（Q4 达到 $5B ARR）后才反应过来，开始疯狂追加——买电力公司、涡轮机定金、大量购地。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 但 TSMC 的回复是…
"Sorry, we're sold out for next year." Google 只能争取到 2026 年 5-10% 的增量，真正的产能要等 2027。

<div class="mt-2 text-sm opacity-70">**供应链的信息不对称**：谁先理解需求曲线，谁就能抢到产能。</div>

</div>

</div>

---

# Alchian-Allen 效应：算力越贵，越要用最好的模型

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mb-4">

### 经济学原理
如果两种苹果（好/差）各 $2/$1，加上 $1 固定运输成本后变成 $3/$2——好苹果的相对溢价从 2x 降到 1.5x，人们更倾向选好苹果。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 应用到 AI
GPU 从 $2/h 涨到 $3/h。如果一块 GPU 能产 100 万 Opus token 或 200 万 Sonnet token，Opus 和 Sonnet 的**价格差距缩小了**——因为基础算力成本涨了，模型质量差带来的边际成本差反而变小。

</div>

</div>

<div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded mb-4">

### 市场验证
Dylan 观察到：当前所有收入都集中在最好的模型上。在算力受限的世界里，愿意为最好模型付更高溢价的买家会"挤出"其他需求。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 连锁效应
Anthropic 收入暴涨但算力不够 → 必须 **demand destroy**（主动抑制需求）。Dylan 说当前 Claude Code 的可靠性较低，正是因为他们极度算力受限。

</div>

</div>

</div>

---

# 中美 AI 竞赛：时间线决定赢家

<div class="mt-4 p-6 text-xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-20">

"fast timelines, US wins, long timelines, China wins"

<div class="text-xs opacity-60 mt-1 not-italic">— Dwarkesh 总结 Dylan 的观点</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 快时间线（美国赢）
- 美国正在投入近万亿美元的数据中心 capex
- Anthropic / OpenAI 年底各达 5-10 GW
- 中国 AI 实验室的算力扩张远不及美国
- 当模型无法从美国模型蒸馏后，差距会拉大
- ROIC 高 → 经济增长加速 → 正反馈循环

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 慢时间线（中国赢）
- 中国正在构建完全自主的半导体供应链
- Dylan 认为中国 2030 年"肯定"有完全国产化 DUV
- EUV 也会有工作样机，但量产还需时间
- 如果 AI 回报不如预期，美国"建过头"的风险更大
- 到 2035 年，中国可能在半导体总产能上超过西方

</div>

</div>

---

# Nvidia 如何锁定半导体供应链

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded mb-4">

### 先发优势
Nvidia 比 Google、Amazon 更早向 TSMC 下不可取消/不可退货的订单，甚至提前支付定金。当其他芯片设计公司因为延迟而让出产能时，Nvidia 一直在要求"更多、更多、更多"。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 全面锁定
- **TSMC 最大客户**
- **SK Hynix 最大客户**（最大内存厂商）
- 已签 **$90B** 长期合同
- 正在与内存厂商签 3 年长约

</div>

</div>

<div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded mb-4">

### AGI Pilled？不完全是
Dylan 认为 Jensen 不像 Dario 那样 "AGI pilled"，但他比供应链中几乎所有人都更激进。Nvidia 在供应链上的表现就像 OpenAI 在算力上的表现——激进签约，不怕过度承诺。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 供应链中的"信仰阶梯"
Anthropic / OpenAI 知道需要 X → Nvidia 建 X-1 → 供应链每层再打折 → ASML/Zeiss 可能只建 X÷2。每一层的 AI conviction 都在衰减——这就是为什么产能永远不够。

</div>

</div>

</div>

---
layout: two-cols
---

# 电力不是瓶颈——有 16+ 种方案

Dylan 追踪了超过 16 家不同类型的电力供应商。到 2030 年代，约一半新增容量将来自 "behind the meter"（表后电力）。

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
联合循环燃气轮机（只有 3 家厂商，但只是冰山一角）
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
航改燃机：把飞机发动机改成发电机（Boom Supersonic 在做）
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
船用发动机：Nebius 在新泽西给微软用货船引擎发电
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
燃料电池（Bloom Energy）、太阳能+储能、往复式发动机…
</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

即使单位成本高达 **$3,500/kW**（联合循环的 2 倍+），对 GPU TCO 的影响也只是每小时多几美分。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./power-sources.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 太空数据中心：不是这个十年

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mb-4">

### 太空的优势
- 能源"免费"（太阳能）
- 不受地面许可限制

### 但 Dylan 的反驳
- 芯片才是瓶颈，不是能源——太空解决不了
- GPU 可靠性差（15% 的 Blackwell 需要 RMA），在太空维护成本极高
- 部署延迟 ~6 个月——在算力极度稀缺的当下，这 6 个月可能是芯片生命周期的 10%

</div>

</div>

<div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded mb-4">

### 网络拓扑问题
- Starlink 卫星间光通信 ~100 Gbps
- 但 InfiniBand 是 400 GB/s **per GPU**，乘以 72 GPU = 一个 rack 要 ~28.8 TB/s
- 模型越来越稀疏，需要跨成百上千芯片——卫星间带宽差太多

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

Dylan 的结论：Elon 的成功从来不是靠 20% 的边际优化，而是 10x 的颠覆。太空数据中心终会有 10x 的那一天——但不是这个十年。芯片受限的世界里，唯一正确的策略是让芯片一出厂就开始产 token。

</div>

</div>

</div>

---

# Huawei：如果有 TSMC 先进制程，可能比 Nvidia 更强

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Huawei 的全面能力
Dylan 认为 Huawei 是全球唯一在以下所有维度都有布局的公司：
- **顶级软件工程**
- **顶级网络技术**（本身就是网络设备巨���）
- **自有 AI 研究**（比 Nvidia 更强的 AI 研究能力）
- **自有晶圆厂**
- **自有终端市场**（卖 token）

如果 2019 年没有被禁用 TSMC，Huawei 当时已经超过 Apple 成为 TSMC 最大客户。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 历史证据
- Huawei Ascend 是世界上第一个 7nm AI 芯片——比 Google TPU 早 2 个月，比 Nvidia A100 早 4 个月
- 现在 Huawei 在封装（advanced packaging）上发力弥补制程差距，把多个芯片堆叠到一个封装中
- Elon 的 robot 芯片选择在 Samsung（而非 TSMC）生产，一定程度上就是为了避开 TSMC 上与 AI 芯片的争抢

</div>

</div>

---

# Leopold 与 SemiAnalysis 数据

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mb-4">

### 为什么 Leopold 赚得最多？
Dwarkesh 问：SemiAnalysis 的数据这么好，为什么只有 Leopold Aschenbrenner 用它赚了"离谱的���"？

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Dylan 的回答
Leopold 的独特之处不是数据本身——而是他对 AGI takeoff 有最强的 conviction。SemiAnalysis ~60% 收入来自产业客户（AI 实验室、芯片公司、超大规模云厂商），~40% 来自对冲基金。

</div>

</div>

<div>

<div class="p-6 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20 mb-4">

"he's the only client of mine that tells me our numbers are too low. Everyone else tells me our numbers are too high."

<div class="text-xs opacity-60 mt-1 not-italic">— Dylan Patel 谈 Leopold</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**数据 ≠ alpha**。Dylan 的数据让市场更有效——但真正的 alpha 来自对这些数据背后趋势的 conviction 强度。去年如果你相信"内存价格会涨 4 倍、智能手机出货量降 40%"，你就能提前布局。但绝大多数人被告知这个预测后的反应是：你疯了。

</div>

</div>

</div>

---

# TSMC 与 Apple 的权力关系正在逆转

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Apple 不再是王者
- 今年 Apple 还是 N2（2nm）的主要客户
- 但到明年就降到 ~50%，之后快速下降
- **A16 节点的首个客户不是 Apple，而是 AI 芯片**
- TSMC 的 HPC/AI 芯片利润率高于手机芯片——TSMC 更有动力优先分配给 AI

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### Apple 的困境
- 内存涨价 → iPhone BOM 上升 $150+
- TSMC 不会踢走 Apple，但会"缩减弹性产能"
- 以前 Apple 每年超额预订 10% 再逐步裁减——以后这个空间没了
- 最终 TSMC 会要求 Apple 像 Nvidia 一样预付 capex、提前 2 年锁产能

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**历史性转变**：Apple 从 TSMC 成立以来最重要的客户，正在变成"普通客户"。TSMC capex 持续膨胀但 Apple 业务增长停滞——它在 TSMC 收入中的占比将持续萎缩。

</div>

---

# Taiwan 风险：一条蛇在吃自己的尾巴

<div class="mt-4 p-6 text-lg italic border-l-4 border-red-500 bg-red-50 bg-opacity-20">

"it's like a snake eating its own tail"

<div class="text-xs opacity-60 mt-1 not-italic">— Dylan Patel 论 Taiwan 供应链循环依赖</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 循环依赖
EUV 光刻机本身也需要半导体——而这些半导体是在 Taiwan 制造的。你不能没有 Taiwan 的芯片来造光刻机，也不能没有光刻机来在 Taiwan 造芯片。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 如果 Taiwan 出事
- 空运工程师 + 炸毁晶圆厂 → 中国反而在半导体垂直整合上胜出
- 全球新增算力从每年几百 GW 降到 Intel + Samsung 的 10-20 GW
- 美国/全球 GDP 不只是增速放缓——会大幅萎缩
- 已有的存量算力远不及正在扩张的增量

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-2">这期对谈里最值得记住的几句：</div>

<div class="space-y-1.5 text-sm">

<div class="px-3 py-1.5 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"the biggest bottleneck is compute... the longest lead time supply chains are not power or data centers. They're actually the semiconductor supply chain themselves"
<span class="text-xs opacity-60 not-italic">— Dylan Patel，论真正的瓶颈</span>
</div>

<div class="px-3 py-1.5 bg-green-50 border-l-4 border-green-500 rounded italic">
"an H100 is worth more today than it was 3 years ago"
<span class="text-xs opacity-60 not-italic">— Dylan Patel，论 GPU 价值悖论</span>
</div>

<div class="px-3 py-1.5 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"fast timelines, US wins, long timelines, China wins"
<span class="text-xs opacity-60 not-italic">— Dwarkesh 总结中美 AI 竞赛逻辑</span>
</div>

<div class="px-3 py-1.5 bg-red-50 border-l-4 border-red-500 rounded italic">
"ASML is maybe one of the most generous companies in the world... they haven't taken price and margins up like crazy"
<span class="text-xs opacity-60 not-italic">— Dylan Patel，论 ASML 克制定价</span>
</div>

<div class="px-3 py-1.5 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"he's the only client of mine that tells me our numbers are too low. Everyone else tells me our numbers are too high."
<span class="text-xs opacity-60 not-italic">— Dylan Patel 谈 Leopold Aschenbrenner</span>
</div>

<div class="px-3 py-1.5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"we will be able to solve it through capitalism and human ingenuity on the time scales that are required"
<span class="text-xs opacity-60 not-italic">— Dylan Patel，论电力供应链的可解性</span>
</div>

<div class="px-3 py-1.5 bg-blue-50 border-l-4 border-blue-400 rounded italic">
"it's like a snake eating its own tail"
<span class="text-xs opacity-60 not-italic">— Dylan Patel，论 Taiwan 半导体循环依赖</span>
</div>

</div>

---
layout: end
---

# "the supply chain can't possibly build enough capacity for everyone to get what they want"

<div class="text-sm opacity-60 mt-4">
Dylan Patel · SemiAnalysis CEO<br/>
Dwarkesh Podcast · 2025
</div>
