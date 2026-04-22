import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'
import { counterReducer } from '@/features/redux-legacy/presentation/store/reducers/counterReducer'
import { timelineReducer } from '@/features/redux-legacy/presentation/store/reducers/timelineReducer'
import { timelineMiddleware } from '@/features/redux-legacy/presentation/store/middleware'

const rootReducer = combineReducers({
  counter: counterReducer,
  timeline: timelineReducer,
})

export const legacyReduxStore = legacy_createStore(
  rootReducer,
  applyMiddleware(timelineMiddleware)
)

export type LegacyReduxStore = typeof legacyReduxStore
