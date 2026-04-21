# Redux Exercises Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 22 Redux Legacy + 22 Redux Toolkit interactive exercises (Monaco editor + automated tests) to the platform.

**Architecture:** Exercises follow the existing `Exercise` data pattern. Legacy exercises are pure JS functions; RTK exercises get `ReduxToolkit` injected as a global via the worker sandbox. Both sets live under `/exercises/redux-legacy` and `/exercises/redux-toolkit`.

**Tech Stack:** TypeScript, Next.js, Redux Toolkit, Web Workers, Monaco Editor, Babel standalone

---

## File Map

**New files:**
- `src/features/exercises/infrastructure/data/redux-legacy/reducers.ts` — ex 1–7
- `src/features/exercises/infrastructure/data/redux-legacy/action-creators.ts` — ex 8–10
- `src/features/exercises/infrastructure/data/redux-legacy/composition.ts` — ex 11–12
- `src/features/exercises/infrastructure/data/redux-legacy/selectors.ts` — ex 13–14
- `src/features/exercises/infrastructure/data/redux-legacy/middleware.ts` — ex 15–17
- `src/features/exercises/infrastructure/data/redux-legacy/advanced.ts` — ex 18–22
- `src/features/exercises/infrastructure/data/redux-legacy/index.ts` — re-exports all
- `src/features/exercises/infrastructure/data/redux-toolkit/slices.ts` — RTK ex 1–5
- `src/features/exercises/infrastructure/data/redux-toolkit/actions-reducers.ts` — RTK ex 6–7
- `src/features/exercises/infrastructure/data/redux-toolkit/selectors.ts` — RTK ex 8–10
- `src/features/exercises/infrastructure/data/redux-toolkit/thunks.ts` — RTK ex 11–15
- `src/features/exercises/infrastructure/data/redux-toolkit/entity.ts` — RTK ex 16–17
- `src/features/exercises/infrastructure/data/redux-toolkit/advanced.ts` — RTK ex 18–22
- `src/features/exercises/infrastructure/data/redux-toolkit/index.ts` — re-exports all

**Modified files:**
- `src/shared/lib/worker/executor.worker.ts` — RTK injection
- `src/features/exercises/infrastructure/data/topicMeta.ts` — add redux-legacy + redux-toolkit entries
- `src/features/home/presentation/components/HomeView.tsx` — filter OBJECTS + update hrefs
- `src/features/exercises/infrastructure/data/index.ts` — register both exercise arrays

---

## Task 1: Infrastructure — executor.worker.ts RTK injection

**Files:** Modify `src/shared/lib/worker/executor.worker.ts`

- [ ] **Step 1: Add RTK import and inject as global**

The file currently uses `new Function('describe', 'it', 'expect', ...)`. Add `'ReduxToolkit'` as a 4th parameter so RTK exercises can destructure it.

```ts
// At top of file, add:
import * as ReduxToolkit from '@reduxjs/toolkit'

// In executeCode(), change:
interface WorkerInput {
  code: string
  tests: TestCase[]
}
// to:
// (no interface change needed — RTK always injected, legacy exercises ignore it)

// Change new Function call (line 42):
const runner = new Function(
  'describe',
  'it',
  'expect',
  'ReduxToolkit',
  `var result = eval(${JSON.stringify(transpiled)});\n${testBlock}`,
)
// Change runner call (line 48):
runner(describe, it, expect, ReduxToolkit)
```

- [ ] **Step 2: Verify build still compiles**

```bash
cd /Users/salem/Desktop/React/react-playground && npx tsc --noEmit 2>&1 | head -30
```

- [ ] **Step 3: Commit**

```bash
git add src/shared/lib/worker/executor.worker.ts
git commit -m "feat: inject ReduxToolkit global into worker sandbox"
```

---

## Task 2: Infrastructure — topicMeta.ts

**Files:** Modify `src/features/exercises/infrastructure/data/topicMeta.ts`

- [ ] **Step 1: Add redux-legacy and redux-toolkit entries before closing `}`**

```ts
  'redux-legacy': {
    description: {
      en: 'Redux is a predictable state container for JavaScript apps. These exercises cover the foundational patterns: reducers, action creators, middleware, and store from scratch — no abstractions, pure functions only.',
      es: 'Redux es un contenedor de estado predecible para aplicaciones JavaScript. Estos ejercicios cubren los patrones fundamentales: reducers, action creators, middleware y store desde cero — sin abstracciones, solo funciones puras.',
    },
  },
  'redux-toolkit': {
    description: {
      en: 'Redux Toolkit is the official, opinionated toolset for Redux development. These exercises cover createSlice, configureStore, createAsyncThunk, createEntityAdapter, and more — using the modern RTK API.',
      es: 'Redux Toolkit es el conjunto de herramientas oficial y con opiniones para el desarrollo con Redux. Estos ejercicios cubren createSlice, configureStore, createAsyncThunk, createEntityAdapter y más — usando la API moderna de RTK.',
    },
  },
```

- [ ] **Step 2: Commit**

```bash
git add src/features/exercises/infrastructure/data/topicMeta.ts
git commit -m "feat: add redux-legacy and redux-toolkit topic metadata"
```

