import { Middleware } from 'redux'
import { timelineActions } from '../reducers/timelineReducer'

let actionCounter = 0
const actionTimestamps = new Map<string, number>()

export const timelineMiddleware: Middleware = (store) => (next) => (action) => {
  // Skip Redux internal actions
  if (action.type.startsWith('@@')) {
    return next(action)
  }

  // Skip timeline actions to avoid infinite loops
  if (action.type.startsWith('TIMELINE/')) {
    return next(action)
  }

  const actionId = `legacy-${++actionCounter}`
  const startTime = performance.now()
  actionTimestamps.set(actionId, startTime)

  // Dispatch to timeline before executing action
  store.dispatch(
    timelineActions.addAction({
      id: actionId,
      type: action.type,
      payload: action.payload,
      timestamp: Date.now(),
      status: 'fulfilled',
    })
  )

  try {
    const result = next(action)

    // Update duration after action completes
    const endTime = performance.now()
    const duration = Math.round(endTime - startTime)
    store.dispatch(
      timelineActions.updateAction(actionId, { duration })
    )

    return result
  } catch (error) {
    // Mark action as rejected on error
    store.dispatch(
      timelineActions.updateAction(actionId, { status: 'rejected' })
    )
    throw error
  }
}
