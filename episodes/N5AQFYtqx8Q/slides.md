---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Using AI to Increase Your Intelligence & Enrich Humanity | Dr. Fei-Fei Li'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
themeConfig: {}
---

<div class="mt-12 text-sm tracking-[0.25em] uppercase text-emerald-700">Huberman Lab × Dr. Fei-Fei Li</div>

# 用 AI 扩展人的智能

<div class="text-2xl mt-3 font-light">同时守住人的能动性、尊严与创造力</div>

<div class="mt-10 mx-auto max-w-3xl p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-left">
<div class="text-sm font-semibold text-emerald-800">本集主线</div>
<div class="mt-2 text-lg">从视觉演化与 ImageNet 出发，走向医疗、教育、机器人与空间智能；核心问题始终是：人如何参与塑造 AI 的未来。</div>
</div>

<div class="mt-8 text-sm opacity-60">约 2 小时 8 分钟 · 2026 年 8 月</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded-xl bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-800">01 视觉与智能</div>
<div class="mt-2 opacity-80">从 5.4 亿年前的第一束光，理解感知为何推动智能演化。</div>
</div>

<div class="p-4 rounded-xl bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-800">02 现代 AI 的起点</div>
<div class="mt-2 opacity-80">ImageNet、神经网络与 GPU 如何在 2012 年汇合。</div>
</div>

<div class="p-4 rounded-xl bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-800">03 人类仍然独特之处</div>
<div class="mt-2 opacity-80">没有被记录的体验、情感与记忆，模型无法直接学习。</div>
</div>

<div class="p-4 rounded-xl bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-red-800">04 医疗的真实边界</div>
<div class="mt-2 opacity-80">机器人手术展示协作价值，也暴露稀缺数据的限制。</div>
</div>

<div class="p-4 rounded-xl bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-yellow-800">05 教育与能动性</div>
<div class="mt-2 opacity-80">既不能让工具替代学习，也不能因为害怕作弊而拒绝工具。</div>
</div>

<div class="p-4 rounded-xl bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-800">06 具身与空间智能</div>
<div class="mt-2 opacity-80">AI 从语言走向机器人、3D/4D 世界与创作者工具。</div>
</div>

</div>

<div class="mt-5 text-xs opacity-55">作者概括：主题卡片按对谈推进顺序整理。</div>

---
layout: two-cols
---

# 视觉为何是智能的起点

<div class="mt-5 p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500 text-lg italic">
“I see vision as a cornerstone of intelligence”
</div>

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 rounded bg-yellow-50 border border-yellow-200"><b>约 5.4 亿年前</b>：动物出现最早的感光细胞。</div>

<div class="p-3 rounded bg-green-50 border border-green-200"><b>约 1,000 万年后</b>：动物物种加速分化，对谈将其联系到寒武纪生命大爆发。</div>

<div class="p-3 rounded bg-purple-50 border border-purple-200">一旦能看见食物、天敌与配偶，动物与外部世界的关系就改变了。</div>

</div>

<div class="mt-4 text-xs opacity-55">字幕 121–159 · 作者概括图</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vision-evolution.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 大脑与算法，在视觉层级相遇

<div class="grid grid-cols-3 gap-5 mt-7 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-t-4 border-blue-500">
<div class="text-2xl font-bold text-blue-700 mb-3">½</div>
<div class="font-bold">视觉占据大脑大量活动</div>
<div class="mt-2 opacity-75">对谈引用估计：人类皮层活动约有一半涉及视觉功能。</div>
</div>

<div class="p-5 rounded-xl bg-green-50 border-t-4 border-green-500">
<div class="text-2xl font-bold text-green-700 mb-3">1950s</div>
<div class="font-bold">神经科学发现层级结构</div>
<div class="mt-2 opacity-75">研究者记录哺乳动物视觉细胞，看到信息从光线逐层走向形状识别。</div>
</div>

<div class="p-5 rounded-xl bg-purple-50 border-t-4 border-purple-500">
<div class="text-2xl font-bold text-purple-700 mb-3">先看 · 后说</div>
<div class="font-bold">儿童先发展视觉</div>
<div class="mt-2 opacity-75">人类在语言之前已经通过视觉学习世界。</div>
</div>

</div>

