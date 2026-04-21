import { ReduxComparison } from '@/features/redux-comparison/presentation/components/ReduxComparison'
import { SyncModeProvider } from '@/features/redux-comparison/context/SyncModeContext'
import { Provider } from 'react-redux'
import { legacyReduxStore } from '@/features/redux-legacy/infrastructure/store'
import { reduxToolkitStore } from '@/features/redux-toolkit/infrastructure/store'

export const metadata = {
  title: 'Redux Comparison | JavaScript Playground',
  description: 'Side-by-side comparison of Redux Legacy vs Redux Toolkit',
}

function StoresWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={legacyReduxStore}>
      <Provider store={reduxToolkitStore}>
        <SyncModeProvider>
          {children}
        </SyncModeProvider>
      </Provider>
    </Provider>
  )
}

export default function ReduxComparisonPage() {
  return (
    <main className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-6xl">
        <StoresWrapper>
          <ReduxComparison />
        </StoresWrapper>
      </div>
    </main>
  )
}
