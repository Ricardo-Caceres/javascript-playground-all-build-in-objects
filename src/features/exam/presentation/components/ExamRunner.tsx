'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'
import type { AppDispatch, RootState } from '@/shared/lib/store'
import { ExerciseRunner } from '@/features/exercises/presentation/components/ExerciseRunner'
import { markResult, nextExercise } from '../store/examSlice'
import { ExamProgressBar } from './ExamProgressBar'
import { getLocalizedExercise } from '@/i18n/exerciseTranslations'
import { useLocale } from 'next-intl'

export function ExamRunner() {
  const t = useTranslations('exam.runner')
  const dispatch = useDispatch<AppDispatch>()
  const locale = useLocale()

  const { exercises, currentIndex } = useSelector((s: RootState) => s.exam)
  const rawExercise = exercises[currentIndex]
  const exercise = rawExercise ? getLocalizedExercise(rawExercise, locale) : null

  const progress = useSelector(
    (s: RootState) => exercise ? s.progress.exercises[exercise.slug] : undefined,
  )
  const allPassed = progress?.status === 'completed'

  if (!exercise) return null

  function handleNext() {
    dispatch(markResult({ slug: exercise!.slug, result: 'passed' }))
    dispatch(nextExercise())
  }

  function handleSkip() {
    dispatch(markResult({ slug: exercise!.slug, result: 'skipped' }))
    dispatch(nextExercise())
  }

  return (
    <div className="flex h-[calc(100vh-3rem)] flex-col bg-zinc-950">
      <ExamProgressBar />

      {/* ExerciseRunner takes up the remaining space */}
      <div className="min-h-0 flex-1 overflow-hidden">
        <ExerciseRunner exercise={exercise} objectName={exercise.builtIn} />
      </div>

      {/* Bottom action bar */}
      <div className="flex items-center justify-end gap-3 border-t border-zinc-800 bg-zinc-900 px-6 py-3">
        {allPassed && (
          <span className="text-xs text-emerald-400">{t('allPassed')}</span>
        )}
        <button
          type="button"
          onClick={handleSkip}
          className="rounded border border-zinc-700 px-4 py-2 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
        >
          {t('skip')}
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!allPassed}
          className="rounded-lg bg-emerald-600 px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {t('next')}
        </button>
      </div>
    </div>
  )
}
