---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The Genius Who Invented Reverse Mathematics'
info: |
  Harvey Friedman on Theories of Everything — concrete incompleteness, TREE(3), embedded maximality, and the divine consistency proof.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 发明"反向数学"的天才

## Harvey Friedman · Theories of Everything

<div class="mt-12 text-sm opacity-70">
18 岁的 Stanford 教授 · Gödel 亲自推荐的最后一篇论文作者 · 反向数学之父
</div>

<div class="mt-4 text-xs opacity-50">
"pretty outrageous idea ... it's all fundamentally finite. This is my crazy head."
</div>

---

# 为什么这期值得反复看

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Gödel 之后

Gödel 证明了"有些命题不可判定",但他举的例子和数学家日常完全无关。Friedman 用 60 年把不可判定**搬到数学家家门口**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### TREE(3)

一个有限数,大到你连"它存在"这件事都需要两万亿张纸才证得出。Graham 数在它面前"minuscule"。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 反向数学

不是从公理推出定理,而是**从定理倒推出需要多强的公理**。一种逆向工程的数学基础学。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Divine consistency

用神学里"上帝是所有正性质的归宿"的古老想法,定义出"天使",再用天使证明 ZFC 一致性。

</div>

</div>

---

# 这位老先生是谁

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 18 岁,Stanford 教授

吉尼斯世界纪录认证"最年轻的教授"。同年从 MIT 拿到 PhD。

<div class="text-xs opacity-60 mt-2">
"Guinness Book of World Records even listed him as the youngest professor ever."
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Gödel 的最后推荐

Kurt Gödel 生前为他向《美国国家科学院院刊》推荐的**最后一篇**论文,正是他的成果。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 反向数学的奠基人

整个 reverse mathematics 这一支,从他 60 年代末开始系统化建立。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 这是他的第一次播客

退休于 2012,目前每天写数学约 12 小时,在写一本叫 *Embedded Maximality* 的书。

</div>

</div>

---

# Gödel 不是一个定理,是两个

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### 第一不完备定理

> "in any sufficiently strong system, there are always statements that can't be proved or refuted"

任何足够强的系统里,**总有命题既不能证明也不能反驳**。

</div>

<div class="p-5 rounded border-2 border-purple-300 bg-purple-50">

### 第二不完备定理

> "in any sufficiently strong system the system cannot prove that it's without contradiction"

足够强的系统**无法证明自己无矛盾**。

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
Friedman 提醒:"these are quite different things" —— 大众讨论时常把两者混作一团。
</div>

---

# 常见的误读

<div class="mt-6 p-6 bg-red-50 border-l-4 border-red-500 rounded">

### 误读

> "Gödel 证明了我们 *无法确知* 任何事情。"

</div>

<div class="mt-6 p-6 bg-green-50 border-l-4 border-green-500 rounded">

### Friedman 的更正

> "It says there are always statements in any sufficiently strong system that can't be resolved within that system."

它只说**在那个系统内**有些命题无法被判定。**很多命题仍然能被证明,很多命题仍然能被反驳**。

</div>

<div class="mt-4 text-sm opacity-60 text-center">
不可判定的命题存在,不等于一切都不可知。
</div>

---
layout: two-cols
---

# Gödel 的盲区

Gödel 第一定理给出的不可判定命题,**离数学家日常关心的东西非常远**。

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**ZFC 的孤岛**

> "the original statements of Gödel are very far removed from the kind of mathematics that mathematicians very generally worry about and care about."

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Friedman 的程序**

把不可判定**搬到具体、可见、数学家会自然遇见的命题上**。他叫它 *concrete incompleteness* / *tangible incompleteness*。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./zfc-tower.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 连续统假设:一个寓言

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### CH 是什么

连续统假设问:**实数集是不是第二小的无穷**?

1940 年代,Gödel 证明 ZFC 反驳不了它。1960 年代初,Paul Cohen 证明 ZFC 也证不了它。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 但它"很远"

