---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "OpenAI's head of platform engineering on the next 12-24 months of AI | Sherwin Wu"
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# OpenAI 平台工程负责人谈 AI 的未来 12-24 个月

**Sherwin Wu** — OpenAI API & Developer Platform 工程负责人

<div class="mt-4 text-sm opacity-60">

Lenny's Podcast | 嘉宾：Sherwin Wu

</div>

<div class="abs-br m-6 text-xs opacity-30">
PodDeck · B26CwKm5C1k
</div>

---

# 为什么这期值得听

<div class="text-sm opacity-60 mb-4">Sherwin 管理着几乎所有 AI 创业公司赖以生存的平台——他对行业的观察角度独一无二</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 工程师变"巫师"
95% 的 OpenAI 工程师日常使用 Codex，100% 的 PR 由 AI 审查。工程师正从写代码转变为管理 agent 舰队。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一人十亿美元公司
不是终点，而是起点——背后会催生百倍数量的垂直 SaaS 小公司，开启 B2B SaaS 黄金时代。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 企业 AI 部署的坑
很多公司的 AI 部署实际上是负 ROI。关键在于不能只靠自上而下的命令，需要自下而上的 tiger team。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 模型会吃掉你的脚手架
从 vector store 到 agent framework，每一代"最佳实践"都被更强的模型淘汰。要为模型的未来构建，而非当下。

</div>

</div>

---

# OpenAI 内部的 AI 编程数据

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 日常使用率
<div class="text-4xl font-bold text-blue-600 my-2">95%</div>
<div class="text-xs opacity-70">的工程师每天使用 Codex</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### PR 审查覆盖
<div class="text-4xl font-bold text-green-600 my-2">100%</div>
<div class="text-xs opacity-70">所有 PR 都由 Codex 审查</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### PR 产出差距
<div class="text-4xl font-bold text-orange-600 my-2">+70%</div>
<div class="text-xs opacity-70">重度 Codex 用户比轻度用户多开的 PR</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

Sherwin 特别提到，这个 70% 的差距还在持续扩大。高频用户不断学习更高效的交互方式，形成了复利效应。

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">

"This is the worst the models will ever be."

<div class="text-xs opacity-60 mt-1 not-italic">— Kevin Weil, OpenAI VP of Science</div>

</div>

---
layout: two-cols
---

# 从咒语到巫师学徒

Sherwin 引用了 1980 年出版的经典编程教材 SICP（《计算机程序的构造和解释》），将编程比作巫术——程序员就是巫师，编程语言就是咒语。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">

**1980s**：编程语言 = 咒语，让计算机执行你的意志

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

**2020s**：自然语言取代代码，vibe coding 时代到来

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

**现在**：同时操控 10-20 个 Codex 线程，真正的巫师感

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./wizard-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 巫师学徒的陷阱

<div class="mt-4 p-5 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20 rounded">

"It literally feels like we're wizards now."

</div>

<div class="mt-4 text-sm opacity-70">但 Sherwin 也警告：这就像迪士尼《幻想曲》里的巫师学徒——</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 高杠杆的一面
- 一个资深工程师同时推进 10-20 个并行任务
- 代码审查从 10-15 分钟缩短到 2-3 分钟
- 最无聊的工作（lint、CI、部署）交给 AI

</div>

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 失控的风险
- Mickey Mouse 放任扫帚干活然后睡着了
- Agent 不工作时的焦虑感真实存在
- 需要经验和判断力来管控多个 agent

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

Sherwin 的观察：你不能完全放手不管（go away and ignore the thing），但如果你足够资深、足够熟练，杠杆效应是巨大的。

</div>

---

# 100% AI 编写的代码库实验

<div class="mt-2 text-sm opacity-60">OpenAI 内部有一个团队正在做一个极端实验</div>

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

<div class="font-bold text-lg mb-2">实验规则</div>

这个团队维护一个 **100% 由 Codex 编写的代码库**。普通工程师遇到 agent 搞不定的问题时，会回退到手写代码或 tab complete——但这个团队**没有这个逃生通道**。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 核心发现
当 agent 做不到你想要的，**根本原因通常是 context 不足**——你给的信息不够，或者代码库里的隐性知识没有显式化。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 被迫的最佳实践
- 把脑子里的隐性知识编码进代码库
- 通过代码注释、MD 文件、skills 等补充上下文
- 代码结构本身要对 agent 友好

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

