---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '150. 对英伟达研究副总裁刘洺堉的4小时访谈：功夫、Cosmos 3、开源世界模型、黄仁勋、你不需要击败所有对手'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<!-- slide: 01 -->

# 刘洺堉 × Cosmos 3

<div class="mt-4 text-xl opacity-80">从 20 年研究路径，到 Physical AI 的世界基础模型</div>

<div class="mt-10 text-sm opacity-60 leading-relaxed">
英伟达研究副总裁 · Cosmos Lab 负责人<br/>
张小珺《商业访谈录》第 150 期 · 约 3 小时 36 分钟
</div>

<div class="mt-8 inline-flex gap-2 text-xs">
  <span class="px-3 py-1 rounded-full bg-blue-50 text-blue-700">世界模型</span>
  <span class="px-3 py-1 rounded-full bg-green-50 text-green-700">Physical AI</span>
  <span class="px-3 py-1 rounded-full bg-purple-50 text-purple-700">研究组织</span>
  <span class="px-3 py-1 rounded-full bg-orange-50 text-orange-700">开放生态</span>
</div>

---

<!-- slide: 02 -->

# 为什么这一期值得看

<div class="text-sm opacity-70 mb-4">作者概括 · 这不是一场单纯的产品发布复盘，而是技术、组织与公司战略的交叉样本。</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Cosmos 3
从 Predict / Transfer / Reason / Policy 多模型，收敛到一个统一世界基础模型。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Physical AI
核心不是更会聊天，而是用有限信号学会动作，并迁移到没见过的场景。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 研究方法
问题选择、可扩展性、严谨实验、数据与基础设施共同决定迭代速度。
</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 组织设计
200–300 人既要目标一致，也要让一线自主做决定并快速纠错。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### NVIDIA
平台公司通过亲自做应用研究，提前理解客户需求和下一代基础设施。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 竞争观
模型能力会趋同；真正的差异来自产品、生态、部署成本与市场创造。
</div>

</div>

---

<!-- slide: 03 -->

# 嘉宾与项目：三个尺度

<div class="text-sm opacity-70 mb-5">作者概括 · 同一个人，同时站在研究、工程落地和平台生态三个尺度上。</div>

<div class="grid grid-cols-3 gap-5 mt-5">

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### 个人
20 年计算机视觉与生成模型路径；2016 年加入 NVIDIA；从研究者成长为研究副总裁。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### 团队
直属约 80–90 人；整个 Cosmos mission 约 200–300 人；研究者与工程师共同交付。
</div>

<div class="p-5 rounded bg-purple-50 border-t-4 border-purple-500">

### 任务
为自动驾驶、机器人和工厂提供世界基础模型，让开发者在其上构建自己的 world model。
</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
项目投入已到数万张 GPU 量级；刘洺堉把 Cosmos 看作未来多年唯一聚焦的主项目。
</div>

---
layout: two-cols
---

<!-- slide: 04 -->

# 20 年路径：始终围绕生成

<div class="text-xs text-blue-700 mb-3">作者概括</div>

他没有从一开始就设计一条世界模型路线。轨迹是在一次次范式变化中形成的：

<div class="mt-4 space-y-3 text-sm">
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>传统 CV</strong>：识别步态、形状匹配、分割、优化。</div>
  <div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>GAN</strong>：无配对图像翻译、vid2vid、GauGAN。</div>
  <div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>大模型</strong>：Picasso AI foundry，把研究变成客户产品。</div>
  <div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>Cosmos</strong>：生成不再服务内容创作，而是服务 Physical AI。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./career-arc.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- slide: 05 -->

# 愿景很早，决心来得更晚

<div class="text-sm opacity-70 mb-4">作者概括 · 早在加入 NVIDIA 的 job talk 里，他就预测深度学习会主导视频生成。</div>

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 最初的目标
小说作为输入，深度学习系统直接生成电影。Deep Imagination Research 的名字也来自这一愿景。

<div class="mt-4 p-3 rounded bg-white text-sm italic">
One day, the dominant computation for generating video will be deep learning.
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T117</div>
</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 反省的触发点
DALL·E 让他意识到数据与算力条件已经成熟；Sora 又促成 NVIDIA 内部对 Cosmos 的集体决心。

