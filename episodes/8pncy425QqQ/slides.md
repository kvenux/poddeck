---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '"杭州六小龙"首个IPO、空间智能与AI的下一步：对话群核科技创始人黄晓煌'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 杭州六小龙首个 IPO

<div class="text-2xl mt-3 opacity-80">空间智能与 AI 的下一步 —— 对话 <strong>群核科技</strong> 创始人黄晓煌</div>

<div class="mt-10 text-sm opacity-60">
硅谷 101 · 陈茜 × 黄晓煌（群核科技 / 酷家乐 创始人）
</div>

<div class="mt-3 text-xs opacity-50">
从 NVIDIA CUDA 第一批开发者，到"杭州六小龙"第一家上市的公司 —— 一个押注物理世界的中国故事。
</div>

---

# 这期到底在讲什么

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 三个概念辨析

**世界模型 / 空间智能 / 具身智能** —— 用一扇门把它们讲清楚。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 中美两条路线

群核贴近**物理世界**，World Labs 贴近**虚拟世界**。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 表征怎么选

点云、Mesh、NeRF、3D 高斯 —— 群核最后选了 **Mesh + 3D 高斯混合**。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 创业故事

2012 年因英伟达履历**融不到资**，被迫包装成家装 O2O。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 数据瓶颈

空间数据没法像图片文字那样**从互联网扒**。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 护城河进化

Claude Code、OpenCode 火了之后 —— **工具不再是壁垒**。

</div>

</div>

---

# 一句话：为什么这期值得听

<div class="mt-8 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"对我来说没有空间智能，是不可能去实现 AGI 的，而我想要去解决这个问题。"

</div>

<div class="mt-4 text-sm opacity-70">
—— 黄晓煌，群核科技创始人
</div>

<div class="mt-10 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 群核是谁

"杭州六小龙"第一家 IPO 的公司。从空间设计软件**酷家乐**起家，转型为**空间智能服务商**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么是现在

2026 年的 AI 风向越来越清晰 —— **世界模型**。而空间智能，被很多研究者视为那个"关键拼图"。

</div>

</div>

---
layout: two-cols
---

# 三个概念，用一扇门讲清楚

<div class="text-sm opacity-70 mb-4">黄晓煌在采访中举的例子：</div>

<div class="space-y-2 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**空间智能** —— 你看一眼就知道"<strong>这里有一扇门，门上有把手</strong>"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**具身智能** —— 控制身体走到门前、握住门把、推开门。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**世界模型** —— 走过去的过程中，有人在旁边走动，**你能预测、避开**，然后再去开门。

</div>

</div>

<div class="mt-4 p-3 text-xs bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>作者概括</strong>：这是一条 "脑 → 空间 → 身体" 的清晰路径，三者缺一不可。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./trio-concepts.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 空间智能的五个模块

<div class="text-sm opacity-70 mb-6">从"看见"到"行动"的能力栈：</div>

<div class="grid grid-cols-5 gap-3 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ① 感知
看到了什么

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ② 表征
把它"存"成什么

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### ③ 推理
空间关系是什么

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### ④ 预测
接下来会发生什么

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### ⑤ 行动
该怎么操作

</div>

</div>

<div class="mt-8 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded text-sm">

"大语言模型代表了语言。那我们的视觉、触觉，以及我们跟这物理世界的交互，它很重要一点就是空间智能。"

</div>

---

# 业界的两条路线

<div class="text-sm opacity-70 mb-4">空间智能怎么实现？业界分成两派：</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### A · 空间生成

先**造**一个足够真实、可交互的 3D 世界 —— 让 AI 在里面反复试错、学物理规律，再迁移到现实。

<div class="mt-3 text-xs opacity-70">
代表：李飞飞 World Labs、群核、Meshy AI
</div>

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### B · 潜空间预测

**不还原**视觉细节，把环境压缩进高维潜空间，让 AI 学统计规律 —— 更低延迟、更强泛化。

<div class="mt-3 text-xs opacity-70">
代表：Yann LeCun 的 JEPA、DeepMind 的 Dreamer
</div>

</div>

</div>

<div class="mt-6 p-3 text-xs bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>作者概括</strong>：潜空间预测的代价是<strong>"几何不可解释"</strong>——出错了很难定位、难以人工干预。所以商业落地上，空间生成路线更稳健。
</div>

