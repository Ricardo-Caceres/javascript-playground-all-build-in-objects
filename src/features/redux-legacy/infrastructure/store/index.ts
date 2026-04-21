import { legacy_createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import { legacyRootReducer } from '@/features/redux-legacy/presentation/store/reducers'
import { timelineReducer } from '@/features/redux-legacy/presentation/store/reducers/timelineReducer'
import { timelineMiddleware } from '@/features/redux-legacy/presentation/store/middleware'

const rootReducer = combineReducers({
  ...Object.fromEntries(
    Object.entries(legacyRootReducer as any).map(([key, value]) => [key, value])
  ),
  timeline: timelineReducer,
})

export const legacyReduxStore = legacy_createStore(
  rootReducer,
  applyMiddleware(timelineMiddleware)
)

export type LegacyReduxStore = typeof legacyReduxStore
