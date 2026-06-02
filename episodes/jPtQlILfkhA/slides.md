---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Inside xAI: Building Grok Imagine in 3 Months, Videogen vs World Models, and Video Agents — Ethan He'
info: |
  Latent Space 与 Ethan He 的访谈。在 xAI 从零搭建 Grok Imagine 视频/图像生成团队的内幕：
  视频模型训练的真实成本、World Model 的三根支柱、为什么"视觉的智能其实来自语言"。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Inside xAI: Building Grok Imagine

<div class="text-2xl opacity-80 mt-4">3 个月从 0 到 0.9 · Videogen vs World Models · Video Agents</div>

<div class="mt-12 text-lg opacity-70">
Ethan He （何易东） · 前 xAI / Nvidia Cosmos
</div>

<div class="mt-2 text-sm opacity-50">
Latent Space Podcast · 主播 swyx + Vibhu Sapra
</div>

<div class="mt-8 text-xs opacity-40">
2026 · ~2h
</div>

---

# 这期讲了什么

<div class="text-sm opacity-60 mb-6">2 小时访谈里最值得记住的六条线：</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 3 个月奇迹
xAI 从 0 infra、0 data、0 model 到发布 Grok Imagine 0.9，几个工程师做完。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 视频模型的解剖
synthetic pair、VAE 压缩、image-first bootstrap、step distillation 全流程。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 真实成本
storage 几 PB、egress 比存储还贵、训练算力对标"中等规模 LLM"。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### World Model 定义
real time + interactive + long horizon — 三根支柱缺一不可。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 一个反直觉论断
"视觉的智能其实大部分来自语言模型"——所以他要从视频转回 LLM。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Video Agents
LLM + diffusion + ffmpeg + 图像编辑器，像 Claude Code 一样调工具拼视频。

</div>

</div>

---

# 时间线：3 个月从零到 0.9

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="text-sm opacity-60 mb-2">2024 末 · Nvidia</div>
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
带队做 <strong>Cosmos</strong> world model — 大型视频基础模型，目标是为机器人提供世界模拟。
<div class="text-xs opacity-60 mt-1">"It was like uh end of 2024."</div>
</div>

<div class="text-sm opacity-60 mb-2">2025 中 · 加入 xAI</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-3">
入职时："no no infra no data and no model"。几个工程师 3 个月内交付 Grok Imagine 0.9。
</div>

<div class="text-sm opacity-60 mb-2">之后 · post-training</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
reference-to-video（cameo 类功能）、video extension、real-time world model。
</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

<div class="text-sm opacity-70 mb-2">为什么是 3 个月而不是 1 年？</div>

<div class="italic mb-2">
"first time when we were building Cosmos together, we built it uh for about a year. So this is like the second time I do it, roughly roughly have an idea like what to do."
</div>

<div class="text-xs opacity-60">
—— 第二次做就快了。第一次趟过一遍坑之后，目标和瓶颈都很清楚。
</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

<div class="text-sm opacity-70 mb-2">Cosmos vs Grok Imagine</div>

两套都是 Ethan 主导从零搭起来的视频基础模型。
区别是 Grok Imagine 还要做 <strong>audio-video joint generation</strong>，并被压到 3 个月窗口。

</div>

</div>

</div>

---

# 3 个月到底靠什么完成？

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1. 人
"the most important thing is is a talent. Everyone everyone were very strong and clever very close with each other towards a common goal."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2. 低沟通带宽
"every day there's not that much meetings on the calendar like maybe like a sync a day and after that it's just all building."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 3. 强 infra
xAI 已经有 data infra、model infra、训练流水线，新团队不用再造轮子，直接迭代模型本身。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

<div class="text-sm opacity-70 mb-1">一个被反复回到的反直觉点</div>

"a lot of the improvements does not come from new algorithms. It comes from finding small bugs here and there in the data pipeline in the in the model training pipeline. Those gave the biggest boost to the model quality."

<div class="text-xs opacity-60 mt-2">
模型质量的最大跃迁，往往不是算法创新，而是数据流水线 / 训练流水线里那些小 bug 被一个一个抓出来。
</div>

</div>

---
layout: two-cols
---

# 真正的指标：iteration speed

<div class="text-sm opacity-70 mb-3">问 Ethan "为什么 infra 重要"，他给的答案不是 throughput，而是：</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4 italic">
"the top important thing is like how many iterations can you do per day."
</div>

