---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '英特尔是如何走向倒塌的'
info: |
  硅谷101 深度：傲慢、短视、扼杀创新——一座芯片大厦的崩塌
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 英特尔是如何走向倒塌的

<div class="text-xl opacity-70 mt-4">
傲慢 · 短视 · 扼杀创新
</div>

<div class="mt-12 text-sm opacity-60">
硅谷101 · 陈茜 · 2024 年深度复盘
</div>

<div class="mt-4 text-xs opacity-50">
一家曾经霸榜 PC 市场 30 年的垄断者，是如何在十几年间逐步崩塌的？
</div>

---
layout: default
---

# 本期看点

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 三次错过
移动、GPU/AI、CPU 主阵营——同一种决策模式
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 制程停滞
14nm 卡 6 年，AMD 用 TSMC 7nm 把 x86 份额抢走 10 个点
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### IDM 2.0 自救
Pat Gelsinger 的三方向豪赌，为何只跑到一半就被叫停
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 失能的董事会
11 位董事，真正懂半导体的只有 1 位
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 被动投资者的闭环
机构 + 投票代理 → 自动驾驶状态
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 傲慢的文化
"嘲笑 AMD 和 NVIDIA 的 GPU 架构是 Ugly"
</div>

</div>

---
layout: default
---

# 2024 年底：英特尔的全面崩塌

<div class="grid grid-cols-4 gap-3 mt-8 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 股价
<div class="text-3xl font-bold text-red-600 my-2">-60%</div>
<div class="text-xs opacity-70">2024 YTD 重挫</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 道琼斯
<div class="text-3xl font-bold text-orange-600 my-2">移出</div>
<div class="text-xs opacity-70">被英伟达替代</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 市值
<div class="text-3xl font-bold text-yellow-700 my-2">&lt; $1000 亿</div>
<div class="text-xs opacity-70">从历史峰值 $5000 亿一路下滑</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 高通
<div class="text-3xl font-bold text-blue-600 my-2">收购传闻</div>
<div class="text-xs opacity-70">一度被传寻求收购</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-gray-50 border-l-4 border-gray-400">

同时：卖厂、裁员、出售子公司、被股东集体起诉「重大虚假或误导性陈述财报」——四面楚歌。

</div>

<div class="mt-6 text-sm opacity-60">
从 1991-2021，英特尔只有 3 次跌出全球半导体前两名。
</div>

---
layout: default
---

# CEO 的"周日退休"

<div class="mt-6 grid grid-cols-2 gap-6">

<div>

### 公告

- **2024-12-2 周一**：英特尔发布公告
- **生效日期：周日（12-1）**
- 没有任何预告，没有交接安排
- 「12月1日生效」「这个退休时间竟然还是个周日」

</div>

<div>

### 解读

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

> "我无言以对……各位 我就地退休了！摆明不对劲"
>
> <span class="opacity-60">— 节目主持人陈茜</span>

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

虽然说名义上是退休<br>
大家都知道这是解雇<br>
因为最终这个董事会没有足够的耐心了

</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

Pat Gelsinger 1979 年加入英特尔，做过 80486 架构师，主导过 14 种处理器开发。
他 2021 年回归时，市场盘前股价飙升 14%。三年半之后，被自己说服过的董事会请走。

</div>

---
layout: two-cols
---

# 三次错过：同一种决策模式

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**① 错过移动互联网（2006-2016）**

拒 iPhone CPU · 卖 XScale · 自降 Atom 出货量 · 投资 100 亿打水漂

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**② 错过 GPU 与 AI（2006-2024）**

砍掉 i740 · 取消 Larrabee · 拒绝 OpenAI 30% 股份 · Nervana 与 Habana 战略混乱

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**③ 失守 CPU 主阵营（2018-至今）**

14nm 卡 6 年 · 数据中心被 AMD 蚕食 · 客户全员自研 ARM 芯片

</div>

</div>

<div class="mt-4 text-xs opacity-60">

