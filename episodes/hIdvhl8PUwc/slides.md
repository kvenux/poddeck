---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '库克的离场，苹果新AI权力重构与价值观天平｜WWDC26'
info: |
  WWDC26 现场观察：库克谢幕、Ternus 接班、AI 权力洗牌、五款 AFM 模型、PCC 隐私架构与苹果在 AI 时代的价值观天平。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 库克的离场

## 苹果新 AI 权力重构与价值观天平 · WWDC26

<div class="mt-10 text-sm opacity-70">
硅谷101 · 陈茜在 Apple Park 现场
</div>

<div class="mt-6 text-xs opacity-50 italic">
"我还会来（中国）的。" —— Tim Cook
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 谢幕一刻

库克最后一次主持 WWDC，全场掌声接近一分钟。9 月之后，硬件出身的 John Ternus 接任 CEO。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 权力洗牌

2025 年秘密会议改写 AI 版图：Giannandrea 出局，Rockwell 接 Siri，外援 Subramanya 担纲模型。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 五款模型

AFM 端侧两款 + 云端三件套，底层与 Gemini 合作，最强模型跑在 Google Cloud 的 NVIDIA GPU 上。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 隐私豪赌

PCC 把端到端加密推理铺到 Google Cloud 异构硬件上，Apple、Google、云管理员"都看不到你的数据"。

</div>

</div>

---

# 谢幕：库克最后一次走上 WWDC 主场

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### 现场

> "卸任前最后一次主持大会的 Tim Cook，收获了全场接近一分钟的掌声与欢呼。"

新一代领导班子已经站在舞台边上，由 **John Ternus** 为重心。

</div>

<div class="p-5 rounded border-2 border-orange-300 bg-orange-50">

### 接受我们采访时

> "我还会来（中国）的。"

> "中国对我们来说是一个非常重要的市场。"

库克本人对中国监管的 AI 功能落地节奏依然"不太确定"，但承诺"非常努力地推进"。

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
关键问题：苹果能继续做 AI 时代的"定义者，而不是追赶者"吗？
</div>

---

# 倒回两年前：Apple Intelligence 留下的烂摊子

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 2024.06.10

<div class="text-3xl font-bold text-blue-700 my-2">发布日</div>

苹果在 WWDC 正式宣布 Apple Intelligence。

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-300">

### 之后

<div class="text-3xl font-bold text-yellow-700 my-2">数次延期</div>

AI 功能交付节奏一拖再拖，外界开始怀疑苹果的 AI 研发能力。

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-300">

### 2025

<div class="text-3xl font-bold text-red-700 my-2">两起诉讼</div>

把"尚未交付的 AI 功能"作为宣传核心，引发消费者**虚假广告诉讼** + 股东**证券欺诈诉讼**。

</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">

"事事要求完美体验的苹果，在 AI 革命带来的冲击面前，无法平衡'用户体验'和'产品创新'这个天平。"

</div>

---

# "完美文化"在 AI 节奏里失衡

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"它过去成功的一个很大的原因，就是它整合，以一公司的力量，一年来憋一个大招，然后一点一点往前走。我觉得是很有效果的。但是我觉得在 AI 时代可能不适合吧。"

</div>

<div class="mt-4 p-5 rounded bg-red-50 border-l-4 border-red-500 italic">

"因为 AI 时代，大概每周就应该有一个 release（版本），它要 aggressive（激进）。"

</div>

<div class="mt-4 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic">

"它如果说还是像以前一年憋一个大招——AI 都已经几个世纪过去了，它才过了一年——我觉得应该是有很大问题的。"

</div>

<div class="mt-4 text-xs opacity-60 text-center">
—— 投资人在采访中的评价
</div>

---

# 2025 秘密会议：库克不在场，AI 团队被拆了

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 谁主持

去年年初这场关键秘密会议，**库克本人没有出席**，由当时的 COO **Jeff Williams** 主持。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 谁失去信任

