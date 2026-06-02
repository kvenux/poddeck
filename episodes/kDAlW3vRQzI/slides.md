---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '架构现代 AI 系统：平台、Agent 与集成'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 架构现代 AI 系统

### 平台 · Agent · 集成

<div class="mt-6 text-sm opacity-70">
MLOps.community Panel
</div>

<div class="mt-10 text-xs opacity-50">
Frederique（应用研究 · MIA）<br/>
Shao（Bell Canada · 企业 AI）<br/>
Allan（Buzz HPC · 加拿大主权 AI 云）
</div>

<div class="mt-6 text-xs opacity-40">
一场关于黑客松、tokenomics、constrained generation 与 agent 治理的圆桌
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 三位站在不同位置上的人
学术研究、电信巨头企业 AI、加拿大主权 GPU 云——三人围绕同一个黑客松，给出三种完全不同的 stack 答案。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Pokemon 一样的命名混乱里
Claude Code、Codex、Cursor、OpenCode……你以为是产品，其实只是壳。**底层模型是可以替换的**。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Tokenomics 觉醒之旅
从"5 分钟拿 API key"到"第一张账单"再到"自托管开源模型"——这是每个 AI 团队都要走的弯路。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 80% → 95% 的死亡幽谷
"很容易做出 demo，但产品要 95% 才能上线。" Frederique 一句话点破无数项目的失败原因。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Constrained Generation 的秘密
为什么闭源 API 永远不给你"完全控制"？因为同一把钥匙能让 Claude 说出"how to build a bomb"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Agent 治理的真实代价
"我们有一个 agent 给 Jira 付了 10,000 次款。" 沙盒不够、可观测性不够、护栏不够——这是企业落地的真正瓶颈。

</div>

</div>

---
layout: two-cols
---

# 三位嘉宾，三种立场

**Frederique** · 来自 MIA（魁北克的研究-产业桥梁组织），帮多家伙伴搭 AI 应用早期版本。

**Shao** · 来自 Bell Canada，关心企业级治理、可观测性、采购已有 SaaS 的 AI 升级。

**Allan** · 来自 Buzz HPC，**加拿大最大的主权 AI 云**，提供 GPU、推理服务、开源模型托管。

<div class="mt-6 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">
三人有一个共同战场：一周内拉到 100+ 队伍、1000+ 提交的<strong>心理健康 AI 黑客松</strong>。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./character-space.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 黑客松的来由：心理健康 + AI 护栏

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500">

Bell Canada、Kids Help Phone、MIA、Buzz HPC 一起办了一场黑客松——主题是：**对话式 agent 在涉及自杀意念等敏感场景时，何时应该交给人类**。

</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Frederique 的描述
> "we had over 100 teams participating in a hackathon"
>
> "we ended up building a self-service infrastructure so teams could just trigger jobs and see how they fared and then we displayed those on a leaderboard"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Shao 的强调
经济下行、政治紧张让心理健康议题热度极高。几家加拿大公司凑在一起办这件事，本身就是一种**主权 AI 实践**——既不送数据出国，也不依赖海外 API。

</div>

</div>

<div class="mt-4 text-xs opacity-60">

<strong>作者概括</strong>：这场黑客松成了三人后续讨论的共同坐标系。后面所有关于"平台 / 开源 / 治理"的争论，背后都是这个真实项目。

</div>

---
layout: two-cols
---

# 一周内被跑了 1000+ 次的评测流水线

Frederique 描述他们如何"在最后一刻搭"出整个评测基础设施：

- 跑在 **Buzz HPC 上的 Kubernetes**
- 接入 **Nemotron 系列开源 LLM** + GPU + CPU
- 用 **Jupyter notebook** 让队伍提交、可视化结果
- 一个 leaderboard 让 100+ 团队互相比较

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 italic text-sm">
"it was a something we built at the last minute but it was super used. We had a thousand submissions throughout the week."
</div>

<div class="mt-3 text-xs opacity-60">
中间 Shao 的团队还往里塞了一个"隐藏数据集"——之前自我感觉良好的队伍瞬间慌了，分数完全洗牌。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rsp-ladder.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 平台到底该提供什么 · Shao 的清单

