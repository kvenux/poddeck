---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Why OpenAI is merging Codex and ChatGPT and the future of knowledge work | Andrew Ambrosino'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
coverDate: '2026-06'
themeConfig:
  paginationX: ''
  paginationY: ''
---

<!-- 01 -->

<div class="mt-8 text-sm tracking-[0.26em] uppercase text-orange-700 font-semibold">Lenny's Podcast · PodDeck</div>

# 当实现不再昂贵，产品工作的重心去了哪里？

<div class="mx-auto mt-5 max-w-4xl text-xl leading-8 opacity-75">
Why OpenAI is merging Codex and ChatGPT and the future of knowledge work
</div>

<div class="mt-7 text-lg font-semibold">Andrew Ambrosino · OpenAI Codex 产品与工程负责人</div>

<div class="mt-9 flex justify-center gap-3 text-sm">
  <span class="px-4 py-2 rounded-full bg-blue-50 border border-blue-200">约 70 分钟</span>
  <span class="px-4 py-2 rounded-full bg-purple-50 border border-purple-200">产品工作重构</span>
  <span class="px-4 py-2 rounded-full bg-orange-50 border border-orange-200">Codex × ChatGPT</span>
</div>

<div class="mt-10 text-sm opacity-55">PodDeck · 2026-06</div>

---

<!-- 02 -->

# 为什么这期值得看

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-[14px] leading-6">

<div class="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500">

### 成本倒置
代码和原型变得充裕，真正稀缺的从实现资源转向选择、组合、取舍与品味。
</div>

<div class="p-4 rounded-lg bg-orange-50 border-l-4 border-orange-500">

### 流程重写
文档没有消失，原型也不是默认答案；媒介要服务于当前要消除的不确定性。
</div>

<div class="p-4 rounded-lg bg-green-50 border-l-4 border-green-500">

### 角色重叠
设计、产品、工程的边界变软，但专业积累、最佳实践和管理责任仍然存在。
</div>

<div class="p-4 rounded-lg bg-purple-50 border-l-4 border-purple-500">

### 路线图变短
产品形态能否成立，越来越取决于模型能力窗口；远期规划只能保留方向。
</div>

<div class="p-4 rounded-lg bg-yellow-50 border-l-4 border-yellow-500">

### 工作台扩张
Codex 从写代码的工具，长成汇总信息、自动执行、调用浏览器和专业软件的工作入口。
</div>

<div class="p-4 rounded-lg bg-red-50 border-l-4 border-red-500">

### 合流逻辑
非工程岗位宁愿留在面向开发者的 Codex，也没有迁往为他们准备的界面；这是产品信号。
</div>

</div>

---

<!-- 03 -->

# 先把证据边界说清楚

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm leading-6">

<div class="p-5 rounded-lg bg-blue-50 border-l-4 border-blue-500">

### 逐字层
所有英文引号内文字都已在本集 transcript 中跨行命中；字幕中的 Codex、OpenAI 等明显识别错误按语义正规化。
</div>

<div class="p-5 rounded-lg bg-yellow-50 border-l-4 border-yellow-500">

### 概括层
中文正文是对本期对谈的结构化整理。图示和推论会标明为作者概括，不冒充嘉宾原话。
</div>

<div class="p-5 rounded-lg bg-red-50 border-l-4 border-red-500">

### 数字层
节目时长约 70 分钟。开场数据来自主持人：自当年 1 月起增长 6 倍、超过 500 万周活、OpenAI 内部接近全员周使用。
</div>

</div>

<div class="mt-7 p-5 rounded-lg bg-slate-50 border border-slate-200 text-left text-base leading-7">
这期不是一份 Codex 功能清单。核心问题是：当做出东西变得极便宜，组织如何判断该做什么、何时做、用什么形态做，以及谁来为整体一致性负责。
</div>

---
layout: two-cols
---

<!-- 04 -->

# 产品工作的成本结构倒置

<div class="text-left text-[14px] leading-6 pr-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">
<b>过去</b>：实现昂贵，团队先用研究、文档、设计和原型尽量降低开发风险。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
<b>现在</b>：大量人可以直接做出可运行版本，探索数量迅速增加。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>新瓶颈</b>：从许多版本里识别信号，决定合并什么、舍弃什么、最终如何呈现。
</div>

