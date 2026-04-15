# UI Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the mixed warm-beige/dark UI with a consistent dark Codewars-style theme throughout, adding search/filter on home, visual progress bars, ⌘+Enter keyboard shortcut, next/prev exercise navigation, improved sidebar, and a stats page.

**Architecture:** Four self-contained tasks, each committed independently. No new dependencies — all changes use existing React, Redux, Tailwind, Next.js. All progress data stays in localStorage via Redux. No server-side changes except the new `/stats` page (which is still a pure client component).

**Tech Stack:** Next.js 16 App Router, React 19, Redux Toolkit, Tailwind v4, TypeScript, pnpm

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/shared/components/Navbar.tsx` | **Create** | Global top navbar with progress counter + Stats link |
| `src/app/layout.tsx` | **Modify** | Add `<Navbar />` inside StoreProvider, darken body |
| `src/features/home/presentation/components/HomeView.tsx` | **Modify** | Full dark redesign with search, filter chips, progress cards |
| `src/features/exercises/presentation/components/ExerciseListView.tsx` | **Modify** | Filter chips (difficulty + status), progress bar header |
| `src/features/exercises/presentation/components/ExerciseSidebar.tsx` | **Modify** | Better icons (✓/▶/○), category (X/Y) counts, scroll-to-active |
| `src/features/exercises/presentation/components/ExerciseDetailView.tsx` | **Modify** | Change `h-screen` → `h-[calc(100vh-3rem)]` to account for navbar |
| `src/features/exercises/presentation/hooks/useExerciseNavigation.ts` | **Create** | Derives prev/next slugs + "N of M" from exercise list |
| `src/features/exercises/presentation/components/ExerciseRunner.tsx` | **Modify** | ⌘+Enter shortcut, prev/next buttons, "N of M" counter |
| `src/features/exercises/presentation/components/TestPanel.tsx` | **Modify** | Test numbering, copy error button, all-pass banner, auto-scroll |
| `src/app/stats/page.tsx` | **Create** | Stats page (overall %, per-object progress bars, recently completed) |

---

## Task 1: Navbar + Home Redesign

**Files:**
- Create: `src/shared/components/Navbar.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/features/home/presentation/components/HomeView.tsx`

- [ ] **Step 1: Create `Navbar.tsx`**

Create `src/shared/components/Navbar.tsx`:

```tsx
'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { allExercises } from '@/features/exercises/infrastructure/data'

const TOTAL = allExercises.length

