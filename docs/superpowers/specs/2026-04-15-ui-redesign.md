# UI Redesign — JS Built-in Objects Practice Platform

**Date:** 2026-04-15  
**Status:** Approved for implementation

---

## Problem & Goal

The platform has a functional UI but mixed aesthetics (warm beige home + dark exercises), limited navigation (no Next/Previous between exercises), no visual progress indicators, no search/filter, and no stats overview. For public sharing the UI needs to feel polished, consistent, and professional — Codewars/LeetCode-style dark, focused on code.

---

## Visual Direction

- **Theme**: Dark throughout — `zinc-950` background on all pages (no more warm beige)
- **Accent**: Emerald (`emerald-400/500/600`) — success, interactive, brand color
- **Typography**: Geist Sans for UI, Geist Mono for code (already installed)
- **Cards**: `rounded-xl`, subtle `border-zinc-800` border, `bg-zinc-900` surface
- **Buttons**: `rounded-lg`, emerald primary, zinc outline secondary
- **Spacing**: Generous — `max-w-6xl` centered, `py-12 px-6` containers

---

## Architecture — What Changes

### New files
- `src/shared/components/Navbar.tsx` — global top navbar
- `src/app/stats/page.tsx` — stats/progress overview page
- `src/features/exercises/presentation/hooks/useExerciseNavigation.ts` — prev/next logic

### Modified files
- `src/features/home/presentation/components/HomeView.tsx` — full redesign
- `src/features/exercises/presentation/components/ExerciseListView.tsx` — filter bar + progress
- `src/features/exercises/presentation/components/ExerciseCard.tsx` — mini progress
- `src/features/exercises/presentation/components/ExerciseSidebar.tsx` — better icons + counts
- `src/features/exercises/presentation/components/ExerciseDetailView.tsx` — layout tweaks
- `src/features/exercises/presentation/components/ExerciseRunner.tsx` — ⌘+Enter + next/prev
- `src/features/exercises/presentation/components/TestPanel.tsx` — numbering + copy error
- `src/app/layout.tsx` — add Navbar

---

## Page Designs

### 1. Global Navbar (`Navbar.tsx`)

Persistent top bar across all pages:
```
[JS Built-ins]                    [⬜ 142 / 850 completed  16%]  [Stats →]
```
- Left: Logo text "JS Built-ins" in `font-mono font-semibold text-emerald-400`
- Right: Global completion stats (from Redux `state.progress`) + link to `/stats`
- Height: `h-12`, `bg-zinc-950 border-b border-zinc-800`
- Layout: `layout.tsx` adds `<Navbar />` above `{children}`
- On exercise detail page, navbar is hidden (full-screen editor layout)

### 2. Home Page Redesign

**Remove**: warm beige gradient, white hero card  
**Add**: consistent dark theme, search, filters, progress on cards

Layout:
```
[Navbar]
─────────────────────────────────────────────
  Master JavaScript Built-in Objects          ← hero (dark, no card)
  850+ exercises · TypeScript · In-browser tests

  [🔍 Search objects...]   [All] [Fundamentals] [Collections] [Errors] [Async] [Intl]

  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
  │ Array    │ │ String   │ │ Object   │ │ Number   │
  │ ████░░   │ │ ░░░░░░   │ │ ████████ │ │ ██░░░░   │
  │ 12/45    │ │ 0/40     │ │ 20/20    │ │ 5/30     │
  └──────────┘ └──────────┘ └──────────┘ └──────────┘
  ... 38 cards total
─────────────────────────────────────────────
  Redux Architecture Examples  (moved to bottom, kept for context)
```

- Hero: plain dark, no card. `text-4xl font-bold text-zinc-100`
- Search: `<input>` filters cards by object name in real-time
- Filter chips: groupings defined as:
  - **All** — all 38 objects
  - **Fundamentals**: Array, String, Object, Number, Boolean, BigInt, Symbol, Math
  - **Collections**: Map, Set, WeakMap, WeakSet
  - **Errors**: Error, TypeError, RangeError, SyntaxError, ReferenceError, AggregateError
  - **Async & Generators**: Promise, Generator, Iterator, AsyncFunction
  - **Buffers**: ArrayBuffer, SharedArrayBuffer, DataView, TypedArray, Atomics
  - **Intl & Global**: Intl, GlobalFunctions, globalThis, structuredClone
  - **Reflection**: Proxy, Reflect, Function
  - **Other**: WeakRef, FinalizationRegistry, Date, RegExp, JSON