---

# 空间生成的三种方式

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 重建式

激光扫描、深度相机、无人机摄影从**现实采集** —— 上限取决于数据质量。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 推断式

输入不完整时（只有一张照片、稀疏视角），AI 根据线索**推理补全**。

<div class="mt-2 text-xs opacity-70">当前最活跃方向</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 生成式

借助扩散模型、LRM 等技术，**从海量数据学三维规律** —— 文字/草图直接出 3D。

</div>

</div>

<div class="mt-8 p-4 text-sm italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

实际中越来越多前沿尝试把三者**融合在一起用** —— World Labs 既学结构、又推断、又生成。

</div>

---
layout: two-cols
---

# 空间到底怎么"存"

<div class="text-sm opacity-70 mb-4">群核试过、用过、放弃过的所有方案：</div>

<div class="space-y-2 text-sm">

<div class="p-2 rounded bg-slate-50 border-l-4 border-slate-400">
<strong>点云</strong> —— 能表征的信息太少
</div>

<div class="p-2 rounded bg-cyan-50 border-l-4 border-cyan-500">
<strong>Mesh</strong> —— 三维世界的"抽象"，<strong>"它并不是真实的"</strong>
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>NeRF</strong> —— "性能太慢了"，每个场景单独训练
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>3D 高斯</strong> —— 视觉完美，<strong>"交互方面有缺陷"</strong>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-3">

**群核现在用的 →  Mesh + 3D 高斯 混合**

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./representation-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 中国 vs 美国：两条很不一样的路

<div class="text-sm opacity-70 mb-4">黄晓煌反复强调的一个区别：</div>

<div class="space-y-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 中国 · 群核

**贴近物理世界**。CAD/BIM 数据多、机器人本体公司多、采集设备公司多 —— 工程 + 产业驱动。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 美国 · World Labs

**贴近虚拟世界**。大模型公司强，做了很多和真实世界不一样的东西 —— 学术 + 前沿驱动。

</div>

</div>

<div class="mt-4 p-3 italic text-sm border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

"漫画效果之类的，我们是不打算做的 …… 但那一块我们就完全不去介入。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./us-cn-routes.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 群核的空间智能产品矩阵

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### SpatialLM

**空间语言模型** —— 补充大语言模型对三维空间的理解空白。2025 年 3 月一推出便登上 HuggingFace 模型榜单前三。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### SpatialGen

**空间生成模型**（开源）—— "跟 World Labs 是比较像的"，从描述直接生成 3D 场景。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### SpatialVerse

面向**具身智能 + 数字孪生** —— 高保真空间仿真与合成数据，支持机器人训练、AR/VR、工业数字孪生。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### LuxReal

依托群核自研的空间生成与物理真实渲染 —— **时空一致**的 AI 视频与数字内容，服务影视短剧、广告、电商。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 col-span-2">

### Aholo · 面向所有人的开放平台

**重建 / 生成 / 编辑 / 理解** 四大能力，降低行业接入 3D 空间智能的门槛。

</div>

</div>

---

# 起点：2011 年，一个 NVIDIA CUDA 信徒

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 那时候 GPU 还是"小众硬件"

黄晓煌博士毕业后在英伟达做 CUDA 研究。<strong>"我就是那种第一批开发 CUDA 的人。"</strong>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 一个反共识的信念

"摩尔定律在 CPU 上已经走到了尽头，GPU 因为它的 Manycore 的架构 …… 它能够持续地，算力可以更快地提升。"

</div>

</div>

<div class="mt-6 p-5 italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 rounded">

"我费尽心思去推销，给各个科研机构什么，让他们去用 CUDA，但是很费劲。后面我想想，那还不如我自己用 …… <strong>还不如自己创业。</strong>"

</div>

<div class="mt-3 text-xs opacity-60">2011 年底拿着 GPU 渲染 Demo 回国，2012 年正式开做。</div>

---

# 2012：第一年没融到资

<div class="text-sm opacity-70 mb-4">那时候英伟达不是加分项，是减分项：</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 投资人的判断

"<strong>觉得英伟达，马上要倒闭了</strong>。" —— 一个很著名的基金经理直接说"工作履历不太好"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 时代的偏好

"当时最流行的实际上不是技术公司，是 **O2O 公司**。"

