---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Every product of the future will be a living system — Ronak Malde, Trajectory.ai'
info: |
  Ronak Malde 在 Latent Space 的对谈：
  从 Windsurf 的 Sui 1，到放弃 DeepMind 的收购款创办 Trajectory，
  做一个让"今天的模型不会再犯昨天的错"的 continual learning 平台。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Ronak Malde

<div class="text-xl opacity-80 mt-2">on Latent Space</div>

<div class="text-lg opacity-60 mt-6">
Every product of the future will be a living system
</div>

<div class="mt-8 text-sm opacity-60">
Trajectory.ai 联合创始人 · 前 Windsurf 研究 · DeepMind 收购后离开自立门户
</div>

<div class="mt-2 text-xs opacity-50">
~40min · 2025-12 · continual learning / SDPO / Nemotron 3 / Harvey
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Windsurf 的"2048 之夜"
Sonnet 3.5 刚出，团队围在 Verun 边上，agent 第一发就把 2048 写出来了。Ronak 说那是他职业生涯的 magical moment。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 周四交工牌，周五进 DeepMind
所有人以为是 OpenAI 收购，到了酒店发现是 Demis 在屏幕上。$2B 的 deal，那一周就走完了。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 放弃收购款再出来
Ronak 决定把整笔钱退掉去做 Trajectory。理由就一句：今天的模型，明天还会犯一样的错。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### SDPO 的小窍门
让 teacher 多看一眼"上帝视角的答案"，student 去对 log probs——不用更强的模型也能蒸馏。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Continuous LoRA
把训练当一个**操作系统**问题：共享 sampling pool + 训练 pool，8 个并发 job 跑完只要 3 个串行 job 的时间。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 三个 Stanford 室友的回响
大一第一周数学课认识，分头去了 Windsurf、DeepMind 机器人、Apple Vision Pro，三年后回来一起做。

</div>

</div>

---

# 故事的起点：一个 2048 游戏

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 那个时刻

Sonnet 3.5 刚发布，团队在 IDE 里把 agent 接上。  
Verun 让它写一个 2048。

> "we like we saw the agent and it just like **first shot made the game** and that was like that mind-blowing experience."

</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 为什么记这一段

Ronak 说他和团队"**circling around Verun**"看着屏幕——这是他用来定义"AI 终于能干活了"的私人坐标。

Windsurf 后面所有产品决策、Sui 1、放弃收购款，都接着这一刻往下走。

</div>

</div>

<div class="mt-6 text-sm opacity-60">
事实：Sonnet 3.5、2048、first-shot 都是嘉宾原话；情绪解读是作者概括。
</div>

---

# 加入 Codium 的那个赌

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 本来的去处

Stanford 硕士刚念完，Google 那边给了一个 **Gemini post-training** 的 offer。  
"That was kind of the status quo."

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 选择团队而不是大厂

"It's all about the team. It's all about moving fast."

一个 thesis：下一波突破要么来自数学，要么来自代码——**某种结构化的信号**。

> "I had this thesis that it was either going to be **math or coding**, some sort of structured information that gets us to the next leap in AI."

</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

而代码这个方向，又比数学**更容易商业化**——这是嘉宾自己加的注脚，也是他选择 Codium 的副因。

</div>

---

# Sui 1：用 agent 信号反过来训模型

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一开始是 autocomplete
Codium 阶段的模型只学"补全 / 接受 / 拒绝"的小信号——经典的代码补全玩法。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Agent 时代信号变了
agent 帮人**搭整个网站、整个 app**，过程里产生的信号比补全丰富一个数量级。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 自己练 foundation model
他们做了内部代号 **Sui 1** 的 foundation model，把所有用户/agent 信号都喂进去 post-train。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 这是公司决定性的解锁
> "We were able to post train on all of that user signal and now beat the frontier."

接下来 Sui 1.5、Sui 2 由 Cognition 继续做。

</div>

</div>

---

# 大家以为是 OpenAI，结果是 Demis

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-lg">

"we get a a text before from our CTO Douglas and he's just like meet me in this hotel conference room like tomorrow morning and don't tell anyone else. I'm like this is so suspicious..."

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 当时新闻面
"everything had been leaked that it was going to be **open AI acquiring** us." 大家在脑里已经准备好和 Sam Altman 握手了。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 实际剧本
"we go there and it's it's like **Demis** on the call and then like all of the like deep mind Google people."

幕后推手是 Sergey——后来 Antigravity 发布视频里也有他。