<div class="mt-4 p-3 rounded bg-white text-sm italic">
Only then did I realize my ambition wasn't big enough.
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T237</div>
</div>
</div>

</div>

---
layout: two-cols
---

<!-- slide: 06 -->

# 功夫：不是为了击倒对手

<div class="text-xs text-blue-700 mb-3">作者概括</div>

刘洺堉从 18 岁开始练中国功夫。访谈里，他把功夫解释为一套长期自我校准机制：

<div class="mt-5 space-y-3 text-sm">
  <div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><strong>整身协调</strong>：力量从脚传到手，环节必须在瞬间按次序到位。</div>
  <div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>反复纠错</strong>：站桩、出拳、复盘动作，持续修正细节。</div>
  <div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>自我控制</strong>：训练纪律、精力与心态，而非展示破坏力。</div>
</div>

<div class="mt-4 text-xs opacity-60">这套身体经验，后来映射到他的研究习惯：保持低 ego，但对执行细节设高标准。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./kungfu-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- slide: 07 -->

# 三次研究观升级

<div class="text-sm opacity-70 mb-4">作者概括 · 他把自己的成长归纳为三类能力变化。</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 1 · 从数学美感到现实
早期偏爱漂亮的优化证明，后来发现假设越多，离真实问题可能越远。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 2 · 从做出来到讲明白
作品有 100 分，表达只有 10 分，外界最终只能看到那 10 分。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 3 · 从个人到组织
大模型研究需要多人对齐；点对点沟通是 N²，清晰愿景才能降低协作复杂度。
</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
研究规模扩大后，应用、表达、团队协作不再是论文之外的附属工作，而是研究本身的一部分。
</div>

---

<!-- slide: 08 -->

# 研究问对问题，工程证明它值得

<div class="text-sm opacity-70 mb-4">作者概括 · 一年 Intel 工程经历与长期模型落地，让他形成了明确分工。</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Research
- 找到值得投入的问题
- 提出能被实验推翻的假设
- 识别最接近本质的方向

<div class="mt-4 p-3 rounded bg-white text-sm italic">
The most important part of doing research is asking the right question.
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T925</div>
</div>
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Engineering
- 把系统真正构建出来
- 在大型软件栈里定位瓶颈
- 用可运行结果证明方向有效
- 让用户能够采用并持续维护

</div>

</div>

---
layout: two-cols
---

<!-- slide: 09 -->

# 范式切换：尺度胜过技巧

<div class="text-xs text-blue-700 mb-3">作者概括</div>

传统 CV、GAN、Diffusion、Transformer 不是简单的工具替换。每次变化都在逼研究者重新判断：

<div class="mt-5 space-y-3 text-sm">
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">方法是否能随着 <strong>数据与算力</strong>继续变强？</div>
  <div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">训练是否足够稳定，能支撑更大的模型与团队？</div>
  <div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">复杂技巧能否被更简单、可扩展的统一方法替代？</div>
</div>

<div class="mt-4 text-xs opacity-60">作者概括：过去的路径并非错误；当时的数据与算力条件，使那些选择具有合理性。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./paradigm-staircase.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- slide: 10 -->

# 为什么团队放弃 GAN

<div class="text-sm opacity-70 mb-4">作者概括 · 团队曾集中研究如何 scale GAN，最终大量实验反而指向同一个结论。</div>

<div class="grid grid-cols-3 gap-4 mt-5">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 问题
GAN 难训练、稳定性差；规模扩大后，实验与工程成本持续上升。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 判断
继续优化局部技巧，无法消除路线本身的可扩展性疑问。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 行动
约 2021 年转向更稳定的 diffusion，再逐步走向 Diffusion Transformer。
</div>

</div>

<div class="mt-6 p-4 rounded bg-gray-50 border-l-4 border-gray-500 italic text-lg">
something that's not scalable won't go far in the end
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T1362</div>
</div>

---

<!-- slide: 11 -->

# 实习生不是补充人力，而是思想流动

