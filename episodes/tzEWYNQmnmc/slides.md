---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'AI 救活了一家马桶公司，也点燃了存储芯片超级周期'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI 救活了一家马桶公司

<div class="text-2xl mt-3 opacity-80">也点燃了存储芯片的<strong>超级周期</strong></div>

<div class="mt-10 text-sm opacity-60">
《硅谷101》· 陈茜 × 三星业内人士 + 华尔街投资人 Rob
</div>

<div class="mt-3 text-xs opacity-50">
从 TOTO 静电吸盘订单排到 2027，到 SK 海力士人均年终奖 64 万——一场四十年一遇的内存饥饿游戏。
</div>

---

# 这期到底在讲什么

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### TOTO 的隐藏业务

一家**马桶公司**成了 AI 概念股 —— 静电吸盘订单排到 2027 年。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 价格疯涨

DDR4 一年内涨 **1800%**，HBM 单颗售价**比黄金还贵**。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### HBM 悖论

一片晶圆造 HBM 只能产**普通 DRAM 的 1/3**，越扩越短缺。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 推理是新挑战

摩根士丹利：**推理是内存挑战**，不只是计算挑战。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 闪迪 LTA 革命

第一次有**法律效力**的长期合同 + 不退预付款 —— 历史首次。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 周期会被打破吗

如果存储从**周期股**变成**成长股**，市盈率直接翻倍。

</div>

</div>

---
layout: two-cols
---

# 一家马桶公司，是怎么成为 AI 概念股的

<div class="text-sm mt-4 space-y-3">

TOTO（高端智能马桶）股价过去几个月暴涨。

**不是马桶卖得更好了。**

而是它有一个隐藏业务——**高纯度陶瓷静电吸盘**：芯片制造时用来固定晶圆的关键耗材。

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mt-3">

精度做到**头发丝的 1/80**，纯度业界第一。订单排到 2027 年，占公司**4 成营业利润**。

</div>

<div class="text-xs opacity-60 mt-2 italic">
"就这样，一家马桶公司成为了 AI 概念股。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./toto-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 数据冲击波：超级周期的"夸张"

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 韩国双雄 Q4 利润

<div class="text-4xl font-bold text-red-600 my-2">278 亿 $</div>
<div class="text-xs opacity-70">三星 + SK 海力士合计</div>
<div class="text-xs opacity-50 mt-1">每天净赚 3 亿美元</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### SK 海力士年终奖

<div class="text-4xl font-bold text-orange-600 my-2">64 万元</div>
<div class="text-xs opacity-70">人均（折人民币）</div>
<div class="text-xs opacity-50 mt-1">刷新公司历史记录</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 一颗 HBM 单价

<div class="text-4xl font-bold text-yellow-700 my-2">$400-500</div>
<div class="text-xs opacity-70">指甲盖大小</div>
<div class="text-xs opacity-50 mt-1">比同等重量的黄金还贵</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### DDR5 16GB 现货

<div class="text-4xl font-bold text-blue-600 my-2">+500%</div>
<div class="text-xs opacity-70">4.6 → 28 美元</div>
<div class="text-xs opacity-50 mt-1">2024 末 → 2025 末</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### DDR4

<div class="text-4xl font-bold text-purple-600 my-2">+1800%</div>
<div class="text-xs opacity-70">3.2 → 62 美元</div>
<div class="text-xs opacity-50 mt-1">老一代反而涨得最猛</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 64GB 服务器内存

<div class="text-4xl font-bold text-green-600 my-2">+175%</div>
<div class="text-xs opacity-70">255 → 700 美元</div>
<div class="text-xs opacity-50 mt-1">半年内</div>

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
SK 海力士 2026 年产能已全部售罄；三星把 NAND 供应价直接上调 100%。
</div>

---

# 闪迪 LTA：历史第一次"客户得付预付款"

<div class="mt-4 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"Long-Term Agreement 在历史上没有有过……过去这么几十年的 LTA 是从来没有任何执行效力的——如果市场进入一个下行周期的时候，客户就说这东西我们就不认了。"

