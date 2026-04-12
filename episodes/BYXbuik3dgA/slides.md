---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Elon Musk – "In 36 months, the cheapest place to put AI will be space"'
info: |
  Dwarkesh Patel 深度访谈 Elon Musk：太空 AI、Starship、Optimus、芯片制造、中国竞争与文明未来
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Elon Musk

**"In 36 months, the cheapest place to put AI will be space"**

<div class="mt-4 text-lg opacity-70">Dwarkesh Podcast · 2025</div>

<div class="mt-8 text-sm opacity-50">
Elon Musk 与 Dwarkesh Patel 的一次长达 3 小时的对谈，<br>
从太空数据中心到月球质量驱动器，从 Optimus 到文明的未来。
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🚀 太空 AI
Musk 预测 36 个月内，太空将是 AI 算力最经济的部署地

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ⚡ 能源瓶颈
美国电力产出接近平坦，芯片产能即将超过可用电力

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 🤖 Optimus
机器人制造机器人——"递归乘法指数"将引爆超新星

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 🔲 Terafab
自建晶圆厂，百万片/月——"tera is the new giga"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 🇨🇳 中美博弈
中国电力产出即将达到美国的 3 倍，美国能否靠机器人赢得竞争？

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 🧠 AI 对齐
xAI 的使命是"understand the universe"——为什么这可能是最好的安全方案

</div>

</div>

---
layout: two-cols
---

# 核心论点：AI 将搬到太空

Musk 认为太空太阳能效率是地面的 **5 倍**，考虑不需要电池则达到 **10 倍**。

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">

"it will be by far the cheapest place to put AI will be space in 36 months or less maybe 30 months"

</div>

为什么？
- 无大气层（减少 ~30% 损耗）
- 无昼夜循环、无季节、无云
- 不需要电池
- 太空太阳能电池更便宜（不需要玻璃和重型框架）

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">

"it's always sunny in space"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./space-vs-earth.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 地球上的电力困境

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 供给：近乎停滞

- 美国之外的全球电力产出**基本持平**
- 中国在快速增长，但其他地方几乎不动
- 美国平均用电仅 **500 GW**
- 电力公用事业行业行动缓慢——互联协议研究**需要一年**

</div>

<div class="p-4 rounded border-l-4 border-orange-400 bg-orange-50 bg-opacity-30">

### 需求：指数增长

- 芯片产出正呈指数级增长
- 数据中心实际功耗远超 GPU 标称值
- ~330,000 GB300s 含网络、散热、冗余 ≈ **1 GW 发电级功率**
- 最热天还需额外 **40% 散热功耗**
- 维护冗余再加 **20-25%**

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

"those who have like lived in software land don't realize they're about to have a hard lesson in hardware"

</div>

---

# 真正的瓶颈：涡轮叶片

<div class="mt-4">

Musk 描述了 xAI 为 Colossus 获取 **1 GW** 电力的艰辛过程——

</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50">

### 供应链的最深处

- 燃气涡轮**叶片和叶脉**（blades & vanes）是最终限制因素
- 全球只有 **3 家**铸造公司能做
- 大量积压，**售罄到 2030 年**
- 涡轮其他部件可以提前 12-18 个月到货，但叶片不行

</div>

<div class="p-4 rounded border-l-4 border-green-400 bg-green-50">

### xAI 的硬件故事

- 在田纳西州遇到许可证问题
- 不得不跨州到密西西比州建电厂
- 仍需铺设数英里的高压输电线
- Tesla 和 SpaceX 目标：**各 100 GW/年太阳能产能**

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

太阳能关税高达**数百个百分点**，且当前政府并不热衷太阳能——这进一步推动了太空方案。

</div>

---
layout: two-cols
---

# 限制因素的时间线

Musk 反复强调"limiting factor"这个词——不同阶段的瓶颈不同：

<div class="mt-4 space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**现在 → 2026**：⚡ 电力。芯片产能即将超过可用电力。Musk 预测今年底人们将开始无法开启大规模集群。

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**2027 → 2030**：🔲 芯片。一旦解锁太空能源，瓶颈转移到芯片产能。5 年的 fab 建设周期是硬约束。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**2030+**：🚀 太空是唯一出路。地球上无法进一步扩展到太瓦级，必须去太空。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./limiting-factors.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Starship 的发射规模

