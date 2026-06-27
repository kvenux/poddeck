---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '量子引力或许有解 · Neil Turok'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 量子引力，或许真的有解

<div class="text-xl opacity-80 mt-4">不需要弦，不需要额外维度，<br/>只需要对玻恩规则稍作调整</div>

<div class="mt-12 text-base opacity-60">
Neil Turok × Curt Jaimungal · Theories of Everything · 2026-06
</div>

<div class="mt-6 text-sm opacity-50">
爱丁堡大学希格斯讲席教授 · 前 Perimeter 研究所所长
</div>

---

# 这一期为什么值得看

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🪨 砸碎一个 175 年的禁忌

奥斯特罗格拉茨基定理（1850）一直是高阶导数理论的"死亡判决"。Turok 论证：在引力里，它其实就是宇宙膨胀本身。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 🧮 一个被遗忘的数学结构

克莱因空间——希尔伯特空间的推广，含负范数。"等待着被运用，据我所知，其他人都没有用过它。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 🌌 天空里写着答案

CMB 涨落光谱看起来"就像一个四阶导数场"。也就是说，我们已经在看着量子引力的信号了。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 🧑‍🎓 一个博士生的奇迹

Sam Bateman 用 4 年没出一篇论文。九月份钱用光的那一刻，他说："我想我知道它是怎么运作的了。"

</div>

</div>

---

# 一句话讲完这套理论

<div class="mt-8 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-lg">

把爱因斯坦的引力作用量里加上**曲率平方项**，再把量子力学的**玻恩规则**做一个**微不足道的推广**，让概率定义在一个比希尔伯特空间更宽的空间里——

量子引力就**可重整化、渐近自由、概率为正**。

</div>

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-3 rounded bg-red-50 border border-red-200">

### ❌ 不需要

弦

</div>

<div class="p-3 rounded bg-red-50 border border-red-200">

### ❌ 不需要

额外维度

</div>

<div class="p-3 rounded bg-red-50 border border-red-200">

### ❌ 不需要

多元宇宙

</div>

</div>

<div class="mt-6 text-sm opacity-60 italic">
"在某个极限情况下，我们理解量子引力。"——Turok 的精确措辞
</div>

---

# 这条路上的两个老咒语

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 咒语 #1 · 奥斯特罗格拉茨基不稳定性

**1850 年**, 圣彼得堡

> 如果运动方程有超过两个导数，<br/>能量就是**无界向下**的。

任何高阶导数理论都会无限释放负能量。物理学家把它当作"或许是物理学中最古老的禁忌定理"。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 咒语 #2 · 幽灵态

**1930 年代**, 量子场论早期

> 高阶导数量子化时，<br/>会出现**负范数**的状态。

人们说这些"幽灵态"对应负概率，整个理论不合法——文献里到处都是这种说法。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Turok 的命题**：两个咒语都是误解。第一个其实就是宇宙学膨胀。第二个根本不是负概率——只是态空间的标签。

</div>

---
layout: two-cols
---

# 1977 年：Stelle 的旧药方

英国物理学家 Kelly Stelle 提出在引力作用量里加**曲率平方项**。

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**最一般形式**: <br/>
S = ∫ R + α R² + β Weyl²

</div>

<div class="mt-4 space-y-2 text-sm">

- **Stelle 证明**（1977）：理论可重整化
- **Avramidy 证明**（1980s）：渐近自由
- 性质类似量子色动力学（QCD）

</div>

<div class="mt-4 text-sm opacity-70 italic">
"这当然是量子引力最简单的理论。所以它是可重整化的。" 但传统上人们都放弃了它——因为它带着两个老咒语。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./quadratic-action.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么"可重整化"这么重要

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 标准爱因斯坦引力

量子化之后，计算里会出现**无穷大**，而且这些无穷大**没办法吸收**到有限多个常数里。

这就是为什么半个多世纪以来，量子引力一直是粒子物理学最难啃的骨头。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 加上 R² + Weyl²

无穷大**都可以吸收**到耦合常数的重新定义里。

> "你被引向一个合理的理论，我们称之为连续极限——在短距离内该理论完全可控。"

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
**作者概括**：可重整化 = 紫外完备 = 理论在最高能量也不发散。这是任何"完整理论"的入场券。
</div>

