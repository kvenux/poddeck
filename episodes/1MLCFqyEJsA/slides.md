---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '混乱、分裂、吞并：2024年AI的信仰之战'
info: |
  硅谷101 陈茜 · 2024年生成式AI 年终总结
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 混乱 · 分裂 · 吞并

## 2024 年 AI 的信仰之战

<div class="mt-6 text-base opacity-70">
硅谷101 · 陈茜 · 2024 年终总结
</div>

<div class="mt-10 text-sm opacity-50">
GPT-5 没来 · 巨头宫斗 · 明星陨落 · 但 o3 让所有人松了口气
</div>

---

# 这一年，硅谷的 AI 故事

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 高层大地震
OpenAI 11 位联合创始人只剩 3 位，Ilya、Mira、Schulman 接连离开

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 烧钱与变身
OpenAI 预计年亏 50 亿 → 2026 年亏 140 亿，准备转型营利公司

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 范式转换
GPT-5 难产，但 o1 / o3 用"慢思考"开出第二条 AGI 路径

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 巨头围攻
谷歌 Gemini 2.0、Anthropic 编码护城河、xAI 122 天建成 10 万卡集群

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 明星陨落
Character.AI、Inflection、Adept 被"变相收购"——人才与许可打包卖

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 信仰之战
"墙不存在" vs "scaling 已撞墙"——AGI 的信仰者仍在战斗

</div>

</div>

---

# OpenAI 的 2024：一场宫斗收尾

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div>

### 离开的人

- **5 月** — 联合创始人 & 首席科学家 **Ilya Sutskever**，之后创办 SSI 速融 10 亿美元
- **5 月** — 超级对齐团队负责人 **Jan Leike**
- **8 月** — ChatGPT 核心负责人 **John Schulman** 加入 Anthropic
- **9 月** — CTO **Mira Murati** 离职，传融资中

### 回来的人

- **Greg Brockman** 休假三个月后回归

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 11 → 3

11 位联合创始人，**到 2024 年底只剩三位**。

<div class="mt-4 text-xs opacity-70">
"OpenAI 用了一年的时间来处理高层之间的人际冲突，如今终于可以说暂时稳定下了局面。"
</div>

<div class="mt-3 text-xs opacity-70">
坏消息：多数创始成员已经离开。<br>
好消息：宫斗结束，Sam Altman 有了稳定的权利。
</div>

</div>

</div>

---

# 烧钱与变身：从非营利到 PBC

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 10 月新融资
<div class="text-3xl font-bold text-blue-600 my-2">$66 亿</div>
<div class="text-xs opacity-70">公司估值 $1570 亿</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 2024 收入
<div class="text-3xl font-bold text-yellow-600 my-2">$37 亿</div>
<div class="text-xs opacity-70">来源：《纽约时报》获得的融资文件</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 2024 亏损
<div class="text-3xl font-bold text-red-600 my-2">$50 亿</div>
<div class="text-xs opacity-70">预计 2026 年亏损将达 $140 亿</div>

</div>

</div>

<div class="mt-8 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**结构变身**：OpenAI 已正式开始制定计划，从 2015 年成立时的非营利研究实验室，转型为一家 **public benefit corporation（公共利益公司）**。

</div>

<div class="mt-4 text-xs opacity-60">
按这个烧钱速度，2025 年的两大趋势必然是：① 继续大规模融资 ② 更激进的商业化
</div>

---

# 12 Days of Shipmas：Sam Altman 的营销秀

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 前奏惊喜
- **o1 正式版**（9 月首发，12 月转正）
- **Sora** ——历经 10 个月终于开放给公众
- **Canvas** —— 智能写作 + 代码 + 定制 agent 工作台

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 配菜
- ChatGPT Search 升级
- 与 Apple Intelligence 协作

<div class="mt-3 text-xs opacity-70 italic">
"看上去就非常不痛不痒了，甚至感觉是在给 12 天的发布会凑数。"
</div>

</div>

</div>

<div class="mt-6 p-5 rounded bg-red-50 border-l-4 border-red-500">

### 最后一天的王炸：o3