<div class="mt-7 p-4 rounded bg-gray-50 border border-gray-200">
<b>关键联系：</b>早期神经网络借鉴了视觉通路逐层处理信息的结构，但今天的大模型复杂度已经远超当年的生物记录。
</div>

<div class="mt-4 text-xs opacity-55">字幕 165–207</div>

---
layout: two-cols
---

<h1 style="font-size: 25px !important; line-height: 1.08 !important; margin-bottom: 1rem !important;">现代 AI：三个条件同时成熟</h1>

<div class="mt-5 p-5 rounded-xl bg-green-50 border-l-4 border-green-500 text-lg italic">
“we need data. we need data to drive these algorithms.”
</div>

<div class="mt-5 grid grid-cols-1 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50"><b>大数据</b>：ImageNet 把互联网规模的视觉样本带入训练。</div>
<div class="p-3 rounded bg-purple-50"><b>神经网络</b>：数十年积累让算法逐渐成熟。</div>
<div class="p-3 rounded bg-yellow-50"><b>GPU</b>：并行计算让训练规模与速度跨过门槛。</div>

</div>

<div class="mt-5 text-sm opacity-75">2012 年的转折，不是单一算法突然出现，而是三条技术曲线在同一时刻汇合。</div>
<div class="mt-3 text-xs opacity-55">字幕 230–266、288–324 · 作者概括图</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-convergence.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# ImageNet 把进步变成可测量的竞赛

<div class="grid grid-cols-4 gap-3 mt-6 text-center">

<div class="p-4 rounded-xl bg-blue-50 border border-blue-200">
<div class="text-3xl font-bold text-blue-700">15M</div>
<div class="text-xs mt-2">ImageNet 收集的图像规模</div>
</div>

<div class="p-4 rounded-xl bg-purple-50 border border-purple-200">
<div class="text-3xl font-bold text-purple-700">1,000</div>
<div class="text-xs mt-2">挑战要识别的对象类别</div>
</div>

<div class="p-4 rounded-xl bg-yellow-50 border border-yellow-200">
<div class="text-3xl font-bold text-yellow-700">&gt;1M</div>
<div class="text-xs mt-2">挑战数据集中用于测试的图像</div>
</div>

<div class="p-4 rounded-xl bg-green-50 border border-green-200">
<div class="text-3xl font-bold text-green-700">4%</div>
<div class="text-xs mt-2">后来测得的人类错误率</div>
</div>

</div>

<div class="grid grid-cols-2 gap-5 mt-7 text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-400">
<b>2010 起：</b>公开挑战让不同实验室在同一个对象识别任务上比较算法，不再只靠展示案例。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
<b>2012：</b>神经网络方案把错误率大幅压低。即使尚未超过人类，研究社区已经看见明显拐点。
</div>

</div>

<div class="mt-5 text-xs opacity-55">字幕 252–376。4% 指错误率，不是正确率。</div>

---

# 同样认出猫，人和机器走了不同的路

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">
<div class="text-xl font-bold text-blue-800">今天的 AI</div>
<ul class="mt-3 space-y-2">
<li>从互联网规模的图像与文本中学习</li>
<li>参数吸收大量共现模式</li>
<li>看到书架后的一截尾巴，也能把判断推向猫</li>
</ul>
</div>

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">
<div class="text-xl font-bold text-green-800">一个孩子</div>
<ul class="mt-3 space-y-2">
<li>可能只见过 3 只、最多约 10 只猫</li>
<li>仍能从新角度、局部形状泛化</li>
<li>没有下载整个互联网，却学得很快</li>
</ul>
</div>

</div>

<div class="mt-7 p-5 rounded-xl bg-purple-50 border border-purple-200">
<div class="font-bold text-purple-800">尚未解决的谜题</div>
<div class="mt-2">相似的行为结果，不代表相同的学习机制。数据规模能解释模型的能力，却不能完全解释儿童的样本效率。</div>
</div>

<div class="mt-4 text-xs opacity-55">字幕 611–644</div>

---
layout: two-cols
---

<h1 style="font-size: 25px !important; line-height: 1.08 !important; margin-bottom: 1rem !important;">加入视频，模型开始学习运动</h1>

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<b>2023 前后</b>，多支团队开始把视频纳入训练数据。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>2024 年 1 月</b>，对谈以 Sora 为例：文本可以生成几秒钟的猫追老鼠片段。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
模型不必知道猫腿的肌肉结构；它从海量视频中学到运动看起来怎样才合理。
</div>

