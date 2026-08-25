---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Simulating Humanity: from Generative Agents to 8 Billion Digital Twins — Joon Sung Park, Simile AI'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<style>
.kicker { color: #64748b; font-size: .82rem; letter-spacing: .08em; text-transform: uppercase; }
.muted { color: #64748b; }
.chip { display: inline-flex; align-items: center; border: 1px solid #cbd5e1; border-radius: 999px; padding: .24rem .68rem; font-size: .75rem; color: #334155; background: #f8fafc; }
.label { font-size: .68rem; letter-spacing: .08em; text-transform: uppercase; color: #64748b; font-weight: 700; }
.tiny { font-size: .74rem; line-height: 1.45; }
.quote { font-family: "Source Serif Pro", Georgia, serif; font-style: italic; }
</style>

<div class="kicker">Latent Space · Joon Sung Park · Simile AI</div>

# Simulating Humanity

<div class="mt-3 text-2xl font-semibold text-slate-700">
从 Generative Agents 到 80 亿数字孪生
</div>

<div class="mt-7 flex justify-center gap-2 flex-wrap">
  <span class="chip">behavior foundation model</span>
  <span class="chip">digital twins</span>
  <span class="chip">causal simulation</span>
  <span class="chip">social physics</span>
  <span class="chip">agent-based modeling</span>
</div>

<div class="mt-10 text-sm muted max-w-2xl mx-auto leading-relaxed">
这不是一场关于更聪明 chatbot 的访谈。Joon 要训练的模型会保留人的偏差、习惯与非理性，
再把这些数字孪生放进共同环境，用它们试演现实世界尚未发生的选择。
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="label">起点</div>
<div class="font-bold text-blue-900 mt-1">Smallville 之后</div>
<div class="tiny mt-2">Generative Agents 从游戏小镇走向可验证的真实人群模型。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="label">核心对象</div>
<div class="font-bold text-green-900 mt-1">行为，而非态度</div>
<div class="tiny mt-2">模型要学的是人在有真实利害时会怎么做，而不只是会上网怎么说。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="label">证据</div>
<div class="font-bold text-orange-900 mt-1">1,000 个数字孪生</div>
<div class="tiny mt-2">同一批人隔两周回来，与自己的 twin 接受相同问卷与实验。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="label">方法</div>
<div class="font-bold text-purple-900 mt-1">预测路径，不只预测结果</div>
<div class="tiny mt-2">决策者真正需要的是能改变未来的干预，而不是坏消息的提前通知。</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="label">尺度</div>
<div class="font-bold text-red-900 mt-1">从个人到 80 亿人</div>
<div class="tiny mt-2">模型、agent、多人互动与环境一起扩展，目标是社会层面的涌现。</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="label">边界</div>
<div class="font-bold text-yellow-900 mt-1">影响、同意与政治</div>
<div class="tiny mt-2">技术已经服务企业决策，但进入政治前仍需要明确的护栏与社会判断。</div>
</div>

</div>

---

# 他先是画家，后来把计算当作媒介

<div class="grid grid-cols-3 gap-5 mt-6">

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200 text-left">
<div class="label">11 岁以前</div>
<div class="text-xl font-bold text-orange-800 mt-2">韩国</div>
<div class="tiny mt-3">11 岁随家人搬到 Boston；父母从医，成长轨迹离 tech 并不近。</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200 text-left">
<div class="label">最初的职业</div>
<div class="text-xl font-bold text-purple-800 mt-2">写实绘画</div>
<div class="tiny mt-3">音乐、艺术、绘画不是爱好，而是他最初认真准备谋生的职业方向。</div>
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200 text-left">
<div class="label">转折</div>
<div class="text-xl font-bold text-blue-800 mt-2">计算</div>
<div class="tiny mt-3">他相信重要的艺术家会创造自己的媒介，而当代最强的媒介是 computation。</div>
</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-left text-sm">
这条路径后来没有消失：他仍把模拟理解为一种表征艺术，只是画布从颜料变成了人类行为数据与生成模型。
</div>

---
layout: two-cols
---

# 时间机器游戏：十年后什么最重要？

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
2020 年进入 Stanford PhD 后，他参与 foundation model 概念的早期工作。团队面对的是一种没有为单一任务训练、却可能泛化到很多任务的新模型。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
Joon、Michael Bernstein 与 Percy Liang 做了一个练习：坐时间机器去十年后，再回看哪一种应用真正改变了世界。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
第二名是高度个性化、能替人行动的 assistant；第一名更激进：直接重建我们生活的世界。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded tiny">
作者概括：这条路线天然要求同时解决模型、个体 agent、多人互动与环境，而不只是做一次 LLM 调用。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./co-design-stack.excalidraw" class="w-[440px]" :darkMode="false" :background="false" />
</div>

---

# Smallville 真正解决的是连续生活

<div class="grid grid-cols-2 gap-5 mt-5 text-left">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">普通生成</div>
<div class="font-bold mt-1">一次输入 → 一次输出</div>
<div class="tiny mt-2">分类或文本生成很有用，但不足以构成一个会持续生活、变化和互相影响的人。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Generative Agents</div>
<div class="font-bold mt-1">记忆 → 反思 → 计划 → 行动</div>
<div class="tiny mt-2">Smallville 把语言模型放进游戏小镇，让多个角色记住经历、形成计划并产生社会互动。</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label">关键假设</div>
<div class="font-bold mt-1">网页里藏着行为先验</div>
<div class="tiny mt-2">模型训练材料来自社交媒体、Wikipedia 等人类产物；从合适角度刺激，会出现此前难以生成的真实行为纹理。</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label">随后暴露的问题</div>
<div class="font-bold mt-1">先验不等于完整的人</div>
<div class="tiny mt-2">网页更擅长记录自我呈现与态度，真实生活里的机制、偏差与行动仍然稀缺。</div>
</div>

</div>

---
layout: two-cols
---

# 好的个人助理，先要有好的人的模型

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
一个 assistant 会替你买晚餐；如果它点了你不喜欢的菠萝披萨，任务执行完整，结果仍然失败。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
家人和密友能帮我们做决定，不只因为掌握指令，而是因为他们持有关于我们的长期 mental model。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
因此 Joon 的下注是：准确表征一个人的技术，应当先于更复杂的自动化 agent。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded tiny">
人物不只是 demographics。童年、创伤、初恋、习惯、风险偏好与当下语境，会共同改变一个看似简单的选择。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./character-space.excalidraw" class="w-[440px]" :darkMode="false" :background="false" />
</div>

---

# 2022 年的记忆设计：先相信文本

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">当时的决定</div>
<div class="text-lg font-bold mt-2">文本文件，而非复杂结构</div>
<div class="tiny mt-3">团队曾考虑 knowledge graph 与 bespoke model，最后选择把经历放进 markdown / text，让语言模型直接理解和推理。</div>
</div>

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">这个选择的上限</div>
<div class="text-lg font-bold mt-2">数据一大，检索就变成问题</div>
<div class="tiny mt-3">存进去很容易；从大量经历中找回正确片段、维持长期一致性，仍需要独立的系统工作。</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-left text-sm">
这解释了为什么今天很多 personal agent 的记忆又回到 markdown：模型原生擅长文本；但文本存储本身并不自动带来深层人物理解。
</div>

---

# 什么时候 prompt，什么时候训练模型？

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">Prompt 足够</div>
<div class="text-lg font-bold mt-2">物理规律已经学会</div>
<div class="tiny mt-3">当模型已有可信的基础统计与环境规律，任务只是根据当前环境选择动作，可以通过上下文驱动。</div>
</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label">必须碰参数</div>
<div class="text-lg font-bold mt-2">缺的是 social physics</div>
<div class="tiny mt-3">若模型没有学会某类人为什么这样行动，继续堆 prompt 只是在调用不存在的知识。</div>
</div>

</div>

<div class="mt-5 grid grid-cols-3 gap-3 text-left tiny">
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded"><strong>先验</strong><br/>网页语料提供广泛社会统计</div>
<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded"><strong>缺口</strong><br/>现实行为与因果机制不充分</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded"><strong>路径</strong><br/>采集行为数据并做 post-training</div>
</div>

---

# 网页训练数据的盲区

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 bg-blue-50 border-2 border-blue-200 rounded">
<div class="label">Attitudinal</div>
<div class="font-bold mt-2">人说自己相信什么</div>
<div class="tiny mt-2">公开表达、问卷回答与自我叙述，容易采集，也最接近现有模型的训练分布。</div>
</div>

<div class="p-4 bg-purple-50 border-2 border-purple-200 rounded">
<div class="label">Self-exposed</div>
<div class="font-bold mt-2">人选择让别人看到什么</div>
<div class="tiny mt-2">职业身份、社交 persona 与平台规范，会把同一个人压缩成不同版本。</div>
</div>

<div class="p-4 bg-orange-50 border-2 border-orange-200 rounded">
<div class="label">Behavioral</div>
<div class="font-bold mt-2">人承担后果时做什么</div>
<div class="tiny mt-2">交易、选择、放弃、延迟与错误，才暴露了行动背后的真实约束。</div>
</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-left text-sm">
Simile 的核心判断：frontier model 在理性推理上越来越强，但完整的人类社会映射仍没有被网页数据覆盖。
</div>

---
layout: two-cols
---

# 三类数据，回答三个不同问题

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>深度访谈</strong>给纹理：人生故事、童年记忆、创伤与第一次恋爱，让模型看见远离平均值的长尾信息。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>观察行为</strong>给基准率：交易记录、平台行动与可观测选择，描述某群人通常会做什么。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>随机对照试验</strong>给机制：只改变变量并保留真实利害，学习行为为什么改变。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded tiny">
作者概括：纹理让 twin 像这个人，基准率让它像这类人，因果数据让它能回答干预问题。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./three-pillars.excalidraw" class="w-[440px]" :darkMode="false" :background="false" />
</div>

---

# 深度访谈：不可预测的细节才有价值

<div class="grid grid-cols-2 gap-5 mt-5 text-left">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">开场问题</div>
<div class="text-xl font-bold mt-2">讲讲你的一生</div>
<div class="tiny mt-3">Simile 对参与者提出的核心问题，与本期播客开场相同；但研究访谈会继续追问具体经历与转折。</div>
</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label">为什么不是属性表</div>
<div class="text-xl font-bold mt-2">长尾信息形成 texture</div>
<div class="tiny mt-3">两个人可以有相同年龄、职业与地区，却因一次童年经历或长期习惯，在同一情境作出不同选择。</div>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-left text-sm">
这里的目标不是把生活故事装饰进 prompt，而是让无法从人口统计字段推导的差异真正影响行为输出。
</div>

---

# 观察数据：它给出人的行为基准率

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold">交易记录</div>
<div class="tiny mt-2">购买、选择与放弃是最直接的行为证据，也往往是企业已经拥有的数据。</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold">平台行动</div>
<div class="tiny mt-2">点击、浏览与社交互动能补足描述性调查，但仍受平台结构影响。</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="font-bold">现实合作</div>
<div class="tiny mt-2">企业客户与 panel partner 提供对实际用户群的有限窗口，并配合同意与激励流程。</div>
</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-left text-sm">
基准率可以告诉模型哪些行为常见；但它仍不能自动回答：改变价格、消息或选项后，人为什么会换一种选择？
</div>

---
layout: two-cols
---

# RCT：把态度变成有代价的行为

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
实验室或 virtual lab 会给参与者真实决策；例如在线商店里买到的东西，最后真的配送到家。
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
决定是否 behavioral 的分界，不是问题长什么样，而是参与者是否承担真实后果。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
随机对照让环境保持近似相同，只改变少数变量，从而学习 cause 与 mechanism，而非表面相关性。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded tiny">
三类数据缺一不可：访谈解释个人历史，观察数据给现实频率，RCT 识别可干预的因果路径。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./three-pillars.excalidraw" class="w-[430px]" :darkMode="false" :background="false" />
</div>

---

# 预测未来，与塑造未来，是两种产品

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">Prediction</div>
<div class="text-xl font-bold mt-2">两个季度后销量会跌</div>
<div class="tiny mt-3">这条信息也许准确，却只提前制造焦虑；它没有告诉决策者此刻能做什么。</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Simulation</div>
<div class="text-xl font-bold mt-2">哪条干预路径改变结果</div>
<div class="tiny mt-3">模拟追踪每一步如何改变下一步，让目标、环境、行动与涌现结果连成因果链。</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-left text-sm">
现实世界只发生一次，无法为每个重大决策提供理想对照组；模拟的价值，是把未发生的反事实变成可比较的路径。
</div>

---

# 最好的第一步，可能非常反直觉

<div class="grid grid-cols-2 gap-5 mt-5 text-left">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label">Foundation 类比</div>
<div class="font-bold mt-1">目标：把 30,000 年动荡压到 1,000 年</div>
<div class="tiny mt-2">psychohistory 给出的早期动作，是把预警帝国崩溃的科学家放逐到 Terminus。局部看像错误，路径上却可能必要。</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label">汽车公司例子</div>
<div class="font-bold mt-1">只优化 EV 销量，可能伤害总销量</div>
<div class="tiny mt-2">某种 EV 营销改变了消费者对非 EV 车型的看法；若系统只追踪一个指标，就会选错动作。</div>
</div>

</div>

<div class="mt-5 grid grid-cols-3 gap-3 tiny text-left">
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded"><strong>输入</strong><br/>目标 + 环境</div>
<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded"><strong>模拟</strong><br/>多步行动与反馈</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded"><strong>输出</strong><br/>可执行的当前动作</div>
</div>

---

# 如何证明它不是层层幻觉？

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 bg-red-50 border-2 border-red-200 rounded">
<div class="label">风险 1</div>
<div class="font-bold mt-2">角色不真实</div>
<div class="tiny mt-2">如果一个 twin 只是在复述人口统计刻板印象，人数再多也只是扩大偏差。</div>
</div>

<div class="p-4 bg-orange-50 border-2 border-orange-200 rounded">
<div class="label">风险 2</div>
<div class="font-bold mt-2">错误会传播</div>
<div class="tiny mt-2">多步互动会让早期偏差进入后续环境，最后出现看似复杂但没有现实对应的结果。</div>
</div>

<div class="p-4 bg-blue-50 border-2 border-blue-200 rounded">
<div class="label">验证原则</div>
<div class="font-bold mt-2">预测未见过的真人反应</div>
<div class="tiny mt-2">模型必须在留出的问卷、实验与 RCT 上，对应回同一个来源个体的真实选择。</div>
</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-left text-sm">
可解释的故事不是准确性证据；只有让人和自己的 twin 分别完成同一任务，才建立可量化的 ground truth。
</div>

---
layout: two-cols
---

# 千人数字孪生：验证流程

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
从美国代表性抽样 1,000 人，带入 virtual lab；每人约 2 小时，收集深度访谈与可获得的行为数据。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
研究团队用这些资料创建每个人的数字孪生，然后把真人送回现实生活两周。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
两周后真人回来完成问卷、behavioral games、Big Five、General Social Survey 与已发表的 RCT。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded tiny">
对应的 twin 在没有看到真人新答案的前提下，预测来源个体会怎样完成同一组任务。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./latent-demand.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# 85% 的含义：先以人对自己的稳定性为上限

<div class="mt-5 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="label">对象</div>
<div class="text-4xl font-bold text-blue-700 my-3">1,000</div>
<div class="tiny">美国代表性样本的数字孪生</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="label">间隔</div>
<div class="text-4xl font-bold text-purple-700 my-3">2 周</div>
<div class="tiny">把建模数据与验证回答分开</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="label">相对准确度</div>
<div class="text-4xl font-bold text-green-700 my-3">85%</div>
<div class="tiny">相对于人重复自己答案的准确度</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-left text-sm">
这里的参照不是抽象的 100% 真值：同一个人隔一段时间重做问卷也会变化。85% 衡量 twin 对个体可重复部分的逼近程度。
</div>

---

# Frontier model 的强项，恰好不是这里的目标

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">通用前沿模型</div>
<div class="text-lg font-bold mt-2">更理性、更客观、更会推理</div>
<div class="tiny mt-3">训练目标倾向专业程序员、科学家与高质量推理，使模型走向更稳定的正确答案。</div>
</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label">行为模型</div>
<div class="text-lg font-bold mt-2">复制这个人的偏差与错误</div>
<div class="tiny mt-3">如果来源个体会误判、拖延或选择低效率路径，twin 也必须保留同类倾向。</div>
</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-4 text-left tiny">
<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded"><strong>niche population / niche topic</strong><br/>frontier model 表现可能降到 20–30%</div>
<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded"><strong>更广泛人口</strong><br/>大致在 50–60%，仍不足以托付高代价决策</div>
</div>

---

# 绕远路，有时才是人的最优解

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">效率模型</div>
<div class="text-xl font-bold mt-2">40 分钟路程 → Uber / 公交</div>
<div class="tiny mt-3">若目标只有更快到家，这当然是合理答案。</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Joon 的真实选择</div>
<div class="text-xl font-bold mt-2">从 Stanford 走回 Palo Alto</div>
<div class="tiny mt-3">他喜欢半小时到 40 分钟的步行，因为那段时间帮助自己思考研究与想法。</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-left text-sm">
行为模型的难点不是替人找到客观更优方案，而是知道某个人为什么愿意选择看似低效、却对他有私人价值的路径。
</div>

---
layout: two-cols
---

# 十亿种 persona 组合，仍不等于十亿个人

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
一种扩展方法是把职业、地区、性格等字段做组合，批量生成海量 persona prompt；它的优势是规模。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
但它高度依赖 foundation model 已经学到的统计。若先验完整，这几乎等于从参数中检索现成知识。
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
Simile 的实证判断是：细分人群与日常行为里仍有大量缺失统计，因此需要 bespoke data collection。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded tiny">
作者概括：组合字段扩大覆盖面；生活纹理提高个体忠实度。两者解决的是不同维度。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./character-space.excalidraw" class="w-[435px]" :darkMode="false" :background="false" />
</div>

---

# 不同平台，只展示同一个人的不同切片

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold text-blue-900">LinkedIn</div>
<div class="tiny mt-2">职业环境里 guard up；真实，但强烈受专业身份约束。</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold text-orange-900">Twitter</div>
<div class="tiny mt-2">个人会形成更鲜明的公开 persona，身份随用途变化。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold text-green-900">Facebook</div>
<div class="tiny mt-2">更接近日常朋友网络；如果必须三选一，Joon 认为它更接近默认状态。</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-left text-sm">
单个平台都不是完整的人。研究目标不是找一个完美数据源，而是理解每种数据揭示了什么、遮蔽了什么。
</div>

---
layout: two-cols
---

# 模拟的 scaling law

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
Simile 自己 post-train 模型，并观察到：更多关于人的数据与更多 compute，会带来可预测的模拟性能提升。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
但扩展的单位不只是参数：高质量访谈、行为数据、RCT，以及覆盖正确 sub-population 的样本同样决定上限。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
最终系统还要扩展 agent 数量、互动密度与环境复杂度；这是从 model scaling 走向 society scaling。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./scaling-curve.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 从 1 个 twin 到 80 亿人的地球

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
今天的实际部署，核心规模从 tens of thousands 到 hundreds of thousands；每周也在采集 tens of thousands 人的数据。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
panel partnership 能触达全球 tens of millions。现实价值更依赖是否覆盖目标细分人群，而非盲目堆总体样本。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
五到十年的愿景，才是让 80 亿 agent 生活在丰富环境中，观察社会层面的 emerging behavior。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded tiny">
梯子的每一级都增加新难题：个体忠实度、群体代表性、互动成本、环境真实性与宏观验证。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./rsp-ladder.excalidraw" class="w-[445px]" :darkMode="false" :background="false" />
</div>

---

# 80 亿人的价值，不是做一张更大问卷

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Wicked problem</div>
<div class="font-bold mt-1">气候变化</div>
<div class="tiny mt-2">大量参与者拥有冲突激励，困难在协调路径而不是缺一条单点预测。</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">Early signals</div>
<div class="font-bold mt-1">民主制度的崩塌</div>
<div class="tiny mt-2">从局部互动与制度反馈中寻找宏观失稳的早期征兆。</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label">Origin story</div>
<div class="font-bold mt-1">货币系统如何出现</div>
<div class="tiny mt-2">用可重复的社会模拟研究现实历史只发生一次的集体机制。</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-left text-sm">
规模真正带来的新能力，是研究个人规则怎样通过互动涌现为制度、规范与危机，而不是把 survey respondent 增加到 80 亿。
</div>

---

# Schelling：微小偏好怎样长成全面隔离

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div>
<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">1970s–80s 的 agent-based model</div>
<div class="tiny mt-2">网格里只有红点与蓝点；若异色邻居比例超过阈值，点就随机搬家。</div>
</div>
<div class="mt-3 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label">反直觉结果</div>
<div class="tiny mt-2">个人只需很弱的同类邻居偏好，系统经过多轮移动后也可能形成高度隔离。</div>
</div>
<div class="mt-3 p-4 bg-green-50 border-l-4 border-green-500 rounded tiny">
这类工作影响了住房政策，也展示了模拟的核心：宏观结果不能只从单个人的意图直接读出。
</div>
</div>

<div class="p-5 bg-slate-50 border border-slate-200 rounded">
<div class="label mb-3">示意：局部规则 → 宏观结构</div>
<div class="grid grid-cols-6 gap-2 w-72 mx-auto">
<span v-for="i in 18" :key="i" :class="['w-8 h-8 rounded-full border-2', i % 3 === 0 || i % 7 === 0 ? 'bg-red-200 border-red-500' : 'bg-blue-200 border-blue-500']"></span>
</div>
<div class="text-center text-2xl my-3">↓ 多轮搬迁</div>
<div class="grid grid-cols-6 gap-2 w-72 mx-auto">
<span v-for="i in 18" :key="'b'+i" :class="['w-8 h-8 rounded-full border-2', i <= 8 ? 'bg-red-200 border-red-500' : 'bg-blue-200 border-blue-500']"></span>
</div>
</div>

</div>

---

# 成本问题：模拟贵，但现实决策更贵

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">今天</div>
<div class="font-bold mt-1">数千到数十万人已足够</div>
<div class="tiny mt-2">企业通常需要正确的目标人群切片，而不是模拟整个国家。</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label">比较对象</div>
<div class="font-bold mt-1">真人研究也昂贵</div>
<div class="tiny mt-2">招募、激励、等待与组织实验会消耗时间，很多反事实研究根本不可执行。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">价值上限</div>
<div class="font-bold mt-1">降低错误决策成本</div>
<div class="tiny mt-2">若一次模拟改变价值数亿美元的产品或政策选择，推理成本就不再是主要矛盾。</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-left text-sm">
Joon 预期未来会出现成本接近训练 foundation model 的社会模拟；是否值得，取决于它能否解决同量级的社会问题。
</div>

---

# 商业落地：替决策者持续咨询人群

<div class="grid grid-cols-3 gap-3 mt-5 text-left tiny">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded"><strong>Concept testing</strong><br/>比较产品、消息与创意</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded"><strong>Focus group</strong><br/>查询特定 population 的反应</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded"><strong>A/B testing</strong><br/>在行为环境里比较方案</div>
<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded"><strong>UI / website</strong><br/>让 agent 遍历 Figma 或真实网页</div>
<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded"><strong>Earnings call</strong><br/>模拟公开公司沟通场景</div>
<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded"><strong>Population filter</strong><br/>按年龄、地区与目标市场查询</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-left text-sm">
<div class="p-4 bg-slate-50 border border-slate-200 rounded"><strong>市场入口</strong><br/><span class="tiny">market research 约 $100 billion，但 Joon 不把模拟只定义为研究工具。</span></div>
<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded"><strong>更大的定义</strong><br/><span class="tiny">它面向所有关于人、为人作出的决策；这也是 TAM 难以用既有行业框定的原因。</span></div>
</div>

---

# 真正的产品承诺：让人的声音常驻决策室

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">现实缺口</div>
<div class="text-lg font-bold mt-2">人类 panel 无法回答无限问题</div>
<div class="tiny mt-3">组织每天做大量产品与政策决定；即使用户愿意，也不可能为每个供应商填写一千份问卷。</div>
</div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">模拟的角色</div>
<div class="text-lg font-bold mt-2">把被影响者带进房间</div>
<div class="tiny mt-3">grounded synthetic population 让利益相关者在决策发生时被持续咨询，而不是等上线后才由 backlash 表达意见。</div>
</div>

</div>

<div class="mt-5 p-4 bg-red-50 border-l-4 border-red-500 rounded text-left text-sm">
政治是敏感边界。Simile 承认存在需求，但在形成足够的 guardrails 与社会立场前，不急于深入服务政治市场。
</div>

---

# 模拟像绘画：准确不等于逐像素复制

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label">画家视角</div>
<div class="text-lg font-bold mt-2">表征总会有差异</div>
<div class="tiny mt-3">没有一幅画是对象本身；重要的是它能否突出主体最关键、最能解释其行为的部分。</div>
</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label">向内看 fractal</div>
<div class="text-lg font-bold mt-2">日常细节映出社会形状</div>
<div class="tiny mt-3">Joon 画过乡村小镇里普通人的日常。他相信把微小生活放在一起，会显露个人与社会的深层结构。</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-left text-sm">
作者概括：AGI 迫使我们重新理解 intelligence；社会模拟则迫使我们定义，哪些日常行为共同构成 humanity。
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">9 条候选引文均已逐字 grep；本页 8 条，最后一页 1 条。</div>

<div class="grid grid-cols-2 gap-2.5 text-left">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded quote text-sm">
"Like, let's just create a world."
<div class="tiny opacity-65 mt-1 not-italic">— 时间机器游戏的第一选择</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded quote text-sm">
"if the stake in your decision is real."
<div class="tiny opacity-65 mt-1 not-italic">— 态度与行为的分界</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded quote text-sm">
"It's about behavior."
<div class="tiny opacity-65 mt-1 not-italic">— 模拟关注多步行动</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded quote text-sm">
"that's the power of simulation."
<div class="tiny opacity-65 mt-1 not-italic">— 主持人对反直觉路径的总结</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded quote text-sm">
"That's very human activity."
<div class="tiny opacity-65 mt-1 not-italic">— 选择走路回家</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded quote text-sm">
"Simulation is a lot like painting,"
<div class="tiny opacity-65 mt-1 not-italic">— 论表征与本质</div>
</div>

<div class="p-3 bg-cyan-50 border-l-4 border-cyan-500 rounded quote text-sm">
"that was the most interesting thing."
<div class="tiny opacity-65 mt-1 not-italic">— 普通人的日常生活</div>
</div>

<div class="p-3 bg-pink-50 border-l-4 border-pink-500 rounded quote text-sm">
"the market's pretty big here."
<div class="tiny opacity-65 mt-1 not-italic">— AGI 与 simulation 两根支柱</div>
</div>

</div>

---
layout: end
---

# "it's real to us."

<div class="mt-8 text-sm opacity-70">
Joon Sung Park · Simile AI × Latent Space<br/>
个人行为 → 数字孪生 → 多 agent 社会 → 现实决策
</div>
