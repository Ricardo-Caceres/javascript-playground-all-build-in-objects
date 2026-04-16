'use client'

import Link from 'next/link'
import { GamificationBar } from '@/features/gamification/presentation/components/GamificationBar'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-12 shrink-0 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          JS Built-ins
        </Link>
        <nav aria-label="Site navigation">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <GamificationBar />
            </div>
            <Link
              href="/stats"
              className="rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              Stats →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
