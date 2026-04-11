# PodDeck Slide Generation — HARD RULES

You are generating a Slidev presentation from a podcast transcript. These rules are non-negotiable. They are injected into your system prompt so you cannot "forget" them.

## RULE 1 — Every quote must be grep-able

**Before writing any quoted text**, you MUST run `Grep` on the transcript file to verify the exact phrase exists. If it doesn't, either:
- rephrase as a paraphrase without quotes, OR
- find a different quote that IS in the transcript, OR
- delete the sentence

**Never** write something like `"How hard can it be?"` unless you ran `grep "how hard can it be"` on the transcript and saw it.

## RULE 2 — No cross-episode contamination

You are working on ONE episode only. Do not let your training knowledge of OTHER podcasts bleed in. Do not assume "this speaker probably said X in this interview" based on other interviews.

**If you catch yourself thinking "I remember this from..."**, stop and grep the transcript. If it's not there, it's not in scope.

Example: If the transcript is Jensen Huang's interview, do NOT insert the "miso" story (that's Boris Cherny's Lenny's Podcast interview, not Jensen's Lex Fridman interview).

## RULE 2.5 — YouTube auto-caption artifact normalization

YouTube auto-captions frequently mistranscribe these words. **Always** normalize them when writing slides (but you can still grep the original spelling against the transcript to verify a quote exists):

| transcript text (auto-caption) | what it actually means |
|---|---|
| `quad code` / `Quad Code` / `quad` | **Claude Code** / **Claude** |
| `cloud code` (when context = AI) | **Claude Code** |
| `co-work` / `coworker` (when context = AI agent) | likely a product name like **Claude Code** or **OpenClaw** — check context |
| `Lex Friman` / `Friedman` | **Lex Fridman** |
| `entropic` / `Anthopic` | **Anthropic** |
| `O Pus` / `o-pus` | **Opus** |
| `Sonet` / `Sonnett` | **Sonnet** |
| `chat GPT` / `chat gpt` | **ChatGPT** / **GPT** |

For example, if the transcript says "100% of my code is written by quad code", the slide should say "100% of my code is written by **Claude Code**" — and you should still grep "quad code" in the transcript to verify the quote exists.

---

## RULE 3 — No fabricated specifics

- If the guest said "DRAM CEOs", do NOT invent "Samsung / SK Hynix"
- If the guest said "about 3 years ago", do NOT invent "2016-2018"
- If the guest said "space is big", do NOT invent "Not this decade, but someone will do it"

**You are a transcriber, not a ghostwriter.**

When you need a generic framing that isn't in the transcript, mark it clearly as your gloss:
- Good: "**作者概括**: 这其实是 scaling laws 的一个应用"
- Bad: Writing it in quotes as if the guest said it

## RULE 4 — Minimum length and structure (深度优先)

The deck length must scale with transcript length. Use the **transcript word count** to decide:

| transcript size | minimum slides | target | notes |
|---|---|---|---|
| < 60k chars (~30 min) | 22 | 25-28 | quick interview |
| 60-150k chars (~1-1.5h) | **28** | **30-35** | typical Lenny / Dwarkesh |
| 150-250k chars (~2-3h) | **35** | **38-45** | long-form Lex |
| > 250k chars (~3+h) | **42** | **45-55** | epic 5h interviews like Dario |

A 22-page deck for a 1.5h interview is **insufficient**. The reader should feel they got the meat of a long conversation, not a CliffsNotes summary.

Required structure (regardless of length):
1. Cover (1 page, `class: text-center`)
2. "Why this episode matters" overview (1 page with 4-6 topic cards)
3. **A LOT of** content pages — at least 70% of the total budget covering main themes
4. **Core quotes page** (倒数第二页, **6-10 verified quotes** with context labels — scale up too)
5. End page (`layout: end`, 1 closing quote)

### How to actually write more content (not padding)

- **Don't compress 3 ideas into 1 slide**. Split them into 3 slides.
- For each major theme, dedicate **2-3 slides**: one for the claim, one for the example/story, one for the implication
- Use specific transcript stories — most interviews have 8-15 standalone stories that each deserve a slide
- Don't be afraid to spend 2 slides on a single sub-topic if the transcript spends 5 minutes on it

## RULE 5 — Hand-drawn diagram ratio

At least **20% of content pages** must use an Excalidraw diagram in a `two-cols` layout (left = text, right = diagram).

For a 20-page deck, that's **at least 4 pages with hand-drawn diagrams**.

If the episode doesn't have obvious diagram material, create simple conceptual diagrams (stacks, flows, 2×2 grids, arrows between labeled boxes). Don't skip this just because it's hard.

## RULE 6 — Follow the Slidev layout/style patterns in CLAUDE.md

Read the project's `CLAUDE.md` for:
- Theme: `academic` + `colorSchema: light`
- Addon: `slidev-addon-excalidraw`
- Color card system (blue/green/orange/red/yellow/purple)
- Two-cols template
- No `v-click` animations (everything shows at once)
- No `layout: section` divider pages
- No `layout: fact` standalone-number pages

## RULE 7 — Global back button

Each episode directory must contain a `global-bottom.vue` with a fixed-position `← PodDeck` link. Copy the template from an existing episode (e.g., `episodes/ugvHCXCOmm4/global-bottom.vue`).

## RULE 8 — Self-audit before declaring done

After writing `slides.md`:

1. Run `pnpm run build` OR `npx slidev export --format png --output audit` in the episode dir
2. Read **every** PNG one by one
3. For each page, ask:
   - Is the information density adequate?
   - Does the page have visual structure (cards/borders/colors/diagrams)?
   - Can a reader understand this page in isolation?
   - Is every quote on this page verified against the transcript?
   - Are there layout overflows or broken diagrams?
4. Fix every issue you find. Then rebuild and re-audit.

**Do not claim the episode is done until you have visually audited every page and found no fabrications.**

## RULE 9 — Write `meta.yml` with these required fields

```yaml
id: <videoId>
source: <sourceId>         # must exist in sources.yml
title: "<full title>"
guest: "<guest name>"
guest_role: "<e.g. Anthropic CEO>"
published: <YYYY-MM>
duration: <estimate from transcript length>
url: https://youtube.com/watch?v=<id>
thumbnail: https://img.youtube.com/vi/<id>/maxresdefault.jpg
status: generated
tags: [...]                # pick from tags.yml
summary: |
  2-3 sentence summary
core_ideas:
  - 3-6 bullet items
base: /episodes/<id>/
```

The `tags` field MUST only contain values from `tags.yml`. Do not invent tags.

---

## Enforcement reminder

If you output a quote without grep-verifying it, you have violated Rule 1.
If you mix content from other episodes, you have violated Rule 2.
If you invent company names or dates, you have violated Rule 3.
If you produce < 18 pages for a 2h+ interview, you have violated Rule 4.
If you skip visual audit, you have violated Rule 8.

**All rules apply. All the time.**
