---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Andrej Karpathy: Software Is Changing (Again)'
info: |
  Andrej Karpathy 在 YC AI Startup School 的演讲：软件正在第三次被重写。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Software Is Changing (Again)

## 软件正在（再一次）被改写

Andrej Karpathy · 前 Tesla AI 总监 · OpenAI 创始成员

<div class="mt-8 text-sm opacity-70">
一场写给「即将进入这个行业的人」的演讲：<br/>
软件 70 年没怎么变，却在最近几年里被快速改写了两次。
</div>

<div class="mt-6 text-xs opacity-50">
基于 YC AI Startup School 演讲实录整理 · 引用均可在原始字幕中检索
</div>

---

# 为什么这场演讲值得看

<div class="text-sm opacity-70 mb-4">Karpathy 用一连串"类比"来拆解 LLM 到底是个什么东西，以及我们该怎么和它一起工作。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">软件 1.0 / 2.0 / 3.0</div>
<div class="text-sm opacity-80 mt-1">代码、神经网络权重、英文 prompt —— 三种编程范式并存</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">LLM 像什么</div>
<div class="text-sm opacity-80 mt-1">像电网、像晶圆厂，但<strong>最像操作系统</strong>，停留在 1960 年代</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">"人类幽灵"的心理学</div>
<div class="text-sm opacity-80 mt-1">百科全书式记忆 + 一身认知缺陷</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">部分自治应用</div>
<div class="text-sm opacity-80 mt-1">自治滑块、生成-验证循环、把 AI 拴在绳子上</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold">2025 不是 Agent 元年</div>
<div class="text-sm opacity-80 mt-1">自动驾驶的教训：这是 Agent 的"十年"</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold">为 Agent 重写基础设施</div>
<div class="text-sm opacity-80 mt-1">Vibe coding、llm.txt、把文档改造成 LLM 可读</div>
</div>

</div>

---
layout: two-cols
---

# 软件的三次范式

70 年里，软件在底层逻辑上几乎没变；最近几年里它被快速改写了两次。

- **Software 1.0** —— 你为计算机写的代码（Python / C++），显式指令
- **Software 2.0** —— 神经网络的<strong>权重</strong>。你不直接写代码，而是调数据集、跑优化器。Hugging Face 就是 2.0 世界的 GitHub
- **Software 3.0** —— LLM 变得<strong>可编程</strong>了。prompt 就是程序，而且是用英语写的

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">
进入这个行业，最好对三种范式都流利 —— 它们各有取舍，你需要在它们之间流动地切换。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./software-evolution.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 用英语编程计算机

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### 一个新的编程语言
同样做情感分类，你可以：
- 写一段 Python（1.0）
- 训练一个神经网络（2.0）
- 给 LLM 一个 few-shot prompt（3.0）

GitHub 上的代码已经不只是代码了 —— 是<strong>英文和代码交织</strong>的新物种。

</div>

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">

### 让 Karpathy "脑子炸了"的事
不仅是新范式，而且它用的是<strong>我们的母语</strong>。

<div class="mt-4 p-4 text-lg italic border-l-4 border-orange-400 bg-white bg-opacity-60">
"your prompts are now programs that program the LLM"
</div>

<div class="text-xs opacity-60 mt-2">这条推文成了他至今的置顶推。</div>

</div>

</div>

---

# Tesla Autopilot：2.0 把 1.0 吃掉了

<div class="text-sm opacity-70 mb-4">Karpathy 在 Tesla 做了五年自动驾驶，他亲眼看到这个迁移过程。</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-5 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40">

### 一开始
- 大量 C++ 代码（Software 1.0）
- 中间夹着一些做图像识别的神经网络

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 随着 Autopilot 变好
- 神经网络能力和体积一起<strong>增长</strong>
- C++ 代码被<strong>一行行删掉</strong>
- 跨摄像头、跨时间的信息拼接，全交给了神经网络

</div>

</div>

<div class="mt-6 p-4 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">
"the software 2.0 stack quite literally ate through the software stack of the autopilot"
</div>

<div class="mt-3 text-sm opacity-70">现在同样的事情又在发生一次 —— 一种新软件，正在啃穿整个技术栈。</div>

---

# LLM 像电网（utility）

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

