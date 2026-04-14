import { combineReducers } from 'redux'
import { counterReducer } from './counterReducer'

export const legacyRootReducer = combineReducers({
  counter: counterReducer,
})

export type LegacyRootState = ReturnType<typeof legacyRootReducer>