</div>

<div class="mt-4 text-xs opacity-60 ml-4">— 华尔街投资人 Rob</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

### 过去四十年的剧本

- 客户：行情好就签
- 客户：行情坏就毁约
- 厂商："你拿他完全没有办法"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2026 年的画风变了

- **有法律效力**
- **预付款**
- 客户毁约 → 钱拿不回来
- "如果连闪迪都做到，三巨头都没理由做不到"

</div>

</div>

<div class="mt-4 text-sm opacity-70">
Rob 的判断：超级周期很可能会持续到 <strong>2027 年</strong>。
</div>

---
layout: two-cols
---

# 存储分层：从"热"到"冷"

<div class="text-sm mt-4 space-y-3">

**陈茜的划分法**：离计算越近就越"热"，越偏纯储存就越"冷"。

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**HBM** —— 离 GPU 最近的高带宽内存，AI 训练首选。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**DRAM** —— 运行内存，速度极快但断电即丢。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**NAND / SSD** —— 长期记忆，断电不丢，从仓库变成"前线弹药库"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**HDD** —— 机械硬盘，便宜大容量，冷归档。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./memory-hierarchy.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# HBM = DRAM 的特殊进化形态

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 它做了什么

把**多层 DRAM 芯片**通过**硅通孔（TSV）**技术**垂直堆叠**，再用先进封装和 GPU 贴在同一块基板上。

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

带宽极大增加 →
**所有 AI 训练顶级芯片都离不开 HBM**：英伟达 GPU、谷歌 TPU 都是。

</div>

</div>

<div>

### DRAM 家族其实不是一家

<div class="space-y-2 text-sm mt-2">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>HBM</strong> · AI 训练用
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>GDDR</strong> · 显卡用
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>LPDDR</strong> · 手机用（low-power）
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>DDR5 / DDR4</strong> · 服务器和 PC 通用
</div>

</div>

<div class="mt-3 text-xs opacity-60 italic">
"不是说一颗 DRAM 就能通吃所有的设备。"
</div>

</div>

</div>

---

# 小黑板比喻：为什么 AI 时代需要"更大的内存"

<div class="mt-4 p-5 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"以前我说我们的计算是 1+1=2，你不需要一块巨大的黑板，就一块正常的黑板就够了。只是说来到了 AI 时代，现在计算的强度会很高……如果我是一块小黑板，你每写一次擦掉一次，又写又再擦掉一次，就有 100 步的计算的话，你需要擦 100 次，就会耗费你的时间。所以我们现在需要上一块巨大无比的黑板。"

</div>

<div class="mt-3 text-xs opacity-60 ml-4">— 三星业内人士</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-center">

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-400">

### 以前
**1+1=2**
一块小黑板就够

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 小黑板时代
100 步计算 → 写一次擦一次 → 擦 **100 次**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 大黑板时代
**一口气**把 100 步全写完 → 一次擦掉 → 省时间

</div>

</div>

<div class="mt-4 text-sm opacity-70 text-center">
<strong>作者概括</strong>：这就是 AI 时代对存储"越来越大"的根本需求。
</div>

---
layout: two-cols
---

# 产业链全景：定价权在哪里

<div class="text-sm mt-4 space-y-2">

**上游**：硅片（SUMCO）、设备（ASML / Tokyo Electron）、EDA（Cadence / Synopsys）、接口 IP（Rambus）。

**中游**：DRAM 三巨头（**三星 + SK 海力士 + 美光 = 全球 95%**）；NAND 多了铠侠 / 闪迪 / 西部数据；先进封装（CoWoS 由台积电提供）。

**下游**：云厂商（微软/谷歌/亚马逊/字节）、手机 PC（苹果/小米/联想/戴尔）、汽车（特斯拉/理想/蔚来）、游戏机、工业设备。

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-3">

