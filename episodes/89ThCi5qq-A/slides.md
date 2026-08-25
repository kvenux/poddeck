---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '“消失”的万亿债务：深扒数据中心“影子借贷”、GPU金融化与次贷风险'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 消失的万亿债务

<div class="text-2xl mt-4 opacity-80">数据中心影子借贷、GPU 金融化与 AI 次贷风险</div>

<div class="mt-10 text-sm opacity-60">
硅谷 101 · 陈茜 · 52 分 47 秒深度拆解
</div>

<div class="mt-3 text-xs opacity-50">
从科技巨头的现金流缺口，一路追到 SPV、租约、私募信贷与普通人的退休账户。
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 钱从哪里来

经营现金流追不上数据中心资本开支，回购骤降，外部融资成为必选项。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 债为什么消失

SPV、融资租赁、付款担保和未起租合同，让同一种义务出现在不同位置。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 谁在搭结构

Blue Owl、PIMCO、贝莱德等资管机构，把项目、租金和信用拆成可交易资产。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### GPU 如何金融化

显卡从高息抵押品，快速变成可获投资级评级的新型硬资产。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 风险流向哪里

资管机构彼此接盘，资金最终连接保险、养老金与主权基金。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 次贷类比成立吗

节目同时给出风险链条与反方判断：规模、银行杠杆和真实收入都要一起看。

</div>

</div>

---

# 第一个信号：回购几乎停了

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 2021 Q4
<div class="text-4xl font-bold text-blue-600 my-2">480 亿美元</div>
<div class="text-xs opacity-70">五家巨头单季合计回购，历史峰值</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 去年 Q4
<div class="text-4xl font-bold text-orange-600 my-2">129 亿美元</div>
<div class="text-xs opacity-70">回购额已经显著收缩</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 今年 Q1
<div class="text-4xl font-bold text-red-600 my-2">46 亿美元</div>
<div class="text-xs opacity-70">较上季再砍近三分之二</div>

</div>

</div>

<div class="mt-7 p-4 text-lg italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">
“四年多的时间少了九成”
</div>

<div class="mt-3 text-sm opacity-65">节目判断：原本返还股东的钱，正在被数据中心建设吸走。</div>

---
layout: two-cols
---

# 两条曲线正在交叉

<div class="space-y-2 mt-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 经营现金流

按 2023 年以来趋势延伸，年增速约 **23%**。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 资本开支

同期年增速约 **70%**，很大部分流向数据中心。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 外部资本缺口

摩根士丹利测算：2028 年前总开支约 **2.9 万亿美元**；现金流覆盖约 **1.4 万亿**，剩余约 **1.5 万亿**依赖外部资本。

</div>

</div>

<div class="mt-2 text-xs opacity-60"><strong>作者概括</strong>：AI 基建首先是一道融资速度题。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cashflow-gap.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 发债速度突然换挡

<div class="grid grid-cols-3 gap-4 mt-7 text-center">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 2020–2024
<div class="text-3xl font-bold text-blue-600 my-3">280 亿美元 / 年</div>
<div class="text-xs opacity-70">五家公司平均公开发债</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 2025
<div class="text-3xl font-bold text-orange-600 my-3">1083 亿美元</div>
<div class="text-xs opacity-70">一年规模接近过去四年均值的四倍</div>

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 今年 1–7 月
<div class="text-2xl font-bold text-red-600 my-3">接近 2000 亿美元</div>
<div class="text-xs opacity-70">约为过去年均的六倍</div>

</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
财报电话会强调 AI 与数据中心，法律文件里的资金用途却常写成<strong>一般公司用途</strong>。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
节目给出的核心解释不是没钱，而是<strong>钱来得不够快</strong>。
</div>

</div>

---

# 公开债为什么不够用

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ① 买家容量

亚马逊超额认购倍数从 **5.3 倍**降到 **1.6 倍**。同一窗口项目拥挤，同一批机构开始挑选。