OpenAI 在"**Shipmas**"中发布下一代前沿模型 o3——一个"推理模型"，意味着它会**停下来思考然后自我核实**。

</div>

<div class="mt-4 text-xs opacity-60">
为什么跳过 o2？涉及其它公司的版权商标问题。
</div>

---
layout: two-cols
---

# 慢思考的胜利：o1 / o3 范式

代号 **Strawberry** 的 o1，第一次让模型学会**人类的"慢思考"**：

- **CoT (Chain of Thought)** —— 反复拆解、理解、推理
- 推理阶段堆算力，而不是预训练阶段堆参数
- 看到了**"大力出奇迹"之外的**新道路

<br>

**o3 在 3 个月内的提升是惊人的**：
- Codeforces 编程：超过 99% 人类程序员
- GPQA 博士水平科学题：超过一般博士生
- ARC-AGI 抽象推理基准

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tick-tock.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 五层超级人工智能

OpenAI 前安全副总裁 **Lilian Weng** 在硅谷华源年会上对硅谷101 描述：

> o1 的发布能将"五层超级人工智能"从最初级推进到了更上一层级。

<br>

**当前位置**：o1 / o3 把我们从 L1 推到了 **L2 推理层**。

**下一关**：L3 **自主 Agent**——能自己执行复杂任务的 AI。

<div class="mt-6 text-xs opacity-60">
2024 年 12 月，o3 给行业的圣诞惊喜：<br>
"AI 发展并没有放缓，Scaling Law 依然有效。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./five-layers.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "墙不存在" —— Sam Altman 的推文

<div class="mt-6 p-6 text-2xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"there's no wall"

</div>

<div class="mt-4 text-base opacity-80">
（墙不存在）
</div>

<div class="mt-8 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 撞墙派的担忧
预训练 scaling law 已经放缓，GPT-5 难产，参数堆不动了。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Sam 的回应
"there's no wall"——o1 和 o3 证明，墙的另一侧叫**推理阶段算法**。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**采访嘉宾的判断**：2025 年，"卷参数"与"卷推理算法"会**双重并行**——就像英特尔当年的 Tick-Tock 计划。

</div>

---

# 谷歌的反击：Gemini 2.0 全家桶

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 12 月 12 日
**Gemini 2.0 Flash**
延迟更低、多模态输入输出齐全

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 12 月 16 日
**Veo 2** 视频模型直接对标 Sora，效果"非常惊艳"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 12 月 20 日
**Gemini 2.0 Flash Thinking**——直接对标 o1，思考速度还比 o1-mini 快

</div>

</div>

<div class="mt-6 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### Sundar Pichai 的定调

如果 Gemini 1.0 是用于**组织和理解信息**，那么 Gemini 2.0 则是**让信息变得更有用**。

</div>

<div class="mt-4 text-xs opacity-60">
如果 OpenAI 没有压轴的 o3，年底的风头几乎全都会被谷歌抢走。
</div>

---
layout: two-cols
---

# Project Astra：智能眼镜会复活吗？

Gemini 2.0 demo 里最惊艳的部分：

- 手机摄像头实时交互
- 长达 **10 分钟会话记忆**
- 调用 **Search、Lens、Maps** 完成日常任务
- 智能眼镜原型已就位

<br>

**Sundar Pichai 评价**：

> 展示了"通用 AI 助手的曙光"

<br>

<div class="text-xs opacity-70">
Agent 是 OpenAI 五层框架中的 L3。<br>
谷歌如果不能拿下 agent 入口，AI 时代的搜索可能轮不到它来定义。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">

<div class="space-y-3 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-300">
<div class="text-2xl">🕶️</div>
<div class="text-sm font-bold mt-2">智能眼镜</div>
<div class="text-xs opacity-70">捕捉目光 · 24/7 在线</div>
</div>

<div class="text-2xl opacity-50">↓</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-300">
<div class="text-2xl">🤖</div>
<div class="text-sm font-bold mt-2">AI Agent</div>
<div class="text-xs opacity-70">长上下文 · 多工具调度</div>
</div>

<div class="text-2xl opacity-50">↓</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-300">
<div class="text-2xl">🌐</div>
<div class="text-sm font-bold mt-2">Search / Lens / Maps</div>
<div class="text-xs opacity-70">谷歌生态闭环</div>
</div>

