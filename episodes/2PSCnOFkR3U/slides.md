---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'AI Agent 爆发前的黎明：Manus 不够好，但天快亮了'
info: |
  硅谷101 陈茜与 AI Agent 开发者 Nathan Wang、TensorOpera 联合创始人 Chaoyang、
  Tiny Fish CEO Keith 等嘉宾，借 Manus 爆火与争议这一切口，
  系统梳理 AI Agent 过去两年的技术发展、当下的产品瓶颈与全球生态版图。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI Agent 爆发前的黎明

<div class="text-lg opacity-80 mt-4">Manus 不够好，但天快亮了</div>

<div class="mt-10 text-sm opacity-60">
硅谷101 陈茜 · 2025 年 3 月<br/>
嘉宾：Nathan Wang（AI Agent 开发者）· Chaoyang（TensorOpera 联合创始人）· Sophie 王可倚
</div>

<div class="mt-8 text-xs opacity-50">
一款"套壳"产品引发的全行业反思：<br/>
通用 AI Agent 离爆发到底还差几步？
</div>

---

# 这一期值得听的五件事

<div class="text-sm opacity-70 mb-4">借 Manus 这把"叫醒铃"，把整个 AI Agent 赛道的过去、现在、未来一次性梳理清楚。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Manus 测评实况
邀请码炒到数万元，开发者实测正确率、可用度、完成度——好在哪、差在哪。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 两派的争议
"套壳指挥大师" vs "产品超过用户阈值的现象级产品"。乔布斯在天上回了一句。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Agent 技术四代史
从 2022 年 ReAct 论文，到 2024 年 MCP 协议——三条技术线如何凑齐。

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 全球版图
1.5 万家 AI Agent 初创公司在做什么：通用、基础设施、垂直三条赛道。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 天什么时候真亮
两个绕不开的瓶颈——可靠性 + 鲁棒性，以及一个 Adept 已经付出的学费。

</div>

</div>

---

# Manus 爆火：从邀请码到群嘲

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 三月初的盛况
- 朋友圈"刷屏式安利"
- 邀请码在二手平台被**炒到数万人民币**
- 自称"世界上第一个通用 AI Agent"
- 无数开发者、投资人排队等测评

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 几天后的反扑
- 大模型用的是 **Claude**，后接阿里通义千问
- 被质疑"套壳产品"、没啥门槛
- "世界上第一个通用 AI Agent" 营销话术不属实
- 硅谷开发者社区早不是什么新鲜事

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"当时我也是用 Cursor 花了三个小时，然后写了大概 3800 多行代码，然后直接就把它这个整个 Agent 可以去通过浏览器去浏览网页，整个这样的操作全部都复现出来了。"
<div class="not-italic text-xs opacity-60 mt-1">— Nathan Wang，AI Agent 开发者，谈技术壁垒</div>
</div>

---
layout: two-cols
---

# Nathan 的三维度测评

为了避开"自嗨"式吐槽，Nathan 设计了一套 **1–5 分**评分体系：

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>正确性（Accuracy）</strong><br/>
答案是不是对的、有没有幻觉
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>可用度（Usefulness）</strong><br/>
"一本正经地说正确的废话"也要扣分
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>完成度（Completeness）</strong><br/>
三个任务只做完一个，得分就拉下来
</div>

</div>

<div class="mt-4 text-xs opacity-70">
五类任务横向铺开：研究、教育、生活、数据分析、有趣（WTF）。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./manus-scorecard.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 五类任务的实测成绩单

<div class="text-sm opacity-70 mb-4">Nathan 用自己的真实生活/工作场景测，不用官网的录播 demo。</div>

