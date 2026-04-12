---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Dario Amodei — "We are near the end of the exponential"'
info: |
  Dario Amodei 做客 Dwarkesh Podcast，深度解析 AI 指数级进展的终局——
  从 scaling 假说到 "数据中心里的天才国度"，从 Anthropic 10x 收入增长
  到 AI 治理的三重循环。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Dario Amodei

## "We are near the end of the exponential"

<div class="mt-4 text-lg opacity-70">Dwarkesh Podcast · 2025</div>

<div class="mt-6 text-sm opacity-50">
Anthropic CEO · Scaling Laws 提出者 · 《Machines of Loving Grace》作者
</div>

---

# 这期为什么值得看

<div class="text-sm opacity-60 mb-4">Anthropic CEO 三年后二度做客，给出了他对 AI 进展最坦率的判断</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 指数的终点
Dario 认为我们正接近 AI 能力指数增长的终点——不是增长停了，而是即将抵达"超越人类"的阈值

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 天才国度时间线
90% 置信度：10 年内实现；50/50 的直觉：1-2 年

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 10x 收入曲线
Anthropic 连续三年 10x 增长，但买算力时偏差一年就可能破产

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 扩散 ≠ 无限快
能力指数 + 扩散指数 = 两条快曲线，但都有极限

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### SWE 自动化光谱
从"90% 代码由 AI 写"到"不再需要 90% 的工程师"是一条很长的路

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### AI 宪法与治理
原则 > 规则，三层反馈循环，"独裁体制在 AI 时代将变得道德上不可持续"

</div>

</div>

---
layout: two-cols
---

# 指数的终点——我们在哪里？

Dario 三年前接受采访时已经看到了 scaling 趋势。三年后他的最大惊讶不是技术本身，而是公众认知的滞后。

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">

"The most surprising thing has been the lack of public recognition of how close we are to the end of the exponential."

</div>

<div class="mt-3 text-sm">

模型能力的演进大致符合他的预期——从"聪明的高中生"到"聪明的大学生"，再到开始做"PhD 级别的专业工作"。

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">

"if we're one year or two years away from it happening like the average person on the street has no idea"

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

# Big Blob of Compute 假说

<div class="text-sm opacity-60 mb-4">Dario 的 2017 年内部文档——在 GPT-1 刚问世时写下的框架，至今仍是他的核心信念</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 假说核心

所有的"聪明方法"都不太重要，真正驱动进展的只有少数几个因素。Rich Sutton 后来的 "bitter lesson" 表达了类似观点。

<div class="mt-2 p-2 bg-white rounded italic text-sm">

"all the cleverness, all the techniques ... doesn't matter very much"

</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 七大要素

1. **Raw compute** 的数量
2. **数据量**
3. 数据的**质量和分布**广度
4. **训练时长**
5. 能 **scale to the moon** 的目标函数
6. 数值稳定性 / normalization
7. Conditioning——让"compute blob"层流流动

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**作者概括**：这个假说的关键洞见是——别在方法论上搞发明创造，把精力放在让这几个因素尽可能大上。GPT-1 到 GPT-2 的飞跃就是一个例证：从狭窄的 fanfiction 语料到全网文本，泛化能力出现了。

</div>

---

# RL Scaling = Pre-training 2.0

<div class="text-sm opacity-60 mb-4">RL 并不是什么新范式——它和预训练遵循完全相同的 scaling 规律</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Pre-training 的经验

从 GPT-1（fanfiction）到 GPT-2（全网文本），数据分布变广后泛化出现了。窄分布训练 → 不泛化；宽分布训练 → 泛化涌现。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### RL 正在重复这条路

先是简单的数学竞赛 → 然后加入代码 → 现在扩展到更多任务种类。模型性能与训练时间呈 log-linear 关系。

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Dwarkesh 的反驳**：Richard Sutton 本人其实对 LLM 持怀疑态度——真正的人类学习算法不应该需要数十亿美元的数据和算力来学会用 Excel。

**Dario 的回应**：人类大脑不是白板——它从进化中继承了大量先验。预训练类似于"介于进化和学习之间"的某种过程，而 in-context learning 更接近短期学习。模型的各个阶段存在于这个连续谱上，但不一定精确对应人类的学习模式。

</div>

---

# 预训练 ≈ 介于进化和学习之间