<div class="space-y-2 text-sm">

<div>
<strong>一次 iteration =</strong> 拉数据 → 设计算法 → 训一个（可能小规模的）模型 → eval：这个比上一版好吗？
</div>

<div>
更强的 infra + 更多 compute → 每天能跑更多 iteration → <strong>更大的容错缓冲</strong> + 更容易发现 bug。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>作者概括：</strong>这等于把"模型训练"这件事从"年/季度大爆炸"重新定义成"每天能跑几次环"。3 个月窗口能压缩出 0.9 版本，本质上就是因为这个环跑得够快。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./iteration-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Coding model 反过来让 compute 变瓶颈

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 2025 中：还不够好

<div class="text-sm opacity-70 mb-2">Ethan 当时用 AI 写代码的体验：</div>

"it produced codes that are kind of difficult to maintain... a spaghetti code thousands of lines that I couldn't maintain and the LLM itself couldn't figure out what's what's wrong."

<div class="text-xs opacity-60 mt-3">
mid 2025，写得快但维护不了。第一版一发不可收拾，模型自己也修不动。
</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 2025 末：完全不同

"I remember like December 2025 it was extremely good."

<div class="text-sm opacity-70 mt-3 mb-2">于是出现一个反向问题——</div>

<strong>"compute might become a bottleneck again"</strong>

<div class="text-xs opacity-60 mt-2">
以前写一个 idea 要几周，期间没法跑实验；现在几小时就能写完代码，等着排 GPU。研究员重新被算力卡。
</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>另一面：</strong>"it's a it's a marathon, so you got to maintain good health and uh the regular schedule." —— 工业级模型训练是马拉松，每小时烧几千张 GPU，状态要长期可持续。

</div>

---
layout: two-cols
---

# 一个视频模型怎么从零搭起来

<div class="text-sm opacity-70 mb-3">Ethan 在 Cosmos / Grok Imagine 都跑过同一套流程：</div>

<div class="space-y-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>1. 造 synthetic 文本-视频对</strong><br/>
互联网上视频和文字"几乎没相关性"，要用 VLM 自己重新打标。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-400">
<strong>2. 训 VAE / tokenizer</strong><br/>
像素空间太大（1k×1k 图就 100 万 token）→ 压到连续 latent vector。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-400">
<strong>3. 先训图像 diffusion transformer</strong><br/>
图便宜、语言↔图的映射密度高，先把语言 grounding 学好。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-400">
<strong>4. 用图像模型 bootstrap 视频模型</strong><br/>
再加 post-training：extension、reference、audio。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pipeline-stages.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Stage 1：让"盲人能在脑子里重建这段视频"

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="text-sm opacity-70 mb-2">为什么不能直接用 YouTube 的标题+描述？</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-4 text-sm">
"on the internet actually the videos don't naturally associate with text. say maybe like the video is a natural scene of mountains or something and the title is like 'I'm so happy today'. So they have no correlation at all."
</div>

<div class="text-sm opacity-70 mb-2">所以第一步要造 synthetic pair：</div>

<div class="text-sm space-y-1">
<div>→ 抓 raw video</div>
<div>→ VLM 重新生成"极致详细"的描述</div>
<div>→ 用作训练 pair</div>
</div>

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

Cosmos 给人类标注员的 brief 是：

<div class="my-3 text-lg">
"describe the video as detailed as possible such that a blind person shares a blob of text can reconstruct what the video is like from their head."
</div>

<div class="text-xs opacity-60 not-italic">
—— 标注的目标不是"概括内容"，而是"信息无损"。所有物体、角色、动作、对白都要写进去。
</div>

</div>

</div>

<div class="mt-6 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
鸡生蛋问题：第一个 VLM 怎么来？—— 早期靠纯人工标注 bootstrap，"in the beginning it's like you ask human to describe the video as detailed as possible"。先有人标，再有 VLM，再有 video model。
</div>

---

# Stage 2：VAE — 像素空间太大，必须压缩

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 为什么不能直接训 pixels

"one image like uh it's a thousand by a thousand is like 1 million tokens 1 million pixels. It's impossible to train transformer on that."

<div class="text-sm opacity-70 mt-3">
1000×1000 = 100 万 token / 张图。视频再叠时间维度，直接爆。
</div>

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### VAE 在干什么

把 patch（比如 16×16）的像素映射到一个 <strong>continuous latent vector</strong>（16 / 48 维），再映射回去。