---

## Task 3: Infrastructure — HomeView.tsx

**Files:** Modify `src/features/home/presentation/components/HomeView.tsx`

- [ ] **Step 1: Update Redux card hrefs and filter OBJECTS**

Around line 33, `OBJECTS = getAvailableObjects()`. Add a filter below it:

```ts
const OBJECTS = getAvailableObjects().filter(
  (o) => o !== 'redux-legacy' && o !== 'redux-toolkit'
)
```

Update the card hrefs (around lines 164 and 174):
```tsx
// Change:
href="/redux-legacy"
// To:
href="/exercises/redux-legacy"

// Change:
href="/redux-toolkit"
// To:
href="/exercises/redux-toolkit"
```

- [ ] **Step 2: Commit**

```bash
git add src/features/home/presentation/components/HomeView.tsx
git commit -m "feat: link Redux cards to exercise pages, hide from objects grid"
```

---

## Task 4: Redux Legacy — reducers.ts (exercises 1–7)

**Files:** Create `src/features/exercises/infrastructure/data/redux-legacy/reducers.ts`

Key constraints:
- `tests[].assertion` strings are NOT Babel-transpiled — use plain JS only
- Supported matchers: `toBe`, `toEqual`, `toStrictEqual`, `toBeTruthy`, `toBeFalsy`, `toContain`, `toHaveLength`, `toBeNull`, `toBeUndefined`, `toThrow`
- No `.not`, no `toBeGreaterThan`, no `toHaveProperty`
- `var` declarations from `eval()` leak into the `new Function` scope — user function names are accessible in assertions

