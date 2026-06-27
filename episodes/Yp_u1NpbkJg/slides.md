---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "The Agent Cloud: Databricks' Bet on the Future of AI — Matei Zaharia & Reynold Xin"
info: |
  Databricks 联合创始人 Matei Zaharia 和 Reynold Xin
  在 Latent Space 谈 Data + AI Summit 三大发布：
  Omnigent、Lakebase、Dream Engine——以及背后的工程文化。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Matei Zaharia & Reynold Xin

<div class="text-xl opacity-80 mt-2">on Latent Space (Swyx)</div>

<div class="text-lg opacity-60 mt-6">
The Agent Cloud — Databricks' Bet on the Future of AI
</div>

<div class="mt-8 text-sm opacity-60">
Databricks 联合创始人 · Data + AI Summit 2026
</div>

<div class="mt-2 text-xs opacity-50">
Omnigent · Lakebase · Dream Engine · open-source vs service
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 三大发布
Omnigent（Agent Cloud）、Lakebase（Postgres on Lake）、Dream Engine（重写的分析引擎）——一周里推出来。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 开源策略论
什么该开源、什么该做闭源服务？Matei 给出他十年用 Spark 验证过的判断方法。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 安全策略要有状态
"是/否"型权限不够用。允许读机密 + 允许装新包都没问题，但同时做就要拦。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### LTAP 不是 HTAP
数据库工程师做了 10 年的圣杯——HTAP——是错的。统一存储就够了，不要统一引擎。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 数据库工厂
Dream Engine 不是写论文出来的，是用十年 trace 数据训了 ML 模型来选算法。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Snowflake 之后
两家公司同时起步、同样做存算分离。为什么 Databricks 走到了不同的位置？

</div>

</div>

---

# 两位主角

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Matei Zaharia
Databricks 联合创始人 · CTO

过去 5 年大部分时间在 Databricks 设计 **Unity Catalog**（数据治理层）。

这一次回到代理产品，是因为「编码代理的安全」和「数据治理」其实是同一个问题。

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Reynold Xin
Databricks 联合创始人 · 首席架构师

数据库迷。亲自上手写 Omnigent 的第一版原型——「一周从起床到睡觉都在写代码」。

主导 Lakebase 和 Dream Engine 的技术路线。

</div>

</div>

<div class="mt-6 text-sm opacity-70">
2026 年的 Data + AI Summit 现场 10 万人订阅、3 万人到场。两人坐在 Swyx（David）的录音棚里。
</div>

---

# Databricks 今天的规模

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-300">

### 每天启动的 VM
<div class="text-4xl font-bold text-blue-600 my-3">5000-6000<span class="text-2xl">万</span></div>
<div class="text-xs opacity-70">三大云加起来，目前最大的计算编排平台之一</div>

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-300">

### 每日数据处理量
<div class="text-4xl font-bold text-green-600 my-3">EB 级</div>
<div class="text-xs opacity-70">"根据你的时区，通常你还没吃早餐，今天就已经处理完了"</div>

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-300">

### Neon 每天启的数据库
<div class="text-4xl font-bold text-orange-600 my-3">1300<span class="text-2xl">万</span></div>
<div class="text-xs opacity-70">"对我来说简直是天文数字"——大部分来自代理 + 分支实验</div>

</div>

</div>

<div class="mt-8 p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

这是后面所有讨论的 baseline——他们不是在 PPT 上想象代理云，是已经在跑了。

</div>

---
layout: two-cols
---

# 一周里三个发布

不是路线图里的三件事，是 Matei 和 Reynold 各自押注的三件事——一起在 Data+AI Summit 上发布。

<div class="mt-4 space-y-2 text-sm">

**Omnigent** — Matei 的"宝宝"。开源的 Agent Cloud。

**Lakebase** — Reynold 的"宝宝"。把 Postgres 放进 Lakehouse。

**Dream Engine** — 两人一起。从零重写分析引擎。

</div>

<div class="mt-6 text-xs opacity-60">

Swyx：「你们俩可能正在领导着业内两个最独特、最具差异化的项目」——这是访谈的入口。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-launches.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Omnigent：为什么需要它

