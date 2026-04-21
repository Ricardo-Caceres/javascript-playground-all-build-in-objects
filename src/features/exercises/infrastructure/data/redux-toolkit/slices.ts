import type { Exercise } from '@/shared/types/exercises'

export const reduxToolkitSlicesExercises: Exercise[] = [
  {
    slug: 'rtk-create-slice-basics',
    title: 'Create Slice Basics',
    description: `## createSlice Basics

\`createSlice\` is the recommended way to write Redux logic. It generates action creators and action types automatically based on the reducer names you provide.

**Challenge:** Create a counter slice with:
- \`name: 'counter'\`
- \`initialState: { value: 0 }\`
- one reducer \`increment\` that increases \`value\` by 1

\`\`\`js
counterSlice.name // → 'counter'
counterSlice.actions.increment().type // → 'counter/increment'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-toolkit',
    method: 'createSlice',
    initialCode: `// ReduxToolkit is available as a global object.
const { createSlice } = ReduxToolkit

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    // Add increment reducer here
  },
})`,
    solution: `// ReduxToolkit is available as a global object.
const { createSlice } = ReduxToolkit

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state) { state.value += 1 },
  },
})`,
    tests: [
      {
        description: 'slice has correct name',
        assertion: "expect(counterSlice.name).toBe('counter')",
      },
      {
        description: 'initial state value is 0',
        assertion:
          "var s0 = counterSlice.reducer(undefined, { type: '@@INIT' }); expect(s0.value).toBe(0)",
      },
      {
        description: 'increment increases value by 1',
        assertion:
          'var s1 = counterSlice.reducer({ value: 0 }, counterSlice.actions.increment()); expect(s1.value).toBe(1)',
      },
      {
        description: 'increment action type is counter/increment',
        assertion:
          "expect(counterSlice.actions.increment().type).toBe('counter/increment')",
      },
    ],
    hints: [
      'Use `createSlice({ name, initialState, reducers })` to define your slice.',
      'With Immer inside createSlice, you can write `state.value += 1` directly in a reducer.',
      'The action creator is automatically created as `counterSlice.actions.increment`.',
    ],
    tags: ['redux-toolkit', 'createSlice', 'reducer', 'beginner'],
    usageExample: {
      code: `const { createSlice } = ReduxToolkit
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state) { state.value += 1 },
  },
})
counterSlice.actions.increment() // → { type: 'counter/increment' }`,
      explanation: {
        en: 'createSlice bundles the reducer and action creators together — no need to write action type constants manually.',
        es: 'createSlice agrupa el reducer y los creadores de acciones juntos; no es necesario escribir constantes de tipo de acción manualmente.',
      },
    },
  },

  {
    slug: 'rtk-slice-action-creators',
    title: 'Slice Action Creators',
    description: `## Slice Action Creators

\`createSlice\` automatically generates action creators. Each reducer key becomes an action creator that produces \`{ type: 'sliceName/reducerName', payload: arg }\`.

**Challenge:** Create a counter slice with:
- \`increment\`: increases count by 1
- \`decrement\`: decreases count by 1
- \`addBy(amount)\`: adds the given amount

\`\`\`js
counterSlice.actions.addBy(5).payload // → 5
counterSlice.reducer(3, addBy(7))     // → 10
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-toolkit',
    method: 'createSlice',
    initialCode: `// ReduxToolkit is available as a global object.
const { createSlice } = ReduxToolkit

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    // Add increment, decrement, and addBy reducers here
  },
})
const { increment, decrement, addBy } = counterSlice.actions`,
    solution: `// ReduxToolkit is available as a global object.
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
const { increment, decrement, addBy } = counterSlice.actions`,
    tests: [
      {
        description: 'increment action type is counter/increment',
        assertion:
          "expect(counterSlice.actions.increment().type).toBe('counter/increment')",
      },
      {
        description: 'decrement action type is counter/decrement',
        assertion:
          "expect(counterSlice.actions.decrement().type).toBe('counter/decrement')",
      },
      {
        description: 'addBy action carries payload',
        assertion: 'expect(counterSlice.actions.addBy(5).payload).toBe(5)',
      },
      {
        description: 'increment updates state',
        assertion:
          'expect(counterSlice.reducer(0, counterSlice.actions.increment())).toBe(1)',
      },
      {
        description: 'addBy adds to state',
        assertion:
          'expect(counterSlice.reducer(3, counterSlice.actions.addBy(7))).toBe(10)',
      },
    ],
    hints: [
      'Reducers that return a new value instead of mutating work fine too: `state => state + 1`.',
      'The first argument to the payload creator is automatically set as `action.payload`.',
      'Destructure `counterSlice.actions` to get named action creators.',
    ],
    tags: ['redux-toolkit', 'createSlice', 'actions', 'payload', 'beginner'],
    usageExample: {
      code: `const { createSlice } = ReduxToolkit
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    addBy: (state, action) => state + action.payload,
  },
})
counterSlice.actions.addBy(5) // → { type: 'counter/addBy', payload: 5 }`,
      explanation: {
        en: 'Each reducer in createSlice becomes an action creator. The argument you pass becomes action.payload.',
        es: 'Cada reducer en createSlice se convierte en un creador de acciones. El argumento que pasas se convierte en action.payload.',
      },
    },
  },

  {
    slug: 'rtk-immer-mutations',
    title: 'Immer Mutations in Reducers',
    description: `## Immer Mutations in Reducers

\`createSlice\` uses **Immer** under the hood, so you can write "mutating" code that is actually applied immutably. You can push, splice, or assign properties directly.

**Challenge:** Create a todos slice where:
- \`addTodo\` pushes a todo to the array
- \`removeTodo\` removes a todo by id

\`\`\`js
todosSlice.reducer([], addTodo({ id: 1, text: 'buy milk' }))
// → [{ id: 1, text: 'buy milk' }]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-toolkit',
    method: 'createSlice',
    initialCode: `// ReduxToolkit is available as a global object.
const { createSlice } = ReduxToolkit

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    // addTodo: push action.payload to state
    // removeTodo: filter out the todo whose id matches action.payload
  },
})`,
    solution: `// ReduxToolkit is available as a global object.
