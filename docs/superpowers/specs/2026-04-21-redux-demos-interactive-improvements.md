# Redux Demos Interactive Improvements — Design Spec

> **Goal:** Enhance Redux Legacy and Redux Toolkit demos with real-time state visualization, action timeline, DevTools-like panel, and a new comparison page showing both implementations side-by-side.

**Architecture:**
- Two implementation streams: **Opción A** (individual demos enhanced) and **Opción B.1** (new comparison page)
- Shared components (`StatePanel`, `TimelinePanel`, `DevToolsPanel`) reused in both
- Action history captured via custom middleware in each store
- Sync mode in comparison page implemented via React Context + custom hooks
- Responsive: desktop = side-by-side columns, mobile = tabs

**Tech Stack:**
- React Context for sync mode state
- Redux middleware for action interception
- Next.js `/redux-comparison` route
- Tailwind for UI (match existing theme)

---

## 1. Opción A: Enhanced Individual Demos

### Current State
- `/redux-legacy` and `/redux-toolkit` render `LegacyReduxDemo` and `ReduxToolkitDemo`
- Each has interactive buttons (increment, decrement, reset, async actions)
- No visibility into state changes or action history

### Improvement
Each demo page now displays **below** the interactive buttons:
- **StatePanel** — JSON view of current store state
- **TimelinePanel** — chronological list of dispatched actions
- **DevToolsPanel** — expandable tree with action history and state diffs

### Layout (per demo page)
```
┌─ Demo Header & Interactive Buttons ─┐
│                                      │
│ [Incrementar] [Decrementar] [Reset]  │
│                                      │
├──────────────────────────────────────┤
│         State | Timeline | DevTools  │ ← tabs
│                                      │
│ ┌─ Active Tab ────────────────────┐  │
│ │  (StatePanel | TimelinePanel |  │  │
│ │   DevToolsPanel content)        │  │
│ └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

### Files to Create/Modify
- `src/features/redux-legacy/presentation/components/StatePanel.tsx` — shared component
- `src/features/redux-legacy/presentation/components/TimelinePanel.tsx` — shared component
- `src/features/redux-legacy/presentation/components/DevToolsPanel.tsx` — shared component
- `src/features/redux-legacy/presentation/components/LegacyReduxDemo.tsx` — wrap with tabs + panels
- `src/features/redux-legacy/infrastructure/store/middleware.ts` — action capture
- `src/features/redux-legacy/presentation/hooks/useActionTimeline.ts` — hook to access timeline
- Same structure for `redux-toolkit` directory

---

## 2. Opción B.1: New Comparison Page

### Route
`/redux-comparison` (new page)

### Header Section
- Title: "Redux Legacy vs Redux Toolkit — Side-by-Side Comparison"
- **Toggle Button:** "Sync Mode" (off/on)
  - When ON: badge "🔗 Synced" — both stores receive same actions
  - When OFF: badge "⊗ Independent" — each store works alone
  - Toggle persists in sessionStorage

### Main Layout (Desktop)
```
┌─────────────────────────────────────────────────────────┐
│ Redux Legacy vs Redux Toolkit | [Sync Mode: OFF/ON]     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ LEFT (Legacy)        │        RIGHT (Toolkit)           │
│                                                         │
│ ┌─────────────────┐  │  ┌──────────────────┐            │
│ │ Demo Buttons    │  │  │ Demo Buttons     │            │
│ │ [+] [-] [Reset] │  │  │ [+] [-] [Reset]  │            │
│ │ [Async +10]     │  │  │ [Async +10]      │            │
│ └─────────────────┘  │  └──────────────────┘            │
│                      │                                  │
│ State | Timeline │   │   │ State | Timeline │            │
│ DevTools        │   │   │ DevTools        │            │
│                      │                                  │
│ [active panel]      │  │ [active panel]   │            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Main Layout (Mobile/Tablet)
```
┌───────────────────────────┐
│ Redux Comparison          │
│ [Sync Mode: OFF/ON]       │
├───────────────────────────┤
│ [Legacy] [Toolkit] ← tabs │
├───────────────────────────┤
│ Demo Buttons              │
│ [+] [-] [Reset] [Async]   │
│                           │
│ State | Timeline | DevTools│
│ [active panel]            │
└───────────────────────────┘
```

### Sync Mode Logic

**When ON ("Sync Mode"):**
- Both stores maintain independent state
- Actions dispatched to one store are **also** dispatched to the other
- Example: User clicks "Incrementar" (Legacy side) → 
  - `LEGACY_INCREMENT` fires on Legacy store
  - Custom hook detects dispatch → automatically fires `TOOLKIT_INCREMENT` on RTK store
  - Both timelines update, both StatePanel values change (ideally same number)
  - User sees identical counters and synchronized action history

**When OFF ("Independent"):**
- Each store is completely independent
- Clicking buttons on Legacy side only affects Legacy state
- Clicking buttons on RTK side only affects RTK state
- Timelines advance independently
- Counters can diverge

### Action Timeline Entry Format
```
[HH:MM:SS] ACTION_TYPE [payload if exists]
├─ Sync: ✓ (if synced to other store)
└─ Duration: 0.2ms
```

For async actions:
```
[HH:MM:SS] FETCH_USER_PENDING
[HH:MM:SS] FETCH_USER_FULFILLED [payload: {id: 1, name: "John"}]
```

### DevTools Panel UI
- **Two sub-views:**
  1. **Action List** — chronological list, click to inspect
  2. **State Tree** — expandable JSON tree
- **Diff View** — when an action is selected, show:
  ```
  Before:  { counter: 5 }
  After:   { counter: 6 }
  Diff:    counter: 5 → 6
  ```