**定价权高度集中在中游三家** —— 它们决定做什么产品、给谁供货、什么价格卖。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./supply-chain.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 周期性 = 物理学 + 经济学

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 物理学的退潮

巅峰时期 DRAM 密度每十年翻 **100 倍**。

**过去十年**，SemiAnalysis 报告：DRAM 密度总共只翻了大约 **2 倍**。

→ 缩放严重放缓，成本不再"自动"下降，更多取决于**产能博弈**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 经济学的诅咒

建一座先进晶圆厂动辄**几十亿上百亿美元**，建设周期 2-3 年。沉没成本太重 —— 需求差也要开工。

存储行业是**"先建后卖"**（≠ 台积电的"先接单后扩产"）—— 厂商必须**提前 2-3 年**猜未来需求。

→ 猜对皆大欢喜，猜错就是灾难。

</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**经典循环**：需求爆发 → 供不应求 → 价格飙涨 → 利润暴增 → 激进扩张 → 供过于求 → 价格崩盘 → 行业洗牌。

**过去 30 年，每 3-4 年上演一次，从未例外。**

</div>

---
layout: two-cols
---

# 四十年四轮周期：每一轮都有人出局

<div class="text-sm mt-4 space-y-2">

**1993** · Windows PC 黎明 → 全球新建约 50 座新厂 → 价格暴跌大批玩家出局。

**2010** · 智能手机 + 云 → iPhone/Android 爆发 → 但标准化加速商品化，周期比预期更短。

**2017-2018** · 数据中心升级 → 三大厂毛利冲历史高位 → 2018 末重新下行。

**2020-2022** · 疫情驱动 → 居家办公爆发 + 恐慌性双重下单 → **2022-2023 痛苦大跌**。

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mt-3 text-xs">

**行业从 1990 年代的 20+ 家**淘汰到今天**只剩 3 家**（+ 中国长鑫）。德国奇梦达破产、日本尔必达退出。

</div>

<div class="text-xs opacity-60 mt-2 italic">
"过去的所谓超级周期从来没有持续超过两年。涨得越猛崩得越快——这是过去四十年的铁律。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cycle-history.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 早期砸钱训练，现在主战场是推理

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 训练时代

存储干的活儿其实很简单：

- 向上千个 GPU **高效喂数据**
- 定期做**模型检查点**，防止训练中断功亏一篑

→ 存储是"配角"。

</div>

<div>

### 推理时代

模式复杂得多：

- 模型从存储**加载到内存**
- 活跃权重在 **HBM**
- 状态 / 缓存留在 **DRAM**
- KV cache 装不下 → 卸载到 **SSD / NAND**
- RAG 外部知识 → **共享存储 / 数据湖**

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"推理正在成为一种内存挑战，而不仅仅是计算挑战。"

</div>

<div class="mt-2 text-xs opacity-60 ml-4">— 摩根士丹利研报</div>

---
layout: two-cols
---

# Agent 的多层记忆，每一层都要存

<div class="text-sm mt-4 space-y-3">

摩根士丹利：**2026 年是 AI 从实验走向核心基础设施的一年**。

智能体要运转起来，必须维护多层记忆：

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-xs">
<strong>短期工作记忆</strong> · 当前对话 · HBM 热数据
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">
<strong>会话状态 + KV cache</strong> · DRAM 温数据
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
<strong>跨会话长期记忆</strong> · NAND/SSD 冷数据
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
<strong>预训练知识 / 工具调用</strong> · 后端数据湖
</div>

<div class="text-xs opacity-60 mt-2 italic">
"一个能够记住一切的 AI 助手，比一个更强大但什么都记不住的模型有用得多。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-memory.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 摩根士丹利的"一个 ChatGPT"基准测算

<div class="text-sm opacity-70 mt-2">
假设：8 亿周活用户 · 峰值每秒 30 万请求 · 每次 2000 个输入 token · 仅文本（图片视频不算）
</div>

<div class="grid grid-cols-4 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### HBM