<div class="mt-3 italic text-blue-700">“市场的胃口有边界”</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### ② 每一笔都更贵

新债溢价中位数从 **2.25 个基点**升到 **12 个基点**；亚马逊最长档多给 **18–21 个基点**。

<div class="mt-3 italic text-orange-700">“大家变得更加挑剔了”</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### ③ 表内杠杆

新增债务推高杠杆、压低评级，还会让股东与债权人同时重新定价公司。

<div class="mt-3 font-semibold text-red-700">价格、评级、买家名单形成闭环</div>

</div>

</div>

---

# Oracle 已经碰到评级边界

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 建设速度

资本开支一年内从 **212 亿美元**升到 **557 亿美元**。

<div class="mt-5 text-sm opacity-75">这使 Oracle 成为五家里押注更重、借款更多的案例。</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 信用评级

标普在今年 7 月把评级从 **BBB**降到 **BBB-**，距离垃圾级只差一档。

<div class="mt-5 text-sm opacity-75">一旦失去投资级，保险与养老金等大买家的内部约束会直接收紧。</div>

</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
节目里的债权投资人更关心底层信用与违约后的流动性：真正的问题是在想卖时，市场是否还有接盘者。
</div>

---

# 华尔街也急着找新故事

<div class="grid grid-cols-2 gap-5 mt-5 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 旧资产：SaaS 私募贷款

- Blue Owl 旗下基金连续两季遭遇 <strong>40%</strong>赎回申请，实际兑付不到 <strong>15%</strong>
- 软件股从 2025 年 9 月高点下跌近四成
- 私募机构对软件敞口开始降风险

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 杠杆集中

私募信贷给 SaaS 的贷款中，<strong>60%</strong>流向同时向七家以上机构借款的企业；十年前这一比例不到 <strong>10%</strong>。

</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500">

### 新资产：AI 数据中心

数据中心证券化规模从 2022 年的 **13 亿美元**升至 **300–400 亿美元**，四年约翻二十倍。旧额度与新故事在同一时间相遇。

</div>

---

# Hyperion：273 亿债，只上表 23.7 亿

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-red-50 border-2 border-red-200">

### 项目借款
<div class="text-4xl font-bold text-red-600 my-3">273 亿美元</div>
<div class="text-xs opacity-70">由 Beignet Investor 发债</div>

</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### Meta 上表投资
<div class="text-4xl font-bold text-blue-600 my-3">23.7 亿美元</div>
<div class="text-xs opacity-70">对应项目公司 20% 股权</div>

</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### 外部控制
<div class="text-4xl font-bold text-purple-600 my-3">80%</div>
<div class="text-xs opacity-70">Blue Owl 体系持有项目公司多数股权</div>

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
会计准则看两件事：谁主导关键决策，谁是主要受益人。Meta 不满足并表条件，项目债务因此不进入它的合并资产负债表。
</div>

---
layout: two-cols
---

# Hyperion 的七层壳

<div class="space-y-2 mt-3 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 法律隔离

七家带 Beignet 名称的公司在特拉华州六周内注册，项目资产、股权与债务被分层持有。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 会计隔离

Blue Owl 体系通过多数股权掌握项目，Meta 只保留 **20%**，因此不把合资公司并表。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 经济联系仍在

项目的租金、残值担保与 Meta 信用，仍然支撑债券本息。

</div>

</div>

<div class="mt-2 text-xs opacity-60"><strong>作者概括</strong>：法律主体可以隔离，现金流义务仍会穿透结构。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hyperion-stack.excalidraw"
  class="w-[475px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 债不在 Meta 表上，钱仍由 Meta 还

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 租金路径

从 2029 年起，Meta 的承租公司 Pelican Leap 向运营主体付租金，现金沿壳公司向上偿还本息。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 期限错位

债券是 **24 年**完全摊销，初始租期却只有 **4 年**，Meta 最长可续至 20 年。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 残值担保