要"在行业里混过的人"，纯技术路线没人买账。

</div>

</div>

<div class="mt-6 p-5 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

"我 2012 年一年基本没融到资。"

</div>

<div class="mt-4 text-sm opacity-70">
所以"从那第一天开始，我们做的任何产品，都希望它能够想好落地应用 …… 然后再去做。"
</div>

---

# 包装成"家装 O2O"：曲线救国

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 原版讲法

"把 GPU 做到云端去 …… 然后做快速的物理正确的渲染。"

→ **一分钱都融不到**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 投资人朋友教的版本

"技术你想做啥还是做啥，<strong>你包装成家装 O2O 的故事，很快就融到钱了。</strong>"

→ IDG 200 万美金

</div>

</div>

<div class="mt-8 p-4 italic text-sm border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-30 rounded">

"原来你做一套图要花一星期 …… 我们通过这个 GPU 集群，实现了早期的自动设计 …… <strong>基本上几个小时就可以做完。</strong>"

</div>

<div class="mt-4 text-xs opacity-60">这个产品叫 —— <strong>酷家乐</strong>。后面"很快就爆了"。</div>

---

# 2018：第二次转向 —— 摸到空间智能的前身

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2017 现金流转正

"<strong>就躺着赚钱的感觉。</strong>"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2018 开始投 AI

"那时候只能说识别 …… **视觉识别，还谈不上智能**。"

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded text-sm">

"我们后面还开源了一套数据集叫 <strong>InteriorNet</strong>，就有点模仿李飞飞的那个 …… ImageNet …… 找了很多教授他们来实验。<strong>还确实有不少 CVPR 这种顶级的论文发现</strong>。"

</div>

<div class="mt-4 text-sm opacity-70">
"你就会快速地通过图像或者一系列的图像，把这个空间结构化抽取出来。你有结构化信息，你就能理解它。"
</div>

---

# 2020 年的小插曲：房地产回光返照

<div class="text-sm opacity-70 mb-4">转 AI 转到一半，遇到了一个诱惑：</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 客户的"见面礼"

"啥也不说，<strong>先往你账上打了 1000 万</strong>，然后咱们再来谈合作 …… 我说没谈成，我可以退给你的，他说没谈成我不要了。"

—— 黄晓煌："基本上眼珠都快掉出来了。"

陈茜："<strong>什么样的金主爸爸这么豪横？</strong>"

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### CFO 的"灵魂拷问"

"<strong>你这公司战略不能看今日头条来设计。</strong>这明显如日中天的行业，<strong>你苦哈哈的搞什么 AI</strong>？你干了两三年还不如人家见面礼呢。"

</div>

</div>

<div class="mt-6 p-3 text-xs bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>作者概括</strong>：账上躺着 1000 万 vs 远方愿景 —— 这是创业公司每天都要做的取舍。
</div>

---
layout: two-cols
---

# 2022 年的震撼：对算法的认知"完全变了"

<div class="text-sm opacity-70 mb-4">ChatGPT / Midjourney 给黄晓煌的冲击：</div>

<div class="space-y-3 text-sm">

<div class="p-3 rounded bg-slate-50 border-l-4 border-slate-500">

### 过去信仰的

通过<strong>更聪明的人</strong>写更精妙的算法 → 模型就更聪明。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 新的范式

"<strong>数据量越多它就越智能、越聪明。</strong>"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 后果

"那这对我原来对于算法的认知，<strong>已经完全变了</strong>。"

</div>

</div>

<div class="mt-4 text-xs opacity-60">
"天天也在看论文，自己在做实验 …… 一是有点恐惧，有点焦虑；二是也很兴奋。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./algo-shift.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 2023：把战略重心调整到空间智能

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2022 之前

公司的<strong>增长核心是产品</strong>。

底层算法躲在产品下面，是辅助。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2023 之后

"<strong>它躲在产品下面的这层能力，实际上是公司真正的壁垒跟驱动力。</strong>"

</div>

</div>

<div class="mt-6 p-4 italic text-sm border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded">

"原来的理念是做一个简单的工具，然后提高人的效率。<strong>但现在就变成直接把人给替代掉了</strong> …… 整个工具链的做法、体系的做法已经完全不一样了。"

</div>

