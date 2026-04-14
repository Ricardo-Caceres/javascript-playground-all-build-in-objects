import Link from 'next/link'
import { getAvailableObjects } from '@/features/exercises/infrastructure/repositories/exerciseRepository'

export default function HomeView() {
  const objects = getAvailableObjects()

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8f5ef_0%,#ece7de_100%)] px-6 py-16 text-zinc-950">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Hero */}
        <section className="rounded-[2rem] bg-white/90 p-8 shadow-[0_24px_80px_rgba(32,24,16,0.08)] backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            JavaScript Practice
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Master the Standard Built-in Objects
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
            Interactive TypeScript exercises for every constructor, static method, instance method,
            and property — inspired by Codewars and Codility.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-600">
            <span className="rounded-full bg-stone-100 px-4 py-2">Monaco Editor</span>
            <span className="rounded-full bg-stone-100 px-4 py-2">In-browser tests</span>
            <span className="rounded-full bg-stone-100 px-4 py-2">TypeScript</span>
            <span className="rounded-full bg-stone-100 px-4 py-2">Progress tracking</span>
          </div>
        </section>

        {/* Built-in objects grid */}
        <section>
          <h2 className="mb-5 text-xl font-semibold text-zinc-800">Built-in Objects</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {objects.map((obj) => (
              <Link
                key={obj}
                href={`/exercises/${obj.toLowerCase()}`}
                className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-6 py-5 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
              >
                <code className="text-lg font-semibold text-zinc-800">{obj}</code>
                <span className="text-zinc-400">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Legacy demos */}
        <section>
          <h2 className="mb-5 text-xl font-semibold text-zinc-800">Redux Architecture Examples</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white transition-transform hover:-translate-y-1"
              href="/redux-legacy"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-stone-300">Página 01</p>
              <h3 className="mt-3 text-2xl font-semibold">Redux legacy</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                Action types, action creators, reducer manual y legacy_createStore.
              </p>
            </Link>
            <Link
              className="rounded-[2rem] border border-emerald-200 bg-emerald-100 p-8 text-emerald-950 transition-transform hover:-translate-y-1"
              href="/redux-toolkit"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">Página 02</p>
              <h3 className="mt-3 text-2xl font-semibold">Redux Toolkit</h3>
              <p className="mt-3 text-sm leading-7 text-emerald-800">
                configureStore, slice, selectors memoizados y thunk.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
