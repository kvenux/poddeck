---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '140. 对姚顺宇的4小时访谈：请允许我小疯一下！在Anthropic和Gemini训模型、技术预测、英雄主义已过去'
info: |
  张小珺·语言即世界 第 140 期对谈：
  Anthropic / Google DeepMind 研究科学家姚顺宇，
  讲在 Anthropic 和 Gemini 训模型的亲历、技术判断、
  以及"AI 个人英雄主义时代已经过去了"的几句小疯言论。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 姚顺宇 · 请允许我小疯一下

<div class="text-xl opacity-80 mt-2">张小珺 · 语言即世界 · EP.140</div>

<div class="text-lg opacity-60 mt-6">
在 Anthropic 和 Gemini 训模型 · 技术预测 · 英雄主义已过去
</div>

<div class="mt-10 text-sm opacity-60">
~ 4h 访谈节选 · 录制于 2026-03
</div>

<div class="mt-3 text-xs opacity-50">
姚顺宇 · 研究科学家 · 前 Anthropic · 现 Google DeepMind (Gemini)
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 第一手亲历: 两家 lab

物理博士毕业一年，先后参与 Claude 3.7 / 4.5 与 Gemini 3 的训练过程。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Anthropic vs Gemini 对照

startup top-down 押注 vs 大公司 bottom-up 工程化，两种打法都能 work，但路径完全不同。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 技术口径上的直白判断

"未来的 6-12 个月 AI 就会自己做实验"。预训练 / 后训练都没到平台期，AI 本质上是简单的。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### "AI 英雄主义已经过去了"

跳变期的 idea 才需要 hero，进 scale 期之后只是"撞到机会"。现在炒作个人都有"贴金嫌疑"。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 对"老登"非常直接

不是 AI 出身的好处: 没什么导师、没什么旧友，"想喷谁喷谁"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Long horizon 是下一个 bet

train with finite, but use as infinite —— 用有限上下文训，使用时像无限上下文。

</div>

</div>

---

# 嘉宾的视角

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 姚顺宇 (Yao Shunyu)

<div class="text-sm opacity-80 mt-2 leading-relaxed">
研究科学家 · 现 <strong>Google DeepMind (Gemini)</strong> · 前 <strong>Anthropic</strong>
</div>

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
本科<strong>清华</strong>凝态理论 → 博士<strong>斯坦福</strong>理论高能物理 → <strong>伯克利</strong> postdoc 两周 → <strong>Anthropic</strong> 一年 → 2025 年 10 月加入 <strong>Gemini</strong>。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
研究背景: <strong>非厄米系统、量子物理、高能物理</strong>。人生奋斗姿态: "总想挑战一些自己不太会的事"。
</div>

</div>

</div>

<div>

### 这一期的取景框

<div class="text-xs opacity-70 mt-2 mb-3">
节目导语原话:
</div>

<div class="p-4 italic text-sm border-l-4 border-purple-400 bg-purple-50 bg-opacity-30 rounded">
"过去两年，他先后在 Anthropic 和 Google DeepMind 出任研究科学家，参与了 Claude 3.7、4.5、Gemini 3 等关键模型的开发过程。"
</div>

<div class="mt-4 text-xs opacity-60">
访谈关键词:<br/>
跨界 · 直接 · 集体主义 · 老登
</div>

</div>

</div>

---

# 两个姚顺宇 / 姚顺雨

<div class="text-sm opacity-70 mb-4">硅谷 AI 圈最让人混淆的一组同名人:</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 姚顺雨 (S<strong>Y</strong>U)
腾讯首席 AI 科学家 · 前 OpenAI 研究员

<div class="mt-3 space-y-1 text-sm">
<div>本科 清华 <strong>姚班</strong> (CS)</div>
<div>博士 普林斯顿</div>
<div>2025 OpenAI → 腾讯</div>
</div>

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 姚顺宇 (S<strong>YU</strong>)
今天的嘉宾 · 前 Anthropic · 现 Gemini

