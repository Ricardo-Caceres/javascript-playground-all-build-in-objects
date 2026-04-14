'use client'

import { Provider } from 'react-redux'
import { legacyReduxStore } from '@/features/redux-legacy/infrastructure/store'

export function LegacyReduxProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Provider store={legacyReduxStore}>{children}</Provider>
}
