---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'How to ship hardware in the AI era | Caitlin Kalinowski (Apple, Meta, OpenAI)'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# How to Ship Hardware in the AI Era

### Caitlin Kalinowski

<div class="mt-6 text-sm opacity-70">
Lenny's Podcast · with Lenny Rachitsky
</div>

<div class="mt-12 text-xs opacity-50">
Original unibody MacBook Pro · MacBook Air · cylindrical Mac Pro · Quest · Rift · Orion AR<br/>
Most recently: built OpenAI's robotics & hardware division from scratch.
</div>

---

# Why this episode matters

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### A rare full-stack guide
Someone who's actually shipped flagship hardware at Apple, Meta and OpenAI walking through the real constraints — not a podcast circuit slide.

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Why hardware is hard
"We only get to compile our code, quote-unquote, like four or five times." Hardware has a different speed of light than software does.

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### The supply chain is now strategic
Magnets → actuators → robots. Every layer outsourced for 25 years. Re-industrialization argument from a person who watched it leave.

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Hardware as the next AI moat
The labs are betting that "behind a keyboard" AI will saturate — and that the next frontier is the physical world.

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Lessons from three founders
Sam, Steve, and Mark — each with a single, sharp habit Caitlin says changed how she works.

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Why she left OpenAI
Public exit over the "department of war" deal — and what a third path between scorched-earth and going-along looks like.

</div>

</div>

---
layout: two-cols
---

# A single technological lineage

Caitlin reframes the last decade of head-mounted devices as one continuous arc, not three failed product categories.

VR figured out **SLAM** ("positioning in space using cameras"), **depth sensors**, and **how humans perceive visual data in space**.

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"In robotics, all of these technologies are being used because you need to understand how the robot is moving through space."
</div>

<div class="mt-3 text-sm opacity-70">
The investment wasn't wasted — it built the perception stack now powering humanoids, drones, autonomous vehicles, and physical AI.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lineage.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Why VR plateaued — and why AR might not

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### VR's social problem
"It's hard to make it social when you have your face covered." A device that disconnects you from the room is hard to scale beyond gaming.

<div class="mt-3 text-xs opacity-60">**作者概括**: VR worked as engineering; the form factor lost the social-creature test.</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Orion AR — first time it clicks
**70-degree binocular field of view.** "It's very hard to describe how it feels to use a pair of glasses like this. But when you do, you suddenly are like — oh, I feel immersed."

<div class="mt-3 text-xs opacity-60">Still gated on waveguide + microLED yields and cost.</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic">
"I do think looking down at your phone all the time is not great for us as social creatures. So if you can maintain social connections and get information, that's where I think we're headed."
</div>

---
layout: two-cols
---

# Hardware compiles 4–5 times. Ever.

Software engineers "can compile their code every day, every hour, whatever they need to do."

In hardware, you redesign in CAD, release for build, and after the final compile — mass production — **you're done. You can't ship over-the-air updates.**

That single difference reshapes everything downstream: process, culture, conservatism, what counts as "ready."

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 italic text-sm">
"We have to do more of the reliability checks and tests in line with the program because once you compile that last time, you're done."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./compile-rate.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The plus-or-minus-three-sigma reality

Why hardware engineers obsess over the boring stuff:

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 italic">
"If you have two parts that go together, you're going to get the smallest version of this one and the largest version of this one, and you're going to have to put those together across the board. People don't think about this that much, but the part variance is pretty high."
</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### The math
For a product that sells millions, every part is somewhere on a plus-or-minus-three-sigma curve.

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### The job
"Solve for that last half a percent in the process of building."

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### The reward
High yields. Few returns. You actually make money on the units that ship.

</div>

</div>

---
layout: two-cols
---

# The supply chain has a stack

When Caitlin talks about supply-chain risk, she means a specific 5-layer dependency — and every layer was offshored over the last 25 years.

She names the chain explicitly: **raw materials → magnet processing → actuators → sub-assemblies → finished robots.**

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 italic text-sm">
"Each layer of this chain has essentially been outsourced over the last 25 years to countries like China, like Japan, like Korea. And I, full transparency, I've been part of that transfer of engineering knowledge to Asia."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./supply-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Why magnets are upstream of everything

A two-line physics primer that explains why a tiny commodity now sets the speed limit on the entire robotics industry.

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### What an actuator is
"You put power into it, electricity into it, and you get motion out of it."

