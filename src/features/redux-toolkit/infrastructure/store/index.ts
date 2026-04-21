import { configureStore } from '@reduxjs/toolkit'
import { toolkitCounterReducer, timelineReducer } from '@/features/redux-toolkit/presentation/store/slices'
import { timelineMiddleware } from '@/features/redux-toolkit/presentation/store/middleware'

export const reduxToolkitStore = configureStore({
  reducer: {
    counter: toolkitCounterReducer,
    timeline: timelineReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(timelineMiddleware),
})

export type ToolkitRootState = ReturnType<typeof reduxToolkitStore.getState>
export type ToolkitAppDispatch = typeof reduxToolkitStore.dispatch