Matei 是从三条独立的"线"看到这个需求的，所有线最后汇聚到同一个问题：

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 内部编码代理
开发基础设施团队搭了个叫 **Isaac** 的东西，封装 Claude Code 和 Codex，在沙盒里跑。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Genie 数据科学代理
研究团队推出来给客户的"虚拟数据科学家"代理，Matei 是联合主导。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 客户的代理
所有客户都在自己搭代理。"每隔几个月就要换模型和线束"是大家共同的痛。

</div>

</div>

<div class="mt-6 p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

**作者概括**：三条线遇到的都是同一件事——会话共享、历史检索、协作。代理"自己跑起来"很容易，让一队人一起用很难。

</div>

---

# Reynold 的红灯故事

<div class="mt-6 p-6 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40 text-lg">

"我当时其实是开车去赴医生的预约……我当时在开车，用手机连接着笔记本电脑。**每当遇到红灯时，我都会走到路边，看看笔记本电脑上发生了什么**。"

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

### 当时的现实
笔记本必须开着才能盯 Codex 会话。要看输出就必须坐回笔记本前。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 他要解决的问题
「打开一个 shell、`ls` 看文件、`tail` 追日志、看 Markdown 渲染」——这些都要从手机上能做。

</div>

</div>

<div class="mt-4 text-sm opacity-70 italic">
"我觉得太荒谬了。感觉我们回到了编程的黑暗时代——你听说过云计算吗？"
</div>

---

# Omnigent 的核心：一个通用 API

<div class="mt-4">
<Excalidraw
  drawFilePath="./common-api.excalidraw"
  class="w-full"
  :darkMode="false"
  :background="false"
/>
</div>

<div class="mt-2 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**核心动作**：发送消息/文件、收回流式文本或工具调用、可以取消和转向——就这些。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**最值钱的部分**：「Claude 每次改 API，你都要跟着改自己的代码，否则就会丢消息」。维护这层接口本身就是价值。

</div>

</div>

---

# 周六开源，几天 400 PR

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 数字
- **周六**上线开源版本
- 几天内合并了 **~400 个 PR**
- 大约**一半**来自非 Databricks 团队

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 来自社区的功能
- **Kubernetes** 上运行
- 各种**云沙箱**集成（启动远端容器跑代理）
- 直接和 Cursor / CLI / Antigravity 互操作

</div>

</div>

<div class="mt-6 p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

Reynold：「（云沙箱）这对共享也很棒——它不像在你的笔记本上跑那种，它就在云上」。

</div>

<div class="mt-4 text-xs opacity-60">
Discord 是主要协作渠道。Matei：「请加入我们的 Discord，告诉我们你想怎么用它」。
</div>

---
layout: two-cols
---

# 什么该开源，什么该做服务

Matei 的判断法则，源头是 Spark 时代的经验：

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**开源**：当一层会从「众多人协作」中受益——比如连接器、库、生态集成。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**做服务**：当价值在「运维可靠性」——比如"半夜数据丢了得有人去顶"的那种。

</div>

</div>

<div class="mt-6 text-xs opacity-70 italic">

"如果你认为某个层会产生网络效应，那么它就能从众多人的协作中受益。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./open-vs-service.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 安全：是/否型权限不够用

<div class="mt-4 p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

**问题**：现在编码代理的安全都很基础——"哪些工具允许、哪些不允许"，答案非黑即白。但这会让你"陷入困境"。

</div>

<div class="mt-6 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 单看每一个
- 读机密文件？也许 OK
- 装一个 NPM 包？也许 OK
- 推到营销网站？也许 OK

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 同时做就危险
"能不能拿一份机密文件、被注入恶意代码、然后泄露出去？**恐怕不行**。"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 这要求什么
需要**有状态**的策略——跟踪整个会话状态，而不是逐次问"是或否"。

</div>

</div>

---

# 有状态的上下文策略

<div class="mt-4">
<Excalidraw
  drawFilePath="./stateful-policy.excalidraw"
  class="w-full"
  :darkMode="false"
  :background="false"
/>
</div>

<div class="mt-2 text-sm opacity-70">

