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

export function timelineReducer(
  state = INITIAL_STATE,
  action: any
): TimelineState {
  switch (action.type) {
    case 'TIMELINE/ADD_ACTION': {
      const newActions = [action.payload, ...state.actions]
      // Keep only last 50 actions
      if (newActions.length > MAX_ACTIONS) {
        newActions.pop()
      }
      return { ...state, actions: newActions }
    }

    case 'TIMELINE/UPDATE_ACTION': {
      return {
        ...state,
        actions: state.actions.map((a) =>
          a.id === action.payload.id ? { ...a, ...action.payload } : a
        ),
      }
    }

    case 'TIMELINE/CLEAR': {
      return INITIAL_STATE
    }

    default:
      return state
  }
}

export const timelineActions = {
  addAction: (entry: ActionEntry) => ({
    type: 'TIMELINE/ADD_ACTION',
    payload: entry,
  }),
  updateAction: (id: string, updates: Partial<ActionEntry>) => ({
    type: 'TIMELINE/UPDATE_ACTION',
    payload: { id, ...updates },
  }),
  clear: () => ({
    type: 'TIMELINE/CLEAR',
  }),
}