<div class="text-3xl font-bold text-red-600 my-2">226 PB</div>
<div class="text-xs opacity-70">最热的活跃权重</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### DRAM

<div class="text-3xl font-bold text-orange-600 my-2">4.6 EB</div>
<div class="text-xs opacity-70">会话与缓存</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### NAND / SSD

<div class="text-3xl font-bold text-blue-600 my-2">47 EB</div>
<div class="text-xs opacity-70">长期 / 卸载</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 数据湖

<div class="text-3xl font-bold text-purple-600 my-2">294 EB</div>
<div class="text-xs opacity-70">RAG 知识库</div>

</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

3 个 ChatGPT 规模的模型 = **2026 年全球 HBM 供给的 17%**

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

= 全球 **DRAM 的 35%**

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

= 全球 **NAND 的 92%**（还不算多模态）

</div>

</div>

---

# 内存帕金森定律

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"HBM 容量每提升一次，开发者就会立刻构建更大的模型来把它填满。以前用来压缩模型的各种技巧，一有新空间就会再次被放松——直到再次撞墙。"

</div>

<div class="mt-3 text-xs opacity-60 ml-4">— SemiAnalysis</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 敏感性分析

输入 token 从 **2000 → 5000**：

- 每个模型 **DRAM 需求 +2 EB**
- Rack SSD/NAND **+3 EB**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 结论

更长上下文 + 更长思考链 = **存储压力指数级放大**。

**"存储永远是下一个瓶颈。"**

</div>

</div>

---
layout: two-cols
---

# HBM 悖论：越扩越短缺

<div class="text-sm mt-4 space-y-3">

SemiAnalysis 追踪：HBM 晶圆产能两年扩了 3 倍（12.3 万 → 33.1 万片 / 月），预计 2027 年再翻倍。

**为什么 DRAM 还在紧缺？**

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

同一片晶圆，做 **HBM3E 12 层堆叠**只能产**普通 DRAM 的 1/3**；到 **HBM4 可能恶化到 1/4**。

</div>

<div class="text-xs opacity-60 mt-2 italic">
"我们同一片 wafer，它可能只能产 1/3 的量……相比较于 conventional DRAM 和 HBM，你一片晶圆上它的产量是要除以 3 的。"
</div>

<div class="text-xs mt-3">

**为什么效率这么低**：TSV 硅通孔、晶圆减薄、背部加工 → 引入额外良率损耗；8/12 层堆叠中只要一颗裸片坏，**整堆报废**。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hbm-paradox.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 产能排挤：HBM 反过来"吃掉"普通 DRAM

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### HBM-DRAM 困境

- HBM 利润更高 → 厂商**优先把晶圆塞给 HBM 产线**
- 普通 DRAM 产能严重压缩
- 手机和电脑用的 DRAM 价格**报复性飙涨**

J.P.Morgan 供需模型：未来两年 DRAM 供给增长**压在 20% 以下**，跟不上需求。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 反常识：普通 DRAM 反而更赚

到 **2025 Q4**，普通 DRAM 利润率**追平甚至超过了 HBM**。

**为什么**？
- HBM 大多**长期合同锁了价**
- 普通 DRAM 的**现货价能立刻反映短缺**

→ 厂商两难：继续扩 HBM？还是留产能给同样暴利的普通 DRAM？

</div>

</div>

<div class="mt-4 text-sm opacity-70 text-center">
HBM 是一种"<strong>反向缩放</strong>"的产品 —— 越做它，对产能的消耗就越大。
</div>

---
layout: two-cols
---

# 三大供给瓶颈，叠在一起就是束手无策

<div class="text-sm mt-4 space-y-2">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">

**① 洁净室不够** —— 疫情后保守期投资缩水，2026 年全行业新增产能集中在 3 座厂（三星 P4、海力士 M15X、美光 A3）。**电力**也是变量。

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

**② 设备商不扩** —— Tokyo Electron 自己很保守，担心等扩出来 AI 周期已经爆掉。"宁可不改，挣 100 块也挺好"。

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">

