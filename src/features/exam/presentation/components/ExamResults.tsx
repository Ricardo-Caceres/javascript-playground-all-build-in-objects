'use client'

import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import type { AppDispatch, RootState } from '@/shared/lib/store'
import { XP_TABLE } from '@/features/gamification/domain/entities'
import { addXp } from '@/features/gamification/presentation/store/gamificationSlice'
import { resetExam, startExam } from '../store/examSlice'

function formatDuration(startTime: number | null, endTime: number | null): string {
  if (!startTime || !endTime) return '—'
  const elapsed = Math.floor((endTime - startTime) / 1000)
  const m = Math.floor(elapsed / 60).toString().padStart(2, '0')
  const s = (elapsed % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

export function ExamResults() {
  const t = useTranslations('exam.results')
  const dispatch = useDispatch<AppDispatch>()
  const { exercises, results, startTime, endTime } = useSelector(
    (s: RootState) => s.exam,
  )

  const passedExercises = exercises.filter((e) => results[e.slug] === 'passed')
  const missedExercises = exercises.filter((e) => results[e.slug] !== 'passed')

  const exerciseXp = passedExercises.reduce(
    (sum, e) => sum + (XP_TABLE[e.difficulty] ?? 0),
    0,
  )
  const bonusXp = passedExercises.length > 0 ? 50 : 0
  const totalXp = exerciseXp + bonusXp

  // Dispatch bonus XP exactly once on mount
  const bonusDispatched = useRef(false)
  useEffect(() => {
    if (!bonusDispatched.current && bonusXp > 0) {
      bonusDispatched.current = true
      dispatch(addXp(bonusXp))
    }
  }, [bonusXp, dispatch])

  const isPerfect = missedExercises.length === 0

  function handleRetryMissed() {
    if (missedExercises.length > 0) {
      dispatch(startExam(missedExercises))
    }
  }

  function handleNewExam() {
    dispatch(resetExam())
  }

  return (
    <main className="min-h-[calc(100vh-3rem)] bg-zinc-950 px-6 py-10 text-zinc-100">
      <div className="mx-auto max-w-2xl space-y-8">
        {/* Header */}
        <h1 className="text-3xl font-bold">{t('title')}</h1>

        {isPerfect && (
          <p className="text-lg text-emerald-400">{t('perfect')}</p>
        )}

        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-emerald-400">
              {passedExercises.length}/{exercises.length}
            </p>
            <p className="mt-1 text-xs text-zinc-500">{t('score')}</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-yellow-400">+{totalXp}</p>
            <p className="mt-1 text-xs text-zinc-500">{t('xpEarned')}</p>
            {bonusXp > 0 && (
              <p className="mt-0.5 text-[10px] text-zinc-600">{t('bonusXp')}</p>
            )}
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center">
            <p className="text-2xl sm:text-3xl font-mono font-bold text-zinc-300">
              {formatDuration(startTime, endTime)}
            </p>
            <p className="mt-1 text-xs text-zinc-500">{t('time')}</p>
          </div>
        </div>

        {/* Exercise list */}
        <div className="space-y-2">
          {exercises.map((ex) => {
            const result = results[ex.slug]
            return (
              <Link
                key={ex.slug}
                href={`/exercises/${ex.builtIn.toLowerCase()}/${ex.slug}`}
                className="flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 transition-colors hover:border-zinc-600"
              >
                <span className="text-lg">
                  {result === 'passed' ? '✓' : '✗'}
                </span>
                <span
                  className={`flex-1 text-sm ${
                    result === 'passed' ? 'text-zinc-200' : 'text-zinc-500'
                  }`}
                >
                  {ex.title}
                </span>
                <span className="text-xs capitalize text-zinc-600">
                  {ex.difficulty}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row">
          {missedExercises.length > 0 && (
            <button
              type="button"
              onClick={handleRetryMissed}
              className="w-full rounded-lg border border-yellow-600 px-4 py-2 text-sm font-medium text-yellow-400 transition-colors hover:border-yellow-500 hover:text-yellow-300 sm:w-auto"
            >
              {t('reviewMissed')} ({missedExercises.length})
            </button>
          )}
          <button
            type="button"
            onClick={handleNewExam}
            className="w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-emerald-500 sm:w-auto"
          >
            {t('newExam')}
          </button>
        </div>
      </div>
    </main>
  )
}
