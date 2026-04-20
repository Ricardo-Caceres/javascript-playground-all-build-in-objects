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

// Extracted as a named component to avoid JSX-variable anti-pattern
function DescriptionPanel({
  exercise,
  hintsLabel,
}: {
  exercise: Exercise
  hintsLabel: string
}) {
  return (
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
            💡 {hintsLabel} ({exercise.hints.length})
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
}

export function ExerciseDetailView({ exercise }: ExerciseDetailViewProps) {
  const objectName = exercise.builtIn
  const [activeTab, setActiveTab] = useState<'description' | 'code'>('description')
  const { currentIndex, total } = useExerciseNavigation(objectName, exercise.slug)
  const t = useTranslations('exercise')

  return (
    <div className="flex h-[calc(100vh-3rem)] flex-col overflow-hidden bg-zinc-950 text-zinc-100 md:flex-row">

      {/* Sidebar: desktop only */}
      <div className="hidden md:block">
        <ExerciseSidebar objectName={objectName} currentSlug={exercise.slug} />
      </div>

      {/* Main content area */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">

        {/* Mobile top bar + tabs (hidden on desktop) */}
        <div className="shrink-0 md:hidden">
          <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
            <Link
              href={`/exercises/${objectName.toLowerCase()}`}
              className="font-mono text-sm text-emerald-400 transition-colors hover:text-emerald-300"
            >
              ← {objectName}
            </Link>
            <span className="font-mono text-xs text-zinc-600">
              {currentIndex > 0 ? `${currentIndex} / ${total}` : null}
            </span>
          </div>
          <div
            role="tablist"
            aria-label={t('tablistLabel')}
            className="flex border-b border-zinc-800"
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') setActiveTab('code')
              if (e.key === 'ArrowLeft') setActiveTab('description')
            }}
          >
            <button
              role="tab"
              type="button"
              id="tab-description"
              aria-selected={activeTab === 'description'}
              aria-controls="panel-description"
              tabIndex={activeTab === 'description' ? 0 : -1}
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
              role="tab"
              type="button"
              id="tab-code"
              aria-selected={activeTab === 'code'}
              aria-controls="panel-code"
              tabIndex={activeTab === 'code' ? 0 : -1}
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
        </div>

        {/* Content row: description + editor */}
        <div className="flex min-h-0 flex-1 overflow-hidden">

          {/* Description panel:
              - Desktop: always visible, fixed width, right border
              - Mobile: visible only on description tab */}
          <div
            role="tabpanel"
            id="panel-description"
            aria-labelledby="tab-description"
            tabIndex={0}
            className={`overflow-y-auto p-4 md:block md:w-96 md:shrink-0 md:border-r md:border-zinc-700 md:p-6 ${
              activeTab === 'description' ? 'block w-full' : 'hidden'
            }`}
          >
            <DescriptionPanel exercise={exercise} hintsLabel={t('hints')} />
          </div>

          {/* Editor panel — rendered ONCE, shown based on tab on mobile, always on desktop */}
          <div
            role="tabpanel"
            id="panel-code"
            aria-labelledby="tab-code"
            tabIndex={0}
            className={`min-h-0 flex-col md:flex md:flex-1 ${
              activeTab === 'code' ? 'flex flex-1' : 'hidden'
            }`}
          >
            <ExerciseRunner exercise={exercise} objectName={objectName} />
          </div>

        </div>
      </div>
    </div>
  )
}
