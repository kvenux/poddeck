---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Context Engineering for Coding Agents'
info: |
  一位 MLOps community 的研究者讲：在每周一个新模型的时代，
  唯一你能控制的东西就是那个 context window —— 怎么往里塞东西，比模型本身更重要。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Context Engineering for Coding Agents

## 你能控制的，只有 context window

<div class="mt-6 text-base opacity-80">
MLOps.community Amsterdam · 一场关于 Claude Code 的现场分享
</div>

<div class="mt-10 text-sm opacity-60">
讲者是一位 applied AI 研究者，做过餐厅老板，学的是社会学 ——<br/>
一个 "外来的" 视角看每天和 agent 一起工作的人到底在干什么
</div>

---

# 为什么这场分享值得看

<div class="text-sm opacity-70 mb-4">
不是 syntax 教学，而是 "怎么在每周一个新模型的世界里保持工作姿势" 的心智模型。
</div>

<div class="grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">焦点法则</div>
<div class="text-sm opacity-80 mt-1">"focus on the things that you can change" —— 那就是 context window</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">25% 上限</div>
<div class="text-sm opacity-80 mt-1">不管是 1M 还是 200K 模型，超过 25% 就慢、贵、错</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">context 三分法</div>
<div class="text-sm opacity-80 mt-1">deterministic / probabilistic / human —— 一个有争议但好用的分类</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">大脑作类比</div>
<div class="text-sm opacity-80 mt-1">working memory + 海马体 + 长期记忆 —— 不是拟人，是借结构</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold">markdown 当记忆</div>
<div class="text-sm opacity-80 mt-1">Karpathy 提议：别上 RAG，先用 markdown 文件做 wiki</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold">5 分钟实测</div>
<div class="text-sm opacity-80 mt-1">同样的 Opus 4.7，有 wiki 的赢，没 wiki 的来不及</div>
</div>

</div>

---

# 讲者是谁

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### 一个 "不像工程师" 的工程师

- 学术背景是<strong>社会学</strong>
- 两年前才卖掉自己开的<strong>餐厅</strong>
- 现在在一家 applied AI lab 做研究

</div>

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">

### 怎么掉进 AI 这个坑的

讲者讲的是一个很具体的故事：开餐厅时被会计搞出一摊事，最后被法院逼着<strong>反向做了三年的账目整理</strong> —— 就是从那一刻开始研究 "怎么从文档里抽出结构化数据"。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>作者概括</strong>：他特别强调自己<em>不是</em>来教 syntax —— "I'm here to provide you my humble lens on this changing world." 一个看世界的镜头，不是一本手册。
</div>

---
layout: two-cols
---

# 焦点法则

<div class="text-sm opacity-70 mb-3">每周一个新模型，每月一次行业地震 —— 怎么不被卷死？</div>

讲者把这事拆得很哲学：

- 模型在变，labs 自己都说不清里面发生了什么
- 你训不动模型，也没法影响 parametric memory
- **能动的只有一个东西**：context window

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 italic">
"focus on the things that you can change and that is essentially this little window which could be a million tokens."
</div>

<div class="mt-3 text-xs opacity-60">
即便它能涨到 1M、10M token，也还是<strong>一个有限的空间</strong>。<br/>
context engineering 就是怎么填好这个空间。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./context-window.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# context window 是一个 "对问题的解"

<div class="mt-4 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">
"the context window is a solution to a problem. Your problem is that you want your AI to be focused on whatever it is that you do and you want it to remember all that you did."
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 问题
- 你想让 agent 专注
- 你想让 agent 记住

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### "塞进 context" 只是答案之一
1M token 的窗口很方便，但<strong>不是唯一解</strong>。<br/>
讲者反复强调：还有别的办法，今晚就讲那些办法。

</div>

</div>

---

# 25% 的经验法则

<div class="text-sm opacity-70 mb-4">他自认没人真知道阈值在哪 —— "anyone who's going to tell you that they know is talking [bleep]" —— 但还是给了一个 rule of thumb：</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-6 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

