# Redux Interactive Demos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enhance Redux Legacy and Toolkit demos with real-time state visualization, action timeline, DevTools panel, and add a new comparison page with sync mode.

**Architecture:** 
- Shared UI components (StatePanel, TimelinePanel, DevToolsPanel) used by both demos and comparison page
- Middleware in each store captures actions with timestamp and duration
- Custom hooks expose action timeline to React components
- React Context manages sync mode state in comparison page
- Sync logic maps action types between Legacy and RTK stores

**Tech Stack:** React Context, Redux middleware, Next.js, Tailwind CSS

---

## File Structure

**New files to create:**
- `src/shared/components/redux-visualization/StatePanel.tsx` — display state as JSON
- `src/shared/components/redux-visualization/TimelinePanel.tsx` — show action history
- `src/shared/components/redux-visualization/DevToolsPanel.tsx` — DevTools-like visualization
- `src/features/redux-legacy/infrastructure/store/middleware.ts` — action capture middleware
- `src/features/redux-legacy/presentation/hooks/useActionTimeline.ts` — timeline hook
- `src/features/redux-legacy/presentation/store/timelineSlice.ts` — timeline state (Redux slice for legacy)
- `src/features/redux-toolkit/infrastructure/store/middleware.ts` — action capture middleware
- `src/features/redux-toolkit/presentation/hooks/useActionTimeline.ts` — timeline hook
- `src/features/redux-comparison/presentation/context/SyncModeContext.tsx` — sync mode context
- `src/features/redux-comparison/presentation/hooks/useSyncedDispatch.ts` — synced dispatch hook
- `src/features/redux-comparison/presentation/components/ReduxComparison.tsx` — main comparison container
- `src/app/[locale]/redux-comparison/page.tsx` — comparison page route

**Files to modify:**
- `src/features/redux-legacy/presentation/components/LegacyReduxDemo.tsx` — wrap with panels and tabs
- `src/features/redux-legacy/infrastructure/store/store.ts` — add middleware to store
- `src/features/redux-toolkit/presentation/components/ReduxToolkitDemo.tsx` — wrap with panels and tabs
- `src/features/redux-toolkit/infrastructure/store/store.ts` — add middleware to store

---

## Task 1: Create StatePanel Component

**Files:**
- Create: `src/shared/components/redux-visualization/StatePanel.tsx`

- [ ] **Step 1: Create StatePanel component**

```tsx
'use client'

import { useState } from 'react'

interface StatePanelProps {
  state: any
  title?: string
}

export function StatePanel({ state, title = 'State' }: StatePanelProps) {
  const [expanded, setExpanded] = useState(false)
  const jsonString = JSON.stringify(state, null, 2)

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString)
  }

  const handleToggle = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-zinc-300">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="px-2 py-1 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded transition-colors"
            type="button"
          >
            Copy
          </button>
          <button
            onClick={handleToggle}
            className="px-2 py-1 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded transition-colors"
            type="button"
          >
            {expanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
      </div>
      
      {expanded ? (
        <pre className="text-xs text-zinc-400 overflow-x-auto max-h-96 overflow-y-auto bg-zinc-950 p-3 rounded font-mono whitespace-pre-wrap">
          {jsonString}
        </pre>
      ) : (
        <pre className="text-xs text-zinc-400 overflow-x-auto max-h-20 overflow-y-hidden bg-zinc-950 p-3 rounded font-mono line-clamp-3">
          {jsonString}
        </pre>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/shared/components/redux-visualization/StatePanel.tsx
git commit -m "feat: add StatePanel component for Redux state visualization"
```

---

## Task 2: Create TimelinePanel Component

**Files:**
- Create: `src/shared/components/redux-visualization/TimelinePanel.tsx`

- [ ] **Step 1: Create TimelinePanel component**