</div>

<div class="mt-5 text-sm opacity-75">从静态识别到视频生成，底层逻辑仍是：更多可处理的数据，带来更多可学习的规律。</div>
<div class="mt-3 text-xs opacity-55">字幕 687–750 · 作者概括图</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./video-to-motion.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 互联网不是抽象空间，而是人类行为的记录库

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">

<div class="p-4 rounded-xl bg-blue-50 border border-blue-200">
<div class="text-2xl mb-2">⌨</div>
<b>文字</b>
<div class="text-xs mt-2 opacity-70">闲聊、文章、科学论文</div>
</div>

<div class="p-4 rounded-xl bg-green-50 border border-green-200">
<div class="text-2xl mb-2">▧</div>
<b>图像</b>
<div class="text-xs mt-2 opacity-70">手机照片、自拍、自然影像</div>
</div>

<div class="p-4 rounded-xl bg-purple-50 border border-purple-200">
<div class="text-2xl mb-2">▶</div>
<b>视频</b>
<div class="text-xs mt-2 opacity-70">声音、动作、场景变化</div>
</div>

<div class="p-4 rounded-xl bg-yellow-50 border border-yellow-200">
<div class="text-2xl mb-2">♫</div>
<b>声音</b>
<div class="text-xs mt-2 opacity-70">语言、歌唱、音乐</div>
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-sm">

<div class="p-5 rounded bg-gray-50 border border-gray-200">
<b>为什么模型强：</b>几十年数字生活把大量知识、表达与行为变成了可训练数据。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-400">
<b>为什么仍有边界：</b>互联网再大，也只包含被感知、被表达、被保存、被上传的部分。
</div>

</div>

<div class="mt-4 text-xs opacity-55">字幕 850–907</div>

---
layout: two-cols
---

<h1 style="font-size: 25px !important; line-height: 1.08 !important; margin-bottom: 1rem !important;">AI 的边界，是信息能否被捕获</h1>

<div class="mt-5 p-5 rounded-xl bg-red-50 border-l-4 border-red-500 text-lg italic">
“that thought is not captured”
</div>

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50"><b>可捕获：</b>语言、照片、视频、脑电或其他传感信号。</div>
<div class="p-3 rounded bg-red-50"><b>暂不可捕获：</b>私密记忆、难以表达的直觉、个人化情绪组合。</div>
<div class="p-3 rounded bg-purple-50"><b>结论：</b>没有数据入口，就没有训练信号；这是一条技术边界，不需要神秘化。</div>

</div>

<div class="mt-4 text-xs opacity-55">字幕 907–927、1673–1729 · 作者概括图</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./captured-vs-uncaptured.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Move 37：一种特殊的创造力

<div class="grid grid-cols-3 gap-4 mt-7 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-t-4 border-blue-500">
<div class="font-bold text-blue-800">发生了什么</div>
<div class="mt-3">AlphaGo 走出一步围棋大师此前没有想到的棋。</div>
</div>

<div class="p-5 rounded-xl bg-yellow-50 border-t-4 border-yellow-500">
<div class="font-bold text-yellow-800">为什么惊人</div>
<div class="mt-3">它突破了人类高手的集体经验，展示了机器组合搜索的力量。</div>
</div>

<div class="p-5 rounded-xl bg-red-50 border-t-4 border-red-500">
<div class="font-bold text-red-800">为什么要限定义</div>
<div class="mt-3">围棋有清晰规则、目标与数学结构；这与无法表达的私人情感并不相同。</div>
</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500">
<b>Fei-Fei Li 的区分：</b>可以把 Move 37 称为创造力，但必须说明它是哪一种创造力、依赖什么问题结构。
</div>

<div class="mt-4 text-xs opacity-55">字幕 929–957</div>

---

# 更可能的未来：混合创造力

<div class="mt-5 p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500 text-xl italic">
“My current conjecture is hybrid”
</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border border-blue-200">
<div class="font-bold">机器擅长</div>
<div class="mt-2">保留大量已知方法，跨领域搜索，组合人脑容易忘记的信息。</div>
</div>

<div class="p-4 rounded bg-red-50 border border-red-200">
<div class="font-bold">机器仍缺</div>
<div class="mt-2">未被表达的个人记忆、情绪和真正尚未发明的解法。</div>
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">
<div class="font-bold">协作机会</div>
<div class="mt-2">人提出新问题、赋予意义；AI 扩展搜索空间与验证速度。</div>
</div>

