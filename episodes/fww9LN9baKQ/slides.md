---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '147. 和蚂蚁灵波沈宇军聊：机器人原生基础模型、大脑和本体的关系、预训练与数据scale up、老师汤晓鸥'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 机器人需要自己的基础模型吗？

<div class="text-xl opacity-80 mt-5">从机器人大脑出发，重做视觉、架构与数据</div>

<div class="mt-10 text-sm opacity-60">
张小珺 × 沈宇军<br/>
蚂蚁灵波首席科学家 · 2026 年 7 月
</div>

<div class="mt-8 text-xs opacity-50">
一场关于具身原生、跨本体预训练与机器人 GPT-1 时刻的深度对谈
</div>

---

# 为什么这期值得看

<div class="text-sm opacity-70 mb-4">它没有从某个炫目的机器人 demo 开始，而是追问：物理世界究竟需要怎样的模型底座？</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 具身原生
数字世界的视觉模型，为什么不能直接嫁接成机器人大脑？

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 通用大脑
通用不只跨任务、跨场景，还必须面对不同本体与自由度。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 六个模型
Vision、Depth、VLA、Video、World、VA 如何收束成一条技术路线？

</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-left">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 数据 Scale-up
6 万小时之后，为什么瓶颈仍然是数据，而不是模型参数？

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 泛化边界
位置随机性已有进展，但新任务零样本泛化仍没有解决。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 大脑与本体
当下谁落后？未来又会怎样交替牵引硬件、传感器与模型？

</div>

</div>

---

# 一条看似绕路的研究路径

<div class="grid grid-cols-5 gap-3 mt-6 text-left text-sm">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs text-blue-700 font-bold">2014 年底</div>

### 商汤实习
从清华进入计算机视觉；对检测、分割与单一榜单数字兴趣有限。
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-xs text-purple-700 font-bold">2017 起</div>

### 生成模型
从 GAN 与图像编辑出发，开始关心模型能生成什么。
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs text-green-700 font-bold">再往底层</div>

### 预训练 / 表征
从编辑走向生成底座，再继续追到表征学习。
</div>

<div class="p-3 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-xs text-orange-700 font-bold">2022</div>

### 蚂蚁研究院
从业务型内容产品，转向更探索性的研究组织。
</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-xs text-red-700 font-bold">2024 起</div>

### 具身智能
视觉在数字世界的用武之地有限，却是机器人进入物理世界的前提。
</div>

</div>

<div class="mt-6 p-4 rounded bg-gray-50 border border-gray-200 text-sm text-left">
这条路径的共同问题始终是：不要只优化一个下游指标，而要找到能继续向上扩展的底层表示与训练方式。
</div>

---

# 为什么从视觉走向机器人

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-gray-50 border-l-4 border-gray-400">

### 数字世界里的视觉
- 人脸识别、自动驾驶之外，大规模产业场景有限
- 图像内容可以被看见、传播和消费
- 但视觉往往不是最终动作的闭环

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 物理世界里的视觉
- 机器人必须感知距离、遮挡、噪声与运动
- 视觉直接决定能不能避障、抓取与执行
- 传感器输入会进入实时控制回路

</div>

</div>

<div class="mt-7 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50 text-left">
“在物理世界离开视觉，机器人肯定是没办法工作的”
<div class="not-italic text-xs opacity-60 mt-2">— 沈宇军，解释 2024 年转向具身智能的出发点</div>
</div>

---

# 研究与产业，不是二选一

<div class="text-sm opacity-70 mb-4">技术尚未收敛时，研究负责探索上限；落地负责决定先解决哪个问题。</div>

<div class="grid grid-cols-2 gap-5 mt-5 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 向上看：Research
- 探索智能上限
- 保留不确定路径的试验空间
- 允许先验证尚无行业答案的问题

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 向下看：真实场景
- 把模型放进实际任务
- 暴露传感器、自由度与部署问题
- 用失败点排序下一轮模型迭代

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-lg text-left">
“一手是想要去看智能的上限在哪里，另一手就是抓落地。”
<div class="not-italic text-xs opacity-60 mt-2">— 沈宇军，谈蚂蚁灵波的组织方式</div>
</div>

