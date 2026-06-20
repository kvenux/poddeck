---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'AI语音克隆进入"零样本"时代？解析TTS模型四大流派与问鼎榜首的MiniMax'
info: |
  硅谷101 · 陈茜 · 解析 TTS 五代里程碑与 MiniMax speech-02
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI 语音进入「零样本」时代

<div class="text-xl opacity-80 mt-4">解析 TTS 四大流派与问鼎全球榜首的 MiniMax speech-02</div>

<div class="mt-10 text-sm opacity-60">硅谷101 · 陈茜 · 2025</div>

<div class="mt-4 text-xs opacity-50">开场你听到的每一句话,都不是陈茜自己发音的</div>

---

# 为什么这期值得看

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一条清晰的技术演进
从 2017 Tacotron 到 2025 MiniMax,八年五代里程碑,一次性讲透

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 真实的内容人测评
硅谷101 后期 Jacob 用日常剪辑场景把 ElevenLabs 和 MiniMax 拉来直接对打

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### "超过真人"的新定义
不是更像人,而是错误率更低、相似度更高、表现力齐平

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 声音版权与未来想象
零样本之后,谁的声音、谁的话、是否授权——三件事如何变得可查证

</div>

</div>

---

# 这段话,不是陈茜自己说的

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

陈茜在开场用 <strong>MiniMax speech-02</strong> 现场克隆了自己的不同情绪:

<div class="space-y-2 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-400 text-sm">
<strong>温柔的陈茜</strong> — 「大家好 欢迎收看硅谷101~」
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400 text-sm">
<strong>严肃的陈茜</strong> — 「大家好 欢迎收看硅谷101」
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-400 text-sm">
<strong>夸张的陈茜</strong> — 「哇哦 各位观众老爷们好啊」
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-400 text-sm">
<strong>很嗲的陈茜</strong> — 「哼 不许不看!」
</div>

</div>

</div>

<div class="flex flex-col justify-center">

<div class="p-5 bg-gray-50 border-l-4 border-gray-700 italic text-lg rounded">

「感觉泛化能力已经足够强,不仅在我们刚才演示的多语言上合成得游刃有余,还能对不同口音 不同情绪进行人声的模拟和生成。」

<div class="not-italic text-xs opacity-60 mt-2">— 陈茜,听完后的第一反应</div>

</div>

<div class="mt-4 text-sm opacity-70">

「我真是鸡皮疙瘩都起来了,有点难以想象我自己会这么说话哈。」

</div>

</div>

</div>

---
layout: two-cols
---

# TTS 八年,五代里程碑

2017 年之前,TTS 还是「机器人感非常重」的拼接合成。

Transformer 之后,语音模型在八年里经历五次范式跃迁:

<div class="space-y-2 mt-4 text-sm">

<div class="p-2 rounded border-l-4 border-blue-500 bg-blue-50">
<strong>2017 · Tacotron</strong> — Google,第一个端到端神经网络
</div>

<div class="p-2 rounded border-l-4 border-green-500 bg-green-50">
<strong>2019 · FastSpeech</strong> — 微软+浙大,提速 270 倍
</div>

<div class="p-2 rounded border-l-4 border-orange-500 bg-orange-50">
<strong>2021 · VITS</strong> — 韩国团队,「老戏骨」一对多
</div>

<div class="p-2 rounded border-l-4 border-purple-500 bg-purple-50">
<strong>2023 · VALL-E</strong> — 微软,3 秒克隆零样本
</div>

<div class="p-2 rounded border-l-4 border-red-500 bg-red-50">
<strong>2025 · MiniMax speech-02</strong> — 问鼎全球榜首
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tts-timeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Tacotron · 2017:一个聪明的朗读演员

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

Google 在 2017 年发布的 Tacotron,是史上<strong>第一个合成语音的神经网络</strong>——也是第一个端到端神经网络语音合成系统。

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>类比</strong>:把它想象成「聪明的朗读演员」,从一串文字开始,一步步把它变成你能听到的自然语音。
</div>

<div class="mt-4 text-sm opacity-70">
论文八卦:作者们很喜欢吃<strong>墨西哥夹饼(Taco)</strong>,所以给取名叫 Tacotron——「也是很随意了」。
</div>

</div>

<div>

### 关键组件

<div class="space-y-2 mt-2 text-sm">

<div class="p-2 rounded border-l-4 border-blue-400 bg-blue-50">
<strong>Encoder</strong> — 字符 → 理解向量
</div>

