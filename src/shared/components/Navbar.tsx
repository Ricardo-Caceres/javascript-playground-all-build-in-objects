'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { GamificationBar } from '@/features/gamification/presentation/components/GamificationBar'
import { SearchModal } from '@/features/search/presentation/components/SearchModal'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navbar() {
  const t = useTranslations('nav')
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 h-12 shrink-0 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
        >
          {t('brand')}
        </Link>

        <nav aria-label="Site navigation">
          {/* Desktop — unchanged layout */}
          <div className="hidden items-center gap-4 sm:flex">
            <LanguageSwitcher />
            <GamificationBar />
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search exercises"
              className="flex items-center gap-1.5 rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              <span className="text-base leading-none">⌕</span>
              <span>{t('search')}</span>
              <kbd className="rounded border border-zinc-700 px-1 py-0.5 font-mono text-[10px] text-zinc-600">
                ⌘K
              </kbd>
            </button>
            <Link
              href="/exam"
              className="rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              {t('exam')}
            </Link>
            <Link
              href="/stats"
              className="rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              {t('stats')}
            </Link>
          </div>

          {/* Mobile — search icon + hamburger */}
          <div ref={menuRef} className="relative flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search exercises"
              className="flex items-center rounded border border-zinc-700 px-2 py-1 text-base text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              ⌕
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              className="rounded border border-zinc-700 px-2 py-1 text-sm text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
            >
              {menuOpen ? '✕' : '☰'}
            </button>

            {menuOpen && (
              <div id="mobile-nav-menu" className="absolute right-0 top-full z-50 w-48 rounded-lg border border-zinc-800 bg-zinc-900 py-2 shadow-lg">
                <Link
                  href="/exam"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200"
                >
                  {t('exam')}
                </Link>
                <Link
                  href="/stats"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200"
                >
                  {t('stats')}
                </Link>
                <div className="border-t border-zinc-800 px-4 py-2" onClick={() => setMenuOpen(false)}>
                  <LanguageSwitcher />
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