Andrew Ng 多年前的那句话，捕捉到了某种真实的东西：

<div class="p-4 my-3 text-xl italic border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-40">
"AI is the new electricity"
</div>

- LLM 实验室花 **capex** 训练模型 ≈ 建电网
- 花 **opex** 通过 API 把智能按量供给我们
- 我们对它有"公用事业级"要求：低延迟、高可用、稳定质量
- Open Router ≈ 电源切换开关，可以在不同 LLM 间随意切换

</div>

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

### "智能停电"
前几天好几个 LLM 同时宕机，很多人直接没法工作了。

<div class="mt-3 p-3 text-base italic bg-white bg-opacity-60 border-l-4 border-red-400">
"intelligence brownout in the world"
</div>

<div class="mt-3 text-sm">
当顶尖 LLM 宕机时，<strong>"the planet just gets dumber"</strong> —— 我们越依赖，这件事就越夸张。
</div>

</div>

</div>

---

# LLM 也像晶圆厂（fab）

<div class="text-sm opacity-70 mb-4">但电网的类比不够 —— 训练 LLM 的 capex 太大了，不只是建个发电站。</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 深科技树
研发机密正在<strong>向 LLM 实验室集中</strong>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Fabless 模式
用 NVIDIA GPU、只做软件 ≈ 无晶圆厂

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Intel 模式
Google 自己造 TPU、自己训练 ≈ 拥有自己的晶圆厂

</div>

</div>

<div class="mt-6 p-4 border-l-4 border-purple-500 bg-purple-50 bg-opacity-40 text-sm">
<strong>作者注（框架）：</strong>这个类比也会"糊掉" —— 因为这是软件，而软件可塑性太强，没有晶圆厂那么强的护城河。
</div>

---
layout: two-cols
---

# 但 LLM 最像操作系统

不是从水龙头里流出来的商品，而是<strong>越来越复杂的软件生态</strong>。

- **LLM = CPU**，编排内存与计算来解决问题
- **上下文窗口 = 内存（RAM）**
- 几家闭源厂商（≈ Windows / macOS）+ 一个开源生态（llama ≈ 还在长成 Linux 的雏形）
- 下载 app 的体验也类似：Cursor 这种 LLM app 可以在 GPT / Claude / Gemini 上跑，"就是个下拉菜单"

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-sm">
重点不再是 LLM 本身，而是工具调用、多模态 —— 整个生态怎么协作。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./llm-os.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 我们停在计算的 1960 年代

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### 还是分时系统
- 计算太贵 → LLM 集中在云端
- 我们都是"瘦客户端"，通过网络访问
- 没人能独占这台计算机 → 批处理、分时共享
- <strong>"the personal computing revolution hasn't happened yet"</strong>
- Mac mini 因为 batch-1 推理是 memory-bound，意外地很适合 —— 也许是个人计算的早期苗头

</div>

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">

### GUI 还没被发明
和 ChatGPT 用文字对话时——

<div class="mt-3 p-3 text-base italic bg-white bg-opacity-60 border-l-4 border-orange-400">
"talking to an operating system through the terminal"
</div>

<div class="mt-3 text-sm">
横跨所有任务的通用 GUI 还不存在。也许在座的某个人会发明它。
</div>

</div>

</div>

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm">
"circa 1960s in computing and we're redoing computing all over again" —— 我们在<strong>重做一遍计算机</strong>。
</div>

---
layout: two-cols
---

# 技术扩散的方向被翻转了

电、密码学、计算、飞行、GPS、互联网…… 通常是<strong>政府和大公司</strong>先用，因为又新又贵，之后才扩散到消费者。

LLM 反过来了：

- 早期计算机讲的是弹道、军事
- LLM 讲的是 **"how do you boil an egg"**
- 政府和企业反而<strong>落后于</strong>我们所有人的采用速度

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"we have a new magical computer and it's like helping me boil an egg" —— 一台神奇的新计算机，第一件事是帮你煮蛋。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tech-diffusion.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: statement
---

# "people spirits"

LLM 是<strong>人的随机模拟</strong>（stochastic simulations of people），
模拟器恰好是一个自回归 Transformer。

