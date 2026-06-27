---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The Limits of AI in Science: Why We Need Self-Driving Labs — Joseph Krause, Radical AI'
info: |
  Joseph Krause（Radical AI CEO）在 Latent Space 聊为什么材料科学不是"AI for bio"——
  没有 SMILES 字符串能描述一块合金，一个模型也无法 one-shot 出能装进 iPhone 的新材料。
  解药是自驱实验室：让 AI scientist 自己规划 campaign、自己跑实验、自己看 SEM 图。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# The Limits of AI in Science<br/><span class="text-3xl">Why We Need Self-Driving Labs</span>

<div class="mt-6 text-xl opacity-80">Joseph Krause · CEO, Radical AI</div>

<div class="mt-2 text-sm opacity-60">Latent Space · 2026</div>

<div class="mt-10 px-12 text-base opacity-75 italic">
关于"为什么材料不是 bio"、SDL 与 Waymo、1,200 块合金 vs DARPA MACH 的 500 块，<br/>
以及 models aren't the moat, experiments are.
</div>

---

# 这一期为什么值得听

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个根本性的差异
**没有"材料版的 SMILES"**——合金的真值不在字符串里，在实验台上。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一个新词："自驱实验室"
自动化实验室 ≠ self-driving lab。前者像 hands-free 驾驶，后者像 Waymo。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 一组震撼数字
3 个月做了 **1,200 块合金**，**300 块全新**——对比 DARPA + GE 一年做 500 块。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 一个反共识结论
材料行业**不缺算力，缺实验**。模型不是壁垒，**实验数据才是**。

</div>

</div>

---

# 嘉宾：Joseph Krause

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**履历**

- 材料科学训练（PhD 方向：metallurgy/alloys）
- 毕业第一份工作：**材料科学方向的投资**
- 现为 **Radical AI** CEO + 联合创始人
- 通勤路上 Latent Space 的忠实听众

**公司：Radical AI**

- 创立于 ~2.5 年前
- 做 **inorganic material science**（无机材料）
- 核心赌注：**self-driving lab + experimental data**
- 一份对照名单：Lila / Citrine / Periodic / Google DeepMind / Microsoft / Meta

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 起点：一个"疯子的赌注"

> "When we started the company 2 and 1/2 years ago, people would have thought we were crazy. That's CAPEX intensive."

2 年半前提自驱实验室，几乎所有人都觉得这是个昂贵的笑话。<br/>
今天连 Google DeepMind 都在搭。

**赌赢的方向感**：在材料里，模型不是真值，**材料本身才是真值**。

</div>

</div>

---

# 核心论点：材料的真值在实验台上

<div class="mt-6 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"In materials, the ground truth is the material itself. You have to be able to make it, you have to be able to test it and characterize it, and then you have to really at one point be able to see if it can go into a real application."

</div>

<div class="mt-6 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Make it
能不能造出来？

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Test it
能不能表征、性能验证？

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Ship it
能不能进真实产品（iPhone / Starship）？

</div>

</div>

<div class="mt-6 text-sm opacity-70">
👉 三个问题里，AI 今天能帮上忙的只有 1.5 个。下游的两个，AI 模型解决不了——**只能跑实验**。
</div>

---
layout: two-cols
---

# AI for bio vs. AI for materials

**生物 / 小分子**：分子可以编码成字符串（SMILES、SELFIES），因为你知道元素和键。<br/>
→ 一个模型有机会 one-shot 出候选。

**材料 / 合金**：根本就没有那个字符串。<br/>
真实的合金 = 成分 + 供应链 + 成本 + 微观结构 + 处理工艺 + 量产行为 + 资质认证。

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-sm">

"There is no one model that can one-shot a new material that ends up in your iPhone or that ends up on Starship."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./bio-vs-materials.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么材料的研发是 15–30 年

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**Joseph 的诊断**：行业被切成几段，**数据从来不在段之间流动**。

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**学术界** ▸ 做发现 + 小尺度测试

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**小公司** ▸ 做轻量测试（多由 DoE / DoW / NSF 支持）

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**大公司** ▸ 把现有材料体系再优化 5%–10%，吃掉利润

