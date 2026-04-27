# Roadmap Filter Mode — Design Spec

**Date:** 2026-04-27  
**Status:** Approved

## Problem

Users navigating a topic (e.g., Array) see all exercises in difficulty-sorted order, but there is no curated "start here" path. A beginner landing on Array faces 226 exercises with no guidance on which ones matter most.

## Solution

Add a **Roadmap** filter mode to `ExerciseSidebar` that shows the top N most important exercises per difficulty level, grouped with section headers. The mode persists in the URL so it survives exercise navigation.

---

## URL State

Two query params control the sidebar state:

| Param | Values | Meaning |
|---|---|---|
| `mode` | `roadmap` | Roadmap filter is active |
| `difficulty` | `beginner` \| `intermediate` \| `advanced` | Sub-filter within roadmap or standalone filter |

Example URLs:
- `?mode=roadmap` — roadmap, all levels shown
- `?mode=roadmap&difficulty=beginner` — roadmap, beginner only
- `?difficulty=intermediate` — standard difficulty filter (no roadmap)

All exercise `<Link>` hrefs preserve both `mode` and `difficulty` params when active, preventing state loss on navigation.

---

## Data Layer

New function `getRoadmapExercises(objectName, maxPerLevel = 15)` in `exerciseRepository.ts`:

- Takes the first `min(count, maxPerLevel)` exercises per difficulty from `getAllExercisesByObject(objectName)`
- Returns exercises grouped by difficulty: `{ beginner: Exercise[], intermediate: Exercise[], advanced: Exercise[] }`
- No changes to existing exercise data files — purely a repository-layer concern
- Cap of 15 per level: topics with fewer exercises (e.g., `crypto` with 4 advanced) show all of them

---

## UI — ExerciseSidebar

### Filter buttons row

A new **Roadmap** button is added before "All":

```
[🗺 Roadmap]  [All]  [Beginner (N)]  [Intermediate (N)]  [Advanced (N)]
```

- **Active state**: same emerald highlight as existing filter buttons
- **Roadmap + Difficulty**: both can be active simultaneously — roadmap is the superset, difficulty further filters within it
- Clicking "Roadmap" while a difficulty filter is active: roadmap activates, difficulty stays
- Clicking "Roadmap" again while already active: roadmap deactivates (toggles off), returns to standard view

### Exercise list in Roadmap mode

When `mode=roadmap` is active, exercises are grouped into three sections with dividers:

```
── Beginner (15) ──────────────────
○ Array.from() basics
✓ Array.isArray()
...
── Intermediate (15) ──────────────
○ Array.reduce() accumulator
...
── Advanced (15) ────────────────── 
○ Flatten nested arrays
...
```

- Section headers show level name + count
- Color-coded: Beginner=emerald, Intermediate=yellow, Advanced=red (matching existing `DIFF_COLORS`)
- If `difficulty` sub-filter is active, only the matching section is shown
- Standard mode (no roadmap) is unchanged — exercises shown as a flat list sorted by difficulty

---

## Files Changed

| File | Change |
|---|---|
| `src/features/exercises/infrastructure/repositories/exerciseRepository.ts` | Add `getRoadmapExercises()` function |
| `src/features/exercises/presentation/components/ExerciseSidebar.tsx` | Roadmap button, section headers, URL param handling for `mode` |

---

## Out of Scope

- Manual curation of roadmap exercises — always auto-selected (first N per level)
- Roadmap progress tracking separate from normal exercise progress
- Multiple roadmap paths (e.g., "speed run" vs "deep dive")
- Roadmap on the topic list / home page