<div class="mt-6 text-base opacity-70">
因为它训练自全部人类文本，所以它涌现出一种<strong>类人的心理</strong> ——<br/>
既有超能力，也有一身认知缺陷。
</div>

---

# 超能力：百科全书式的记忆

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 它记得的比任何人都多
LLM 拥有 encyclopedic knowledge and memory —— 因为它读过太多东西。

它能轻松记住 SHA 哈希、各种琐碎信息。

</div>

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### Rain Man 的类比
Karpathy 推荐看电影《Rain Man》：

Dustin Hoffman 演的是一个
<strong>"autistic savant who has almost perfect memory"</strong> ——
能读完一本电话簿，记住所有名字和号码。

LLM 在某些方面，就是这样的超能力者。

</div>

</div>

<div class="mt-6 p-4 text-base italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">
但你必须同时握住两件事：一个超人类的东西，和它一身的认知缺陷。
</div>

---

# 认知缺陷：一身的"毛病"

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold">幻觉 + 缺乏自我认知</div>
<div class="text-sm opacity-80 mt-1">会编造东西，对"自己知道什么"没有足够好的内部模型</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">参差不齐的智能 jagged intelligence</div>
<div class="text-sm opacity-80 mt-1">某些领域超人，又会犯没有人会犯的错：坚持 9.11 比 9.9 大、strawberry 里有两个 R</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">顺行性遗忘 anterograde amnesia</div>
<div class="text-sm opacity-80 mt-1">不像新同事那样会日积月累地"长经验"。推荐看《Memento》《50 First Dates》</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold">易受骗 + 安全隐患</div>
<div class="text-sm opacity-80 mt-1">容易被 prompt injection 攻击，可能泄露你的数据</div>
</div>

</div>

<div class="mt-5 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">
"context windows are really kind of like working memory" —— 上下文窗口就是工作记忆，你得相当直接地去"编程"它。
</div>

---

# 机会：部分自治应用

<div class="text-sm opacity-70 mb-4">为什么要直接去 ChatGPT 复制粘贴代码？不如有一个专门的 app —— 比如 Cursor。</div>

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">① 上下文管理</div>
<div class="text-sm opacity-80 mt-1">LLM app 替你做掉大量上下文管理</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">② 编排多次 LLM 调用</div>
<div class="text-sm opacity-80 mt-1">Cursor 底层有 embedding 模型、chat 模型、应用 diff 的模型，全替你编排好</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">③ 应用专属的 GUI</div>
<div class="text-sm opacity-80 mt-1">红绿 diff、Cmd-Y 接受 / Cmd-N 拒绝 —— 让人能<strong>审计</strong>易错系统的产出</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">④ 自治滑块 autonomy slider</div>
<div class="text-sm opacity-80 mt-1">Perplexity 也一样：快速搜索 → research → deep research</div>
</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
留给产品人的问题："Can an LLM see everything that a human can see"，能像人一样行动吗？人能留在回路里监督吗？
</div>

---
layout: two-cols
---

# 自治滑块

不是"全自动 vs 全手动"的二选一，而是一根<strong>可以滑动的滑块</strong>。

以 Cursor 为例：
- Tab 补全 —— 你基本完全掌控
- Cmd-K —— 改选中的一段代码
- Cmd-L —— 改整个文件
- Cmd-I —— 放手让它在整个 repo 里折腾（完整 agentic 版本）

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">
任务越复杂，你要根据它来<strong>调</strong>你愿意让出多少自治权。你的产品里也应该有这根滑块。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./autonomy-slider.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 生成-验证循环

我们现在是在<strong>和 AI 协作</strong>：AI 负责生成，人类负责验证。让这个循环转得越快越好。

两根杠杆：

- **加速验证** —— GUI 极其重要。它调用的是你脑子里的视觉 GPU；读文字费劲又无趣，看东西才是通往大脑的高速公路
- **把 AI 拴在绳子上** —— 别太兴奋。给我一个 10,000 行的 diff 没用，因为<strong>"I'm still the bottleneck"</strong>，我还得确认它没引入 bug、没有安全问题

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./gen-verify-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 把 AI 拴在绳子上

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40">

