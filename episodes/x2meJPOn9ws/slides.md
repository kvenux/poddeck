---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'SpaceX崛起史：一切，为了去火星'
info: |
  硅谷101 实地探访 Starbase 与 SpaceX 总部，对话前高管 Lewis Hong，回顾这家"一直想去火星"的公司如何从破产边缘成为商业航天巨头。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# SpaceX 崛起史

## 一切，为了去火星

<div class="mt-10 text-base opacity-70">
硅谷101 · 实地探访 Starbase 与 SpaceX 洛杉矶总部 · 对话前高管 Lewis Hong
</div>

<div class="mt-6 text-sm opacity-50">
"我们要把人类送上火星"
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 实地走读 Day One

从 LAX 旁边那个**现在改成了卖冷冻鱼的小仓库**开始，到德州 Boca Chica 的星舰发射台。一家公司物理上的"成长史"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 三次起死回生

猎鹰 1 号三连炸 → NASA 圣诞节救命电话；猎鹰 9 号空中解体 → 半年憋出陆上回收；星舰发射台被自己震碎 → 筷子夹火箭。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 内部视角

前高管 Lewis Hong 亲历 2015–2016 至暗时刻，讲 Elon 在最低谷对全公司说的那一句话，以及私人飞机怎么变成 SpaceX 货机。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 商业飞轮

星链 114 亿、星盾 50 亿、CRS / CCP / NASA 全套合同 —— 看清楚 SpaceX 怎么把"去火星"这件事，变成自给自足的生意。

</div>

</div>

---

# Day One：从一个仓库开始

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 2002 年那个仓库

位于洛杉矶机场旁，**一切是从两个人开始的**——Elon 和 1 号员工、发动机专家 Tom Mueller。猎鹰 1 号**整个**是在这里开发的。

<div class="text-xs opacity-60 mt-3">
"飞鹰（猎鹰）1号没有那么大，飞鹰（猎鹰）1号是个小火箭。"
</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 今天它在卖冷冻鱼

SpaceX 搬走之后，仓库被一家海鲜公司租下来了。Lewis 站在门口说：

<div class="mt-3 italic text-sm">
"鱼的腥味儿还挺重的。这个地方应该没有设计过火箭的零部件，有吗？"
</div>

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
<strong>作者概括</strong>：历史不会给传奇标注"这里是起点"。起点就是一个又小又破的厂房。
</div>

---

# 源起："行为艺术" + 一张 Excel 表

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2001 — Mars Oasis

Elon 发现登月 30 多年后 NASA 竟没有重返月球计划。提出：

- 买一颗**退役的苏联导弹**
- 改装后送一个小温室去火星拍张照
- 用图片激发公众兴趣、逼涨 NASA 预算

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 莫斯科 — 皮鞋上的口水

去俄罗斯**三次**想买洲际导弹。报价毫无诚意；一位俄罗斯火箭设计师**对着马斯克的皮鞋吐口水**，觉得这美国土财主不懂火箭。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 回程飞机上的 Excel

铝合金、钛、碳纤维、推进剂…… 算下来，**材料成本只占火箭总售价的 3% 左右**。

剩下的 97% 是什么？官僚、低效供应链、波音 / 洛马习惯的**成本加成模式**。

</div>

---
layout: two-cols
---

# 火箭的钱花在哪了

材料其实不贵。

- **3%**：金属、燃料、零部件原料
- **97%**：流程、官僚、利润 markup

Elon 的结论很直接：既然贵的不是材料，那它就**不是科学问题**，是**组织问题**。

于是 2002 年用 PayPal 套现的钱成立 SpaceX。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rocket-cost-breakdown.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 猎鹰 1 号 · 荒岛求生

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 地点

**马绍尔群岛**一个 ~0.03 km² 的小岛
周围几千公里都是太平洋
**没淡水 没像样宿舍**

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 环境

海边盐雾对金属火箭**极其不友好**
工程师反复检查、清洁零件

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 任务

