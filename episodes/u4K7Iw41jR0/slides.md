---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '苹果AI困境、特斯拉Robotaxi背水一战和海莉·比伯的10亿美妆战｜101 Weekly'
info: |
  硅谷101 Weekly 第一期 · 陈茜主持 · 三件事:苹果 WWDC 2025 的务实回归、特斯拉 6 月 22 日 Robotaxi 首发、Hailey Bieber 的 Rhode 三年十亿出售。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<div class="text-5xl font-bold mt-16">
苹果的退 · 特斯拉的赌 · 网红的卖
</div>

<div class="text-xl mt-6 opacity-80">
硅谷 101 · 101 Weekly · 第一期
</div>

<div class="mt-10 text-sm opacity-70">
陈茜 + 特约研究员 Yiwen / Yiming · 2025 年 6 月第二周
</div>

<div class="mt-3 text-xs opacity-50">
WWDC 2025 后的苹果 · 6 月 22 日的 Robotaxi · 三年估值 10 亿的 Rhode
</div>

---

# 这一周三件事

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 苹果

WWDC 2025 把 AI 期待"降级",回归设计与体验。<br/>
年初至今股价 **-18%**,垫底科技七巨头。<br/>
但开发者并不慌——它在赌另一条赛道。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 特斯拉

**6 月 22 日**:Robotaxi 在德州奥斯汀首发。<br/>
PE **170 倍**,远高于英伟达不到 50 倍。<br/>
"现在特斯拉又变成了一个背水一战的时刻。"

</div>

<div class="p-4 rounded bg-pink-50 border-l-4 border-pink-500">

### Rhode

Hailey Bieber 28 岁卖掉自己 3 年的美妆品牌。<br/>
**10 亿美元**给 e.l.f. · 年营收 **2.12 亿**。<br/>
"网红品牌 2.0"时代到来。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

陈茜:这是 101 Weekly 新栏目的第一期,"用更精炼的语言和观点,来讲讲过去一周最重要的三件科技与商业领域的国际大事件"。

</div>

---

# 苹果:WWDC 2025 把 AI 的话筒收回去

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 去年的代价

- 在 AI 上"画出了过于激进的大饼"
- 随后"发现无法达到发布标准"
- 让市场非常失望
- "几乎所有人都在问:**Siri 在哪里**"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 今年的姿势

- 苹果"变得更加务实了"
- 试图**淡化**人们对 AI 的期待
- 把重点拉回设计与体验
- "意识到什么是自己擅长做的事"

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**幕后已经换帅**:Tim Cook 对前 AI 负责人 John Giannandrea 的产品开发执行能力失去信心,调派 Vision Pro 负责人 **Mike Rockwell** 来负责 Siri 产品。

</div>

---

# 一句话点破苹果的本质

<div class="mt-10 p-8 text-2xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-40 rounded">

"刚开始加入苹果的时候,我的 mentor 跟我说,<br/>
**恭喜你加入了一个 Fashion Company**——<br/>
你加入了一个时尚公司。"

</div>

<div class="mt-6 text-sm opacity-70">
—— 嘉宾回忆刚入职苹果时被告知的"行业身份"
</div>

<div class="mt-10 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**这一年的"时尚"**:Liquid Glass(液态玻璃)界面、CarPlay 毛玻璃效果、Mac/iPad 红绿灯统一、文件夹换色加 emoji。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**团队内部都吵起来了**:"丑上热搜"vs"看 F1 真的太库辣"——但苹果以前 iPhone X 刘海、灵动岛、突出摄像头被骂之后,其他厂商照样跟风。

</div>

</div>

---
layout: two-cols
---

# 苹果在比的不是大模型,是这个 stack

<div class="text-sm mt-4">

开发者认为不能把苹果横向去和 OpenAI / Anthropic / Meta / 谷歌比——它走的是完全不同的发展路径:**押注端侧模型在硬件上跑的体验**,而不是大模型能力本身。

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