每一次决策背后都有同一个理由：<strong>利润率</strong>。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./missed-waves.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 错过移动 ①：拒绝 iPhone

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2006 年的开价

乔布斯希望英特尔为初代 iPhone 提供处理器。

时任 CEO **Paul Otellini** 拒绝了——**理由：这门生意利润太低**。

英特尔当时忽略了一个事实：未来手机市场出货量将远大于 PC。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">

### Otellini 卸任前的自白

> "虽然英特尔喜欢用财务数据说话，但在我的职业生涯中，很多时候我都是凭直觉做决定的。
>
> 我应该听从自己的直觉。我的直觉告诉我要说'是'。"

<div class="not-italic text-xs opacity-60 mt-2">
来源：《The Atlantic》卸任专访
</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-red-50 border-l-4 border-red-500">

**为什么 CEO 没听自己的直觉？**「Intel 历史比较长，董事会人员比较多，股权也比较多，所以 CEO 讲话的分量比较小」。
后来英特尔找微软 + 诺基亚做手机搭档——一个"失败者联盟"。

</div>

---
layout: default
---

# 错过移动 ②：卖掉整个手机业务线

<div class="mt-6 grid grid-cols-2 gap-6">

<div>

### Otellini 上任之初

- 以 **6 亿美元**把 XScale（含 ARM 业务）卖给 Marvell
- 「ARM 处理器的利润太低」
- 主攻方向继续押注 x86

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 内幕：Marvell 当年的主导者 Hongyi Chen 回忆

「英特尔出售 XScale 不只是 ARM 设计板块，而是出掉了整个手机业务线。」

「当初 Intel 买了一个公司叫 DSPG，它有 3G 的基带。
他一开始决定他们不要做这个基带、不要做手机的业务，所以就卖给了 Marvell。」

</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**手机芯片是一个 SoC 系统**：AP / Baseband / PMIC / RF 必须一起设计。卖掉 ARM 等于卖掉整套能力。
而 Marvell 接手后的最大客户是黑莓——黑莓崩盘，这条业务线也就跟着崩了。

</div>

<div class="mt-4 text-xs opacity-60">
这个决策在当时看是甩掉低利润包袱，事后看是亲手关上了移动时代的门。
</div>

---
layout: default
---

# 错过移动 ③：Atom 的自我设限

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded border-2 border-blue-300 bg-blue-50">

### 2008：Atom 出场

- 英特尔史上体积与功耗最小的处理器
- 热设计功耗 **0.6 ~ 2.5 W**
- 起初为上网本设计，后来用在手机、甚至特斯拉上
- 这其实是一个有机会的产品

</div>

<div class="p-4 rounded border-2 border-red-300 bg-red-50">

### 然后英特尔自己踩刹车

- 「担心如果全心投入低功耗芯片，随着廉价移动芯片性能越来越强」
- 「**会削弱利润更高的台式机芯片需求**」
- 「甚至威胁到服务器市场」
- 于是**有意降低了 Atom 芯片的出货量**

</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

**2016 年，英特尔正式退出手机市场。** 之前在移动互联网领域投资的 **100 亿美元**，打了水漂。

</div>

<div class="mt-4 text-sm opacity-70">

这是后面所有故事的母题——**自家高毛利业务永远不能被自家低毛利新业务威胁**。

</div>

---
layout: default
---

# 放弃 GPU：从 i740 到 Larrabee 的"白痴"邮件

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1998：i740

英特尔推出首款独显，**才过一年**就把 i752 集成在主板上、取消独显。
理由：「无法容忍自己的产品不是市场顶尖」。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 2006-2009：Larrabee

时任 CTO Pat Gelsinger 负责的独显项目，押 x86 架构做 GPU。
功耗高、发热严重、单位面积装不下足够核心。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 2009：项目取消

英特尔内部爆出邮件：
**"Larrabee 的开发团队就是一群白痴，公司企业文化全被他们破坏了"**。
同年 Pat「被气走」。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">