```tsx
'use client'

import { useState } from 'react'

export interface ActionEntry {
  id: string
  type: string
  payload?: any
  timestamp: number
  duration?: number
  status?: 'pending' | 'fulfilled' | 'rejected'
  synced?: boolean
}

interface TimelinePanelProps {
  actions: ActionEntry[]
  onClear: () => void
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp)
  return date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

function getStatusBadge(status?: string): string {
  switch (status) {
    case 'pending':
      return '🟡'
    case 'fulfilled':
      return '🟢'
    case 'rejected':
      return '🔴'
    default:
      return '⚪'
  }
}

export function TimelinePanel({ actions, onClear }: TimelinePanelProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedAction = actions.find((a) => a.id === selectedId)

  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-zinc-300">Action Timeline</h3>
        <button
          onClick={onClear}
          className="px-2 py-1 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded transition-colors"
          type="button"
        >
          Clear
        </button>
      </div>

      <div className="space-y-2">
        {/* Scrollable action list */}
        <div className="max-h-48 overflow-y-auto">
          {actions.length === 0 ? (
            <p className="text-xs text-zinc-500 p-2">No actions recorded</p>
          ) : (
            <div className="space-y-1">
              {[...actions].reverse().map((action) => (
                <button
                  key={action.id}
                  onClick={() => setSelectedId(action.id)}
                  className={`w-full text-left px-2 py-1 text-xs rounded transition-colors ${
                    selectedId === action.id
                      ? 'bg-zinc-700 text-zinc-100'
                      : 'bg-zinc-800 hover:bg-zinc-750 text-zinc-400'
                  }`}
                  type="button"
                >
                  <span className="text-xs mr-1">
                    {getStatusBadge(action.status)}
                  </span>
                  <span className="font-mono text-zinc-500">
                    [{formatTime(action.timestamp)}]
                  </span>
                  <span className="ml-2 text-zinc-300">{action.type}</span>
                  {action.duration && (
                    <span className="ml-2 text-zinc-600">
                      ({action.duration.toFixed(2)}ms)
                    </span>
                  )}
                  {action.synced && <span className="ml-2 text-yellow-400">🔗</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Detail view */}
        {selectedAction && (
          <div className="mt-3 p-3 bg-zinc-950 rounded border border-zinc-700">
            <p className="text-xs text-zinc-500 mb-2">Selected Action:</p>
            <p className="font-mono text-xs text-zinc-300 mb-2">{selectedAction.type}</p>
            {selectedAction.payload && (
              <pre className="text-xs text-zinc-400 overflow-x-auto max-h-32 overflow-y-auto font-mono bg-zinc-900 p-2 rounded">
                {JSON.stringify(selectedAction.payload, null, 2)}
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/shared/components/redux-visualization/TimelinePanel.tsx
git commit -m "feat: add TimelinePanel component for action history visualization"
```

---

## Task 3: Create DevToolsPanel Component

**Files:**
- Create: `src/shared/components/redux-visualization/DevToolsPanel.tsx`

- [ ] **Step 1: Create DevToolsPanel component**

```tsx
'use client'

import { useState } from 'react'
import type { ActionEntry } from './TimelinePanel'

interface DevToolsPanelProps {
  state: any
  actions: ActionEntry[]
  title?: string
}

function StateTree({ state, depth = 0 }: { state: any; depth?: number }) {
  const [expanded, setExpanded] = useState(depth < 2)

  if (state === null || state === undefined) {
    return <span className="text-zinc-500">{String(state)}</span>
  }

  if (typeof state !== 'object') {
    return <span className="text-yellow-400">{JSON.stringify(state)}</span>
  }

  if (Array.isArray(state)) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors"
          type="button"
        >
          {expanded ? '▼' : '▶'} [{state.length}]
        </button>
        {expanded && (
          <div className="ml-4 mt-1 space-y-1">
            {state.map((item, idx) => (
              <div key={idx} className="text-xs">
                <span className="text-blue-400">{idx}:</span>{' '}
                <StateTree state={item} depth={depth + 1} />
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const keys = Object.keys(state)
  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors"
        type="button"
      >
        {expanded ? '▼' : '▶'} {'{' + keys.length + '}'}
      </button>
      {expanded && (
        <div className="ml-4 mt-1 space-y-1">
          {keys.map((key) => (
            <div key={key} className="text-xs">
              <span className="text-cyan-400">"{key}":</span>{' '}
              <StateTree state={state[key]} depth={depth + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function DevToolsPanel({
  state,
  actions,
  title = 'DevTools',
}: DevToolsPanelProps) {
  const [view, setView] = useState<'actions' | 'tree'>('actions')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selectedAction = actions.find((a) => a.id === selectedId)

  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-zinc-300">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setView('actions')}
            className={`px-2 py-1 text-xs rounded transition-colors ${
              view === 'actions'
                ? 'bg-zinc-700 text-zinc-100'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-400'
            }`}
            type="button"
          >
            Actions
          </button>
          <button
            onClick={() => setView('tree')}
            className={`px-2 py-1 text-xs rounded transition-colors ${
              view === 'tree'
                ? 'bg-zinc-700 text-zinc-100'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-400'
            }`}
            type="button"
          >
            State Tree
          </button>
        </div>
      </div>

      {view === 'actions' ? (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {actions.length === 0 ? (
            <p className="text-xs text-zinc-500">No actions</p>
          ) : (
            <div className="space-y-1">
              {[...actions].reverse().map((action) => (
                <button
                  key={action.id}
                  onClick={() => setSelectedId(action.id)}
                  className={`w-full text-left px-2 py-1 text-xs rounded transition-colors ${
                    selectedId === action.id
                      ? 'bg-zinc-700 text-zinc-100'
                      : 'bg-zinc-800 hover:bg-zinc-750 text-zinc-400'
                  }`}
                  type="button"
                >
                  <span className="font-mono">{action.type}</span>
                  {action.duration && (
                    <span className="ml-2 text-zinc-600">
                      {action.duration.toFixed(1)}ms
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {selectedAction && (
            <div className="mt-3 p-3 bg-zinc-950 rounded border border-zinc-700">
              <p className="text-xs text-zinc-500 mb-2">Payload:</p>
              <pre className="text-xs text-zinc-300 overflow-x-auto max-h-24 overflow-y-auto font-mono">
                {selectedAction.payload
                  ? JSON.stringify(selectedAction.payload, null, 2)
                  : '(no payload)'}
              </pre>
            </div>
          )}
        </div>
      ) : (
        <div className="text-xs text-zinc-300 max-h-64 overflow-auto font-mono bg-zinc-950 p-3 rounded">
          <StateTree state={state} />
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/shared/components/redux-visualization/DevToolsPanel.tsx
git commit -m "feat: add DevToolsPanel component with action list and state tree views"
```

