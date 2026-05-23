---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Building AI Agents That Survive Production'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Building AI Agents That Survive Production

### Haytham Abuelfutuh · CTO, Union AI

<div class="mt-6 text-sm opacity-70">
co-author of the Flyte open-source project
</div>

<div class="mt-10 text-xs opacity-50">
MLOps Community · AI Agents 2026 · Seattle
</div>

---

# Why this talk matters

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### The honest opener
Show of hands at the conference: many built an agent. Almost no hands stayed up for "shipped to production."

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Two layers of failure
Most of your time goes into prompts and tools. Most of your crashes come from infrastructure you ignored.

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Three D's
A first-principles platform spec: <strong>Dynamic</strong>, <strong>Durable</strong>, <strong>Defended</strong>.

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### Failures will happen
The pitch is not "no failures." It is "make recovery from failure cheap."

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### A worked example
Dragonfly: 250,000 products indexed by a four-tier agent fleet, prototype to production in one session.

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### The platform shift
Researchers and ML engineers wanting to own infrastructure, and platform teams learning to let them.

</div>

</div>

---
layout: two-cols
---

# The travel agent, 18 years ago

Haytham opens with a story from his honeymoon planning, "many many many moons ago, about 18 years ago actually."

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"Never once did the agent ask me to, you know, repeat everything I said... we had many email exchanges, phone calls, dropped phone calls."
</div>

<div class="mt-4 text-sm opacity-70">
The human travel agent kept state for weeks. Dropped calls? She called back and continued. No re-prompting. No "context too long."
</div>

<div class="mt-3 text-sm opacity-70">
<strong>That</strong> is the bar Haytham sets for the agents we build today.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="p-6 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
<div class="text-xs opacity-60 uppercase tracking-wide mb-3">the human agent had</div>
<ul class="text-sm space-y-2">
<li>📞 multi-week sessions</li>
<li>🧠 perfect recall</li>
<li>📱 dropped-call recovery</li>
<li>↩️ pick up where you left off</li>
<li>🤝 no "repeat yourself"</li>
</ul>
<div class="text-xs opacity-60 mt-4">I want the same from my AI agent.</div>
</div>
</div>

---

# The room test

<div class="mt-6 text-lg opacity-70 text-center">Haytham asked the room to keep their hands up:</div>

<div class="grid grid-cols-2 gap-6 mt-10">

<div class="p-6 rounded bg-blue-50 border-2 border-blue-300 text-center">

### 🙋 Built an agent
<div class="text-5xl mt-3">🙋🙋🙋🙋🙋</div>
<div class="text-xs opacity-60 mt-3">"many many of you"</div>

</div>

<div class="p-6 rounded bg-red-50 border-2 border-red-300 text-center">

### 🙋 Shipped it to production
<div class="text-5xl mt-3">🙋</div>
<div class="text-xs opacity-60 mt-3">"very very few of you"</div>

</div>

</div>

<div class="mt-8 p-4 bg-gray-50 border-l-4 border-gray-400 italic text-sm">
"That's really the whole point. If you have built one, you know it takes very time-consuming to get... the right context and the right prompts to get LLMs to do what you want, and the guardrails around them, and the API calls, and the tools, this and that."
</div>

---
layout: two-cols
---

# Two layers of failure

You spend almost all your time on the top layer. You crash because of the bottom one.

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>Top — semantic & logical</strong><br/>
<span class="opacity-80">prompts, tools, guardrails — your IP, your innovation. Mostly iterated on a laptop.</span>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 text-sm">
<strong>Bottom — infrastructure</strong><br/>
<span class="opacity-80">"agents crash, you know, you run out of memory, the tools are not scaling... you get API limits and throttling, and just all kinds of production issues."</span>
</div>

</div>

<div class="mt-4 text-xs opacity-60">
And these manifest as "corrupt context. You have to restart sessions" — terrible UX for users.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./failure-layers.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The thesis

<div class="mt-12 p-8 text-2xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"agents do fail and they will fail in production... instead of trying to really prevent that, or like trying to design the perfect agent that will never fail when you put it in production, you should be building agents that <strong>tolerate</strong> that, that know how to react when failure is happening."

</div>

<div class="mt-6 text-sm opacity-70">
The job is not preventing failure. The job is making the agent <em>survive</em> it.
</div>

---
layout: two-cols
---

# Three D's

