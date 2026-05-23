---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Inside Abridge: The AI Listening to 100M Doctor Visits'
info: |
  Latent Space × Supervised Learning crossover with Janie Lee and Chai Asawa from Abridge —
  how an ambient AI scribe is becoming a clinical intelligence layer for US healthcare.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Inside Abridge

## The AI Listening to 100 Million Doctor Visits

<div class="mt-8 text-lg opacity-80">
Janie Lee · Chai Asawa · Latent Space × Supervised Learning
</div>

<div class="mt-12 text-sm opacity-60">
From "ambient AI scribe" to clinical intelligence layer
</div>

---

# Why this episode matters

<div class="text-sm opacity-70 mb-4">A rare deep dive on running a healthcare AI product at real scale.</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold">Ambient by default</div>
<div class="text-xs mt-2 opacity-80">Always listening, rarely interrupting — the "air conditioning" philosophy</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold">100M conversations</div>
<div class="text-xs mt-2 opacity-80">Probably the largest real-world clinical conversation dataset on the planet</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold">Real-time stakes</div>
<div class="text-xs mt-2 opacity-80">Quality × latency × cost — all three matter, all the time</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-semibold">Save time → money → lives</div>
<div class="text-xs mt-2 opacity-80">Three acts: documentation, revenue cycle, clinical decision support</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-semibold">Hardest AI ships first</div>
<div class="text-xs mt-2 opacity-80">Counter-take: zero-error problems force innovation, they don't follow it</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-semibold">PRDs aren't dead</div>
<div class="text-xs mt-2 opacity-80">When every product touches hundreds of health systems, prototypes aren't enough</div>
</div>

</div>

---

# Who's at the table

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Janie Lee
**Product — Abridge**

Previously Loom (30M users in her words). Now drives product strategy at Abridge — from documentation to revenue cycle to clinical decision support.

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Chai Asawa
**Clinical Decision Support — Abridge**

Early engineer at Glean. Came to Abridge to build "the healthcare-coded version of Glean."

</div>

</div>

<div class="mt-6 p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

### About Abridge

Founded **2018** by a practicing cardiologist (still rounds monthly). Started as an AI scribe replacing
handwriting. Now selling into the largest US health systems as a **clinical intelligence layer**
covering before, during, and after every patient visit.

</div>

---

# The problem: doctors live in documentation

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Pajama time
<div class="text-4xl font-bold text-red-600 my-2">10–20h</div>
<div class="text-xs opacity-70">per week per doctor on notes — done at home, after work</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Doctor shortage
<div class="text-4xl font-bold text-orange-600 my-2">massive</div>
<div class="text-xs opacity-70">across the country — fewer hands, more chart-time</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Of US GDP
<div class="text-4xl font-bold text-blue-600 my-2">~20%</div>
<div class="text-xs opacity-70">goes to healthcare — almost all of it is a derivative of the visit conversation</div>

</div>

</div>

<div class="mt-8 p-4 text-base italic border-l-4 border-green-500 bg-green-50 bg-opacity-30">

"We have a slack channel called <strong>love stories</strong>. Clinicians tell us they're retiring early —
or now finally able to go home and eat dinner with our kids for the first time."
<div class="text-xs opacity-60 mt-2 not-italic">— Janie, on what time-back unlocks for doctors</div>

</div>

---
layout: two-cols
---

# Three acts of Abridge

The company isn't pivoting — it's stacking new chapters on top of the same ambient surface.

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Act 1 — Save time</strong><br/>
<span class="text-xs opacity-80">AI scribe that erases pajama time</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Act 2 — Save & make money</strong><br/>
<span class="text-xs opacity-80">Billing, coding, prior auth — for CFOs not just clinicians</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Act 3 — Save lives</strong><br/>
<span class="text-xs opacity-80">Clinical decision support, in the loop, on every visit</span>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-acts.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The "air conditioning" philosophy

<div class="mt-4 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"We want our product to feel like <strong>air conditioning</strong>. It should be in the background
just making things better."
<div class="text-sm opacity-60 mt-2 not-italic">— Janie Lee</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### The alert fatigue trap
Over <strong>90% of alerts in healthcare are ignored</strong>. The reflex of adding another pop-up
makes the system worse, not safer.

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Reactive → Proactive
Instead of interrupting mid-visit, <strong>prep the clinician before they walk into the room</strong>.
Summarize prior contacts, surface what to discuss.

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
The bar to "break the wall" is high — only when the clinical risk of NOT intervening is bigger
than the cost of interrupting.
</div>