> "但在 13 年前我被迫离开公司时，他们终止了本可以改变 AI 发展格局的项目。"
>
> <span class="not-italic text-xs opacity-60">— Pat Gelsinger 回忆 Larrabee</span>

</div>

<div class="mt-4 text-xs opacity-60">

往后十年间，英特尔一直缺席独显市场——错过了挖矿，也错过了 AI。

</div>

---
layout: two-cols
---

# 错过 OpenAI 那 30%

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**2017** 英特尔和 OpenAI 商议合作：10 亿美元现金 → 15% 股份；成本价供硬件 → 再加 15%；**总共 30%**。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**2018** 时任 CEO **Bob Swan** 拒绝。理由：「AI 要进入市场还早的很，这笔投资肯定会亏」。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**内幕**：另一个原因是<strong>数据中心部门不愿打开降价的口子</strong>。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

讽刺：英特尔 **2016 年刚收购过 AI 芯片公司 Nervana**——「真的不看重 AI，那你收购 Nervana 又是为了什么？」

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./openai-rejection.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# AI 收购：买进来，又雪藏掉

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Nervana → 雪藏

- **2016** 收购 Nervana Systems
- **2019-08** 推出 NNP-T / NNP-I
- **半年后** 又有了"新欢"
- NNP 系列就此**被雪藏**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Habana → 边缘化

- **2019-12** 收购 Habana Labs
- 产品 Gaudi 芯片
- Pat 预计销售额可达 **5 亿美元**
- **2024：AI 芯片市场份额 &lt; 1%**

</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**嘉宾点评**：

> "整个的执行和后面的产品路线上面，相对来说都比较混乱。
> 通常来讲，公司要收购成功，他的这个战略地图一定要很清楚。
> 那英特尔买这两个我也看不出它的战略意义是什么。"

</div>

<div class="mt-6 p-4 rounded bg-gray-50 border-l-4 border-gray-400 text-sm">

**2024-09** Gelsinger 在德意志银行分析师会议上宣布：英特尔**退出 AI 训练市场**，转向推理。

</div>

---
layout: two-cols
---

# 卡在 14nm 的 6 年

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**钟摆计划**（2005）：一年改设计、一年改制程。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**2013** Brian Krzanich 上任：EUV 不能给英特尔带来经济上的增长，**继续押 DUV**。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**逻辑**：IDM 模式只造自家芯片，换新设备会摊薄毛利。改老设备能"省研发费"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**结果**：英特尔在 14nm 上原地踏步 6 年，直到 **2021-10** 才推出 Intel 7（其实就是 10nm 增强版）。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./process-stuck.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# AMD 的反超

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50">

### Intel 这边

- **2019** 还在用 14nm
- 弥补性能的方式：**提升功耗**
- 「它功耗就非常大」
- 发热量显著上升 → 失去数据中心客户

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### AMD 这边

- **2019 Q3** 第三代 Ryzen 上市
- 采用台积电 **7nm**
- 一向领先的英特尔，**x86 市场份额突然大跌近 10%**
- 一度与英特尔打出 **4-6 开**

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 嘉宾观察：Intel 用的是 "strong transistor"（强效晶体管）

> 「它其实用的电晶体很大，允许它制程偏移，所以它虽然几代比你落后，
> 其实它的速度不会比你慢。但是问题出在它 10nm 速度是快，但是还有一样东西是功耗——它功耗就非常大」

</div>

<div class="mt-4 text-xs opacity-60">

**数据中心一直是 Intel 过去十几年的最大增长点和最高利润点**。发热一上来，这块就守不住了。

</div>

---
layout: default
---

# 失守数据中心：PCI-E 通道的暗坑

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Intel 至强 Xeon 6900P

PCI-E 5.0 通道数：**96 条**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### AMD EPYC 9005

PCI-E 5.0 通道数：**最高 160 条**

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**为什么这件事关键**：PCI-E 通道数 = 一颗 CPU 能带动的显卡/硬盘数量。AI 时代以 GPU 为中心，AMD 更适合。

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">

