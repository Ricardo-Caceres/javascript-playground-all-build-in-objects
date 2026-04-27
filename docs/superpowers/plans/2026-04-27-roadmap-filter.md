# Roadmap Filter Mode — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Roadmap" filter button to the exercise sidebar that shows the top 15 exercises per difficulty level (beginner → intermediate → advanced) with section headers, persisted in the URL as `?mode=roadmap`.

**Architecture:** Two changes only — add `getRoadmapExercises()` to the repository layer, then update `ExerciseSidebar.tsx` to read `mode=roadmap` from the URL, render grouped sections, and preserve the param in all navigation links.

**Tech Stack:** TypeScript, React, Next.js (next-intl), Tailwind CSS, `useSearchParams` from `next/navigation`, `useRouter` + `Link` from `@/i18n/navigation`.

---

## Files

| File | Action | Responsibility |
|---|---|---|
| `src/features/exercises/infrastructure/repositories/exerciseRepository.ts` | Modify | Add `getRoadmapExercises()` |
| `src/features/exercises/presentation/components/ExerciseSidebar.tsx` | Modify | Roadmap mode UI, URL state, section headers |

---

## Task 1: Add `getRoadmapExercises` to the repository

**Files:**
- Modify: `src/features/exercises/infrastructure/repositories/exerciseRepository.ts`

- [ ] **Step 1: Add the function** at the end of the file

```ts
// Returns up to maxPerLevel exercises per difficulty, in data-file order
export function getRoadmapExercises(
  objectName: string,
  maxPerLevel = 15,
): Record<'beginner' | 'intermediate' | 'advanced', Exercise[]> {
  const all = getAllExercisesByObject(objectName)
  const pick = (d: 'beginner' | 'intermediate' | 'advanced') =>
    all.filter((e) => e.difficulty === d).slice(0, maxPerLevel)
  return {
    beginner: pick('beginner'),
    intermediate: pick('intermediate'),
    advanced: pick('advanced'),
  }
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: exits with code 0, no errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/exercises/infrastructure/repositories/exerciseRepository.ts
git commit -m "feat: add getRoadmapExercises to exercise repository"
```

---

## Task 2: Roadmap mode in ExerciseSidebar

**Files:**
- Modify: `src/features/exercises/presentation/components/ExerciseSidebar.tsx`

### Step-by-step changes

- [ ] **Step 1: Import `getRoadmapExercises`**

Change the existing import line (line 10):

```ts
import { getAllExercisesByObject, getTopicMeta, getRoadmapExercises } from '@/features/exercises/infrastructure/repositories/exerciseRepository'
```

- [ ] **Step 2: Read `mode` param from the URL**

After the existing `selectedDifficulty` declaration (after line 48), add:

```ts
const isRoadmap = searchParams.get('mode') === 'roadmap'
```

- [ ] **Step 3: Compute roadmap groups when active**

Replace the existing `filteredExercises` block (lines 63–68):

```ts
const DIFF_ORDER: Record<Difficulty, number> = { beginner: 0, intermediate: 1, advanced: 2 }

// Roadmap mode: group exercises by difficulty, capped at 15 per level
const roadmapGroups = isRoadmap ? getRoadmapExercises(objectName) : null

// Standard mode: all exercises sorted beginner → intermediate → advanced
const flatExercises = exercises
  .filter(ex => selectedDifficulty === null || ex.difficulty === selectedDifficulty)
  .sort((a, b) => DIFF_ORDER[a.difficulty] - DIFF_ORDER[b.difficulty])
```

- [ ] **Step 4: Update `buildExerciseHref` to preserve `mode=roadmap`**

Replace the existing `buildExerciseHref` function:

```ts
function buildExerciseHref(slug: string): string {
  const base = `/exercises/${objectName.toLowerCase()}/${slug}`
  const params = new URLSearchParams()
  if (isRoadmap) params.set('mode', 'roadmap')
  if (selectedDifficulty) params.set('difficulty', selectedDifficulty)
  const qs = params.toString()
  return qs ? `${base}?${qs}` : base
}
```

- [ ] **Step 5: Add `setRoadmap` toggle function**

After the existing `setFilter` function, add:

```ts
function setRoadmap() {
  const params = new URLSearchParams(searchParams.toString())
  if (isRoadmap) {
    params.delete('mode')
  } else {
    params.set('mode', 'roadmap')
  }
  const qs = params.toString()
  router.replace(qs ? `?${qs}` : pathname, { scroll: false })
}
```

Note: `setFilter` already does `new URLSearchParams(searchParams.toString())` so it automatically preserves `mode=roadmap` when changing difficulty — no changes needed there.

- [ ] **Step 6: Add the Roadmap button to the filter row**

In the filter buttons `<div className="flex flex-wrap gap-1">`, add the Roadmap button **before** the existing `.map(...)` call:

```tsx
{/* Roadmap button */}
<button
  type="button"
  onClick={setRoadmap}
  aria-pressed={isRoadmap}
  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
    isRoadmap
      ? 'bg-emerald-700 text-white'
      : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
  }`}