---

# 但 Wick 旋转的时候，两件灾难发生了

<div class="mt-6 space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 虚时间里一切都好

把时间转成虚的（欧几里得化），振荡积分变成收敛积分。Stelle、Avramidy 的所有漂亮结果都是在这个虚时间里证明的。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 转回真实时间时，两个咒语出现

**奥斯特罗格拉茨基不稳定性** ＋ **幽灵态**<br/>
这就是为什么"人们会放弃这种方法，尽管他们总是会重新回到这种方法上来"。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
"我们最近所做的，只是对如何应对这种情况有了一半的了解。"<br/>
<div class="text-xs opacity-60 not-italic mt-1">——Turok 的精确措辞：一半。所以这套理论还没完全做完。</div>
</div>

---

# 第一个咒语：奥斯特罗格拉茨基不稳定性

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 经典力学里

二阶导数 → 哈密顿量有下界<br/>
F = ma 的世界

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 高阶导数系统

哈密顿量**下界无界**——可以构造任意负能量的状态

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**为什么这很可怕**：这种系统接触现实世界（其他物质能量正的），就成了无限的能量来源——它会无限放能量给别人。"我们在自然界中看不到这样的现象。"

</div>

<div class="mt-4 text-sm opacity-70">
这个论证 175 年来挡住了所有更精细的引力理论。从 Bhabha 到 Heisenberg 都担心这个问题。
</div>

---

# 但 Turok 说：那个不稳定性，就是宇宙膨胀本身

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 引力本来就"不正常"

- 引力势能本来就是**负**的
- 宇宙常数告诉我们宇宙在**指数膨胀**
- "听起来很像是出现了不稳定因素"

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 重新解释之后

> "奥斯特罗格拉德斯基不稳定性只不过是正常的引力膨胀。"

用分析爱因斯坦理论的同样方法去看这个膨胀解——它**绝对稳定**。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**精彩之处**：原来 175 年的"禁忌"，换成引力的解释框架，恰恰对应可观测的**宇宙加速膨胀**。一个旧 bug 变成了一个 feature。

</div>

---

# 第二个咒语：幽灵态真的是"负概率"吗？

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 文献里的标准说法

> "负规范状态被称为幽灵状态。范数为负的状态对应于负概率。"

人们以此为由把高阶导数理论一棒打死。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Turok 直接反驳

> "**那根本不是事实。**"

量子态的范数本身**不是可观测量**。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

> "你无法吸收或观察量子态的范数。"

可以想象一只红色的跳舞独角兽——只要它不出现在任何可观测量里，它就无关紧要。负范数也是一样：只是态空间的标签。

</div>

---
layout: two-cols
---

# Klein 空间：被遗忘 70 年的数学

学生 Sam Bateman 翻数学文献，发现了一个物理学家从没用过的结构。

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**Klein 空间** = 希尔伯特空间的推广<br/>
允许正范数、零范数、负范数同时存在<br/>
就像 Minkowski 之于 Euclid

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

数学家 Klein 当年研究微分算子时建立的工具

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

> "这个数学概念其实一直存在于文献中，等待着被运用。据我所知，其他人都没有用过它。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./klein-space.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 关键修改：把玻恩规则改写成一个投影迹

只需要一个"幽灵宇称对称性"：算符在正范数上 +1，在负范数上 −1。

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**旧公式**: P = |⟨f|S|i⟩|²<br/>
（要求态归一）

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**新公式**: P = Tr(A†A)<br/>
A = Π_f · S · Π_i<br/>
（用投影算子，不需要归一）

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

在普通量子力学里给出**完全相同**的答案——但在 Klein 空间里**仍然有意义**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./born-rule-fix.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 结果：概率为正，求和为 1

<div class="mt-6 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-center">

### ✅ 概率非负

只要理论有那个离散对称性，每一项跃迁概率都≥0

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-center">

### ✅ 总和为 1

所有跃迁概率求和始终等于 1

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-center">

### ✅ 协变 + 幺正

时空对称性、因果律、幺正性都保留

</div>