</div>

</div>

---

# 那一周的 deal 节奏

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 周四上午
酒店会议室，Demis 在 Zoom 里。  
"we gave up like all of the like badges, computers to win surf"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 周五
进 Deep Mind 正式入职。新闻同天放出。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 下周一
**Cognition** 接盘 Windsurf 剩下的部分。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 收购总规模
$2 **billion**

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

事后他对 DeepMind 的判断：他们意识到光有模型不够，**还得知道用户在产品里实际做什么**。所以才愿意为 Windsurf 这种"用户信号工厂"砸钱。

</div>

---

# 为什么放弃 $2B 出来重做一遍

<div class="mt-6 p-6 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40 italic text-xl">

"the model that you used yesterday, it's going to be the **same model making the same mistakes tomorrow**. All of those corrections you gave it, the edits ... is all just being put to waste."

</div>

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 静态的 AI
当前所有"AI 产品"和普通软件本质一样：模型冻结、行为不变、纠正被丢进垃圾桶。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 有过补丁的少数家
Sui 1、Cursor Composer、Claude Code——这几家开始**把模型围绕产品和真实用户行为构建**。

</div>

</div>

<div class="mt-4 text-sm opacity-60">
（原文嘉宾说 "cloud code"，应为 YouTube 字幕把 Claude Code 转录错了。）
</div>

---
layout: two-cols
---

# 静态产品 vs 活的产品

每个产品都该长成一个 living system：用户每改一次，agent 下次就少犯一次错。

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

**红线**：纠正 → 模型冻结 → 信号丢失

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**绿线**：纠正 → trajectory → judges/evals → 更聪明的模型 → 回到产品

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

把"continual learning"当成一种**产品形态**而不是研究 demo——这是 Trajectory 的核心赌注。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./static-vs-living.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 三个 Stanford 室友

大一第一周数学课认识，毕业之后各奔东西，三年后回来一起做 Trajectory。

<div class="mt-3 space-y-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Ronak** · Codium → Windsurf · Sui 1 foundation model

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Michael** · DeepMind proper · Gemini 1.5 robotics release，曾带 thinking team

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Arjun** · Apple Vision Pro · core interaction models，day-one 发车

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

主持人调侃："It's almost like you planned this." Ronak 笑着没否认。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cofounders.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 三个方向其实指向同一件事

<div class="mt-8 p-6 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 italic text-lg">

"all of us were kind of working on how AI interacts with the real world right through either coding robotics with ARVR."

</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Coding
agent 在 IDE 里写代码 / 改代码

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Robotics
机器人在物理世界里抓东西

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### AR/VR
模型在视野里识别和反应

</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

三种界面，**同一个核心问题**：怎样让人在场，怎样让模型从被纠正这件事本身学习。"continual learning is kind of the ultimate paradigm to do that."

</div>

---

# Trajectory 这个数据单位

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 概念
把每家公司里散落的数据——agent 行动、用户修改、专家校正——**蒸馏成一种统一格式**，他们就管这个格式叫 *trajectory*。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 用途
一个 trajectory 同时是 evals 的原料、judges 的原料、environments 的原料——也是训练的原料。

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic">

"a self-serve platform to optimize the agent, the model, the harness, everything. Right now, we're starting with the model."

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-center text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>更快</strong></div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>更便宜</strong></div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>更准</strong></div>

</div>

---

# 第一个 marquee：Harvey + Nemotron 3 Super

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Why Harvey
法律是**受监管行业**，他们一直在追"**sovereign intelligence**"——自己有模型权重而不是租来的。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Why Nemotron 3
12B 参数的 NVIDIA 开源模型；同尺寸下比一年前的 GPT-OSS 高一截。"Nvidia is investing a ton of money."

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

Trajectory + Harvey 的 paralegal/lawyer 团队，在以下五个法律工作流维度全部跑赢基线：

</div>

<div class="mt-4 grid grid-cols-5 gap-3 text-center text-xs">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">issue<br/>spotting</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">analysis</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">explanation</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">citation /<br/>reference</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">completeness<br/>coverage</div>

</div>

---

# 法律行业为什么不能"差不多"

<div class="mt-8 p-6 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40 italic text-xl">

"getting 80% of the way there is the same thing as zero."

</div>

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 在 coding 里
80% 也能用——开发者会自己补 unit test、把 button 拖到对的位置。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 在 legal / finance / healthcare
最后那 20%——比如 issue spotting 漏一条款——把整个交付**清零**。这正是 expert correction 信号格外贵的原因。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