export function Navbar() {
  const progressMap = useSelector((state: RootState) => state.progress.exercises)
  const completed = allExercises.filter(
    (e) => progressMap[e.slug]?.status === 'completed',
  ).length
  const pct = TOTAL > 0 ? Math.round((completed / TOTAL) * 100) : 0

  return (
    <header className="sticky top-0 z-50 h-12 shrink-0 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          JS Built-ins
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden text-xs text-zinc-500 sm:block">
            {completed} / {TOTAL} completed ({pct}%)
          </span>
          <Link
            href="/stats"
            className="rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
          >
            Stats →
          </Link>
        </div>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Update `layout.tsx`**

Replace the entire file:

```tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { StoreProvider } from '@/shared/providers/StoreProvider'
import { Navbar } from '@/shared/components/Navbar'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'JS Practice — Built-in Objects',
  description:
    'Interactive JavaScript/TypeScript exercises for every standard built-in object method, inspired by Codewars.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
```

- [ ] **Step 3: Rewrite `HomeView.tsx`**

Replace the entire file content:

```tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { allExercises } from '@/features/exercises/infrastructure/data'
import { getAvailableObjects } from '@/features/exercises/infrastructure/repositories/exerciseRepository'

const OBJECT_GROUPS: Record<string, string[]> = {
  Fundamentals: ['Array', 'String', 'Object', 'Number', 'Boolean', 'BigInt', 'Symbol', 'Math'],
  Collections: ['Map', 'Set', 'WeakMap', 'WeakSet'],
  Errors: ['Error', 'TypeError', 'RangeError', 'SyntaxError', 'ReferenceError', 'AggregateError'],
  'Async & Gen': ['Promise', 'Generator', 'Iterator', 'AsyncFunction'],
  Buffers: ['ArrayBuffer', 'SharedArrayBuffer', 'DataView', 'TypedArray', 'Atomics'],
  'Intl & Global': ['Intl', 'GlobalFunctions', 'globalThis', 'structuredClone'],
  Reflection: ['Proxy', 'Reflect', 'Function'],
  Other: ['WeakRef', 'FinalizationRegistry', 'Date', 'RegExp', 'JSON'],
}

// Pre-compute total exercises per built-in object (static, never changes)
const EXERCISE_COUNTS: Record<string, number> = {}
const EXERCISE_SLUGS: Record<string, string[]> = {}
for (const ex of allExercises) {
  EXERCISE_COUNTS[ex.builtIn] = (EXERCISE_COUNTS[ex.builtIn] ?? 0) + 1
  if (!EXERCISE_SLUGS[ex.builtIn]) EXERCISE_SLUGS[ex.builtIn] = []
  EXERCISE_SLUGS[ex.builtIn].push(ex.slug)
}

export default function HomeView() {
  const [search, setSearch] = useState('')
  const [activeGroup, setActiveGroup] = useState('All')
  const progressMap = useSelector((state: RootState) => state.progress.exercises)

  const objects = getAvailableObjects()

  const filtered = objects.filter((obj) => {
    const matchesSearch = obj.toLowerCase().includes(search.toLowerCase())
    const matchesGroup =
      activeGroup === 'All' || (OBJECT_GROUPS[activeGroup]?.includes(obj) ?? false)
    return matchesSearch && matchesGroup
  })

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-100">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Hero */}
        <section className="space-y-3">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-500">
            JavaScript Practice
          </p>
          <h1 className="text-4xl font-bold leading-tight text-zinc-100 sm:text-5xl">
            Master the Standard
            <br />
            Built-in Objects
          </h1>
          <p className="max-w-2xl text-base leading-8 text-zinc-400">
            {allExercises.length}+ interactive TypeScript exercises for every constructor, static
            method, instance method, and property — inspired by Codewars and Codility.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {['Monaco Editor', 'In-browser tests', 'TypeScript', 'Progress tracking'].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-600"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </section>

        {/* Search + filter */}
        <section className="space-y-3">
          <input
            type="search"
            placeholder="Search objects…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-sm rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 placeholder-zinc-600 outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
          />
          <div className="flex flex-wrap gap-2">
            {['All', ...Object.keys(OBJECT_GROUPS)].map((group) => (
              <button
                key={group}
                onClick={() => setActiveGroup(group)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeGroup === group
                    ? 'bg-emerald-700 text-white'
                    : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </section>

        {/* Objects grid */}
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Built-in Objects ({filtered.length})
          </h2>
          {filtered.length === 0 ? (
            <p className="text-sm text-zinc-600">No objects match &ldquo;{search}&rdquo;</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filtered.map((obj) => {
                const total = EXERCISE_COUNTS[obj] ?? 0
                const slugs = EXERCISE_SLUGS[obj] ?? []
                const completed = slugs.filter(
                  (s) => progressMap[s]?.status === 'completed',
                ).length
                const pct = total > 0 ? Math.round((completed / total) * 100) : 0
                const isDone = completed === total && total > 0
                return (
                  <Link
                    key={obj}
                    href={`/exercises/${obj.toLowerCase()}`}
                    className={`rounded-xl border p-5 transition-colors ${
                      isDone
                        ? 'border-emerald-800/60 bg-emerald-950/30 hover:border-emerald-700'
                        : 'border-zinc-800 bg-zinc-900 hover:border-zinc-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <code className="text-base font-semibold text-zinc-200">{obj}</code>
                      {isDone && <span className="text-emerald-400 text-sm">✓</span>}
                    </div>
                    <div className="mt-3 h-1 w-full rounded-full bg-zinc-800">
                      <div
                        className="h-1 rounded-full bg-emerald-600 transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-zinc-600">
                      {completed}/{total}
                    </p>
                  </Link>
                )
              })}
            </div>
          )}
        </section>

        {/* Redux demos – de-emphasized */}
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-700">
            Redux Architecture Examples
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/redux-legacy"
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-colors hover:border-zinc-700"
            >
              <p className="text-xs uppercase tracking-widest text-zinc-600">Página 01</p>
              <h3 className="mt-2 font-semibold text-zinc-300">Redux legacy</h3>
              <p className="mt-1 text-xs text-zinc-600">
                Action types, action creators, reducer manual y legacy_createStore.
              </p>
            </Link>
            <Link
              href="/redux-toolkit"
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-colors hover:border-zinc-700"
            >
              <p className="text-xs uppercase tracking-widest text-zinc-600">Página 02</p>
              <h3 className="mt-2 font-semibold text-zinc-300">Redux Toolkit</h3>
              <p className="mt-1 text-xs text-zinc-600">
                configureStore, slice, selectors memoizados y thunk.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
