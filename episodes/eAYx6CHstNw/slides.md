---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '对话高通：智能体爆发、6G与Physical AI背后的大赢家'
info: |
  硅谷101 在"骁友会五周年派对"现场对话高通公司全球副总裁徐晧：边缘 AI、机器人、6G、汽车数字底盘、XR 眼镜与 AIPC 全景拆解。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 对话高通

## 智能体爆发、6G 与 Physical AI 背后的大赢家

<div class="mt-10 text-base opacity-70">
硅谷101 · 陈茜 × 徐晧 博士（高通公司全球副总裁）
</div>

<div class="mt-4 text-xs opacity-50">
现场录制 · 骁友会五周年派对 · 北京
</div>

<div class="mt-10 text-sm italic opacity-60">
"我们要让人工智能触及到千家万户。"
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 隐形大赢家

过去一年高通股价大涨 60%、五月底创历史新高。前沿大模型在表面厮杀，水下的赢家是谁？

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 边缘 AI 的拐点

手机、AIPC、XR、汽车、机器人五条端侧战线同时爆发，把云端能力慢慢落到口袋里。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 6G 不只是更快

2029—2030 商用，必须为 AI-native 重新设计；通感一体化把无线信号变成感知世界的眼睛。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 三栖玩家

通信 + AI + 机器人，高通的特殊位置就是把这三件事拼成一个解决方案。

</div>

</div>

---

# AI 今年的两条线

<div class="mt-6 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50">

"我在硅谷看到今年 AI 其实是有两条线，可以说一条是明线，一条是暗线。"

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-2 border-red-300 bg-red-50">

### 明线 · 卷云端

继续卷最 SOTA 的大模型，看人工智能能力边界到底在哪里。

</div>

<div class="p-4 rounded border-2 border-green-400 bg-green-50">

### 暗线 · 看端侧

"大家是在慢慢地看端侧模型，是不是能够有一个更好的应用了。"

</div>

</div>

<div class="mt-6 text-sm opacity-70">
—— 陈茜在开场的观察，徐晧博士全程顺着"暗线"这条主轴展开。
</div>

---
layout: two-cols
---

# 从云端到端侧的三层栈

落地不是非此即彼，而是按延迟和算力切片：

<div class="mt-6 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>云端</strong>：训练 + 长程规划 + SOTA 推理
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>边缘云 / 基站</strong>：毫秒级响应、低空经济、车云协同
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>端侧</strong>：手机、机器人、车、眼镜——本地决策
</div>

</div>

<div class="mt-6 text-sm opacity-70 italic">
"如果在端侧能解决 就在端侧解决；不能解决 我们放到边缘云或者云端。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./edge-cloud-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一个反直觉的事实：模型在变小

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-5 rounded bg-red-50 border-2 border-red-200">

### 2024 年 · Llama 出来时
<div class="text-3xl font-bold text-red-600 my-3">100B – 几百B</div>
<div class="text-xs opacity-70">"最好的 Llama 出来的一个模型"</div>

</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 不到一年后
<div class="text-3xl font-bold text-blue-600 my-3">4B – 几十B</div>
<div class="text-xs opacity-70">"小于一年的时间内"，体量直接降一个数量级</div>

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### 效果
<div class="text-3xl font-bold text-green-600 my-3">同样 / 更好</div>
<div class="text-xs opacity-70">"达到同样的效果，甚至于更好"</div>

</div>

</div>

<div class="mt-8 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base">
<strong>作者概括</strong>：这条曲线就是高通敢押边缘 AI 的根基——同样能力的模型，体积每年都能再砍一个量级。
</div>

---

# 端侧化的四把斧

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 蒸馏 Distillation

"这个模型是根据这个大模型训练出来的，但它的体量会小很多。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 量化 Quantization

把浮点变定点：运算更快 + 芯片存储要求更小。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### LoRA Adaptation

"我有一个大模型，但我搭一个小的模型来适配我们现在要做的任务。"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### MoE 混合专家

"你问这个问题我调这个专家，你问那个问题我调另外一个专家。"

