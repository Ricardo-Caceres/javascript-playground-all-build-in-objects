import type { Exercise } from '@/shared/types/exercises'

export const reduxLegacyReducersExercises: Exercise[] = [
  {
    slug: 'redux-legacy-basic-reducer',
    title: 'Basic Reducer',
    description: `## Basic Reducer

A **reducer** is a pure function with the signature \`(state, action) => state\`. It receives the current state and an action object, and returns the next state without mutating anything.

\`\`\`js
function reducer(state, action) {
  if (action.type === 'INCREMENT') return state + 1
  return state
}
\`\`\`

**Challenge:** Implement \`reducer(state, action)\` that returns \`state + 1\` when the action type is \`'INCREMENT'\`, and returns the current state for any other action.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-legacy',
    method: 'reducer',
    initialCode: `function reducer(state, action) {
  // Return state + 1 when action.type is 'INCREMENT'
  // Otherwise return state unchanged
}`,
    solution: `function reducer(state, action) {
  if (action.type === 'INCREMENT') return state + 1
  return state
}`,
    tests: [
      { description: 'increments state from 0', assertion: "expect(reducer(0, { type: 'INCREMENT' })).toBe(1)" },
      { description: 'returns state unchanged for unknown action', assertion: "expect(reducer(5, { type: 'OTHER' })).toBe(5)" },
      { description: 'increments state from 10', assertion: "expect(reducer(10, { type: 'INCREMENT' })).toBe(11)" },
      { description: 'increments state from 3', assertion: "expect(reducer(3, { type: 'INCREMENT' })).toBe(4)" },
    ],
    hints: [
      'Use an `if` statement or a `switch` to check `action.type`.',
      'Always return a value — reducers must never return `undefined`.',
    ],
    tags: ['redux', 'reducer', 'pure-function', 'beginner'],
    usageExample: {
      code: `function reducer(state, action) {
  if (action.type === 'INCREMENT') return state + 1
  return state
}
reducer(0, { type: 'INCREMENT' }) // → 1
reducer(5, { type: 'NOOP' })      // → 5`,
      explanation: {
        en: 'A reducer takes the current state and an action, and returns the next state without mutating anything.',
        es: 'Un reducer recibe el estado actual y una acción, y devuelve el siguiente estado sin mutar nada.',
      },
    },
  },
  {
    slug: 'redux-legacy-reducer-initial-state',
    title: 'Reducer with Default State',
    description: `## Reducer with Default State

Redux calls your reducer with \`undefined\` the first time to initialise state. Use a **default parameter** to provide the initial value:

\`\`\`js
function reducer(state = 0, action) { ... }
\`\`\`

When Redux dispatches its internal \`@@INIT\` action, your reducer returns the default state.

**Challenge:** Implement \`reducer(state = 0, action)\` that uses \`0\` as the default state and handles \`'INCREMENT'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-legacy',
    method: 'reducer',
    initialCode: `function reducer(state, action) {
  // Add a default value for state (hint: state = 0)
  // Handle INCREMENT action
}`,
    solution: `function reducer(state = 0, action) {
  if (action.type === 'INCREMENT') return state + 1
  return state
}`,
    tests: [
      { description: 'uses default state of 0 on INCREMENT', assertion: "expect(reducer(undefined, { type: 'INCREMENT' })).toBe(1)" },
      { description: 'uses default state of 0 on unknown action', assertion: "expect(reducer(undefined, { type: 'OTHER' })).toBe(0)" },
      { description: 'increments provided state', assertion: "expect(reducer(5, { type: 'INCREMENT' })).toBe(6)" },
    ],
    hints: [
      'Default parameters: `function reducer(state = 0, action)` sets state to 0 when it is undefined.',
      'Redux dispatches `{ type: "@@INIT" }` on startup to get the initial state.',
    ],
    tags: ['redux', 'reducer', 'default-state', 'beginner'],
    usageExample: {
      code: `function reducer(state = 0, action) {
  if (action.type === 'INCREMENT') return state + 1
  return state
}
reducer(undefined, { type: '@@INIT' }) // → 0  (default)
reducer(undefined, { type: 'INCREMENT' }) // → 1`,
      explanation: {
        en: 'Providing a default parameter for state ensures the reducer initialises correctly when called by Redux.',
        es: 'Proporcionar un parámetro por defecto para state garantiza que el reducer se inicialice correctamente cuando Redux lo llama.',
      },
    },
  },
  {
    slug: 'redux-legacy-multiple-action-types',
    title: 'Multiple Action Types',
    description: `## Multiple Action Types

When a reducer handles several action types, a **switch statement** keeps the code clean and readable:

\`\`\`js
switch (action.type) {
  case 'INCREMENT': return state + 1
  case 'DECREMENT': return state - 1
  default: return state
}
\`\`\`

The \`default\` case is essential — it handles unknown actions (including Redux's internal \`@@INIT\`).

**Challenge:** Implement \`reducer(state = 0, action)\` that handles \`'INCREMENT'\`, \`'DECREMENT'\`, and any other action via the default case.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-legacy',
    method: 'reducer',
    initialCode: `function reducer(state = 0, action) {
  // Use a switch statement to handle INCREMENT, DECREMENT, and default
}`,
    solution: `function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}`,
    tests: [
      { description: 'increments state', assertion: "expect(reducer(0, { type: 'INCREMENT' })).toBe(1)" },
      { description: 'decrements state', assertion: "expect(reducer(5, { type: 'DECREMENT' })).toBe(4)" },
      { description: 'returns state unchanged for unknown action', assertion: "expect(reducer(3, { type: 'RESET' })).toBe(3)" },
      { description: 'returns state unchanged for empty action type', assertion: "expect(reducer(0, {})).toBe(0)" },
    ],
    hints: [
      'A switch statement is idiomatic Redux — each `case` handles one action type.',
      'Always include a `default: return state` to handle any action you haven\'t handled explicitly.',
    ],
    tags: ['redux', 'reducer', 'switch', 'beginner'],
    usageExample: {
      code: `function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}
