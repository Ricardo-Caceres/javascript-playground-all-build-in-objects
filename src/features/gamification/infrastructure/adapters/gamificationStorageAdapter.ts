import type { GamificationState } from '@/features/gamification/domain/entities'

const STORAGE_KEY = 'js-practice-gamification'

export const gamificationStorageAdapter = {
  load(): GamificationState | null {
    if (typeof window === 'undefined') return null
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as GamificationState) : null
    } catch {
      return null
    }
  },

  save(state: GamificationState): void {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Storage quota exceeded -- silently ignore
    }
  },
}
