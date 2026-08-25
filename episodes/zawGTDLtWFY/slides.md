---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'NVIDIA VP Ming-Yu Liu: Cosmos 3, World Models, Kung Fu, What Jensen Taught Me'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Cosmos 3：给 Physical AI 一块世界底座

<div class="text-xl opacity-80 mt-5">从 GAN、Diffusion 到 World Foundation Model</div>

<div class="mt-10 text-sm opacity-60">
张小珺 × 刘洺堉<br/>
NVIDIA VP of Research · Cosmos Lab
</div>

<div class="mt-8 text-xs opacity-50">
一场关于模型、组织、长期主义与功夫的 3.5 小时深谈
</div>

---

# 为什么这期值得看

<div class="text-sm opacity-70 mb-4">这不是一场单纯的 Cosmos 3 技术发布复盘，而是一个研究者如何把问题、模型与组织一起扩大的完整样本。</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 世界模型
Cosmos 不替客户做应用，而是提供可继续训练的 world foundation model。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 从 22 到 1
Predict、Reason、Transfer、Policy 为什么最终必须收进一个模型？
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 泛化
Physical AI 的关键不是会做奥数，而是有限示范之后能否在新场景行动。
</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-left">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Action-first
语言、视频、音频与动作各自承担什么信息，又如何彼此增益？
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 大团队协作
200–300 人如何既看到同一目标，又能在一线自主决策？
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### NVIDIA 方法
从 CUDA 式长期投入，到 Mission is the boss 与不赛马的组织文化。
</div>

</div>

---

# 十年 NVIDIA，二十年研究追问

<div class="grid grid-cols-4 gap-3 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs font-bold text-blue-700">通信起点</div>

### 无线通信
大学阶段研究传输协议；他更想寻找从 0 到 1 的问题。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-xs font-bold text-purple-700">转入视觉</div>

### 传统 CV
在 Maryland 从步态识别起步，经历什么都不工作的年代。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-xs font-bold text-orange-700">2016 加入</div>

### NVIDIA
把深度学习生成视频写进 job talk，从应用研究开始建立方向。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs font-bold text-green-700">今天</div>

### Cosmos Lab
直接团队约 80–90 人，整个 Cosmos effort 约 200–300 人。
</div>

</div>

<div class="mt-7 p-5 rounded bg-gray-50 border border-gray-200 text-left">
主线没有变：用可生成的模型理解视觉世界；变化的是算力规模、应用责任与组织复杂度。
</div>

---

# 目标：把小说直接变成电影

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 早期判断
- 视频生成的主导计算会从传统 graphics 转向 deep learning
- 数据驱动能承担大量人工控制
- 最终输入可以是一部小说，输出是一部电影
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 真正缺少的
- 不只是算法，还要有足够数据与算力
- 要让公司理解为什么值得投入
- 要敢于把远期目标当作当下项目推进
</div>

</div>

<div class="mt-7 p-5 text-xl italic border-l-4 border-red-500 bg-red-50 text-left">
“Only then did I realize my ambition wasn't big enough.”
<div class="not-italic text-xs opacity-60 mt-2">— DALL·E 出现后，他重新反思自己没有更早押注 text-to-image</div>
</div>

---

# 两次外部刺激，把目标继续推大

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### DALL·E：算力条件已经出现
他写信向 Jensen 争取 GPU，又联系 Getty Images；数据、算力与客户第一次被放进同一个 AI foundry 项目。

<div class="mt-4 text-sm opacity-70">Picasso 从论文型研究走向可交付给客户的模型产品。</div>
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Sora：决心仍然不够
曾经一起研究视频生成的 Tim Brooks 做出 Sora 后，他再次复盘自己的时机判断；随后一组研究者共同推动 world model 项目。

<div class="mt-4 text-sm opacity-70">Cosmos 在约 2024 年 3 月被正式启动。</div>
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
<strong>作者概括</strong>：技术路线不是平滑演进。外部突破会暴露团队原本不敢下注的那一步。
</div>

---
layout: two-cols
---

# 路线不断换，问题没有换

