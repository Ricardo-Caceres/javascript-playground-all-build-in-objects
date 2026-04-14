'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { ExerciseCard } from './ExerciseCard'
import type { Exercise, ExerciseCategory } from '@/shared/types/exercises'

const CATEGORY_LABELS: Record<ExerciseCategory, string> = {
  constructor: 'Constructor',
  'static-property': 'Static Properties',
  'static-method': 'Static Methods',
  'instance-method': 'Instance Methods',
  'instance-property': 'Instance Properties',
  inheritance: 'Inheritance',
}

interface ExerciseListViewProps {
  objectName: string
  exercises: Exercise[]
}

export function ExerciseListView({ objectName, exercises }: ExerciseListViewProps) {
  const progressMap = useSelector((state: RootState) => state.progress.exercises)
  const completedCount = exercises.filter(
    (e) => progressMap[e.slug]?.status === 'completed',
  ).length

  const grouped = exercises.reduce<Partial<Record<ExerciseCategory, Exercise[]>>>(
    (acc, ex) => {
      if (!acc[ex.category]) acc[ex.category] = []
      acc[ex.category]!.push(ex)
      return acc
    },
    {},
  )

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-100">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-6 inline-block text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-zinc-300"
        >
          ← Home
        </Link>
        <div className="mb-8 flex items-end justify-between">
          <h1 className="text-3xl font-bold">
            <code className="text-emerald-400">{objectName}</code>
          </h1>
          <p className="text-sm text-zinc-400">
            {completedCount}/{exercises.length} completed
          </p>
        </div>
        <div className="space-y-10">
          {(Object.entries(grouped) as [ExerciseCategory, Exercise[]][]).map(
            ([cat, items]) => (
              <section key={cat}>
                <h2 className="mb-4 text-lg font-semibold text-zinc-300">
                  {CATEGORY_LABELS[cat]}
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
      </div>
    </main>
  )
}
