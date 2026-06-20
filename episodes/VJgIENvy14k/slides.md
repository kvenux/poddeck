---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '数据中心上太空？新的泡沫，还是下一个金矿？'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 数据中心上太空？

<div class="text-xl mt-4 opacity-80">新的泡沫，还是<strong>下一个金矿</strong>？</div>

<div class="mt-10 text-sm opacity-60">
硅谷101 · 陈茜 · 太空算力专题
</div>

<div class="mt-2 text-xs opacity-50">
当 AI 的"能源怪兽"撞上地面瓶颈，一场"轨道算力"的圈地运动已经拉开帷幕
</div>

---

# 一场"轨道算力"的圈地运动

<div class="mt-2 text-sm opacity-70">
过去几年，AI 把数据中心变成了新的能源怪兽 —— 电力、散热、用水、选址，都成了进化瓶颈。于是这个"科幻"的想法被拎到台面上：
</div>

<div class="mt-6 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-40 rounded">
"在未来的 2 到 3 年内，太空就将成为部署 AI 数据中心成本最低的地方。"
<div class="text-xs opacity-60 mt-2 not-italic">— 马斯克在达沃斯论坛上的宣称</div>
</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>SpaceX</strong> 收购 xAI，合并后估值 <strong>$1.25 万亿</strong>。已向 FCC 提交高达 <strong>100 万颗</strong>卫星发射计划。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>谷歌 Suncatcher</strong>（捕光者）：预计 <strong>2027 年</strong>把首批"机架级算力"送入轨道。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>英伟达 × Starcloud</strong>：已经把搭载 <strong>H100 GPU</strong> 的卫星送入轨道，完成 Nano-GPT 在轨训练。
</div>

</div>

---

# 玩家清单：他们已经动手了

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 🚀 SpaceX / xAI

马斯克宣称<strong>「两年内成为现实，最迟三年」</strong>。
合并后最重要的事情之一，就是部署太空数据中心。
最终目标：太阳能 AI 卫星可能扩展至 <strong>数百太瓦</strong>。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🔵 蓝色起源 (贝佐斯)

一年多前秘密组建团队，开发轨道 AI 数据中心专用卫星。
公开表态：<strong>「我们将开始在太空建造这些巨型千兆瓦级数据中心。」</strong>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 🌞 Google · Suncatcher

「<strong>大约十年后，我们将把这种方式视为构建数据中心的一种更正常的途径。</strong>」
2027 年发射首批原型卫星。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 🧠 英伟达 × Starcloud

去年 11 月把 <strong>H100 GPU</strong> 送入轨道。
首次在太空完成 Nano-GPT 模型训练 —— 标志「太空算力建设」进入实践验证阶段。

</div>

</div>

---

# 地面的日子：一个"吞电巨兽"

<div class="text-sm opacity-70 mt-2">
如果今天问硅谷大佬们 AI 进化的终极瓶颈是什么 —— 大概率不是算法，不是人才，甚至不是芯片，而是电力和散热。
</div>

<div class="grid grid-cols-4 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 单集群规模
<div class="text-3xl font-bold text-red-600 my-2">~1 GW</div>
<div class="text-xs opacity-70">从过去几十 MW 跃升到逼近 1 吉瓦</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 一年用电
<div class="text-3xl font-bold text-orange-600 my-2">8.8 TWh</div>
<div class="text-xs opacity-70">相当于一座中等规模城市的全年用电</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-300">

### 单卡功耗
<div class="text-3xl font-bold text-yellow-700 my-2">~700 W</div>
<div class="text-xs opacity-70">H100 这类高端 GPU，集群动辄上万张</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 每 kWh 耗水
<div class="text-3xl font-bold text-blue-600 my-2">1-2 L</div>
<div class="text-xs opacity-70">百兆瓦数据中心每天上百万升水</div>

</div>

</div>

<div class="mt-6 text-xs opacity-60 text-center">
"<strong>几乎所有电，最后都会变成热</strong>" —— 散热正在变成比算力更昂贵的系统工程
</div>

---

# 散热：比算力更贵的系统工程

<div class="mt-2 text-sm opacity-70">
风冷已经满足不了，液冷成了必需品。但是 —— 随着 GPU 功耗继续上升，冷却系统的效率提升正在<strong>明显放缓</strong>。
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 地面正在卷的事

- 收购 / 改造发电厂
- 自建电网
- 抢购燃气轮机
- 研究核能

<div class="mt-3 text-xs opacity-60">"地面已经卷入了一场 <strong>AI 能源战争</strong>"</div>

</div>

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 自然浮现的问题