<div class="text-sm opacity-70 mb-4">刘洺堉从通信转向 CV，再从识别转向生成；每次都在寻找更接近问题本质、也更可扩展的表示。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>理解</strong><br/>识别、分割、优化，让他建立传统 CV 的完整地基。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>生成</strong><br/>GAN 让模型不仅判断 A / B，还能描述与重建信号。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>统一</strong><br/>Cosmos 把多种数据和任务压进共同世界表示。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./research-arc.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 研究先问对问题，工程把答案做出来

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Research
- 找到值得解决的问题
- 判断方向是否接近本质
- 接受答案尚未确定
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Engineering
- 把假设变成可运行系统
- 在大软件栈中定位真实瓶颈
- 证明问题与路线确实成立
</div>

</div>

<div class="mt-7 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 text-left">
“The most important part of doing research is asking the right question.”
<div class="not-italic text-xs opacity-60 mt-2">— 他对 research 与 engineering 分工的概括</div>
</div>

---

# 从 100 分工作，到让别人看见 100 分

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-4xl font-bold text-red-600">100</div>

### 实际完成度
早期 image translation 已经做出新东西。
</div>

<div class="p-4 rounded bg-gray-50 border-t-4 border-gray-400">
<div class="text-4xl font-bold text-gray-600">10</div>

### 被理解程度
技术语言没有转译成普通人能看懂的产品价值。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-4xl font-bold text-green-600">N²</div>

### 团队沟通
人数增长后，点对点沟通很快成为扩展瓶颈。
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
大模型研究要求他同时学会三件事：做应用、解释价值、让多人看到同一目标。
</div>

---

# GPU 不只是资源，也是组织说服力

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 先理解公司
研究者要说明问题为什么影响客户、平台与长期方向。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 再争取资源
算力申请本质上是一份投资论证，而不只是实验预算。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 最后交付影响
模型、基础设施与用户反馈要形成继续投入的闭环。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
他早年在 Mitsubishi 见过 blue-sky research 与公司方向脱节后收缩，因此更早意识到研究自由也需要可解释的组织基础。
</div>

---

# 算力规模的三个台阶

<div class="grid grid-cols-3 gap-5 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border border-blue-200">
<div class="text-xs opacity-60">Picasso 阶段</div>
<div class="text-4xl font-bold text-blue-600 my-3">1,000</div>
<div class="text-sm">A100 GPUs；当时把它们高效连起来本身就很难。</div>
</div>

<div class="p-5 rounded bg-purple-50 border border-purple-200">
<div class="text-xs opacity-60">Cosmos 当前</div>
<div class="text-4xl font-bold text-purple-600 my-3">数万级</div>
<div class="text-sm">GPU 数量已到 tens-of-thousands level，仍希望继续增加。</div>
</div>

<div class="p-5 rounded bg-orange-50 border border-orange-200">
<div class="text-xs opacity-60">组织责任</div>
<div class="text-2xl font-bold text-orange-600 my-3">日成本数百万美元</div>
<div class="text-sm">嘉宾将 compute 与 storage 的日成本描述为 millions of dollars。</div>
</div>

</div>

<div class="mt-6 text-sm opacity-65">算力越大，研究选择越不能只用论文指标解释。</div>

---
layout: two-cols
---

# 为什么团队放弃 GAN

<div class="text-sm opacity-70 mb-4">不是因为 GAN 没有做出好结果，而是大量实验逐渐指向同一个扩展性结论。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>并行尝试</strong><br/>多 Discriminator、算法稳定化与大量 GPU 实验都没有改变训练难点。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
“GAN is not scalable”
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>路线切换</strong><br/>约 2021 年转向更稳定的 diffusion，再走到 diffusion transformer。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./scalability-funnel.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# GauGAN：技术名字不等于用户语言

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-gray-50 border-t-4 border-gray-400">
<div class="text-xs font-bold opacity-60">论文内部名</div>

### SPADE
Spatially Adaptive Normalization 准确，却不容易让普通用户理解。
</div>

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs font-bold text-blue-700">对外命名</div>

### GauGAN
用画家 Gauguin 的联想，把技术能力转成一眼可懂的产品形象。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs font-bold text-green-700">真实结果</div>

### 用户反馈
虽然最终没进入 GTC keynote，却成为当年最受讨论的工作之一。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
研究者不只要把东西做出来，还要让外部世界知道它能做什么、为什么值得使用。
</div>