---

## Task 4: Create Redux Legacy Timeline Slice

**Files:**
- Create: `src/features/redux-legacy/presentation/store/timelineSlice.ts`

- [ ] **Step 1: Create timeline slice**

```tsx
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface TimelineAction {
  id: string
  type: string
  payload?: any
  timestamp: number
  duration?: number
}

interface TimelineState {
  actions: TimelineAction[]
}

const initialState: TimelineState = {
  actions: [],
}

export const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    captureAction: (state, action: PayloadAction<TimelineAction>) => {
      state.actions.push(action.payload)
      // Keep only last 50 actions
      if (state.actions.length > 50) {
        state.actions.shift()
      }
    },
    clearTimeline: (state) => {
      state.actions = []
    },
  },
})

export const { captureAction, clearTimeline } = timelineSlice.actions
export default timelineSlice.reducer
```

- [ ] **Step 2: Commit**

```bash
git add src/features/redux-legacy/presentation/store/timelineSlice.ts
git commit -m "feat: add Redux Legacy timeline slice for action capture"
```

---

## Task 5: Create Redux Legacy Middleware

**Files:**
- Create: `src/features/redux-legacy/infrastructure/store/middleware.ts`

- [ ] **Step 1: Create middleware**

```ts
import type { Middleware } from '@reduxjs/toolkit'
import { captureAction } from '@/features/redux-legacy/presentation/store/timelineSlice'
import type { LegacyRootState } from '../store'

export function createTimelineMiddleware(): Middleware<{}, LegacyRootState> {
  let actionIndex = 0

  return (store) => (next) => (action) => {
    const startTime = performance.now()

    const result = next(action)

    const duration = performance.now() - startTime

    // Don't capture timeline actions themselves or @@redux actions
    if (
      typeof action === 'object' &&
      action !== null &&
      'type' in action &&
      typeof action.type === 'string' &&
      !action.type.startsWith('@@redux') &&
      action.type !== 'timeline/captureAction'
    ) {
      store.dispatch(
        captureAction({
          id: `legacy-${Date.now()}-${actionIndex++}`,
          type: action.type,
          payload: action.payload,
          timestamp: Date.now(),
          duration,
        })
      )
    }

    return result
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/features/redux-legacy/infrastructure/store/middleware.ts
git commit -m "feat: add Redux Legacy middleware for action timeline capture"
```

---

## Task 6: Update Redux Legacy Store to Include Middleware

**Files:**
- Modify: `src/features/redux-legacy/infrastructure/store/store.ts`

- [ ] **Step 1: Check current store structure**

```bash
cat src/features/redux-legacy/infrastructure/store/store.ts
```

- [ ] **Step 2: Update store to include timeline reducer and middleware**

Assuming the current store looks like:
```ts
import { createStore, combineReducers } from 'redux'
import counterReducer from '@/features/redux-legacy/presentation/store/reducers'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = createStore(rootReducer)
export type LegacyRootState = ReturnType<typeof rootReducer>
```