> 有没有一个地方 ——
> 能源更充足、更稳定，
> 散热也能更加直接高效？

<div class="mt-3 text-xl font-bold text-blue-700">答案，就是<strong>太空</strong>。</div>

</div>

</div>

---
layout: two-cols
---

# 太空准备的三份厚礼

地面永远无法提供的"算力天堂"：

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>☀ 能源</strong> · 24 小时不间断、近零成本的清洁太阳能
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>❄ 散热</strong> · 背景温度 3 K，把废热直接辐射进深空
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>⚡ 延迟</strong> · 真空中光速比光纤快 30%，全球算力秒达
</div>

</div>

<div class="mt-4 text-xs opacity-60">
持续能源、极端散热、接近物理极限的通信 —— 正是 AI 算力当下最稀缺的三样东西。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-gifts.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 厚礼一：能源 —— 从"间歇"到"连续"

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 在轨太阳能的逻辑

- 没有大气层折射
- 没有云层遮挡
- 没有昼夜交替
- 只要电池板够大，**理论上 24 小时不断电**

<div class="mt-3 p-2 bg-orange-100 rounded text-sm">
轨道太阳能利用效率是地面的 <strong>8-10 倍</strong>
</div>

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 为什么 AI 特别需要

AI 训练和推理最关键的<strong>不是"便宜的电"</strong>，而是：

> 长期稳定、不中断的功率输入

</div>

</div>

<div class="mt-5 p-4 italic border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-40 rounded">
"我们头顶上早就挂着一个免费的、不会熄火的终极能量源。在地面搞小型聚变就好比 ——
<strong>在南极装个迷你制冰机，然后说『快看 我们制出冰啦』，毕竟你旁边就是三千米高的冰川。</strong>"
<div class="text-xs opacity-60 mt-2 not-italic">— 马斯克对小型聚变热的看法，作者复述</div>
</div>

---

# 厚礼二：散热 —— PUE 可以无限逼近 1

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 太空散热的物理优势

- 背景温度 **3 K**（约 -270°C）
- 只需把散热板背对太阳
- 在真空里，热量<strong>不需要"被搬走"</strong>
- 而是以辐射的方式直接释放进深空

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 后果：PUE → 1

传统数据中心：约 **40%** 电力用于制冷（注：原文为"接近 4%"，疑为口误）

太空数据中心：理论上几乎所有电都进了算力，<strong>不必再为制冷买单</strong>

</div>

</div>

<div class="mt-5 p-4 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-40 rounded text-sm">
"如果能够非常好地利用太空的、接近绝对 0 度的这样一个环境，那数据中心产生的废热就可以通过<strong>辐射散热的方式直接排到深空当中</strong>，这样的话数据中心的电力使用效率就可以在理论上接近于 1。"
<div class="text-xs opacity-60 mt-2 not-italic">— Ethan Xu（前微软能源战略经理）</div>
</div>

---

# 厚礼三：延迟 —— 光在真空里更快

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 物理上的提速

- 光在真空中比在光纤里<strong>快 30%</strong>
- 通过激光链路，太空数据中心可以<strong>绕过</strong>陆地网络和海底电缆
- 实现"全球算力秒达"

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

### 拓扑学上的换位

当算力节点出现在轨道上：

> 它们<strong>不是"远离地球"</strong> ——
> 而是有可能在特定网络拓扑中，
> 变成<strong>更接近用户</strong>、更快的中继节点

</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
能源 ☀ + 散热 ❄ + 延迟 ⚡ —— 这三件事正好是 AI 算力当下最稀缺的三样东西。
</div>

---
layout: two-cols
---

# 两条主流路径

全球的探索逐渐收敛为两条路线，<br/>
解决的是不同层级的问题：

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>A. 在轨边缘计算</strong>
<div class="text-xs mt-1 opacity-70">把 AI 加速器送上既有卫星，数据就地分析、筛选、压缩。<br/>解决<strong>现在</strong>的问题。</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>B. 轨道云数据中心</strong>
<div class="text-xs mt-1 opacity-70">在轨道上构建真正的云计算基础设施 —— 多算力节点、星间通信、统一调度。<br/>押注<strong>未来</strong>的规模。</div>
</div>

</div>

<div class="mt-4 text-xs opacity-60">
浙江大学 & 南洋理工大学联合在 Nature 上发布的研究中，首次系统性提出了完整技术框架。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-routes.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 路线 A：Starcloud-1 —— 第一颗"算力卫星"

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 硬件规格

- 搭载一颗 <strong>H100 级别 GPU</strong>
- 整套算力系统只有 **60 公斤重**
- 大小相当于一台<strong>小型冰箱</strong>
- 接收来自合成孔径雷达（SAR）卫星群的数据，在轨道上实时处理

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 已完成的任务

