# Exercise Sidebar Filters Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add difficulty-based filtering and visual indicators to the exercise sidebar component.

**Architecture:** Modify `ExerciseSidebar.tsx` to extract difficulty filter from URL params, calculate counts per difficulty level, render filter buttons, and display filtered exercise list with difficulty color indicators.

**Tech Stack:** React, Next.js (useSearchParams, useRouter), TypeScript, Tailwind CSS

---

## File Structure

**Files to modify:**
- `src/features/exercises/presentation/components/ExerciseSidebar.tsx` — Main sidebar component
  - Add imports for URL param handling
  - Add difficulty filter logic
  - Add difficulty counts calculation
  - Add filter button section JSX
  - Update exercise list JSX with color indicators

**No new files needed** — isolated to existing sidebar component.

---

## Task 1: Add Imports and Type Definitions

**Files:**
- Modify: `src/features/exercises/presentation/components/ExerciseSidebar.tsx:1-20`

- [ ] **Step 1: Add useSearchParams and useRouter imports**

Update the imports at the top of ExerciseSidebar.tsx. After the existing imports, add:

```typescript
import { useSearchParams } from 'next/navigation'
```

The file already has `useRouter` import from line 3. Current imports should look like:

```typescript
'use client'

import { Link, useRouter, usePathname } from '@/i18n/navigation'
import { useRef, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { getAllExercisesByObject, getTopicMeta } from '@/features/exercises/infrastructure/repositories/exerciseRepository'
```

- [ ] **Step 2: Add type and constant definitions after imports**

After the imports (around line 10), add these type and constant definitions:

```typescript
type Difficulty = 'beginner' | 'intermediate' | 'advanced'

const VALID_DIFFS: Difficulty[] = ['beginner', 'intermediate', 'advanced']

const DIFF_LABELS: Record<Difficulty, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

const DIFF_COLORS: Record<Difficulty, string> = {
  beginner: 'border-l-4 border-l-emerald-500',
  intermediate: 'border-l-4 border-l-yellow-500',
  advanced: 'border-l-4 border-l-red-500',
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/salem/Desktop/React/react-playground
git add src/features/exercises/presentation/components/ExerciseSidebar.tsx
git commit -m "feat(sidebar): Add imports and type definitions for difficulty filtering

- Import useSearchParams from next/navigation
- Add Difficulty type and VALID_DIFFS constant
- Add DIFF_LABELS mapping for display text
- Add DIFF_COLORS mapping for visual indicators

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 2: Add Filter State Extraction Logic

**Files:**
- Modify: `src/features/exercises/presentation/components/ExerciseSidebar.tsx:15-35`

- [ ] **Step 1: Add filter state extraction in component body**

Inside the ExerciseSidebar component function, after line 21 (`const locale = useLocale()...`), add the filter extraction logic:

```typescript
  const searchParams = useSearchParams()
  const pathname = usePathname()
  
  // Extract difficulty filter from URL params
  const rawDiff = searchParams.get('difficulty')
  const selectedDifficulty: Difficulty | null = (VALID_DIFFS as string[]).includes(rawDiff ?? '')
    ? (rawDiff as Difficulty)
    : null
