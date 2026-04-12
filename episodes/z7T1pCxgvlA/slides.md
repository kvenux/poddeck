---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Why most AI products fail: Lessons from 50+ AI deployments'
info: |
  Aishwarya Sranti & Kiriti Bottem on Lenny's Podcast — key lessons from 50+ AI product deployments at OpenAI, Google & Amazon
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Why Most AI Products Fail

**Lessons from 50+ AI Deployments at OpenAI, Google & Amazon**

<div class="mt-4 text-lg opacity-80">
Aishwarya Sranti & Kiriti Bottem · Lenny's Podcast
</div>

<div class="mt-6 text-sm opacity-60">
Ash: early AI researcher at Alexa & Microsoft, 35+ research papers<br>
Kiriti: works on Codex at OpenAI, decade of AI/ML infra at Google & Kumo<br>
Together: 50+ AI product deployments, #1 rated AI course on Maven
</div>

---

# Why This Episode Matters

<div class="text-sm opacity-60 mb-4">Six takeaways that can save your AI product from failure</div>

<div class="grid grid-cols-3 gap-4 mt-2">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### AI ≠ Traditional SW
Non-deterministic inputs AND outputs fundamentally change how you build

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Agency-Control Tradeoff
Every bit of autonomy you give AI means control you give up — earn trust first

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Start Small, Graduate
V1 → V2 → V3 progression keeps risk low while building flywheels

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Evals Are Misunderstood
Neither evals nor production monitoring alone will save you — you need both

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### CCCD Framework
Continuous Calibration + Continuous Development: the AI version of CI/CD

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Pain Is the New Moat
No textbook, no shortcut — the companies that iterate through pain win

</div>

</div>

---
layout: two-cols
---

# Difference #1: Non-Determinism

Traditional software has a well-mapped decision engine — think booking.com where clicking through buttons always produces the same predictable experience.

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**AI products replace that with a fluid, natural-language interface.** The user can express intent in countless ways, and the LLM — a probabilistic black box — can respond unpredictably.

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Triple uncertainty:** You don't know how the user will behave, you don't know how the LLM will respond, and you don't fully understand the process in between.

</div>

<div class="mt-3 text-xs opacity-60">

Ash: this is also the most beautiful part of AI — the bar to using AI products is much lower because you can be as natural as you would be with humans.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./non-determinism.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Difference #2: Agency-Control Tradeoff

<div class="mt-2 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded">

"Every time you hand over decision-making capabilities to agentic systems, you're kind of relinquishing some amount of control on your end."

</div>

<div class="mt-4 space-y-3">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**More agency = less control.** You want to make sure the agent has earned trust before giving it the ability to make decisions.

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Insurance example:** MRIs and blood tests can be auto-approved (low risk), but invasive surgery pre-authorization needs a human in the loop (high risk).

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agency-control.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Start Small: The V1 → V2 → V3 Progression

<div class="text-sm opacity-60 mb-4">Don't jump to autonomous agents on day one — graduate through levels of agency</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

### Coding Assistant

<div class="space-y-2 mt-2">
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>V1:</strong> Suggest inline completions and boilerplate snippets
</div>
<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>V2:</strong> Generate larger blocks like tests or refactors for humans to review
</div>
<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>V3:</strong> Apply changes and open PRs autonomously
</div>
</div>

</div>

<div>

### Marketing Assistant

<div class="space-y-2 mt-2">
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>V1:</strong> Draft emails or social copy — "here's what I would do"
</div>
<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>V2:</strong> Build a multi-step campaign and run it
</div>
<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>V3:</strong> Launch, A/B test, auto-optimize across channels
</div>
</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Why this works:** When you start small, it forces you to think about the problem you're going to solve, instead of getting lost in solution complexity.

</div>

---

# Customer Support: A Real Example from OpenAI

<div class="text-sm opacity-60 mb-3">How to graduate an AI agent through increasing levels of autonomy</div>