```ts
import type { Exercise } from '@/shared/types/exercises'

export const reduxLegacyReducersExercises: Exercise[] = [
  {
    slug: 'basic-reducer',
    title: 'Basic Reducer',
    description: `## Basic Reducer\n\nA reducer is a pure function that takes the current state and an action, and returns a new state. It must not mutate the state.\n\n**Challenge:** Implement \`reducer(state, action)\` that returns \`state + 1\` when \`action.type === 'INCREMENT'\` and returns \`state\` otherwise.\n\n\`\`\`js\nreducer(0, { type: 'INCREMENT' }) // → 1\nreducer(5, { type: 'OTHER' })     // → 5\n\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-legacy',
    method: 'reducer',
    initialCode: `function reducer(state, action) {
  // Return state + 1 when action.type is 'INCREMENT', otherwise return state
}`,
    solution: `function reducer(state, action) {
  if (action.type === 'INCREMENT') return state + 1
  return state
}`,
    tests: [
      { description: 'increments state on INCREMENT', assertion: "expect(reducer(0, { type: 'INCREMENT' })).toBe(1)" },
      { description: 'returns state unchanged for unknown action', assertion: "expect(reducer(5, { type: 'OTHER' })).toBe(5)" },
      { description: 'starts from any state value', assertion: "expect(reducer(10, { type: 'INCREMENT' })).toBe(11)" },
      { description: 'does not mutate — returns new value', assertion: "expect(reducer(3, { type: 'INCREMENT' })).toBe(4)" },
    ],
    hints: [
      'Use an `if` statement or a `switch` to check `action.type`.',
      'A reducer must always return a value — including in the default case.',
    ],
    tags: ['redux', 'reducer', 'pure-function', 'beginner'],
    usageExample: {
      code: `function reducer(state, action) {
  if (action.type === 'INCREMENT') return state + 1
  return state
}
reducer(0, { type: 'INCREMENT' }) // → 1`,
      explanation: {
        en: 'A reducer takes current state and an action and returns the next state without mutation.',
        es: 'Un reducer toma el estado actual y una acción y devuelve el siguiente estado sin mutarlo.',
      },
    },
  },
  // ... (exercises 2–7 follow the same pattern)
]
```

- [ ] **Write all 7 exercises** with complete `initialCode`, `solution`, `tests[]`, `hints[]`, `usageExample`.

Exercise specs (full code required in file):

**Ex 2 — reducer-initial-state:**
```js
// initialCode:
function reducer(state = 0, action) {
  // Use a default parameter for state and handle INCREMENT
}
// solution:
function reducer(state = 0, action) {
  if (action.type === 'INCREMENT') return state + 1
  return state
}
// tests:
// expect(reducer(undefined, { type: 'INCREMENT' })).toBe(1)
// expect(reducer(undefined, { type: 'OTHER' })).toBe(0)
// expect(reducer(5, { type: 'INCREMENT' })).toBe(6)
```

**Ex 3 — multiple-action-types:**
```js
// solution:
function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}
// tests:
// expect(reducer(0, { type: 'INCREMENT' })).toBe(1)
// expect(reducer(5, { type: 'DECREMENT' })).toBe(4)
// expect(reducer(3, { type: 'RESET' })).toBe(3)
```

**Ex 4 — reducer-with-payload:**
```js
// solution:
function reducer(state = 0, action) {
  switch (action.type) {
    case 'ADD': return state + action.payload
    case 'SUBTRACT': return state - action.payload
    default: return state
  }
}
// tests:
// expect(reducer(0, { type: 'ADD', payload: 5 })).toBe(5)
// expect(reducer(10, { type: 'SUBTRACT', payload: 3 })).toBe(7)
// expect(reducer(0, { type: 'OTHER', payload: 99 })).toBe(0)
```

**Ex 5 — array-state-add:**
```js
// solution:
function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM': return [...state, action.payload]
    default: return state
  }
}
// tests:
// expect(reducer([], { type: 'ADD_ITEM', payload: 'a' })).toContain('a')
// expect(reducer(['x'], { type: 'ADD_ITEM', payload: 'y' })).toHaveLength(2)
// expect(reducer(['x'], { type: 'OTHER', payload: 'y' })).toHaveLength(1)
```

**Ex 6 — array-state-remove:**
```js
// solution:
function reducer(state = [], action) {
  switch (action.type) {
    case 'REMOVE_ITEM': return state.filter(item => item.id !== action.payload)
    default: return state
  }
}
// tests (use toHaveLength, toContain):
// var s1 = reducer([{id:1},{id:2}], {type:'REMOVE_ITEM', payload: 1})
// expect(s1).toHaveLength(1)
// expect(s1[0].id).toBe(2)
```

**Ex 7 — nested-object-state:**
```js
// solution:
function reducer(state = { user: { name: '', age: 0 } }, action) {
  switch (action.type) {
    case 'SET_NAME': return { ...state, user: { ...state.user, name: action.payload } }
    case 'SET_AGE': return { ...state, user: { ...state.user, age: action.payload } }
    default: return state
  }
}
// tests:
// var s = reducer(undefined, { type: 'SET_NAME', payload: 'Alice' })
// expect(s.user.name).toBe('Alice')
// expect(s.user.age).toBe(0)
```

- [ ] **Step 2: Commit**
```bash
git add src/features/exercises/infrastructure/data/redux-legacy/reducers.ts
git commit -m "feat: add Redux Legacy reducer exercises (1-7)"
```

---

## Task 5: Redux Legacy — action-creators.ts (exercises 8–10)

**Files:** Create `src/features/exercises/infrastructure/data/redux-legacy/action-creators.ts`

Exercise specs:

**Ex 8 — simple-action-creator:**
```js
function increment() { return { type: 'INCREMENT' } }
// tests:
// expect(increment().type).toBe('INCREMENT')
// expect(JSON.stringify(increment())).toBe('{"type":"INCREMENT"}')
```

**Ex 9 — action-creator-payload:**
```js
function addItem(item) { return { type: 'ADD_ITEM', payload: item } }
// tests:
// expect(addItem('apple').type).toBe('ADD_ITEM')
// expect(addItem('apple').payload).toBe('apple')
// expect(addItem(42).payload).toBe(42)
```

**Ex 10 — action-type-constants:**
```js
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
function addTodo(text) { return { type: ADD_TODO, payload: text } }
// tests:
// expect(ADD_TODO).toBe('ADD_TODO')
// expect(REMOVE_TODO).toBe('REMOVE_TODO')
// expect(addTodo('buy milk').type).toBe('ADD_TODO')
```

- [ ] **Commit:**
```bash
git add src/features/exercises/infrastructure/data/redux-legacy/action-creators.ts
git commit -m "feat: add Redux Legacy action creator exercises (8-10)"
```

---

## Task 6: Redux Legacy — composition.ts (exercises 11–12)

**Ex 11 — combine-reducers-manual:**
```js
function combineReducers(reducers) {
  return function(state, action) {
    if (state === undefined) state = {}
    var nextState = {}
    var keys = Object.keys(reducers)
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]
      nextState[key] = reducers[key](state[key], action)
    }
    return nextState
  }
}
// tests:
// var countReducer = function(s, a) { if (s === undefined) s = 0; if (a.type === 'INC') return s + 1; return s; }
// var root = combineReducers({ count: countReducer })
// var s0 = root(undefined, { type: '@@INIT' })
// expect(s0.count).toBe(0)
// var s1 = root(s0, { type: 'INC' })
// expect(s1.count).toBe(1)
```

**Ex 12 — root-reducer:**
```js
function counterReducer(state, action) {
  if (state === undefined) state = 0
  if (action.type === 'INCREMENT') return state + 1
  return state
}
function nameReducer(state, action) {
  if (state === undefined) state = ''
  if (action.type === 'SET_NAME') return action.payload
  return state
}
function rootReducer(state, action) {
  if (state === undefined) state = {}
  return {
    counter: counterReducer(state.counter, action),
    name: nameReducer(state.name, action),
  }
}
// tests:
// var s0 = rootReducer(undefined, { type: '@@INIT' })
// expect(s0.counter).toBe(0)
// expect(s0.name).toBe('')
// var s1 = rootReducer(s0, { type: 'INCREMENT' })
// expect(s1.counter).toBe(1)
// var s2 = rootReducer(s1, { type: 'SET_NAME', payload: 'Bob' })
// expect(s2.name).toBe('Bob')
```

---

## Task 7: Redux Legacy — selectors.ts (exercises 13–14)

**Ex 13 — selector-function:**
```js
function getCounter(state) { return state.counter }
function getUser(state) { return state.user }
function getUsername(state) { return state.user.name }
// tests:
// var state = { counter: 5, user: { name: 'Alice', age: 30 } }
// expect(getCounter(state)).toBe(5)
// expect(getUsername(state)).toBe('Alice')
```

**Ex 14 — memoized-selector:**
```js
function createMemoSelector(selector) {
  var lastInput
  var lastResult
  var called = false
  return function(state) {
    if (called && state === lastInput) return lastResult
    called = true
    lastInput = state
    lastResult = selector(state)
    return lastResult
  }
}
// tests:
// var callCount = 0
// var expensiveSelector = function(state) { callCount++; return state.items.filter(function(x) { return x > 0 }) }
// var memoized = createMemoSelector(expensiveSelector)
// var state = { items: [1, -2, 3] }
// var r1 = memoized(state)
// var r2 = memoized(state)  // same reference — should not recompute
// expect(callCount).toBe(1)
// expect(r1).toEqual(r2)
```

---

## Task 8: Redux Legacy — middleware.ts (exercises 15–17)

**Ex 15 — logger-middleware:**
```js
function logger(store) {
  return function(next) {
    return function(action) {
      return next(action)
    }
  }
}
// The key behavior: it calls next(action) and returns the result
// tests verify the curried shape and that next is called
// var dispatchedActions = []
// var fakeStore = { getState: function() { return {} } }
// var fakeNext = function(action) { dispatchedActions.push(action); return action }
// var dispatch = logger(fakeStore)(fakeNext)
// dispatch({ type: 'TEST' })
// expect(dispatchedActions).toHaveLength(1)
// expect(dispatchedActions[0].type).toBe('TEST')
```

**Ex 16 — thunk-middleware:**
```js
function thunk(store) {
  return function(next) {
    return function(action) {
      if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
      }
      return next(action)
    }
  }
}
// tests:
// var results = []
// var fakeStore = { dispatch: function(a) { results.push(a) }, getState: function() { return { value: 42 } } }
// var fakeNext = function(a) { results.push(a) }
// var dispatch = thunk(fakeStore)(fakeNext)
// dispatch({ type: 'PLAIN' })
// expect(results).toHaveLength(1)
// dispatch(function(d, getState) { d({ type: 'THUNK_RESULT', value: getState().value }) })
// expect(results).toHaveLength(2)
// expect(results[1].value).toBe(42)
```

**Ex 17 — async-action-pattern:**
```js
function fetchUser(id) {
  return function(dispatch) {
    dispatch({ type: 'FETCH_USER_REQUEST' })
    return Promise.resolve({ id: id, name: 'Alice' }).then(function(user) {
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: user })
    })
  }
}
// tests:
// var dispatched = []
// var fakeDispatch = function(a) { dispatched.push(a) }
// var thunkAction = fetchUser(1)
// thunkAction(fakeDispatch)
// expect(dispatched[0].type).toBe('FETCH_USER_REQUEST')
// (async part is not tested since assertions run sync)
```

---

## Task 9: Redux Legacy — advanced.ts (exercises 18–22)

**Ex 18 — store-from-scratch:**
```js
function createStore(reducer) {
  var state = reducer(undefined, { type: '@@INIT' })
  var listeners = []
  return {
    getState: function() { return state },
    dispatch: function(action) {
      state = reducer(state, action)
      for (var i = 0; i < listeners.length; i++) listeners[i]()
    },
    subscribe: function(listener) {
      listeners.push(listener)
      return function() {
        listeners = listeners.filter(function(l) { return l !== listener })
      }
    }
  }
}
// tests:
// function countReducer(s, a) { if (s === undefined) s = 0; if (a.type === 'INC') return s + 1; return s }
// var store = createStore(countReducer)
// expect(store.getState()).toBe(0)
// store.dispatch({ type: 'INC' })
// expect(store.getState()).toBe(1)
// var notified = false
// store.subscribe(function() { notified = true })
// store.dispatch({ type: 'INC' })
// expect(notified).toBeTruthy()
```

**Ex 19 — enhancer-pattern:**
```js
// An enhancer wraps createStore to add functionality.
// applyMiddleware is the most common enhancer.
function createStore(reducer, enhancer) {
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer)
  }
  var state = reducer(undefined, { type: '@@INIT' })
  return {
    getState: function() { return state },
    dispatch: function(action) { state = reducer(state, action) }
  }
}
function applyMiddleware(middleware) {
  return function(createStore) {
    return function(reducer) {
      var store = createStore(reducer)
      var dispatch = middleware({ getState: store.getState })(store.dispatch)
      return { getState: store.getState, dispatch: dispatch }
    }
  }
}
// tests:
// var log = []
// var loggingMiddleware = function(store) { return function(next) { return function(action) { log.push(action.type); return next(action) } } }
// function countReducer(s, a) { if (s === undefined) s = 0; if (a.type === 'INC') return s + 1; return s }
// var store = createStore(countReducer, applyMiddleware(loggingMiddleware))
// store.dispatch({ type: 'INC' })
// expect(log).toContain('INC')
// expect(store.getState()).toBe(1)
```

**Ex 20 — immutable-deep-update:**
```js
function setIn(obj, path, value) {
  if (path.length === 0) return value
  var key = path[0]
  var rest = path.slice(1)
  var nested = obj && obj[key] !== undefined ? obj[key] : {}
  return Object.assign({}, obj, { [key]: setIn(nested, rest, value) })
}
// tests:
// var state = { user: { address: { city: 'Madrid' } } }
// var next = setIn(state, ['user', 'address', 'city'], 'Barcelona')
// expect(next.user.address.city).toBe('Barcelona')
// expect(state.user.address.city).toBe('Madrid')  // original unchanged
// var next2 = setIn({}, ['a', 'b'], 42)
// expect(next2.a.b).toBe(42)
```

**Ex 21 — reducer-composition:**
```js
// Compose multiple reducers that each handle part of state
function composeReducers() {
  var reducers = Array.prototype.slice.call(arguments)
  return function(state, action) {
    return reducers.reduce(function(s, reducer) { return reducer(s, action) }, state)
  }
}
// tests:
// function addIdReducer(state, action) { if (state === undefined) state = {}; if (action.type === 'ADD_ID') return Object.assign({}, state, { id: action.payload }); return state }
// function addNameReducer(state, action) { if (state === undefined) state = {}; if (action.type === 'ADD_NAME') return Object.assign({}, state, { name: action.payload }); return state }
// var combined = composeReducers(addIdReducer, addNameReducer)
// var s0 = combined(undefined, { type: '@@INIT' })
// var s1 = combined(s0, { type: 'ADD_ID', payload: 1 })
// var s2 = combined(s1, { type: 'ADD_NAME', payload: 'Alice' })
// expect(s2.id).toBe(1)
// expect(s2.name).toBe('Alice')
```

**Ex 22 — state-history:**
```js
function withHistory(reducer) {
  var init = reducer(undefined, { type: '@@INIT' })
  return function(state, action) {
    if (state === undefined) state = { present: init, past: [] }
    if (action.type === 'UNDO') {
      if (state.past.length === 0) return state
      var previous = state.past[state.past.length - 1]
      return { present: previous, past: state.past.slice(0, -1) }
    }
    return {
      present: reducer(state.present, action),
      past: state.past.concat([state.present]),
    }
  }
}
// tests:
// function countReducer(s, a) { if (s === undefined) s = 0; if (a.type === 'INC') return s + 1; return s }
// var historyReducer = withHistory(countReducer)
// var s0 = historyReducer(undefined, { type: '@@INIT' })
// expect(s0.present).toBe(0)
// var s1 = historyReducer(s0, { type: 'INC' })
// expect(s1.present).toBe(1)
// var s2 = historyReducer(s1, { type: 'UNDO' })
// expect(s2.present).toBe(0)
```

---

## Task 10: Redux Toolkit — slices.ts (RTK exercises 1–5)

**Files:** Create `src/features/exercises/infrastructure/data/redux-toolkit/slices.ts`

RTK exercises start with `// ReduxToolkit is available as a global object.`
All assertions use the sandbox global `ReduxToolkit`.

