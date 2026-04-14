import type { LegacyRootState } from '../reducers'

export const selectLegacyCounter = (state: LegacyRootState) => state.counter
export const selectLegacyCounterValue = (state: LegacyRootState) =>
  selectLegacyCounter(state).value