<div class="grid grid-cols-5 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-green-50 border-2 border-green-300">
<div class="text-xs opacity-70">研究</div>
<div class="text-3xl font-bold text-green-600 my-1">4.0</div>
<div class="text-[10px] opacity-60">符合预期</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-400">
<div class="text-xs opacity-70">教育</div>
<div class="text-3xl font-bold text-green-700 my-1">4.5</div>
<div class="text-[10px] opacity-60">最强项</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-300">
<div class="text-xs opacity-70">生活</div>
<div class="text-3xl font-bold text-yellow-700 my-1">3.5</div>
<div class="text-[10px] opacity-60">勉强够用</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-300">
<div class="text-xs opacity-70">数据分析</div>
<div class="text-3xl font-bold text-red-600 my-1">2.5</div>
<div class="text-[10px] opacity-60">硬伤</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-300">
<div class="text-xs opacity-70">有趣（WTF）</div>
<div class="text-3xl font-bold text-red-600 my-1">2.5</div>
<div class="text-[10px] opacity-60">创意类弱</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>关键观察</strong>：研究/教育之所以高分，是因为大模型本就擅长检索 + 解释。
真正的硬骨头是<strong>多源信息整合</strong>——这恰好是 Manus 翻车最严重的地方。
</div>

---

# Menlo Park 翻车现场：一个具体的 bug

<div class="text-sm opacity-70 mb-4">Nathan 让 Manus 同时查"房价 + 好学区"，结果它把两件事简单缝合了。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Manus 做了什么
- 上 Redfin / Zillow 找 Menlo Park 房源 ✅
- 上学区网站查 Menlo Park 学校信息 ✅
- 然后**把两份信息按城市名直接拼起来** ❌

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 美国的真实情况
- 同一城市内不同地址 → 不同学校
- Manus 报"这房子能进 **9 分学区**"
- 一查实际只有 **7 分甚至更低**
- 用户拿到的是**错的决策依据**

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">
"它其实只是通过简单的文字的理解，比如说这个城市是 Menlo Park，它就认为这个房源在只要在 Menlo Park 它就一定可以进这个学校。"
<div class="not-italic text-xs opacity-60 mt-1">— Nathan，复盘多源信息整合失败的原因</div>
</div>

---

# 关键概念：用户阈值（threshold）

<div class="text-sm opacity-70 mb-4">嘉宾抛出一个比"通过/不通过"更细腻的判断框架。</div>

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50">
"用户要真正把它作为一个生产力工具来用，它必须要在这个用户群体里超过某一个阈值，就是它达到某个满意度以上就可以完整地使用。在那之前它只是个样本，或者是一个演示版本。"
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 阈值以下
Demo、玩具、PPT 项目<br/>
用户尝个鲜，下次不打开

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 阈值以上
真生产力工具<br/>
"无缝、舒服地完成完整工作"

</div>

</div>

<div class="mt-4 text-xs opacity-70">
嘉宾的结论：<strong>Manus 在用户体验上跨过了这条线</strong>——这是它最值钱的部分。
</div>

---

# 乔布斯的隔空回应

<div class="text-sm opacity-70 mb-4">争议方说："Manus 就是个 AI 操纵大师，把另外两个 AI 指挥来做任务。" 嘉宾用一个旧故事回敬。</div>

<div class="mt-4 p-4 rounded bg-gray-50 border border-gray-300 text-sm">
乔布斯重返苹果后，一个工程师当众质问：<br/>
<em>"你又不懂这个技术、你又不懂那个技术，你凭什么引导我们？"</em>
</div>

<div class="mt-4 p-6 text-lg italic border-l-4 border-orange-500 bg-orange-50">
"你得从用户体验开始，然后倒推到技术上。你不能只从技术的角度出发想要怎么把它卖出去。我在这方面犯下的错比在座各位都要多。"
<div class="not-italic text-xs opacity-60 mt-2">— 嘉宾引用乔布斯当年的原话</div>
</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>嘉宾的反问</strong>：在嘲笑 Manus 是"套壳"的时候——<br/>
为什么<strong>你</strong>不去做一个这样的、能真正满足用户需求的完美界面？
</div>

---

# Manus 是一记"叫醒铃"

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### DeepSeek 的叫醒铃
告诉全球：原来大模型还可以**用这种路径来实现**，
不必只是暴力堆叠算力。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Manus 的叫醒铃
告诉所有 AI 应用从业者：<br/>
**不要痴迷于技术底层**，
你要做的是提供完整度高的产品，让大家用起来。

</div>

</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-green-500 bg-green-50">
"大模型底座已经准备好了，基于大模型的底座我们完成一个完成度高的产品，那大家的接受度会非常高。所以我觉得这是一个非常好的起始点。"
<div class="not-italic text-xs opacity-60 mt-2">— 嘉宾谈 Manus 的现象级意义</div>
</div>

