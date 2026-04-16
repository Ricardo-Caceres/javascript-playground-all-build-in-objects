import type { Middleware } from '@reduxjs/toolkit'
import type { RootState } from '@/shared/lib/store/rootReducer'
import { gamificationStorageAdapter } from '../adapters/gamificationStorageAdapter'

export const gamificationStorageMiddleware: Middleware<Record<string, never>, RootState> =
  (store) => (next) => (action) => {
    const result = next(action)
    gamificationStorageAdapter.save(store.getState().gamification)
    return result
  }
