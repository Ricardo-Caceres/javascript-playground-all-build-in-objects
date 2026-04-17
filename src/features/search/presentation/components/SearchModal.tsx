'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { useExerciseSearch } from '../hooks/useExerciseSearch'
import type { Exercise } from '@/shared/types/exercises'

interface Props {
  open: boolean
  onClose: () => void
}

export function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const t = useTranslations('search')
  const results = useExerciseSearch(query)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
      // Delay focus until portal renders
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [open])

  function handleSelect(ex: Exercise) {
    router.push(`/exercises/${ex.builtIn.toLowerCase()}/${ex.slug}`)
    onClose()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => (results.length === 0 ? 0 : Math.min(i + 1, results.length - 1)))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      const ex = results[activeIndex]
      if (ex) handleSelect(ex)
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!open || !mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-24 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-xl border border-zinc-700 bg-zinc-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Input row */}
        <div className="flex items-center gap-3 border-b border-zinc-800 px-4 py-3">
          <span className="text-lg text-zinc-500">⌕</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActiveIndex(0)
            }}
            placeholder={t('placeholder')}
            className="flex-1 bg-transparent text-sm text-zinc-100 placeholder-zinc-600 outline-none"
          />
          <kbd className="rounded border border-zinc-700 px-1.5 py-0.5 font-mono text-xs text-zinc-600">
            Esc
          </kbd>
        </div>

        {/* Results */}
        <ul className="max-h-80 overflow-y-auto py-2">
          {results.length === 0 && query.trim() ? (
            <li className="px-4 py-3 text-sm text-zinc-500">
              No exercises found for "{query.trim()}"
            </li>
          ) : (
            results.map((ex, i) => (
              <li key={ex.slug}>
                <button
                  type="button"
                  onClick={() => handleSelect(ex)}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                    i === activeIndex ? 'bg-zinc-800' : 'hover:bg-zinc-800/50'
                  }`}
                >
                  <span className="text-zinc-200">
                    <span className="text-zinc-500">{ex.builtIn} › </span>
                    {ex.title}
                  </span>
                  <span
                    className={`ml-4 shrink-0 text-xs ${
                      ex.difficulty === 'beginner'
                        ? 'text-emerald-500'
                        : ex.difficulty === 'intermediate'
                          ? 'text-yellow-500'
                          : 'text-red-500'
                    }`}
                  >
                    {ex.difficulty}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>,
    document.body,
  )
}