```

- [ ] **Step 4: Verify it builds**

```bash
cd /path/to/project && pnpm build 2>&1 | tail -20
```

Expected: no TypeScript errors, build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/shared/components/Navbar.tsx src/app/layout.tsx src/features/home/presentation/components/HomeView.tsx
git commit -m "feat(ui): navbar + dark home redesign with search and filter chips

- Add global Navbar with progress counter (X/N, %) and Stats link
- Home: dark zinc-950 theme, hero, search input, filter chip groups
- Home cards: mini progress bar + X/Y completed count per object
- Layout: Navbar added inside StoreProvider; body bg-zinc-950

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 2: Exercise List + Sidebar Improvements

**Files:**
- Modify: `src/features/exercises/presentation/components/ExerciseListView.tsx`
- Modify: `src/features/exercises/presentation/components/ExerciseSidebar.tsx`
- Modify: `src/features/exercises/presentation/components/ExerciseDetailView.tsx`

- [ ] **Step 1: Rewrite `ExerciseListView.tsx`**

Replace the entire file:

```tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { ExerciseCard } from './ExerciseCard'
import type { Exercise, ExerciseCategory, Difficulty } from '@/shared/types/exercises'

const CATEGORY_LABELS: Record<ExerciseCategory, string> = {
  constructor: 'Constructor',
  'static-property': 'Static Properties',
  'static-method': 'Static Methods',
  'instance-method': 'Instance Methods',
  'instance-property': 'Instance Properties',
  inheritance: 'Inheritance',
}

type FilterDifficulty = 'all' | Difficulty
type FilterStatus = 'all' | 'done' | 'todo'

interface ExerciseListViewProps {
  objectName: string
  exercises: Exercise[]
}

