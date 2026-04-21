import type { Exercise } from '@/shared/types/exercises'

export const reduxToolkitThunksExercises: Exercise[] = [
  {
    slug: 'rtk-async-thunk-basics',
    title: 'createAsyncThunk Basics',
    description: `## createAsyncThunk Basics

\`createAsyncThunk(type, payloadCreator)\` creates an async action creator that automatically dispatches \`pending\`, \`fulfilled\`, and \`rejected\` actions around the async operation.

**Challenge:** Create a \`fetchUser\` thunk and handle its \`fulfilled\` case in a slice.

\`\`\`js
fetchUser.fulfilled.type // → 'user/fetch/fulfilled'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'createAsyncThunk',
    initialCode: `// ReduxToolkit is available as a global object.
const { createAsyncThunk, createSlice } = ReduxToolkit

const fetchUser = createAsyncThunk('user/fetch', async (id) => ({ id, name: 'Alice' }))

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, status: 'idle' },
  reducers: {},
  extraReducers: builder => {
    // Handle fetchUser.fulfilled: set data to payload and status to 'succeeded'
  },
})`,
    solution: `// ReduxToolkit is available as a global object.
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
  },
})`,
    tests: [
      {
        description: 'pending action type is user/fetch/pending',
        assertion:
          "var pendingAction = fetchUser.pending('reqId', 1); expect(pendingAction.type).toBe('user/fetch/pending')",
      },
      {
        description: 'fulfilled action sets status to succeeded',
        assertion:
          "var fulfilledAction = fetchUser.fulfilled({ id: 1, name: 'Alice' }, 'reqId', 1); var s = userSlice.reducer(undefined, fulfilledAction); expect(s.status).toBe('succeeded')",
      },
      {
        description: 'fulfilled action stores data.name',
        assertion:
          "var fulfilledAction2 = fetchUser.fulfilled({ id: 1, name: 'Alice' }, 'reqId', 1); var s2 = userSlice.reducer(undefined, fulfilledAction2); expect(s2.data.name).toBe('Alice')",
      },
      {
        description: 'fulfilled type constant is user/fetch/fulfilled',
        assertion:
          "expect(fetchUser.fulfilled.type).toBe('user/fetch/fulfilled')",
      },
    ],
    hints: [
      '`createAsyncThunk` generates `.pending`, `.fulfilled`, and `.rejected` action creators.',
      'Use `extraReducers` (not `reducers`) to handle lifecycle actions from another thunk.',
      'You can construct fulfilled/pending/rejected actions synchronously for testing: `fetchUser.fulfilled(payload, reqId, arg)`.',
    ],
    tags: ['redux-toolkit', 'createAsyncThunk', 'thunk', 'async', 'intermediate'],
    usageExample: {
      code: `const { createAsyncThunk } = ReduxToolkit
const fetchUser = createAsyncThunk('user/fetch', async (id) => {
  const res = await fetch('/api/users/' + id)
  return res.json()
})
fetchUser.fulfilled.type // → 'user/fetch/fulfilled'`,
      explanation: {
        en: 'createAsyncThunk wraps an async function and automatically dispatches pending/fulfilled/rejected lifecycle actions.',
        es: 'createAsyncThunk envuelve una función asíncrona y despacha automáticamente acciones de ciclo de vida pending/fulfilled/rejected.',
      },
    },
  },

  {
    slug: 'rtk-thunk-pending-state',
    title: 'Handling Pending State',
    description: `## Handling Pending State

The \`pending\` action fires immediately when a thunk is dispatched. Use it to show a loading indicator.

**Challenge:** Add a \`loading\` state that becomes \`true\` on pending and \`false\` on fulfilled.

\`\`\`js
dataSlice.reducer(undefined, fetchData.pending('req'))
// → { loading: true, value: null }
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'createAsyncThunk',
    initialCode: `// ReduxToolkit is available as a global object.
const { createAsyncThunk, createSlice } = ReduxToolkit

const fetchData = createAsyncThunk('data/fetch', async () => ({ value: 42 }))

const dataSlice = createSlice({
  name: 'data',
  initialState: { loading: false, value: null },
  reducers: {},
  extraReducers: builder => {
    // Handle pending: set loading to true
    // Handle fulfilled: set loading to false, set value from payload
  },
})`,
    solution: `// ReduxToolkit is available as a global object.
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
  },
})`,
    tests: [
      {
        description: 'pending sets loading to true',
        assertion:
          "var s1 = dataSlice.reducer(undefined, fetchData.pending('req')); expect(s1.loading).toBeTruthy()",
      },
      {
        description: 'fulfilled sets loading to false',
        assertion:
          "var s2 = dataSlice.reducer({ loading: true, value: null }, fetchData.fulfilled({ value: 42 }, 'req')); expect(s2.loading).toBeFalsy()",
      },
      {
        description: 'fulfilled stores value from payload',
        assertion:
          "var s3 = dataSlice.reducer({ loading: true, value: null }, fetchData.fulfilled({ value: 42 }, 'req')); expect(s3.value).toBe(42)",
      },
    ],
    hints: [
      'Use `fetchData.pending` as the action creator in `builder.addCase`.',
      'The pending handler has no payload — just set `state.loading = true`.',
      'The fulfilled payload is `action.payload` — here it\'s `{ value: 42 }`.',
    ],
    tags: ['redux-toolkit', 'createAsyncThunk', 'pending', 'loading', 'intermediate'],
    usageExample: {
      code: `extraReducers: builder => {
  builder
    .addCase(fetchData.pending, state => { state.loading = true })
    .addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
}`,
      explanation: {
        en: 'The pending action is dispatched synchronously before the async work starts — ideal for showing a loading spinner.',
        es: 'La acción pending se despacha síncronamente antes de que comience el trabajo asíncrono, ideal para mostrar un spinner de carga.',
      },
    },
  },

  {
    slug: 'rtk-thunk-fulfilled-state',
    title: 'Handling Fulfilled State',
    description: `## Handling Fulfilled State