> "原本负责 AI 的 John Giannandrea，正在失去库克和高层的信任。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 谁被点名

**Mike Rockwell** ——刚把 Vision Pro 与 visionOS 啃下来的硬骨头操盘手；很早就提出过 Siri 改造路线。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 谁挡了一刀

> "但是 Craig Federighi 不同意。"

软件工程的老大坚持：AI 与 Siri 最终应该属于软件工程体系，Rockwell 可以接 Siri，但要**汇报给 Federighi**，而不是 Cook。

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
信息来自彭博社披露 · 这是一次关于"AI 归属权"的内部博弈
</div>

---
layout: two-cols
---

# 新版 AI 权力地图

会议过后：

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">

**Tim Cook** — 从旁观产品变成**亲自下场介入 AI 路线**

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

**Craig Federighi** — 软件负责人，AI 成为操作系统升级中枢

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">

**Mike Rockwell** — 接 Siri，重组团队

</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Amar Subramanya** — 外部找来的模型负责人；Google 16 年老兵，曾管 Gemini / Gemini App / Bard

</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">

**John Giannandrea** — 被边缘化，最终离开

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

**John Ternus** — 9 月接任 CEO，硬件出身

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./power-shift.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 五款模型：Apple Foundation Models 全家桶

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 端侧 · 主力

**AFM 3 Core** — **30 亿参数**，跑在手机端的基础模型。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 端侧 · 高级

**AFM 3 Core Advanced** — **200 亿 MoE 多模态**，一次激活 10–40 亿参数。仅在 iPhone 17 Pro / Pro Max / Air、M4 iPad 12GB+、M3 Mac 12GB+ 跑得动。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 云端 · 主力

**AFM Cloud** — 苹果官方称作 *"server-side workhorse"*，速度与效率优化。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 云端 · 推理巨兽

**AFM Cloud Pro** — 复杂推理、Agentic tool use；跑在 Google Cloud 的 **NVIDIA GPU** 上。

</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 云端 · 图像

**ADM Cloud (Image)** — 图像生成与编辑专用。

</div>

---
layout: two-cols
---

# 闪存戏法：怎么把 200 亿塞进手机

端侧 AI 卡在内存上。Advanced 模型用了两招：

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**1 · 稀疏 MoE**

200 亿总参数，一次激活只用 **10–40 亿**。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**2 · 闪存承载固定参数**

> "把一部分固定的参数放到闪存当中去。"

DRAM 只 dynamic load 当前需要的那部分。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**3 · 回报**

少占内存 + 少耗电。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./flash-trick.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 战略换挡：从 OpenAI 到 Gemini

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-2 border-red-300 bg-red-50">

### 两年前

苹果与 OpenAI 合作。**本地用苹果模型，云上用 GPT**。这种"前沿能力外包"被市场认为是苹果的能力短板。

</div>

<div class="p-5 rounded border-2 border-green-300 bg-green-50">

### 这次

向苹果内部人士求证：**五款模型都是苹果自研**，但底层用到了 Gemini 相关技术与 Google Cloud 基础设施。Cloud Pro 扩展到 Google Cloud 的 NVIDIA GPU，外面包一层 Apple PCC。

</div>

</div>

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"我其实有了解到，他们（谷歌）的很多 Infra（基础设施）团队的成员抽调，专门去支持苹果（私密云计算）这件事。其实还是花了蛮多精力去把这件事情做好的。"

<div class="text-xs opacity-60 not-italic mt-2">—— Runta 创始人 Guanlan Dai</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

技术报告会在今年夏天晚些时候发布，"分享更多的模型细节、评估和 benchmark"。

</div>

---
layout: two-cols
---

# System Orchestrator：苹果的"演唱会指挥家"

新 Siri 不是单一模型，而是一个**调度中心**调四个能力域、五款模型：

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

**App Toolbox** — 通过 App Intents 让 Siri "动手"

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

**Spotlight Index** — 个人数据的语义引索

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">