Craig Federighi 反复强调:"我们的模型必须是 **pervasive**(普遍性的)、必须是 **proactive**(主动性的)。"

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**"苹果认为 AI 不应该是一个 chatbot,它应该存在你所有的 interaction 里边。"**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./apple-stack.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 但端侧小模型还没成熟

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 现状

- 几十亿参数的端侧小模型,"能力还在处在一个快速增长期"
- 但距离能完成用户真正关心的任务"还是有一定距离的"
- 嘉宾的估计:**"当下能解决的问题 30% 都不到"**

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 临时方案

- 现阶段靠 **LoRA + 微调** 弥补能力差距
- 但 LoRA 一定会"使得开发门槛更高"
- 最理想是开发者直接 Prompt + API → 这才是最低门槛
- "这一定是最低门槛的一种方式"

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**关键时间点**:苹果官方给的是 **2026 年的所谓 LLM Siri**。但按现在大模型进度,"到 2026 年春天或年底,我们甚至都可能已经有 GPT-5 了"。

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs">

**插曲**:苹果几天前发的一篇研究文章里说,Chain of Thought Thinking 是 **illusion**(错觉)——"感觉苹果其实在研发最尖端的角度,并不是他们一直擅长的事情"。

</div>

---

# WWDC 上真正值得期待的东西:Foundation Models API

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 直接可见的:实时翻译

- 集成在 iMessage / FaceTime / 电话
- **完全在设备端运行**,对话保持私密
- Meta Ray-Ban Glass 几个月前已有类似功能
- 苹果的优势是:**整个 APP 生态 + 硬件端口**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 真正的大新闻:API 开放

- 端侧大模型访问权限对开发者开放
- 借助 Foundation Models 框架,**"App 开发者只需三行代码"** 即可调用 Apple Intelligence 模型
- 开发者不用承担云端模型的运营成本
- 系统级 AI 深度集成 → 可调用 Apple Silicon NPU

</div>

</div>

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

嘉宾评价:"这个 API 在我眼里是一个非常重大的东西。手机生态最重要的还是能够把第三方的这些应用的开发者都给利用起来"——**这可能是苹果 AI 生态繁荣的第一步**。

</div>

---
layout: two-cols
---

# 苹果真正的护城河:你的数据

<div class="text-sm mt-4">

开发者眼中苹果的"绝对优势":**数据**。

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

不止手机——还有"**家里的传感器、车上的一些东西**",这些"是云端厂商有可能是很难拿到的"。

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Agent 的逻辑**:"不管你大模型做得多好,不管你以后做任何的 agent 做得多 fancy,你都需要用户的数据。"

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

"你不知道用户的 context,用户不可能把所有的数据都给到每一个 agent。最终肯定需要有一个**集中的阶段**。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./apple-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 苹果的"阵痛期"有多久?

<div class="mt-6 p-6 text-xl italic border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-30 rounded">

"苹果一直所宣传的是——**我在做端侧的同时,我在保证隐私的同时,我不会去牺牲任何用户的体验**。<br/>
那这件事情在 AI 上是不是还会成立?这会是一个问题。"

</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 有底牌

- 世界上手握现金最多的科技巨头之一
- 数以十亿级用户
- 端到端硬件 + 系统控制

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 但有代价

- 隐私 / 端侧专注 → 产品开发挑战
- 为了"完美"的额外时间
- 会不会就在过程中掉队?

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 关键问题

消费者的"期待和耐心"能不能撑苹果度过这段**阵痛期**? 这个"阵痛"有多久?"我们拭目以待"。

</div>

</div>

---

# 特斯拉:6 月 22 日,背水一战

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 这场仗有多重

- 马斯克与川普决裂 → 单日跌幅 **14%**
- 现在又服软言和
- **"现在特斯拉又变成了一个背水一战的一个时刻了"**
- "马斯克现在是真的不能再分心了"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 这一天的意义

- 6 月 22 日:Robotaxi 在**德州奥斯汀**首次运营
- "对每一位特斯拉的投资者来说,是一个真正的标志性时刻"
- 市场对特斯拉的高估值,"很大一部分就是建立在 Robotaxi 能否实现之上"

