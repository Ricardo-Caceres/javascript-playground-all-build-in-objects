'use client'

import { Link, useRouter, usePathname } from '@/i18n/navigation'
import { useRef, useEffect, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import type { Difficulty, Exercise } from '@/shared/types/exercises'
import { getAllExercisesByObject, getTopicMeta, getRoadmapExercises } from '@/features/exercises/infrastructure/repositories/exerciseRepository'

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

const DIFF_ORDER: Record<Difficulty, number> = { beginner: 0, intermediate: 1, advanced: 2 }

const DIFF_HEADER_COLOR: Record<Difficulty, string> = {
  beginner: 'text-emerald-500',
  intermediate: 'text-yellow-500',
  advanced: 'text-red-500',
}

type ProgressStatus = 'completed' | 'attempted' | 'not-started'

interface ExerciseLinkProps {
  ex: Exercise
  isActive: boolean
  status: ProgressStatus
  href: string
  activeRef: React.RefObject<HTMLAnchorElement | null>
}

function ExerciseLink({ ex, isActive, status, href, activeRef }: ExerciseLinkProps) {
  return (
    <Link
      href={href}
      ref={isActive ? activeRef : null}
      aria-current={isActive ? 'page' : undefined}
      className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${DIFF_COLORS[ex.difficulty]} ${
        isActive
          ? 'bg-zinc-800 text-zinc-100'
          : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300'
      }`}
    >
      <span className="w-4 shrink-0 text-center text-xs" aria-hidden="true">
        {status === 'completed' ? (
          <span className="text-emerald-500">✓</span>
        ) : status === 'attempted' ? (
          <span className="text-yellow-500">▶</span>
        ) : (
          <span className="text-zinc-700">○</span>
        )}
      </span>
      <span className="sr-only">
        {status === 'completed'
          ? '(completed)'
          : status === 'attempted'
            ? '(attempted)'
            : ''}
      </span>
      <span className="truncate">{ex.title}</span>
    </Link>
  )
}

interface Props {
  objectName: string
  currentSlug: string
}

export default function ExerciseSidebar({ objectName, currentSlug }: Props) {
  const progressMap = useSelector((state: RootState) => state.progress.exercises)
  const locale = useLocale() as 'en' | 'es'
  const activeRef = useRef<HTMLAnchorElement>(null)
  const isMounted = useRef(false)
  const router = useRouter()

  const exercises = useMemo(
    () => getAllExercisesByObject(objectName),
    [objectName],
  )

  const meta = useMemo(() => getTopicMeta(objectName), [objectName])

  const difficultyCounts = useMemo(
    () => ({
      beginner: exercises.filter((e) => e.difficulty === 'beginner').length,
      intermediate: exercises.filter((e) => e.difficulty === 'intermediate').length,
      advanced: exercises.filter((e) => e.difficulty === 'advanced').length,
    }),
    [exercises],
  )

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
  
  // Read difficulty filter directly from URL params
  const rawDiff = searchParams.get('difficulty')
  const selectedDifficulty = (VALID_DIFFS.includes(rawDiff as Difficulty) ? rawDiff : null) as Difficulty | null

  const isRoadmap = searchParams.get('mode') === 'roadmap'

  const roadmapGroups = useMemo(
    () =>
      isRoadmap
        ? getRoadmapExercises(objectName)
        : ({ beginner: [], intermediate: [], advanced: [] } as Record<Difficulty, Exercise[]>),
    [isRoadmap, objectName],
  )

  const flatExercises = useMemo(
    () =>
      exercises
        .filter((ex) => selectedDifficulty === null || ex.difficulty === selectedDifficulty)
        .sort((a, b) => DIFF_ORDER[a.difficulty] - DIFF_ORDER[b.difficulty]),
    [exercises, selectedDifficulty],
  )

  const displayCounts = useMemo(() => {
    if (isRoadmap) {
      return {
        beginner: roadmapGroups.beginner.length,
        intermediate: roadmapGroups.intermediate.length,
        advanced: roadmapGroups.advanced.length,
      }
    }
    return difficultyCounts
  }, [isRoadmap, roadmapGroups, difficultyCounts])

  // Build href that preserves the active difficulty filter
  function buildExerciseHref(slug: string): string {
    const base = `/exercises/${objectName.toLowerCase()}/${slug}`
    const params = new URLSearchParams()
    if (isRoadmap) params.set('mode', 'roadmap')
    if (selectedDifficulty) params.set('difficulty', selectedDifficulty)
    const qs = params.toString()
    return qs ? `${base}?${qs}` : base
  }

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

  function setRoadmap() {
    const params = new URLSearchParams(searchParams.toString())
    if (isRoadmap) {
      params.delete('mode')
    } else {
      params.set('mode', 'roadmap')
    }
    const qs = params.toString()
    router.replace(qs ? `?${qs}` : pathname, { scroll: false })
  }

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

        {/* Difficulty Filter Buttons */}
        <div className="px-4 py-2 space-y-1">
          <div className="flex flex-wrap gap-1">
            {/* Roadmap button */}
            <button
              type="button"
              onClick={setRoadmap}
              aria-pressed={isRoadmap}
              className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
                isRoadmap
                  ? 'bg-emerald-700 text-white'
                  : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
              }`}
            >
              🗺 Roadmap
            </button>
            {(['all', ...VALID_DIFFS] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setFilter(d === 'all' ? null : d)}
                aria-pressed={selectedDifficulty === (d === 'all' ? null : d)}
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
                  selectedDifficulty === (d === 'all' ? null : d)
                    ? 'bg-emerald-700 text-white'
                    : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
                }`}
              >
                {d === 'all'
                  ? 'All'
                  : `${DIFF_LABELS[d]} (${displayCounts[d]})`}
              </button>
            ))}
          </div>
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
        {isRoadmap ? (
          // Roadmap mode: grouped sections by difficulty
          VALID_DIFFS
            .filter(d => selectedDifficulty === null || d === selectedDifficulty)
            .map(d => {
              const group = roadmapGroups[d]
              if (group.length === 0) return null

              return (
                <div key={d}>
                  {/* Section header */}
                  <div className="flex items-center gap-2 px-3 py-1.5 mt-1">
                    <h3 className={`text-xs font-semibold uppercase tracking-wider ${DIFF_HEADER_COLOR[d]}`}>
                      {DIFF_LABELS[d]}
                    </h3>
                    <span className="text-xs text-zinc-600">({roadmapGroups[d].length})</span>
                    <div className="flex-1 border-t border-zinc-800" />
                  </div>

                  {group.map((ex) => {
                    const status = (progressMap[ex.slug]?.status ?? 'not-started') as ProgressStatus
                    const isActive = ex.slug === currentSlug
                    return (
                      <ExerciseLink
                        key={ex.slug}
                        ex={ex}
                        isActive={isActive}
                        status={status}
                        href={buildExerciseHref(ex.slug)}
                        activeRef={activeRef}
                      />
                    )
                  })}
                </div>
              )
            })
        ) : (
          // Standard mode: flat list sorted by difficulty
          flatExercises.map((ex) => {
            const status = (progressMap[ex.slug]?.status ?? 'not-started') as ProgressStatus
            const isActive = ex.slug === currentSlug
            return (
              <ExerciseLink
                key={ex.slug}
                ex={ex}
                isActive={isActive}
                status={status}
                href={buildExerciseHref(ex.slug)}
                activeRef={activeRef}
              />
            )
          })
        )}
        {(isRoadmap
          ? VALID_DIFFS
              .filter(d => selectedDifficulty === null || d === selectedDifficulty)
              .every(d => roadmapGroups[d].length === 0)
          : flatExercises.length === 0
        ) && (
          <div className="px-4 py-3 text-xs text-zinc-500">
            No exercises at this difficulty level
          </div>
        )}
      </nav>
    </aside>
  )
}