</div>

<div class="mt-7 text-sm p-4 rounded bg-gray-50 border border-gray-200">
对谈里的灰色杯子例子：同一物体可能触发某个人与好友共享的童年记忆；如果这段记忆从未被记录，模型就无法直接访问。
</div>

<div class="mt-4 text-xs opacity-55">字幕 958–1011</div>

---
layout: two-cols
---

<h1 style="font-size: 25px !important; line-height: 1.08 !important; margin-bottom: 1rem !important;">衡量 AI 的核心尺度：人的能动性</h1>

<div class="mt-5 p-5 rounded-xl bg-green-50 border-l-4 border-green-500 text-lg italic">
“enhancing and augmenting humanity.”
</div>

<div class="mt-5 p-4 rounded-xl bg-yellow-50 border border-yellow-200 text-sm">
<div class="font-bold text-yellow-800">能动性意味着什么</div>
<div class="mt-2">人决定目标、是否使用工具、共享哪些信息，并保留学习、判断与行动的责任。</div>
</div>

<div class="mt-4 p-4 rounded-xl bg-purple-50 border border-purple-200 text-sm">
<div class="font-bold text-purple-800">为什么与尊严相连</div>
<div class="mt-2">如果少数技术拥有者替公众决定什么是好，工具即使强大，也会削弱人的选择。</div>
</div>

<div class="mt-3 text-xs opacity-55">字幕 1083–1111 · 作者概括图</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agency-loop.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 不必先会写代码，先学会理解和使用

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">
<div class="text-xl font-bold text-blue-800">谁需要学</div>
<div class="mt-3">学生、教师、医生、艺术家、政策制定者——不一定都要编程，但都需要理解技术如何影响自己的工作。</div>
</div>

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">
<div class="text-xl font-bold text-green-800">学什么</div>
<div class="mt-3">亲自试用、理解能力与限制、练习提问，并决定哪些任务该交给 AI、哪些判断必须保留。</div>
</div>

</div>

<div class="mt-7 p-5 rounded-xl bg-purple-50 border border-purple-200 text-lg italic">
“By learning, one feels more in control. By learning, you're less scared of trying. And by learning, you retain that agency.”
</div>

<div class="mt-4 text-xs opacity-55">字幕 1177–1199</div>

---

# 科学发现：AI 可以改变知识流动的速度

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded-xl bg-blue-50 border-t-4 border-blue-500">
<div class="font-bold text-blue-800">记住更多</div>
<div class="mt-2">模型可以保留远超单个科学家记忆容量的文献与方法。</div>
</div>

<div class="p-4 rounded-xl bg-purple-50 border-t-4 border-purple-500">
<div class="font-bold text-purple-800">跨学科综合</div>
<div class="mt-2">把不同领域的知识放进同一问题空间，寻找人类专业分工之间的连接。</div>
</div>

<div class="p-4 rounded-xl bg-green-50 border-t-4 border-green-500">
<div class="font-bold text-green-800">让患者参与</div>
<div class="mt-2">把综合后的信息同时呈现给临床医生与患者，覆盖诊断到治疗。</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>边界声明：</b>这不等于 AI 已经优于所有医生。它提供新的信息处理能力，临床验证、检查与责任仍然必要。
</div>

<div class="mt-4 text-xs opacity-55">字幕 1408–1459、1460–1506</div>

---
layout: two-cols
---

<h1 style="font-size: 25px !important; line-height: 1.08 !important; margin-bottom: 1rem !important;">一场肝脏手术，展示协作的现实形态</h1>

<div class="mt-5 space-y-3 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
Fei-Fei Li 的父亲在 Stanford 接受肝脏手术；外科医生操控 Da Vinci 机器人完成操作。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
肝脏血管丰富，个体差异大；机器人提供精细操作，医生保留判断与控制。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 italic">
“10x less blood than a typical surgery”
</div>

</div>

<div class="mt-4 text-xs opacity-55">字幕 1508–1572 · 作者概括图</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./surgery-collaboration.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 医疗 AI 最关键的问题：模式够不够多