**③ 节点迁移摩擦** —— 1b → 1c 切换要停机数周到数月，几个季度的良率波动 + 产能损失。

</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">

**真正有意义的新产能** —— SK 海力士龙仁工厂最早 **2027 年 2 月**上线；美光爱达荷瞄准 **2027 年中**。

</div>

<div class="text-xs opacity-60 mt-2 italic">
"建一座 fab 要 3 年……这就有点远水解不了近渴了。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./bottlenecks.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Tokyo Electron 的"小日子"哲学

<div class="mt-4 p-5 text-base italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded">

"它自己不愿意扩产的，它自己很保守……因为他说你看过去这么几十年，我们走过了很多个周期，我们要扩产能也需要几年。等到我们自己扩产能出来，说不定那个时候 AI 这个周期就爆掉了。所以我宁可不改，我就很保守。我就不求挣 500 块钱了，我就挣 100 块，也挺好，小日子也很好。"

</div>

<div class="mt-3 text-xs opacity-60 ml-4">— 三星业内人士谈日本设备商</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 木桶效应

就算存储厂商**有钱、有决心**去扩产，上游设备的供货瓶颈也会拖慢产能上限速度。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 教训太深刻

四十年里有人破产、有人退出 —— 整个产业链对"周期"二字**充满敬畏**，谁也不愿赌错方向。

</div>

</div>

---

# 赢家：从韩国双雄到中国玩家

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 三大原厂

- 三星 + SK 海力士 Q4 利润 **278 亿美元**
- HBM 全球三家：**SK 海力士 60% / 三星 20% / 美光 20%**
- 都已经卖光，谁能多挤产能谁多吃肉

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 中国玩家也飞了

- **佰维存储**：2025 利润同比 +427% 到 520%
- **德明利**：+85% 到 128%

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 行业利润率

- 野村：2026 通用 DRAM 利润率**有望回到上轮峰值 70%**
- J.P.Morgan 更激进：2027 营业利润率可能 **超过 80%**

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**摩根士丹利测算**：存储芯片价格每涨 10%，硬件 OEM 毛利率**下降 45-150 个基点**。这条产业链上，痛苦在下游。

</div>

---

# 输家：手机、PC、汽车 —— 雷军都"扛不住"

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 📱 手机

- 小米、OPPO 出货预测**下调 >20%**
- vivo 下调 ~15%
- 魅族宣布**取消魅族 22Air**上市计划
- Nothing CEO 裴宇：**"小公司不得不寻找其他出路"**
- TrendForce 把 2026 全球智能手机生产数预测**砍至同比 -10%**

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 💻 PC

- 联想部分机型**上调 500-1500 元**
- 戴尔、惠普已明确预告提价
- 戴尔 COO 克拉克：**"从来没有见过成本上涨得如此之快"**
- 惠普 CEO 在考虑**减少产品中的内存使用量**

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 🚗 汽车

- 理想供应链副总裁警告：**2026 车规存储满足率可能不到 50%**
- 蔚来李斌：**"今年最大的成本压力就是内存"**
- 雷军直播坦言：**车用内存一项就要多花几千块**
- 某国产车企传言：**砍掉后排车载 infotainment**

</div>

</div>

---

# 云厂商 vs OEM：两种世界

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 云厂商：极致"价格不敏感"

<div class="text-sm space-y-2">

微软、谷歌、亚马逊 AWS、字节跳动——

> "现在的话都是云厂商，他们这个 marginal cost、他们的 software 是 0，可以这么讲。然后他们的钱、叙事，其实都跟股价有关系的，所以他们是极其的 price insensitive。"

→ AI 数据中心前景太诱人，**多少钱都买**。

</div>

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### OEM：再大牌也没议价权

<div class="text-sm space-y-2">

> "PC 和手机这些厂商现在在我们这里，它哪怕名字再响，它都没有那么大的 pricing influence……它们的 margin 就是比云厂商的低。"