- ✅ 调用谷歌开源模型 <strong>Gemma</strong>，向地球发送 "Hi 地球人 你们好"
- ✅ 跑了 Andrej Karpathy 打造的 <strong>NanoGPT</strong>，用莎士比亚全集训练
- ✅ 实时识别野火热信号、做情报分析

</div>

</div>

<div class="mt-5 p-3 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-40 rounded text-sm">
Starcloud-1 的成功 —— 太空中的算力<strong>第一次不再只是"辅助系统"</strong>，而开始<strong>直接参与计算本身</strong>。
</div>

---

# 为什么"在轨边缘"先跑通？

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 硬件可控
没有发明新计算架构 —— 还是成熟的<strong>数据中心级 AI 加速器</strong>，只是重新封装、适配太空环境。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 系统简单
一颗卫星 = 一类任务（遥感、气象、灾害监测、军事侦察）。是<strong>任务专用算力设备</strong>，不是分布式云。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 风险可控
即便一颗算力卫星出问题，影响是<strong>局部、可隔离</strong>的，不会像云那样"牵一发动全身"。

</div>

</div>

<div class="mt-5 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded text-sm">
"它是非常重要的第一步。最重要的是，要知道 GPU 能不能承受太空中的高能粒子，能不能提供几年的、或者<strong>十年以上的服务</strong>。"
<div class="text-xs opacity-60 mt-2 not-italic">— Ablimit Aili 博士（Nature 论文第一作者）</div>
</div>

---

# 但是 ——「边缘计算」的天花板

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-30">

### 适合的场景

- 图像识别
- 目标检测
- 事件筛选

<div class="mt-3 text-xs opacity-60">本质上是"任务专用算力设备"</div>

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 不适合的场景

- ❌ 通用的大规模计算
- ❌ 训练超大模型

物理上：受限于<strong>卫星体积、供电、散热</strong>，不可能无限堆叠 GPU。

</div>

</div>

<div class="mt-6 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
所以"在轨边缘计算"更多是一种 —— <strong>对太空数据中心的验证和尝试</strong>，而不是终极方案。<br/>
真正的野心，在路线 B。
</div>

---

# 路线 B：轨道云 —— 直接搬一个"云"上天

<div class="text-sm opacity-70 mt-2">
不再围绕某一类特定任务，而是在轨道上形成多算力节点、高速星间通信、受统一调度与编排的系统 ——
让太空算力能像地面云一样被<strong>调用、分配、扩展</strong>。
</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🌞 Google Suncatcher
从地面数据中心出发 —— 把它拆成卫星编队再搬上天。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 🚀 SpaceX / Starlink
从卫星星座出发 —— 让星座<strong>进化</strong>成算力云。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 🏢 集中式 (ISS / Axiom)
把一座小型地面数据中心整体<strong>搬到轨道</strong>。

</div>

</div>

<div class="mt-5 text-xs opacity-60 text-center italic">
路径不同、节奏不同，但指向同一个方向 —— <strong>算力正在被认真地推向轨道</strong>。
</div>

---
layout: two-cols
---

# Google Suncatcher：81 颗卫星编队

谷歌设想的轨道云：

<div class="space-y-2 mt-4 text-sm">

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>81 颗卫星</strong>，形成<strong>半径 1 公里</strong>的集群
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
铺在<strong>晨昏轨道</strong> —— 日照最稳定
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
每颗卫星上放 <strong>Google TPU 加速器</strong>
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
卫星之间用<strong>自由空间光通信（FSO）</strong>互联
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
"贴身飞行" —— 靠得很近但不撞车
</div>

</div>

<div class="mt-4 text-xs opacity-60">
本质上是把一座地面数据中心拆成小单元，再"太空化"。<br/>
首批两颗原型卫星预计 <strong>2027 年</strong>发射。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./suncatcher.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Suncatcher：辐射测试 + 发射成本曲线

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 谷歌专版 Trillium TPU

针对太空数据中心做了辐射测试：

- 在等效约 <strong>5 年轨道任务寿命</strong>的辐射剂量下
- TPU <strong>没有出现致命性失效</strong>

<div class="mt-3 text-xs opacity-60">硬件这一关，初步过了。</div>

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 发射成本的学习曲线

基于 SpaceX 发射数据推测：

<div class="mt-3 space-y-2 text-sm">

<div class="flex justify-between p-2 bg-orange-100 rounded">
<span>2030 年代中期 LEO</span>
<strong>&lt; $200 / kg</strong>
</div>