<div class="mt-5 p-5 rounded-xl bg-red-50 border-l-4 border-red-500 text-xl italic">
“When the patterns are not abundant, then we have to be careful.”
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-xl bg-green-50 border border-green-200">
<div class="font-bold text-green-800">模式丰富的情况</div>
<div class="mt-2">常见症状与药物反应被大量记录，模型可能帮助区分相似体验，并扩大医疗信息的可及性。</div>
</div>

<div class="p-5 rounded-xl bg-yellow-50 border border-yellow-200">
<div class="font-bold text-yellow-800">模式稀缺的情况</div>
<div class="mt-2">复杂肝脏手术数量有限、个体差异大；数据不足时，让欠训练的系统独立操作风险更高。</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<b>开放方向：</b>用人工模拟生成更多解剖与手术情境，再研究自动化能走多远；当前更可靠的路线是人机协作。
</div>

<div class="mt-4 text-xs opacity-55">字幕 1520–1565</div>

---

# 直觉并不神秘，先问它是否可被访问

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">
<div class="text-lg font-bold text-blue-800">浅层直觉：可表达</div>
<ul class="mt-3 space-y-2">
<li>职业、年龄、偏好等上下文</li>
<li>可以通过语言或图片输入</li>
<li>模型据此定制回答</li>
</ul>
</div>

<div class="p-5 rounded-xl bg-red-50 border-l-4 border-red-500">
<div class="text-lg font-bold text-red-800">深层直觉：暂不可访问</div>
<ul class="mt-3 space-y-2">
<li>气味、激素、情绪与早餐的混合</li>
<li>本人可能也无法说清</li>
<li>没有传感器，就没有可用数据</li>
</ul>
</div>

</div>

<div class="mt-7 p-5 rounded bg-gray-50 border border-gray-200">
<b>作者概括：</b>未来脑电或皮肤电传感器可能把部分内部状态变成信号；这只改变可访问性，不自动等于理解或感受。
</div>

<div class="mt-4 text-xs opacity-55">字幕 1640–1729</div>

---
layout: two-cols
---

<h1 style="font-size: 25px !important; line-height: 1.08 !important; margin-bottom: 1rem !important;">会说抱歉，不等于感受到关心</h1>

<div class="mt-5 p-5 rounded-xl bg-red-50 border-l-4 border-red-500 text-lg italic">
“We operate fundamentally different from today's AI”
</div>

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50"><b>机器：</b>从大量对话中学到，听见生病后通常应给出同情性回应。</div>
<div class="p-3 rounded bg-green-50"><b>朋友：</b>记得痛苦是什么，也真心希望对方好起来。</div>
<div class="p-3 rounded bg-yellow-50"><b>沟通责任：</b>不能把语言流畅度误解为情感、爱或动机已经存在。</div>

</div>

<div class="mt-4 text-xs opacity-55">字幕 1810–1847 · 作者概括图</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./empathy-gap.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 技术上能做，不代表社会应该默认接受

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">
<div class="text-xl font-bold text-purple-800">能力层</div>
<div class="mt-3">生成说话头像、模仿声音、自动执行动作，很多能力在技术上已经可行。</div>
</div>

<div class="p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500">
<div class="text-xl font-bold text-orange-800">社会层</div>
<div class="mt-3">法律、道德、社会规范与风险责任，决定哪些能力可以进入现实生活。</div>
</div>

</div>

<div class="mt-7 p-5 rounded-xl bg-red-50 border border-red-200">
<div class="font-bold text-red-800">对谈的刹车类比</div>
<div class="mt-2">汽车电脑完全可以按时钟让刹车在每周五失效；我们不这样做，并非技术做不到，而是后果不可接受。</div>
</div>

<div class="mt-5 p-4 rounded bg-gray-50 border border-gray-200">
技术讨论抵达产品边界时，必须切换为社会讨论。
</div>

<div class="mt-4 text-xs opacity-55">字幕 1900–1931</div>

---
layout: two-cols
---

<h1 style="font-size: 25px !important; line-height: 1.08 !important; margin-bottom: 1rem !important;">AI 治理不是少数人的独角戏</h1>

<div class="mt-5 p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500 text-lg italic">
“these are multistakeholder problems to solve together.”
</div>

<div class="mt-5 grid grid-cols-2 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50"><b>专业规范：</b>技术人员的伦理训练与行业标准</div>
<div class="p-3 rounded bg-green-50"><b>教育：</b>把社会影响纳入计算机科学课程</div>
<div class="p-3 rounded bg-red-50"><b>监管：</b>IRB、医疗监管与不同政府体系</div>
<div class="p-3 rounded bg-yellow-50"><b>公众：</b>文化、传统、选择与风险承受</div>