<div class="text-sm opacity-60 mb-4">为什么模型需要 trillions of tokens，而人类不需要？</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 进化
<div class="text-3xl font-bold text-red-600 my-2">🧬</div>
<div class="text-sm">数百万年<br/>构建大脑架构<br/>先验 & 区域</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Pre-training / RL
<div class="text-3xl font-bold text-orange-600 my-2">⚡</div>
<div class="text-sm">Trillions of tokens<br/>从随机权重开始<br/>比学习更像进化</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### In-context learning
<div class="text-3xl font-bold text-green-600 my-2">📖</div>
<div class="text-sm">百万 token 上下文<br/>类似"在职学习"<br/>但更短期</div>

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">

"pre-training ... it's somewhere between the process of humans learning and the process of human evolution"

</div>

<div class="mt-2 text-sm opacity-70">
人类大脑有区域分化、有进化先验；语言模型从 random weights 开始。所以 pre-training 需要更多数据来补偿"blank slate"的起点。但一旦训练完成，给模型 100 万 token 的上下文，它就能做到很好的适应。
</div>

---

# Country of Geniuses：时间线与置信度

<div class="text-sm opacity-60 mb-4">Dario 用了两层论证来表达他的预测</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-green-50 border-2 border-green-400">

### 保守预测（高置信度）

<div class="text-4xl font-bold text-green-600 my-3">90%</div>

10 年内实现 "country of geniuses in a data center"

<div class="text-sm mt-2 opacity-70">

剩余 10% 是不可约的不确定性：多家公司内部动荡、台湾被入侵导致晶圆厂被毁等极端场景

</div>

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-400">

### 直觉预测（中等置信度）

<div class="text-4xl font-bold text-orange-600 my-3">50/50</div>

1-2 年内到达，最多 1-3 年

<div class="text-sm mt-2 opacity-70">

对可验证任务（coding、math）信心极高；唯一的基础不确定性在于"不可验证任务"——如规划火星任务、写小说、做根本性科学发现

</div>

</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**作者概括**：Dario 的框架是"不可验证任务"可能是最后一块拼图——但从可验证领域到不可验证领域的泛化已经在发生，所以他"几乎确定"这不是真正的障碍。

</div>

---
layout: two-cols
---

# SWE 自动化：一条很长的光谱

Dario 反复强调，人们误解了他关于"90% 的代码由 AI 写"的预测。写代码 ≠ 替代工程师。

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">

"90% of code is written by the model, 100% of code is written by the model and that's a big difference in productivity"

</div>

<div class="mt-3 text-sm">

关键区分：

- **90% lines of code** = 已经发生
- **100% lines** = 更大的生产力飞跃
- **90% end-to-end SWE tasks** = 包含编译、环境配置、测试、写文档
- **100% SWE tasks** ≠ 工程师失业——会出现更高层级的新工作
- **90% less demand for SWEs** = 会发生，但这是光谱的远端

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./swe-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 生产力悖论：Anthropic 内部看到了什么？

<div class="text-sm opacity-60 mb-4">Dwarkesh 和 Dario 在"AI 真的让人更高效吗"上展开了激烈交锋</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### Dwarkesh 的质疑

一项研究发现：有经验的开发者在使用 AI 工具时**自我感觉更高效**，但实际合并的代码量反而**下降了 20%**。

宏观上也看不到"软件复兴"——如果 AI 真的带来了巨大生产力提升，为什么没有大量新产品涌现？

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Dario 的回应

<div class="p-2 bg-white rounded italic text-sm mt-2">

"within anthropic this is just really unambiguous ... these tools make us a lot more productive"

</div>

<div class="text-sm mt-2">

Anthropic 面临巨大的商业压力和安全投入——没有时间"假装"高效。工程师说以前自己写的 GPU kernel，现在让 Claude 写。

</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Dario 的量化估计**：当前 coding model 提供约 **15-20% 的全要素加速**（6 个月前大约 5%）。这是一个正在加速的 snowball——10% → 20% → 25% → 40%...

</div>

---
layout: two-cols
---

# 经济扩散——两条快曲线

Dario 的核心框架：别在"AI 会立即改变一切"和"AI 扩散很慢"之间选边站。

<div class="mt-3 text-sm">

有一条**能力指数曲线**（模型变强的速度），还有一条**扩散指数曲线**（技术进入经济的速度）——两条都很快，但不是无限快。

</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">

"fast adoption but not infinitely fast"

</div>

<div class="mt-3 text-sm">