<div class="mt-4 p-3 rounded bg-white border border-blue-200 italic text-[16px] leading-6">
"The implementation is actually not the expensive part anymore. It's dare I say taste."
<div class="text-xs opacity-60 mt-1 not-italic">— Andrew，谈产品流程的成本倒置</div>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./cost-inversion.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

<!-- 05 -->

# 90 个探索，不等于 90 个答案

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-[15px] leading-7">

<div class="p-5 rounded-lg bg-blue-50 border-l-4 border-blue-500">

### 探索变得廉价
Andrew 用同一个急需功能可能出现约 90 个无协调实现来描述 OpenAI 内部的状态。这里的重点不是精确统计，而是供给突然过剩。

### 旧问题被削弱
有没有资源、能不能排期、原型是否做得出来，不再是最主要的门槛。
</div>

<div class="p-5 rounded-lg bg-orange-50 border-l-4 border-orange-500">

### 新问题变得尖锐
哪些尝试真的解决了用户问题？哪些应合并进别的功能？哪一种交互能保持整个产品的连贯？

### 产品工作的产出
不是再制造第 91 个版本，而是建立可解释的选择：为何保留、为何放弃、下一轮验证什么。
</div>

</div>

---

<!-- 06 -->

# 文档和原型：先问你要消除哪种不确定性

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-[15px] leading-7">

<div class="p-5 rounded-lg bg-blue-50 border-l-4 border-blue-500">

### 模糊的问题空间
当团队仍不清楚目标、边界、用户或业务逻辑时，文档能迫使人把推理暴露出来。

<div class="mt-4 text-sm opacity-70">适合：概念澄清、对齐假设、描述尚未成形的方向。</div>
</div>

<div class="p-5 rounded-lg bg-green-50 border-l-4 border-green-500">

### 待检验的交互
当问题是某个操作是否自然、用户拿到手会如何反应时，可运行原型更接近所需证据。

<div class="mt-4 text-sm opacity-70">适合：压力测试交互模式、暴露真实使用摩擦。</div>
</div>

</div>

<div class="mt-6 p-4 rounded-lg bg-purple-50 border-l-4 border-purple-500 text-left italic text-lg">
"it's really important to pick the right format for the point you're trying to make."
<div class="text-xs opacity-60 mt-1 not-italic">— Andrew，反对把文档或原型当成唯一正确媒介</div>
</div>

---

<!-- 07 -->

# 原型越逼真，阶段信号反而越弱

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm leading-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 旧世界
接近生产界面的东西通常意味着已完成研究、设计审查和业务论证，因为获得实现资源本身就很难。
</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 新世界
早期探索也能长得像成品。视觉完成度不再能告诉旁观者：假设是否已验证、方向是否已确认。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 锚定风险
团队会开始回应眼前这个漂亮实现，把原本应讨论的更大问题压缩成局部修改。
</div>

</div>

<div class="mt-7 p-5 rounded-lg bg-slate-50 border border-slate-200 text-left text-base leading-7">
作者概括：AI 让<strong>制作状态</strong>和<strong>决策状态</strong>脱钩。新流程必须显式标注这是探索、实验、候选方案还是发布承诺。
</div>

---
layout: two-cols
---

<!-- 08 -->

# 实现进入了设计流程

<div class="text-left text-[14px] leading-6 pr-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
过去，交互原型被提前拉入设计阶段，用来模拟最终产品。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
现在，完整实现也能成为探索材料；团队甚至维护简化代码库，快速试验侧栏、面板和群聊等形态。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
设计师获得了更多工具，但也必须明确当前处于哪一个决策阶段，不能让媒介替代流程判断。
</div>

<div class="mt-4 text-xs opacity-60">作者概括：从研究到上线不再是一条由媒介决定的单向流水线。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./prototype-stage.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

<!-- 09 -->

# 为什么 AI 的设计能力落后于编码

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-[15px] leading-7">

<div class="p-5 rounded-lg bg-red-50 border-l-4 border-red-500">

### 反馈更难获得
代码可以编译、运行和测试；设计评价需要人的品味进入反馈回路，训练信号更慢、更昂贵，也更难一致。