**RTK Ex 1 — create-slice-basics:**
```js
// ReduxToolkit is available as a global object.
const { createSlice } = ReduxToolkit
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state) { state.value += 1 },
  },
})
// assertions:
// expect(counterSlice.name).toBe('counter')
// var s0 = counterSlice.reducer(undefined, { type: '@@INIT' })
// expect(s0.value).toBe(0)
// var s1 = counterSlice.reducer(s0, counterSlice.actions.increment())
// expect(s1.value).toBe(1)
```

**RTK Ex 2 — slice-action-creators:**
```js
const { createSlice } = ReduxToolkit
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    addBy: (state, action) => state + action.payload,
  },
})
const { increment, decrement, addBy } = counterSlice.actions
// assertions:
// expect(increment().type).toBe('counter/increment')
// expect(decrement().type).toBe('counter/decrement')
// expect(addBy(5).payload).toBe(5)
// expect(counterSlice.reducer(0, increment())).toBe(1)
```

**RTK Ex 3 — immer-mutations:**
```js
const { createSlice } = ReduxToolkit
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) { state.push(action.payload) },
    removeTodo(state, action) { return state.filter(t => t.id !== action.payload) },
  },
})
// assertions:
// var s1 = todosSlice.reducer([], todosSlice.actions.addTodo({ id: 1, text: 'buy milk' }))
// expect(s1).toHaveLength(1)
// expect(s1[0].text).toBe('buy milk')
// var s2 = todosSlice.reducer(s1, todosSlice.actions.removeTodo(1))
// expect(s2).toHaveLength(0)
```

