# ARIA Rebuild — POC Clickthrough

Interactive click-through prototype for Transition Music Corporation's ARIA rights/royalty management system rebuild.

## Quick Start

```bash
cd clickthrough
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and click **Log In** to begin the walkthrough.

## Walkthrough Path

1. **Login** → Dashboard
2. **Catalog** → find SUPREME GUIDANCE → Title Detail (before)
3. **Retitle wizard** (3 steps) — Rules Engine Preview is the headline screen
4. **Title Detail** (after retitle) → Cue Sheets
5. **Upload & parse** cue sheet → Review & consolidate
6. **Activity** → select ESTV DUNK → Calculate Royalty
7. **Income entry** → Calculation Breakdown (headline screen) → Generated Statement
8. **Wrap-up** summary

## Navigation

- Sidebar lets you jump between Dashboard, Catalog, Cue Sheets, Activity, and Royalty Statements at any time.
- Shortcut loops: Title Detail (after) → Cue Sheets; Activity → Royalty.

## Build

```bash
npm run build
npm run preview
```

No backend — all data is static and seeded from the POC spec.