<div class="mt-4 text-xs opacity-60">
没人能保证 Manus 是最终赢家——但它至少把"To C 端 AI 应用元年"的发令枪打响了。
</div>

---
layout: two-cols
---

# TensorOpera 的四维度框架

Chaoyang（TensorOpera 联合创始人）的判断：
做好一款 AI Agent 产品有四个维度，**绝对优势至少占两个**才能领先。

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 rounded bg-gray-50 border-l-4 border-gray-400">
<strong>模型</strong> · Manus 用了 Anthropic + 阿里
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>工具</strong> ★ · 把多 agent / 虚拟机 / 工具链缝合
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>数据</strong> ★ · 早期用户提示 = 后续迭代飞轮
</div>

<div class="p-3 rounded bg-gray-50 border-l-4 border-gray-400">
<strong>基础设施</strong> · 拥抱生态、跟大厂合作就好
</div>

</div>

<div class="mt-4 text-xs opacity-70">
Manus 占的是 ★ <strong>工具 + 数据</strong> 两栏，先发优势已经在飞轮上滚起来了。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./four-dimensions.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# AI Agent 的三大能力

技术圈对 Agent 的"内行定义"，绕不开这三件事：

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Reasoning（推理）</strong><br/>
理清需求→决策→选工具→看结果→定下一步
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Memory（记忆与上下文）</strong><br/>
能装多大的信息，决定能想多深的事
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Tools（工具）</strong><br/>
调用 API、搜索互联网、操控浏览器/电脑
</div>

</div>

<div class="mt-4 text-xs opacity-70">
"再进一步：还要会<strong>学会用新工具</strong>"——这是嘉宾认为最难的一关。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-pillars.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 推理：从 ReAct 论文开始

<div class="text-sm opacity-70 mb-4">2022 年 10 月，ChatGPT 上线前一个多月。一切的起点。</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ReAct 框架（Princeton + Google Brain）
"将推理和行为与 LLMs 相结合的通用范例"，让大模型不仅"动嘴皮子"，还能采取行动。

</div>

<div class="mt-4 p-4 rounded bg-gray-50 border-l-4 border-gray-400 text-sm">

### Nathan 的拆解
ReAct 本质上是 **prompt engineering**，强制大模型按固定格式输出：

1. **观察** —— 现在情况是什么、用户要什么
2. **思考** —— 下一步该做什么
3. **动作** —— 我有 1/2/3 三种工具，该选哪个？
4. **看结果** —— 拿到信息后再循环回到"思考"

</div>

<div class="mt-4 text-xs opacity-60">
"所有 AI agent 的架构，其实都是从这篇论文开始的。" 当时配的 GPT-3.5 错误率还很高。
</div>

---

# 工具：2023 年 3 月的两次大事件

<div class="text-sm opacity-70 mb-4">ReAct 给了范式，GPT-4 + Plugin 把工具调用的门彻底踹开。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2023.3.14 — GPT-4 上线
理解、推理、回答质量全面升级，让"逻辑能力"够用了。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2023.3.23 — ChatGPT Plugin
官方放开外部工具调用，开发者社区"沸腾"。

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 一个被低估的玩家：Zapier（成立于 2011 年）
- 主业是工作流自动化
- 大语言模型一发布**第一时间**为 LLM 做工具适配
- 早期开发者基本都是通过 Zapier 让 LLM 接 Gmail / 其他应用

</div>

<div class="mt-4 text-xs opacity-60">
推理 + 工具到位，第一块技术拼图算搭好了——但还差关键的"记忆"。
</div>

---

# 记忆：从 4096 token 到一百万

<div class="text-sm opacity-70 mb-4">token 不够，是当时所有 Agent 开发者最头疼的事。</div>