**RTK Ex 4 — configure-store-basic:**
```js
const { configureStore, createSlice } = ReduxToolkit
const counterSlice = createSlice({ name: 'counter', initialState: 0, reducers: { inc: s => s + 1 } })
const store = configureStore({ reducer: counterSlice.reducer })
// assertions:
// expect(store.getState()).toBe(0)
// store.dispatch(counterSlice.actions.inc())
// expect(store.getState()).toBe(1)
```

**RTK Ex 5 — configure-store-multi-slice:**
```js
const { configureStore, createSlice } = ReduxToolkit
const counterSlice = createSlice({ name: 'counter', initialState: 0, reducers: { inc: s => s + 1 } })
const nameSlice = createSlice({ name: 'name', initialState: '', reducers: { set: (s, a) => a.payload } })
const store = configureStore({ reducer: { counter: counterSlice.reducer, name: nameSlice.reducer } })
// assertions:
// expect(store.getState().counter).toBe(0)
// expect(store.getState().name).toBe('')
// store.dispatch(counterSlice.actions.inc())
// expect(store.getState().counter).toBe(1)
// store.dispatch(nameSlice.actions.set('Alice'))
// expect(store.getState().name).toBe('Alice')
```

---

## Task 11: Redux Toolkit — actions-reducers.ts (RTK exercises 6–7)