>
  🗺 Roadmap
</button>
```

Full updated filter section (replace lines 111–131):

```tsx
{/* Difficulty Filter Buttons */}
<div className="px-4 py-2 space-y-1">
  <div className="flex flex-wrap gap-1">
    {/* Roadmap button */}
    <button
      type="button"
      onClick={setRoadmap}
      aria-pressed={isRoadmap}
      className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
        isRoadmap
          ? 'bg-emerald-700 text-white'
          : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
      }`}
    >
      🗺 Roadmap
    </button>
    {(['all', ...VALID_DIFFS] as const).map((d) => (
      <button
        key={d}
        type="button"
        onClick={() => setFilter(d === 'all' ? null : d)}
        aria-pressed={selectedDifficulty === (d === 'all' ? null : d)}
        className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
          selectedDifficulty === (d === 'all' ? null : d)
            ? 'bg-emerald-700 text-white'
            : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
        }`}
      >
        {d === 'all'
          ? 'All'
          : `${DIFF_LABELS[d]} (${difficultyCounts[d]})`}
      </button>
    ))}
  </div>
</div>
```

- [ ] **Step 7: Replace the exercise list `<nav>` to support both modes**

Replace the entire `<nav>` block and the empty-state div (lines 144–179) with:

```tsx
{/* List */}
<nav aria-label="Exercise list" className="flex-1 overflow-y-auto py-2">
  {isRoadmap ? (
    // Roadmap mode: grouped sections by difficulty
    VALID_DIFFS
      .filter(d => selectedDifficulty === null || d === selectedDifficulty)
      .map(d => {
        const group = roadmapGroups![d]
        if (group.length === 0) return null

        const headerColor: Record<Difficulty, string> = {
          beginner: 'text-emerald-500',
          intermediate: 'text-yellow-500',
          advanced: 'text-red-500',
        }

        return (
          <div key={d}>
            {/* Section header */}
            <div className="flex items-center gap-2 px-3 py-1.5 mt-1">
              <span className={`text-xs font-semibold uppercase tracking-wider ${headerColor[d]}`}>
                {DIFF_LABELS[d]}
              </span>
              <span className="text-xs text-zinc-600">({group.length})</span>
              <div className="flex-1 border-t border-zinc-800" />
            </div>

            {group.map((ex) => {
              const status = progressMap[ex.slug]?.status ?? 'not-started'
              const isActive = ex.slug === currentSlug
              return (
                <Link
                  key={ex.slug}
                  href={buildExerciseHref(ex.slug)}
                  ref={isActive ? activeRef : null}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${DIFF_COLORS[ex.difficulty]} ${
                    isActive
                      ? 'bg-zinc-800 text-zinc-100'
                      : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300'
                  }`}
                >
                  <span className="w-4 shrink-0 text-center text-xs">
                    {status === 'completed' ? (
                      <span className="text-emerald-500">✓</span>
                    ) : status === 'attempted' ? (
                      <span className="text-yellow-500">▶</span>
                    ) : (
                      <span className="text-zinc-700">○</span>
                    )}
                  </span>
                  <span className="truncate">{ex.title}</span>
                </Link>
              )
            })}
          </div>
        )
      })
  ) : (
    // Standard mode: flat list sorted by difficulty
    flatExercises.map((ex) => {
      const status = progressMap[ex.slug]?.status ?? 'not-started'
      const isActive = ex.slug === currentSlug
      return (
        <Link
          key={ex.slug}
          href={buildExerciseHref(ex.slug)}
          ref={isActive ? activeRef : null}
          aria-current={isActive ? 'page' : undefined}
          className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${DIFF_COLORS[ex.difficulty]} ${
            isActive
              ? 'bg-zinc-800 text-zinc-100'
              : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300'
          }`}
        >
          <span className="w-4 shrink-0 text-center text-xs">
            {status === 'completed' ? (
              <span className="text-emerald-500">✓</span>
            ) : status === 'attempted' ? (
              <span className="text-yellow-500">▶</span>
            ) : (
              <span className="text-zinc-700">○</span>
            )}
          </span>
          <span className="truncate">{ex.title}</span>
        </Link>
      )
    })
  )}
</nav>
{(isRoadmap
  ? VALID_DIFFS
      .filter(d => selectedDifficulty === null || d === selectedDifficulty)
      .every(d => roadmapGroups![d].length === 0)
  : flatExercises.length === 0
) && (
  <div className="px-4 py-3 text-xs text-zinc-500">
    No exercises at this difficulty level
  </div>
)}
```

- [ ] **Step 8: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: exits with code 0, no errors.

- [ ] **Step 9: Commit**

```bash
git add src/features/exercises/presentation/components/ExerciseSidebar.tsx
git commit -m "feat: add roadmap filter mode to exercise sidebar

- Roadmap button shows top 15 exercises per difficulty with section headers
- URL param ?mode=roadmap persists across exercise navigation
- Compatible with difficulty sub-filter (?mode=roadmap&difficulty=beginner)
- Roadmap toggles off when clicked again"
```

- [ ] **Step 10: Push**

```bash
git push
```
