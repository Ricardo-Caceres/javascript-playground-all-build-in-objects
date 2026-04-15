'use client'

import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { getAllExercisesByObject } from '@/features/exercises/infrastructure/repositories/exerciseRepository'

interface Props {
  objectName: string
  currentSlug: string
}

export default function ExerciseSidebar({ objectName, currentSlug }: Props) {
  const progressMap = useSelector((state: RootState) => state.progress.exercises)
  const exercises = getAllExercisesByObject(objectName)
  const activeRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [currentSlug])

  const completed = exercises.filter((e) => progressMap[e.slug]?.status === 'completed').length
  const total = exercises.length

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-zinc-800 bg-zinc-950">
      {/* Header */}
      <div className="border-b border-zinc-800 px-4 py-3">
        <Link
          href={`/exercises/${objectName.toLowerCase()}`}
          className="font-mono text-sm font-semibold text-zinc-200 hover:text-emerald-400 transition-colors"
        >
          {objectName}
        </Link>
        <p className="mt-1 text-xs text-zinc-600">
          {completed}/{total} completed
        </p>
        <div className="mt-2 h-1 w-full rounded-full bg-zinc-800">
          <div
            className="h-1 rounded-full bg-emerald-600 transition-all"
            style={{ width: total > 0 ? `${Math.round((completed / total) * 100)}%` : '0%' }}
          />
        </div>
      </div>
      {/* List */}
      <nav aria-label="Exercise list" className="flex-1 overflow-y-auto py-2">
        {exercises.map((ex) => {
          const status = progressMap[ex.slug]?.status ?? 'not-started'
          const isActive = ex.slug === currentSlug
          return (
            <Link
              key={ex.slug}
              href={`/exercises/${objectName.toLowerCase()}/${ex.slug}`}
              ref={isActive ? activeRef : null}
              className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                isActive
                  ? 'bg-zinc-800 text-zinc-100'
                  : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300'
              }`}
            >
              <span className="w-4 shrink-0 text-center text-xs">
                {status === 'completed' ? (
                  <span className="text-emerald-500">✓</span>
                ) : status === 'attempted' ? (
                  <span className="text-yellow-500">▶</span>
                ) : (
                  <span className="text-zinc-700">○</span>
                )}
              </span>
              <span className="truncate">{ex.title}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