扩散延迟的原因很具体：企业需要走法务流程、配置安全权限、说服领导层、三千名开发者需要 roll out 计划……大企业采纳 **Claude Code** 比初创公司慢好几个月。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-exponentials.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "Diffusion is cope"——Dwarkesh 的 Hot Take

<div class="text-sm opacity-60 mb-4">主持人 Dwarkesh 对"扩散延迟"这个概念提出了尖锐挑战</div>

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded italic">

"I feel like diffusion is cope that people use to say when it's like if the model isn't able to do something they're like oh but the diffus it's like a diffusion issue."

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200 text-sm">

### Dwarkesh 的论点

AI 相比人类有天然的扩散优势：
- 几分钟内读完你的 Slack 和 Drive
- 可以复制已验证的 AI 实例
- 没有招聘的逆向选择问题
- 人类工资 $50 万亿/年 → 说明雇人比 AI 更麻烦

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200 text-sm">

### Dario 的让步

扩散确实比以往技术**快得多**，但不是无限快。他用 **Claude Code** 做例子：个人开发者几天就能上手，但大型金融/药企需要经过法务、安全、合规、层层审批——快，但需要时间。

</div>

</div>

---
layout: two-cols
---

# Anthropic 收入：10x 每年

Anthropic 的收入增长数据几乎令人难以置信：

<div class="mt-3 text-sm">

- **2023**：0 → ~$100M
- **2024**：$100M → ~$1B
- **2025**：$1B → ~$9-10B
- **2025 年 1 月**：又增加了数十亿

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">

"there's this bizarre 10x per year growth in revenue that we've seen"

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

Dario 承认这条曲线不可能永远持续——GDP 就这么大。但他赌的是：即使增速从 10x 降到 3-5x，在达到万亿美元规模时仍然极其惊人。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./revenue-10x.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 万亿收入预测

<div class="text-sm opacity-60 mb-4">Dario 做了一个大胆但有限定条件的预测</div>

<div class="p-5 bg-green-50 border-2 border-green-400 rounded text-center">

<div class="text-sm opacity-70">行业整体</div>
<div class="text-3xl font-bold text-green-700 my-3">Trillions in revenue before 2030</div>
<div class="text-sm opacity-70">"It is hard for me to see that there won't be trillions of dollars in revenue before 2030"</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 乐观路径

技术指数 + 扩散指数同时加速 → 2028 前达到万亿

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 保守路径

2028 实现 country of geniuses → 收入在低千亿 → 然后 geniuses 加速到万亿 → 2030 前

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**作者概括**：Dario 还预测 AI 驱动下经济增速可能达到 10-20%/年——远超历史水平，但不是 300%。硅谷可能是 50%，而世界其他地方增速可能没那么快，这种地理不均衡让他担忧。

</div>

---
layout: two-cols
---

# 算力采购困境

这是整个采访中最精彩的商业分析之一：买算力就像赌博。

<div class="mt-3 text-sm">

假设你 2027 年的收入会是 $1 万亿。你能预购 $5 万亿的算力吗？

如果收入只有 $8000 亿——没有任何对冲能拯救你，破产。

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">

"if the growth rate is 5x a year instead of 10x a year, then then you know that you go bankrupt"

</div>

<div class="mt-3 text-sm">

Dario 说他口中的"负责任"不是说 Anthropic 花钱少——而是他们认真做了电子表格、理解了风险。他暗示某些竞争对手"没有写过那张 spreadsheet"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./compute-dilemma.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 行业均衡：为什么是 3-4 家公司？

<div class="text-sm opacity-60 mb-4">Dario 从经济学教科书角度分析了 AI 行业的长期结构</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 不会是垄断

Dario 明确说"I don't think this field's going to be a monopoly"——没有 Facebook 式的网络效应，而是云计算式的高准入门槛。

三到四家玩家，高进入壁垒，模型之间有差异化。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 比云更有差异化

Claude、GPT、Gemini 各有擅长——不只是"Claude 擅长 coding，GPT 擅长 math"，而是更微妙的风格差异。

这种差异化意味着比云计算更高的利润空间。Dario 认为这是一个 Cournot 均衡。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**盈利模型**：每个模型本身是盈利的（推理有 >50% 毛利），但公司整体在亏损——因为你同时在花更多钱训练下一代模型。当训练规模增长趋于稳定后，底层经济学是盈利的。

</div>

---

# Claude Code 的诞生故事