A rotor in the middle, magnets around the ring, alternating current — the rotor spins, the limb moves, the robot acts.

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Why magnets are foundational
No magnets → no actuators → no humanoids, no drones, no manufacturing robots.

"If we can't get the magnets, then we have to design new actuator types that may use different materials, may be larger, may not be as efficient in space."

</div>

</div>

<div class="mt-4 text-sm opacity-70 text-center">
The same base technology spins a drone rotor and moves a robot arm. Same supply chain. Same chokepoint.
</div>

---

# Drones, the new arithmetic of war

<div class="mt-4 p-5 bg-red-50 border-l-4 border-red-500 italic text-lg">
"We need to invest a lot more in drones than in aircraft carriers."
</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Looking at Ukraine
"Drones are being changed and updated every day rapidly with 3D printing. This is, I think, the future of where war is headed."

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Cost arithmetic
"You're looking at what it costs for them to send out a missile and what it costs for us to stop it. And this is — you have to do the math every time. **And right now we're losing on the math.**"

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Background: Palmer Luckey — the founder of Oculus — is now the friend Caitlin cites on this. The same person who made VR is now making war hardware. The pipeline really is one pipeline.
</div>

---

# Re-industrialize, or lose the optionality

<div class="mt-4 p-5 text-lg italic border-l-4 border-red-500 bg-red-50 bg-opacity-30">

"Just imagine 100,000 drones coming out of China just at us. I do feel that we need to re-industrialize the country significantly to be safe in a military sense."

</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Why now
"People that are your allies now may not be in the future." The Allied West is going through geopolitical change.

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### What it would take
"Retach ourselves how to make things at scale, how to make things at quantity, how to process raw materials."

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Why she's optimistic
"America is really good at figuring these things out. We have a pioneering kind of independent spirit and a great engineering culture. But we need to move."

</div>

</div>

---
layout: two-cols
---

# Robot safety = two energies + compliance

Why a robot is dangerous isn't a vague intuition — Caitlin breaks it into a physics equation you can engineer against.

You "add up the energy essentially for both of those things" — the arm moving through space *and* the actuator that's rotating — then layer compliance on top.

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 italic text-sm">
"If it's just hard, then the impulse is high. But if it's soft and compressible, then the impulse is lower."
</div>

<div class="mt-3 text-sm opacity-70">
1X Neo "made significant safety considerations by pulling mass inwards essentially, which is a lot safer."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./impulse-eq.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Where humanoids actually are right now

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### Caitlin's verdict
"In my worldview, the humanoid robots are still prototypes. Advanced prototypes. What we need to do is show that this works at all, which is kind of where we're at right now."

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### The fine print
"You can get a Chinese robot that can do all kinds of things for you, but if you look at the booklet, it says — no human can be **within 3 ft** of this robot."

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500">

### What "scale" really means
"At scale is the problem in my mind. At scale is a huge challenge. For me, at scale means millions usually. But let's even say hundreds of thousands."

First you need a working design. Then reliability "day to day without a lot of human intervention." Then — first and hardest — **the supply chain.**

</div>

---

# Apple was best-in-class. Here's the trace.

<div class="mt-6 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"There's a cabinet maker who finished the back of the cabinet, and how important that was. And that goes very, very deep at Apple where every single design decision, even on the inside of the device, is considered."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### It isn't aesthetic
"What it does is actually force the engineering, industrial design, operations community to think about what are we really doing and what's the core of what's happening."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### What it produces
"If you're that methodical, what really matters tends to rise out and look very simple at the end."

</div>

</div>

<div class="mt-4 text-xs opacity-60">
Caitlin was at Apple 2007 → end of 2012 — thermal lead on the first MacBook Pro, then MacBook Air, then the cylindrical Mac Pro. She credits the era with training a generation of hardware leaders.
</div>

---
layout: two-cols
---

# Four principles for shipping hardware

The compressed advice for any team trying to build their first device.

**1.** Know your goals up front. KPIs are real — changing them mid-program burns months.

**2.** Design the hardest parts first, not the parts you know.

**3.** Over-iterate on what the customer touches most. Trackpad before everything.

**4.** "Do it right now." Because in hardware, you actually don't have more time — you just don't know it yet.

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
"Anything you know you need to do, you need to do right now because in two days there's going to be a surprise coming around the corner that you need that time to fix."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./design-principles.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Goal-setting in numbers (the Elon trick)