### 研究飞轮不同
早期把模型训练成更好的程序员，会直接加速 AI 研究；设计对这条飞轮的推动更间接。
</div>

<div class="p-5 rounded-lg bg-purple-50 border-l-4 border-purple-500">

### 不是永远做不好
Andrew 认为这些实践差距会缩小，但更深的问题仍包括文化语境、真正的新颖性，以及视觉与代码抽象之间的对应关系。

<div class="mt-4 p-3 rounded bg-white border border-purple-200 italic text-[15px] leading-6">
"I think design's a little bit harder to grade because the human aspect of taste is like part of the feedback mechanism you need."
</div>
</div>

</div>

---

<!-- 10 -->

# 好设计不只是把已知范式复制得更漂亮

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm leading-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 可评分性
模型需要知道什么是好设计，但人的评价既带品味，也随用途和受众变化。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 文化与新颖性
软件工程常希望复用成熟模式；设计若每次都复制同一种流行网站，恰恰没有完成创新。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 语义抽象
两个视觉不同的组件可能表达同一种交互语义。真正稳健的设计要让代码层也共享这个关系。
</div>

</div>

<div class="mt-7 p-5 rounded-lg bg-yellow-50 border-l-4 border-yellow-500 text-left text-base leading-7">
作者概括：视觉像不像只是表面指标。更难的是让产品语言、文化判断、交互含义与代码结构同时成立。
</div>

---

<!-- 11 -->

# 263 个组件，暴露的是抽象问题

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-[15px] leading-7">

<div class="p-5 rounded-lg bg-red-50 border-l-4 border-red-500">

### 浅层改法
品牌更新后逐个修改 263 个组件。界面可能最终一致，但变化成本高，且下一次仍会重复劳动。

### 模型容易做到
识别局部视觉差异，按文件或组件逐项替换。
</div>

<div class="p-5 rounded-lg bg-green-50 border-l-4 border-green-500">

### 深层改法
识别不同位置背后共享的列表语义、层级和交互暗示，把关系编码为可复用系统。

### 仍显困难
这要求模型同时理解视觉设计和代码库架构，而不是只生成看起来正确的页面。
</div>

</div>

---
layout: two-cols
---

<!-- 12 -->

# 角色没消失，只是彼此重叠

<div class="text-left text-[14px] leading-6 pr-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
设计师会写代码，也会承担产品判断；产品经理能进入技术细节；工程师参与产品取舍。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">
一个人的角色更像一段时间内工作分布的平均位置，而不是不可跨越的职责围栏。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
重叠扩大不代表三个专业变成同一件事；每个人仍有更深的重心与长期积累。
</div>

<div class="mt-4 p-3 rounded bg-white border border-blue-200 italic text-[16px] leading-6">
"significantly more overlap in the roles than there used to be."
<div class="text-xs opacity-60 mt-1 not-italic">— Andrew，谈 Codex 团队的角色形态</div>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./role-overlap.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

<!-- 13 -->

# Codex 团队把边界变成了重心

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm leading-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 共同语言
这是面向工程师起步的技术产品，设计和产品成员本身就更容易进入工程语境。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 共同现场
团队强调坐在一起、嵌入协作，并通过持续使用 Codex 暴露产品和流程的缺口。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 共同目标
个人可以跨边界完成眼前需要的工作，但长期贡献仍会显示出设计、产品或工程的平均重心。
</div>

</div>

<div class="mt-7 p-5 rounded-lg bg-slate-50 border border-slate-200 text-left text-base leading-7">
真正被削弱的是<strong>这不是你的职责</strong>式阻隔；没有被削弱的是专业判断、深度和对结果的责任。
</div>

---

<!-- 14 -->

# 把所有人都叫 Builder，会丢掉什么

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-[15px] leading-7">

<div class="p-5 rounded-lg bg-red-50 border-l-4 border-red-500">

### 极端角色消解
如果公司宣布取消产品角色，容易连同用户研究、优先级、定位、验证和失败经验一起丢掉。

### 工具熟练的错觉
会写代码不等于掌握产品专业；会用表格也不等于能承担财务团队的工作。
</div>