---

# Cosmos 的诞生：从 Sora 之后重新下注

<div class="grid grid-cols-4 gap-3 mt-5 text-left text-sm">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="font-bold text-blue-700">① 信号</div>
Sora 证明 video model 可以成为 world simulator。
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="font-bold text-purple-700">② 共识</div>
多位生成模型研究者共同讨论，并向 Jensen 写信。
</div>

<div class="p-3 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="font-bold text-orange-700">③ 定位</div>
项目目标不是内容创作，而是 Physical AI 的世界底座。
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="font-bold text-green-700">④ 启动</div>
约 2024 年 3 月决定推进，随后命名为 Cosmos。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
名字也参与产品定位：Cosmos 指向需要被理解和改变的物理世界，而不是一个创作工具。
</div>

---

# 为什么选择 Physical AI

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Digital AI 已高速发展
- LLM 已有强团队持续推进
- 创作型视频模型有清晰需求
- 但它们主要改变数字信息的状态
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Physical AI 改变现实状态
- 老龄化后的出行与照护
- 危险、重复、劳动密集型工作
- 家务、制造与机器人执行
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
NVIDIA 的位置是服务开发者：不运营社交网络或创作工具，而是让做机器人、自动驾驶与工厂系统的人更容易成功。
</div>

---
layout: two-cols
---

# Matrix 愿景：解决泛化的三条路

<div class="text-sm opacity-70 mb-4">刘洺堉把 Physical AI 的共同问题收敛为 generalization，并把 Cosmos 的作用拆成三类。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Better data</strong><br/>生成现实里需要、却尚未采集到的数据。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Better starting point</strong><br/>用理解世界变化的表示初始化 policy 或其他模型。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Better environment</strong><br/>在多个高真实度环境里并行交互、快速积累经验。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./matrix-three.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# World Model 不需要一个唯一答案

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Prediction
描述世界，并预测接下来会发生什么。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Understanding
解释事件为什么发生，帮助定位问题。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Reconstruction
重建 3D 世界，用于路线规划与虚拟体验。
</div>

</div>

<div class="mt-7 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50 text-left">
“A world model is a tool that helps you model the world”
<div class="not-italic text-xs opacity-60 mt-2">— 用途不同，模型形式也会不同</div>
</div>

---

# Cosmos 是 foundation，不是最后一公里

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### NVIDIA 提供
共同世界表示、开放模型、训练框架与部分合成数据。
</div>

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 客户继续做
针对自身相机、机器人构型、行业数据与任务进行 post-training。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 生态共同完成
世界模型之外仍有硬件、商业、部署与系统工程问题。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
<strong>作者概括</strong>：Cosmos 的产品边界是把昂贵的共同底座做好，让每家公司把有限资源留给自己的关键差异。
</div>

---

# 22 个模型：功能完整，用户却更难选择

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 多模型的诱惑
- 为每类客户、任务、模态各建一个模型
- 初始估算一度达到 22 个
- 每个模型都能有更专门的指标
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 多模型的代价
- 用户连 A / B 都难以选择
- 发布后每个模型都要维护与支持
- 资源被摊薄，迭代速度下降
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
Jensen 用 LV 减少陈列反而提高销售的例子提醒他：更多选择不等于更好的产品。
</div>

---
layout: two-cols
---

# Cosmos 3：四条支线收进一个世界

<div class="text-sm opacity-70 mb-4">Predict、Reason、Transfer、Policy 最终都在压缩同一个物理世界，只是观察角度不同。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>信息层</strong><br/>不同任务的数据共同提高 foundation model 的上限。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>产品层</strong><br/>一个入口降低用户选择与维护成本。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>组织层</strong><br/>原本做多个模型的团队第一次共同交付一套模型。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./models-to-one.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 从 Cosmos 1 到 3，变化不只是版本号

<div class="grid grid-cols-4 gap-3 mt-5 text-left text-sm">

<div class="p-3 rounded bg-gray-50 border-t-4 border-gray-400">
<div class="text-xs opacity-60">Cosmos 1</div>

### 多种需求
围绕 prediction、understanding 与 simulation 分别搭模型。
</div>

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs text-blue-700">Cosmos 2</div>

