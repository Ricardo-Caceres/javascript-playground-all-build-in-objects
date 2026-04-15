'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { allExercises } from '@/features/exercises/infrastructure/data'

// Pre-compute static maps
const EXERCISES_BY_OBJECT: Record<string, string[]> = {}
for (const ex of allExercises) {
  if (!EXERCISES_BY_OBJECT[ex.builtIn]) EXERCISES_BY_OBJECT[ex.builtIn] = []
  EXERCISES_BY_OBJECT[ex.builtIn].push(ex.slug)
}
const OBJECTS = Object.keys(EXERCISES_BY_OBJECT).sort()

const DIFF_ORDER = ['beginner', 'intermediate', 'advanced'] as const
const EXERCISES_BY_DIFF: Record<string, string[]> = { beginner: [], intermediate: [], advanced: [] }
for (const ex of allExercises) {
  EXERCISES_BY_DIFF[ex.difficulty]?.push(ex.slug)
}

export function StatsView() {
  const progressMap = useSelector((state: RootState) => state.progress.exercises)

  // Global stats
  const totalExercises = allExercises.length
  const completedTotal = allExercises.filter(
    (e) => progressMap[e.slug]?.status === 'completed',
  ).length
  const attemptedTotal = allExercises.filter(
    (e) => progressMap[e.slug]?.status === 'attempted',
  ).length
  const globalPct = totalExercises > 0 ? Math.round((completedTotal / totalExercises) * 100) : 0

  // Per-difficulty stats
  const diffStats = DIFF_ORDER.map((diff) => {
    const slugs = EXERCISES_BY_DIFF[diff]
    const completed = slugs.filter((s) => progressMap[s]?.status === 'completed').length
    return { diff, total: slugs.length, completed, pct: slugs.length > 0 ? Math.round((completed / slugs.length) * 100) : 0 }
  })

  // Per-object stats
  const objectStats = OBJECTS.map((obj) => {
    const slugs = EXERCISES_BY_OBJECT[obj]
    const completed = slugs.filter((s) => progressMap[s]?.status === 'completed').length
    const attempted = slugs.filter((s) => progressMap[s]?.status === 'attempted').length
    const pct = slugs.length > 0 ? Math.round((completed / slugs.length) * 100) : 0
    return { obj, total: slugs.length, completed, attempted, pct }
  }).sort((a, b) => b.pct - a.pct || b.completed - a.completed)

  return (
    <main className="flex-1 bg-zinc-950 px-6 py-10 text-zinc-100">
      <div className="mx-auto max-w-5xl space-y-10">
        {/* Header */}
        <section className="space-y-1">
          <Link href="/" className="font-mono text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
            ← Home
          </Link>
          <h1 className="text-3xl font-bold text-zinc-100">Progress Stats</h1>
        </section>

        {/* Global overview */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Overall Progress
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-emerald-400">{globalPct}%</p>
              <p className="text-xs text-zinc-600">Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-zinc-200">{completedTotal}</p>
              <p className="text-xs text-zinc-600">of {totalExercises} exercises done</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">{attemptedTotal}</p>
              <p className="text-xs text-zinc-600">in progress</p>
            </div>
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-zinc-800">
            <div
              className="h-2 rounded-full bg-emerald-600 transition-all"
              style={{ width: `${globalPct}%` }}
            />
          </div>
        </section>

        {/* By difficulty */}
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            By Difficulty
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {diffStats.map(({ diff, total, completed, pct }) => (
              <div key={diff} className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-medium capitalize ${
                      diff === 'beginner'
                        ? 'text-emerald-400'
                        : diff === 'intermediate'
                          ? 'text-yellow-400'
                          : 'text-red-400'
                    }`}
                  >
                    {diff}
                  </span>
                  <span className="font-mono text-xs text-zinc-600">{pct}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-zinc-800">
                  <div
                    className={`h-1.5 rounded-full transition-all ${
                      diff === 'beginner'
                        ? 'bg-emerald-600'
                        : diff === 'intermediate'
                          ? 'bg-yellow-600'
                          : 'bg-red-600'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-zinc-600">
                  {completed}/{total}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Per-object breakdown */}
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            By Built-in Object
          </h2>
          <div className="space-y-2">
            {objectStats.map(({ obj, total, completed, attempted, pct }) => (
              <Link
                key={obj}
                href={`/exercises/${obj.toLowerCase()}`}
                className="flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 transition-colors hover:border-zinc-600"
              >
                <code className="w-36 shrink-0 text-sm font-semibold text-zinc-200">{obj}</code>
                <div className="flex-1">
                  <div className="h-1.5 w-full rounded-full bg-zinc-800">
                    <div
                      className="h-1.5 rounded-full bg-emerald-600 transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
                <span className="w-16 shrink-0 text-right font-mono text-xs text-zinc-500">
                  {completed}/{total}
                </span>
                {attempted > 0 && completed < total && (
                  <span className="shrink-0 font-mono text-xs text-yellow-600">
                    {attempted} in progress
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
