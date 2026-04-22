'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(newLocale: string) {
    if (locale !== newLocale) {
      // Navigate to the same path but with the new locale
      const newPath = pathname.startsWith('/') ? pathname : `/${pathname}`
      const newUrl = `/${newLocale}${newPath}`
      window.location.href = newUrl
    }
  }

  return (
    <div className="flex items-center gap-1 text-xs text-zinc-400">
      <span>🌐</span>
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-zinc-600">|</span>}
          <button
            type="button"
            onClick={() => switchLocale(l)}
            className={`uppercase transition-colors ${
              locale === l
                ? 'font-semibold text-emerald-400'
                : 'hover:text-zinc-200'
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  )
}