<div class="text-sm opacity-70 mb-4">作者概括 · 年轻研究者把不同学校、导师和方法带入工业研究团队。</div>

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">
  <div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500"><strong>Tim Brooks</strong><br/>早期就想做视频生成；后来在 OpenAI 做出 Sora。</div>
  <div class="p-4 rounded bg-green-50 border-t-4 border-green-500"><strong>Jiahui Yu</strong><br/>探索大规模 GAN，把多个 discriminator 分布到不同 GPU。</div>
  <div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500"><strong>Jeremy Bernstein</strong><br/>研究稳定 GAN 的算法路线，后来发展出 Muon optimizer。</div>
</div>

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic">
determined by how fast ideas flow from one person's mind to another's
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T1416</div>
</div>

<div class="mt-3 text-xs opacity-60">作者概括：研究繁荣的关键，是想法在不同头脑间快速流动、被修改、再返回。</div>

---

<!-- slide: 12 -->

# GauGAN：论文之外，还要让用户看见

<div class="text-sm opacity-70 mb-4">作者概括 · SPADE 是算法名，GauGAN 是用户能理解的产品语言。</div>

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 技术侧
- 语义分割图作为控制信号
- 不同颜色代表山、水、天空
- 生成写实风景图
- 论文已投 CVPR
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 传播与产品侧
- 营销团队用画家 Gauguin 命名
- 虽未进入 Jensen 的 GTC keynote
- 媒体演示仍成为当年热门话题
- 在线应用带来真实用户反馈
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
这次经历把他的研究目标从论文与 benchmark，推向可使用的应用、持续反馈与更大的社会影响。
</div>

---

<!-- slide: 13 -->

# 平台公司为什么必须亲自做研究

<div class="text-sm opacity-70 mb-4">作者概括 · 只卖算力，无法提前知道未来应用真正需要什么。</div>

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 不做应用研究的盲区
- 看不到客户的真实 pain point
- 无法判断下一代芯片要优化什么
- 长周期架构规划只能追随当下需求
- 产品规格容易与部署场景脱节
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 亲自走一遍路径
- 训练模型，暴露系统瓶颈
- 与 Physical AI 开发者共同验证
- 将 know-how 反馈到 CUDA、芯片与基础设施
- 提前为未来应用设计平台
</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
研究不是客户业务的替代品，而是平台理解客户、设计未来基础设施的传感器。
</div>

---
layout: two-cols
---

<!-- slide: 14 -->

# 从应用到基础设施的反馈环

<div class="text-xs text-blue-700 mb-3">作者概括</div>

NVIDIA 的位置决定了研究必须形成闭环：

<div class="mt-5 space-y-3 text-sm">
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>先做应用级研究</strong>，暴露训练、推理与部署问题。</div>
  <div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>再设计平台</strong>，把共性痛点转成芯片、软件和工具能力。</div>
  <div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>最后开放给生态</strong>，从更多开发者那里获得新反馈。</div>
</div>

<div class="mt-4 text-xs opacity-60">这个循环解释了 Cosmos 为什么既是研究项目，也是 NVIDIA 平台战略的一部分。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./platform-feedback.excalidraw"
  class="w-[465px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- slide: 15 -->

# 零十亿美元业务：先创造影响

<div class="text-sm opacity-70 mb-4">作者概括 · Jensen 所说的 zero-billion-dollar business，不以短期收入衡量。</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-yellow-50 border-t-4 border-yellow-500">

### 现在
市场可能几乎不存在，甚至不赚钱；没有现成需求曲线可追。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 成功条件
一旦成功，必须具有巨大影响，能形成新的开发者与计算需求。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### Cosmos 的定位
帮助 Physical AI 开发者更快成功，从而把一个尚未成熟的市场共同做大。
</div>

</div>

<div class="mt-6 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">
在 NVIDIA 的尺度上，年收入一亿美元也可能只是 distraction；资源必须投向足够重要、足够大的问题。
</div>

---

<!-- slide: 16 -->

# Cosmos 的起点：Sora 之后的集体决心

