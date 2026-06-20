---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '机器人"大脑"60年进化史：基础模型的五代进化与三大闭源流派'
info: |
  硅谷101 · 机器人特辑（闭源篇）：从1961年 Unimate 到2025年 VLA，60年五代基础模型演化；Tesla / Figure / Dyna / NVIDIA 三大流派的路线之争。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 机器人"大脑"60年进化史

## 基础模型的五代进化与三大闭源流派

<div class="mt-10 text-sm opacity-70">
硅谷101 · 机器人特辑 · 陈茜
</div>

<div class="mt-3 text-xs opacity-50">
"如果说 GPT 是会说话的大脑，那么机器人基础模型就是会动手的大脑。"
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 60 年 5 代进化的全景

从 1961 年 Unimate 在通用汽车工厂上班，到 2025 年 VLA 横空出世——这一集把"会动手的大脑"是怎么长出来的，一次性串清。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么 2025 突然成"元年"

不是单点突破，而是 大模型、算力、硬件供应链 三件事同年成熟，撞出一个特殊的时间窗口。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 闭源三大流派之争

Tesla / Figure 的全栈整合派、Dyna / Amazon 的垂直突破派、NVIDIA / Google 的生态平台派——本质是三种"通用性"假设的赌局。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Dyna 创始人现场拆解

走访硅谷 Dyna Robotics——成立一年估值 6 亿美元的明星公司，三位华人创始人讲清"小而精 vs 大而全"的模型哲学。

</div>

</div>

---

# 2025：机器人 Demo 的"魔幻一年"

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Figure 03

10 月发布第三代机器人，能做各种家务，但 demo 任务成功率"业界有很多质疑"，而且脸部设计<strong>恐怖谷效应</strong>严重。

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 1X · Neo

10 月底亮相，脸部设计可爱得多，但依赖远程操控被批评是<strong>"假智能"</strong>，还有隐私问题。

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Tesla Optimus

12 月发布顺滑跑步 Demo，但<strong>量产计划遇到极大挑战</strong>——公司不得不暂停生产、重新设计硬件，最近活动现场还小小翻车。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

陈茜的问题：**为什么 2025 年突然变成机器人基础模型的"元年"？** 这场闭源 vs 开源的军备竞赛背后到底在赌什么？

</div>

---

# 什么是机器人基础模型

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### GPT

**"会说话的大脑"**

输入：文字 / 图像  
输出：文字  
训练数据：互联网海量文本  
评价：成熟，已经"够用"

</div>

<div class="p-5 rounded border-2 border-orange-300 bg-orange-50">

### 机器人基础模型

**"会动手的大脑"**

输入：摄像头 + 任务指令  
输出：关节角度 / 力矩  
训练数据：机器人本体传感器  
评价：刚刚迈入"元年"

</div>

</div>

<div class="mt-6 text-sm opacity-70 italic">

"如果要用一句话解释机器人基础模型，最简单的类比就是：如果说 GPT 是'会说话的大脑'，那么机器人基础模型就是'会动手的大脑'。"

</div>

<div class="mt-1 text-xs opacity-50">
但这个会动手的大脑，人类研究了整整 60 年才做出来。
</div>

---
layout: two-cols
---

# 60 年 5 代进化

每一代解决前一代的痛，但留下新的坑。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>1961 编程式</strong> · 零容错零灵活
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>1990s SLAM</strong> · 导航成功，操作翻车
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>2015 模仿学习</strong> · 数据效率低，泛化差
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>2016 强化学习</strong> · 太慢、没常识
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>2025 VLA</strong> · 集 60 年之大成
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./five-gen-timeline.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 第一代 · 1961 编程式机器人

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Unimate · 通用汽车工厂

世界上第一台工业机器人，从生产线上抓滚烫的金属零件放到另一条生产线上。

工程师用代码告诉它：
- 步骤 1：手臂向左移动 30 厘米
- 步骤 2：手爪闭合
- 步骤 3：手臂向上移动 50 厘米
- 步骤 4：手臂向右旋转 90 度
- 步骤 5：手爪松开

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 致命缺陷

