import type { Middleware } from '@reduxjs/toolkit'
import type { RootState } from '@/shared/lib/store/rootReducer'
import { localStorageAdapter } from '../adapters/storageAdapter'

export const localStorageMiddleware: Middleware<Record<string, never>, RootState> =
  (store) => (next) => (action) => {
    const result = next(action)
    localStorageAdapter.save(store.getState().progress)
    return result
  }
