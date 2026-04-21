import type { Exercise } from '@/shared/types/exercises'

export const reduxToolkitAdvancedExercises: Exercise[] = [
  {
    slug: 'rtk-listener-middleware',
    title: 'createListenerMiddleware',
    description: `## createListenerMiddleware

Listener middleware lets you run side effects in response to dispatched actions — without sagas or observables.

**Challenge:** Set up a listener that pushes \`'inc fired'\` to a \`sideEffects\` array every time the counter increments.

\`\`\`js
store.dispatch(counterSlice.actions.inc())
sideEffects // → ['inc fired']
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'redux-toolkit',
    method: 'createListenerMiddleware',
    initialCode: `// ReduxToolkit is available as a global object.
const { createListenerMiddleware, createSlice, configureStore } = ReduxToolkit

const listenerMiddleware = createListenerMiddleware()

const counterSlice = createSlice({
  name: 'c',
  initialState: 0,
  reducers: { inc: state => state + 1 },
})

var sideEffects = []

// Register a listener for counterSlice.actions.inc
// that pushes 'inc fired' to sideEffects
listenerMiddleware.startListening({
  actionCreator: counterSlice.actions.inc,
  effect: (action, api) => { /* sideEffects.push('inc fired') */ },
})

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
  middleware: m => m().concat(listenerMiddleware.middleware),
})`,
    solution: `// ReduxToolkit is available as a global object.
const { createListenerMiddleware, createSlice, configureStore } = ReduxToolkit

const listenerMiddleware = createListenerMiddleware()

const counterSlice = createSlice({
  name: 'c',
  initialState: 0,
  reducers: { inc: state => state + 1 },
})

var sideEffects = []

listenerMiddleware.startListening({
  actionCreator: counterSlice.actions.inc,
  effect: (action, api) => { sideEffects.push('inc fired') },
})

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
  middleware: m => m().concat(listenerMiddleware.middleware),
})`,
    tests: [
      {
        description: 'counter increments to 1',
        assertion:
          'store.dispatch(counterSlice.actions.inc()); expect(store.getState().counter).toBe(1)',
      },
      {
        description: 'counter increments to 2',
        assertion:
          'store.dispatch(counterSlice.actions.inc()); expect(store.getState().counter).toBe(2)',
      },
      {
        description: 'sideEffects has 2 entries after 2 dispatches',
        assertion: 'expect(sideEffects).toHaveLength(2)',
      },
      {
        description: 'sideEffects contains inc fired',
        assertion: "expect(sideEffects).toContain('inc fired')",
      },
    ],
    hints: [
      'Call `listenerMiddleware.startListening({ actionCreator, effect })` before creating the store.',
      'Add the middleware with `middleware: m => m().concat(listenerMiddleware.middleware)`.',
      'The `effect` callback runs synchronously after the action is dispatched.',
    ],
    tags: ['redux-toolkit', 'createListenerMiddleware', 'middleware', 'side-effects', 'advanced'],
    usageExample: {
      code: `const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
  actionCreator: mySlice.actions.someAction,
  effect: (action, api) => { console.log('action fired:', action.type) },
})`,
      explanation: {
        en: 'createListenerMiddleware provides a lightweight alternative to sagas for responding to actions with side effects.',
        es: 'createListenerMiddleware proporciona una alternativa ligera a los sagas para responder a acciones con efectos secundarios.',
      },
    },
  },

  {
    slug: 'rtk-middleware-config',
    title: 'Configuring Middleware',
    description: `## Configuring Middleware

\`configureStore\` accepts a \`middleware\` option. Pass a function \`getDefaultMiddleware => getDefaultMiddleware().concat(myMiddleware)\` to add custom middleware while keeping the defaults (thunk, serializability check, etc.).

**Challenge:** Add a logging middleware that records dispatched action types to a \`logged\` array.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'configureStore',
    initialCode: `// ReduxToolkit is available as a global object.
const { configureStore, createSlice } = ReduxToolkit

var logged = []

var loggingMiddleware = store => next => action => {
  // Push action.type to logged, then call next(action)
  return next(action)
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: { inc: state => state + 1 },
})

const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loggingMiddleware),
})`,
    solution: `// ReduxToolkit is available as a global object.
const { configureStore, createSlice } = ReduxToolkit

var logged = []

var loggingMiddleware = store => next => action => {
  logged.push(action.type)
  return next(action)
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: { inc: state => state + 1 },
})