### 数据与 Policy
改进数据，并开始把 action / policy 纳入体系。
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-xs text-purple-700">Cosmos 2.5</div>

### 过渡版本
团队先完成既定迭代，再全面投入统一模型。
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs text-green-700">Cosmos 3</div>

### Omni-model
把 audio、video、language、action 放进共同 foundation。
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-left">
<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>当前边界</strong>：因时间限制，模型发布时尚未完全收敛。</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500"><strong>后续节奏</strong>：继续以 3.1、3.2 逐步补齐实验与能力。</div>
</div>

---

# 四种模态，各自带来不可替代的信息

<div class="grid grid-cols-4 gap-3 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### Language
人类知识与沟通接口；没有语言，人无法向模型表达需求。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### Video
高密度记录世界如何变化，比语言更直接地呈现物理规律。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### Audio
声音能提示接触发生的时刻，为视频提供时间定位。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### Action
不只观察世界，还要控制机器真正改变世界状态。
</div>

</div>

<div class="mt-7 p-5 rounded bg-gray-50 border border-gray-200 text-left">
目标不是追求抽象 AGI，而是构建适合 Physical AI 的基础模型；因此模态取舍由用途决定。
</div>

---
layout: two-cols
---

# Action 必须是一等公民

<div class="text-sm opacity-70 mb-4">数字模型可以停在理解或生成；Physical AI 最终必须把控制信号送回现实。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
语言让人能与机器沟通。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
视频与音频描述世界怎样变化。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“should also treat action as a first-class citizen”
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./multimodal-action.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 模态互相帮助，靠实验而不是口号

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Video → Action
同时预测动作后的 observation，能帮助 action policy 学得更好。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Audio → Video
接触声提供精确时刻，缩小视频生成的可能性空间。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Text → Video
描述越具体，目标分布越收敛，生成学习越容易。
</div>

</div>

<div class="mt-7 p-6 text-xl italic border-l-4 border-green-500 bg-green-50 text-left">
“Actually, there's no secret sauce in building large models”
<div class="not-italic text-xs opacity-60 mt-2">— 提出假设、控制变量、记录结果，再做下一轮实验</div>
</div>

---

# 双塔：把理解与生成先分开

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Discrete tower
- 从 vision-language reasoning 出发
- 适合理解与 next-token prediction
- 客户可只用自身领域理解数据继续训练
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Continuous tower
- 从 Predict、Transfer、Policy 出发
- 适合 diffusion 与连续生成
- 可用 video-action pairs 改变生成分布
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
梯度影响被隔离后，客户改生成侧时不容易破坏理解侧；它不够终极优雅，却更适合当前 post-training 与部署。
</div>

---

# 一塔是方向，易用性是约束

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 统一的吸引力
- 架构更简单
- 数据决定内部表示，而非人工先切类别
- 生成梯度可能帮助 reasoner 学到更好表示
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 部署的现实
- 每个机器人相机与位置不同
- 训练数据未必同时覆盖理解和生成
- 推理成本决定商业化是否可行
</div>

</div>

<div class="mt-7 p-5 text-xl italic border-l-4 border-purple-500 bg-purple-50 text-left">
“Why two towers? One tower should be enough.”
<div class="not-italic text-xs opacity-60 mt-2">— 下一步是向一塔靠近，但不能牺牲客户可用性</div>
</div>

---
layout: two-cols
---

# World Model 评估，需要三层证据

<div class="text-sm opacity-70 mb-4">Physical AI 的本体与任务差异很大，单一榜单很难回答模型是否真的解决了问题。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Benchmark</strong><br/>固定数据集，建立可重复的基础质量线。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Arena</strong><br/>把两个模型放在同一任务上做相对判断。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Experts</strong><br/>与真正拥有痛点的人合作，验证任务有没有被解决。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./evaluation-ladder.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# Physical AI 数据：先找跨本体的共同部分

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Navigation
- 汽车和机器人都在空间中位移、旋转
- 不同本体之间仍有较强共性
- 相对容易规模化收集
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Manipulation
- 手、夹爪与工具形态差异更大
- 任务需要细粒度接触与连续控制
- 数据分布更依赖具体硬件
</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">
NVIDIA 不自己做一款机器人，因此更关心哪些数据能迁移到最多 Physical AI builder。
</div>