> "the continuum hypothesis is is generally regarded as extremely important in general set theory, but is regarded as extremely several steps removed in abstraction from what mathematicians normally do"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 在 Borel 集里

> "for so-called Borel sets of real numbers, the continuum hypothesis is is a it's a classic theorem"

把范围缩小到 Borel 可测集,CH 反而**变成定理**。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 启示

抽象层级一变,问题的性质完全不同。这就是 Friedman 整个 program 的种子。

</div>

</div>

---

# 两条路:Friedman vs Woodin

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50">

### Hugh Woodin —— 向上

"a card-carrying believer in abstract set theory"

他想构造**整个集合论宇宙**的完整理论。CH 应当有一个**确定的答案**,即使 ZFC 触不到它。

<div class="text-xs opacity-60 mt-2">"He wants to create a theory of how the entire universe of sets works."</div>

</div>

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50">

### Friedman —— 向下

> "the future of foundations of math is how well it connects up with ordinary mathematical objects and ordinary mathematical intuitions"

不去追大基数,而是逼近**数学家真正在乎的、有限、组合的、几何的对象**。

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-center">

> "So, he and I are kind of the opposite directions."

同一代人,同一个起点,各自走向无穷的两端。

</div>

---

# 数学家眼中的"基础"

<div class="mt-6 p-6 bg-red-50 border-l-4 border-red-500 rounded">

### Curt:数学家怎么看基础研究?

### Friedman 的一字回答

> "as pretty marginal."

</div>

<div class="mt-6 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">

> "Unimportant and irrelevant is the most common reaction."

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 直到 blockbuster 出现

> "However, there are these periods of history where some blockbuster comes out comes comes to surface, Gödel especially."

那时连最顶级的数学家也会**短暂注意一下**,然后回去做自己的研究。

</div>

---

# Borel determinacy 的故事

<div class="mt-4 space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 第一步:Donald Martin 用"远超 ZFC"的工具证明了它

> "Donald Martin proved Borel determinacy using way more than ZFC."

数学界的反应:**probably overkill**。这只是杀鸡用了牛刀。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 第二步:Friedman 证明 —— 牛刀是必需的

> "I proved that there is no way to prove Borel determinacy without using infinitely many uncountable cardinals."

Zermelo 集合论根本不够,需要 ZFC 中很大一块。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 但故事还没完 ——

</div>

</div>

---

# Tony Martin 的"Oh my gosh"

<div class="mt-4 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### Friedman 公布"必须用大基数"的证明后,Tony Martin 看到了

> "Tony Martin looked at my argument and said, 'Oh my gosh, this gives me a hint as to how I can prove Borel determinacy in ZFC.'"

</div>

<div class="mt-6 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">

> "I never would have thought of using these strong methods that Friedman proved that were needed. I never would have even thought along those lines and now I see how to do this."

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 结果

Martin 发表了一篇著名论文,**用刚好擦着 Friedman 下界边缘**的方法证明了 Borel determinacy。

下界研究反过来变成了上界证明的指南针。

</div>

---
layout: two-cols
---

# TREE(3) —— 怪兽

> "Tree of three is so big that you can't prove it exists without using two to the one trillion pieces of paper."

——这只是用来"证明它存在"。**它本身比 2^(10¹²) 大得**不可比拟。

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

它在 Peano 算术中"存在",但 PA 写不出证明 —— 即使给你两万亿张纸。

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500">

**Graham 数?**

> "It's minuscule in comparison epsilon."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tree3-bridge.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# TREE(3) 是怎么定义的

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Kruskal 定理(JB Kruskal,1960)

给一个**无穷长**的有限树序列,顶点带 3 种颜色 ——

序列中**必然**存在某棵树嵌入(同伦、保色)进序列中后来的某棵树。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 加一个约束:第 i 棵树最多 i 个顶点

