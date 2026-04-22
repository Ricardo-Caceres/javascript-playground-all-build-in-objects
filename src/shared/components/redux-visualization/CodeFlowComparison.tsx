'use client'

import React, { useState } from 'react'
import styles from './CodeFlowComparison.module.css'

type FlowStep = 'setup' | 'actions' | 'reducers' | 'dispatch' | 'state-update' | 'complete'

const codeExamples = {
  setup: {
    legacy: `import { createStore, combineReducers } from 'redux'

// 1️⃣ Define reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// 2️⃣ Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  timeline: timelineReducer
})

// 3️⃣ Create store with middleware
const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware,
    customMiddleware
  )
)

// 4️⃣ Manual DevTools setup
if (window.__REDUX_DEVTOOLS_EXTENSION__)
  store = createStore(rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )`,
    
    toolkit: `import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices'

// 1️⃣ Create store with batteries included
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    timeline: timelineSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(customMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

// ✨ Everything is automatically:
// - Thunk middleware
// - Immutability checks
// - Serializable state checks
// - Redux DevTools setup
// - Reducer hot reloading`
  },

  actions: {
    legacy: `// 1️⃣ Manual action creators (functions)
const incrementCounter = () => ({
  type: 'INCREMENT',
  payload: undefined
})

const decrementCounter = () => ({
  type: 'DECREMENT'
})

const updateTimeline = (action) => ({
  type: 'ADD_ACTION_TO_TIMELINE',
  payload: {
    type: action.type,
    timestamp: Date.now(),
    data: action
  }
})

// 2️⃣ Usage: dispatch(incrementCounter())
// String types are easy to typo! ❌`,

    toolkit: `// 1️⃣ Auto-generated action creators
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value++ // ✨ Immer handles immutability
    },
    decrement: (state) => {
      state.value--
    },
    updateTimeline: (state, action) => {
      state.timeline.push(action)
    }
  }
})

// Auto-generated: counterSlice.actions.increment
// Type-safe & no typos! ✅
export const { increment, decrement } = counterSlice.actions`
  },

  reducers: {
    legacy: `// Manual reducer with switch statement
const counterReducer = (
  state = { value: 0 },
  action
) => {
  switch (action.type) {
    case 'INCREMENT':
      // ⚠️ Must manually spread/clone state
      return {
        ...state,
        value: state.value + 1
      }
    
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - 1
      }
    
    case 'RESET':
      return { value: 0 }
    
    default:
      return state
  }
}

// ⚠️ Developer responsibility:
// - Immutability (spread operators)
// - No direct mutations
// - Handle all cases properly`,

    toolkit: `// Slice automatically creates reducer
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  
  // 1️⃣ Immer integration: can mutate draft!
  reducers: {
    increment: (state) => {
      state.value++  // ✨ Looks like mutation
    },
    
    decrement: (state) => {
      state.value--  // ✨ But it's safe!
    },
    
    reset: (state) => {
      state.value = 0
    }
  }
})

// ✨ What Immer does:
// - Wraps state in Proxy
// - Tracks mutations
// - Produces immutable copy
// - Returns new state automatically`
  },

  dispatch: {
    legacy: `// 1️⃣ Create action
const action = incrementCounter()
// Result: { type: 'INCREMENT' }

// 2️⃣ Dispatch manually
store.dispatch(action)

// 3️⃣ Middleware chain executes
// logger: "action INCREMENT"
// customMiddleware: custom logic
// reducer: processes action

// 4️⃣ State updates
// { counter: { value: 1 } }

// 5️⃣ Subscribers notified
store.subscribe(() => {
  console.log('State changed!')
})

// ⚠️ Manual subscription management
// Must unsubscribe to avoid leaks`,

    toolkit: `// 1️⃣ Auto-generated action with type
const action = counterSlice.actions.increment()
// Result: { type: 'counter/increment' }

// 2️⃣ Dispatch
store.dispatch(action)

// 3️⃣ Built-in middleware chain
// - Redux Thunk (async support)
// - Immer middleware
// - Immutability checks
// - Serializability checks

// 4️⃣ Reducer + Immer produces new state
// { counter: { value: 1 } }

// 5️⃣ React components automatically re-render
// via useSelector() hook

// ✅ Easy subscription management
// Hooks handle cleanup automatically`
  },

  'state-update': {
    legacy: `// Manual state subscription
let unsubscribe = store.subscribe(() => {
  const state = store.getState()
  console.log('New state:', state)
  // { counter: { value: 1 } }
})

// Manually read state
const state = store.getState()
console.log(state.counter.value) // 1

// Manual cleanup
unsubscribe() // ⚠️ Must remember!

// For React, typically use:
// - connect() HOC (older)
// - useSelector() hook (modern, but external lib)`,

    toolkit: `// Hooks automatically handle subscriptions
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const count = useSelector(
    (state) => state.counter.value
  )
  const dispatch = useDispatch()

  return (
    <div>
      <p>{count}</p>
      <button 
        onClick={() => 
          dispatch(counterSlice.actions.increment())
        }
      >
        +1
      </button>
    </div>
  )
}

// ✅ Benefits:
// - Automatic subscription
// - Automatic cleanup on unmount
// - Re-render only when selector result changes
// - Built-in performance optimization`
  },

  complete: {
    legacy: `
// 📊 FULL FLOW - REDUX LEGACY:
//
// 1. User clicks button
// 2. Event handler: store.dispatch(incrementCounter())
// 3. Middleware chain receives action
// 4. Reducer processes: switch(action.type)
// 5. Returns new state with spread operator
// 6. Subscribers called manually
// 7. Component must listen with subscribe()
// 8. Manual re-render of component
//
// ⚠️ Characteristics:
// - Completely manual control
// - Verbose but explicit
// - Full understanding required
// - Great for learning
// - Boilerplate-heavy for production`,

    toolkit: `
// 📊 FULL FLOW - REDUX TOOLKIT:
//
// 1. User clicks button
// 2. Event: dispatch(actions.increment())
// 3. Built-in middleware (thunk, immer, etc.)
// 4. Immer wraps state in Proxy
// 5. Reducer "mutates" draft (safe!)
// 6. Immer produces new immutable state
// 7. React components auto-subscribe
// 8. useSelector() detects change
// 9. Component re-renders automatically
//
// ✅ Characteristics:
// - Framework handles most details
// - Concise and ergonomic
// - Best practices built-in
// - Great for production
// - Less boilerplate`
  }
}

