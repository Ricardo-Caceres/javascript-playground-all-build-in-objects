import { Middleware } from '@reduxjs/toolkit'
import { addAction, updateAction } from '../slices/timelineSlice'

let actionCounter = 0

export const timelineMiddleware: Middleware = (store) => (next) => (action) => {
  // Skip Redux internal and timeline actions
  if (action.type.startsWith('@@') || action.type.startsWith('timeline/')) {
    return next(action)
  }

  const actionId = `toolkit-${++actionCounter}`
  const startTime = performance.now()

  // Dispatch to timeline
  store.dispatch(
    addAction({
      id: actionId,
      type: action.type,
      payload: action.payload,
      timestamp: Date.now(),
      status: 'fulfilled',
    })
  )

  try {
    const result = next(action)

    // Update duration
    const duration = Math.round(performance.now() - startTime)
    store.dispatch(
      updateAction({
        id: actionId,
        updates: { duration },
      })
    )

    return result
  } catch (error) {
    store.dispatch(
      updateAction({
        id: actionId,
        updates: { status: 'rejected' },
      })
    )
    throw error
  }
}