### 别越过 25%

<div class="text-2xl font-bold text-red-600 my-3">≤ 25%</div>

不管是 1M 模型还是 200K 模型 —— 一样。

</div>

<div class="p-6 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">

### 越过会怎样

<div class="my-2"><strong>更慢</strong> — 更长的 prompt 算得更久</div>
<div class="my-2"><strong>更贵</strong> — token 是直接成本</div>
<div class="my-2"><strong>更易错</strong> — 信号被噪声淹没</div>

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 italic">
"context is not just neutral data" —— 你的 context 里如果同时漂着 3 个互相冲突的概念，模型很难只盯着你想要的那个。
</div>

---

# context 优化是什么

<div class="mt-6 p-6 text-xl italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">
"context optimization is getting the highest form of efficiency: getting the best result with the minimum input injected at exactly the right time."
</div>

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-700 my-2">最好结果</div>
<div class="text-sm opacity-70">不是 "更多上下文"</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-700 my-2">最少输入</div>
<div class="text-sm opacity-70">"less is always more"</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-700 my-2">恰到好处</div>
<div class="text-sm opacity-70">时间和位置都对</div>
</div>

</div>

<div class="mt-6 text-sm opacity-70">
这就是为什么不是把所有规则塞进一个超大 CLAUDE.md，<br/>
而是切成<strong>不同 scope、不同触发条件</strong>的小块。
</div>

---
layout: two-cols
---

# 一个 context 三分法

<div class="text-sm opacity-70 mb-3">
讲者自承这是个 "highly debatable" 的分类 —— 但很好用：
</div>

- **Deterministic** —— 你启动 session 就一定会被注入的东西
- **Probabilistic** —— 模型 / LLM 决定什么时候用的东西
- **Human** —— 你这个活人提供的输入和判断

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
关键区别：<strong>"the way that they are injected"</strong>。同一段 markdown，被硬塞、被按需 fetch、被你打字打出来 —— 是三种完全不同的 context。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./taxonomy.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Deterministic: CLAUDE.md 与 rules

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### CLAUDE.md
- user scope / project scope / 子目录 scope
- 启动 default agent 就<strong>必定</strong>注入
- 原则：<strong>越少越好</strong> ("as little as possible")
- 只放总体性的偏好

</div>

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">

### Rules
他认为很多人把"Python 写法约定"塞进 CLAUDE.md 是<strong>错的</strong>。

那些约定应该是 rules —— 它们可以是：
- 路径 scope 的
- 文件扩展名触发的
- 甚至 <em>probabilistic</em> fetched

</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 text-sm">
<strong>作者概括</strong>：把 "什么时候用" 写进文件本身，比把它写进一个 always-on 的大 markdown 更省 context。
</div>

---

# Deterministic: hooks, loops, auto-memory

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Hooks
Claude Code 暴露了一堆<strong>生命周期事件</strong>，你可以挂任何脚本。

讲者用 hook 在 user input 之后接一个 TTS 转写后的<em>重写</em>步骤 —— 因为他打字慢，靠语音输入，要让另一个模型把口语洗成 prompt。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Loops
"If you are flush in credits and flushing tokens, loops are a great thing."

设个 cron job，每 30 分钟自己往前推一步。是<strong>烧 token 但省人力</strong>的方案。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Auto memory
Claude 自带的 markdown memory。<br/>
讲者承认 "I don't really like it" ——

它不太知道<em>何时</em>该存，retrieval 时机也不准。"probably going to be awesome" 但<strong>还没到</strong>。

</div>

</div>

---
layout: two-cols
---

# Probabilistic: sub-agent

<div class="text-sm opacity-70 mb-3">最重要的一类 probabilistic context：sub-agent 与 agent team。</div>

讲者的关键观察：sub-agent <strong>不继承</strong> default agent 的：
- Anthropic 给 Claude Code 的系统指令
- CLAUDE.md 文件
- 你建起来的 memory