<div class="text-sm opacity-70 mt-3">
"the vocab is continuous. It's a continuous space."—— 这里和 LLM 的离散词表不同，是连续空间。
</div>

</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

<strong>能不能直接拿 MP4 当 token？</strong>

"people actually have tried that but the main challenge is the latent space for the MP4 tokens were not very comprehensible for the models. It's extremely hard to train on that."

→ MP4 的压缩域不连续、不可学；VAE 提供的 latent 才是模型能 reason 的空间。

</div>

---

# 帧压缩 vs 时间压缩：一个隐藏的权衡

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Temporal 压缩
（Wan 2.1 用 8×8×4）

把连续 4 帧压成 1 token。

<div class="text-sm mt-3">
✓ <strong>4× 更短 context</strong><br/>
✓ 长视频可行<br/>
✗ <strong>有 lag</strong>——必须等到 4 帧凑齐才能解
</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Frame-by-frame 压缩
（每帧独立）

<div class="text-sm mt-3">
✓ <strong>real-time / 可交互</strong><br/>
&nbsp;&nbsp;&nbsp;&nbsp;"the model can respond to any user requests immediately"<br/>
✗ context 长度爆炸<br/>
&nbsp;&nbsp;&nbsp;&nbsp;"if you do it frame by frame your context lens will be four times larger"
</div>

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

<strong>这个选择决定了你能做什么。</strong>想要长片生成？走 temporal。想要 world model 那种 mouse 一动画面就响应的交互？必须 frame-by-frame，然后接着去和长 context 死磕。

</div>

---

# 被忽视的成本：存储

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-center">

<div class="text-sm opacity-70 mb-1">原始视频</div>
<div class="text-3xl font-bold text-red-600 my-2">5 PB</div>
<div class="text-xs opacity-70">10 亿条视频 × 5 MB 每条<br/>VAE 特征还要存一份</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-center">

<div class="text-sm opacity-70 mb-1">AWS S3 存储</div>
<div class="text-3xl font-bold text-orange-600 my-2">100k</div>
<div class="text-xs opacity-70">5 PB × $/月<br/>"5 pabytes on S3 standard is 100k per month"</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-center">

<div class="text-sm opacity-70 mb-1">Egress 费用</div>
<div class="text-3xl font-bold text-purple-600 my-2">230k</div>
<div class="text-xs opacity-70">Tier 5 / 5 PB<br/>每次训练都得拉一遍 → 加倍</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>结论：</strong>"just storing storing these videos and the features is it's tens of pabytes alone... it would be a few millions per months to just storing everything not to mention the GPU cost."

数据中心是建给 GPU 的，没人按 PB 级存储设计——这是 video model 的真实隐性瓶颈。

</div>

---

# Cost：视频模型其实和"中等规模 LLM"差不多

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

### 参数规模

LTX：<strong>19B dense</strong><br/>
新一代 MoE：<strong>~20B active / 100B total</strong>

→ "similar size as medium-size LLM models"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 训练 token 量

Cosmos 公开过的数：<strong>tens of trillions of visual tokens</strong>

</div>

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

<div class="text-sm opacity-70 mb-2">Ethan 的 back-of-the-envelope：</div>

"the cost of training these video models it's actually comparable with LLMs. Not to mention the infra is slightly different from LLM. So it might be less efficient to train these models."

<div class="mt-4 text-sm">
比纯 LLM 还多一个隐藏开销：<br/>
→ <strong>IO-bound</strong>，数据加载/缓存是另一个工程问题<br/>
→ 训练 infra 差异（cosmos 做了大量 IO 优化）
</div>

</div>

</div>

---
layout: two-cols
---

# Step distillation：训练时 100 步，serve 时 4 步

<div class="text-sm opacity-70 mb-3">推理端最大的速度来源不是芯片，是 step 数：</div>

<div class="space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>训练阶段（teacher）：</strong>flow matching ~100 步、diffusion ~1000 步去拟合"整个互联网的图像分布"——极复杂。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>蒸馏阶段（student）：</strong>只需要拟合"teacher 模型"这一个固定 distribution——简单很多。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>服务阶段：</strong>Cosmos 实测 <strong>4 / 8 步</strong>就能上线；image-to-image 任务里"can even run in first step like one step in Cosmos transfer"。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"GAN was the OG step distillation"—— GAN 本来就一步生成，所以现代蒸馏里会回过头来用 GAN loss（distribution matching distillation）做 student 的训练目标。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./step-distillation.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Audio：两种性质的东西在一个模型里

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

