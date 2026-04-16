# Filtering & Search Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a global command-palette search modal (navbar icon + Cmd+K) and persist ExerciseListView filters in the URL.

**Architecture:** Two independent changes — (1) a new `src/features/search/` feature with a `useExerciseSearch` hook and a `SearchModal` portal component wired into the Navbar, and (2) a surgical migration of `ExerciseListView` from `useState` to `useSearchParams` + `router.replace()` for URL-based filter persistence.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, no new dependencies.

---

## File Map

| Action | File |
|---|---|
| Create | `src/features/search/presentation/hooks/useExerciseSearch.ts` |
| Create | `src/features/search/presentation/components/SearchModal.tsx` |
| Modify | `src/shared/components/Navbar.tsx` |
| Modify | `src/features/exercises/presentation/components/ExerciseListView.tsx` |
| Modify | `src/app/exercises/[object]/page.tsx` |

---

## Task 1: URL params for ExerciseListView

Migrate difficulty and status filter chips from local `useState` to URL query params using `useSearchParams` and `router.replace()`. Also wrap `ExerciseListView` in `<Suspense>` in its parent page (required by Next.js when `useSearchParams` is used in a child component).

**Files:**
- Modify: `src/features/exercises/presentation/components/ExerciseListView.tsx`
- Modify: `src/app/exercises/[object]/page.tsx`

- [ ] **Step 1: Replace ExerciseListView with URL-params version**

Replace the entire file content of `src/features/exercises/presentation/components/ExerciseListView.tsx`:

```tsx
'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { getAllExercisesByObject } from '@/features/exercises/infrastructure/repositories/exerciseRepository'
import type { Difficulty } from '@/shared/types/exercises'

type StatusFilter = 'all' | 'not-started' | 'attempted' | 'completed'

const VALID_DIFFS: Difficulty[] = ['beginner', 'intermediate', 'advanced']
const VALID_STATUSES = ['not-started', 'attempted', 'completed'] as const

const DIFF_LABELS: Record<Difficulty, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

const STATUS_LABELS: Record<StatusFilter, string> = {
  all: 'All',
  'not-started': 'Not Started',
  attempted: 'Attempted',
  completed: 'Completed',
}

interface Props {
  objectName: string
}

export default function ExerciseListView({ objectName }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const progressMap = useSelector((state: RootState) => state.progress.exercises)

  const rawDiff = searchParams.get('difficulty')
  const rawStatus = searchParams.get('status')

  const diffFilter: Difficulty | 'all' = VALID_DIFFS.includes(rawDiff as Difficulty)
    ? (rawDiff as Difficulty)
    : 'all'
  const statusFilter: StatusFilter = (VALID_STATUSES as readonly string[]).includes(rawStatus ?? '')
    ? (rawStatus as StatusFilter)
    : 'all'

  function setDiffFilter(d: Difficulty | 'all') {
    const params = new URLSearchParams(searchParams.toString())
    if (d === 'all') params.delete('difficulty')
    else params.set('difficulty', d)
    router.replace(`?${params.toString()}`)
  }

  function setStatusFilter(s: StatusFilter) {
    const params = new URLSearchParams(searchParams.toString())
    if (s === 'all') params.delete('status')
    else params.set('status', s)
    router.replace(`?${params.toString()}`)
  }

  const exercises = getAllExercisesByObject(objectName)
  const displayName = exercises[0]?.builtIn ?? objectName
  const completed = exercises.filter((e) => progressMap[e.slug]?.status === 'completed').length
  const total = exercises.length
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0

  const filtered = exercises.filter((ex) => {
    const matchDiff = diffFilter === 'all' || ex.difficulty === diffFilter
    const matchStatus =
      statusFilter === 'all' || (progressMap[ex.slug]?.status ?? 'not-started') === statusFilter
    return matchDiff && matchStatus
  })

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-8 text-zinc-100">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <section className="space-y-3">
          <Link
            href="/"
            className="font-mono text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            ← Home
          </Link>
          <h1 className="text-3xl font-bold text-zinc-100">{displayName}</h1>
          <div className="space-y-1">
            <div className="h-2 w-full rounded-full bg-zinc-800">
              <div
                className="h-2 rounded-full bg-emerald-600 transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="text-xs text-zinc-500">
              {completed} / {total} completed ({pct}%)
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDiffFilter(d)}
                aria-pressed={diffFilter === d}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  diffFilter === d
                    ? 'bg-emerald-700 text-white'
                    : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
                }`}
              >
                {d === 'all' ? 'All Difficulties' : DIFF_LABELS[d]}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {(['all', 'not-started', 'attempted', 'completed'] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatusFilter(s)}
                aria-pressed={statusFilter === s}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  statusFilter === s
                    ? 'bg-zinc-600 text-white'
                    : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
                }`}
              >
                {STATUS_LABELS[s]}
              </button>
            ))}
          </div>
        </section>

        {/* Exercise list */}
        <section>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Exercises ({filtered.length})
          </h2>
          <ul className="space-y-2">
            {filtered.map((ex) => {
              const status = progressMap[ex.slug]?.status ?? 'not-started'
              return (
                <li key={ex.slug}>
                  <Link
                    href={`/exercises/${objectName.toLowerCase()}/${ex.slug}`}
                    className={`flex items-center justify-between rounded-lg border px-4 py-3 transition-colors ${
                      status === 'completed'
                        ? 'border-emerald-800/50 bg-emerald-950/20 hover:border-emerald-700'
                        : status === 'attempted'
                          ? 'border-yellow-800/40 bg-yellow-950/10 hover:border-yellow-700/50'
                          : 'border-zinc-800 bg-zinc-900 hover:border-zinc-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm">
                        {status === 'completed' ? (
                          <span className="text-emerald-500">✓</span>
                        ) : status === 'attempted' ? (
                          <span className="text-yellow-500">▶</span>
                        ) : (
                          <span className="text-zinc-700">○</span>
                        )}
                      </span>
                      <span className="text-sm text-zinc-200">{ex.title}</span>
                    </div>
                    <span
                      className={`text-xs ${
                        ex.difficulty === 'beginner'
                          ? 'text-emerald-500'
                          : ex.difficulty === 'intermediate'
                            ? 'text-yellow-500'
                            : 'text-red-500'
                      }`}
                    >
                      {DIFF_LABELS[ex.difficulty]}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
          {filtered.length === 0 && (
            <p className="text-sm text-zinc-600">No exercises match these filters.</p>
          )}
        </section>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Wrap ExerciseListView in Suspense in the page**

Replace the entire content of `src/app/exercises/[object]/page.tsx`:

```tsx
import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { getAllExercisesByObject } from '@/features/exercises/infrastructure/repositories/exerciseRepository'
import ExerciseListView from '@/features/exercises/presentation/components/ExerciseListView'

interface Props {
  params: Promise<{ object: string }>
}

export default async function ExerciseListPage({ params }: Props) {
  const { object } = await params
  const exercises = getAllExercisesByObject(object)
  if (exercises.length === 0) notFound()
  return (
    <Suspense fallback={null}>
      <ExerciseListView objectName={object} />
    </Suspense>
  )
}
```

- [ ] **Step 3: Verify type check passes**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/features/exercises/presentation/components/ExerciseListView.tsx \
        src/app/exercises/[object]/page.tsx
git commit -m "feat: persist exercise filters in URL params"
```

---

## Task 2: useExerciseSearch hook

Create the search hook that filters `allExercises` by query string.

**Files:**
- Create: `src/features/search/presentation/hooks/useExerciseSearch.ts`

- [ ] **Step 1: Create the hook file**

Create `src/features/search/presentation/hooks/useExerciseSearch.ts`:

```ts
import { useMemo } from 'react'
import { allExercises } from '@/features/exercises/infrastructure/data'
import type { Exercise } from '@/shared/types/exercises'

const MAX_RESULTS = 8

export function useExerciseSearch(query: string): Exercise[] {
  return useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return allExercises.slice(0, MAX_RESULTS)
    return allExercises
      .filter(
        (ex) =>
          ex.title.toLowerCase().includes(q) ||
          ex.builtIn.toLowerCase().includes(q),
      )
      .slice(0, MAX_RESULTS)
  }, [query])
}
```

- [ ] **Step 2: Verify type check passes**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/search/presentation/hooks/useExerciseSearch.ts
git commit -m "feat: add useExerciseSearch hook"
```

---