Matei 举的例子：单独的"是/否"都答得了，但 **state-aware** 才能识别「读了一千份机密文件之后再装一天龄的 NPM 包」这种组合风险。

</div>

---

# 成本也是一条策略

<div class="mt-6 p-6 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40 text-lg">

"我曾经让一个代理调试某些东西，**结果它花了 500 美元**——因为它读取了大量的日志文件并消耗了大量的令牌。"

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 失控的画面
500 美元的调试会话——但谁让代理"想读多少日志就读多少"了呢？

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Omnigent 里的解法
「启动一个子代理来执行此操作，并将其花费**限制在 5 美元**。如果需要更多，请征得我的同意。」

</div>

</div>

<div class="mt-6 text-sm opacity-70">

这是有状态策略的另一个例子——会话级累计的"花了多少 token"，触阈值就弹窗。Reynold 提到，咨询公司 10 万员工一人多 1000 美元/月可不是闹着玩的。

</div>

---

# 谁是客户：要敢于过拟合

<div class="mt-6 p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

Matei：「业内人士普遍认为，如果你**过度拟合一两个客户**，可能会对你非常不利。但我认为**过度拟合的弊端远小于其本身的益处**——如果你过于雄心勃勃，试图面面俱到，问题就大得多」。

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Delta Lake 的起源
最大的客户提了一个具体需求：「这是每秒事件处理速率、这是延迟要求」——远超他们当时所有 workload。**先做给他**。然后发现别人也能用。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Clean Room 也是
最开始**只服务两个客户**。但「试图面面俱到」的更可能结果是：根本没有客户。

</div>

</div>

<div class="mt-6 text-xs opacity-60">
（这件事发生在 17-18 年——Databricks 公司成立大约四年的时候。）
</div>

---

# 第二个大发布：Lakebase

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 数据库圈子的圣杯
Reynold：「这是数据库工程的**圣杯**：为什么不构建一个可以同时完成 OLTP 和 OLAP 两项任务的单一系统呢？」

行业管这叫 **HTAP**，是 10 年前就有的梦想。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 但 HTAP 失败了
- Postgres 有庞大的生态，你必须用它的库
- Spark 也有庞大的生态
- 自己造一套新的 → **没有生态**
- 性能上还很难追上现有方案

「**最终的结果实际上是两头都占了便宜**」（不讨好）。

</div>

</div>

<div class="mt-6 p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

Lakebase 的名字是 **LTAP**——和 HTAP 谐音，但思路相反。

</div>

---
layout: two-cols
---

# 不统一引擎，只统一存储

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

「我们认为，**通过统一存储，你可以获得 99% 的需求**」。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

Postgres 直接以**列式格式**写到数据湖——分析层（Spark SQL）可以零延迟读，**不用 CDC**。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

代理的视角：「**只要数据存在且可访问，代理就能正常工作**」——它不在乎你用 PostgreSQL 还是 Spark SQL。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./htap-vs-ltap.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# CDC = Continuous Data Corruption

<div class="mt-4 p-6 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

Reynold：「CDC 是最枯燥但也是支撑现代社会最基础的操作之一。但它又非常脆弱——我们开玩笑说它应该叫**'持续数据损坏'**（Continuous Data Corruption）。」

</div>

<div class="mt-6 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 它在做什么
读 OLTP 数据库的 binlog，把增量复制到分析系统重建状态。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 它常坏在哪
「**你可能会更改 OLTP 数据库的模式，然后 CDC 管道就会崩溃**」——schema 变更 = 数据全丢。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 现场实证
主题演讲上 Reynold 问观众"是否喜欢你的 CDC 流水线"——**只有两个人举手**。

</div>

</div>

<div class="mt-6 text-sm opacity-70 italic">

"有些人靠做 CDC 就成了价值 50 亿美元的公司"——它太重要，所以连脆弱性都被接受了。

</div>

---

# 它是怎么做出来的：没有设计文档

<div class="mt-6 p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

Swyx：「但是对于公司来说，像这样具有战略意义和重要性的事情，**我期望会有一个启动会议、一份设计文档**……」