</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

嘉宾打的比方:"就像当年 Model 3、Model Y 的时候,你量产不出之后就要破产。那么我今天也认为特斯拉如果不把自动驾驶解决、不把这个物理世界 AI Optimus 最终把它推向市场,我觉得特斯拉也到这样一个境地。"

</div>

---
layout: two-cols
---

# 拆开 Q1 财报,你看到的不是车企

<div class="text-sm mt-4">

2025 Q1 财报:净利润 **$4.09 亿**。<br/>
但仔细一看——**碳积分收入 $5.95 亿**。

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

"如果减掉这部分,实际上特斯拉已经陷入亏损。"

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**历史累计**(2009-2024):特斯拉获得 **$100 亿+** 碳积分收入,**几乎全是利润**。<br/>
2023 占净利润 **12%**,2024 占 **30%**。

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

资本市场的玩笑:**"你不是一个造车的公司,你是一个卖碳积分的公司"**。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tesla-revenue.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "大而美"法案 = 悬在头上的剑

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 法案里两刀

**第一刀**:逐渐废除碳积分交易体系<br/>
→ 瑞银估计今年特斯拉损失 **$20 亿** 利润

**第二刀**:2025 年底前取消每辆电车 **$7500** 税收抵免<br/>
→ 比原计划**提前 7 年**<br/>
→ 摩根大通估计:今年再减 **$12 亿** 利润

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 卖车这一面也在垮

- 2025 Q1 全球交付 **同比 -13%**
- "从 2022 年以来局势就没这么严峻过"
- 欧洲市场"下滑的比例比较严重"
- 美国渗透"已经走到头了"
- 嘉宾原话:"今天没看到任何情况好转迹象"

</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

法案现状:众议院**仅以 1 票优势**通过 → 参议院审议中 → 川普希望 **7 月 4 日前签署**。<br/>
马斯克在"最后关头"猛烈抨击,于公于私都可以理解。

</div>

---

# 那为什么 PE 还能 170 倍?

<div class="mt-4 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 特斯拉 PE
<div class="text-5xl font-bold text-red-600 my-2">170×</div>
<div class="text-xs opacity-70">基本面在恶化,股价却很坚挺</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 七巨头均值
<div class="text-5xl font-bold text-blue-600 my-2">~50×</div>
<div class="text-xs opacity-70">特斯拉是七巨头平均的 3 倍多</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 英伟达
<div class="text-5xl font-bold text-green-600 my-2">&lt;50×</div>
<div class="text-xs opacity-70">AI 王者都没这么贵</div>

</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Morgan Stanley 估值模型**:**60%+** 价值来源于 FSD 和 Robotaxi,电动车业务**只占 20% 多**。

</div>

<div class="p-3 rounded bg-pink-50 border-l-4 border-pink-500">

**ARK 木头姐模型(最看好)**:Robotaxi 在未来占到 **90%** 的价值贡献。

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

嘉宾点破:"今天还在投资特斯拉的人和两三年前已经不一样了"——市场已经把它当 **AI 公司**来给估值,马斯克自己脑子里"早就已经要把特斯拉转型成 AI 公司了"。

</div>

---

# 6 月 22 日首发:大众最大的误解

<div class="mt-6 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-40 rounded">

"大众非常误解的一件事情,就是这个 Robotaxi——<br/>
它不是去年的那个车型的 Robotaxi 运营,<br/>
**而是你 37000 美金买来的 Model Y**。<br/>
我觉得这是非常震撼的一件事情。"

</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 首发车队
**10 辆** Robotaxi<br/>
特定地理围栏内<br/>
有人类远程监视、随时接管<br/>
保守驾驶避开高风险道路

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 半年路线图
未来几个月逐渐增加到<br/>
**20 → 30 → 40 辆**<br/>
今年年底达到**千辆**规模

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 一年目标
明年年底实现 **100 万辆**车队<br/>
→ 这只能通过**把私家车纳入**车队才可能实现<br/>
(Hardware 4 / 5 都可成为运营车之一)

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">