**零容错 · 零灵活性**

- 零件位置偏 1 厘米 → 抓不到
- 换不同尺寸零件 → 重写代码
- 零件掉地上 → 彻底懵

但**直到今天**，很多汽车工厂的焊接机器人，**还在用这套"编程式"逻辑**。

</div>

</div>

---

# 第二代 · 1990s · SLAM + 运动规划

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 思路：让机器人"感知"

**先看 → 再建图 → 再规划 → 再执行**

- 传感器看周围环境
- 建一个 3D 地图
- 在地图上规划路径
- 最后执行动作

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 导航任务上：大成功

- **Roomba** 扫地机器人风靡一时
- 早期无人车 / 无人机 / 物流机器人
- 基本上都是这套套路

</div>

</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 但在"操作"任务上彻底卡住

让机器人叠一条毛巾——四步看似合理：识别四个角 → 计算 3D 坐标 → 规划轨迹 → 抓取折叠。**但每一步都是坑**：毛巾皱成一团根本认不出四个角，一抓就变形，3D 坐标立即失效。

</div>

---

# 反例：Berkeley 的 24 分钟一条毛巾

<div class="mt-4 grid grid-cols-3 gap-3 text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200 text-center">

### 团队
**加州伯克利**  
2010 年

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200 text-center">

### 方法
**感知 → 规划 → 执行**  
SLAM 时代标准范式

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-center">

### 结果
<div class="text-4xl font-bold text-red-600 my-2">24 min</div>
平均每条毛巾耗时

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**"叠毛巾"是一个关键的探针。** 它在 SLAM 时代花了 24 分钟，到了模仿学习时代成本仍然过高，到了强化学习时代需要试错几百万次——直到 VLA，才被认真攻破。本期后半段会看到 Dyna 是怎么把同一件事做到 99.4% 成功率的。

</div>

---

# 第三代 · 2015 模仿学习

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Behavior Cloning 的思路

不再手写规则，直接让机器人**学**人类怎么做：

1. 人类演示多次怎么叠毛巾
2. 记录每帧的视觉输入 + 动作输出
3. 训练神经网络学输入到输出的映射
4. 机器人看到毛巾直接输出动作

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Google Brain · 2015

用这个方法让机器人学会了抓各种物体，**收集了数十万次抓取数据**训练神经网络。

第一次，机器人**不需要手工编写规则**，可以通过数据学习了。

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>致命缺陷 ①</strong> 数据效率太低——光"抓取"就要数十万次，"叠毛巾"可能 100 万次都不够。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>致命缺陷 ②</strong> 泛化差——A 型号机器人的数据训出的模型，B 型号上**基本上就不能用**。
</div>

</div>

---

# 第四代 · 2016 强化学习

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### AlphaGo 时刻

2016 年 AlphaGo 战胜李世石，证明了强化学习的威力。**不需要人类演示**，做对给奖励、做错给惩罚，让机器人自己摸索。

波士顿动力把强化学习引入移动控制，让机器人能在复杂地形上**行走、跳跃、后空翻**。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 但操作任务上，三连坑

- **太慢**——AlphaGo 在仿真里和自己下了几千万局
- **仿真不准**——操作环境复杂度太高，仿真和真机差距大
- **真机试错太贵太危险**——可能抓空、扔毛巾、撕破、手臂被卡

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 更根本的问题：**没有常识**

人类知道毛巾是软的、可以折叠、有摩擦力——这些常识强化学习的机器人**需要通过无数次试错才能"发现"**。效率太低。

</div>

---

# 第五代 · 2022 VLA 横空出世

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 转折点：ChatGPT

2022 年大语言模型横空出世，人们发现它**蕴含了人类世界大量的常识**：

- 知道"毛巾是什么"
- 知道"叠"是什么意思
- 知道先做什么、后做什么
- 有推理能力、规划能力、泛化能力

**第一反应：能不能把它和机器人结合？**

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### VLA 模型诞生