<div class="text-sm opacity-70 mb-4">作者概括 · 2024 年 3 月左右，生成模型研究者共同推动 NVIDIA 启动项目。</div>

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么是此时
- Sora 证明长视频生成路线的突破潜力
- NVIDIA 已积累生成模型人才、算力和客户
- Physical AI 的劳动力与生活质量需求逐渐清晰
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 为什么叫 Cosmos
- 名字必须与产品定位一致
- 目标不是创作工具，而是物理世界
- 提供能让不同 Physical AI 应用生长的基础层
</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-5 text-center">
  <div class="p-3 rounded bg-gray-50"><div class="text-2xl font-bold text-blue-600">2024-03</div><div class="text-xs mt-1">决定启动</div></div>
  <div class="p-3 rounded bg-gray-50"><div class="text-2xl font-bold text-green-600">200–300</div><div class="text-xs mt-1">整个 mission 人数</div></div>
  <div class="p-3 rounded bg-gray-50"><div class="text-2xl font-bold text-purple-600">1 → 2 → 2.5 → 3</div><div class="text-xs mt-1">连续迭代</div></div>
</div>

---

<!-- slide: 17 -->

# The Matrix for robots：要解决泛化

<div class="text-sm opacity-70 mb-4">作者概括 · 世界模型的终点不是更逼真的视频，而是让 Physical AI 超越训练分布。</div>

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 训练内
- 看过有限环境与动作
- 真机交互昂贵、速度慢
- 每种机器人本体都不同
- 数据分布天然碎片化
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 训练外
- 新房间、新物体、新工具
- 只示范一两次便学会
- 读说明书后操作设备
- 将相似动作迁移到新观察
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-lg">
The core problem of AI is solving generalization.
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T4522</div>
</div>

---
layout: two-cols
---

<!-- slide: 18 -->

# Cosmos 的三条泛化路径

<div class="text-xs text-blue-700 mb-3">作者概括</div>

<div class="space-y-3 text-sm mt-4">
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>Better data</strong><br/>生成现实中没采集到、但任务需要见到的数据。</div>
  <div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>Better starting point</strong><br/>用理解世界变化规律的表示，初始化 policy 等下游模型。</div>
  <div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>Better environment</strong><br/>创建可交互的高真实度虚拟环境，加速经验积累。</div>
</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs">
当前最可用的是前两条；最难、尚未真正实现的是可交互的 Matrix 式环境。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./generalization-triad.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- slide: 19 -->

# Better environment 为什么最难

<div class="text-sm opacity-70 mb-4">作者概括 · 它要求模拟不只像真实世界，还能对动作给出可信反馈。</div>

<div class="grid grid-cols-3 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 视觉逼真
视频与真实世界的 appearance gap 要足够小。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 物理一致
接触、力、时序和因果变化必须可信，不能只是内容生成。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 可交互
模型采取动作后，环境要持续返回可学习的新状态与信号。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
The most challenging of these is the better environment
<div class="mt-2 text-xs opacity-60">英文转录原话 · T2283</div>
</div>

<div class="mt-3 text-xs opacity-60">作者概括：这也是 sim-to-real gap 的另一种表达——虚拟经验必须能迁移到真实动作。</div>

---
layout: two-cols
---

<!-- slide: 20 -->

# 世界模型不是单一定义

<div class="text-xs text-blue-700 mb-3">作者概括</div>

刘洺堉不执着于统一术语。他按用途区分三类建模任务：

<div class="mt-5 space-y-3 text-sm">
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>Predict</strong>：预测下一步会发生什么。</div>
  <div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>Explain</strong>：理解事件为何发生，定位生产线等系统问题。</div>
  <div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>Reconstruct</strong>：重建 3D 世界，用于规划和虚拟体验。</div>
</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">
Cosmos 当前主要做物理世界的理解、生成与预测，而不是 3D reconstruction。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./world-model-jobs.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- slide: 21 -->

# Cosmos 是 world foundation model

<div class="text-sm opacity-70 mb-4">作者概括 · 目标不是替所有公司做完 world model，而是提供共同底座。</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-green-50 border-b-4 border-green-500">

### 下游应用
自动驾驶 · 机器人 · 工厂 · 不同本体与任务
</div>

<div class="p-4 rounded bg-blue-50 border-b-4 border-blue-500">

### 专用 world model
各公司使用自己的数据与约束，继续 post-training
</div>