发射**人类历史上第一枚**
由私营公司建造的轨道级火箭
猎鹰 1 号

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 时间感校准

SpaceX 成立时间**早于 Facebook**，距离 iPhone 4 发布还有 8 年。这并不是一家年轻的公司，它已经在荒岛上煎熬了好几年才发出第一枚火箭。

</div>

---

# 三次失败的细节

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 2006-03 · 第 1 次

升空几十秒**坠毁**

热带盐雾腐蚀，一个燃料管路螺母**产生微小裂缝** → 燃料泄漏 → 发动机停机

<div class="text-xs opacity-60 mt-2">
"一群人不懂得做火箭"
</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 2007-03 · 第 2 次

一级正常 → 二级**姿控异常**

二级火箭引擎"因为震动太厉害，没有办法把它燃烧"，提前熄火，未达入轨速度

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 2008-08 · 第 3 次

一二级分离时**"追尾"**

二级慢了**一秒**，一级还有余力，撞上了二级；火箭剧烈晃动彻底失控，坠入太平洋

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-center">

"第三支火箭基本上是一个 99% 的成品。可是这显示了在太空里面 **99% 不够**，它就是要一个 100% 的整体方案。" — Lewis Hong

</div>

---
layout: quote
---

# 第三次失败后的那场即兴演讲

<div class="text-base mt-4 leading-relaxed">

"我想让你们每个人知道：**SpaceX 不会倒下**。<br/>
至于我，**我绝不会放弃。永远都不会**。<br/><br/>
我们已经有了第四次发射的资金，我准备好了。<br/>
我们需要振作自己，回到工位，找出问题，解决问题，准备好下次发射。<br/><br/>
**现在，回去工作吧。**"

</div>

<div class="mt-6 text-sm opacity-60">
转引自硅谷记者 Ashlee Vance 多源采访的还原（节目中明示并非逐字原文）<br/>
Elon 后来在现场问答中说："<strong>我从不放弃。除非我死了，或者彻底丧失了行动能力。</strong>"
</div>

---

# 救命的两笔钱

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 2008-08 · Founders Fund

第三次发射**失败的同月**，敲定 B 轮 **2000 万美元**。Founders Fund 是唯一的外部机构投资者。

<div class="mt-3 text-sm opacity-70">
那时硅谷 VC 在追 Facebook、Twitter、轻资产社交，硬科技无人问津。
</div>

<div class="mt-3 text-xs italic opacity-70 border-l-2 border-blue-300 pl-3">
"我们想要飞行汽车，却等来了 140 个字符。" — Peter Thiel
</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 2008-12-23 · NASA 的电话

账上钱只够再发一次工资。NASA 打来：CRS-1 合同 **16 亿美元**。

<div class="mt-3 text-xs italic opacity-70 border-l-2 border-green-300 pl-3">
"NASA 打来电话，告诉我们拿到了价值 15 亿美元的合同。当时我连电话都快拿不稳了，脱口而出 **'我爱你们'**。" — Elon
</div>

<div class="mt-2 text-xs opacity-60">
（口述时说 15 亿，最终合同金额 16 亿）
</div>

</div>

</div>

---
layout: quote
---

# 2008-09-28 · 第四次发射成功

<div class="text-3xl font-bold mt-4">"起飞了 宝贝"</div>

<div class="mt-6 text-base opacity-80 leading-relaxed">

人类历史上**第一枚**由私营公司成功发射的轨道级火箭。

载荷只是一个 165 公斤的金属块，在轨道上飞了**近 15 年**，直到 2023 年才坠回大气层烧毁。

</div>

<div class="mt-6 text-sm opacity-60">
从这一天起，太空不再由国家垄断。
</div>

---

# NASA 真的偏袒 SpaceX 了吗？

2006 年 COTS 招标，**21 家公司**投标，最终选了 2 家（其中之一就是 SpaceX）。落选的可以分成几类：

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1️⃣  换汤不换药

波音、洛马等传统承包商，方案是在 Delta / Atlas 火箭上**改吧改吧**

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 2️⃣  过于依赖俄罗斯