**RTK Ex 6 — create-action:**
```js
const { createAction } = ReduxToolkit
const increment = createAction('counter/increment')
const addBy = createAction('counter/addBy')
// assertions:
// expect(increment().type).toBe('counter/increment')
// expect(addBy(5).payload).toBe(5)
// expect(addBy(5).type).toBe('counter/addBy')
// expect(typeof increment.toString).toBe('function')
// expect(increment.toString()).toBe('counter/increment')
```

**RTK Ex 7 — create-reducer:**
```js
const { createReducer, createAction } = ReduxToolkit
const increment = createAction('increment')
const decrement = createAction('decrement')
const addBy = createAction('addBy')
const counterReducer = createReducer(0, builder => {
  builder
    .addCase(increment, state => state + 1)
    .addCase(decrement, state => state - 1)
    .addCase(addBy, (state, action) => state + action.payload)
})
// assertions:
// expect(counterReducer(0, increment())).toBe(1)
// expect(counterReducer(5, decrement())).toBe(4)
// expect(counterReducer(0, addBy(10))).toBe(10)
// expect(counterReducer(3, { type: 'unknown' })).toBe(3)
```

---

## Task 12: Redux Toolkit — selectors.ts (RTK exercises 8–10)

**RTK Ex 8 — typed-selector:**
```js
const { configureStore, createSlice } = ReduxToolkit
const userSlice = createSlice({
  name: 'user',
  initialState: { name: 'Alice', age: 30 },
  reducers: { setAge: (state, action) => { state.age = action.payload } }
})
const store = configureStore({ reducer: { user: userSlice.reducer } })
function selectName(state) { return state.user.name }
function selectAge(state) { return state.user.age }
// assertions:
// expect(selectName(store.getState())).toBe('Alice')
// expect(selectAge(store.getState())).toBe(30)
// store.dispatch(userSlice.actions.setAge(31))
// expect(selectAge(store.getState())).toBe(31)
```

**RTK Ex 9 — create-selector:**
```js
const { createSelector, configureStore, createSlice } = ReduxToolkit
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: { addItem: (state, action) => { state.items.push(action.payload) } }
})
const store = configureStore({ reducer: { cart: cartSlice.reducer } })
const selectItems = state => state.cart.items
const selectCount = createSelector(selectItems, items => items.length)
// assertions:
// expect(selectCount(store.getState())).toBe(0)
// store.dispatch(cartSlice.actions.addItem({ id: 1 }))
// expect(selectCount(store.getState())).toBe(1)
```

**RTK Ex 10 — derived-selector:**
```js
const { createSelector } = ReduxToolkit
const selectItems = state => state.items
const selectFilter = state => state.filter
const selectFiltered = createSelector(
  selectItems, selectFilter,
  (items, filter) => items.filter(item => item.category === filter)
)
// assertions:
// var state = { items: [{ id: 1, category: 'a' }, { id: 2, category: 'b' }], filter: 'a' }
// var result = selectFiltered(state)
// expect(result).toHaveLength(1)
// expect(result[0].id).toBe(1)
```

---

## Task 13: Redux Toolkit — thunks.ts (RTK exercises 11–15)

**RTK Ex 11 — async-thunk-basics:**
```js
const { createAsyncThunk, createSlice } = ReduxToolkit
const fetchUser = createAsyncThunk('user/fetch', async (id) => ({ id, name: 'Alice' }))
const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, status: 'idle' },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = 'succeeded'
    })
  }
})
// assertions (use synchronous action creators — no await):
// var pendingAction = fetchUser.pending('reqId', 1)
// expect(pendingAction.type).toBe('user/fetch/pending')
// var fulfilledAction = fetchUser.fulfilled({ id: 1, name: 'Alice' }, 'reqId', 1)
// var s = userSlice.reducer(undefined, fulfilledAction)
// expect(s.status).toBe('succeeded')
// expect(s.data.name).toBe('Alice')
```

