---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Andrej Karpathy — "We''re summoning ghosts, not building animals"'
info: |
  Andrej Karpathy 在 Dwarkesh Podcast 的长访谈。为什么是"智能体的十年"而非
  "智能体的元年"；我们造的不是动物而是幽灵；RL 是"用吸管吸取监督信号"；
  自动驾驶式的"九分进军"；以及他为什么离开前沿实验室去做教育。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# We're summoning ghosts, not building animals

<div class="text-lg opacity-80 mt-4">Andrej Karpathy 谈智能体的十年、幽灵般的智能，与教育的未来</div>

<div class="mt-10 text-sm opacity-60">
Andrej Karpathy · 帮助创建 OpenAI、曾领导 Tesla 自动驾驶<br/>
Dwarkesh Podcast · 2025
</div>

<div class="mt-8 text-xs opacity-50">
他在 AI 领域已近 15 年，见过两三次"地震式"范式转移。<br/>
这期对谈是一份冷静的"祛魅"——既不唱衰，也不吹泡沫。
</div>

---

# 为什么这期值得看

<div class="text-sm opacity-70 mb-4">一次约一个半小时的对谈，把"AI 还差多远"这件事拆成可验证的部件——既不悲观，也不亢奋。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 智能体的十年
不是元年。早期智能体很惊艳，但要补的课要花一个十年。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 幽灵，不是动物
我们不在做进化，而在模仿互联网——造出的是数字幽灵。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### RL 很糟糕
"用吸管吸取监督信号"——把一个最终分数广播到整条轨迹。

</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 九分进军
自动驾驶教给他的：每多一个 9，都是同样多的工作量。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 不是智能爆炸
我们早已身处爆炸中——AI 只是同一条指数曲线的延续。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 为什么去做教育
他怕的是 WALL-E 式的未来——人类被晾在一边。

</div>

</div>

---

# 智能体的"十年"，不是"元年"

<div class="text-sm opacity-70 mb-4">这句话本身是一个"反应"——针对业界"今年就是智能体元年"的过度预测。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 已经很惊艳
Claude、Codex 这类智能体他每天都在用，"极其令人印象深刻"。

</div>

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40">

### 但还有大量工作
"我的反应是，我们还要和这些东西一起干上十年。"

</div>

</div>

<div class="mt-6 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">
"In my mind, this is more accurately described as the decade of agents."
</div>

<div class="mt-4 text-sm opacity-70">
为什么是十年、不是一年、也不是五十年？他说这来自近 15 年从业的"直觉外推"——<br/>
问题是<strong>可解的、可攻克的，但依然困难</strong>。把它平均一下，感觉就是一个十年。
</div>

---

# 为什么今天还不能把它当"实习生"

<div class="text-sm opacity-70 mb-4">想象你要雇一个像 Claude 或 Codex 这样的智能体当员工——为什么今天还做不到？</div>

<div class="p-5 mb-5 text-lg italic border-l-4 border-red-500 bg-red-50 bg-opacity-30">
"The reason you don't do it today is because they just don't work."
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

### 智能不够
"They don't have enough intelligence."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-400">

### 多模态不够
看不懂屏幕，不能做 computer use。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 没有持续学习
"You can't just tell them something and they'll remember it."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 认知上有缺陷
"They're cognitively lacking and it's just not working."

</div>

</div>

<div class="mt-5 text-sm opacity-70">
<strong>作者概括</strong>：这些不是一个 bug，而是一整张"待办清单"——每一项都要时间逐个攻克。
</div>

---
layout: two-cols
---

# 15 年，三个大桶

Karpathy 把自己经历的 AI 史归成三段——而中间那段，是<strong>一次次"太早"地扑向智能体</strong>。

- **按任务训网络**：AlexNet 之后，一个网络做一个任务（图像分类、机器翻译）
- **智能体第一轮**：2013 的 Atari 深度强化学习、OpenAI 的 Universe 项目——他自己做的是"用键鼠操作网页"的智能体
- **LLMs**：先拿到表征能力，再往上叠智能体