Replace with:
```ts
import { createStore, combineReducers, applyMiddleware } from 'redux'
import counterReducer from '@/features/redux-legacy/presentation/store/reducers'
import timelineReducer from '@/features/redux-legacy/presentation/store/timelineSlice'
import { createTimelineMiddleware } from '../store/middleware'

const rootReducer = combineReducers({
  counter: counterReducer,
  timeline: timelineReducer,
})

const timelineMiddleware = createTimelineMiddleware()

export const store = createStore(rootReducer, applyMiddleware(timelineMiddleware))

export type LegacyRootState = ReturnType<typeof rootReducer>
```

- [ ] **Step 3: Commit**

```bash
git add src/features/redux-legacy/infrastructure/store/store.ts
git commit -m "feat: add timeline reducer and middleware to Redux Legacy store"
```

---

## Task 7: Create Redux Legacy Timeline Hook

**Files:**
- Create: `src/features/redux-legacy/presentation/hooks/useActionTimeline.ts`

- [ ] **Step 1: Create hook**

```ts
import { useSelector } from 'react-redux'
import type { LegacyRootState } from '@/features/redux-legacy/infrastructure/store/store'
import type { TimelineAction } from '@/features/redux-legacy/presentation/store/timelineSlice'

export function useActionTimeline(): TimelineAction[] {
  return useSelector((state: LegacyRootState) => state.timeline.actions)
}
```

- [ ] **Step 2: Commit**

```bash
git add src/features/redux-legacy/presentation/hooks/useActionTimeline.ts
git commit -m "feat: add useActionTimeline hook for Redux Legacy"
```

---

## Task 8: Repeat Tasks 4-7 for Redux Toolkit

**Files:**
- Create: `src/features/redux-toolkit/presentation/store/timelineSlice.ts`
- Create: `src/features/redux-toolkit/infrastructure/store/middleware.ts`
- Modify: `src/features/redux-toolkit/infrastructure/store/store.ts`
- Create: `src/features/redux-toolkit/presentation/hooks/useActionTimeline.ts`

- [ ] **Step 1: Create Redux Toolkit timeline slice**

```tsx
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TimelineAction {
  id: string
  type: string
  payload?: any
  timestamp: number
  duration?: number
}

interface TimelineState {
  actions: TimelineAction[]
}

const initialState: TimelineState = {
  actions: [],
}

export const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    captureAction: (state, action: PayloadAction<TimelineAction>) => {
      state.actions.push(action.payload)
      if (state.actions.length > 50) {
        state.actions.shift()
      }
    },
    clearTimeline: (state) => {
      state.actions = []
    },
  },
})

export const { captureAction, clearTimeline } = timelineSlice.actions
export default timelineSlice.reducer
```

Save to: `src/features/redux-toolkit/presentation/store/timelineSlice.ts`

- [ ] **Step 2: Create Redux Toolkit middleware**

```ts
import type { Middleware } from '@reduxjs/toolkit'
import { captureAction } from '@/features/redux-toolkit/presentation/store/timelineSlice'
import type { ToolkitRootState } from '../store'

export function createTimelineMiddleware(): Middleware<{}, ToolkitRootState> {
  let actionIndex = 0

  return (store) => (next) => (action) => {
    const startTime = performance.now()

    const result = next(action)

    const duration = performance.now() - startTime

    if (
      typeof action === 'object' &&
      action !== null &&
      'type' in action &&
      typeof action.type === 'string' &&
      !action.type.startsWith('@@redux') &&
      action.type !== 'timeline/captureAction'
    ) {
      store.dispatch(
        captureAction({
          id: `toolkit-${Date.now()}-${actionIndex++}`,
          type: action.type,
          payload: action.payload,
          timestamp: Date.now(),
          duration,
        })
      )
    }

    return result
  }
}
```

Save to: `src/features/redux-toolkit/infrastructure/store/middleware.ts`

- [ ] **Step 3: Update Redux Toolkit store**

Assuming current store:
```ts
import { configureStore } from '@reduxjs/toolkit'
import toolkitCounterSlice from '@/features/redux-toolkit/presentation/store/slices'

export const store = configureStore({
  reducer: {
    toolkit: toolkitCounterSlice,
  },
})

export type ToolkitRootState = ReturnType<typeof store.getState>
export type ToolkitAppDispatch = typeof store.dispatch
```