**RTK Ex 12 — thunk-pending-state:**
```js
const { createAsyncThunk, createSlice } = ReduxToolkit
const fetchData = createAsyncThunk('data/fetch', async () => ({ value: 42 }))
const dataSlice = createSlice({
  name: 'data',
  initialState: { loading: false, value: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => { state.loading = true })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false
        state.value = action.payload.value
      })
  }
})
// assertions:
// var pendingAction = fetchData.pending('req')
// var s1 = dataSlice.reducer(undefined, pendingAction)
// expect(s1.loading).toBeTruthy()
// var fulfilledAction = fetchData.fulfilled({ value: 42 }, 'req')
// var s2 = dataSlice.reducer(s1, fulfilledAction)
// expect(s2.loading).toBeFalsy()
// expect(s2.value).toBe(42)
```

**RTK Ex 13 — thunk-fulfilled-state:**
```js
const { createAsyncThunk, createSlice, configureStore } = ReduxToolkit
const loadPosts = createAsyncThunk('posts/load', async () => ['post1', 'post2'])
const postsSlice = createSlice({
  name: 'posts',
  initialState: { items: [], loaded: false },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadPosts.fulfilled, (state, action) => {
      state.items = action.payload
      state.loaded = true
    })
  }
})
// assertions:
// var fulfilledAction = loadPosts.fulfilled(['post1', 'post2'], 'req')
// var s = postsSlice.reducer(undefined, fulfilledAction)
// expect(s.loaded).toBeTruthy()
// expect(s.items).toHaveLength(2)
// expect(s.items).toContain('post1')
```

**RTK Ex 14 — thunk-rejected-state:**
```js
const { createAsyncThunk, createSlice } = ReduxToolkit
const fetchUser = createAsyncThunk('user/fetch', async (id) => { throw new Error('not found') })
const userSlice = createSlice({
  name: 'user',
  initialState: { error: null, data: null },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message
    })
  }
})
// assertions:
// var rejectedAction = fetchUser.rejected(new Error('not found'), 'req', 1)
// var s = userSlice.reducer(undefined, rejectedAction)
// expect(s.error).toBe('not found')
// expect(s.data).toBeNull()
```

**RTK Ex 15 — extra-reducers-builder:**
```js
const { createAsyncThunk, createSlice } = ReduxToolkit
const loadItems = createAsyncThunk('items/load', async () => [1, 2, 3])
const itemsSlice = createSlice({
  name: 'items',
  initialState: { items: [], status: 'idle', error: null },
  reducers: { reset: () => ({ items: [], status: 'idle', error: null }) },
  extraReducers: builder => {
    builder
      .addCase(loadItems.pending, state => { state.status = 'loading' })
      .addCase(loadItems.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = 'succeeded'
      })
      .addCase(loadItems.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})
// assertions:
// var s1 = itemsSlice.reducer(undefined, loadItems.pending('r'))
// expect(s1.status).toBe('loading')
// var s2 = itemsSlice.reducer(s1, loadItems.fulfilled([1,2,3], 'r'))
// expect(s2.status).toBe('succeeded')
// expect(s2.items).toHaveLength(3)
// var s3 = itemsSlice.reducer(undefined, loadItems.rejected(new Error('fail'), 'r'))
// expect(s3.status).toBe('failed')
```

---

## Task 14: Redux Toolkit — entity.ts (RTK exercises 16–17)

**RTK Ex 16 — create-entity-adapter:**
```js
const { createEntityAdapter, createSlice } = ReduxToolkit
const todosAdapter = createEntityAdapter()
const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo: todosAdapter.addOne,
    removeTodo: todosAdapter.removeOne,
    updateTodo: todosAdapter.updateOne,
  }
})
// assertions:
// var s1 = todosSlice.reducer(undefined, todosSlice.actions.addTodo({ id: 1, text: 'buy milk' }))
// expect(s1.ids).toContain(1)
// expect(s1.entities[1].text).toBe('buy milk')
// var s2 = todosSlice.reducer(s1, todosSlice.actions.removeTodo(1))
// expect(s2.ids).toHaveLength(0)
```

**RTK Ex 17 — entity-selectors:**
```js
const { createEntityAdapter, createSlice, configureStore } = ReduxToolkit
const adapter = createEntityAdapter()
const itemsSlice = createSlice({
  name: 'items',
  initialState: adapter.getInitialState(),
  reducers: { addItem: adapter.addOne }
})
const store = configureStore({ reducer: { items: itemsSlice.reducer } })
const selectors = adapter.getSelectors(state => state.items)
// assertions:
// store.dispatch(itemsSlice.actions.addItem({ id: 1, name: 'Widget' }))
// store.dispatch(itemsSlice.actions.addItem({ id: 2, name: 'Gadget' }))
// expect(selectors.selectAll(store.getState())).toHaveLength(2)
// expect(selectors.selectById(store.getState(), 1).name).toBe('Widget')
// expect(selectors.selectTotal(store.getState())).toBe(2)
```

---

## Task 15: Redux Toolkit — advanced.ts (RTK exercises 18–22)

