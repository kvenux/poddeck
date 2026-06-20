---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'AI云端狂想曲：亚马逊云科技的算力突围、Agent重构与卓越运营'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI 云端狂想曲

### 亚马逊云科技的算力突围、Agent 重构与卓越运营

<div class="mt-8 text-sm opacity-70">
《硅谷101》· AWS re:Invent 2025 · 拉斯维加斯现场
</div>

<div class="mt-10 text-xs opacity-50">
Matt Garman · Werner Vogels · Trainium3 · Nova 2 · Bedrock AgentCore · Nova Forge · Nova Act<br/>
6 万人到场 · 数百万人在线 · 上百项发布 · 这家云巨头把拉斯维加斯整成了"AI 乌托邦"
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 算力突围战
GPU 最佳栖息地 + 自研 Trainium 三代节奏；OpenAI 380 亿、Anthropic Project Rainier 50 万芯片实战验证。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Nova 2 四款模型
Lite / Pro / Sonic / Omni 全模态铺开。策略不是抢冠军，而是把"性价比 + 生态"绑紧。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 首创"开放训练模型"
Nova Forge —— 企业把私域知识嫁接到前沿模型，绕开"微调浅 / 续训退化 / 从零烧钱"三难。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Agent 全套基建
Bedrock AgentCore + Policy / Evaluation / Episodic Memory + Kiro/Security/DevOps 三虚拟工程师。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 上天入海的客户案例
Blue Origin 2700 个 Agent 跑研发；Conde Nast Met Gala engagement 干翻超级碗。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### Werner 的告别演讲
14 年最后一次 keynote，一段关于"卓越运营"和"不被看见的价值"的真心话。

</div>

</div>

---

# AI 全栈四大支点：今年发布的支柱

<div class="text-sm opacity-70 mb-4">
re:Invent 大会几天下来发布<strong>上百项更新</strong>——但信号非常明显：<strong>加速押注 AI，帮企业完成"务实的落地"</strong>。
</div>

<div class="grid grid-cols-4 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-2 border-green-300 text-center">

### ① 算力
<div class="text-xs opacity-70 my-2">基建层</div>
<strong>Trainium2 → 3 → 4</strong><br/>
GB300 UltraServers<br/>
<span class="opacity-60">OpenAI 380 亿 · Anthropic 50 万芯片</span>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-300 text-center">

### ② 模型
<div class="text-xs opacity-70 my-2">能力层</div>
<strong>Nova 2 四款</strong><br/>
Lite / Pro / Sonic / Omni<br/>
<span class="opacity-60">+ MiniMax / Kimi / Gemma / Nemotron</span>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-300 text-center">

### ③ Nova Forge
<div class="text-xs opacity-70 my-2">企业层</div>
<strong>开放训练模型</strong><br/>
首创概念<br/>
<span class="opacity-60">私域 + 前沿 = 专属 Novellas</span>

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-300 text-center">

### ④ Agent
<div class="text-xs opacity-70 my-2">应用层</div>
<strong>Bedrock AgentCore</strong><br/>
Kiro / Security / DevOps<br/>
<span class="opacity-60">三位虚拟工程师 + 全套基建</span>

</div>

</div>

<div class="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"拥有这些可以随取随用、像<strong>乐高积木</strong>一样拼搭的组件，去构建你想要的解决方案——实在是太棒了。"
</div>

<div class="mt-2 text-xs opacity-60">
—— re:Invent 2025 keynote，关于 AWS 全栈基建
</div>

---

# 算力·重点一：做"英伟达 GPU 的最佳栖息地"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 不只部署，而是"深度优化"
- 基于英伟达 <strong>GB300-NVL72</strong> 的 <strong>P6e-GB300</strong> 实例
- 超节点服务器在 UltraServers 计算集群里互联，低延迟通信
- "硬件与软件的每个层面"都做深度优化

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 实打实的合约
- 2025 年 11 月初，<strong>AWS 与 OpenAI</strong> 宣布多年战略合作
- 总额 <strong>380 亿美元</strong>
- OpenAI 选用搭载英伟达 GPU 的 <strong>Amazon EC2 UltraServers</strong>

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 text-sm">
"事实证明 这条道路没有捷径"
</div>

<div class="mt-2 text-xs opacity-60">
—— re:Invent 2025 keynote，描述把自家平台打磨成 GPU 最优托管点这件事
</div>

---
layout: two-cols
---

# 算力·重点二：自研 Trainium 三代节奏

