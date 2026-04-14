import { createSlice } from '@reduxjs/toolkit'

interface HomeState {
  ready: boolean
}

const initialState: HomeState = {
  ready: true,
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    // Add reducers here
  },
})

export const homeActions = homeSlice.actions
export default homeSlice.reducer