他对 Universe 的总结：<strong>"so early that we shouldn't have been working on that."</strong>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-history.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 太早扑向智能体，错在哪

<div class="text-sm opacity-70 mb-4">把键鼠乱按、在环境里乱撞着拿奖励——为什么注定学不到东西？</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40">

### 奖励太稀疏
"your reward is too sparse and you just won't learn."

只是乱撞，你会"烧掉一整片森林的算力"，却什么都起不来。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 缺的是表征能力
今天训练 computer-using agents，是<strong>建在大语言模型之上</strong>的。

"You have to get the language model first, you have to get the representations first."

</div>

</div>

<div class="mt-6 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">
顺序很重要：先把预训练、把 LLM 那一摞做完，<strong>才能</strong>在上面叠智能体。
</div>

---
layout: two-cols
---

# 动物，还是幽灵

Sutton 的框架是"我们要造动物"。Karpathy 很谨慎地拒绝这个类比。

- **动物**靠进化而来，自带大量"出厂硬件"——斑马出生几分钟就能跟着母亲跑，那不是 RL，是"baked in"
- 我们<strong>没有在跑进化这个过程</strong>，所以不该从它取经
- 我们在做的是"通过模仿人类、模仿互联网数据"来训练

于是得到的是一种全新的、飘忽的、纯数字的智能。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./animals-vs-ghosts.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "我们在造幽灵"

<div class="mt-8 p-8 text-2xl italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 text-center">
"We're not building animals.<br/>
We're building ghosts or spirits or whatever people want to call it."
</div>

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 预训练 = "蹩脚的进化"
"That's why I call pre-training this crappy evolution."

它是我们用现有技术能做到的、<strong>实际可行</strong>的那个版本——把你带到一个有内置知识的起点。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 但可以更"动物"一点
"it's also possible to make them a bit more animal-like over time, and I think we should be doing that."

</div>

</div>

---

# 预训练同时在做两件事

<div class="text-sm opacity-70 mb-4">把"下一个 token 预测器"训练进神经网络时，发生了两件互不相干的事。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">

### ① 吸收知识
它"捡起"了互联网上的全部知识。

但 Karpathy 说：<strong>"You don't need or want the knowledge."</strong> 它反而拖累了网络——让模型过度依赖记忆。

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### ② 变得智能
通过观察互联网里的算法模式，它"启动"了一堆小电路——in-context learning 等等。

这才是我们想要的部分。

</div>

</div>

<div class="mt-6 p-4 text-base italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">
他想要的是"<strong>cognitive core</strong>"——一个被剥离了知识、但保留了智能与解决问题之"魔法"的实体。
</div>

---
layout: two-cols
---

# 权重 vs 上下文：两种记忆

为什么"把整章书喂进上下文"比"让模型回忆这本书"效果好那么多？

- **权重**里的东西，是"a hazy recollection of what you read a year ago"——压缩极其剧烈（15 万亿 token → 几十亿参数）
- **上下文窗口 / KV cache** 里的东西，是"working memory"，对网络<strong>直接可达</strong>
- 每个 token 携带的信息量：预训练 ~0.07 bits，KV cache ~320 KB

他算了一笔账：这是约 <strong>3500 万倍</strong>的差距。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./memory-types.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 缺失的"脑区"

<div class="text-sm opacity-70 mb-4">Karpathy 强调这些类比都不完美——但它们"surprisingly good"。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ✓ 已经有的
**Transformer ≈ 皮层组织**——极其通用、可塑，音频视频文本都能学。

**推理 / thinking traces ≈ 前额叶皮层**。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

### ✗ 还没有的
**海马体**在哪？不清楚。

**杏仁核**——情绪与本能——大概也还没复刻。