CEO Matt Garman 在 keynote 里抛了一个数字：

Bedrock 平台上<strong>绝大部分用户都在用 Trainium 做推理</strong>——包括 Anthropic 的 Claude。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
和谷歌 TPU 同属 <strong>ASIC 专项芯片</strong>路线
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
对特定 workload 来说 —— 更高效、更低能耗、更低成本
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
适配需要"几个月时间差"，但一次到位
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
80 亿美元投 Anthropic 的回报 —— Project Rainier 把训练也带起来了
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./trainium-leap.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Project Rainier：Trainium2 已经跑起来了

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 数据中心
<div class="text-4xl font-bold text-blue-600 my-2">30 个</div>
<div class="text-xs opacity-70">大集群分布部署</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 总功耗
<div class="text-4xl font-bold text-orange-600 my-2">1.1 GW</div>
<div class="text-xs opacity-70">吉瓦级电力</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Trainium2 芯片
<div class="text-4xl font-bold text-green-600 my-2">50 万块</div>
<div class="text-xs opacity-70">服务 Anthropic Claude</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
2024 年的 re:Invent 上 AWS 与 Anthropic 高调宣布的 <strong>Project Rainier</strong>，如今真的跑起来了。<br/>
这是 <strong>80 亿美元</strong>投资 Anthropic 之后的"卡位回报"——不只是推理，<strong>大模型训练也跑在 Trainium 上</strong>。
</div>

<div class="mt-4 text-xs opacity-60">
意义：让 Trainium 不再只是"便宜的推理芯片"，而是经过 Claude 量级训练淬炼过的、真能扛大模型的 ASIC。
</div>

---

# Trainium3：本届最硬的算力升级

<div class="grid grid-cols-2 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 工艺
<div class="text-3xl font-bold text-blue-600 my-2">3nm</div>
<div class="text-xs opacity-70">第三代 AI 加速器</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 算力
<div class="text-3xl font-bold text-green-600 my-2">×4.4</div>
<div class="text-xs opacity-70">vs Trainium2</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 内存带宽
<div class="text-3xl font-bold text-purple-600 my-2">×3.9</div>
<div class="text-xs opacity-70">vs Trainium2</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 每兆瓦 token 数
<div class="text-3xl font-bold text-orange-600 my-2">×5</div>
<div class="text-xs opacity-70">能效相较上代提升 40%</div>

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 text-sm">
"在过去一年中 Trainium2 已经带来了惊人的成果 但 Trainium3 系统又实现了巨大的飞跃"
</div>

<div class="mt-2 text-xs opacity-60">
—— Matt Garman keynote，剧透时还顺手把一台 UltraServers 机柜搬到了台上
</div>

---

# 顺手剧透：Trainium4 已经在路上

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### FP4 性能
<div class="text-4xl font-bold text-red-600 my-2">×6</div>
<div class="text-xs opacity-70">vs 当前代</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 内存带宽
<div class="text-4xl font-bold text-blue-600 my-2">×4</div>
<div class="text-xs opacity-70">支撑更大上下文</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### HBM 容量
<div class="text-4xl font-bold text-purple-600 my-2">×2</div>
<div class="text-xs opacity-70">性能↑同时能耗↓</div>

</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500">

### 这个剧透为什么重要？

前段时间谷歌的 ASIC 加速器 <strong>TPU 受到非常多讨论</strong>。AWS 此刻立刻把 Trainium4 路标摆上桌面——

<strong>巨头在纷纷地加码 ASIC 芯片</strong>。

</div>

---

# ASIC vs GPU：不是对立，是互补

<div class="mt-4 p-5 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-40 text-base">

"我觉得就很难把它 frame 成一个 ASIC versus GPU。<br/>
有很多的 workload 是在 GPU 上非常好—— 好，我们 offer 你最好的 GPU。<br/>
同时如果你想要某些特定的 workload 在我们的 ASIC 上面去跑，是非常有效，非常物美价廉，非常欢迎你来我们的 ASIC。"

</div>

<div class="mt-3 text-xs opacity-60">
—— 节目里采访的投资人，谈各家云厂商既在做 ASIC、又在 compete 谁是 "host Nvidia GPU 最好"
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### ASIC 作为 GPU 的<strong>补充</strong>
- 在特定 workload 上更有效
- 帮云厂商更好地管理 <strong>margin 和 cost structure</strong>
- 不是要"颠覆"，是要"承接"

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 也是<strong>差异化竞争</strong>武器
- vs 其他大云厂商（自家 ASIC 路线）
- vs Neocloud（CoreWeave、Nebius 这些）
- 定制能力 = 不可替代性

