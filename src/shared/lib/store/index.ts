import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { localStorageMiddleware } from '@/features/progress/infrastructure/middleware/localStorageMiddleware'
import { localStorageAdapter } from '@/features/progress/infrastructure/adapters/storageAdapter'
import { hydrateProgress } from '@/features/progress/presentation/store/progressSlice'
import { gamificationStorageMiddleware } from '@/features/gamification/infrastructure/middleware/gamificationStorageMiddleware'
import { gamificationStorageAdapter } from '@/features/gamification/infrastructure/adapters/gamificationStorageAdapter'
import { hydrateGamification, initGamification } from '@/features/gamification/presentation/store/gamificationSlice'
import { listenerMiddleware } from '@/shared/lib/store/listeners'
import { registerGamificationListener } from '@/features/gamification/presentation/store/gamificationListener'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat(localStorageMiddleware, gamificationStorageMiddleware),
})

// Hydrate progress from localStorage
const savedProgress = localStorageAdapter.load()
if (savedProgress) {
  store.dispatch(hydrateProgress(savedProgress))
}

// Hydrate gamification from localStorage; generate userSeed on first run
const savedGamification = gamificationStorageAdapter.load()
if (savedGamification) {
  store.dispatch(hydrateGamification(savedGamification))
}
const seed =
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2)
store.dispatch(initGamification(seed))

// Register gamification side-effect listener
registerGamificationListener()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