</div>

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Qualification：硬天花板

民航飞机里换一种合金，要走 **FAA 认证**——历来是**一个 10 年的流程**。

</div>

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500">

### 而且这条 timeline 不能砍

> "I'm flying back to New York tonight. I certainly don't want that bar to be removed."

人命在 jet turbine 上，**没人想动 FAA 的标准**。

</div>

<div class="mt-4 text-sm opacity-70">
所以路径不是绕开 FAA——是**重新设计你怎么生成那些数据**。
</div>

</div>

</div>

---

# 在做的是什么材料？高熵合金（HEA）

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 配方
**5–7 种元素**，原子比近似相等。<br/>
"really exotic" 的体系。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 适用环境
**超高温**：2,000 – 3,000 °C<br/>
**超高压**：space / 重返大气层<br/>
**腐蚀环境**：核反应堆中子轰击<br/>
**氧化环境**：jet turbine、防务

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 行业现状
过去 **50 年用的是同一批合金**。<br/>
原因？发现周期太长。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 搜索空间
理论上有 **~10⁴⁰** 种潜在合金。<br/>
按人类速度做完？**7 million years**。

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
👉 这就是为什么 Radical 不是在"再优化已有合金"——是在**真的造新东西**。
</div>

---

# 一个借来的词："concurrent engineering"

<div class="mt-6 p-5 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

"We stole this term from a gentleman named Charles who's the VP of materials at SpaceX, which is called concurrent engineering. And it's this idea that I can actually design my materials as I'm designing my product."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 老世界
你用现有材料**去配合**你的产品。

> "The alloys that are in the plane I flew here on——1950s, 1960s, 1970s. They might be coated with some CMZs from the late 1990s."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Concurrent engineering
设计产品的**同时**发明匹配它的新材料。<br/>
rocket booster、jet turbine、missile、solar cell 都成立。

要走通这条路，前提是：发现周期必须从十年压缩到月。

</div>

</div>

---

# 一个被低估的瓶颈：供应链

<div class="grid grid-cols-2 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-300">

### Hafnium 价格变化
<div class="text-4xl font-bold text-red-600 my-2">10–15×</div>
<div class="text-xs opacity-70">中国控制大部分供应链<br/>C103 合金里 ~10% 重量是 Hafnium</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-300">

### 客户的新需求
<div class="text-2xl font-bold text-orange-600 my-2">"能不能去掉它？"</div>
<div class="text-xs opacity-70">同样的性能<br/>但拿掉方程里的一半信息</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-300">

### Radical 的回应
<div class="text-2xl font-bold text-green-600 my-2">已经做过了</div>
<div class="text-xs opacity-70">"We have successfully done that."</div>

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

**两个行业的反差**：

- **航天/防务**：performance is everything，**cost 不是第一**——他们不在乎 nose cone 贵
- **消费电子 / 医疗器械**：cost-sensitive——"有些合金能进 iPhone，但会让它贵到没人买"

</div>

---

# 第一组震撼数字

<div class="grid grid-cols-2 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-300">

### 行业基线：DARPA MACH
<div class="text-3xl font-bold text-blue-600 my-2">500 alloys / 12 mo</div>
<div class="text-xs opacity-70">DARPA × GE Aerospace<br/>"the largest alloys program"</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-300">

### Radical 今天
<div class="text-3xl font-bold text-green-600 my-2">1,200 / 3 mo</div>
<div class="text-xs opacity-70">"500 in 5 business days" 是目标<br/>已经做到 1,200 / 季度</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-300">

### 其中全新合金
<div class="text-3xl font-bold text-orange-600 my-2">300 novel</div>
<div class="text-xs opacity-70">文献里从未出现过<br/>"never before seen in literature"</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-300">

### 有趣的性能
<div class="text-3xl font-bold text-red-600 my-2">~10</div>
<div class="text-xs opacity-70">"performance that has got us very excited"<br/>部分在申请专利</div>