</div>

<div class="mt-4 text-xs opacity-55">字幕 1987–2047 · 作者概括图</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./multistakeholder-governance.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 教育有两种对称的失败

<div class="mt-5 p-5 rounded-xl bg-yellow-50 border-l-4 border-yellow-500 text-lg italic">
“either denying the tool or taking away agency and motivation.”
</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded-xl bg-red-50 border-t-4 border-red-500">
<div class="font-bold text-red-800">失败 A：工具代替成长</div>
<div class="mt-2">刷短视频、被动观看、直接拿答案，让学习的时间、努力与困难消失。</div>
</div>

<div class="p-4 rounded-xl bg-orange-50 border-t-4 border-orange-500">
<div class="font-bold text-orange-800">失败 B：因为害怕而禁用</div>
<div class="mt-2">只担心作弊，拒绝学生接触工具，也会失去更深学习与即时辅导的机会。</div>
</div>

<div class="p-4 rounded-xl bg-green-50 border-t-4 border-green-500">
<div class="font-bold text-green-800">更好的组合</div>
<div class="mt-2">保留动机与能动性，教会正确使用，让 AI 承担重复解释而非替代思考。</div>
</div>

</div>

<div class="mt-6 text-sm p-4 rounded bg-gray-50 border border-gray-200">学习依然需要时间、努力，有时也需要痛苦；工具改变路径，不改变大脑必须发展的事实。</div>

<div class="mt-4 text-xs opacity-55">字幕 2104–2176</div>

---

# 提示词的祖先，是苏格拉底式提问

<div class="mt-5 p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500 text-xl italic">
“Socrates method is prompting and seeking truth by asking questions.”
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-sm text-center">

<div class="p-5 rounded-xl bg-purple-50 border border-purple-200">
<div class="text-2xl font-bold text-purple-700">1</div>
<div class="font-bold mt-2">给出上下文</div>
<div class="text-xs mt-2 opacity-70">说明目标、已有知识与卡点</div>
</div>

<div class="p-5 rounded-xl bg-yellow-50 border border-yellow-200">
<div class="text-2xl font-bold text-yellow-700">2</div>
<div class="font-bold mt-2">追问假设</div>
<div class="text-xs mt-2 opacity-70">让回答暴露推理与限制</div>
</div>

<div class="p-5 rounded-xl bg-green-50 border border-green-200">
<div class="text-2xl font-bold text-green-700">3</div>
<div class="font-bold mt-2">逼近真相</div>
<div class="text-xs mt-2 opacity-70">比较证据，修正问题，再问一次</div>
</div>

</div>

<div class="mt-7 p-4 rounded bg-gray-50 border border-gray-200">Fei-Fei Li 希望 K–12 学校教授 prompting；重点不是背模板，而是恢复提问能力。</div>
<div class="mt-4 text-xs opacity-55">字幕 2207–2227</div>

---

# 具身 AI：智能不只发生在语言里

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-t-4 border-blue-500">
<div class="font-bold text-blue-800">人类先于语言发展</div>
<div class="mt-2">儿童在会说话前已经通过视觉与身体学习；演化也经历了约 5 亿年无语言阶段。</div>
</div>

<div class="p-5 rounded-xl bg-purple-50 border-t-4 border-purple-500">
<div class="font-bold text-purple-800">身体带来新信号</div>
<div class="mt-2">脸、声音、动作、空间与他人的反应，让交流不再只是文字。</div>
</div>

<div class="p-5 rounded-xl bg-green-50 border-t-4 border-green-500">
<div class="font-bold text-green-800">机器人进入真实世界</div>
<div class="mt-2">感知、行动与物理约束，把 AI 从回答问题推进到帮助人完成任务。</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>对谈判断：</b>AI 的下一前沿在语言之外，但硬件进入社会的速度会比软件更慢。
</div>

<div class="mt-4 text-xs opacity-55">字幕 2229–2285、2303–2316</div>

---

# 最有价值的机器人，先替人承担危险与体力

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded-xl bg-blue-50 border-l-4 border-blue-500">
<b>老年照护</b>
<div class="mt-2">买菜、取药、出门散步，减轻家庭成员的体力负担。</div>
</div>

