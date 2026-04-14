import type { LegacyCounterEntity } from '@/features/redux-legacy/domain/entities'
import type { LegacyCounterAction } from '../actions'
import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from '../action-types'

const initialState: LegacyCounterEntity = {
  value: 0,
}

export function counterReducer(
  state = initialState,
  action: LegacyCounterAction,
): LegacyCounterEntity {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - 1,
      }
    case RESET_COUNTER:
      return initialState
    default:
      return state
  }
}