例如 CSI 直接引进**进步号飞船 + 联盟号火箭**，租俄罗斯发射场

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 3️⃣  方案过于超前

t/Space 提出"飞机驮火箭高空点火"；PanAero 的"太空面包车"魔改航天飞机

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 4️⃣  PPT 公司

连**原型机都没有**的"野鸡"公司

</div>

</div>

<div class="mt-5 text-sm opacity-70 italic text-center">

Lewis：NASA 的考量起跑点是"**我一定要能够达到这个任务**"，所以从来只给一家，但同时也会留位置给新公司。

</div>

---

# 反例：Rocketplane Kistler

赢得 COTS 的另一家，团队几乎清一色**前 NASA**。K-1 火箭的早期进度其实比 SpaceX 更快。

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 技术上的优势

- 团队基本上都是**工程师**
- NASA 技术评分**高于猎鹰 1 号**
- K-1 也是可回收火箭方案

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 缺了一个 Elon

- 正值金融危机，融资极难
- VC 不感兴趣
- **没人愿意自掏腰包**
- 2007-10 财务审核不通过，NASA 撤单

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-center">

技术、合同、起跑点都不输。差的，是**那个愿意把自己最后一分钱投进去的人**。

</div>

---

# 降本：白痴指数 (Idiot Index)

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500">

**定义**：一个零部件的**总成本 / 它的原材料成本**。

如果这个比值很高 — 比如成品 1000 美元、铝才 100 美元 — 那大概率是**设计过于复杂**或**制造效率低下**。

</div>

<div class="mt-5 p-5 rounded bg-red-50 border-l-4 border-red-500 italic">

"如果你做的东西**白痴指数很高**，那你就是个白痴。" — Elon

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

要求每一个工程师把自己负责的零部件成本**降低 80%**。做不到的，等待他们的就**很可能是解雇**。

</div>

---

# 五步工作法

<div class="grid grid-cols-5 gap-2 mt-6 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-300">
<div class="font-bold text-blue-700 text-lg">1</div>
<div class="text-xs mt-1 font-bold">质疑每项要求</div>
<div class="text-xs opacity-70 mt-1">你必须知道提出要求的人的名字，去质疑他</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-300">
<div class="font-bold text-orange-700 text-lg">2</div>
<div class="text-xs mt-1 font-bold">删除一切能删的</div>
<div class="text-xs opacity-70 mt-1">如果加回来的不到 10%，说明删得不够</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-300">
<div class="font-bold text-yellow-700 text-lg">3</div>
<div class="text-xs mt-1 font-bold">简化和优化</div>
<div class="text-xs opacity-70 mt-1">必须在第二步之后 — 否则你在优化不该存在的东西</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-300">
<div class="font-bold text-green-700 text-lg">4</div>
<div class="text-xs mt-1 font-bold">加快周转时间</div>
<div class="text-xs opacity-70 mt-1">每个流程都可以加快</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-300">
<div class="font-bold text-purple-700 text-lg">5</div>
<div class="text-xs mt-1 font-bold">自动化</div>
<div class="text-xs opacity-70 mt-1">最后才轮到它 — 先删、先简、先快</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

Elon 后来反思特斯拉工厂：之前花了 <strong>太多精力在加快生产流程</strong> 上 —— 后来才意识到有些流程 <strong>原本就不应该存在</strong>。

</div>

---

# 具体降本案例：从洗车阀门到浴室插销

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 发动机喷管驱动器

供应商报价 **12 万美元**。Elon："**并不比车库门开关复杂多少**"。

→ 工程师改造**洗车系统的混合阀** → **5000 美元**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 空间站门闩

NASA 造价 **1500 美元** / 个。

→ 改造**浴室隔间门的插销** → **30 美元**。"与 NASA 的一样好"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 载重舱空气冷却

原方案 **300 万美元**。

→ 用 **6000 美元的家用空调**改造泵 → 达到同样效果

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 200 万美元的吊车

空军规定的**过时安全条例**。

