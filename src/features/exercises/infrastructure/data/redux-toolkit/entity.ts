import type { Exercise } from '@/shared/types/exercises'

export const reduxToolkitEntityExercises: Exercise[] = [
  {
    slug: 'rtk-create-entity-adapter',
    title: 'createEntityAdapter',
    description: `## createEntityAdapter

\`createEntityAdapter()\` manages normalized state with an \`ids\` array and an \`entities\` map. It provides pre-built CRUD reducers like \`addOne\`, \`removeOne\`, \`updateOne\`, etc.

**Challenge:** Create a todos slice using the adapter's \`addOne\` and \`removeOne\` reducers.

\`\`\`js
// After adding { id: 1, text: 'buy milk' }:
state.ids     // → [1]
state.entities[1].text // → 'buy milk'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'createEntityAdapter',
    initialCode: `// ReduxToolkit is available as a global object.
const { createEntityAdapter, createSlice } = ReduxToolkit

const todosAdapter = createEntityAdapter()

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState(),
  reducers: {
    // Use todosAdapter.addOne and todosAdapter.removeOne
  },
})`,
    solution: `// ReduxToolkit is available as a global object.
const { createEntityAdapter, createSlice } = ReduxToolkit

const todosAdapter = createEntityAdapter()

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo: todosAdapter.addOne,
    removeTodo: todosAdapter.removeOne,
  },
})`,
    tests: [
      {
        description: 'addTodo adds id to ids array',
        assertion:
          "var s1 = todosSlice.reducer(undefined, todosSlice.actions.addTodo({ id: 1, text: 'buy milk' })); expect(s1.ids).toContain(1)",
      },
      {
        description: 'addTodo stores entity text',
        assertion:
          "var s2 = todosSlice.reducer(undefined, todosSlice.actions.addTodo({ id: 1, text: 'buy milk' })); expect(s2.entities[1].text).toBe('buy milk')",
      },
      {
        description: 'removeTodo removes the entity',
        assertion:
          "var s3 = todosSlice.reducer(undefined, todosSlice.actions.addTodo({ id: 1, text: 'x' })); var s4 = todosSlice.reducer(s3, todosSlice.actions.removeTodo(1)); expect(s4.ids).toHaveLength(0)",
      },
    ],
    hints: [
      '`todosAdapter.getInitialState()` returns `{ ids: [], entities: {} }`.',
      'Assign adapter methods directly as reducers: `addTodo: todosAdapter.addOne`.',
      'Entities are keyed by their `id` field in the `entities` map.',
    ],
    tags: ['redux-toolkit', 'createEntityAdapter', 'normalized-state', 'intermediate'],
    usageExample: {
      code: `const { createEntityAdapter, createSlice } = ReduxToolkit
const adapter = createEntityAdapter()
const slice = createSlice({
  name: 'items',
  initialState: adapter.getInitialState(),
  reducers: { addItem: adapter.addOne },
})`,
      explanation: {
        en: 'createEntityAdapter provides pre-built CRUD reducers and normalizes entities into an ids array and entities map.',
        es: 'createEntityAdapter proporciona reducers CRUD preconstruidos y normaliza las entidades en un array de ids y un mapa de entities.',
      },
    },
  },

  {
    slug: 'rtk-entity-selectors',
    title: 'Entity Adapter Selectors',
    description: `## Entity Adapter Selectors

\`adapter.getSelectors(stateSelector)\` returns a set of selectors: \`selectAll\`, \`selectById\`, \`selectTotal\`, \`selectIds\`, and \`selectEntities\`.

**Challenge:** Create a store and use adapter selectors to query items.

\`\`\`js
selectors.selectAll(store.getState())        // → [...]
selectors.selectById(store.getState(), 1)    // → { id: 1, name: 'Widget' }
selectors.selectTotal(store.getState())      // → 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'createEntityAdapter',
    initialCode: `// ReduxToolkit is available as a global object.
const { createEntityAdapter, createSlice, configureStore } = ReduxToolkit

const adapter = createEntityAdapter()

const itemsSlice = createSlice({
  name: 'items',
  initialState: adapter.getInitialState(),
  reducers: { addItem: adapter.addOne },
})

const store = configureStore({ reducer: { items: itemsSlice.reducer } })

// Create selectors scoped to state.items
const selectors = adapter.getSelectors(state => state.items)`,
    solution: `// ReduxToolkit is available as a global object.
const { createEntityAdapter, createSlice, configureStore } = ReduxToolkit

const adapter = createEntityAdapter()

const itemsSlice = createSlice({
  name: 'items',
  initialState: adapter.getInitialState(),
  reducers: { addItem: adapter.addOne },
})

const store = configureStore({ reducer: { items: itemsSlice.reducer } })

const selectors = adapter.getSelectors(state => state.items)`,
    tests: [
      {
        description: 'selectAll returns 1 item after first add',
        assertion:
          'store.dispatch(itemsSlice.actions.addItem({ id: 1, name: "Widget" })); expect(selectors.selectAll(store.getState())).toHaveLength(1)',
      },
      {
        description: 'selectAll returns 2 items after second add',
        assertion:
          'store.dispatch(itemsSlice.actions.addItem({ id: 2, name: "Gadget" })); expect(selectors.selectAll(store.getState())).toHaveLength(2)',
      },
      {
        description: 'selectById returns item with matching id',
        assertion:
          'expect(selectors.selectById(store.getState(), 1).name).toBe("Widget")',
      },
      {
        description: 'selectTotal returns 2',
        assertion: 'expect(selectors.selectTotal(store.getState())).toBe(2)',
      },
    ],
    hints: [
      '`adapter.getSelectors(stateSelector)` scopes all selectors to the given state slice.',
      '`selectAll` returns all entities as an array in `ids` order.',
      '`selectById(state, id)` returns the entity for that id, or `undefined`.',
    ],
    tags: ['redux-toolkit', 'createEntityAdapter', 'selectors', 'normalized-state', 'intermediate'],
    usageExample: {
      code: `const selectors = adapter.getSelectors(state => state.items)
selectors.selectAll(store.getState())     // → [{ id: 1, name: 'Widget' }, ...]
selectors.selectById(store.getState(), 1) // → { id: 1, name: 'Widget' }
selectors.selectTotal(store.getState())   // → 1`,
      explanation: {
        en: 'getSelectors generates pre-built selectors scoped to the entity slice — selectAll, selectById, selectTotal, and more.',
        es: 'getSelectors genera selectores preconstruidos con alcance al slice de entidades: selectAll, selectById, selectTotal y más.',
      },
    },
  },
]