</div>

</div>

---

# NotebookLM：AI 播客的病毒式爆款

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

基于 Gemini 1.5 Pro 的**长文本 + 多模态**衍生的笔记工具，**音频概览**功能能把任意文档变成一男一女对话风格的 AI 播客。

- 在以**播客**为主流媒介的硅谷，**形成病毒式传播**
- Andrej Karpathy、Sam Altman 都公开站台
- 12 月升级为 **NotebookLM Plus**，可以在播客中**打断 AI 主播提问**

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">

"我们硅谷101 一期播客节目放进去，就能生成出这样的 AI 播客内容。"

<div class="mt-2 text-xs not-italic opacity-70">
—— 陈茜对 NotebookLM 的实测
</div>

</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**VC 的冷水**：NotebookLM 核心团队（Raiza Martin 等）已经辞职创业，但有投资人不看好——

> "如果你不是那么懂底座……你未必能做得出来 NotebookLM。**产品创新之上是要结合这个对底座的理解的。**"

</div>

---

# Anthropic：开发者的护城河

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 强项 · 2B / 2D
- 编码任务表现出色，工程师推崇
- Claude.ai 上**第一大使用场景**是网页和移动应用开发，**占 10.4%**
- 工程师用 Claude 调试代码、解释 Git 操作

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 弱项 · 2C
- iOS/Android 移动应用收入达到 **100 万美元用了 16 周**
- ChatGPT 达到同样里程碑**只用了 3 周**
- C 端聊天机器人**距离 OpenAI 仍很远**

</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 亚马逊融资
<div class="text-3xl font-bold text-green-600 my-2">$40 亿</div>
<div class="text-xs opacity-70">公司估值 $400 亿</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 2024 营收预计
<div class="text-3xl font-bold text-blue-600 my-2">&gt; $10 亿</div>
<div class="text-xs opacity-70">高于此前预测</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 关键挖角
<div class="text-3xl font-bold text-purple-600 my-2">Schulman</div>
<div class="text-xs opacity-70">OpenAI 联创 8 月加入</div>

</div>

</div>

---
layout: two-cols
---

# xAI：马斯克的"算力 + 融资 + 开源"

**三件大事**：

- **算力** —— Colossus 100k GPU 集群在田纳西州孟菲斯启用，**仅用 122 天建成**，下一步扩展到 200k
- **融资** —— 12 月完成 **C 轮 60 亿美元**，距离 5 月 B 轮 60 亿美元仅 6 个月
- **开源** —— Grok-2 / Grok-2 mini 8 月发布

<br>

**附加项目**：数次把 OpenAI 告上法庭。马斯克说 OpenAI 应改名为：

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 italic text-sm">
"超级闭源 以实现利润最大化 AI"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./colossus.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Meta：不打前线，但全线布局

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 模型层

- **Llama 3.3 70B**（12 月 6 日）—— 性能匹配 Llama 3.1 405B，但成本更低
- 扎克伯格预告 **Llama 4** 即将到来
- **LCM (Large Concept Model)** —— 12 月 11 日发布，**完全突破 LLM 架构**的尝试，以"概念/意义"为单位运算

### 应用层

- **AI 数字助理** 月活近 6 亿
- 100 万广告商使用 Meta GenAI 工具，**月生成 1500 万条广告**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 股价说明一切

<div class="text-5xl font-bold text-green-600 my-3">+70%</div>

2024 年 Meta 股价涨幅约 70%。Jefferies 分析师把 Meta 列为 **2025 年生成式 AI 的"赢家"**。

<div class="mt-3 text-xs opacity-70">
Ray-Ban Meta 智能眼镜被市场看好。下一代可能引入屏幕显示 + 更强 AI 交互。
</div>

</div>

</div>

---

# Aut Zuck Aut Nihil

<div class="mt-8 p-8 text-center">

<div class="text-4xl font-bold italic text-purple-700">
Aut Zuck Aut Nihil
</div>

<div class="mt-4 text-base opacity-70">
扎克伯格 2024 年穿过的一件 T 恤上的拉丁文
</div>