<div class="grid grid-cols-4 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-300">
<div class="text-xs opacity-70">GPT-4 早期</div>
<div class="text-2xl font-bold text-red-600 my-1">4096</div>
<div class="text-[10px] opacity-60">约 3000 英文词</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-300">
<div class="text-xs opacity-70">2023.5.11 Claude</div>
<div class="text-2xl font-bold text-yellow-700 my-1">10 万</div>
<div class="text-[10px] opacity-60">比 ChatGPT 多百倍</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-300">
<div class="text-xs opacity-70">2023.11 Claude 2.1</div>
<div class="text-2xl font-bold text-green-600 my-1">20 万</div>
<div class="text-[10px] opacity-60">一整本教科书</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-300">
<div class="text-xs opacity-70">2024.2 Gemini 1.5</div>
<div class="text-2xl font-bold text-blue-600 my-1">100 万</div>
<div class="text-[10px] opacity-60">百万级</div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**2023.6.13 — OpenAI Function Calling**<br/>
JSON 模式 + 1.6 万 token，AI 终于可以"可靠地调 API"。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**作者概括**：到这里，Reasoning + Memory + Tools 三块拼图全部到位。

</div>

</div>

---

# 让 AI 操控你的电脑

<div class="text-sm opacity-70 mb-4">2023 年底到 2024 年底，从初创公司走在前面，大厂一年后才跟上。</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 2023.12 — Simular AI
**第一个**让大语言模型控制人的电脑的 AI agent 应用公司——
Nathan 印象里"技术路线的极大飞跃"那一刻。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2024.10 — Claude Computer Use
Anthropic 自己也上了 computer use。
功能基本和 Simular AI 当年那版**相似**。

</div>

</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-green-500 bg-green-50">
"开发者的这个社区或初创公司这个社区其实走的比大厂要更早。"
<div class="not-italic text-xs opacity-60 mt-2">— Nathan 回顾 Simular AI 比 Claude 早将近一年</div>
</div>

<div class="mt-4 text-xs opacity-60">
吴恩达在 2024 年底的演讲彻底点燃了非技术圈："2025 年是 AI Agent 应用元年"开始登上头版。
</div>

---
layout: two-cols
---

# Chaoyang：Agent 四代范式

从"单机自嗨"到"全球分布式互联"，Chaoyang 总结出 AI Agent 的四代演进：

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>① Single Agent</strong> · Planner + Memory + Tools，单个智能体
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>② Single-machine Multi-agent</strong> · LangGraph / CrewAI / AutoGen，单机多智能体
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>③ Distributed Multi-agent</strong> · 不同设备/机房间联动（现在）
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>④ Agent-Agent 协议 + AI OS</strong> · 像安卓/iOS 那样的统一标准
</div>

</div>

<div class="mt-3 text-xs opacity-70">
"<strong>一个单点是无法做到的</strong>"——支撑亿级用户必须走完四代。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# MCP：AI 应用的"USB-C 端口"

<div class="text-sm opacity-70 mb-4">2024 年 11 月初，Anthropic 推出 Model Context Protocol，为第三代铺路。</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### MCP 解决的问题
"很多网站和服务都会有 anti-bot 的设置"——
Manus 跑任务时常常访问不了数据源、任务失败。
MCP 提供**通用协议**，让大模型可以直接连数据源。

</div>

<div class="mt-4 p-6 text-lg italic border-l-4 border-orange-500 bg-orange-50">
"Anthropic 将 MCP 协议称为'AI 应用的 USB-C 端口'。"
</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 但还差最后一代
MCP 解决的是 **agent ↔ 工具/数据** 的通信；<br/>
真正缺的，是 **agent ↔ agent** 之间的通信协议——以及承载它的 AI OS。

</div>

---

# 第四代：要一个"AI 时代的安卓"

<div class="text-sm opacity-70 mb-4">为什么大家都在押注操作系统？</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### Chaoyang 的类比
30 年前 PC 互联网、20 年前移动互联网都经历过同样的事：<br/>
两台电脑底层链路没打通 → 软件之间没法沟通 →
最后靠 **TCP/IP、移动基站通信标准**这类全行业协议统一。

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2024.11 底 — /dev/agents
- 前**安卓系统**高管创业
- 拿到 **5600 万美元**种子轮
- CEO David Singleton："我们需要一个类似于安卓系统的人工智能时刻"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Chaoyang 的预言
"我觉得安卓一定要被重构。打开之后就是一个框，
你可以问的一切问题——所有动作和信息都呈现在这个框的结果里面。"