> "英特尔它本身我认为它 PCI-E 的技术掌握得并不好。
> 它会去跟像 Synopsys 这种公司来授权，它授权的技术你没有办法掌握……
> 跟少林武当（其他公司）比差太远了。"
>
> <span class="not-italic text-xs opacity-60">— 嘉宾访谈，从技术眼光看</span>

</div>


---
layout: default
---

# 客户集体"反水"

<div class="mt-4 text-sm opacity-70">
"巨头们谁也不想受制于人，纷纷开启了自研芯片的道路"
</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 自研 Arm CPU 的客户

- **2018 底** Amazon Graviton
- **2023-11** Microsoft Azure Cobalt 100
- **2024-04** Google Axion
- **2024-11** 阿里巴巴 倚天 710（大规模部署）

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Mac 离场 + 英伟达入场

- **2020** Apple M1 → Mac 不再用 Intel
- **2022 GTC** NVIDIA Grace CPU 发布
- 现在 NVIDIA 把 Grace + GPU 捆绑卖（GB200）

</div>

</div>

<div class="mt-6 p-5 rounded bg-red-50 border-l-4 border-red-500">

### AI 时代的服务器范式转变

> "从一个以 CPU 为核心的服务器，转向了以加速器（不管是 GPU 还是 ASIC）为核心的——
> 这么一个范式的一个转变。所以就导致了整个服务器的处理器市场里面，CPU 的这个份额在不断的在萎缩。"

</div>

---
layout: default
---

# Pat 回归：市场曾经叫好

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 2021 Pat Gelsinger 出任 CEO

- 1979 年在英特尔起步
- 曾在 Noyce、Moore、Grove 三大掌门下工作
- **80486 架构师**
- 主导过 **14 种处理器**开发项目
- 「每次发布会前还会先做几个俯卧撑」
- 「确实能让人感受到他对英特尔的热爱」

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">

> "我们错过了移动浪潮。我们进行过大约五次不同的 AI 收购。
>
> 所以在我看来，这就是英特尔错过的两个巨大趋势。
>
> 而我们从根本上更倾向于打造一家伟大的代工厂。"
>
> <div class="not-italic text-xs opacity-60 mt-2">
> — Pat Gelsinger 上任后的公开自述
> </div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

回归消息一放出：盘前股价飙升 **14%**，创下半年来最高位。
**他对问题认识非常清晰，而且对外毫不避讳**——这是市场叫好的根本原因。

</div>

---
layout: two-cols
---

# IDM 2.0：Pat 的三方向豪赌

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**① 大建先进制程的晶圆厂**

四年内追 5 个节点，总投资 **1100 亿美元**

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**② 开放代工业务（IFS）+ 授权 x86**

抢台积电的蛋糕

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**③ 把自家部分芯片交给台积电代工**

承认对方制程更好

</div>

</div>


::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./idm2-strategy.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 为什么 IDM 2.0 推不动

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 美国补贴杯水车薪

> "他想拿美国政府的贴补，这个东西是杯水车薪。台积电的生意一年 700 亿美金，政府能给你几毛钱？"

且 Intel 因为正在大裁员，补贴发放被一拖再拖。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 客户不敢把图纸给你

- 你自己也做芯片设计（利益冲突）
- 「你怎么能去跟台积电争代工的老大？你连第 10 名都排不上。」
- 「我们这种业内人一听就是……怎么这么荒唐的话会从 Intel 的 CEO 嘴里讲出来？」

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 自家芯片性能没起来

- Ultra 200S 用 TSMC **N3B**
- 对比 14 代「提升幅度有限」
- **游戏性能甚至倒退**
- 只有功耗降低了一些

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic">

> "战略本身我觉得不是一个错的战略。但是可能如果说这个战略放到五年前去实施的话，成功的可能性会更大。"
>
> <div class="not-italic text-xs opacity-60 mt-2">— 嘉宾对 IDM 2.0 的总评</div>

</div>

---
layout: default
---