> "手机和 PC 大家都知道，今年至少会要跌 5 个点，是没得说的……**但没人会在乎这个事情**。"

→ 美光甚至说：手机市场归零都无所谓，我不做了。

</div>

</div>

</div>

<div class="mt-4 text-sm opacity-70 text-center">
存储厂商的"客户漏斗"已经重新排序 —— 云厂商在上，消费电子在下。
</div>

---

# 反常识：存储厂商反而不想垄断

<div class="mt-6 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"我觉得没有一个 memory 玩家想垄断。我们害怕垄断，我们的客户也不希望我们垄断。你一旦有短缺，像现在，客户给到任何一个 memory supplier 100% 的 market share，对于 memory 玩家来讲都是非常大的压力。所以其实打破垄断，反而是我们 memory player 比较愿意看到的事情。"

</div>

<div class="mt-3 text-xs opacity-60 ml-4">— 三星业内人士</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 一般直觉

垄断 = 高溢价。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 存储行业的反常识

100% 市场份额 = **100% 需求风险**。
客户一砍单你就**非常被动**。

→ 三家"平衡竞争"反而是最稳的状态。

</div>

</div>

---

# 这轮周期到底能持续多久

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 三个不同口径，方向一致

<div class="space-y-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**三星内部口径**：2026 = 100% sold out；供需差 30-50%；2027 一样 shortage；**可能要到 2028 才好转**。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**SemiAnalysis**：2026 总 DRAM 供给仍比需求**低约 7%**；HBM 缺口到 2027 还会扩大。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**野村**：真正体现在产量上的增量，可能要等到 **2028 年**。

</div>

</div>

</div>

<div>

### 需求端完全看不到放缓

<div class="text-sm space-y-3 mt-2">

- AI **推理 + Agent** 爆发
- 之后的**机器人 / 物理 AI**
- 视频生成模型对存储的**指数级跃升**

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-3">

SemiAnalysis 把这轮周期定义为"**四十年一遇的短缺**"。

</div>

</div>

</div>

</div>

---

# 范式转换：从周期股到成长股

<div class="mt-4 p-5 text-base italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

"如果说现在行业出现很大的一个变化，它从一个周期性的行业变成一个非周期性的行业，变成一个结构性很稳定增长行业的话，整个市场可能对这个行业的看法就会有一个质的改变。周期行业我们就给你一个 10 倍市盈率，了不起了。如果这个行业从一个周期性行业持续很多年的话，那他们的市盈率都可以再翻倍了。"

</div>

<div class="mt-3 text-xs opacity-60 ml-4">— 华尔街投资人 Rob</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 周期股估值

**~10x 市盈率**
（市场默认给的"诅咒"）

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 范式转换

如果证明是"**苹果式**"稳定上升的业务 →

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 成长股估值

**市盈率翻倍**
"哪怕利润不增长，光重定价就能让股价翻一倍。"

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
摩根士丹利图示：当前这轮已走到"乐观"区间，**涨幅远大于以往任何一个周期**。
</div>

---

# TurboQuant 警示：估值有多脆弱

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 一篇"老论文"引发的暴跌

3 月底谷歌发布**高效 AI 内存压缩算法 TurboQuant** → 硅谷哗然 → 内存板块**全线暴跌**。

业内反驳：
- 论文发表于**一年前**，本身有学术争议
- 只在 **Gemma / Mistral 等小模型**上验证过
- 没覆盖 70B+ 模型、MoE、百万 token 上下文
- 技术上只压缩**推理时 KV cache**——AI 内存需求**三大来源之一**，训练完全不受影响

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 真正的火药桶：估值

暴跌前：

- 闪迪 2026 以来**涨 200%**
- 美光涨 **>80%**
- 闪迪 920 亿美元市值 vs 2026 预期净利润 60 亿
- 美光 2026 财年 **200 亿美元资本开支**，同比 **+68%** —— "豪赌内存需求会持续增长"