<div class="p-2 rounded border-l-4 border-orange-400 bg-orange-50">
<strong>Attention</strong> — 朗读演员的提词器
</div>

<div class="p-2 rounded border-l-4 border-purple-400 bg-purple-50">
<strong>Decoder</strong> — 一帧一帧地生成 Mel 频谱图
</div>

<div class="p-2 rounded border-l-4 border-red-400 bg-red-50">
<strong>Griffin-Lim Vocoder</strong> — Mel 频谱图反转成音频
</div>

</div>

</div>

</div>

---
layout: two-cols
---

# Tacotron 的流程

文字进,音频出。注意力机制是关键——

输入「Hello world」5 个字符,输出可以是
「Helloooo~ World」,也可以是「Hello Woooorld~」。

<strong>输入序列和输出序列的长度不一样</strong>,所以解码器在每一帧都要「问」注意力模块:下一帧该生成什么?

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
注意力机制本来是为机器翻译做的 Seq2Seq——Tacotron 把这套思路用在了语音合成上。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tacotron-arch.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Tacotron 的两个天生短板

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### ① 一对一的错误假设

它假设输入文字和输出音频是<strong>一对一</strong>的关系。

但音频还由「说话人特点、情绪、声调」等参数决定。

<div class="mt-3 text-sm opacity-80">
所以 Tacotron 只能针对<strong>一个专一说话人</strong>训练,<strong>不能多说话人,更不可能做声音克隆</strong>。
</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### ② 自回归 = 慢 + 吃资源

Seq2Seq 是自回归生成——必须<strong>一帧一帧地等</strong>。

<div class="mt-3 text-sm opacity-80">
「它不可能很快地合成出整段语音。速度、资源消耗,都是当时依然没办法解决的难点。」
</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-gray-50 border-l-4 border-gray-500 italic text-center">
灵活度不高、还慢、还消耗资源——很快就被取代
</div>

---

# FastSpeech · 2019:不愧叫这个名字

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

微软与浙江大学 2019 年提出的 FastSpeech,目标就是解决 Tacotron「速度慢、不稳定、难控制」三大痛点。

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500">

### 核心创新

<strong>Duration Predictor</strong>(持续时间预测器)<br>
预测每个音素的发音长度

<strong>Length Regulator</strong>(长度调节器)<br>
按预测时长拉伸编码特征

</div>

<div class="mt-3 text-sm opacity-80">
「FastSpeech 更像一个『更高阶的朗读者』——先预览整段文字,了解每个字的发音时长,然后一次性把整段文字朗读出来。」
</div>

</div>

<div>

### 提速幅度

<div class="grid grid-cols-1 gap-3 mt-2">

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-center">
<div class="text-xs opacity-60">Mel 频谱图生成</div>
<div class="text-4xl font-bold text-red-600 my-1">270×</div>
<div class="text-xs opacity-70">相比 Tacotron 自回归</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200 text-center">
<div class="text-xs opacity-60">完整语音合成</div>
<div class="text-4xl font-bold text-orange-600 my-1">38×</div>
<div class="text-xs opacity-70">端到端提速</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>附赠</strong>:非自回归结构避免了传统模型常见的<strong>跳字和重复问题</strong>——稳定性大幅提升。
</div>

</div>

</div>

</div>

---
layout: two-cols
---

# 串行变并行:范式跳跃

Tacotron 输出「今天天好蓝啊」是<strong>从左到右</strong>:

- 先输出「今」,大概学到 0.3 秒
- 再基于之前的结果判断「天」要多长

→ 间接学到字符长度,<strong>互相依赖</strong>。

FastSpeech 则<strong>强行打标签</strong>:

- 「今」是 0.3 秒
- 「天」是 0.2 秒

让模型直接学每个字的时长,<strong>6 个字同时往前生成</strong>。

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
这就是把「自回归」改成「非自回归」的本质——并行化打开 270× 的速度天花板。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./fastspeech-parallel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# VITS · 2021:老戏骨登场

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

2021 年一群韩国研究者发表了 VITS——端到端语音合成模型,<strong>迅速成为业界新标准</strong>。

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 老戏骨的本事

「能够根据剧本(文本),演绎出不同情感、语速和语调的表演,演技也能更加自然。」

</div>

<div class="mt-4 text-sm opacity-80">
VITS 标志着 TTS 从<strong>各种小模块串起来</strong>的拼装系统,转向<strong>基于 flow matching(流匹配)框架统一概率建模</strong>的整合阶段。
</div>

