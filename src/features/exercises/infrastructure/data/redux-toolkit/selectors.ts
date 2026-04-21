import type { Exercise } from '@/shared/types/exercises'

export const reduxToolkitSelectorsExercises: Exercise[] = [
  {
    slug: 'rtk-typed-selector',
    title: 'State Selectors',
    description: `## State Selectors

Selectors are plain functions that extract data from Redux state. They keep your component code free from knowledge of the state shape.

**Challenge:** Create a store with a user slice, then write \`selectName\` and \`selectAge\` selectors.

\`\`\`js
selectName(store.getState()) // → 'Alice'
selectAge(store.getState())  // → 30
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-toolkit',
    method: 'createSlice',
    initialCode: `// ReduxToolkit is available as a global object.
const { configureStore, createSlice } = ReduxToolkit

const userSlice = createSlice({
  name: 'user',
  initialState: { name: 'Alice', age: 30 },
  reducers: { setAge: (state, action) => { state.age = action.payload } },
})

const store = configureStore({ reducer: { user: userSlice.reducer } })

// Write selector functions that access state.user.name and state.user.age
function selectName(state) { /* return state.user.name */ }
function selectAge(state) { /* return state.user.age */ }`,
    solution: `// ReduxToolkit is available as a global object.
const { configureStore, createSlice } = ReduxToolkit

const userSlice = createSlice({
  name: 'user',
  initialState: { name: 'Alice', age: 30 },
  reducers: { setAge: (state, action) => { state.age = action.payload } },
})

const store = configureStore({ reducer: { user: userSlice.reducer } })

function selectName(state) { return state.user.name }
function selectAge(state) { return state.user.age }`,
    tests: [
      {
        description: 'selectName returns initial name',
        assertion: "expect(selectName(store.getState())).toBe('Alice')",
      },
      {
        description: 'selectAge returns initial age',
        assertion: 'expect(selectAge(store.getState())).toBe(30)',
      },
      {
        description: 'selectAge reflects dispatched update',
        assertion:
          'store.dispatch(userSlice.actions.setAge(31)); expect(selectAge(store.getState())).toBe(31)',
      },
    ],
    hints: [
      'A selector is just a function: `state => state.user.name`.',
      'Selectors decouple components from the exact shape of Redux state.',
      'Call the selector with `store.getState()` to get the current value.',
    ],
    tags: ['redux-toolkit', 'selectors', 'state', 'beginner'],
    usageExample: {
      code: `function selectName(state) { return state.user.name }
selectName(store.getState()) // → 'Alice'`,
      explanation: {
        en: 'Selectors are plain functions that receive state and return a slice of it — keeping component logic decoupled from store shape.',
        es: 'Los selectores son funciones simples que reciben el estado y devuelven una parte de él, manteniendo la lógica del componente desacoplada de la forma del store.',
      },
    },
  },

  {
    slug: 'rtk-create-selector',
    title: 'createSelector (Memoized)',
    description: `## createSelector

\`createSelector\` from RTK (re-exported from Reselect) creates memoized selectors. If the inputs haven't changed, it returns the cached result instead of recomputing.

**Challenge:** Create a \`selectCount\` selector using \`createSelector\` that computes \`items.length\` from the cart slice.

\`\`\`js
selectCount(store.getState()) // → 0
// after addItem dispatch:
selectCount(store.getState()) // → 1
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'createSelector',
    initialCode: `// ReduxToolkit is available as a global object.
const { createSelector, configureStore, createSlice } = ReduxToolkit

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: { addItem: (state, action) => { state.items.push(action.payload) } },
})

const store = configureStore({ reducer: { cart: cartSlice.reducer } })

const selectItems = state => state.cart.items
// Use createSelector to build a memoized selectCount from selectItems
const selectCount = createSelector(selectItems, items => /* items.length */)`,
    solution: `// ReduxToolkit is available as a global object.
const { createSelector, configureStore, createSlice } = ReduxToolkit

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: { addItem: (state, action) => { state.items.push(action.payload) } },
})

const store = configureStore({ reducer: { cart: cartSlice.reducer } })

