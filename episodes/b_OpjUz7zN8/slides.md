---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '硅谷视角深聊：DeepSeek的颠覆、冲击、争议和误解【深度】'
info: |
  硅谷101 团队春节加班，组成五人小分队，采访硅谷数十位嘉宾，从技术、资本、市场、应用、人物五个角度复盘 DeepSeek。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 硅谷视角深聊 DeepSeek

## 颠覆、冲击、争议和误解

<div class="mt-10 text-base opacity-75">
硅谷101 · 陈茜 主持 · 五人小分队 · 十余位嘉宾
</div>

<div class="mt-6 text-sm opacity-60">
"在硅谷的 AI 发展路线在 DeepSeek 之前都开始非常趋同了。<br>
大家都做的一样的事情，用的一样的技术，采取一样的路线。"
</div>

<div class="mt-4 text-xs opacity-50">
2025 年春节后录制 · 涵盖 V3、R1、R1-Zero 三大模型与背后的幻方故事
</div>

---

# 为什么这期值得反复看

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 五维度复盘
不止"国产突破"叙事——技术、资本、算力、应用、人物，硅谷视角一次盘清。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 真正的洞见
推理成本，不是训练成本，才是被改写的游戏规则。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 三大争议
蒸馏 OpenAI？557.6 万美元真的吗？绕过 CUDA 了吗？逐一拆穿误读。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 谁被打疼
OpenAI / Anthropic / Meta / 英伟达——四种压力，四种应对。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 应用变天
端 AI / 陪伴 / Agent 的"雪中送炭"；横向 AI 创业的尴尬。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 幻方背景
量化基金为何孵化出大模型？28 岁平均年龄的纯本土团队。

</div>

</div>

---

# DeepSeek 一个春节，三个发布

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### V3
6700 亿参数大语言基础模型

<div class="mt-2 text-xs opacity-70">2024 年 12 月底发布。声称用 278.8 万 H800 GPU 小时、约 557.6 万美元训练完成。</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### R1-Zero
纯强化学习推理模型

<div class="mt-2 text-xs opacity-70">2025 年 1 月 20 日开源。完全不用人类反馈，验证了模型能"自学"推理。</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### R1
带 SFT 数据的可用版

<div class="mt-2 text-xs opacity-70">同期开源。在 R1-Zero 基础上混入带标签监督数据，可读性强，可对打 o1。</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-red-50 border-l-4 border-red-500">

**1 月 27 日的市场反应**：英伟达单日重挫 17%，蒸发市值 5600 亿美元，创下美国上市公司单日损失纪录。

</div>

<div class="mt-3 text-xs opacity-60">
达沃斯论坛上 Satya Nadella 与 Alexandr Wang 同时表态"必须高度重视中国在人工智能领域的发展"——直接推上风口浪尖。
</div>

---
layout: two-cols
---

# V3 创新一：MoE 混合专家

<div class="text-sm opacity-70 mt-2">不是新概念，DeepSeek 把它做工程化</div>

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**餐厅类比**：一家餐厅里的一群顶级厨师，每个厨师专攻一道菜。服务员根据点单动态分配任务。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**关键工程优化**：解决专家之间的 **load balance（负载均衡）**——以前分散到不同节点上的专家容易"忙闲不均"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**MoE 不是 DeepSeek 原创**：五年前就有，最早用于谷歌广告投放等场景。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./moe-routing.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# V3 创新二：MLA + MTP

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### MLA · 多头潜在注意力

**Multi-Head Latent Attention**

核心思想：减少 **KV cache（Key-Value 缓存）**——解决的是内存限制问题。

<div class="mt-3 text-xs opacity-70">
"其实一个核心的思想是减少它的 KV cache，<br>其实也是在提高这个架构的 efficiency（效率）。"
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### MTP · 多 token 预测

**Multi-Token Prediction**

不是预测下一个 token，而是同时预测接下来的多个 token，在训练过程中提高模型性能。

<div class="mt-3 text-xs opacity-70">
增加了注意力模块，以预测接下来的多个 token，而非单个 token。
</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**作者概括**：DeepSeek V3 的关键词不是"突破性技术"，而是 **efficiency（效率）**。在 600B 级 Megatron 大模型上把基础性能做得"挺不错"。

</div>

---

# 让正确的人完成了正确的合作

