import { createSelector } from '@reduxjs/toolkit'
import type { ToolkitRootState } from '@/features/redux-toolkit/infrastructure/store'

const selectToolkitCounterState = (state: ToolkitRootState) => state.counter

export const selectToolkitCounterValue = createSelector(
  [selectToolkitCounterState],
  (counter) => counter.value,
)