<div class="text-sm opacity-60 mb-4">Dwarkesh 惊讶于 Anthropic 从模型公司变成了应用公司——Claude Code 是编程 agent 领域最激烈竞争中的领跑者</div>

<div class="p-5 bg-blue-50 border-2 border-blue-200 rounded">

<div class="text-sm">

**2025 年初**：Dario 判断模型已经能给 AI 公司自身的研究带来"非平凡的加速"，鼓励内部人员实验各种 harness

**内部涌现**：一个最初可能叫 "Claude CLI" 的工具在内部快速普及——几百名工程师都在用，产品-市场匹配已经出现

**外部发布**：Dario 看到内部采纳速度后决定公开发布——"we already have product market fit"

**反馈飞轮**：内部开发者用 → 发现痛点 → 改进模型和产品 → 外部百万用户 → 更多反馈

</div>

</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

Dario 解释了为什么 Anthropic 做了 coding 工具而不是制药公司——虽然他本人背景是生物学，但做自己员工最需要的东西才能获得最快的反馈循环。

</div>

---

# API 比你想的更持久

<div class="text-sm opacity-60 mb-4">当 AI 能做越来越多的事情时，token 定价的 API 模型还能存活吗？</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 为什么 API 长存

<div class="text-sm mt-2">

技术快速进步意味着永远有一层"最近三个月涌现的新用例"——任何固定的产品界面都有过时的风险。

API 提供了最接近 bare metal 的访问，让千百个创业者实验 → 百个变成 startup → 十个成为大公司。

</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 但 token 不等值

<div class="text-sm mt-2">

"Restart your Mac" 的回答值几美分；告诉药企"把这个芳香环从分子这头移到那头"的回答可能值数千万美元。

未来一定会出现按结果付费、按工时付费等新模式——但 API 会与它们共存。

</div>

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">

"the chatbot is already running into limitations of, you know, making it smarter doesn't really help the average consumer that much. But I don't think that's a limitation of AI models."

</div>

---

# 上下文长度：工程问题，不是研究问题

<div class="text-sm opacity-60 mb-4">Dwarkesh 指出 2020-2023 年上下文从 2K 涨到 128K，但之后两年进展不大</div>

<div class="p-5 bg-blue-50 border-2 border-blue-200 rounded">

<div class="p-3 bg-white rounded italic text-sm">

"This isn't a research problem. This is an engineering and inference problem"

</div>

<div class="text-sm mt-3">

Dario 认为上下文长度的瓶颈是**推理侧的工程问题**——存储 KV cache、在 GPU 间调配内存——而不是研究突破。

关键洞见：如果你在**短上下文长度**上训练，然后在**长上下文**上推理，会出现质量下降。要获得真正的长上下文，你需要在长上下文上训练——这更贵、更难，但不是原理性障碍。

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**上下文 = 在职学习**：百万 token 相当于人类几天到几周的阅读量——足以做很多"on the job learning"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**持续学习**：Anthropic 也在研究真正的 continual learning，Dario 觉得 1-2 年内会有进展，但可能不需要它就能达到 country of geniuses

</div>

</div>

---

# 持续学习——真正的障碍还是虚晃一枪？

<div class="text-sm opacity-60 mb-4">Dwarkesh 担心"持续学习"是 AI 缺失的关键能力——但 Dario 认为它可能根本不重要</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 怀疑者的论点

大多数岗位需要"在职学习"——入职后数月才变得有用。如果 AI 不能做到这一点，怎么替代白领工作？

而且历史上总有"新发现的缺失能力"——也许解决了持续学习，又会发现新的障碍。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Dario 的反论

ML 历史上充满了"看似重要的障碍最终被 big blob of compute 溶解"的例子。

<div class="p-2 bg-white rounded italic text-sm mt-2">

"people talked about ... they can understand syntactically, but they can't understand semantically ... suddenly it turns out you can do code and math very well"

</div>

Coding 的经验证明：代码库本身就是"外部记忆脚手架"，不需要持续学习就能高效工作。

</div>

</div>

---

# 机器人：再加一两年

<div class="text-sm opacity-60 mb-4">有了 country of geniuses 后，robotics 会被迅速解决吗？</div>

<div class="p-5 bg-blue-50 border-2 border-blue-200 rounded">

<div class="text-sm">

Dario 认为 robotics 不依赖于某一种特定的学习方式——它可以通过以下任何路径实现：

</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-green-50 text-sm text-center">

