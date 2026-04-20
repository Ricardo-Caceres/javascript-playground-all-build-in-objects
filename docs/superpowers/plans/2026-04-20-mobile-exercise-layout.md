# Mobile Exercise Layout Implementation Plan

> **Status: COMPLETE** — PR #29 merged to main. ARIA follow-up committed in `3c8f135`.

**Goal:** Add a tab-based mobile layout to `ExerciseDetailView` so the exercise page is fully usable on phones (375px+) while leaving the desktop 3-column layout pixel-identical.

**Architecture (as shipped):** Single unified layout — root div `flex flex-col md:flex-row`. Sidebar is `hidden md:block`. Description panel and editor panel each rendered once; CSS classes control visibility per breakpoint/tab. The original dual-block plan (`hidden md:flex` + `flex md:hidden`) was revised after code review: CSS `display:none` does NOT unmount React, so the dual-block approach would have mounted `ExerciseRunner` twice (two WebWorkers, two `keydown` handlers).

**Tech Stack:** React (useState), Tailwind CSS responsive prefixes, `useExerciseNavigation` hook, `next-intl` (`useTranslations`), `@/i18n/navigation` (`Link`)

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/features/exercises/presentation/components/ExerciseDetailView.tsx` | **Modified** | `'use client'`, tab state, `DescriptionPanel` component, unified layout, full ARIA tablist |
| `messages/en.json` | **Modified** | Added `tabDescription`, `tabCode`, `hints`, `tablistLabel` to `exercise` namespace |
| `messages/es.json` | **Modified** | Same keys in Spanish |

---

### Task 1: Add mobile tab layout to ExerciseDetailView ✅

**Status: DONE** — Committed in `1e0cd9e` (mobile layout) + `3c8f135` (ARIA follow-up).

**What was built:**
- `'use client'` directive added
- `DescriptionPanel` named component (not a JSX variable — avoids double-mount risk)
- Unified layout: single `ExerciseRunner` instance, visibility driven by `activeTab` state + Tailwind classes
- Mobile top bar: back link + counter (with `currentIndex > 0` guard)
- Full ARIA tablist: `role="tablist"`, `aria-label`, `onKeyDown` (←/→), `role="tab"`, `id`, `aria-controls`, `aria-selected`, `tabIndex`, `role="tabpanel"`, `aria-labelledby`
- i18n keys: `tabDescription`, `tabCode`, `hints`, `tablistLabel`

> **Note on original plan:** The plan prescribed a dual-block approach with two `<ExerciseRunner>` instances (one per block). A code review caught that CSS `display:none` does not unmount React — both blocks would have been mounted simultaneously, spawning two WebWorkers and registering two `window.keydown` handlers. The implementation was revised to a single unified layout.


---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/features/exercises/presentation/components/ExerciseDetailView.tsx` | **Modified** | `'use client'`, tab state, `DescriptionPanel` component, unified layout, full ARIA tablist |
| `messages/en.json` | **Modified** | Added `tabDescription`, `tabCode`, `hints`, `tablistLabel` to `exercise` namespace |
| `messages/es.json` | **Modified** | Same keys in Spanish |

---

### Task 1: Add mobile tab layout to ExerciseDetailView ✅

**Status: DONE** — Committed in `1e0cd9e` (mobile layout) + `3c8f135` (ARIA follow-up).

**What was built:**
- `'use client'` directive added
- `DescriptionPanel` named component (not a JSX variable — avoids double-mount risk)
- Unified layout: single `ExerciseRunner` instance, visibility driven by `activeTab` state + Tailwind classes
- Mobile top bar: back link + counter (with `currentIndex > 0` guard)
- Full ARIA tablist: `role="tablist"`, `aria-label`, `onKeyDown` (←/→), `role="tab"`, `id`, `aria-controls`, `aria-selected`, `tabIndex`, `role="tabpanel"`, `aria-labelledby`
- i18n keys: `tabDescription`, `tabCode`, `hints`, `tablistLabel`

> **Note on original plan:** The plan prescribed a dual-block approach with two `<ExerciseRunner>` instances (one per block). A code review caught that CSS `display:none` does not unmount React — both blocks would have been mounted simultaneously, spawning two WebWorkers and registering two `window.keydown` handlers. The implementation was revised to a single unified layout.