<div class="mt-3 space-y-1 text-sm">
<div>本科 清华 <strong>机科班</strong> (物理)</div>
<div>博士 斯坦福</div>
<div>2025 Anthropic → Gemini</div>
</div>

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-400 bg-purple-50 bg-opacity-30 rounded text-sm">
"在普世世界，觉得斯坦福应该是学计算机的人该去的地方，普林斯顿是学物理的人该去的地方。但我俩正好反过来。"
</div>

---

# 5 年读博，买了一个大教训

<div class="text-sm opacity-70 mb-4">高能理论物理足够难，但有个致命问题:</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 实验追不上

高能理论已经发展到"实验完全追不上的阶段"，没有数据约束。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 没有客观标准

完全没有实验、没有客观标准时，"肯定不会只有一个自洽框架出现"。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 看老登脸色

"谁做的好、谁做的不好，就依赖于领域内一些老登的主观判断。"

</div>

</div>

<div class="mt-6 p-5 italic text-lg border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">
"人这一辈子也没多长，为什么要把自己的时间浪费在伺候老登身上？"
</div>

<div class="mt-4 text-xs opacity-70">
教训不是"不要读物理"，而是: 要做有客观评价标准、对世界能产生影响的事 —— 这条评价标准最后把他推到了 AI。
</div>

---
layout: two-cols
---

# AI ≈ 18 世纪物理学

<div class="text-sm opacity-70 mt-2 mb-4">嘉宾自己反复用的类比 —— 不是 21 世纪，是 18 世纪:</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"那个时代理论和实验<strong>不分家</strong>"，没有理论物理学家 / 实验物理学家的分工。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
做 AI 也是: 有想法 → 训个模型 → 数值上验证一下，这条链条很短。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
理解不了微观机制不要紧，<strong>Scaling Law</strong> 现在的位置 ≈ 当年热力学第一 / 第二定律 —— 经验规律，但能用。
</div>

</div>

<div class="mt-4 text-xs opacity-60">
"智能涌现，这个话本身就不太科学，自然也没法用科学的话来表达一个不科学的事。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./physics-vs-ai.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 加入 Anthropic: 大 team 只有 10 个人

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### 2024 年 9-10 月

公司只有 700-800 人。<strong>Horizon</strong> 团队 (强化学习总组) "才只有 10 个人，或者 11 个人"。

</div>

<div class="p-4 mt-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

### 入职契机

前同事 (理论物理人脉) 找他，第一任 manager 也是理论物理出身。当时 o1 还没发布，大家都不太知道怎么做大规模 RL。

</div>

<div class="p-4 mt-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 准备方式

"我能找到的那些课，自己能学的学了一遍。手搓了 <strong>Andrej Karpathy 的 nanoGPT</strong>，就去面了。"

</div>

</div>

<div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

### 第一印象

"执行力非常强 · 比较 top down · 大家不会藏着掖着 · 像一个小作坊"

</div>

<div class="p-4 mt-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

### 离开时

接近 <strong>2000 人</strong>，"扩了一倍多"。文化开始受到外来的冲击。

</div>

<div class="mt-3 p-3 italic border-l-4 border-purple-400 bg-purple-50 bg-opacity-30 rounded text-xs">
"我可能是踩在了它还是个小公司的尾巴。"
</div>

</div>

</div>

---

# Coding bet 是怎么定下来的

<div class="text-sm opacity-70 mb-4">不是天才战略，是"看到了一个市场信号 + 内部某个团队做了某个事"。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 外部信号

<div class="mt-2 italic text-sm">
"Claude 3 放了之后 —— Twitter 上有很多人在讨论说: <strong>Claude 3 好像写 code 比 GPT-4 强啊。</strong>"
</div>

<div class="mt-2 text-xs opacity-70">那个年代 GPT-4 是 gap 很大的存在，能有一件事比 GPT-4 强就很厉害。</div>

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 内部信号