</div>

<div class="mt-8 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 出典
拉丁短语 **"Aut Caesar Aut Nihil"** 的变形，意思是：

> 要么是凯撒，要么什么都不是。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 在 AI 时代翻译过来

要么赢所有，要么一无所有。

<div class="mt-3 text-xs opacity-70 italic">
All or nothing.
</div>

</div>

</div>

<div class="mt-6 text-xs opacity-60 text-center">
不再是单纯的 Metaverse——是一个融合 AI、混合现实和元宇宙的未来。
</div>

---

# 亚马逊：卖铲子的人，闷声发财

<div class="mt-4 text-sm opacity-70 italic">
"我不跟你们拼模型拼算力拼芯片——我把所有东西打包卖给客户，做好 2B 的生意。"
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 自研芯片集群
- **Trainium** 自研 AI 芯片
- 与 **Anthropic 绑定**：10 万张 Trainium 集群
- 同时还有英伟达芯片合作

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型超市 Bedrock
- 自研 **Nova 系列**：纯文本 + 多模态
- 上百种市面流行模型供客户选择
- 模型蒸馏、AI 幻觉解决、安全技术全套打包

</div>

</div>

<div class="mt-6 p-5 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**陈茜的比喻**：

> "你需要根萝卜青菜也并不需要自己去务农种菜，你也可以去超市直接买。"

</div>

<div class="mt-4 text-xs opacity-60">
押注 2025：算力需求只增不减，重心从训练转移到 inferencing 推理。
</div>

---
layout: two-cols
---

# 陨落的明星：被"变相收购"的三家

不是被传统收购，而是**人才 + 技术许可打包卖给巨头**——**既能避开垄断监管，又能收人才收技术**。

<br>

**三家的共同点**：

- 都在**同时做底座模型 + 做产品**
- 都被证明这条路**太烧钱、模型太难以持续**
- 创始人 / 核心团队最后都被巨头吸收

<br>

<div class="text-xs opacity-70">
新的硅谷模式：当一家创业公司钱烧光、模型跑不下去，巨头会出现，用"技术授权 + 全员入职"的形式接管。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./acqui-hire.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 创业悖论：做底座烧死，不做底座没护城河

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 做大模型？
**太烧钱**。Character.AI、Inflection、Adept——三家曾经的明星，全部因为底座模型烧钱而资金链断裂。

</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 不做大模型？
**没有技术壁垒和护城河**。Google Labs 出来的 NotebookLM 团队创业，被 VC 质疑"出去用 Gemini API 未必做得出 NotebookLM"。

</div>

</div>

<div class="mt-8 p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 采访嘉宾的答案：节奏感

> "Perplexity 把控得很不错……他到今天其实也**没有完全的去重新训练自己的底座**。但是我觉得他会有那么一天的。你**别步子迈得过大**，你还没到那一天的时候，你就已经把钱给烧完了。"

</div>

<div class="mt-4 text-xs opacity-60 text-center">
这是 AI 创业比互联网创业更难的地方。
</div>

---

# Perplexity：不训练底座的智者

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 公司数据

- 2022 年成立
- 年底完成 **$5 亿融资**，估值 **$90 亿**
- 月活 **1500 万**，日活 **200 万**
- 黄仁勋为它站台，自称**每天都在用**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 聪明之处

- **不训练自己的模型** —— 调用 GPT / Claude / Llama / Mixtral
- 核心竞争力：**检索 + 排序 + 编排 + 答案生成**
- 计划在付费版之外**引入广告**

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 2025 年的硬仗

- OpenAI 已经推 **SearchGPT**
- 谷歌 AI 搜索一定会跟进
- 广告化能否重新定义 AI 搜索的商业模式？

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**对 agent 创业者的提醒**（嘉宾）：

> "如果你是 AI application，你就是 Copilot；你是 AI agent，你就是自动驾驶……agent 也需要数据。"

</div>

---

# Physical Intelligence：Karpathy 真心想投的项目

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

陈茜最早听说这家公司，是从 **Andrej Karpathy** 口中。

> "有很多项目找他投资，他答应了只是为了帮助朋友……但为数不多的他**真心想投资且看好**的项目，就当属 Physical Intelligence 了。"