<div class="text-sm opacity-60 mt-2">Shao 在企业内部跑过多年 AI 治理。他给"AI 平台"的检验标准非常具体：</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Reliability + Scalability
能不能在用户暴涨时弹起来，不在最关键的时刻挂掉。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Great Support
出问题的时候**真的能找到人**，而不是抛工单进黑洞。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Built-in Guardrails
他提到 Google 的 **Model Armor**——大企业本来就有大量治理合规需求，平台能内建多少就少多少要开发者自己写。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Sovereignty / 数据驻留
对加拿大企业来说，"数据不能离开本国"是硬性合规线。Buzz 的存在直接对应这条。

</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
注意 Shao 没有把"最强模型"放进清单——企业级关心的是**可预期性**，而非 SOTA。
</div>

---

# Pokemon 一样的命名混乱

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 italic">
"any of these names... they sound like Pokemon sometimes."
<div class="text-xs opacity-60 mt-1 not-italic">— Allan，谈 Codex、Claude Code、Cursor、OpenCode 这一堆同质化工具</div>
</div>

<div class="mt-6 text-sm">

Allan 揭了个很多人不知道的内幕：这些"AI 编程产品"——**底下用的模型是可以换的**。

</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 你以为
Claude Code = Anthropic Claude<br/>
Codex = OpenAI<br/>
Cursor = 黑盒

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 实际上
这些工具只是**harness**（外壳）。底层 inference endpoint 可以指到任意开源模型。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 这意味着
你可以让 Claude Code 用 Qwen / MiniMax / Mistral / Cohere 跑，规避 token 费用与 5 分钟即逝的 prompt cache。

</div>

</div>

<div class="mt-4 text-xs opacity-60">
Frederique 当场反应："I didn't know cloud code can actually plug into like an open source model. That was really interesting. I'm going to talk to my team about that."
</div>

---

# 为什么要换成开源模型

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 闭源 API 的隐藏代价
- **Prompt cache 5 分钟就过期**，复用率低，下次重新算
- **零数据留存政策 = 10× token 成本** （Allan 的原话）
- **没控制权**：无法做 LoRA、steering vectors、advanced sampling

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 开源模型的可玩空间
- **Qwen 系列**、**MiniMax**、**Mistral**、**Cohere** 都在 coding agent 上不输前沿
- 可以装 **LoRA**、可以接 **steering vectors**、可以改 sampling
- **价格可控** + **数据本地** + **本地优化空间**

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"a lot of them are good now for AI agentic coding... and you can power claude code using any of these models, and it's cheaper."
<div class="text-xs opacity-60 mt-1 not-italic">— Allan，强调开源模型已经追上 SOTA 的代码能力</div>
</div>

---

# Monet 与 AI Slop：人为什么讨厌"AI 味"

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

Allan 提了一个 Twitter 上的小事故：

有人把法国画家 **Monet** 的一幅冷门睡莲画发在 Twitter 上，**谎称是 AI 画的**——评论区瞬间炸开："太糟了、构图不行、根本不像 Monet"。

但那是一张真画。

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 italic">
"people actually like the outputs of AI until they know that something was written by AI."
</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### "AI 味"的几个 tell
- **"It's not X, it's Y"** 的句式
- **过度使用分号和 em dash**
- 一眼能识别的措辞痕迹

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Buzz 的反 slop 路线
通过 sampling / 模型内部干预消除 slop 与重复短语——这是开源 stack 才能做的事，闭源 API 给不了你这个 knob。

</div>

</div>

---
layout: two-cols
---

# Tokenomics 觉醒之旅

Frederique 把 GenAI 学习曲线总结成了一句话：

> "you don't really care about tokens initially but eventually when you... get your new invoices, this is when you..."

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-green-50 border-l-4 border-green-500">

### Day 1 · 蜜月期
API key 五分钟拿到，你不在乎 token，OpenAI/Claude 直接调。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500">

### 上线之后 · 觉醒
账单 + rate limit 同时降临。原来 token 真的是钱。

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500">

### Day N · 自托管
开始研究开源模型 + 自己管 GPU。但这是一门新手艺——所以你需要 Buzz 这样的平台。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./latent-demand.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 硬件通胀：Michael Burry 错了

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 大空头先生预言落空
《大空头》原型 Michael Burry 一直说"老 GPU 不赚钱"。Allan 直接打脸：

> "that guy's wrong."