<div class="text-sm opacity-70 mt-2">MoE 不新，但 DeepSeek 把它做成了——靠的是软硬件协同</div>

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"要真正优化这一点，并实现这样的成果，你需要软件工程师和硬件工程师密切配合，分析网络日志，监测网络通信量和延迟的影响，并进行精细的协调。"

</div>

<div class="mt-6 p-6 text-xl italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 rounded">

"在更大的公司里，当有这么多人协作时，要做到这种精准配合并不容易。把整个流程像舞蹈一样编排得当，最终实现这样的结果，是一项巨大的挑战。"

</div>

<div class="mt-4 text-sm opacity-70 text-right">
—— 节目采访嘉宾，原话评价 DeepSeek："让正确的人完成了正确的合作。"
</div>

---

# R1-Zero：从 AlphaGo 那里偷来的剧本

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 训练流程

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**输入**：在 V3 基础模型上，给一系列数学、编程、逻辑问题。

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**奖励函数**：① 验证标准答案 · ② 确保输出连贯、格式规范。

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**完全不要 RLHF**——没有任何"人类反馈"。模型自己生成多个答案，奖励函数打分。

</div>

</div>

<div>

### 类比 & 局限

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**类似 AlphaGo**：完全摒弃了人类的棋谱，在不断的自我对弈中优化策略。

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**R1-Zero 的代价**：可读性很低，一个回答里甚至会出现多种语言。

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**才有了 R1**：又拿监督微调（SFT）数据重新训练 V3，得到可读版本。

</div>

</div>

</div>

---

# GRPO：一个"比 PPO 还退化"的算法

<div class="text-sm opacity-70 mt-2">DeepSeek 用来训练 R1 的强化学习算法</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### PPO · OpenAI 早期主推
**近端策略优化** · 通过 Critic 来衡量某个行动对当前策略的优劣，提供稳定的优化效率。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### GRPO · DeepSeek 选择
**群体相对策略优化** · 去掉了 Critic 部分，直接优化策略本身，减少算力成本。

</div>

</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-20 rounded">

"GRPO 其实并没有什么高深，它从某种意义上来说是 PPO 的一个**退化**，并不是进化。它只是用了 GRPO 的方式去解决算力的问题和 Computation Efficiency（计算效率）的问题。"

</div>

<div class="mt-4 text-xs opacity-60">
"DeepSeek 用了一个比 PPO 还退化一点的 GRPO 的算法，去解决大规模 RL 运算的这个问题。"
</div>

---
layout: two-cols
---

# 真正的洞见：成本之争的方向错了

<div class="text-sm opacity-70 mt-2">采访嘉宾 Bill 的关键提醒</div>

<div class="mt-6 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**外界关注**：557.6 万美元训练成本是不是真的？外界还在算训练成本。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Bill 的视角**：训练是一次性大件采购，**推理是订阅消耗**——后者才是改变游戏规则的事。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**DeepSeek 推理稀疏度**：6700 亿参数里只激活 370 亿——**1/20** 的参数，每次推理时长锐减。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**结论**：训练侧的对比"价值不是很大"；推理侧的价格跳水才是开发者真正在意的事。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./train-vs-inference.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 争议一：DeepSeek 蒸馏了 OpenAI 吗

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 指控
Fox 和《金融时报》报道，OpenAI 发现 DeepSeek 训练时使用其数据。

**黑箱蒸馏（Black-box Distillation）**：DeepSeek 大量调用 OpenAI API，生成大量结果，再在这些结果上训练——不需要直接访问模型。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 嘉宾的反驳
"如果现在还有人在做大规模模型训练，却完全没有直接或间接利用闭源模型来生成训练数据，**我才会觉得意外。**"

<div class="mt-2 text-xs opacity-70">蒸馏是 AI 开发人员常用的一种做法。学术界研究人员经常使用，有时整个训练数据集可能都是 GPT 输出的内容。</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**问题在于**：服务条款（Terms of Service）≠ 许可证（License）。前者只能让 OpenAI 取消账户，后者才规定下游产物的使用方式。"竞争对手"的定义在 AI 领域**根本不清晰**。

</div>

---

# OpenAI 的 Catch-22 与"专利药 vs 仿制药"类比

<div class="mt-4 p-5 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

"OpenAI 现在陷入了**两难境地（Catch-22）**。他们想指控 DeepSeek 进行蒸馏，但同时又无法在不损害自身模型保护的情况下拿出直接证据。"

</div>

<div class="mt-4 p-5 text-base italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-20 rounded">