<div class="p-5 rounded-lg bg-green-50 border-l-4 border-green-500">

### 更健康的流动
AI 降低了进入不同角色的工具门槛，让人更容易学习实践、切换视角并跨界补位。

<div class="mt-4 p-3 rounded bg-white border border-green-200 italic text-lg">
"not everyone can work on everything"
</div>
<div class="text-xs opacity-60 mt-2">— Andrew，强调广度、深度与管理仍有限制</div>
</div>

</div>

---

<!-- 15 -->

# 产品工作开始像区防，而不是排队接需求

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm leading-6">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 拉开覆盖面
产品人员不必彼此贴得太近；他们分散到不同问题区域，寻找组织里的空白与失联点。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 从起点一路引导
在自下而上探索大量涌现时，产品判断要从想法诞生一直陪到完整体验，而不是只在评审时出现。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 守住整体一致性
工程师也需要产品意识，但仍要有人观察跨团队冲突、重叠方案和无人负责的边界。
</div>

</div>

<div class="mt-7 p-5 rounded-lg bg-yellow-50 border-l-4 border-yellow-500 text-left text-base leading-7">
作者概括：当探索从中心计划转为多点涌现，产品职能从派单者变成覆盖网络中的判断节点。
</div>

---
layout: two-cols
---

<!-- 16 -->

# IC 也在管理：粒度不同

<div class="text-left text-[14px] leading-6 pr-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
工程 IC 不再逐字符输入全部代码，而是在分解任务、监督 agents、检查输出并整合结果。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">
团队经理仍在做类似工作，只是管理粒度更大：人员、工作流、方向与跨团队依赖。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
两者共同需要判断信号与噪声，因为无限 tokens 也会带来无限内容和无限低质量产出。
</div>

<div class="mt-4 p-3 rounded bg-white border border-blue-200 italic text-[15px] leading-6">
"It's not that everyone's an IC, but like everyone's kind of both now"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./agent-management.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

<!-- 17 -->

# 计划越远，细节越应该变少

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm leading-6">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 近期
需要明确负责人、交付物、质量门槛与具体依赖，因为这些信息能直接改变行动。
</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 中期
保留主题、模型能力假设和需要重新验证的候选方案，让方向可调整。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 九个月后
过度精细的日期和功能表制造确定感，却无法穿越模型进步和市场学习。
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-left text-[14px] leading-5 italic">
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">"the shorter term something is, the more detail it needs."</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">"any amount of precision that you add to a 9-month plan right now is false precision."</div>
</div>

---
layout: two-cols
---

<!-- 18 -->

# 同一形态，几个月后可能是另一款产品

<div class="text-left text-[14px] leading-6 pr-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">
Andrew 判断：2 月发布的 Codex app，如果在 11 月就准备好并推出，市场表现会失败。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
他强调产品形态没有发生决定性变化，改变结果的是这几个月里的模型能力。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
因此，可以先把未来功能做成可测试 artifact，等模型跃迁后再换入新能力重新验证。
</div>

<div class="mt-4 text-xs opacity-60">作者概括：路线图需要同时管理功能形态和模型成熟窗口。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./model-window.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

<!-- 19 -->

# 没成功的功能，可能只是发布得太早

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-[15px] leading-7">

<div class="p-5 rounded-lg bg-red-50 border-l-4 border-red-500">

### 过度委托的早期形态
最初的 Codex web 更像把任务交出去、等待完成结果。模型当时能写代码，却还不足以可靠地独立完成整个任务。

### 产品结论的风险
若只看一次发布，会误判为功能方向错误，而实际瓶颈可能是智能水平与交互承诺不匹配。
</div>

<div class="p-5 rounded-lg bg-green-50 border-l-4 border-green-500">

### 更贴合能力的形态
随后本地、可对话、会提问的编码工具降低了自主性承诺，反而更适合当时的模型。

### 重新发布的价值
同一条能力线可以跨 Operator、Atlas、Codex 与 ChatGPT 反复出现；新智能会改变同一形态的结果。
</div>

</div>

---

<!-- 20 -->

# 自动开发软件，还卡在两类判断上

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-[15px] leading-7">