### Grok Imagine 0.9
"the first first audio video trans model deployed at a large scale"

→ 不是只生成视频，是 <strong>audio + video 联合生成</strong>。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### audio 的两面性

<div class="text-sm mt-2 space-y-2">
<div>🗣️ <strong>discrete 部分（speech）：</strong>"it's a text token with some characteristics"—— 可以当类似 LLM 的离散 token 处理。</div>

<div>🎵 <strong>continuous 部分（music）：</strong>"completely different. It's very continuous and you cannot model them like discrete tokens in language models."</div>
</div>

</div>

</div>

<div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 比 video 还缺数据基础

"most of the VLMs they understand images and videos very rare and they don't understand audio mostly."

VLM 多数不懂音频 → 没法像 video 那样自动 caption。
所以 audio synthetic pair 必须靠 sensor 数据 + 人工大量参与。

</div>

<div class="mt-4 p-5 rounded bg-green-50 border-l-4 border-green-500 italic">

Ethan 把 audio captioning 类比成 video 那条 brief：

"someone deaf can reconstruct how the music sounds like without actually listening to it."

</div>

</div>

</div>

---

# Time-alignment：另一个 audio 独有的难题

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500">

<div class="text-sm opacity-70 mb-2">video↔audio 必须 <strong>逐时间对齐</strong>：</div>

"the model has to know like the video and audio it has to have a time based alignment like at which time step the video and the audio token correspond to each other."

<div class="text-sm opacity-70 mt-3">
但 video↔text 不需要——文字只是松散描述整段画面。

→ audio 把"<strong>时间感</strong>"逼进了模型，这是其他模态都没有的负担。
</div>

</div>

<div class="mt-5 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

<div class="text-sm opacity-70 mb-2">这也牵出一个有意思的对比：LLM 普遍没有时间感</div>

"if you ask LLM to complete a task, they would say oh, this task will probably take 12 hours to complete. And they come back in one hour. They have already spent two days on this and have exhausted everything."

<div class="text-sm opacity-70 mt-3">
对话里 Vibhu 回应：这其实是模型在估计"一个人类会怎么说"，不是模型没时钟。
而 audio-aware video model 是真的把时间塞进了架构。
</div>

</div>

---
layout: two-cols
---

# World Model = real time + interactive + long horizon

<div class="text-sm opacity-60 mb-3">Ethan 给的定义（明确加了 disclaimer "我只讲我自己的"）：</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3 italic text-sm">
"word model is like real time interactive long horizon videos."
</div>

<div class="space-y-3 text-sm">

<div>
<strong>real time：</strong>语音交互需 200 ms，CSGO 玩家要求 sub-10 ms。普通 video model 完全做不到。
</div>

<div>
<strong>interactive：</strong>支持鼠标 / 键盘 / 语音输入，模型每帧都要响应。
</div>

<div>
<strong>long horizon：</strong>不是几秒，是几分钟到几小时。Cosmos 里 5 秒 video ≈ 50-60k token，50 秒就 500k。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>三个一起要</strong>才是 world model。frame-by-frame VAE（牺牲 context）+ long context 工程（牺牲实时性）必须同时解决——这是为什么它"still a very long way to get there"。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./world-model-pillars.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Video extension：迈向 long horizon 的第一步

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 老办法：拿"上一帧"当下一段的首帧

"some creators would try to like use the last frame as a first frame for the second video. sometimes it works but if you do it a few times it says the call to a degree."

<div class="text-sm opacity-70 mt-3">
甚至 Veo 3 也只有大约 <strong>1 秒</strong>的上下文——稍微好一点，但画质和对白连续性还是会掉。
</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Grok Imagine 的 video extension

"has historical context of all of the previous generated videos. It has it has a context of who's speaking and what objects have appeared and everything."

<div class="text-sm opacity-70 mt-3">
不是拿"上一秒"，是把<strong>整段历史</strong>当 context。
代价：context 立刻爆——5 秒已经 50k token。
</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

<div class="text-sm">"It turns out people Yeah, people love video extension like a lot of creators love using video extension to create longer form videos."</div>

<div class="text-xs opacity-60 mt-2">
作者概括：World model 是一个 10 年目标。每个中间产品（video extension、reference-to-video）都得自己有用——既能验证方向，又能撑住用户量。
</div>