const flowSteps: Array<{ id: FlowStep; label: string; description: string }> = [
  { id: 'setup', label: '🏗️ Setup', description: 'Store initialization' },
  { id: 'actions', label: '📤 Actions', description: 'Action creators' },
  { id: 'reducers', label: '⚙️ Reducers', description: 'State transformation' },
  { id: 'dispatch', label: '🚀 Dispatch', description: 'Action dispatching' },
  { id: 'state-update', label: '📊 State Update', description: 'Component connection' },
  { id: 'complete', label: '✅ Complete Flow', description: 'Full cycle' }
]

export function CodeFlowComparison() {
  const [currentStep, setCurrentStep] = useState<FlowStep>('setup')

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>🔄 Redux Implementation Flow</h2>
        <p className={styles.subtitle}>
          Complete code comparison with full data flow visualization
        </p>
      </div>

      {/* Step Navigation */}
      <div className={styles.stepNav}>
        {flowSteps.map((step, index) => (
          <button
            key={step.id}
            className={`${styles.stepButton} ${
              currentStep === step.id ? styles.active : ''
            }`}
            onClick={() => setCurrentStep(step.id)}
          >
            <span className={styles.stepLabel}>{step.label}</span>
            <span className={styles.stepDesc}>{step.description}</span>
            {index < flowSteps.length - 1 && (
              <svg
                className={styles.arrow}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M8 6L2 1M8 6L2 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Code Comparison */}
      <div className={styles.codeComparison}>
        {/* Legacy Column */}
        <div className={styles.codeColumn}>
          <div className={styles.columnHeader}>
            <div className={styles.badge} style={{ background: '#dc2626' }}>
              Redux Legacy
            </div>
            <p className={styles.columnInfo}>Classic, manual approach</p>
          </div>
          <pre className={styles.code}>
            <code>{codeExamples[currentStep].legacy}</code>
          </pre>
        </div>

        {/* Flow Indicator */}
        <div className={styles.flowIndicator}>
          <div className={styles.flowContent}>
            <svg viewBox="0 0 60 120" className={styles.flowSvg}>
              {/* Left to Right Arrows */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="#60a5fa" />
                </marker>
                <marker
                  id="arrowhead-active"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="#fbbf24" />
                </marker>
              </defs>

              {/* Animated arrow */}
              <line
                x1="2"
                y1="60"
                x2="58"
                y2="60"
                stroke="#fbbf24"
                strokeWidth="2"
                markerEnd="url(#arrowhead-active)"
                className={styles.animatedArrow}
                strokeDasharray="56"
                strokeDashoffset="56"
              />

              {/* Step indicators */}
              {[1, 2, 3, 4, 5].map((i) => (
                <circle
                  key={i}
                  cx={2 + (i * 56) / 5}
                  cy="100"
                  r="3"
                  fill="#60a5fa"
                  opacity="0.3"
                />
              ))}
            </svg>
            <div className={styles.flowLabel}>Data Flow</div>
          </div>
        </div>

        {/* Toolkit Column */}
        <div className={styles.codeColumn}>
          <div className={styles.columnHeader}>
            <div className={styles.badge} style={{ background: '#2563eb' }}>
              Redux Toolkit
            </div>
            <p className={styles.columnInfo}>Modern, batteries-included</p>
          </div>
          <pre className={styles.code}>
            <code>{codeExamples[currentStep].toolkit}</code>
          </pre>
        </div>
      </div>

      {/* Key Differences Highlight */}
      <div className={styles.differences}>
        {currentStep === 'setup' && (
          <div className={styles.diffContent}>
            <div className={styles.diffItem}>
              <span className={styles.diffIcon}>🔧</span>
              <div>
                <strong>Manual vs Automatic:</strong> Legacy requires manual middleware
                setup, DevTools configuration, and reducer combination. Toolkit automates
                everything.
              </div>
            </div>
            <div className={styles.diffItem}>
              <span className={styles.diffIcon}>📦</span>
              <div>
                <strong>Boilerplate:</strong> Legacy ~30 lines. Toolkit ~10 lines.
              </div>
            </div>
          </div>
        )}
        {currentStep === 'actions' && (
          <div className={styles.diffContent}>
            <div className={styles.diffItem}>
              <span className={styles.diffIcon}>✍️</span>
              <div>
                <strong>Type Safety:</strong> Legacy uses string types (prone to typos).
                Toolkit auto-generates type-safe action creators.
              </div>
            </div>
            <div className={styles.diffItem}>
              <span className={styles.diffIcon}>🐛</span>
              <div>
                <strong>Common Mistake:</strong> Legacy: typo in action type string
                = silently ignored. Toolkit: automatically prevents this.
              </div>
            </div>
          </div>
        )}
        {currentStep === 'reducers' && (
          <div className={styles.diffContent}>
            <div className={styles.diffItem}>
              <span className={styles.diffIcon}>🧬</span>
              <div>
                <strong>Immutability Pattern:</strong> Legacy requires spread operators
                and explicit cloning. Toolkit uses Immer for safe mutations.
              </div>
            </div>
            <div className={styles.diffItem}>
              <span className={styles.diffIcon}>⚡</span>
              <div>
                <strong>Performance:</strong> Immer uses structural sharing, resulting
                in smaller bundles and faster comparisons.
              </div>
            </div>
          </div>
        )}
        {currentStep === 'dispatch' && (
          <div className={styles.diffContent}>
            <div className={styles.diffItem}>
              <span className={styles.diffIcon}>🔌</span>
              <div>
                <strong>Middleware Chain:</strong> Legacy: manual setup. Toolkit: thunk,
                immutability checks, serialization checks built-in.
              </div>
            </div>
            <div className={styles.diffItem}>
              <span className={styles.diffIcon}>🎛️</span>
              <div>
                <strong>DevTools:</strong> Legacy: manual integration. Toolkit: automatic
                integration with browser extension.
              </div>
            </div>
          </div>
        )}
        {currentStep === 'state-update' && (
          <div className={styles.diffContent}>
            <div className={styles.diffItem}>
              <span className={styles.diffIcon}>🪝</span>
              <div>
                <strong>React Integration:</strong> Legacy: manual subscribe/unsubscribe.
                Toolkit: useSelector() handles everything with auto-cleanup.
              </div>
            </div>
            <div className={styles.diffItem}>
              <span className={styles.diffIcon}>🚀</span>
              <div>
                <strong>Re-render Optimization:</strong> Legacy: you manage it. Toolkit:
                selector memoization prevents unnecessary renders.
              </div>
            </div>
          </div>
        )}
        {currentStep === 'complete' && (
          <div className={styles.diffContent}>
            <div className={styles.diffItem}>
              <span className={styles.diffIcon}>🎓</span>
              <div>
                <strong>Learning Curve:</strong> Legacy is great for understanding Redux
                fundamentals. Toolkit is better for production development.
              </div>
            </div>
            <div className={styles.diffItem}>
              <span className={styles.diffIcon}>📈</span>
              <div>
                <strong>Best Practice:</strong> Modern Redux development uses Toolkit.
                Legacy should only be used for educational purposes or legacy codebases.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span style={{ color: '#dc2626', fontWeight: 'bold' }}>■</span> Redux Legacy
        </div>
        <div className={styles.legendItem}>
          <span style={{ color: '#2563eb', fontWeight: 'bold' }}>■</span> Redux Toolkit
        </div>
        <div className={styles.legendItem}>
          <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>→</span> Data Flow
        </div>
      </div>
    </div>
  )
}