那么不仅嵌入存在,**还能给出停止位置**:走到第 N 步必定找到。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 col-span-2">

### TREE(3) = 那个最小的 N

> "How long do you have to go on like this so that one of them is embeddable in a later one? That's what tree of three is."

</div>

</div>

---

# 桥 —— 大有限即小无穷

<div class="mt-6 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">

> "the smallest infinity is very closely associated and approximated by the outrageously finite."

</div>

<div class="mt-8 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-green-50 border-2 border-green-300 text-center">

### 无穷定理

Kruskal: 用到不可数集

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-300 text-center">

### 紧致性 / 压缩

把无穷化成有限近似

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-300 text-center">

### 有限定理

TREE(3) 存在,大得吓人

</div>

</div>

<div class="mt-6 text-center text-sm opacity-70">
有限和无穷不是隔水相望 —— 是同一座山的两个剖面。
</div>

---

# 戴上 "crazy hat"

<div class="mt-4 p-6 bg-blue-50 border-l-4 border-blue-500 rounded italic">

> "What if I put my finitist hat on? And I say, 'Okay, all of mathematics I'm going to make finite.' I know it's not finite directly, but I'm going to find finite approximations"

</div>

<div class="mt-6 p-6 bg-purple-50 border-l-4 border-purple-500 rounded">

### Thesis

**所有**的实数、偏微分方程、集合论、大基数 ——

> "it's all fundamentally finite. ... this is my crazy hat."

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 一开始就是这副疯子的派头

Friedman 自己的开场白即引用此句作为整段访谈的钥匙。

**作者概括**:这不是无聊的还原论 —— 它是 Friedman 60 年程序的根本动机。

</div>

---
layout: two-cols
---

# Ultrafinitism —— 更激进一档

戴上 crazy hat 后,可以更进一步。

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500">

### 已经够极端的立场

> "That already 2 to the 100 is absurd. That's ultrafinitism."

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 最终形态:像素

> "all mathematical adventures can be properly imitated or realized in a computer screen, that level of of detail. In other words, pixels with colors."

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">

整个 ZFC、大基数、连续统假设 —— 都在那个屏幕里,**只是 X 个 bit**。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./finitist-screen.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 大基数 —— 无穷的阶梯

ω₀,ω₁,ω₂ —— 这是 Cantor 留下的**层级**。

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 最低层

> "The lowest level of infinity is the integers"

也就是 ω₀。

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 实数线在哪儿?

实数线大小是 2^ℵ₀。**连续统假设**问:它是不是紧挨着 ω₀ 的下一层?

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 大基数

Friedman 的世界里活在更高:不可达基数、可测基数、"monster cardinals"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cardinal-ladder.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Embedded Maximality

<div class="text-sm opacity-70 mt-1">他正在写、已经改写四遍的那本书</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 两个最基本的概念

**嵌入(embedding)** + **极大性(maximality)** —— 本科生都学过。

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 把它们混在一起

> "these two concepts can be combined into a new striking theorems. And I call the subject embedded maximality."

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**背景**:不是实数,只是 **ℚ + <** —— 最具体的数学对象之一。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./embedded-maximality.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 在边缘处突然爆炸

<div class="mt-4 p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 第一步:有限映射的情况

> "I solved it for the finite case completely."

漂亮的有限组合数学,30-40 页可以讲清楚。

</div>

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 第二步:在边缘补上恒等映射

> "extend them by the identity map on on the uh outer parts."

只是把有限的映射,**在两边延伸成恒等** —— 几乎平凡的扩展。

</div>

<div class="mt-4 p-5 bg-red-50 border-l-4 border-red-500 rounded">

### 第三步:一切爆炸

> "All of a sudden you ask the same question ... it's independent of ZFC."

</div>

---

# 这场反击的意义

<div class="text-sm opacity-70 mt-2">这个 ZFC-independent 的结果有个名字:**Outer Extension Usability Theorem (OEU)** —— 用 ZFC 之上的"monster cardinals"才证得出。</div>