### 反面：过度反应的 agent
- 很多人对 AI agent 过度兴奋了
- 真正想干活时，一个"过度反应"的 agent 并不好用
- 大 diff 让人害怕

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### Karpathy 自己的做法
- 总是走<strong>"small incremental chunks"</strong>
- 确保每一步都是好的
- 一次只做一件具体的小事
- 把循环转得非常非常快

</div>

</div>

<div class="mt-5 p-4 border-l-4 border-blue-500 bg-blue-50 bg-opacity-40 text-sm">
<strong>具体技巧（来自他读到的一篇博客）：</strong>如果 prompt 含糊，AI 就做不到你要的，验证会失败，你就开始"打转"。
不如多花点时间把 prompt 写得更<strong>具体</strong> —— 提高一次验证通过的概率，然后往前走。
</div>

---

# 一个例子：教育应用

<div class="text-sm opacity-70 mb-4">Karpathy 现在在想：有了 LLM 之后，教育长什么样？这里面大量思考都在"怎么把 AI 拴住"。</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-5 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40">

### 行不通的方式
直接对 ChatGPT 说"教我物理"。

AI 会<strong>在树林里迷路</strong>（gets lost in the woods）。

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 拆成两个 app
- 一个 app 给老师 —— <strong>创建课程</strong>
- 一个 app 给学生 —— <strong>把课程讲给学生</strong>
- 中间多了一个可审计的<strong>"课程"产物</strong>

</div>

</div>

<div class="mt-6 p-4 text-base italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">
AI 被"拴"在一个确定的大纲、一条确定的项目推进路线上 —— 这样它更可能真的<strong>能跑通</strong>，而不会迷路。
</div>

---

# 自动驾驶的教训：别急

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 2013 年那次"完美演示"
- Karpathy 第一次坐自动驾驶车，是 2013 年在 Palo Alto
- 一位 Waymo 的朋友载他兜了约 30 分钟，高速 + 街道
- 这趟车 **"zero interventions"**，完美
- 当时他觉得：自动驾驶马上就要来了

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">
但 12 年过去了，我们<strong>仍然</strong>在做自动驾驶 —— 甚至还没真正解决它。
</div>

</div>

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

### 所以——
看到"2025 is the year of agents"这种说法，他<strong>非常担心</strong>。

<div class="mt-4 p-4 text-lg italic bg-white bg-opacity-60 border-l-4 border-red-400">
"this is the decade of agents"
</div>

<div class="mt-3 text-sm">
软件很棘手，就像开车很棘手。需要人在回路里，需要谨慎。<strong>Let's be serious here.</strong>
</div>

</div>

</div>

---
layout: two-cols
---

# Iron Man 战衣，而不是 Iron Man 机器人

Karpathy 一直很爱 Iron Man 这个类比 —— 它在技术演进上"对得惊人"。

- Iron Man 战衣<strong>既是增强（augmentation）</strong>，Tony Stark 可以亲自驾驶
- <strong>又是 agent</strong>，某些电影里它能自己飞、自己去找 Tony
- 这正是那根自治滑块：我们既能造增强，也能造 agent

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 text-sm">
但在和易错 LLM 打交道的<strong>现阶段</strong>：
<br/>"it's less Iron Man robots and more Iron Man suits that you want to build"
<br/>—— 少做炫酷的自治 agent demo，多做部分自治产品。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./iron-man.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Vibe Coding：人人都是程序员

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 因为它用英语编程
过去你得花 5 到 10 年学习，才能在软件里做点事。现在不一样了。

<div class="mt-3 p-3 text-base italic bg-white bg-opacity-60 border-l-4 border-green-400">
"everyone is a programmer"
</div>

那条"vibe coding"推文，Karpathy 本以为会石沉大海，结果成了大梗 —— 现在连维基百科页面都有了。

</div>

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### 不悲观
Tom Wolf 分享过一个孩子们 vibe coding 的视频，Karpathy 说"看着这个视频，你怎么可能对未来感到糟糕"。

<div class="mt-3 p-3 text-base italic bg-white bg-opacity-60 border-l-4 border-blue-400">
"gateway drug to software development"
</div>

</div>

</div>

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm">
他用 vibe coding 做了一个 iOS app —— 他根本不会写 Swift，却在<strong>当天</strong>就跑在了手机上。
</div>

