'use client'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'
import type { AppDispatch, RootState } from '@/shared/lib/store'
import { finishExam } from '../store/examSlice'

function formatElapsed(startTime: number | null): string {
  if (!startTime) return '00:00'
  const elapsed = Math.floor((Date.now() - startTime) / 1000)
  const m = Math.floor(elapsed / 60).toString().padStart(2, '0')
  const s = (elapsed % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

export function ExamProgressBar() {
  const t = useTranslations('exam.runner')
  const dispatch = useDispatch<AppDispatch>()
  const { currentIndex, exercises, startTime } = useSelector(
    (s: RootState) => s.exam,
  )
  const [display, setDisplay] = useState(() => formatElapsed(startTime))

  useEffect(() => {
    const id = setInterval(() => setDisplay(formatElapsed(startTime)), 1000)
    return () => clearInterval(id)
  }, [startTime])

  function handleEndExam() {
    if (window.confirm(t('endConfirm'))) {
      dispatch(finishExam())
    }
  }

  return (
    <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-6 py-3">
      <span className="text-sm font-medium text-zinc-300">
        {t('exercise')} {currentIndex + 1} {t('of')} {exercises.length}
      </span>

      <span className="font-mono text-sm text-zinc-500">
        ⏱ {t('elapsed')}: {display}
      </span>

      <button
        type="button"
        onClick={handleEndExam}
        className="rounded border border-red-800 px-3 py-1 text-xs text-red-400 transition-colors hover:border-red-600 hover:text-red-300"
      >
        {t('endExam')}
      </button>
    </div>
  )
}