<div class="mt-4 p-6 bg-blue-50 border-l-4 border-blue-500 rounded italic">

> "So now it's harder for the mathematical community to ignore foundations."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 旧的不完备

ZFC 之外的命题听起来"很集合论",数学家可以远离。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 新的不完备

写在 ℚ + < 这种**初等到不能再初等**的对象上。数学家要假装看不见越来越难。

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
这不是要数学家放弃 ZFC,而是要把"基础"重新搬回中心。
</div>

---
layout: two-cols
---

# Divine consistency proof

来自古代神学的一个想法 —— Gödel 也曾认真对待。

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 正/负属性的二分

> "properties are either positive or negative."

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 上帝的定义

> "God is the unique entity that's in the positive ones and none of the negative ones."

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 数学翻译:ultrafilter

把"正性质"对应到集合上的 ultrafilter —— 数学中早有的对象。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./angel-god.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 天使 —— 上帝的弱化版

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 上帝太强

> "if God is in there, it's all sucked up by God ... That's not very interesting. That's called a non-principal or trivial ultrafilter."

</div>

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded italic">

> "An angel is a weak form of God."

天使**不是**在**所有**正性质里 —— 那是上帝 ——

而是在所有**可定义**的正性质里。

</div>

<div class="mt-4 p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 关键结论

假设"存在一个天使",加上一些标准基础设施,**就能证明 ZFC 一致**。

而"存在天使"本身的相容性,用一个可测基数(measurable cardinal)就够。

</div>

---

# 同行的反应

<div class="mt-6 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 一位很知名的集合论家的第一反应

> "Friedman you're just trying to get grant money from the Templeton Foundation which is known to be very friendly to theology."

</div>

<div class="mt-4 text-sm opacity-60 px-4">

Friedman 自己讲完之后笑了笑 —— 后来他**真的**从 Templeton 拿到过资助。

</div>

<div class="mt-6 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">

### 但他说,文章被一位顶级匿名审稿人接受了

> "I know that at least one obviously very skilled set theorist kind of bought it kind of liked it."

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-center text-sm opacity-80">

他原本想把**所有**神学性质(全能、全在...)都搬一遍。"**eyes are bigger than my stomach.**"

</div>

---
layout: two-cols
---

# 反向数学的诞生

> "the mathematicians didn't really like foundations much. And they were suspicious of um of these things called formal systems"

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Stanford 数学系的下午茶

Friedman 当时是哲学教授,但办公室在数学系。下午茶上他天天在被"质疑"。

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 反过来想

数学家不信任公理 —— 那就**反过来**证明:从数学家自己喜欢的定理,**倒推出**他们其实在用的公理。

> "So I then wanted to prove the axioms from the from the theorems."

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500">

形式系统不是外来的,**是定理自己挑出来的**。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./reverse-math.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Disjunction → Numerical Existence

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 直觉主义两大胜利

**Disjunction property**: 能证 A ∨ B,就能证 A 或证 B。

**Numerical existence property**: 能证"存在 n 使得 P(n)",就能给出具体的 n。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Friedman 的一击

> "if it has the disjunction property, it automatically has the numerical existence property."

两个相对独立的"胜利",其实只有一个本质。

</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

> "By a crazy proof I don't even understand today. ... Kurt Gödel liked this. He published it. He sponsored it in the Proceedings of the National Academy of Sciences."

</div>

<div class="mt-3 text-center text-xs opacity-60">
这是 Gödel 生前推荐到《国家科学院院刊》的**最后**一篇论文。然后他亲自约见了 Friedman。
</div>

---

# 他的工作方式

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic">

> "I got some contrived pseudo-mathematical situation that I know is somehow connected to both math, although it's contrived and kind of ugly, and somehow I can squeeze out some heavy-duty set theory out of it."

</div>

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### 60 年的工序