# 财务的崩塌

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### 现金
<div class="text-2xl font-bold text-red-600 my-2">$112.9 亿</div>
2024-06-29

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 流动负债
<div class="text-2xl font-bold text-orange-600 my-2">~$320 亿</div>
现金根本盖不住

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### 净利润率
<div class="text-2xl font-bold text-yellow-700 my-2">3.14%</div>
2023 年——三十年新低

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### Q3 亏损
<div class="text-2xl font-bold text-purple-700 my-2">$166 亿</div>
连续 3 季度亏损

</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 同时在 2024 年做的事

- **8-01** 全球裁员 15% + 暂停派息
- 2025 年削减 **100 亿美元**成本
- **9-01** 出售可编程芯片部门 Altera
- **9-16** 计划把晶圆厂独立为子公司，引入外部投资者

</div>

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-400 text-sm">

### 资本开支的"无底洞"

俄亥俄 + 德国马格德堡 + 爱尔兰莱克斯利普 + 亚利桑那扩产，
**总投资超 1100 亿美元**。

</div>

</div>

---
layout: default
---

# 被炒掉的真相

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 嘉宾解读

「他比较突然地离开 CEO 的职位，最大的一个可能性就是——
他的 IDM 2.0 战略和董事会的优先级之间，出现了一定的冲突。

因为 IDM 2.0 需要大量的资本开支……
这个会对 Intel 的短期的现金流和利润率带来比较大的压力，
然后从而可能会导致股价上面的压力。」

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 但 Pat 真的"不行"吗？

「过去三年半所有出来的产品，没有一个产品是 Pat Gelsinger 自己做的。
因为硬件是 5 年的周期，过去三年东西都是前一个 CEO 做的。

所以说当你去说你『还不够行、不够好』——你是为什么呢？
是因为看到明年本来要 2025 年 18A 的东西做不出来？

我是觉得它是**有一部分是没有耐心**。」

</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">

> "我个人很佩服 Pat。我认识他很多年了。
> 拯救一家半导体公司是很难的事情。我们这个行业有一个特点：
> **你今天做的决策，没有个五年是看不见成果的。**"
>
> <div class="not-italic text-xs opacity-60 mt-2">— AMD CEO Lisa Su 对 Pat 离任的评论</div>

</div>

---
layout: two-cols
---

# 董事会失能：11 人，只有 1 位懂行

<div class="space-y-2 mt-3 text-xs">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">

**金融 / 投资 · 4 人**：Frank Yeary（主席，PayPal）、James Goetz（风投）、Alyssa Henry（Square CEO 仅 9 月）、Barbara Novick（BlackRock）

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

**学术 · 2 人**：Andrea Goldsmith、Tsu-Jae King Liu（教授背景，无行业从业）

</div>

<div class="p-2 rounded bg-gray-100 border-l-4 border-gray-500">

**医疗 / 计算机 · 4 人**：Omar Ishrak、Risa Lavizzo-Mourey、Dion Weisler、Gregory Smith（波音 CFO）

</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">

**真懂半导体 · 1 人**：Stacy Smith（Intel 30 年 · **2024-03 才加入**——接替辞职的陈立武）

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./board-makeup.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 兼职公司："败军之将"的集合

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500 italic">

> "我觉得他这个董事会怎么会这么荒唐啊？我实在是想不通。
>
> 你看他的董事会成员里面——波音公司。
> **波音和 Intel 现在是美国最惨的两家公司。**
>
> 还有 PayPal 最近几年也做得不好，还有 Autodesk。
>
> 这几家公司基本上——第一个跟我们这个行业完全没有关系，
> 第二个这几家公司都经营的非常惨。"

<div class="not-italic text-xs opacity-60 mt-3">
— 资深芯片业人士对 Intel 董事会的评论
</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 关键统计

- 懂半导体的：**3 位**
- 有行业经验的：**2 位**
- 经验丰富的：**仅 Stacy Smith 1 位**
- 而 Stacy 2024-03 才加入

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 也就是说