---
layout: two-cols
---

# The prior-auth example

The crown-jewel use case for in-visit intervention.

**Today:** patient with knee pain gets an MRI prescribed → 4 weeks later → "your MRI wasn't approved,
come back in."

**With Abridge:** the agent has already read Aetna's plan, knows 4 of 6 criteria are met,
and quietly tells the doctor:

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm italic">
"Before Sean leaves, ask him: has he had physical therapy, and has his pain lasted more than six weeks?"
</div>

<div class="mt-3 text-xs opacity-70">
Result: <strong>MRI guaranteed approved before the patient walks out the door.</strong>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./prior-auth-loop.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# What makes this hard

<div class="text-sm opacity-70 mb-4">Pulling off "real-time, in-visit, clinically correct" is a stack of nasty problems.</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 1. The data is everywhere
Procedures × payer policies × health systems = combinatorial explosion. Some policies live in
**unstructured 50-page PDFs**, others on websites, varying by state.

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 2. The bar for accuracy is brutal
"Like working at OpenDoor on pricing — every outlier wiped out the margins." Here a wrong answer
can be **fatal** (e.g. prescribing something the patient is allergic to).

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 3. Quality × latency × cost — all three
The usual AI KPIs but you can't trade them off. Doctors have <strong>15-minute back-to-back</strong>
visits. The model has to be smart AND fast AND not break the bank at 100M conversations/year.

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

### 4. Workflow is everything
"When insurance companies deploy AI, it typically happens too late." Pull the decision
**forward into the visit** — collapse weeks of back-and-forth into minutes.

</div>

</div>

---

# Three KPIs you cannot trade off

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-6 rounded bg-blue-50 border-2 border-blue-300">

### Quality
<div class="text-3xl font-bold text-blue-600 my-3">High intelligence</div>
<div class="text-sm opacity-80">because alert fatigue is a function of false alarms — bad alerts get ignored</div>

</div>

<div class="p-6 rounded bg-green-50 border-2 border-green-300">

### Latency
<div class="text-3xl font-bold text-green-600 my-3">In-conversation</div>
<div class="text-sm opacity-80">guidance has to land while the patient is still in the room, not weeks later</div>

</div>

<div class="p-6 rounded bg-orange-50 border-2 border-orange-300">

### Cost
<div class="text-3xl font-bold text-orange-600 my-3">~100M total</div>
<div class="text-sm opacity-80">conversations in the dataset — you can't burn frontier-model tokens on every visit</div>

</div>

</div>

<div class="mt-8 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

"In any AI product, usually the three KPIs you care about are quality, latency, and cost. Now what
we're saying is: do this real time in the conversation guiding the clinician."
<div class="text-xs opacity-60 mt-2 not-italic">— Chai Asawa</div>

</div>

---
layout: two-cols
---

# A constellation of models

There is no single model. There is a **constellation** — and the trick is picking which one fires.

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Cheap, fast triage model</strong><br/>
<span class="opacity-80">always-on, watching the conversation, deciding "is anything happening here?"</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Larger model</strong><br/>
<span class="opacity-80">only fires when triage flags a high-stakes moment — prior auth, clinical risk</span>
</div>

<div class="p-3 rounded bg-gray-50 border-l-4 border-gray-400">
<strong>Stay quiet</strong><br/>
<span class="opacity-80">most of the time, the right answer is "do nothing, keep listening"</span>
</div>

</div>

<div class="mt-4 text-xs opacity-70 italic">
"Fast and slow" routing — cheap triage hands off only the calls worth thinking about.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./constellation.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 100M conversations as exhaust

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### What it is
On the order of **~100 million medical conversations** — the trace between every patient
and their provider, captured for the first time at this scale.

The CEO calls it the <strong>"exhaust"</strong> that comes out of the product.

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Why it matters
This is where **proprietary models pay rent**: post-train on this exhaust for cheaper,
faster transcription, diarization, and note generation — at quality the off-the-shelf models
can't reach for healthcare-specific tasks.

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

"Going back to this idea that <strong>the conversation is the agent trace</strong>."
<div class="text-xs opacity-60 mt-2 not-italic">— framing the data as more than transcripts</div>

</div>

---
layout: two-cols
---

# The EHR as a file system

A genuinely interesting reframing of the platform Abridge sits on top of.

**Chai's observation:** almost every modern agent is a coding agent under the hood. Give it
a filesystem, let it read and write.