**这家公司是做什么的**：

通过 AI 模型为机器人打造"**大脑**"。

- 11 月完成 **$4 亿融资**，估值 **$20 亿**
- 投资者：贝佐斯、OpenAI
- 11 月初发布首个通用基础模型 **π0**
- 已能做：**折叠衣物、组装盒子、动态物品放入容器**

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 嘉宾的"两票"

> 2024 年最大的进展，我会 vote **o1** 还有 **π0**。
>
> π0 更代表 **training data driven** 路线，o1 更代表 **algorithm driven** 路线。

<div class="mt-4 text-xs opacity-70">
具身智能的推理侧要在**端侧**发生——对算力的要求会更高。
</div>

</div>

</div>

---
layout: two-cols
---

# 2025：三条平行路线

嘉宾对 2025 年的判断——这**三条线会同时往前推**：

- **① 更大模型** —— GPT-5、Claude 4/5/6、Mistral……大公司继续构建，"在很多不同方面就是表现得更好"
- **② 垂直模型** —— 基于大模型蒸馏 / 量化，**让模型变得更小但更有效率**，更有性价比
- **③ 新架构** —— 嘉宾的"第三种希望"：**非 Transformer、非 diffusion** 的全新架构

<br>

<div class="text-xs opacity-70">
"如果在这方面能有所突破，那将再次对 AI 行业产生巨大的影响。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./paths-2025.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 硅谷 AI 生态：多个派系，各自下注

<div class="grid grid-cols-3 gap-3 mt-6 text-xs">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型层
更大的基础模型——OpenAI、Anthropic、Google、xAI

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 垂直层
从大模型蒸馏出的垂直模型 + 工程优化

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 非 Transformer
Meta LCM、寻找下一代架构的研究者

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Agent 智能体
谷歌 Astra、OpenAI 的 L3 押注

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 硬件入口
Meta Orion AR、苹果、智能眼镜大战

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 机器人
Physical Intelligence π0、具身智能

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 无人驾驶
特斯拉 FSD、Waymo

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 卖铲子
Nvidia、AMD、Intel、AWS

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 上下游
电力公司、数据中心服务商

</div>

</div>

<div class="mt-8 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm italic">

"在硅谷的 AI 生态中，已经衍生出了多个派系……同时也有应用、硬件、agent 智能体、机器人、无人驾驶，还有卖铲子的那边。这些生态在 2024 年得到了进一步的巩固与布局。"

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期 2024 年终总结里最值得记住的几句：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"there's no wall（墙不存在）"
<div class="text-xs opacity-60 mt-1 not-italic">— Sam Altman 推文，回应 scaling 撞墙论</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"在预训练上堆参数的'大力出奇迹'之外的……通过推理阶段的算法突破，找到一条新的通往 AGI 的道路。"
<div class="text-xs opacity-60 mt-1 not-italic">— 陈茜对 o1 范式的总结</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"在算法跟数据两边 Tick-Tock……应该会摇出下一个大的一个 breakthrough 或者一个 milestone。"
<div class="text-xs opacity-60 mt-1 not-italic">— 采访嘉宾，类比英特尔 Tick-Tock 计划</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"如果你是 AI application，你就是 Copilot；你是 AI agent，你就是自动驾驶。"
<div class="text-xs opacity-60 mt-1 not-italic">— 嘉宾对 agent 创业的判断</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"你别步子迈得过大，你还没到那一天的时候，你就已经把钱给烧完了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 嘉宾点评 Perplexity 不训练底座的"节奏感"</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Aut Zuck Aut Nihil"——要么是凯撒，要么什么都不是。
<div class="text-xs opacity-60 mt-1 not-italic">— 扎克伯格 2024 年穿过的 T 恤拉丁文</div>
</div>

</div>

---
layout: end
---

# 信仰之战 · 未完待续

<div class="mt-8 text-xl italic opacity-80">
"也有为了 AGI 信仰继续战斗的科技从业者们。"
</div>

<div class="mt-6 text-sm opacity-60">
硅谷101 · 陈茜 · 2024 年终总结
</div>
