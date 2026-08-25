---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '🔬 "The Most Innovative Diffusion Research Is Happening in Drug Discovery, Not Image Generation"'
class: text-center
transition: slide-left
mdc: true
coverDate: 2026-06-30
themeConfig:
  paginationPagesDisabled: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
drawings:
  persist: false
---

# 最前沿的扩散研究

## 正在药物发现里发生

<div class="mt-10 text-base opacity-80">
Evan Feinberg · Genesis Molecular AI Founder & CEO<br/>
Sergey Edunov · Genesis Molecular AI CTO<br/>
Latent Space · AI for Science
</div>

<div class="mt-8 text-xs opacity-55">
从 PEARL、1 Å 精度与物理先验，到实验闭环和 24/7 药物发现 agent
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 扩散的新主战场

图像与视频之外，3D 蛋白—小分子结构预测正在推动扩散模型的新架构。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 1 Å 是用途门槛

看起来合理不等于对药物化学有用；一个芳香环翻转，就可能让下游判断全错。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### scaling 被重写

预训练合成数据、推理时扩散与物理引导、再到 RL 和实验反馈，形成分子版 scaling 路线。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 不是只预测结构

真正的药物还要同时满足效力、选择性、溶解度、分布、代谢与毒性等 30 多项约束。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### agent 有硬前提

底层 pose、potency 与 ADMET 模型必须先跨过可靠性阈值，否则自动化只会放大错误。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 新 benchmark 暴露差距

OpenBind 的未见靶点测试，让 public benchmark 上被掩盖的外推能力差异显现出来。

</div>

</div>

---

# 两位嘉宾，把两条技术史接在一起

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Evan Feinberg

- 物理与计算机科学背景
- 早期在 Stanford 做图机器学习与分子建模
- Genesis Molecular AI 创始人兼 CEO
- 长期问题：怎样把 AI 变成真实药物，而不只是论文指标

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Sergey Edunov

- 物理背景，后转向软件与机器学习
- 曾在 Meta 领导 Llama 2、Llama 3 预训练
- 现任 Genesis CTO
- 把 LLM scaling 的经验迁移到 3D 分子模型

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-left">

**本期核心问题**：当模型面对的不是互联网文本，而是稀缺结构数据与物理约束时，AI 的 scaling、eval 和 agent 应该怎样重新设计？

</div>

---

# 药物发现没有单一的 iPhone 时刻

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 十年前

机器学习已能在分子任务上创造价值，但 protein–ligand 交互长期抗拒可靠建模。

</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 最近几年

3D complex prediction、合成数据与扩散模型汇合，才让更高精度的 pose 与 potency 预测成为现实。

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 接下来十年

每次小幅提升都会进入下游设计、实验与临床候选选择，形成复利，而不是一次性解决全部药物发现。

</div>

</div>

<div class="mt-8 p-5 bg-purple-50 border-l-4 border-purple-500 text-left">

访谈把 AI 药物发现描述成持续扩大的能力边界：先解决一类可测的问题，再把可靠输出接进下一层工具。

</div>

---
layout: two-cols
---

# 真正缺的是中间这座桥

疾病靶点已知，并不等于已有治疗方案。

- **左侧**：识别导致疾病的基因、蛋白与信号通路
- **中间**：设计足够有效、选择性高、可进入目标组织的分子
- **右侧**：GLP 毒理、IND、临床一期到三期与审批

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500 text-sm">

Genesis 的判断：AI 当前最高杠杆的落点，是把已知 biology 变成可开发的 drug candidate。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./drug-design-gap.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 药物研发是一条串联系统

<div class="grid grid-cols-4 gap-3 mt-5 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 1 · Target ID

疾病由什么基因、蛋白或 signaling cascade 驱动？

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 2 · Drug Design

能否找到高效力、高选择性、可合成的分子？

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 3 · IND Enablement

安全性、药代与组织分布是否支持进入人体？

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 4 · Clinical

在真实患者中，疗效与风险是否通过验证？

</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-4 text-left">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

任何一个必要条件失败，分子就无法成为药。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

结构预测是关键上游，但它只是必要条件之一。

</div>

</div>

---

# 已知 biology，不等于容易 drug

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 纵轴：疾病关联清楚吗？