---

# 为什么人手与第一视角特别重要

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 世界为人设计
多数工具、把手与操作流程，本来就是给人的手使用。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 人来采数据
大规模示范最容易由人完成，而人天然拥有双手。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Ego-centric 可迁移
第一视角同时包含人的观察与手部操作，更接近跨机器人共享信号。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
Cosmos 3 因此专门加入第一视角数据；灵巧手的发展也会继续扩大这类数据的价值。
</div>

---

# Physical AI 的 ChatGPT moment 是什么

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-gray-50 border-t-4 border-gray-400">

### GPT moment
人们确认 scaling 能持续提高模型能力。
</div>

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### ChatGPT moment
普通人第一次清楚看到这些能力会怎样改变生活。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### Physical AI moment
人示范一两次，机器人就在现场学会并迁移到新环境。
</div>

</div>

<div class="mt-7 p-6 text-xl italic border-l-4 border-red-500 bg-red-50 text-left">
“The core problem of AI is solving generalization.”
<div class="not-italic text-xs opacity-60 mt-2">— 从有限 observation-action 信号，迁移到没见过的场景</div>
</div>

---
layout: two-cols
---

# Sim-to-Real 不是单独的缝，而是泛化问题

<div class="text-sm opacity-70 mb-4">理想 Matrix 环境尚未实现；短期更有效的是 better data 与 better starting point。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
现实数据给出有限观察与动作。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
Cosmos 捕捉物理变化 pattern，提供更适合泛化的 prior。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
Policy 最终仍要在新 observation 下选出相似、有效的 action。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./sim-real-loop.excalidraw" class="w-[440px]" :darkMode="false" :background="false" />
</div>

---

# 模型能力会收敛，差异转向生态

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 只靠模型领先
- 当前领先很快会被下一代模型追上
- 人才与 know-how 会在行业中流动
- 单一公司永久垄断技术并不稳定
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 模型嵌入生态
- 与产品、平台、用户反馈共同迭代
- 客户成功带来更多使用与投资
- 差异来自整个系统，而非单次榜单
</div>

</div>

<div class="mt-7 p-5 text-xl italic border-l-4 border-purple-500 bg-purple-50 text-left">
“I think model capabilities will gradually converge”
<div class="not-italic text-xs opacity-60 mt-2">— 这是嘉宾的判断，不是已经被证明的行业定论</div>
</div>

---

# 创业机会，不在复制 Frontier Lab

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 危险打法
用更少资金、没有客户积累，却直接复制 OpenAI 或 Anthropic 的同类模型。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 启动机会
寻找大公司不容易证明回报、因此暂时无法优先解决的具体痛点。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 放大路径
先用差异化产品建立用户，再决定哪些模型能力值得自建。
</div>

</div>

<div class="mt-7 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50 text-left">
“you have to create markets”
<div class="not-italic text-xs opacity-60 mt-2">— NVIDIA 更愿意创造下一个市场，而不是争夺已经存在的市场</div>
</div>

---

# 200–300 人：两个条件必须同时成立

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 只有对齐，没有自治
- 所有 data mixture 与 architecture 决策都等少数人
- 领导者的知识和时间成为瓶颈
- 进度必然变慢
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 只有自治，没有对齐
- 每个小组只优化自己的模态
- 架构与目标逐渐分叉
- 组织退化成内部赛马
</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">
Cosmos 的组织设计目标：每个人掌握足够透明的信息，在共同终局下做出对整体有利的决定。
</div>

---
layout: two-cols
---

# 先画出同一张未来图，再让每个人决策

<div class="text-sm opacity-70 mb-4">在 Cosmos 3 完成前，刘洺堉已经反复向主要负责人描述最终模型的形态。</div>

<div class="space-y-3 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>共同画面</strong><br/>最终结果与早期描述约 90% 相似、10% 不同。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>允许错误</strong><br/>害怕犯错会让人不敢决策；错误出现后要快速纠正。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>信息透明</strong><br/>让一线拥有做出组织级判断所需的上下文。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./aligned-autonomy.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 沟通不是会议越少越好

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-4xl font-bold text-blue-600">10+</div>