</div>

</div>

<div class="mt-6 text-sm opacity-70">
徐晧博士把端侧模型化分成模型蒸馏、量化、LoRA、MoE 四类技术——再叠加内存与功耗优化，构成端侧落地的工具箱。
</div>

---

# 手机：AI 是 new UI

<div class="mt-4 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50">

"为什么我们有时候说 AI 是 new UI（全新用户界面）。我们现在从键盘到手机上按键到我们现在的语音指挥，这实际上有很多不一样的变化。"

</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-400 text-center">

### 第一代
**拍照 / 图像处理**
camera optimization

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

### 第二代
**对话 / 大语言模型**
跟 AI app 问任何问题

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-center">

### 第三代 · 现在
**Agentic 智能体**
"它不用先装 APP，你直接跟这个手机对话"

</div>

</div>

<div class="mt-6 text-sm opacity-70 italic">
从"选 app"到"不用选 app"，是这一代用户体验的最大转折。
</div>

---
layout: two-cols
---

# 一颗 SoC 怎么塞进去？

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-base">

"我们的架构叫异构的架构——CPU、GPU、NPU，可以把每一个硬件部分都能够用到它的特长。"

</div>

<div class="mt-4 space-y-2 text-sm">

- **CPU**：丝滑舞蹈动作、与环境交互的调度
- **GPU**：同时处理多路摄像头视频
- **NPU**：本地 LLM 推理 + ASR + TTS

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
"每年我们都会发布新的旗舰产品，支持的人工智能算法也越多。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./heterogeneous-arch.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 手机的两种形态在并行跑

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### 形态 A · Agentic OS

> "我从摁了这个电源键以后，所有的交流都会是语音的。我会指挥它做完所有的一切。"

整机即智能体；瓶颈是 **生态打通**——所有 app 都要愿意被它调用。

</div>

<div class="p-5 rounded border-2 border-orange-300 bg-orange-50">

### 形态 B · Super App

> "我里面有一个 super app（超级软件），它能够调用所有的（软件），我直接告诉这个 app 我要什么东西。"

适合 Google 这种已有地图 / 邮件 / 支付 / 出行的大平台。瓶颈是 **体量足够大**。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
徐晧博士判断：两种方向都是有的，"它并不是一个技术上的问题"——**需要时间来验证**。
</div>

---

# 现场 demo · 荣耀 Robot Phone

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### "随音而舞"

直板手机 + 可翻转云台摄像头：

- 语音指令告诉它播一首音乐
- AI 识别音乐节拍
- 调用云台控制算法
- 生成一系列"拟人化"动作

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 这意味着什么

> "它跟着节拍走的，它如果换一个节拍，可能它动作就不一样了。"

一个全新的终端形态——把摄像头变成"会跟你交互的小生灵"，是手机厂商在端侧 AI 上探的边界。

</div>

</div>

<div class="mt-6 text-sm opacity-70 italic">
现场荣耀研发工程师亲自演示 · 骁友会五周年派对特别展品
</div>

---

# 机器人：为什么算力要比手机更强

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-5 rounded bg-red-50 border-2 border-red-200">

### 算力
<div class="text-2xl font-bold text-red-600 my-3">必须更强</div>
<div class="text-xs opacity-70">"它需要规划的事情更多"</div>

</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 面积 / 能耗
<div class="text-2xl font-bold text-blue-600 my-3">有放松空间</div>
<div class="text-xs opacity-70">机器人能容纳更大芯片</div>

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### 延迟
<div class="text-2xl font-bold text-orange-600 my-3">第一约束</div>
<div class="text-xs opacity-70">"它一定要低延迟"</div>

</div>

</div>

<div class="mt-8 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

机器人产品矩阵从低端到高端：

- **低端**：只负责运控
- **中端**：大脑能力 + VLA（视觉-语言-行动）
- **高端**：业界 top 的算力，支持最复杂的机器人应用

</div>

---

# 现场 demo · 阿加犀「通天晓」

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 平台

**高通跃龙 QCS8550**

