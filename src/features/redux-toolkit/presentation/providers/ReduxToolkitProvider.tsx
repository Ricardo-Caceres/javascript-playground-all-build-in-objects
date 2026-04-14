'use client'

import { Provider } from 'react-redux'
import { reduxToolkitStore } from '@/features/redux-toolkit/infrastructure/store'

export function ReduxToolkitProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Provider store={reduxToolkitStore}>{children}</Provider>
}
