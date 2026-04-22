'use client'

import { useState, useCallback } from 'react'
import type { LegacyRootState } from '@/features/redux-legacy/presentation/store/reducers'
import type { ToolkitRootState } from '@/features/redux-toolkit/infrastructure/store'
import { legacyReduxStore } from '@/features/redux-legacy/infrastructure/store'
import { reduxToolkitStore } from '@/features/redux-toolkit/infrastructure/store'
import { useStoreSelector, useStoreState, useLegacyActionTimelineFromStore, useToolkitActionTimelineFromStore } from '../hooks'
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
  ArchitecturePanel,
  ActionAnalysisPanel,
  ComparisonDifferences,
  CodeFlowComparison,
} from '@/shared/components/redux-visualization'
import { useSyncMode } from '../../context/SyncModeContext'
import { DebugStore } from './DebugStore'

type ViewMode = 'side-by-side' | 'legacy' | 'toolkit'
type PanelType = 'demo' | 'state' | 'timeline' | 'devtools' | 'architecture' | 'action' | 'code-flow'

export function ReduxComparison() {
  const [viewMode, setViewMode] = useState<ViewMode>('side-by-side')
  const [activePanel, setActivePanel] = useState<PanelType>('demo')
  const { enabled: syncMode, setEnabled: setSyncMode } = useSyncMode()
  const [lastLegacyAction, setLastLegacyAction] = useState<any>(null)
  const [lastToolkitAction, setLastToolkitAction] = useState<any>(null)

  // Subscribe directly to stores, not via context
  const legacyDispatch = (action: any) => legacyReduxStore.dispatch(action)
  const legacyState = useStoreState(legacyReduxStore as any)
  const legacyCounterSelector = useCallback(
    (state: LegacyRootState) => state.counter?.value ?? 0,
    []
  )
  const legacyCounter = useStoreSelector(legacyReduxStore as any, legacyCounterSelector)
  const legacyActions = useLegacyActionTimelineFromStore()

  const toolkitDispatch = (action: any) => reduxToolkitStore.dispatch(action)
  const toolkitState = useStoreState(reduxToolkitStore as any)
  const toolkitCounterSelector = useCallback(
    (state: ToolkitRootState) => state.counter?.value ?? 0,
    []
  )
  const toolkitCounter = useStoreSelector(reduxToolkitStore as any, toolkitCounterSelector)
  const toolkitActions = useToolkitActionTimelineFromStore()

  const handleSyncToggle = () => {
    setSyncMode(!syncMode)
  }

  const handleLegacyIncrement = () => {
    const action = incrementCounter()
    setLastLegacyAction(action)
    legacyDispatch(action)
    if (syncMode) {
      const toolkitAction = toolkitCounterActions.increment()
      setLastToolkitAction(toolkitAction)
      toolkitDispatch(toolkitAction)
    }
  }

  const handleLegacyDecrement = () => {
    const action = decrementCounter()
    setLastLegacyAction(action)
    legacyDispatch(action)
    if (syncMode) {
      const toolkitAction = toolkitCounterActions.decrement()
      setLastToolkitAction(toolkitAction)
      toolkitDispatch(toolkitAction)
    }
  }

  const handleLegacyReset = () => {
    const action = resetCounter()
    setLastLegacyAction(action)
    legacyDispatch(action)
    if (syncMode) {
      const toolkitAction = toolkitCounterActions.reset()
      setLastToolkitAction(toolkitAction)
      toolkitDispatch(toolkitAction)
    }
  }

  const handleToolkitIncrement = () => {
    const toolkitAction = toolkitCounterActions.increment()
    setLastToolkitAction(toolkitAction)
    toolkitDispatch(toolkitAction)
    if (syncMode) {
      const legacyAction = incrementCounter()
      setLastLegacyAction(legacyAction)
      legacyDispatch(legacyAction)
    }
  }

  const handleToolkitDecrement = () => {
    const toolkitAction = toolkitCounterActions.decrement()
    setLastToolkitAction(toolkitAction)
    toolkitDispatch(toolkitAction)
    if (syncMode) {
      const legacyAction = decrementCounter()
      setLastLegacyAction(legacyAction)
      legacyDispatch(legacyAction)
    }
  }

  const handleToolkitReset = () => {
    const toolkitAction = toolkitCounterActions.reset()
    setLastToolkitAction(toolkitAction)
    toolkitDispatch(toolkitAction)
    if (syncMode) {
      const legacyAction = resetCounter()
      setLastLegacyAction(legacyAction)
      legacyDispatch(legacyAction)
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
        {activePanel === 'architecture' && (
          <ArchitecturePanel
            storeName={title.includes('Legacy') ? 'legacy' : 'toolkit'}
          />
        )}
        {activePanel === 'action' && (
          <ActionAnalysisPanel
            lastAction={title.includes('Legacy') ? lastLegacyAction : lastToolkitAction}
            storeName={title.includes('Legacy') ? 'legacy' : 'toolkit'}
          />
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <DebugStore />
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
          <div className="flex gap-2 border-t border-zinc-200 pt-3 flex-wrap">
            {(['demo', 'state', 'timeline', 'devtools', 'architecture', 'action', 'code-flow'] as const).map((panel) => (
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
                {panel === 'demo' && 'Demo'}
                {panel === 'state' && 'State'}
                {panel === 'timeline' && 'Timeline'}
                {panel === 'devtools' && 'DevTools'}
                {panel === 'architecture' && 'Architecture'}
                {panel === 'action' && 'Last Action'}
                {panel === 'code-flow' && '💻 Code Flow'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stores Display */}
      {viewMode === 'side-by-side' && (
        <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {renderStorePanel(
              'Redux Legacy',
              legacyCounter,
              legacyState,
              legacyActions,
              handleLegacyIncrement,
              handleLegacyDecrement,
              handleLegacyReset,
            )}
            {renderStorePanel(
              'Redux Toolkit',
              toolkitCounter,
              toolkitState,
              toolkitActions,
              handleToolkitIncrement,
              handleToolkitDecrement,
              handleToolkitReset,
            )}
          </div>
          {activePanel === 'code-flow' && <CodeFlowComparison />}
          {activePanel !== 'code-flow' && <ComparisonDifferences />}
        </div>
      )}

      {viewMode === 'legacy' &&
        renderStorePanel(
          'Redux Legacy',
          legacyCounter,
          legacyState,
          legacyActions,
          handleLegacyIncrement,
          handleLegacyDecrement,
          handleLegacyReset,
        )}

      {viewMode === 'toolkit' &&
        renderStorePanel(
          'Redux Toolkit',
          toolkitCounter,
          toolkitState,
          toolkitActions,
          handleToolkitIncrement,
          handleToolkitDecrement,
          handleToolkitReset,
        )}
    </div>
  )
}