Update to:
```ts
import { configureStore } from '@reduxjs/toolkit'
import toolkitCounterSlice from '@/features/redux-toolkit/presentation/store/slices'
import timelineReducer from '@/features/redux-toolkit/presentation/store/timelineSlice'
import { createTimelineMiddleware } from '../store/middleware'

export const store = configureStore({
  reducer: {
    toolkit: toolkitCounterSlice,
    timeline: timelineReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createTimelineMiddleware()),
})

export type ToolkitRootState = ReturnType<typeof store.getState>
export type ToolkitAppDispatch = typeof store.dispatch
```

- [ ] **Step 4: Create Redux Toolkit timeline hook**

```ts
import { useSelector } from 'react-redux'
import type { ToolkitRootState } from '@/features/redux-toolkit/infrastructure/store/store'
import type { TimelineAction } from '@/features/redux-toolkit/presentation/store/timelineSlice'

export function useActionTimeline(): TimelineAction[] {
  return useSelector((state: ToolkitRootState) => state.timeline.actions)
}
```

Save to: `src/features/redux-toolkit/presentation/hooks/useActionTimeline.ts`

- [ ] **Step 5: Commit all RTK timeline files**

```bash
git add \
  src/features/redux-toolkit/presentation/store/timelineSlice.ts \
  src/features/redux-toolkit/infrastructure/store/middleware.ts \
  src/features/redux-toolkit/infrastructure/store/store.ts \
  src/features/redux-toolkit/presentation/hooks/useActionTimeline.ts

git commit -m "feat: add timeline reducer, middleware, and hook to Redux Toolkit"
```

---

## Task 9: Update Redux Legacy Demo with Panels and Tabs

**Files:**
- Modify: `src/features/redux-legacy/presentation/components/LegacyReduxDemo.tsx`

- [ ] **Step 1: Wrap demo with tabs and panels**

Replace current component with:

```tsx
'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from '@/features/redux-legacy/presentation/store/actions'
import type { LegacyRootState } from '@/features/redux-legacy/infrastructure/store/store'
import { selectLegacyCounterValue } from '@/features/redux-legacy/presentation/store/selectors'
import { useActionTimeline } from '@/features/redux-legacy/presentation/hooks/useActionTimeline'
import { clearTimeline } from '@/features/redux-legacy/presentation/store/timelineSlice'
import { StatePanel } from '@/shared/components/redux-visualization/StatePanel'
import { TimelinePanel } from '@/shared/components/redux-visualization/TimelinePanel'
import { DevToolsPanel } from '@/shared/components/redux-visualization/DevToolsPanel'

export default function LegacyReduxDemo() {
  const dispatch = useDispatch()
  const counter = useSelector((state: LegacyRootState) =>
    selectLegacyCounterValue(state),
  )
  const state = useSelector((state: LegacyRootState) => ({
    counter: state.counter,
  }))
  const timeline = useActionTimeline()
  const [activeTab, setActiveTab] = useState<'state' | 'timeline' | 'devtools'>(
    'state',
  )

  const handleClearTimeline = () => {
    dispatch(clearTimeline())
  }

  return (
    <section className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Redux legacy
        </span>
        <h1 className="text-3xl font-semibold text-zinc-950">
          Store con acciones, reducers y selectors separados
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-zinc-600">
          Esta versión usa action types, action creators y reducers manuales con
          {' '}legacy_createStore. Sirve para visualizar la separación clásica de Redux.
        </p>
      </div>

      <div className="grid gap-4 rounded-2xl bg-zinc-50 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="text-sm text-zinc-500">Valor actual</p>
          <p className="text-5xl font-semibold text-zinc-950">{counter}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
            onClick={() => dispatch(incrementCounter())}
            type="button"
          >
            Incrementar
          </button>
          <button
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-100 transition-colors"
            onClick={() => dispatch(decrementCounter())}
            type="button"
          >
            Decrementar
          </button>
          <button
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-100 transition-colors"
            onClick={() => dispatch(resetCounter())}
            type="button"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="space-y-4">
        <div className="flex gap-2 border-b border-zinc-200">
          {(['state', 'timeline', 'devtools'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'text-zinc-950 border-b-2 border-zinc-950'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
              type="button"
            >
              {tab === 'state'
                ? 'State'
                : tab === 'timeline'
                  ? 'Timeline'
                  : 'DevTools'}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === 'state' && <StatePanel state={state} title="Redux State" />}
        {activeTab === 'timeline' && (
          <TimelinePanel actions={timeline} onClear={handleClearTimeline} />
        )}
        {activeTab === 'devtools' && (
          <DevToolsPanel state={state} actions={timeline} title="Redux DevTools" />
        )}
      </div>

      <div className="grid gap-3 text-sm text-zinc-600 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-4">
          <p className="font-medium text-zinc-950">Piezas clave</p>
          <p>actions</p>
          <p>action-types</p>
          <p>reducers</p>
          <p>selectors</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-4">
          <p className="font-medium text-zinc-950">Store</p>
          <p>legacy_createStore</p>
          <p>combineReducers</p>
          <p>Provider por página</p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/features/redux-legacy/presentation/components/LegacyReduxDemo.tsx
git commit -m "feat: add panels and tabs to Redux Legacy demo"
```