把三个东西统一进一个端到端神经网络：

- **V**ision（视觉）：看到当前场景
- **L**anguage（语言）：理解任务和常识
- **A**ction（动作）：输出具体控制指令

让你说一句 "帮我把桌上的苹果放到篮子里"，模型一次性产生动作。

</div>

</div>

---
layout: two-cols
---

# VLA 架构 · Dyna 的解释

来自 Dyna Robotics 创始人现场访谈：

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">

"我们其实在 architecture 层面就是用的 VLA。VLA 简单来说就是我们拿了大模型领域 VLM 作为所谓的 backbone（底座），但是我们会在最终输出结果的时候，把这个结果转化成在机器人领域可用的 Action。"

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Action 的直观理解**：可以转化成"把这个手臂移动到某一个坐标点"这类命令。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vla-stack.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么 VLA 一定要带"L"？

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 圈内最大的诟病

"过去传统机器人算法很多都是**纯基于视觉**——人在执行很多操作时，大部分也是基于视觉的。为什么还要加语言？"

**作者的反问**：你拧瓶盖时，脑子里**不会出现"拧瓶盖"三个字**才去拧——因为它已经足够小。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Dyna 的回答

L 的作用在**长线任务的推理**：

- "你要喝水" → 需要找杯子或瓶子
- 这种逻辑大语言模型已经直接给你

只有视觉 → 只能做**短线任务**  
加上语言 → 才能做**需要推理的长线任务**

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

"这是我们为什么去非常专注地引入语言这部分的主要原因。"

</div>

---
layout: two-cols
---

# 为什么 2025 是元年？

不是一件事变好了，**是三件事同时变好了**。

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>① 大语言模型"够用了"</strong><br>
OpenAI / Anthropic / Google 从 4 → 4.5 已经是增量式增长，理解指令 + 规划 + 常识对机器人足够好了。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>② 算力价格腰斩再腰斩</strong><br>
2023 年 H100 是天价还得排队，初创公司现在租得起几千张卡训模型。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>③ 硬件供应链成熟</strong><br>
2024 年大量资本涌入电机、减速器、传感器——中国供应商扩产，做机器人的门槛降下来了。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-factors.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 数据：永远绕不开的核心挑战

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### 大语言模型

互联网海量文本随便爬。

</div>

<div class="p-5 rounded border-2 border-red-300 bg-red-50">

### 机器人基础模型

必须是**真机数据**——机器人本体传感器数据。互联网上**根本没有**。

</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### YouTube 的悖论

YouTube 上有**无数人类叠衣服的视频**——但是**没有一个视频告诉你叠衣服时，手指关节的角度是多少，施加的力量是多少**。

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**这就是为什么这场"军备竞赛"的核心**——除了算法还有数据：谁能用最低成本采集到最高质量的数据，谁就主导市场。后面三大流派的分歧，本质都是数据策略的分歧。

</div>

---
layout: two-cols
---

# 闭源世界的三大流派

表面上争技术路线、市场份额、估值——

**本质上，他们争的是同一个问题**：什么才是实现"通用机器人"的正确路径？

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>① 全栈整合派</strong>　Tesla / Figure
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>② 垂直突破派</strong>　Dyna / Skild / Amazon
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>③ 生态平台派</strong>　NVIDIA / Google / OpenAI / Meta
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-schools.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 全栈整合派 · Tesla Optimus

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">

马斯克：**"特斯拉八成的价值，将会来自于 Optimus 机器人。"**

</div>

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 自信来自哪里？

特斯拉 FSD（完全自动驾驶）**十年的积累**：
- 数百万辆车收集的真实世界数据
- 端到端的神经网络架构
- 规模庞大的标注团队

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 前工程主管 Milan Kovac

**"我们只是从轮子上的机器人，变成长着腿的机器人。"**

输出从"方向盘角度"变成"关节角度"——架构逻辑不变。

</div>

</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**核心信念**：基础模型不能和硬件分离，必须垂直整合、深度耦合，才能发挥最大效果。