默认会继承的只有：<strong>model 和 MCPs</strong>，而且这两个也都能改。

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 text-sm">
所以 sub-agent 的本质是 <strong>"clean slate per job"</strong> —— 给一个非编程任务（比如生成发票）派一个干净的 agent，比让默认编程 agent 兼职做要好得多。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sub-agent.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Probabilistic: skills

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### Skill 不是黑魔法
- 最朴素的 skill = 一个 markdown 文件 + 一个 slash command
- 进阶：里头可以装脚本、装别的 agent

讲者举例：让 skill 去调一个 Gemini agent 做 native video 分析 —— Claude 自己不擅长视频，那就把 skill 当 "外援接口"。

</div>

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">

### "Skill to make skills"
他工作流的关键：聊到一个有意思的发现，<strong>立刻让 Claude 把它存成 skill</strong>。

以前他存 markdown 散落在各处。"和数据库说再见" 之后，技能就是可复用、可发现的。

Anthropic 自己也提供 "make-skill skill"。

</div>

</div>

---

# 200 个 skill 怎么办

<div class="text-sm opacity-70 mt-4">
skill 多了之后会撞到一个真实问题：每个 skill 的 description 都要让 LLM 看到才能选，<strong>200 个 skill 就是 200 段 description 都塞进 context</strong>。
</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-40">

### deferred tools
Claude Code 的一个 flag。打开之后，skill 与 MCP 的描述<strong>按需加载</strong>，不再开局全注入 —— context 直接省下一大块。

</div>

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">

### 但 trade-off 存在
你可以压缩 description 来省 token，<strong>代价是 LLM 选错的概率上升</strong>。

讲者说：让 LLM 替你<em>选</em> —— 比让它替你<em>做</em> —— 反而是 AI 未来更重要的用法。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 italic">
"You are not going to think about 200 different skills when you are in a process —— there's just no way that a human will be able to choose from so many options. So you need the LLM to help you choose."
</div>

---

# Human: 读 [bleep] 文档

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

讲者反复回到这个点：在 agent 普及的时代，<strong>读文档比以前更重要</strong>，不是不重要。

他原话用了一个不太印刷的版本 —— "read the [bleep] manuals" —— 但意思是认真的：

- 不是要把整本 Anthropic 文档背下来
- 是要知道<strong>什么是可能的</strong>
- 文档给你 "ideas about what is possible"
- 有 idea 才知道往哪儿配 skill / hook / agent

</div>

<div class="p-6 bg-blue-50 border-l-4 border-blue-500">

<div class="text-base italic mb-3">
"What you need to have is ideas, and you need to sort of have a feeling what is possible."
</div>

<div class="text-sm opacity-70 mt-4">
模型每周升级一次（讲者讲这个 talk 时 Opus 4.7 刚出，"highly opinionated, really does as you say"），文档跟着变。<strong>不读文档，等于自愿放弃可控性。</strong>
</div>

</div>

</div>

---
layout: two-cols
---

# 大脑作类比

<div class="text-sm opacity-70 mb-3">
讲者特意先打预防针：<strong>"I am not standing here anthropomorphizing anything"</strong>。
</div>

这不是 "LLM = 脑子" 的浪漫话术。<br/>
是借大脑结构来<strong>抽象掉一个太复杂的系统</strong>。

- **Working memory** ≈ context window，容量 7±2
- **Hippocampus** ≈ 把短期变长期的中介
- **Long-term memory** ≈ 你的 markdown wiki / 模型参数

一个被忽视的事实：<strong>memory 在被取出来的时候会被改写</strong>。所以 "查一下笔记" 这个动作本身就不中性。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./brain-memory.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 知识不在真空里生长

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">
"knowledge does not get embedded in a vacuum. So you can only see things when you know things."
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 讲者举的例子
带两岁的女儿走进同一个房间，她看到的<strong>不是同一个世界</strong> —— 物理实景一样，但她的 priors 不同，被注意到的东西完全不同。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 对 agent 也一样
你必须先给 agent <strong>"a mental model of the world it's operating in"</strong>。