---

## Task 10: Update Redux Toolkit Demo with Panels and Tabs

**Files:**
- Modify: `src/features/redux-toolkit/presentation/components/ReduxToolkitDemo.tsx`

- [ ] **Step 1: Wrap demo with tabs and panels**

```tsx
'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type {
  ToolkitAppDispatch,
  ToolkitRootState,
} from '@/features/redux-toolkit/infrastructure/store/store'
import { selectToolkitCounterValue } from '@/features/redux-toolkit/presentation/store/selectors'
import { toolkitCounterActions } from '@/features/redux-toolkit/presentation/store/slices'
import { simulateToolkitSync } from '@/features/redux-toolkit/presentation/store/thunks'
import { useActionTimeline } from '@/features/redux-toolkit/presentation/hooks/useActionTimeline'
import { clearTimeline } from '@/features/redux-toolkit/presentation/store/timelineSlice'
import { StatePanel } from '@/shared/components/redux-visualization/StatePanel'
import { TimelinePanel } from '@/shared/components/redux-visualization/TimelinePanel'
import { DevToolsPanel } from '@/shared/components/redux-visualization/DevToolsPanel'

export default function ReduxToolkitDemo() {
  const dispatch = useDispatch<ToolkitAppDispatch>()
  const counter = useSelector((state: ToolkitRootState) =>
    selectToolkitCounterValue(state),
  )
  const state = useSelector((state: ToolkitRootState) => ({
    toolkit: state.toolkit,
  }))
  const timeline = useActionTimeline()
  const [activeTab, setActiveTab] = useState<'state' | 'timeline' | 'devtools'>(
    'state',
  )

  const handleClearTimeline = () => {
    dispatch(clearTimeline())
  }

  return (
    <section className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Redux Toolkit
        </span>
        <h1 className="text-3xl font-semibold text-zinc-950">
          Store con slices, thunks y configureStore
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-zinc-600">
          Esta versión concentra la lógica en slices y reduce boilerplate. También
          deja preparado el espacio para thunks, selectors memoizados y listeners.
        </p>
      </div>

      <div className="grid gap-4 rounded-2xl bg-zinc-50 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="text-sm text-zinc-500">Valor actual</p>
          <p className="text-5xl font-semibold text-zinc-950">{counter}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
            onClick={() => dispatch(toolkitCounterActions.increment())}
            type="button"
          >
            Incrementar
          </button>
          <button
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-100 transition-colors"
            onClick={() => dispatch(toolkitCounterActions.decrement())}
            type="button"
          >
            Decrementar
          </button>
          <button
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-100 transition-colors"
            onClick={() => dispatch(toolkitCounterActions.reset())}
            type="button"
          >
            Reset
          </button>
          <button
            className="rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-100 transition-colors"
            onClick={() => dispatch(simulateToolkitSync())}
            type="button"
          >
            Async +10
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="space-y-4">
        <div className="flex gap-2 border-b border-zinc-200">
          {(['state', 'timeline', 'devtools'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'text-zinc-950 border-b-2 border-zinc-950'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
              type="button"
            >
              {tab === 'state'
                ? 'State'
                : tab === 'timeline'
                  ? 'Timeline'
                  : 'DevTools'}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === 'state' && <StatePanel state={state} title="Redux State" />}
        {activeTab === 'timeline' && (
          <TimelinePanel actions={timeline} onClear={handleClearTimeline} />
        )}
        {activeTab === 'devtools' && (
          <DevToolsPanel state={state} actions={timeline} title="Redux DevTools" />
        )}
      </div>

      <div className="grid gap-3 text-sm text-zinc-600 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-4">
          <p className="font-medium text-zinc-950">Piezas clave</p>
          <p>slices</p>
          <p>selectors</p>
          <p>thunks</p>
          <p>listeners</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-4">
          <p className="font-medium text-zinc-950">Store</p>
          <p>configureStore</p>
          <p>Immer incluido</p>
          <p>Provider por página</p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/features/redux-toolkit/presentation/components/ReduxToolkitDemo.tsx
git commit -m "feat: add panels and tabs to Redux Toolkit demo"
```

---