→ Elon 成功说服空军修改条例 → 吊车最终 **30 万美元**

</div>

</div>

<div class="mt-5 text-center text-sm opacity-70">

Lewis 总结：火箭在 SpaceX 之前，"是一个**极端白痴**的产业 — 极端非常没有效率，极端的这种腐败。"

</div>

---

# Elon 是听理的，只是不接受"不可能"

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### ✅ 他接受

- 你跟他**意见不同**
- 你**证明**给他看：为什么这个不成立 / 他讲错了
- 数据和工程论证

<div class="mt-3 text-xs opacity-70">
"如果跟马斯克有不一样的意见，没有问题。"
</div>

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### ❌ 他不接受

- "马斯克，这个不可能"
- <strong>在无根据上</strong>说不可能
- 把"我做不到"包装成"做不到"

<div class="mt-3 text-xs opacity-70">
"这个东西在 SpaceX 里面，是一个<strong>死命题</strong>。很多人……当下不管你再多杰出，就被解雇了。"
</div>

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

Lewis 视角：工程师最容易犯的错，是"设想一个 <strong>不存在的问题</strong>"，给自己设限。Elon 一直在挑战这种自我设限。

</div>

---

# 可回收火箭：先从 Grasshopper 开始

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 原理

"如果每坐一次飞机就要扔掉一架**波音 747**，那么机票要卖到多少钱呢？" — Elon

火箭是人类唯一**用一次就扔**的交通工具。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 2012 · 蚱蜢的跳跃

德州测试场的怪东西：猎鹰 9 一级油箱 + 一台 Merlin + 四条钢腿。

- 1st 跳：离地 **1.8 米**
- 2nd 跳：5.4 米，悬停
- 7th 跳：**250 米**，空中横移 100 米后落在中心 X

</div>

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-center text-sm">

技术验证通过。下一步：拿真火箭来试。

</div>

---

# "快速非计划性解体"

<div class="text-base opacity-70 mt-2 text-center">2014–2015 · SpaceX 给世界贡献了无数"炸火箭"视频</div>

<div class="grid grid-cols-2 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

**2014-04**　首次海上回收尝试
减速成功但**随后倾覆**

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

**2015-01**　首次驳船着陆
撞向船体 **报废**

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

**2015-04**　再次海上回收
落地过重 **在船上炸成火球**

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

**2015-06**　猎鹰 9 首次重大事故
**空中解体** · 回收实验中断半年

</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-center">

"这是 **快速非计划性解体**（Rapid Unscheduled Disassembly）。" — Elon 自嘲

</div>

---

# 2015–2016：比猎鹰 1 号那次更接近倒闭

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500 mt-4 text-sm leading-relaxed">

Lewis 视角：

"我觉得那个时候的 SpaceX，比飞鹰 1 号刚射完第三次的时候 <strong>更濒临倒闭</strong>。

因为飞鹰 1 号那个时候 Elon 还有办法去召唤他最好的朋友，可能卖自己的房子，还是怎么凑集资金。

在我们 2015、2016 年的时候，SpaceX 的<strong>消耗和规模</strong>已经是没有办法 —— 没有什么东西能够真的就是填补这个空缺。<strong>除非你自己解决这个问题</strong>。"

</div>

<div class="mt-5 grid grid-cols-3 gap-3 text-xs text-center">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-400">
<strong>当时业界没人能帮你</strong><br/>已经跑得比 NASA 还前
</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-400">
<strong>其他公司在挖人</strong><br/>趁机大量挖 SpaceX 人才
</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-400">
<strong>没有"明年还有十亿"</strong><br/>"我们没有像 Blue Origin 一样"
</div>

</div>

---
layout: two-cols
---

# 最低谷那次讲话

Lewis 回忆 Elon 在最低谷对全公司的话：

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"他说这家公司对我的重要是 —— **我会把我全部的资产卖掉，借钱都可以，我会把我最后一分钱都投到这家公司里面**。"

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

很多老板都会在低谷讲类似的话。可这一次：

