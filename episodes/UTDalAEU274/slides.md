---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '151. 17岁被2026年ICML收录论文的小少年：我bet开心！开心！开心！'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 17 岁，把好奇心训练成一篇 ICML 论文

<div class="text-xl opacity-80 mt-5">从零写 Transformer、200 次试验，到 AI 时代的意义感与开心</div>

<div class="mt-10 text-sm opacity-60">
张小珺 × 苏庭灏（Jonathan）<br/>
高中生 · 独立 AI 研究者 · 2026 年 8 月
</div>

<div class="mt-8 text-xs opacity-50">
约 70 分钟 · ICML 2026 Main Track
</div>

---

# 为什么这期值得看

<div class="text-sm opacity-70 mb-4">它同时回答两件事：一个高中生怎样真的开始研究，以及更强 AI 怎样改变年轻人的动力。</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 自学入口
20 小时视频、30 天读论文，如何沉淀成可用直觉？
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 实验密度
从世界最好小模型的野心，退到能快速验证的尺度。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 真实代价
算力、checkpoint、失败实验，研究并不只是灵光一现。
</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-left">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 教育突变
AI 节省时间，也把自驱力差异放得更大。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 意义危机
当机器可能做得更好，学习与职业还剩什么动力？
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 两个世界
韩国 ICML 与乡村支教之间，他选择暂时离开 AI。
</div>

</div>

---

# 起点不是论文，而是不相信自然语言能写程序

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-xs font-bold text-red-700">第一次冲击</div>

### 先觉得不可能
看到 OpenAI 团队用自然语言做小游戏，他的第一反应是程序不可能这样工作。
</div>

<div class="p-5 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-xs font-bold text-orange-700">好奇心接管</div>

### 再追问为什么
模型还能写短文和诗，打破了他对程序只能执行确定规则的旧印象。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs font-bold text-green-700">开始动手</div>

### 从课程走进代码
在线课程与从零构建 GPT 的系列视频，把惊讶变成了可操作的学习路径。
</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border border-blue-200 text-sm text-left">
<strong>作者概括：</strong>真正的起点，是原有世界模型被一个可见 demo 撞开了缺口。
</div>

---
layout: two-cols
---

# 自学的四次循环

<div class="space-y-3 text-left text-sm mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>看不懂也先跟写</strong><br/>代码跑起来，概念先留在脑中。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>用论文校准品味</strong><br/>比较哪些论文清楚、哪些论证让人不服。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>把想法装进小模型</strong><br/>缩小规模，换取更快的反馈频率。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>等待理解突然连上</strong><br/>半年到一年后，旧问题有时才真正变得清楚。
</div>

</div>

<div class="mt-4 text-xs opacity-60 text-left">本页为访谈学习经历的结构化概括。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./learning-loop.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 30 天每日一篇：练的不是记忆，是研究品味

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 输入纪律
每天读一篇论文并做笔记，让阅读从偶发兴趣变成固定训练。

<div class="mt-5 text-lg italic text-blue-900">“read a paper every day for 30 days.”</div>
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 判断能力
他开始区分：哪篇论文读起来舒服，哪篇数学更难但结构仍好，哪篇工作让他觉得自己可以做得更好。
</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">
<div class="p-3 rounded border border-gray-200"><strong>先问</strong><br/>作者到底解决什么问题？</div>
<div class="p-3 rounded border border-gray-200"><strong>再看</strong><br/>论证为何容易或困难？</div>
<div class="p-3 rounded border border-gray-200"><strong>最后想</strong><br/>我能否提出更好的实现？</div>
</div>

---
layout: two-cols
---

# 从跟写到 25 分钟复现

<div class="text-left mt-3">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
他曾挑战不看视频，从零写一个很小、很简单的 Transformer；最快约 25 分钟。
</div>

<div class="mt-5 text-xl italic border-l-4 border-blue-500 bg-blue-50 p-4">
“25 minutes to write a Transformer from scratch.”
</div>

<div class="mt-5 space-y-3 text-sm">
<div class="p-3 rounded border border-gray-200"><strong>第一次：</strong>跟着教程写，程序能跑但概念没连上。</div>
<div class="p-3 rounded border border-gray-200"><strong>反复之后：</strong>结构进入手感，速度成为理解的外显证据。</div>
<div class="p-3 rounded border border-gray-200"><strong>边界：</strong>能快速复现小模型，不等于已经掌握大规模训练工程。</div>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./speedrun.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 最初的野心：做世界上最好的小语言模型

<div class="grid grid-cols-4 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-yellow-50 border-t-4 border-yellow-500">
<div class="text-3xl font-bold text-yellow-700">1</div>

### 先做最大梦
训练一个规模虽小、但同尺寸里最好的模型。
</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-3xl font-bold text-red-600">2</div>