<div class="mt-3 p-3 rounded bg-gray-50 border-l-4 border-gray-500 text-xs">
<strong>真正意义上的 Gen AI</strong>:模型里有随机采样过程,每次输出都是<strong>千变万化</strong>的。
</div>

</div>

<div>

### 从 Tacotron → FastSpeech → VITS

<div class="space-y-3 mt-2 text-sm">

<div class="p-3 rounded border-l-4 border-blue-400 bg-blue-50">
<strong>Tacotron</strong> — Seq2Seq,一对一映射
</div>

<div class="p-3 rounded border-l-4 border-green-400 bg-green-50">
<strong>FastSpeech</strong> — 非自回归,快但表达受限
</div>

<div class="p-3 rounded border-l-4 border-orange-500 bg-orange-50">
<strong>VITS</strong> — Flow + VAE,<strong>一对多</strong>映射,语速/语调/情感全部可控
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>意外应用</strong>:大部分<strong>变声器</strong>都是基于 VITS 实现的。
</div>

</div>

</div>

---
layout: two-cols
---

# VITS 的四大武器

<strong>先验 + 后验网络</strong>——用真实语音推断「这段话背后用了哪些潜在因素」(语调、速度、情绪)。

<strong>Flow Matching</strong>——把一句简单的「你好」演绎成<strong>温柔版 / 机械版 / 傲娇版</strong>,只需稍微调整一下变量。

<strong>GAN 对抗训练</strong>——解码器是「演员」,判别器是「观众」,对抗着把自然度顶上去。

<strong>自动对齐</strong>——不再依赖外部长度预测器,模型<strong>自己学会</strong>文字和语音的对应关系,无需人工标注。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vits-flow.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 那些你刷到过的爆款,都是 VITS

<div class="mt-6 text-center text-xl opacity-80">
还记得这些社交媒体「病毒式传播」的视频吗?
</div>

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### Taylor Swift 说中文
<div class="text-xs opacity-60 mt-2">美式发音 + 中文字幕的诡异感</div>

</div>

<div class="p-5 rounded bg-red-50 border-2 border-red-200">

### 郭德纲说英文相声
<div class="text-xs opacity-60 mt-2">天津味儿的伦敦腔</div>

</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### AI 孙燕姿
<div class="text-xs opacity-60 mt-2">翻唱席卷 B 站</div>

</div>

</div>

<div class="mt-8 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-center">
「这些变音视频都是基于 VITS 做出来的。」
</div>

<div class="mt-2 text-xs opacity-60 text-center">
变声器、声音转换、跨语言克隆——VITS 把娱乐玩家拉进了 TTS 领域
</div>

---

# VALL-E · 2023:三秒钟模仿大师

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

2023 年微软的 VALL-E 论文<strong>「简单到极致」</strong>:

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
「就像 ChatGPT 一样,它其实就是一个很简单的模型——<strong>就是一个 Transformer</strong>。输入很多文字转成 token,然后 token 上面互相的注意力机制,以自回归的方式去输出 token。」
</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 天份极高的模仿大师

「这样的演员他<strong>只需听三秒钟的某人说话</strong>,就能模仿其声音、语调和情感,朗读任意文本。」

</div>

</div>

<div>

### 两大创新

<div class="space-y-3 mt-2 text-sm">

<div class="p-3 rounded border-l-4 border-blue-400 bg-blue-50">
<strong>音频编码</strong> — 神经音频编解码器(如 <strong>EnCodec</strong>)把语音压缩成离散 token,保留说话者声音特征
</div>

<div class="p-3 rounded border-l-4 border-green-400 bg-green-50">
<strong>语言建模</strong> — 训练 LM 在给定「文本 + 音频提示」的条件下,生成目标语音的 token 序列
</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>关键能力</strong>:<strong>零样本学习(zero-shot learning)</strong>——几秒音频提示即可模仿任意说话者。
</div>

<div class="mt-3 text-xs opacity-70 italic">
「我可以成为一名影视剧里的配音演员。」
</div>

</div>

</div>

---
layout: two-cols
---

# VALL-E:把语音变成 token

整个架构本身就是巨大的创新——一旦你有了 Transformer 这种统一架构,<strong>任何模态都能转换到语音 token 空间</strong>:

- text → speech
- image → speech
- video → speech

「只要你能够转换到这个模态,它都能做。」

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
统一架构 = 强拓展性。语音从此被「语言模型化」。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./valle-tokens.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 2025:MiniMax speech-02 问鼎全球

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

