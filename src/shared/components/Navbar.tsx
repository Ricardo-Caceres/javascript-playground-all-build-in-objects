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