否则它就算扫到了关键信息，也不会知道那是关键 —— 它不知道自己在找什么。

</div>

</div>

---
layout: two-cols
---

# Karpathy 的建议：markdown 当 memory

<div class="text-sm opacity-70 mb-3">
讲者点名引用了 Andrej Karpathy 几周前的一个建议（YouTube 自动字幕把名字打成了 "Kapati"）：
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 italic mb-3">
做 agent 的工程师，<strong>把 memory storage 当作一堆 markdown 文件就够了</strong> —— 不用上 RAG。
</div>

为什么这个建议有意思：

- RAG 是个好方案，但 "a lot of moving parts"
- 你研究过的论文、读过的文档，<strong>反正都是文本</strong>
- 一个 wiki + 一个 index，<em>对人也好用</em>

讲者说他用 Obsidian 可视化，看到所有 note 之间的连线 —— "super easy".

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./wiki-system.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 他在 Karpathy 之上加的东西

<div class="text-sm opacity-70 mb-4">
Karpathy 的建议到 "markdown 文件 + index" 就停了。讲者继续往下做：
</div>

<div class="grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### hot.md
顶层一个文件，<strong>每次有新信息处理</strong>都被更新。是当前 "热点" 的快照。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 重要度 score
每条 note 都有一个数值 —— 表示 "这条多大可能性还属于这套 corpus"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Ebbinghaus 衰减
14 天 / 30 天没被用到的 note 会被降分。同主题的新 note 进来则会把<strong>这个主题</strong>的所有 note 提分。

</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500">

### 关键的设计选择：保留原始文件 + 处理后的摘要 + 抽取出的概念
讲者承认这<strong>token 很重</strong>，但他坚持：每一篇论文都<em>整篇</em>地让 agent 读 —— 切片会丢上下文。

</div>

---

# Observer pattern + tmux

<div class="text-sm opacity-70 mt-4">
讲者最近在玩的另一个 pattern：<strong>另开一个终端 session 当观察者</strong>。
</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### 数据本身就在
Claude Code 的 session 是<strong>本地的 JSONL 文件</strong>。另一个进程要读它易如反掌。

通过 tmux（讲者口误说成 "Tumix" / "Timox"，是同一回事）让两个终端互发消息。

</div>

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-40">

### Observer 能做什么
- 看到主 agent 正搜某个东西、而 wiki 里其实已有 → 推一条消息进去
- 看到主 agent 学到新东西 → 把它写回 wiki
- 看到模型升级前后的<em>语气差异</em> → 自动调整

</div>

</div>

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500 text-sm">
他用的还是 <strong>"the most important use of AI is offloading the things we have to make choices about"</strong> —— 让 LLM 替我决定 "这条信息要不要回头查"，是节省人脑的最关键场景。
</div>

---
layout: two-cols
---

# 实测：Default vs Configured

<div class="text-sm opacity-70 mb-3">
讲者现场放了一个对比 demo。
</div>

**任务**：从零做一个 cellular automata visualization。

**两边都是**：Opus 4.7、同样的 CLAUDE.md、同样的 skills、同样的 sub-agents。

**唯一区别**：configured 版本带一个事先填好的 wiki（他花了一小时研究 + 读论文 + 喂进数据库）。

**Hard 约束**：5 分钟硬性 timer，每 30 秒 hook 一次提醒 "hurry up"。

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 text-sm">
带 wiki 的那个直接 fetch 概念建图。<br/>
默认版本只能<strong>靠 parametric memory 或临时研究</strong> —— 时间用完了还在搜资料。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./demo-runners.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一个被低估的产物：serendipity