const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loggingMiddleware),
})`,
    tests: [
      {
        description: 'logged contains counter/inc after dispatch',
        assertion:
          "store.dispatch(counterSlice.actions.inc()); expect(logged).toContain('counter/inc')",
      },
      {
        description: 'store state is 2 after two dispatches',
        assertion:
          'store.dispatch(counterSlice.actions.inc()); expect(store.getState()).toBe(2)',
      },
      {
        description: 'logged has 2 entries after two dispatches',
        assertion: 'expect(logged).toHaveLength(2)',
      },
    ],
    hints: [
      'Middleware signature: `store => next => action => { ... return next(action) }`.',
      'Always call `return next(action)` to pass the action down the middleware chain.',
      'Use `getDefaultMiddleware().concat(myMiddleware)` to preserve thunk and other defaults.',
    ],
    tags: ['redux-toolkit', 'configureStore', 'middleware', 'intermediate'],
    usageExample: {
      code: `const store = configureStore({
  reducer: myReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loggingMiddleware),
})`,
      explanation: {
        en: 'Extend the default middleware array with custom middleware using getDefaultMiddleware().concat().',
        es: 'Extiende el array de middleware predeterminado con middleware personalizado usando getDefaultMiddleware().concat().',
      },
    },
  },

  {
    slug: 'rtk-slice-reset-action',
    title: 'Reset Action in a Slice',
    description: `## Reset Action in a Slice

A \`reset\` reducer that returns the initial state is a common pattern. You can return a plain object from a reducer — Immer will use the returned value instead of the draft.

**Challenge:** Implement a counter slice with \`increment\`, \`setStep\`, and \`reset\` reducers.

\`\`\`js
// After setStep(5) and increment:
state.value // → 5
// After reset:
state        // → { value: 0, step: 1 }
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'createSlice',
    initialCode: `// ReduxToolkit is available as a global object.
const { createSlice } = ReduxToolkit

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, step: 1 },
  reducers: {
    // increment: add step to value
    // setStep: set step to payload
    // reset: return initial state { value: 0, step: 1 }
  },
})`,
    solution: `// ReduxToolkit is available as a global object.
const { createSlice } = ReduxToolkit

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, step: 1 },
  reducers: {
    increment: state => { state.value += state.step },
    setStep: (state, action) => { state.step = action.payload },
    reset: () => ({ value: 0, step: 1 }),
  },
})`,
    tests: [
      {
        description: 'increment adds 1 by default',
        assertion:
          'var s1 = counterSlice.reducer(undefined, counterSlice.actions.increment()); expect(s1.value).toBe(1)',
      },
      {
        description: 'setStep then increment adds step amount',
        assertion:
          'var s2 = counterSlice.reducer({ value: 0, step: 1 }, counterSlice.actions.setStep(5)); var s3 = counterSlice.reducer(s2, counterSlice.actions.increment()); expect(s3.value).toBe(5)',
      },
      {
        description: 'reset returns value to 0',
        assertion:
          'var s4 = counterSlice.reducer({ value: 10, step: 5 }, counterSlice.actions.reset()); expect(s4.value).toBe(0)',
      },
      {
        description: 'reset returns step to 1',
        assertion:
          'var s5 = counterSlice.reducer({ value: 10, step: 5 }, counterSlice.actions.reset()); expect(s5.step).toBe(1)',
      },
    ],
    hints: [
      'Return a brand-new object from the reducer to replace the entire state: `reset: () => ({ value: 0, step: 1 })`.',
      'When you return a value from an Immer reducer, the returned value replaces the draft.',
      '`state.value += state.step` reads the current step before adding.',
    ],
    tags: ['redux-toolkit', 'createSlice', 'reset', 'immer', 'intermediate'],
    usageExample: {
      code: `reducers: {
  reset: () => ({ value: 0, step: 1 }),
}
// Returning a value from an Immer reducer replaces state entirely.`,
      explanation: {
        en: 'Returning a plain object from an Immer reducer replaces the entire state — perfect for reset actions.',
        es: 'Devolver un objeto simple desde un reducer de Immer reemplaza todo el estado; perfecto para acciones de reset.',
      },
    },
  },

  {
    slug: 'rtk-nested-slice-state',
    title: 'Nested State with Immer',
    description: `## Nested State with Immer

Immer handles **deeply nested** state mutations transparently. You can assign to nested properties just like plain JavaScript.

**Challenge:** Create a profile slice with nested \`user.preferences.theme\` and write reducers to update the name and theme.

\`\`\`js
profileSlice.reducer(undefined, setTheme('dark'))
// → { user: { name: '', preferences: { theme: 'dark' } } }
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'createSlice',
    initialCode: `// ReduxToolkit is available as a global object.
const { createSlice } = ReduxToolkit

const profileSlice = createSlice({
  name: 'profile',
  initialState: { user: { name: '', preferences: { theme: 'light' } } },
  reducers: {
    // setName: update state.user.name
    // setTheme: update state.user.preferences.theme
  },
})`,
    solution: `// ReduxToolkit is available as a global object.
const { createSlice } = ReduxToolkit

const profileSlice = createSlice({
  name: 'profile',
  initialState: { user: { name: '', preferences: { theme: 'light' } } },
  reducers: {
    setName: (state, action) => { state.user.name = action.payload },
    setTheme: (state, action) => { state.user.preferences.theme = action.payload },
  },
})`,
    tests: [
      {
        description: 'setName updates user.name',
        assertion:
          "var s1 = profileSlice.reducer(undefined, profileSlice.actions.setName('Alice')); expect(s1.user.name).toBe('Alice')",
      },
      {
        description: 'setName preserves existing theme',
        assertion:
          "var s2 = profileSlice.reducer(undefined, profileSlice.actions.setName('Alice')); expect(s2.user.preferences.theme).toBe('light')",
      },
      {
        description: 'setTheme updates preferences.theme',
        assertion:
          "var s3 = profileSlice.reducer(undefined, profileSlice.actions.setTheme('dark')); expect(s3.user.preferences.theme).toBe('dark')",
      },
      {
        description: 'setTheme preserves user.name',
        assertion:
          "var s4 = profileSlice.reducer(undefined, profileSlice.actions.setTheme('dark')); expect(s4.user.name).toBe('')",
      },
    ],
    hints: [
      'Immer works at any nesting depth: `state.user.preferences.theme = action.payload` is safe.',
      'Only the properties you touch are updated — the rest of the state is preserved.',
      'You don\'t need to spread nested objects — Immer handles structural sharing automatically.',
    ],
    tags: ['redux-toolkit', 'createSlice', 'immer', 'nested-state', 'intermediate'],
    usageExample: {
      code: `reducers: {
  setTheme: (state, action) => {
    state.user.preferences.theme = action.payload
  },
}`,
      explanation: {
        en: 'Immer lets you write deeply nested mutations naturally — no need to spread every level of the state tree.',
        es: 'Immer te permite escribir mutaciones profundamente anidadas de forma natural, sin necesidad de hacer spread en cada nivel del árbol de estado.',
      },
    },
  },

  {
    slug: 'rtk-full-counter-app',
    title: 'Full Counter Application',
    description: `## Full Counter Application

Put it all together: slice, store, selectors, and actions. A real counter that tracks a history of previous values.

**Challenge:** Implement a counter slice with \`increment\`, \`decrement\`, and \`reset\` reducers. Each mutating action should push the current value to \`history\` first. Create memoized selectors \`selectValue\` and \`selectHistoryLength\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'redux-toolkit',
    method: 'createSlice',
    initialCode: `// ReduxToolkit is available as a global object.
const { createSlice, configureStore, createSelector } = ReduxToolkit

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, history: [] },
  reducers: {
    // increment: push current value to history, then add 1
    // decrement: push current value to history, then subtract 1
    // reset: clear value and history
  },
})

