'use client'

'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import type { Store } from 'redux'

export function useStoreState<T>(store: Store<T>): T {
  return useSyncExternalStore(
    (listener) => store.subscribe(listener),
    () => store.getState(),
    () => store.getState()
  )
}

export function useStoreSelector<T, R>(store: Store<T>, selector: (state: T) => R): R {
  return useSyncExternalStore(
    (listener) => store.subscribe(listener),
    () => selector(store.getState()),
    () => selector(store.getState())
  )
}

import type { LegacyRootState } from '@/features/redux-legacy/presentation/store/reducers'
import type { ToolkitRootState } from '@/features/redux-toolkit/infrastructure/store'
import { legacyReduxStore } from '@/features/redux-legacy/infrastructure/store'
import { reduxToolkitStore } from '@/features/redux-toolkit/infrastructure/store'

interface ActionEntry {
  id: string
  type: string
  payload?: any
  timestamp: number
  duration?: number
  status?: 'pending' | 'fulfilled' | 'rejected'
}

export function useLegacyActionTimelineFromStore(): ActionEntry[] {
  return useStoreSelector(
    legacyReduxStore as any,
    (state: LegacyRootState) => {
      const timelineState = (state as any).timeline
      return timelineState?.actions ?? []
    }
  )
}

export function useToolkitActionTimelineFromStore(): ActionEntry[] {
  return useStoreSelector(
    reduxToolkitStore as any,
    (state: ToolkitRootState) => {
      const timelineState = (state as any).timeline
      return timelineState?.actions ?? []
    }
  )
}