**路径 A**<br/>
在大量视频游戏和模拟环境中训练 → 泛化

</div>

<div class="p-3 rounded bg-orange-50 text-sm text-center">

**路径 B**<br/>
Continual learning 突破 → 像人类一样"拿起机器人就学会"

</div>

<div class="p-3 rounded bg-purple-50 text-sm text-center">

**路径 C**<br/>
In-context learning → 在超长上下文中理解物理控制

</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

Country of geniuses 不仅能控制机器人，还能**设计更好的机器人硬件**。机器人产业也能产生万亿收入——但扩散延迟同样适用，大概再多等一两年。

</div>

---

# 安全与监管：Anthropic 的立场

<div class="text-sm opacity-60 mb-4">田纳西州试图禁止 AI 提供情感支持——而联邦层面有人想禁止州政府监管 AI 10 年</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 反对联邦禁令

<div class="text-sm mt-2">

有人提议禁止各州对 AI 立法 10 年——且没有联邦替代方案。考虑到生物恐怖主义和自主性风险的时间线，10 年是"an eternity"。

Dario 认为这"will not age well"。

</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 支持联邦统一标准

<div class="text-sm mt-2">

理想方案是联邦制定标准、各州不得另行规定——preemption，而不是真空。

渐进路线：先从**透明度**开始，当具体风险出现（比如 AI 生物恐怖主义）时快速立法应对。

</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

Dario 更担心的不是聊天机器人法案，而是**药物审批流程**——AI 将大幅加速药物发现，但 FDA 的 pipeline 会堵塞。他认为应当改革审批流程，因为 AI 发现的药物将拥有"crisp and clear"的安全性和有效性证据。

</div>

---

# 出口管制与中国

<div class="text-sm opacity-60 mb-4">Dario 是芯片出口管制的坚定支持者——但原因不只是商业竞争</div>

<div class="p-5 bg-red-50 border-2 border-red-200 rounded">

<div class="grid grid-cols-2 gap-4">

<div class="text-sm">

### 为什么不能让中国也有 country of geniuses？

1. **核武器般的局面但更危险**：不确定哪个 AI 会赢 → 不稳定性
2. **政府压迫人民**：高科技威权国家 + 强 AI = 极难推翻的压迫
3. **初始条件很重要**：在"AI 世界秩序"的谈判桌上，民主阵营应该有更强的筹码

</div>

<div class="text-sm">

### 但现实是...

Dario 承认出口管制应该是最直接的国家安全政策——两党都支持。但因为涉及巨额利润，"the counterarguments against it are I'll politely call them fishy"，管制还是很难落实。

</div>

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**重要区分**：Dario 强调他担心的是**政府**而不是**人民**——中国人民应该享受 AI 带来的健康和经济好处。芯片和数据中心不卖，但药物的治疗可以。

</div>

---

# 独裁体制在 AI 时代将"道德上过时"

<div class="text-sm opacity-60 mb-4">这是采访中最大胆的论断之一</div>

<div class="p-5 bg-purple-50 border-2 border-purple-300 rounded italic text-lg">

"dictatorships become morally obsolete. They become morally unworkable forms of government."

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 历史类比

工业化让封建制度变得不可持续。AI 可能对威权体制做同样的事——不是通过军事干预，而是因为技术本身的属性使得对人民的控制变得不可能或成本极高。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 但也可能反过来

Dario 承认互联网曾被寄予同样的希望（Obama 时代），结果威权体制反而利用了它。他说值得"try again with the knowledge of how many things could go wrong"。

</div>

</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

一个大胆的想象：能否让 AI 为威权国家的每个人提供私人模型，帮助他们抵御监控——使得"否认个人化技术访问"成为掌权的代价？

</div>

---

# 发展中国家：内生增长，不只是施舍

<div class="text-sm opacity-60 mb-4">Dario 最担心的分配问题不是发达国家内部，而是全球南北差距</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 问题

传统的追赶式增长依赖"利用闲置劳动力 + 引入发达国家的资本和知识"。当劳动力不再是约束因素时，这个机制就失效了。

<div class="text-sm mt-2 opacity-70">发达国家市场运作良好，Dario 不太担心药物/技术的好处被管制阻断——因为钱的力量会推动采纳。</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Dario 的方案