移除"不用 AI"的逃生通道，反而倒逼出了许多我们在全面拥抱 agent 时必须解决的问题。

</div>

---

# 工程师角色的剧变

<div class="mt-2 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded">

"I don't know what job has changed more in the past couple years."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 过去的工程师
- 自己写每一行代码
- 代码审查是手动的苦力活
- 写完代码还要花大量时间在 CI/CD 流程上
- 个人产出受限于打字速度和认知带宽

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 现在的工程师
- IC 工程师变成了 tech lead
- 管理 agent 舰队，同时拉 10-20 个线程
- AI 处理 lint、CI、部署等繁琐流程
- 产出瓶颈从编码能力转移到组织协调

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

Sherwin 认为接下来 12-24 个月是一个特殊窗口期：工程师有机会自己摸索出与 AI 协作的最佳范式，并为整个行业设立标准。

</div>

---
layout: two-cols
---

# 管理哲学：外科医生类比

Sherwin 从《人月神话》中借用了一个类比：软件工程师应该被当作外科医生来对待。

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**核心理念**：管理者的角色是确保"外科医生"拥有所需的一切——提前预判障碍、扫清路障。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**50%+ 时间**花在 top 10% 的人身上——确保他们不被阻塞、感到被支持。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**AI 时代更重要**：当工程师在疯狂产出 PR 时，瓶颈转移到组织和流程层面。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">

<div class="p-6 bg-purple-50 rounded-lg border-2 border-purple-200 text-center">

<div class="text-6xl mb-4">🔪</div>
<div class="font-bold text-lg mb-2">外科医生模型</div>

<div class="text-sm text-left space-y-2 mt-4">

<div class="p-2 bg-white rounded">**外科医生** = Top performer</div>
<div class="p-2 bg-white rounded">**护士/助手** = 管理者（你）</div>
<div class="p-2 bg-white rounded">**手术刀** = AI 工具 + 组织资源</div>
<div class="p-2 bg-white rounded">**预判需求** = 提前准备好下一步所需</div>

</div>

<div class="mt-4 text-xs opacity-60">来自《人月神话》的预言——在 AI 时代更加贴切</div>

</div>

</div>

---

# 管理者的未来：管更多人，更高杠杆

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Codex 赋能顶尖表现者

Sherwin 观察到 Codex 显著放大了顶尖工程师的生产力。团队内部的产出差距正在拉大——那些真正掌握 AI 工具的人遥遥领先。

<div class="mt-2 p-2 bg-white rounded text-sm italic">

AI makes good people better and it makes great people exceptional.

<div class="text-xs opacity-60 not-italic mt-1">— Mark Andreessen 在播客上的表述，Sherwin 引用认同</div>

</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 管理者的团队规模将增长

就像工程师同时管理 20-30 个 Codex 线程一样，管理者借助 AI 工具也能覆盖更大的团队。

<div class="mt-2 space-y-1 text-sm">

- 用 ChatGPT 连接内部知识做深度调研
- 绩效评估可以自动汇总 GitHub / Notion / Docs
- 当前最佳实践是 6-8 人直接汇报——未来可能大幅增加

</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

Lenny 在节目中即兴提出了一个想法：让 AI 帮管理者预判团队中的 blocker——Sherwin 当场表示自己没想过，但觉得这是个好主意。

</div>

---
layout: two-cols
---

# 一人十亿美元公司的连锁效应

大家都在讨论"一个人撑起十亿美金"，但 Sherwin 认为更值得关注的是背后的二阶、三阶效应。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded">

**一阶**：一个人可以做到十亿美元规模

</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded">

**二阶**：创业门槛大幅降低 → 创业潮爆发

</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded">

**三阶**：VC 生态改变——大量 $10-50M 的小公司，不适合风投回报模型，但对创始人来说很棒

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./startup-cascade.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# B2B SaaS 的黄金时代

<div class="mt-2 p-5 text-lg italic border-l-4 border-green-500 bg-green-50 bg-opacity-20 rounded">

"We might actually enter into a golden age of B2B SaaS."

</div>

<div class="mt-4 text-sm opacity-70">Sherwin 描绘的图景：不是一个巨大的一人公司，而是一个由无数专精小公司组成的生态系统。</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 十亿美元
<div class="text-sm mt-2">1 家极致杠杆公司</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 一亿美元
<div class="text-sm mt-2">~100 家垂直 SaaS</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 一千万美元
<div class="text-sm mt-2">~10,000 家微型公司</div>

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