</div>

</div>

<div class="mt-6 text-center text-sm opacity-70">
量级跳跃约 <strong>一个 order of magnitude</strong>，目标 100/day 在 2026 年夏季达成。
</div>

---
layout: two-cols
---

# 自驱实验室 ≠ 自动化实验室

**自动化实验室（automated lab）**
你设定要跑什么，机器替你高通量地跑——但**campaign 是你定的**。

**自驱实验室（self-driving lab）**
机器自己跑"研究 campaign"——自己挑下一组实验、自己学习、自己决定该停。

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm italic">

"One of them is like hands-free driving... Now compare that to a Waymo... you don't even need to know to make a left. You get in the car, you can close your eyes."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sdl-vs-automated.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Lifespan of a material：把所有阶段串成闭环

Joseph 的"北极星"：让 AI scientist 看到一块材料的**全生命周期**——而不只是 hypothesis 那一步。

<div class="mt-4 space-y-2 text-sm">

✅ **Discovery** — AI 提 hypothesis<br/>
✅ **Synthesis** — 在 lab 里造出来<br/>
✅ **Characterization** — SEM / XRD / EDS / XRF / TGA<br/>
✅ **Lab-scale property testing** — oxidation / tensile / microindentation<br/>
🔴 **Manufacturing** — *尚未打通*<br/>
🔴 **Qualification** — *FAA / mil-spec，10 年量级*

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

> "I see this lifespan of the material. Now I can use that to go pick more materials targeted at the right applications."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./materials-lifespan.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 今天的吞吐和经济模型

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 单次实验成本
**$60 – $300**（按元素定）

铂、钯贵；铝、钛便宜。耐火金属（refractories）更难铸造，吞吐会下到 8。

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500">

### 当前吞吐
**8 – 20 次实验 / 天**（整个 lab）

夏季目标：**100 / 天**，跨所有材料体系。

</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 实验里 AI 替代了哪些？

- ✅ **生成 hypothesis**：全部由 AI scientist 出
- ✅ **表征**（SEM/XRD…）：全自动，人只做事后标注
- ✅ **微压痕、氧化测试**：全自动
- 🟡 **拉伸测试**：快了，目标年内全自动
- 🟡 **合成（synthesis）**：暑期前打通——目前还需要 PhD 在场盯熔融

</div>

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm">

**一个 mindset shift**："I'm making eight of them today, 20 of them today... I don't really care about taking a shot on goal."<br/>
读 PhD 一年做 ~50 个实验，每个都珍贵；AI scientist 不在乎单次输赢。

</div>

---

# AI scientist 与人类科学家的最大差异：并行

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 人类科学家（serial）

读论文 → 提 hypothesis → 跑 DFT/MD/ML → 实验合成 → 看 2 周表征图 → 闪一念 → 再循环

> "If I take a 100 SEM images, I don't memorize all 100. I'd love to think I could. My advisor would have loved if I could."

每张图只能挑一两个 takeaway。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### AI scientist（parallel）

> "Now I can read 100,000 publications and then directly compare them to 100,000 SEM images at the same time."

**实时**地：
- 记住所有看过的 SEM 图
- 把它们连回 hypothesis
- 反向连回机械性能数据

这种"并行的工作方式"是人类没有的维度。

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">

**意外结果**：AI scientist 跑进了文献里从来没人去过的元素组合。问人类科学家"为什么你从来没考虑过？"——大多是 *"I didn't think it would cast / I thought it would evaporate"* → **隐性偏见**。

</div>

---

# War story：工具厂商不给 SDK

<div class="mt-6 p-5 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

"A few very big tool vendors were not too excited about self-driving labs 2 years ago. They were not jumping to give us, even with payment, access to the software and pulling the data. That tone has now changed."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 为什么他们不愿意？

工具厂商卖的不只是硬件——是"**用我家软件分析这台机器的数据**"。<br/>
如果你能直接拿原始数据，他们的软件就不重要了。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 怎么破？

