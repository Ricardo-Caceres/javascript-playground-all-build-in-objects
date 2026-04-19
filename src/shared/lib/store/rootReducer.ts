import { combineReducers } from '@reduxjs/toolkit'
import homeReducer from '@/features/home/presentation/store/homeSlice'
import progressReducer from '@/features/progress/presentation/store/progressSlice'
import gamificationReducer from '@/features/gamification/presentation/store/gamificationSlice'
import examReducer from '@/features/exam/presentation/store/examSlice'

export const rootReducer = combineReducers({
  home: homeReducer,
  progress: progressReducer,
  gamification: gamificationReducer,
  exam: examReducer,
})

export type RootState = ReturnType<typeof rootReducer>