所以续学不光是为了"模型再好一点"，而是为了把这 20% 的人工补丁**自动吸收回模型**。

</div>

---

# 从 3 个月到 1 周

<div class="grid grid-cols-3 gap-6 mt-8 text-center">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 第一家客户
<div class="text-4xl font-bold text-red-600 my-3">3 months</div>
<div class="text-xs opacity-70">"we were kind of <strong>building the airplane as it was flying</strong>"——一边搭基础设施一边训。</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 第二轮 Harvey
<div class="text-4xl font-bold text-orange-600 my-3">&lt; 1 month</div>
<div class="text-xs opacity-70">同样的工作流再训一版，时间缩到一个月以内。</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 最新一家
<div class="text-4xl font-bold text-green-600 my-3">1 week</div>
<div class="text-xs opacity-70">"within a week we were able to train a model and really get the flywheel going."</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

合作过的公司：**Clay · Harvey · Rogo · Decagon · Mercor**——基本上是 AI-native 这一档里最贵的 logo。

</div>

---

# 开源模型这盘棋

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 中国侧的现状
"obviously **China has been like killing it with models** ... one trillion parameter models like Kimi ... amazing models like GLM and Deepseek."

DeepSeek V3 出来那一刻被 Ronak 当作"开源追上来"的标志。GRPO 也是 DeepSeek 开源给世界的。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 西方侧的现状
"I don't think we're quite there yet for that size of model."

但 Nvidia 砸了非常多钱，Nemotron 比一年前的 GPT-OSS 进步明显——西方的开源也在追。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

为什么 Trajectory 把开源放进核心栈：**legal / finance / healthcare 不允许把数据丢给闭源 API**——open weights 是这些行业的必要条件。

</div>

---
layout: two-cols
---

# 数据策展的真问题

不是"thumbs up / thumbs down"——那是噪声。

<div class="mt-3 space-y-2 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

> "When is the last time you put a thumbs up thumbs down in cursor or **Claude Code** never, right?"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

> "everyone's kind of **vibe accepting everything**."

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

真正有用的信号，是**用户对 agent 输出的修改**：

- 把按钮挪到左边
- 改了 class 结构
- 让 lawyer 补一段 research

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

这些信号天然分布在产品里，每家公司**储存格式都不一样**——Trajectory 的活就是把它们抽成统一 trajectory。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./static-vs-living.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# RL 为什么不够

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### RL 现在的做法
agent 探索一堆 trajectory，最后给一个 reward 数字。

> "this entire trajectory was really good. this entire trajectory is really bad."

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 问题
真实世界的纠正信号是**文字 / 修改 / 修订**——RL 把它们都压成一个标量。

> "putting it into just one number which is really broken."

</div>

</div>

<div class="mt-5 p-5 rounded bg-green-50 border-l-4 border-green-500">

### 出路
需要一种能直接"对着文字学"的算法。Trajectory 押的那个叫 **SDPO**：scaling up self-distillation policy optimization。

</div>

---
layout: two-cols
---

# SDPO：让 teacher 偷看一眼

经典的蒸馏假设：teacher 比 student 聪明。  
SDPO 的反直觉点：**让 teacher = student**——但 teacher 偷看一眼"上帝视角的答案"。

<div class="mt-3 space-y-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Student**：现在生产环境跑的那个模型。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Teacher**：同一个模型，但 prompt 里塞了来自 production 的 **smart hint**。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**训练目标**：让 student 的 log probs 去对齐 teacher 的——文字级监督，不再是单一标量。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**结果**：在 Mercor 出的 Apex agents benchmark 上收敛速度比 GRPO 风格训练快很多。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sdpo.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# SDPO 的隐藏意义

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"let me give the teacher a **smart hint**. Then we match the student log probs to that teacher information."

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 不需要更大的模型
端侧的 12B 模型就能自我蒸馏——不依赖"先拉一个 GPT-4 来打 label"那种昂贵流程。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 直接吃 off-policy 数据
他们在论文里加了"训练 production 真实数据而不一定是当前模型自己出的 rollout"的能力——更适合生产环境。

</div>

</div>

<div class="mt-4 text-sm opacity-60">
他自己评价："very exciting kind of modifications and scaling it up. It's been done in a lot of academic cases but no one's actually been able to scale it up to real world use cases."
</div>

---
layout: two-cols
---

# 训练正在变成一个**操作系统**问题