<div class="p-5 rounded-lg bg-blue-50 border-l-4 border-blue-500">

### 人的判断
什么需求该做、哪些该忽略、哪些应合并并重新定义？社交媒体、Slack 和邮件里的声音不能直接等同于路线图。

### 需要的是产品品味
不是收集更多输入，而是建立问题之间的结构与优先级。
</div>

<div class="p-5 rounded-lg bg-orange-50 border-l-4 border-orange-500">

### 代码库判断
模型倾向增加复杂度，却不擅长主动删代码、收敛抽象和维持长期结构。

### 需要的是架构品味
完全自动驾驶会把局部正确累积成整体负担，除非系统能持续做减法。
</div>

</div>

<div class="mt-7 p-4 rounded-lg bg-slate-50 border border-slate-200 text-left text-base leading-7">
本期给出的边界很明确：团队在探索自动化 loop，但还不能只给系统一个改进产品的总目标，就让它自行监听所有渠道并持续演化。
</div>

---

<!-- 21 -->

# AI 编码的指标已经换了

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-[15px] leading-7">

<div class="p-5 rounded-lg bg-green-50 border-l-4 border-green-500">

### 旧问题
代码有多少比例由 AI 写？对 Codex app 团队，这个问题已经失去区分度。

<div class="mt-4 p-3 rounded bg-white border border-green-200 italic text-lg">
"100% of our product right now is AI written code."
</div>
</div>

<div class="p-5 rounded-lg bg-purple-50 border-l-4 border-purple-500">

### 新问题
这些代码有多少是在人的持续监督下完成，有多少可以自主完成并保持代码库质量？

<div class="mt-4 p-3 rounded bg-white border border-purple-200 italic text-lg">
"please make the models better at deleting code."
</div>
</div>

</div>

<div class="mt-6 text-sm opacity-65">作者概括：采用率已饱和后，衡量前沿要看监督强度、返工成本和长期复杂度。</div>

---
layout: two-cols
---

<!-- 22 -->

# Dogfooding 让产品能力追着真实工作生长

<div class="text-left text-[14px] leading-6 pr-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
早期目标很直接：Andrew 要用 Codex app 本身开发 Codex app。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
每遇到一个做不了的动作，就修产品；修好后又能承担更多开发任务，形成个人级闭环。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
团队甚至会暂时忍受不够好的内部流程，用真实摩擦逼产品成为更合适的工具。
</div>

<div class="mt-4 text-xs opacity-60">作者概括：用户研究、产品验证和内部工具建设在同一条使用回路里发生。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./dogfood-loop.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

<!-- 23 -->

# 当工作变化，工具的边界也跟着变化

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm leading-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 开始：写代码
Andrew 先把它做成自己愿意用来开发 Codex 的编码工具，核心是开发体验和快速修补摩擦。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 扩张：做产品
随着团队增长，他需要发现用户需求、理解内部项目、查看进度并把偏离方向的工作拉回来。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 再扩张：管理知识工作
表格建模、内部深度研究、汇总 PR 和 Slack、安排自动任务，都进入同一个工作入口。
</div>

</div>

<div class="mt-7 p-5 rounded-lg bg-slate-50 border border-slate-200 text-left text-base leading-7">
关键不是先宣布一个通用办公平台，而是让产品追着高强度用户的真实工作增量，一步步长出更广的任务形态。
</div>

---

<!-- 24 -->

# 一个每天早晨的 3,000 频道过滤器

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm leading-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

<div class="text-2xl mb-4">输入</div>
<div>Andrew 描述自己身处约 3,000 个 Slack 频道。定时任务先遍历信息，按关注领域和类别筛出需要处理的事项。</div>
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

<div class="text-2xl mb-4">输出</div>
<div>早晨收到 daily brief；他可以要求系统提出五个问题，再用一轮回答集中处理需要决策的内容。</div>
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

<div class="text-2xl mb-4">调教</div>
<div>如果某条工作流被遗漏，他直接告诉 app 下一次提高权重、降低某类信息或改变通知方式，任务说明随使用更新。</div>
</div>

</div>