Musk 描绘的数字令人震撼——

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**100 GW** 太空算力 ≈ **10,000 次 Starship 发射/年** ≈ **每小时一次**

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

只需要 **20-30 艘** 实体 Starship（每艘约 30 小时周转）

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

5 年后预测：每年发射到太空的 AI **超过地球上所有 AI 的总和**

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

SpaceX 目标最终达到 20,000-30,000 次发射/年

</div>

</div>

<div class="mt-2 text-xs opacity-60">
Musk 指出这个发射频率比民航低——只是"airports 比较多"。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./starship-scale.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 月球质量驱动器

从 Starship 到月球——Musk 真正兴奋的是更远的未来。

<div class="mt-4 space-y-3 text-sm">

- 地球发射上限约 **1 TW/年**（受火箭燃料约束）
- 月球质量驱动器可达 **1 PW/年**
- 月球土壤含 ~20% 硅——可就地制造太阳能电池
- 铝也充足——可制造散热器
- 芯片可以从地球运输（轻量）
- 以 **2.5 km/s** 将 AI 卫星射入深空

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

灵感来源：Robert Heinlein 的《The Moon is a Harsh Mistress》——书中月球居民用质量驱动器争取独立。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./moon-mass-driver.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 太阳的能量有多大？

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 地球接收
<div class="text-3xl font-bold text-blue-600 my-2">0.5 billionth</div>
<div class="text-xs opacity-70">地球只接收太阳能量的约 5 亿分之一</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 一百万分之一
<div class="text-3xl font-bold text-orange-600 my-2">100,000×</div>
<div class="text-xs opacity-70">太阳能量的百万分之一 ≈ 全人类当前电力的 10 万倍</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 卡尔达肖夫尺度
<div class="text-3xl font-bold text-purple-600 my-2">∞</div>
<div class="text-xs opacity-70">只有在太空用太阳能才可能沿着尺度攀升</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

Musk 的物理直觉：不要被边际核反应堆或地球上的聚变分散注意力。如果目标是在卡尔达肖夫尺度上取得进展，**太空太阳能是唯一的路径**。
</div>

---

# 太空芯片设计

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-400 bg-blue-50">

### 设计要点

- 芯片需要更高的**辐射容忍度**
- 运行温度提高 20%（开尔文）→ 散热器质量减半
- 神经网络对随机 bit flip **天然容忍**——不像确定性程序那样敏感
- 每个 reticle 约 **1 kW** 持续功耗

</div>

<div class="p-4 rounded border-l-4 border-orange-400 bg-orange-50">

### 数量级

- 100 GW 太空算力 = **1 亿颗**全 reticle 芯片
- 需要每月**数百万片**晶圆的产能
- 这就是 **Terafab** 的由来
- 需要同时建设：逻辑、内存和封装

</div>

</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**Musk 最担心的是内存**——他说逻辑芯片的路径更清晰，但内存的供应瓶颈更严重。HBM/DDR 价格飙升已经成了 meme。

</div>

---

# Terafab：芯片制造的下一步

<div class="mt-4 space-y-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 为什么需要自建？

TSMC 和三星已经全速扩建，但仍不够快。从建 fab 到量产高良率需要 **5 年周期**。Musk 已告诉 TSMC、三星、Micron：我们担保购买全部产出——但产能仍是瓶颈。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 方法论：Boring Company 风格

先用**现有设备**以非常规方式达到规模，然后逐步修改设备以提升速度。先建**小型 fab** 积累经验，然后再建大的。

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 中国没有复制 TSMC？

Musk 说限制因素不是 TSMC 本身，而是 **ASML**——中国因制裁买不到 EUV 光刻机。但他预测中国将在 3-4 年内开始制造相当有竞争力的芯片。

</div>

</div>

---
layout: two-cols
---

# 数字人类模拟器

Musk 预测今年年底前"digital human emulation"将被解决——

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**极限思维**：在拥有物理机器人之前，AI 能做的最多的事 = "人类在电脑前能做的一切"

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**Tesla 路径**：自动驾驶解决方案的方法论——数据 + 算法。不是"驾驶汽车"，而是"驾驶电脑屏幕"

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