若 Meta 退出，园区市价与约 **280 亿美元**上限之间的差额由 Meta 补足。

</div>

</div>

<div class="mt-8 p-5 text-xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">
“还债的钱都还是Meta自己掏的”
</div>

---

# 一张干净报表，要付更高价格

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 若 Meta 自己公开发债

同期限成本约 **5.5%**。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 经 Beignet SPV 融资

票息 **6.581%**，每年多付近 **3 亿美元**利息。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 工具开始复制

2026 年 7 月，Meta 在得州的 Sopaipilla 项目又发行 **125 亿美元**，票息 **7.534%**、2048 年到期；80% 持股方由 Blue Owl 换成贝莱德。

</div>

<div class="mt-4 text-sm opacity-70">投资人对第二笔参与度降低，节目归因于发行太快与投资组合中的数据中心占比上升。</div>

---

# 五家公司，五种资产负债表路径

<div class="grid grid-cols-5 gap-3 mt-6 text-xs">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">

### Meta

SPV + 合资股权 + 租约 + 残值担保

<div class="mt-3 font-semibold">273 亿项目债不并表</div>

</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">

### 微软

融资租赁记入其他负债

<div class="mt-3 font-semibold">271 亿 → 629 亿美元</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-t-4 border-yellow-500">

### 谷歌

为第三方机房付款担保，列作信用衍生品

<div class="mt-3 font-semibold">名义规模 438 亿，上表 8.15 亿</div>

</div>

<div class="p-3 rounded bg-orange-50 border-t-4 border-orange-500">

### 亚马逊

公开发债自己盖，同时签长期租约

<div class="mt-3 font-semibold">未上表租约 1063 亿美元</div>

</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">

### Oracle

签下未来才起租的数据中心合同

<div class="mt-3 font-semibold">租约合计 2600 亿美元</div>

</div>

</div>

<div class="mt-7 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
形式不同，经济动作相同：把一次性自建支出，转换成长周期租赁与担保义务。
</div>

---
layout: two-cols
---

# 一笔未来付款，何时才算债

<div class="space-y-3 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 第一层：已经借到的钱

债券、票据、贷款；现金到账，也直接进入负债表。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 第二层：表内全部欠账

包括借款、应付款，以及已经开始履行的租赁。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 第三层：已签字但未上表

尚未交付、尚未起租的合同，只在财报附注披露。

</div>

</div>

<div class="mt-5 p-3 italic bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
“把“自己盖楼”变成“向别人租楼””
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./balance-sheet-layers.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 看负债表，会漏掉多大一块

<div class="grid grid-cols-2 gap-6 mt-8 text-center">

<div class="p-6 rounded bg-orange-50 border-2 border-orange-200">

### 已签字、未上表租约
<div class="text-5xl font-bold text-orange-600 my-4">8310 亿美元</div>
<div class="text-sm opacity-70">约为节目统计的已借款规模近两倍</div>

</div>

<div class="p-6 rounded bg-red-50 border-2 border-red-200">

### 加上采购与建设承诺
<div class="text-5xl font-bold text-red-600 my-4">2.13 万亿美元</div>
<div class="text-sm opacity-70">AI 数据中心背后最终需要支付的总承诺</div>

</div>

</div>

<div class="mt-8 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>作者概括</strong>：表外不等于不存在。它只意味着付款义务尚未满足当前会计确认条件，读者必须把附注、租约与担保重新拼回模型。
</div>

---
layout: two-cols
---

# AI 基建的融资风险阶梯

<div class="space-y-1 mt-2 text-sm">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

### 上层：便宜、标准

公司现金流与投资级公开债，买家最广，信用最强。

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">

### 中层：项目化、定制化

项目融资、合资公司、私募配售，用租约与母公司支持构造信用。

</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">

### 下层：抵押品更短命

云服务商债与 GPU 抵押贷款，价格更高、风险更集中。

</div>

</div>