const store = configureStore({ reducer: { counter: counterSlice.reducer } })

// Plain selectors
const selectValue = state => state.counter.value
const selectHistory = state => state.counter.history

// Memoized selector for history length
const selectHistoryLength = createSelector(selectHistory, h => /* h.length */)`,
    solution: `// ReduxToolkit is available as a global object.
const { createSlice, configureStore, createSelector } = ReduxToolkit

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, history: [] },
  reducers: {
    increment: state => { state.history.push(state.value); state.value += 1 },
    decrement: state => { state.history.push(state.value); state.value -= 1 },
    reset: state => { state.value = 0; state.history = [] },
  },
})

const store = configureStore({ reducer: { counter: counterSlice.reducer } })

const selectValue = state => state.counter.value
const selectHistory = state => state.counter.history
const selectHistoryLength = createSelector(selectHistory, h => h.length)`,
    tests: [
      {
        description: 'value is 2 after two increments',
        assertion:
          'store.dispatch(counterSlice.actions.increment()); store.dispatch(counterSlice.actions.increment()); expect(selectValue(store.getState())).toBe(2)',
      },
      {
        description: 'historyLength is 2 after two increments',
        assertion: 'expect(selectHistoryLength(store.getState())).toBe(2)',
      },
      {
        description: 'value is 1 after decrement',
        assertion:
          'store.dispatch(counterSlice.actions.decrement()); expect(selectValue(store.getState())).toBe(1)',
      },
      {
        description: 'value is 0 after reset',
        assertion:
          'store.dispatch(counterSlice.actions.reset()); expect(selectValue(store.getState())).toBe(0)',
      },
      {
        description: 'historyLength is 0 after reset',
        assertion: 'expect(selectHistoryLength(store.getState())).toBe(0)',
      },
    ],
    hints: [
      'Use `state.history.push(state.value)` before mutating `state.value`.',
      'The `reset` reducer can use Immer mutations: `state.value = 0; state.history = []`.',
      '`createSelector(selectHistory, h => h.length)` memoizes based on array reference.',
    ],
    tags: ['redux-toolkit', 'createSlice', 'createSelector', 'configureStore', 'advanced'],
    usageExample: {
      code: `const { createSlice, configureStore, createSelector } = ReduxToolkit
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, history: [] },
  reducers: {
    increment: state => { state.history.push(state.value); state.value += 1 },
  },
})`,
      explanation: {
        en: 'Combining createSlice, configureStore, and createSelector gives you a complete, production-ready Redux feature module.',
        es: 'Combinar createSlice, configureStore y createSelector te da un módulo de funcionalidad Redux completo y listo para producción.',
      },
    },
  },
]