> 一篇有争议的旧论文就能引发剧烈崩盘 —— **市场信心已经高到极度脆弱**。

</div>

</div>

<div class="mt-4 text-sm opacity-70 text-center">
算法层面的进步，恰恰是"超级周期"叙事中<strong>最难被提前定价的风险</strong>。
</div>

---

# 达摩克利斯之剑：AI 爆掉怎么办

<div class="mt-6 p-6 text-lg italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"所有的担心会一直存在，直到最后发现，这东西变成一个'苹果'的业务，稳定上升的业务。第一个担心，AI 爆掉。AI 爆掉他都会死。你现在的增量主要是来自于 AI，如果有一天 AI 不行了，大家发现 AI 没有什么用，你讲的一切未来都是空话，都会变成 0。"

</div>

<div class="mt-3 text-xs opacity-60 ml-4">— Rob 的终极风险提示</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-sm">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 当前乐观的前提

AI 需求是**真实**且**可持续**的。

如果泡沫破裂，内存行业很难独善其身。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 真正的"上岸"

直到行业证明自己已成为**下一个"苹果式"**的稳定增长业务 ——

达摩克利斯之剑才会落下。

</div>

</div>

---

# 站在分岔路口

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 路线 A：历史重演

像过去四十年一样 —— **价格峰值之后再次滑入低谷**。

"涨得越猛，崩得越快。"

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 路线 B：周期破局

在 AI 结构性需求驱动下，真正**打破周期宿命** —— 成为持续增长的产业。

"就像没有人会说，苹果卖手机在过去 20 年是个周期性行业。"

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**至少在 2026 年，答案倾向 B**：

- 三大存储厂商产能**全部售罄**
- 上游设备订单**排到 2027**
- 客户开始**交预付款**、签**法律约束力的长期合同**
- 甚至连一家做**马桶**的日本公司都因此改变了命运

</div>

<div class="mt-3 text-sm opacity-70 text-center italic">
"但历史从不缺少对'这次不一样'的嘲讽。"
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"就这样，一家马桶公司成为了 AI 概念股。"
<div class="text-xs opacity-60 mt-1 not-italic">— 陈茜，开场总结 TOTO 的反差</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"我们现在需要上一块巨大无比的黑板，我可以一口气把这个算数的 100 个步数全部写完，一口气写完再擦掉。"
<div class="text-xs opacity-60 mt-1 not-italic">— 三星业内人士，解释 AI 时代的内存逻辑</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"Long-Term Agreement 在历史上没有有过……过去几十年的 LTA 是从来没有任何执行效力的。"
<div class="text-xs opacity-60 mt-1 not-italic">— Rob，谈闪迪带来的范式转变</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"HBM 跟 conventional DRAM 相比的话，它是 1/3 的产能……我本来产能就只增加了，要等两到三年，然后又只能砍掉 1/3 的 output。"
<div class="text-xs opacity-60 mt-1 not-italic">— 三星业内人士，解释 HBM 悖论</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"我宁可不改，我就很保守。我就不求挣 500 块钱了，我就挣 100 块，也挺好，小日子也很好。"
<div class="text-xs opacity-60 mt-1 not-italic">— Tokyo Electron 的逻辑（三星人士转述）</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"我觉得没有一个 memory 玩家想垄断，我们害怕垄断。"
<div class="text-xs opacity-60 mt-1 not-italic">— 三星业内人士，反直觉的市场结构观</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"如果有一天 AI 不行了，大家发现 AI 没有什么用，你讲的一切未来都是空话，都会变成 0。"
<div class="text-xs opacity-60 mt-1 not-italic">— Rob，达摩克利斯之剑</div>
</div>

</div>

---
layout: end
---

# 在这场对存储芯片的饥饿游戏中，谁掌握了供给，谁就掌握了 AI 时代的话语权。

<div class="mt-6 text-sm opacity-60">
— 《硅谷101》陈茜
</div>