<div class="flex justify-between p-2 bg-orange-100 rounded">
<span>星舰可重复使用</span>
<strong>$60 / kg</strong>
</div>

<div class="flex justify-between p-2 bg-orange-100 rounded">
<span>极限情形</span>
<strong>甚至 $15 / kg</strong>
</div>

</div>

</div>

</div>

---

# SpaceX 路线：让星座进化成算力云

<div class="text-sm opacity-70 mt-2">
谷歌从"数据中心"出发；SpaceX 刚好相反 —— 它有一个现实存在的、规模最大的低轨星座。
</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 在轨规模
<div class="text-3xl font-bold text-orange-600 my-2">9300+</div>
<div class="text-xs opacity-70">活跃 Starlink 卫星</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 全球占比
<div class="text-3xl font-bold text-red-600 my-2">~65%</div>
<div class="text-xs opacity-70">所有在轨可运行卫星</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 底座
<div class="text-2xl font-bold text-purple-600 my-2">激光链路</div>
<div class="text-xs opacity-70">少数真正拥有"分布式硬件底座"的公司</div>

</div>

</div>

<div class="mt-6 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
现役 Starlink 卫星<strong>不会直接变数据中心</strong> —— 它们是为通信而生的。<br/>
SpaceX 接下来要发的，是<strong>「算力增强型卫星」</strong>：更高的供电、专门散热结构、更强星间接口；再与原 Starlink 通过激光链路组成<strong>分层式云系统</strong>。
</div>

---

# 第三种思路：集中式数据中心

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 优势

- 算力集中，类似地面数据中心
- 芯片之间<strong>通讯更快、更可靠、延时更低</strong>
- 结构集中、维护逻辑清晰
- 最接近地面工程思维

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 劣势

- 极高的发射和在轨建设成本
- 扩展性有限
- <strong>强烈依赖在轨维护能力</strong>
- 单点风险大：一旦出大问题，<strong>很多算力同时受影响</strong>

</div>

</div>

<div class="mt-5 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
代表玩家：<strong>NASA / 欧洲航天体系</strong>（在 ISS 上做过在轨计算实验）、
商业公司 <strong>Axiom Space</strong>、<strong>Voyager Space</strong> 研究在空间站嵌入数据中心的可行性。
</div>

<div class="mt-3 text-xs opacity-60 italic">
—— Aili 博士提醒：分布式那种"挂了几个还有几百个在"，集中式没有这种容错。
</div>

---
layout: two-cols
---

# 工程现实：卫星要被"推翻重做"

不是"多加一块芯片"那么简单。改的是：

<div class="space-y-2 mt-4 text-sm">

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>能源系统</strong> · 太阳能板面积大幅增加，<br/>电源管理必须能扛<strong>稳定、持续、不掉线</strong>的功率
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>中枢</strong> · 多出真正的计算载荷（AI 加速器、存储、数据处理单元）
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>散热结构</strong> · 增加专门的<strong>辐射散热板</strong>，把热量稳定送向深空
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>重量与重心</strong> · 这些变化反过来改变了发射要求和星座部署节奏
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./satellite-redesign.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "几十个足球场"的太阳能板

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 地面 100 MW 太阳能站

<div class="text-2xl font-bold text-orange-700 mt-2">≈ 200 个足球场</div>
<div class="text-xs opacity-70 mt-1">"是非常大的"</div>

</div>

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 同样太阳能板搬到太空

<div class="text-2xl font-bold text-red-700 mt-2">≈ 几十个足球场</div>
<div class="text-xs opacity-70 mt-1">展开之后的面积</div>

</div>

</div>

<div class="mt-5 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded text-sm">
"你要想办法用<strong>更轻质、更高效的材料</strong>，把太阳能板折叠好、发射到太空、再展开。
平时运维还要用<strong>自动化的方式 —— 比如机器人</strong> —— 去维护。
这就和在地面上派一个工人去排查、去修复，完全不一样了。"
<div class="text-xs opacity-60 mt-2 not-italic">— Aili 博士</div>
</div>

---
layout: two-cols
---

# 1 GW 数据中心：成本鸿沟

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 地面 1 GW
<div class="text-xl font-bold text-green-700 mt-1">≈ $516 亿</div>
供电+冷却设备占总建设成本 <strong>不到 10%</strong>，但却是真正卡脖子的地方。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 太空 1 GW（保守估算）
<div class="text-xl font-bold text-red-700 mt-1">可能上探到 $千亿</div>

光"发射 + 在轨组装"就达到 <strong>$200-300 亿</strong>，几乎追上地面整体造价。

</div>

</div>