**在 Pat 任期内的绝大部分时间里，整个董事会的配置里，从始至终只有 1 名行业资深人员。**

</div>

</div>

</div>

---
layout: default
---

# 为什么半导体不能让"外行"开会决定

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 italic">

> "因为半导体不像 AI。AI 它是个比较新的产业。但是半导体不是这样子。
>
> 那为什么我们这边叫硅谷呢？**就是因为 70 年前我们就开始做硅**。
> 我们的前辈交了无数的学费，这里面有很多的经验是你没有经过不会了解的。
>
> 他们在董事会里面根本他也不会去发言。因为他不知道要讲什么。
>
> **就像你把我送到一个我不懂的行业里面去，我更不知道讲什么。**"

</div>

<div class="mt-6 p-5 rounded bg-red-50 border-l-4 border-red-500">

> "对董事会看法，我有两个字——就是**失能**。
>
> 假如说用四个字的话就是**失能、失职**。"

</div>

<div class="mt-4 text-xs opacity-60 text-center">
半导体决策的反馈周期是 5 年。把方向盘交给不懂这件事的人，结果会延迟出现，但一定出现。
</div>

---
layout: default
---

# 为什么没人辞职？33-50 万年薪当"烂好人"

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">

> "为什么这些董事会他在这董事会还在待着，他也不去辞职？只有一个——
>
> 这个**陈立武（Li-Bu Tan）辞职**——道理很简单。
>
> 它这个董事会**每一年（薪资）是 33 万到 50 万美金**。
>
> 你说像里面有一个 Berkeley 的教授，还有这个宾州大学什么健康的教授——
> 这教授我跟你讲，他的工资不到 20 万。
>
> 你一年给他 33 万，他每年开四次会，他什么事也不要讲——
> 他就说**烂好人**每个事情都点头。那也没什么不好嘛。"

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 唯一辞职的人

**陈立武（Lip-Bu Tan）**——
有知情人士说他辞职的原因是「团队臃肿、企业文化保守、AI 战略落后」，
对 Pat 没有"大刀阔斧"很失望。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 然后呢？

Pat 离任后，英特尔正"接触"前董事陈立武再回来。
说明问题清楚——可惜唯一愿意走的人，也被需要请回来。

</div>

</div>

</div>

---
layout: two-cols
---

# 自动驾驶状态：被动投资的闭环

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**60% 以上**为投资机构持股。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

前三大股东（数量上甩开第四名一个量级）：
**BlackRock / Vanguard / State Street**。
都属于**被动投资者**——长期持有，不主动改变。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

被动投资者投票时遵循 **ISS 与 Glass Lewis** 两家投票代理机构的建议——
而**两家都倾向于推荐董事会方案**。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

资深分析师 Doug O'Laughlin 的描述：
英特尔董事会长期处于**"自动驾驶状态"**——也就是**"脱缰之马"**。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

为什么没有激进投资者进场？
「英特尔已经是船大难掉头，进场风险太高。
**聪明的投资者看到英特尔都绕道走了**，留下的只有保守派。」

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./investor-loop.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 傲慢的企业文化

<div class="text-sm opacity-70 mt-4">

华尔街日报曾把波音与英特尔并列评论：「这两家公司的企业文化逐渐发展为**优先考虑财务业绩**，而非工程卓越性」。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### "Ugly"事件

「就算自己的 GPU 产品缺乏竞争力，也不影响——
他们**嘲笑英伟达和 AMD 的 GPU 架构为 'Ugly'（丑陋）**」。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### Mike Bell 嘲讽 ARM

时任移动业务主管 Mike Bell 接受采访时说：
英特尔有 30 年经验优势，CPU 核心比 ARM 更智能。
甚至建议用户「先用 ARM 过渡，等 Intel 低功耗处理器出来再迁回 x86」。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 14nm++ 被否

英特尔前工程师 2018 年发推：
**自己早在 2 年前就提出应该用 14nm++ 的改进工艺**，
但管理层并没有采纳——「对 10nm 的推进过于自信」。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### Larrabee 的"白痴"邮件