> "端侧的 AI 算力非常强，非常适合于用在我们这种机器人身上。"

具身智能机器人，由阿加犀与高通联合打造。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 一颗芯片三件事并行

- **CPU**：丝滑的舞蹈与交互动作
- **GPU**：同时多摄像头视觉处理
- **NPU**：ASR + TTS + 端侧 LLM 推理

→ 纯端侧实时本地推理，"能懂、能动、还能聊"。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
现场还表演了"点球大战"动作；这类机器人正是徐晧博士所说"它跟人有一个越来越亲密交互的时候，延迟是非常重要的"的典型用例。
</div>

---
layout: two-cols
---

# 延迟决定哪一层做事

机器人和车的工程难点不是"模型够不够大"，而是 **算力放在哪一层**：

<div class="mt-6 space-y-3 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>端侧</strong>：本地决策，几十毫秒以内的事
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>5G 基站</strong>：毫秒级回程；"几十毫秒以外的就可以放到云端"
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>云端</strong>：长程规划、逻辑推理、不可控时延
</div>

</div>

<div class="mt-6 text-sm italic opacity-70">
"5G 有个叫 TSN（时间敏感网络），它是专门给你的每一个包上面打一个时间戳，能够保证你端到端的时延是可控的。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./edge-cloud-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 6G：为 AI-Native 重新设计

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 商用时间
<div class="text-3xl font-bold text-blue-600 my-3">2029 – 2030</div>
<div class="text-xs opacity-70">大概的时间点</div>

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### AI 占总流量
<div class="text-3xl font-bold text-orange-600 my-3">30 % – 40 %</div>
<div class="text-xs opacity-70">"过几年人工智能产生的流量需求"</div>

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### 设计目标
<div class="text-3xl font-bold text-green-600 my-3">几毫秒</div>
<div class="text-xs opacity-70">"压缩到几个毫秒或者十几毫秒范围内"</div>

</div>

</div>

<div class="mt-8 p-4 rounded bg-purple-50 border-l-4 border-purple-500">
6G 还要回答一个新问题：手机、手表、眼镜、甚至指环——这么多智能体如何 <strong>最有效地互相交流并跟网络连接</strong>。
</div>

---

# 6G 的隐藏特性：通感一体化

<div class="mt-6 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50">

"有一个 6G 的技术叫通感一体化——就通信和感知是一体化的。"

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 通信信号 → 物理世界地图

无线信号会从不同物体上弹回来——通过对反射的接收和理解，"我们可以构建一个由无线信号来产生的地图"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 直接落到 Physical AI

无线感知 + 摄像头 + 地图 = 一个物理世界，可以做人工智能的训练、做物理世界的理解和监测。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base">
现场举例：低空经济一旦流行，"满街都是无人机在飞的时候，你怎么样控制它、你怎么跟踪它"——这是通感一体化天然要解决的问题。
</div>

---

# 车上有两套系统在抢算力

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### 自动驾驶

- 要求 **高算力 / 大 memory**
- 能耗要求 **不像手机和机器人那么紧**
- "算力速度要很快，而且要有大算力来解决这些复杂问题"

</div>

<div class="p-5 rounded border-2 border-orange-300 bg-orange-50">

### Infotainment 座舱娱乐

- 大屏幕、环绕音箱
- "没有人在客厅看电视了，全到车里面去看了"
- "你坐到中间的时候，你一打开，可能自动驾驶，你都想睡在那了"

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">
两套需求都要满足——但用户视角要 **完全无感**："这个音响真好，只是很爽。我告诉它去哪就行了。"
</div>

---
layout: two-cols
---

# 骁龙数字底盘：业界第一个

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-base italic">

"我们打造了一个叫骁龙的数字底盘——我们是在业界第一个提出这个概念的人。"

</div>

<div class="mt-6 space-y-3 text-sm">