<div class="mt-3 text-xs opacity-60">
产品定位从"辅助性工具" → "代替人来完成任务"。
</div>

---
layout: two-cols
---

# 护城河的升级：从工具 → 硬件连接

<div class="text-sm opacity-70 mb-4">Claude Code、OpenCode 火了之后，群核内部的反思：</div>

<div class="space-y-3 text-sm">

<div class="p-3 rounded bg-slate-50 border-l-4 border-slate-500">

### 早期护城河

工具 + 数据 + 算法模型 循环发展。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 新的认识

"<strong>我觉得这还不够。我觉得有硬件 …… 是你得连接硬件。</strong>"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 新的边界

"你的模型、硬件、数据，肯定还是壁垒。"

工具这块就**弱化**了。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./moat-evolution.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Claude Code 的启示：从 SaaS 到 Token

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 收费模式变了

"以后用工具的人会变少 …… 它会硬件接着模型直接在用。

所以你的<strong>收费模式肯定不能是按 SaaS …… 而是按 Token、按量付费</strong>。"

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 输入设备变了

"未来是一个多硬件终端的世界。你的眼镜、你的机械臂、你的各种摄像头 …… 都拥有智能。

<strong>未来你报警只要对着监控摄像头打一个手势可能就报警了 …… 一个眼神它就能够理解你。</strong>"

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded text-sm">

"如果能够锁定在一个电脑里、自我完成闭环的东西，<strong>我觉得就很危险。</strong>"

</div>

---

# 数据：空间智能最现实的瓶颈

<div class="text-sm opacity-70 mb-4">黄晓煌：这个领域目前最大的问题是 ——</div>

<div class="mt-4 p-5 italic text-xl border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"缺少像大语言模型那样子，<strong>大量的、免费的开源数据</strong>。"

</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 网上没有

图片、文字可以扒，<strong>"这种空间的数据，一，网上没有"</strong>。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 隐私 / 版权

"我把这空间拍摄下来，我放到互联网上 …… 要不要征得这房东的同意？这么多个 owner，<strong>就没有办法规模化了</strong>。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 标注成本高

"它不是说我有三维数据就够了，你还要有<strong>很准确的标注信息</strong>。"

</div>

</div>

---

# 一个具体的故事：杯子的摩擦力

<div class="text-sm opacity-70 mb-4">机器人要拿起一个杯子，需要多少数据？</div>

<div class="mt-4 p-5 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded text-sm">

"它握起一个杯子的话，它就得有无数的杯子去训练它 …… 比如说杯子的质量、杯子的材质、它的摩擦力，等等都有相关。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 人的直觉

"你一看到杯子你大概都能 …… <strong>玻璃的还是金属的，你都能猜得出它的质量</strong>。"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 机器的代价

"有的公司要求那个数据非常精确，还得去做实验 …… 我一定要测出它的摩擦力，或者某一个杯子，<strong>我一定要测出它的准确质量，精确到克</strong>。"

</div>

</div>

<div class="mt-4 p-3 text-xs bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>作者概括</strong>："物理世界真的是挺复杂的" —— 质量、摩擦力只是最低要求，还有手感、会不会变形、变形是否均匀……长尾无穷。
</div>

---

# 算力账：营收的 10% 拿去买卡

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 公司内部："抢卡"是常态

"我来出差前还在协调，同事那个训练排队的问题 …… <strong>你先训练还是我先训练。</strong>"

"<strong>卡是永远不够的</strong>，就看你要怎么算这个经济账。"

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 当前的尺度

"<strong>我目前希望控制在 10% 左右</strong> —— 就拿 10% 的钱去买卡，做算力投入。"

"<strong>一定要用的就买，波动的就租。</strong>"

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded text-sm">

"如果一个竞争对手跟你死磕，他的卡很多，你就比他慢 …… <strong>那不投入会死的，那我肯定是大投入了。</strong>"

</div>

---

# 群核的内部分配哲学：吵架

<div class="text-sm opacity-70 mb-4">基础研究 vs 业务开发，怎么分钱？</div>

<div class="mt-6 p-5 italic text-xl border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded">

陈茜："你们在内部有一个非常明晰的分配逻辑吗？"

黄晓煌：<strong>"就吵架。"</strong>

</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 业务方

