# Mobile Exercise Layout — Design Spec

**Date:** 2026-04-19  
**Scope:** `ExerciseDetailView` responsive layout for mobile viewports  
**Status:** Shipped — PR #29 merged, ARIA follow-up in `3c8f135`

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
| `src/features/exercises/presentation/components/ExerciseDetailView.tsx` | Add `'use client'`, tab state, `DescriptionPanel` component, unified layout with ARIA |
| `messages/en.json` | Added `tabDescription`, `tabCode`, `hints`, `tablistLabel` to `exercise` namespace |
| `messages/es.json` | Same keys in Spanish |

`ExerciseRunner`, `ExerciseSidebar`, and all other components are untouched.

### Key implementation notes

1. **Tab state** — `const [activeTab, setActiveTab] = useState<'description' | 'code'>('description')` declared in `ExerciseDetailView`. Only meaningful on mobile; has no effect on the desktop render path.

2. **Single unified layout** — The root div is `flex flex-col md:flex-row`. Sidebar is `hidden md:block`. Description panel and editor panel are each rendered exactly once. CSS classes drive visibility per breakpoint/tab. This avoids the dual-block approach (which would have mounted `ExerciseRunner` twice — two WebWorkers, two `keydown` handlers).

3. **`DescriptionPanel` component** — Description content extracted into a named `function DescriptionPanel({ exercise, hintsLabel })` component. Accepts `hintsLabel: string` (pre-resolved translation) to avoid complex `ReturnType<typeof useTranslations>` generics.

4. **Mobile top bar + tabs** — `shrink-0 md:hidden` wrapper. Back link goes to `/exercises/${objectName.toLowerCase()}`. Counter renders `currentIndex > 0 ? \`${currentIndex} / ${total}\` : null` (guard for invalid slugs).

5. **ARIA tablist** — Full WCAG 2.2 pattern:
   - `role="tablist"` + `aria-label={t('tablistLabel')}` + `onKeyDown` (←/→ switches tab) on container
   - `role="tab"` + `id` + `aria-controls` + `aria-selected` + `tabIndex` (0/−1) on each button
   - `role="tabpanel"` + `id` + `aria-labelledby` + `tabIndex={0}` on each panel

6. **Counter data** — `useExerciseNavigation(objectName, exercise.slug)` called in `ExerciseDetailView` for the mobile counter. `ExerciseRunner` also calls it internally — safe (pure memo, no side effects).

7. **Monaco height** — `ExerciseRunner` uses `height="100%"`. The editor panel must be `min-h-0 flex-col` so the flex child fills available height correctly.

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