单基因疾病最明确；其他疾病也可能通过遗传学、肿瘤测序或机制研究定位到明确靶点。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 横轴：靶点容易做成药吗？

蛋白表面是否有合适口袋、能否获得高选择性、是否避开 anti-target，属于另一组问题。

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">

访谈中的关键区分：biology certainty 与 druggability 是正交变量，很多最有吸引力的靶点恰好最难做成药。

</div>

---

# First-in-class 与 Best-in-class 都有价值

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 0 → 1

- 已知靶点与疾病强相关
- 没有专利、论文或已知 binder
- 目标是找到第一批 hits，再推进到生化与细胞活性

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 1 → 10

- 已有临床前、临床或获批分子
- 仍可改善选择性、效力、耐药与安全窗
- 后代药物可能带来定性的生存获益，而非小修小补

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-left">
公开举例：嘉宾用多代 ALK inhibitors 说明，一个靶点已经能被药物作用，并不代表患者价值已经被穷尽。
</div>

---
layout: two-cols
---

# PEARL 预测的不是两张静态图

输入：

- 蛋白质序列
- 小分子 ligand 表示

输出：

- 蛋白与 ligand 的联合 3D complex
- ligand 如何进入 pocket
- 蛋白结构怎样随结合发生适配

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 text-sm">

重点不是单独折叠蛋白，而是共同预测结合后的几何关系；这就是访谈中的 co-folding。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pearl-cofold.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 小分子为什么一点也不小

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 可药样空间

<div class="text-4xl font-bold text-purple-700 my-3">10⁶⁰</div>

访谈给出的可药样小分子数量级

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 每个分子

<div class="text-3xl font-bold text-blue-700 my-3">构象 × 旋转</div>

同一连接图仍可能对应多种 3D 状态

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 目标

<div class="text-3xl font-bold text-red-700 my-3">极少数 outlier</div>

既能结合，又同时满足可开发性质

</div>

</div>

<div class="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-left">

这不是在 haystack 里找一根 needle；更接近在 needle stack 中找少数不会刺伤系统、又真正有用的 hay。

</div>

---

# 没有分子世界的互联网语料库

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 真实结构稀缺

Protein Data Bank 只有约 **20 万**个历史结构，新增晶体或 cryo-EM 结构需要时间、资金与实验能力。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 小分子可被物理模拟

小分子相对更适合用分子动力学与物理方法生成额外训练信号；这让 synthetic pretraining data 成为可行路线。

</div>

</div>

<div class="mt-7 p-5 bg-blue-50 border-l-4 border-blue-500 text-left">

数据策略不是把语言模型语料思路照搬过来，而是用领域物理补足观测数据不足，同时控制模拟偏差。

</div>

---
layout: two-cols
---

# 把 LLM scaling 拆成分子版三段式

**Pre-training scaling**

用物理模拟与合成结构扩大训练分布。

**Inference-time scaling**

扩散头多步迭代，过程中加入 physics-based guidance。

**Post-training / RL**

把物理评分、实验结果逐步接回优化循环。

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

迁移的是 scaling 的结构，不是语言 token 本身。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./molecular-scaling.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 分子模型怎样在推理时思考

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 1 · 初始化

模型先持有尚未完全物化的结构表示，而不是立即输出最终 pose。

</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 2 · 多步去噪

扩散 head 本身就是迭代过程，每一步都在修正预测结构。

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 3 · 物理引导

在迭代途中加入物理方向信号，把输出推向更可行的几何与相互作用。

</div>

</div>

<div class="mt-7 p-5 bg-purple-50 border-l-4 border-purple-500 text-left">

语言模型用更多 token 展开推理；这里消耗的计算预算，变成对 3D structure representation 的反复精炼。

</div>

---

# 物理先验进入三处，而不是最后打分

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Input

用模拟生成更多预训练样本，并记录现实数据的噪声与可信度。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Model

让网络少重新学习一点人类已经知道的物理结构，同时避免把人类假设硬编码到过度偏置。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Output

输出必须能被 force field、computational chemistry 与 medicinal chemist 的现有工具继续使用。

</div>

</div>

<div class="mt-7 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-left">

可解释性在这里首先表现为可检查、可互操作、可用于下游，而不只是解释 transformer 内某个 neuron。

</div>

---