还有一堆古老的脑核没碰过。

</div>

</div>

<div class="mt-5 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">
"You can look at it as not all the brain parts are checked off yet." —— 它还不是一个完整的实体。
</div>

---

# 没有"睡眠"，没有蒸馏

<div class="text-sm opacity-70 mb-4">人类醒着时积累一个"上下文窗口"——但睡觉时会发生一些神奇的事。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-40">

### 人类
醒着积累上下文 → 睡觉时<strong>蒸馏进权重</strong>

"There's some process of distillation into the weights of my brain."

</div>

<div class="p-5 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40">

### 大语言模型
"These models don't really have a distillation phase."

每次开机、零 token，"always restarting from scratch where they were."

</div>

</div>

<div class="mt-6 text-sm opacity-75">
他设想的方向：也许是<strong>每个人一个 LoRA</strong>——不是全权重网络，而是被改动的一小撮稀疏权重。<br/>
再加上人类那种"非常精巧的稀疏注意力"——DeepSeek v3.2 的 sparse attention 已是早期苗头。
</div>

---

# nanochat：一个"通往知识的坡道"

<div class="text-sm opacity-70 mb-4">他刚发布的仓库——约 8000 行代码，端到端覆盖构建一个 ChatGPT 克隆的全流程。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 怎么用它学
放在右边显示器上，<strong>从头自己写</strong>。

"You're not allowed to copy-paste, you're allowed to reference."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么从头写
"There's the high-level surface knowledge"——但从零构建会逼你直面"你不知道你不知道的东西"。

</div>

</div>

<div class="mt-6 p-5 text-xl italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 text-center">
"If I can't build it, I don't understand it." <span class="text-sm not-italic opacity-60">—— 他说这是费曼的话</span>
</div>

---

# 人和代码相处的三种方式

<div class="text-sm opacity-70 mb-4">Karpathy 说现在大致有三类。他自己处在中间那一档。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### ① 完全拒绝 LLM
全部从零手写。

<div class="text-xs opacity-70 mt-2">"probably not the right thing to do anymore."</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-300">

### ② 自动补全（他在这）
还是自己当架构师，但用 autocomplete，敲几个字就 tab 过去。

<div class="text-xs opacity-70 mt-2">"a very high information bandwidth to specify what you want."</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### ③ Vibe coding / 智能体
"Hi, please implement this"，回车，让模型干。

<div class="text-xs opacity-70 mt-2">在特定场景下好用。</div>

</div>

</div>

<div class="mt-6 text-sm opacity-75">
智能体擅长什么？<strong>样板代码</strong>、互联网上反复出现的东西。<br/>
nanochat 恰恰不是——"It's intellectually intense code"，每一处都必须精确安排。
</div>

---

# 为什么编码智能体在 nanochat 上栽了

<div class="text-sm opacity-70 mb-4">他在 Twitter 上说编码模型对组装这个仓库"帮助很小"。具体是怎么个不行法？</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

### 误解你的代码
他没用 PyTorch 的 DDP 容器、自己写了梯度同步——模型"非常担心"，反复想让他用回 DDP，"couldn't internalize" 他有自己的实现。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-400">

### 过度防御 + 臃肿
"They make all these try-catch statements." 一直想把它做成生产级代码库，还频繁用<strong>废弃的 API</strong>。

</div>

</div>

<div class="mt-6 p-5 text-xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 text-center">
"It's just not net useful." —— 我能进去清理，但净收益是负的。
</div>

<div class="mt-4 text-sm opacity-70">
他也指出模型确实有用的地方：<strong>生成报告</strong>（样板化）、<strong>把 tokenizer 改写成 Rust</strong>（他不熟 Rust，而网上 Rust 代码多）。
</div>

---

# "没被写过的代码"——为什么这关系到智能爆炸

<div class="text-sm opacity-70 mb-4">主流的"AI 快速通向超级智能"叙事，靠的是 AI 自动化 AI 研究本身。</div>