> "There was a whole two-week sprint that we had to figure out how we could programmatically control all this tool."

软件工程团队**用两周硬怼出了控制层**——现在该厂商已经成了 Radical 的合作伙伴。

</div>

</div>

<div class="mt-3 text-sm opacity-70">

**更深的意味**：在 SDL 普及前，没人想到要做"给机器人用的接口"——这一点 Joseph 后面会上升到 industry call to action。

</div>

---

# 反共识结论：行业不缺算力，缺实验

<div class="mt-6 p-5 italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 text-lg">

"We're not compute constrained in the materials industry. We're experiment constrained."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### ML 工程师的反应

> "When I talk to the ML side, they're like, 'How are you going to get the millions of millions of data points?' And I'm like, 'I just don't think you need to.'"

每块合金能产 **50–150 个数据点**（图、谱、性能）。1,200 块 = 一个**小**数据集——但已经够撬动新发现。

</div>

<div>

### 对照：drug discovery / NGS

next-gen sequencing 可以做到上亿样本量。材料像是 **ligand-based modeling** 的早期——**小样本 + 局部模式**。

Joseph 不否认这点；他赌的是**实验数据本身**最稀缺，而不是模型聪明程度。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

**自然推论**：把资本砸在 100 块 H100 上意义不大；砸在 1,000 台 XRD / SEM 上就完全不一样了。

</div>

---

# 一个共识：材料没有 AlphaFold

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Heather Kulick 的判断（在 Latent Space 之前的一期）

"There is no AlphaFold for materials."

Joseph：**同意**。

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500">

### 局部可以有 "AlphaFold moments"

- ✅ SEM 图像分割
- ✅ 在裂纹 / 缺陷 / dendrite 上做 detection
- ✅ ML interatomic potentials（MLIP）

</div>

</div>

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 全局没有

> "You can't go from 'I have this new hypothesis' to 'I have a new material, it's scaled, it's done, it's in products in your iPhone.'"

**蛋白质问题**：序列 → 三维结构。<br/>
**材料问题**：组成 + 处理 → 微观结构 + 整套量产可行性 + 供应链 + 资质。

</div>

<div class="mt-4 text-sm opacity-70">

每种无机材料都有不同的约束维度——这就是为什么需要 SDL，**而不是一个超大模型**。

</div>

</div>

</div>

---

# 中国问题：如何不复制对方、又赢过对方

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 中国的"不公平优势"

中国会直接搭"manufacturing innovation hub"——新材料一出来，立刻投资、配套设施、推进规模化。

> "In China, whether you're public or private, one entity owns everything."

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 不要复制的部分

"In no way am I suggesting that. What I'm saying is because they have that, we need to have a similar focus."

</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### Joseph 的三层对策

**1. 教学** — 下一代科学家学会"一个人跑 10 个 campaign"——而不是 10 人跑 1 个。

**2. 投资** — Genesis mission、Argonne / Ames / Livermore / Oak Ridge 都在建 SDL。

**3. 公私合作（核心）** — HPC + 顶尖科学家 + 国家级实验数据 + 私营 SDL 闭环。

> "That's the only way we can compete... If we do not do that, then they will continue to win."

</div>

</div>

</div>

---
layout: two-cols
---

# AI 栈：一个多智能体的"AI scientist"

> "It's a multi-agent approach. There are multiple agents that sit within what the AI scientist is."

**顶层：Orchestrator**
出新 hypothesis、做内部"自我检验"再发到实验室。

**支持智能体**：
- 文献综述 agent（自家 benchmark，公开）
- 内部实验数据库（每个 campaign 喂回来）
- **Matrix VLM**：在 Qwen 上 fine-tune 的视觉模型，专门看实验图
- Cal Fad、Caltech 数据集等行业标准数据

<div class="mt-3 text-sm opacity-70">