"更具讽刺意味的是，OpenAI 自己过去曾被指控在训练模型时使用了受版权保护的数据（比如《纽约时报》的诉讼），而现在他们却站出来指责 DeepSeek 窃取他们的数据。"

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 硅谷的"专利药" vs "仿制药"类比
专利药有保护期，期满才允许仿制——保护研发投入，又让大众享有便宜药品。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### 但 AI 没有这套规则
什么是不合规、什么是不合法、什么是不合理——边界都很模糊，定义都很含混。

</div>

</div>

---

# 争议二：557.6 万美元这个数字怎么看

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### DeepSeek 给的口径
278.8 万 × H800 GPU 小时 × 约 2 美元 / 小时 = **557.6 万美元**

注：这是"按租赁价反推"，不是 DeepSeek 实际花的钱。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### SemiAnalysis 的拆解
- 硬件支出远高于 **5 亿美元**
- 测试新想法/新架构的试错成本极高
- 光 MLA 这一项就花了几个月人力 + GPU 小时

</div>

</div>

<div class="mt-6 p-5 text-base italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-20 rounded">

"大多数的成本都不在那一次训练上面，而是在前面大量的试错上面。所以这个对比本身是有一定价值的，但是在训练这件事情上面去这样对比，其实价值不是很大。"

</div>

<div class="mt-4 text-xs opacity-60">
关于卡：SemiAnalysis 估算 DeepSeek 拥有约 5 万张英伟达 Hopper GPU——含 1 万张 H800、1 万张 H100、外加 H20 芯片。但 Bill 说："到底用了什么卡，成本到底是多少，其实都不是最重要的重点。"
</div>

---

# 争议三：模型上线，安全漏洞跟着来

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Wiz 的发现
2025 年 1 月底，网络安全公司 Wiz 公开研究结果——DeepSeek **将一个关键数据库暴露在互联网上**。

- 系统日志
- 用户 prompt
- 用户的 API 身份验证
- **总计 100 万+ 条记录**

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Wiz 的结论
"这种访问级别意味着对 DeepSeek 自身及其最终用户的安全构成了严重风险。"

黑客攻击者可以从服务器**直接窃取纯文本密码和本地文件以及专有信息**。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**真正的担忧不在用户流失**：节目嘉宾提示，国际上的安全问题更多是**从监管角度**出现的。"DeepSeek 这样的小团队，或许还没有做好去服务全球量级用户的准备。"

</div>

<div class="mt-3 text-xs opacity-60">
1 月 27 日 DeepSeek 宣布遭受大规模恶意网络攻击，一度限制中国大陆手机号以外的注册方式。
</div>

---

# OpenAI 的紧迫：当垄断溢价被打掉

<div class="mt-4 p-5 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"当他们进行推理时，毛利率超过 75%，也就是说成本差距在 4 到 5 倍之间。OpenAI 之所以能赚取惊人的利润，就是因为他们是唯一拥有这种能力的公司。"

</div>

<div class="mt-4 grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 数据 1
DeepSeek 日活已达到 **ChatGPT 的 23%**（Sensor Tower 1 月底数据）。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 数据 2
DeepSeek 登上 140 个全球市场移动 App 下载榜第一。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 数据 3
媒体下载量上已经**超过 ChatGPT**。

</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**Sam Altman 在 X 上的回应**：<br>
"我们显然会提供更好的模型。"<br>
紧接着两次发布——o3-mini & Deep Research——"颇有 show 肌肉的意味"。

</div>

---

# OpenAI 的反击：降价 + 秀肌肉

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 1/31 · o3-mini

**首次对免费用户开放推理模型**

- 输入：1.10 美元 / 百万 token
- 输出：4.40 美元 / 百万 token
- 比 o1-mini 便宜 **63%**

<div class="mt-2 text-xs opacity-70">但仍然贵不少于 DeepSeek：0.14（输入）/ 0.55（输出）美元 / 百万 token。</div>

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 2/3 · Deep Research

"像人类分析师一样对复杂任务进行逐步分解"。

**与 R1 直接对比**：
- Humanity's Last Exam 准确率
- Deep Research **26.6%**
- DeepSeek R1 **9.4%**

</div>

</div>

<div class="mt-6 p-4 rounded bg-red-50 border-l-4 border-red-500">