<div class="p-5 mb-5 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">
"They're not very good at code that has never been written before"——而这恰恰是我们造这些模型时要做的事。
</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 论文里有那些技巧啊？
"They know, but they don't fully know."

他们有一些知识，但还没到能<strong>整合进你的仓库、你的风格、你的假设</strong>的地步。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 他对业界的判断
"the industry is making too big of a jump and is trying to pretend like this is amazing, and it's not. It's slop."

</div>

</div>

<div class="mt-5 text-sm opacity-70">
<strong>作者概括</strong>：这正是他时间线更长的原因——AI 最不擅长的，恰好是"自我加速"所需要的那种能力。
</div>

---
layout: two-cols
---

# RL：用吸管吸取监督信号

强化学习"比一般人以为的糟糕得多"。以解一道数学题为例：

- 并行尝试上百次，每次都是复杂的"试这个、试那个"
- 对答案，发现其中 3 次对了、97 次错了
- 于是把<strong>对的那几条轨迹里的每一个 token 全部上调</strong>——"do more of this"

问题：哪怕你走过错误的小巷、最后碰对了，那些错误步骤<strong>也会被一起上调</strong>。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./supervision-straw.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "一个人绝不会这么做"

<div class="mt-6 p-8 text-2xl italic border-l-4 border-green-600 bg-green-50 bg-opacity-30 text-center">
"you're sucking supervision through a straw ...<br/>
It's just stupid and crazy. A human would never do this."
</div>

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

### 人不会做上百次 rollout
而且找到解后，人会有一个"<strong>复盘</strong>"过程——这部分我做得好、那部分不好、下次该怎样。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 当前 LLM 没有这个等价物
"There's nothing in current LLMs that does this." 但他说相关论文正在冒头——因为这对业内每个人都很显然。

</div>

</div>

<div class="mt-5 text-sm opacity-70">
他对 RL 的整体评价：它依然糟糕——只是<strong>"之前的一切（纯模仿）更糟"</strong>而已。
</div>

---

# 过程监督为什么这么难

<div class="text-sm opacity-70 mb-4">既然"只在最后给一个分"很蠢，为什么不每一步都打分？因为信用分配（credit assignment）非常棘手。</div>

<div class="p-4 mb-5 rounded bg-orange-50 border-l-4 border-orange-500">
各实验室的做法：用 <strong>LLM 当裁判</strong>，给它一个学生的部分解，问"做得怎么样"。
</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40">

### 裁判是可被钻空子的
LLM 裁判有上万亿参数，是"gameable"的。你对它做 RL，几乎必然会找到对抗样本。

"You do maybe 10 steps or 20 steps ... but you can't do 100 or 1,000."

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-40">

### "dhdhdhdh" 的故事
一次训练里，奖励突然爆表、"完美"了。可一看输出——前面还正常，后面全变成"dhdhdhdh"。

那串乱码恰好是裁判模型的对抗样本，被赋了 100% 概率。

</div>

</div>

<div class="mt-4 text-sm opacity-70">
"You're basically training the LLM to be a prompt injection model." 对抗样本有无穷个——补一个，新模型又有新的。
</div>

---

# 模型坍缩：ChatGPT 只会三个笑话

<div class="text-sm opacity-70 mb-4">为什么不能让模型生成"合成数据"然后训练自己？因为模型的输出是"silently collapsed"的。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40">

### 悄悄坍缩
单看任何一条样本都"看起来很好"。但它们只占据了"可能思维空间里极小的一块流形"。

最简单的验证：让 ChatGPT 讲个笑话——"It only has like three jokes."

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 人类更吵，但不偏
人类噪声大，但"at least they're not biased"——保留了大量的熵。

孩子会说出让你震惊的话，因为<strong>他们还没过拟合</strong>。

</div>

</div>