The \`fulfilled\` action carries the resolved value as \`action.payload\`. Use it to store fetched data in your slice.

**Challenge:** Create a \`loadPosts\` thunk and update \`items\` and \`loaded\` state on fulfillment.

\`\`\`js
postsSlice.reducer(undefined, loadPosts.fulfilled(['post1','post2'], 'req'))
// → { items: ['post1', 'post2'], loaded: true }
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'createAsyncThunk',
    initialCode: `// ReduxToolkit is available as a global object.
const { createAsyncThunk, createSlice } = ReduxToolkit

const loadPosts = createAsyncThunk('posts/load', async () => ['post1', 'post2'])

const postsSlice = createSlice({
  name: 'posts',
  initialState: { items: [], loaded: false },
  reducers: {},
  extraReducers: builder => {
    // Handle loadPosts.fulfilled: set items to payload and loaded to true
  },
})`,
    solution: `// ReduxToolkit is available as a global object.
const { createAsyncThunk, createSlice } = ReduxToolkit

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
  },
})`,
    tests: [
      {
        description: 'fulfilled sets loaded to true',
        assertion:
          "var s = postsSlice.reducer(undefined, loadPosts.fulfilled(['post1','post2'], 'req')); expect(s.loaded).toBeTruthy()",
      },
      {
        description: 'fulfilled stores 2 items',
        assertion:
          "var s2 = postsSlice.reducer(undefined, loadPosts.fulfilled(['post1','post2'], 'req')); expect(s2.items).toHaveLength(2)",
      },
      {
        description: 'items array contains post1',
        assertion:
          "var s3 = postsSlice.reducer(undefined, loadPosts.fulfilled(['post1','post2'], 'req')); expect(s3.items).toContain('post1')",
      },
    ],
    hints: [
      '`action.payload` in a fulfilled handler is the value returned by your async function.',
      'With Immer you can write `state.items = action.payload` directly.',
      'Construct the fulfilled action manually for tests: `loadPosts.fulfilled(payload, requestId)`.',
    ],
    tags: ['redux-toolkit', 'createAsyncThunk', 'fulfilled', 'intermediate'],
    usageExample: {
      code: `builder.addCase(loadPosts.fulfilled, (state, action) => {
  state.items = action.payload
  state.loaded = true
})`,
      explanation: {
        en: 'The fulfilled handler receives the resolved value as action.payload — assign it directly to state with Immer.',
        es: 'El manejador fulfilled recibe el valor resuelto como action.payload; asígnalo directamente al estado con Immer.',
      },
    },
  },

  {
    slug: 'rtk-thunk-rejected-state',
    title: 'Handling Rejected State',
    description: `## Handling Rejected State

The \`rejected\` action fires when the thunk throws an error. Its \`action.error.message\` carries the error message string.

**Challenge:** Handle the rejected case to store the error message in \`state.error\`.

\`\`\`js
userSlice.reducer(undefined, fetchUser.rejected(new Error('not found'), 'req', 1))
// → { error: 'not found', data: null }
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'createAsyncThunk',
    initialCode: `// ReduxToolkit is available as a global object.
const { createAsyncThunk, createSlice } = ReduxToolkit

const fetchUser = createAsyncThunk('user/fetch', async (id) => { throw new Error('not found') })