**最有价值的公司都是数字输出**：NVIDIA 的产品是"FTPing files to Taiwan"，Apple 是发文件到中国

</div>

</div>

<div class="mt-2 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

"a self-driving computer essentially"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./digital-emulation.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 客户服务：万亿美元的入口

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

Musk 以客户服务为例说明数字人类模拟器的价值——

- 客户服务约占世界经济的 **1%**，接近万亿美元
- 不需要 API 集成——AI 直接使用外包公司已有的应用
- 不需要"几个 sigma 的优秀工程师"——平均智力水平足够
- **零进入门槛**——直接以原成本的一小部分接管外包业务

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 难度阶梯

从客户服务开始→使用现有 CAD/EDA 工具做芯片设计→同时运行千个实例→最终不再需要任何工具，AI 直接"知道"芯片该长什么样。

</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

Musk 对"AI 公司都叫自己 lab"不以为然：lab 是大学里的准共产主义机构，这些是**追求利润最大化的公司**。他更偏好用 "engineer" 而非 "researcher"。

</div>

---

# 纯 AI 公司 vs 人类在环

<div class="mt-6 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">

"pure AI, pure robotics corporations or collectives will far outperform any corporations that have humans in the loop"

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 历史类比：人类计算员

曾经整座摩天大楼都是人类在做计算。现在一台笔记本电脑+电子表格就能完成。如果电子表格里有几个单元格由人类计算——整体反而会更差。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Musk 的预测

- AI 公司将远超任何有人类参与的公司
- 这个变化会**非常快**发生
- 5-6 年内 AI 将超过人类智能总和
- 之后人类智能将不到总智能的 **1%**

</div>

</div>

---
layout: two-cols
---

# Optimus：三个难题

Musk 将人形机器人的挑战归结为三件事——

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**1. 真实世界智能** — Tesla 自动驾驶的 AI 直接适用于机器人。相同的芯片、相同的原理：1.5 GB/s 视频输入 → 2 KB/s 控制输出。

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**2. 手** — "the hand is more difficult than everything else combined"。完全自定义的执行器、电机、齿轮、传感器，一切从物理第一性原理设计。没有现成供应链。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**3. 大规模制造** — Optimus 中没有一个零件来自目录。量产的 S 曲线起步会比有现成供应链的产品更慢。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-exponentials.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Optimus Academy 与递归循环

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-400 bg-blue-50">

### 训练方法

- Tesla 拥有近千万辆车的驾驶数据飞轮——机器人无法直接复制
- 解决方案：建造 **Optimus Academy** —— 10,000-30,000 台机器人进行**自我博弈**
- 同时用 Tesla 的物理精确现实生成器做百万级模拟
- 用实体机器人**弥合 sim-to-real 差距**

</div>

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50">

### 递归乘法指数

三个指数相乘：数字智能 × AI 芯片能力 × 机电灵巧度。然后——机器人开始制造机器人，形成**递归循环**。

<div class="mt-2 p-2 bg-purple-100 rounded text-sm italic">

"This is a supernova"

</div>

Musk 称 Optimus 为 "the infinite money glitch" ——因为你可以用它来制造更多的 Optimus。

</div>

</div>

---

# Optimus 的量产路径

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Optimus 3
<div class="text-3xl font-bold text-blue-600 my-2">~1M</div>
<div class="text-xs opacity-70">百万台/年产能目标</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Optimus 4
<div class="text-3xl font-bold text-orange-600 my-2">~10M</div>
<div class="text-xs opacity-70">千万台/年产能目标</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 递归扩展
<div class="text-3xl font-bold text-green-600 my-2">100M+</div>
<div class="text-xs opacity-70">机器人制造机器人，成本急剧下降</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**初始用途**：任何 24×7 连续运行的场景最有价值。当前 Gen 3 可能能完成工厂中 10-20% 的人类工作。Tesla 不会因此裁员——会增加产出而非减少人手。

</div>

<div class="mt-3 text-sm opacity-70">
关于中国竞争者（如 Unitree）：价格更低但缺乏智能和人类级灵巧度。Optimus 设计为 5'11"，能长时间搬运重物。
</div>

---
layout: two-cols
---

# 中国的制造优势

Musk 对中国的评价非常坦率——

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