> "I started off with things that were grotesquely contrived and spent ... 50 or 60 years uh trying to make them less contrived"

直到它们看起来**完全自然**,数学家无法再说"这不属于真正的数学"。

</div>

<div class="mt-4 p-5 bg-green-50 border-l-4 border-green-500 rounded">

### Friedman 自评的稀有技能

> "I am able to come up with attractive and perhaps unassailably attractive mathematical forms of things that are artificial."

把人造的东西养成天然的样子。

</div>

---

# 给年轻人:先选边

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 拿 P vs NP 举例

> "I played around with the P versus NP problem a bit. ... But you have to decide whether you believe P equals NP or not, right?"

</div>

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 不是必须押注,但要分配时间

> "you have to take a position where your time apportionment is going to be."

押错了边,几十年可能颗粒无收。

</div>

<div class="mt-4 p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 攻坚法

> "I like a situation where you claw at it getting very weak forms and then try to build it up."

抓最弱的版本,一点点向上推。

</div>

---

# 退休之后的生活

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2012 年退休

搬到一家提供餐食的公寓,**一切简化到极致**。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 数学:每天 12 小时

> "I'm spending an enormous amount of time on math now. Uh maybe 12 hours a day."

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 音乐 + 钢琴

"music is going through my head all the time." 还想写一本关于钢琴演奏的书。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 国际象棋俱乐部

每周 10 小时教学,正在写一本数学与象棋交界的书。

</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-center italic">

> "I guess I'm just starting my life serious part of my life now"

</div>

---

# AI 与"另一种永生"

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### Curt:你真的相信只有一次生命吗?

</div>

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded italic">

> "if you leave a corpus of internet material like this interview, and you broaden your your internet path, the AI knows about all this cuz it ... swallows the internet"

</div>

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

> "I could be here after I'm physically dead, and you can have an interview with me. And the AI will answer based on their entire knowledge of my output."

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

他认为这会成为一种**普通家用电器**:感恩节、圣诞节,把已故亲人"请回来"对话。

</div>

---

# 小时候的字典

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 大约 6、7 岁

Friedman 翻开妈妈桌上的字典,跟她说:**这本书没用**。

</div>

<div class="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

> "I looked up one word and I looked at the and I looked at the definitions that it the words in the definition and then I looked those up and ... I went came back in a circle. Nothing got explained. It was all in cycles."

</div>

<div class="mt-4 p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 妈妈的回答

> "Well, I'm going to still keep the dictionary. I'm not throwing it away."

</div>

<div class="mt-4 text-sm opacity-70 text-center">
这或许是反向数学的胚胎 —— 一个不肯接受循环定义的小孩,长成了为数学**真正的奠基**辩护的人。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这场对谈里最值得记住的几句:</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"pretty outrageous idea ... it's all fundamentally finite. This is my crazy head."
<div class="text-xs opacity-60 mt-1 not-italic">— 开场白,Friedman 的整个 program 的种子</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"So now it's harder for the mathematical community to ignore foundations."
<div class="text-xs opacity-60 mt-1 not-italic">— Embedded Maximality 这本书的目标</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"Unimportant and irrelevant is the most common reaction."
<div class="text-xs opacity-60 mt-1 not-italic">— 谈数学家对基础研究的看法</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"the smallest infinity is very closely associated and approximated by the outrageously finite."
<div class="text-xs opacity-60 mt-1 not-italic">— TREE(3) 与 ω 之间的桥</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"An angel is a weak form of God."
<div class="text-xs opacity-60 mt-1 not-italic">— Divine consistency proof 的核心定义</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"I could be here after I'm physically dead, and you can have an interview with me."
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 AI 与永生</div>
</div>

</div>

---
layout: end
---

# "Nothing got explained. It was all in cycles."

<div class="mt-8 text-base opacity-70">
Harvey Friedman, 6 岁,谈字典 —— 也谈了一辈子的数学基础。
</div>