</div>

---

# Tesla 的现实困境

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 年初口号
<div class="text-3xl font-bold text-blue-600 my-2">5000</div>
台 Optimus，其中 1000 台部署在自家工厂

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 年中实际
<div class="text-3xl font-bold text-yellow-600 my-2">~1000</div>
台之后，<strong>生产计划暂停</strong>，面临重新设计

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 最近翻车
<div class="text-2xl font-bold text-red-600 my-2">分水翻跤</div>
分发瓶装水时摔倒，动作像在"摘头戴设备"

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

那段摔跤视频火出圈，**不少人质疑 Optimus 是不是有操作员在远程操控**。Optimus 的发展，看起来并不像马斯克号称的那么顺利。

</div>

---
layout: two-cols
---

# Embodiment Gap · 全栈派绕不开的坎

Tesla 想用海量人类视频训练，但有个物理鸿沟绕不过去：

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>优势</strong> 人类视频最容易采，可扩展性最高（不需要任何外设备）。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>问题 ①</strong> 人手和机械手物理差异很大——这也是大家拼命做"灵巧手"的原因。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>问题 ②</strong> 再接近也不完全一样——人和机器人的数据之间有一个鸿沟，即 <strong>embodiment gap</strong>。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
"这个 embodiment gap 在当前学术界也好、工业界也好，大家都是公认的一个比较难解决的问题。" —— Dyna
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./embodiment-gap.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Figure AI · 和 OpenAI 戏剧性分手

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2024 年初：热恋
**和 OpenAI 深度合作**，把 GPT-4 直接接入人形机器人。机器人能听懂指令、和人对话、自主决策。你说"可以给我点吃的吗" → 它主动递苹果。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 2025 年 2 月：分手
**Figure AI 突然主动宣布和 OpenAI 分手**，要独立推出自己的基础模型，不再依赖 OpenAI 的技术。

</div>

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 两周之后：迅速推出 Helix

定位为"通用人形机器人 VLA 模型"，强调**完全自研**。能放弃 OpenAI 这条"粗大腿"，Figure AI 确实有两把刷子。

</div>

---

# Helix 的 System 1 + System 2 双系统

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### System 2 · 大脑皮层
**想清楚要干什么**

- 视觉-语言模型很聪明，**但是太慢**
- 决定"现在该拿杯子了"
- 处理复杂指令、长线规划

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### System 1 · 小脑
**手脚怎么配合**

- 传统控制策略**很快但不够通用**
- 自动调动 20 多块肌肉抓杯子
- 实时、精确、不经过意识

</div>

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Helix 让两者各司其职、端到端训练**——单一神经网络控制**整个上半身的 35 个自由度**，包括手腕、躯干、头部、每根手指，还能同时控制两个机器人协作。

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-center text-xs">

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<strong>2025 年 9 月 C 轮</strong><br><span class="text-2xl font-bold text-yellow-700">$10 亿</span>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<strong>估值飙升</strong><br>26 亿 → <span class="text-2xl font-bold text-green-700">390 亿</span>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<strong>不到一年</strong><br><span class="text-2xl font-bold text-red-700">15 倍</span> 涨幅
</div>

</div>

---

# 垂直突破派 · Dyna Robotics

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 公司速写

- 三位华人创始人成立**仅一年**
- 估值已超 **6 亿美元**
- 两轮融资：3 月种子 $23.5M、9 月 A 轮 $120M
- 投资方：英伟达 / 亚马逊 / 三星 / LG

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### DYNA-1（2025 年 4 月）

号称"**首个可在真实环境中持续高性能运行的机器人基础模型**"。

</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-center text-sm">

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 24 小时
<div class="text-3xl font-bold text-orange-600 my-2">700+</div>
张餐巾自主折叠

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 成功率
<div class="text-3xl font-bold text-green-600 my-2">99.4%</div>
完全无需人工干预

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 吞吐
<div class="text-3xl font-bold text-blue-600 my-2">60%</div>
人类速度，但 24/7 不休