reducer(5, { type: 'DECREMENT' }) // → 4`,
      explanation: {
        en: 'A switch statement handles multiple action types cleanly; the default case ensures the reducer always returns a valid state.',
        es: 'Un switch maneja múltiples tipos de acción limpiamente; el caso default asegura que el reducer siempre devuelva un estado válido.',
      },
    },
  },
  {
    slug: 'redux-legacy-reducer-with-payload',
    title: 'Reducer with Payload',
    description: `## Reducer with Payload

Actions can carry extra data in a **payload** property. The reducer reads \`action.payload\` to perform dynamic updates:

\`\`\`js
{ type: 'ADD', payload: 5 }
\`\`\`

This lets you dispatch one action type with different values rather than hard-coding the delta.

**Challenge:** Implement \`reducer(state = 0, action)\` that handles:
- \`'ADD'\` → returns \`state + action.payload\`
- \`'SUBTRACT'\` → returns \`state - action.payload\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-legacy',
    method: 'reducer',
    initialCode: `function reducer(state = 0, action) {
  // Handle ADD (state + action.payload) and SUBTRACT (state - action.payload)
}`,
    solution: `function reducer(state = 0, action) {
  switch (action.type) {
    case 'ADD': return state + action.payload
    case 'SUBTRACT': return state - action.payload
    default: return state
  }
}`,
    tests: [
      { description: 'adds payload to state', assertion: "expect(reducer(0, { type: 'ADD', payload: 5 })).toBe(5)" },
      { description: 'subtracts payload from state', assertion: "expect(reducer(10, { type: 'SUBTRACT', payload: 3 })).toBe(7)" },
      { description: 'ignores payload for unknown action', assertion: "expect(reducer(0, { type: 'OTHER', payload: 99 })).toBe(0)" },
    ],
    hints: [
      'Access the payload with `action.payload` inside the case body.',
      'The payload convention is widely adopted in Redux — it keeps action shapes consistent.',
    ],
    tags: ['redux', 'reducer', 'payload', 'action', 'beginner'],
    usageExample: {
      code: `function reducer(state = 0, action) {
  switch (action.type) {
    case 'ADD': return state + action.payload
    case 'SUBTRACT': return state - action.payload
    default: return state
  }
}
reducer(10, { type: 'ADD', payload: 5 })      // → 15
reducer(10, { type: 'SUBTRACT', payload: 3 }) // → 7`,
      explanation: {
        en: 'Using action.payload lets you pass dynamic values without creating a separate action type for every possible amount.',
        es: 'Usar action.payload te permite pasar valores dinámicos sin crear un tipo de acción separado para cada valor posible.',
      },
    },
  },
  {
    slug: 'redux-legacy-array-state-add',
    title: 'Array State — Adding Items',
    description: `## Array State — Adding Items

When state is an **array**, never push directly (that would mutate state). Instead, use the **spread operator** to create a new array:

\`\`\`js
case 'ADD_ITEM': return [...state, action.payload]
\`\`\`

This returns a brand-new array that includes all existing items plus the new one.

**Challenge:** Implement \`reducer(state = [], action)\` that handles \`'ADD_ITEM'\` by returning a new array with the payload appended.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-legacy',
    method: 'reducer',
    initialCode: `function reducer(state = [], action) {
  // Handle ADD_ITEM using the spread operator — never mutate state!
}`,
    solution: `function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM': return [...state, action.payload]
    default: return state
  }
}`,
    tests: [
      { description: 'adds item to empty array', assertion: "expect(reducer([], { type: 'ADD_ITEM', payload: 'a' })).toContain('a')" },
      { description: 'resulting array has correct length', assertion: "expect(reducer(['x'], { type: 'ADD_ITEM', payload: 'y' })).toHaveLength(2)" },
      { description: 'unknown action leaves array unchanged', assertion: "expect(reducer(['x'], { type: 'OTHER', payload: 'y' })).toHaveLength(1)" },
      { description: 'new item is at the correct index', assertion: "var r = reducer([], { type: 'ADD_ITEM', payload: 'b' }); expect(r[0]).toBe('b')" },
    ],
    hints: [
      '`[...state, action.payload]` creates a new array without mutating the existing one.',
      'Avoid `state.push()` — it mutates state in place, which breaks Redux\'s change detection.',
    ],
    tags: ['redux', 'reducer', 'array', 'immutability', 'spread', 'intermediate'],
    usageExample: {
      code: `function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM': return [...state, action.payload]
    default: return state
  }
}
reducer(['a'], { type: 'ADD_ITEM', payload: 'b' }) // → ['a', 'b']`,
      explanation: {
        en: 'Spread the existing array and append the new item to produce an immutable update.',
        es: 'Expande el array existente y añade el nuevo elemento para producir una actualización inmutable.',
      },
    },
  },
  {
    slug: 'redux-legacy-array-state-remove',
    title: 'Array State — Removing Items',
    description: `## Array State — Removing Items

To remove an item from an array state without mutating, use **Array.prototype.filter()**:

\`\`\`js
case 'REMOVE_ITEM': return state.filter(item => item.id !== action.payload)
\`\`\`

\`filter()\` always returns a new array containing only the items that pass the test.

**Challenge:** Implement \`reducer(state = [], action)\` that handles \`'REMOVE_ITEM'\`. The state is an array of objects with an \`id\` field; \`action.payload\` is the id to remove.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-legacy',
    method: 'reducer',
    initialCode: `function reducer(state = [], action) {
  // Handle REMOVE_ITEM using filter() — never mutate state!
}`,
    solution: `function reducer(state = [], action) {
  switch (action.type) {
    case 'REMOVE_ITEM': return state.filter(function(item) { return item.id !== action.payload })
    default: return state
  }
}`,
    tests: [
      { description: 'removes item by id', assertion: "var s1 = reducer([{id:1},{id:2}], {type:'REMOVE_ITEM',payload:1}); expect(s1).toHaveLength(1)" },
      { description: 'remaining item has correct id', assertion: "var s2 = reducer([{id:1},{id:2}], {type:'REMOVE_ITEM',payload:1}); expect(s2[0].id).toBe(2)" },
      { description: 'no-op when id not found', assertion: "expect(reducer([{id:1}], {type:'REMOVE_ITEM',payload:99})).toHaveLength(1)" },
      { description: 'empty array stays empty', assertion: "expect(reducer([], {type:'REMOVE_ITEM',payload:1})).toHaveLength(0)" },
    ],
    hints: [
      '`state.filter(item => item.id !== action.payload)` keeps all items except the one to remove.',
      '`filter()` returns a new array — it never modifies the original.',
    ],
    tags: ['redux', 'reducer', 'array', 'filter', 'immutability', 'intermediate'],
    usageExample: {
      code: `function reducer(state = [], action) {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload)
    default: return state
  }
}
reducer([{id:1},{id:2}], {type:'REMOVE_ITEM',payload:1}) // → [{id:2}]`,
      explanation: {
        en: 'filter() creates a new array excluding the item with the matching id, leaving state immutable.',
        es: 'filter() crea un nuevo array excluyendo el elemento con el id correspondiente, manteniendo el estado inmutable.',
      },
    },
  },
  {
    slug: 'redux-legacy-nested-object-state',
    title: 'Nested Object State',
    description: `## Nested Object State

Updating nested state immutably requires spreading **each level** of the object:

\`\`\`js
case 'SET_NAME':
  return { ...state, user: { ...state.user, name: action.payload } }
\`\`\`

First spread the root state to preserve other top-level keys, then spread the nested object to preserve its other keys, finally override only the changed property.

**Challenge:** Implement \`reducer\` with default state \`{ user: { name: '', age: 0 } }\` that handles \`'SET_NAME'\` and \`'SET_AGE'\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-legacy',
    method: 'reducer',
    initialCode: `function reducer(state, action) {
  // Default state: { user: { name: '', age: 0 } }
  // Handle SET_NAME (updates state.user.name)
  // Handle SET_AGE (updates state.user.age)
  // Use spread at each nesting level!
}`,
    solution: `function reducer(state = { user: { name: '', age: 0 } }, action) {
  switch (action.type) {
    case 'SET_NAME': return { ...state, user: { ...state.user, name: action.payload } }
    case 'SET_AGE': return { ...state, user: { ...state.user, age: action.payload } }
    default: return state
  }
}`,
    tests: [
      { description: 'SET_NAME updates user name', assertion: "var s = reducer(undefined, {type:'SET_NAME',payload:'Alice'}); expect(s.user.name).toBe('Alice')" },
      { description: 'SET_NAME preserves user age', assertion: "var s2 = reducer(undefined, {type:'SET_NAME',payload:'Alice'}); expect(s2.user.age).toBe(0)" },
      { description: 'SET_AGE updates user age', assertion: "var s3 = reducer(undefined, {type:'SET_AGE',payload:25}); expect(s3.user.age).toBe(25)" },
      { description: 'original state is not mutated', assertion: "var orig = {user:{name:'Bob',age:10}}; var next = reducer(orig, {type:'SET_NAME',payload:'Alice'}); expect(orig.user.name).toBe('Bob')" },
    ],
    hints: [
      'You must spread at every level: `{ ...state, user: { ...state.user, name: ... } }`.',
      'Forgetting to spread an inner object will mutate the original — always create a new object at each level you change.',
    ],
    tags: ['redux', 'reducer', 'nested', 'immutability', 'spread', 'intermediate'],
    usageExample: {
      code: `function reducer(state = { user: { name: '', age: 0 } }, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, user: { ...state.user, name: action.payload } }
    default: return state
  }
}
reducer(undefined, { type: 'SET_NAME', payload: 'Alice' })
// → { user: { name: 'Alice', age: 0 } }`,
      explanation: {
        en: 'Spread each level of nesting to produce a completely new object tree without mutating any existing reference.',
        es: 'Expande cada nivel de anidamiento para producir un nuevo árbol de objetos sin mutar ninguna referencia existente.',
      },
    },
  },
]
