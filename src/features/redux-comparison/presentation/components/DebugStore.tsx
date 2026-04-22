'use client'

import { legacyReduxStore } from '@/features/redux-legacy/infrastructure/store'
import { reduxToolkitStore } from '@/features/redux-toolkit/infrastructure/store'
import { incrementCounter } from '@/features/redux-legacy/presentation/store/actions'
import { toolkitCounterActions } from '@/features/redux-toolkit/presentation/store/slices'

export function DebugStore() {
  const handleTestLegacy = () => {
    console.log('=== LEGACY STORE DEBUG ===')
    console.log('Store object:', legacyReduxStore)
    console.log('Store.dispatch:', typeof legacyReduxStore.dispatch)
    console.log('Store.getState:', typeof legacyReduxStore.getState)
    
    const initialState = legacyReduxStore.getState()
    console.log('Initial state:', initialState)
    
    const action = incrementCounter()
    console.log('Action to dispatch:', action)
    
    const dispatchResult = legacyReduxStore.dispatch(action)
    console.log('Dispatch returned:', dispatchResult)
    
    const newState = legacyReduxStore.getState()
    console.log('New state after dispatch:', newState)
    console.log('Counter changed?', initialState !== newState)
  }

  const handleTestToolkit = () => {
    console.log('=== TOOLKIT STORE DEBUG ===')
    console.log('Store object:', reduxToolkitStore)
    
    const initialState = reduxToolkitStore.getState()
    console.log('Initial state:', initialState)
    
    const action = toolkitCounterActions.increment()
    console.log('Action to dispatch:', action)
    
    const dispatchResult = reduxToolkitStore.dispatch(action)
    console.log('Dispatch returned:', dispatchResult)
    
    const newState = reduxToolkitStore.getState()
    console.log('New state after dispatch:', newState)
    console.log('Counter changed?', initialState !== newState)
  }

  return (
    <div className="border-2 border-red-500 p-4 my-4">
      <h3 className="font-bold text-red-700 mb-2">DEBUG PANEL</h3>
      <button
        onClick={handleTestLegacy}
        className="bg-red-500 text-white px-3 py-1 mr-2"
      >
        Test Legacy
      </button>
      <button
        onClick={handleTestToolkit}
        className="bg-blue-500 text-white px-3 py-1"
      >
        Test Toolkit
      </button>
      <p className="text-xs text-gray-600 mt-2">Check browser console</p>
    </div>
  )
}