The EHR is effectively the **filesystem of the patient's life** —
way more data than fits in any context window today.

**Implication:** as models get better at code-style tool use, Abridge gets better
for free. Their roadmap rides the foundation-model curve.

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ehr-filesystem.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Personalization at three levels

<div class="text-sm opacity-70 mb-4">"A note is a reflection that is so deeply personal of a doctor's work."</div>

<div class="grid grid-cols-3 gap-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Individual
**Style preferences**: bullets vs. paragraphs, concise vs. comprehensive, favorite phrases,
"two spaces between sentences."

<div class="mt-3 text-xs italic opacity-70">"I refuse to use this tool" if you get it wrong.</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Specialty
**Cardiology ≠ dermatology**. A great derm note is structured differently — different criteria
for "complete, compliant, billable."

<div class="mt-3 text-xs italic opacity-70">Hard-earned evals at the specialty level.</div>

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

### Health system
Each hospital has **decades of refined best practices**. Embedding their local pathways
into the clinical-decision-support flow.

<div class="mt-3 text-xs italic opacity-70">Local guidelines are where the moat deepens.</div>

</div>

</div>

<div class="mt-6 p-3 italic border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-30 text-sm">

"AI writing that doesn't feel like your own — we call that slop. One framing of slop is
<strong>AI without context</strong>. But we have all that context."
<div class="text-xs opacity-60 mt-1 not-italic">— Chai, on why personalization isn't a feature, it's the product</div>

</div>

---

# How evals actually work

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Step 1 — LFD
"<strong>Look at the effing data</strong>." In-house clinicians read raw outputs and decide
"is this good enough?" before anything automated runs.

<div class="mt-2 text-xs opacity-70">A meme in ML — because everyone skips it.</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Step 2 — Calibrated judges
Build LLM judges across each quality dimension (clinical safety, style, completeness, billability),
calibrate against annotated data.

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### Step 3 — Internal + 3rd-party experts
Run high-stakes changes past internal AND third-party clinical evaluators before any
big release ships.

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### Step 4 — Progressive rollout
A subset of customers told Abridge: <em>"we actually want to innovate with you."</em>
Some now ship on monthly cycles — fast for a sector whose release cadence is normally measured in quarters.

</div>

</div>

<div class="mt-4 text-sm opacity-70 italic">
Goal: collapse the eval cycle from months → weeks → days. Half ML problem, half operations.
</div>

---

# Trust is earned in drops

<div class="mt-6 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"Trust is earned in drops, earned in buckets. We still can't do what I used to do when I worked
at Loom. We had 30 million users — I'd just be rolling out experiments left and right."
<div class="text-sm opacity-60 mt-2 not-italic">— Janie Lee, on the bar for healthcare rollouts</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-gray-400 bg-gray-50">

### Before
Health-system release cycles measured in **quarters** — sometimes twice a year. New
vendors are an annual event, not a Tuesday.

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Now
A meaningful subset of Abridge customers ship on **monthly cycles** — and a
sub-subset opts in to develop **before GA**, with higher tolerance because they want first feedback.

</div>

</div>

<div class="mt-4 p-3 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 text-sm">

Analogy from Chai: "<strong>Waymo has a tagline: the world's most experienced driver.</strong>"
Progressive rollout linearly grows your online eval set.

</div>

---

# The "clinician scientist" team

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### The role
MDs who are also deeply technical — anywhere from **full-stack engineer** to
"extremely extremely scrappy prompter."

Embedded in every product team. They decide what "clinically useful" means and own
the eval criteria for their corner.

<div class="mt-3 text-xs opacity-70 italic">
"One of our leaders referred to them as <strong>mutants</strong>."
</div>

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Why it matters
You can't write a derm-note eval rubric without a dermatologist. You can't decide
"is this billable?" from outside the system.

As AI tooling levels up engineers, the **clinical-side-as-builder** becomes more
valuable, not less. They are "the killers of the team."

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
The CEO is still a <strong>practicing cardiologist</strong>. He rounds once a month —
the first-call shortcut for "is this product idea even sane?"
</div>

---

# How HIPAA actually works in production

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### The constraint
Real-world data used for training or eval must be **de-identified** —
PHI (protected health info) stripped, per government guidelines.

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### The Abridge approach
Built their **own model** to detect and remove PHI from clinical transcripts. Once a
transcript is scrubbed, it can be used for training, eval, and feedback loops.

</div>

</div>