</div>

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"我们已经证明，只要该理论的 S 矩阵或哈密顿量具有我提到的这种对称性，那么你得到的答案总是正的，概率总和总是等于 1。"

<div class="text-xs opacity-60 not-italic mt-2">这就是把量子场论的范围扩大到了"不在希尔伯特空间里"的那一类理论。</div>

</div>

---

# 弦理论一直隐含着一个未明说的假设

<div class="mt-6 p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 弦理论的隐藏假设清单

- 微扰构造（无完整非线性公式）
- 洛伦兹不变性
- 幺正性、正概率
- **作用量只能有两个导数**
- **理论必须存在于希尔伯特空间**

</div>

<div class="mt-6 p-5 rounded bg-red-50 border-l-4 border-red-500 italic">

"既然我们已经看到你不需要那个假设，那么整件事就**毫无根据了**。"

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**Turok 的精确措辞**：他没说弦理论错了，他说"如果它是真的（我们认为它是真的），我们有一个不需要这种假设的理论的例子"。一旦"必须在希尔伯特空间里"这条不成立——结论就不再被强迫。

</div>

---

# "在理论物理学中，你一旦走错一步，就会完全错掉"

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic text-lg">

"这就是我们所有人都要担心的危险。我认为人们对此重视得还不够。我们应该非常仔细地审视我们的每一个假设，看看它是否真的有必要，或者只是因为我们传统上习惯于做出这样的假设？"

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 早一步的假设
"高阶导数 = 不稳定"<br/>
"负范数 = 负概率"<br/>
"作用量 = 两个导数"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 累计的代价
弦 + 10 维 + 超对称 +<br/>
膜 + 全息 + 多元宇宙……

每一步都正确才能得出多元宇宙——任何一步错就全错。

</div>

</div>

---

# 这套思路怎么来的：CPT 对称宇宙

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**与 Latham Boyle 的早期合作**：CPT 对称宇宙模型。

观测告诉我们大尺度宇宙惊人地简单——可以用**五个参数**描述一切。粒子物理标准模型也极其经济。

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500">

> "我们看得越多，发现的就越少。"

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**他们走的路**：能不能用最简理论解释一切观测？

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**结果**：暗物质、宇宙光滑性、空间平坦性、视界之谜——一个接一个被解释——**不需要暴胀**。

唯一一个没被消解的，是 CMB 涨落。

</div>

---
layout: two-cols
---

# 天空告诉我们：宇宙是个四阶导数场

CMB 涨落呈红移谱——大尺度上涨落更强。

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

普通标量场 → 谱是**平的**

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**观测到的天空**：谱是**红的**——大尺度更强

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

> "它看起来就像一个四阶导数场。<br/>**毫无疑问。**"

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**逻辑链条**：天空 = 量子涨落 → 涨落像四阶导数场 → 我们已经在看量子引力的信号

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sky-spectrum.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 数字奇迹：36 个场 + 3 代基本粒子

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个先有的发现

要在弯曲背景下抵消标准模型的所有紫外发散，**恰好需要 36 个**这样的四阶导数标量场——而且只有当存在**三代**基本粒子时才行。

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-orange-50 border border-orange-200">

### 36
四阶导数场<br/>
<div class="text-xs opacity-60">让无穷大相互抵消</div>

</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">

### 3
代基本粒子<br/>
<div class="text-xs opacity-60">电子/μ/τ 三代</div>

</div>

<div class="p-4 rounded bg-green-50 border border-green-200">

### 1
来自二次引力<br/>
<div class="text-xs opacity-60">引力理论自带</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">

"这是解释为什么存在三代基本粒子的最简单方法。"<br/>
<span class="text-xs not-italic opacity-60">——剩下 35 个怎么从引力里出来，"我们还不知道如何化圆为方"</span>

</div>

---
layout: two-cols
---

# 层级问题：为什么尺度差这么多

物理学有个老谜：

- **普朗克** ≈ 10¹⁹ GeV
- **弱/希格斯** ≈ 100 GeV
- **QCD** ≈ 1 GeV
- **宇宙常数** ≈ meV

跨越 22 个数量级——为什么？

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**渐近自由的理论**：耦合常数随能量呈**对数**变化——非常非常慢

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

