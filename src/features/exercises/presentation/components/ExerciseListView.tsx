'use client'

import { Link, useRouter, usePathname } from '@/i18n/navigation'
import { useSearchParams } from 'next/navigation'
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
  const pathname = usePathname()
  const progressMap = useSelector((state: RootState) => state.progress.exercises)

  const rawDiff = searchParams.get('difficulty')
  const rawStatus = searchParams.get('status')

  const diffFilter: Difficulty | 'all' = (VALID_DIFFS as string[]).includes(rawDiff ?? '')
    ? (rawDiff as Difficulty)
    : 'all'
  const statusFilter: StatusFilter = (VALID_STATUSES as readonly string[]).includes(rawStatus ?? '')
    ? (rawStatus as StatusFilter)
    : 'all'

  function setFilter(key: 'difficulty' | 'status', value: string | null) {
    const params = new URLSearchParams(searchParams.toString())
    if (!value) params.delete(key)
    else params.set(key, value)
    const qs = params.toString()
    router.replace(qs ? `?${qs}` : pathname, { scroll: false })
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