<div class="mt-2 text-sm">
"是确实有某一个团队做了某个事情。" —— 嘉宾把具体技术藏在 NDA 里。
</div>

<div class="mt-2 text-xs opacity-70">最开始可能是自下而上的，但后来就变成了一个自上而下的事。</div>

</div>

</div>

<div class="mt-5 grid grid-cols-3 gap-3 text-xs">

<div class="p-3 bg-green-50 border border-green-200 rounded text-center">
<div class="text-2xl font-bold text-green-600">3.5</div>
<div class="opacity-70 mt-1">看到苗头</div>
</div>

<div class="p-3 bg-green-50 border border-green-200 rounded text-center">
<div class="text-2xl font-bold text-green-600">3.5<span class="text-base">new</span></div>
<div class="opacity-70 mt-1">"已经看到了 coding 的迹象"</div>
</div>

<div class="p-3 bg-green-50 border border-green-200 rounded text-center">
<div class="text-2xl font-bold text-green-600">3.7</div>
<div class="opacity-70 mt-1">后训练的分水岭</div>
</div>

</div>

<div class="mt-3 text-xs opacity-60">
<strong>作者注</strong>: 嘉宾原话 "实际的产品时间线，其实是 —— 3.5、3.5new、3.7" —— 中间没有 3.6，是外界为了区分自己起的名。
</div>

---

# 为什么是 top-down: 技术 1 号位 = cofounder

<div class="text-sm opacity-70 mb-4">嘉宾给出的关键解释:</div>

<div class="p-5 italic text-lg border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">
"实行 top down 有一个很难的点，就是<strong>你做技术的决策人，必须也得是公司的决策人</strong>。"
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 技术上得能服众

下面的研究员才会信你做这个事。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 决策上得能负责

你得是公司的决策人，能为公司负这个责任。

</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-xs">

<div class="p-3 bg-blue-50 border border-blue-200 rounded">
<strong>Jared Kaplan</strong> + <strong>Sam McCandlish</strong>: 两位 cofounder，都是 Scaling Law / GPT-3 论文合著者。
</div>

<div class="p-3 bg-orange-50 border border-orange-200 rounded">
"OpenAI 就干不了。Ilya 在的时候<strong>有可能可以</strong>，后来他失去了这个做决策的能力。"
</div>

<div class="p-3 bg-purple-50 border border-purple-200 rounded">
"cofounding team，<strong>没有一个人离开公司</strong>。那是一群真正一起打过仗的人。"
</div>

</div>

---

# 后训练的范式: 找环境 vs 找算法

<div class="text-sm opacity-70 mb-4">嘉宾对"OpenAI 草莓时刻"的总结，是关于<strong>环境</strong>而不是关于<strong>算法</strong>:</div>

<div class="p-5 italic text-lg border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">
"就是得找到合适的环境，这个环境<strong>回馈信号足够清晰</strong>，本身也是一个<strong>很强的数据源</strong>。在这个上面能让训练非常稳定，这事就能做成。"
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### Coding 为什么是好抽象

回归信号清晰 + 数据充分 + 工具/环境的统一抽象。"很难在别的场景下找到能同时有这两个特质的使用工具场景。"

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 3 家 lab 都到了

"OpenAI / Anthropic / DeepSeek 都意识到了这个事该怎么去 scale up"。<br/>大方向同 —— 但<strong>具体实现差别很大</strong>。

</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 双驱动

<strong>Coding 既是抽象，也是飞轮</strong>: 模型 coding 强了, 研究效率翻倍, 反过来又推 coding。Anthropic 一直在讲的故事。

</div>

---

# 技术 tips? "实际又没啥用的事儿"

<div class="text-sm opacity-70 mb-4">关于"大家很想知道 Anthropic / Gemini 怎么训的"，嘉宾给了一个反直觉答案:</div>

<div class="p-5 italic text-lg border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded">
"技术的 tips，是一个<strong>大家很愿意听，公司又不让你说，但实际又没啥用</strong>的事儿。"
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div>