</div>

</div>

<div class="mt-4 text-sm opacity-70 italic">

"我们不是一个做叠毛巾的公司。我们的 Foundation Model 里包含了叠毛巾、叠餐巾、叠衣服、切菜、切水果、准备食物、做早餐、清扫、物流分拣⋯⋯各种各样的数据。"

</div>

---

# Dyna 的"小而精"哲学

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 全栈整合派的理念

通用性 = 足够大的模型 × 足够多的数据 × 足够深的软硬整合 → 涌现自然出现

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Dyna 的反向押注

**"与其训练一个什么都会但是什么都做不好的泛化模型，不如先让模型在某个任务上去深度专精。"**

</div>

</div>

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### 钢琴 → 吉他的类比

把钢琴练到音乐学院水平的人，上手吉他**会比完全没学过乐器的人快得多**——因为掌握了"如何学习"的元技能。

**深度专精的过程中，模型学到的不只是"怎么叠毛巾"**，还有"怎么快速学习新任务"的元能力。

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs italic">

"我们在实践过程中找到一个有点 counter intuitive（反直觉），但是确实它发生了一件事⋯⋯过去可能需要采几个月的数据去迁移某一个任务，但现在简单任务**一两天的数据**就可以迁移过去。" —— Dyna

</div>

---

# 机器人 Scaling Law 和大语言模型不一样

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### 大语言模型的 Scaling Law

**模型越大、数据越多 → 性能越好**

而且**对低质数据很宽容**——文本里夹杂广告也能训出好模型，因为它"看多了会自动过滤"。就像人看网页久了眼睛自动忽略广告。

</div>

<div class="p-5 rounded border-2 border-red-300 bg-red-50">

### 机器人基础模型 ≠ 同一个规律

瓶颈不只在模型容量和数据量，**更在数据质量和物理一致性**。

如果训练数据里**物理接触不准**，模型学到的就是**错误的物理直觉**——**参数越大，错误就越被放大**。

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Dyna 的判断**：机器人数据本质上是"机器人本体 + 视频"，**不确定性太高**。如果数据繁杂，模型不知道把注意力放哪。**只有保证每条数据都是高质量的真实物理交互**，下游 fine-tune 才能跑得动。

</div>

---

# 同一派的玩家：Skild AI + Amazon

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Skild AI · 通用大脑

**不做硬件，只做大脑。**

用大规模仿真数据训练通用基础模型，再快速适配到机械臂 / 四足 / 人形。

传闻**英伟达和软银将领头投资 10 亿美元**，估值有望达 140 亿美元。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Amazon · 数据优势者

2025 年 7 月部署**第 100 万台机器人**——目前员工 156 万，**机器人数量即将超过人类员工**。

- Hercules 搬运 1250 磅
- Pegasus 包裹分拣
- 旧金山办公室建"humanoid park"测试场

</div>

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Amazon 的策略和 Dyna 如出一辙**：与其一开始就做大而全的通用模型，不如**先在垂直场景积累世界上最好的数据**，再泛化。100 万台机器人 = 世界最大的数据来源之一。

</div>

---

# 生态平台派 · NVIDIA + Google

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### NVIDIA · 做机器人界的 Android

2025 年 3 月 GTC，黄仁勋发布并**开源** GR00T N1。

**但是**——要用 GR00T N1，就得用全套 NVIDIA 生态。**护城河不是模型本身，而是整个生态。**

**"一旦你用了 NVIDIA 的全套工具链，切换成本高到让人望而却步。"**

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Google · 研究驱动 + 开源优先

RT 系列强调大规模演示数据、跨任务跨平台通用模型，通过**论文 + 开放数据集**在学术圈建影响力。

Gemini 3 发布后步伐加快，**挖来前波士顿动力 CTO Aaron Saunders**，推动 Gemini AI 成为通用机器人控制平台。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**它们到底是真开源还是伪开源？** 这个问题留给开源篇——是这场 GR00T N1 "伪开源争议" 的核心。

</div>

---

