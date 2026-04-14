import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from '../action-types'

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
})

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
})

export const resetCounter = () => ({
  type: RESET_COUNTER,
})

export type LegacyCounterAction =
  | ReturnType<typeof incrementCounter>
  | ReturnType<typeof decrementCounter>
  | ReturnType<typeof resetCounter>