export function ExerciseListView({ objectName, exercises }: ExerciseListViewProps) {
  const progressMap = useSelector((state: RootState) => state.progress.exercises)
  const [diffFilter, setDiffFilter] = useState<FilterDifficulty>('all')
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all')

  const completedCount = exercises.filter(
    (e) => progressMap[e.slug]?.status === 'completed',
  ).length
  const totalCount = exercises.length
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  const filtered = exercises.filter((e) => {
    const diffOk = diffFilter === 'all' || e.difficulty === diffFilter
    const statusOk =
      statusFilter === 'all' ||
      (statusFilter === 'done' && progressMap[e.slug]?.status === 'completed') ||
      (statusFilter === 'todo' && progressMap[e.slug]?.status !== 'completed')
    return diffOk && statusOk
  })

  const grouped = filtered.reduce<Partial<Record<ExerciseCategory, Exercise[]>>>(
    (acc, ex) => {
      if (!acc[ex.category]) acc[ex.category] = []
      acc[ex.category]!.push(ex)
      return acc
    },
    {},
  )

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-6 inline-block text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          ← Home
        </Link>

        {/* Header + progress bar */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            <code className="text-emerald-400">{objectName}</code>
          </h1>
          <div className="mt-3 flex items-center gap-4">
            <div className="h-2 w-56 rounded-full bg-zinc-800">
              <div
                className="h-2 rounded-full bg-emerald-600 transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-sm text-zinc-400">
              {completedCount}/{totalCount} completed
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDiffFilter(d)}
              className={`rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors ${
                diffFilter === d
                  ? 'bg-emerald-700 text-white'
                  : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
              }`}
            >
              {d === 'all' ? 'All' : d}
            </button>
          ))}
          <span className="text-zinc-700">·</span>
          {(
            [
              ['all', 'All status'],
              ['done', '✓ Done'],
              ['todo', '○ Todo'],
            ] as const
          ).map(([val, label]) => (
            <button
              key={val}
              onClick={() => setStatusFilter(val)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                statusFilter === val
                  ? 'bg-zinc-600 text-white'
                  : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grouped exercise cards */}
        {Object.keys(grouped).length === 0 ? (
          <p className="text-sm text-zinc-600">No exercises match the current filters.</p>
        ) : (
          <div className="space-y-10">
            {(Object.entries(grouped) as [ExerciseCategory, Exercise[]][]).map(
              ([cat, items]) => (
                <section key={cat}>
                  <h2 className="mb-4 flex items-baseline gap-2 text-lg font-semibold text-zinc-300">
                    {CATEGORY_LABELS[cat]}
                    <span className="text-sm font-normal text-zinc-600">({items.length})</span>
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((ex) => (
                      <ExerciseCard
                        key={ex.slug}
                        exercise={ex}
                        objectName={objectName.toLowerCase()}
                      />
                    ))}
                  </div>
                </section>
              ),
            )}
          </div>
        )}
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Rewrite `ExerciseSidebar.tsx`**

Replace the entire file:

```tsx
'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import type { Exercise, ExerciseCategory } from '@/shared/types/exercises'

const CATEGORY_LABELS: Record<ExerciseCategory, string> = {
  constructor: 'Constructor',
  'static-property': 'Static Properties',
  'static-method': 'Static Methods',
  'instance-method': 'Instance Methods',
  'instance-property': 'Instance Properties',
  inheritance: 'Inheritance',
}

interface ExerciseSidebarProps {
  exercises: Exercise[]
  activeSlug: string
  objectName: string
}

export function ExerciseSidebar({ exercises, activeSlug, objectName }: ExerciseSidebarProps) {
  const progressMap = useSelector((state: RootState) => state.progress.exercises)
  const activeRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest' })
  }, [activeSlug])

  const grouped = exercises.reduce<Partial<Record<ExerciseCategory, Exercise[]>>>(
    (acc, ex) => {
      if (!acc[ex.category]) acc[ex.category] = []
      acc[ex.category]!.push(ex)
      return acc
    },
    {},
  )

  return (
    <nav className="w-56 shrink-0 overflow-y-auto border-r border-zinc-700 bg-zinc-900 p-4">
      <Link
        href={`/exercises/${objectName}`}
        className="mb-5 block text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        ← {objectName}
      </Link>

      {(Object.entries(grouped) as [ExerciseCategory, Exercise[]][]).map(([cat, items]) => {
        const completedInCat = items.filter(
          (ex) => progressMap[ex.slug]?.status === 'completed',
        ).length

        return (
          <div key={cat} className="mb-5">
            <p className="mb-1 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-600">
              <span>{CATEGORY_LABELS[cat]}</span>
              <span className="font-normal normal-case tracking-normal text-zinc-700">
                {completedInCat}/{items.length}
              </span>
            </p>
            <ul className="space-y-0.5">
              {items.map((ex) => {
                const prog = progressMap[ex.slug]
                const isActive = ex.slug === activeSlug
                const isCompleted = prog?.status === 'completed'

                let icon = '○'
                let iconClass = 'text-zinc-600'
                if (isCompleted) {
                  icon = '✓'
                  iconClass = 'text-emerald-400'
                } else if (isActive) {
                  icon = '▶'
                  iconClass = 'text-white'
                }

                return (
                  <li key={ex.slug}>
                    <Link
                      ref={isActive ? activeRef : null}
                      href={`/exercises/${objectName}/${ex.slug}`}
                      className={`flex items-center gap-2 rounded px-2 py-1.5 text-sm transition-colors ${
                        isActive
                          ? 'bg-zinc-700 text-white'
                          : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
                      }`}
                    >
                      <span className={`text-xs ${iconClass}`}>{icon}</span>
                      <span className="truncate">{ex.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </nav>
  )
}
```

- [ ] **Step 3: Fix `ExerciseDetailView.tsx` height for navbar**

In `src/features/exercises/presentation/components/ExerciseDetailView.tsx`, change the outer div class from `flex h-screen overflow-hidden` to `flex h-[calc(100vh-3rem)] overflow-hidden`:

```tsx
// Line to find:
<div className="flex h-screen overflow-hidden bg-zinc-950 text-zinc-100">

// Replace with:
<div className="flex h-[calc(100vh-3rem)] overflow-hidden bg-zinc-950 text-zinc-100">
```

- [ ] **Step 4: Verify build**

```bash
pnpm build 2>&1 | tail -20
```

Expected: build succeeds, no TypeScript errors.

- [ ] **Step 5: Commit**

```bash
git add src/features/exercises/presentation/components/ExerciseListView.tsx \
        src/features/exercises/presentation/components/ExerciseSidebar.tsx \
        src/features/exercises/presentation/components/ExerciseDetailView.tsx
git commit -m "feat(ui): exercise list filters, sidebar improvements, detail height fix

- ExerciseListView: difficulty + status filter chips, progress bar header, category counts
- ExerciseSidebar: icons ✓/▶/○, category X/Y counts, scroll-to-active on mount
- ExerciseDetailView: h-[calc(100vh-3rem)] to account for sticky navbar

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 3: Exercise Runner + TestPanel Improvements

**Files:**
- Create: `src/features/exercises/presentation/hooks/useExerciseNavigation.ts`
- Modify: `src/features/exercises/presentation/components/ExerciseRunner.tsx`
- Modify: `src/features/exercises/presentation/components/TestPanel.tsx`

- [ ] **Step 1: Create `useExerciseNavigation.ts`**

Create `src/features/exercises/presentation/hooks/useExerciseNavigation.ts`:

```ts
import { useMemo } from 'react'
import { getAllExercisesByObject } from '../../infrastructure/repositories/exerciseRepository'
import type { Exercise } from '@/shared/types/exercises'

interface UseExerciseNavigationResult {
  prevSlug: string | null
  nextSlug: string | null
  currentIndex: number  // 1-based
  total: number
}

export function useExerciseNavigation(exercise: Exercise): UseExerciseNavigationResult {
  const objectName = exercise.builtIn.toLowerCase()

  const allObjectExercises = useMemo(
    () => getAllExercisesByObject(objectName),
    [objectName],
  )

  const idx = allObjectExercises.findIndex((e) => e.slug === exercise.slug)
  const prevSlug = idx > 0 ? allObjectExercises[idx - 1].slug : null
  const nextSlug = idx < allObjectExercises.length - 1 ? allObjectExercises[idx + 1].slug : null

  return {
    prevSlug,
    nextSlug,
    currentIndex: idx + 1,
    total: allObjectExercises.length,
  }
}
```

- [ ] **Step 2: Rewrite `ExerciseRunner.tsx`**

Replace the entire file:

```tsx
'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useExerciseRunner } from '../hooks/useExerciseRunner'
import { useExerciseNavigation } from '../hooks/useExerciseNavigation'
import { TestPanel } from './TestPanel'
import type { Exercise } from '@/shared/types/exercises'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

interface ExerciseRunnerProps {
  exercise: Exercise
}

export function ExerciseRunner({ exercise }: ExerciseRunnerProps) {
  const { code, setCode, run, reset, isRunning, runResult } = useExerciseRunner(exercise)
  const { prevSlug, nextSlug, currentIndex, total } = useExerciseNavigation(exercise)
  const objectName = exercise.builtIn.toLowerCase()

  // Use a ref so the keydown handler always calls the latest `run` without
  // being recreated on every render (avoids stale closure, no dependency array).
  const runRef = useRef(run)
  useEffect(() => {
    runRef.current = run
  })

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault()
        runRef.current()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="flex h-full flex-col">
      <div className="min-h-0 flex-1">
        <MonacoEditor
          language="typescript"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value ?? '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            padding: { top: 16, bottom: 16 },
            fontFamily: 'var(--font-geist-mono), monospace',
          }}
        />
      </div>

      <div className="flex items-center gap-2 border-t border-zinc-700 bg-zinc-900 px-4 py-3">
        {prevSlug ? (
          <Link
            href={`/exercises/${objectName}/${prevSlug}`}
            className="rounded-lg border border-zinc-600 px-3 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-400 hover:text-zinc-200"
          >
            ← Prev
          </Link>
        ) : (
          <span className="rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-700 cursor-not-allowed">
            ← Prev
          </span>
        )}

        <button
          onClick={run}
          disabled={isRunning}
          className="flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isRunning ? 'Running…' : '▶ Run Tests'}
          {!isRunning && (
            <kbd className="rounded bg-emerald-700/60 px-1 py-0.5 font-mono text-xs opacity-70">
              ⌘↵
            </kbd>
          )}
        </button>

        <button
          onClick={reset}
          className="rounded-lg border border-zinc-600 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-400 hover:text-zinc-200"
        >
          Reset
        </button>

        {nextSlug ? (
          <Link
            href={`/exercises/${objectName}/${nextSlug}`}
            className="rounded-lg border border-zinc-600 px-3 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-400 hover:text-zinc-200"
          >
            Next →
          </Link>
        ) : (
          <span className="rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-700 cursor-not-allowed">
            Next →
          </span>
        )}

        <span className="ml-auto font-mono text-xs text-zinc-600">
          {currentIndex} / {total}
        </span>
      </div>

      {runResult && <TestPanel result={runResult} />}
    </div>
  )
}
```

- [ ] **Step 3: Rewrite `TestPanel.tsx`**

Replace the entire file:

```tsx
'use client'