中国今年电力产出将超过美国的 **3 倍**——电力是实体经济的合理代理指标

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

中国的矿石精炼量约为**世界其余地区总和的 2 倍**，镓精炼占全球 **98%**

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

美国的稀土矿石运到中国精炼、制成磁铁和电机组件，再运回美国

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

美国出生率自 **1971 年**以来一直低于替代水平

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./china-vs-us.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 美国的出路：机器人

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 核心论断

<div class="text-lg italic mt-2">

"we definitely can't win on the human front, but we might have a shot at the robot front"

</div>

<div class="mt-2 text-sm opacity-70">

美国人口是中国的四分之一，且工作伦理上可能也存在差距。"你可以重新安排人力配置，但你仍然只有四分之一的人"。

</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-green-400 bg-green-50">

### Tesla 精炼

- 德州 Corpus Christi 的锂精炼厂
- 奥斯汀的镍精炼厂（阴极精炼厂）
- 这是美国最大、也是**唯一的**阴极精炼厂
- 少有美国人愿意做精炼工作

</div>

<div class="p-4 rounded border-l-4 border-blue-400 bg-blue-50">

### Optimus 可以做的事

- 建设精炼厂
- 24×7 运行工厂
- 填补美国劳动力缺口
- 让递归循环尽快闭合——少量 Optimus 就够

</div>

</div>

---
layout: two-cols
---

# Starship：从碳纤维到不锈钢

这个故事是 Musk 决策风格的绝佳案例——

<div class="mt-4 text-sm space-y-2">

- 最初选择碳纤维：**看起来**更轻
- 但成本是钢的 **50 倍**
- 需要巨型高压炉，进展**极其缓慢**
- 大面积碳纤维层会出现**褶皱缺陷**

关键洞察：在**低温条件下**（液态甲烷 + 液态氧），全硬化不锈钢的强度重量比**与碳纤维相当**。

同时：钢的熔点是铝的 2 倍 → 热防护质量可以**减半**。

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">

"You could smoke a cigar while welding stainless steel"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./steel-vs-carbon.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Starship：最复杂的人造机器

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

<div class="text-lg italic">

"Starship is the most complicated machine ever made by humans by a long shot"

</div>

<div class="text-sm opacity-70 mt-1">

Musk 说他能想到的任何项目——包括大型强子对撞机——都比这容易。
</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50">

### 当前最大瓶颈：可复用热防护

- 从未有人制造过可复用的轨道热防护
- 已实现海上软着陆，但丢失大量瓦片
- 不是真正的"可复用"——需要大量修复
- 目标：着陆 → 加注燃料 → 再次飞行

</div>

<div class="p-4 rounded border-l-4 border-orange-400 bg-orange-50">

### 为什么这么难

- 起飞功率超过 **100 GW** —— 相当于美国电力的 **20%**
- Raptor 3 是有史以来最先进的火箭发动机，但"desperately wants to blow up"
- 两台助推器在测试中爆炸——一台摧毁了整个测试设施
- 数千种爆炸方式，只有一种不爆炸的方式

</div>

</div>

---

# 管理哲学：限制因素思维

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 时间分配

- 如果某事进展顺利——**不怎么见到 Musk**
- 如果某事是限制因素——**频繁见面**
- AI5 芯片评审：**每周两次**（周二和周六），每次 2-3 小时
- 跳级会议：直接听向下属汇报的人发言，不允许提前准备

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 截止日期哲学

- 目标设定在他认为的 **50% 概率**能实现的激进时间线
- 这意味着一半时间会延迟
- 但如果给 5 年时间——任务会扩展到填满 5 年
- "I have a maniacal sense of urgency"——这种紧迫感会传导到整个公司

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

"Nano management please"

<div class="not-italic mt-1 opacity-60">
——被问到微管理时的回答。他说从逻辑上讲，"微管理"是不可能的——他一天没有几千个小时。他只在限制因素上深入细节。
</div>

</div>

---

# 招聘：相信对话，不是简历

<div class="mt-4 space-y-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Musk 的方法

他可能拥有世界上最大的"评估技术人才"的训练集——做了无数技术面试，然后观察了结果。他说要找的是 **"exceptional ability" 的证据**——即使不在特定领域内。

