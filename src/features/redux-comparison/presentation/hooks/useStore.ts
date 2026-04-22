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