</div>

</div>

---
layout: two-cols
---

# 模型·Nova 2 家族同时升级

今年的关键词：<strong>扩展</strong>。

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">
如今使用 Amazon Nova 的客户<strong>数以万计</strong>——电通、Infosys、Blue Origin、Robinhood、NinjaTech AI。
</div>

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>Lite</strong> · 快速经济，多模态进、文本出
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Pro</strong> · 最智能，能做 Agentic Coding，可当"教师模型"做蒸馏
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Sonic</strong> · 端到端语音，<strong>100 万 tokens</strong> 上下文窗口
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Omni</strong> · 全模态，进出都能跨文本/图像，<strong>75 万词</strong>文本
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./nova-family.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 模型策略：不打"性能冠军"，打"性价比 + 全家桶"

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50">

### 一个有意思的观察
亚马逊云科技的自研模型策略，<strong>并不是与头部最强的模型去争性能</strong>——

而是在能够与一线模型能力<strong>持平的前提下</strong>，去打"<strong>性价比</strong>"这张牌。

利用整个云生态的配套加持，让客户有更多选择。

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50">

### 已经在用 Nova 2 的企业
- 思科：Agent 威胁检测
- 西门子：视频理解
- Adobe / Booking.com / Reddit / 索尼 ……

构建从威胁检测到视频理解、语音 AI 助手的<strong>多种创新应用</strong>。

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>Bedrock 还新接了 4 个外部模型</strong>：中国的 <strong>MiniMax</strong> 和 <strong>Kimi</strong>、Google 的 <strong>Gemma</strong>、英伟达的 <strong>Nemotron</strong>。<br/>
平台属性 > 模型属性 —— 是 AWS 的一贯打法。
</div>

---

# Nova Forge：首创"开放训练模型"

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-sm">
<strong>企业拥抱 AI 时的痛点</strong>：怎么把自己的<strong>私域 + 专有知识</strong>注入前沿模型？过去两年只有三种不尽人意的选择——
</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-400">

### ① 闭源模型 fine-tune
能做，但只能<strong>浅层注入</strong>专业知识。

</div>

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-400">

### ② 续训开源权重
缺少原始训练数据，可能在<strong>指令跟随等基础能力上"退化"</strong>。

</div>

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-400">

### ③ 从零构建模型
投入<strong>巨大的成本与时间</strong>。

</div>

</div>

<div class="mt-5 p-5 bg-purple-50 border-l-4 border-purple-500">

### AWS 给出的第四种：Nova Forge

把企业的<strong>专有数据</strong>与 Nova 的<strong>模型能力</strong>结合，打造企业专属的 <strong>Novellas（定制模型）</strong>。

Booking.com、Reddit、索尼已经在用。

</div>

---

# Nova Act：浏览器自动化的 90% 可靠性

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 text-base">
专为<strong>在浏览器中构建和部署高可靠性 Agent</strong> 而设计——由定制版的 Nova 2 Lite 提供算力支撑，可大规模管理浏览器自动化 Agent 集群。
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 早期客户工作流可靠性
<div class="text-5xl font-bold text-green-600 my-2">90%</div>
<div class="text-xs opacity-70">不是 demo 数字</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Hertz 软件交付速度
<div class="text-5xl font-bold text-orange-600 my-2">×5</div>
<div class="text-xs opacity-70">端到端测试自动化</div>

</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-xs">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Sola Systems</strong>：每月帮客户跑数十万次自动化工作流（支付对账、货运协调、医疗记录更新）
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>1Password</strong>：一句话提示，自动在<strong>数百个不同网站</strong>完成登录
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>Amazon Leo</strong>：卫星互联网发布前的质量测试瓶颈，被自然语言测试用例打通
</div>

</div>

---
layout: two-cols
---

# Agent·Bedrock AgentCore 三大新功能