slurm 时代：起一个 job → 拉 GPU → 训完 → 释放。  
Continual learning 不是这样的——data 一直在进，job 在重叠。

<div class="mt-3 space-y-2 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**串行**：四个 job 一个一个跑，wall-clock 直接累加。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Continuous LoRA**：把训练池和采样池**独立池化**，job 之间复用资源。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

2 个并发 → wall-clock 砍半  
8 个并发 ≈ 3 个串行 job 的时间

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

正在往 16 个并发 + 235B 模型 push——已经和 Berkeley Sky RL Lab、Anyscale **开源**。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./continuous-lora.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 主持人那句神补刀

<div class="mt-10 p-8 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 italic text-2xl text-center">

"as a operating systems fan ... you see like very similar like scheduler type problems, **starvation preemptive scheduling** ..."

</div>

<div class="mt-10 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Ronak 的回应
"training up until now has been a very research problem ... suddenly now like training is becoming **more production**."

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 作者概括
OS 课的那套——调度、抢占、starvation、shared pool——开始反过来给**模型训练栈**当蓝本。研究/工程边界正在消失。

</div>

</div>

---

# Act 2：让 PM 自己拨模型

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"a PM should ... be able to say hey okay here's where my agent is really good here are the areas where it's still failing and now all I have to do is just like modify the model modify like all of the pieces and suddenly **tomorrow I wake up and I have a smarter model** that I can see in production."

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Legible
observability 工具讲人话，PM 看得懂

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Controllable
"give them control"——产品经理直接拨模型

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Continuous
睡一觉醒来模型变聪明——产品本身就是训练流水线

</div>

</div>

---
layout: two-cols
---

# 三段式客户战略

Trajectory 给自己画了一条客户阶梯。

<div class="mt-3 space-y-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Stage 1 · AI-native**：今天的 Clay / Harvey / Rogo / Decagon / Mercor。问题已经清楚，给他们装平台就行。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Stage 2 · 科技存量**：Airtable、Notion 这类——产品成熟、但还没有"模型一直在学"的能力。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Stage 3 · Fortune 500**：Walmart 量级。问题更大、流程更乱。需要**真正的 continual learning**——只装 observability、然后从用户行为里**反着把 agent 长出来**。

</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

跨越每一档的代价：算法、infra、还有 PM 的可读界面，三件事都得到位。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./customer-ladder.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 接下来要训的不只是模型

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 现在
Trajectory 平台的优化对象：**模型权重**。已经能把 trajectory → 训练 → 部署跑通。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 接下来
"very soon I want to be also improving the **harness**, improving **skills**, doing maybe even the **memory layer** as well."

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic">

"no one really knows what it means to train the harness and the model together right and I think there's very interesting research there and what that looks like."

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

模型 · prompt/harness · skills · memory——他想把这四层都拉进同一个续学优化循环。这也是 "continual learning is the next major unlock" 这句话真正的范围。

</div>

---

# 11 个人，从哪儿来

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Research
- OpenAI
- Meta Super Intelligence
- Amazon AGI
- DeepMind（co-founder）
- Apple（co-founder）

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Product / Infra
- Stripe（后端 SDK）
- Figma（界面设计）

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic">

"we think of ourselves as a **product company and a research lab** ... no one's really made the product for when intelligence is just getting smarter every single day."

</div>

<div class="mt-4 text-sm opacity-60">
事实：11 人，名单来自访谈原话；研究与产品双轨是 Ronak 自己定义。
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期访谈里最值得记住的几句话：</div>

<div class="space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"the model that you used yesterday, it's going to be the same model making the same mistakes tomorrow."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 为什么要重做一遍 AI 产品</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"first shot made the game and that was like that mind-blowing experience."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Sonnet 3.5 + 2048 + 围在 Verun 边上</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"getting 80% of the way there is the same thing as zero."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 法律/金融/医疗为什么需要真续学</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"when is the last time you put a thumbs up thumbs down in cursor or Claude Code, never ... everyone's kind of vibe accepting everything."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 信号设计的反直觉</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"training is becoming more production ... requires a training stack that is built with a systems level or engineering kind of mindset."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 训练 ≈ 操作系统问题</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"tomorrow I wake up and I have a smarter model that I can see in production."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Trajectory 想给 PM 的体验</div>
</div>

</div>

---
layout: end
---

# "now is the time of continual learning."

<div class="mt-8 text-sm opacity-60">
— Ronak Malde · Trajectory.ai · Latent Space, 2025
</div>
