import { useSelector } from 'react-redux'
import type { ToolkitRootState } from '@/features/redux-toolkit/infrastructure/store'

interface ActionEntry {
  id: string
  type: string
  payload?: any
  timestamp: number
  duration?: number
  status?: 'pending' | 'fulfilled' | 'rejected'
}

export function useToolkitActionTimeline(): ActionEntry[] {
  return useSelector(
    (state: ToolkitRootState) => state.timeline?.actions ?? []
  )
}