Sherwin 的关键洞察：因为软件开发成本暴跌，企业会把更多功能外包给这些高度定制化的小公司——而不是自己内部开发。这反而缩小了单个公司的规模，但扩大了整个创业生态。

</div>

---
layout: two-cols
---

# 为什么很多 AI 部署是负 ROI

Sherwin 观察到大量企业的 AI 部署可能是亏钱的。核心原因：硅谷活在泡泡里。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 bg-red-50 border-l-4 border-red-400 rounded">

大多数人不是软件工程师，不追踪每个模型发布

</div>

<div class="p-2 bg-red-50 border-l-4 border-red-400 rounded">

很多员工只是在做最基础的事情，完全没有 push 模型能力的边界

</div>

<div class="p-2 bg-red-50 border-l-4 border-red-400 rounded">

高管下令"AI first"，但一线员工不知道该怎么做

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-adoption.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Tiger Team：让 AI 在组织中真正落地

<div class="mt-2 text-sm opacity-60">Sherwin 给企业的核心建议：不是自上而下推 AI，而是找到内部最兴奋的人并赋能他们。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 谁应该在 Tiger Team 里？

往往**不是**软件工程师——而是那些技术邻近型（technical-adjacent）的人：
- 运营主管，不写代码但是 Excel 高手
- 对新技术有热情、愿意探索的人
- 能理解本部门工作流的人

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Tiger Team 做什么？

- 探索 AI 能力的边界
- 把 AI 应用到具体工作流
- 组织 hackathon 和知识分享
- 在组织内部创造兴奋感

<div class="mt-2 p-2 bg-white rounded text-sm italic">

Find the high performers in AI adoption and empower them.

</div>

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

这与 Sherwin 的管理哲学一脉相承：找到顶尖表现者，投入大部分精力去支持他们——这个逻辑在 AI 落地中同样适用。

</div>

---
layout: two-cols
---

# 模型会吃掉你的脚手架

Sherwin 引用了 FinTool 创始人 Nicholas 的一句话，描述了 AI 开发中最残酷的现实。

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-400 rounded italic">

"The models will eat your scaffolding for breakfast."

<div class="text-xs opacity-60 mt-1 not-italic">— Nicholas, FinTool 创始人</div>

</div>

<div class="mt-4 text-sm">

每一代"最佳实践"——vector store、agent framework、file-based skills——都在被更强的模型淘汰。OpenAI 自己也踩过这个坑。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaffolding-eaten.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Bitter Lesson 在应用层的版本

<div class="mt-2 text-sm opacity-60">AI 研究中有个著名的"苦涩教训"：少干预、多给算力。Sherwin 说这个教训在应用层同样成立。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 我们做过的事
- 2022-23：精心设计 vector store pipeline
- 构建复杂的 agent 编排框架
- 假设这些 scaffolding 是永恒的
- OpenAI API 团队自己也走过弯路

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 苦涩的真相
- 模型变强后，大部分逻辑可以直接去掉
- 与其搞复杂的 vector search，不如给模型一组搜索工具让它自己决定
- 当下的 skills/agents.md 可能也会被淘汰

</div>

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

<div class="font-bold mb-2">Sherwin 给开发者的核心建议</div>

<div class="text-sm italic">

Make sure you're building for where the models are going and not where they are today.

</div>

<div class="text-sm mt-2">

构建产品时假设模型能力是当前的 80%——当新模型发布时，你的产品会突然"click"并变得非常好用。

</div>

</div>

---

# 别只听客户的

<div class="mt-4 text-sm opacity-60">这不是说不要和客户交流——而是说在 AI 领域，客户反馈可能把你引向 local maximum。</div>

<div class="mt-4 p-5 bg-orange-50 border-l-4 border-orange-500 rounded">

<div class="font-bold mb-2">为什么客户反馈会误导你？</div>

<div class="text-sm">

客户在任何时间点都处于一个"局部最优"——他们会说"我想要更好的 vector store"、"我想要更好的 agent framework"。如果你只追着这些走，你建的东西也只是局部最优。

</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400 text-sm">

### 盲目跟随客户

追着当前范式走 → 建出 local maxima 的产品 → 新模型出来，整个范式被淘汰

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 平衡客户反馈与趋势