const selectItems = state => state.cart.items
const selectCount = createSelector(selectItems, items => items.length)`,
    tests: [
      {
        description: 'selectCount is 0 initially',
        assertion: 'expect(selectCount(store.getState())).toBe(0)',
      },
      {
        description: 'selectCount updates after addItem',
        assertion:
          'store.dispatch(cartSlice.actions.addItem({ id: 1 })); expect(selectCount(store.getState())).toBe(1)',
      },
      {
        description: 'selectCount updates after second addItem',
        assertion:
          'store.dispatch(cartSlice.actions.addItem({ id: 2 })); expect(selectCount(store.getState())).toBe(2)',
      },
    ],
    hints: [
      '`createSelector(inputSelector, resultFn)` memoizes based on the input selector\'s output.',
      'The result function receives the output of each input selector as its arguments.',
      'When the input (items array reference) doesn\'t change, selectCount returns the cached count.',
    ],
    tags: ['redux-toolkit', 'createSelector', 'memoization', 'reselect', 'intermediate'],
    usageExample: {
      code: `const { createSelector } = ReduxToolkit
const selectItems = state => state.cart.items
const selectCount = createSelector(selectItems, items => items.length)
selectCount(store.getState()) // → 0`,
      explanation: {
        en: 'createSelector memoizes derived state — the result function only re-runs when its input selectors return different values.',
        es: 'createSelector memoriza el estado derivado; la función de resultado solo se vuelve a ejecutar cuando sus selectores de entrada devuelven valores diferentes.',
      },
    },
  },

  {
    slug: 'rtk-derived-selector',
    title: 'Derived Selector with Multiple Inputs',
    description: `## Derived Selector with Multiple Inputs

\`createSelector\` can take **multiple** input selectors. The result function receives their outputs as separate arguments, letting you derive data from multiple slices of state.

**Challenge:** Create \`selectFiltered\` that filters items by category.

\`\`\`js
selectFiltered({ items: [{id:1,category:'a'},{id:2,category:'b'}], filter:'a' })
// → [{ id: 1, category: 'a' }]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'createSelector',
    initialCode: `// ReduxToolkit is available as a global object.
const { createSelector } = ReduxToolkit

const selectItems = state => state.items
const selectFilter = state => state.filter

// Use createSelector with both input selectors
const selectFiltered = createSelector(
  selectItems, selectFilter,
  (items, filter) => /* filter items by category */
)`,
    solution: `// ReduxToolkit is available as a global object.
const { createSelector } = ReduxToolkit

const selectItems = state => state.items
const selectFilter = state => state.filter

const selectFiltered = createSelector(
  selectItems, selectFilter,
  (items, filter) => items.filter(item => item.category === filter)
)`,
    tests: [
      {
        description: 'filters to 1 item matching category a',
        assertion:
          "var state = { items: [{ id: 1, category: 'a' }, { id: 2, category: 'b' }], filter: 'a' }; var result = selectFiltered(state); expect(result).toHaveLength(1)",
      },
      {
        description: 'filtered item has correct id',
        assertion:
          "var state2 = { items: [{ id: 1, category: 'a' }, { id: 2, category: 'b' }], filter: 'a' }; var result2 = selectFiltered(state2); expect(result2[0].id).toBe(1)",
      },
      {
        description: 'filters to 1 item matching category b',
        assertion:
          "var state3 = { items: [{ id: 1, category: 'a' }, { id: 2, category: 'b' }], filter: 'b' }; var result3 = selectFiltered(state3); expect(result3).toHaveLength(1)",
      },
      {
        description: 'returns empty array when no match',
        assertion:
          "var state4 = { items: [{ id: 1, category: 'a' }, { id: 2, category: 'b' }], filter: 'c' }; var result4 = selectFiltered(state4); expect(result4).toHaveLength(0)",
      },
    ],
    hints: [
      'Pass multiple input selectors before the result function: `createSelector(sel1, sel2, (a, b) => ...)`.',
      'The result function is only re-run when any input selector returns a new reference.',
      'The filter function `items.filter(item => item.category === filter)` returns a new array.',
    ],
    tags: ['redux-toolkit', 'createSelector', 'derived-state', 'reselect', 'intermediate'],
    usageExample: {
      code: `const { createSelector } = ReduxToolkit
const selectFiltered = createSelector(
  state => state.items,
  state => state.filter,
  (items, filter) => items.filter(i => i.category === filter)
)`,
      explanation: {
        en: 'Multiple input selectors let you combine data from different parts of state in a single memoized computation.',
        es: 'Múltiples selectores de entrada te permiten combinar datos de diferentes partes del estado en un único cálculo memorizado.',
      },
    },
  },
]