</div>

</div>

---
layout: two-cols
---

# 错误叠加：为什么 Agent 长链条会崩

让一个 Agent 端到端完成事情，每一步都有出错概率——
最致命的不是单步错误率，而是 **乘法叠加**。

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### Nathan 的算术
- 第 1 步：错 1%
- 第 2 步：错 2%
- 第 3 步：错 1%
- …
- 第 10 步：错误**累积**到极高概率

</div>

<div class="mt-3 text-xs opacity-70">
"<strong>很多企业办公流程是一个 20 步、几十步的一个过程</strong>"——到最后这个错误是一个极高的概率发生。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./error-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 两个绕不开的技术瓶颈

<div class="text-sm opacity-70 mb-4">Reasoning + Memory + Tools 让"做 demo"成熟了，但要做"成熟产品"还差两件事。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Reliability（可靠性）
"用户问你 100 次，至少 90 次或 95 次以上能够给到用户正确且相关的信息。"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Robustness（鲁棒性）
"在各式各样特殊的情况下，或者有些边缘案例的情况下，能够满足用户的需求。"

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括</strong>：阈值理论 + 错误叠加 + 可靠性/鲁棒性，三件事其实是同一件——
端到端完成多步任务的能力，仍然是当前 Agent 最薄的一块。
</div>

---
layout: two-cols
---

# 1.5 万家公司在赛跑

Tiny Fish CEO Keith 扒了一下数据：<br/>
全美 **1.5 万家**接受融资的初创企业在做 AI Agent。<br/>
Sophie 王可倚把它们大致分成三类：

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>① 通用型 Agent</strong><br/>
Manus 为代表，直面 C 端用户
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>② 基础设施与框架</strong><br/>
LangChain · Pinecone · LlamaIndex · Semantic Kernel · Bedrock Agents
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>③ 垂直化 Agent</strong><br/>
编程、客服、销售、科研、商业分析、供应链、医疗……
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-landscape.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 垂直明星之一：编程赛道的"造星工厂"

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Devin（Cognition AI）
- 号称首位"AI 软件工程师"
- 成立不到半年，估值跃升到 **20 亿美金**
- 月费 **500 美元**
- 朋友吐槽："**写代码一般般，做调研倒还不错**——敢情是个文科生"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Cursor（Anysphere）
- 四位 MIT 本科生 2022 年创立
- **不到三岁** 已实现 **1.5 亿美金**年化收入
- 正在洽谈估值可能高达**百亿**美金的新一轮融资
- OpenAI、Shopify、Instacart 团队都在用

</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-xs text-center">
<div class="p-3 rounded bg-gray-50 border">Replit · 2000 万开发者用户</div>
<div class="p-3 rounded bg-gray-50 border">Codeium / Windsurf · 戴尔在内 1000+ 企业客户</div>
<div class="p-3 rounded bg-gray-50 border">字节 Trae · 中文开发者</div>
</div>

---

# 其他六大赛道：哪些场景已经在赚钱

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>客服 · Decagon</strong><br/>
融资超 1 亿美元；客户含 Duolingo / Notion / Eventbrite；
能自动处理高达 <strong>70%</strong> 的客服工单
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>销售 · Clay（独角兽）</strong><br/>
自动抓取扩充目标客户数据；批量定制化互动；
已积累 <strong>十万名</strong>用户
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>商业调研 · Hebbia</strong><br/>
服务于全球资管规模前 50 名基金中的<strong>近 1/3</strong>；
客户还有大型律所、咨询公司、美国空军
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>科研 · Elicit</strong><br/>
全球已有<strong>超 200 万</strong>科研人员使用；
极大提升机器学习、制药、生物科技研究效率
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>供应链 · Palantir AIP</strong><br/>
"美国最神秘的大数据公司" 在 AIP 上推出 agent 功能，
已在 <strong>60 余家</strong>大型企业投入使用
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>医疗 · Epic</strong><br/>
美国最大医疗信息公司，把患者预约、基本沟通、
项目批准等繁琐行政自动化
</div>

</div>

---

# 成功 Agent 的四个共同特征