听客户需求 + 判断模型发展方向 → 为 1-2 年后的能力构建 → 产品随模型进步自然变好

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

Sherwin 坦言 OpenAI API 团队自己也犯过这个错——在某些方向上走了弯路。但最终，模型总是会赶上来，吞掉那些多余的 scaffolding。

</div>

---
layout: two-cols
---

# 未来 12-18 个月：任务时长的飞跃

Sherwin 最期待的进展之一：模型能连贯执行多长时间的任务。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded">

**现在**：产品优化的是几分钟级别的任务，Codex 最多约 10 分钟

</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded">

**12-18 个月内**：模型可以连贯执行 multi-hour 任务

</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded">

**更远**：可能达到 6 小时甚至一整天——"dispatch it and have it do things on its own for a while"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./task-horizon.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 被低估的赛道：音频与业务流程自动化

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 音频是下一个大机会

<div class="text-sm mt-2">

大家都在谈 coding，但 Sherwin 认为**音频/语音**在企业场景中被严重低估：

- 大量商业活动是通过语音进行的
- 服务和运营高度依赖通话
- Native multimodal speech-to-speech 模型在快速进步
- 6-12 个月内会有显著突破

</div>

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 业务流程自动化

<div class="text-sm mt-2">

软件工程是开放式知识工作，但世界上大部分工作是**可重复的业务流程**：

- 标准操作程序（SOP）
- 高确定性、有固定步骤
- 与业务数据和决策系统深度集成
- 硅谷不怎么讨论，但机会巨大

</div>

<div class="mt-2 p-2 bg-white rounded text-xs italic">

我们在硅谷活在泡泡里——大部分经济运转靠的是业务流程，不是软件工程。

</div>

</div>

</div>

---
layout: two-cols
---

# OpenAI 的平台生态哲学

Sherwin 强调 OpenAI 从第一天起就把自己定位为生态系统平台公司。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded">

每个发布在产品中的模型都会进入 API——包括 Codex 模型

</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded">

不屏蔽竞争对手——平台保持中立

</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded">

ChatGPT 应用商店——让 8 亿周活用户也成为开发者的用户

</div>

<div class="mt-4 p-3 bg-purple-50 rounded italic">

"A rising tide lifts all boats."

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./api-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 给创业者的话：不要怕 OpenAI

<div class="mt-4 p-5 bg-green-50 border-l-4 border-green-500 rounded">

<div class="font-bold mb-2 text-lg">市场大到你不需要担心</div>

<div class="text-sm">

Sherwin 见过很多创业公司成败。每一个消亡的创业公司，都不是因为 OpenAI 或 Google 来碾压了它们——而是因为它们建的东西没有打动用户。相反，即使在最激烈的竞争赛道上（比如 coding），Cursor 依然做得很好。

</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400 text-sm">

### 失败的原因
产品没有打动客户，不是因为大公司进场

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### VC 都疯了
机会太大，VC 正在同时投资直接竞争的公司——这在以前是不可接受的

</div>

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

OpenAI 的使命是把 AI 的好处传播给全人类——他们认为自己无法独自触达每一个角落，所以需要一个生态系统。API 是这个使命的直接表达。

</div>

---

# ChatGPT：地球 10% 的人口

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

<div class="text-center">
<div class="text-5xl font-bold text-blue-600 my-4">8 亿</div>
<div class="text-lg font-bold">周活跃用户</div>
<div class="text-sm opacity-60 mt-2">还在快速增长</div>
</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### AI 的民主化

<div class="text-sm mt-2">

Sherwin 指出一个深刻的事实：

- 免费版 ChatGPT 已经是 GPT-4o 级别
- $20/月就能用和亿万富翁一样的模型
- 亿万富翁大概率用的还是 Plus 版，不是 Pro
- AI 正在拉平不同阶层的信息获取能力

</div>

<div class="mt-3 p-2 bg-white rounded text-xs">

Sherwin 的表述：10% of the world... come to ChatGPT every week — and it's growing.

</div>

</div>

</div>

---
layout: two-cols
---

# OpenAI API 开发者栈全景

Sherwin 将 API 平台描述为多层抽象，开发者可以选择任意层级切入。

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

**Responses API**（最底层）：给模型文本，模型工作一段时间后返回结果。最灵活，最流行。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**Agents SDK**：在 API 之上封装了 agent 概念——无限循环、子 agent 委派、swarm 编排。

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