**On-screen Context** — 看到你屏幕上的内容

</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">

**World Knowledge** — 走到云端拿最新信息

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./orchestrator.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# App Intents：苹果的"胡萝卜 + 大棒"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-2 border-orange-300 bg-orange-50">

### 🥕 胡萝卜

> "如果你的用户量是小于两百万的，你其实是可以免费地，去调用苹果背后 AFM 这个大模型。"

苹果在 Xcode 里把整套 Agent Harness 帮开发者搭好——按它的模式写代码就能**免费**跑模型调用。不用付 token 费、不用接 API。

</div>

<div class="p-5 rounded border-2 border-red-300 bg-red-50">

### 🪓 大棒

> "你想象，苹果整套这个设备，有大概几十亿的用户。"

不加入 App Intents，未来 Siri 调用 App 的流量就分不到。**被边缘化**几乎是确定的。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 italic">

"它其实是用来取代原来的 Siri 相关的这种开发包，叫 SiriKit。"

</div>

---

# demo 平淡：能用，但还不是 Agent

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### demo 里都有什么

- 跨 App 搜信息、邮件、照片
- 回答屏幕上下文相关的问题
- 上网取新信息生成答案
- 专门 Siri App 同步对话历史
- 写作、图片编辑等生成式功能

</div>

<div class="p-5 rounded border-2 border-orange-300 bg-orange-50">

### 但是

> "它今天发的这些东西…… 并不是非常 Agentics（智能体），还是以 Generative AI（生成式 AI）为主，然后多模态，没有太多的 agentic action（智能体行动）。"

</div>

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 italic">

"但我觉得这不是问题，因为它首先先要 catch up（追赶）。"

</div>

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"如果我是从一个苹果的用户角度来讲，我觉得很不错，我觉得我用这个手机会方便很多。"

</div>

---

# 唯一闪过 Agentic 火花的 demo：自动改密码

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 场景

通过 **Password app**，让 Apple Intelligence 配合 Safari **自动导航到对应网站、登录、改密码**。

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么这是关键

> "这是一个非常典型的 Agentic（智能体）的场景。"

但要泛化到第三方 App，需要每个开发者把动作和数据通过 App Intents 暴露给 Siri。

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 现在的位置

> "现在苹果正处于搭建这样 Agentic（智能体）生态的初期。"

</div>

---

# Private Cloud Compute：苹果的隐私豪赌

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"甚至连苹果都不会知道你的数据。"

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一条可验证的计算链

> "只有经过苹果批准、公开登记，并且完成硬件证明的服务器，才能够获得解密请求的能力。请求处理完之后，数据和密钥随即销毁。"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 真金白银的投入

> "壮士断腕的决心，能够把之前的那些 ChatGPT 拿掉，换成 Gemini，其实花了很大力气去做这件事情。"

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 一句关键定位

> "这不是一个 good to have（锦上添花）的事情，而是一个 must have（必不可少）的事情。"

ToC 端消费者 AI 必须要建立的信任基础。

</div>

---
layout: two-cols
---

# PCC 加密计算的六步链路

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">

**1.** 端侧设备先判断请求是否需要上云

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

**2.** Remote attestation：验证目标节点的密码学证明

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

**3.** 通过证明后，加密真正的请求内容上传

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">

**4.** 请求只在 PCC 信任边界内解密 + 模型推理

</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">

**5.** 结果加密回传给设备

</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">

**6.** 临时密钥、运行状态、日志全部清除 —— *"stateless computation"*

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pcc-flow.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 三层硬件信任链

PCC 难的不是想法，是怎么把它**铺到 Google Cloud 异构硬件**上：

<div class="mt-4 space-y-2">

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**Google Titan** — 验证平台启动与身份

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**Intel TDX** — 隔离 CPU 受信任域

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**NVIDIA Blackwell CC** — 隔离 GPU 推理

</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Apple 软件证明** — 验证实际运行代码

</div>

</div>

<div class="mt-3 text-xs opacity-60">