"客户需求追得很紧，那你就得招很多人去做他的行业很细的需求。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 研发方

"基础研究你都觉得，这个愿景很牛，但是<strong>什么时候能做出来还真不知道，做出来之后能不能变现也不知道</strong>。"

</div>

</div>

<div class="mt-4 p-3 text-xs bg-purple-50 border-l-4 border-purple-500 rounded">
黄晓煌："我实际上是非常站在<strong>抢人才、然后抢卡</strong>这一边，积极地创新探索。"
</div>

---

# 一个判断：每 3 到 5 年一个新起点

<div class="text-sm opacity-70 mb-4">黄晓煌：CUDA 20 年了，回头看 GPU 的应用变迁 ——</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-slate-50 border-l-4 border-slate-500">

### 最早

只能做简单的数学运算 —— 排序、解方程、算矩阵。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 5 年后

"出现了**挖矿**。"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 再 5 年

"做**视频监控**的那批 AI 起来。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 又 5 年

"到现在**大模型**出来了。"

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded text-sm">

"<strong>再过 5 年，就不知道会出现什么。我觉得挺期待的。</strong>"

</div>

<div class="mt-3 text-xs opacity-60">
"感觉人类的智慧是一层一层搭积木一样的搭上去的，而且越搭越高、越搭越高。"
</div>

---

# 从老黄那里学到的：拿着锤子找钉子

<div class="text-sm opacity-70 mb-4">黄晓煌：我创业的方法论是受英伟达影响最深的：</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 第一性原理先行

"你先找到一个，<strong>你相信一定能够改变世界的东西</strong> —— 这东西会比较通用 —— 然后你再去找应用。"

—— 英伟达最早是游戏卡，<strong>"救了它的是挖矿"</strong>，后面才是大模型。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 先活下来才有未来

"我觉得公司先活下来才有未来 …… 用在游戏行业，只是先活下来。"

群核早期 → 房地产；中期 → 影视短剧、电商；远期 → 机器人。

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded text-sm">

"现在就叫拿着'<strong>锤子</strong>'找'<strong>钉子</strong>'。"

</div>

---

# 黄晓煌对未来的判断

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 时间预期

"我们现在做空间智能也是感觉真正要普及，也是 **3 到 5 年** 我觉得是需要的。"

"<strong>感觉现在只是一个起点而已。</strong>"

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 信念

"只要我们物理世界还存在，<strong>空间智能就一定会发挥它巨大的价值的</strong>。"

</div>

</div>

<div class="mt-8 p-5 italic text-xl border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded">

"你只要相信这一点，<strong>你就慢慢做吧</strong>。反正啥机会来了你就凑上去把业务扩大，如果机会没来就慢慢等呗。"

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"对我来说没有空间智能是不可能去实现 AGI 的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 开场，黄晓煌为整期定调</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"我觉得美国更贴近于虚拟世界，中国更贴近于物理世界。"
<div class="text-xs opacity-60 mt-1 not-italic">— 中美路线之别</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"你包装成家装 O2O 的故事，很快就融到钱了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 2012 年投资人朋友的建议</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"你这公司战略不能看今日头条来设计 …… 你苦哈哈的搞什么 AI？"
<div class="text-xs opacity-60 mt-1 not-italic">— 2020 年 CFO 的"灵魂拷问"</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"数据量越多它就越智能、越聪明 —— 那这对我原来对于算法的认知，已经完全变了。"
<div class="text-xs opacity-60 mt-1 not-italic">— ChatGPT 带来的范式转换</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"但是你的模型、硬件、数据，肯定还是壁垒。"
<div class="text-xs opacity-60 mt-1 not-italic">— Claude Code 时代的新护城河</div>
</div>

<div class="p-3 bg-cyan-50 border-l-4 border-cyan-500 rounded italic">
"现在就叫拿着'锤子'找'钉子'。"
<div class="text-xs opacity-60 mt-1 not-italic">— 创业方法论，从英伟达学到的</div>
</div>

</div>

---
layout: end
---

# 一句结尾

<div class="mt-10 p-6 text-2xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"我觉得至少对得起自己，但能不能再往上几个台阶就<strong>看命了</strong>。"

</div>

<div class="mt-6 text-sm opacity-60">
—— 黄晓煌，群核科技创始人，2026 / 硅谷 101
</div>