- **Color coding:**
  - Pending (async): 🟡 Orange
  - Fulfilled (async): 🟢 Green
  - Rejected (async): 🔴 Red
  - Sync actions: ⚪ Gray

### Files to Create
- `src/app/[locale]/redux-comparison/page.tsx` — new page
- `src/features/redux-comparison/presentation/components/ReduxComparison.tsx` — main container
- `src/features/redux-comparison/presentation/context/SyncModeContext.tsx` — sync state
- `src/features/redux-comparison/presentation/hooks/useSyncedDispatch.ts` — sync logic
- `src/features/redux-comparison/infrastructure/store/` — dual-store management

### Files to Modify (for action capture)
- `src/features/redux-legacy/infrastructure/store/` — add middleware
- `src/features/redux-toolkit/infrastructure/store/` — add middleware

---

## 3. Shared Components

### StatePanel
```tsx
interface StatePanelProps {
  state: any
  title?: string
}
```
- Input: Any Redux state object
- Display: Formatted JSON with indentation + syntax highlighting
- Button to copy JSON to clipboard
- Button to expand/collapse all

### TimelinePanel
```tsx
interface TimelinePanelProps {
  actions: ActionEntry[]
  onClear: () => void
}

interface ActionEntry {
  id: string
  type: string
  payload?: any
  timestamp: number
  duration?: number
  status?: 'pending' | 'fulfilled' | 'rejected'
  synced?: boolean
}
```
- Input: Array of actions
- Display: Scrolleable list, newest first
- Each entry clickable → shows full action details
- "Clear" button to reset timeline

### DevToolsPanel
```tsx
interface DevToolsPanelProps {
  state: any
  actions: ActionEntry[]
  title?: string
}
```
- Tab 1: "Action List" — same as TimelinePanel but with diff view
- Tab 2: "State Tree" — expandable JSON tree
- Click action → highlight diff in state tree

---

## 4. Middleware for Action Capture

### In Redux Legacy Store
```ts
// src/features/redux-legacy/infrastructure/store/middleware.ts
export function createActionCaptureMiddleware() {
  let actionIndex = 0
  const maxHistorySize = 50

  return (store) => (next) => (action) => {
    const before = store.getState()
    const startTime = performance.now()
    
    const result = next(action)
    
    const after = store.getState()
    const duration = performance.now() - startTime
    
    // Dispatch action to timeline reducer
    store.dispatch(captureAction({
      id: `${Date.now()}-${actionIndex++}`,
      type: action.type,
      payload: action.payload,
      timestamp: Date.now(),
      duration,
      before,
      after,
    }))

    // Keep max 50 actions
    const currentTimeline = store.getState().timeline || []
    if (currentTimeline.length > maxHistorySize) {
      store.dispatch(clearOldestAction())
    }

    return result
  }
}
```

### In Redux Toolkit Store
Similar middleware, injected in `configureStore`:
```ts
export const store = configureStore({
  reducer: { /* ... */ },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createActionCaptureMiddleware()),
})
```

---

## 5. Sync Mode Implementation

### SyncModeContext
```tsx
interface SyncModeContextValue {
  syncEnabled: boolean
  toggleSync: () => void
}

export const SyncModeContext = createContext<SyncModeContextValue | null>(null)
```

### useSyncedDispatch Hook
```ts
export function useSyncedDispatch(storeType: 'legacy' | 'toolkit') {
  const dispatch = useDispatch()
  const syncEnabled = useContext(SyncModeContext).syncEnabled
  
  return (action) => {
    // Dispatch to own store
    const result = dispatch(action)
    
    // If sync enabled, dispatch to other store too
    if (syncEnabled) {
      // Logic to find and dispatch to the other store
      // Use a mapping of action types: legacyActionType -> toolkitActionType
    }
    
    return result
  }
}
```

**Action Mapping (Legacy → Toolkit):**
```ts
const actionMapper = {
  'LEGACY_INCREMENT': { type: 'toolkit/increment' },
  'LEGACY_DECREMENT': { type: 'toolkit/decrement' },
  'LEGACY_RESET': { type: 'toolkit/reset' },
  // ... etc
}
```

---

## 6. Error Handling

- If an action dispatch fails in one store, show error banner below DevTools panel
- Banner auto-dismisses after 5 seconds or manual close
- Error message: `"Action failed: <action type> — <error message>"`
- Timeline still updates (includes error state)

---

## 7. Responsive Behavior

- **Desktop (≥1024px):** Side-by-side columns with divider
- **Tablet (768px–1023px):** Side-by-side with smaller padding
- **Mobile (<768px):** Stacked tabs (Legacy | Toolkit) with full-width panels

---

## 8. Testing

- StatePanel: renders JSON correctly, copy button works
- TimelinePanel: actions appear in reverse chronological order, clear button removes all
- DevToolsPanel: clicking action shows diff, state tree expands/collapses
- Sync mode: toggling sync on/off changes behavior as expected
- Middleware: actions are captured with correct timestamp and duration
- Error handling: error banners display and dismiss correctly

---

## 9. Success Criteria

✅ Opción A: Each demo (/redux-legacy, /redux-toolkit) shows state, timeline, and DevTools panels
✅ Opción B.1: New /redux-comparison page works with desktop/mobile layouts
✅ Sync mode: Toggle works, actions sync correctly when enabled, independent when disabled
✅ Action capture: Middleware records all actions with timestamp/duration
✅ UI: Panels are readable, responsive, match existing design aesthetic
✅ No console errors or hydration mismatches
✅ All existing functionality preserved (buttons still work as before)