---

# MenuGen：代码反而是简单的部分

<div class="text-sm opacity-70 mb-4">他 vibe code 了 menu.app —— 拍一张菜单照片，生成每道菜的图片。但真正难的不是写代码。</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 几小时：demo 跑起来了
<div class="text-3xl font-bold text-green-600 my-2">几小时</div>
laptop 上的 MenuGen demo 就 work 了。

<div class="mt-2 text-sm italic">"the code was actually the easy part"</div>

</div>

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

### 一周：把它变"真的"
<div class="text-3xl font-bold text-red-600 my-2">又一周</div>
认证、支付、域名、部署 —— 全是<strong>在浏览器里点来点去</strong>，不是代码。

<div class="mt-2 text-sm">加个 Google 登录，Clerk 文档一堆指令："去这个 URL、点这个下拉、选这个……"</div>

</div>

</div>

<div class="mt-5 p-4 text-base italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">
"I've lost a huge amount of money on menu" —— 每个注册用户送 $5，这成了他生活里的一个成本中心。
</div>

---

# 那……能不能直接为 Agent 来构建？

<div class="text-sm opacity-70 mb-4">出现了一类全新的"数字信息消费者与操纵者"：不再只是「人 + GUI」或「计算机 + API」，而是 agent —— 互联网上的"人类幽灵"。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">llm.txt</div>
<div class="text-sm opacity-80 mt-1">类比 robots.txt：一个简单 markdown，直接告诉 LLM 这个域名是干什么的，不用让它去解析易错的 HTML</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">文档改成 Markdown</div>
<div class="text-sm opacity-80 mt-1">Vercel、Stripe 是早期推动者。Markdown 对 LLM 极易理解</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">把 "click" 换成 curl</div>
<div class="text-sm opacity-80 mt-1">Vercel 把文档里每一处 "click" 换成等价的 curl 命令 —— 因为 LLM agent 没法原生地"点击"</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">MCP</div>
<div class="text-sm opacity-80 mt-1">来自 Anthropic 的 model context protocol —— 一种直接对 agent 说话的协议</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold">GitIngest</div>
<div class="text-sm opacity-80 mt-1">把 GitHub URL 一改，整个 repo 拼成一大段文本，可直接喂给 LLM</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold">DeepWiki</div>
<div class="text-sm opacity-80 mt-1">Devon 直接为你的 repo 分析、生成整套文档页面</div>
</div>

</div>

<div class="mt-4 text-sm opacity-70">他喜欢这些"改个 URL 就让东西对 LLM 可读"的小工具 —— 这样的东西应该多得多。</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这场演讲里最值得记住的几句（均可在原始字幕中检索）：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"we're now programming computers in English"
<div class="text-xs opacity-60 mt-1 not-italic">— Software 3.0：prompt 就是程序，而且是英文写的</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"the software 2.0 stack quite literally ate through the software stack of the autopilot"
<div class="text-xs opacity-60 mt-1 not-italic">— Tesla Autopilot 里，神经网络一行行删掉了 C++</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"AI is the new electricity" · "intelligence brownout in the world"
<div class="text-xs opacity-60 mt-1 not-italic">— 引 Andrew Ng；以及 LLM 宕机时"地球变笨"</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"context windows are really kind of like working memory"
<div class="text-xs opacity-60 mt-1 not-italic">— LLM 心理学：它不会像新同事那样日积月累地长经验</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"I'm still the bottleneck" · "small incremental chunks"
<div class="text-xs opacity-60 mt-1 not-italic">— 把 AI 拴在绳子上，让生成-验证循环转得快</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"this is the decade of agents"
<div class="text-xs opacity-60 mt-1 not-italic">— 自动驾驶的教训：不是"Agent 元年"，是"Agent 十年"</div>
</div>

</div>

---
layout: end
---

# "it's less Iron Man robots and more Iron Man suits"

<div class="mt-6 text-lg opacity-80">
未来十年，我们会把那根自治滑块<strong>从左滑到右</strong>。<br/>
但现在 —— 先造战衣，别急着造机器人。
</div>

<div class="mt-8 text-sm opacity-60">
Andrej Karpathy · Software Is Changing (Again) · YC AI Startup School
</div>
