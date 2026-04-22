'use client'

import { legacyReduxStore } from '@/features/redux-legacy/infrastructure/store'
import { reduxToolkitStore } from '@/features/redux-toolkit/infrastructure/store'

export function DebugStore() {
  const handleConsoleLog = (storeName: 'legacy' | 'toolkit') => {
    const store = storeName === 'legacy' ? legacyReduxStore : reduxToolkitStore
    const state = store.getState()
    
    console.clear()
    console.log(
      `%c📊 ${storeName.toUpperCase()} STORE STATE`,
      'font-size: 16px; font-weight: bold; color: ' + (storeName === 'legacy' ? '#ef4444' : '#3b82f6')
    )
    console.log('Full State:', state)
    console.log('Counter:', state.counter?.value)
    console.log('Timeline:', state.timeline?.actions?.length, 'actions')
  }

  return (
    <div className="border-2 border-purple-500 bg-purple-50 p-4 rounded mb-4">
      <h3 className="font-bold text-purple-700 mb-3">🔬 Console Inspector</h3>
      <div className="flex gap-2">
        <button
          onClick={() => handleConsoleLog('legacy')}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 text-sm font-medium rounded transition"
        >
          📋 Log Legacy State
        </button>
        <button
          onClick={() => handleConsoleLog('toolkit')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 text-sm font-medium rounded transition"
        >
          📋 Log Toolkit State
        </button>
      </div>
      <p className="text-xs text-purple-700 mt-2">
        💡 Click buttons to log store state to browser console (F12). Use the Architecture and Last Action panels to understand implementation differences.
      </p>
    </div>
  )
}