# OpenAI + Meta · 小步快跑只为占坑

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### OpenAI · 分分合合的情侣

- 2018 年：机械手操作任务突破
- 之后：团队规模与优先级收缩
- 2024：与 Figure 热恋
- 2025 年 2 月：戏剧性分手
- 2025 下半年：又开始招人形控制研究员

**撒钱占坑**：与贝佐斯共同参与 Physical Intelligence 的 4 亿美元融资。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Meta · 更低调的入局

2025 年初在 Reality Labs 旗下**组建新机器人部门**，由前 Cruise CEO Marc Whitten 牵头，目标是人形机器人平台。

**CTO Andrew Bosworth 公开提到**：团队正在构建一种 **"World Model"（世界模型）**，以支撑机器人完成比"行走和跑跳"更细致的操控动作。

</div>

</div>

---

# 三派赌的是三个不同的"通用性"假设

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ① 全栈整合派

通用性 = 模型大 × 数据多 × **软硬整合深**

只要三个条件满足，**涌现会自然出现**。

源自 GPT-4 的经验——**在物理世界是否成立，仍是未知数**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ② 垂直突破派

通用性 = 深度专精带来的**迁移能力**

机器人 Scaling Law 不同于语言——**"小而精"可能比"大而全"更有效**。

关键是找到正确的**元学习路径**。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### ③ 生态平台派

通用性 = **生态标准化程度**

技术路线谁赢不重要，**最终赢家不一定是技术最强的**。

重要的是**让所有人都用你的工具链**。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**2025 年还没有答案。** 但可以确定的是，这场关于基础模型的竞赛**才刚刚开始**。还有"半开源半闭源"的 Physical Intelligence 和 Genesis AI 留到开源篇。

</div>

---

# 2025 现状：展示精彩，落地未知

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 三个矛盾

- 马斯克的梦想很宏大，但 Optimus 还在艰难爬坡
- Figure AI 拿了 10 亿、估值 390 亿，**真正商业化部署也就几十台**
- NVIDIA 的 GR00T N1 发布了，**真正用起来的公司有多少不好说**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 离家用还有多远？

**Dyna 的判断**：明年（2026 年）希望商用场景大规模部署；家用择机看。

**入口任务很可能是"叠衣服"**——采访身边朋友，大家都觉得这个功能"非常需要"。当硬件成本降到普通家庭可承担——可能就是 **1～2 年**。

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">

陈茜的提问：**"几百美元可以帮你叠衣服、准备早餐和做清洁的机器人助手，你会买吗？"**

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"如果说 GPT 是会说话的大脑，那么机器人基础模型就是会动手的大脑。"
<div class="text-xs opacity-60 mt-1 not-italic">— 陈茜定义本期主题</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"特斯拉八成的价值，将会来自于 Optimus 机器人。"
<div class="text-xs opacity-60 mt-1 not-italic">— 马斯克</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"我们只是从轮子上的机器人，变成长着腿的机器人。"
<div class="text-xs opacity-60 mt-1 not-italic">— 特斯拉 Optimus 前工程主管 Milan Kovac</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"与其训练一个什么都会但是什么都做不好的泛化模型，不如先让模型在某个任务上去深度专精。"
<div class="text-xs opacity-60 mt-1 not-italic">— Dyna Robotics 的"小而精"哲学</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"NVIDIA 的护城河不是模型本身，而是整个生态。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 GR00T N1 的本质</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"2025 年的现状是：展示得很精彩，落地还未可知。"
<div class="text-xs opacity-60 mt-1 not-italic">— 陈茜对一整年的总结</div>
</div>

</div>

---
layout: end
---

# 60 年磨一剑，VLA 元年才刚刚开始

<div class="mt-6 text-base opacity-80 italic">

"这场关于基础模型的竞赛才刚刚开始。"

</div>

<div class="mt-3 text-sm opacity-60">

下集：开源阵营 —— NVIDIA 的"开放"到底有多开放？π0 为什么免费？开源 vs 闭源谁会赢？

</div>
