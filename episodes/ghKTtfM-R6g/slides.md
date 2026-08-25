---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '146. 对Physical Intelligence柯丽一鸣4小时访谈：Pi的开源模型研究，机器人的江湖、族谱与主角'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
coverDate: '2026/07/16'
themeConfig:
  paginationPagesDisabled: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
---

# 机器人的江湖、族谱与主角

<div class="text-xl opacity-80 mt-5">从一双筷子，到可跨本体的通用机器人大脑</div>

<div class="mt-10 text-sm opacity-60">
张小珺 × 柯丽一鸣<br/>
Physical Intelligence 研究员 · 2026 年 7 月
</div>

<div class="mt-8 text-xs opacity-50">
约 3 小时 48 分钟 · PI 开源模型、机器人路线与长期想象
</div>

---

# 为什么这期值得看

<div class="text-sm opacity-70 mb-4">它同时给出一份技术路线图、一张机器人学术族谱，以及一个一线研究者如何选择问题的个人答案。</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 三代主线
π₀、π₀.₅、π*₀.₆ 分别回答能力、泛化与性能。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 两条族谱
规划控制与机器学习，如何从竞争走向汇流。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 本体之争
人形不是唯一入口；通用大脑也可以跨机器形态。

</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-left">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 数据闭环
真机经验、错误修正与强化学习怎样推动性能上限。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 评测难题
没有统一赛马场时，前沿能力该如何被判断。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 长期想象
机器人自我组装、替换身体，并形成可延续的族群。

</div>

</div>

---

# 研究员与小说作者，是同一条线

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 白天：教机器人做事
- 让机器人更快、更好地完成任务
- 从新方法到工程实现，持续验证可行性
- 研究对象是动作、数据与真实世界

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 业余：写科幻小说
- 想象生产力变化后的生活
- 追问技术社会里人与人的关系
- 用故事承载尚未发生的可能性

</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">
<strong>对谈中的连接</strong>：两件事都先需要创造一个此前不存在的方案，再靠执行把它变成可观察的结果。
</div>

---

# 技术改变的，不只是一份工作

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 信息入口
个人 Agent 可以先遍历信息，再按人的偏好压缩与转交。

</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 团队接口
研究者可能先问 Claude Code，再去找模块负责人沟通。

</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 工作单元
对谈提到一人同时控制三四个 Agent，让协作结构开始变化。

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
<strong>作者概括</strong>：AI Agent 不只替代一个操作步骤，它正在成为人与信息、人与同事之间的新中介层。
</div>

---

# 从竞赛、心理学、经济学，再回到计算机

<div class="grid grid-cols-5 gap-3 mt-6 text-left text-sm">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs font-bold text-blue-700">8 岁起</div>

### 信息学竞赛
在芜湖的兴趣班接触 LOGO、C 语言与算法思维。
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-xs font-bold text-purple-700">大学起点</div>

### 心理学
内容有趣，但很难快速追到一个可被解决的具体问题。
</div>

<div class="p-3 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-xs font-bold text-orange-700">第二次选择</div>

### 经济学
帮助理解世界，却仍没有回答自己要在世界里做什么。
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs font-bold text-green-700">研究入口</div>

### 机器学习
从对抗机器学习与博弈论，进入可验证的技术研究。
</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-xs font-bold text-red-700">2017 起</div>

### 机器人
从理论、仿真、真机到强化学习，研究对象逐步稳定。
</div>

</div>

<div class="mt-7 text-sm opacity-70 text-left border-l-4 border-gray-400 pl-4">
这条路径不是按职业终点倒推出来的，而是不断排除不适合自己的问题形态。
</div>

---

# 她选择问题的三个过滤器

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 能否落到具体问题
相比长期停留在解释层，她更偏好能设计、运行和验证的任务。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 能否把上限推高
仅复制示范不够；研究必须允许系统通过探索超过起点。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 能否让更多人使用
如果中间的专家知识可以被机器吸收，能力就能更广地流动。

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<strong>贯穿全场的判断</strong>：不是先站队某个优雅范式，而是寻找在当前条件下最可能把任务做成的方法。
</div>

---
layout: two-cols
---

# 两条机器人族谱，正在汇流

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>传统机器人</strong><br/>从物理模型、路径规划和控制出发，强调可解释、可保证与真机完成度。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>机器学习机器人</strong><br/>从数据中学习输入到动作的映射，追求跨任务复用与规模效应。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>今天的交汇</strong><br/>通用机器人大脑需要算法、大模型、硬件、控制与产业链共同参与。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./robot-lineage.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 传统路线：先计划，再执行