**钱的压力同时浮现**：OpenAI 立刻开启新一轮融资，目标筹资 **400 亿美元**，估值推到 **3000 亿美元**——即使有软银承诺的数百亿，缺口依旧巨大。"如果大家觉得他融不到钱，那这轮融资他就是 self procrastination（自我拖延）。"

</div>

---
layout: two-cols
---

# Anthropic：被打得更疼

<div class="text-sm opacity-70 mt-2">"两难"不在指控里，在产品矩阵里</div>

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**API 价格优势被砸**：Anthropic 在 2B / 2D（开发者端）有优势，恰好这是 DeepSeek 直接降价冲击的市场。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**2C 本来就落后**：在消费者端，Claude 比 ChatGPT 弱很多。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**还没有推理模型**：被 OpenAI（o1/o3）和 DeepSeek（R1）前后夹击。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**钱的压力**：本月早些时候刚以 **600 亿美元估值**融了 **30 亿美元**——还需要继续融。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./anthropic-squeeze.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 二级市场已经"投票"

<div class="mt-4 p-6 text-xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"OpenAI 和 Anthropic 的股票基本上已经停止在二级市场上的交易。在 DeepSeek 推出后，**没人再购买 OpenAI 或 Anthropic**。这两家公司在 DeepSeek 之前还是最炙手可热的，每个投资者都想入手它们的股份，而现在交易基本停滞了——**没人买也没人卖**。"

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**Dario Amodei 的反应**：发布长文，言辞对 DeepSeek 相当不客气，甚至要求美国加强对算力的"出口管制"。

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**与 Sam Altman、Yann LeCun 等"欢迎竞争"的表态非常不一样**——也是因此受到评论区不少冷嘲热讽。但毫无疑问，DeepSeek 给 Claude 等模型的更新带来了更大的压力。

</div>

<div class="mt-4 text-sm opacity-70 italic">
"如果闭源还不如开源，我也不知道这公司在干什么——你还不如免费。"
</div>

---

# Meta：四个 War Rooms

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 紧急状态
The Information 报道：DeepSeek R1 发布后，Meta 立刻成立 **四个 "War Rooms" 作战室**——因为 Llama4 即将发布。

如果 Llama4 落后于 DeepSeek，"开源模型引领者"的地位将受到严重威胁。

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 战略动机
Meta 选开源不是为了卖模型，而是参照"安卓模式"：让模型免费 → 等生态起来 → 从广告和应用赚钱。

**前提是 Llama 必须是最领先的开源大模型**。

</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**额外的价格劣势**：Meta 的模型虽然免费，但实际运行起来比 OpenAI 更贵——OpenAI 可以批量处理客户的数百万 queries 摊薄成本，**Llama 使用者没办法这样降价**。DeepSeek 把价格再压一档，Meta 雪上加霜。

</div>

<div class="mt-3 text-xs opacity-60">
扎克伯格在 All-hands 会议上说："所有人都要为紧张的一年做好准备。"
</div>

---

# 开源：DeepSeek 比 Meta 更"彻底"

<div class="mt-3 grid grid-cols-2 gap-4">

<div class="p-3 rounded border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-30 text-sm">

### Meta 开源的问题
- 开源的东西"普遍**落后于业界**"
- 采用了 dense model（稠密模型）
- 训练效率比较低
- 各种限制更像是**大公司病**——部门扯皮后得出的平衡点

</div>

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30 text-sm">

### DeepSeek 不同
- 开源的是**业界领先**的模型
- technical report 详细程度"**远远超过** OpenAI 或 Anthropic 的"
- 虽然代码本身和训练数据集没开源，但业界普遍满意

</div>

</div>

<div class="mt-4 p-3 text-sm italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"业界开源的人对于 DeepSeek 的开源都非常满意的。"

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**警示信号——Mistral**：曾经欧洲最优秀的 AI 公司，最初声称完全开源，但"最好的模型大多已经不再开源"。**开源公司若想维持盈利，走向这种模式几乎是必然的**——DeepSeek 也可能走上这条路。

</div>

---

# 英伟达：两种声音

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 声音 A：故事崩塌
DeepSeek 带来训练 + 推理新范式，以后**不需要砸钱买英伟达最前沿的 GPU**。算力市场叙事崩了。

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 声音 B：反倒利好
算力成本降低 → 更多玩家入局 → 更多应用生态崛起 → **算力总需求反而更大**。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**目前华尔街和硅谷一二级市场的共识**：偏向声音 B。这也是英伟达股价止跌、缓慢回升的原因——截至录制时仍在 2024 年 10 月水平，依然处于近年高点。