### 为什么没用

"很多算法设计<strong>并不独立于算法</strong>，它非常强的依赖于你的基础设施。"

举的例子: sampler 和 trainer 的差异——

<div class="mt-2 p-3 bg-red-50 border-l-4 border-red-300 rounded text-xs">
有些公司 sampler / trainer 的差异非常大 → 算法的最大部分就是稳定训练；<br/>
有些公司 infra 好，差异小 → 可以把精力放在效果上。
</div>

</div>

<div>

### 嘉宾的姿态

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic mb-2">
"虽然我不能公开去谈，但是，把简单的事儿做的比谁都干净，是最关键的。"
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"<strong>Idea is cheap。想法是便宜的。</strong>很多想法，显然所有人都知道。难的是怎么把它变成一个一个小的、可实现的步骤，做出来。"
</div>

</div>

</div>

---

# Anthropic 的 AI safety: 一个"幼稚"的自我说服

<div class="text-sm opacity-70 mb-4">嘉宾对老东家最直接的批评 —— 不是恶意，是看穿:</div>

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Anthropic 的自我解释

<div class="mt-2 italic text-sm">
"我首先得拥有一个最前沿的模型，才有话语权来推进我的 AI 安全。"
</div>

<div class="mt-2 text-xs opacity-70">我要做这个世界上最好的模型，大家不得不听我的，来推进我的安全政策。</div>

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 嘉宾的判断

<div class="mt-2 italic text-sm">
"但从我个人角度，<strong>这个想法非常幼稚</strong>。这个事现在看来，是不会发生的。"
</div>

<div class="mt-2 text-xs opacity-70">更可能发生的是: 大家都有前沿模型，而你没办法阻止任何事。</div>

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 嘉宾的替代框架: Multiparty Control

<div class="mt-2 text-sm">
"核武器最终受到控制的方法，就是 <strong>Multiparty Control</strong> —— 大家有很多个有核武器的国家，互相都有毁灭对方的能力。通过这样一种制衡才稳定住。"
</div>

<div class="mt-2 text-xs opacity-60">
<strong>作者注</strong>: 这是嘉宾用核武器类比 AI 治理 —— 不是寄希望"一家公司制定法律"，而是制衡。
</div>

</div>

---

# 离开 Anthropic: 文化、立场、想学新东西

<div class="text-sm opacity-70 mb-4">酝酿了一个多月，三个层次的原因:</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 小原因

"我不是太特别认同 <strong>Dario 反华</strong>这个事。"

<div class="text-xs opacity-70 mt-2">"他个人做什么样的观点都无所谓。但作为一个公司 CEO，把这个观点推到这么极端的地步，是一个非常情绪化的体现。"</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 中等原因

公司从 ~800 → ~2000 人，文化经历"比较混沌的阶段"。"从外面来了一些人，跟本来的文化有些冲突。"

<div class="text-xs opacity-70 mt-2">"我不太喜欢在这个领域里面说很多话的人。"</div>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 大原因

想学不一样的事: 多模态生成、底层工程基础设施 —— "Anthropic 有很多不做的事，想学没地儿学"。

<div class="text-xs opacity-70 mt-2">没有更着重去考虑领导一个项目。优先去学习。</div>

</div>

</div>

<div class="mt-5 p-4 italic border-l-4 border-purple-400 bg-purple-50 bg-opacity-30 rounded text-sm">
"我离开的时候，对这公司挺悲观的。但后来显然是我过度悲观了。"
<div class="text-xs opacity-60 not-italic mt-2">悲观的根据: "Anthropic 主要的收入来源都是 API，就是卖 Token。这是个差生意。Eventually 就是要打价格战。" 后来 Claude Code / Cowork 让他改观。</div>
</div>

---

# AI 本质是简单的

<div class="text-sm opacity-70 mb-4">嘉宾的一个 statement，"可对可错"，但他自己很坚定:</div>