<div class="p-4 rounded bg-purple-50 border-b-4 border-purple-500">

### Cosmos 底座
提供世界表示、生成、理解与 action 能力的共同起点
</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
A world model is a tool
<span class="mx-2 opacity-40">·</span>
Tools are for solving problems
<div class="mt-2 text-xs opacity-60">英文转录原话 · T3649–3650；两条分别按原文核验</div>
</div>

---

<!-- slide: 22 -->

# 从 Cosmos 1 到 3：问题逐渐收敛

<div class="text-sm opacity-70 mb-4">作者概括 · 版本不是单纯堆能力，而是对客户需求和团队执行方式的持续重构。</div>

<div class="grid grid-cols-4 gap-3 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### Cosmos 1
围绕预测、理解、迁移等需求拆出多个模型。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### Cosmos 2
改善数据，并把 policy 能力引入产品族。
</div>

<div class="p-4 rounded bg-yellow-50 border-t-4 border-yellow-500">

### Cosmos 2.5
完成已启动的中间版本，为统一路线收尾。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### Cosmos 3
音频、视频、语言与 action 汇入一个 omni-model。
</div>

</div>

<div class="mt-6 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">
从 2 到 3 是最大变化：多个团队与模型第一次真正围绕同一个统一目标协作。
</div>

---
layout: two-cols
---

<!-- slide: 23 -->

# 从 22 个模型到一个

<div class="text-xs text-blue-700 mb-3">作者概括</div>

Cosmos 1 规划阶段，刘洺堉估算可能需要 22 个模型。问题很快出现：

<div class="mt-4 space-y-3 text-sm">
  <div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><strong>用户选择困难</strong>：连团队自己都难判断 A 与 B 的边界。</div>
  <div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>维护成本爆炸</strong>：每个模型都要发布、支持、修复与继续迭代。</div>
  <div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>知识无法共享</strong>：不同任务其实都在压缩同一个世界。</div>
</div>

<div class="mt-4 text-xs opacity-60">Jensen 用 Louis Vuitton 减少陈列反而提升销量的故事，提醒团队减少选择负担。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./many-to-one.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- slide: 24 -->

# 统一模型的三层收益

<div class="text-sm opacity-70 mb-4">作者概括 · Cosmos 3 的统一不是形式美，而是能力上限与执行效率的共同选择。</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 表示层
Predict、Reason、Transfer、Policy 都在学习同一物理世界的内部表示。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 数据层
多任务数据汇入同一个 foundation model，提高数据覆盖与能力上限。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 工程层
统一开发、发布和维护路径，减少团队力量被多个产品摊薄。
</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
最让他满意的结果：合并后的模型不仅更简单，表现也超过此前每个独立模型。
</div>

---
layout: two-cols
---

<!-- slide: 25 -->

# Action 必须是一等公民

<div class="text-xs text-blue-700 mb-3">作者概括</div>

数字世界模型通常以语言或视频为中心；Physical AI 的区别在于，它必须采取动作、改变世界状态。

<div class="mt-5 space-y-3 text-sm">
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>Language</strong>：带入人类知识，也让人能够向机器表达任务。</div>
  <div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>Video + Audio</strong>：观察世界如何变化，补充接触与时序信号。</div>
  <div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>Action</strong>：把观察连接到控制，让系统真正改变环境。</div>
</div>

<div class="mt-4 p-3 rounded bg-gray-50 text-xs">My goal is not to pursue AGI<div class="mt-1 opacity-60">英文转录原话 · T2821</div></div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./multimodal-action.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- slide: 26 -->

# 双塔：当前可用解，不是终点

<div class="text-sm opacity-70 mb-4">作者概括 · Cosmos 3 用离散塔处理理解，用连续塔处理生成。</div>

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Discrete tower
- 从 vision-language reasoning 演化
- 擅长理解与 next-token prediction
- 客户可单独用领域理解数据 post-train
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Continuous tower
- 服务 Predict / Transfer / Policy 的生成
- 用 diffusion 表达连续信号
- 改变生成分布时，不必破坏理解能力
</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-4 text-sm">
  <div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>现实收益</strong>：梯度影响可分离，客户更容易部署与定制。</div>
  <div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>长期方向</strong>：继续研究能否从两塔走向一塔，但不能牺牲可用性。</div>
