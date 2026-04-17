'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { GamificationBar } from '@/features/gamification/presentation/components/GamificationBar'
import { SearchModal } from '@/features/search/presentation/components/SearchModal'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navbar() {
  const t = useTranslations('nav')
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 h-12 shrink-0 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          {t('brand')}
        </Link>
        <nav aria-label="Site navigation">
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <div className="hidden sm:block">
              <GamificationBar />
            </div>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search exercises"
              className="flex items-center gap-1.5 rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              <span className="text-base leading-none">⌕</span>
              <span className="hidden sm:inline">{t('search')}</span>
              <kbd className="hidden sm:inline rounded border border-zinc-700 px-1 py-0.5 font-mono text-[10px] text-zinc-600">
                ⌘K
              </kbd>
            </button>
            <Link
              href="/stats"
              className="rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              {t('stats')}
            </Link>
          </div>
        </nav>
      </div>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
