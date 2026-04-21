import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ActionEntry {
  id: string
  type: string
  payload?: any
  timestamp: number
  duration?: number
  status?: 'pending' | 'fulfilled' | 'rejected'
  synced?: boolean
}

interface TimelineState {
  actions: ActionEntry[]
}

const INITIAL_STATE: TimelineState = {
  actions: [],
}

const MAX_ACTIONS = 50

const timelineSlice = createSlice({
  name: 'timeline',
  initialState: INITIAL_STATE,
  reducers: {
    addAction: (state, action: PayloadAction<ActionEntry>) => {
      state.actions.unshift(action.payload)
      if (state.actions.length > MAX_ACTIONS) {
        state.actions.pop()
      }
    },
    updateAction: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<ActionEntry> }>
    ) => {
      const entry = state.actions.find((a) => a.id === action.payload.id)
      if (entry) {
        Object.assign(entry, action.payload.updates)
      }
    },
    clear: (state) => {
      state.actions = []
    },
  },
})

export const timelineReducer = timelineSlice.reducer
export const { addAction, updateAction, clear } = timelineSlice.actions