import { useEffect, useRef } from 'react'
import type { RunResult } from '@/shared/types/exercises'

interface TestPanelProps {
  result: RunResult
}

function copyToClipboard(text: string) {
  try {
    navigator.clipboard.writeText(text)
  } catch {
    // clipboard API unavailable (non-HTTPS) — silently ignore
  }
}

export function TestPanel({ result }: TestPanelProps) {
  const { results, runtimeError } = result
  const passedCount = results.filter((r) => r.passed).length
  const totalCount = results.length
  const allPassed = passedCount === totalCount && totalCount > 0

  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [result])

  if (runtimeError) {
    return (
      <div ref={panelRef} className="border-t border-red-800 bg-red-950/60 p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-red-400">⚠ Runtime Error</p>
          <button
            onClick={() => copyToClipboard(runtimeError)}
            className="text-xs text-red-700 transition-colors hover:text-red-400"
          >
            Copy
          </button>
        </div>
        <pre className="overflow-auto text-xs text-red-300">{runtimeError}</pre>
      </div>
    )
  }

  if (allPassed) {
    return (
      <div ref={panelRef} className="border-t border-emerald-700 bg-emerald-950/60 p-4">
        <p className="mb-2 text-sm font-semibold text-emerald-400">
          ✅ All {totalCount} tests passed!
        </p>
        <ul className="space-y-1">
          {results.map((r, i) => (
            <li key={i} className="flex items-center gap-2 text-xs">
              <span className="font-mono text-emerald-500">✓</span>
              <span className="font-mono text-zinc-600">#{i + 1}</span>
              <span className="text-zinc-500">{r.description}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div ref={panelRef} className="border-t border-zinc-700 bg-zinc-900/80 p-4">
      <p className="mb-3 text-sm font-semibold text-zinc-300">
        Tests:{' '}
        <span className="text-amber-400">
          {passedCount}/{totalCount} passed
        </span>
      </p>
      <ul className="space-y-2">
        {results.map((r, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span
              className={`mt-0.5 shrink-0 font-mono font-bold ${
                r.passed ? 'text-emerald-400' : 'text-red-400'
              }`}
            >
              {r.passed ? '✓' : '✗'}
            </span>
            <span className="mt-0.5 shrink-0 font-mono text-xs text-zinc-600">
              #{i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <span className="text-zinc-300">{r.description}</span>
              {r.error && (
                <div className="mt-1 flex items-start gap-2">
                  <pre className="min-w-0 flex-1 overflow-auto whitespace-pre-wrap text-xs text-red-400">
                    {r.error}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(r.error!)}
                    className="shrink-0 text-xs text-zinc-600 transition-colors hover:text-zinc-400"
                    title="Copy error"
                  >
                    Copy
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

- [ ] **Step 4: Verify build**

```bash
pnpm build 2>&1 | tail -20
```

Expected: build succeeds, no TypeScript errors.

- [ ] **Step 5: Commit**

```bash
git add src/features/exercises/presentation/hooks/useExerciseNavigation.ts \
        src/features/exercises/presentation/components/ExerciseRunner.tsx \
        src/features/exercises/presentation/components/TestPanel.tsx
git commit -m "feat(ui): keyboard shortcut, next/prev navigation, improved test panel

- ExerciseRunner: ⌘+Enter/Ctrl+Enter to run tests, Prev/Next links, N/M counter
- useExerciseNavigation: hook to derive prev/next slugs from same object's exercises
- TestPanel: test numbering (#1-#5), copy error button, all-pass banner, auto-scroll

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 4: Stats Page

**Files:**
- Create: `src/app/stats/page.tsx`

- [ ] **Step 1: Create `src/app/stats/page.tsx`**

```tsx
'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { allExercises } from '@/features/exercises/infrastructure/data'

// Pre-compute static maps (never changes at runtime)
const ALL_OBJECTS = [...new Set(allExercises.map((e) => e.builtIn))]

const OBJECT_SLUGS: Record<string, string[]> = {}
for (const ex of allExercises) {
  if (!OBJECT_SLUGS[ex.builtIn]) OBJECT_SLUGS[ex.builtIn] = []
  OBJECT_SLUGS[ex.builtIn].push(ex.slug)
}

export default function StatsPage() {
  const progressMap = useSelector((state: RootState) => state.progress.exercises)

  const totalCount = allExercises.length
  const completedCount = allExercises.filter(
    (e) => progressMap[e.slug]?.status === 'completed',
  ).length
  const totalPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  const objectStats = ALL_OBJECTS.map((obj) => {
    const slugs = OBJECT_SLUGS[obj] ?? []
    const total = slugs.length
    const completed = slugs.filter((s) => progressMap[s]?.status === 'completed').length
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0
    return { obj, completed, total, pct }
  }).sort((a, b) => b.pct - a.pct || a.obj.localeCompare(b.obj))

  const recentlyCompleted = allExercises
    .filter((e) => progressMap[e.slug]?.completedAt)
    .sort((a, b) => {
      const tA = progressMap[a.slug]!.completedAt!
      const tB = progressMap[b.slug]!.completedAt!
      return tB.localeCompare(tA)
    })
    .slice(0, 10)

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-100">
      <div className="mx-auto max-w-3xl space-y-10">
        {/* Header */}
        <div>
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Home
          </Link>
          <h1 className="mt-4 text-3xl font-bold">Your Progress</h1>
        </div>

        {/* Overall progress */}
        <section>
          <div className="flex items-center gap-4">
            <div className="h-3 flex-1 rounded-full bg-zinc-800">
              <div
                className="h-3 rounded-full bg-emerald-600 transition-all"
                style={{ width: `${totalPct}%` }}
              />
            </div>
            <span className="shrink-0 text-lg font-bold tabular-nums">
              {completedCount}{' '}
              <span className="text-base font-normal text-zinc-600">/ {totalCount}</span>
            </span>
            <span className="shrink-0 text-sm text-zinc-500">({totalPct}%)</span>
          </div>
        </section>

        {/* Per-object progress */}
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Progress by Object
          </h2>
          <div className="space-y-3">
            {objectStats.map(({ obj, completed, total, pct }) => (
              <Link
                key={obj}
                href={`/exercises/${obj.toLowerCase()}`}
                className="group flex items-center gap-4"
              >
                <code className="w-36 shrink-0 text-sm text-zinc-400 transition-colors group-hover:text-zinc-200">
                  {obj}
                </code>
                <div className="h-1.5 flex-1 rounded-full bg-zinc-800">
                  <div
                    className="h-1.5 rounded-full bg-emerald-600 transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-zinc-600">
                  {completed}/{total}
                </span>
                {completed === total && total > 0 && (
                  <span className="shrink-0 text-xs text-emerald-400">✓</span>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Recently completed */}
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Recently Completed
          </h2>
          {recentlyCompleted.length === 0 ? (
            <p className="text-sm text-zinc-600">
              No exercises completed yet.{' '}
              <Link href="/" className="text-emerald-500 transition-colors hover:text-emerald-400">
                Start with Array →
              </Link>
            </p>
          ) : (
            <ul className="space-y-2">
              {recentlyCompleted.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/exercises/${e.builtIn.toLowerCase()}/${e.slug}`}
                    className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    <span className="text-emerald-400">✓</span>
                    <span>
                      <code className="text-zinc-500">{e.builtIn}</code>
                      {' · '}
                      {e.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
pnpm build 2>&1 | tail -20
```

Expected: build succeeds, `/stats` route is listed in the build output.

- [ ] **Step 3: Commit + push + open PR**

```bash
git add src/app/stats/page.tsx
git commit -m "feat(ui): stats page with overall progress, per-object bars, recently completed

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

git push origin ui-redesign
gh pr create \
  --title "feat: UI redesign — dark theme, search/filter, nav, stats" \
  --body "## UI Redesign

Replaces the mixed warm-beige/dark UI with a consistent Codewars-style dark theme throughout.

### Changes
- **Navbar**: global sticky header with progress counter (X/N, %) and Stats link
- **Home**: dark theme, search input, group filter chips (Fundamentals/Collections/Errors/…), mini progress bar per card
- **Exercise list**: difficulty + status filter chips, visual progress bar, category item counts
- **Sidebar**: cleaner icons (✓/▶/○), category X/Y counts, scroll-to-active on mount
- **Exercise runner**: ⌘+Enter / Ctrl+Enter keyboard shortcut, Prev/Next navigation, N/M counter
- **Test panel**: numbered tests (#1–#5), copy-error button, all-pass celebration banner, auto-scroll to results
- **Stats page** (/stats): overall %, per-object progress bars sorted by completion, recently completed list

All progress data continues to live in localStorage via Redux — no backend changes." \
  --base main
```

---

## Self-Review Notes

**Spec coverage check:**
- ✅ Dark theme throughout (Task 1 layout + HomeView)
- ✅ Global Navbar (Task 1)
- ✅ Search input on home (Task 1 HomeView)
- ✅ Filter chips on home by object group (Task 1 HomeView)
- ✅ Mini progress bar per card on home (Task 1 HomeView)
- ✅ Exercise list: filter by difficulty + status (Task 2 ExerciseListView)
- ✅ Exercise list: progress bar header (Task 2 ExerciseListView)
- ✅ Exercise list: category item counts (Task 2 ExerciseListView)
- ✅ Sidebar: better icons ✓/▶/○ (Task 2 ExerciseSidebar)
- ✅ Sidebar: category X/Y counts (Task 2 ExerciseSidebar)
- ✅ Sidebar: scroll-to-active on mount (Task 2 ExerciseSidebar)
- ✅ Exercise detail: h-screen → h-[calc(100vh-3rem)] for navbar (Task 2 ExerciseDetailView)
- ✅ ⌘+Enter keyboard shortcut (Task 3 ExerciseRunner)
- ✅ Prev/Next navigation (Task 3 ExerciseRunner + useExerciseNavigation)
- ✅ Test numbering #1–#N (Task 3 TestPanel)
- ✅ Copy error button (Task 3 TestPanel)
- ✅ All-pass banner (Task 3 TestPanel)
- ✅ Auto-scroll to results (Task 3 TestPanel)
- ✅ Stats page (Task 4)
- ✅ Redux demos retained but de-emphasized (Task 1 HomeView)

**Type consistency:** All component interfaces are self-contained. `useExerciseNavigation` returns `{ prevSlug, nextSlug, currentIndex, total }` — all consumed correctly in `ExerciseRunner`. `ExerciseProgress.completedAt` is `string | undefined` — guarded with `.filter(e => progressMap[e.slug]?.completedAt)` in Stats.

**Branch note:** Create the branch `ui-redesign` before starting Task 1:
```bash
git checkout -b ui-redesign
```