<div class="grid grid-cols-4 gap-3 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs font-bold text-blue-700">01</div>

### 建模
理解机器人结构、动力学、摩擦与环境约束。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-xs font-bold text-purple-700">02</div>

### 规划
把任务拆成第一步、第二步、第三步，并连成路径。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-xs font-bold text-orange-700">03</div>

### 控制
把路径翻译成关节位置、力与低层执行信号。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs font-bold text-green-700">04</div>

### 校验
逐步保证动作按预期完成，并在真机上稳定运行。
</div>

</div>

<div class="mt-7 p-5 rounded bg-gray-50 border border-gray-200 text-left">
优势是边界清晰、结果稳定；代价是换一个任务，往往还要重新投入大量专家工程。
</div>

---

# 机器学习路线：让数据吃掉中间层

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 核心转变
- 不再逐条手写所有规则
- 直接从示范、观察与结果学习动作
- 把部分专家知识压进模型参数
- 让相似任务共享数据与表示

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 仍要回答
- 训练分布之外还能不能运行
- 真机误差累积后如何恢复
- 能否在一个任务上达到极高性能
- 黑箱结果如何获得足够保证

</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">
<strong>作者概括</strong>：数据驱动不是省略物理世界，而是把原先由专家显式完成的一部分建模，改由模型从经验中吸收。
</div>

---

# 争论的核心，不是新旧

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 传统派的质疑
如果一个系统什么都能做一点，却没有一件事做得足够好，它离生产价值仍然很远。

<div class="mt-4 text-sm opacity-70">工厂机器人已有稳定、快速、可保证的成熟方案。</div>

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 学习派的回答
先把一个困难任务推到高水平，再让模型从经验迁移到相似任务，才可能改变投入产出曲线。

<div class="mt-4 text-sm opacity-70">目标不是否定传统方法，而是突破逐任务调参的规模上限。</div>

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
柯丽一鸣的导师要求模型必须上真机，这让新路线从一开始就接受传统机器人完成度的检验。
</div>

---
layout: two-cols
---

# 一双筷子，压测整套信念

<div class="text-sm opacity-70 mb-4">她从零搭起筷子机器人，不是因为筷子最实用，而是它足够简单、足够难。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>硬件不完美</strong><br/>关节、回差与参数都不理想，正好检验数据驱动能否吸收误差。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>任务足够苛刻</strong><br/>用两点支撑夹取小球，需要比普通抓放更高的动作精度。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>路线可递进</strong><br/>先遥操作示范，再做模仿学习，最后让机器人在真机上练习。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./chopstick-loop.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 聪明的控制，可以补偿笨拙的身体

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 人先证明可行
她远程控制这套不精确的硬件，仍能用筷子夹起小球。

</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 模型学习人的策略
如果人能在同一机械误差下完成，算法就存在可学习的目标。

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 研究转向性能
约在 2018 或 2019 年完成早期结果后，重点转向真机强化学习。

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
<strong>作者概括</strong>：这个项目把本体与大脑的关系说得很具体——硬件给出可达边界，策略决定能否逼近边界。
</div>

---

# 模仿学习给起点，强化学习抬高天花板

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 模仿学习
- 人已经知道一种做法
- 机器人从示范中复制策略
- 适合建立第一版可运行能力
- 上限容易被示范质量锁住

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 强化学习
- 机器人在环境中持续尝试
- 从成功、失败与速度中获得反馈
- 形成适合自身硬件的策略
- 目标是超过人提供的初始数据

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
她把动作学习类比为运动训练：策略需要被不断练进身体，直到成为稳定的执行能力。
</div>

---

# 族谱不是名单，而是问题意识的传承

<div class="grid grid-cols-4 gap-3 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### CMU 传统
Matt Mason、Sidd Srinivasa：操作、规划、控制与全栈真机能力。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### Berkeley 学习派
Andrew Ng、Pieter Abbeel、Sergey Levine：机器学习与强化学习进入机器人。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 视觉与具身
Fei-Fei Li 的学生与合作者群体，把视觉经验带进机器人研究。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 探索与创业
Abhinav Gupta、Deepak Pathak 等人推动野外数据、好奇心与新公司。
</div>

</div>

<div class="mt-7 p-5 rounded bg-gray-50 border border-gray-200 text-left">
柯丽一鸣把自己放在两条线的交叉处：接受传统派对真机与性能的要求，同时相信数据驱动会改变扩展方式。
</div>