"没有一个人质疑说 Elon 只是空头在讲这个话。**每一个人都深信 Elon 的确是这样的人，Elon 也会做这样的事情**。"

</div>

::right::

<div class="pl-6 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 一个具体的瞬间

一个礼拜天晚上紧急需要从佛州运一个**重要的火箭部位**回加州做测试。

Lewis 报告给 Elon。

Elon 回得很干脆：**"我的飞机就停在佛州，你就直接用我的私人飞机。"**

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-400 text-xs italic">

"Elon 全新的私人飞机，里面是雪白的。**瞬间那私人飞机就变成了 SpaceX 的货机**。"

</div>

</div>

---
layout: quote
---

# 2015-12-21 · 第一次陆上回收成功

<div class="text-xl mt-4">"起飞了 宝贝"</div>

<div class="mt-5 text-base leading-relaxed opacity-80">

"一级火箭正在返回陆地……<br/>
它在哪儿？好吧，情况有点不妙……<br/>
**那就是正在返回的一级火箭**。<br/>
各位，**我们正在见证历史**。<br/><br/>
**它站住了**。<br/>
看看它。<br/>
**天啊。我的天啊。**"

</div>

<div class="mt-5 text-sm opacity-60">
半年憋出来的回收 — 站在卡纳维拉尔角的发射台中心
</div>

---

# 回收，从奇迹到日常

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 关键里程碑

- **2015-12-21** 首次陆上回收
- **2016-04-08** 首次海上回收
  驳船名字"**Of course I still love you**"
- **2018-02** 重型猎鹰首飞 — 两枚助推器**同时**陆地降落
- 单枚火箭最高已经**第 33 次**发射与回收（2026-02-21）

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 极限被一再推高

业界曾认为回收 10 次是物理极限。SpaceX 把它推到了 33+。

- 同火箭两次发射**最短间隔 < 20 天**
- 回收成功率**接近 100%**
- Elon 预测：最终寿命可能 **100 次以上**

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-center text-sm">

"无人驳船的名字为火箭测试带来了**一丝浪漫**。"

</div>

---

# 星链 Starlink — 商业化的第二只脚

<div class="text-sm opacity-70 mt-2 mb-3">
全球航天发射市场一年也就小几百亿美元 — 都吃下来也不够去火星。
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 用户

**超 1000 万**
全球订阅
**155+** 国家与地区

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 营收 (2025)

**114 亿美元**
占 SpaceX 总营收
**61%**

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 在轨卫星

**> 10000 颗**
占全球在轨活跃卫星
**~ 65%**

</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 个人 → 商业 → 邮轮 → 航空

夏威夷航空、卡塔尔航空、新西兰航空已经引入；皇家加勒比、挪威人邮轮、嘉年华、银海……纷纷合作。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 远洋的孩子 / 渔民

亚马逊雨林深处的孩子第一次有稳定网络；远洋货轮船员第一次能在大洋深处和家人视频。

</div>

</div>

---
layout: two-cols
---

# 商业飞轮：发射的 74.5% 是给自己

<div class="mt-4 text-sm">

2025 年 SpaceX **165 次发射**中，**123 次是发射星链**（占 74.5%）。

</div>

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

意义：哪怕未来竞争对手崛起，SpaceX 也有近 **3/4 的发射任务**是别人**抢不走的内部需求**。

</div>

<div class="mt-3 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

按 4.2 万颗的规划 + 每年 10–15% 更换率 → **发射任务只会越来越多** → 摊薄单位成本，给迭代留出试错空间。

</div>

<div class="mt-3 text-xs opacity-70 italic">

从星链这一刻起，SpaceX 就站在了**商业和技术的十字路口** —— 双向增长飞轮启动。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./growth-flywheel.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 载人龙飞船 · 一块荧幕的设计哲学

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 内部本来吵得很厉害

按钮在**安全性、迭代性**上**简单得多**。多几个按钮也不碍事。"**没有必要这么极端**"。

Elon 的态度：

