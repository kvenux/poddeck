---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '人类会被困在1nm吗？深度解析光刻机与芯片制程的未来【深度】'
info: |
  硅谷101 · 陈茜 / 梓沁 主持，访谈 SPIE Fellow 庞博士、ASML 前机械设计工程师 Evan Tao、《光刻巨头 ASML 传奇之路》作者 Marc Hijink。
  本期视频用瑞利判据为骨架，把光源、透镜、掩膜、计算光刻、芯片命名"骗局"、纳米压印、政治经济串成一根线。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 人类会被困在 1nm 吗？

## 深度解析光刻机与芯片制程的未来

<div class="mt-10 text-base opacity-70">

硅谷101 · 陈茜 / 梓沁 主持

嘉宾：庞博士（SPIE Fellow）· Evan Tao（前 ASML）· Marc Hijink（ASML 传记作者）

</div>

<div class="mt-12 text-xs opacity-50">本 deck 所有引言皆已在原始 transcript 中 grep 验证</div>

---

# 为什么这一期值得看完

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 一台机器
全世界最赚钱、最精密、最反直觉。一个**屁**就能让它减产几小时。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 一根公式
**CD = K₁ · λ / NA**。光刻所有的进步都在这三个字母里打转。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 一个骗局
你手机里的"3nm"其实远大于 3nm。这事台积电带头干起来的。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 一场反哺
AI 让芯片需求重燃，也让 GPU 反过来给光刻机加 buff。

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 一段政治史
ASML 是荷兰公司，却被美国管。这背后是一段刻意的"扶持"。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 一个判断
ASML 说"至少到 2040 都不用担心物理极限"。

</div>

</div>

---

# 三句话开局

<div class="grid grid-cols-3 gap-6 mt-8 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 💰 一台机器
<div class="text-3xl font-bold text-blue-600 my-3">3.5 亿欧</div>
<div class="text-sm opacity-70">High-NA EUV 单价<br/>比 Low-NA 贵 75%</div>

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### 🐄 几个屁
<div class="text-3xl font-bold text-orange-600 my-3">良率↓</div>
<div class="text-sm opacity-70">Intel 亚利桑那工厂<br/>奶牛甲烷飘进无尘室</div>

</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### 👤 全球两人
<div class="text-3xl font-bold text-purple-600 my-3">Joann +1</div>
<div class="text-sm opacity-70">手工缠绕锡滴喷嘴<br/>无法机械替代</div>

</div>

</div>

<div class="mt-8 p-5 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

"与 Joann 握手的时候请务必小心。"

<div class="text-xs opacity-60 mt-2 not-italic">—— 引自硅谷101视频原文，描述 ASML 内部对 Joann 的玩笑</div>

</div>

---
layout: two-cols
---

# 一根公式撑起整个行业

ASML 各地办公室的墙上都写着这条**瑞利判据**：

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 my-4">

要把芯片做得更小，三条路：

- **降低 λ**：换更短波长的光（DUV → EUV）
- **提升 NA**：让透镜收集更大角度的光
- **优化 K₁**：用算法把"工艺极限"再往下榨

</div>

<div class="text-sm opacity-70 mt-4">
λ 短期不会换，NA 是接下来 10 年主战场，K₁ 是 AI 介入的空间。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./litho-formula.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# EUV 光是这样硬"造"出来的

液态锡 → 锡滴 → 等离子体 → 极紫外光：

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 my-3 text-sm">

- 喷嘴喷出锡滴，**每秒 5 万颗**
- 每颗 **30 微米**（头发丝一半）
- 先用低能激光打**饼**，再高能激光打**等离子体**
- 激光要 **10 万次/秒打靶** 才能"稳定"

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 my-3 text-sm">

**喷嘴换不了机械臂**——
全球只有两人能手工把两根几乎看不见的线缠到喷嘴上。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./euv-source.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 功率：从 10W 到 1kW 的攀爬

EUV 早在 **2010** 年就造出来了，但没人敢用：

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**2010**：功率 < 10W。每小时只能造 5-10 颗芯片，根本不能量产。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**2017 年 7 月**：功率达到 **250W**。商业化的分水岭。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**2023**：提升到 **600W**。EUV 真正成为主力。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**正在攻克**：1kW + High-NA 配套。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./euv-power-curve.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 光源是"最后才换"的部件

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 为什么不轻易换波长？