行业里第一次把机密推理"整合成端到端、可全球规模运行"的系统。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./trust-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 欧盟 DMA：合规与隐私的对峙

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### 监管要的是什么

《数字市场法案》(DMA) 要求苹果产品具备**互操作性**——外部开发者能提供"可供下载的、与 Siri 形成竞争关系的 AI 助理"。

</div>

<div class="p-5 rounded border-2 border-red-300 bg-red-50">

### 苹果说的是什么

> "苹果反对说，这将带来隐私和安全方面的隐患。"

双方已经谈了好几个月，提出过多种替代方案，**目前还没有达成一致**。

</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-center">

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-300">

### 欧洲市场

<div class="text-3xl font-bold text-yellow-700 my-1">$1110亿</div>
<div class="text-xs opacity-70">2025 年销售额，苹果第二大市场</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-300">

### 大中华区

<div class="text-3xl font-bold text-orange-700 my-1">第三大</div>
<div class="text-xs opacity-70">同样的监管沟通仍在推进</div>

</div>

</div>

---

# 儿童账户：被几位"科技妈妈"打动的功能

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 升级的是什么

- 设备初始化时选要装哪些 App
- 下载 App / 浏览新网页 / 加联系人 → 家长收到通知，可批可拒
- Screen Time 把 App 分三类：娱乐 / 学习 / ……
- 跨 iPhone / iPad / Mac 同步

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 科技妈妈反馈

> "我们能够以沟通的方式来共同去商量，说你今天能用多少娱乐时间，能用多少学习的时间。"

> "我特别喜欢的是它的设置非常简单……非常 easy。"

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500">

### 真实的局限

> "我有一个青春期的妹妹……到青春期就不管用了，是吧。"

国情：朋友都用微信，"微信我们要怎么管控？这个根本不开放。" 苹果家长管控的舒适区，目前是**小学之前**。

</div>

---

# 华尔街投票：股价 -5%

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-300">

### 股价反应

<div class="text-3xl font-bold text-red-700 my-2">-5%+</div>

WWDC 这一周二级市场资本反馈"比较平淡"。

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-300">

### 评级

<div class="text-3xl font-bold text-yellow-700 my-2">中规中矩</div>

> "基本的中规中矩……并没有给出很多预期以外的东西。"

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-300">

### 时间表

<div class="text-3xl font-bold text-blue-700 my-2">秋天</div>

实际要发布要到今年秋天，**且只是在美国**。

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic">

"如果只是实现了目前 demo 里面的功能的话，我觉得只能叫做符合预期。就说这个考试你可以过关了，但并不说你这个作文写得特别好。"

</div>

<div class="mt-3 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

华尔街想看到的是：苹果能否把**第三方软件权限**真正打通——比如"我要用 Uber 和 Lyft 比个价帮我订个车"——目前 demo 里没有出现这种跨第三方场景。

</div>

---

# 库克 vs Ternus：两个时代的两个气质

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### Tim Cook · 供应链时代 15 年

> "在没有推出任何划时代的新产品的情况下，能够把已有的产品，把它挣的钱能够做到最多。"

包括 Apple Watch、Vision Pro 在他手上，**对营收推动有限**——但把苹果与华尔街的蜜月期带到了高位。

</div>

<div class="p-5 rounded border-2 border-green-300 bg-green-50">

### John Ternus · 硬件产品时代

> "包括像最近的 MacBook Neo，是由他一手来推动的。他是在硬件出身，理论上对产品的掌控、对产品的理解，应该比 Tim Cook 要好。"

</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 但有两个未知数

- 推过的不全是赢家：Touch Bar 也是他一手做的，最后"消费者不喜欢不买单"被取消
- "从来没有跟供应链、跟华尔街打过交道这样一个经验"

</div>

<div class="mt-3 text-xs opacity-60 text-center">

> "苹果现在到一个以后不能再挤牙膏了，要把 AI 做起来……他也许是一个更合适的人。"