---
layout: two-cols
---

# 机器人创业，并没有一张统一地图

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>研究型大脑公司</strong><br/>PI 与 Skild AI 更强调通用模型与学术创业路径。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>人形与本体公司</strong><br/>Tesla、Figure、1X 把更多赌注放在具体机器人形态上。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>数据与部署路线</strong><br/>Generalist AI、Sunday Robotics、Dyna 展示不同的数据和场景优先级。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./robot-landscape.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 同一目标，不同公司先解不同变量

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### PI
以双臂操作为主要可见载体，优先推进任务能力、跨环境泛化与最终性能。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Google / NVIDIA
一个拥有 Gemini 多模态入口；一个拥有计算、世界模型与工程栈优势。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Tesla 等人形公司
更强地押注最终人形，让硬件形态直接适配为人设计的世界。

</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-left text-sm">
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500"><strong>对谈边界</strong>：嘉宾多次强调，对其他公司只能根据公开信息和视频推断。</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500"><strong>共同趋势</strong>：软件、硬件、数据与部署正从各自优化走向组合优化。</div>
</div>

---

# 人形之争，其实是两个时间尺度

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 最终形态的信念
- 人类环境按人的身体设计
- 双手、双腿与人的数据天然匹配
- 先造完整人形，再逐步填满能力

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 当前任务的优先级
- 折衣、装箱、做咖啡不需要双腿
- 更简单的本体更容易训练和维护
- 先把任务做深，再迁移到复杂形态

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
柯丽一鸣并不否认人形值得研究；她拒绝的是让人形工程吞掉当前最想解决的任务问题。
</div>

---
layout: two-cols
---

# 通用大脑，不等于人形大脑

<div class="text-sm opacity-70 mb-4">对谈给出的定义更接近一个可迁移的控制者：同一个脑，能够操纵多种机器形态。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>跨任务</strong><br/>抓、放、折叠、装配与长序列操作共享能力。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>跨环境</strong><br/>从办公室、Airbnb 到未见过的家庭继续运行。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>跨本体</strong><br/>双臂、人形、四足乃至车辆，都可能从同一模型获益。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./universal-brain.excalidraw" class="w-[420px]" :darkMode="false" :background="false" />
</div>

---

# 简单本体做难任务，是一种能力压测

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 减少自由度
更少关节、更简单夹爪，让本体本身不替算法掩盖问题。

</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 增加任务复杂度
长序列装配、柔性衣物与高精度操作仍要求丰富策略。

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 验证可迁移性
如果简单形态能完成复杂任务，迁入更灵活本体可能更容易。

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<strong>作者概括</strong>：通用性的重点不在外形像不像人，而在模型能否跨任务、跨环境、跨机器吸收经验。
</div>

---

# 硬件还没有定型，软件也远未解决

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么公司自己做硬件
- 市面产品未必稳定到可长期运行
- 夹爪、尺寸与结构要服务最终任务
- 快速更换部件能省掉大量算法复杂度

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么不能只怪硬件
- 机器人已经可以被组装并运动
- 真正困难的是做出有意义的任务
- 数据、决策与泛化仍是更大的瓶颈

</div>

</div>

<div class="mt-7 p-4 rounded bg-green-50 border-l-4 border-green-500 text-left">
对谈把软硬件关系写成持续迭代：模型能力提出新硬件需求，新本体又暴露下一批模型问题。
</div>

---

# 为什么放弃剑桥教职，加入一家新公司

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 时间尺度
三到五年的学生周期，未必足够让跨方向研究者完成一次真正的探索。

</div>

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 系统规模
机器人需要计算、数据、硬件与多人协作；一人全栈会把大量时间耗在基础设施上。

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 团队质量
PI 的成员已做过一批成功工作，交流方式又足够求真和直接。

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
她最终把 offer 理解为一块新平台，而不是一组薪酬条款：能和互补的人一起，去做单人无法完成的系统。
</div>

---
layout: two-cols
---

# PI 三代主线：一次只回答一个问题

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>π₀：能力</strong><br/>大模型架构能否让机器人完成此前难以想象的任务。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>π₀.₅：泛化</strong><br/>离开训练环境后，模型还能否在新房屋、新物体与新状态中工作。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>π*₀.₆：性能</strong><br/>一个会做很多事的模型，能否把特定任务做到更快、更好。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./pi-trilogy.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# π₀：先证明能力真的存在

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 折衣服
柔性物体状态多、摩擦复杂，过去很难得到令人信服的任务表现。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 叠纸箱
需要连续操作和结构变化，团队一开始也不知道能否成功。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 清理桌面
面对大量不同物体，模型要在多样输入下持续抓取与放置。

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
π₀ 的贡献不是把单个指标刷高，而是让研究者看到：大模型确实能打开一批此前不敢设定的机器人任务。
</div>