</div>

---

# Reference-to-video：从历史里"挑"context

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

### 直觉
长视频里大量信息是 redundant：一个角色第一段出现、中段不在、结尾才回来——中段的 context 其实不需要。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Reference-to-video 功能
最多上传 <strong>7 张参考图</strong>（角色、物体、场景），生成时把它们的 context "拷"进视频。

<div class="text-sm opacity-70 mt-2">
"I want condition on Sean's selfie and holding holding a blade." —— 现场演示。
</div>

</div>

</div>

<div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 但 7 张参考是个 hack

主播：那 100 张呢？
Ethan：那就要 <strong>另一种机制</strong>了。

<div class="text-sm mt-3">
有篇 paper 叫 <strong>frame pack</strong>，启发式做法：最近 1 秒保留全 context，更早的历史压缩成更小的图——总 sequence 长度固定。
</div>

<div class="text-sm mt-3 opacity-70">
这只是 heuristic。更长远的方向是让模型自己学会"该往哪段历史回看"。
</div>

</div>

</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>有意思的镜像：</strong>同一个"context 自管理"问题，在 video model 和 LLM 这边几乎同时被研究——LLM 那边叫 context compaction / pruning（Claude Code 内部有 8 种），video model 这边叫 reference / frame-pack。

</div>

---

# Generative UI：Flipbook 和 Neuro OS

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Flipbook
看起来像网页浏览器，但里面所有 UI 都是 image model 实时生成的"假"网页。你点一下，模型就 imagine 一个对应的子页面。

<div class="text-sm opacity-70 mt-3">
"these web pages they completely do not exist"
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Neuro OS
用 video model 模拟整个操作系统。可以"打开" Firefox、玩 Doom——但都是被生成出来的画面。

<div class="text-sm opacity-70 mt-3">
"the model is overfitted on the existing operating systems"——因为训练集就是真 OS 截屏。但模型也学会了 generalize：
</div>

</div>

</div>

<div class="mt-5 p-5 rounded bg-purple-50 border-l-4 border-purple-500">

<div class="text-sm opacity-70 mb-2">Ethan 觉得最神奇的一点：</div>

"you can prompt the model to generate something supernatural that have never existed in the data set. So if you train your neuro OS on the standard screen recordings on the entire internet the model can imagine completely new interface to interact with a computer."

<div class="text-xs opacity-60 mt-2">
被训练的是"普通屏幕录像"，但生成时可以涌现出"完全没见过的 UI"——video model 也有"世界模型"般的外推能力。
</div>

</div>

---

# Diffusion 当前端，code 当后端

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

### 现在 LLM 写代码是怎么回事

写 code → 编译成 binary → binary 把像素画到屏幕。中间转了好几道。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 直接到像素呢？

"why don't we have like a user instruction to the pixel directly?"

如果推理便宜了，diffusion model 就是 UI 本身：

<div class="text-sm mt-2 opacity-70">
"I want the email to show to me like a TikTok so I can swipe left and right" —— UI 永远是为这一刻 / 这一个用户而生成的。
</div>

</div>

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

<div class="text-sm opacity-70 mb-2">Ethan 概括出的结构：</div>

<div class="text-2xl text-center my-4">
"diffusion front end<br/>deterministic back end"
</div>

<div class="text-sm">
后台：强 LLM / coding model 跑逻辑、调 API。<br/>
前台：diffusion model 把结果画成最适合此刻这个用户的界面。
</div>

<div class="mt-4 text-xs opacity-60">
"in machine learning every time we have some breakthrough obviously it's more inent."——每次 ML 突破，结果都是 end-to-end 替代手写的中间表示。UI 也轮到了。
</div>

</div>

</div>

---
layout: two-cols
---

# 这期最尖锐的论断

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 mb-4 italic text-lg">
"the visual intelligence are actually mostly coming from language."
</div>

<div class="text-sm space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>结构上：</strong>Cosmos 里 video diffusion 只有 7B；前面那个 prompt rewriter（Llama / Mixtral）反而更大。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>实际跑：</strong>"GPT image like you generate a image in 3 minutes, it's not all like a pixel generation. a lot of time is spending in thinking."
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>趋势：</strong>"every time you see there's some improvement on these models, mostly the gain comes from language model not coming from the video model itself."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./big-claim.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么 video diffusion 模型是"kind of dumb"

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### 训练时学到的"语言"