### 算清现实
搜索 1B、0.5B、0.25B 所需 GPU、天数与 token 后，发现成本远超个人承受力。
</div>

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-3xl font-bold text-blue-600">3</div>

### 缩小问题
转而在自己写的 Transformer 上实现论文里的新方法。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-3xl font-bold text-green-600">4</div>

### 堆高密度
访谈中他提到约 200 次尝试，最后得到足以继续写论文的结果。
</div>

</div>

<div class="mt-7 p-4 rounded bg-gray-50 border border-gray-200 text-left">
<strong>作者概括：</strong>个人研究的关键不是拥有最大算力，而是把问题切到自己能反复验证的尺度。
</div>

---
layout: two-cols
---

# 小模型购买反馈频率

<div class="space-y-4 text-left text-sm mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>最大训练规模</strong><br/>论文相关实验中，他提到最大模型约 0.5B。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>总成本感知</strong><br/>访谈中他说论文训练花费约 3 万元，父母支持让实验得以继续。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>真正的杠杆</strong><br/>同一个小框架里不断换方法、看指标、淘汰失败方向。
</div>

</div>

<div class="mt-4 text-xs opacity-60 text-left">数字均来自本期逐字稿；闭环为作者概括。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./experiment-loop.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 一次忘记 checkpoint，白白损失 1500 元

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-4xl font-bold text-red-600">3</div>

### 三个模型并行
他同时训练三个模型，却没有把保存机制设置好。
</div>

<div class="p-5 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-4xl font-bold text-orange-600">1500</div>

### 一次失误的代价
模型未被保存，算力支出无法转化为可继续使用的结果，他难过到哭了。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-4xl font-bold text-green-600">1</div>

### 变成流程
家人的支持让他继续做，但同样的保存错误没有再发生。
</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border border-blue-200 text-left">
研究习惯并不抽象：保存、复现、记录参数，决定失败能否留下信息。
</div>

---
layout: two-cols
---

# 预训练的 magical 时刻

<div class="text-left mt-3">

<div class="text-xl italic p-4 rounded bg-purple-50 border-l-4 border-purple-500">
“Pre-training is a bit magical”
</div>

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>预训练</strong><br/>像是在选择和塑造一种基础材料，让它能承受后续塑形。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>后训练</strong><br/>更像把已有材料塑造成具体的身体与行为。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>吸引力</strong><br/>微小改动可能改变之后的一切，但未来结果无法完全预测。
</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./pretraining-body.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 首层投影：拆开两个职责

<div class="space-y-4 text-left text-sm mt-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>原问题</strong><br/>首层 attention projection 的信息既服务当前层，也要进入后续层的跨层残差。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>关键改动</strong><br/>把首层投影扩宽后分成两部分：一部分留给当前层，另一部分供后续层混合。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>论文题目</strong><br/><em>Attention Projection Mixing with Exogenous Anchors</em>
</div>

</div>

<div class="mt-4 text-xs opacity-60 text-left">本页按嘉宾口头解释重绘，不补充论文正文之外的结论。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./attention-split.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 接收结果不是天才叙事，而是一串不确定决策

<div class="grid grid-cols-4 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 2025 年底
正式开始围绕这篇论文做训练实验。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 决定 scale up
明知扩大实验后仍可能被拒，还是在家人支持下继续。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 专业评审
他评价审稿人很专业，意见、最终评价与分数都很好。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### ICML 2026
论文进入 Main Track，成为他的第一次正式投稿经历。
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border border-yellow-200 text-left">
这条路径里同时存在能力、资源、运气与家人支持；缺一项，都可能停在更早的位置。
</div>

---

# 高中数学够入门，研究直觉却不能速成

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 可快速跨过的门槛
他认为 GPT / Transformer 的一般框架主要是矩阵乘法，用高中数学就能开始理解。

<div class="mt-5 text-lg italic text-green-900">“It's all matrix multiplication. It's all common sense.”</div>
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 需要时间发酵的部分
同一个概念有时能立刻连上，有时要几十天；旧视频里的疑问甚至会在半年或一年后突然变清楚。
</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border border-blue-200 text-left text-sm">
<strong>作者概括：</strong>形式知识决定能否开始，反复接触与实验反馈决定能否形成直觉。
</div>

---

# Q、K、V：他用找信息来建立直觉

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-5xl font-bold text-blue-600">Q</div>

### 我想找什么
Query 表示当前 token 正在寻找的内容。
</div>

<div class="p-5 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-5xl font-bold text-purple-600">K</div>

### 你是什么
Key 提供匹配依据；Q 与 K 的乘积刻画 token 之间的关联。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-5xl font-bold text-green-600">V</div>

### 找到后拿什么
Value 表示匹配成功后，真正被取出的信息。
</div>

</div>

<div class="mt-7 text-sm opacity-65 text-left">
这是嘉宾在访谈里的直觉化解释，不是完整的注意力机制推导。
</div>