</div>

---

<!-- slide: 27 -->

# 大模型没有 secret sauce

<div class="text-sm opacity-70 mb-4">作者概括 · 所谓 know-how，是一条可复现但昂贵的实验链。</div>

<div class="grid grid-cols-5 gap-2 mt-6 text-center text-sm">
  <div class="p-3 rounded bg-blue-50 border-b-4 border-blue-500"><strong>1</strong><br/>提出假设</div>
  <div class="p-3 rounded bg-purple-50 border-b-4 border-purple-500"><strong>2</strong><br/>控制变量</div>
  <div class="p-3 rounded bg-orange-50 border-b-4 border-orange-500"><strong>3</strong><br/>运行实验</div>
  <div class="p-3 rounded bg-green-50 border-b-4 border-green-500"><strong>4</strong><br/>记录结果</div>
  <div class="p-3 rounded bg-yellow-50 border-b-4 border-yellow-500"><strong>5</strong><br/>积累知识</div>
</div>

<div class="mt-7 p-5 rounded bg-gray-50 border-l-4 border-gray-500 italic text-xl">
Actually, there's no secret sauce in building large models
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T2915</div>
</div>

<div class="mt-4 text-xs opacity-60">作者概括：模型开发更像实验科学。架构、目标函数、数据比例都需要逐步验证。</div>

---

<!-- slide: 28 -->

# 迭代速度来自基础设施

<div class="text-sm opacity-70 mb-4">作者概括 · 好算法重要，但可持续改进更依赖数据、算力和实验纪律。</div>

<div class="grid grid-cols-3 gap-4 mt-5 text-center">
  <div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500"><div class="text-3xl font-bold text-blue-600">数万张</div><div class="text-xs mt-2">Cosmos GPU 投入量级</div></div>
  <div class="p-4 rounded bg-green-50 border-t-4 border-green-500"><div class="text-3xl font-bold text-green-600">半年+</div><div class="text-xs mt-2">Cosmos 3 实际执行时间</div></div>
  <div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500"><div class="text-3xl font-bold text-purple-600">3.1 / 3.2</div><div class="text-xs mt-2">发布后继续补齐实验</div></div>
</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic">
I actually think iteration speed is the most important thing.
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T4682，原行带 So 前缀</div>
</div>

<div class="mt-3 text-xs opacity-60">作者概括：能用数据解决的问题先用数据；真正无法用数据覆盖的部分，再投入算法创新。</div>

---

<!-- slide: 29 -->

# 评估世界模型：三层证据

<div class="text-sm opacity-70 mb-4">作者概括 · 固定 benchmark 只是第一步，Physical AI 更依赖真实任务验证。</div>

<div class="grid grid-cols-3 gap-5 mt-6">

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### Benchmark
在固定数据集上测试质量，便于稳定复现与版本对比。
</div>

<div class="p-5 rounded bg-purple-50 border-t-4 border-purple-500">

### Arena
A/B 并排比较，让人判断哪个输出更好。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### Expert task
与真正有 pain point 的专家合作，看模型是否解决具体问题。
</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
Physical AI 的机器人、本体与任务差异更大，因此第三层证据尤其重要，也更难规模化。
</div>

---

<!-- slide: 30 -->

# 数据选择：导航易迁移，操作难迁移

<div class="text-sm opacity-70 mb-4">作者概括 · NVIDIA 不造单一机器人，因此优先寻找不同本体间可迁移的数据。</div>

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Navigation
- 核心是空间位移与旋转
- 汽车、移动机器人之间结构较接近
- 更容易收集并跨本体复用
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Manipulation
- 手、工具、接触方式差异更大
- 人类世界的大量工具为人手设计
- 数据采集者本身也拥有手
</div>

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
Cosmos 3 因而加入 egocentric data：第一人称视角，以及人手如何操作物体。
</div>

---
layout: two-cols
---

<!-- slide: 31 -->

# 大团队的难题：对齐 × 自主

<div class="text-xs text-blue-700 mb-3">作者概括</div>

组织如果只有目标一致、没有一线决策权，会被少数领导者卡住；只有自主、没有共同目标，又会各自优化局部。