# 2 Å 的危险：错得很自然

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 图像里的模糊

人眼通常能发现图片不清楚，因此知道不该依赖细节。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 结构里的模糊

芳香环即使翻转，pose 仍可能看起来完全合理；medicinal chemist 却会在错误几何上继续推理。

</div>

</div>

<div class="mt-7 p-5 bg-yellow-50 border-l-4 border-yellow-500 text-left">

最糟糕的输出不是肉眼可见的坏图，而是一个外观可信、物理细节错误、还能顺利进入下游流程的结构。

</div>

---
layout: two-cols
---

# 1 Å 才是可用精度

传统 benchmark 常用 RMSD &lt; 2 Å 判断成功，但药物设计关心的是原子级相互作用。

- 2 Å 误差足以让整个 aromatic ring 方向错误
- pose 会被用于 potency、free energy 与下一轮分子设计
- 上游误差会在多个下游模型中复合

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 text-sm">

1 Å 不是审美上的更清晰，而是从 plausible 走向 chemically useful。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./angstrom-resolution.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一个氢键，就解释了精度门槛

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 距离窗口

<div class="text-4xl font-bold text-blue-700 my-3">2.7–3.3 Å</div>

访谈给出的 donor 到 acceptor heavy atom 范围

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 有效窗口宽度

<div class="text-4xl font-bold text-purple-700 my-3">0.6 Å</div>

已经小于传统 2 Å 成功阈值

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 尺度换算

<div class="text-4xl font-bold text-green-700 my-3">1 Å = 0.1 nm</div>

药物设计需要在这一尺度判断 clash 与弱相互作用

</div>

</div>

<div class="mt-7 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-left">

小于合理距离可能发生原子 clash；大于合理距离，相互作用会迅速减弱。精度直接决定结构能否用于决策。

</div>

---

# Pose 不是全部，但它是可检查的中间层

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 为什么单一 pose 不完整

- 蛋白与 ligand 都可能动态变化
- binding affinity 还包含 enthalpic 与 entropic contribution
- solvent-exposed 部分可能保持更大自由度

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 为什么仍然需要 pose

- 只有一个 potency 数字，很难检查模型是否 hallucinate
- 3D 几何让 chemist 与 agent 能检查相互作用
- 它也是 force field 与下游自由能方法的输入

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-left">
作者概括：pose 是有损抽象，却是把模型输出连接到物理检查与人类判断的关键接口。
</div>

---

# 结构预测之后，还有 30 多道门

<div class="grid grid-cols-5 gap-3 mt-6 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### A
Absorption

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### D
Distribution

</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### M
Metabolism

</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### E
Elimination

</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">

### T
Toxicity

</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-4 text-left">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

约三十多项 assays 中，任一关键性质落入错误范围，候选物就可能只是实验工具，而不是药。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

数据往往很小，部分 endpoint 还是多个 pathway 的合成结果，因此不能期待一个结构模型包办全部任务。

</div>

</div>

---
layout: two-cols
---

# 多目标优化为什么像 whack-a-mole

提高 binding 往往会让分子更 hydrophobic；但更 greasy 的分子通常溶解度更差。

为改善 solubility 增加 polarity，又可能让分子难以穿过细胞膜。

同时还要处理：

- on-target potency
- off-target / toxicity
- permeability 与 tissue exposure
- synthetic accessibility

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-sm">
最优候选通常是少数 Pareto outlier，不是单一指标冠军。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./admet-tradeoffs.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 到 1 Å 的路径：先把目标量对

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Data

过滤噪声结构，决定哪些样本何时进入训练；真实 drug program 持续暴露 failure mode。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Infrastructure

让大规模结构训练、模拟、推理时迭代与评估可重复运行。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Evals

从第一天就 hill-climb sub-Å accuracy，目标会反向影响 architecture、loss 与数据处理。

</div>

</div>

<div class="mt-7 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-left">

访谈给出的答案并不神秘：量什么，团队就会沿着什么方向优化；错误 eval 会把聪明人带到错误山峰。

</div>

---

# 分子 AI 正经历一场 eval crisis

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">

### 旧单指标

RMSD &lt; 2 Å 来自更早的 docking 研究，容易被继承成论文默认成功线。

</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 新约束

