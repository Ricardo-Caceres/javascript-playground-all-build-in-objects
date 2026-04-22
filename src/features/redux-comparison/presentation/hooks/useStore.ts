'use client'

import { useEffect, useState, useCallback } from 'react'
import type { Store } from 'redux'

export function useStoreState<T>(store: Store<T>): T {
  const [state, setState] = useState<T>(() => store.getState())

  useEffect(() => {
    // Update state when store changes
    const unsubscribe = store.subscribe(() => {
      setState(store.getState())
    })
    return unsubscribe
  }, [store])

  return state
}

export function useStoreSelector<T, R>(store: Store<T>, selector: (state: T) => R): R {
  const [selected, setSelected] = useState<R>(() => selector(store.getState()))

  useEffect(() => {
    let previousValue = selector(store.getState())
    
    const unsubscribe = store.subscribe(() => {
      const nextValue = selector(store.getState())
      if (previousValue !== nextValue) {
        previousValue = nextValue
        setSelected(nextValue)
      }
    })
    
    return unsubscribe
  }, [store, selector])

  return selected
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