<div class="grid grid-cols-3 gap-4 mt-2">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### V1: Routing
<div class="text-sm mt-2">
Agent classifies and routes tickets to the right department. Even if it routes wrong, humans can undo the action.
</div>
<div class="text-xs mt-2 opacity-60">You learn: routing data quality, prompt structure, taxonomy issues</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### V2: Co-pilot
<div class="text-sm mt-2">
Agent generates draft responses based on SOPs. Humans review and edit before sending. You're logging what humans change — free error analysis.
</div>
<div class="text-xs mt-2 opacity-60">You learn: draft acceptance rate, what gets omitted</div>
</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### V3: End-to-End
<div class="text-sm mt-2">
Agent drafts resolution AND resolves the ticket directly. Only after V2 proved drafts were mostly used as-is.
</div>
<div class="text-xs mt-2 opacity-60">You learn: full resolution quality, edge cases</div>
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Cautionary tale:** Ash worked on a customer support use case where they built the end-to-end agent from day one — they had to shut down the product because of too many hot fixes and emerging problems they couldn't keep up with.

</div>

---

# Problem First, Not Solution First

<div class="mt-2 p-4 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded">

"In all this advancements of the AI, one easy slippery slope is to keep thinking about complexities of the solution and forget the problem that you're trying to solve."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### What Goes Wrong
- Companies get pressure from competitors building agents
- Teams try to build end-to-end autonomous agents on day one
- They get overwhelmed with 100 different failure modes
- Hot fixes pile up, product gets shut down

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### What Works
- Obsess over the business problem, not the technology
- Understand your workflows deeply before automating
- Choose the right tool for each part: ML model, deterministic code, or LLM agent
- Build flywheels that improve over time

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Key stat:** 80% of so-called AI engineers and AI PMs spend their time actually understanding their workflows, not building fancy models.

</div>

---

# One-Click Agents? Pure Marketing.

<div class="mt-4 p-4 text-base italic border-l-4 border-red-500 bg-red-50 bg-opacity-20 rounded">

"When someone comes up to me and says, 'We have this one-click agent. It's going to be deployed in your system and then in two or three days it'll start showing you significant gains,' I would almost be skeptical because it's just not possible."

</div>

<div class="mt-4 space-y-3">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**Enterprise data is messy.** Hierarchical taxonomies are broken, there are duplicate functions named "get customer data w1" and "w2", and there's massive tech debt the agent needs to navigate.

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Real human agents know hidden rules** — like checking if a taxonomy node was last updated in 2019, meaning it's dead and should be ignored. These rules are nowhere in documentation.

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Ash's advice:** Go with a company that says "we're going to build this pipeline for you and it will learn over time" — not one promising out-of-the-box results. Building significant ROI easily takes four to six months.

</div>

</div>

---
layout: two-cols
---

# The AI Success Triangle

<div class="text-sm opacity-60 mb-3">Every technology problem is a people problem first</div>

<div class="space-y-3 mt-2">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Leaders:** Must relearn intuitions built over 10-15 years. Be hands-on. The Rackspace CEO blocked 4-6 AM daily for "catching up with AI."

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**Culture:** Build empowerment, not FOMO. Subject matter experts are crucial — but they won't help if they think they're being replaced.

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Technical:** Understand your workflows obsessively. Choose the right tool for each sub-problem, not just "slap an agent on it."

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./success-triangle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Leaders Must Relearn Their Intuitions

<div class="mt-2 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded">

"You must be comfortable with the fact that your intuitions might not be right and you probably are the dumbest person in the room and you want to learn from everyone."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### Why It's Hard

- Leaders have built intuitions over 10-15 years
- Those intuitions are highly regarded — but now may be wrong
- It's almost always impossible for AI adoption to be bottom up
- Engineers can't get buy-in from leaders who don't trust the technology

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### What Great Leaders Do

