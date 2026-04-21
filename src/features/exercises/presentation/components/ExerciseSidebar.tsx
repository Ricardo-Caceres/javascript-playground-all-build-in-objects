'use client'

import { Link } from '@/i18n/navigation'
import { useRef, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { getAllExercisesByObject, getTopicMeta } from '@/features/exercises/infrastructure/repositories/exerciseRepository'

interface Props {
  objectName: string
  currentSlug: string
}

export default function ExerciseSidebar({ objectName, currentSlug }: Props) {
  const progressMap = useSelector((state: RootState) => state.progress.exercises)
  const exercises = getAllExercisesByObject(objectName)
  const meta = getTopicMeta(objectName)
  const locale = useLocale() as 'en' | 'es'
  const activeRef = useRef<HTMLAnchorElement>(null)
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      activeRef.current?.scrollIntoView({ block: 'nearest', behavior: 'instant' })
      return
    }
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
      {/* Topic description */}
      {meta && (
        <details className="border-b border-zinc-800 px-4 py-2 text-xs">
          <summary className="cursor-pointer select-none font-semibold text-zinc-400 hover:text-zinc-200">
            What is {objectName}?
          </summary>
          <p className="mt-2 leading-relaxed text-zinc-500">
            {meta.description[locale] ?? meta.description.en}
          </p>
        </details>
      )}
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
              aria-current={isActive ? 'page' : undefined}
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