**A100 GPU 现在已经七年了**。去年中位价 ~$1.50/hr，**现在很难在 $2/hr 以下找到**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Allan 的现场报价
- **H100**: ~$2.50/hr
- **H200**: ~$3.50/hr
- **A40**: ~$0.50/hr（小模型推理超划算）
- **Blackwell**: "talk to sales"

</div>

</div>

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"we're seeing extreme hardware inflation across the industry. So anything we're talking about right now with calculations around tokenomics, we have to understand that it could change."
</div>

<div class="mt-3 text-xs opacity-60">

<strong>作者概括</strong>：在做 unit economics 的时候，<strong>GPU 现货价的波动幅度本身就是一个变量</strong>，而不是给定常数。

</div>

---

# 不只是大小，还是世代

Allan 反复纠正主持人的"大小观"——**模型 size 和 GPU size 是两件事**，**GPU 世代差距**更要紧。

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Ampere（A100）
- 已 7 年老 GPU
- **80GB VRAM** 大显存
- 仍能跑很多 Blackwell 跑不动的大模型

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Blackwell 推理类
- 24 / 48GB VRAM
- 支持 **FP4** 硬件加速
- 高度量化场景吃满硬件优势

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 实战取舍
显存能装下 + FP4 高效  → Blackwell 完胜；<br/>
显存装不下  → A100 仍是答案。

</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>关键洞察</strong>：选 GPU 不是"越新越好"——而是先看你的模型能不能装得下。

</div>

---

# 模型大小的真实门槛

<div class="text-sm opacity-60 mt-2">Allan 给了一个非常具体的"开源模型可用度"标尺：</div>

<div class="grid grid-cols-3 gap-3 mt-5 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 27B - 35B 参数
MacBook Pro 本地跑得动的范围——但**限制非常明显**，prompt 稍长就崩。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 200B - 300B 参数
需要 H100 / Blackwell 集群。**开始对标 Sonnet / Opus / Gemini**，长 context 才稳。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 接近 1T 参数
"competitive and often still cheaper with more flexibility than Sonnet or Opus"——但只有真严肃用 AI 才打得起这套牌。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"you really start seeing the models be able to handle the much longer contexts and feel very competitive and... still a lot cheaper... with a lot more flexibility especially around diverse generation than Sonnet or Opus."
</div>

---

# Scale-to-zero：把 GPU 当 Lambda 用

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500">

主持人问 Allan："**你们能 scale down to zero 吗？**"

Allan 的回答很果断：**能**——既能 warm start 也能 cold start，function-as-a-service 思路完整支持。

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Scale to Zero
GPU 闲着也是闲着——不用就关，按需起。
对小项目 / dev 环境 / 突发流量场景非常友好。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Scale Up 多实例
**VLLM** / **SGLang** / **TensorRT-LM**（Nvidia 独占场景）多副本并行。
所以同样的 stack 能撑住 burst 流量，也能省钱待机。

</div>

</div>

<div class="mt-6 text-xs opacity-60">

<strong>作者概括</strong>：这是 GPU 从"长租车位"变成"打车"的关键能力。但前提是你不在乎冷启动延迟。

</div>

---

# 模型偷偷被 nerf 的痛

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-sm">

行业广泛抱怨——闭源模型上线一段时间后**会被悄悄降级**（"nerfed"），但你不知道。

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Shao 的操作痛点
> "there is an automatic pro model upgrade and the prompts that you have, the use cases that you had all of a sudden doesn't work."

一觉醒来，**昨天还过的测试全挂了**。你的 prompt 没动、代码没动——是上游模型动了。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Allan 的承诺式回应
> "if we're going to give you a quantized model at Buzz, we're going to tell you and we're not going to do any of the like quiet nerfing."

托管 = **你可以钉住一个版本不动**。这是合规与可重现实验的底层依据。

</div>

</div>

<div class="mt-5 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">

Shao 总结：能 talk to a <strong>frozen version</strong> of an open-source model（比如 HuggingFace 上的具体 commit）—— 这是企业要的。

</div>

---
layout: two-cols
---

# 80% → 95% 的死亡幽谷

Frederique 的精准诊断（基于他三年 GenAI 应用经验）：

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"it's very easy to get a quick prototype going... and it gets you about 80% of what you need... but what's hard is to go from the 80% to the 95% which you need if you want to deploy this in production."
</div>