- 把所有传感器（雷达 / 视频 / 激光雷达）连上去
- 把所有扬声器连上去
- **统一规划**：享受用、辅助驾驶用、看路标行人用
- 双芯片可以动态分配：智驾忙时倾斜算力给智驾，娱乐忙时反过来
- 不光是用，更重要的是 **知道优先级**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./digital-chassis.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 现场样车 · 零跑 D19 + 双骁龙 8797

<div class="grid grid-cols-4 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### GPU/CPU
<div class="text-3xl font-bold text-blue-600 my-2">~3 ×</div>
<div class="text-xs opacity-70">对比上一代平台</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### NPU AI
<div class="text-3xl font-bold text-orange-600 my-2">12 ×</div>
<div class="text-xs opacity-70">"提升了更是 12 倍"</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 摄像头
<div class="text-3xl font-bold text-green-600 my-2">40+</div>
<div class="text-xs opacity-70">整车支持数量</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 精密监测
<div class="text-3xl font-bold text-purple-600 my-2">28</div>
<div class="text-xs opacity-70">含激光雷达</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**中央集算 + 五屏联动**：中控、仪表盘、前挡风、后娱乐、风扇操作屏全部打通——驾驶员用 VLA 多模态辅助驾驶，乘客同时调用大模型。可同步 OTA 在线升级。

</div>

<div class="mt-3 text-xs opacity-60 text-center">
"全球首批搭载双骁龙 8797 芯片的旗舰车型"——为 L3 / L4 甚至更高级辅助驾驶提供平台。
</div>

---

# 车的下一关：生态打通

<div class="mt-4 text-base opacity-80">
陈茜抛出的具体场景：
</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 出停车场

我的车的付费系统，是不是跟停车场的付费系统 **A2A** 已经打通好了？

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 回家路上

让车帮我点一个外卖直接送到家里面——是不是跟外卖直接打通好了？

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 家里联动

车智能了，**车库门** 是不是也得这么智能？充电系统、家里的机器人呢？

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 这是创业机会

"这方面其实有非常多的 **Startup opportunity**——它有很多需要我们补充的地方。"

</div>

</div>

<div class="mt-6 text-sm opacity-70 italic">
徐晧博士的判断：技术上能做到，但需要时间打造生态——MCP / A2A 这些协议还要继续发展。
</div>

---

# 眼镜：最难的一块端侧 AI

<div class="mt-4 p-5 text-xl italic border-l-4 border-orange-500 bg-orange-50">

"其实眼镜相对来说在某些方面是最难的一个端侧的 AI。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 空间约束

"能放芯片的地方其实比手机还小，它还放个摄像头、它还得听你跟它语音指挥。"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 电池约束

"电池真的是没什么地方可以放。"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 蛋生鸡 / 鸡生蛋

要有人愿意戴 → 才会产生应用 → 才会有人愿意买。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 重量

"从以前很重的 XR 的眼镜，到现在很多的眼镜基本上跟我现在戴的眼镜差不多厚度。"

</div>

</div>

---
layout: two-cols
---

# 解法：分离式渲染

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-base italic">

"我们有个技术叫 split rendering——就是分离式渲染。有一部分成像是在眼镜上做的，有一部分成像是在手机上做的。"

</div>

<div class="mt-4 space-y-2 text-sm">

- 眼镜里只放 **最小最集成** 的芯片
- 把最耗能的事——实时翻译、显示信息——丢给手机
- 手机再决定要不要进一步上云
- "尽量把眼镜上面的能耗和算力减到最小"

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
现场体验 · <strong>千问 S1 眼镜</strong>（搭载 AR1 平台，双目 3D 显示，"你好千问"唤醒导航）。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./xr-split-rendering.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 眼镜的杀手级用例

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### See What You Can See

"很快地远程地让你的亲戚朋友能看到"——自媒体也可以直接推到云端做实时直播。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 视觉记忆 · 找钥匙

> "我可以随时问它，我的钥匙放哪了。它会看一下，钥匙在某个时间点放在——刚才 5 秒钟之前我看见了，在桌上。"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 实时翻译 + 信息显示

跟手机直接通信，把耗能的事丢给手机做。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 隐私边界