<div class="mt-5 space-y-3 text-sm">
  <div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><strong>低自主</strong>：所有数据与架构决定都等少数人拍板，速度和知识上限受限。</div>
  <div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>低对齐</strong>：各团队只让自己的指标更好，形成内部赛马与架构分裂。</div>
  <div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>目标状态</strong>：每个人都能为整体模型做决定，并在错误出现时迅速纠正。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./alignment-autonomy.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- slide: 32 -->

# 200–300 人怎样看到同一幅图

<div class="text-sm opacity-70 mb-4">作者概括 · 愿景不是口号，而是分布式决策的共同坐标系。</div>

<div class="grid grid-cols-3 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 先画终局
Cosmos 3 完成前，他已经向主要负责人描述最终模型会是什么样。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 再共享信息
提高透明度，让不同位置的人拥有足够上下文，为整体做判断。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 允许犯错
害怕犯错会让人停止决策；组织要接受错误，并要求快速修正。
</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic">
while still letting everyone make decisions.
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T3437</div>
</div>

---

<!-- slide: 33 -->

# VP 仍然看代码：避免离地

<div class="text-sm opacity-70 mb-4">作者概括 · 他不追求成为最强实现者，而是拒绝失去一线问题感。</div>

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 个人机制
- 强迫自己 review 团队代码
- 持续读论文与做部分实现
- 挑战研究假设，与一线争论
- 追问每个人对项目的真实贡献

<div class="mt-3 p-3 rounded bg-white italic text-sm">I force myself to review everyone's code<div class="mt-1 text-xs not-italic opacity-60">英文转录原话 · T1920</div></div>
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 团队机制
- 每周不止 10 次关键会议
- 视频、理解等分组每周多次同步
- 让更多人参与而非单向汇报
- 在无会与全是会之间动态找平衡
</div>

</div>

---

<!-- slide: 34 -->

# Cosmos 97：用马拉松管理急事

<div class="text-sm opacity-70 mb-4">作者概括 · 当 Cosmos 1 完成后，Jensen 给出的不是短期终点，而是长期节奏。</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Pace
即使方向重要，也要控制步伐。基础模型的决策提前数月发生，无法靠临时冲刺修正。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Commitment
97 是随口说出的数字，但传达了公司愿意持续投入资源、跨版本改进的决心。
</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic text-xl">
You just keep going all the way to Cosmos 97.
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T38</div>
</div>

---

<!-- slide: 35 -->

# Prioritization：计算机科学式的懒惰

<div class="text-sm opacity-70 mb-4">作者概括 · Jensen 大量阅读邮件，不是为了掌握一切，而是持续训练重要性判断。</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 不必计算
不重要的事直接从注意力范围中删除。
</div>

<div class="p-4 rounded bg-yellow-50 border-t-4 border-yellow-500">

### 可以延后
现在不需要做的决定，保留到信息更充分时。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 必须执行
一旦确认最重要的事，后续问题转为纯粹执行。
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
作者概括：时间和能量有限，真正的效率来自删掉不值得计算的问题，而不是把所有事情做得更快。
</div>

---

<!-- slide: 36 -->

# NVIDIA 的组织操作系统

<div class="text-sm opacity-70 mb-4">作者概括 · Cosmos 能跨组织聚合资源，与三项公司机制密切相关。</div>

<div class="grid grid-cols-3 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Mission is the boss
团队不被固定汇报线锁住；任务需要谁，相关能力就围绕 mission 重组。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Top 5
员工持续写下最重要的五件事，让弱信号、重复工作与风险跨层传播。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 信任而非末位淘汰
困难期先削减旅行与工具成本；稳定感让员工敢说真话、愿意协作。
</div>

</div>

<div class="mt-6 p-4 rounded bg-gray-50 border-l-4 border-gray-500 italic text-lg">
Mission is the boss
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T4031</div>
</div>

---

<!-- slide: 37 -->

# 从 SOTA 竞争到贡献最大化

