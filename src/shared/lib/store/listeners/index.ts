// RTK listener middleware -- side-effect handlers (XP, badges, streaks, etc.)
//
// IMPORTANT: do NOT import from '@/shared/lib/store' here. That would create
// a circular dependency (store/index -> listeners -> store/index).
// Listeners import RootState from rootReducer.ts (safe) instead.
import { createListenerMiddleware } from '@reduxjs/toolkit'

export const listenerMiddleware = createListenerMiddleware()

// Untyped startListening -- listeners cast getState() as RootState themselves.
export const { startListening } = listenerMiddleware