PoseBusters 把 physical validity 带进评价；LDDT 等指标补足单一 RMSD 的盲点。

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 真正考题

未见靶点、不同于 PDB 分布、还需要 induced fit 的任务，才更接近 partner program。

</div>

</div>

<div class="mt-7 p-5 bg-blue-50 border-l-4 border-blue-500 text-left">

Public benchmark 上模型看起来接近，可能只是大家都在同一批已知分布上优化；fresh target 才能显示外推差异。

</div>

---
layout: two-cols
---

# OpenBind：一次真正的未见靶点测试

挑战的关键：

- benchmark 发布前，目标未被模型开发者反复 hill-climb
- ligand 进入时，蛋白 flexible loop 需要移动
- 模型必须联合预测 protein 与 ligand 的适配

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 text-sm">

PEARL 以现有系统直接运行；访谈称它对这一 loop movement 的预测几乎每个 pose 都正确。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./openbind-induced-fit.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# OpenBind 不只是赢一次榜单

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 对外可验证

过去，Genesis 只能在内部或 partner data 上看到 PEARL 与其他模型的差距，无法公开原始数据。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 与真实任务同构

制药伙伴关注的常是困难、分布外、带构象变化的靶点；OpenBind 恰好提供了一个公开近似。

</div>

</div>

<div class="mt-7 p-5 bg-purple-50 border-l-4 border-purple-500 text-left">

作者概括：这次结果最有价值的部分，是证明训练目标更像真实 drug discovery，而不是证明某个平均分更漂亮。

</div>

---
layout: two-cols
---

# 模型要从实验里持续学习

实验数据在两处发挥作用：

- potency 等 endpoint 可以直接用于模型训练
- 新分子暴露模拟、结构与合成路线没有覆盖的 failure mode

Genesis 与 Incyte 的合作，把模型预测接到快速 compound synthesis 和 property measurement，再把结果送回模型。

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

核心不是一次性收集大数据，而是缩短每一轮 design–make–test–analyze。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./design-make-test-loop.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 自动实验室为什么还不能包办一切

<div class="grid grid-cols-2 gap-4 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Synthesize

试剂、催化剂、温度、溶剂与 protocol 必须匹配；文献里的 reaction condition 也可能在新底物上失效。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Purify

不纯样本会把 assay 的阳性或阴性读数变成 artifact。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Characterize

需要 NMR、mass spectrometry 等手段确认 vial 里真的是目标分子。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Translate

高通量 screen 到重新合成、低通量高保真实验之间，false-positive rate 可能很高。

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-left">
速度的代价常是 chemistry 被限制在容易自动化的反应空间，反而错过真正新颖的 Pareto outlier。
</div>

---

# RL 能替代一部分实验，不会替代物理世界

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 可计算的反馈

物理评分、结构有效性与可自动验证的目标，适合把更多 GPU 投入 self-training 与 RL。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 必须实验的反馈

合成是否成功、真实细胞活性、复杂 ADMET endpoint，仍需要 wet-lab intervention。

</div>

</div>

<div class="mt-7 p-5 bg-purple-50 border-l-4 border-purple-500 text-left">

最终路线不是纯 digital lab，也不是纯 robotic lab；而是让便宜、密集的可计算反馈承担更多搜索，再用高价值实验校准现实。

</div>

---

# Agent 的能力上限由底层模型决定

<div class="mt-6 p-6 text-xl italic border-l-4 border-red-500 bg-red-50 text-left">

“agents are only as useful as the underlying models that they're orchestrating.”

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-left">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 未跨阈值

pose 有细微但真实的几何错误，agent 会把错误输入到 potency、ADMET 与下一轮设计，自动化放大负价值。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 跨过阈值

结构与性质模型足够可靠后，agent 才能编排复杂工具，并让 med chemist 接受它提出的候选。

</div>

</div>

<div class="mt-3 text-xs opacity-60 text-left">— Evan Feinberg，谈 agent 与模型可靠性的先后顺序</div>

---
layout: two-cols
---

# SAPPHIRE：把多年工具变成一个工作系统

SAPPHIRE 的 code name 指向一个 24/7 drug discovery agentic platform。

它不是泛指自动化脚本，而是：