```

Your component should now have this structure:

```typescript
export default function ExerciseSidebar({ objectName, currentSlug }: Props) {
  const progressMap = useSelector((state: RootState) => state.progress.exercises)
  const exercises = getAllExercisesByObject(objectName)
  const meta = getTopicMeta(objectName)
  const locale = useLocale() as 'en' | 'es'
  const activeRef = useRef<HTMLAnchorElement>(null)
  const isMounted = useRef(false)

  const searchParams = useSearchParams()
  const pathname = usePathname()
  
  // Extract difficulty filter from URL params
  const rawDiff = searchParams.get('difficulty')
  const selectedDifficulty: Difficulty | null = (VALID_DIFFS as string[]).includes(rawDiff ?? '')
    ? (rawDiff as Difficulty)
    : null

  useEffect(() => {
    // ... existing useEffect code
  }, [currentSlug])
```

- [ ] **Step 2: Add setFilter function**

After the useEffect (around line 30), add the filter setter function:

```typescript
  function setFilter(value: Difficulty | null) {
    const params = new URLSearchParams(searchParams.toString())
    if (!value) {
      params.delete('difficulty')
    } else {
      params.set('difficulty', value)
    }
    const qs = params.toString()
    router.replace(qs ? `?${qs}` : pathname, { scroll: false })
  }
```

- [ ] **Step 3: Add difficulty counts calculation**

After the setFilter function, add the counts calculation:

```typescript
  // Calculate difficulty counts
  const difficultyCounts = {
    all: exercises.length,
    beginner: exercises.filter(e => e.difficulty === 'beginner').length,
    intermediate: exercises.filter(e => e.difficulty === 'intermediate').length,
    advanced: exercises.filter(e => e.difficulty === 'advanced').length,
  }
```

- [ ] **Step 4: Add filtered exercise list logic**

Right after the difficultyCounts, add the filtered list:

```typescript
  // Filter exercises based on selected difficulty
  const filteredExercises = exercises.filter(ex =>
    selectedDifficulty === null || ex.difficulty === selectedDifficulty
  )
```

- [ ] **Step 5: Commit**

```bash
cd /Users/salem/Desktop/React/react-playground
git add src/features/exercises/presentation/components/ExerciseSidebar.tsx
git commit -m "feat(sidebar): Add filter state extraction and calculation logic

- Extract difficulty filter from URL search params
- Add setFilter() function to update URL params
- Calculate counts for each difficulty level
- Add filteredExercises based on selected difficulty

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 3: Add Filter Buttons UI Section

**Files:**
- Modify: `src/features/exercises/presentation/components/ExerciseSidebar.tsx:65-95`

- [ ] **Step 1: Locate the JSX return section**

Find the return statement and the `<aside>` element. You should see the header section starting around line 35.

- [ ] **Step 2: Add filter buttons section after the progress bar**

After the progress bar div (the one with `bg-emerald-600`), but still inside the header section, add the filter buttons. Insert this code after line 53 (after the closing `</div>` of the progress bar):

```typescript
      {/* Difficulty Filter Buttons */}
      <div className="px-4 py-2 space-y-1">
        <div className="flex flex-wrap gap-1">
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

Your header section should now look like:

```typescript
      {/* Header */}
      <div className="border-b border-zinc-800 px-4 py-3">
        <Link
          href={`/exercises/${objectName.toLowerCase()}`}
          className="font-mono text-sm font-semibold text-zinc-200 hover:text-emerald-400 transition-colors"
        >
          {objectName}
        </Link>
        <p className="mt-1 text-xs text-zinc-600">
          {completed}/{total} completed
        </p>
        <div className="mt-2 h-1 w-full rounded-full bg-zinc-800">
          <div
            className="h-1 rounded-full bg-emerald-600 transition-all"
            style={{ width: total > 0 ? `${Math.round((completed / total) * 100)}%` : '0%' }}
          />
        </div>
        
        {/* Difficulty Filter Buttons */}
        <div className="px-4 py-2 space-y-1">
          <div className="flex flex-wrap gap-1">
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
      </div>
```

Note: Adjust padding if needed. The filter buttons should visually sit within the header section.

- [ ] **Step 3: Commit**

```bash
cd /Users/salem/Desktop/React/react-playground
git add src/features/exercises/presentation/components/ExerciseSidebar.tsx
git commit -m "feat(sidebar): Add difficulty filter buttons with counts

- Add filter button group after progress bar
- Display All, Beginner (count), Intermediate (count), Advanced (count)
- Active button highlighted in emerald
- Clicking button updates difficulty filter in URL

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 4: Update Exercise List with Color Indicators

**Files:**
- Modify: `src/features/exercises/presentation/components/ExerciseSidebar.tsx:67-96`

- [ ] **Step 1: Replace exercises map with filteredExercises**

Find the `<nav>` section where exercises are mapped (around line 67). Change from:

```typescript
      {/* List */}
      <nav aria-label="Exercise list" className="flex-1 overflow-y-auto py-2">
        {exercises.map((ex) => {
```

To:

```typescript
      {/* List */}
      <nav aria-label="Exercise list" className="flex-1 overflow-y-auto py-2">
        {filteredExercises.map((ex) => {
```

- [ ] **Step 2: Add color indicator and adjust padding**

Inside the Link element (around line 72), update the className to add the left border and adjust padding. Change from:

```typescript
              className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                isActive
                  ? 'bg-zinc-800 text-zinc-100'
                  : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300'
              }`}
```

To:

```typescript
              className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${DIFF_COLORS[ex.difficulty]} ${
                isActive
                  ? 'bg-zinc-800 text-zinc-100'
                  : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300'
              }`}
```

Your Link element should now look like:

```typescript
            <Link
              key={ex.slug}
              href={`/exercises/${objectName.toLowerCase()}/${ex.slug}`}
              ref={isActive ? activeRef : null}
              aria-current={isActive ? 'page' : undefined}
              className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${DIFF_COLORS[ex.difficulty]} ${
                isActive
                  ? 'bg-zinc-800 text-zinc-100'
                  : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300'
              }`}
            >
```

- [ ] **Step 3: Add "no exercises" message for filtered results**

After the closing `</nav>` tag (around line 96), add a message when there are no filtered exercises:

```typescript
        {filteredExercises.length === 0 && (
          <div className="px-4 py-3 text-xs text-zinc-500">
            No exercises at this difficulty level
          </div>
        )}
```

Your nav section should now look like:

```typescript
      {/* List */}
      <nav aria-label="Exercise list" className="flex-1 overflow-y-auto py-2">
        {filteredExercises.map((ex) => {
          const status = progressMap[ex.slug]?.status ?? 'not-started'
          const isActive = ex.slug === currentSlug
          return (
            <Link
              key={ex.slug}
              href={`/exercises/${objectName.toLowerCase()}/${ex.slug}`}
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
      </nav>

      {filteredExercises.length === 0 && (
        <div className="px-4 py-3 text-xs text-zinc-500">
          No exercises at this difficulty level
        </div>
      )}
```

- [ ] **Step 4: Commit**

```bash
cd /Users/salem/Desktop/React/react-playground
git add src/features/exercises/presentation/components/ExerciseSidebar.tsx
git commit -m "feat(sidebar): Add difficulty color indicators and filtering

- Use filteredExercises instead of all exercises
- Add color-coded left border to each exercise (green/yellow/red)
- Show message when filter results in no exercises
- Adjust padding to accommodate left border indicator

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 5: Build and Test

**Files:**
- Test: `src/features/exercises/presentation/components/ExerciseSidebar.tsx` (manual testing)

- [ ] **Step 1: Build the project**

```bash
cd /Users/salem/Desktop/React/react-playground
pnpm build
```

Expected: Build completes successfully with no TypeScript errors.

- [ ] **Step 2: Manual testing in browser**

1. Navigate to any exercise (e.g., `http://localhost:3000/en/exercises/Array/array-constructor-empty`)
2. Look at the left sidebar
3. **Verify filter buttons appear** below the progress bar:
   - Should see: "All", "Beginner (X)", "Intermediate (X)", "Advanced (X)"
   - "All" should be highlighted initially
4. **Verify color indicators** on exercise list items:
   - Look for colored left borders on each exercise
   - Green = Beginner, Yellow = Intermediate, Red = Advanced
5. **Test filtering:**
   - Click "Beginner" button
   - Only beginner exercises should show
   - URL should change to include `?difficulty=beginner`
   - Button should be highlighted
   - Counts should be accurate
6. **Test "All" button:**
   - Click "All" button
   - All exercises should show again
   - URL should have no difficulty param
7. **Test persistence:**
   - Click different exercise while filtered
   - Filter should remain active
   - URL should still have `?difficulty=beginner`

- [ ] **Step 3: Edge case testing**

Test these scenarios:

1. **Single difficulty level:** If a topic has only Beginner exercises, all buttons should still display with correct counts (0, 5, 0)
2. **Empty result:** If somehow a filter has no exercises, message should display
3. **Mobile view:** Ensure buttons wrap and don't break layout
4. **URL back button:** Navigate with filter, go to another page, press back—filter should be restored

- [ ] **Step 4: Commit if all tests pass**

```bash
cd /Users/salem/Desktop/React/react-playground
git add -A
git commit -m "test: Verify exercise sidebar filtering works correctly

Tested:
- Filter buttons display with correct counts
- Color indicators visible on all exercises
- Filtering works for all difficulty levels
- URL state persists correctly
- Empty filter message shows when needed
- Mobile layout intact
- Back button preserves filter state

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Summary

This plan implements difficulty-based filtering for the exercise sidebar in 5 focused tasks:

1. **Imports & Types** — Add necessary imports and TypeScript types
2. **Filter Logic** — Extract filter state from URL and calculate counts
3. **Filter UI** — Add filter buttons with counts below progress bar
4. **Visual Indicators** — Add color-coded left borders to exercises
5. **Testing** — Build and test all functionality

All changes are isolated to `ExerciseSidebar.tsx`. No new files, no breaking changes. Each task is self-contained and commits independently.

**Estimated time:** 30-45 minutes for a human dev
**Complexity:** Low
**Risk:** Low (isolated component)