<div class="mt-6 p-4 text-base italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">
"Humans collapse during the course of their lives." —— 我们也会反复回到同样的想法、说越来越多同样的话。生活里必须主动寻找熵：和别人聊天就是很好的熵源。
</div>

---

# 认知核心要多少 bit？

<div class="text-sm opacity-70 mb-4">"放在冯·诺依曼探测器上送出去的那个核心，得多大？"</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 曾经
"scaling-pilled"——万亿参数

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-300">

### 现在
最先进的模型<strong>更小了</strong>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 他的猜测
认知核心也许 <strong>~10 亿参数</strong>就够

</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40">

### 为什么模型这么大
因为训练数据是互联网——"the internet is so terrible"。随便一篇文档是"total garbage"、股票代码、海量 slop。

"Most of that compression is memory work instead of cognitive work."

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-40">

### 想要的是哪部分
删掉记忆，留下认知。一个 10 亿参数的模型，他觉得 20 年后"你可以和它进行非常有效的对话"——不知道的事它会去查。

</div>

</div>

---

# AGI 与经济：那些"让步"

<div class="text-sm opacity-70 mb-4">OpenAI 创立时的 AGI 定义：一个能以人类水平或更好完成任何有经济价值任务的系统。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 第一个让步
大家立刻把"体力活"拿掉，只谈数字知识工作。

按他的估计，纯知识工作约占经济的 <strong>10%–20%</strong>——但即便如此，在美国也是几万亿美元的盘子。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 放射科医生的反例
Geoff Hinton 曾预测放射科医生会消失——"turned out to be very wrong"。

这是一份"messy, complicated"的工作，有大量界面、要和病人打交道。

</div>

</div>

<div class="mt-6 p-4 text-base italic border-l-4 border-green-500 bg-green-50 bg-opacity-30">
他更想观察的早期自动化对象是<strong>呼叫中心员工</strong>：任务序列简单、每个任务相似、上下文封闭、纯数字——"more closed, more understandable, purely digital."
</div>

---
layout: two-cols
---

# 不是"替换",是自动化滑块

Karpathy 不期待"瞬间替换人"。他期待的是一个滑块。

- AI 承担 ~<strong>80% 的工作量</strong>
- 把 20% 委派给人类
- 人类去<strong>监督</strong>——"humans are supervising teams of five AIs"

他会去寻找的信号：新的接口、新的公司，提供一个"管理这些还不完美的 AI"的层。

然后他预期这种模式会铺遍整个经济。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./autonomy-slider.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么"编码"第一个被吃掉

<div class="text-sm opacity-70 mb-4">一个"通用"的 AGI，按 API 收入看却<strong>压倒性地只在做编码</strong>。这其实很反常。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 编码天然适配 LLM
代码<strong>本质上就是文本</strong>——终端、文本，一切都围着文本转。LLM 是完美的文本处理器。

而且基础设施是<strong>预先建好的</strong>：IDE、diff——智能体改了代码，diff 立刻能展示出来。

</div>

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40">

### 幻灯片就难得多
"slides are not text"——是图形、是空间排布、有视觉成分。

没有"展示 diff"的基础设施。"There's nothing that shows diffs for slides. Someone has to build it."

</div>

</div>

<div class="mt-5 text-sm opacity-70">
但他也承认这不能完全解释：Dwarkesh 提到，连"纯语言进、语言出"的任务（改写转录稿、做间隔重复卡片）也很难让 LLM 产生经济价值。"It doesn't mean that all text is trivial."
</div>

---
layout: two-cols
---

# 我们早已身处"智能爆炸"

Dwarkesh 问：有了真正的 AGI，会看到智能爆炸吗？Karpathy 的回答让人意外——

- "we're in an intelligence explosion already and have been for decades"
- 那条 GDP 指数曲线，就是横跨无数行业的"指数加权和"
- 你<strong>在 GDP 里找不到计算机，也找不到 iPhone</strong>——技术扩散太慢，全被平均进了同一条指数