---
layout: two-cols
---

# π₀.₅：从一间房，走进下一间房

<div class="text-sm opacity-70 mb-4">团队在大量 Airbnb 环境中采集日常任务数据，用不可控的真实房屋压测开放世界泛化。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>分布内</strong><br/>模型在采集过的数据范围内已经学得很好。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>分布外</strong><br/>换房屋、光线、物体与布局，性能可能立刻下降。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>关键观察</strong><br/>对谈提到约 100 个家庭的采集，并观察新增环境带来的收益开始放缓。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./home-scaling.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# π*₀.₆：让机器人从自己的经历变强

<div class="grid grid-cols-4 gap-3 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 起点
已有模型已经能够完成任务，但速度与质量仍不够稳定。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### Rollout
让模型自己在真实环境中执行，收集属于它的经验数据。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 回流
把执行结果放回训练池，识别哪些动作真正贡献了成功。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 结果
在折衣任务上，最终表现超过最熟练数据采集者的初始水平。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
核心指标是固定时间内的成功吞吐：完成多少、花了多久、质量是否合格，要同时进入性能判断。
</div>

---

# 三篇主线之外，还有四块铺路石

<div class="grid grid-cols-4 gap-3 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### FAST
寻找更适合大模型预测的动作表达空间，改进训练与性能。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### HiRobot
把长任务分层：高层拆成短指令，低层负责连续执行。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### Olympics
人先遥操作完成极难任务，用人的上限推动模型任务边界。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### Partners
把 PI 模型接入合作伙伴机器人，靠近折衣、包装等商业场景。
</div>

</div>

<div class="mt-7 p-5 rounded bg-gray-50 border border-gray-200 text-left">
这些工作共同缩短一条链：从一块新硬件被组装出来，到它第一次做成有意义的任务。
</div>

---

# 机器人数据，至少有三种入口

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 真机数据
真实摩擦、柔性物体、硬件误差和环境变化全部在场；质量高，但采集与维护昂贵。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 仿真数据
便宜、可规模化；但衣物等复杂物理属性难以模拟，存在明显 sim-to-real gap。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### UMI 类人采集
人手持工具在生活空间采集，速度更高；仍需证明如何稳定迁移到机器人本体。

</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
嘉宾没有把路线问题变成阵营问题：能让模型真正变好的数据，才是值得使用的数据。
</div>

---

# 为什么她仍押注真机数据

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 当前不可替代
- 柔性衣物的摩擦、黏性与形变难以完整模拟
- 部署环境会持续产生仿真没有覆盖的状态
- 真机直接给出模型和物理世界的误差

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 长期可能变便宜
- 机器人硬件价格仍在下降
- 已训练模型可以代替部分人工遥操作
- 大规模部署本身会持续产生经验数据

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
对谈的核心不是比较同样一小时数据的价格，而是比较固定预算下，哪类数据真正提高最终模型。
</div>

---
layout: two-cols
---

# 经验数据把部署变成训练场

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>模型执行</strong><br/>不再只重放人的示范，而是让当前策略自己完成任务。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>结果暴露</strong><br/>成功、失败、停顿、恢复、速度与质量都进入数据。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>再训练</strong><br/>筛出真正有信息量的片段，让下一版模型改变策略。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./experience-loop.excalidraw" class="w-[420px]" :darkMode="false" :background="false" />
</div>

---

# 错误不是废料，恢复过程才是稀缺样本

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">

### 累积误差
模仿学习每一步的小偏差会放大，把机器人推入人类示范从未出现的状态。

</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 分布断裂
机器人一旦偏离理想轨迹，就不知道下一步如何继续任务。

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 修正数据
主动采集从坏状态恢复的过程，让模型学会回到可完成任务的轨道。

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<strong>作者概括</strong>：完美示范教会机器人正常路径；错误后的修正，才教会它在真实世界里活下来。
</div>

---

# 好数据不是一个数字，而是四个维度