const { createSlice } = ReduxToolkit

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) { state.push(action.payload) },
    removeTodo(state, action) { return state.filter(t => t.id !== action.payload) },
  },
})`,
    tests: [
      {
        description: 'addTodo adds one item',
        assertion:
          "var s1 = todosSlice.reducer([], todosSlice.actions.addTodo({ id: 1, text: 'buy milk' })); expect(s1).toHaveLength(1)",
      },
      {
        description: 'addTodo stores the correct text',
        assertion:
          "var s2 = todosSlice.reducer([], todosSlice.actions.addTodo({ id: 1, text: 'buy milk' })); expect(s2[0].text).toBe('buy milk')",
      },
      {
        description: 'removeTodo removes the correct item',
        assertion:
          "var s3 = todosSlice.reducer([{id:1,text:'x'},{id:2,text:'y'}], todosSlice.actions.removeTodo(1)); expect(s3).toHaveLength(1)",
      },
      {
        description: 'removeTodo leaves empty array when last item removed',
        assertion:
          "var s4 = todosSlice.reducer([{id:1,text:'x'}], todosSlice.actions.removeTodo(1)); expect(s4).toHaveLength(0)",
      },
    ],
    hints: [
      'Use `state.push(action.payload)` to add — Immer makes this safe.',
      'For removeTodo, returning a new array with `filter` also works alongside Immer.',
      'The initial state `[]` is typed as an array, so push and filter are available.',
    ],
    tags: ['redux-toolkit', 'createSlice', 'immer', 'mutations', 'beginner'],
    usageExample: {
      code: `const { createSlice } = ReduxToolkit
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) { state.push(action.payload) },
  },
})`,
      explanation: {
        en: 'Immer lets you mutate the draft state directly — createSlice handles the immutable update behind the scenes.',
        es: 'Immer te permite mutar el estado borrador directamente; createSlice maneja la actualización inmutable entre bastidores.',
      },
    },
  },

  {
    slug: 'rtk-configure-store-basic',
    title: 'Configure Store (Basic)',
    description: `## Configure Store

\`configureStore\` creates a Redux store with sensible defaults (Redux DevTools, thunk middleware). Pass a \`reducer\` option with either a single reducer or an object of slice reducers.

**Challenge:** Create a counter slice and a store using it as the sole reducer.

\`\`\`js
store.getState()   // → 0
store.dispatch(counterSlice.actions.inc())
store.getState()   // → 1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-toolkit',
    method: 'configureStore',
    initialCode: `// ReduxToolkit is available as a global object.