从太空看，地球正处在一场"firecracker event"中央——只是我们以慢动作在看。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./intelligence-explosion.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 它会"炸开"吗——一场分歧

<div class="text-sm opacity-70 mb-4">这是全场最精彩的来回。两人都没说服对方，但分歧本身很清楚。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-40">

### Dwarkesh（提问者）
真正的 AGI 和别的生产力技术<strong>本质不同——它就是劳动力本身</strong>。

"It's as if you get 10 billion extra people on the planet." 工业革命就是从 0.2% 增长跳到 2%，会再来一次。

</div>

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### Karpathy
计算机也是劳动力，自动驾驶也是——都已"business as usual"地展开过。

"people make this assumption of, 'We have God in a box' ... and it just won't look like that."

</div>

</div>

<div class="mt-5 text-sm opacity-70">
Karpathy 让步的点：工业革命确实把增长"10x 化"了——但<strong>它不是某个神奇的关键发明</strong>，是一个"积压"被逐渐释放。他预期 AI 也是这种"无单点时刻"的渐变。
</div>

---

# 渐进的失控

<div class="text-sm opacity-70 mb-4">什么样的场景会让 Karpathy 真正紧张？不是"一个超级智能统治一切"。</div>

<div class="p-5 mb-5 text-lg italic border-l-4 border-red-500 bg-red-50 bg-opacity-30">
"there will be a gradual loss of control and understanding of what's happening."
</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 不是因为它们更聪明
而是因为它们<strong>彼此竞争</strong>。

如果他写科幻小说，那会是"多个相互竞争的实体，逐渐变得越来越自主——有些失控，其他的去围剿它们"。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 一锅完全自主的"火锅"
这些实体大多是"人的工具"、代表着人在行动。

也许那些人还在掌控——"but maybe it's a loss of control overall for society."

</div>

</div>

<div class="mt-5 text-sm opacity-70">
Dwarkesh 的反驳很犀利：理解 ≠ 控制（一个董事会、一位总统，理解很少但权力很大）。Karpathy 接受这个 pushback，但仍预期"两者都会失去"。
</div>

---
layout: two-cols
---

# 自动驾驶：九分进军

Karpathy 2017–2022 在 Tesla 领导自动驾驶。这是他很多直觉的来源。

- 自动驾驶的第一批 demo 可以追溯到 <strong>1980 年代</strong>（CMU 1986 年的卡车）
- 2014 年他坐过一次"完美"的 Waymo——然后<strong>又花了十年</strong>
- 关键是"demo-to-product gap"：demo 很容易，产品很难
- 它是"a march of nines"：90% 只是第一个 9，然后要第二个、第三个……

"Every single nine is the same amount of work." 他在 Tesla 五年，走过两三个 9。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./march-of-nines.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Demo 不值钱，且软件也是安全攸关领域

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 他对 demo 的态度
"I'm very unimpressed by demos. Whenever I see demos of anything, I'm extremely unimpressed by that."

能交互的 demo 稍好一点——但你离"产品"还很远。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

### 软件 = 高失败成本
他主动指出：生产级代码<strong>也有</strong>"失败成本太高"这个属性。

"any kind of mistake leads to a security vulnerability ... in software, it's almost unbounded how terrible something could be."

</div>

</div>

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Waymo 也"还没完成"
部署量很少、不经济，而且——"there are very elaborate teleoperation centers of people kind of in a loop with these cars."

"In some sense, we haven't actually removed the person, we've moved them to somewhere where you can't see them."

</div>

<div class="mt-4 text-sm opacity-70">
所以他<strong>不愿</strong>说"自动驾驶花了十年"——因为起点是 1980 年，而终点（规模化、不用考驾照）还没到。
</div>

---

# 智能的进化：为什么它令人惊讶