<div class="p-5 italic text-xl border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">
"它本质上简单的点在于，<strong>它能做实验</strong>。"
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 跟物理的区别

"那个东西你<strong>没有能标下的实验数据</strong>，就是理解不了那个能标下的理论。但 AI 不被这个所 bound —— 你理解不了没关系，也可以往前发展。"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 没碰壁的原因

"首先很多东西你都能试，其次<strong>不是大家已经想空了脑袋</strong>，更多的是有<strong>太多想法</strong>，得一个个试，花时间。"

</div>

</div>

<div class="mt-6 p-5 border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

### 一个具体预测

<div class="italic text-lg mt-1">
"<strong>未来的 6-12 个月，AI 就会自己做实验。</strong>"
</div>

<div class="mt-3 text-xs opacity-70">
完整的链条 = 写代码 → 跑实验 → 看结果 → 分析结果 → 提出假设 → 设计新代码 → 跑新实验。<br/>
"这条链条目前还没有完整。但这条链条下一步会慢慢变得完整的。"
</div>

</div>

---
layout: two-cols
---

# 集体主义时代

<div class="text-sm opacity-70 mt-2 mb-4">嘉宾给出的两段论:</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>跳变期</strong>: 找到那个 idea 的人 (或小集体) 才是英雄。Hinton 在大家觉得不重要时一直做; Transformer 的八个作者也算"英雄集体"。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>scale 期 (今天)</strong>: 很多想法 "trivial、愚蠢，谁都能想，谁都能干，只是你运气好撞到机会干了"。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
所以嘉宾对自己模型贡献的表述总是: "我自己对那个事没那么重要，更多的是我很幸运。"
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
"现在大家都是冲浪的人，本质上是<strong>那个浪</strong>，而不是<strong>那个冲浪的人</strong>。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hero-vs-collective.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Anthropic vs Gemini

<div class="text-sm opacity-70 mt-2 mb-4">同一个嘉宾, 两种打法都见过:</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>startup</strong>: 重要的是 make bet, 赌就意味着风险, 所以 top down 有优势。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>big-co</strong>: 想方方面面都有储备, 任何一个事成了都能跟上。bottom up + 框架引导。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
Gemini 的预训练现在"非常非常可控" —— "比 Anthropic 来说，还是更自下而上了一些"。后训练 still bottom-up。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
对应不同的 selector: 想要明确 scope 的, Google 很差; 想要研究和探索自由的, "这个世界上可能<strong>找不到第二个比 Gemini 更强的地方</strong>"。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./anthropic-vs-google.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Gemini 的两拳

<div class="text-sm opacity-70 mt-2 mb-4">嘉宾对 Gemini 起势的事后归因，两件事必须连着看:</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>Nano Banana</strong>: 把市场打爆款 —— "大量的人去下载了 Gemini 的 APP"。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Gemini 3</strong>: "紧接着放，把这个部分留下来了"。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
没有第一拳，<strong>市占率 &lt; 10%</strong> 时模型再好"传播就是太慢了"。两拳合起来，嘉宾估"市占可能在 <strong>20%</strong> 左右"。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
"没有 Gemini 打这么一拳，OpenAI 的位置很爽。" —— 现在难受的是 OpenAI 了。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./gemini-two-punches.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# OpenAI 救了 Google 一命

<div class="text-sm opacity-70 mb-4">嘉宾整段最反直觉的判断之一:</div>

<div class="p-5 italic text-xl border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">
"从某种意义上来说，<strong>OpenAI 是救了 Google 一命</strong>。"
</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 反事实推演

如果出来一家公司不仅做了 chatbot, 还一路高歌猛进真的把搜索吃掉, "<strong>那就很难受了</strong>"。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 实际发生的

OpenAI 把这件事做了，让 Google 意识到很重要; 但又没做到极致，没把 search 干掉 —— 给了 Google 反击窗口。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 为什么 chatbot 没吃掉搜索

"搜索里还有一些非常愚蠢的场景, 你<strong>有一个特别简单的事，根本不想浪费时间在聊天机器人身上</strong>。"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