"现在只要它在录像的话就有个红点；你要是看见别人戴着眼镜录像，你说，不要录像了。"

</div>

</div>

<div class="mt-6 text-sm opacity-70 italic">
徐晧博士判断：当不戴眼镜的人也愿意戴，并觉得它轻、功能有吸引力——"就是真正能够成的时候了"。
</div>

---

# AIPC：是伪命题吗？

<div class="mt-4 p-5 text-xl italic border-l-4 border-red-500 bg-red-50">

陈茜：<strong>"AIPC 这个东西是不是伪命题啊？"</strong>

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-2 border-green-400 bg-green-50">

### 最强商业化用例

> "现在我们看到一个最强的 AI 的商业化的一个用例，就是做 coding（编程）。"

现阶段大家都调云端 token——但很多场景天然属于本地。

</div>

<div class="p-4 rounded border-2 border-blue-300 bg-blue-50">

### 留在本地的理由

- 处理视频 / 照片
- 处理 Email
- 一些 **不愿上云** 的数据

→ "AIPC 实际上是有很多的应用的空间和前景。"

</div>

</div>

<div class="mt-6 text-sm opacity-70">
早期他们用 AIPC 演示过一个机械臂 bartender——直接跟 PC 说要什么饮料，机械臂就递过来。
</div>

---

# 不可能三角的解法：Local Memory

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 内存
<div class="text-2xl font-bold text-red-600 my-2">Memory</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 功耗
<div class="text-2xl font-bold text-orange-600 my-2">Power</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 性能
<div class="text-2xl font-bold text-blue-600 my-2">Performance</div>

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 高通的"结果导向"解法

**端侧预处理 + Local Personalized Library**：把个人最重要的信息（喜欢的酒店、航班偏好、日程表、近期邮件关注点……）作为本地数据库存在端侧。

- 手机能算的 → 在手机算
- 手机算不动的 → 给云端提供必要信息，云端规划完再传回
- "一个非常 personalized experience（个性化体验）"

</div>

<div class="mt-4 text-sm opacity-70">
同时叠加模型蒸馏 / 量化等优化，再把价格也压下来——给车、手机、PC、机器人 **量身定做** 不同算力档位的芯片。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句——全部可在 transcript 中查证：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"我们要让人工智能触及到千家万户。"
<div class="text-xs opacity-60 mt-1 not-italic">— 徐晧 · 开场题眼</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"我在硅谷看到今年 AI 其实是有两条线，可以说一条是明线，一条是暗线。"
<div class="text-xs opacity-60 mt-1 not-italic">— 陈茜 · 本期主轴</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"AI 是 new UI（全新用户界面）。"
<div class="text-xs opacity-60 mt-1 not-italic">— 徐晧 · 手机交互范式</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"如果在端侧能解决 就在端侧解决；不能解决 我们放到边缘云或者云端。"
<div class="text-xs opacity-60 mt-1 not-italic">— 徐晧 · 云边端协同心法</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"AIPC 这个东西是不是伪命题啊？"——"一个最强的 AI 的商业化的一个用例，就是做 coding（编程）。"
<div class="text-xs opacity-60 mt-1 not-italic">— 陈茜问、徐晧答 · AIPC 篇</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"其实眼镜相对来说在某些方面是最难的一个端侧的 AI。"
<div class="text-xs opacity-60 mt-1 not-italic">— 徐晧 · 眼镜篇</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"过几年人工智能产生的流量需求，会占 30% 到 40% 总体流量的需求。"
<div class="text-xs opacity-60 mt-1 not-italic">— 徐晧 · 6G AI-Native 的根据</div>
</div>

</div>

---
layout: end
---

# 一句话总结

<div class="mt-12 text-2xl italic opacity-80">
"我们又做通信，又做 AI，又做机器人——<br/>
所以我们可以把这三者结合起来，<br/>
打造一个最好的一个解决方案。"
</div>

<div class="mt-10 text-sm opacity-50">
— 徐晧 · 高通公司全球副总裁<br/>
硅谷101 ×「骁友会五周年派对」
</div>