<div class="mt-2 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">
企业大规模部署 Agent 难在哪？<strong>快速规模化、记住过去交互、识别所有工具、掌握工具使用、观察和调试</strong>——一套流程相当复杂。
</div>

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Policy</strong>：用自然语言写规则——定义 Agent 可访问的工具/数据/操作边界。"<strong>解决了最棘手的权限问题</strong>"
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>Evaluation</strong>：内置工具监控 Agent 实际运行质量——准确性 / 帮助性 / 自定义维度
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Episodic Memory</strong>：自动保存交互过程中的关键事件与状态——<strong>从过往经验中学习</strong>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agentcore.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 三款新 Agent：把工程师团队"虚拟化"

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### Kiro autonomous agent
- 像一个优秀程序员，在指导下独立完成开发
- 与开发流程<strong>并行运作</strong>，保持上下文理解
- 自动化功能交付、缺陷分类、代码覆盖率提升
- <strong>"从根本上改变软件的开发方式"</strong>

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### Amazon Security Agent
- 虚拟安全工程师
- 在<strong>应用设计 / 代码审查 / 渗透测试</strong>等环节充当安全顾问
- 把"安全左移"做成 Agent 标配

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### Amazon DevOps Agent
- 虚拟运营专家
- 协助团队<strong>解决并预防运行故障</strong>
- 持续提升系统可靠性与性能

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 text-base">

"我坚信 AI Agents 将成为这个时代最具变革性的突破之一，而亚马逊云科技正是构建和运行这些 Agents 的最佳平台"

</div>

<div class="mt-2 text-xs opacity-60">
—— Matt Garman，AWS CEO，re:Invent 2025 keynote
</div>

---

# 客户案例·Adobe：290 亿份创意资产

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### Adobe Firefly
- 一站式平台，含 Adobe 生成式 AI 模型
- 支持<strong>文本→图像、文本→视频、生成填充</strong>
- 模型由英伟达 GPU 驱动的 <strong>Amazon EC2 P5 / P6</strong> 实例训练
- 同时把 AI 助手集成进 Adobe Express

</div>

<div class="flex flex-col items-center justify-center p-6 rounded bg-orange-50 border-2 border-orange-200 text-center">

### Firefly 已生成
<div class="text-6xl font-bold text-orange-600 my-3">290 亿份</div>
<div class="text-sm opacity-70">创意资产</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

CEO Shantanu Narayen 在台上说：为了<strong>加速 AI 转型</strong>，Adobe 正利用亚马逊云科技的基础设施在公司核心产品中部署 AI。

</div>

<div class="mt-2 text-xs opacity-60">
作为被生成式 AI 最直接影响的设计师群体的母厂——Adobe 的姿态本身就是行业信号。
</div>

---

# 客户案例·Conde Nast（Vogue 母公司）

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 text-base">
百年出版业巨头联手 AWS 做<strong>现代数字媒体的转型</strong>——基于 AWS 构建统一内容系统与数据湖仓，通过 AI 翻译实现内容跨区域联合发布。
</div>

<div class="grid grid-cols-4 gap-3 mt-6 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 数字收入占比
<div class="text-3xl font-bold text-blue-600 my-2">70%</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 《纽约客》付费订阅
<div class="text-3xl font-bold text-green-600 my-2">>100万</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### Met Gala vs 格莱美
<div class="text-3xl font-bold text-orange-600 my-2">+54%</div>
<div class="text-xs opacity-70">engagement</div>

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### Met Gala vs 超级碗
<div class="text-3xl font-bold text-red-600 my-2">+522%</div>
<div class="text-xs opacity-70">engagement</div>

</div>

</div>

<div class="mt-6 p-5 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 text-base">
"纸质媒体定义了我们；数字媒体扩张了我们；而<strong>数据将变革我们</strong>。"
</div>

<div class="mt-2 text-xs opacity-60">
—— 康泰纳仕首席产品官兼首席技术官 Sanjay Bhakta，最后一页 PPT
</div>

---
layout: two-cols
---

# 客户案例·"上天"：Blue Origin

贝索斯旗下的商业太空公司在 re:Invent 上"<strong>把客场当主场</strong>"。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
首艘可<strong>自主垂直发射和着陆</strong>的航天器
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>New Glenn</strong> 号轨道火箭成功发射并着陆 → 下一步目标重返月球
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
"<strong>月球吸尘器</strong>"——一台由 AI 设计、能把月尘转化为能源的设备
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
内部平台 <strong>BlueGPT</strong> 调用多个 Agent 支持研发
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
总体交付速度提升 <strong>75%</strong>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./blue-origin.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Blue Origin · Agent 已经进了业务流

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 已部署 Agent
<div class="text-4xl font-bold text-blue-600 my-2">2700 个</div>
<div class="text-xs opacity-70">进入业务流程</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 员工触达率
<div class="text-4xl font-bold text-orange-600 my-2">70%</div>
<div class="text-xs opacity-70">在过去一个月内</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 互动次数
<div class="text-4xl font-bold text-green-600 my-2">>350 万</div>
<div class="text-xs opacity-70">单月统计</div>