光源不是只跟"光刻"有关。换一个波长，**整条工艺链**都得跟着换：

- 光刻胶（Photoresist）配方
- 显影、刻蚀工艺
- 掩膜版材料
- 镜片镀膜

</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### 嘉宾的判断

<div class="text-base italic">

"光源是最后一个换的。就是实在没有办法了，那就再换下一个光源。"

</div>

<div class="text-xs opacity-60 mt-3 not-italic">

EUV 光源 **至少会用到 2035 年、2040 年**。

</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**作者概括**：所以短期内你听到的所有制程进步，都不会来自光源。换波长是核选项，不到山穷水尽不掀桌子。

</div>

---

# 蔡司透镜：能不能再做大？

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 一个量级的类比

把 **30 厘米** 的透镜放大到**整个德国那么大**——

它表面的**不平整度**只有**一个足球**那么大。

到了 EUV，反射镜的平整度被推到**一个原子**的精度。

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 已经到极限了

反射镜做到差不多 **2 米** 直径，"基本上就没办法再做大了"。

像《三体》里的"水滴"——表面光滑到一个原子尺寸的精度，再大就装不下了。

要继续提升 NA，靠的不是把镜子做大，而是**变形镜头**。

</div>

</div>

---

# "对不起，你得把内裤也脱掉"

<div class="mt-6 p-5 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 text-lg">

"对不起 你得把内裤也脱掉"

<div class="text-sm opacity-60 mt-2 not-italic">—— 蔡司无尘室的入门"欢迎语"</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 不只是规矩
进入 High-NA 透镜的生产间前：

- 穿无尘服
- **内衣也得换成无纤维的**

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 因为精度太狠
30cm 放大到德国 = 不平整度只有一个足球大小。

一根棉纤维落下来，就是整个柏林上空浮着一颗小行星。

</div>

</div>

---

# NA 是什么：透镜的"胃口"

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 一句话定义

**NA = 透镜收集光线的能力**

提升 NA 有两条路：

- 把透镜做得**更大**
- 让透镜变得**更厚**（曲率更大）

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### EUV 的特殊性

EUV 会被所有介质（连水都算）吸收。透镜用不上，靠的是**反射镜**——

用**布拉格反射**：很多微小结构，特定波长在特定角度反射回来，原理像**蝴蝶翅膀**。

平整度要做到**亚纳米级、一个原子尺寸**。

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

NA 现在是 **0.33**（Low-NA）和 **0.55**（High-NA）。下一代 Hyper-NA 目标 **0.75**。

</div>

---

# High-NA：贵了 75%，但快不到两倍

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Low-NA EUV
<div class="text-3xl font-bold text-blue-600 my-2">2 亿欧</div>
<div class="text-xs opacity-70">NA 0.33 · CD 13nm</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### High-NA EUV
<div class="text-3xl font-bold text-orange-600 my-2">3.5 亿欧</div>
<div class="text-xs opacity-70">NA 0.55 · CD 8nm</div>
<div class="text-xs text-orange-600 font-bold mt-1">+75%</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Hyper-NA EUV
<div class="text-3xl font-bold text-red-600 my-2">6+ 亿$</div>
<div class="text-xs opacity-70">NA 0.75 · CD 6nm · 2030</div>

</div>

</div>

<div class="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**问题来了**：价格 +75%，但光刻效率反而**下降**。
变形镜头把一次曝光的区域切小了，掩膜要换两次才能拼接出一颗芯片。

</div>

---

# 英特尔抢着上，台积电犹豫

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### Intel：激进派

- 2023 年 12 月拿到**全球第一台** High-NA EUV
- 后来又收了**第二台**
- 机器还没在 ASML 工厂完整组装过，零件直接送到 Intel 现场首次拼起来
- 2025 年 5 月，**18A（1.8nm）** 风险试产

</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">

### 台积电：算账派

- 价格 +75%，速度没翻倍
- 第一代 Low-NA EUV 配 **双重 / 三重曝光** 也能做到 2nm
- "他不用 High-NA，做多重曝光分辨率提高更大"
- 但还是 **2024 H2 下单了**——下一代是绕不开的

</div>

</div>

---

# 变形镜头：把方块压成长方形

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### Anamorphic Optics

水平和垂直方向**不同放大率**的透镜组合：