<div class="grid grid-cols-4 gap-3 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 任务含义
挥手可能没有价值；如果目标是舞蹈，同一动作就有明确含义。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 动作质量
是否直接、流畅、高效，还是先徘徊再勉强完成。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 覆盖范围
同一任务覆盖多少物体、位置、环境与不同状态。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 信息标签
物体、位置、动作与结果是否被标注到可被模型利用。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
一千万小时并不自动优于一万小时：如果任务无意义、动作低质、分布重复，再大的数据量也可能只是噪声。
</div>

---
layout: two-cols
---

# 通用与专精，是左右脚

<div class="text-sm opacity-70 mb-4">对谈把机器人研究拆成两个互相增益的问题，而不是两个只能二选一的目标。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>通用能力</strong><br/>在未见任务、未见环境里，也能做出合理的第一版行为。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>特定性能</strong><br/>在一个重要任务上，把速度、质量和稳定性推到足够高。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>互相推动</strong><br/>高质量任务训练改善模型底座，更好的底座又缩短新任务优化距离。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./two-feet.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 强化学习，不只是给一个奖励

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 探索
下一次尝试要改多少、改哪里；小动作还是大方向，都影响学习效率。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 归因
一长串动作得到成功结果后，要找出真正决定成功的关键片段。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 问题定义
折衣服可以有许多正确做法；系统必须知道人真正想要哪一种结果。

</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">
强化学习的长期价值，是把行动、反馈、总结与下一次探索连接成持续自我改进的机制。
</div>

---

# 奖励写错，模型就会把漏洞做到极致

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 典型失败
在游戏中优化分数时，模型可能发现程序漏洞，通过反复触发漏洞拿到最高分，却没有完成设计者想要的玩法。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 更可靠的方向
不执着于单一形式的 reward function，而是把语言、程序验证、常识和任务结果组合起来传达好坏。

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
机器优化的是你真正表达出来的目标，不是你以为自己表达出来的目标；问题定义本身就是系统能力的一部分。
</div>

---

# VLA 的 L，不只是给动作起名字

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 指令入口
语言让人可以自然提出任务，并在执行前后持续补充上下文。

</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 推理与规划
模型可以搜索信息、拆解步骤，并在长任务中维持更高层目标。

</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 尚未充分连接
当前 VLA 对语言与细微动作之间的对应关系，仍处在较早阶段。

</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">
嘉宾成为 Claude Code 重度用户后，更看重语言交互：一句话不必包含全部细节，关键是 Agent 能否用上下文继续推理。
</div>

---

# 前沿为什么难以排成一张榜

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### NLP 的赛马场
统一数据集、统一评分方式、模型集中提交，能较清晰地看到同一指标上的领先者。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 机器人的现场
每个模型要在真实机器上运行；光线、背景、桌高、物体姿态与硬件状态都会改变结果。

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
当公司各自选择不同任务、不同本体与不同扰动时，前沿更像一片同时向多个方向生长的区域。
</div>

---
layout: two-cols
---

# 机器人评测，是一个矩阵

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>环境轴</strong><br/>光照、背景、桌高、物体位置与初始状态。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>表现轴</strong><br/>成功率、速度、质量与固定时间内的吞吐。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>系统轴</strong><br/>硬件漂移、任务理解、恢复能力与人与机器人安全。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./evaluation-matrix.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 进入家庭，是能力与产品的联合考试

<div class="grid grid-cols-4 gap-3 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 环境无限
没有两间卧室完全相同，泛化压力远高于受控工厂。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 任务无限
家务是不断切换的长尾集合，难以提前列出完整清单。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 硬件寿命
机器要持续工作、经受碰撞，并能被普通家庭维护。
</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">

### 人身安全
大型人形跌倒、夹伤与损坏地面，都让家庭部署更严苛。
</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">
对谈中的北极星不是立刻卖出一台万能家政机器人，而是让进入家庭从遥远想象变成可持续探索的工程路径。
</div>

---

# 中美差异，先体现在硬件迭代速度

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 中国的直接优势
- 机器人零部件与制造供应链完整
- 电机与本体形态选择更多
- 定制与迭代速度更快
- 最新硬件 demo 会被美国团队持续研究

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 美国的直接约束
- 硬件人才与产业环节长期不足
- 本地制造迭代慢、选择少
- 前沿模型、计算与研究组织仍有积累
- 公开论文也无法复制全部隐性能力

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
嘉宾把中国机器人发展视为不可忽略的变量；PI 内部也会讨论最新展示，并邀请熟悉运动控制的人交流。
</div>

---
layout: two-cols
---