- Block dedicated time for learning AI (like the 4-6 AM block)
- Run weekend white-coding sessions
- Consult 2-3 trusted sources, then bounce questions off AI experts
- Understand the range of what AI can solve — not just assume it's easy or impossible

</div>

</div>

<div class="mt-4 text-sm opacity-60">

Ash: "I've heard from so many folks who are building that our leaders just don't understand the extent to which AI can solve a particular problem, or they just white-code something and assume it's easy to take to production."

</div>

---

# Culture: Empowerment, Not Replacement

<div class="mt-4 space-y-4">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### The FOMO Problem
Companies create a culture of "you will be replaced" — subject matter experts get afraid and refuse to collaborate. But SMEs are critical for building AI products that actually work, because you need them to define ideal behavior and validate outputs.

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### The Empowerment Alternative
Frame AI as augmenting what people already do. Make the entire organization feel they're "in it together." AI opens up more opportunities — employees can 10x their productivity instead of losing their jobs.

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Real story:** A new hire built his own vibe-coded app to replace a popular paid task tracker and onboarded the whole team. That kind of agency — rethinking experiences instead of accepting the status quo — is what sets people apart.

</div>

</div>

---

# Flywheel Thinking: Build to Improve Over Time

<div class="mt-2 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded">

"It's not about being the first company to have an agent among your competitors. It's about have you built the right flywheels in place so that you can improve over time."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### The Flywheel
<div class="text-sm mt-2">

1. Deploy a constrained AI system
2. Log human behavior and corrections
3. Analyze error patterns
4. Feed insights back into the system
5. Gradually increase autonomy
6. Repeat

</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### Why This Beats Day-One Autonomy
<div class="text-sm mt-2">

- **Air Canada incident:** Agent hallucinated a refund policy that wasn't in the playbook — company had to honor it due to legal implications
- **75% of enterprises** surveyed said their biggest problem was reliability — that's why so many AI products today are productivity tools, not end-to-end agents
- You're building **implicit logging** for free when humans review AI outputs

</div>
</div>

</div>

---
layout: two-cols
---

# The Evals Debate

<div class="text-sm opacity-60 mb-3">Neither extreme works — you need both evals and production monitoring</div>

<div class="space-y-3 mt-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Evals** = your trusted product knowledge encoded as test datasets. They catch errors you already know about.

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Production monitoring** = implicit + explicit signals from real users. Catches emerging patterns you never predicted.

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**The false dichotomy:** Eval will solve everything vs. production monitoring will solve everything. Neither is true.

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**Example:** In ChatGPT, if a user regenerates an answer instead of giving a thumbs down, that's an implicit signal that the answer wasn't meeting expectations.

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./eval-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "Eval" Has Lost Its Meaning

<div class="mt-4 p-4 text-base italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20 rounded">

"Martin Fowler at some point had this term called semantic diffusion... someone comes up with a term, everybody starts butchering it with their own definitions, and then you kind of lose the actual definition of it. That is kind of what is happening to eval."

</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200 text-center">

### Data Labelers Say "Eval"
<div class="text-sm mt-2">They mean: experts leaving notes on what should be right. Error analysis.</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200 text-center">

### PMs Say "Eval"
<div class="text-sm mt-2">They mean: writing test cases. Not necessarily building LLM judges for production.</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200 text-center">

### Clients Say "Eval"
<div class="text-sm mt-2">Ash: a client said "we do eval" — turns out they just checked LM Arena and Artificial Analysis benchmarks.</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**The real question everyone agrees on:** Is it important to build an actionable feedback loop for AI products? Yes. How you do that depends entirely on your application.

</div>

---

# How OpenAI Codex Approaches Evals

<div class="text-sm opacity-60 mb-3">A balanced approach: evals + customer feedback + vibes</div>

