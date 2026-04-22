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
      router.push(pathname, { locale: newLocale })
      // Force page reload to ensure all translations are updated
      window.location.reload()
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