- **在非洲建数据中心**——"there's no reason we shouldn't build data centers in Africa"
- 确保一些 AI 驱动的生物科技创业**发生在发展中国家**
- 在过渡期间，让当地人在这些公司中担任监督 AI 的角色
- 慈善事业配合（与 Gates Foundation 等合作），但最好让增长成为**内生的**

</div>

</div>

---
layout: two-cols
---

# AI 宪法：三层治理循环

Dario 解释了 AI 宪法如何制定和迭代——不是一次写死，而是三层嵌套的反馈循环。

<div class="mt-3 text-sm">

**设计选择**：原则 > 规则。给模型一串"do/don't"列表不如教它理解原则——"its behavior is more consistent. It's easier to cover edge cases"。

模型本质上是**高度可驯化的**（coreable）——大多数时候应该做用户想做的事。但有硬性底线：不造生物武器、不伤害他人。

</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

Dario 认为竞争中的宪法就像"archipelago of different governments"——不同公司的宪法互相借鉴，外部观察者可以批评，市场选择最好的。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./governance-loops.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# DVQ 与公司文化

<div class="text-sm opacity-60 mb-4">最后一个问题：一个 CEO 怎么能每隔几个月写 50 页长文？</div>

<div class="p-5 bg-blue-50 border-2 border-blue-200 rounded">

<div class="grid grid-cols-2 gap-4">

<div class="text-sm">

### DVQ — Dario Vision Quest

每两周面对全公司讲话一小时。3-4 页文档，涵盖内部模型进展、产品、行业动态、地缘政治。

名字不是他起的——"I tried to fight it because it made it sound like I was like going off and smoking peyote"，但名字就这么留下了。

</div>

<div class="text-sm">

### Slack 上的坦诚

在 Slack 频道里大量写作和回应——对内部调查中人们担忧的问题直接作答。

核心目标：建立"说真话"的声誉，避免 corpo speak，在信任的团队中完全 unfiltered。

</div>

</div>

</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

Dario 说他大约 **30-40% 的时间用于维护公司文化**——确保 2500 人都感受到使命感、团队合作、不搞内耗。他暗示某些竞争对手在这方面做得不好："we're starting to see decoherence and people fighting each other"。

</div>

---

# 历史将遗漏什么

<div class="text-sm opacity-60 mb-4">当有人写 AI 时代的《原子弹的诞生》时，最难从历史记录中看到的是什么？</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 公众的无知

<div class="text-sm mt-2">

在指数的每一个时刻，外部世界对它的理解程度之低。任何已经发生的事情在回顾时都看起来"inevitable"，但在当时，这是一场50/50的赌注。

</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 速度之快

<div class="text-sm mt-2">

一切都在同时发生。你可能觉得某个决策是深思熟虑的，但实际上那天还有30个其他决策要做，你甚至不知道哪个最终会改变历史。

</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 午餐时间的选择

<div class="text-sm mt-2">

<div class="p-2 bg-white rounded italic">

"someone just comes into my office and is like, Dario, you have two minutes ... should we do thing A or thing B ... I'm like, I don't know. I have to eat lunch. Let's do B."

</div>

</div>

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-2">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"The most surprising thing has been the lack of public recognition of how close we are to the end of the exponential."
<div class="text-xs opacity-60 mt-1 not-italic">— 公众认知与技术现实的鸿沟</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"all the cleverness, all the techniques ... doesn't matter very much"
<div class="text-xs opacity-60 mt-1 not-italic">— Big Blob of Compute 假说核心，2017 年至今未变</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"there's this bizarre 10x per year growth in revenue that we've seen"
<div class="text-xs opacity-60 mt-1 not-italic">— Anthropic 的增长曲线</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"if the growth rate is 5x a year instead of 10x a year, then then you know that you go bankrupt"
<div class="text-xs opacity-60 mt-1 not-italic">— 算力采购的生死赌注</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"within anthropic this is just really unambiguous ... these tools make us a lot more productive"
<div class="text-xs opacity-60 mt-1 not-italic">— 驳斥 AI 生产力幻觉论</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"dictatorships become morally obsolete. They become morally unworkable forms of government."
<div class="text-xs opacity-60 mt-1 not-italic">— AI 时代独裁体制的终局</div>
</div>

</div>

---
layout: end
---

# "We are near the end of the exponential"

<div class="mt-4 text-lg opacity-70">Dario Amodei · Dwarkesh Podcast · 2025</div>

<div class="mt-8 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded">

"if we're one year or two years away from it happening like the average person on the street has no idea"

</div>