**Agent Kit + Widgets**：UI 组件库，快速搭建漂亮的 agent 界面。

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

**Evals API**：量化测试 agent/workflow 的效果。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">

<div class="p-6 bg-gray-50 rounded-lg border-2 border-gray-200">

<div class="font-bold text-center mb-4">选择你的抽象层级</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-purple-50 rounded text-center">
<div class="font-bold">Evals API</div>
<div class="text-xs opacity-60">量化测试</div>
</div>

<div class="p-3 bg-orange-50 rounded text-center">
<div class="font-bold">Agent Kit + Widgets</div>
<div class="text-xs opacity-60">UI 组件</div>
</div>

<div class="p-3 bg-green-50 rounded text-center">
<div class="font-bold">Agents SDK</div>
<div class="text-xs opacity-60">Agent 编排框架</div>
</div>

<div class="p-3 bg-blue-50 rounded text-center">
<div class="font-bold">Responses API</div>
<div class="text-xs opacity-60">最底层原语 — 做任何事</div>
</div>

</div>

</div>

</div>

---

# 别错过这个窗口期

<div class="mt-4 p-5 text-lg italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-20 rounded">

"I think the next two to three years are going to be some of the most fun in tech and in the startup world that we'll have in a very long time."

</div>

<div class="mt-4 text-sm">

Sherwin 说自己 2014 年进入职场，中间有五六年技术行业并不那么令人兴奋。但过去三年是他职业生涯中最疯狂、最有能量的阶段，而接下来两三年会是这个趋势的延续。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 怎么不错过？
- 不需要是软件工程师
- 从一两个工具开始就够了
- 理解 AI 能做什么和不能做什么
- 关注模型能力的趋势线

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 怎么不焦虑？
- 大部分噪音不需要关注
- 不需要追踪每一个新发布
- Sherwin 自称 chronically online，但也承认大部分内容是噪音
- 核心是动手用，不是被动消费信息

</div>

</div>

---

# 闪电轮：Sherwin 的个人推荐

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 推荐书目

<div class="text-sm mt-2 space-y-2">

<div>**科幻**：*There Is No Antimemetics Division* by qntm — 关于一个对抗"让你遗忘它的东西"的政府机构，两天读完</div>

<div>**非虚构**：Dan Wang 的 *Breakneck* — 美国是律师社会，中国是工程师社会</div>

<div>**非虚构**：Patrick McGee 的 Apple 与中国 — Apple 与中国关系的内幕</div>

</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 其他推荐

<div class="text-sm mt-2 space-y-2">

<div>**动漫**：咒术回战第三季（JJK S3）</div>

<div>**产品**：Ubiquiti 家用网络 + 安防摄像头 — 网络设备界的 Apple</div>

<div>**人生信条**：Never feel sorry for yourself — 永远相信自己有 agency 去改变现状</div>

</div>

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**彩蛋**：Sherwin 之前在 Opendoor 负责房屋定价模型。他发现高压电线、楼层布局和大门（curb appeal）对房价的影响远超预期——但楼层布局至今难以量化。

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-2">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"This is the worst the models will ever be."
<div class="text-xs opacity-60 mt-1 not-italic">— Kevin Weil, OpenAI VP of Science，Sherwin 反复引用</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"It literally feels like we're wizards now."
<div class="text-xs opacity-60 mt-1 not-italic">— Sherwin 描述同时操控多个 AI agent 的体验</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"The models will eat your scaffolding for breakfast."
<div class="text-xs opacity-60 mt-1 not-italic">— Nicholas (FinTool 创始人)，Sherwin 引用来说明 AI 开发中的 bitter lesson</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"We might actually enter into a golden age of B2B SaaS."
<div class="text-xs opacity-60 mt-1 not-italic">— Sherwin 对"一人十亿美元公司"二阶效应的判断</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"Make sure you're building for where the models are going and not where they are today."
<div class="text-xs opacity-60 mt-1 not-italic">— Sherwin 给所有 AI 开发者的核心建议</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"A rising tide lifts all boats."
<div class="text-xs opacity-60 mt-1 not-italic">— Sherwin 解释 OpenAI 为什么选择做开放平台</div>
</div>

</div>

---
layout: end
---

# Never feel sorry for yourself.

Sherwin Wu 的人生信条

<div class="mt-4 text-sm opacity-60">

永远相信自己有 agency 去改变现状。

</div>