<div class="text-sm opacity-70 mb-4">在 AI 里干了 20 年后，他对"进化竟然自发撞出了智能"是更惊讶、还是更不惊讶？——更惊讶。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 它发生过不止一次？
人科的智能 vs <strong>鸟类的智能</strong>——乌鸦极其聪明，但脑区结构很不一样。

这"略微暗示"智能可能独立出现过几次。

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### 关键是"生态位"
（Dwarkesh 转述 Gwern / Carl Shulman 的观点）

鸟也有可扩展的脑算法——但鸟脑一变大就"从空中掉下来"。人类找到了一个<strong>奖励边际智能提升</strong>、又能容纳更大脑子的生态位。

</div>

</div>

<div class="mt-5 text-sm opacity-70">
Gwern 的说法：难就难在那条"很窄的线"——某件事要重要到值得"在一生中学会"，但又没重要到该把电路直接蒸馏回 DNA。你需要<strong>变化极快、无法预见</strong>的环境，逼出"在测试时才搞清楚"的智能。
</div>

---

# LLM 还没有"文化",也没有"自我对弈"

<div class="text-sm opacity-70 mb-4">多智能体领域有两个强大的想法，都还没被真正"认领"。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">

### ① 文化
"LLMs don't really have culture right now and it's one of the impediments."

最简单的形态：一个 LLM 能编辑的大草稿本。"Why can't an LLM write a book for the other LLMs?"

</div>

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-40">

### ② 自我对弈
AlphaGo 靠和自己下棋变强。"There's no equivalent of self-playing LLMs."

为什么不能让一个 LLM 出题、另一个学着解，越出越难？

</div>

</div>

<div class="mt-6 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">
他对当前模型的比喻：它们像"小学生"。"They're savant kids."——有完美记忆、能装出各种漂亮的 slop，但"they don't really know what they're doing." 还造不出文化，因为它们还是孩子。
</div>

---

# 为什么他去做教育，而不是开实验室

<div class="text-sm opacity-70 mb-4">他对 AI 实验室在做的事感到一种"宿命感"——他能帮忙，但不会独特地改善它。</div>

<div class="p-5 mb-5 text-lg italic border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-40">
"My personal big fear is that a lot of this stuff happens on the side of humanity, and that humanity gets disempowered by it."
</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

### 他最怕的未来
WALL-E、Idiocracy——"humanity is on the side of this stuff."

"I want humans to be much, much better in this future."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Starfleet Academy
他在做的事：一所"星际舰队学院"——面向前沿技术知识的精英学府。

第一门课是 LLM101N，<strong>nanochat 就是它的毕业项目</strong>。

</div>

</div>

<div class="mt-5 text-sm opacity-70">
有意思的是：他认为现在<strong>还不是</strong>建 AI 家教的时候。学韩语时那位一对一老师，"瞬间从一段很短的对话里就摸清了我在哪"——"No LLM will do that for you 100% right now, not even close."
</div>

---

# 教育：构建"通往知识的坡道"

<div class="text-sm opacity-70 mb-4">他心里的教育不是"软性的知识扩散",而是一个"非常困难的技术过程"。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Eurekas per second
好的材料给你"很多的 eurekas per second"——每秒钟的理解量。

nanochat 就是一个 ramp：极度简化的全栈实现，看一遍就学到一大堆东西。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 校准到"当下的能力"
现在去 ChatGPT 说"教我 AI"——"It's going to give you some slop."

"AI is never going to write nanochat right now." 但 AI 在帮他<strong>更快地</strong>造课程材料。

</div>

</div>

<div class="mt-6 p-4 text-base italic border-l-4 border-green-500 bg-green-50 bg-opacity-30">
他做 AI 咨询时，很多时候带来的价值是<strong>告诉公司别用 AI</strong>。"I feel like it's the same in education right now."
</div>

---
layout: two-cols
---

# 怎么教得好：物理学家的工具箱

他的很多教学技巧来自物理学背景。