---
layout: two-cols
---

# 为什么只做大脑

<div class="text-sm opacity-70 mb-4">家庭机器人最终可能有很多品牌、构型和用途；统一的机会未必在本体，而可能在模型层。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>战略目标</strong><br/>让不同机器人运行同一套灵波大脑。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>训练前提</strong><br/>预训练阶段就接触不同本体的数据与特性。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>落地方式</strong><br/>进入具体场景后，再快速适应那个本体。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic text-left">
“我们的初心就是做一个通用脑子”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./brain-platform.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 跨本体，才是第三层通用

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 跨任务
抓取、整理、移动与连续动作之间，复用共同能力。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 跨场景
从实验室桌面走向架子、厨房和真实部署环境。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 跨本体
模型要理解不同相机、关节配置、夹爪与灵巧手。

</div>

</div>

<div class="grid grid-cols-2 gap-5 mt-6 text-left">

<div class="p-4 rounded bg-gray-50 border border-gray-200">
<div class="text-3xl font-bold text-gray-600">9 种构型</div>
<div class="text-sm mt-2">1.0：主要控制双臂与夹爪，集中在桌面抓取。</div>
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">
<div class="text-3xl font-bold text-orange-600">20 多种构型</div>
<div class="text-sm mt-2">2.0：加入头、腰、底盘，甚至灵巧手等自由度。</div>
</div>

</div>

<div class="mt-5 text-sm italic text-left border-l-4 border-purple-500 pl-4">
“我们觉得通用，应该就是多一层，就是你本体上也要通用。”
</div>

---

# 两次关键转向：从嫁接到原生

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs font-bold text-blue-700">2025 年 3 月起</div>

### 从视频学习
机器人会动、会与环境交互；视频不能只抽帧当图像，而要学习时序。

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs font-bold text-green-700">同一阶段</div>

### 从传感器出发
真实数据带有噪声，视觉与触觉不能建立在干净数据集的假设上。

</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-xs font-bold text-red-700">2026 年</div>

### 重做视觉底座
数字世界模型不按物理世界需求迭代，于是从视觉理解与生成层重新训练。

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
<strong>关键变化</strong>：从把数字模型嫁接成机器人 Agent，转向让模型从一开始就服从传感器噪声、实时动作与物理约束。
</div>

---
layout: two-cols
---

# 数字世界与物理世界，优化目标不同

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>数字内容</strong><br/>追求高清画质；用户可以等待整段视频生成；双向建模可利用完整上下文。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>机器人动作</strong><br/>必须实时反应；历史看不到未来；画质可以让位于速度与空间判断。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>设计后果</strong><br/>编码器、稀疏架构、注意力方向都需要为动作重新定义。
</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 italic text-left">
“我们就全部基于物理世界的需求，重做一遍。”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./physical-native.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 看得见一只猫，不等于能走过去

<div class="text-sm opacity-70 mb-4">玻璃门后的猫，是沈宇军用来区分语义理解与空间感知的例子。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>语义模型</strong><br/>识别到门外有一只猫；这个答案在图像理解任务中已经足够。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>机器人</strong><br/>向前走会先撞到玻璃；距离与遮挡决定动作能否执行。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Depth 的目标</strong><br/>玻璃门拉开时，猫的深度结构才逐渐显现。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic text-left">
“你能看到，但你摸不到，能看到是语意理解，摸不到是空间感知。”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./vision-depth.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 水流与玻璃门：空间感知的两次考试

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 反光水龙头与水流
- 机器人不只要判断水有没有打开
- 还要估计水流所在的空间位置
- 接水动作需要距离，而不只是类别标签

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 玻璃门与门外的猫
- 猫的语义始终存在
- 但玻璃门构成真实障碍
- 门拉开后，猫才进入可行动的空间

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<strong>作者概括</strong>：数字视觉回答这是什么；机器人视觉还必须回答它在哪里、隔着什么、下一步能不能碰到。
</div>

---
layout: two-cols
---

# 六个模型，不是六条支线