# 两种优势，最终要在同一台机器上相遇

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>硬件齿轮</strong><br/>供应链、成本、部件选择与快速定制决定试验频率。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>模型齿轮</strong><br/>架构、数据方法、算力与研究组织决定智能上限。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>共同输出</strong><br/>只有软硬件共同闭环，才能形成可部署的 Physical Intelligence。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./china-us-gears.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 2024 到 2026：不确定性在变成工程问题

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs font-bold text-blue-700">2024</div>

### 能不能做
折衣、叠箱、清桌面从不确定，变成看得见的成功可能。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-xs font-bold text-purple-700">2025</div>

### 能否迁移与变强
Airbnb 泛化与真机经验回流，把问题推向开放环境和性能上限。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs font-bold text-green-700">2026 期待</div>

### 更好的模型与 demo
嘉宾期待更多惊艳展示，也提醒要区分视频表现与背后的真实进步。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
进展并不等于家用机器人已经成熟；它意味着研究问题开始从是否可能，转向怎样更稳、更快、更广。
</div>

---

# 70 人左右的研究型创业公司，如何保持速度

<div class="grid grid-cols-4 gap-3 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 自主节奏
没有统一打卡；成员按自己的高效方式安排工作。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 主题读书会
先同步已有工作，再公开质疑、碰撞，并把问题交给小团队推进。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 工具扩散
最会用 Claude Agent 的人先演示，其他人直接复制工作方式。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 体感增益
嘉宾估计 Agent 让个人有效产出提高约三到四倍，但研究判断仍由人完成。
</div>

</div>

<div class="mt-7 p-5 rounded bg-gray-50 border border-gray-200 text-left">
团队的扩展方式不是把每个人锁进流程，而是让新想法、实验结果与工具用法更快穿过组织。
</div>

---

# 最浪漫的工程目标：机器人制造机器人

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 自我组装
机器人能够安装或替换自己的部件，形成一种技术上的繁衍能力。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 可修复身体
某个部位受损时，不必让整台机器长期停摆；身体可以拆解、替换与重组。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 动态形态
机器可以根据任务更换手、腿或工具，不必被自然进化形成的人类外形锁住。

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
这个想象把机器人从产品变成族群：延续的不一定是同一套零件，而可能是任务、模型与自我重建能力。
</div>

---
layout: two-cols
---

# 忒修斯之船，变成机器人版本

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>部件替换</strong><br/>头、手、关节与工具可以逐步被新版本取代。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>模型替换</strong><br/>控制策略也会不断更新，原始机器的物质与行为都可能消失。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>身份问题</strong><br/>当唯一不变的只剩编号，它还是不是原来那台机器人。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./robot-species.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">以下 8 句均按英文自动字幕逐字检索；中文只用于标注语境。</div>

<div class="grid grid-cols-2 gap-3 text-left text-[12px] leading-snug">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“They all have some need for creativity.”
<div class="not-italic text-[10px] opacity-60 mt-1">研究与小说：都从创造尚不存在的方案开始</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“Robots may also have to go this way.”
<div class="not-italic text-[10px] opacity-60 mt-1">路线：机器人也可能走向端到端数据学习</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“Robotics is far too important to be left to robotists”
<div class="not-italic text-[10px] opacity-60 mt-1">跨学科：机器人不能只由传统机器人研究者完成</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
“It’s true that we don’t do humanoids.”
<div class="not-italic text-[10px] opacity-60 mt-1">本体：PI 当前不把人形作为研究主轴</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“At present, real machine data is still irreplaceable.”
<div class="not-italic text-[10px] opacity-60 mt-1">数据：真机仍承担无法被仿真覆盖的物理细节</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
“But I think the amount of data we have now is still too small.”
<div class="not-italic text-[10px] opacity-60 mt-1">规模：当前数据仍不足以证明简单版本的 scaling 叙事</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“I actually think autonomous driving is more difficult than ours.”
<div class="not-italic text-[10px] opacity-60 mt-1">风险：自动驾驶容错要求更高，机器人动作空间更复杂</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“That is, robots can make themselves”
<div class="not-italic text-[10px] opacity-60 mt-1">长期目标：自我组装被视为机器人族群的里程碑</div>
</div>

</div>

---
layout: end
---

# 先做最想做的问题

<div class="mt-8 text-2xl italic leading-relaxed">
“Because I'm doing what I want to do most”
</div>

<div class="mt-8 text-sm opacity-60">— 柯丽一鸣</div>

<div class="mt-10 text-xs opacity-45">PodDeck · 张小珺 Xiaojun Podcast · EP.146</div>