- LLM 负责决定何时调用工具
- PEARL、potency、ADMET 与 physics methods 提供专业能力
- agent 读取结构、形成 hypothesis、提出下一批 molecule
- medicinal chemist 不必掌握每个工具的全部参数

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm">
可解释的 3D structure 也成为 agent 检查自身决策的中间表示。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sapphire-agent.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 人与 agent 的分工会沿着 coding 路径演化

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 现在

Agent 已能帮忙，但需要人持续提供 feedback、纠偏与工具选择。

</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 过渡期

Agent 承担参数配置、重复计算与大规模候选搜索，人审查结构与方向。

</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 目标形态

人给出 disease、target product profile 与 campaign strategy；agent 执行大量探索。

</div>

</div>

<div class="mt-7 p-5 bg-yellow-50 border-l-4 border-yellow-500 text-left">

嘉宾明确不认同完全替代人类：药物科学家更像 grand strategist，把时间从重复操作转向判断与创造。

</div>

---

# 产业落点：模型公司、算力与研究人才

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 公司定位

Genesis 从 Therapeutics 更名为 Molecular AI，是把长期现实身份说清楚：核心能力是模型，同时保留自研 pipeline 来 dogfood。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 首要瓶颈

Sergey 与 Evan 都把 GPU 供给列为最大约束；LLM 公司吸收大量 capacity，而生命科学同样需要大规模计算。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 人才机会

3D diffusion、几何网络、物理引导与 RL 仍在快速改架构；对厌倦同构 transformer 的研究者，这是更开放的设计空间。

</div>

</div>

<div class="mt-7 p-4 bg-purple-50 border-l-4 border-purple-500 text-left">

合作模式：Genesis 提供 AI，制药伙伴提供 biology、实验、临床开发与商业化；双方数据与能力形成连续闭环。

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3 text-left">以下 8 条均按 transcript 原文核验；仅统一大小写与换行。</div>

<div class="grid grid-cols-2 gap-2 text-[11px] leading-snug text-left">

<div class="p-2.5 bg-blue-50 border-l-4 border-blue-500 rounded italic">
“some of the most innovative diffusion research is happening in our field is happening in 3D structure prediction right now.”
<div class="text-[10px] opacity-60 mt-1 not-italic">— Evan · 扩散研究的新前沿</div>
</div>

<div class="p-2.5 bg-purple-50 border-l-4 border-purple-500 rounded italic">
“There are 10 to the 60 drug like small molecules in the universe.”
<div class="text-[10px] opacity-60 mt-1 not-italic">— Sergey · 搜索空间</div>
</div>

<div class="p-2.5 bg-green-50 border-l-4 border-green-500 rounded italic">
“we also have pre-training scaling where we create a lot of synthetic data to train better models.”
<div class="text-[10px] opacity-60 mt-1 not-italic">— Sergey · 合成预训练数据</div>
</div>

<div class="p-2.5 bg-orange-50 border-l-4 border-orange-500 rounded italic">
“it's not thinking in language tokens it's thinking in terms of crystal structures”
<div class="text-[10px] opacity-60 mt-1 not-italic">— Sergey · 推理时 scaling</div>
</div>

<div class="p-2.5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
“drug discovery really is a science of resolution.”
<div class="text-[10px] opacity-60 mt-1 not-italic">— Evan · 1 Å 的意义</div>
</div>

<div class="p-2.5 bg-red-50 border-l-4 border-red-500 rounded italic">
“agents are only as useful as the underlying models that they're orchestrating.”
<div class="text-[10px] opacity-60 mt-1 not-italic">— Evan · agent 的能力上限</div>
</div>

<div class="p-2.5 bg-blue-50 border-l-4 border-blue-500 rounded italic">
“design, make, test, analyze cycles that are as rapid as possible”
<div class="text-[10px] opacity-60 mt-1 not-italic">— Evan · 实验闭环</div>
</div>

<div class="p-2.5 bg-green-50 border-l-4 border-green-500 rounded italic">
“The objective of the company is creating value for biotechs and pharma companies”
<div class="text-[10px] opacity-60 mt-1 not-italic">— Evan · benchmark 与现实价值</div>
</div>

</div>

---
layout: end
---

# “drug discovery really is a science of resolution.”

<div class="mt-7 text-sm opacity-70">
从每个原子的正确位置，走向每个患者更具体的治疗选择。
</div>