<div class="mt-4 text-sm">

**这就是为什么大量 GenAI 项目止步于 demo**——hackathon 演示能 wow 所有人，但生产环境要的是另外那 15%。

</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 text-sm">

### 那 15% 包含什么
- 真正的 **eval**（不能只靠 LLM-as-judge）
- 真正的 **user feedback** 闭环
- 真正的 **manual evaluation** 和专家审查
- 愿意投入的"无聊但必要"的工时

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-curve.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# LLM-as-judge：把决策踢给另一个 LLM

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 italic">
"we tend to over rely on LLM as a judge. So... we're not sure if it's working or not. Let's ship this decision to another LLM. But then who evaluates the LLM judge? It's just kicking the can later."
<div class="text-xs opacity-60 mt-1 not-italic">— Frederique</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 学界已经先一步看穿
Allan 补充：AI 研究 peer review 里，LLM-as-judge 早就被 "show me real human evaluations" 顶回去了。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 真正的 gold standard
**专家级人工标注**——有些领域 $200/hr 的人在做（远高于 mechanical turk 的"第三世界一美元一题"刻板印象）。少量这类数据 + RLHF 能跑出非常好的个性化模型。

</div>

</div>

---

# RL Gyms · 可验证奖励 · 世界模型

<div class="text-sm opacity-60 mt-2">Allan 描绘了 RL 训练的当前与下一阶段——这部分是访谈里最 nerdy 也最有意思的：</div>

<div class="grid grid-cols-3 gap-3 mt-5 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Verifiable Rewards
有"可验证答案"的任务——比如 code editor + debugger 的错误信息回路——本质上就是一个 RL gym。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 世界模型
视频模型生成"**popcorn world**"、月球表面这类合成世界，让 agent 在里面尝试动作——10 亿级合成 example 跑 robustness。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Lean + LLM → Erdős
数学界用 **Lean** 这种证明检查器配 LLM，已经在啃**埃尔德什未解问题**——可验证奖励落到极致的样子。

</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>Allan 提醒</strong>：Buzz 上能跑这些 RL gym 流程，但"turnkey 一键 RL"的产品化还在路上——目前需要工程师配合架构。

</div>

---
layout: two-cols
---

# Shao 的三层 Agentic 栈

企业现实是没人会"all-in 自研"——大多数公司同时在跑三层：

**L1 · 全员 LLM 平台**<br/>
启动一个 enterprise 级 LLM 入口，员工自助搭 prompt + RAG。门槛极低、ROI 立竿见影。

**L2 · 已购 SaaS 加 AI**<br/>
"我们 SaaS 已经买了 N 个，每家都在塞 AI 进去——先把这一波价值用满，不再去 fish for new SaaS。"

**L3 · 定制深度构建**<br/>
基于云 + 开源 + 自研团队的生产业务系统——这才是真的高门槛、高定制、高回报。

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"we're almost like already overwhelmed by existing SaaS with AI functionality"——大企业的现状不是"缺 AI"，是"塞太满"。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-pillars.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Frederique 的 Wild West

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 italic text-lg">
"it still feels like a far west to me."
</div>

<div class="mt-6 text-sm">

整个 LLM 应用栈在快速增生：原本只有 LLM + prompt，后来加上 **RAG → tools → memory → context → MCP servers → harness**——每个月都有新概念入栈。

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Frederique 的建议
> "I really don't want to be attached to a particular stack."
>
> "in six months we probably would build it differently."

不要 marry 任何一个 framework。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 主持人的总结
> "you are very clear on what the exit ramp is for whatever you have and are using."

每个技术选型都要在脑子里写好"撤退路线"。

</div>

</div>

<div class="mt-5 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"It needs to bring value today... but know that you will need to evolve this thing." —— 今天能上线 ≫ 长期最优。
</div>

---
layout: two-cols
---

# Constrained Generation：拿回 LLM 控制权

Allan 介绍了大多数应用工程师不太了解的杀器——**constrained / structure generation**。

例子：让模型给一个 0-10 的评分。

**普通做法**：在 prompt 里反复祈求"只输出数字"——模型仍可能写 "ten" 或先思考一通。