---
layout: two-cols
---

# 象棋与研究的反馈回路

<div class="space-y-4 text-left text-sm mt-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>象棋</strong><br/>可以选择 3、10 或 60 分钟一局；输赢明确，网站还能迅速指出错在哪。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>AI 实验</strong><br/>提出想法、训练、看结果，再决定是否修改；只是周期通常更长。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>共同吸引力</strong><br/>结果来得足够快，思考会立刻得到奖惩，下一轮因此自然发生。
</div>

</div>

<div class="mt-4 text-xs opacity-60 text-left">本页为访谈中象棋类比的结构化重绘。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./feedback-loops.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 平时没有同龄研究伙伴，ICML 的棋桌突然打开世界

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-gray-50 border-l-4 border-gray-400">

### 日常：几乎独自探索
父母来自人文学科，同学会用 AI 做作业，却很少有人能深入讨论模型与训练。

<div class="mt-4 text-sm opacity-65">网络课程、模型对话与技术视频，承担了大部分交流功能。</div>
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 会场：象棋成为接口
ICML 首日的 chess social 里，他主动询问研究方向、邀请对弈，认识了来自多个国家和中国各地的人。

<div class="mt-4 text-sm opacity-65">共同兴趣让技术社交从陌生寒暄变成即时互动。</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border border-blue-200 text-left">
研究共同体提供的不只是知识，也让一个长期单机探索的人第一次确认：这里真的有同类。
</div>

---

# AI 把自学的行动半径拉长了

<div class="grid grid-cols-3 gap-5 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 问问题
不懂论文、训练时间和代码时，随时获得解释与下一步建议。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 走流程
投稿、回复审稿人、整理资料等陌生流程，不再只能等待熟人指路。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 做原型
只要能判断好东西长什么样，就可以把更多实现工作交给 AI。
</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xl italic text-left">
“If you have the motivation, you can use AI to go a long way.”
</div>

<div class="mt-4 text-xs opacity-60 text-left">嘉宾同时强调：省下来的时间仍需自己重新分配。</div>

---

# 节省时间之后，人反而更忙

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 被消掉的摩擦
作业、查资料、整理信息、寻找问题答案，都能更快完成。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 新增的压力
能做的事情变多，目标跟着膨胀；不用最先进模型时，还会产生浪费时间的 FOMO。
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-xl italic text-left">
“they have saved a lot of time, they are busier now”
</div>

<div class="mt-4 text-sm opacity-65 text-left">
提效没有自动兑换成闲暇，它先兑换成了更高的吞吐量与更高的自我预期。
</div>

---
layout: two-cols
---

# AI 放大时间分配差异

<div class="space-y-4 text-left text-sm mt-3">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>上行路径</strong><br/>用 AI 快速完成低价值重复任务，再用 Anki、自学与项目把时间投入更深的学习。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>下行路径</strong><br/>用 AI 交差后，把释放的时间全部交给短视频与游戏，长期表现可能更差。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>真正的分水岭</strong><br/>工具人人可用，自我认识、动机与注意力管理却不会自动补齐。
</div>

</div>

<div class="mt-4 text-xs opacity-60 text-left">本页为嘉宾对同学使用 AI 情况的结构化概括。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./education-fork.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 教育最大的变化：努力与贡献之间的路变窄了

<div class="grid grid-cols-3 gap-5 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### 过去
擅长数学、物理或医学，可以想象继续深造并对学科作出贡献。
</div>

<div class="p-5 rounded bg-red-50 border-t-4 border-red-500">

### 现在
AI 可能学得更快、做得更好，学习容易退化成向大学证明自己能坚持与服从训练。
</div>

<div class="p-5 rounded bg-purple-50 border-t-4 border-purple-500">

### 失去的部分
不只是成绩优势，而是自己未来能给学科、职业或人类带来贡献的想象。
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border border-yellow-200 text-left">
这是一个 17 岁学生观察同龄人的感受，不是对教育未来的确定结论。
</div>

---

# 他担心的不是一次替代，而是速度失配

<div class="grid grid-cols-3 gap-5 mt-5 text-left text-sm">

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### AI 同步升级
模型能力一旦提高，所有使用同一模型的人几乎同时获得新能力。
</div>

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 人按代际成长
教育、职业与制度需要多年调整，无法按模型版本节奏更新。
</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">

### AI 研究 AI
如果研究环节本身被高度自动化，他认为增长速度可能进一步失控。
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-5 text-left">
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500"><strong>他的希望</strong><br/>AI 继续进步，但不要快到社会没有适应时间。</div>
<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-400"><strong>证据边界</strong><br/>这些是嘉宾的风险判断与个人担忧，不是确定预测。</div>
</div>

---