</div>

<div class="mt-4 p-5 text-base italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-20 rounded">

"一个降低的算力成本，反而会刺激不管是下一代模型的训练、还是开源模型的训练、还是它的整个应用场景，都会迎来一个大爆发。"

</div>

---
layout: two-cols
---

# CUDA：没有被绕过，只是凿了个口子

<div class="text-sm opacity-70 mt-2">三个观点把"绕过 CUDA"的误读拆穿</div>

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**观点 1**：DeepSeek 没绕过 CUDA。它调用的 PTX 仍然是 **CUDA 生态的一环**——是 CUDA 高级语言代码和 GPU 底层指令之间的连接层。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**观点 2**：能基于 PTX 优化 ≠ 别的团队也能。"编写 PTX 代码的做法非常复杂且难以维护，对技术人员要求极高，也很难移植到不同型号的 GPU。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**观点 3**：这件事**冲击的是英伟达溢价**——把毛利率从近 90% 打下来——但不冲击壁垒。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cuda-wall.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 没人会把整片 data center 迁出 CUDA

<div class="mt-6 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"我不认为 AWS、Azure、Google Cloud 会说：'好，今天我们要把所有东西都迁移出英伟达，不再支持 CUDA 了，PyTorch 开发者们，你们自己去实现新的方式吧。'这个是不太可能发生的。对开发者来说（这样的变化）过于不友好。"

</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-20 rounded">

"CUDA 厉害的地方在于，它是一个**通用的** GPU 调用软件系统——什么软件过来都可以用 CUDA。但是 DeepSeek 这种做法是它**只支持 DeepSeek**。所以你后头有别的模型，你还要再重新适配一次。<br><br>那我们就是在赌：以后是不是 DeepSeek 就真的是这个 **gold standard（黄金标配）**了啊。"

</div>

<div class="mt-4 text-sm opacity-70 text-right">
—— 短期对 AMD 利好，长期"还是英伟达"
</div>

---

# ASIC 抬头：FP8 的连锁反应

<div class="mt-4 text-sm opacity-70">DeepSeek 通过 FP8 计算和存储，给非 CUDA 阵营开了门</div>

<div class="mt-6 grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Google TPU
谷歌 2025 资本支出预计增至 **750 亿美元**（远高于市场此前预期的 580 亿），很大一部分将投在自研 TPU。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Broadcom
博通股价大涨——它是谷歌 TPU 的设计方。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Meta / 华为 / AMD
都加大了对 ASIC / 自研芯片的投入。AMD 已经把 V3 集成到 Instinct MI300X。

</div>

</div>

<div class="mt-6 p-5 text-base italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"老黄是一个非常具有战略前瞻性的人，他一定会在 CUDA 生态系统里面也会去优化它其它的对于推理层面的⋯⋯这个会对英伟达毛利率带来很大的冲击，因为现英伟达毛利率将近 90% 以上，所以它**会迫使英伟达降价**。"

</div>

---

# 应用层：锦上添花 vs 雪中送炭

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 锦上添花
针对**已经商业化的 2B 应用**——律师、医生、码农、金融分析师。

**逻辑**：被替代的是白领工时，再贵的 AI 也贵不过人。这类用户像 F1 赛车手，追求模型极致表现——降价的直接影响是**利润率大幅提高**，量变而非质变。

</div>

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 雪中送炭
针对**之前烧钱补贴才能推广的场景**。

DeepSeek 让这些生意从"做不了"变成"好生意"：
- **陪伴型 AI**：Character.AI 用户单次使用时长 ≈ 2 小时（ChatGPT 的 17 倍）
- **AI Agent**：多步调用 + 自我修正 + 多代理协作，"臭名昭著的算力黑洞"

</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

DeepSeek 也被节目嘉宾称作 **"AI 届拼多多"**——DS V2 发布后引爆价格战，字节等大厂"不惜做赔本买卖，把 API 价格降到业界估计的成本线下"，颇有"舍命陪君子"的意味。

</div>

---
layout: two-cols
---

# 端 AI：捆绑逻辑要变天

