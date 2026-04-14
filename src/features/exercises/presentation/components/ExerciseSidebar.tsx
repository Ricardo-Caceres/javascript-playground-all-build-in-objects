'use client'

import Link from 'next/link'
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

const STATUS_ICON: Record<string, string> = {
  completed: '✓',
  attempted: '○',
  'not-started': '·',
}

interface ExerciseSidebarProps {
  exercises: Exercise[]
  activeSlug: string
  objectName: string
}

export function ExerciseSidebar({ exercises, activeSlug, objectName }: ExerciseSidebarProps) {
  const progressMap = useSelector((state: RootState) => state.progress.exercises)

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
        className="mb-5 block text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-zinc-300"
      >
        ← {objectName}
      </Link>
      {(Object.entries(grouped) as [ExerciseCategory, Exercise[]][]).map(([cat, items]) => (
        <div key={cat} className="mb-5">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-600">
            {CATEGORY_LABELS[cat]}
          </p>
          <ul className="space-y-0.5">
            {items.map((ex) => {
              const prog = progressMap[ex.slug]
              const isActive = ex.slug === activeSlug
              const icon = STATUS_ICON[prog?.status ?? 'not-started']
              return (
                <li key={ex.slug}>
                  <Link
                    href={`/exercises/${objectName}/${ex.slug}`}
                    className={`flex items-center gap-2 rounded px-2 py-1.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-zinc-700 text-white'
                        : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
                    }`}
                  >
                    <span
                      className={`text-xs ${
                        prog?.status === 'completed' ? 'text-emerald-400' : 'text-zinc-600'
                      }`}
                    >
                      {icon}
                    </span>
                    <span className="truncate">{ex.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