```tsx
'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ExerciseRunner } from './ExerciseRunner'
import ExerciseSidebar from './ExerciseSidebar'
import { DescriptionMarkdown } from './DescriptionMarkdown'
import { useExerciseNavigation } from '../hooks/useExerciseNavigation'
import type { Exercise } from '@/shared/types/exercises'

interface ExerciseDetailViewProps {
  exercise: Exercise
}

export function ExerciseDetailView({ exercise }: ExerciseDetailViewProps) {
  const objectName = exercise.builtIn
  const [activeTab, setActiveTab] = useState<'description' | 'code'>('description')
  const { currentIndex, total } = useExerciseNavigation(objectName, exercise.slug)
  const t = useTranslations('exercise')

  const descriptionContent = (
    <>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded bg-zinc-800 px-2 py-1 text-xs font-medium text-emerald-400">
          {exercise.builtIn}
        </span>
        {exercise.method && (
          <code className="rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-400">
            {exercise.method}
          </code>
        )}
        <span
          className={`rounded px-2 py-1 text-xs font-medium capitalize ${
            exercise.difficulty === 'beginner'
              ? 'bg-emerald-900/40 text-emerald-400'
              : exercise.difficulty === 'intermediate'
                ? 'bg-amber-900/40 text-amber-400'
                : 'bg-red-900/40 text-red-400'
          }`}
        >
          {exercise.difficulty}
        </span>
      </div>
      <h1 className="mb-4 text-xl font-bold leading-snug">{exercise.title}</h1>
      <div className="prose-sm">
        <DescriptionMarkdown content={exercise.description} />
      </div>
      {exercise.hints && exercise.hints.length > 0 && (
        <details className="mt-6">
          <summary className="cursor-pointer text-sm font-semibold text-zinc-500 hover:text-zinc-300">
            💡 {t('hints')} ({exercise.hints.length})
          </summary>
          <ul className="mt-3 space-y-2">
            {exercise.hints.map((hint, i) => (
              <li key={`${i}-${hint.slice(0, 20)}`} className="text-sm text-zinc-400">
                • {hint}
              </li>
            ))}
          </ul>
        </details>
      )}
    </>
  )

  return (
    <div className="flex h-[calc(100vh-3rem)] overflow-hidden bg-zinc-950 text-zinc-100">

      {/* ── DESKTOP (md+): unchanged 3-column layout ── */}
      <div className="hidden md:flex w-full h-full">
        <ExerciseSidebar objectName={objectName} currentSlug={exercise.slug} />
        <div className="flex min-w-0 flex-1">
          <div className="w-96 shrink-0 overflow-y-auto border-r border-zinc-700 p-6">
            {descriptionContent}
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <ExerciseRunner exercise={exercise} objectName={objectName} />
          </div>
        </div>
      </div>

      {/* ── MOBILE (<md): tab layout ── */}
      <div className="flex md:hidden w-full flex-col">
        {/* Top bar */}
        <div className="flex shrink-0 items-center justify-between border-b border-zinc-800 px-4 py-2">
          <Link
            href={`/exercises/${objectName.toLowerCase()}`}
            className="font-mono text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            ← {objectName}
          </Link>
          <span className="font-mono text-xs text-zinc-600">
            {currentIndex} / {total}
          </span>
        </div>

        {/* Tabs */}
        <div className="flex shrink-0 border-b border-zinc-800">
          <button
            type="button"
            onClick={() => setActiveTab('description')}
            className={`flex-1 py-2 text-xs font-medium transition-colors ${
              activeTab === 'description'
                ? 'border-b-2 border-emerald-500 text-emerald-400'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            📖 {t('tabDescription')}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`flex-1 py-2 text-xs font-medium transition-colors ${
              activeTab === 'code'
                ? 'border-b-2 border-emerald-500 text-emerald-400'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            💻 {t('tabCode')}
          </button>
        </div>

        {/* Tab content */}
        {activeTab === 'description' ? (
          <div className="flex-1 overflow-y-auto p-4">
            {descriptionContent}
          </div>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col">
            <ExerciseRunner exercise={exercise} objectName={objectName} />
          </div>
        )}
      </div>

    </div>
  )
}
```

- [ ] **Step 2: Add the two new i18n keys to `messages/en.json`**

Find the `"exercise"` namespace (around line 90-110). Add inside it:

```json
"tabDescription": "Description",
"tabCode": "Code",
"hints": "Hints"
```

Note: check if `"hints"` already exists in the `exercise` namespace before adding it. If it does, skip that key.

- [ ] **Step 3: Add the same keys to `messages/es.json`**

```json
"tabDescription": "Descripción",
"tabCode": "Código",
"hints": "Pistas"
```

Same note: skip `"hints"` if it already exists.

- [ ] **Step 4: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: exit code 0, no output. If there are errors about `t('hints')`, `t('tabDescription')`, or `t('tabCode')` — the keys were not added to the correct namespace. If there's an error about `useTranslations`, verify the import is from `'next-intl'`.

- [ ] **Step 5: Commit**

```bash
git add src/features/exercises/presentation/components/ExerciseDetailView.tsx \
        messages/en.json \
        messages/es.json
git commit -m "feat(mobile): add tab layout to ExerciseDetailView for mobile viewports"
```

---

## Verification

After the commit, start the dev server and open the app on a narrow viewport (375px):

```bash
npm run dev
```

Open `http://localhost:3000/exercises/array/array-from` (or any exercise). 

**Mobile (DevTools → 375px):**
- [ ] Top bar shows `← Array` link and `N / total` counter
- [ ] Two tabs visible: `📖 Description` and `💻 Code`
- [ ] Description tab is active by default, description text is readable
- [ ] Switching to Code tab shows Monaco editor + action bar
- [ ] Run button works, test results appear below editor

**Desktop (DevTools → 1280px):**
- [ ] 3-column layout unchanged: sidebar + description panel + editor all visible side by side
- [ ] No visual regressions
