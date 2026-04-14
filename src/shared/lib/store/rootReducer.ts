import { combineReducers } from '@reduxjs/toolkit'
import homeReducer from '@/features/home/presentation/store/homeSlice'
import progressReducer from '@/features/progress/presentation/store/progressSlice'

export const rootReducer = combineReducers({
  home: homeReducer,
  progress: progressReducer,
})

export type RootState = ReturnType<typeof rootReducer>