## Task 3: SearchModal component

Create the command-palette modal. Renders as a portal over the full page. Handles keyboard navigation (↑↓ arrows, Enter to select, Escape to close) and backdrop click to close.

**Files:**
- Create: `src/features/search/presentation/components/SearchModal.tsx`

- [ ] **Step 1: Create the component**

Create `src/features/search/presentation/components/SearchModal.tsx`:

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'
import { useExerciseSearch } from '../hooks/useExerciseSearch'
import type { Exercise } from '@/shared/types/exercises'

interface Props {
  open: boolean
  onClose: () => void
}

export function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const results = useExerciseSearch(query)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
      // Delay focus until portal renders
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [open])

  function handleSelect(ex: Exercise) {
    router.push(`/exercises/${ex.builtIn.toLowerCase()}/${ex.slug}`)
    onClose()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      const ex = results[activeIndex]
      if (ex) handleSelect(ex)
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!open || !mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-24 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-xl border border-zinc-700 bg-zinc-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Input row */}
        <div className="flex items-center gap-3 border-b border-zinc-800 px-4 py-3">
          <span className="text-lg text-zinc-500">⌕</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActiveIndex(0)
            }}
            placeholder="Buscar ejercicios..."
            className="flex-1 bg-transparent text-sm text-zinc-100 placeholder-zinc-600 outline-none"
          />
          <kbd className="rounded border border-zinc-700 px-1.5 py-0.5 font-mono text-xs text-zinc-600">
            Esc
          </kbd>
        </div>

        {/* Results */}
        <ul className="max-h-80 overflow-y-auto py-2">
          {results.length === 0 && query.trim() ? (
            <li className="px-4 py-3 text-sm text-zinc-500">
              No se encontraron ejercicios para «{query.trim()}»
            </li>
          ) : (
            results.map((ex, i) => (
              <li key={ex.slug}>
                <button
                  type="button"
                  onClick={() => handleSelect(ex)}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                    i === activeIndex ? 'bg-zinc-800' : 'hover:bg-zinc-800/50'
                  }`}
                >
                  <span className="text-zinc-200">
                    <span className="text-zinc-500">{ex.builtIn} › </span>
                    {ex.title}
                  </span>
                  <span
                    className={`ml-4 shrink-0 text-xs ${
                      ex.difficulty === 'beginner'
                        ? 'text-emerald-500'
                        : ex.difficulty === 'intermediate'
                          ? 'text-yellow-500'
                          : 'text-red-500'
                    }`}
                  >
                    {ex.difficulty}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>,
    document.body,
  )
}
```

- [ ] **Step 2: Verify type check passes**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/search/presentation/components/SearchModal.tsx
git commit -m "feat: add SearchModal command-palette component"
```

---

## Task 4: Wire Navbar — search icon + Cmd+K + SearchModal

Add a search button to the Navbar that opens `SearchModal`. Also register a `keydown` listener for `Cmd+K` / `Ctrl+K`.

**Files:**
- Modify: `src/shared/components/Navbar.tsx`

- [ ] **Step 1: Replace Navbar with search-wired version**

Replace the entire content of `src/shared/components/Navbar.tsx`:

```tsx
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GamificationBar } from '@/features/gamification/presentation/components/GamificationBar'
import { SearchModal } from '@/features/search/presentation/components/SearchModal'

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 h-12 shrink-0 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          JS Built-ins
        </Link>
        <nav aria-label="Site navigation">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <GamificationBar />
            </div>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search exercises"
              className="flex items-center gap-1.5 rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              <span className="text-base leading-none">⌕</span>
              <span className="hidden sm:inline">Buscar</span>
              <kbd className="hidden sm:inline rounded border border-zinc-700 px-1 py-0.5 font-mono text-[10px] text-zinc-600">
                ⌘K
              </kbd>
            </button>
            <Link
              href="/stats"
              className="rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              Stats →
            </Link>
          </div>
        </nav>
      </div>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
```

- [ ] **Step 2: Verify type check passes**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Full build verification**

```bash
npm run build
```

Expected: clean build, no errors.

- [ ] **Step 4: Commit**

```bash
git add src/shared/components/Navbar.tsx
git commit -m "feat: wire search modal into navbar with Cmd+K shortcut"
```