</div>

</div>

<div class="mt-6 p-5 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 text-base">

"借助 Agentic AI，我们相信<strong>未来已来，只是尚未惠及每一个人</strong>。
当数百万人在太空中生活与工作时，我们可以利用 AI 自主设计整枚火箭——
<strong>我相信我们可以一个人发射一百枚火箭，而不是用一百人发射一枚</strong>。"

</div>

<div class="mt-2 text-xs opacity-60">
—— Blue Origin keynote，关于把 Agent 引入航空系统设计的展望
</div>

---

# 客户案例·"入海"：Ocean Cleanup

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500">

### CTO Werner Vogels 最后一场 keynote 里讲到的故事

<strong>海洋清理组织（Ocean Cleanup）</strong>通过 AI 技术上的合作来——

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 优化
<strong>塑料检测模型</strong>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 预测
<strong>垃圾移动轨迹</strong>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 最大化
<strong>清理效率</strong>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

确保在<strong>全球最关键的区域</strong>展开工作——这是"AI for Good"的非典型样本：不是写文案，不是聊天，是在真实世界里追垃圾。

</div>

---

# 现场体验·F1：数据驱动型运动

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### 单辆赛车的数据脚印

<div class="text-3xl font-bold text-red-600 my-3">300 个传感器</div>
<div class="text-3xl font-bold text-red-600 my-3">110 万 数据点/秒</div>

F1 堪称<strong>"一项真正的由数据驱动型运动"</strong>。

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### AWS 在赛事中的角色

- 维修站窗口只有几秒——<strong>实时数据传输必须到位</strong>
- 即时数据分析必须准确
- 车队要在激烈竞争中获得高效精确的响应

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

苹果今年的《F1：狂飙飞车》电影把这套机制带到了大众面前——再快的速度，<strong>云服务都要跟得上</strong>。

</div>

<div class="mt-3 text-xs opacity-60">
作者注：主持人现场还体验了一把 F1 换轮胎，自评"成绩有点惨不忍睹"。
</div>

---

# 现场体验·NBA："库有引力"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50">

### 一个 AI 出现之前难以量化的指标

<strong>引力（Gravity）</strong> —— 进攻球员对对手防守注意力的吸引力。

球员威胁越大，迫使防守者越多地<strong>关注、靠近、协防他</strong>。

→ 改变整个防守的<strong>站位和决策</strong>。

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### AWS 的机器学习帮 NBA

- 追踪和共享统计数据
- 量化以前无法直接量化的<strong>球员表现</strong>
- <strong>投篮难度、防守综合评分、引力</strong>都纳入

</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 text-base text-center">

NBA 圈最具引力的球星 —— <strong>Stephen Curry</strong><br/>
有着"<strong>库有引力</strong>"这样的说法。

</div>

<div class="mt-2 text-xs opacity-60">
作者注：作为伪球迷的主持人第一次听到"Gravity"这个战术概念，感叹观众的看球方式都被改了——从只盯带球球员到关注无球威胁。
</div>

---

# 投资人视角：AWS 这一仗在打什么

<div class="mt-4 p-5 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-40 text-sm">

"Google 很明确要主推自己家的 Gemini；Microsoft 相对来说推 OpenAI 的模型；<br/>
Amazon 是这几家里面相对来说<strong>最均衡的一个</strong>——它虽然也有自己的 Nova 系列模型，但<strong>并没有把自家模型当作主推的点</strong>。<br/>
它的 focus 更多是在 <strong>Bedrock 这一个层面</strong>——作为一个 multi-model 的平台。"

</div>

<div class="mt-6 p-5 bg-orange-50 border-l-4 border-orange-500 text-base">

### "其实给我的感觉，是有点像电商这一块的思路"

把大量的 <strong>supply（模型供给）</strong>和大量的 <strong>demand（企业需求）</strong>汇集到这里，让 AWS 在中间扮演<strong>平台的角色</strong>。

Security、data storage、整套配套搭得很完整 —— 你来用就好。

</div>

<div class="mt-3 text-xs opacity-60">
—— 节目里采访的投资人，类比 Bedrock = "AI 模型的天猫"
</div>

---
layout: two-cols
---

# AI 三年：从新鲜感、到失落感、到落地

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

主持人和同事一路上的总结——

ChatGPT 上线三周年，AI 行业正在从"惊艳期"和"祛魅期"穿过去，到达<strong>真正解决问题的第三阶段</strong>。