<div class="space-y-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Coding agents are uniquely hard to eval
They're built for customizability, used in countless integrations and workflows. It's nearly impossible to build eval datasets covering all possible interactions.

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### The Codex approach
- Core eval datasets to ensure changes don't damage critical product functionality
- Extreme focus on understanding how customers use the product
- A/B testing for major changes (like the code review product)
- Active social media monitoring for user problems
- Each engineer maintains their own hard problems list and tests new models against it

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### The **Claude Code** counterpoint
Boris, head of **Claude Code**, said they don't do evals — it's all vibes. Kiriti's take: nobody can claim one concrete set of evals they can bet their life on. Every new model launch means the team gets together and tests different things.

</div>

</div>

---
layout: two-cols
---

# The CCCD Framework

**Continuous Calibration, Continuous Development**

<div class="text-sm opacity-60 mt-1 mb-3">The AI-era version of CI/CD</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Continuous Development** (right side): Scope capability → curate data → set up application → design eval metrics → deploy

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**Continuous Calibration** (left side): Spot error patterns → analyze behavior → apply fixes → design NEW eval metrics → feed back

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Key insight:** Eval metrics only catch errors you're already aware of. Calibration catches the emerging patterns you never predicted.

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cccd-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# CCCD: When to Level Up

<div class="mt-2 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded">

"It's all about minimizing surprise — when you're not seeing new data distribution patterns and your users have been pretty consistent, the amount of information you gain is very low. That's when you know you can go to the next stage."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Signs You're Ready
<div class="text-sm mt-2">

- No new data distribution patterns
- Users behave consistently with the system
- Low information gain from each calibration cycle
- Drafts are being used as-is most of the time

</div>
</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Events That Reset Calibration
<div class="text-sm mt-2">