<div class="mt-6 p-6 text-base italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">
"the most beautiful things are the unexpected things —— the sort of serendipity, the findings that actually update the priors not only confirm the priors."
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 标准 research agent
你派它去 arxiv 抓某个主题的论文 —— 它会聚焦在那个主题，<strong>这是它该做的</strong>。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 把 5% 注入，95% 存起来
但你还可以让<strong>另一批指令不同的 agent</strong> 处理那些"顺手挖到的"论文 —— 95% 不直接进 context，先沉到 wiki 里。

未来某次任务它们就成了你 priors 之外的<em>意外</em>。

</div>

</div>

---

# 什么时候 <em>不</em> 该用 LLM

<div class="text-sm opacity-70 mb-4">
讲者花了几分钟讲他认为<strong>不该</strong>给 LLM 的活 —— 这部分他口气最坚决：
</div>

<div class="mt-4 p-5 text-lg italic border-l-4 border-red-500 bg-red-50 bg-opacity-30">
"if you are not able to say that if a model produces an output, if that output is good or bad, then you probably shouldn't give the task to an LLM."
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 不该让 LLM 写 essay
你<strong>说不清</strong>什么样的 essay 是 "好" 的。<br/>
拼写检查可以，主体写作不行。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 不该让 LLM 做客服
理由很经济学 —— 任何<strong>免费、人人可得</strong>的东西就<em>失去价值</em>了。<br/>
客服的一半意义是品牌感知，不只是解决问题。

</div>

</div>

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">
判别标准简单粗暴：<strong>你能不能事先说出 "好 / 坏" 的定义？</strong> 说不出 → 别上 LLM。
</div>

---

# 一个"非常适合 LLM"的活：从图纸里抽数据

<div class="text-sm opacity-70 mb-4">
讲者整场分享的实战环节就围绕这件事 —— 这也是他个人入行的起点：
</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### 技术图纸 = 有损 2D 投影
工业里到处都是技术图纸：一个机械零件的 3D 实物 → 2D 视图。<strong>你看到的是有损版本</strong>，但里面其实塞满了可被还原的信息。

</div>

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">

### 为什么这个适合 LLM
- 任务很<strong>难</strong>（多视图推断、行业知识）
- 但答案是否对<strong>可被验证</strong>（有真值）
- 完美符合 "说得清好坏 → 上 LLM"

</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">
讲者把自己怎么进 AI 圈的故事接在这儿：开餐厅时被会计搞砸，被法院判要倒着补三年的账 —— "that is the point where I started learning about structured extraction." 财务表也好、机械图也好，<em>规则是一样的</em>：抽得出，验得了。
</div>

---

# 情绪向量的小心使用

<div class="text-sm opacity-70 mb-4">
观众问到 Anthropic 的 emotion vectors 论文 —— 讲者答得很小心：
</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### 论文说的事
你给 LLM 一个高情绪冲击的故事，研究者能在内部测到 <strong>"emotion vectors" 被激活</strong>。

这些 vector 是<strong>从人类语料中学来的模式</strong>，不是真情绪。

</div>

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

### 讲者的警告
"you can use sort of reverse psychology to work with it, but it doesn't mean it's actually true."

可以借这个机制写更有效的 prompt，但<strong>不要在街上公开讲</strong>—— 大多数人会把"模型会有反应"听成"模型有感受"。

</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
"I am not standing here anthropomorphizing anything" —— 但允许借大脑、借情绪当<em>类比</em>，因为模型本来就是被人类语料训出来的。
</div>

---

# Stateless 和有状态的差别

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### Raw API call
讲者强调：<strong>"a raw API call is stateless"</strong>。

你打过去就只有这一发，没有任何隐含 context。

</div>

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">

### Claude Code 不是 stateless
"cloud code does not come stateless." <em>(原字幕，意指 Claude Code)</em>

打开一个 terminal 就<strong>已经</strong>预装了系统指令、CLAUDE.md 层级、可能还有 skill 描述、memory、tools。

</div>

</div>

<div class="mt-6 p-5 bg-purple-50 border-l-4 border-purple-500 text-sm">