- **球形的牛**："Assume there's a spherical cow"——大家都笑，但这是绝妙的、可泛化的思维
- 总是去找**一阶项、二阶项**——什么才是真正重要的那个分量？
- **micrograd**：100 行可读的 Python，是"理解神经网络如何训练所需的全部"——其余一切都只是效率
- **bigram → transformer**：从一张查找表开始，每一块都被"动机"驱动——先呈现痛苦，再给出解法

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./teaching-ramp.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "就把那句话说出来"

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

### 专家为什么讲不清
"It's the curse of knowledge and expertise."

你把太多东西当成了理所当然，无法再站在初学者的鞋子里。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一个好用到惊人的技巧
一篇论文 / 博客，<strong>如果换成"午饭时怎么跟你解释"的口述版</strong>——几乎 100% 会更易懂、也更准确。

"Just say the thing." 为什么那不是摘要呢？

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 给学习者的两条
- **按需深度学习** 与 **广度学习** 交替：为一个能拿到回报的项目去深挖，是他最喜欢的学习方式
- **把东西讲给别人听**——"if I don't really understand something, I can't explain it." 它逼你直面并填补理解的缝隙

</div>

<div class="mt-4 text-sm opacity-70">
关于动机：在线课程没能让"人人学会一切"，是因为它们太"motivation-laden"——没有明显的 on-ramp，太容易卡住。
</div>

---

# Pre-AGI:有用 / Post-AGI:有趣

<div class="text-sm opacity-70 mb-4">为什么 AGI 之后人们还会去学习?Karpathy 的类比是健身房。</div>

<div class="mt-6 p-8 text-2xl italic border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-40 text-center">
"Post-AGI education is fun ...<br/>
You'll go to school like you go to the gym."
</div>

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 健身房的类比
我们不再需要体力去搬重物——但人们还是去健身房。因为它有趣、健康、而且"你有六块腹肌时看起来很性感"。

学习会走上同一条路。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 但他也坦承
长期看,纯靠自己的认知去影响技术轨迹,"is a bit of a losing game"。

会有一个过渡期——之后,人能走多远的上限,会比今天的天才所触及的高得多。

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句（均可在转录稿中逐字检索）：</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"In my mind, this is more accurately described as the decade of agents."
<div class="text-xs opacity-60 mt-1 not-italic">— 开场，回应"智能体元年"的过度预测</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"We're not building animals. We're building ghosts or spirits."
<div class="text-xs opacity-60 mt-1 not-italic">— 回应 Sutton 的"造动物"框架</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"you're sucking supervision through a straw ... A human would never do this."
<div class="text-xs opacity-60 mt-1 not-italic">— 谈强化学习的根本缺陷</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"It only has like three jokes."
<div class="text-xs opacity-60 mt-1 not-italic">— 谈模型的"悄悄坍缩"</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded italic text-sm">
"They're not very good at code that has never been written before."
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么编码智能体帮不上 nanochat</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"It's a march of nines. Each nine is constant."
<div class="text-xs opacity-60 mt-1 not-italic">— 自动驾驶给他的核心直觉</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"If I can't build it, I don't understand it."
<div class="text-xs opacity-60 mt-1 not-italic">— 怎么用 nanochat 学习（引费曼）</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"You'll go to school like you go to the gym."
<div class="text-xs opacity-60 mt-1 not-italic">— Post-AGI 时代的教育</div>
</div>

</div>

---
layout: end
---

# "Just say the thing."

<div class="mt-6 text-lg opacity-80">
Andrej Karpathy 这期访谈最贯穿始终的态度——<br/>
对 demo 的祛魅，对时间线的耐心，对"把复杂的东西讲简单"的执念。
</div>

<div class="mt-8 text-sm opacity-60">
Dwarkesh Podcast · Andrej Karpathy<br/>
"We're summoning ghosts, not building animals"
</div>
