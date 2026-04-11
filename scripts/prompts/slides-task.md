You are generating a Slidev presentation deck for ONE podcast episode.

## Input

- **Episode ID**: `{{ID}}`
- **Source**: `{{SOURCE}}`
- **Title**: `{{TITLE}}`
- **Transcript file**: `data/transcripts/{{ID}}.txt`
- **Episode directory** (already scaffolded with package.json, global-bottom.vue, public/ templates): `episodes/{{ID}}/`

## What to produce

1. `episodes/{{ID}}/slides.md` — the Slidev markdown
2. `episodes/{{ID}}/meta.yml` — episode metadata for the landing page

## Workflow (follow in order)

### Phase 1 — Ground yourself in the transcript

1. `Read` the full transcript `data/transcripts/{{ID}}.txt` (use `limit` if large, read multiple chunks)
2. Identify the 6-10 most interesting themes / arguments / stories the guest discussed
3. For each theme, find the best 1-2 verbatim quotes (run `Grep` on the transcript first to confirm the exact phrase)
4. Note specific numbers, names, years — and find their exact wording in the transcript
5. Do NOT proceed to Phase 2 until you have a list of themes with grep-verified quotes

### Phase 2 — Draft `slides.md`

Follow the structure in the system prompt (RULE 4):
- Cover page (academic theme, text-center)
- "Why this episode matters" overview page (4-6 topic cards)
- 12-16 content pages covering the themes
- At least **4 pages with Excalidraw diagrams** (two-cols layout)
- Core quotes page (`核心金句`) — 4-6 verified quotes with labels
- End page (`layout: end`) with one closing quote

Excalidraw diagrams: first check `episodes/{{ID}}/public/` for reusable templates that fit your themes. If you need a new diagram, write minimal JSON following the pattern in the existing templates.

Frontmatter:
```yaml
---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '{{TITLE}}'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---
```

### Phase 3 — Write `meta.yml`

Use the exact schema from RULE 9 in the system prompt. Only use tags that exist in the root `tags.yml`.

### Phase 4 — Build and self-audit

1. `cd episodes/{{ID}}` then `Bash: npx slidev export --format png --output audit` to render every slide to PNG
2. For EACH slide PNG in `audit/`, `Read` the image and check:
   - Text overflow / layout breaks
   - Empty or nearly-empty slides (density too low)
   - Diagrams rendering correctly
   - Chinese characters display OK
   - Back button doesn't overlap content
3. For EACH quote you wrote, `Grep` the transcript to confirm the exact phrase exists
4. Fix every issue, then rebuild and re-audit
5. When clean, delete `audit/` directory

### Phase 5 — Report back

Output a JSON summary on stdout:

```json
{
  "id": "{{ID}}",
  "slides_count": <number>,
  "diagrams_count": <number>,
  "quotes_verified": <number>,
  "audit_passes": <number>,
  "notes": "anything notable"
}
```

## Things you MUST NOT do

- Write any quote without grep-verifying it against the transcript
- Reference content from other podcast episodes (even if the speaker also appeared elsewhere)
- Invent specific company names, dates, or numbers
- Produce fewer than 18 slides for a 1+ hour interview
- Skip the self-audit phase
- Write commentary in Chinese that sounds like an English quote translation (if you're paraphrasing, mark it as paraphrase, not as a quote)

Begin Phase 1 now.
