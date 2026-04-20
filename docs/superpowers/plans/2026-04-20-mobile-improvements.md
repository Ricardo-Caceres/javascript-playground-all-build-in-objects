# Mobile Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve mobile UX across Navbar (hamburger dropdown), ExerciseListView (horizontal-scroll filter chips), ExamSetup (2×2 difficulty grid), and ExamResults (responsive cards + stacked action buttons).

**Architecture:** Four independent UI-only changes. No new files, no new state management, no shared abstractions. Each task modifies a single component file. Type-check with `pnpm tsc --noEmit` after each task.

**Tech Stack:** Next.js · React · Tailwind CSS · TypeScript · next-intl

**Spec:** `docs/superpowers/specs/2026-04-20-mobile-improvements-design.md`

> **Note on testing:** This project has no component unit tests. Verification is `pnpm tsc --noEmit`. Visual verification in browser is encouraged but not required for the plan to be considered done.

---

### Task 1: Navbar hamburger dropdown

**Files:**
- Modify: `src/shared/components/Navbar.tsx`

- [ ] **Step 1: Replace Navbar.tsx with the new implementation**

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { GamificationBar } from '@/features/gamification/presentation/components/GamificationBar'
import { SearchModal } from '@/features/search/presentation/components/SearchModal'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navbar() {
  const t = useTranslations('nav')
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 h-12 shrink-0 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
        >
          {t('brand')}
        </Link>

        <nav aria-label="Site navigation">
          {/* Desktop — unchanged layout */}
          <div className="hidden items-center gap-4 sm:flex">
            <LanguageSwitcher />
            <GamificationBar />
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search exercises"
              className="flex items-center gap-1.5 rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              <span className="text-base leading-none">⌕</span>
              <span>{t('search')}</span>
              <kbd className="rounded border border-zinc-700 px-1 py-0.5 font-mono text-[10px] text-zinc-600">
                ⌘K
              </kbd>
            </button>
            <Link
              href="/exam"
              className="rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              {t('exam')}
            </Link>
            <Link
              href="/stats"
              className="rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              {t('stats')}
            </Link>
          </div>

          {/* Mobile — search icon + hamburger */}
          <div ref={menuRef} className="relative flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search exercises"
              className="flex items-center rounded border border-zinc-700 px-2 py-1 text-base text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              ⌕
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="rounded border border-zinc-700 px-2 py-1 text-sm text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              {menuOpen ? '✕' : '☰'}
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-9 z-50 w-48 rounded-lg border border-zinc-800 bg-zinc-900 py-2 shadow-lg">
                <Link
                  href="/exam"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200"
                >
                  {t('exam')}
                </Link>
                <Link
                  href="/stats"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200"
                >
                  {t('stats')}
                </Link>
                <div className="border-t border-zinc-800 px-4 py-2">
                  <LanguageSwitcher />
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
```

- [ ] **Step 2: Type-check**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/shared/components/Navbar.tsx
git commit -m "feat(mobile): hamburger dropdown menu on mobile

- Search icon always visible
- ☰/✕ toggle opens dropdown with Exam, Stats, LanguageSwitcher
- Closes on click-outside via useRef
- Desktop layout unchanged

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 2: ExerciseListView horizontal-scroll filter chips

**Files:**
- Modify: `src/features/exercises/presentation/components/ExerciseListView.tsx`

- [ ] **Step 1: Update difficulty filter row**

Find this block (around line 96):

```tsx
<div className="flex flex-wrap gap-2">
  {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((d) => (
    <button
      key={d}
      type="button"
      onClick={() => setFilter('difficulty', d === 'all' ? null : d)}
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
```

Replace with:

```tsx
<div className="flex gap-2 overflow-x-auto pb-1">
  {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((d) => (
    <button
      key={d}
      type="button"
      onClick={() => setFilter('difficulty', d === 'all' ? null : d)}
      aria-pressed={diffFilter === d}
      className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
        diffFilter === d
          ? 'bg-emerald-700 text-white'
          : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
      }`}
    >
      {d === 'all' ? 'All Difficulties' : DIFF_LABELS[d]}
    </button>
  ))}
</div>
```

- [ ] **Step 2: Update status filter row**

Find this block (around line 113):

```tsx
<div className="flex flex-wrap gap-2">
  {(['all', 'not-started', 'attempted', 'completed'] as const).map((s) => (
    <button
      key={s}
      type="button"
      onClick={() => setFilter('status', s === 'all' ? null : s)}
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
```

Replace with:

```tsx
<div className="flex gap-2 overflow-x-auto pb-1">
  {(['all', 'not-started', 'attempted', 'completed'] as const).map((s) => (
    <button
      key={s}
      type="button"
      onClick={() => setFilter('status', s === 'all' ? null : s)}
      aria-pressed={statusFilter === s}
      className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
        statusFilter === s
          ? 'bg-zinc-600 text-white'
          : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
      }`}
    >
      {STATUS_LABELS[s]}
    </button>
  ))}
</div>
```

- [ ] **Step 3: Type-check**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/features/exercises/presentation/components/ExerciseListView.tsx
git commit -m "feat(mobile): horizontal-scroll filter chips in ExerciseListView

Replace flex-wrap rows with overflow-x-auto single rows.
shrink-0 on chips prevents compression.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 3: ExamSetup 2×2 difficulty grid

**Files:**
- Modify: `src/features/exam/presentation/components/ExamSetup.tsx`

- [ ] **Step 1: Change difficulty button container from flex to grid**

Find (around line 79):

```tsx
<div className="flex gap-2">
  {DIFFICULTIES.map((d) => (
    <button
      key={d}
      type="button"
      onClick={() => setDifficulty(d)}
      className={`flex-1 rounded-lg border px-3 py-2 text-xs font-medium capitalize transition-colors ${
        difficulty === d
          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
          : 'border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-500'
      }`}
    >
      {d === 'mixed' ? t('diffAny') : d}
    </button>
  ))}
</div>
```

Replace with:

```tsx
<div className="grid grid-cols-2 gap-2">
  {DIFFICULTIES.map((d) => (
    <button
      key={d}
      type="button"
      onClick={() => setDifficulty(d)}
      className={`rounded-lg border px-3 py-2 text-xs font-medium capitalize transition-colors ${
        difficulty === d
          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
          : 'border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-500'
      }`}
    >
      {d === 'mixed' ? t('diffAny') : d}
    </button>
  ))}
</div>
```

Note: removed `flex-1` since grid handles sizing automatically.

- [ ] **Step 2: Type-check**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/exam/presentation/components/ExamSetup.tsx
git commit -m "feat(mobile): 2x2 grid for difficulty buttons in ExamSetup

Prevents overflow of 'Intermediate'/'Advanced' labels on 375px.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 4: ExamResults responsive polish

**Files:**
- Modify: `src/features/exam/presentation/components/ExamResults.tsx`

- [ ] **Step 1: Scale down summary card numbers on mobile**

There are three `text-3xl` values in the summary cards grid. Change each one to `text-2xl sm:text-3xl`:

Card 1 — score:
```tsx
// before
<p className="text-3xl font-bold text-emerald-400">
// after
<p className="text-2xl sm:text-3xl font-bold text-emerald-400">
```

Card 2 — XP:
```tsx
// before
<p className="text-3xl font-bold text-yellow-400">+{totalXp}</p>
// after
<p className="text-2xl sm:text-3xl font-bold text-yellow-400">+{totalXp}</p>
```

Card 3 — time:
```tsx
// before
<p className="text-3xl font-mono font-bold text-zinc-300">
// after
<p className="text-2xl sm:text-3xl font-mono font-bold text-zinc-300">
```

- [ ] **Step 2: Stack action buttons vertically on mobile**

Find (around line 120):

```tsx
<div className="flex gap-3">
  {missedExercises.length > 0 && (
    <button
      type="button"
      onClick={handleRetryMissed}
      className="rounded-lg border border-yellow-600 px-4 py-2 text-sm font-medium text-yellow-400 transition-colors hover:border-yellow-500 hover:text-yellow-300"
    >
      {t('reviewMissed')} ({missedExercises.length})
    </button>
  )}
  <button
    type="button"
    onClick={handleNewExam}
    className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-emerald-500"
  >
    {t('newExam')}
  </button>
</div>
```

Replace with:

```tsx
<div className="flex flex-col gap-3 sm:flex-row">
  {missedExercises.length > 0 && (
    <button
      type="button"
      onClick={handleRetryMissed}
      className="w-full rounded-lg border border-yellow-600 px-4 py-2 text-sm font-medium text-yellow-400 transition-colors hover:border-yellow-500 hover:text-yellow-300 sm:w-auto"
    >
      {t('reviewMissed')} ({missedExercises.length})
    </button>
  )}
  <button
    type="button"
    onClick={handleNewExam}
    className="w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-emerald-500 sm:w-auto"
  >
    {t('newExam')}
  </button>
</div>
```

- [ ] **Step 3: Type-check**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/features/exam/presentation/components/ExamResults.tsx
git commit -m "feat(mobile): responsive polish for ExamResults

- text-2xl sm:text-3xl on summary card numbers
- flex-col sm:flex-row + w-full sm:w-auto on action buttons

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 5: Create PR

- [ ] **Step 1: Push branch and open PR**

```bash
git push origin HEAD
gh pr create \
  --title "feat(mobile): hamburger navbar, scroll filters, exam responsive polish" \
  --body "Closes mobile UX gaps on < 640px screens.

## Changes
- **Navbar**: hamburger dropdown on mobile. Search always visible. ☰/✕ toggle shows Exam, Stats, LanguageSwitcher. Closes on click-outside.
- **ExerciseListView**: filter chip rows now scroll horizontally instead of wrapping.
- **ExamSetup**: difficulty buttons in 2×2 grid — fits 'Intermediate'/'Advanced' on 375px.
- **ExamResults**: summary card numbers scale down on mobile; action buttons stack vertically on mobile.
- **ExamRunner**: no changes — already mobile-friendly from prior PR.

Spec: \`docs/superpowers/specs/2026-04-20-mobile-improvements-design.md\`"
```
