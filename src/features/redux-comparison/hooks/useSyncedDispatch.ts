import { useDispatch } from 'react-redux'
import { useSyncMode } from '../context/SyncModeContext'

// Map Legacy action types to Toolkit action types
const ACTION_MAP: Record<string, string> = {
  'INCREMENT_COUNTER': 'counter/increment',
  'DECREMENT_COUNTER': 'counter/decrement',
  'RESET_COUNTER': 'counter/reset',
}

export function useSyncedDispatch() {
  const legacyDispatch = useDispatch()
  const toolkitDispatch = useDispatch()
  const { enabled } = useSyncMode()

  return (action: any, isLegacy: boolean = true) => {
    const dispatch = isLegacy ? legacyDispatch : toolkitDispatch
    const result = dispatch(action)

    if (enabled && typeof action === 'object' && action.type) {
      const mappedType = ACTION_MAP[action.type]
      if (mappedType) {
        const otherDispatch = isLegacy ? toolkitDispatch : legacyDispatch
        const otherAction = {
          type: mappedType,
          payload: action.payload,
        }
        otherDispatch(otherAction)
      }
    }

    return result
  }
}