<div class="p-4 rounded-xl bg-red-50 border-l-4 border-red-500">
<b>灾害救援</b>
<div class="mt-2">让机器进入野火等危险环境，减少救援者暴露。</div>
</div>

<div class="p-4 rounded-xl bg-green-50 border-l-4 border-green-500">
<b>医院物流</b>
<div class="mt-2">护士一个班次要走数英里取物、拿药；机器人可承担运输。</div>
</div>

<div class="p-4 rounded-xl bg-purple-50 border-l-4 border-purple-500">
<b>家庭劳动</b>
<div class="mt-2">折衣、清洁、浇花等任务可以由同一台多功能机器完成。</div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-5">
<div class="p-4 rounded bg-yellow-50 border border-yellow-200 text-center">
<div class="text-3xl font-bold text-yellow-700">30 年</div>
<div class="text-xs mt-1">对谈用于想象机器人广泛进入社会的时间尺度</div>
</div>
<div class="p-4 rounded bg-gray-50 border border-gray-200 text-sm">
协助不应拿走家庭责任、爱与必要沟通；它主要补足危险、重复与体力劳动。
</div>
</div>

<div class="mt-4 text-xs opacity-55">字幕 2303–2363、2374–2435</div>

---

# 机器人应该长什么样，也要由公众决定

<div class="mt-5 p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500 text-xl italic">
“Humanity should have the agency to decide how we imagine this.”
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-sm">

<div class="p-4 rounded bg-red-50 border border-red-200">
<div class="font-bold">只由公司决定</div>
<div class="mt-2">公众只能被动适应金属、硬质、充满空间的机器环境。</div>
</div>

<div class="p-4 rounded bg-blue-50 border border-blue-200">
<div class="font-bold">从脆弱场景出发</div>
<div class="mt-2">照护、医疗、儿童安全等明确问题，让价值与风险更可讨论。</div>
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">
<div class="font-bold">共同设计</div>
<div class="mt-2">形态、权限、监督和使用边界由技术方与社会共同塑造。</div>
</div>

</div>

<div class="mt-7 p-4 rounded bg-gray-50 border border-gray-200">作者概括：公共能动性不是发布后的反馈渠道，而是进入设计过程的权利。</div>
<div class="mt-4 text-xs opacity-55">字幕 2436–2454</div>

---
layout: two-cols
---

# World Labs：把想象变成可交互世界

<div class="mt-5 space-y-3 text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
World Labs 于 2024 年初共同创立，聚焦空间与物理智能。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
输入一句话、一张图或一幅草图，模型尝试生成 3D/4D 世界与互动环境。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
用途包括创作者工具、机器人训练、建筑与设计、医疗和教育环境。
</div>

</div>

<div class="mt-5 text-sm opacity-75">真实世界的捕获与想象世界的表达，在这里汇合为新的模型前沿。</div>
<div class="mt-3 text-xs opacity-55">字幕 2626–2712 · 作者概括图</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./spatial-intelligence.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 改变创作流程，但故事仍来自人

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">
<div class="text-xl font-bold text-purple-800">工具已经能做</div>
<ul class="mt-3 space-y-2">
<li>从剧本生成镜头</li>
<li>把多个 AI 工具组装成短片</li>
<li>快速迭代视觉与场景</li>
</ul>
</div>

<div class="p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500">
<div class="text-xl font-bold text-orange-800">仍然深度依赖人</div>
<ul class="mt-3 space-y-2">
<li>情绪、经历与世界观</li>
<li>人物塑造与镜头选择</li>
<li>对故事为何值得讲的判断</li>
</ul>
</div>

</div>

<div class="mt-7 p-5 rounded-xl bg-green-50 border border-green-200 text-lg italic">
“technology should be making their jobs better superpowering their creativity”
</div>

<div class="mt-4 text-xs opacity-55">字幕 2730–2820。原句强调赋能创作者，而非抹去就业影响。</div>

---

# ChatGPT 发布后，她先想到的是小学教师

<div class="grid grid-cols-[0.8fr_1.2fr] gap-6 mt-6">

<div class="p-6 rounded-xl bg-blue-50 border border-blue-200 text-center">
<div class="text-4xl font-bold text-blue-700">2022.11</div>
<div class="mt-3 text-sm">ChatGPT 发布</div>
<div class="mt-5 text-xs opacity-70">Fei-Fei Li 随即给孩子所在小学的校长发邮件，希望为学生和教师做客座讲解。</div>
</div>