<div class="text-sm opacity-70 mt-2">"牙刷柄赔钱、牙刷头赚钱"的反转</div>

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**旧逻辑**：硬件以接近成本甚至赔钱卖，绑定独家软件订阅，**从高利润率软件赚回硬件补贴**。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**端 AI 时代的转折**：模型小到能跑在用户设备上，开发者**推理边际成本几乎为 0**。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**结果**：竞争让订阅服务很难实质性收费——**永远有对手比你更便宜**。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**看好领域**：娱乐类 + 虚拟人助手类——客服 Avatar、朋友之间交流的 Avatar。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./toothbrush-flip.excalidraw"
  class="w-[490px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 投资人新共识：纵 > 横

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 横向 AI 创业的尴尬
追求面面俱到、没有针对性行业或使用场景的"主赛道"公司——风投会重新评估。

<div class="mt-3 p-3 rounded bg-white bg-opacity-50 text-sm italic">
"我会担心他融这么多钱，然后他所做的事实际上别人也可以做，可能以十分之一的价钱⋯⋯也用不着这么优秀的顶级工程师。"
</div>

<div class="mt-2 text-xs opacity-70">→ "高开低走"、"杀鸡用牛刀"的尴尬</div>

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 纵向 AI 的护城河
专注一个细分领域 / 特定场景的纵向 AI，更容易建立差异化优势。

<div class="mt-3 p-3 rounded bg-white bg-opacity-50 text-sm italic">
"任何一个人如果找我们来投资，我说你这个事是不是比以前要好十倍 100 倍。不管你再狭窄的一个事情，都有意思。"
</div>

<div class="mt-2 text-xs opacity-70">→ 细分数据 + 新智能 = 真正的护城河</div>

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**共识**：深耕细分领域的 AI 模型与应用，会超越最厉害的通用大模型。**专才胜于通才，"纵"强于"横"**。AI 行业正在整体回归理性化——少了玩命融资、囤卡、挖人才的狂热。

</div>

---
layout: two-cols
---

# 幻方：八年伏笔孵化大模型

<div class="text-xs opacity-70 mt-1">"看起来像横空出世，其实憋了很久"</div>

<div class="mt-3 space-y-1.5 text-xs">

<div class="p-1.5 px-2 rounded bg-blue-50 border-l-4 border-blue-500">

**2015**：30 岁梁文峰与大学好友徐进创立幻方量化，股灾年逆袭。

</div>

<div class="p-1.5 px-2 rounded bg-blue-50 border-l-4 border-blue-500">

**2016**：推出第一个 AI 模型，首次用 GPU 生成交易仓位。

</div>

<div class="p-1.5 px-2 rounded bg-blue-50 border-l-4 border-blue-500">

**2019**：投资 2 亿元自研**萤火一号**，1100 块 GPU。

</div>

<div class="p-1.5 px-2 rounded bg-blue-50 border-l-4 border-blue-500">

**2021**：**萤火二号**算力 ×18。业绩暴跌但坚持 AI。

</div>

<div class="p-1.5 px-2 rounded bg-blue-50 border-l-4 border-blue-500">

**2022 11 月**：ChatGPT 发布后立刻宣布下场做大模型。

</div>

<div class="p-1.5 px-2 rounded bg-green-50 border-l-4 border-green-500">

**2023 5 月**：大模型团队独立分拆——**DeepSeek 成立**。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./high-flyer-timeline.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 梁文峰：一个"发型糟糕的书呆子"

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 履历
- 1985 年生，2002 年 17 岁考入浙江大学电子信息工程
- 2007 年研究生，专注机器视觉
- 2008 年金融危机时开始用系统化、程序化方式做量化
- 在成都廉价出租屋里"不停地编写 AI 算法来选股"

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 性格
"一位剑走偏锋的技术理想主义者"——2021 年就开始囤积数千英伟达 GPU 时，行业中**没人知道他想干什么**。

金融时报报道，一位合作伙伴用"**一个发型糟糕的书呆子**"来描述第一次见到梁文峰的感受。

</div>

</div>

<div class="mt-6 p-4 rounded bg-red-50 border-l-4 border-red-500">

**2024 年 5 月的融资窗口**：DeepSeek V2 效果已经很好了，但短暂接触几家 VC 后就放弃了对外融资——美元 VC 在追月之暗面和 Minimax，人民币 VC 因 **DPI 焦虑**和风险偏好不投基础大模型。"现在应该会有不少投资人和投资方去主动联系他们了。"

</div>

---