<div class="mt-7 p-5 rounded-lg bg-yellow-50 border-l-4 border-yellow-500 text-left text-base leading-7">
局限也很现实：Andrew 有能力、有时间把设置过程当作产品研究；普通用户不该先学习这一整套配置才能得到价值。
</div>

---

<!-- 25 -->

# 个人工作流何时应该长成产品功能

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-[15px] leading-7">

<div class="p-5 rounded-lg bg-purple-50 border-l-4 border-purple-500">

### 先看重复主题
每个人都在搭自己的系统：有人做记忆库，有人汇总沟通，有人编排专业工具。团队观察哪些模式跨用户反复出现。

### 通用模式
如果许多人都在手工搭建个人记忆空间，产品更应该提供原生 memory，而不是要求用户维护同一套脚手架。
</div>

<div class="p-5 rounded-lg bg-orange-50 border-l-4 border-orange-500">

### 再保留个体差异
有些流程属于特定职业和组织，不适合固化成所有人都能看到的一等入口。

### 产品判断
把重复、稳定、广泛的结构做成 primitive；把个体流程留给可扩展能力和用户定制。
</div>

</div>

---

<!-- 26 -->

# 不懂怎么设置，先让 app 自己处理

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm leading-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Connector
已有结构化集成时，直接连接 Slack 等服务，读取信息并执行受控操作。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 内置浏览器 / Chrome
需要保留登录态、查看网页或更快交互时，agent 可在 app 内或连接现有浏览器。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Computer use
没有 connector 时，系统仍可通过界面点击完成配置；主持人用它设置 Google Cloud 相关流程。
</div>

</div>

<div class="mt-6 p-4 rounded-lg bg-purple-50 border-l-4 border-purple-500 text-left italic text-[16px] leading-6">
"the least that we can do is make it so that if you don't know how to do something in the app, they can just ask it"
<div class="text-xs opacity-60 mt-1 not-italic">— Andrew，承认这只是降低设置门槛的底线，不是最终形态</div>
</div>

---

<!-- 27 -->

# Codex 与 ChatGPT 合流的真正产品信号

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-[15px] leading-7">

<div class="p-5 rounded-lg bg-red-50 border-l-4 border-red-500">

### 反常行为
营销、沟通、财务、法务等岗位开始使用 Codex，尽管界面仍展示代码、仓库信息，甚至还会弹出命令批准请求。

### 团队的初始反应
把 Codex 的编码 agent 能力分别加进 ChatGPT 桌面端和 Atlas，为这些岗位提供更合适的表面。
</div>

<div class="p-5 rounded-lg bg-green-50 border-l-4 border-green-500">

### 更强信号
这些用户却不愿离开 Codex，说明他们需要的不是另一个简化聊天框，而是这个能观察、执行并留下工作状态的形态。

<div class="mt-4 p-3 rounded bg-white border border-green-200 italic text-[15px] leading-6">
"nobody would leave the Codex app for the apps that were allegedly for these other personas."
</div>
</div>

</div>

---
layout: two-cols
---

<!-- 28 -->

# Home Base：协调工作，而非吞掉软件

<div class="text-left text-[14px] leading-6 pr-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
有些任务可以在 app 内完成：汇总、研究、生成 artifact、安排自动化。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
有些任务应交给专业工具：例如复杂财务模型继续在 Excel 中完成，Codex 通过桌面 add-in 协作。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
统一的是任务、上下文和协调入口，不是把每个专业界面重新画进同一个矩形。
</div>

<div class="mt-4 p-3 rounded bg-white border border-blue-200 italic text-[15px] leading-6">
"this thing should be a home for you where you start work, you end work, you automate work, and it uses whatever you need to do."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./work-home-base.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

<!-- 29 -->

# Premiere 故事：agent 会为自己补一只手

<div class="grid grid-cols-4 gap-4 mt-7 text-left text-[13px] leading-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1 · 好奇开始
内部视频负责人 Brent 想知道 Codex 能否帮助编辑发布素材；Codex 本身没有视频剪辑 UI。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2 · 先动文件
它理解对方使用 Premiere Pro，也能通过支撑画面内容的文件完成一部分编辑。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 3 · 发现缺口
仅靠文件无法完成全部动作，专业软件里仍有它够不到的标记和操作。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 4 · 自建扩展
Codex 为自己生成可安装的 Premiere Pro extension，再通过扩展与专业工具交互。
</div>