<div class="mt-4 text-xs opacity-60">
NASA & JPL 测算：1 GW 持续功率需要<strong>数百万平方米级</strong>的太阳能阵列，总质量达<strong>上万吨级</strong>。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cost-stack.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 但为什么还有人押注？—— 长生命周期账

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 前期：高得离谱

- 算力 / 能源 / 散热都得<strong>拆分、减重、重新封装</strong>
- 多年无人维护 —— 元器件等级更高、测试周期更长
- 技术迭代<strong>更慢</strong>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 长期：可能比地面便宜

- 能源成本近乎为零
- 没有"PUE 税"
- 用几十年的低运行成本，弥补前期投入劣势

</div>

</div>

<div class="mt-5 p-4 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-40 rounded text-sm">
"太空数据中心从本质上来讲 —— 它基本上就是想用未来可能几十年的、特别低的运行成本上的优势，
<strong>去弥补自己前期投入成本上的劣势</strong>。"
<div class="text-xs opacity-60 mt-2 not-italic">— Ethan Xu</div>
</div>

---

# 监管挑战：把地球"包围起来"之后呢？

<div class="text-sm opacity-70 mt-2">
为了实现数据中心级算力，<strong>卫星群甚至会把地球包围起来</strong>。在近地轨道已经日益拥挤的情况下，这会带来系统性问题。
</div>

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### ⚠ 轨道拥挤

- 算力卫星<strong>更重、寿命更长、运行更复杂</strong>
- 不同国家、不同公司、不同类型同层运行
- 协调难度<strong>成倍放大</strong>

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 💥 太空垃圾

- 高功耗算力卫星失效 → 如果不能及时可控离轨
- 就可能成为<strong>长期碎片源</strong>
- 碎片在轨道上以极高速度传播风险
- 影响的不只是单个项目，而是<strong>整个轨道环境</strong>的长期安全

</div>

</div>

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
推进太空数据中心不仅需要技术和资本，还需要：<strong>新的轨道治理方式</strong>、更严格的离轨退役标准、跨国跨运营方的长期协作。
</div>

---
layout: two-cols
---

# 未来：混合算力，而不是替代

至少在可预见的未来 —— 地面数据中心依然有<strong>无可替代</strong>的优势：

<div class="space-y-2 mt-4 text-sm">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
🌍 <strong>地面</strong> · 主体算力 / 核心存储 / 高频交互
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
☁ <strong>太空</strong> · AI 训练（能耗大、对延迟不敏感）
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
☁ <strong>太空</strong> · 太空中产生的数据 → 太空就地处理
</div>

</div>

<div class="mt-4 text-xs opacity-60 italic">
Aili 博士：AI 训练的客户是公司内部科研人员，不是普通消费者 —— 对延迟、可靠性要求都没那么高。<strong>很适合搬到太空</strong>。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hybrid.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"在未来的 2 到 3 年内，太空就将成为部署 AI 数据中心成本最低的地方。"
<div class="text-xs opacity-60 mt-1 not-italic">— 马斯克 / 达沃斯论坛</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"大约十年后，我们将把这种方式视为构建数据中心的一种更正常的途径。"
<div class="text-xs opacity-60 mt-1 not-italic">— Google Suncatcher 计划</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"我们头顶上早就挂着一个免费的、不会熄火的终极能量源 —— 还要在南极装迷你制冰机？"
<div class="text-xs opacity-60 mt-1 not-italic">— 马斯克对小型聚变热的看法（作者复述）</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"如果能利用太空接近绝对 0 度的环境，废热可以直接辐射到深空 —— 数据中心电力使用效率就可以理论上接近于 1。"
<div class="text-xs opacity-60 mt-1 not-italic">— Ethan Xu（前微软能源战略经理）</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"它是非常重要的第一步。最重要的是要验证 —— GPU 能不能承受这些高能粒子，能不能提供十年以上的服务。"
<div class="text-xs opacity-60 mt-1 not-italic">— Ablimit Aili 博士 / 在轨边缘计算意义</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"想用未来几十年特别低的运行成本上的优势，去弥补自己前期投入成本上的劣势。"
<div class="text-xs opacity-60 mt-1 not-italic">— Ethan Xu / 太空数据中心的根本经济学</div>
</div>

</div>

---
layout: end
---

# 算力的边界

<div class="text-xl mt-6 opacity-80 italic">
"人类计算的边界，<br/>
<strong>如今已经不再止于地球了</strong>。"
</div>

<div class="mt-10 text-sm opacity-60">
硅谷101 · 陈茜 · 《数据中心上太空？新的泡沫，还是下一个金矿？》
</div>