- 水平方向压缩 **8 倍**：提高有效分辨率
- 垂直方向只压缩 **4 倍**：补偿景深损失，容忍光刻胶不平整

**电影行业用得很广**——把方画面拉成宽银幕，借鉴过来的。

</div>

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">

### 代价：要拼接

一次只能曝光小区域，**两张掩膜**要互相替换、拼接：

> "这两个 Mask 怎么把它最后的这个芯片，能够接的时候还接得不错，对吧？"

行业还在争论标准。Intel 想做长方形大 Mask 一次印完——
但**整个 industry 还没形成共识**。

</div>

</div>

---
layout: two-cols
---

# NA 三代：从 0.33 到 0.75

每一代 NA 都是和其他系统参数**平衡**的结果：

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 my-3 text-sm">

**Low-NA (0.33)**：2019 量产，至今主力
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 my-3 text-sm">

**High-NA (0.55)**：今年下半年量产<br/>预计**主导未来 10 年**
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 my-3 text-sm">

**Hyper-NA (0.75)**：2030 面世<br/>**6+ 亿美元**·只把 CD 从 8nm 降到 6nm
</div>

<div class="mt-3 text-xs opacity-70">

ASML 的难题不再是技术，而是商业：客户买不买得起。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./na-roadmap.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 让"夕阳产业"重回朝阳

<div class="mt-4 p-5 italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 text-lg">

"半导体确实又从我们以前的很多年都觉得是个**夕阳产业**，然后现在变成了一个非常**朝阳的产业**。"

<div class="text-sm opacity-60 mt-2 not-italic">—— 嘉宾在被问到"Hyper-NA 还有没有市场"时的回答</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 几年前的疑虑
平板、笔记本"已经跑得足够快了，没必要再往下做了"。
Hyper-NA 听起来像没人买。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### AI 改写了账本

> "现在它能够把它（GPU）卖 **3 万美金、4 万美金**，而且还是**供不应求**。"

芯片产生的价值 >> 成本，Hyper-NA 才有市场。

</div>

</div>

---

# K₁：用算法弯曲物理定律

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 为什么需要"计算光刻"

光穿过很窄的缝会**衍射**（散开），两条缝会**干涉**（叠加）。

直接把电路图画在掩膜上 → 投到晶圆上是**模糊的、扭曲的**。

降不了波长，就只能**反向算**怎么"画掩膜"，让它投出来正好是你想要的电路。

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 四个发力点
计算光刻同时优化四件事：

- 光瞳形状（控制方向干扰）
- 光源（Flex-Ray 微反射镜阵列）
- 掩膜版（OPC / ILT）
- 波前优化（修正透镜热变形）

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

K₁ 越小，CD 越小。目前 K₁ 最大的提升点在**光瞳 + 掩膜版**。

</div>

---
layout: two-cols
---

# OPC vs ILT：自己干 vs 找外包

OPC（Optical Proximity Correction）：

- "**正向**调整掩膜"，加辅助小孔、修边角
- 依赖**人工规则**
- 多边形（Polygon）级计算，CPU 够用

ILT（Inverse Lithography Technology）：

- "**逆向**求解最优掩膜"
- 全局优化，可能算出**洞 + 环**这种奇形怪状
- **像素**级计算，必须上 **GPU**

<div class="mt-3 text-xs opacity-70">

打个比方：OPC 像一家啥都自己做的公司；ILT 像甲方告诉乙方"我就要这个结果"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./opc-vs-ilt.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 庞博士的曲线掩膜：比换 NA 还大的贡献

<div class="mt-6 p-5 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 text-lg">

"我们的芯片上这 Pattern 如果变成 Curve（曲线）的话，他可以 **Enable 三个 Generation**（提升三代）……所以这比那个就是从 EUV 的 High-NA 到 Hyper-NA，对这个 Industry 的贡献还要大。"

<div class="text-sm opacity-60 mt-2 not-italic">—— 庞博士转述 Imec 的内部判断</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 之前：必须横平竖直
芯片布线只能走方格——因为掩膜做不出别的形状。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 之后：曲线掩膜
有 ILT 之后，布线可以**更灵活、更紧凑**，
晶体管堆叠得**更小、更密**。

</div>

</div>

<div class="mt-4 text-xs opacity-60">

庞博士 2023 年因 ILT 的贡献当选 SPIE Fellow——光学界最高荣誉之一。