### 每周会议
嘉宾说自己每周可能超过十场，分别与 video、understanding 等负责人高频沟通。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-4xl font-bold text-purple-600">参与</div>

### 会议目标
让会议更 engaging，让更多人暴露信息、参与判断。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-4xl font-bold text-green-600">平衡</div>

### 没有固定公式
零会议会各自为战，只有会议又无法执行；比例随阶段和任务变化。
</div>

</div>

<div class="mt-7 p-5 rounded bg-gray-50 border border-gray-200 text-left">
组织方法不是 top-down 或 bottom-up 的标签选择，而是此刻需要多少统一、多少局部判断。
</div>

---

# Jensen 教他的三种长期主义

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### First principles
把问题拆回本质，不被外部流行信号牵着走。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Prioritization
每天从大量邮件中找信号，持续训练什么重要、什么该删除。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Marathon
重要项目也要 pace；Cosmos 不是一轮发布，而是长期基础设施。
</div>

</div>

<div class="mt-7 p-5 text-xl italic border-l-4 border-orange-500 bg-orange-50 text-left">
“Don't compute what you don't need to compute”
<div class="not-italic text-xs opacity-60 mt-2">— 他把 Computer Science 的惰性原则迁移到时间与注意力管理</div>
</div>

---

# NVIDIA 的组织不是固定盒子

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Top 5
员工上报最重要的五件事，让微小信号与重复工作更早浮现。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 不轻易裁员
困难期先削减旅行、工具与云服务，换取员工安全感和真实反馈。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Mission-first
有能力贡献的人跨组织自动聚合，任务临时重塑团队边界。
</div>

</div>

<div class="mt-7 p-6 text-2xl italic border-l-4 border-red-500 bg-red-50 text-left">
“Mission is the boss”
<div class="not-italic text-xs opacity-60 mt-2">— Cosmos 本身就是多个组织围绕同一 mission 聚合的例子</div>
</div>

---

# 功夫：用全身协调练习自我校正

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 从 18 岁开始
长期练习八极拳、劈挂掌等中国武术；早期兴趣来自金庸小说。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 力量是一条链
出拳要把脚到手的传导依次放对，瞬间完成全身协调。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 训练的是校正
每天站桩、练拳；重点是纪律、能量与持续反思，不是攻击性。
</div>

</div>

<div class="mt-7 p-5 text-xl italic border-l-4 border-purple-500 bg-purple-50 text-left">
“I'm not doing this to show off great destructive power”
<div class="not-italic text-xs opacity-60 mt-2">— 功夫最终成为一种 self-improvement practice</div>
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">8 句原话均已逐条在本集 transcript 中检索确认。</div>

<div class="grid grid-cols-2 gap-3 text-left text-[11px] leading-snug">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“The most important part of doing research is asking the right question.”
<div class="not-italic text-[10px] opacity-60 mt-1">研究：问题先于工程实现</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“GAN is not scalable”
<div class="not-italic text-[10px] opacity-60 mt-1">路线：大量稳定化实验后的判断</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“A world model is a tool that helps you model the world”
<div class="not-italic text-[10px] opacity-60 mt-1">定义：用途决定模型形式</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“Actually, there's no secret sauce in building large models”
<div class="not-italic text-[10px] opacity-60 mt-1">训练：严谨实验持续积累 know-how</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
“The core problem of AI is solving generalization.”
<div class="not-italic text-[10px] opacity-60 mt-1">Physical AI：有限示范迁移到新场景</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“Mission is the boss”
<div class="not-italic text-[10px] opacity-60 mt-1">组织：任务跨越固定汇报关系</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
“You don't necessarily have to beat others”
<div class="not-italic text-[10px] opacity-60 mt-1">贡献：帮助生态进步也是价值证明</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“you have to create markets”
<div class="not-italic text-[10px] opacity-60 mt-1">战略：创造新需求，而非争夺旧市场</div>
</div>

</div>

---
layout: end
---

# 把能力留在手里，把贡献留在世界

<div class="mt-8 text-3xl italic leading-relaxed">
“What you leave behind is your impact”
</div>

<div class="mt-8 text-sm opacity-60">— Ming-Yu Liu</div>

<div class="mt-12 text-xs opacity-45">PodDeck · 张小珺 Xiaojun Podcast</div>
