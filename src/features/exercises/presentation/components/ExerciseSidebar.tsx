'use client'

import { Link, useRouter } from '@/i18n/navigation'
import { useRef, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useSearchParams, usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { getAllExercisesByObject, getTopicMeta } from '@/features/exercises/infrastructure/repositories/exerciseRepository'

type Difficulty = 'beginner' | 'intermediate' | 'advanced'

const VALID_DIFFS: Difficulty[] = ['beginner', 'intermediate', 'advanced']

const DIFF_LABELS: Record<Difficulty, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

const DIFF_COLORS: Record<Difficulty, string> = {
  beginner: 'border-l-4 border-l-emerald-500',
  intermediate: 'border-l-4 border-l-yellow-500',
  advanced: 'border-l-4 border-l-red-500',
}

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
  const router = useRouter()

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      activeRef.current?.scrollIntoView({ block: 'nearest', behavior: 'instant' })
      return
    }
    activeRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [currentSlug])

  const searchParams = useSearchParams()
  const pathname = usePathname()

  // Extract difficulty filter from URL params
  const rawDiff = searchParams.get('difficulty')
  const selectedDifficulty: Difficulty | null = (VALID_DIFFS as string[]).includes(rawDiff ?? '')
    ? (rawDiff as Difficulty)
    : null

  function setFilter(value: Difficulty | null) {
    const params = new URLSearchParams(searchParams.toString())
    if (!value) {
      params.delete('difficulty')
    } else {
      params.set('difficulty', value)
    }
    const qs = params.toString()
    router.replace(qs ? `?${qs}` : pathname, { scroll: false })
  }

  // Calculate difficulty counts
  const difficultyCounts = {
    all: exercises.length,
    beginner: exercises.filter(e => e.difficulty === 'beginner').length,
    intermediate: exercises.filter(e => e.difficulty === 'intermediate').length,
    advanced: exercises.filter(e => e.difficulty === 'advanced').length,
  }

  // Filter exercises based on selected difficulty
  const filteredExercises = exercises.filter(ex =>
    selectedDifficulty === null || ex.difficulty === selectedDifficulty
  )

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
