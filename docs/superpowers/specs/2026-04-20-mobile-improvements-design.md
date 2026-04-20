# Mobile Improvements Design

**Date:** 2026-04-20  
**Status:** Approved  
**Scope:** Navbar hamburger menu · ExerciseListView filter chips · Exam Setup/Results mobile polish

---

## Problem

Three areas of the UI degrade on small screens (375–640px):

1. **Navbar** — four inline items (LanguageSwitcher, SearchButton, Exam, Stats) crowd the bar on mobile.
2. **ExerciseListView filter chips** — `flex-wrap` causes ragged multi-line wrapping.
3. **Exam mode** — difficulty buttons overflow on ExamSetup; action buttons and summary cards need minor responsive fixes on ExamResults.

ExamRunner is already mobile-friendly via the tabbed layout introduced in the mobile exercise layout spec.

---

## Approach

Targeted polish (Approach A): minimal, focused changes. No new abstractions, no drawer with backdrop, no heavy state management.

---

## Section 1 — Navbar Hamburger

### Breakpoint

Hamburger visible at `< sm` (< 640px). Desktop layout unchanged.

### Always-visible on mobile

- Brand link (left)
- SearchButton — icon-only (already is on mobile via `hidden sm:inline` on label/kbd)
- Hamburger toggle button `☰` / `✕` (right)

GamificationBar stays `hidden sm:block` — it is contextual XP progress, not navigation.

### Dropdown panel

- Absolute, `top-12 right-0 z-50`, `w-48`, `sm:hidden`
- Background: `bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg`
- Contents (top to bottom): Exam link · Stats link · LanguageSwitcher
- Opens/closes via `menuOpen: boolean` state
- Closes on click-outside via `useRef` + `useEffect`

### Implementation notes

- Add `menuOpen` state to `Navbar`
- Add click-outside `useEffect` (ref on the dropdown wrapper div)
- Desktop nav: existing links + LanguageSwitcher wrapped in `hidden sm:flex items-center gap-4`
- Mobile dropdown: same links re-rendered inside `sm:hidden` dropdown panel (no shared component needed — it's just a few links)
- Hamburger button: `sm:hidden`, toggles `menuOpen`
- File: `src/shared/components/Navbar.tsx` — single file change

---

## Section 2 — ExerciseListView Filter Chips

### Change

Each filter row: `flex flex-wrap gap-2` → `flex gap-2 overflow-x-auto pb-1`  
Each chip button: add `shrink-0`

### Effect

- Mobile: single scrollable row per category, no line wrapping
- Desktop: chips still fit without scrolling, `overflow-x-auto` is a no-op

### File

`src/features/exercises/presentation/components/ExerciseListView.tsx` — two-line change (one per filter row)

---

## Section 3 — ExamSetup Difficulty Buttons

### Problem

Four buttons with `flex-1` in a single row. On 375px each button is ~81px — too narrow for "Intermediate" and "Advanced".

### Change

`flex gap-2` → `grid grid-cols-2 gap-2`

Each button gets ~170px on 375px, comfortable for all labels including localized strings.

Count buttons (5 / 10 / 20) are short labels in a 3-button row — no change needed.

### File

`src/features/exam/presentation/components/ExamSetup.tsx` — one-line change

---

## Section 4 — ExamResults Mobile Polish

### Summary cards

`text-3xl` numbers in a `grid grid-cols-3` can feel cramped on 375px.  
Change: `text-2xl sm:text-3xl` on the three score/XP/time values.

### Action buttons

`flex gap-3` with potentially long labels ("Retry Missed (N)") can overflow.  
Change: `flex flex-col sm:flex-row gap-3`, each button `w-full sm:w-auto`

### File

`src/features/exam/presentation/components/ExamResults.tsx` — two small changes

---

## Section 5 — ExamRunner

No changes. ExamRunner wraps ExerciseRunner which already uses the tabbed mobile layout from the mobile exercise layout spec. The bottom action bar (`flex items-center justify-end gap-3 px-6 py-3`) is fine on mobile.

---

## Files Changed

| File | Change |
|------|--------|
| `src/shared/components/Navbar.tsx` | Hamburger menu + dropdown panel |
| `src/features/exercises/presentation/components/ExerciseListView.tsx` | Horizontal-scroll filter rows |
| `src/features/exam/presentation/components/ExamSetup.tsx` | `grid-cols-2` difficulty buttons |
| `src/features/exam/presentation/components/ExamResults.tsx` | Responsive cards + stacked action buttons |

---

## Out of Scope

- GamificationBar on mobile (deferred — not navigation)
- Supabase integration / Phase 13
- Any changes to ExamRunner, ExamProgressBar, ExerciseRunner