<div class="text-sm opacity-70 mb-4">能跑出来的 agent 大多至少占一条。</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ① 任务定义明确 + 高度重复
客服、销售——AI 显著提效、风险相对较低。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ② 工作流模块化 + 相对独立
切割良好的软件开发任务——
不需要大量背景知识，在封闭、可控环境里跑。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### ③ 重信息检索/分析/推理 + 自然语言交互
不需要复杂外部工具，比如各种调研——
"利于 AI 扬长避短"。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### ④ 协助而非完全取代人类
让企业**逐步、稳妥**地把 AI 整合进现有工作流。

</div>

</div>

<div class="mt-4 text-xs opacity-60">
反过来：Manus 翻车的"生活/数据分析/创意"任务，恰好是这四条都不太占的场景。
</div>

---

# Adept 的学费：第一个倒下的明星

<div class="text-sm opacity-70 mb-4">CEO David Luan 是 OpenAI 出来创业的。曾是这个赛道最被看好的玩家之一。</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 高光时刻
- 总融资额 **4.15 亿美金**
- B 轮估值超 10 亿，**晋升独角兽**
- 描述构成了陈茜对 Agent 赛道的"最初认知"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 致命组合
- 技术研发受阻
- 自己研发基础模型 → **烧钱太狠**
- **2024 年年中**"卖身"给亚马逊

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>陈茜的反问</strong>："如果 Adept 能撑过黑夜、撑到如今的黎明时刻，说不定能比 Manus 拿出更好的产品，公司的结局会不会不一样呢？"
</div>

<div class="mt-3 text-xs opacity-60">
教训三连：创业路径的判断 / 时机的判断 / 烧钱速度的判断——任何一条踏空都可能死在黎明前。
</div>

---

# 陈茜的收尾判断

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 元年来了
"我坚决认为今年——我称今年是 AI 应用 **To C 应用的元年**。
To B 其实去年就有一些很好的产品已经收入很高了。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 通用 Agent 等 AGI
"在所谓 AGI 达到之前，一个通用的 AI agent 能够帮你解决所有事，我觉得是不可能的。"

</div>

</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-orange-500 bg-orange-50">
"创业公司现在应该专注的是在垂直领域把它做到非常精细。其实 Perplexity 这个产品就非常明确地给了大家一个方向。"
<div class="not-italic text-xs opacity-60 mt-2">— 嘉宾给应用创业者的具体建议</div>
</div>

<div class="mt-4 text-xs opacity-70">
日常生活里你已经在跟几十个"agent"打交道——买机票的、买保险的、买房的。<br/>
AI Agent 不该被神秘化，它就是某个垂直领域帮你做事的顾问。
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Manus 虽然不够好，但却让人看到了 AI 应用爆发前夕的黎明曙光。"
<div class="text-[10px] opacity-60 mt-0.5 not-italic">— 陈茜，开场定调</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"它告诉所有的 AI 尤其应用从业者，不要痴迷于技术底层，你要做的是提供一个完整度高的产品，让大家都用起来。"
<div class="text-[10px] opacity-60 mt-0.5 not-italic">— 嘉宾，谈 Manus 是"叫醒铃"</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"你得从用户体验开始，然后倒推到技术上。你不能只从技术的角度出发想要怎么把它卖出去。"
<div class="text-[10px] opacity-60 mt-0.5 not-italic">— 嘉宾引述乔布斯重返苹果后的发言</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"用户要真正把它作为一个生产力工具来用，它必须要在这个用户群体里超过某一个阈值。"
<div class="text-[10px] opacity-60 mt-0.5 not-italic">— 嘉宾抛出的"阈值"框架</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"创业公司现在应该专注的是在垂直领域把它做到非常精细。"
<div class="text-[10px] opacity-60 mt-0.5 not-italic">— 嘉宾给应用创业者的建议</div>
</div>

</div>

---
layout: end
---

# 天快亮了

<div class="mt-6 text-lg italic opacity-80">
"如今天快亮了，但新的一天才刚刚开始。长路慢慢，还早着呢。"
</div>

<div class="mt-4 text-xs opacity-50">
— 陈茜 · 硅谷101 · 2025 年 3 月
</div>