所以从普朗克尺度一路走到 QCD 尺度——根本不需要"精细调节"。QCD 就是这么来的。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scale-ladder.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 希格斯玻色子不是基本粒子

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 历史回响

希格斯当年的灵感来自**超导现象**——Anderson 模型。

而超导体里的"希格斯模拟物"**不是基本粒子**，它是由库珀对（电子对）构成的复合体。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Turok 的猜想

如果希格斯实际上是**那 36 个紫外完备标量场**的某种复合体——那它的质量比普朗克小 17 个数量级就**完全合情合理**。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**采访里的一段笑话**：
> "在你的模型中，希格斯玻色子并不是基本粒子？"<br/>
> "不是。"<br/>
> "那他们为什么还让你坐上希格斯教授的宝座呢？"

</div>

---

# 霍金的熵：为什么宇宙这么光滑？

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 传统视角

"上帝"在大爆炸时把宇宙调到了**特殊的初始状态**——非常光滑、平坦。<br/>
否则它早就坍缩成黑洞了。

这是个**精细调节的奇迹**。需要"暴胀"动力学去把它磨平。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Turok-Boyle 路径

用霍金的熵公式**数态**。

> 最可能的宇宙，或者说微观状态数量最多的宇宙，是光滑的、均匀的、各向同性的、空间平坦的，就像我们的宇宙一样。

不需要动力学，光滑性是**典型**的。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**类比**：房间里气体均匀分布，不是因为有人在搅拌，而是因为均匀状态的微观态最多。宇宙光滑也是同样的道理——只是"度量"换成了霍金熵。

</div>

---

# 不需要暴胀，也不需要多元宇宙

<div class="mt-6 p-5 rounded bg-red-50 border-l-4 border-red-500">

### 暴胀路径的代价

为了从随机初始条件"磨"出我们看到的平滑宇宙，需要假设暴胀子场——结果**衍生出多元宇宙**（口袋宇宙、永恒暴胀），而且：

> "通货膨胀存在衡量难题，而且至今无人解决。"

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 关于多元宇宙

> "多元宇宙是你能想象到的最复杂的事物。"<br/>
> "如果多元宇宙真的是唯一一致的理论，那么物理学就完了。"

约翰·纳什被问到能不能在无限空间上定义测度——他回答："**不，这太荒谬了。绝对不可能。**"

</div>

---

# 对弦理论统治的不满

<div class="mt-6 p-5 rounded bg-orange-50 border-l-4 border-orange-500 italic text-lg">

"弦理论已经成为一种正统理论，这对该领域来说是件坏事。<br/>
但这种正统理论没有任何预测。"

</div>

<div class="mt-6 p-5 rounded bg-red-50 border-l-4 border-red-500">

### 真正可怕的后果

> "如果所有年轻人都在一个无法对现实世界做出任何可检验预测的框架内工作，那么该领域的整个目标就失去了意义。"

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**衍生效应**：弦理论也"占领"了大量数学系教职——那些人甚至不关心观测预测，只关心形式体系（超对称、共形场论）。"**它和现实没什么关系。**"

</div>

---
layout: two-cols
---

# Sam Bateman 的故事

Turok 给 PhD 学生 Sam Bateman 出了一道"不可能解决的题"：把四阶导数理论真正量子化。

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**4 年时间**：只取得"非常有限的进展"。一篇论文都没发。

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**2025 年 9 月**：Sam 的博士经费用光了。

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

> 山姆说："我想我知道它是怎么运作的了。"<br/>
> 你知道，事实上，只需要对**伯恩法则稍作调整**。

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm italic">

"经济不安全感。"<br/>
<span class="text-xs not-italic opacity-60">——Turok 半开玩笑地解释突破口的来源</span>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./timeline-qg.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 接下来发生的事，是科研应该有的样子

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500">

突破发生后没多久，量子场论世界级专家 Raju Venugopalan（布鲁克海文实验室）来爱丁堡访问。

听完 Sam 一场非正式演讲，Raju 当场意识到："**我的天哪，这里面肯定有门道。**"

</div>

<div class="mt-6 p-5 rounded bg-green-50 border-l-4 border-green-500">

**结果**：Sam 拿到了 Stony Brook 西蒙斯中心博士后职位——**没有任何论文文件**。Raju 还把访问延长到 12 月，三人一起继续做。

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">