**RTK Ex 18 — listener-middleware:**
```js
const { createListenerMiddleware, createSlice, configureStore } = ReduxToolkit
const listenerMiddleware = createListenerMiddleware()
const counterSlice = createSlice({ name: 'c', initialState: 0, reducers: { inc: s => s + 1 } })
var sideEffects = []
listenerMiddleware.startListening({
  actionCreator: counterSlice.actions.inc,
  effect: (action, api) => { sideEffects.push('inc fired') }
})
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
  middleware: m => m().concat(listenerMiddleware.middleware),
})
// assertions:
// store.dispatch(counterSlice.actions.inc())
// expect(store.getState().counter).toBe(1)
// expect(sideEffects).toContain('inc fired')
```

**RTK Ex 19 — middleware-config:**
```js
const { configureStore, createSlice } = ReduxToolkit
var logged = []
var loggingMiddleware = store => next => action => {
  logged.push(action.type)
  return next(action)
}
const counterSlice = createSlice({ name: 'counter', initialState: 0, reducers: { inc: s => s + 1 } })
const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loggingMiddleware),
})
// assertions:
// store.dispatch(counterSlice.actions.inc())
// expect(logged).toContain('counter/inc')
// expect(store.getState()).toBe(1)
```

**RTK Ex 20 — slice-reset-action:**
```js
const { createSlice } = ReduxToolkit
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, step: 1 },
  reducers: {
    increment: state => { state.value += state.step },
    setStep: (state, action) => { state.step = action.payload },
    reset: () => ({ value: 0, step: 1 }),
  }
})
// assertions:
// var s1 = counterSlice.reducer(undefined, counterSlice.actions.increment())
// expect(s1.value).toBe(1)
// var s2 = counterSlice.reducer(s1, counterSlice.actions.setStep(5))
// var s3 = counterSlice.reducer(s2, counterSlice.actions.increment())
// expect(s3.value).toBe(6)
// var s4 = counterSlice.reducer(s3, counterSlice.actions.reset())
// expect(s4.value).toBe(0)
// expect(s4.step).toBe(1)
```

**RTK Ex 21 — nested-slice-state:**
```js
const { createSlice } = ReduxToolkit
const profileSlice = createSlice({
  name: 'profile',
  initialState: { user: { name: '', preferences: { theme: 'light' } } },
  reducers: {
    setName: (state, action) => { state.user.name = action.payload },
    setTheme: (state, action) => { state.user.preferences.theme = action.payload },
  }
})
// assertions:
// var s1 = profileSlice.reducer(undefined, profileSlice.actions.setName('Alice'))
// expect(s1.user.name).toBe('Alice')
// expect(s1.user.preferences.theme).toBe('light')
// var s2 = profileSlice.reducer(s1, profileSlice.actions.setTheme('dark'))
// expect(s2.user.preferences.theme).toBe('dark')
// expect(s2.user.name).toBe('Alice')
```

**RTK Ex 22 — full-counter-app:**
```js
const { createSlice, configureStore, createSelector } = ReduxToolkit
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, history: [] },
  reducers: {
    increment: state => { state.history.push(state.value); state.value += 1 },
    decrement: state => { state.history.push(state.value); state.value -= 1 },
    reset: state => { state.value = 0; state.history = [] },
  }
})
const store = configureStore({ reducer: { counter: counterSlice.reducer } })
const selectValue = state => state.counter.value
const selectHistory = state => state.counter.history
const selectHistoryLength = createSelector(selectHistory, h => h.length)
// assertions:
// store.dispatch(counterSlice.actions.increment())
// store.dispatch(counterSlice.actions.increment())
// expect(selectValue(store.getState())).toBe(2)
// expect(selectHistoryLength(store.getState())).toBe(2)
// store.dispatch(counterSlice.actions.decrement())
// expect(selectValue(store.getState())).toBe(1)
// store.dispatch(counterSlice.actions.reset())
// expect(selectValue(store.getState())).toBe(0)
// expect(selectHistoryLength(store.getState())).toBe(0)
```

---

## Task 16: data/index.ts — Register Redux exercises

**Files:** Modify `src/features/exercises/infrastructure/data/index.ts`

At the top of the file, add imports:
```ts
import { reduxLegacyExercises } from './redux-legacy'
import { reduxToolkitExercises } from './redux-toolkit'
```

At the end of `allExercises`, add:
```ts
  // Redux exercises
  ...reduxLegacyExercises,
  ...reduxToolkitExercises,
```

- [ ] **Verify build**

```bash
cd /Users/salem/Desktop/React/react-playground && npx tsc --noEmit 2>&1 | head -30
```

---

## Task 17: Final commit

```bash
git add -A
git commit -m "feat: add 44 interactive Redux exercises (22 legacy + 22 RTK)

- Redux Legacy: reducers, action creators, combineReducers, selectors,
  middleware (logger, thunk), store from scratch, enhancers, immutable
  updates, reducer composition, time-travel
- Redux Toolkit: createSlice, configureStore, createAction, createReducer,
  createSelector, createAsyncThunk (pending/fulfilled/rejected),
  createEntityAdapter, createListenerMiddleware
- RTK global injected into worker sandbox (all exercises)
- HomeView cards link to /exercises/ routes; redux topics filtered from
  objects grid
- topicMeta.ts: bilingual descriptions for redux-legacy and redux-toolkit

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```
