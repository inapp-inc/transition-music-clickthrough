# Cursor Agent Prompt: Redesign the ARIA Clickthrough UI with `ui-ux-pro-max`

Copy everything below the line into Cursor as a single prompt, in the `clickthrough` project (where `.cursor/skills/ui-ux-pro-max/` now lives). This is a **visual redesign pass only** — no new screens, no new routes, no changed business logic or sample data values. The goal is to take the existing, functionally-complete ARIA clickthrough and make it look like a polished, professional, real B2B SaaS product instead of a rough prototype.

---

## Context

You're working in `aria-clickthrough` — a React 19 + TypeScript + Vite 7 + Tailwind v4 (`@theme` tokens, not a `tailwind.config.js`) + `react-router-dom` v7 single-page app. It's a click-through sales demo of "ARIA," a rights & royalty management back-office tool, built for a prospect. It currently works end-to-end but the UI is visually flat and generic — this pass is specifically about elevating the visual design: color, type, spacing, elevation, motion, and polish. Don't change routes, component names, data values in `src/data/sampleData.ts`, or any click-through logic while doing this — if a redesign genuinely requires restructuring a component's markup, that's fine, but the app's behavior and content must stay identical.

You have the **`ui-ux-pro-max`** skill available at `.cursor/skills/ui-ux-pro-max/SKILL.md`. **Read that file in full first** and follow its documented workflow exactly — it's a local, offline, data-driven design-intelligence tool (a Python CLI over curated CSV datasets of styles, color palettes, typography pairings, UX guidelines, icons, and stack-specific best practices), not a generic instruction to "make it pretty." Use it as specified below rather than freelancing colors/fonts from memory.

---

## 1. Check prerequisites

The skill's scripts need Python 3, standard library only, no network calls. Check first:

```bash
python --version
```

