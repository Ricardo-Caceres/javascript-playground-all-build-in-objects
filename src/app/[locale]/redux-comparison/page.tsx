'use client'

import { ReduxComparison } from '@/features/redux-comparison/presentation/components/ReduxComparison'
import { SyncModeProvider } from '@/features/redux-comparison/context/SyncModeContext'
import { Provider } from 'react-redux'
import { legacyReduxStore } from '@/features/redux-legacy/infrastructure/store'
import { reduxToolkitStore } from '@/features/redux-toolkit/infrastructure/store'

export default function ReduxComparisonPage() {
  return (
    <SyncModeProvider>
      <main className="min-h-screen bg-white p-6">
        <div className="mx-auto max-w-6xl">
          <Provider store={legacyReduxStore}>
            <Provider store={reduxToolkitStore}>
              <ReduxComparison />
            </Provider>
          </Provider>
        </div>
      </main>
    </SyncModeProvider>
  )
}