const { configureStore, createSlice } = ReduxToolkit

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: { inc: state => state + 1 },
})

// Create the store with counterSlice.reducer as the sole reducer
const store = configureStore({ reducer: /* your reducer here */ })`,
    solution: `// ReduxToolkit is available as a global object.
const { configureStore, createSlice } = ReduxToolkit

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: { inc: state => state + 1 },
})

const store = configureStore({ reducer: counterSlice.reducer })`,
    tests: [
      {
        description: 'initial state is 0',
        assertion: 'expect(store.getState()).toBe(0)',
      },
      {
        description: 'dispatching inc increments to 1',
        assertion:
          'store.dispatch(counterSlice.actions.inc()); expect(store.getState()).toBe(1)',
      },
      {
        description: 'dispatching inc again increments to 2',
        assertion:
          'store.dispatch(counterSlice.actions.inc()); expect(store.getState()).toBe(2)',
      },
    ],
    hints: [
      'Pass `reducer: counterSlice.reducer` (the function itself, not `counterSlice`).',
      '`store.dispatch(action)` sends an action to the store.',
      '`store.getState()` retrieves the current state.',
    ],
    tags: ['redux-toolkit', 'configureStore', 'store', 'beginner'],
    usageExample: {
      code: `const { configureStore, createSlice } = ReduxToolkit
const slice = createSlice({ name: 'n', initialState: 0, reducers: { inc: s => s + 1 } })
const store = configureStore({ reducer: slice.reducer })
store.dispatch(slice.actions.inc())
store.getState() // → 1`,
      explanation: {
        en: 'configureStore wraps the Redux createStore with defaults — pass your slice reducer directly.',
        es: 'configureStore envuelve createStore de Redux con valores predeterminados; pasa tu reducer de slice directamente.',
      },
    },
  },

  {
    slug: 'rtk-configure-store-multi-slice',
    title: 'Configure Store with Multiple Slices',
    description: `## Configure Store with Multiple Slices

Pass an **object** of slice reducers to \`configureStore\` to build a combined state tree. Each key becomes a namespace in the state.

**Challenge:** Create a \`counter\` slice and a \`name\` slice, then combine them:

\`\`\`js
store.getState() // → { counter: 0, name: '' }
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'configureStore',
    initialCode: `// ReduxToolkit is available as a global object.
const { configureStore, createSlice } = ReduxToolkit

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: { inc: state => state + 1 },
})

const nameSlice = createSlice({
  name: 'name',
  initialState: '',
  reducers: { set: (state, action) => action.payload },
})

// Combine both reducers in one store
const store = configureStore({
  reducer: { /* counter: ..., name: ... */ },
})`,
    solution: `// ReduxToolkit is available as a global object.
const { configureStore, createSlice } = ReduxToolkit

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: { inc: state => state + 1 },
})

const nameSlice = createSlice({
  name: 'name',
  initialState: '',
  reducers: { set: (state, action) => action.payload },
})

const store = configureStore({
  reducer: { counter: counterSlice.reducer, name: nameSlice.reducer },
})`,
    tests: [
      {
        description: 'initial counter state is 0',
        assertion: "expect(store.getState().counter).toBe(0)",
      },
      {
        description: "initial name state is ''",
        assertion: "expect(store.getState().name).toBe('')",
      },
      {
        description: 'dispatching inc updates counter',
        assertion:
          'store.dispatch(counterSlice.actions.inc()); expect(store.getState().counter).toBe(1)',
      },
      {
        description: 'dispatching set updates name',
        assertion:
          "store.dispatch(nameSlice.actions.set('Alice')); expect(store.getState().name).toBe('Alice')",
      },
    ],
    hints: [
      'Pass `reducer: { counter: counterSlice.reducer, name: nameSlice.reducer }` to nest them.',
      'Each slice only manages its own portion of state.',
      'The state shape mirrors the keys you provide in the reducer object.',
    ],
    tags: ['redux-toolkit', 'configureStore', 'combineReducers', 'intermediate'],
    usageExample: {
      code: `const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    name: nameSlice.reducer,
  },
})
store.getState() // → { counter: 0, name: '' }`,
      explanation: {
        en: 'Passing an object of reducers to configureStore automatically combines them — similar to combineReducers.',
        es: 'Pasar un objeto de reducers a configureStore los combina automáticamente, similar a combineReducers.',
      },
    },
  },
]