## Task 11: Create SyncModeContext

**Files:**
- Create: `src/features/redux-comparison/presentation/context/SyncModeContext.tsx`

- [ ] **Step 1: Create context**

```tsx
'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface SyncModeContextValue {
  syncEnabled: boolean
  toggleSync: () => void
}

const SyncModeContext = createContext<SyncModeContextValue | null>(null)

export function SyncModeProvider({ children }: { children: React.ReactNode }) {
  const [syncEnabled, setSyncEnabled] = useState(false)

  // Persist to sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem('redux-sync-mode')
    if (saved !== null) {
      setSyncEnabled(saved === 'true')
    }
  }, [])

  const toggleSync = () => {
    setSyncEnabled((prev) => {
      const newValue = !prev
      sessionStorage.setItem('redux-sync-mode', newValue.toString())
      return newValue
    })
  }

  return (
    <SyncModeContext.Provider value={{ syncEnabled, toggleSync }}>
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
```

- [ ] **Step 2: Commit**

```bash
git add src/features/redux-comparison/presentation/context/SyncModeContext.tsx
git commit -m "feat: add SyncModeContext for comparison page sync toggle"
```

---

## Task 12: Create useSyncedDispatch Hook

**Files:**
- Create: `src/features/redux-comparison/presentation/hooks/useSyncedDispatch.ts`

- [ ] **Step 1: Create hook**

```ts
import { useDispatch as useReduxDispatch } from 'react-redux'
import type { AppDispatch } from '@reduxjs/toolkit'
import { useSyncMode } from '@/features/redux-comparison/presentation/context/SyncModeContext'

// Action type mapping from Legacy to Toolkit
const ACTION_MAPPER: Record<string, { type: string }> = {
  'COUNTER_INCREMENT': { type: 'toolkit/counter/increment' },
  'COUNTER_DECREMENT': { type: 'toolkit/counter/decrement' },
  'COUNTER_RESET': { type: 'toolkit/counter/reset' },
  // RTK to Legacy (reverse mapping)
  'toolkit/counter/increment': { type: 'COUNTER_INCREMENT' },
  'toolkit/counter/decrement': { type: 'COUNTER_DECREMENT' },
  'toolkit/counter/reset': { type: 'COUNTER_RESET' },
}

export function useSyncedDispatch(storeType: 'legacy' | 'toolkit') {
  const dispatch = useReduxDispatch<AppDispatch>()
  const { syncEnabled } = useSyncMode()

  // Note: This hook works within each store context independently
  // The actual sync happens via a shared dispatch layer at the component level
  // This is a placeholder for the hook structure; real sync happens in ReduxComparison component

  return {
    dispatch,
    syncEnabled,
    shouldSync: syncEnabled,
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/features/redux-comparison/presentation/hooks/useSyncedDispatch.ts
git commit -m "feat: add useSyncedDispatch hook for synced store dispatches"
```

---

## Task 13: Create ReduxComparison Component

**Files:**
- Create: `src/features/redux-comparison/presentation/components/ReduxComparison.tsx`

- [ ] **Step 1: Create comparison component**

This is a container that will render both demos side-by-side. For now, create a simpler version that imports both demos:

```tsx
'use client'

import { useState } from 'react'
import { LegacyReduxProvider } from '@/features/redux-legacy/presentation/providers/LegacyReduxProvider'
import { ReduxToolkitProvider } from '@/features/redux-toolkit/presentation/providers/ReduxToolkitProvider'
import LegacyReduxDemo from '@/features/redux-legacy/presentation/components/LegacyReduxDemo'
import ReduxToolkitDemo from '@/features/redux-toolkit/presentation/components/ReduxToolkitDemo'
import { SyncModeProvider } from '@/features/redux-comparison/presentation/context/SyncModeContext'

export default function ReduxComparison() {
  const [syncMode, setSyncMode] = useState(false)

  const handleToggleSync = () => {
    setSyncMode((prev) => {
      sessionStorage.setItem('redux-sync-mode', (!prev).toString())
      return !prev
    })
  }

  return (
    <SyncModeProvider>
      <div className="space-y-8">
        {/* Header with sync toggle */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-zinc-900">
            Redux Legacy vs Redux Toolkit — Comparison
          </h1>
          <button
            onClick={handleToggleSync}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              syncMode
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300'
            }`}
            type="button"
          >
            {syncMode ? '🔗 Synced' : '⊗ Independent'}
          </button>
        </div>

        {/* Desktop: Side-by-side layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <LegacyReduxProvider>
              <LegacyReduxDemo />
            </LegacyReduxProvider>
          </div>
          <div>
            <ReduxToolkitProvider>
              <ReduxToolkitDemo />
            </ReduxToolkitProvider>
          </div>
        </div>

        {/* Mobile/Tablet: Tabs layout */}
        <div className="lg:hidden">
          <div className="flex gap-2 border-b border-zinc-200 mb-4">
            <button
              onClick={() => setSyncMode(false)}
              className="px-4 py-2 text-sm font-medium border-b-2 border-transparent hover:border-zinc-300 transition-colors"
              type="button"
            >
              Legacy
            </button>
            <button
              onClick={() => setSyncMode(true)}
              className="px-4 py-2 text-sm font-medium border-b-2 border-transparent hover:border-zinc-300 transition-colors"
              type="button"
            >
              Toolkit
            </button>
          </div>
          {!syncMode ? (
            <LegacyReduxProvider>
              <LegacyReduxDemo />
            </LegacyReduxProvider>
          ) : (
            <ReduxToolkitProvider>
              <ReduxToolkitDemo />
            </ReduxToolkitProvider>
          )}
        </div>
      </div>
    </SyncModeProvider>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/features/redux-comparison/presentation/components/ReduxComparison.tsx