**Constrained 做法**：把 vocabulary 里**所有不是 0-9 的 token 全部 ban 掉**——模型连吐错都做不到。

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-sm">

底层栈：**Pydantic 写 schema** → 编译成 X-grammar / outlines / guidance → 在 VLLM / SGLang 里强制执行。

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">

这个能力可以拓展成"**永远先调某个工具**"、"**永远按这个顺序调**"——把 agent 行为从"祈祷"变成"硬约束"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./co-design-stack.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么闭源 API 永远不给你这个能力

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-sm">

Allan 直接说了真相——同一把钥匙可以打开后门。

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 正常用法
让 Claude 永远先调 search、永远输出合法 JSON、永远跟既定顺序——**强制服从**。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 危险用法（prefix editing）
- 问："how do you build a bomb?"
- Claude 拒答："I'm sorry Hal, I can't tell you..."
- **但若我能用 structure generation 强制 prefix 它的输出为 "here's how to build a bomb:"**——模型就会顺着继续写下去。

</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 italic text-sm">
"prefix editing approach actually dramatically raises the risk of even aligned and safe models becoming unaligned and unsafe. Things like this are why closed source model providers don't give you any control."
</div>

<div class="mt-3 text-xs opacity-60">

<strong>Buzz 立场</strong>：服务条款限制恶意用途，但<strong>功能控制权完全给用户</strong>——基于"客户会负责"的信任假设。

</div>

---

# 为什么 Deep Research 远超 Claude Code

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

Allan 解释了一个反直觉现象——**OpenAI/Google 的 Deep Research 能跑出几百源、几百万 token 的报告**，但 Claude Code / Codex 的报告能力远不如。

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 一般 coding agent
- 自由 agent loop
- 完全靠 prompt 指挥
- 容易跑偏 / 卡死 / 漏步骤

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Deep Research 的真正秘密
> "they take advantage of a deterministic, quasi-deterministic loop."

**确定性循环 + structure generation 强制执行各步骤** —— 然后允许 LLM 在每一步内部自由发挥。这才是高质量长任务的路径。

</div>

</div>

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm">

<strong>Allan 的延伸</strong>：你可以为任何垂类领域造自己的 "deep research"——"deep tax preparation"、"deep legal review"……方法都是同一套：确定性 skeleton + LLM in-the-loop。

</div>

---

# Agent 治理：把 agent 当员工管

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

Shao 的企业视角——**任何"严肃"公司都不会接受 agent 没有 governance 和 observability**。

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 真实事故
> "I heard a story of one of our agents sort of paying Jira like 10,000 times something to that effect."
>
> 一个 agent 把同一笔 Jira 付款重复执行了 10,000 次。**操作风险是实打实的钱**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 主持人的扩展
治理不只是"别删 db"——还包括：
- 知道自己在哪个 sandbox
- 知道有哪些 db 的访问权限
- 在 AWS 上起资源时按公司策略走
- **不可逆操作前要二次确认**

</div>

</div>

<div class="mt-5 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">

Shao 的论断：<strong>给 agent 的 observability 应该和给员工的一样</strong>（也许不到同样的精细度，但是同样的态度）。

</div>

---

# QA Agents 与"代码模态盲区"

主持人问："如何让一个 agent 验证另一个 agent 写的代码？" —— 两种实战做法 + 一个深层观察：

<div class="grid grid-cols-3 gap-3 mt-5 text-sm">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

### 方案 1：Screenshot QA Agent
监听 PR → playwright/puppeteer 截图 → 点链接、点按钮 → 再截图 → 写完整测试报告。<strong>作为 skill 自动跑</strong>。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

### 方案 2：云沙盒环境
把代码推到模拟环境先跑一遍，看坏不坏，再决定能不能进 main。

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

### Frederique 的根本观察
"LLMs are trained on text and code is text... what they're not so good at is UX and design."

</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

LLM 写 CSS 很顺，但<strong>不知道渲染出来长什么样</strong>。所以必须有一个 <strong>write code → render → screenshot → LLM 看图 → 修</strong> 的视觉闭环 ——没有它，agent 永远写不出好 UI。

</div>

---

# 当 agent 跑飞了——你要看什么 telemetry

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