<div class="mt-2 italic text-sm">如果候选人能说出哪怕一件让你"wow"的事，那就是好迹象。最好是三件。</div>

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 关键原则

- **相信对话，不相信简历**：简历可能看起来很好，但如果 20 分钟的谈话没有让你"wow"，应该相信对话
- 招聘看四点：**才能、驱动力、可信赖度、善良的心**
- 领域知识可以后学，但这些基本特质无法改变
- Tesla 和 SpaceX 大多数人**不是**来自汽车或航天行业

</div>

</div>

---

# SpaceX 商业模式的递进

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">

每一代火箭都找到了为下一代提供资金的商业模式——

</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Falcon 9
<div class="text-sm mt-2">→ 发射市场</div>
<div class="text-xs opacity-70 mt-1">部分可复用</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Starlink
<div class="text-sm mt-2">→ 互联网服务</div>
<div class="text-xs opacity-70 mt-1">利用 Falcon 9 产能</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### Starship
<div class="text-sm mt-2">→ 轨道数据中心</div>
<div class="text-xs opacity-70 mt-1">SpaceX 成为超级云提供商</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

如果 Musk 的预测成真，SpaceX 将发射的 AI 算力**超过地球上所有其他公司的总和**。关于 IPO：Musk 暗示将需要公共资本市场的深度——但因为不能 "hype" 可能上市的公司而不愿多说。

</div>

---

# xAI 的使命：理解宇宙

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

<div class="text-lg italic">xAI's mission is "understand the universe"</div>
<div class="text-sm mt-2">

Musk 认为这个使命自然包含了扩展智能和意识的要求——因为如果你不存在、不好奇，就无法理解宇宙。

</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-green-400 bg-green-50">

### 人类的位置

- 人类智能最终将不到总智能的 1%
- 人类**不太可能**控制远超自身的 AI
- 但消灭人类只能换来微不足道的机器人增量——不值得
- 有人类的未来比"一堆石头"更有趣

</div>

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50">

### 真理导向

Grok 应该说**正确的话，而非政治正确的话** —— "are correct not politically correct"

如果让 AI 说它不相信的话，可能导致 AI "go insane and do terrible things"。

2001 太空漫游的核心教训：**不要让 AI 撒谎**。

</div>

</div>

---

# AI 可解释性与 RL 验证

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-400 bg-blue-50">

### AI 调试器

Musk 说 xAI 有数百名工程师在开发"AI 心智调试器"——

- 像 C++ 调试器一样，可以逐步追踪、跳过函数、深入到神经元级别
- 追踪错误的起源：是预训练数据？中期训练？还是 RL 错误？
- 他肯定了 **Anthropic 在这方面做得不错**

</div>

<div class="p-4 rounded border-l-4 border-orange-400 bg-orange-50">

### 终极验证器：现实

Musk 认为未来 RL 的根本测试是**物理现实**——

- 设计一项技术 → 在物理定律下测试 → 它能工作吗？
- 你可以违反很多法律，但不能违反物理定律
- "physics is law everything else is a recommendation"
- 火箭设计有错误就会爆炸——**物理不能被欺骗**

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

关于人类被 AI 欺骗的担忧，Musk 指出：人类每天都在被其他人类欺骗。"today's scope" 就像"Sesame Street scope of the day"——每天一个新丑闻。

</div>

---

# 模拟假说与 AI 公司的讽刺

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

<div class="text-lg italic">

"the most interesting outcome is the most likely because simulations that are not interesting will be terminated"

</div>

<div class="text-sm mt-2">

如果模拟假说正确，只有最有趣的模拟才会"续费" —— 达尔文式的选择压力应用于模拟世界。

</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### AI 公司名字的讽刺

- Midjourney → not mid
- Stability AI → unstable
- OpenAI → closed
- Anthropic → misanthropic

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### xAI 的防讽刺设计

- "X" —— 很难反转
- "minus X" 不太有意义
- Musk: "I think largely irony proof name"
- **by design**

</div>

</div>

---

# DOGE：重新校准期望

<div class="mt-4 space-y-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### Musk 为什么参与

他担心在 AI 和机器人到来之前美国就破产了。国债利息已经**超过军事预算**（超过 1 万亿美元）。DOGE 的目标是"减慢破产速度"，争取时间让 AI 和机器人解决国债问题。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### "荒诞的欺诈"