<div class="text-sm opacity-70 mb-4">它们分别承担感知、数据与时序架构验证，最后汇入机器人控制基模。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Vision → Depth</strong><br/>从纯视觉几何预训练，走到三维距离感知。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>VLA</strong><br/>用真实落地暴露数据分布、构型与后训练问题。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Video + World → VA 2.0</strong><br/>验证 MoE 与单向时序，再把技术汇入控制模型。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./six-models.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 具身原生，原生在哪里

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 视觉原生
从点、线、面和几何关系出发，不把语义分类当作空间理解的替代品。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 架构原生
编码阶段对齐语义与动作；用 MoE 降低激活量；用单向注意力服从时间流逝。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 数据原生
尚未完成：具身数据仍远少于互联网数据，任务泛化继续受限。

</div>

</div>

<div class="mt-7 p-6 text-xl italic border-l-4 border-green-500 bg-green-50 text-left">
“看得更清楚，想得更明白，干得更利索”
<div class="not-italic text-xs opacity-60 mt-2">— 沈宇军对三层技术目标的概括</div>
</div>

---
layout: two-cols
---

# 实时性，改变了架构选择

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-gray-50 border-l-4 border-gray-400">
<strong>生成视频</strong><br/>可以等待 10 秒、20 秒或更久，再一次性得到完整内容。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>机器人执行</strong><br/>观察、决策、动作持续闭环；停顿会直接造成任务失败。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>架构约束</strong><br/>未来能看历史，历史不能偷看未来；注意力必须因果单向。
</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-left">
“时间是单向流逝。”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./causal-runtime.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# MoE 不是换个名字就会自动变稀疏

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-3xl font-bold text-red-600">约 2 个月</div>
<div class="text-sm mt-2">主要时间花在把 MoE 的专家激活真正训练均衡。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-3xl font-bold text-orange-600">几十次</div>
<div class="text-sm mt-2">训练早期就能发现专家激活不均匀，需要重新试验。</div>
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-3xl font-bold text-green-600">稳定训练</div>
<div class="text-sm mt-2">通过 loss、sampling 与正则等组合，让不同专家近似均衡被调用。</div>
</div>

</div>

<div class="mt-7 p-5 text-lg italic border-l-4 border-purple-500 bg-purple-50 text-left">
“把 MoE 训好。是一个能力问题，它不是一个态度问题。”
<div class="not-italic text-xs opacity-60 mt-2">— 沈宇军，复盘 MoE 训练失败</div>
</div>

---

# VA 2.0：三项技术最终收束

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 编码器
视觉压缩不只减小尺寸；编码阶段就加入语义与动作对齐。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 稀疏与因果
Video 验证 MoE，World 验证单向预训练，再合并两类能力。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 机器人数据
加入真机数据，从随机参数开始训练面向控制的具身基模。

</div>

</div>

<div class="mt-7 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50 text-left">
“它是整个所有的技术，拼到一起的一个模型。”
<div class="not-italic text-xs opacity-60 mt-2">— 沈宇军，解释 VA 2.0 在六个模型中的位置</div>
</div>

---

# 数据规模上去了，标准也变严了

<div class="grid grid-cols-4 gap-3 mt-5 text-center">

<div class="p-4 rounded bg-gray-50 border border-gray-200">
<div class="text-xs opacity-60">模型规模</div>
<div class="text-3xl font-bold text-gray-700 my-2">3B 级</div>
<div class="text-xs">嘉宾表述为 3B / 3.xB</div>
</div>

<div class="p-4 rounded bg-blue-50 border border-blue-200">
<div class="text-xs opacity-60">1.0 数据</div>
<div class="text-3xl font-bold text-blue-600 my-2">2 万小时</div>
<div class="text-xs">第一代发布口径</div>
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">
<div class="text-xs opacity-60">重新清洗</div>
<div class="text-3xl font-bold text-orange-600 my-2">剩 1 万多</div>
<div class="text-xs">旧数据按更严格管线过滤</div>
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">
<div class="text-xs opacity-60">2.0 数据</div>
<div class="text-3xl font-bold text-green-600 my-2">6 万小时</div>
<div class="text-xs">新口径下重新累积</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
<strong>不要把 2 万→6 万简单理解为三倍</strong>：旧数据先被大幅清洗，再在更严格的质量标准上重新扩充；嘉宾估计有效规模接近上一版的四倍。
</div>

