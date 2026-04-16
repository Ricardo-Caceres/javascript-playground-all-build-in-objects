import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ExerciseProgress, ProgressState } from '@/features/progress/domain/entities'

const initialState: ProgressState = {
  exercises: {},
}

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    updateProgress: (
      state,
      action: PayloadAction<{
        slug: string
        status: ExerciseProgress['status']
        lastCode: string
        timedBonus?: number
      }>,
    ) => {
      const { slug, status, lastCode } = action.payload
      const existing = state.exercises[slug]
      state.exercises[slug] = {
        status,
        attempts: (existing?.attempts ?? 0) + 1,
        lastCode,
        completedAt:
          status === 'completed' ? new Date().toISOString() : existing?.completedAt,
      }
    },
    hydrateProgress: (_state, action: PayloadAction<ProgressState>) => {
      return action.payload
    },
  },
})

export const { updateProgress, hydrateProgress } = progressSlice.actions
export default progressSlice.reducer