"我太空船里面**只能够一个荧幕，一个按钮都不行**。就像一台 Model S 一样。"

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 怎么"说服" Elon

工程师做了 3 个版本：

1. 全按钮（像现在的 NASA）
2. 一块荧幕 + 几个按钮
3. **纯荧幕，什么都没有**

Elon："**我要这个！**"

然后第二页 slide 来了：3 个版本的**价格**。

</div>

</div>

<div class="mt-5 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-center text-sm">

"Elon 说：**我要这个版本，但是我要这个价格**。"<br/>
"所以你跟 Elon 的 presentation，前两页要能讲完核心，但后面最好有 50、60 页能支撑你所有的 argument。"

</div>

---

# 波音 vs SpaceX · CCP 载人

两家都拿到了 CCP 商业载人合同：**波音 42 亿 · SpaceX 26 亿**。SpaceX 又一次没拿到大头。

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 载人龙飞船 Crew Dragon

- 已完成 **10 余次**宇航员运送
- 全自动对接 — 视觉识别系统**不需要宇航员操纵**
- 2021 Inspiration4：**全平民**绕地飞行
- 2024 Polaris Dawn：**第一次商业太空行走**，达到 **1400 km** 轨道（自 1972 阿波罗 17 以来最远）

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 波音 Starliner

- 2024 终于发射
- 推进器故障 + 氦气泄漏
- 两位宇航员**滞留空间站 9 个多月**
- 最终**搭乘 SpaceX 的龙飞船**安全返回
- 波音原定载人飞行计划**无期限搁置**

</div>

</div>

<div class="mt-5 text-center text-sm opacity-70 italic">

载人龙飞船已经成为美国**事实上的唯一载人飞船**。

</div>

---

# 星盾 Starshield · 50 亿美元的国防业务

<div class="text-sm opacity-70 mt-2 mb-3">
2024 年起，国防营收**绝对数字和占总营收的比例都在快速上升**。Starshield 是 SpaceX 政府与国防业务的对外品牌。
</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1️⃣  军用通信卫星

基于星链 V2/V3 改装的成熟平台，加装**抗干扰天线、军用级加密、激光链路**

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 2️⃣  "卫星乐高"

只提供卫星总线（动力 + 导航基座），政府 / 军队**自由插装**高分相机或电子窃听设备

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 3️⃣  专项自研非通信卫星

大规模部署的**导弹追踪星座** — 浑身长满探测器，盯着洲际导弹和超高音速飞行器

</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

国家侦察局 **18 亿**间谍卫星合同 · 太空军 480 颗专用卫星 · 5 月新增**两笔合计 64.5 亿**新合同

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

政府合同**长期、排他、预付费**，利润率**普遍高于民用** — 支撑星舰研发费用，撑起万亿估值

</div>

</div>

---
layout: two-cols
---

# 星舰：通往太空的火车

Lewis 的第一性原理类比：

<div class="mt-3 text-sm">

"你今天如果载货，**用一个法拉利载、用一个卡车、用一个火车**载的规模量，跟你的价钱、跟你可以做的事情，是完完全全不一样。"

</div>

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

- 法拉利 = Rocket Lab 量级
- 卡车 = 猎鹰 9 号
- **火车 = 星舰** — 通往太空的火车

</div>

<div class="mt-3 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

关键不是变快，是 **fully reusable + rapidly reusable**：一天降落了**可以再发射**。

载量 **10–30 倍**于猎鹰 9 号。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./starship-comparison.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 猛禽 Raptor · 一半的研发工作都在这里

<div class="text-sm opacity-70 mt-2">
SpaceX 总裁 Gwynne Shotwell 说："星舰大约一半的开发工作，都集中在猛禽火箭发动机上。"
</div>

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 液氧 + 甲烷 (而不是煤油)

1. **火星上没石油，有 CO₂ + 水冰** — 化学反应就地造甲烷
2. 煤油会产生**积碳**堵塞冷却管 → 每次发射后要洗十几天；甲烷烧得**干净**
3. 液氧超低温、煤油常温 → 之间必须做厚隔板。**甲烷和液氧温度接近** → 减重 → 多载荷

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 全流量补燃循环

