import { combineReducers } from '@reduxjs/toolkit'
import homeReducer from '@/features/home/presentation/store/homeSlice'
import progressReducer from '@/features/progress/presentation/store/progressSlice'
import gamificationReducer from '@/features/gamification/presentation/store/gamificationSlice'

export const rootReducer = combineReducers({
  home: homeReducer,
  progress: progressReducer,
  gamification: gamificationReducer,
})

export type RootState = ReturnType<typeof rootReducer>