<div class="mt-4 p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

### The wrinkle
**De-identification is one-way.** Once scrubbed, you can't go back to the patient.
That deliberately constrains how you debug — and forces the upstream model to be
really, really right.

</div>

<div class="mt-4 p-3 italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 text-sm">
Contracts pin down: who can access PHI, for how long, before it gets de-identified.
That's a separate gate on top of the technical one.
</div>

---
layout: two-cols
---

# One conversation, many readers

The same captured visit serves multiple stakeholders — each with different questions.

This is the bet: a single platform collapses what today are separate, expensive,
disconnected systems.

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500"><strong>Doctor</strong>: did my note represent the care I gave?</div>
<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500"><strong>Patient</strong>: what just happened? What are my next steps?</div>
<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500"><strong>Payer</strong>: was the care appropriate, and is it documented?</div>
<div class="p-2 rounded bg-red-50 border-l-4 border-red-500"><strong>Pharma</strong>: is this patient a candidate for my trial?</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./one-conversation-many-readers.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The triple aim — translated for AI

<div class="text-sm opacity-70 mb-2">
Chai's reframe — the healthcare "<strong>triple aim</strong>" lines up almost exactly with
the three KPIs any AI product team already tracks.
</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Quality of care
The "quality" KPI from any AI product. Right diagnosis, right treatment, right note.

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Latency of care
**Prior auth that takes 45 days across 20 touchpoints** → collapse to in-visit.
Lab value updates → background agent flags the next step.

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Cost of care
The compounding effect of catching things earlier, billing correctly, reducing rework.

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 text-sm">

"Imagine: as soon as a lab value gets updated, you have a background agent that kicks off,
uses all the context, and says — hey, actually the patient should do this next."
<div class="text-xs opacity-60 mt-2 not-italic">— Chai on the next frontier of "reducing latency to care"</div>

</div>

---

# EHRs: table stakes, not the threat

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Why deep EHR integration is non-negotiable
Clinicians live in the EHR. "Anytime we introduce a new product that adds two clicks…
**we're not going to use it.**"

A new product has to <strong>earn the right</strong> by saving more time than it costs.

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Why Abridge isn't an EHR competitor
EHRs own the clinical workflow. Abridge is positioning as a **clinical intelligence
layer** *across* providers, pharma, and payers — connecting things the EHR was never built to.

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

"So much of what allowed us to win in the largest health systems was pretty direct and very
very close partnerships with some of the largest electronic health records — with APIs that
weren't ready out of the box."
<div class="text-xs opacity-60 mt-2 not-italic">— Janie on the unsexy partnership work that won the contracts</div>

</div>

---

# The infrastructure that actually stays

<div class="text-sm opacity-70 mb-4">
What survives when the model frontier moves every six months? Chai's bet: <strong>the boring stuff
humans have always needed.</strong>
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Event-driven backbone
**Kafka, Temporal, sockets.** Real-time in-conversation means everything is event-driven.
This was already battle-tested for humans; agents just scale it 1000×.

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Concurrency primitives
**CRDTs and Google-Docs-style collaboration.** When you have multi-agent systems with
conflicting writes, the patterns we built for humans collaborating already work.

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### Less custom scaffolding
"In the past, models weren't capable enough — we built our own DSLs." As models get more agentic,
**delete the scaffolding** and let them use the same tools humans use.

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

### Context + tools
"I think far more about <strong>what are the right context layers and tools</strong> to give agents."
Less framework engineering, more context engineering.

</div>

</div>

---

# Counter-take: healthcare ships hardest AI first

<div class="text-sm opacity-70 mb-4">
A surprise reversal from someone who used to believe the opposite.
</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### The old assumption
"When I first joined, I was like — oh, this is where we'll be on the **tail end** of where
all the AI innovation will be applied. Heavily regulated. Slow."

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### The flip
"I actually think a lot of the innovation will happen here, just **because we have to** —
or else we can't ship."

Zero-error evals. Multi-step workflows. The cost of being wrong = a person hurt.
**80/20 doesn't work in healthcare.**

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"Where some of the hardest AI problems will get solved first — just because the bar is so high."
<div class="text-xs opacity-60 mt-2 not-italic">— Janie, on why healthcare AI is technically the most interesting</div>

</div>

---

# The hot take: PRDs aren't dead

<div class="text-sm opacity-70 mb-4">
Janie's flip-flop. Started this year aligned with the prevailing AI-PM consensus.
Walked it back hard.
</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### The popular take
**"Prototypes are the end-all be-all. PRDs are dead."**

