'use client'

import { ReduxComparison } from '@/features/redux-comparison/presentation/components/ReduxComparison'
import { SyncModeProvider } from '@/features/redux-comparison/context/SyncModeContext'

export default function ReduxComparisonPage() {
  return (
    <SyncModeProvider>
      <main className="min-h-screen bg-white p-6">
        <div className="mx-auto max-w-6xl">
          <ReduxComparison />
        </div>
      </main>
    </SyncModeProvider>
  )
}