英特尔内部曾爆出邮件，指责 Larrabee 团队：
**"是一群白痴，公司企业文化全被他们破坏了"**。
负责人 Pat Gelsinger 那一年被气走。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

> "当采访记者问 Mike Bell：你是否担心自己领先太多以至于变得自满？
>
> Mike Bell 的回答是：'我们不会满足于已有的成就。最近有些公司未能保持创新，结果陷入了困境。'
>
> **如今的英特尔开始成为了曾经的反面教材。**"

</div>

---
layout: default
---

# 激励机制：保守的代价

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 italic">

> "我前两天还跟一个在英特尔做了将近 20 年的朋友聊了一下。他最近去了亚马逊。
>
> 我提的一个问题就是——
>
> **在 Intel 你只要守着自己本来的东西，你就能够保着自己的位置**。
>
> 但在亚马逊，至少在他的部门 AWS，他觉得那些 VP 只是做过去两年、过去一年、过去五年同样的事情，他们的位置保不住的。
>
> 所以说他必须得去思考一些 'I怎么去 Take additional risk'——
> 就是说我得冒险一点，否则的话我怎么个去保住自己的位置？"

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 这是个激励问题

多数时候一个公司大家都是在为自己的位置着想。
**激励机制的不完善，造就了英特尔高层不愿冒险的特性。**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 副作用

不仅压住了内生创新——
**也阻碍了那些被英特尔收购公司的发展**：
XScale、Nervana、Habana、Altera 皆是如此。

</div>

</div>

---
layout: default
---

# 杀死创新的并购：Pat 自己的反省

<div class="mt-8 p-6 rounded bg-purple-50 border-l-4 border-purple-500 italic">

> "我在英特尔的惨痛经历当中学到的一点是——
>
> **如何将一家富有创造力的初创公司纳入麾下，并对其进行培育，
> 而不是在大型主流公司内部将其摧毁。**
>
> 而这正是英特尔未能做到的。"
>
> <div class="not-italic text-xs opacity-60 mt-3">
> — Pat Gelsinger 回顾英特尔历史
> </div>

</div>

<div class="mt-6 grid grid-cols-4 gap-3 text-center text-sm">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### XScale
卖给 Marvell，整个手机业务线断了

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### Nervana
NNP-T / NNP-I 发布**半年就被雪藏**

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### Habana
**Gaudi 销售目标 5 亿，市场份额 &lt; 1%**

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### Altera
2024-09 宣布出售

</div>

</div>

<div class="mt-6 text-xs opacity-60 text-center">
"在大型主流公司内部摧毁初创公司"——这是英特尔过去 20 年的并购模板。
</div>

---
layout: default
---

# 何去何从：谁来接 CEO？

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 已知的"接触"名单

- 前董事 **陈立武（Lip-Bu Tan）**——又联系了回来
- Marvell CEO **Matt Murphy**
- 临时 CEO David Zinsner 表态：新 CEO 需有**晶圆代工经验**
- 英特尔也在接触台积电的高管
- 新增两位董事：
  - ASML 前 CEO **Eric Meurice**
  - Microchip 临时 CEO **Steve Sanghi**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm italic">

> "现在我都不知道最优秀的人愿不愿意去接受 CEO 的位置。
>
> 至于他们应该怎么办，我不知道。他们是要再找一个新的策略了吗？
> 还是要找新的 CEO？好像是两者他们都要找。
>
> 那这个是很难的。"

</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 一个被否的"硅仙人"提名

陈立武曾提出过让有"硅仙人"称号的 **Jim Keller** 来当 CEO——
**但被董事会拒绝了。**

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">

> "**就跟 Lisa Su 还没有到 AMD 之前你问我这个问题一样。**
> 最后还是回到这个 CEO——你 CEO 找对人了，我们两年就看结果。"

</div>

---
layout: default
---

# 股价、信任与现实

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Pat 离任公告当天

**英特尔股价上涨 6%。**

