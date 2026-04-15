import { ExerciseRunner } from './ExerciseRunner'
import ExerciseSidebar from './ExerciseSidebar'
import type { Exercise } from '@/shared/types/exercises'

interface ExerciseDetailViewProps {
  exercise: Exercise
}

export function ExerciseDetailView({ exercise }: ExerciseDetailViewProps) {
  const objectName = exercise.builtIn

  return (
    <div className="flex h-[calc(100vh-3rem)] overflow-hidden bg-zinc-950 text-zinc-100">
      <ExerciseSidebar
        objectName={objectName}
        currentSlug={exercise.slug}
      />

      <div className="flex min-w-0 flex-1">
        {/* Description panel */}
        <div className="w-96 shrink-0 overflow-y-auto border-r border-zinc-700 p-6">
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
          <div className="whitespace-pre-wrap text-sm leading-7 text-zinc-300">
            {exercise.description}
          </div>
          {exercise.hints && exercise.hints.length > 0 && (
            <details className="mt-6">
              <summary className="cursor-pointer text-sm font-semibold text-zinc-500 hover:text-zinc-300">
                💡 Hints ({exercise.hints.length})
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
        </div>

        {/* Editor + Tests */}
        <div className="flex min-w-0 flex-1 flex-col">
          <ExerciseRunner exercise={exercise} objectName={objectName} />
        </div>
      </div>
    </div>
  )
}
