import { createSlice } from '@reduxjs/toolkit'
import type { ToolkitCounterEntity } from '@/features/redux-toolkit/domain/entities'
import { simulateToolkitSync } from '../thunks'

const initialState: ToolkitCounterEntity = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'toolkitCounter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
    },
    decrement(state) {
      state.value -= 1
    },
    reset() {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(simulateToolkitSync.fulfilled, (state) => {
      state.value += 10
    })
  },
})

export const toolkitCounterActions = counterSlice.actions
export const toolkitCounterReducer = counterSlice.reducer