# 模型公司与应用公司：一位 17 岁研究者的判断

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型公司
负责把基础能力做好，也能向上直接做应用；如果实现足够强的通用能力，可能自行生成应用。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 应用公司
在模型之上增加具体产品价值，但收入与能力边界仍受底层模型影响。
</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border border-orange-200 text-left">
<strong>他看到的张力：</strong>当前应用更接近商业收入；长期看，底层能力若能直接完成应用工作，价值分配会再次变化。
</div>

<div class="mt-4 text-xs opacity-60 text-left">本页是嘉宾的商业判断，不代表已经发生的行业事实。</div>

---

# AI 可以陪伴，但他仍把温度留给人

<div class="grid grid-cols-3 gap-4 mt-5 text-left text-sm">

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 为什么有吸引力
虚拟角色能持续回应、提供情绪价值，让孤独的人获得即时陪伴。
</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">

### 为什么有风险
模型可能给出危险建议；越拟人、越持续的关系，也越需要伦理与安全边界。
</div>

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 他的体验
他也尝试过向 AI 倾诉，但认为它仍缺少人与人之间的温暖和互动。
</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-xl italic text-left">
“Human emotions cannot be replaced”
</div>

---

# 从韩国会场到乡村课堂：另一种成就感

<div class="grid grid-cols-4 gap-4 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-3xl font-bold text-blue-600">4–5h</div>

### 离北京的距离
支教地点需要数小时车程，电子设备与 AI 都离孩子们很远。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-3xl font-bold text-purple-600">3 年</div>

### 持续参与
他连续多年组织同学前往，教英语，也教自己喜欢的象棋。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-3xl font-bold text-orange-600">30 人</div>

### 班级容量
活动名额有限，孩子愿意每天来，离开时还会索要签名、期待下次见面。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-3xl font-bold text-green-600">积分</div>

### 让课堂变成游戏
回答问题、参与游戏获得积分，再兑换零食和玩具，让学习与快乐直接相连。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border border-yellow-200 text-left">
在模型指标之外，他看见另一种即时反馈：孩子愿不愿意笑着再来一次。
</div>

---
layout: two-cols
---

# 两个世界：主动离开 AI

<div class="space-y-4 text-left text-sm mt-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>韩国 ICML</strong><br/>前沿模型、名校研究者、国际社交，节奏快而密集。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>乡村支教</strong><br/>备课、吃饭、散步、抓昆虫、和同伴与孩子玩游戏，节奏慢下来。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>主动选择</strong><br/>不继续推演 AI 与人类未来，先把注意力交还给眼前的人。
</div>

</div>

<div class="mt-4 text-xs opacity-60 text-left">本页为访谈中两个生活场景的结构化重绘。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./two-worlds.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 最后的 bet：让自己和喜欢的人开心

<div class="grid grid-cols-3 gap-5 mt-5 text-left">

<div class="p-5 rounded bg-red-50 border-t-4 border-red-500">

### 先承认不可预测
他曾因 AI 失控、职业替代与意义消失而难过，后来接受自己无法推演全部未来。
</div>

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### 再回到可控制处
和喜欢的人聊天、做想做的事、玩喜欢的游戏，一步一步过好现在。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### 开心不是逃避
他也认为快乐总量有限，人仍需选择愿意承受的困难，并为目标付出。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-2xl italic text-left">
“I think happiness is the essence”
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">本页 8 条原话均已对逐字稿做固定字符串核验。</div>

<div class="grid grid-cols-2 gap-3 text-left text-[12px] leading-snug">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“read a paper every day for 30 days.”
<div class="text-[10px] opacity-60 mt-1 not-italic">— 自学纪律</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“25 minutes to write a Transformer from scratch.”
<div class="text-[10px] opacity-60 mt-1 not-italic">— 从零复现</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“Pre-training is a bit magical”
<div class="text-[10px] opacity-60 mt-1 not-italic">— 研究吸引力</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“It's all matrix multiplication. It's all common sense.”
<div class="text-[10px] opacity-60 mt-1 not-italic">— 入门门槛</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
“If you have the motivation, you can use AI to go a long way.”
<div class="text-[10px] opacity-60 mt-1 not-italic">— AI 与自驱力</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
“they have saved a lot of time, they are busier now”
<div class="text-[10px] opacity-60 mt-1 not-italic">— 提效悖论</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“Human emotions cannot be replaced”
<div class="text-[10px] opacity-60 mt-1 not-italic">— 人与 AI 的边界</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“I think happiness is the essence”
<div class="text-[10px] opacity-60 mt-1 not-italic">— 最终选择</div>
</div>

</div>

---
layout: end
---

# “I hope everyone is happy.”

<div class="mt-8 text-lg opacity-70">苏庭灏 · 17 岁</div>

<div class="mt-12 text-sm opacity-50">张小珺 Podcast · Episode 151</div>
