'use client'

import { Link } from '@/i18n/navigation'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import type { Exercise } from '@/shared/types/exercises'

const DIFFICULTY_STYLES = {
  beginner: 'text-emerald-400 bg-emerald-900/40',
  intermediate: 'text-amber-400 bg-amber-900/40',
  advanced: 'text-red-400 bg-red-900/40',
}

interface ExerciseCardProps {
  exercise: Exercise
  objectName: string
}

export function ExerciseCard({ exercise, objectName }: ExerciseCardProps) {
  const progress = useSelector(
    (state: RootState) => state.progress.exercises[exercise.slug],
  )
  const isCompleted = progress?.status === 'completed'

  return (
    <Link
      href={`/exercises/${objectName}/${exercise.slug}`}
      className={`block rounded-xl border p-4 transition-colors ${
        isCompleted
          ? 'border-emerald-800/60 bg-emerald-900/20'
          : 'border-zinc-700 bg-zinc-800 hover:border-zinc-500'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold leading-snug text-zinc-200">{exercise.title}</h3>
        {isCompleted && <span className="shrink-0 text-emerald-400">✓</span>}
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span
          className={`rounded px-2 py-0.5 text-xs font-medium ${DIFFICULTY_STYLES[exercise.difficulty]}`}
        >
          {exercise.difficulty}
        </span>
        {exercise.method && (
          <code className="rounded bg-zinc-700 px-1.5 py-0.5 text-xs text-zinc-400">
            {exercise.method}
          </code>
        )}
      </div>
    </Link>
  )
}