A first-principles spec for the platform that runs your agents.

<div class="mt-6 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">
<strong>Dynamic</strong> — no DSL. Just write the agent like normal Python: loops, try/except, async.
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">
<strong>Durable</strong> — sessions can run for weeks. When something crashes, recover where you left off without re-asking the user.
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500">
<strong>Defended</strong> — when the agent wants to write and run custom code, sandbox it; when it gives up, hand back to a human.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-ds.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Dynamic · just write Python

<div class="text-sm opacity-70 mb-4">No DSL. No "tell me ahead of time if you're branching or looping."</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500">

### ❌ The constraining way
- Author of an agent has to declare control flow up-front
- "you have to tell me if you're trying two branches or you're trying to do a loop"
- Bad dev experience, no real dynamism

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500">

### ✅ The natural way
- Plain Python: `for`, `if`, `try/except`, `async`
- "you should uh be able to build the agent to interact with the user the way you think it should interact"
- The platform conforms to your code, not the other way around

</div>

</div>

<div class="mt-6 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"There is no DSL required. You're just running your code on that infrastructure."
</div>

---

# Declare infrastructure inside the code

<div class="text-sm opacity-70 mb-4">A function that doesn't know how much RAM it has can't recover from running out.</div>

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500">

### The problem
"if it doesn't know that, oh, I allocated a 32 GB RAM for this task... when you get an out of memory error, it will have no idea what to do with it because it didn't even know that it was running on a 32 GB machine in the first place."

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500">

### The fix
Declare the environment <strong>in</strong> the code. Memory, CPUs, GPU type — all sit next to the function that needs them.

If it fails, you can:
- retry on the same hardware
- bump memory and retry
- hand off to a different machine

</div>

</div>

<div class="mt-6 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>作者概括</strong>: your code controls both the infrastructure <em>and</em> the logic running on it — that's the only way the recovery loop can be smart.
</div>

---

# Spot machines, OOM, and the things `try/except` can't catch

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500">

### What `try/except` catches
- API call returned an error
- Tool returned bad JSON
- Logic errors inside your function

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500">

### What it can't catch
- "if the spot machine is taken away from you, it's not a thing you can handle in your function... because the entire process will just go."
- "if you run out of memory, it's not a thing you can handle."

</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 text-sm">
<strong>The escape</strong>: tell the platform "I want this job retried" or "rerun on a different piece of hardware." External, declarative retries — not user code.
</div>

<div class="mt-3 text-xs opacity-60">
Why spot? "they're cheaper, you get a cheaper GPU, or you're running on a new cloud, so you can get actual GPUs because you can't find them otherwise."
</div>

---

# Durable · sessions live for weeks

<div class="mt-6 p-5 text-xl italic border-l-4 border-green-500 bg-green-50 bg-opacity-40">

"the problem with agents is they're long-running, right? You can have a session open with a user for weeks at end. So, something bad is going to happen while this session is going."

</div>

<div class="mt-8 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded border border-gray-200">

### Normal services
crash and restart. People even deploy "chaos monkeys" to kill services on purpose.

</div>

<div class="p-3 rounded border border-gray-200">

### Agents
a 2-hour user session that dies halfway through cannot just <em>start over</em>.

</div>

<div class="p-3 rounded border border-gray-200">

### So
the platform has to <strong>record every action the agent took</strong> and replay through them on recovery.

</div>

</div>

---
layout: two-cols
---

# What "recover from a crash" actually means

The platform records every external action. On recovery, you don't re-do them — you replay the recorded outcomes.

Two things you especially don't want to repeat:

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500">
<strong>LLM calls.</strong> "if you're calling an LLM, you know, 2 days ago, if I call it again today with the same prompt, it's probably not going to give you the same response."
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">
<strong>User prompts.</strong> "if I ask a user for something in the beginning of the session... and the session crashes and recovers, you don't want to ask the user the same question again, right?"
</div>

</div>

<div class="mt-4 text-xs opacity-60">
Imagine the travel agent forgetting and asking your budget again two weeks later. <em>Annoying.</em>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./session-recovery.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Caching across sessions

<div class="text-sm opacity-70 mb-4">Zoom out from one user. You have many users doing similar things in parallel.</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-green-50 border-l-4 border-green-500">

### ✅ Cache this
- web searches on the same term, same day
- deterministic tool calls
- "shared cache across different agent runs"