- Model changes (GPT-4o deprecated → GPT-5 has very different properties)
- User behavior evolves over time (people don't talk to ChatGPT the same way they did two years ago)
- Users discover new use cases and push the system beyond its design

</div>
</div>

</div>

---

# The Underwriter Story: Users Will Surprise You

<div class="mt-4 space-y-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### The System
Built for a bank to help underwriters find policies and information to approve loans. Loan applications were 30-40 pages long.

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### The Success (First 3-4 Months)
Underwriters reported real productivity gains. The system worked great for its intended purpose — retrieving relevant policies and bank information.

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### The Surprise
Users got excited and started asking deep questions they never anticipated: throwing entire application documents at the system asking "for a case that looks like this, what did previous underwriters do?" — a natural extension for the user, but required completely different capabilities to build.

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Lesson:** What seems natural to an end user might be very hard to build. User behavior evolves over time, and that's when you know you need to recalibrate.

</div>

</div>

---

# Multi-Agents: Misunderstood, Not Overrated

<div class="mt-4 space-y-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### The Misconception
People think: "I have this incredibly complex problem. I'll break it into agents — you handle this, you handle that — connect them all, and it's agent utopia." Letting agents communicate peer-to-peer in something like a gossip protocol doesn't work with current model capabilities.

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### What Actually Works
**Supervisor + sub-agent pattern:** One orchestrating agent delegates to specialized sub-agents. This keeps control centralized and guardrails manageable. The alternative — dividing by functionality and hoping they coordinate — is incredibly hard, especially in customer-facing use cases.

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Coding Agents Are Underrated
Kiriti: "Talking to an engineer in any random company, especially outside of Bay Area, the amount of impact coding agents can create — and the penetration is very low." 2025-2026 will be huge for coding agent adoption.

</div>

</div>

---

# 2026 Predictions

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### Kiriti: Proactive Agents

<div class="text-sm mt-2">

Background agents that understand your workflow, get plugged into where actual work happens, and prompt YOU back.

**Example:** A coding agent that says "I have fixed five of your Linear tickets — here are the patches, just review them at the start of your day."

The reason AI is failing to create value today is mainly about not understanding the context. As agents get plugged into the right places, they'll start to see the world around you.

</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### Ash: Multimodal Experiences

<div class="text-sm mt-2">

As humans, we are multimodal — language is probably one of our last forms of evolution. When we talk, we're constantly picking up signals (nodding, boredom) and adjusting.

**Two opportunities:**
1. Better human-AI interaction — richer than just text
2. Tons of "boring tasks" with handwritten documents and messy PDFs that can't be parsed by even the best models today — multimodal understanding unlocks that data

</div>
</div>

</div>

---
layout: two-cols
---

# Design > Implementation

<div class="mt-2 p-4 text-base italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-20 rounded">

"Building is really cheap today. Design is more expensive. Really thinking about your product, what you're going to build, is it going to really solve a pain point — that is what is way more valuable today."

</div>

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Ash's advice:** Implementation is going to be ridiculously cheap in the next few years. Nail down your design, your judgment, your taste.

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**Career implication:** The first 2-3 years used to focus on execution mechanics. Now AI helps you ramp quickly. What matters is taste, judgment, and what is uniquely you.

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pain-moat.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Pain Is the New Moat

<div class="mt-4 p-4 text-lg italic border-l-4 border-red-500 bg-red-50 bg-opacity-20 rounded">

"Successful companies right now building in any new area — they are going through the pain of learning this, implementing this and understanding what works and what doesn't work. Pain is the new moat."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### What the Moat Looks Like
- Understanding non-negotiable trade-offs for your specific domain
- Matching model capabilities to actual problems through iteration
- Building lived experience across the organization
- Creating eval datasets and flywheels that took months of pain to develop

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### Why There's No Shortcut

This is a three-year-old field. There are no playbooks, there are no textbooks. The knowledge you build through iteration — that pain — is what translates into the moat of your company.

</div>

</div>

<div class="mt-4 text-sm opacity-60">

Lenny's reaction: "It's like turning a coal into diamond."

</div>

---

# The Closing Word

<div class="mt-6 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded">

"Be obsessed with your customers. Be obsessed with the problem. AI is just a tool."

</div>

<div class="mt-6 space-y-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**80% of so-called AI engineers and AI PMs** spend their time actually understanding their workflows very well — they're not building the fanciest models, they're in the weeds understanding customer behavior and data.

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**Whenever a software engineer who's never done AI before hears "look at your data"** — it's a huge revelation, but it's always been the case. Go there. Look at your data. Understand your users.

</div>

</div>

---

# Core Quotes

<div class="text-xs opacity-60 mb-1">The lines worth remembering from this conversation</div>

<div class="space-y-1">

<div class="px-3 py-1.5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"Every time you hand over decision-making capabilities to agentic systems, you're kind of relinquishing some amount of control on your end."
<span class="text-xs opacity-60 not-italic"> — Ash</span>
</div>

<div class="px-3 py-1.5 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"It's not about being the first company to have an agent among your competitors. It's about have you built the right flywheels in place so that you can improve over time."
<span class="text-xs opacity-60 not-italic"> — Ash</span>
</div>

<div class="px-3 py-1.5 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"If someone's selling you one-click agents, it's pure marketing."
<span class="text-xs opacity-60 not-italic"> — Ash</span>
</div>

<div class="px-3 py-1.5 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"Building is really cheap today. Design is more expensive."
<span class="text-xs opacity-60 not-italic"> — Ash</span>
</div>

<div class="px-3 py-1.5 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"Pain is the new moat."
<span class="text-xs opacity-60 not-italic"> — Kiriti</span>
</div>

<div class="px-3 py-1.5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"Be obsessed with your customers. Be obsessed with the problem. AI is just a tool."
<span class="text-xs opacity-60 not-italic"> — Ash</span>
</div>

</div>

---
layout: end
---

# "Pain is the new moat."

Aishwarya Sranti & Kiriti Bottem · Lenny's Podcast

<div class="mt-4 text-sm opacity-60">
Course: Building Enterprise AI Products (Maven)<br>
Ash: LinkedIn · 20K-star AI learning GitHub repo<br>
Kiriti: Codex at OpenAI · LinkedIn
</div>