- Cards show: name, mini progress bar, `X / Y` count
- Completed cards: `border-emerald-800/40 bg-emerald-950/30`

### 3. Exercise List Page

Current: plain grid with text counter  
New: filter bar + visual progress header + category counts

```
← Home

Array                    [filter: All ▾] [Beginner] [Intermediate] [Advanced] [✓ Done] [○ Todo]
████████████████░░░░  32/45 completed

Constructor (5)          Static Methods (8)        Instance Methods (22) ...
[cards]                  [cards]                   [cards]
```

- Progress bar: `w-full h-2 bg-zinc-800 rounded-full` with filled portion in emerald
- Filter chips: client-side filtering, chips are toggleable
- Category section headers: `{CATEGORY_LABELS[cat]} ({items.length})`
- Cards unchanged except show filtered state

### 4. Exercise Detail Page

Layout unchanged (sidebar + description + editor). Improvements:

**Bottom action bar** (in ExerciseRunner):
```
[← Prev]  [▶ Run Tests  ⌘↵]  [Reset]  [Next →]   Exercise 12 of 45
```

- Prev/Next buttons navigate to adjacent exercise in same object
- "Exercise N of M" counter (small, `text-zinc-500 text-xs`)
- Run Tests button shows `⌘↵` hint (or `Ctrl+↵` on Windows)
- `useEffect` adds `keydown` listener: `(e.metaKey || e.ctrlKey) && e.key === 'Enter'` → `run()`

**All-pass state** (in TestPanel):
When `passedCount === totalCount` and `totalCount > 0`:
```
✅ All 5 tests passed!
```
- `bg-emerald-950 border-emerald-700` container
- Larger, more celebratory display

**Test results** (in TestPanel):
- Number each test: `#1`, `#2`, etc. (`text-zinc-600 text-xs font-mono`)
- Copy button on failed test errors (clipboard icon, `navigator.clipboard.writeText(r.error)`)
- Auto-scroll: `useEffect` scrolls test panel into view when `runResult` changes

### 5. Sidebar Improvements

- **Status icons**: Replace `·` / `○` / `✓` with clearer versions:
  - `✓` (completed) — `text-emerald-400`  
  - `▶` (active/current) — `text-white`
  - `○` (not started) — `text-zinc-600`
  - Remove `attempted` state icon confusion
- **Category headers**: Show `Constructor (2/5)` progress counts
- **Scroll to active**: `useEffect` + `ref` on active item → `scrollIntoView({ block: 'nearest' })` on mount

### 6. Stats Page (`/stats`)

Simple dark page:
```
[Navbar]

  Your Progress
  
  ████████████░░░░░░░░  142 / 850  (16.7%)
  
  Progress by Object
  Array     ████████████░░  32/45
  String    ░░░░░░░░░░░░░░   0/40
  Object    ██████████████  20/20 ✓
  ...

  Recently Completed
  · Array.prototype.map — 2 min ago
  · Array.prototype.filter — 5 min ago
```

- All data from Redux `state.progress`
- Objects sorted by completion % descending
- "Recently completed" = last 10 entries by `completedAt` timestamp (if available in progress state)
- If no progress yet: empty state "No exercises completed yet. Start with Array →"

---

## Implementation Phases

### Phase UI-1: Foundation + Home
- Add `Navbar.tsx` + wire into `layout.tsx`
- Home page: dark theme, search, filter chips, progress on cards

### Phase UI-2: Exercise List + Cards + Sidebar
- Exercise list: filter bar, progress bar, category counts
- Sidebar: better icons, category counts, scroll-to-active

### Phase UI-3: Exercise Detail (Editor + Tests)
- ⌘+Enter keyboard shortcut
- Next/Previous navigation + `useExerciseNavigation` hook
- TestPanel: numbering, copy error, all-pass banner, auto-scroll

### Phase UI-4: Stats Page + Final Polish
- `/stats` page
- Remove warm beige from any remaining elements
- Responsive tweaks (collapse sidebar on small screens)
- Final review pass

---

## Constraints

- **No new dependencies** — use existing Tailwind, React, Redux, Next.js
- **No breaking changes** to exercise data or progress Redux shape
- **localStorage progress** continues as-is (no Supabase)
- **No async/server changes** — all changes are client-side UI only (except new stats route)
- `navigator.clipboard` only available in HTTPS/localhost — add try/catch guard on copy button