Matei：「**什么都没有**。」

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 真实情况
他和 Ali 讨论过"能不能用列式写"，开了一堆会，还在争论是否可行——「**有人直接就做了**」。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Matei 的反思
"如果你能营造出让大家这样做的环境，那就太好了。Omnigent 也差不多——如果一开始就发文档，每个人都会想'哦这个怎么样、那个怎么样'。**先做出来给用户用，他们会批评它，但它还能工作**。"

</div>

</div>

<div class="mt-4 text-sm opacity-70">
「这才是最重要的——**创新文化**。你不需要征求我的同意，你不需要走一整套正式流程，**直接去做就行了**。」
</div>

---

# Lakebase 架构：靠空闲 CPU

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 现状
Neon 架构本来就有存算分离。数据库还是按行写（用 Postgres Pages 格式）。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 那位工程师的原型
不写 Postgres Pages，**直接以 Parquet（列式）写到 S3** 这样的数据湖。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 关键发现
「我们的存储集群有很多**空闲的 CPU**」——刚好用来做"行→列"的转码。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 反直觉的结论
转码后数据**压缩得更好** → 写到 S3 实际**更快**。「没有额外开销，性能上也没有妥协」。

</div>

</div>

<div class="mt-4 text-sm opacity-70 italic">

经典的争论被一段原型代码结束了——「**但后来有人真的尝试做了原型，而且成功了**」。

</div>

---

# 一个澳大利亚客户：Reynold 被说服

<div class="mt-6 p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

「实际上**起初我自己也不太相信**——尽管我们写了那份定位（pitch）。」

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 客户的痛
「我们看 SLA 下降，想调查，但客服人员**根本无法了解数据库本身发生了什么**——只能看产品遥测。」

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 如果代理能查数据库
"知道究竟是谁在下订单、发生了什么、他们具体在做什么——**工作效率将提高十倍**。"

</div>

</div>

<div class="mt-6 p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

**作者概括**：HTAP 的 99% 价值——「让数据立即可用于推理分析」——是 LTAP 的核心。代理特别需要这个，因为它要边做事边查上下文。

</div>

---

# 第三个发布：Dream Engine

<div class="mt-6 p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

「市面上所有的数据库引擎，**尤其是分析型的，都已经存在十年左右了**……不知不觉中，经过十年的自然演进，**它变成了一堆垃圾**。Databricks 就是其中之一。」

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 自然衰变的机制
原本针对一些狭窄用例。变得成功 → 雄心更大 → 支持新用例最快的方法是绕过原始设计。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Dream Engine 的勇气
「很少有公司或系统有勇气说——**让我们从头开始**。回到设计阶段，利用今天掌握的一切，重写一遍。」

</div>

</div>

---

# 第二系统效应（与改名风波）

<div class="mt-4 p-5 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

「每个开发者都必须知道什么是'**第二系统效应**'：第一个系统开发得非常成功，**第二个系统注定会失败**——因为目标太高了。然后你去找你认识的人，你觉得自己什么都懂，这次我要设计一个完美的系统。结果证明它并不完美。」

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 风险
- "5 年才能成熟"是数据库引擎的传统经验
- 极有可能失败
- 工程师自己都担心

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 应对一：渐进上线
新引擎是新端点。先在低延迟场景跑（毫秒级），有用之后再扩展。不搞"5 年大爆炸"。

</div>

</div>

<div class="mt-4 p-4 rounded border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-30 text-sm italic">

"应对二（半玩笑）：其中一位工程师说，**'或许我们可以把它叫做"流引擎项目"'**——如果用联合创始人的名字命名，也许就不会被取消或扼杀了。"

</div>

---

# 数据库工厂：用 ML 选算法

<div class="mt-2">
<Excalidraw
  drawFilePath="./database-factory.excalidraw"
  class="w-full"
  :darkMode="false"
  :background="false"
/>
</div>

<div class="mt-2 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**输入**：十年积累的 query trace，「跟踪表中的数据点数量达到了**千万亿**」。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**模型**（不是 LLM，普通 ML）：预测任何算法在任何查询上的表现。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**输出**：实现期 + 运行期都能"路由到正确的算法"。

</div>

</div>

---