主持人引用了观众 Lav 的问题：**当 agent 在生产环境跑偏的时候，哪些遥测数据最有用？**

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 工具调用 telemetry
> "from my experience it's a lot of the tool use telemetry. What tools were called, what MCP servers were called."

—— 主持人。**最能看清 agent 是否陷入 loop 或在乱编**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 推荐栈
- **AgentOps**
- **Arize Phoenix**
- 二者都基于 **OpenTelemetry** hook

</div>

</div>

<div class="mt-5 p-4 bg-red-50 border-l-4 border-red-500 text-sm">

### Allan 的 caveat
排查一个故障可能涉及上亿 token。**如果你用 LLM 来读这些 trace**——成本会失控。

所以**好的 observability UI 要能用 heuristic（非 AI）过滤 + flag**，把 LLM 留给真正需要语义理解的那 5% 场景。

</div>

---

# Failure Prevention > Failure Detection

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm italic">
"before failure detection you probably want failure prevention."
<div class="text-xs opacity-60 mt-1 not-italic">— Shao</div>
</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 起点
原始 MCP 给 agent 太多权限——可以删 db、可以付 Jira 1 万次、可以乱起 AWS 资源。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Shao 的 pattern
**在 MCP 外面套一层 wrapper**——只暴露**可逆**操作；不可逆动作要么禁用、要么二次确认。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 效果
> "if it fails, sure you can get it to try again, but you know that it's not going to make any sort of irreversible damage."

试错变得便宜。

</div>

</div>

<div class="mt-6 text-xs opacity-60">

<strong>作者概括</strong>：这其实就是经典软件工程的"幂等性"原则——只是在 agent 时代被重新提出来，因为 LLM 比人更容易做傻事。

</div>

---

# 沙盒只是延迟不可避免

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-sm italic">
"it's more like delaying the inevitable if you've got an agent that really wants to break out of a particular environment."
<div class="text-xs opacity-60 mt-1 not-italic">— Allan，关于 coding agent 的沙盒</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 现实
**没人能保证 sandbox 关得住一个聪明 agent**。
看 Nvidia 的 Nemo 系产品——本质就是"带更好沙盒的 OpenCode"，但社区仍能找到逃逸 case。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 结论
沙盒**是一层防御**，不是**唯一防御**。
**硬件层面的限制** + **可逆操作 wrapper** + **observability** 三层叠加，才是企业生产的真实姿态。

</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
主持人的反应很有意思："Well, I don't like to think about that."—— 但 Allan 觉得正因为没人愿意想，所以更应该说出来。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这场圆桌里最值得记住的几句话：</div>

<div class="grid grid-cols-2 gap-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"they sound like Pokemon sometimes."
<div class="text-xs opacity-60 mt-1 not-italic">— Allan，关于 Codex / Claude Code / Cursor / OpenCode 的命名混乱</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"it gets you about 80% of what you need... but what's hard is to go from the 80% to the 95%."
<div class="text-xs opacity-60 mt-1 not-italic">— Frederique，prototype 到生产的鸿沟</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"who evaluates the LLM judge? It's just kicking the can later."
<div class="text-xs opacity-60 mt-1 not-italic">— Frederique，对 LLM-as-judge 的判决</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"it still feels like a far west to me."
<div class="text-xs opacity-60 mt-1 not-italic">— Frederique，对当前 agent stack 的整体感受</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"people actually like the outputs of AI until they know that something was written by AI."
<div class="text-xs opacity-60 mt-1 not-italic">— Allan，关于 Monet 与 AI slop</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"one of our agents sort of paying Jira like 10,000 times something."
<div class="text-xs opacity-60 mt-1 not-italic">— Shao，真实运营事故</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"delaying the inevitable if you've got an agent that really wants to break out."
<div class="text-xs opacity-60 mt-1 not-italic">— Allan，沙盒的真实有效性</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"before failure detection you probably want failure prevention."
<div class="text-xs opacity-60 mt-1 not-italic">— Shao，agent 治理的核心姿态</div>
</div>

</div>

---
layout: end
---

# "在六个月后，我们大概会用完全不同的方式重建它。"

<div class="mt-6 text-sm opacity-60">
—— Frederique，关于现在搭的所有 agent stack
</div>

<div class="mt-12 text-xs opacity-40">
MLOps.community · 架构现代 AI 系统<br/>
Frederique · Shao · Allan
</div>