git commit -m "feat: add ReduxComparison component with desktop/mobile layouts"
```

---

## Task 14: Create /redux-comparison Route

**Files:**
- Create: `src/app/[locale]/redux-comparison/page.tsx`

- [ ] **Step 1: Create page**

```tsx
import ReduxComparison from '@/features/redux-comparison/presentation/components/ReduxComparison'

export const metadata = {
  title: 'Redux Legacy vs Redux Toolkit',
  description: 'Compare Redux Legacy and Redux Toolkit side-by-side',
}

export default function ReduxComparisonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 px-6 py-16 text-zinc-950">
      <div className="mx-auto max-w-7xl space-y-8">
        <ReduxComparison />
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/[locale]/redux-comparison/page.tsx
git commit -m "feat: add /redux-comparison route for side-by-side Redux demo"
```

---

## Task 15: Add Link to Comparison Page in HomeView

**Files:**
- Modify: `src/features/home/presentation/components/HomeView.tsx`

- [ ] **Step 1: Add comparison link after Redux section**

Find the Redux Architecture Examples section and add a link after the Redux cards:

```tsx
<Link
  href="/redux-comparison"
  className="rounded-xl border border-purple-300 bg-purple-50 p-5 transition-colors hover:border-purple-400 hover:bg-purple-100 sm:col-span-2"
>
  <p className="text-xs uppercase tracking-widest text-purple-600">Página Compare</p>
  <h3 className="mt-2 font-semibold text-purple-900">Redux: Legacy vs Toolkit</h3>
  <p className="mt-1 text-xs text-purple-700">
    Comparación lado a lado con visualización de estado, acciones, y más.
  </p>
</Link>
```

- [ ] **Step 2: Commit**

```bash
git add src/features/home/presentation/components/HomeView.tsx
git commit -m "feat: add link to Redux comparison page in home"
```

---

## Task 16: Verify Build and Types

**Files:**
- None to create

- [ ] **Step 1: Run TypeScript check**

```bash
pnpm exec tsc --noEmit
```

Expected: No errors

- [ ] **Step 2: Test dev server loads new pages**

```bash
pnpm dev
```

Then visit:
- `http://localhost:3000/redis-legacy` — should show panels and tabs
- `http://localhost:3000/redux-toolkit` — should show panels and tabs
- `http://localhost:3000/redux-comparison` — should show side-by-side with toggle

- [ ] **Step 3: Commit (no files changed, just verification)**

```bash
git status
```

If all good, no commit needed. If any manual fixes were required, commit them.

---

## Summary

**Opción A (Enhanced Individual Demos):**
- ✅ `/redux-legacy` and `/redux-toolkit` now show 3 panels (State, Timeline, DevTools) with tab switching
- ✅ Action history automatically captured via middleware
- ✅ StatePanel shows JSON, TimelinePanel shows action history, DevToolsPanel has action list + state tree

**Opción B.1 (New Comparison Page):**
- ✅ `/redux-comparison` route with side-by-side layout (desktop) and tabs (mobile)
- ✅ Sync mode toggle that persists in sessionStorage
- ✅ Both stores render independently (sync mode for future enhancement)
- ✅ Full responsive design

**Shared Components:**
- ✅ StatePanel, TimelinePanel, DevToolsPanel reusable across both demos

**Next:** Implement sync logic (dispatches in one store replicate to the other when toggled)