"但是，你知道，事情本来就应该这样运作。"<br/>
<span class="text-xs not-italic opacity-60">——Turok 对当下"追逐论文文化"的批评</span>

</div>

---

# 给年轻物理学家的一句话

<div class="mt-6 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic text-lg">

"我会建议现在的年轻人，这些才是最重要的。<br/>
如果你真的想有所发现，**花在基础理论上的时间越多越好**。"

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### Turok 自己的反思
"我对正统观念的质疑不够。"

读博时跟着导师做大统一理论、磁单极子、宇宙弦——"我很少花时间研究量子力学、引力等基础理论，我真希望当初能多花点时间。"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 哪里有发现的机会
"很少有人关注基础问题。<br/>
人不多。<br/>
太多人只是在重复使用老旧的观念。"

学量子场论的协变量子化、读 Bogolyubov 的大砖头——99.99% 的实践理论家"甚至从未翻开过"。

</div>

</div>

---

# Perimeter 的故事：当反正统的地方也变得正统

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Turok 自己创办的地方

Perimeter 研究所的成功秘诀曾是：第一任所长 Howard Burton 在**当时没人支持量子力学基础**的时候，反过来招了一批做这个的人。

它"几乎垄断了量子力学领域"——卢西安·哈迪、罗伯·斯佩肯斯。

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 但他作为创办者也认错

> "说实话，我觉得作为一手创建了这个项目的主创人员，我可能太保守了……整个挑战在于如何说服政府继续资助你。"

"如果你获得了很高的引用率，而且你还从哈佛大学或其他知名学府挖人，那么最容易证明这一点。"

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**世界规律**：拨款 → 引用率 → 跟随热门范式 → 大多数热门范式失败——但所有工作都集中在这些范式上。

</div>

---

# 自然规律为什么如此简洁？

<div class="mt-6 grid grid-cols-3 gap-4 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border border-blue-200">

### 小尺度
原子简单<br/>
夸克更简单<br/>
基本粒子最简单

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-300">

### 人类尺度
"**所有的复杂性都处于人类的尺度之内。**"

</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">

### 大尺度
黑洞只有<br/>
质量、角动量、电荷<br/>
宇宙更简单

</div>

</div>

<div class="mt-6 p-5 rounded bg-green-50 border-l-4 border-green-500 italic">

"宇宙能够教会我们关于它自身及其规律的事情……为什么我们能够从宇宙内部了解宇宙？这真是一个奇妙的谜团。"

</div>

<div class="mt-4 text-sm opacity-70">
从毕达哥拉斯的天体之乐，到约翰·惠勒的"It from Bit"——物理学终归是关于<strong>信息</strong>的。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句，每条都已 grep 原文核对：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"我们声称在一定极限内我们理解量子引力。"
<div class="text-xs opacity-60 mt-1 not-italic">— 对核心成果的精确措辞（限定"在一定极限内"）</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"你无法吸收或观察量子态的范数。"
<div class="text-xs opacity-60 mt-1 not-italic">— 否定"负范数 = 负概率"的关键一句</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"既然我们已经看到你不需要那个假设，那么整件事就毫无根据了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈弦理论必须存在于希尔伯特空间这条隐藏假设时</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"在理论物理学中，你一旦走错一步，就会完全错掉。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈假设的累积代价</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
山姆说："我想我知道它是怎么运作的了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 2025 年 9 月，Sam Bateman 的博士经费用光的那一刻</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"如果所有年轻人都在一个无法对现实世界做出任何可检验预测的框架内工作，那么该领域的整个目标就失去了意义。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈弦理论统治对整个领域的伤害</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"我们看得越多，发现的就越少。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于宇宙学和粒子物理的极度简洁</div>
</div>

</div>

---
layout: end
---

# 我们已经完成一半了

<div class="mt-8 text-base opacity-70 italic">
"嗯，但我们已经完成一半了。<br/>当然，这种说法比较乐观，但也是一种比较委婉的说法。"
</div>

<div class="mt-12 text-sm opacity-50">
Neil Turok · Curt Jaimungal · Theories of Everything · 2026
</div>