注意:这次发布可能只是小规模初步启动,**不对公众开放**,也不一定有像 AI Day 那样的发布会。

</div>

---
layout: two-cols
---

# Tesla vs Waymo:两条路线

<div class="text-sm mt-4">

特斯拉最大的对手是谷歌旗下 **Waymo**——这两家公司也代表了"两种技术路线"。

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**马斯克的"第一性原理"**:既然人能用两只眼睛开车,机器也一样可以——所以砍掉雷达,不依赖高精地图,端到端神经网络。

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Waymo 的赌注**:更多传感器 → 感知冗余 → 已运行在 **L4**。但是**每个城市都要测绘**,海外更难,**车队至今 <1500 辆**。

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**马斯克的杀手锏**:算法成熟 → 全球 OTA 一夜部署 → 已有百万级 Hardware 4 车队可即时启用。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tesla-vs-waymo.excalidraw"
  class="w-[520px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Waymo 已经在指数级跑了

<div class="mt-4 grid grid-cols-3 gap-4 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 2023 年末
<div class="text-4xl font-bold text-blue-600 my-3">100 万</div>
<div class="text-xs opacity-70">付费乘车总数突破百万次</div>

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### 2024 年末
<div class="text-4xl font-bold text-green-600 my-3">500 万</div>
<div class="text-xs opacity-70">一年内 5 倍增长</div>

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### 2025 年 5 月
<div class="text-4xl font-bold text-orange-600 my-3">1000 万</div>
<div class="text-xs opacity-70">指数级增长速度</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**嘉宾的反直觉判断**:对纯视觉特斯拉来说,**有 Waymo 这样的对手是好事**——"如果这种新市场只有一个主要玩家,要么是市场总体不大,要么是新技术完全不成熟"。Waymo 的指数增长本身就在证明:**"消费者对乘坐一辆没有人开的车,在逐渐养成消费习惯"**。

</div>

---

# Robotaxi 大规模铺开:还要过三关

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### ① 极端场景

特斯拉 FSD 现在介于 **L2 ~ L3**,还到不了 L4。<br/><br/>
要证明能到 L4,必须搞定偶然事故的可能性 → 需要更多驾驶数据 → "可能还不够远,远超过目前已经完成的测试量"。<br/><br/>
Waymo 因传感器冗余**已经在 L4**。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### ② 监管碎片化

**美国是联邦制,每个州一套**。<br/><br/>
很多州还没进入操作流程,"监管不在我的议事日程里面"。<br/><br/>
德州奥斯汀:开绿灯(马斯克总部、大雇主、本地建厂)。<br/>
亚利桑那 / 佛罗里达呢? **"目前确实不知道"**。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ③ 基础设施

车队大规模运行需要:<br/>
- 足够的充电桩<br/>
- 车队充电设施<br/>
- 车内清洁设施<br/><br/>
"美国在充电桩这个基础设施上,其实铺的不算太快。" Morgan Stanley 估值模型里专门把这些都算进去了。

</div>

</div>

---

# 一个更大的故事:把 xAI 装进特斯拉

<div class="mt-4 p-6 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

市场上的猜测:"很有可能马斯克会在今后,把他的其他的一些重要业务,没有上市的业务,装进这个上市公司的实体——<br/>
**比如说会让特斯拉直接和 xAI 去合并**。"

</div>

<div class="mt-5 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 业务协同的故事可以讲

xAI 已经训练了一个很大的模型 → 理论上"可以用到自动驾驶上面"。<br/>
合并之后整个故事就改变了 → 变成一个**大模型公司**的估值 → "还是有往上走的空间"。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### "战时马斯克"

5 月底他在 X 上写:回到 **24 小时全天工作**,直接睡在会议室、服务器机房和工厂里 → 必须高度专注于 X、xAI、特斯拉 → **股价应声大涨**。

</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">