**惊喜结果**：Matrix 不仅会看实验数据，通用科学推理也提升了 **5–16%**（论文在 arXiv）——看懂图就能更像个 scientist。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-scientist-stack.excalidraw"
  class="w-[520px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 开源的真实理由：模型不是壁垒

<div class="mt-6 p-5 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 text-lg">

"We actually don't think models are the moat. We actually think in five years most models will be open-source... In science, models aren't the moat, experiments are."

</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1. 社区
材料圈需要集体迁移到"用 SDL 做科学"。开源是最有效的传染机制。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2. 学习
**Torch Sim** 开源后社区反馈+想法太多，已经独立成非营利组织。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 3. 战略
"What happens if someone else comes out with a better foundation model?"<br/>
"That would be amazing. We'll drop it right into our stack."

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm">

**真正的壁垒**：不是 LLM、不是 MLIP、不是 diffusion model——而是**你能跑、能记录、能反馈回去的真实实验**。任何竞争对手都没法一夜复制。

</div>

---

# 那个最难解的瓶颈：feedback loop is long

<div class="mt-6 p-5 italic border-l-4 border-red-500 bg-red-50 bg-opacity-30">

"The hardest part about AI for science is that our feedback loops are long... AI in math, you can run a lot of experiments in hours that will take us weeks or years to run in science. How do you get around that problem?"

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Joseph 自己承认：这是 fundamental

"It's a bad answer to the question."

**唯一缓解方式**：堆物理基础设施。<br/>
*"Build a facility with 1,000 XRDs or SEMs"* —— 那时你能训出全世界最好的图像分析模型。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个 non-fundamental 的瓶颈

"I would have the tool providers restart their stack. Their tools are built for humans, they should build them for **agents and robots**."

> "If you could do that at the infrastructural level for tooling, it would supercharge this industry."

类比：软件里 CLI 和 MCP 已经在这么做了。

</div>

</div>

---

# 给 MLE 的 call to action

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 不要做的

> "I meet ML engineers that are like 'I want to be a material scientist.' I'm like, 'why?'"

材料科学家也不要试着变成 ML 工程师。**双向都不要试图当对方**。

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 要做的：lean into your expertise

> "Bring a first-principle perspective to the way we do science. We have been doing science the same way for hundreds of years."

ML 工程师的视角："为什么这个不直接交给一个 material model？" —— material scientist 想不到，但你想得到。

</div>

</div>

<div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 一个生动例子

Radical 的 ML 工程师不会在 "dendritic formation" 和 "grain boundary" 上卡住——他们只问：

> "Why don't you just save a material model for that?"

材料科学家：*"I don't know what that is. That's not the first thought I have when I look at an SEM."*

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 一个判断

> "These specialized agents that are really good at one thing... together collectively they make a scientist that's better than Joseph."

</div>

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"In materials, the ground truth is the material itself."
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么 Joseph 赌"自驱实验室"而不是更大的模型</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"There is no one model that can one-shot a new material that ends up in your iPhone or that ends up on Starship."
<div class="text-xs opacity-60 mt-1 not-italic">— 解释 AI for bio 与 AI for materials 的根本差异</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"We're not compute constrained in the materials industry. We're experiment constrained."
<div class="text-xs opacity-60 mt-1 not-italic">— 在 GTC 上和别人吵了一架的结论</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"In science, models aren't the moat, experiments are."
<div class="text-xs opacity-60 mt-1 not-italic">— 解释 Radical 为什么大方开源 Matrix、Torch Sim</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"You can read 100,000 publications and then directly compare them to 100,000 SEM images at the same time."
<div class="text-xs opacity-60 mt-1 not-italic">— AI scientist 与 PhD 最根本的能力差</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"Their tools are built for humans. They should build them for agents and robots."
<div class="text-xs opacity-60 mt-1 not-italic">— 一个非根本性但能"supercharge industry"的呼吁</div>
</div>

</div>

---
layout: end
---

# "We're trying to build the protein data bank for materials."

<div class="mt-8 text-base opacity-70">

Joseph Krause · Radical AI · Latent Space, 2026

</div>
