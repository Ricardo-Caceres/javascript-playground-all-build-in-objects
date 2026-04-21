import type { Exercise } from '@/shared/types/exercises'

export const reduxToolkitActionsReducersExercises: Exercise[] = [
  {
    slug: 'rtk-create-action',
    title: 'createAction',
    description: `## createAction

\`createAction(type)\` returns an action creator function. Calling it with no arguments produces \`{ type }\`. Passing an argument sets \`{ type, payload: arg }\`.

**Challenge:** Create \`increment\` and \`addBy\` action creators.

\`\`\`js
increment()        // → { type: 'counter/increment' }
addBy(5)           // → { type: 'counter/addBy', payload: 5 }
increment.toString() // → 'counter/increment'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-toolkit',
    method: 'createAction',
    initialCode: `// ReduxToolkit is available as a global object.
const { createAction } = ReduxToolkit

// Create action creators for 'counter/increment' and 'counter/addBy'
const increment = createAction(/* type string */)
const addBy = createAction(/* type string */)`,
    solution: `// ReduxToolkit is available as a global object.
const { createAction } = ReduxToolkit

const increment = createAction('counter/increment')
const addBy = createAction('counter/addBy')`,
    tests: [
      {
        description: 'increment().type is counter/increment',
        assertion: "expect(increment().type).toBe('counter/increment')",
      },
      {
        description: 'addBy(5).payload is 5',
        assertion: 'expect(addBy(5).payload).toBe(5)',
      },
      {
        description: 'addBy(5).type is counter/addBy',
        assertion: "expect(addBy(5).type).toBe('counter/addBy')",
      },
      {
        description: 'increment.toString() returns the type string',
        assertion: "expect(increment.toString()).toBe('counter/increment')",
      },
    ],
    hints: [
      '`createAction("counter/increment")` returns a function that creates `{ type: "counter/increment" }`.',
      'The action creator\'s `.toString()` method returns the type string — useful for switch statements.',
      'The argument passed to the action creator becomes `action.payload` automatically.',
    ],
    tags: ['redux-toolkit', 'createAction', 'actions', 'beginner'],
    usageExample: {
      code: `const { createAction } = ReduxToolkit
const increment = createAction('counter/increment')
increment()       // → { type: 'counter/increment' }
increment.toString() // → 'counter/increment'`,
      explanation: {
        en: 'createAction returns a typed action creator — the passed argument automatically becomes the payload.',
        es: 'createAction devuelve un creador de acciones tipado; el argumento pasado se convierte automáticamente en el payload.',
      },
    },
  },

  {
    slug: 'rtk-create-reducer',
    title: 'createReducer with Builder',
    description: `## createReducer with Builder

\`createReducer(initialState, builder => ...)\` defines a reducer using a builder callback. Call \`builder.addCase(actionCreator, handler)\` to handle specific actions.

**Challenge:** Use \`createReducer\` with the builder API to handle \`increment\`, \`decrement\`, and \`addBy\`.

\`\`\`js
counterReducer(0, increment())   // → 1
counterReducer(5, decrement())   // → 4
counterReducer(0, addBy(10))     // → 10
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-toolkit',
    method: 'createReducer',
    initialCode: `// ReduxToolkit is available as a global object.
const { createReducer, createAction } = ReduxToolkit

const increment = createAction('increment')
const decrement = createAction('decrement')
const addBy = createAction('addBy')

const counterReducer = createReducer(0, builder => {
  // Add cases for increment, decrement, and addBy
})`,
    solution: `// ReduxToolkit is available as a global object.
const { createReducer, createAction } = ReduxToolkit

const increment = createAction('increment')
const decrement = createAction('decrement')
const addBy = createAction('addBy')

const counterReducer = createReducer(0, builder => {
  builder
    .addCase(increment, state => state + 1)
    .addCase(decrement, state => state - 1)
    .addCase(addBy, (state, action) => state + action.payload)
})`,
    tests: [
      {
        description: 'increment adds 1',
        assertion: 'expect(counterReducer(0, increment())).toBe(1)',
      },
      {
        description: 'decrement subtracts 1',
        assertion: 'expect(counterReducer(5, decrement())).toBe(4)',
      },
      {
        description: 'addBy adds payload',
        assertion: 'expect(counterReducer(0, addBy(10))).toBe(10)',
      },
      {
        description: 'unknown action returns current state',
        assertion:
          "expect(counterReducer(3, { type: 'unknown' })).toBe(3)",
      },
    ],
    hints: [
      'Chain `.addCase()` calls on the builder object.',
      'The handler receives `(state, action)` — return a new value or mutate with Immer.',
      'Unhandled actions automatically return the current state.',
    ],
    tags: ['redux-toolkit', 'createReducer', 'builder', 'intermediate'],
    usageExample: {
      code: `const { createReducer, createAction } = ReduxToolkit
const inc = createAction('inc')
const reducer = createReducer(0, builder => {
  builder.addCase(inc, state => state + 1)
})
reducer(0, inc()) // → 1`,
      explanation: {
        en: 'createReducer with the builder API provides full type safety and a clean pattern for handling multiple actions.',
        es: 'createReducer con la API builder proporciona seguridad de tipos completa y un patrón limpio para manejar múltiples acciones.',
      },
    },
  },
]