2025 年 MiniMax 发布 speech-02,在两大权威榜单上<strong>同时</strong>超越 OpenAI 与 ElevenLabs,排名全球第一:

<div class="space-y-3 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Artificial Analysis Speech Arena</strong> — 全球语音 Arena 排名第一
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>Hugging Face TTS Arena</strong> — 开放评测榜单第一
</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm italic">
「我们是业内首个实现任意音色灵活控制的模型。」
</div>

</div>

<div class="flex flex-col justify-center">

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 一个新的类比

<strong>「有点像用户就是导演,音色就是演员。」</strong>

<div class="mt-2 text-sm">
用户根据自己想要的效果,通过文字来控制音色的表演——让每一个音色都有很好的自然度和情感表现力。
</div>

</div>

</div>

</div>

---
layout: two-cols
---

# 任意 × 任意 × 任意

speech-02 的核心叙事不是「更好」,而是<strong>「无穷多」</strong>:

「这个模型它实际上是实现了<strong>任意的语言、乘以任意的口音、然后再乘以任意的音色</strong>,是一个无穷多的组合。」

「我们并没有像传统的方法一样,每个东西都做一个模型——而是说我们通过大语言模型,来很自然地实现了这一点。」

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
传统:每加一种组合就训一个模型。<br>
MiniMax:一个统一模型覆盖所有组合。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./minimax-stack.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# speech-02 的三大技术升级

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ① 会学习的音色提取器

升级版的 <strong>Speaker Encoder</strong>:

<ul class="text-sm mt-2 space-y-1">
<li>任意长度音频片段 → 固定尺寸条件向量</li>
<li>与后面的 AR Transformer <strong>协同训练</strong></li>
<li>一举支持 <strong>32 种多语种</strong></li>
</ul>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ② 零样本训练

延续 VALL-E 思路:

<ul class="text-sm mt-2 space-y-1">
<li>不需要大量样本 + 文本标注</li>
<li>几秒任意音频即可克隆</li>
<li>非常逼真的效果</li>
</ul>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### ③ Flow-VAE

VITS Flow Matching 的升级:

<ul class="text-sm mt-2 space-y-1">
<li><strong>VAE</strong> 学说话风格的潜在空间</li>
<li><strong>Flow</strong> 让潜在空间表达更强</li>
<li>比传统 Mel 频谱<strong>信息更丰富</strong></li>
</ul>

</div>

</div>

<div class="mt-6 p-4 rounded bg-gray-50 border-l-4 border-gray-500 text-center text-sm">
低字错率 + 高表现力 + 任意组合 = 「目前代表 TTS 最前沿的模型」
</div>

---

# 内容人的痛点:为什么 ElevenLabs 「凑合用」

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="text-sm opacity-70 mb-3">
硅谷101 后期 Jacob 用 ElevenLabs 做了两件事:
</div>

<div class="space-y-3">

<div class="p-3 rounded border-l-4 border-blue-400 bg-blue-50 text-sm">
<strong>克隆主持人音色</strong> — 改稿后免去拉茜姐回来补录
</div>

<div class="p-3 rounded border-l-4 border-orange-400 bg-orange-50 text-sm">
<strong>视频旁白生成</strong> — 还原某人说过的话,代替配音演员
</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm italic">
「这导致我们之前也仅限于在<strong>简短的语句</strong>才敢用它去生成。」
</div>

</div>

<div>

### 卡住的两个问题

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>普通话听起来像地铁广播</strong>

「它听起来像地铁广播,而且还带有点『老外』口音。当你输入的文本越长,这个问题就越明显。」

</div>

<div class="mt-3 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

<strong>情感滑杆只有两档</strong>

「ElevenLabs 的情感滑杆就俩档位,两边拉到头也只是有点激动或者是稍微平静——对克隆的声音并没有太多变化供你选择。<strong>这点就很扣分</strong>。」

</div>

</div>

</div>

---

# Jacob 实测:MiniMax 是真不一样

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 同一个 40 秒样本,克隆陈茜

<div class="space-y-2 mt-2 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>普通话</strong>自然度、稳定性 → <strong>明显</strong>优于 ElevenLabs 版本
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
长文本字数上限 → <strong>20 万字符</strong>(基本能做一本有声书)
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
情绪控制 → <strong>喜怒哀乐</strong>多档可调,不再是俩档位
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>30+ 多语种</strong> + <strong>粤语优化</strong> + 声纹/方言/情感都能跟住
</div>

</div>

</div>

<div>

