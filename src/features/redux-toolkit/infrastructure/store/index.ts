import { configureStore } from '@reduxjs/toolkit'
import { toolkitCounterReducer } from '@/features/redux-toolkit/presentation/store/slices'

export const reduxToolkitStore = configureStore({
  reducer: {
    counter: toolkitCounterReducer,
  },
})

export type ToolkitRootState = ReturnType<typeof reduxToolkitStore.getState>
export type ToolkitAppDispatch = typeof reduxToolkitStore.dispatch