---
layout: two-cols
---

# 数据从哪里来

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>真机数据</strong><br/>直接反映真实本体、传感器噪声与控制执行。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Ego 数据</strong><br/>人佩戴头部相机执行任务，提供更易规模化的采集思路。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>仿真数据</strong><br/>覆盖某些任务很高效，但分布可能同质；灵波目前更多用于评测。
</div>

</div>

<div class="mt-4 p-3 rounded bg-gray-50 border-l-4 border-gray-400 italic text-left">
“仿真我们可能会更多的把它留在评测上。”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./data-pipeline.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 量产数据的瓶颈，不是拍摄按钮

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 任务分布
头、腰、底盘与手部自由度出现比例失衡，模型就会偏向更常见的动作。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 跨本体清洗
相机位置、关节连接与机器配置不同，无法用一条管线无差别处理。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 操作员能力
复杂任务做得不流畅，模型会把卡顿动作也当成正确示范。

</div>

</div>

<div class="mt-6 p-5 rounded bg-green-50 border-l-4 border-green-500 italic text-left">
“操作越简单的，它就通用性越好。”
<div class="not-italic text-xs opacity-60 mt-2">— 这里的通用性首先受采集者能否稳定完成任务影响</div>
</div>

<div class="mt-4 text-xs opacity-60 text-left">灵波保留自采能力先跑通 SOP，再把可复制的任务交给数据与本体合作伙伴。</div>

---

# 随机性：从实验室摆拍到真人对打

<div class="grid grid-cols-2 gap-5 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 对打场景
- 对手打来的位置不可预先固定
- 只依赖机器人自身相机
- 回合速度要求模型实时执行

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 桌面整理
- 物体随机撒在桌面
- 人可以中途拿走或一起收拾
- 模型根据变化继续完成剩余任务

</div>

</div>

<div class="mt-6 p-5 text-lg italic border-l-4 border-orange-500 bg-orange-50 text-left">
“我就一双眼睛，然后我就看到那个东西，然后去做”
<div class="not-italic text-xs opacity-60 mt-2">— 沈宇军，强调对打 demo 没有依赖场外相机追踪</div>
</div>

---

# 泛化已经发生，但只发生了一部分

<div class="grid grid-cols-2 gap-5 mt-5 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 已改善：位置与扰动
- 物体位置不再需要固定
- 中途变化后仍能继续任务
- 对打任务在预训练后约采 20 条数据

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 未解决：新任务
- 没见过的任务仍难以直接执行
- 机器人数据不足，无法充分排列组合经验
- 这不是全面的零样本泛化

</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-4 text-center">
<div class="p-3 rounded bg-gray-50 border border-gray-200"><strong>1.0 后训练</strong>：每任务约 100 条</div>
<div class="p-3 rounded bg-blue-50 border border-blue-200"><strong>2.0 后训练</strong>：约 20 条即可</div>
</div>

<div class="mt-5 text-sm italic text-left border-l-4 border-red-500 pl-4">
“我觉得这个纬度，可能现在还没太做好。”
</div>

---
layout: two-cols
---

# 大脑与小脑：先分清意图的来源与实现

<div class="text-sm opacity-70 mb-4">沈宇军没有沿用固定的大小脑定义，而是按系统职责划界。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>意图来源</strong><br/>为什么要拉窗帘、为什么看到下雨要拿伞；需要更高阶交互与推理。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>意图实现</strong><br/>用户已经提出拿伞指令，模型负责把连续动作做出来。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>当前边界</strong><br/>语言模型仍可作为需求入口；灵波重点解决如何把事情干明白。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./intent-stack.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 为什么还没到机器人的 GPT-1 时刻

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-3xl font-bold text-green-600">6 万小时</div>
<div class="text-sm mt-2">已经形成较大规模，但与上一代相比仍不是数量级跃迁。</div>
</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-3xl font-bold text-red-600">约 100×</div>
<div class="text-sm mt-2">嘉宾估计互联网数据与真机机器人数据相差两个数量级。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-3xl font-bold text-orange-600">未定型</div>
<div class="text-sm mt-2">可规模化采集方式尚未确定，Ego 仍需从理念变成可部署产品。</div>
</div>

