'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface SyncModeContextType {
  enabled: boolean
  setEnabled: (enabled: boolean) => void
}

const SyncModeContext = createContext<SyncModeContextType | undefined>(
  undefined
)

const SYNC_MODE_STORAGE_KEY = 'redux-comparison-sync-mode'

export function SyncModeProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabledState] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Load from sessionStorage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem(SYNC_MODE_STORAGE_KEY)
    if (stored === 'true') {
      setEnabledState(true)
    }
    setMounted(true)
  }, [])

  // Persist to sessionStorage when changed
  const setEnabled = (value: boolean) => {
    setEnabledState(value)
    sessionStorage.setItem(SYNC_MODE_STORAGE_KEY, String(value))
  }

  // Don't render provider until hydrated to prevent context access before mounting
  if (!mounted) {
    return null
  }

  return (
    <SyncModeContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </SyncModeContext.Provider>
  )
}

export function useSyncMode() {
  const context = useContext(SyncModeContext)
  if (!context) {
    throw new Error('useSyncMode must be used within SyncModeProvider')
  }
  return context
}