(Windows — use `python`, not `python3`, per the skill's own note.) If Python isn't available, stop and tell the user rather than trying to install it yourself.

## 2. Generate the design system (Step 1 + 2 of the skill's workflow)

This app's product type is an **internal B2B SaaS back-office tool** — specifically rights/royalty accounting for a music licensing company. Audience is internal staff (catalog managers, royalty managers, a company owner), not consumers. Tone should be: professional, calm, trustworthy, data-dense but not cluttered, restrained — closer to a fintech-accounting or ops-dashboard aesthetic than a marketing site. It is desktop web only (not a mobile app), so ignore any mobile/native-specific guidance the skill surfaces (safe areas, haptics, bottom nav, Dynamic Type, touch-target minimums) — focus on the desktop/web-applicable rules.

Run the design-system generator and persist it so it's available as a durable source of truth across this whole redesign (and future work in this repo):

```bash
python .cursor/skills/ui-ux-pro-max/scripts/search.py "internal B2B SaaS royalty accounting rights management back-office dashboard" --design-system --persist -p "ARIA" --output-dir "." --density 8 --motion 3 --variance 3 -f markdown
```

Tuning rationale (adjust if the generated output doesn't feel right, but start here):
- `--density 8` — this app is table-heavy and data-dense (catalog tables, cue-sheet review tables, activity tables, a calculation ledger), closer to a dashboard than a marketing page.
- `--motion 3` — subtle micro-interactions only (hover states, gentle transitions). This is a professional accounting tool; avoid anything that reads as flashy or playful.
- `--variance 3` — centered/minimal, not bold or asymmetric. This should feel calm and restrained, not brutalist or experimental.

This creates `design-system/aria/MASTER.md`. **Read it in full before changing any code.** It's the single source of truth for color tokens, typography, spacing scale, and effects for the rest of this task — don't invent colors or fonts outside of what it specifies.

### Page-specific overrides for the two headline screens

Two screens carry the entire sales pitch and deserve extra polish beyond the base system: the **Retitle Wizard Step 2 (Rules Engine Preview)** — the before/after transformation screen — and the **Royalty Calculation Breakdown** — the nested co-publisher split ledger. Generate page-level overrides for these so they can lean slightly more "the system just did something smart" (a bit more visual emphasis/glow/hierarchy) without breaking consistency with the rest of the app:

```bash
python .cursor/skills/ui-ux-pro-max/scripts/search.py "before after comparison transformation reveal, data highlight" --design-system --persist -p "ARIA" --page "retitle-rules-preview" --output-dir "." --motion 5

python .cursor/skills/ui-ux-pro-max/scripts/search.py "financial calculation ledger receipt nested breakdown" --design-system --persist -p "ARIA" --page "royalty-breakdown" --output-dir "." --motion 4
```

Read both resulting page files under `design-system/aria/pages/` before using them — they override Master only for these two screens; everything else follows Master exclusively.

## 3. Supplement with focused domain searches (Step 3)

Once you're implementing, run targeted searches for anything Master doesn't fully cover. Don't run all of these blindly — only pull what a given component actually needs, one dominant concern per query:

```bash
# Status pills / badges (Registered, Pending, Matched, Needs Review, Income Received)
python .cursor/skills/ui-ux-pro-max/scripts/search.py "status badge pill semantic color" --domain ux

# Data tables (Catalog, Cue Sheets review, Activity)
python .cursor/skills/ui-ux-pro-max/scripts/search.py "data table row hover sortable header" --domain ux

# Forms (Retitle Step 1 dropdown, Royalty income entry form)
python .cursor/skills/ui-ux-pro-max/scripts/search.py "form field focus inline validation" --domain ux

# Empty/loading states (Cue Sheets Parsing transient screen)
python .cursor/skills/ui-ux-pro-max/scripts/search.py "loading progress state clarity" --domain ux

# Stepper / wizard progress (Retitle wizard, demo-narrative rail if built)
python .cursor/skills/ui-ux-pro-max/scripts/search.py "stepper wizard progress indicator" --domain ux

# Typography pairing, if Master's suggestion needs a second look
python .cursor/skills/ui-ux-pro-max/scripts/search.py "professional data-dense sans serif" --domain typography

# Icons — see the icon-library note below before running this
python .cursor/skills/ui-ux-pro-max/scripts/search.py "financial dashboard navigation icons" --domain icons
```

**Icon-library note:** the skill defaults to recommending Phosphor icons. This codebase already depends on `lucide-react` (see `package.json`) and uses it throughout (`TopBar.tsx`, etc.). Don't add a second icon library just to match the skill's default — keep `lucide-react` for consistency, and apply the skill's *icon usage rules* (vector-only, no emoji-as-icons, consistent sizing via a small set of token sizes, consistent stroke width, aligned to text baseline, sufficient contrast, decorative icons hidden from the accessibility tree) using Lucide's equivalent icons instead of switching libraries.

## 4. Stack-specific implementation guidance (Step 4)

```bash
python .cursor/skills/ui-ux-pro-max/scripts/search.py "component structure token usage" --stack react

python .cursor/skills/ui-ux-pro-max/scripts/search.py "utility class organization design tokens" --stack html-tailwind
```

Apply these for implementation conventions (how to structure the token layer, how to keep Tailwind usage consistent) — not for content/copy decisions, which don't change.

---

## 5. Apply the design system across the app

Once Master (and the two page overrides) are read and understood, apply them systematically rather than screen-by-screen ad hoc:

1. **Centralize tokens first.** Find wherever Tailwind v4 theme tokens currently live (almost certainly a `@theme` block in `src/index.css` or similar). Replace/extend it with Master's color scale, typography, spacing scale, radius, and shadow/elevation tokens, so every component pulls from one place. Don't hardcode hex values or arbitrary spacing in individual components going forward.
2. **Typography.** Apply Master's font pairing (likely a Google Fonts import) consistently — headings, body, and any monospace/tabular-numeral treatment for the royalty calculation ledger's dollar figures (tabular numbers matter a lot for a "receipt-style" ledger to look trustworthy and aligned).
3. **Status pill component.** There's already a green/amber semantic convention (success/matched/registered vs. pending/needs-attention). Refine it into one consistent, reusable component using Master's palette and the UX guidance on badges/pills from §3 — used identically across the Catalog table, Cue Sheets review table, and Activity table.
4. **Tables.** Apply consistent row height, header treatment, hover state, and border/divider styling from Master + the data-table UX guidance, across the Catalog list, Cue Sheets parsed-review table, and Activity table.
5. **Cards & elevation.** Establish a consistent elevation system (border + shadow tokens from Master) for summary cards, detail-page cards (Writers/Publishers), and the dashboard's summary cards — right now these likely look flat; give them a clear but restrained hierarchy.
6. **The two headline screens.** Apply the page-specific overrides from §2 here with extra care:
   - **Retitle Rules Engine Preview** — make the Before → After transformation genuinely feel like something happened: a clear visual distinction between the two panels, the "After" panel's auto-generated treatment (subtle highlight/glow per the override), and the rule-explanation badges reading as confident, not like tooltip clutter.
   - **Royalty Calculation Breakdown** — this is a ledger; lean into that metaphor typographically (tabular numbers, clear line-item rhythm, a visually distinct nested indent + connector line for the two co-publisher rows under the pool-share line — this nested visual relationship is the single most important detail on this screen).
7. **Forms & inputs.** Apply consistent input, dropdown, and button styling (primary/secondary/decorative-disabled treatment) from Master across the Retitle wizard's reason dropdown, the Royalty income-entry form, and any buttons throughout.
8. **Motion.** Keep it subtle per the `--motion 3` tuning — hover transitions, a gentle appear/highlight on the "After" panel and on newly-calculated ledger rows, nothing that reads as flashy. Prefer Tailwind's built-in transition utilities / plain CSS transitions over adding a new animation dependency; only pull a GSAP snippet from the skill's `gsap` domain if you judge a specific "wow" moment genuinely needs it, and call that out explicitly if you do (it would be a new dependency).
9. **If the multi-persona demo shell (`PrototypeControls` left rail, browser-window chrome, persona switcher) has already been built in this repo, restyle it too** — it should read as a "control panel" distinctly separate from the app content next to it (Master's darker/inverse treatment, if it has one, is a natural fit here), while the app content inside the browser-chrome window follows Master's primary (light) treatment. If that shell hasn't been built yet, skip this — it's out of scope for this pass.

---

## 6. Guardrails

- Don't change any route paths, component prop signatures used elsewhere, or values in `src/data/sampleData.ts`.
- Don't remove or rename existing components without a real structural reason; prefer restyling in place.
- Don't introduce a second icon library, a heavy animation library, or any new UI component library (no shadcn/MUI/etc. wholesale swap) — this is a visual-token and styling pass on the existing hand-built components, not a rebuild.
- Don't touch anything unrelated to visuals: no logic changes, no new pages, no changed navigation structure.
- If Master's recommendations genuinely conflict with something load-bearing in the existing app (e.g., a font that doesn't support a character the app uses, or a color that breaks a status pill's semantic meaning), deviate deliberately and say so — don't silently ignore Master, and don't force a bad fit either.

## 7. Pre-delivery checklist

Most of the skill's own Pre-Delivery Checklist is scoped to native/mobile app UI (safe areas, haptics, touch-target minimums, bottom nav, Dynamic Type) — skip those. Apply the parts that do apply to this desktop web app:

- [ ] No emojis used as icons anywhere; all icons come from `lucide-react`, sized and stroked consistently.
- [ ] Colors and typography come from the persisted `design-system/aria/MASTER.md` tokens — no leftover ad hoc hex values or arbitrary font sizes scattered in components.
- [ ] Status pills (Registered/Matched/success vs. Pending/Needs Review/attention) are visually consistent across all three tables that use them.
- [ ] Text contrast is at least 4.5:1 for body text against its surface.
- [ ] Interactive elements (buttons, table rows, nav items, dropdown) have clear, consistent hover and focus states — keyboard focus should be visibly distinguishable, not just mouse hover.
- [ ] The two headline screens (Retitle Rules Engine Preview, Royalty Calculation Breakdown) read as visually distinct "wow moments" relative to the rest of the app, without breaking overall consistency.
- [ ] Forms have clear labels and states (default/focus/disabled); the decorative "+ Add another income line" and similar non-functional affordances still look intentional, not broken.
- [ ] `npm run build` completes with no TypeScript errors and no new console warnings.
- [ ] Visually spot-check at a typical demo resolution (1440×900 and 1920×1080) — no overflow, no misaligned table columns, no broken card layouts.