Define **trade-off ratios**, not vibes. Then the engineering decisions fall out almost mechanically.

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 italic">
"Elon, I've heard, does very well — defines the value of, you know, a gram of weight versus the cost. He does engineering del ratios essentially, and he's able to put numbers on what those ratios should be, which I think is really smart."
</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### In VR
"Display resolution — arc minutes, how many pixels per degree" became the central KPI.

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### In the MacBook Air
"It became very clear because we were machining it that there are certain features — like an ambient light sensor — that just didn't make sense anymore."

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### The pattern
Overarching goal → permission to **jettison** anything that doesn't pay for the gram-cost-ratio it consumes.

</div>

</div>

---

# Case study — democratizing the Quest 2

A worked example of "what really matters tends to rise out."

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 italic">
"We're trying to democratize VR. We're trying to get VR to more people. And the only way we could do that is reduce the price."
</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### What had to give
- **remove cameras** (we'll come back to this in fail-corner)
- remove components
- change materials
- change manufacturing processes

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### What came out
"The highest-selling VR headset of all time." Strong product, low return rates — "maybe even stronger than if we hadn't done that, funny enough."

</div>

</div>

<div class="mt-4 text-sm opacity-70 text-center">
Aligned KPI → permission to redesign every layer → counter-intuitively better outcome.
</div>

---

# What Steve really meant about customer feedback

The "don't ask users" line is the most quoted and the most misunderstood Apple maxim. Caitlin's reframe:

<div class="mt-6 p-5 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

"If you want to build something new, customers don't know what they want, because they haven't seen it… But if you show it to them, they will absolutely know that it's awesome and that it's what they want."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### The iPhone test
"You can't really go ask a hundred people what they want, because they're going to say a keyboard on their screen."

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### When the rule doesn't apply
Iterating on a known product class? Talk to users. Going zero-to-one? "Get stuck in an iterative feedback cycle and it's very hard to go zero-to-one."

</div>

</div>

---
layout: two-cols
---

# The memory-price meteor

Asked by Mehul Nariyawala (Matic) what to watch out for, Caitlin doesn't hedge.

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 italic">
"There's a meteor called memory prices that are coming for consumer hardware and robotics and physical AI. We're in trouble as an industry."
</div>

<div class="mt-4 text-sm">
**Why:** AI data centers eating supply. **Latency:** memory can't adapt fast enough to a new category of demand.

**Forecast:** "I think prices are going to double probably. If I knew what timeline the prices were going to double on, I'd be trading."

**Her actual advice to startups:** pre-buy memory and "have enough in stock if they can afford it to ride out price spikes."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./memory-meteor.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Why one missing chip kills a whole product

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic">
"You can't build anything if you have one component missing."
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Recoverable
Diecast component vendor goes out of business → "you can get another diecast component in three months maybe, and at quantity in five months."

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Catastrophic redesign
Lose your silicon or your specified RAM form factor → "you now have to redesign the entire guts of your product and then secure supply chain for these new things, build it again on the production line, test it again, do all the reliability testing."

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

### Why Elon's verticalization works
"When the silicon itself was difficult to find, he was able to redesign his PCB in record time and adapt to buying new silicon — that would be much more catastrophic for a company that had a more classic supply chain."

</div>

---

# Off-the-shelf vs. custom — and why drones got cheap

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Caitlin's rule
"I use off-the-shelf whenever I can, especially in the prototyping phases — your goal is to show that it can work at all."

A "works-like / looks-like" model, then move to custom only when the KPIs demand it.

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### The compounding effect
"This is the reason these drones are so cheap now — there's all these parts that have been innovated and built and scaled, manufactured for other things, and now we just have all these things and we can assemble a really cheap drone."

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">
**作者概括**: A scale wave in one industry (smartphones, EV batteries) silently subsidizes every adjacent hardware category. Drones are downstream of the iPhone supply chain.
</div>

---

# AI is on the edge of CAD — not in it

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500">

### Where AI already helps in hardware work
- High-level planning, complex dependency reasoning
- Building competitive databases (faster but imperfect)
- Excel — "doesn't sound sexy, but actually really speeds up the design process"
- PCB layout: "increasingly looking like AI can route inside of these boards pretty well"

</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500">

### Where it isn't, yet
"Claude can do what is essentially surfaces or point clouds. **This is not real CAD.** Real CAD is dense. It has shape. It has nerves. You have an equation for how the surfaces work. It's a solid entity."

LLMs and video models "don't have the ability to understand friction or weight or contact pressure or surface texture."

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
"My frustration — this is a healthy frustration — is I want codecs for engineering. I want codecs for hardware engineering."
</div>

---

# Why CAD-AI is bottlenecked on data — and who unlocks it

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 italic">
"This CAD data is some of the most valuable IP that anybody has. Samsung or Matic — they're not going to want to give their 3D CAD to a model vendor to teach it how to make great CAD. This is proprietary. This is the secret sauce."
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Caitlin's bet
"Hobbyists are a more interesting place to start. They're not concerned about the sanctity of their CAD. They want to make something and want help making it faster."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### The eventual fix
"An AI system that can go on-prem. Inside a data center the company owns, then train it with their data."

The "MCP layer for CAD," but for now — speculative.

</div>

</div>

---

# Humanoids are not the answer to everything

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic">
"I want a generalist robot shape to do everything. And I don't know that that works."
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### What is *not* a job for a humanoid
"If you want to screw together the keyboard to the case — this is a job for a dedicated robot, a manufacturing robot, designed just to screw 10 screws into a case for this specific laptop, 10,000 times a day."

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### What humans already aren't doing
"In China, at the top tier of tier-one suppliers, there's not very many people on the line anyway. They used to have 200 people. They might have 10 now."

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
**作者概括**: We don't need to replace humans with humanoids — we need more *dedicated* robots that look nothing like humans.
</div>

---

# What makes a robot non-creepy

Caitlin credits Leila Takayama for the research framing here — humans bring strong nonverbal expectations into any room, and most robots fail them.

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### The acknowledgement problem
"If you walk into a room and a robot's just like — like, it's creepy. You want these devices to be non-threatening… to appear soft. To appear reactive to you. To know that you're there."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### The intent-telegraphing fix
"If a robot just suddenly turns and does all this stuff, it scares you. But if a robot **looks before it turns** and then goes, it's much less alarming."

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic">
"Pixar, Disney are probably the world's best at doing this type of design work."
</div>

---

# Hiring for zero-to-one in physical AI

When no one's done the exact thing before, you can't hire pure pattern-matchers. Caitlin's three buckets:

<div class="mt-4 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Generalists
"Strong generalists who can adapt what they've learned in other fields to a new field."

Self-driving alums are a particularly good source — sensing stack, safety trade-offs, hardcore engineering.

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Builders + scalers
"Some people with experience building the thing that's new, and some with experience scaling other things."

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Cracked AI-native new grads
"The only AI native people, who use AI so natively that it's baked into their engineering process, are 20 or 21 years old. They're approaching their problem solving completely differently — and they're much faster."

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 italic text-sm">
"I rely a lot on my gut feel for people, assuming everything else has been checked. Usually it's that spark — they're genuinely motivated, they're motivated by a desire to learn and by excellence. They want to win."
</div>

---
layout: two-cols
---

# Three founders, three lessons

The compressed playbook Caitlin took from her three biggest bosses.

**Sam Altman** — "Why not 100×? Why not 10,000×? You're thinking too small." A nudge from above that re-scales every decision below.

**Steve Jobs** — A bar that "was not wavering. It was up here and you were either going to meet it or you weren't." Hearing "this is not hitting our quality bar" once and never wanting to hear it again.

**Mark Zuckerberg** — "Decisions were made at the lowest level possible in the company to maintain speed." Hardware reviews where he and Bosworth could "grock the trade-offs" in a 20-page report.

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-leaders.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Fail corner — the Quest 1 spec mismatch

Asked for a favorite failure: it was on the Quest 1, at EVT, the build where everything is supposed to be locked.

The team cut from 5 cameras to 4 for cost. Right before Christmas, the computer-vision lead told them: **the cameras' data isn't working — we can't get a lock on where the person is.**

Root cause: spec collision. Hardware was holding "plus-or-minus 0.15mm per part." CV had assumed a **global** 0.15mm across the whole system.

The fix: lock the bottom two cameras to a **steel bracket** (had to change material to hold tolerance) so they became one rigid pair — the source of truth — and let the other two float.

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./quest-cameras.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# What that failure actually taught

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### The bug was a vocabulary bug
Two teams using the same number to mean two different things. No CAD could have caught it — only conversation could.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### The redesign was better
"With a favored pair, you have a source of truth for the space and then the other two cameras overlap onto that source of truth."

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

### What shipped
The product still shipped on time. That generation of Quest is "the bestselling VR device of all time." But: "Certainly wish we caught it four months earlier."

</div>

<div class="mt-4 text-sm opacity-70 text-center">
**作者概括**: Specs are interfaces between teams. Interfaces fail in interpretation, not in numbers.
</div>

---

# Why she left OpenAI

The much-quoted exit, in her own framing — not a tweet, a position.

<div class="mt-6 p-5 italic border-l-4 border-red-500 bg-red-50 bg-opacity-30">

"What happened with the decision-making, the speed of the decision-making, the governance, and the lack of defined guardrails around the announcement of the department of war deal is not how I thought it should have been done."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### The third path
"You see a lot of people just kind of going along with what their company's doing. And then you see some people who are kind of scorched earth about it. In this case, that didn't make sense for me."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### The hope
"My hope was that my decision made it easier for other folks to talk about what their boundaries were and hold them."

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
She also said: "you don't know what's going to happen next time." A boundary is only a boundary the first time it's tested.
</div>

---

# What the next 5 years actually look like

Asked to project, Caitlin refuses the easy techno-optimism.

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic">
"I'm not somebody who thinks that in 5 years you're going to have, you know, 20 million robots. I don't think that it's going to be that fast. We have a lot of really deep work on supply chain and supply chain reliability, raw material access, and we need to figure out how to make factories again in this country for high-tech."
</div>

<div class="mt-6 p-5 text-lg italic border-l-4 border-red-500 bg-red-50 bg-opacity-30">

"There's probably more change in war than there is in consumer electronics in the next two years."

</div>

<div class="mt-4 text-sm opacity-70">
Knowledge work transformed by AI. Cars + drones go faster than any other physical category. Humanoids still slow. Re-industrialization the gating constraint.
</div>

---

# Closing message — design the future

<div class="mt-6 p-5 text-lg italic border-l-4 border-green-500 bg-green-50 bg-opacity-30">

"This is probably one of the most exciting times we're coming into. It's normal for all of us to be worried and scared about it, but I also think it's an opportunity for people to have an extraordinary amount of progress and be able to as an individual do more than we've ever done before."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Daily practice
"Daily using these AI tools right now. And every time a new model comes out, test again, because it's really important to know what we're dealing with and where these boundaries are."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### How to be helpful
"Figure out what future we want, what we want the human aspect to be in that future. Paint a picture in fiction, in literature, in conversation — and then build that. **This is not a single-player game.**"

</div>

</div>

<div class="mt-6 text-center text-sm opacity-70">
"I've never been more excited about the power of an individual."
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"There's a dawning realization, especially in the labs, the acceleration is going so vertical that what you can do behind a keyboard with AI is going to saturate. When that happens, the next frontier is the physical world."
<div class="text-xs opacity-60 mt-1 not-italic">— on why every AI lab is suddenly hiring roboticists</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"We only get to compile our code, quote-unquote, like four or five times."
<div class="text-xs opacity-60 mt-1 not-italic">— hardware vs. software, in one line</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"There's a meteor called memory prices that are coming for consumer hardware and robotics and physical AI. We're in trouble as an industry."
<div class="text-xs opacity-60 mt-1 not-italic">— Caitlin, channeling Matic CEO Mehul Nariyawala's question</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"There's probably more change in war than there is in consumer electronics in the next 2 years."
<div class="text-xs opacity-60 mt-1 not-italic">— on where physical AI is actually accelerating fastest</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"Sam is really good at saying — why not more? Why not 100x or 10,000x? You're thinking too small."
<div class="text-xs opacity-60 mt-1 not-italic">— on the one Sam Altman habit she carries forward</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"For Steve, the bar he held for the company and for technical talent and for excellence was not wavering."
<div class="text-xs opacity-60 mt-1 not-italic">— on what made Apple's hardware era what it was</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"I want codecs for engineering. I want codecs for hardware engineering."
<div class="text-xs opacity-60 mt-1 not-italic">— on the missing tool that would actually change her field</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"Anything you know you need to do, you need to do right now — because in two days there's going to be a surprise coming around the corner that you need that time to fix."
<div class="text-xs opacity-60 mt-1 not-italic">— the Apple-era ruthlessness about time</div>
</div>

</div>

---
layout: end
---

# "I've never been more excited about the power of an individual."

<div class="mt-6 text-sm opacity-60">
Caitlin Kalinowski · Lenny's Podcast
</div>
