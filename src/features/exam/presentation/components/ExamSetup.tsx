// src/features/exam/presentation/components/ExamSetup.tsx
'use client'

import { useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslations } from 'next-intl'
import type { AppDispatch } from '@/shared/lib/store'
import type { Difficulty } from '@/shared/types/exercises'
import { allExercises } from '@/features/exercises/infrastructure/data'
import { startExam } from '../store/examSlice'

const ALL_TOPICS = ['Any', ...Array.from(new Set(allExercises.map((e) => e.builtIn))).sort()]
const DIFFICULTIES: Array<Difficulty | 'mixed'> = ['mixed', 'beginner', 'intermediate', 'advanced']
const COUNTS = [5, 10, 20] as const

function pickExercises(topic: string, difficulty: string, count: number) {
  let pool = [...allExercises]
  if (topic !== 'Any') pool = pool.filter((e) => e.builtIn === topic)
  if (difficulty !== 'mixed') pool = pool.filter((e) => e.difficulty === difficulty)
  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, count)
}

export function ExamSetup() {
  const t = useTranslations('exam.setup')
  const dispatch = useDispatch<AppDispatch>()

  const [topic, setTopic] = useState('Any')
  const [difficulty, setDifficulty] = useState<Difficulty | 'mixed'>('mixed')
  const [count, setCount] = useState<5 | 10 | 20>(10)

  const available = useMemo(() => {
    let pool = allExercises
    if (topic !== 'Any') pool = pool.filter((e) => e.builtIn === topic)
    if (difficulty !== 'mixed') pool = pool.filter((e) => e.difficulty === difficulty)
    return pool.length
  }, [topic, difficulty])

  const canStart = available > 0

  function handleStart() {
    if (!canStart) return
    const exercises = pickExercises(topic, difficulty, count)
    dispatch(startExam(exercises))
  }

  return (
    <main className="flex min-h-[calc(100vh-3rem)] items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold text-zinc-100">{t('heading')}</h1>

        {/* Topic */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            {t('topic')}
          </label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-emerald-500 focus:outline-none"
          >
            {ALL_TOPICS.map((opt) => (
              <option key={opt} value={opt}>
                {opt === 'Any' ? t('topicAny') : opt}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            {t('difficulty')}
          </label>
          <div className="grid grid-cols-2 gap-2">
            {DIFFICULTIES.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDifficulty(d)}
                className={`rounded-lg border px-3 py-2 text-xs font-medium capitalize transition-colors ${
                  difficulty === d
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                    : 'border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-500'
                }`}
              >
                {d === 'mixed' ? t('diffAny') : d}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            {t('count')}
          </label>
          <div className="flex gap-2">
            {COUNTS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setCount(n)}
                className={`flex-1 rounded-lg border px-3 py-2 text-sm font-bold transition-colors ${
                  count === n
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                    : 'border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-500'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Available count hint */}
        <p className="text-xs text-zinc-600">
          {t('available', { count: available })}
          {count > available && available > 0 && ` ${t('allUsed', { count: available })}`}
        </p>

        {!canStart && (
          <p className="rounded-lg border border-red-800 bg-red-900/20 px-3 py-2 text-xs text-red-400">
            {t('noExercises')}
          </p>
        )}

        <button
          type="button"
          onClick={handleStart}
          disabled={!canStart}
          className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {t('start')}
        </button>
      </div>
    </main>
  )
}
