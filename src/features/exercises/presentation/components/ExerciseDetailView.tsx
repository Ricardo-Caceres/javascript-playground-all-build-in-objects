'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ExerciseRunner } from './ExerciseRunner'
import ExerciseSidebar from './ExerciseSidebar'
import { DescriptionMarkdown } from './DescriptionMarkdown'
import { useExerciseNavigation } from '../hooks/useExerciseNavigation'
import type { Exercise } from '@/shared/types/exercises'

interface ExerciseDetailViewProps {
  exercise: Exercise
}

export function ExerciseDetailView({ exercise }: ExerciseDetailViewProps) {
  const objectName = exercise.builtIn
  const [activeTab, setActiveTab] = useState<'description' | 'code'>('description')
  const { currentIndex, total } = useExerciseNavigation(objectName, exercise.slug)
  const t = useTranslations('exercise')

  const descriptionContent = (
    <>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded bg-zinc-800 px-2 py-1 text-xs font-medium text-emerald-400">
          {exercise.builtIn}
        </span>
        {exercise.method && (
          <code className="rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-400">
            {exercise.method}
          </code>
        )}
        <span
          className={`rounded px-2 py-1 text-xs font-medium capitalize ${
            exercise.difficulty === 'beginner'
              ? 'bg-emerald-900/40 text-emerald-400'
              : exercise.difficulty === 'intermediate'
                ? 'bg-amber-900/40 text-amber-400'
                : 'bg-red-900/40 text-red-400'
          }`}
        >
          {exercise.difficulty}
        </span>
      </div>
      <h1 className="mb-4 text-xl font-bold leading-snug">{exercise.title}</h1>
      <div className="prose-sm">
        <DescriptionMarkdown content={exercise.description} />
      </div>
      {exercise.hints && exercise.hints.length > 0 && (
        <details className="mt-6">
          <summary className="cursor-pointer text-sm font-semibold text-zinc-500 hover:text-zinc-300">
            💡 {t('hints')} ({exercise.hints.length})
          </summary>
          <ul className="mt-3 space-y-2">
            {exercise.hints.map((hint, i) => (
              <li key={`${i}-${hint.slice(0, 20)}`} className="text-sm text-zinc-400">
                • {hint}
              </li>
            ))}
          </ul>
        </details>
      )}
    </>
  )

  return (
    <div className="flex h-[calc(100vh-3rem)] overflow-hidden bg-zinc-950 text-zinc-100">

      {/* ── DESKTOP (md+): unchanged 3-column layout ── */}
      <div className="hidden md:flex w-full h-full">
        <ExerciseSidebar objectName={objectName} currentSlug={exercise.slug} />
        <div className="flex min-w-0 flex-1">
          <div className="w-96 shrink-0 overflow-y-auto border-r border-zinc-700 p-6">
            {descriptionContent}
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <ExerciseRunner exercise={exercise} objectName={objectName} />
          </div>
        </div>
      </div>

      {/* ── MOBILE (<md): tab layout ── */}
      <div className="flex md:hidden w-full flex-col">
        {/* Top bar */}
        <div className="flex shrink-0 items-center justify-between border-b border-zinc-800 px-4 py-2">
          <Link
            href={`/exercises/${objectName.toLowerCase()}`}
            className="font-mono text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            ← {objectName}
          </Link>
          <span className="font-mono text-xs text-zinc-600">
            {currentIndex} / {total}
          </span>
        </div>

        {/* Tabs */}
        <div className="flex shrink-0 border-b border-zinc-800">
          <button
            type="button"
            onClick={() => setActiveTab('description')}
            className={`flex-1 py-2 text-xs font-medium transition-colors ${
              activeTab === 'description'
                ? 'border-b-2 border-emerald-500 text-emerald-400'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            📖 {t('tabDescription')}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`flex-1 py-2 text-xs font-medium transition-colors ${
              activeTab === 'code'
                ? 'border-b-2 border-emerald-500 text-emerald-400'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            💻 {t('tabCode')}
          </button>
        </div>

        {/* Tab content */}
        {activeTab === 'description' ? (
          <div className="flex-1 overflow-y-auto p-4">
            {descriptionContent}
          </div>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col">
            <ExerciseRunner exercise={exercise} objectName={objectName} />
          </div>
        )}
      </div>

    </div>
  )
}