</div>

<div class="mt-4 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 text-sm">

"现在是第三年——大家开始真的<strong>全力以赴地去思考</strong>，怎么样才能够'落地'。<br/>
在各个生态、各个方向、各个技术栈上去创新研发出<strong>解决问题的产品和服务</strong>。"

</div>

<div class="mt-3 text-xs opacity-60">
所以本届 re:Invent 的所有发布——AgentCore、Nova Forge、Nova Act、Trainium——都在解一个问题：<strong>怎么从原型走到生产</strong>。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-stages.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Werner 的告别：14 年最后一次 keynote

<div class="mt-3 p-4 bg-orange-50 border-l-4 border-orange-500 text-sm">
亚马逊 CTO Werner Vogels —— <strong>今年是他第十四年在 re:Invent 上做 keynote 演讲，也是他最后一次</strong>。这段话献给现场的开发者和"builder"们。
</div>

<div class="mt-4 p-5 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-40 text-base">

"我们建造的大部分东西，<strong>最终都不会有人看到</strong>。<br/>
我们之所以能够把这些做得这么好，唯一的原因就是——<br/>
我们对<strong>卓越运营</strong>的专业自豪感。<br/><br/>

亚马逊客户点击下按钮，包裹就会送达。可谁会想到那些幕后的人，还有背后的供应链？<br/>
所有这些工作没有人看见。<br/>
客户永远不会告诉你，你们的数据工程师做得多出色——<strong>只有你明白其中的付出</strong>。"

</div>

<div class="mt-3 text-xs opacity-60">
—— Werner Vogels，AWS CTO，re:Invent 2025 final keynote
</div>

---

# 主持人的回响：不被看见的价值

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50">

### 主持人在结尾这样回应 Werner：

来到 re:Invent 的——

很多都是 <strong>2B 企业服务端的工程师、开发者，以及所谓的 "builder" 们</strong>。

他们做着非常基层、非常 <strong>infrastructure</strong>、非常基建的工作。

不像 2C 端那么 fancy、那么惊艳、反馈那么直接。

</div>

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50">

### 但是——

这些"<strong>不被看见的价值</strong>"，<br/>
才是科技发展道路上，<br/>
能够帮助我们去解决问题的<strong>关键所在</strong>。

</div>

</div>

<div class="mt-6 p-5 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-40 text-base">

"如果问题不是'<strong>这可能吗</strong>'，而是简单的'<strong>为什么不呢</strong>'。"

</div>

<div class="mt-2 text-xs opacity-60">
—— CEO keynote 演讲的开场动画上的字
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期 re:Invent 现场报道里最值得记住的几句：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"我们今天所展示的内容证明了'魔法'并非神话……他们正在<strong>淘金热中卖铲子和麻袋</strong>。"
<div class="text-xs opacity-60 mt-1 not-italic">— re:Invent 2025 keynote 开场</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"拥有这些可以随取随用、<strong>像乐高积木一样拼搭的组件</strong>，去构建你想要的解决方案。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 AWS 全栈基建</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"我坚信 AI Agents 将成为这个时代<strong>最具变革性的突破之一</strong>。"
<div class="text-xs opacity-60 mt-1 not-italic">— Matt Garman，AWS CEO</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"我相信我们可以<strong>一个人发射一百枚火箭</strong>，而不是用一百人发射一枚。"
<div class="text-xs opacity-60 mt-1 not-italic">— Blue Origin keynote 上对 Agentic AI 的展望</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"纸质媒体定义了我们；数字媒体扩张了我们；而<strong>数据将变革我们</strong>。"
<div class="text-xs opacity-60 mt-1 not-italic">— 康泰纳仕 CTO Sanjay Bhakta，演讲最后一页 PPT</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"我们建造的大部分东西最终都不会有人看到——我们之所以能够把这些做得这么好，唯一的原因就是我们对<strong>卓越运营</strong>的专业自豪感。"
<div class="text-xs opacity-60 mt-1 not-italic">— Werner Vogels，14 年最后一次 keynote</div>
</div>

</div>

---
layout: end
---

# 如果问题不是"这可能吗"

## 而是简单的"<strong>为什么不呢</strong>"

<div class="mt-10 text-sm opacity-70">
《硅谷101》· AWS re:Invent 2025 · 拉斯维加斯现场
</div>

<div class="mt-2 text-xs opacity-50">
算力 · 模型 · Nova Forge · Agent —— 这家云巨头在用过去三年"长期主义"地做"卓越运营"
</div>