caption 是"尽可能详细"——多段、多对象、有动作、有对白。模型默认 user 的输入也是这样。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 用户实际怎么输入

"a cat"

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">

"they would take that instruction literally they would literally show a cat in maybe a white background because you didn't describe the background. the cat is not moving because you didn't describe it. It takes the instruction quite literally. It's kind of it's kind of dumb."

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

<strong>所以前面挂一个 prompt rewriter</strong>，把简单 prompt 扩成"训练分布"那种详细描述。Cosmos 里"happy sheep"，不 rewrite 是 CGI 怪图，rewrite 之后就是好图——<strong>不需要 joint training</strong>。

</div>

---
layout: two-cols
---

# Video Agents：Claude Code 模式来到视频

<div class="text-sm opacity-70 mb-3">
如果视频的大部分智能其实来自 LLM，那就别再把所有能力都塞回 diffusion——
</div>

<div class="text-sm opacity-70 mb-3">
让 LLM 当 planner，diffusion 只是它的一种 tool。
</div>

<div class="space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Grok Imagine Agent (beta)</strong> 已经在做了：用户说"做一分钟视频"，agent 自己分镜、生成、用 ffmpeg 拼。
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
GPT Image Pro 思路类似：背后是 LLM 在<strong>写代码 + 跑工具</strong> + 最后做一次 image pass。
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
跟 AI 编程的演化路径同构：tab 补全 → Copilot → Codex / Claude Code <strong>自主跑</strong>。视频也会沿这条路走。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
Ethan 的时间预测："by the end of this year is this is going to be a big hit"——production-grade video agent 会进入 ads 等企业市场。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./video-agent.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Robotics：可能根本不需要进实体

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 主流 world-model 阵营的观点
General Intuition / Moon Lake 等：world model 的终极场景是 <strong>embodied robotics</strong>——要在真实物理世界交互。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Ethan 的反向押注

"my prediction on robotics is that the problem of physical AI might be solved without actually need to be in the real world. it might get solved by a video LM is very strong video capability."

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500">

<div class="text-sm opacity-70 mb-2">他的推理链：</div>

<div class="text-sm space-y-2">
<div>1. real-time interactive long-horizon video model = world model</div>
<div>2. 训练数据从"屏幕录像"变成"机器人摄像头" → 模型理解"动作 → 下一帧世界状态"</div>
<div>3. 那么 <strong>robot 只是 video LM 调用的另一种 tool</strong></div>
<div>4. "the powerful AI might just be able to control the physical embodiment naturally"</div>
</div>

<div class="text-xs opacity-60 mt-4">
注意：这是 Ethan 自己的预测，不是已发生的事。他自己也加了"might"。
</div>

</div>

---

# xAI 的三句话文化

<div class="text-sm opacity-70 mt-6 mb-2">访谈里 Ethan 一字一句给的版本：</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

<div class="text-3xl font-bold text-blue-600 my-2">move fast</div>
<div class="text-xs opacity-70">
3 个月发 Grok Imagine 0.9 就是这一条的字面执行
</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500 text-center">

<div class="text-3xl font-bold text-green-600 my-2">build</div>
<div class="text-xs opacity-70">
"every day there's not that much meetings... after that it's just all building"
</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-center">

<div class="text-3xl font-bold text-orange-600 my-2">no goal<br/>is too ambitious</div>
<div class="text-xs opacity-70">
目标设到"我刚听到时觉得不可能"的位置
</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>第四条隐含的：first principle thinking</strong>——下一页展开。Ethan 强调这不是流于口号，是被反复用来定 deadline 的工具。

</div>

---

# First principle 在 ML 里怎么用

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500">

<div class="text-sm opacity-70 mb-2">很多人觉得 first principle 只适用物理世界。Ethan 给的反例是：训练一个 video model 的最短时间。</div>

把每个限制单独估出来：

<div class="mt-3 grid grid-cols-2 gap-3 text-sm">
<div class="p-2 rounded bg-white border border-blue-200">📦 数据采集的最短时间</div>
<div class="p-2 rounded bg-white border border-blue-200">🔁 单次训练的 iteration 速度</div>
<div class="p-2 rounded bg-white border border-blue-200">⚡ 加 GPU 能压缩多少 timeline</div>
<div class="p-2 rounded bg-white border border-blue-200">🧑‍💼 人工标注的 turnaround</div>
</div>