# 一百万个特征，不是 12 个

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Swyx 的提问
"我总是希望——好吧，给我 12 个。Oracle 40 年前那篇《分布式系统的八大谬误》就是这种东西。"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Reynold 的反驳
「这个模型实际上可能有**数百万个特征**……如果你真的尝试列出来，**可能会有一百万个不同的特性**。」

</div>

</div>

<div class="mt-6 p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 一个反直觉的例子
**字符串是 ASCII 还是 Unicode？**——影响惊人。

「如果字符串足够密集，**只有 256 个选项**，你就不需要哈希表。**你可以直接使用数组查找**——比如国家代码。**这样会快得多**。」

</div>

<div class="mt-4 text-sm opacity-70 italic">

「其中许多算法都非常**违反直觉**。它们实际上并不是你认为会非常好用的算法。」

</div>

---
layout: two-cols
---

# 和 Snowflake 的分岔路

两家公司同一时期起步、都做存算分离。差异在两个根本点：

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**1. Open formats from day one**
Databricks 从来没有专有格式——Parquet → Delta → Iceberg。Snowflake 是闭源格式。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**2. Pre-ChatGPT 就是 ML 平台**
2022 年 10 月之前，Databricks 已经把自己定位成「ML + 数据」平台——这不是事后追溯。

</div>

</div>

<div class="mt-4 text-xs opacity-70 italic">

"五六年前，Snowflake 一位联合创始人专门写了一篇博客叫**《明智地选择开放》**，基本上是反对（开放格式的）。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-paths.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 大数据先入，小数据后出

<div class="mt-4 p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

Reynold：「事实证明，**从这种擅长大规模数据摄取和超低成本的批处理方案出发，创建速度更快、功能更强大的版本……更容易实现**。」

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Snowflake 起点
管理最有价值的小数据、优化它跑得快——服务 manager、财务。"speed 是不同的领域"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Databricks 起点
"我们有很多 JSON 日志文件、各种各样的数据"——Spark 就是为这个生的，批处理大规模数据。

</div>

</div>

<div class="mt-6 p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 text-sm">

「我们曾经互相把对方列为**合作伙伴**。然后两家都意识到，**你必须进入彼此的领域**——客户在问'我为什么还需要这个东西？'」

</div>

---

# Mosaic 与"做不该做的模型"

<div class="mt-4 p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

Swyx：「你们收购 Mosaic 的时候，社区以为 Databricks 会做内部基础模型。但**看起来你们并没有这样做**——更多在做 Lakebase 和 Harness。这是怎么回事？」

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Mosaic 的早期
图像模型训练栈最快。后来做 LLM，发布过 MPC-7B，Databricks 收购后又发布了 **DBRX**（达到 Llama 3+ 规模）。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 但战略变了
「未来会有很多人发布模型。我们不想做依赖大量算力的通用模型——而是想关注**下一步：让模型在你的领域里跑起来**。」

</div>

</div>

---

# 专用模型：文档解析便宜 100 倍

<div class="mt-4 p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Matei 举的最具体例子
团队构建了一个**专门的视觉文档解析模型**——读一页 PDF/Word，吐出一份干净的 JSON。

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-300">

### 性价比
<div class="text-3xl font-bold text-blue-600 my-3">~100×</div>
<div class="text-xs opacity-70">比前沿模型便宜</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-300">

### 效果
<div class="text-3xl font-bold text-green-600 my-3">更好</div>
<div class="text-xs opacity-70">「Claude 几乎能理解，但还是会出错」</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-300">

### 出处
<div class="text-lg font-bold text-orange-600 my-3">DeepMind 校友</div>
<div class="text-xs opacity-70">前 DeepMind 研究员、Adept 联合创始人</div>

</div>

</div>

<div class="mt-6 text-sm opacity-70">

类似的子代理模型也在为编码代理做——Harvey、Anthropic、UC Berkeley 都在做"advisor model"风格。

</div>

---

# 接口让定制变简单

<div class="mt-6 p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