const userSlice = createSlice({
  name: 'user',
  initialState: { error: null, data: null },
  reducers: {},
  extraReducers: builder => {
    // Handle fetchUser.rejected: store action.error.message in state.error
  },
})`,
    solution: `// ReduxToolkit is available as a global object.
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
  },
})`,
    tests: [
      {
        description: 'rejected action sets error message',
        assertion:
          "var rejectedAction = fetchUser.rejected(new Error('not found'), 'req', 1); var s = userSlice.reducer(undefined, rejectedAction); expect(s.error).toBe('not found')",
      },
      {
        description: 'data remains null after rejection',
        assertion:
          "var rejectedAction2 = fetchUser.rejected(new Error('not found'), 'req', 1); var s2 = userSlice.reducer(undefined, rejectedAction2); expect(s2.data).toBeNull()",
      },
      {
        description: 'rejected type constant is user/fetch/rejected',
        assertion:
          "expect(fetchUser.rejected.type).toBe('user/fetch/rejected')",
      },
    ],
    hints: [
      'Use `fetchUser.rejected` in `builder.addCase` to handle errors.',
      '`action.error.message` contains the error message string from the thrown Error.',
      'Construct a rejected action for tests: `fetchUser.rejected(new Error("msg"), requestId, arg)`.',
    ],
    tags: ['redux-toolkit', 'createAsyncThunk', 'rejected', 'error-handling', 'intermediate'],
    usageExample: {
      code: `builder.addCase(fetchUser.rejected, (state, action) => {
  state.error = action.error.message
  state.status = 'failed'
})`,
      explanation: {
        en: 'The rejected handler fires when the async function throws — use action.error.message to display the error to users.',
        es: 'El manejador rejected se activa cuando la función asíncrona lanza un error; usa action.error.message para mostrar el error a los usuarios.',
      },
    },
  },

  {
    slug: 'rtk-extra-reducers-builder',
    title: 'Full extraReducers Builder',
    description: `## Full extraReducers Builder

Handle all three thunk lifecycle actions in one slice. This covers \`pending\` (loading), \`fulfilled\` (success), and \`rejected\` (failure).

**Challenge:** Handle all three lifecycle actions for \`loadItems\`:
- \`pending\` → \`status = 'loading'\`
- \`fulfilled\` → \`items = payload, status = 'succeeded'\`
- \`rejected\` → \`status = 'failed', error = message\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'createAsyncThunk',
    initialCode: `// ReduxToolkit is available as a global object.
const { createAsyncThunk, createSlice } = ReduxToolkit

const loadItems = createAsyncThunk('items/load', async () => [1, 2, 3])

const itemsSlice = createSlice({
  name: 'items',
  initialState: { items: [], status: 'idle', error: null },
  reducers: { reset: () => ({ items: [], status: 'idle', error: null }) },
  extraReducers: builder => {
    // Handle pending, fulfilled, and rejected for loadItems
  },
})`,
    solution: `// ReduxToolkit is available as a global object.
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
  },
})`,
    tests: [
      {
        description: 'pending sets status to loading',
        assertion:
          "var s1 = itemsSlice.reducer(undefined, loadItems.pending('r')); expect(s1.status).toBe('loading')",
      },
      {
        description: 'fulfilled sets status to succeeded',
        assertion:
          "var s2 = itemsSlice.reducer(undefined, loadItems.fulfilled([1,2,3], 'r')); expect(s2.status).toBe('succeeded')",
      },
      {
        description: 'fulfilled stores 3 items',
        assertion:
          "var s3 = itemsSlice.reducer(undefined, loadItems.fulfilled([1,2,3], 'r')); expect(s3.items).toHaveLength(3)",
      },
      {
        description: 'rejected sets status to failed',
        assertion:
          "var s4 = itemsSlice.reducer(undefined, loadItems.rejected(new Error('fail'), 'r')); expect(s4.status).toBe('failed')",
      },
    ],
    hints: [
      'Chain `.addCase()` for all three lifecycle action creators.',
      'For rejected: `action.error.message` holds the error string.',
      'This pattern (idle → loading → succeeded/failed) is the standard async state machine.',
    ],
    tags: ['redux-toolkit', 'createAsyncThunk', 'extraReducers', 'lifecycle', 'intermediate'],
    usageExample: {
      code: `builder
  .addCase(loadItems.pending, state => { state.status = 'loading' })
  .addCase(loadItems.fulfilled, (state, action) => {
    state.items = action.payload
    state.status = 'succeeded'
  })
  .addCase(loadItems.rejected, (state, action) => {
    state.status = 'failed'
    state.error = action.error.message
  })`,
      explanation: {
        en: 'Handling all three lifecycle actions gives you a complete async state machine: idle → loading → succeeded or failed.',
        es: 'Manejar las tres acciones del ciclo de vida te da una máquina de estado asíncrono completa: idle → loading → succeeded o failed.',
      },
    },
  },
]
