'use client'

import { Link } from '@/i18n/navigation'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'
import type { RootState } from '@/shared/lib/store'
import { allExercises } from '@/features/exercises/infrastructure/data'
import { getAvailableObjects } from '@/features/exercises/infrastructure/repositories/exerciseRepository'
import { LevelWidget } from '@/features/gamification/presentation/components/LevelWidget'
import { DailyChallengeCard } from '@/features/gamification/presentation/components/DailyChallengeCard'

const OBJECT_GROUPS: Record<string, string[]> = {
  Fundamentals: ['Array', 'String', 'Object', 'Number', 'Boolean', 'BigInt', 'Symbol', 'Math'],
  Collections: ['Map', 'Set', 'WeakMap', 'WeakSet'],
  Errors: ['Error', 'TypeError', 'RangeError', 'SyntaxError', 'ReferenceError', 'AggregateError'],
  'Async & Gen': ['Promise', 'Generator', 'Iterator', 'AsyncFunction'],
  Buffers: ['ArrayBuffer', 'SharedArrayBuffer', 'DataView', 'TypedArray', 'Atomics'],
  'Intl & Global': ['Intl', 'GlobalFunctions', 'globalThis', 'structuredClone'],
  Reflection: ['Proxy', 'Reflect', 'Function'],
  Other: ['WeakRef', 'FinalizationRegistry', 'Date', 'RegExp', 'JSON'],
}

// Pre-compute total exercises per built-in object (static, never changes)
const EXERCISE_COUNTS: Record<string, number> = {}
const EXERCISE_SLUGS: Record<string, string[]> = {}
for (const ex of allExercises) {
  EXERCISE_COUNTS[ex.builtIn] = (EXERCISE_COUNTS[ex.builtIn] ?? 0) + 1
  if (!EXERCISE_SLUGS[ex.builtIn]) EXERCISE_SLUGS[ex.builtIn] = []
  EXERCISE_SLUGS[ex.builtIn].push(ex.slug)
}

const OBJECTS = getAvailableObjects().filter(
  (o) => o !== 'redux-legacy' && o !== 'redux-toolkit'
)

export default function HomeView() {
  const [search, setSearch] = useState('')
  const [activeGroup, setActiveGroup] = useState('All')
  const progressMap = useSelector((state: RootState) => state.progress.exercises)
  const tHome = useTranslations('home')
  const tSearch = useTranslations('search')

  const filtered = OBJECTS.filter((obj) => {
    const matchesSearch = obj.toLowerCase().includes(search.toLowerCase())
    const matchesGroup =
      activeGroup === 'All' || (OBJECT_GROUPS[activeGroup]?.includes(obj) ?? false)
    return matchesSearch && matchesGroup
  })

  return (
    <main className="flex-1 bg-zinc-950 px-6 py-12 text-zinc-100">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Hero */}
        <section className="space-y-3">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-500">
            {tHome('title')}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-zinc-100 sm:text-5xl">
            {tHome('heading')}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-zinc-400">
            {tHome('subtitle', { count: allExercises.length })}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {['Monaco Editor', 'In-browser tests', 'TypeScript', 'Progress tracking'].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-600"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </section>

        {/* Gamification widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <LevelWidget />
          <DailyChallengeCard />
        </div>

        {/* Learning Path entry point */}
        <Link
          href="/learning-path"
          className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 hover:border-emerald-600 rounded-xl p-5 transition-colors group"
        >
          <span className="text-3xl">🗺️</span>
          <div>
            <div className="font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
              JavaScript Learning Path
            </div>
            <div className="text-sm text-zinc-400">
              Structured roadmap from fundamentals to advanced
            </div>
          </div>
          <span className="ml-auto text-zinc-600 group-hover:text-emerald-400 transition-colors">→</span>
        </Link>

        {/* Search + filter */}
        <section className="space-y-3">
          <input
            type="search"
            placeholder={tSearch('objectsPlaceholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-sm rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 placeholder-zinc-600 outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
            aria-label="Search built-in objects"
          />
          <div className="flex flex-wrap gap-2">
            {['All', ...Object.keys(OBJECT_GROUPS)].map((group) => (
              <button
                key={group}
                onClick={() => setActiveGroup(group)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeGroup === group
                    ? 'bg-emerald-700 text-white'
                    : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </section>

        {/* Objects grid */}
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            {tHome('objectsCount', { count: filtered.length })}
          </h2>
          {filtered.length === 0 ? (
            <p className="text-sm text-zinc-600">{tHome('noObjects', { search })}</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filtered.map((obj) => {
                const total = EXERCISE_COUNTS[obj] ?? 0
                const slugs = EXERCISE_SLUGS[obj] ?? []
                const completed = slugs.filter(
                  (s) => progressMap[s]?.status === 'completed',
                ).length
                const pct = total > 0 ? Math.round((completed / total) * 100) : 0
                const isDone = completed === total && total > 0
                return (
                  <Link
                    key={obj}
                    href={`/exercises/${obj.toLowerCase()}`}
                    className={`rounded-xl border p-5 transition-colors ${
                      isDone
                        ? 'border-emerald-800/60 bg-emerald-950/30 hover:border-emerald-700'
                        : 'border-zinc-800 bg-zinc-900 hover:border-zinc-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <code className="text-base font-semibold text-zinc-200">{obj}</code>
                      {isDone && <span className="text-emerald-400 text-sm">✓</span>}
                    </div>
                    <div className="mt-3 h-1 w-full rounded-full bg-zinc-800">
                      <div
                        className="h-1 rounded-full bg-emerald-600 transition-all"
                        style={{ width: `${pct}%` }}
                        suppressHydrationWarning
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-zinc-600" suppressHydrationWarning>
                      {completed}/{total}
                    </p>
                  </Link>
                )
              })}
            </div>
          )}
        </section>

        {/* Redux demos – de-emphasized */}
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-700">
            Redux Architecture Examples
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/exercises/redux-legacy"
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-colors hover:border-zinc-700"
            >
              <p className="text-xs uppercase tracking-widest text-zinc-600">Página 01</p>
              <h3 className="mt-2 font-semibold text-zinc-300">Redux legacy</h3>
              <p className="mt-1 text-xs text-zinc-600">
                Action types, action creators, reducer manual y legacy_createStore.
              </p>
            </Link>
            <Link
              href="/exercises/redux-toolkit"
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-colors hover:border-zinc-700"
            >
              <p className="text-xs uppercase tracking-widest text-zinc-600">Página 02</p>
              <h3 className="mt-2 font-semibold text-zinc-300">Redux Toolkit</h3>
              <p className="mt-1 text-xs text-zinc-600">
                configureStore, slice, selectors memoizados y thunk.
              </p>
            </Link>
            <Link
              href="/redux-comparison"
              className="rounded-xl border border-emerald-800/60 bg-emerald-950/30 p-5 transition-colors hover:border-emerald-700"
            >
              <p className="text-xs uppercase tracking-widest text-emerald-600">Comparación</p>
              <h3 className="mt-2 font-semibold text-emerald-300">Redux Comparison</h3>
              <p className="mt-1 text-xs text-emerald-600/80">
                Side-by-side visualización con state, timeline y DevTools sync mode.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