Move fast, ship the demo, iterate with users.

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Why it breaks at Abridge
The products are <strong>complex and nuanced</strong>. A cool-looking prototype can't capture:

- What this data actually lets you do
- Whether this is the *right* problem
- How it deepens the moat
- Custom implementation cost across the long list of health systems

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

"In a world of so much noise, <strong>crisp written clarity is more important than ever.</strong>
It might now live in a markdown file that more teams and systems can use as context."
<div class="text-xs opacity-60 mt-2 not-italic">— Janie, on the new role of written docs</div>

</div>

---

# The weekend-demo gap

<div class="mt-4 p-4 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"The <strong>weekend demo</strong> versus <strong>it works at the largest health systems</strong>
is a massive, massive gap."
<div class="text-xs opacity-60 mt-1 not-italic">— Janie Lee</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded border-l-4 border-gray-400 bg-gray-50 text-sm">

### What the prototype shows
The happy path. The cool moment. The screenshot worth showing off.

</div>

<div class="p-3 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 text-sm">

### What it doesn't show
Security & compliance edge cases. Multi-system rollout. Change management.
Long-tail evals. Per-specialty quality bars. De-identification pipeline.

</div>

</div>

<div class="mt-4 p-3 italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 text-sm">

"I think this is the fastest I've built in my career, right now. The thoughtfulness actually
allows us to <strong>go fast at the right things</strong>. Go slow to go fast."
<div class="text-xs opacity-60 mt-1 not-italic">— Janie, on the resolution of the paradox</div>

</div>

---

# Glean → Abridge: what carried over

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### What Glean got most right
**Quality is the difference between "useful" and "ignored."**

Glean started with people who'd built search at Google. Enterprise search before Glean
was "not good enough" — and that, not the category, was the killer.

<div class="mt-3 text-xs italic opacity-70">
"When you have quality, things can change the game."
</div>

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### What's different at Abridge
Abridge is "the <strong>healthcare-coded version of Glean</strong>" — but two things change:

- **Downside risk is fatal**, not embarrassing → shapes eval strategy end-to-end
- **Variance is narrower** → easier to go deep per specialty than per persona

</div>

</div>

<div class="mt-4 p-3 italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 text-sm">

The shared thesis: <strong>"context is king."</strong> Great models without context aren't useful.
Both companies are bets on owning the context layer.

</div>

---

# 核心金句 — Core quotes

<div class="text-sm opacity-60 mb-3">Hand-picked lines worth remembering, each verified against the transcript:</div>

<div class="space-y-2.5">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"We want our product to feel like <strong>air conditioning</strong>. It should be in the background just making things better."
<div class="text-xs opacity-60 mt-1 not-italic">— Janie on the design philosophy</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"Going back to this idea that the <strong>conversation is the agent trace.</strong>"
<div class="text-xs opacity-60 mt-1 not-italic">— on why 100M visits is more than transcripts</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"Almost every agent is a coding agent underneath the hood… you can think of the <strong>EHR effectively like a file system</strong>."
<div class="text-xs opacity-60 mt-1 not-italic">— Chai on riding the foundation-model curve</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"<strong>Trust is earned in drops</strong>, earned in buckets."
<div class="text-xs opacity-60 mt-1 not-italic">— Janie on the bar for healthcare rollouts</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"AI writing that doesn't feel like your own — we call that slop. One framing of slop is <strong>AI without context</strong>."
<div class="text-xs opacity-60 mt-1 not-italic">— Chai on personalization-as-quality</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"In a world of so much noise, <strong>crisp written clarity is more important than ever.</strong>"
<div class="text-xs opacity-60 mt-1 not-italic">— Janie's counter to "PRDs are dead"</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-400 rounded italic text-sm">
"The <strong>weekend demo</strong> versus it works at the largest health systems is a massive, massive gap."
<div class="text-xs opacity-60 mt-1 not-italic">— Janie on the production reality</div>
</div>

</div>

---
layout: end
---

# Save time. Save money. Save lives.

<div class="mt-8 text-lg italic opacity-80">
"As we think about save time, save money, save lives — you kind of get to check all of those boxes."
</div>

<div class="mt-4 text-sm opacity-60">— Janie Lee, Abridge</div>

<div class="mt-12 text-xs opacity-50">
Latent Space × Supervised Learning · with Janie Lee & Chai Asawa
</div>