<div class="text-sm opacity-70 mb-4">作者概括 · 研究者训练自己击败 benchmark；平台负责人要让更多人成功。</div>

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 旧衡量方式
- 是否 state-of-the-art
- 是否比对手更强
- 论文、奖项与引用数
- 把同行视作要击败的人
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 新衡量方式
- 是否解决真实 pain point
- 是否帮助用户提升效率
- 是否让生态更快前进
- 是否留下更大的社会影响
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-xl">
You don't need to defeat your opponents
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T4127</div>
</div>

---
layout: two-cols
---

<!-- slide: 38 -->

# 开源是在放大生态

<div class="text-xs text-blue-700 mb-3">作者概括</div>

Cosmos 的商业逻辑不是把每个下游问题都收入自己，而是扩大 Physical AI 市场：

<div class="mt-5 space-y-3 text-sm">
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>开放模型与训练框架</strong>，降低开发者起点。</div>
  <div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>更多公司做出产品</strong>，形成机器人、汽车与工厂应用。</div>
  <div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>市场扩大</strong>，带来新的计算与平台需求。</div>
</div>

<div class="mt-4 p-3 rounded bg-gray-50 text-xs">Everything we do is open source<div class="mt-1 opacity-60">英文转录原话 · T3665</div></div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ecosystem-flywheel.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- slide: 39 -->

# 模型趋同后，差异在哪里

<div class="text-sm opacity-70 mb-4">作者概括 · 他不相信一家公司的领先会永久稳定，know-how 会随人才与生态扩散。</div>

<div class="grid grid-cols-3 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 大公司
把模型与搜索、文档、产品、反馈和分发渠道整合起来。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 创业公司
寻找大公司无法证明值得投入的窄痛点，以集中资源建立差异。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 模型团队
竞争部署成本、迭代速度、专用数据与生态协同，而非只比单一能力。
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-lg">
The model itself won't be the differentiator
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T4406</div>
</div>

---

<!-- slide: 40 -->

# Physical AI 的 ChatGPT 时刻

<div class="text-sm opacity-70 mb-4">作者概括 · 关键不是某个 benchmark，而是普通人一眼看见新能力的实际价值。</div>

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 他期待看到的产品
人类现场示范一次任务，机器人立即学会，并能在新的观察与场景中完成相似动作。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 对年轻研究者的建议
AI 不会明年突然结束。冷静判断值得投入的方向，不要让 hype 把自己的道路越挤越窄。
</div>

</div>

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic text-lg">
Don't be nervous.
<div class="mt-2 text-xs not-italic opacity-60">英文转录原话 · T4622 / T4627</div>
</div>

<div class="mt-3 text-xs opacity-60">作者概括：他希望五年后，人们已经能说清 Physical AI 的 ChatGPT 时刻发生在哪一天、哪个产品。</div>

---

<!-- slide: 41 -->

# 核心金句

<div class="text-xs opacity-60 mb-3">全部为英文转录原话；标签说明语境。每条均已固定字符串核验。</div>

<div class="grid grid-cols-2 gap-3 text-xs">
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>早期愿景</strong><br/><span class="italic">One day, the dominant computation for generating video will be deep learning.</span></div>
  <div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>研究方法</strong><br/><span class="italic">The most important part of doing research is asking the right question.</span></div>
  <div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>路线选择</strong><br/><span class="italic">something that's not scalable won't go far in the end</span></div>
  <div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>模型实验</strong><br/><span class="italic">Actually, there's no secret sauce in building large models</span></div>
  <div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>Physical AI</strong><br/><span class="italic">The core problem of AI is solving generalization.</span></div>
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>组织</strong><br/><span class="italic">Mission is the boss</span></div>
  <div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>竞争终局</strong><br/><span class="italic">The model itself won't be the differentiator</span></div>
  <div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><strong>市场观</strong><br/><span class="italic">So the model race shouldn't be Squid Game.</span></div>
</div>

---
layout: end
---

<!-- slide: 42 -->

# 做这件事很冒险

<div class="mt-8 text-3xl italic max-w-3xl mx-auto leading-relaxed">
but not doing it is even more risky.
</div>

<div class="mt-6 text-sm opacity-60">英文转录原话 · T4801</div>

<div class="mt-10 text-xs opacity-50">刘洺堉 × 张小珺 · PodDeck</div>