<div class="text-xs opacity-60 mt-2">Saves tokens. Saves latency.</div>

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500">

### ❌ Don't cache this
- LLM call to generate a unique report
- per-user personalized outputs
- anything where the user expects freshness

</div>

</div>

<div class="mt-6 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"having the ability and the power from the platform to decide that for certain things I'm okay caching... is very powerful."
</div>

---

# Make failures cheap

<div class="mt-10 p-8 text-2xl italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

"if there's one thing I would love everyone to agree with is that failures will happen and it's not about... preventing failures. It's about how we deal with these failures when they do happen — and you want them to be cheap."

</div>

<div class="mt-8 grid grid-cols-3 gap-3 text-sm text-center">

<div class="p-3 bg-blue-50 rounded">
<strong>Cheap recovery</strong><br/>
<span class="text-xs opacity-70">no full restart</span>
</div>

<div class="p-3 bg-green-50 rounded">
<strong>Recorded actions</strong><br/>
<span class="text-xs opacity-70">replay, don't redo</span>
</div>

<div class="p-3 bg-orange-50 rounded">
<strong>Tolerable failures</strong><br/>
<span class="text-xs opacity-70">declare what to retry</span>
</div>

</div>

<div class="mt-6 text-xs opacity-60 text-center italic">
"It's like metadata about metadata really."
</div>

---

# Defended · the escape hatch

<div class="text-sm opacity-70 mb-4">Sometimes the agent looks at all the tools you gave it and decides none of them fit.</div>

<div class="mt-4 p-5 bg-orange-50 border-l-4 border-orange-500 italic">
"you will get to a point where the agent will look at 100 tool you gave it and says none of these really do the job. I want to run this custom, you know, travel flight lookup... I want to write code and you want that. You want this sort of escape hatch in a lot of cases."
</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 bg-blue-50 rounded text-center">
<strong>1. Sandbox it</strong><br/>
<span class="text-xs opacity-70">network-isolated, host-isolated</span>
</div>

<div class="p-3 bg-green-50 rounded text-center">
<strong>2. Run it</strong><br/>
<span class="text-xs opacity-70">collect output and errors</span>
</div>

<div class="p-3 bg-orange-50 rounded text-center">
<strong>3. React</strong><br/>
<span class="text-xs opacity-70">iterate, retry, or bail</span>
</div>

</div>

<div class="mt-4 text-xs opacity-60">
Shout-out: Pydantic's <strong>Monty</strong> project — "low-level Python environment that is sandboxed."
</div>

---
layout: two-cols
---

# The sandbox loop

A "naive" but effective recipe:

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">
<strong>1.</strong> agent writes code → run in sandbox
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500">
<strong>2.</strong> error? feed it back: "I tried to run this, I got this error, iterate."
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">
<strong>3.</strong> "Usually the LLMs got a lot better at building code that runs, and compiling it beforehand... eventually, you will get code that does the thing you want it to do."
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500">
<strong>4.</strong> if not — "give it your best shot, try five times" — then bail to the human.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sandbox-loop.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Human in the loop is a feature, not a fallback

<div class="mt-8 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

"you want a human in the loop capability. You want to be able to say, 'Hey, I tried to build this tool or tried to do this thing and I can't. Tell me what to do next.' Or maybe it gives you a few options, and you want to ask the user, 'Which one would you prefer?'"

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500">
<strong>When?</strong> After bounded retries fail. Or when the agent has multiple defensible options and no preference.
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">
<strong>What it buys you</strong>: clean handoff back to a person, then the agent picks up the answer and continues — no restart, no lost context.
</div>

</div>

---

# A real example · Dragonfly

<div class="text-sm opacity-70 mb-4">A "case study we recently published" — built by Haytham's colleague <strong>Niels</strong> with the Dragonfly team.</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500">

### The problem of choice
You want to add an HR tool, or an issue tracker. There are thousands. Which one fits <em>your</em> stack?

<div class="text-xs opacity-60 mt-2">"How do I pick the issue tracker?"</div>

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500">

### The catalog
<div class="text-4xl font-bold text-green-700 my-2">250,000+</div>
<div class="text-xs opacity-70">software products, constantly crawled, indexed, and compared on demand.</div>

</div>

</div>

<div class="mt-6 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm">
The hard part wasn't "can an agent give a recommendation." It was: <em>can a fleet of agents keep a catalog of a quarter-million products fresh, queryable, and reliable in production?</em>
</div>