两个预燃室分别驱动**燃料泵和氧化剂泵**，再全部进入主燃烧室。

- 最大化燃料效率
- 提升推重比和寿命
- 但**设计复杂度极高**
- 对材料学是"**变态级别**"的要求

Elon："内部压力和温度已经接近**物理材料的理论极限**。"

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-center text-sm">

之前都有人做过**原型机**，但**轨道级量产首次**做到的 — 是猛禽。

</div>

---
layout: two-cols
---

# 两年多，三代猛禽

数据对比：

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**V1**：2.0 吨 / 推力 180 吨

包裹着**成百上千根管路、传感器、电线**，杂乱无章

</div>

<div class="mt-2 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**V2**：重新设计

砍掉大量多余传感器和复杂管路

</div>

<div class="mt-2 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**V3**：1.5 吨 / 推力 **270 吨**

外面**几乎看不见管线** —— 你甚至会怀疑这到底是不是一个发动机

</div>

<div class="mt-3 text-xs opacity-70 italic">

V1 和 V3 都叫"猛禽"，但**已经完全不是一个东西**。这个过程一共只用了两年多。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./raptor-evolution.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 不锈钢舰体 · 一次反直觉的选择

最后时刻，Elon **推翻了原本的碳纤维方案** — 转向当时航天界看起来极其低端的不锈钢。

<div class="grid grid-cols-2 gap-3 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 💰 便宜

航天级碳纤维**极其昂贵**；不锈钢"**就跟白送一样**"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 🏗 不娇气

碳纤维要无尘洁净厂房（数年 + 数亿美元）；不锈钢**随便找块空地搭个帐篷**就能开工

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 🔥 不怕热

碳纤维 ~200°C 软化 → 必须贴笨重隔热瓦；不锈钢 800°C 仍保持结构强度 → 省下隔热瓦的重量

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### ❄️ 不怕冷

大多数金属低温变脆；液氧+液甲烷储温 < **-150°C**；不锈钢在这温度下**屈服 / 抗拉强度反而提升 50%+**

</div>

</div>

<div class="mt-5 text-center text-xs opacity-70">

历史上 V-2 火箭、美国第一代宇宙神运载火箭，也都是不锈钢舰体 — 反直觉的选择，其实有传统。

</div>

---

# 从星虫 (Starhopper) 到筷子夹火箭

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**2019-07** · 星虫 Starhopper

一个外形滑稽的"**大罐子**" — 在德州海边露天泥地里焊接出来。单台猛禽推动，**跳了 20 米**。一个月后跳到 **150 米**。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**2020–2022** · 二级火箭独立测试

"腹式下落"、"拉直降落" 第 7 次终于成功 — **10 km 高度优雅平稳降落**。降落算法通关。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**2023-04** · 完整体首飞

推力**把发射台震碎**了，最后空中自毁。
Elon："**没炸在发射台上就是胜利**。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**2024-10** · 第五次测试

发射塔上的**两根"筷子"** 在半空中夹住返回的一级火箭。"震撼了全世界"。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-center text-sm italic">

"短短的 5 年之间，星舰从这个大罐子，演变到你今天看到的这个回收版本。"

</div>

---
layout: two-cols
---

# Starbase 不会是唯一一个

Boca Chica 的 Starbase 已经获得**"自治市"资格** — SpaceX 员工可以**直接参与市政管理**，围绕火箭发射建最高效的社区。

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

第一代发射台**真的被自己震碎**过：

"那个时候就是把地这边**挖了一个坑**，所以让石头乱飞到很远的距离外。"

新设计已经修正。

</div>

<div class="mt-3 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

Elon 刚刚发推：会有**多个 spaceport**。SpaceX 已经在看 **Louisiana** 那边（也在墨西哥湾旁边）。

"Starbase 只是一个先行的 sample — 之后可以被**复制到很多其他州**。"