<div class="p-5 rounded-xl bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<div class="font-bold text-yellow-800">被忽视的三类人</div>
<div class="grid grid-cols-3 gap-2 mt-4 text-center">
<div class="p-3 rounded bg-white">教师</div>
<div class="p-3 rounded bg-white">家长</div>
<div class="p-3 rounded bg-white">学生</div>
</div>
<div class="mt-5">她批评技术公司、投资者和政策制定者常常对教育有意见，却很少真正与一线教师共同工作。</div>
</div>

</div>

<div class="mt-6 p-5 rounded-xl bg-green-50 border border-green-200 text-lg italic">
“They are smart, too. They are eager to change. They're just forgotten.”
</div>

<div class="mt-4 text-xs opacity-55">字幕 2869–2948。ChatGPT 按自动字幕规范纠正拼写。</div>

---

# 既不恐吓，也不许诺乌托邦

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-5 rounded-xl bg-red-50 border-t-4 border-red-500">
<div class="font-bold text-red-800">极端悲观</div>
<div class="mt-2">只谈失控与末日，让教师和公众陷入恐惧，却不给行动路径。</div>
</div>

<div class="p-5 rounded-xl bg-yellow-50 border-t-4 border-yellow-500">
<div class="font-bold text-yellow-800">极端乐观</div>
<div class="mt-2">假设技术不会出错，回避就业、权力、偏差与安全问题。</div>
</div>

<div class="p-5 rounded-xl bg-green-50 border-t-4 border-green-500">
<div class="font-bold text-green-800">可工作的中间地带</div>
<div class="mt-2">讲清能力与限制，让公众共同决定如何使用与治理。</div>
</div>

</div>

<div class="mt-7 p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500 text-lg italic">
“I don't feel despair, Andrew. I'm an educator. I'm a builder. I'm a technologist.”
</div>

<div class="mt-6 p-4 rounded bg-gray-50 border border-gray-200">
<b>作者概括：</b>她的乐观不是忽略风险，而是把选择权、教育与建设能力放回社会手中。
</div>

<div class="mt-4 text-xs opacity-55">字幕 2543–2586、2949–2962</div>

---

# 核心金句

<div class="text-xs opacity-55 mb-3">8 句原文均已逐字回查字幕；下方保留自动字幕原有大小写与语法。</div>

<div class="grid grid-cols-2 gap-3 text-[12px] leading-snug">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“I see vision as a cornerstone of intelligence”
<div class="text-[10px] opacity-60 mt-1 not-italic">视觉是智能的基石 · 字幕 121–122</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“we need data. we need data to drive these algorithms.”
<div class="text-[10px] opacity-60 mt-1 not-italic">ImageNet 的出发点 · 字幕 250–251</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“My current conjecture is hybrid”
<div class="text-[10px] opacity-60 mt-1 not-italic">人机混合创造力 · 字幕 985–986</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“By learning, one feels more in control. By learning, you're less scared of trying. And by learning, you retain that agency.”
<div class="text-[10px] opacity-60 mt-1 not-italic">学习与能动性 · 字幕 1190–1193</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
“When the patterns are not abundant, then we have to be careful.”
<div class="text-[10px] opacity-60 mt-1 not-italic">医疗数据边界 · 字幕 1538–1540</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
“We operate fundamentally different from today's AI”
<div class="text-[10px] opacity-60 mt-1 not-italic">情感与模式的差别 · 字幕 1842–1844</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“Humanity should have the agency to decide how we imagine this.”
<div class="text-[10px] opacity-60 mt-1 not-italic">共同设计未来 · 字幕 2439–2441</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“They are smart, too. They are eager to change. They're just forgotten.”
<div class="text-[10px] opacity-60 mt-1 not-italic">教师需要支持 · 字幕 2941–2943</div>
</div>

</div>

---
layout: end
---

<div class="text-sm tracking-[0.2em] uppercase opacity-60">Dr. Fei-Fei Li</div>

# “It's a civilizational moment.”

<div class="mt-7 text-lg opacity-75">关键不只是 AI 将变得多强，而是人类是否保留共同塑造它的能力。</div>

<div class="mt-10 text-sm opacity-50">Using AI to Increase Your Intelligence & Enrich Humanity</div>