### Google 的护城河被嘉宾点破

"Google 特别擅长的一件事是 —— 找到一个极为简单的产品形态，大家都长一个样，它就<strong>疯狂给你卷技术</strong>，你就卷不过它。搜索引擎就是这样。"

</div>

---
layout: two-cols
---

# 现在的 bet: ML coding + long horizon

<div class="text-sm opacity-70 mt-2 mb-4">嘉宾自己在 Gemini 做的两件事，他说"有点相关、有点互补":</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>ML coding</strong>: 实现"完整的 AI 自己训练自己的历程"。 选 data / 选回馈信号 / 处理 infra 挑战。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>Long horizon</strong>: 让模型完成更长、更跨越的任务 —— 一次完整研究，而不是一次代码补全。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
两者一起构成嘉宾说的 <strong>T 字形</strong>: agentic coding 是节点; 横向延展到 ML coding / CS research; 纵向延展到更长的时长尺度。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
"基于你当下的认知，一个关键的重要的 bet 是什么？" —— "long horizon. long horizon."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./t-shape.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# train with finite, but use as infinite

<div class="text-sm opacity-70 mt-2 mb-4">嘉宾的 long horizon 哲学，用一句口号概括:</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
不是把<strong>训练长度</strong>一直往上推 —— "并不是单个训练语段的长度一直变长，那不是很现实的方案"。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
而是: <strong>有限的 context, 做更长的工作</strong>。人就是这个样子 —— context 很短, 但能选择性遗忘、选择性检索。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
"你现在问我昨天晚上吃什么，我是一点也想不起来了。因为它对我现在这个场景来说不关键。<strong>我选择把它忘掉。</strong>"
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
方向选择: pre-train 派 (sparse attention 等) 还是 post-train 派 (context management)。嘉宾自己在 <strong>post-train</strong>。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./finite-context.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 24 小时面试题: 衡量"靠谱"

<div class="text-sm opacity-70 mb-4">嘉宾自己设计的一道面试题。AI 时代衡量人的关键不再是"代码写得好":</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### 题目

"24 小时之内, 完成一个强化学习的项目, 从 0 到 1"。资源给定, 模型 / 数据 / 算法自选。<br/>24 小时后, 跟出题人有一个小时讨论。

</div>

<div class="p-4 mt-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

### 考点 1

"绝大多数人都不用自己写代码。更重要的是, 他能不能<strong>有效地利用 AI</strong>。"

</div>

<div class="p-4 mt-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

### 陷阱

"如果你全盘让 AI 做了, 但你最后没有试图好好理解 AI 为你做了什么, 在一个小时的讨论里面会<strong>露馅儿</strong>。"

</div>

</div>

<div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 考点 2

"有没有真的和 AI 形成了<strong>协作</strong>, 还是说就全权扔给他?"

</div>

<div class="p-4 mt-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

### 暗设计

"24 小时, 就是为了看这个人有多看重这个机会。" 撑得住的，对机会就够重视。

</div>

<div class="mt-5 p-3 italic border-l-4 border-purple-400 bg-purple-50 bg-opacity-30 rounded text-sm">
"AI 这个事, 本来也不太需要脑子。这个行业最重要的特质就是<strong>靠谱, 就是做事细, 对自己做的事负责任</strong>。"
</div>

</div>

</div>

---

# 给后来者: 末班车已经发车了

<div class="text-sm opacity-70 mb-4">嘉宾自评的入行时机，以及对更年轻者的判断:</div>

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">

### 关于"语言模型"这个赛道

<div class="italic mt-2">
"我觉得纯做语言模型，已经不是一个蓝海了。<strong>晚了，末班车已经发车了。我感觉我入行就是那个末班车啊。</strong>"
</div>

</div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 关于个人价值

"训练一个人, 虽然这事没那么难, 但你训练一个人是需要一个环境的。<strong>过去能撞到这个机会的人, 没有那么多</strong>。所以市场上比较稀缺。"