</div>

---

# 苹果隐藏的富矿：Context is King

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"AI 如果说要做好，其实一个很大的前提就是，我要知道了解你，对吧。context is the king（上下文为王）。"

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 谁最了解你

> "尤其是在我们的 digital life 里面、数字生活当中，Apple 应该是最了解我们的，Google 可能其次。"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 全世界只剩两套系统

> "手机就两套系统，一套叫做 iOS 另一套叫做安卓。全世界没有其他的公司，从数据挖掘的角度、从理解力的角度，能够超过苹果和 Google。"

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 但富矿能不能挖出来？

> "现在 Gemini 并没有做到这一点。虽然它手上有很多的数据……但它自己的模型并没有说能够比 OpenAI 模型、比 Claude 模型更了解我。"

苹果有同样的题——"想象空间很大，但是最后能不能把你的个人潜力发挥出来，还得看这两个公司能不能最后落地。"

</div>

---

# 商业模式：先把你拴住，再分级收钱

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 短期 — 一定不挣这个钱

> "苹果在短期肯定是不希望通过收服务费的方式来杀鸡取卵的。它肯定是让大家先免费用。"

绝大部分功能"随便用"，包括生图。消耗 token 很猛时可能有限制，但"免费的那个 token limit 应该就足够用"。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 真正想要的

> "先把你牢牢地拴在里面。"

把你的手机、电脑、手表、一切都装满苹果，等"大家都愿意用了，它那个时候可以再把它分成 tier……free tier、mid tier、high tier。"

</div>

</div>

---

# 美的执念：在 AI 时代还能不能成立？

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### 朋友圈一句话

> "苹果在被它上个时代引以为傲的东西所困住。"

外面卷折叠屏、卷相机、卷设计——苹果都没轻易出招，宁愿在 WWDC 花大量时间讲玻璃效果和图标。

</div>

<div class="p-5 rounded border-2 border-purple-300 bg-purple-50">

### 主持人现场观察

> "感觉苹果的审美追求简直是叹为观止。"

乔布斯剧院从大理石墙面到天空的映射，播客录制准备室"顶级五星级 Spa 休息室的感觉"。

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic text-sm">

"苹果对美的追求，让它愿意押上赌注，去赌人们同样愿意去相信美、为美而买单。"

"但这样的匠心文化，在 AI 时代能够让苹果保住它的地位吗？今年的 WWDC 我还没有答案，市场也没有答案。"

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"AI 都已经几个世纪过去了，它才过了一年——我觉得应该是有很大问题的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 投资人评苹果的"一年憋一个大招"文化撞上 AI 节奏</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"但是 Craig Federighi 不同意。"
<div class="text-xs opacity-60 mt-1 not-italic">— 2025 内部会议上，AI 归属权被重新划分到软件体系</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"它其实是一种'胡萝卜+大棒'的方式。"
<div class="text-xs opacity-60 mt-1 not-italic">— App Intents：免费的模型调用 vs Siri 流量的被边缘化</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"这不是一个 good to have 的事情，而是一个 must have 的事情。"
<div class="text-xs opacity-60 mt-1 not-italic">— 评 PCC：消费者 AI 必须的信任基础设施</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"这个考试你可以过关了，但并不说你这个作文写得特别好。"
<div class="text-xs opacity-60 mt-1 not-italic">— 投资人评 demo 的"中规中矩"</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"context is the king（上下文为王）。"
<div class="text-xs opacity-60 mt-1 not-italic">— 苹果与 Google 同样握着的隐藏富矿</div>
</div>

</div>

---
layout: end
---

# 也许最大的对手就是苹果自己

<div class="mt-6 text-base opacity-70">

"在一个新的技术变革时代，苹果由一个新的领导层带进了一个新战场。"

"而在这个战场上，也许最大的对手就是苹果自己。"

</div>

<div class="mt-10 text-xs opacity-50">
《硅谷101》· 陈茜 · WWDC26 现场
</div>
