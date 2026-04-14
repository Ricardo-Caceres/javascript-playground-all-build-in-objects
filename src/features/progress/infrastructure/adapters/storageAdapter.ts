import type { ProgressState } from '@/features/progress/domain/entities'

const STORAGE_KEY = 'js-practice-progress'

export interface StorageAdapter {
  load(): ProgressState | null
  save(state: ProgressState): void
}

export const localStorageAdapter: StorageAdapter = {
  load(): ProgressState | null {
    if (typeof window === 'undefined') return null
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as ProgressState) : null
    } catch {
      return null
    }
  },

  save(state: ProgressState): void {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Storage quota exceeded or unavailable — silently ignore
    }
  },
}
