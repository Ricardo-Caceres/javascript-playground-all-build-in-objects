import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { localStorageMiddleware } from '@/features/progress/infrastructure/middleware/localStorageMiddleware'
import { localStorageAdapter } from '@/features/progress/infrastructure/adapters/storageAdapter'
import { hydrateProgress } from '@/features/progress/presentation/store/progressSlice'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})

// Hydrate progress from localStorage on startup (client-side only)
const savedProgress = localStorageAdapter.load()
if (savedProgress) {
  store.dispatch(hydrateProgress(savedProgress))
}

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
