'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { LegacyRootState } from '@/features/redux-legacy/presentation/store/reducers'
import type { ToolkitRootState } from '@/features/redux-toolkit/infrastructure/store'
import { legacyReduxStore } from '@/features/redux-legacy/infrastructure/store'
import { reduxToolkitStore } from '@/features/redux-toolkit/infrastructure/store'
import { useLegacyActionTimeline } from '@/features/redux-legacy/presentation/hooks'
import { useToolkitActionTimeline } from '@/features/redux-toolkit/presentation/hooks'
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from '@/features/redux-legacy/presentation/store/actions'
import { toolkitCounterActions } from '@/features/redux-toolkit/presentation/store/slices'
import {
  StatePanel,
  TimelinePanel,
  DevToolsPanel,
} from '@/shared/components/redux-visualization'
import { useSyncMode } from '../../context/SyncModeContext'

type ViewMode = 'side-by-side' | 'legacy' | 'toolkit'

export function ReduxComparison() {
  const [viewMode, setViewMode] = useState<ViewMode>('side-by-side')
  const [activePanel, setActivePanel] = useState<'demo' | 'state' | 'timeline' | 'devtools'>('demo')
  const { enabled: syncMode, setEnabled: setSyncMode } = useSyncMode()

  // Access dispatch directly from stores to avoid context mixing with nested Providers
  const legacyDispatch = legacyReduxStore.dispatch
  const legacyState = useSelector((state: LegacyRootState) => state)
  const legacyCounter = useSelector((state: LegacyRootState) => state.counter?.value ?? 0)
  const legacyActions = useLegacyActionTimeline()

  const toolkitDispatch = reduxToolkitStore.dispatch
  const toolkitState = useSelector((state: ToolkitRootState) => state)
  const toolkitCounter = useSelector((state: ToolkitRootState) => state.counter?.value ?? 0)
  const toolkitActions = useToolkitActionTimeline()

  const handleSyncToggle = () => {
    setSyncMode(!syncMode)
  }

  const handleLegacyIncrement = () => {
    legacyDispatch(incrementCounter())
    if (syncMode) {
      toolkitDispatch(toolkitCounterActions.increment())
    }
  }

  const handleToolkitIncrement = () => {
    toolkitDispatch(toolkitCounterActions.increment())
    if (syncMode) {
      legacyDispatch(incrementCounter())
    }
  }

  const renderStorePanel = (
    title: string,
    counter: number,
    state: any,
    actions: any[],
    onIncrement: () => void,
    onDecrement: () => void,
    onReset: () => void
  ) => {
    return (
      <div className="space-y-4">
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold text-zinc-950">{title}</h2>
          <div className="mb-4 rounded-lg bg-zinc-50 p-4">
            <p className="text-sm text-zinc-500">Current value</p>
            <p className="text-4xl font-bold text-zinc-950">{counter}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onIncrement}
              className="flex-1 rounded bg-zinc-950 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              type="button"
            >
              +
            </button>
            <button
              onClick={onDecrement}
              className="flex-1 rounded border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-50"
              type="button"
            >
              -
            </button>
            <button
              onClick={onReset}
              className="flex-1 rounded border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-50"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>

        {activePanel === 'state' && <StatePanel state={state} title={`${title} State`} />}
        {activePanel === 'timeline' && (
          <TimelinePanel
            actions={actions}
            title={`${title} Timeline`}
          />
        )}
        {activePanel === 'devtools' && (
          <DevToolsPanel
            actions={actions}
            state={state}
            title={`${title} DevTools`}
          />
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-lg border border-zinc-200 bg-white p-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-zinc-950">Redux Store Comparison</h1>
          <p className="text-sm text-zinc-600">
            Side-by-side visualization of Redux Legacy vs Redux Toolkit
          </p>
        </div>

        <div className="space-y-3">
          {/* Sync Mode Toggle */}
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={syncMode}
              onChange={handleSyncToggle}
              className="h-4 w-4"
            />
            <span className="text-sm font-medium text-zinc-950">
              Sync Mode (dispatch to both stores)
            </span>
          </label>

          {/* View Mode Selection */}
          <div className="flex gap-2">
            {(['side-by-side', 'legacy', 'toolkit'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  viewMode === mode
                    ? 'bg-zinc-950 text-white'
                    : 'bg-zinc-100 text-zinc-950 hover:bg-zinc-200'
                }`}
                type="button"
              >
                {mode === 'side-by-side' && '⬌ Side-by-Side'}
                {mode === 'legacy' && 'Legacy'}
                {mode === 'toolkit' && 'Toolkit'}
              </button>
            ))}
          </div>

          {/* Panel Selection */}
          <div className="flex gap-2 border-t border-zinc-200 pt-3">
            {(['demo', 'state', 'timeline', 'devtools'] as const).map((panel) => (
              <button
                key={panel}
                onClick={() => setActivePanel(panel)}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  activePanel === panel
                    ? 'bg-zinc-950 text-white'
                    : 'bg-zinc-100 text-zinc-950 hover:bg-zinc-200'
                }`}
                type="button"
              >
                {panel.charAt(0).toUpperCase() + panel.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stores Display */}
      {viewMode === 'side-by-side' && (
        <div className="grid gap-6 lg:grid-cols-2">
          {renderStorePanel(
            'Redux Legacy',
            legacyCounter,
            legacyState,
            legacyActions,
            handleLegacyIncrement,
            () => {
              legacyDispatch(decrementCounter())
              if (syncMode) {
                toolkitDispatch(toolkitCounterActions.decrement())
              }
            },
            () => {
              legacyDispatch(resetCounter())
              if (syncMode) {
                toolkitDispatch(toolkitCounterActions.reset())
              }
            }
          )}
          {renderStorePanel(
            'Redux Toolkit',
            toolkitCounter,
            toolkitState,
            toolkitActions,
            handleToolkitIncrement,
            () => {
              toolkitDispatch(toolkitCounterActions.decrement())
              if (syncMode) {
                legacyDispatch(decrementCounter())
              }
            },
            () => {
              toolkitDispatch(toolkitCounterActions.reset())
              if (syncMode) {
                legacyDispatch(resetCounter())
              }
            }
          )}
        </div>
      )}

      {viewMode === 'legacy' &&
        renderStorePanel(
          'Redux Legacy',
          legacyCounter,
          legacyState,
          legacyActions,
          handleLegacyIncrement,
          () => legacyDispatch(decrementCounter()),
          () => legacyDispatch(resetCounter())
        )}

      {viewMode === 'toolkit' &&
        renderStorePanel(
          'Redux Toolkit',
          toolkitCounter,
          toolkitState,
          toolkitActions,
          handleToolkitIncrement,
          () => toolkitDispatch(toolkitCounterActions.decrement()),
          () => toolkitDispatch(toolkitCounterActions.reset())
        )}
    </div>
  )
}