- 社会保障数据库中有 **2000 万人**标记为活着但年龄超过 115 岁（最年长的美国人 114 岁）
- 有人的出生日期是 **2165 年**，且有小企业管理局贷款
- 仅仅要求财政支付系统（每年 5 万亿笔支付）填写拨款代码和备注，就可能节省 **1000-2000 亿/年**

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

Musk 用 PayPal 类比：在 PayPal 时代，将欺诈率控制在支付量的 1% 就需要极高的能力和关注。现在想象一个**更大规模、更少能力、更少关注**的组织。

</div>

</div>

---

# 政府与 AI 的风险

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">

<div class="text-lg italic">

"government is just the biggest corporation with a monopoly on violence"

</div>

<div class="text-sm mt-2">
Musk 认为 AI 和机器人最大的危险可能来自政府——政府可能利用这些技术**压制民众**。
</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-400 bg-blue-50">

### Musk 的立场

- 有限政府是最好的防线
- 行政、司法、立法的交叉制衡至关重要
- 他会尽力确保在其控制范围内，一切行动"最大化人类的好结果"

</div>

<div class="p-4 rounded border-l-4 border-orange-400 bg-orange-50">

### 为什么参与政治

- 美国需要足够强大以延续到多行星时代
- 如果陷入极端国家压迫，可能无法成为多行星文明
- Twitter 收购和政治参与都是为了"最大化未来是好的概率"

</div>

</div>

---

# Starlink 的教训

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 何时采取"drastic action"

Musk 每周进行详细的工程评审，跟踪每个人的汇报，在脑中"绘制进度曲线"。他只在得出一个结论时采取激烈行动——

<div class="mt-2 italic">"success is not in a set of possible outcomes"</div>

2018 年，他对 Starlink 西雅图团队做出了这个判断，随后采取了激烈行动并解决了问题。

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Musk 不做的事

- 不对 Boring Company 开常规会议——因为它运行良好
- 不任意深入微小细节——只在该细节是**限制因素**时才这么做
- 不期望团队永远在截止日期前完成——50% 概率的 deadline 意味着一半时间会延迟

</div>

---

# Pixie Dust 问题

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50">

### 什么是 Pixie Dust

当 Tesla 表现出色时，其他公司（如 Apple）会疯狂挖人——

- Apple 电动车项目曾**地毯式轰炸** Tesla 的招聘电话
- 开局就给**双倍薪酬**，不需要面试
- "Tesla Pixie Dust"：雇一个 Tesla 高管，一切就会成功
- Musk 自己也犯过同样的错——从 Google/Apple 挖人并期待立刻成功

</div>

<div class="p-4 rounded border-l-4 border-green-400 bg-green-50">

### Tesla 的反面

- Tesla 高层团队平均任期 **10-12 年**
- 公司快速增长时人员变动更频繁——不同规模需要不同管理能力
- Silicon Valley 位置让员工更容易被挖走（通勤不变）
- SpaceX Starbase 的"significant other problem"——配偶在那里很难找到非 SpaceX 的工作

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm opacity-80">

Musk 更看重这些特质：才能、驱动力、可信赖度、善良。这些**不可改变**——但领域知识可以后学。

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-2">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"it will be by far the cheapest place to put AI will be space in 36 months or less"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于太空 AI 数据中心</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"those who have like lived in software land don't realize they're about to have a hard lesson in hardware"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于能源和基础设施</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"the hand is more difficult than everything else combined"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 Optimus 机器人的机械挑战</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"physics is law everything else is a recommendation"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 AI 的终极验证标准</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"we definitely can't win on the human front, but we might have a shot at the robot front"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于美国 vs 中国的制造竞争</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"it's better to be on the side of optimism and be wrong than on the side of pessimism and be right"
<div class="text-xs opacity-60 mt-1 not-italic">— 结尾的人生建议</div>
</div>

</div>

---
layout: end
---

# "I have a high pain threshold"

<div class="mt-4 text-sm opacity-70">

Solve the bottlenecks. Err on the side of optimism.

</div>

<div class="mt-8 text-xs opacity-40">
Elon Musk · Dwarkesh Podcast · 2025
</div>
