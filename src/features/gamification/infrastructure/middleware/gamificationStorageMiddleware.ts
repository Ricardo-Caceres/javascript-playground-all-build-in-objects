import type { Middleware } from '@reduxjs/toolkit'
import type { RootState } from '@/shared/lib/store/rootReducer'
import { gamificationStorageAdapter } from '../adapters/gamificationStorageAdapter'

export const gamificationStorageMiddleware: Middleware<Record<string, never>, RootState> =
  (store) => (next) => (action) => {
    const result = next(action)
    // TODO(Task 5): .gamification is added to RootState when gamificationReducer
    // is registered in rootReducer — TS error here is expected until then.
    gamificationStorageAdapter.save(store.getState().gamification)
    return result
  }