<div class="text-sm mt-3 opacity-70">
全部 stack 起来 → "the minimum number of days that is possible to achieve something"。
</div>

</div>

<div class="mt-5 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic">

主播接了一句话点题，Ethan 没反驳：

<div class="text-lg my-3">
"the only law you can't break is the laws of physics."
</div>

<div class="text-xs opacity-60 not-italic">
—— 这是被广泛引用的 Elon 风格的思考方式。Ethan 用它来反推训练时间表。
</div>

</div>

---

# 这条职业路径不像看起来那么直

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="text-sm opacity-70 mb-2">Ethan 的 10 年时间线（他自己描述）：</div>

<div class="space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>10 年前：</strong>跟 ResNet 作者 Shaoqing / Sun Jian / Jensen 做 computer vision（图像识别、目标检测、目标追踪、神经网络压缩）
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>申 PhD：</strong>"I got rejected by all of the top PhD programs"——已经有顶会一作还是全拒
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>FAIR：</strong>转 self-supervised learning（和此前 supervised CV 完全不同的范式）
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Nvidia Cosmos：</strong>scaling 优先——Megatron + Cosmos，把 video description model 推到几十亿参数，40% MFU 训练 100B-trillion 级模型
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>xAI：</strong>更大规模 compute · Grok Imagine 全套
</div>

</div>

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

<div class="text-sm opacity-70 mb-2">他对"领域切换"的反直觉看法：</div>

"within ML it's actually easier to switch and then you think... a lot of the core principles how to train large models are largely the same."

<div class="text-xs opacity-60 mt-4">
—— 大模型的训练原则可迁移：MoE、scaling law、infra 优化、distillation 这些工程心法在 CV / video / language 之间是共通的。
"computer vision background → 必须一辈子做 CV" 是错觉。
</div>

</div>

</div>

---

# 然后他又要走了——从视频回到语言

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 为什么离开 xAI

"there's a lot of research you want to do that you cannot do as a company and also like the priorities and objective the company typically can change very fast."

<div class="text-sm opacity-70 mt-3">
不是抱怨 xAI——他强调"the same for XAI"，意思是<strong>所有公司都这样</strong>。当下他想做的研究在公司里推不动。
</div>

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 转去做什么

<strong>语言模型，特别是 context 自管理</strong>。

<div class="text-sm opacity-70 mt-3">
"the language models will be like context aware and manage its own context."
</div>

<div class="text-sm opacity-70 mt-2">
他举了几个有意思的例子：模型应该知道自己 context 到 80% 了；模型应该能在 test time 改写 agent harness 的代码来给自己开 subagent / 选读哪几行。
</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">

主播追问"这不是 career risk 吗？"——Ethan 没正面回答，但理由很坦诚：

"it seems like more pressing impactful work to do now on language model side."

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">2 小时访谈里最值得标红的几条，全部 grep 自原文：</div>

<div class="space-y-2">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"the visual intelligence are actually mostly coming from language."
<div class="text-xs opacity-60 mt-1 not-italic">— 开场 30 秒的"big claim"，也是他转做 LLM 的根本理由</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"the most important thing is is a talent."
<div class="text-xs opacity-60 mt-1 not-italic">— 3 个月发 Grok Imagine 0.9 的第一原因</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"describe the video as detailed as possible such that a blind person shares a blob of text can reconstruct what the video is like from their head."
<div class="text-xs opacity-60 mt-1 not-italic">— Cosmos 给标注员的 brief，"信息无损" caption 标准</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"word model is like real time interactive long horizon videos."
<div class="text-xs opacity-60 mt-1 not-italic">— 一句话的 world model 定义</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"video diffusion models I would describe they're kind of dumb because they take the input instruction literally."
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么 prompt rewriter (LLM) 才是视觉智能的真正来源</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"the problem of physical AI might be solved without actually need to be in the real world."
<div class="text-xs opacity-60 mt-1 not-italic">— 强 video LM 可以反过来吃掉 robotics</div>
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"move fast, build, no goal is too ambitious."
<div class="text-xs opacity-60 mt-1 not-italic">— xAI 三句话文化的字面版本</div>
</div>

</div>

---
layout: end
---

# diffusion front end<br/>deterministic back end

<div class="mt-6 text-sm opacity-60">
—— Ethan He，对未来 UI 范式的总结
</div>

<div class="mt-12 text-xs opacity-40">
Latent Space · Inside xAI: Building Grok Imagine in 3 Months
</div>