<div class="p-5 rounded bg-gray-50 border-l-4 border-gray-700 italic">

「这个效果其实有点<strong>出乎我的意料</strong>,整个过程很平稳、很稳定,语音语调也很自然。<strong>像这样一段话我是可以直接拿去视频里用的</strong>。」

<div class="not-italic text-xs opacity-60 mt-3">— Jacob,硅谷101 剪辑后期,长文本试用感受</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 彩蛋:声波分离

把音频拖进去,几秒钟算法就把人声从带 BGM 的新闻素材里分离出来——「<strong>对我来说也算是个宝藏功能</strong>」。

</div>

</div>

</div>

---

# 「超拟人」=「超过真人」

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-lg italic">
「我们这次推出的 speech-02,主要有三个亮点:<strong>超拟人、个性化,并且支持 32 种多语言</strong>。」
</div>

<div class="mt-4 p-5 bg-red-50 border-l-4 border-red-500 rounded text-lg italic">
「很多人理解超拟人是『超级像人』——但是我们这里说的超拟人,是 <strong>『超过真人』</strong>。」
</div>

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">
<div class="text-xs opacity-60">错误率</div>
<div class="text-3xl font-bold text-red-600 my-2">比真人更低</div>
<div class="text-xs opacity-70">意味着模型更鲁棒,声音更稳定</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-xs opacity-60">相似度 / 表现力</div>
<div class="text-3xl font-bold text-orange-600 my-2">与真人一致</div>
<div class="text-xs opacity-70">音色、口音、方言、情感、韵律</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-xs opacity-60">句间停顿</div>
<div class="text-3xl font-bold text-purple-600 my-2">比真人更紧</div>
<div class="text-xs opacity-70">不同句子之间的 gap 更小</div>
</div>

</div>

---

# 价格也在塌方:商业化的临界点

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 相对 ElevenLabs 的定价

speech-02 同时实现了<strong>性能反超</strong>和<strong>价格断崖</strong>:

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 rounded bg-white border border-orange-200">
<strong>vs Flash v2.5</strong> → <strong>1/2</strong> 价格
</div>

<div class="p-2 rounded bg-white border border-orange-200">
<strong>vs Multilingual v2</strong> → <strong>1/4</strong> 价格
</div>

</div>

</div>

</div>

<div class="flex flex-col justify-center">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

「更好的科技其实能拓展它的应用边界。声音作为一个非常重要的内容载体,因为我们更好的技术的问世,非常多的垂直领域都会把声音作为一个很重要的媒介。」

</div>

<div class="mt-4 p-3 rounded bg-gray-50 text-sm">
<strong>临界条件</strong>:技术进步 + 价格下降 = 更快的商业落地成为可能
</div>

</div>

</div>

---

# 应用层爆发:Voice Agents 终于「可用」

<div class="mt-2 p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">
「当大语言模型很聪明的时候,语音我也要更像真人,它才更匹配——它拓展了非常大的所谓 Voice agents 这个市场。<strong>我们的语音助手现在终于到了可用级别</strong>。」
</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>影视配音</strong> — 不必再雇专业配音演员
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>播客制作</strong> — 补录、改稿、旁白一键完成
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>客服中心</strong> — 24/7 自然对话
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>教育 AI 助手</strong> — 陪练、口语、定制化老师
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>交互式开放世界游戏</strong> — 实时生成 NPC 对话
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>有声书 + 无障碍</strong> — 让残障 / 不识字人群也能享受
</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
「历史上因为成本原因没法有声化的内容,你全都可以变成有声书。」
</div>

---

# 案例:24 小时陪你练英语的「AI 阿祖」

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

前段时间火爆全网的「<strong>吴彦祖带你学口语</strong>」视频——

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 rounded border-l-4 border-blue-500 bg-blue-50">
<strong>课程内容</strong> — 吴彦祖本人录制
</div>

<div class="p-3 rounded border-l-4 border-purple-500 bg-purple-50">
<strong>陪练环节</strong> — 「<strong>AI 阿祖</strong>」的语音聊天模式
</div>

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50">
<strong>技术底层</strong> — MiniMax 语音模型构建的 <strong>24 小时可定制 AI 语言陪练系统</strong>
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
明星音色 + 24/7 在线 + 实时对话——<strong>这是以前用户根本拿不到的服务形态</strong>。
</div>

</div>

<div class="flex flex-col justify-center">

<div class="p-5 rounded bg-gray-50 border-l-4 border-gray-700 italic">

「『单人房也包早餐吗?』」