</div>

<div class="mt-3 text-xs opacity-60 italic">

Lewis："就是 Gigafactory 的概念，但是在 SpaceX 里面**重新再跑一次**。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./starbase-port-vision.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 不止火箭：太空里已经在做的生意

发射成本降下来之后，**很多事情不再是科幻**。

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 💊 Varda Space

已经在太空中制造了**利托那韦**（一种治疗艾滋病的药物）的晶体。将来还会制造**只能在微重力环境下造的药品**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 📡 Xona Space

正在做一个**私营版的 GPS 导航系统** — 比美国政府的 GPS 更精确、更便宜。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 🔬 Redwire

已经在太空中制造了**几十米光纤** — 无重力下造的光纤**完全没有杂质，信号损耗几乎为零**。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 🛰 等到星舰真正成熟

"还有很多**现在完全想不到的事情**，会变成现实。"

</div>

</div>

---

# Mars 只是第一站

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 mt-4 italic text-base">

"我们的宗旨一直是 —— **Make life multiplanetary**，让人成为一个多星种的一个文明。"

"所以它不是一家火箭公司，也不是一家科技公司。它的目标是要**开拓宇宙**给大家去探索。火星是第一站，月球是第一站，但是以后应该是**整个宇宙**。" — Lewis Hong

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Lewis 的时间预测

- 以前认为 **15 年内是 guaranteed**
- 调整后：**20 年内是保守**
- 大太空航海时代 × 大 AI 时代 —— 两者交集是"非常非常期待的未来"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Elon 的口径

"让生命成为跨行星物种的这条路径**是真实的**。这是真的。所以我们真的会去做这件事。**我们要把人类送上火星**。"

</div>

</div>

<div class="mt-5 text-center text-xs opacity-60 italic">

立 flag：陈茜 × Lewis 约好 — 下一次播客要在**低轨太空站**里录。

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这一期里最值得反复听的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"<strong>我从不放弃。除非我死了，或者彻底丧失了行动能力。</strong>"
<div class="text-xs opacity-60 mt-1 not-italic">— Elon · 被问到三连炸时是否想放弃</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"NASA 打来电话……当时我连电话都快拿不稳了，脱口而出 <strong>'我爱你们'</strong>。"
<div class="text-xs opacity-60 mt-1 not-italic">— Elon · 2008-12-23 NASA 16 亿美元合同的瞬间</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"如果你做的东西<strong>白痴指数很高</strong>，那你就是个白痴。"
<div class="text-xs opacity-60 mt-1 not-italic">— Elon · 关于零件成本与原材料的比值</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"如果每坐一次飞机就要扔掉一架<strong>波音 747</strong>，那么机票要卖到多少钱呢？"
<div class="text-xs opacity-60 mt-1 not-italic">— Elon · 论为什么必须回收火箭</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"在太空里面 <strong>99% 不够</strong>，它就是要一个 100% 的整体方案。"
<div class="text-xs opacity-60 mt-1 not-italic">— Lewis · 回顾猎鹰 1 号第三次失败</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"<strong>我会把我最后一分钱都投到这家公司里面。</strong>"
<div class="text-xs opacity-60 mt-1 not-italic">— Elon · 2015–2016 最低谷时对全公司</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"我要这个版本，但是<strong>我要这个价格</strong>。"
<div class="text-xs opacity-60 mt-1 not-italic">— Elon · 审阅 Crew Dragon 全荧幕设计时</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"<strong>没炸在发射台上就是胜利。</strong>"
<div class="text-xs opacity-60 mt-1 not-italic">— Elon · 2023-04 星舰首飞震碎发射台后</div>
</div>

</div>

---
layout: end
---

# Make life multiplanetary

<div class="mt-6 text-base opacity-70">
"让生命成为跨行星物种的这条路径，<br/>
<strong>是真实的</strong>。"
</div>

<div class="mt-8 text-xs opacity-50">
硅谷101 · SpaceX 崛起史 · 实地探访星舰基地与总部
</div>