<div class="mt-1 text-[11px] opacity-60"><strong>作者概括</strong>：越往下，资金更灵活，风险溢价也更高。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./finance-risk-ladder.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# GPU 正在变成新的硬资产

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### CoreWeave：2023

以 GPU 抵押借款，利率约 **15%**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 同类贷款：今年 3 月

利率降到约 **5.9%**，还能获得投资级评级。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### General Compute：今年 7 月

一家 2026 年成立的推理云公司，用推理专用芯片借到 **4 亿美元**。

</div>

</div>

<div class="mt-5 p-4 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">
“在AI时代 算力就是收入”
</div>

<div class="mt-2 text-xs opacity-65">黄仁勋在节目引用的文章中，把 AI 工厂定义为可像基础设施一样融资的资产。</div>

---

# 卖卡的人，也开始提供残值支持

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 撬动第三方资本

英伟达联合阿波罗、贝莱德、黑石、Brookfield、高盛与 KKR，目标动员超过 **5000 亿美元**第三方资本。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 兜住部分残值

在部分项目上，英伟达可能为最多 <strong>25%</strong>提供残值支持。

</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-5 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
数据中心可以按 <strong>10–20 年</strong>久期融资，GPU 的风险窗口却可能在 <strong>5 年以内</strong>。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
“任何一个东西都有一个price（价格）”
</div>

</div>

<div class="mt-4 text-xs opacity-60"><strong>作者概括</strong>：抵押品不是天然安全，关键是折旧速度是否已经进入贷款价格。</div>

---

# 租金与贷款，还能继续切片

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### ABS：资产证券化

把数据中心租约的未来租金打包，切成 **AAA 到 BB**不同档位出售。

<div class="mt-4 grid grid-cols-2 gap-3 text-center">
  <div class="p-3 bg-white rounded border"><strong>340 亿美元</strong><br><span class="text-xs opacity-60">当前市场存量</span></div>
  <div class="p-3 bg-white rounded border"><strong>500 亿美元</strong><br><span class="text-xs opacity-60">机构预测今年新发行</span></div>
</div>

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### SRT：风险转移

银行把贷款留在账上，向私募基金购买首损保护；释放出的资本再用于新贷款。

<div class="mt-4 p-3 bg-white rounded border text-center"><strong>万亿级市场</strong><br><span class="text-xs opacity-60">越来越多用于 AI 相关贷款</span></div>

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
同一笔底层现金流可以被重新分档、转移与销售；风险没有消失，只是由不同投资人承担不同层级。
</div>

---

# 私募资本早在 AI 之前就买下地皮

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2021–2022：收租逻辑成形

全球数据中心并购额分别为 <strong>490 亿</strong>与 <strong>480 亿美元</strong>；2022 年 <strong>91%</strong>资金来自私募资本。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么适合长期资本

租客多为投资级云巨头，合同动辄十几年；土地、楼宇与电网被视作基础设施收益。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 为什么银行退场

2023 年资本规则草案提高超长期、大额、非标准贷款的资本占用，银行开始缩表。

</div>

</div>

<div class="mt-4 p-4 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">
“本来就是替银行去做银行不能做的事”
</div>

<div class="mt-2 text-xs opacity-65">节目对私募信贷角色的概括：它是受到监管约束后的银行补充渠道。</div>

---
layout: two-cols
---

# 风险最终连到退休账户

<div class="space-y-1 mt-2 text-sm">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">

### 圈内互相接盘

Blue Owl 与 PIMCO 在四笔交易中轮流成为股东、共同债主、退出方与唯一买家。

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

### 流动性受限

第二季度投资人申请赎回 <strong>156 亿美元</strong>，最终拿回 <strong>59 亿</strong>；半流动基金常设净资产 <strong>5%</strong>季度上限。

</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 资金的真正来源

保险、养老金、大学捐赠基金与主权基金，为私募信贷与长期资产提供资金。

</div>

</div>