<div class="not-italic text-xs opacity-60 mt-2">— 「AI 阿祖」课件示例</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

陈茜评论:「<strong>我再也不用半夜被抓起来补录旁白了</strong>。」

</div>

</div>

</div>

---

# 反面:声音版权,谁来负责?

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

零样本学习让克隆变容易,<strong>版权与安全问题随之放大</strong>。

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500">

### 真实的火药桶

OpenAI 在展示 4o 语音多模态产品时,因为声音<strong>过于像美国演员 Scarlett Johansson</strong>,被后者公开抨击。

</div>

<div class="mt-4 text-sm opacity-80">
产业里有不少公司在推进<strong>解决方案和相关立法</strong>,让技术变得更合规——也让大规模落地成为可能。
</div>

</div>

<div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

「我们要解决的问题是——<strong>让谁的声音、谁说的话、是否被授权,这三件事都可以查证,有据可依。</strong>」

<div class="not-italic text-xs opacity-60 mt-3">— Shine,声纹鉴定与声签授权创业者</div>

</div>

<div class="mt-4 p-3 rounded bg-gray-50 border-l-4 border-gray-500 text-sm">

<strong>核心问题</strong>:大众需要知道——他现在正在听到的这个声音,<strong>首先它是属于一个真人发声,还是 AI 生成声?</strong>

</div>

</div>

</div>

---
layout: two-cols
---

# 三件事 都可以查证

第一个产品:<strong>检测一个声音是否由 AI 生成</strong>。

第二个产品:<strong>在平台生产出来的声音</strong>,可以追溯到——

- 谁的声音
- 谁想说的话
- 是否被授权

技术手段是<strong>声音水印</strong>:

「你听不出来,但是如果进行检测的话,是可以把这个信息从这个里面提取出来的。」

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>声纹鉴定 + 声签授权</strong> = 声音作为版权在将来能被更好的保护
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./watermark-flow.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 长期看:修图软件没有毁灭摄影

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic">

「这就像是<strong>修图软件也没有毁灭摄影本身一样</strong>。我们反而是催生了更多的管理、认证、账号标识、标准——这种东西。」

<div class="not-italic text-xs opacity-60 mt-3">— Shine</div>

</div>

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

「然后声音也会<strong>从真伪混乱走向有据可信</strong>。」

</div>

</div>

<div class="flex flex-col justify-center">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 范式迁移

价值正在从——

<strong>「人们对其逼真程度的质疑」</strong>

转向——

<strong>「如何更好地用这个工具」</strong>

</div>

<div class="mt-4 text-sm opacity-70">
电影《Her》中呈现的丝滑效果、人类对语音的交互新范式,<strong>「或许正在比我们想象中更快的速度到来」</strong>。
</div>

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句:</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
「感觉泛化能力已经足够强,不仅在多语言上合成得游刃有余,还能对不同口音、不同情绪进行人声的模拟和生成。」
<div class="text-xs opacity-60 mt-1 not-italic">— 陈茜,开场试用感受</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
「我们是业内首个实现任意音色灵活控制的模型。有点像用户就是导演,音色就是演员。」
<div class="text-xs opacity-60 mt-1 not-italic">— MiniMax 团队,speech-02 技术定位</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
「很多人理解超拟人是超级像人,但是我们这里说的超拟人,是超过真人。」
<div class="text-xs opacity-60 mt-1 not-italic">— MiniMax,关于产品命名</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
「ElevenLabs 听起来像地铁广播,而且还带有点『老外』口音——当你输入的文本越长,这个问题就越明显。」
<div class="text-xs opacity-60 mt-1 not-italic">— Jacob,硅谷101 后期</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
「我们要解决的问题是——让谁的声音、谁说的话、是否被授权,这三件事都可以查证,有据可依。」
<div class="text-xs opacity-60 mt-1 not-italic">— Shine,声音版权创业者</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
「这就像是修图软件也没有毁灭摄影本身一样——声音也会从真伪混乱走向有据可信。」
<div class="text-xs opacity-60 mt-1 not-italic">— Shine,关于长期影响</div>
</div>

</div>

---
layout: end
---

# 「这是一个非常激动人心的时刻」

<div class="mt-6 text-lg italic opacity-80">
「我们的语音助手现在终于到了可用级别——这将打开很大的市场想象空间。」
</div>

<div class="mt-8 text-xs opacity-50">
硅谷101 · 陈茜 · 解析 TTS 五代里程碑与 MiniMax speech-02
</div>