</div>

<div class="mt-7 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 text-left">
“现在还没有看到一个，比较好的，能够做数据 scale up 的方式。”
<div class="not-italic text-xs opacity-60 mt-2">— 因此当前模型架构可以原生，数据仍未原生</div>
</div>

---
layout: two-cols
---

# 数据原生：规模与可用性的双重门槛

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>当前台阶</strong><br/>2 万小时 → 严格清洗 → 6 万小时。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>下一道门槛</strong><br/>先形成真正用于原生预训练的 10 万小时规模。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>理想起点</strong><br/>百万小时起步，让具身数据与互联网知识更接近平衡。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-left">
“质量和数量之间，怎么取一个平衡？”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./scale-ladder.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 大脑与本体，会交替上升

<div class="text-sm opacity-70 mb-4">当前争论轮式还是足式，为时尚早；机器人首先得把活干好。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>现在</strong><br/>大脑落后于本体，主要矛盾是智能不足。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>下一步</strong><br/>智能提升会对本体与传感器提出新需求。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>再下一轮</strong><br/>模型可能重新定义传感器指标：速度、精度与模态如何取舍。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic text-left">
“他们两个一定是交替上升的。”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./brain-body-loop.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 从汤晓鸥到第一次创业：抓住主要矛盾

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 老师留下的方法
沈宇军对汤晓鸥的印象，一是幽默，二是能从乱序和混沌中迅速找到真正值得问的问题。

<div class="mt-4 text-lg italic">“快速地抓到，一个主要矛盾。”</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 创业增加的约束
资源有限、路径未知；传感器原生与模型原生都可能失败，却必须做出选择。

<div class="mt-4 text-lg italic">“创业一定是赌出来的。”</div>

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<strong>作者概括</strong>：这期对谈的底层方法不是追逐每个热点，而是在技术尚未收敛时，持续判断当前最值得下注的主要矛盾。
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">8 句原话均来自本集 transcript，并按语境标注。</div>

<div class="grid grid-cols-2 gap-3 text-left text-[12px] leading-snug">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“研究员认为的先进的技术，跟行业需要的先进技术，是会有 gap 的。”
<div class="not-italic text-[10px] opacity-60 mt-1">组织：为什么成立公司而非研究机构</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“我们觉得通用，应该就是多一层，就是你本体上也要通用。”
<div class="not-italic text-[10px] opacity-60 mt-1">战略：跨任务、跨场景之外还要跨本体</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“我们就全部基于物理世界的需求，重做一遍。”
<div class="not-italic text-[10px] opacity-60 mt-1">路线：不再沿数字模型继续魔改</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“你能看到，但你摸不到，能看到是语意理解，摸不到是空间感知。”
<div class="not-italic text-[10px] opacity-60 mt-1">视觉：玻璃门后的猫</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
“时间是单向流逝。”
<div class="not-italic text-[10px] opacity-60 mt-1">架构：机器人必须做因果单向建模</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
“把 MoE 训好。是一个能力问题，它不是一个态度问题。”
<div class="not-italic text-[10px] opacity-60 mt-1">训练：两个月与几十次失败</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“现在还没有看到一个，比较好的，能够做数据 scale up 的方式。”
<div class="not-italic text-[10px] opacity-60 mt-1">阶段：为什么还没到 GPT-1 时刻</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“创业一定是赌出来的。”
<div class="not-italic text-[10px] opacity-60 mt-1">决策：有限资源下选择未知路径</div>
</div>

</div>

---
layout: end
---

# 具身智能的底座，还在被发明

<div class="mt-8 text-2xl italic leading-relaxed">
“我非常非常相信，具身要有自己的模型。”
</div>

<div class="mt-8 text-sm opacity-60">— 沈宇军</div>

<div class="mt-12 text-xs opacity-45">PodDeck · 张小珺 Xiaojun Podcast · EP.147</div>