陈茜的注脚:"马斯克重新回到 24 小时全天工作的这一刻,像极了十年前特斯拉濒临破产时,他睡在工厂地板的岁月。那时'愤怒的马斯克'创造了奇迹——**不过现在战场已经复杂了十倍**。"

</div>

---

# Rhode:模特用 3 年卖了 10 亿

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-pink-50 border-l-4 border-pink-500">

### 这笔交易的数字

- 创立时间:**2022 年**
- 出售时间:**2025 年 5 月 28 日**
- 收购方:平价美妆 **e.l.f. Beauty**
- 总价 **$10 亿** = $6 亿现金 + $2 亿股票 + 未来 3 年基于业绩的 $2 亿对价
- 2025 财年(截至 3 月底)净销售额 **$2.12 亿**,同比 **+28%**

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 这个女主角

- **Hailey Bieber**,28 岁,美国模特
- 大众更熟悉的身份:Justin Bieber 的妻子
- 多年护肤热衷者,品牌的"产品官 + 形象官"
- 嘉宾原话:**"她是一个真正的流媒体女王在创业。"**

</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

收购后:Hailey 继续担任 Rhode **首席创意官**,参与产品、营销、品牌增长,同时成为 e.l.f. 集团**顾问**,Rhode 作为独立品牌运营。

</div>

---

# 为什么是她?——时机、人设、载体

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 不是"第一",也不是"最大牌"

赛道当时已经很拥挤:<br/>
- **Fenty Beauty by Rihanna**——多色底妆开创者<br/>
- **Rare Beauty by Selena Gomez**——经常被网友拿来和 Hailey 比较<br/><br/>
"海莉并不是第一个,也不是最大牌的那一个。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 但她做对了一件事

精准切中 **Clean Girl Aesthetic**:<br/>
**极简护肤 · 裸妆质感 · 屏障修复**<br/>
而不是浓妆艳抹的变脸式营销<br/><br/>
"她自己是模特,多年来最热衷于研究护肤——所以当她手握精华、素颜出现在大众面前的时候,**网友是真的会买账**。"

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

嘉宾的判断:彩妆是**外显的** → 自带潮流、社交、肤色包容、跟外貌和解的意味——"**非常适合社媒去呈现,非常适合短视频,非常适合短平快的呈现它的效果**",也非常**自带价值观**,适合 icon 做宣导。

</div>

---

# 三款产品 + 一只手机壳

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-pink-50 border-l-4 border-pink-500">

### "少即是多"的起步

Rhode 最初只上线了**三款产品**:

- **Peptide Glazing Fluid**(精华)
- **Barrier Restore Cream**(修护霜)
- **Peptide Lip Treatment**(唇膜)

Hailey 在社交媒体不断素颜试用 → 在年轻女性中迅速建立口碑 → Peptide Lip Treatment 在 TikTok 被无数博主安利,**一度引发断货**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 渠道:零线下,全靠官网+社媒

不到 3 年:
- 年营收 **$2 亿+**
- 年增速 **~30%**
- "对于一个新创美妆品牌来说,**是极其罕见的成绩**"

今年的爆款:**Lip Case** —— 附带放唇膏的小手机壳,社交媒体疯传。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">

起源细节:2015 年 Hailey 认识了 Justin Bieber 纪录片 *Seasons* 的导演 **Michael Ratner**(OBB Media 创始人);疫情期间 Hailey 萌生做护肤品牌的想法、电话告诉了 Michael,两人一拍即合。Rhode 初期 Michael 为她拍了 YouTube 系列《我的洗手间里有什么》。

</div>

---

# e.l.f. 为什么花 10 亿买它

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### e.l.f. 是谁

- 成立于 **2004 年**
- "低价 + 高质量"老牌美妆
- 大牌粉底卖 $100+,e.l.f. 只要 $20 不到
- 在 CVS、Target 等渠道广泛铺货
- 受中低收入年轻消费者欢迎
- 2024 年**全年销售额 +77%**
- 过去 5 年股价**上涨近 1000%**

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 它在担心什么