</div>

<div class="mt-7 p-5 rounded-lg bg-yellow-50 border-l-4 border-yellow-500 text-left text-base leading-7">
作者概括：通用 agent 的优势不是预装每一种垂直功能，而是识别缺失能力，并在允许的边界内生成连接层。
</div>

---

<!-- 30 -->

# 这条上升曲线之前，是十多年的失败感

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm leading-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 创业阶段
Andrew 长期做创业公司，经历受监管行业的缓慢推进，最后基本以拆分出售告终；之后做 AI 工具也反复碰壁。
</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### OpenAI 内部
Codex 与 ChatGPT 合流过程中仍有大量微失败。一个方案发到 Slack，可能换来约 2,000 条直接批评。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 对齐时刻
技能、热情和市场时点偶尔会同时对齐；过去的失败并没有消失，而是成为现在判断与韧性的来源。
</div>

</div>

<div class="mt-6 p-4 rounded-lg bg-purple-50 border-l-4 border-purple-500 text-left italic text-lg">
"I failed for like I don't know somewhere between 10 and 15 years before getting to this point"
<div class="text-xs opacity-60 mt-1 not-italic">— Andrew，回应外界只看到当前增长</div>
</div>

---

<!-- 31 -->

# 核心金句

<div class="text-sm opacity-60 mb-3">8 条逐字核验过的原话，分别对应本期的八个关键转折：</div>

<div class="grid grid-cols-2 gap-3 text-left text-[11px] leading-4">

<div class="p-2.5 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"The implementation is actually not the expensive part anymore. It's dare I say taste."
<div class="text-[10px] opacity-60 mt-1 not-italic">成本倒置 · 实现之后是筛选</div>
</div>

<div class="p-2.5 rounded bg-green-50 border-l-4 border-green-500 italic">
"it's really important to pick the right format for the point you're trying to make."
<div class="text-[10px] opacity-60 mt-1 not-italic">媒介选择 · 文档与原型各有任务</div>
</div>

<div class="p-2.5 rounded bg-orange-50 border-l-4 border-orange-500 italic">
"I think design's a little bit harder to grade because the human aspect of taste is like part of the feedback mechanism you need."
<div class="text-[10px] opacity-60 mt-1 not-italic">设计训练 · 人的品味进入反馈回路</div>
</div>

<div class="p-2.5 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"not everyone can work on everything"
<div class="text-[10px] opacity-60 mt-1 not-italic">角色边界 · 流动不等于无限覆盖</div>
</div>

<div class="p-2.5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
"any amount of precision that you add to a 9-month plan right now is false precision."
<div class="text-[10px] opacity-60 mt-1 not-italic">规划尺度 · 远期细节制造假确定性</div>
</div>

<div class="p-2.5 rounded bg-red-50 border-l-4 border-red-500 italic">
"please make the models better at deleting code."
<div class="text-[10px] opacity-60 mt-1 not-italic">自动开发 · 长期质量需要做减法</div>
</div>

<div class="p-2.5 rounded bg-cyan-50 border-l-4 border-cyan-500 italic">
"nobody would leave the Codex app for the apps that were allegedly for these other personas."
<div class="text-[10px] opacity-60 mt-1 not-italic">产品信号 · 非工程岗位选择了同一工作面</div>
</div>

<div class="p-2.5 rounded bg-pink-50 border-l-4 border-pink-500 italic">
"this thing should be a home for you where you start work, you end work, you automate work, and it uses whatever you need to do."
<div class="text-[10px] opacity-60 mt-1 not-italic">最终形态 · Home Base 调用专业工具</div>
</div>

</div>

---
layout: end
---

<!-- 32 -->

# 不要忠于今天的流程

<div class="mx-auto mt-9 max-w-4xl text-2xl leading-10 italic">
"do not get married to your exact process. Get married to like the outcomes that you are uniquely able to deliver"
</div>

<div class="mt-8 text-base opacity-65">— Andrew Ambrosino · 录制结束后的补充对话</div>

<div class="mt-12 text-sm opacity-50">保持结果，重写路径。</div>
