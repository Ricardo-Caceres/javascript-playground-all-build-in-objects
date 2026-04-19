# Mobile Exercise Layout — Design Spec

**Date:** 2026-04-19  
**Scope:** `ExerciseDetailView` responsive layout for mobile viewports  
**Status:** Approved

---

## Problem

The exercise detail page uses a fixed 3-column layout with no responsive breakpoints:

```
[ExerciseSidebar w-64] | [Description w-96] | [ExerciseRunner flex-1]
```

On a 375px mobile viewport the minimum content width (~640px before the editor) makes the page completely unusable — panels overflow and the Monaco editor is unreachable.

---

## Goal

Make the exercise experience fully usable on mobile phones (375px+) without changing the desktop layout or any component other than `ExerciseDetailView`.

---

## Approach: Tab layout on mobile, unchanged on desktop

### Desktop (≥ 768px / `md:`)

No changes. The existing 3-column layout is preserved exactly:
- `ExerciseSidebar` (w-64) — exercise list navigation
- Description panel (w-96) — exercise description, badges, hints
- `ExerciseRunner` (flex-1) — Monaco editor, timed mode, test results

### Mobile (< 768px)

Full-screen tab layout replaces the 3-column layout:

```
┌─────────────────────────────────┐
│  ← Array          3 / 12       │  top bar
├─────────────────────────────────┤
│  [📖 Description]  [💻 Code]   │  tabs
├─────────────────────────────────┤
│                                 │
│   active tab content            │
│   (fills remaining viewport)    │
│                                 │
└─────────────────────────────────┘
```

**Top bar:**
- `← {objectName}` — link to `/exercises/{objectName.toLowerCase()}` (back to list)
- `{currentIndex} / {total}` — exercise counter within the current object

**Tabs:**
- `📖 Description` — exercise description, difficulty/method badges, hints
- `💻 Code` — `ExerciseRunner` component filling remaining height

**Default active tab:** `description` (user sees context before coding)

**`ExerciseSidebar`:** hidden on mobile (inside the `hidden md:flex` desktop block). Navigation between exercises is handled by the Prev/Next buttons already present in `ExerciseRunner`'s action bar.

---

## Implementation

### Files changed

| File | Change |
|------|--------|
| `src/features/exercises/presentation/components/ExerciseDetailView.tsx` | Add tab state + mobile layout block |

No other files change. `ExerciseRunner`, `ExerciseSidebar`, and all other components are untouched.

### Key implementation notes

1. **Tab state** — `const [activeTab, setActiveTab] = useState<'description' | 'code'>('description')` declared in `ExerciseDetailView`. Only meaningful on mobile; has no effect on the desktop render path.

2. **Desktop block** — existing JSX wrapped in `<div className="hidden md:flex w-full h-full">`. Zero changes to its contents.

3. **Mobile block** — new `<div className="flex md:hidden flex-col w-full h-full">` containing:
   - Top bar with back link and counter
   - Tab buttons (active tab indicated by `border-b-2 border-emerald-500`)
   - Conditional render: description JSX or `<ExerciseRunner>`

4. **Counter data** — `ExerciseDetailView` calls `useExerciseNavigation(objectName, exercise.slug)` to obtain `currentIndex` and `total` for the mobile top bar. `ExerciseRunner` also calls this hook internally — calling it twice is safe (same inputs, same output, no side effects).

5. **Description JSX** — the description panel content (badges, title, `DescriptionMarkdown`, hints) is extracted into a local `const descriptionContent = (<>…</>)` variable inside the component, then rendered in both the desktop panel (`w-96` div) and the mobile Description tab. This avoids duplicating JSX while keeping everything in one file.

6. **Monaco height** — `ExerciseRunner` uses `height="100%"` for Monaco. The mobile Code tab container must be `flex-1 min-h-0 flex flex-col` so the flex child fills available height correctly.

---

## Out of scope

- Navbar mobile improvements (separate task)
- `ExerciseListView` mobile improvements (separate task)
- Exam mode mobile improvements (separate task)
- Any changes to desktop layout
- Monaco editor replacement on mobile (user explicitly chose to keep Monaco)

---

## Success criteria

- On a 375px viewport, the exercise page is fully usable: description readable, editor accessible, tests runnable
- On desktop (≥768px), behavior is pixel-identical to today
- TypeScript compiles with no errors
- No regressions to `ExerciseRunner`, `ExerciseSidebar`, or any other component