- 投资人担心**关税**会影响未来
- 必须铺设更多样化的产品线
- 收购 Rhode 是进军**"高端 + 护肤"赛道**的重要一步
- **双赢**:Hailey 拿到资金 + 分销资源;e.l.f. 拿到品牌调性 + 增长动力

</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

嘉宾的注解:"北美有好多这样的开价品牌,长期存在于某一类渠道,然后他们解决的是功能性的问题,**而且存活时间很长**。"

</div>

---

# 网红品牌 2.0:成功 vs 失败

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 成功的 = 创始人下场 + 价值观

**Rare Beauty / Selena Gomez**:嘉宾点名是"标志性品牌"——
- 创始人个人风格属性强 + 鲜艳妆效
- 借品牌讲述自己**双向情感障碍**的经历
- 把品牌关注点拉到 **mental health wellness**
- "让彩妆品牌超出了妆效或审美这个事情点本身,变成一个**有社会价值意义的讨论**"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 失败的 = 顶着名字找代工

- **Ariana Grande 的 r.e.m. beauty**:启动声势浩大,但产品定位模糊销售不理想
- **Kim Kardashian 的 KKW Beauty**:因结构重组**已停产**

</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

陈茜的总结:"年轻人想要的美妆品牌,不再是顶着明星脸的代工厂——而是**真正懂得社群文化和内容叙事的企业**。" 产品力要经得起考验,创始人要亲自下场,**社交媒体只是放大器而不是遮羞布**。

</div>

---
layout: two-cols
---

# Rhode 的增长飞轮

<div class="text-sm mt-4">

把"网红品牌 2.0"成功的几个要素拆开:

</div>

<div class="mt-3 p-3 rounded bg-pink-50 border-l-4 border-pink-500 text-sm">

**起点**:创始人本人就是赛道用户(模特 / 多年护肤研究) → IP 真实 → 不用编剧本。

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**载体**:素颜短视频 + 护肤教程 → 自带短平快、社媒友好属性。

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**产品**:3 款极简核心 + 紧扣 Clean Girl 美学 → TikTok 直接断货,Lip Case 二次破圈。

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**社群**:**密切的社群** + 价值观放大器 → 复购、声量、估值,全打通。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rhode-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这一期 101 Weekly 里最值得记住的几句:</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"恭喜你加入了一个 Fashion Company,你加入了一个时尚公司。"
<div class="text-xs opacity-60 mt-1 not-italic">— 嘉宾回忆刚入职苹果时,mentor 对他说的话</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"苹果认为 AI 不应该是一个 chatbot,它应该存在你所有的 interaction 里边。"
<div class="text-xs opacity-60 mt-1 not-italic">— 论苹果与 OpenAI / Anthropic 的路线分歧</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"不管你大模型做得多好,不管你以后做任何的 agent 做得多 fancy,你都需要用户的数据。"
<div class="text-xs opacity-60 mt-1 not-italic">— 嘉宾解释为什么苹果即使现在落后也不用担心</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"你不是一个造车的公司,你是一个卖碳积分的公司。"
<div class="text-xs opacity-60 mt-1 not-italic">— 资本市场对特斯拉 2025 Q1 财报的玩笑</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"它不是去年的那个车型的 Robotaxi 运营,而是你 37000 美金买来的 Model Y。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 6 月 22 日首发,大众最大的误解</div>
</div>

<div class="p-3 bg-pink-50 border-l-4 border-pink-500 rounded italic">
"她是一个真正的流媒体女王在创业。"
<div class="text-xs opacity-60 mt-1 not-italic">— 嘉宾对 Hailey Bieber 做 Rhode 的定调</div>
</div>

</div>

---
layout: end
---

# 这就是这一周的三件事

<div class="mt-8 text-base italic opacity-80">

"现在特斯拉又变成了一个背水一战的时刻了。"

</div>

<div class="mt-3 text-xs opacity-50">
硅谷 101 · 101 Weekly · 陈茜 + 特约研究员
</div>