«市场以为可以"省钱了"——但随后便是连续多日的下跌。»

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500 text-sm italic">

> "大家再仔细想想——**Then what, right？（然后呢）**
>
> 接下去就因为少掉了他（Pat），Intel 何去何从这件事就有一个答案了吗？
>
> 要知道他来的时候要他解决的问题，也看不出来有另外一个人能够解决的更好。
>
> 所以说我觉得现实马上就让大家醒了。"

</div>

</div>

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

> "我觉得他们的董事会应该要把一件事情搞清楚——
>
> **他们到底是想让 Intel 重振雄风，还是怎么从一个财务的角度怎么做、怎么来？**
>
> 我觉得他们要想清楚。"

</div>

<div class="mt-6 text-sm opacity-60 text-center">

技术路线？还是增长路线？或许这个问题英特尔自己都没有想清楚。

</div>

---
layout: default
---

# 大公司倒塌的通病

<div class="mt-6 p-6 rounded bg-purple-50 border-l-4 border-purple-500 italic text-lg">

> 没有公司会永远伟大。大公司的通病也许都一样——
>
> **当你成为市场第一的垄断者，永远追求利润但又不重视创新；**
>
> **当你的掌舵者，不再是市场上最有远见的技术领袖；**
>
> **当你的控制者是一群不懂技术、只会维护短期利益的股东时——**
>
> 大公司的结局往往都逃不过衰败的命运。

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-sm text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 技术领先 ≠ 永远领先
14nm 卡 6 年的代价

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 短期利润 ≠ 长期价值
拒绝 iPhone、拒绝 OpenAI

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### 财务董事 ≠ 战略董事
11 中 1 的尴尬

</div>

</div>

<div class="mt-6 text-sm opacity-60 text-center">

英特尔会就此衰落，还是绝处逢生，现在都是未知数。但有一点确定的是——硅谷从来都不乏奇迹。

</div>

---
layout: default
---

# 核心金句

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs">

"我应该听从自己的直觉。我的直觉告诉我要说'是'。"
<div class="text-xs opacity-60 mt-1 not-italic">— Paul Otellini 回忆拒绝 iPhone</div>

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-xs">

"在 13 年前我被迫离开公司时，他们终止了本可以改变 AI 发展格局的项目。"
<div class="text-xs opacity-60 mt-1 not-italic">— Pat Gelsinger 谈 Larrabee</div>

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-xs">

"对董事会看法我有两个字——就是失能。假如说用四个字的话就是失能、失职。"
<div class="text-xs opacity-60 mt-1 not-italic">— 节目访谈嘉宾</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-xs">

"70 年前我们就开始做硅。前辈交了无数的学费——这里面有很多的经验是你没有经过不会了解的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 嘉宾论半导体不能让外行做决策</div>

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-xs">

"他每年开四次会，他什么事也不要讲——他就说烂好人每个事情都点头。"
<div class="text-xs opacity-60 mt-1 not-italic">— 33-50 万美金年薪让独立董事变橡皮图章</div>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-xs">

"在 Intel 你只要守着自己本来的东西，你就能够保着自己的位置。"
<div class="text-xs opacity-60 mt-1 not-italic">— Intel 老员工的离职反思</div>

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs col-span-2">

"如何将一家富有创造力的初创公司纳入麾下、并对其进行培育——而不是在大型主流公司内部将其摧毁。而这正是英特尔未能做到的。"
<div class="text-xs opacity-60 mt-1 not-italic">— Pat Gelsinger 回顾英特尔历史</div>

</div>

</div>

---
layout: end
---

# 我们这个行业有一个特点

<div class="mt-12 text-2xl italic opacity-80">

"你今天做的决策——没有个五年是看不见成果的。"

</div>

<div class="mt-6 text-sm opacity-60">
— AMD CEO Lisa Su 对 Pat Gelsinger 离任的评论
</div>

<div class="mt-12 text-xs opacity-50">
硅谷101 · 英特尔深度复盘
</div>