<div class="mt-1 p-2 italic bg-red-50 border-l-4 border-red-500 rounded text-xs">“最后来买单的一定是纳税人”</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./capital-risk-loop.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 最危险的错配：债很长，芯片很短命

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 市场残值

分析报告称，一块 H100 到第三年只能卖到新品价格的 **45%**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 会计寿命

节目嘉宾称云厂商把 GPU 折旧拉长到 **6–7 年起**，厂房则从十多年拉到 **20–30 年**。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 利润影响

做空机构测算，未来三年可能少算掉的成本达到<strong>千亿美元级别</strong>。

</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
信用市场并非看不到这种错配。问题在于：GPU 的未来残值、租赁收入与贷款价格，是否留出了足够安全垫。
</div>

---

# CDS 上涨，是警报还是正常重估

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 看起来危险

Oracle 的 CDS 升至约 **203 个基点**，为 2008 年金融危机以来最高水平。

<div class="mt-4 opacity-75">市场正在提高对违约风险的保险价格。</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 从业者的解释

Oracle 从轻资产现金牛转向持续借债建设；债权人面对的已经不是同一种商业模式，信用自然重定价。

</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm italic">
<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">“这不是一个危险信号”</div>
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">“这是一个市场在做它应该做的事情”</div>
</div>

<div class="mt-4 text-xs opacity-60">这两句是节目受访投资人的判断，不代表风险不存在；它强调 CDS 的功能本来就是重新定价。</div>

---

# 最后的检验：钱有没有换回收入

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 支持资本循环的证据

- Azure 最新季度营收增速 **43%**
- 已签约未确认收入 **6780 亿美元**，同比增 **84%**
- 芯片、内存与数据中心投入，节目嘉宾估算约 **3 年回本**、ROIC 接近 **30%**

<div class="mt-4 italic text-green-700">“所有融资结构都要回到现金流”</div>

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 反对 AI 次贷类比的证据

- 项目融资在万亿级企业债市场中仍是零头
- 与 2007–2008 房地产市场相比，当前规模更小
- 银行监管更紧、杠杆更低，风险更多分散在非银体系

<div class="mt-4 italic text-blue-700">“很难会造成一个系统性的风险”</div>

</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
<strong>作者概括</strong>：判断风险不能只看债放在哪张表上；要同时跟踪最终客户需求、资产回收期、抵押品残值与资金来源的集中度。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">八句话，串起这期节目的完整风险链：</div>

<div class="grid grid-cols-2 gap-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
“四年多的时间少了九成”
<div class="text-xs opacity-60 mt-1 not-italic">— 回购骤降，资金开始转向建设</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
“市场的胃口有边界”
<div class="text-xs opacity-60 mt-1 not-italic">— 公开债的买家容量</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
“还债的钱都还是Meta自己掏的”
<div class="text-xs opacity-60 mt-1 not-italic">— Hyperion 的现金流穿透</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
“把“自己盖楼”变成“向别人租楼””
<div class="text-xs opacity-60 mt-1 not-italic">— 表外化的会计条件</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
“在AI时代 算力就是收入”
<div class="text-xs opacity-60 mt-1 not-italic">— GPU 资产化的核心叙事</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
“本来就是替银行去做银行不能做的事”
<div class="text-xs opacity-60 mt-1 not-italic">— 私募信贷的历史角色</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
“最后来买单的一定是纳税人”
<div class="text-xs opacity-60 mt-1 not-italic">— 养老金构成的风险出口</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
“所有融资结构都要回到现金流”
<div class="text-xs opacity-60 mt-1 not-italic">— 最终检验标准</div>
</div>

</div>

---
layout: end
---

# “风险却不会凭空消失”

<div class="mt-7 text-lg opacity-75">
报表可以变干净；租金、担保、折旧与信用风险仍会沿金融链条重新分配。
</div>

<div class="mt-10 text-sm opacity-55">硅谷 101 · 89ThCi5qq-A · PodDeck</div>