---
layout: two-cols
---

# Dragonfly · the architecture

A four-tier system, all coordinated, all traced, all auditable.

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500">
<strong>Tier 1 — Calling agents.</strong> Always running. Decide what to research next.
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500">
<strong>Tier 2 — Coordinators.</strong> Smart enough to notice "you look like you're doing the same things — let me stop one of you."
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500">
<strong>Tier 3 — Researchers.</strong> One job: research a specific product end-to-end.
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500">
<strong>Tier 4 — Tools.</strong> Web search, doc indexing, whatever a researcher needs.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dragonfly-arch.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Prototype to production in one session

<div class="mt-10 p-8 text-2xl italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 rounded">

"they took this from a sort of a prototype they were building on their laptop to do the thing they're trying to do to a running thing in production in one session sitting with him. It's like a couple of hours — and it was running already on the system that can scale."

</div>

<div class="mt-8 grid grid-cols-3 gap-3 text-sm text-center">

<div class="p-4 bg-blue-50 rounded">
<div class="text-2xl font-bold">Laptop prototype</div>
<div class="text-xs opacity-70 mt-1">the typical starting point</div>
</div>

<div class="p-4 bg-yellow-50 rounded">
<div class="text-2xl font-bold">~ 2 hours</div>
<div class="text-xs opacity-70 mt-1">of pair-debugging</div>
</div>

<div class="p-4 bg-green-50 rounded">
<div class="text-2xl font-bold">Production fleet</div>
<div class="text-xs opacity-70 mt-1">scaling on the platform</div>
</div>

</div>

---

# Q&A · "Are you guys using any Erlang under the hood?"

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500">

### The user-facing layer
"we use Python for the our SDK. This is the user-facing how you develop the agents."

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500">

### The system underneath
"the system in the back is all built on <strong>Go and Rust</strong> services. So, even the Python SDK has a <strong>Rust component</strong> that is running the coordination is super fast."

</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">
"But, we're not using Erlang, no."
</div>

<div class="mt-4 text-xs opacity-60">
The split is deliberate: ergonomic surface for the agent author, hard-engineered coordination layer underneath.
</div>

---

# Q&A · "shifting left" infrastructure to developers

<div class="text-sm opacity-70 mb-4">An audience question from someone on a traditional platform team:</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 italic text-sm mt-2">
"How do you deal with companies that are a little bit more on the side of not wanting to change that and get the developers wanting to start thinking about those things? Essentially shifting left that piece of component there."
</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500">

### The friction
Platform team was historically the sole owner of anything that runs in the cloud. Researchers had to package, Helm-chart, deploy through them.

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500">

### The sell
"if you want to sell that promise... I would really show them how fast it is for them to iterate. They cannot get the same speed if there is another hop."

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm italic">
"I could see it in people's eyes once they experiment with the platform."
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这场 30 分钟 talk 里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">
"agents do fail and they will fail in production... you should be building agents that <strong>tolerate</strong> that, that know how to react when failure is happening."
<div class="text-xs opacity-60 mt-1 not-italic">— the thesis of the whole talk</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Never once did the agent ask me to, you know, repeat everything I said... we had many email exchanges, phone calls, dropped phone calls."
<div class="text-xs opacity-60 mt-1 not-italic">— on the human travel agent he booked his honeymoon with 18 years ago</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"the problem with agents is they're long-running. You can have a session open with a user for weeks at end."
<div class="text-xs opacity-60 mt-1 not-italic">— why crash recovery is different from normal services</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"It's not about... preventing failures. It's about how we deal with these failures when they do happen — and you want them to be cheap."
<div class="text-xs opacity-60 mt-1 not-italic">— the operational mantra</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"the agent will look at 100 tool you gave it and says none of these really do the job... you want this sort of escape hatch."
<div class="text-xs opacity-60 mt-1 not-italic">— why agents need to write and run their own code, in a sandbox</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"I could see it in people's eyes once they experiment with the platform."
<div class="text-xs opacity-60 mt-1 not-italic">— on developers discovering they can ship their own infra</div>
</div>

</div>

---
layout: end
---

# Failures will happen.
# Make recovery cheap.

<div class="mt-10 text-sm opacity-60">
Haytham Abuelfutuh · Union AI / Flyte<br/>
MLOps Community · AI Agents 2026 · Seattle
</div>