</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-xs">

<div class="p-3 bg-red-50 border border-red-200 rounded">

### 偶像

被问 AI 偶像时直接答 "没啥"。物理时代有: 比如导师 Douglas Stanford, 后来也拿诺奖的 Haldane。

</div>

<div class="p-3 bg-purple-50 border border-purple-200 rounded">

### 例外 (AI 英雄)

"<strong>Geoffrey Hinton</strong>, 在大家都觉得这事可有可无的时候, 一直在这个方向做。"

</div>

<div class="p-3 bg-green-50 border border-green-200 rounded">

### 影响 AI 的论文

"<strong>Sequence to Sequence</strong> · <strong>Scaling Law (Jared Kaplan 等)</strong>"

</div>

</div>

---

# 关于"老登": 直接发言的代价与收益

<div class="text-sm opacity-70 mb-4">嘉宾自己给出的、关于直接发言的方法论:</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### 不是 AI 出身的好处

"<strong>没有什么负担</strong>。没有哪个老登是你的亲属, 所以你觉得他傻, 他就是傻, 就可以直接说他傻。"

</div>

<div class="p-4 mt-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

### 为什么变得更直接

"过去可能也会比较直接，但是没有这么直接。但做了 AI 之后就更直接。<br/>一是<strong>没有束缚</strong>, 二是<strong>这个领域足够客观</strong>。"

</div>

</div>

<div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 边界

"只要你的观点是自洽的, <strong>不是说随便喷人</strong>, 你是有一套自己的理解。最终你在这个领域做的怎样, 是有客观评价标准的 —— 大家是会尊重你的。"

</div>

<div class="p-4 mt-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

### 老登 vs 德高望重

"人年纪大了会变成两种状态: <strong>德高望重</strong> (少指手画脚, 培养年轻人) · <strong>老登</strong> (自己也不懂, 还爱指手画脚)。"

</div>

</div>

</div>

<div class="mt-5 p-4 italic border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-30 rounded text-sm">
"直接表达自己的想法, 是一个<strong>短期一定会有人恨你, 但长期大家会欣赏</strong>的事情。"
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句:</div>

<div class="grid grid-cols-2 gap-3 text-xs">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"AI 个人英雄主义时代已经过去了，所以也没有什么英雄，有时候甚至觉得旧时代英雄有点蠢。"
<div class="text-xs opacity-60 mt-1 not-italic">— 对整代 AI 研究者地位的判断</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"现在大家都是冲浪的人，本质上是那个浪，而不是你那个冲浪的人。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于个人 vs 趋势</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"未来的 6-12 个月，AI 就会自己做实验。"
<div class="text-xs opacity-60 mt-1 not-italic">— 具体的、有 timeline 的技术预测</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"AI 这个事，本来也不太需要脑子⋯⋯这个行业最重要的特质，就是靠谱，就是做事细，对自己做的事情负责任。"
<div class="text-xs opacity-60 mt-1 not-italic">— 对 AI 研究"门槛"的祛魅</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"Idea is cheap。想法是便宜的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 对"在 Slack 上讲大道理"的吐槽</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"从某种意义上来说，OpenAI 是救了 Google 一命。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 chatbot 与搜索的反事实推演</div>
</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs">
"没有哪个老登是你的亲属，所以你觉得他傻，他就是傻，就可以直接说他傻。"
<div class="text-xs opacity-60 mt-1 not-italic">— 对"AI 行业说话不收敛"的最直接解释</div>
</div>

---
layout: end
---

# 是浪，不是冲浪的人。

<div class="mt-8 text-base opacity-70 italic">
"训练一个人，虽然这事没那么难，但你训练一个人是需要一个环境的。<br/>
过去能撞到这个机会的人，没有那么多。"
</div>

<div class="mt-8 text-xs opacity-50">
张小珺 · 语言即世界 · EP.140 · 姚顺宇 · 2026-05
</div>