</div>

---

# AI 反哺光刻机：左脚踩右脚

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### ASML 用 GPU 做 ILT

> "它们已经从 CPU 转向，或者正在从 CPU 转向 GPU……采用了目前由英伟达提供的最先进的 GPU。"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 检测也反馈
电子束量测工具检查缺陷 → 数据反馈回光刻机 → 修正后续生产参数。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

### 形成正循环
**更强的芯片 → 更高的光刻精度 → 更强的芯片**——

主持人吐槽："有点'左脚踩右脚上天'的意思了。"

</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**短期看**：芯片制程的提升，会越来越依赖 **AI 算法**，而不是再换光源或拼命做大 NA。

</div>

---

# 最贵的机器，怕几头牛放屁

<div class="mt-4 p-5 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 text-lg">

"最后发现原因竟然是**'屁大点事'**。"

<div class="text-sm opacity-60 mt-2 not-italic">—— 视频原文，讲 Intel 亚利桑那州工厂的故事</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 现象
每到夜深、工厂几乎无人时，**光刻机产量莫名下降几小时**。

唯一的变量：工厂外吹起一阵风。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 原因
工厂附近有一家**奶牛场**。
凌晨 1 点风向变 → 奶牛屁里的**甲烷**穿过空气净化器 → 良率降低。

</div>

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Intel 的解法**：把周边的奶牛场收购了。

任何一点参数的改变，都会影响光刻机生产——所以 ASML 必须用软件**预测**这些微小偏差。

</div>

---

# 一台机器里的"过山车 8 倍"

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 掩膜版加速度
<div class="text-3xl font-bold text-blue-600 my-2">32 g</div>
<div class="text-xs opacity-70">≈ 过山车的 <strong>8 倍</strong></div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 晶圆台状态
<div class="text-3xl font-bold text-green-600 my-2">磁悬浮</div>
<div class="text-xs opacity-70">六自由度浮空，纳米级精准</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 表面平整度
<div class="text-3xl font-bold text-orange-600 my-2">&lt; 10 nm</div>
<div class="text-xs opacity-70">高度误差，专门成立部门</div>

</div>

</div>

<div class="mt-6 p-5 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

"每一个零件都是手工雕琢出来……可能生产 100 个零件，有 99 个都报废的。那留着你一个是达到他要求的。"

<div class="text-xs opacity-60 mt-2 not-italic">—— Evan Tao，ASML 前机械设计工程师</div>

</div>

---

# 你被"骗"了：3nm 远大于 3nm

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">

### 命名为什么不准了

28nm 之前，晶体管是**平面结构**，命名按**栅极长度**——大致能反映密度。

之后变成 **FinFET 立体结构**——一个栅极对应多个鳍，再没有单一指标能衡量"大小"。

**于是数字越小越好卖，命名就归厂商自己说了算了。**

</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">

### 真实尺寸

> "现在 2nm 的话，它上面的线宽实际上也是 **二十几纳米**，或者说 Fin Pitch（鳍片间距）是 **30 多纳米**。"

宣传的"5nm / 3nm"，实际线宽**都还没低于 20nm**。

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

这套"乘以 0.7"的命名规则，**是台积电带头搞起来的**，当时为了和领先的 Intel 竞争。
28 → 20 → 16 → 12 → 7 → ……最后跟实际线宽**没有任何关系**。

</div>

---
layout: two-cols
---

# 晶体管在"盖楼"

要判断一颗芯片"密度真的提升了没"，看的不是命名，是结构：

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Planar 平面**（< 28nm 前）：平房，一层。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**FinFET 鱼鳍**：长出"鱼鳍"防漏电——两层小楼。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**GAAFET 多层环绕**（2nm 当前路线）：多层公寓。

</div>

</div>

<div class="mt-4 text-xs opacity-70">

占地相同，住的电子越来越多。这才是真实的"性能提升"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./transistor-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 另一条路：纳米压印

如果不用光刻，能不能"盖章"？

- 1995 周郁（Stephen Chou）提出
- 2003 进入 ITRS 国际路线图
- 2023 佳能推出可量产 NIL 设备，号称**最小线宽 14nm**（≈ 5nm 制程）

**但卡在三件事**：

<div class="text-sm space-y-2 mt-2">