Swyx：「你知道是什么让它变得简单吗？**接口。统一的 API**。因为很明显，如果它不能互操作，你就无法切换。」

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 这正是 Omnigent 的角色
有了统一接口，**子代理可以挂载专门模型**——然后训练整个系统。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 这正是 AI Runtime 的角色
Databricks 一直在卖 GPU + 训练栈（**RL Fine-tuning**）。前置 SA 团队帮客户搭评估、合成数据管道。

</div>

</div>

<div class="mt-6 p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 text-sm">

Matei：「随着时间推移，**定制模型实际上会变得越来越容易**——基础模型更智能、合成数据更好、强化学习管道现在只用开源模型就能跑」。

</div>

---

# Reynold 接 Satya 的话：Tokens 是新石油

<div class="mt-6 p-5 rounded border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-30">

Swyx 提到：几周前在微软 Build 采访 Satya——他说话**听起来更像 Databricks 的 CEO**。文章在讲 tokens 作为 IP、构建上下文。

</div>

<div class="mt-6 p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 italic">

Reynold：「我同意。任何能够**提升数据价值并为你带来优势的技术**都是如此……你之前拥有的所有数据都只是静静地躺在那里。现在你可以让一个代理自动告诉你。」

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一个具体场景
以前 Reynold 自己发现产品 bug，靠的是客户投诉。**现在代理会主动说：「我注意到没人上传文件了，因为他们遇到了一个错误」**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 数据库公司的优势
「**因为我们拥有所有查询的历史、所有表的布局**——我们能很快构建一个全新引擎，而且确信它是好的」。这就是 Dream Engine 的来源。

</div>

</div>

---

# 结尾的论点：数据先到位，AI 自然接管

<div class="mt-6 p-6 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40 text-lg italic">

"我认为许多传统软件都会用这种新范式进行某种程度的重写：**这种新范式就是先把数据弄到手，然后在上面加上一些通用人工智能（AGI）**。**奇迹终将发生**。"

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 已经在做的两个垂直
Data + AI Summit 上发布的两款产品：**给安全团队**的、**给营销团队**的——都吃这套打法。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 但有前提
「但**如果没有正确的数据**，你真的做不到这一点。」——所以 Databricks 押的是「让数据先在那」这件事。

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"每当遇到红灯时，我都会走到路边，看看笔记本电脑上发生了什么——感觉我们回到了编程的黑暗时代。"
<div class="text-xs opacity-60 mt-1 not-italic">— Reynold 解释为什么需要云端的 Agent，看自己 Codex 会话</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"我们认为，通过统一存储，你可以获得 99% 的需求。"
<div class="text-xs opacity-60 mt-1 not-italic">— Reynold 解释 LTAP 为什么比 HTAP 对</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"我们开玩笑说它应该叫'持续数据损坏'——你可能会更改 OLTP 数据库的模式，然后 CDC 管道就会崩溃。"
<div class="text-xs opacity-60 mt-1 not-italic">— Reynold 描述 CDC 的脆弱性</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"或许我们可以把它叫做'流引擎项目'——如果我们用联合创始人的名字命名，也许就不会被取消或扼杀了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 某位工程师半玩笑地谈 Dream Engine 改名策略（避免第二系统效应）</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"这才是最重要的——创新文化。你不需要征求我的同意，你不需要走一整套正式流程，直接去做就行了。"
<div class="text-xs opacity-60 mt-1 not-italic">— Matei 谈那位"直接做了 Lakebase 原型"的工程师</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"过度拟合一两个客户的弊端远小于其本身的益处。如果你过于雄心勃勃试图面面俱到，问题就大得多。"
<div class="text-xs opacity-60 mt-1 not-italic">— Matei 谈 Delta Lake 和 Clean Room 的起源（17-18 年）</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"代理在 PostgreSQL 或 Spark SQL 方面非常精通，永远不会出错——只要数据存在且可访问，代理就能正常工作。"
<div class="text-xs opacity-60 mt-1 not-italic">— Reynold 回答"为什么不统一查询语言"</div>
</div>

</div>

---
layout: end
---

# 一旦数据摆放在正确的位置

<div class="mt-6 text-xl italic opacity-90">

"人工智能模型就会变得相当不错……奇迹终将发生。"

</div>

<div class="mt-6 text-sm opacity-60">

— Reynold Xin · Latent Space · 2026

</div>