### 这个区别为什么重要
所有 "怎么管 context" 的讨论，<strong>只有在有状态的封装里才存在</strong>。<br/>
如果你直接用 API，你就是 statelessness 的全部责任人。<br/>
如果你用 Claude Code，你是在<strong>调一个已经装满东西的环境</strong> —— 别假装它是空的。

</div>

---

# 它们在 runtime 解决问题

<div class="mt-4 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">
"the whole thing with Claude and AI agents is that they can solve problems at runtime. It's not always your production solution, but it's definitely something you can learn a lot from."
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 老世界
你写 Pydantic model + rich description<br/>
→ 你<strong>已经</strong>知道要抽什么<br/>
→ 才能写出 schema<br/>
→ 这是 script 的活

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Agent 的新能力
未知 schema 也能干 ——<br/>
你给一张你从没见过领域的图，<strong>agent 在 runtime 自己定义 schema</strong>。<br/>
对生产未必稳，<strong>但学到的东西巨多</strong>。

</div>

</div>

---

# 不要只看一个"超级模型"

<div class="text-sm opacity-70 mb-4">
讲者反复纠正一种主流叙事 —— 主流报刊把 AI 想成 "一个全能模型"。他认为这是误判：
</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-40">

### "Magic thinking"
"people look at it with a sort of like magic thinking" —— 总在等那个万能模型。

但你<strong>不需要</strong>每个模型都是全能。

</div>

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### 真实路径
- 很多<strong>不那么全能</strong>的模型
- 各做小事
- 系统工程把它们串起来
- 有办法判断每个输出对不对

→ 加在一起一样有大影响力。

</div>

</div>

<div class="mt-5 text-sm opacity-70">
这也是为什么他不停在 Claude 之外接 Codex / Gemini —— 把不同模型当作<strong>不同 sub-agent</strong>，谁擅长什么用谁。
</div>

---

# 把 Claude Code 当业务操作系统

<div class="text-sm opacity-70 mb-4">
讲者讲了一段挺个人的话：<strong>这件事已经不是 "写代码" 了</strong>：
</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### Quote 生成
从客户通话录音里<strong>自动起报价单</strong>。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 客户对接
生成发票草稿、回邮件草稿。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 研究 & ideation
研究新主题、写 talk、做对比实验（比如这场分享）。

</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500">

### 一个具体的提醒
他强调：千万别让<strong>默认的 coding agent 做非 coding 的事</strong>。<br/>
"sending a coding agent on a non-coding job —— probably works, but probably not optimal."

正确做法是：对每一类业务任务<strong>设计一个 sub-agent</strong>，给它自己的 system message、skill 子集、模型选择。

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这场分享里最值得记住的几句，每一条都能在原始字幕里检索：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"focus on the things that you can change, and that is essentially this little window."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 context engineering 的核心动机</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"don't even think about going over 25% of context usage" / "less is always more when it comes to context."
<div class="text-xs opacity-60 mt-1 not-italic">— 25% 的 rule of thumb</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"knowledge does not get embedded in a vacuum. You can only see things when you know things."
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么 agent 需要先有 mental model</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"if you are not able to say that if a model produces an output, if that output is good or bad, then you probably shouldn't give the task to an LLM."
<div class="text-xs opacity-60 mt-1 not-italic">— 何时不该用 LLM</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"the most beautiful things are the unexpected things —— the serendipity, the findings that actually update the priors not only confirm the priors."
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么把 95% 存回 wiki，比只注入 5% 更有价值</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"the whole thing with Claude and AI agents is that they can solve problems at runtime."
<div class="text-xs opacity-60 mt-1 not-italic">— Agent 与 script 的本质差别</div>
</div>

</div>

---
layout: end
---

# Thank you for your attention.

## 你的 attention，是有价格的

<div class="mt-10 text-sm opacity-70 italic">
"As we all learned —— that comes at a price."<br/>
—— 讲者在演讲结尾对全场说的最后一句
</div>
