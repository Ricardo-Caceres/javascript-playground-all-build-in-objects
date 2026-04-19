// src/features/exam/presentation/store/examSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Exercise } from '@/shared/types/exercises'

export type ExamStatus = 'idle' | 'running' | 'finished'
export type ExamResult = 'passed' | 'skipped'

export interface ExamState {
  status: ExamStatus
  exercises: Exercise[]
  currentIndex: number
  results: Record<string, ExamResult>   // slug → result
  startTime: number | null              // Date.now() when started
  endTime: number | null                // Date.now() when finished
}

const initialState: ExamState = {
  status: 'idle',
  exercises: [],
  currentIndex: 0,
  results: {},
  startTime: null,
  endTime: null,
}

export const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    startExam: (state, action: PayloadAction<Exercise[]>) => {
      state.status = 'running'
      state.exercises = action.payload
      state.currentIndex = 0
      state.results = {}
      state.startTime = Date.now()
      state.endTime = null
    },

    markResult: (
      state,
      action: PayloadAction<{ slug: string; result: ExamResult }>,
    ) => {
      state.results[action.payload.slug] = action.payload.result
    },

    nextExercise: (state) => {
      if (state.currentIndex >= state.exercises.length - 1) {
        state.status = 'finished'
        state.endTime = Date.now()
      } else {
        state.currentIndex += 1
      }
    },

    finishExam: (state) => {
      // Mark all unresolved exercises as skipped
      for (const ex of state.exercises) {
        if (!state.results[ex.slug]) {
          state.results[ex.slug] = 'skipped'
        }
      }
      state.status = 'finished'
      state.endTime = Date.now()
    },

    resetExam: () => initialState,
  },
})

export const { startExam, markResult, nextExercise, finishExam, resetExam } =
  examSlice.actions
export default examSlice.reducer