- 模板 1:1 制造难，易磨损
- 100 片/小时，慢于 EUV 的 185 片/小时
- 多层对齐误差控制难，良率低

</div>

<div class="mt-3 p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">

最适合的舞台：**NAND Flash 存储 + 先进封装**——不是尖端逻辑。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./print-vs-stamp.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一家荷兰公司，被美国管

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 技术依赖
ASML 光刻机里**许多核心零部件**用了美国公司的技术：

- EUV 激光器来自 **Cymer**（被 ASML 收购的美国公司）
- 2001 年收购的 **SVG（硅谷集团）** 带来大量关键技术
  - 美国政府批准了这桩收购
  - 唯一条件：剥离军用光学部门 **Tinsley**

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 历史扶持
ASML 的崛起，**离不开美国的扶持**：

- **1999 年** 美国发起 **EUV-LLC** 项目
- ASML 和美国能源部达成协议参与其中
- 真正的目的：打压"远亲"——日本半导体产业

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

所以今天的关税战、出口管制，是历史伏笔的延续，不是空穴来风。

</div>

---

# 一家做世界最精密机器的公司，反复犯低级错

<div class="mt-4 p-5 italic border-l-4 border-red-500 bg-red-50 bg-opacity-30">

"一方面它生产着全世界最精密的仪器，但在另外一方面，在企业管理上又经常出现疏忽……他们总是在赶进度，总是被各种截止日期催促，在这种节奏下，人们往往容易忽略那些看起来没那么重要的问题。"

<div class="text-xs opacity-60 mt-2 not-italic">—— Marc Hijink，《光刻巨头 ASML 传奇之路》作者</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

### 财报泄露
**去年年底**：财报本不该公开，因软件/技术故障被发布到可追踪的网页服务器 → 股价大跌。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

### CEO 太实诚
**今年 7 月**：CEO 警告关税政策可能让 2026 年无法增长 → 又一波股价下跌，被股民骂。

</div>

</div>

---

# 那么，人类会被困在 1nm 吗？

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### ASML 的官方判断

> "在原子级的问题真正成为瓶颈、系统变得不可预测之前，技术发展**至少可持续至 2040 年后**。"

> "事实上 现在仍有很大的发展空间，或者说其实还有很大的'**缩小**'空间。"

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 为什么乐观？

- 现在芯片上**实际尺寸**还是 20-30nm，远未到原子级
- High-NA 主导 10 年 + Hyper-NA 在路上
- ILT / 曲线掩膜还能"提升 3 代"
- AI 给了**商业可行性**——3-4 万美金/颗的 GPU 撑得起

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-center">

**不是被困在 1nm，而是被"1nm 这个名字"骗了。** 真实的边界，比命名宽得多。

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">

"与 Joann 握手的时候请务必小心。"
<div class="text-xs opacity-60 mt-1 not-italic">—— EUV 锡滴喷嘴全球只有 2 人能手工维护</div>

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">

"光源是最后一个换的……（EUV 光源）至少会用到 2035 年、2040 年去了。"
<div class="text-xs opacity-60 mt-1 not-italic">—— 嘉宾对 EUV 光源寿命的判断</div>

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">

"最后发现原因竟然是'屁大点事'。"
<div class="text-xs opacity-60 mt-1 not-italic">—— Intel 亚利桑那工厂被奶牛甲烷干扰的故事</div>

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">

"芯片上这 Pattern 如果变成 Curve（曲线）的话，他可以 Enable 三个 Generation。"
<div class="text-xs opacity-60 mt-1 not-italic">—— 庞博士转述 Imec 对 ILT 曲线掩膜的评估</div>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">

"半导体确实又从我们以前的很多年都觉得是个夕阳产业，然后现在变成了一个非常朝阳的产业。"
<div class="text-xs opacity-60 mt-1 not-italic">—— AI 浪潮重塑了芯片行业的商业账本</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">

"每一个零件都是手工雕琢出来……可能生产 100 个零件，有 99 个都报废的。"
<div class="text-xs opacity-60 mt-1 not-italic">—— Evan Tao 对比 ASML 和苹果的生产文化</div>

</div>

</div>

---
layout: end
---

# 或许石刻是文明的最后墓碑

## 而光刻却是文明前进的引擎

<div class="mt-12 text-sm opacity-60">

—— 硅谷101 · 陈茜

</div>