# 文化：时间花在哪里，哪里就容易出效率

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 团队特征
- 平均年龄 **28 岁**
- 核心技术岗多由刚毕业一两年的年轻人担任
- **纯本土班底**——没有海归人才
- 清华、北大、北邮、北航等国内顶尖高校的计算机应届生 / 在读博士生

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 组织特征
- **不采用 KPI / OKR** 考核
- 鼓励内部形成不同主题的技术小组，自由交流
- 即使是刚毕业新人也能主导探索一个全新领域
- "不需要你先去立项、证明价值、再与其他团队抢资源"

</div>

</div>

<div class="mt-6 p-5 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

"我去年的时候去问 DeepSeek 的人：为什么你们的模型做的那么好？对方回答说：**因为我们的老板自己读论文、自己写代码、自己做招聘。时间花在哪里，哪里就容易出效率。**"

</div>

<div class="mt-3 text-xs opacity-60 text-right">
—— 心资本合伙人吴炳见的转述
</div>

---

# Yann LeCun：硅谷某些圈子里的一种疾病

<div class="mt-8 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"在硅谷某些圈子里，存在一种常见的疾病，叫**"错位的优越感"**——认为你的小圈层垄断了所有的好主意，假设其他地方的创新是通过作弊获得的。"

</div>

<div class="mt-6 p-6 text-xl italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 rounded">

"但现实是，当大量有才华的人参与并分享他们的创新时，科学技术才能进步得更快。"

</div>

<div class="mt-8 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**节目总结**：DeepSeek 带来的耳目一新"**重新又盘活了整个硅谷的 AI 大战**"——无论是 Meta、谷歌、OpenAI、Anthropic，"大家的紧迫感又回来了"。开源与闭源、算力、大小模型、应用之战——**可能才刚刚打响**。

</div>

<div class="mt-3 text-xs opacity-60 text-right">
—— Yann LeCun 最近在 LinkedIn 上的发言
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-2">这期里最值得反复琢磨的几句话：</div>

<div class="space-y-1.5">

<div class="p-2 px-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs">
"GRPO 其实并没有什么高深，它从某种意义上来说是 PPO 的一个退化，并不是进化。"
<div class="text-xs opacity-60 mt-0.5 not-italic">—— 技术嘉宾论 DeepSeek 的 RL 算法选择</div>
</div>

<div class="p-2 px-3 bg-green-50 border-l-4 border-green-500 rounded italic text-xs">
"DeepSeek 让正确的人完成了正确的合作。"
<div class="text-xs opacity-60 mt-0.5 not-italic">—— 节目嘉宾评价 MoE 工程化的关键</div>
</div>

<div class="p-2 px-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-xs">
"OpenAI 现在陷入了两难境地（Catch-22）。他们想指控 DeepSeek 进行蒸馏，但同时又无法在不损害自身模型保护的情况下拿出直接证据。"
<div class="text-xs opacity-60 mt-0.5 not-italic">—— 关于"蒸馏指控"的悖论</div>
</div>

<div class="p-2 px-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-xs">
"这个墙没有变低。不是说他跳过去了别人现在也都能跳过去。"
<div class="text-xs opacity-60 mt-0.5 not-italic">—— 嘉宾评 CUDA 护城河被"凿了口子"但没塌</div>
</div>

<div class="p-2 px-3 bg-red-50 border-l-4 border-red-500 rounded italic text-xs">
"如果闭源还不如开源，我也不知道这公司在干什么——你还不如免费。"
<div class="text-xs opacity-60 mt-0.5 not-italic">—— 对闭源模型"持续领先"压力的犀利总结</div>
</div>

<div class="p-2 px-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-xs">
"因为我们的老板自己读论文、自己写代码、自己做招聘。时间花在哪里，哪里就容易出效率。"
<div class="text-xs opacity-60 mt-0.5 not-italic">—— DeepSeek 团队对"为什么模型做得好"的回答</div>
</div>

<div class="p-2 px-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs">
"在硅谷某些圈子里，存在一种常见的疾病，叫"错位的优越感"。"
<div class="text-xs opacity-60 mt-0.5 not-italic">—— Yann LeCun LinkedIn 发言</div>
</div>

</div>

---
layout: end
---

# DeepSeek 之后

<div class="mt-8 text-2xl italic opacity-80">
"DeepSeek 就像一条鲶鱼，<br>搅乱了大模型行业的鱼塘。"
</div>

<div class="mt-12 text-sm opacity-60">
对 AI 创业者来说，下场的黄金时机很可能才刚刚开始。<br>
"AI 这个大浪⋯⋯现在今天就是零。"
</div>
