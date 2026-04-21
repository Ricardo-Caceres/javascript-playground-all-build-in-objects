import { useSelector } from 'react-redux'

interface ActionEntry {
  id: string
  type: string
  payload?: any
  timestamp: number
  duration?: number
  status?: 'pending' | 'fulfilled' | 'rejected'
}

export function useLegacyActionTimeline(): ActionEntry[] {
  return useSelector((state: any) => {
    const timelineState = state.timeline
    return timelineState?.actions ?? []
  })
}
