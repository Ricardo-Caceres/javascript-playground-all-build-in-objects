import { legacy_createStore } from 'redux'
import { legacyRootReducer } from '@/features/redux-legacy/presentation/store/reducers'

export const legacyReduxStore = legacy_createStore(legacyRootReducer)

export type LegacyReduxStore = typeof legacyReduxStore
