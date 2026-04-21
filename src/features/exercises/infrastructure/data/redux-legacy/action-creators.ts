import type { Exercise } from '@/shared/types/exercises'

export const reduxLegacyActionCreatorsExercises: Exercise[] = [
  {
    slug: 'redux-legacy-simple-action-creator',
    title: 'Simple Action Creator',
    description: `## Simple Action Creator

An **action creator** is a function that returns an action object. This keeps action construction consistent and centralised:

\`\`\`js
function increment() {
  return { type: 'INCREMENT' }
}
\`\`\`

Calling \`increment()\` always produces the same action shape, making it easy to test and refactor.

**Challenge:** Implement \`increment()\` that returns the action object \`{ type: 'INCREMENT' }\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-legacy',
    method: 'action-creator',
    initialCode: `function increment() {
  // Return the action object { type: 'INCREMENT' }
}`,
    solution: `function increment() {
  return { type: 'INCREMENT' }
}`,
    tests: [
      { description: 'action has type INCREMENT', assertion: "expect(increment().type).toBe('INCREMENT')" },
      { description: 'action serialises correctly', assertion: "expect(JSON.stringify(increment())).toBe('{\"type\":\"INCREMENT\"}')" },
      { description: 'increment is a function', assertion: "expect(typeof increment).toBe('function')" },
    ],
    hints: [
      'An action creator simply wraps the action object creation in a named function.',
      'The return value must be a plain JavaScript object with at least a `type` string.',
    ],
    tags: ['redux', 'action-creator', 'action', 'beginner'],
    usageExample: {
      code: `function increment() {
  return { type: 'INCREMENT' }
}

// Usage:
store.dispatch(increment())`,
      explanation: {
        en: 'Action creators centralise action construction, reducing typo-prone string duplication across the codebase.',
        es: 'Los creadores de acciones centralizan la construcción de acciones, reduciendo la duplicación de cadenas propensa a errores tipográficos.',
      },
    },
  },
  {
    slug: 'redux-legacy-action-creator-payload',
    title: 'Action Creator with Payload',
    description: `## Action Creator with Payload

Action creators become more powerful when they accept arguments and include them in the action's **payload**:

\`\`\`js
function addItem(item) {
  return { type: 'ADD_ITEM', payload: item }
}
\`\`\`

This follows the **Flux Standard Action** convention: \`{ type, payload }\`.

**Challenge:** Implement \`addItem(item)\` that returns \`{ type: 'ADD_ITEM', payload: item }\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-legacy',
    method: 'action-creator',
    initialCode: `function addItem(item) {
  // Return { type: 'ADD_ITEM', payload: item }
}`,
    solution: `function addItem(item) {
  return { type: 'ADD_ITEM', payload: item }
}`,
    tests: [
      { description: 'action type is ADD_ITEM', assertion: "expect(addItem('apple').type).toBe('ADD_ITEM')" },
      { description: 'string payload is set correctly', assertion: "expect(addItem('apple').payload).toBe('apple')" },
      { description: 'numeric payload is set correctly', assertion: "expect(addItem(42).payload).toBe(42)" },
      { description: 'object payload id is accessible', assertion: "expect(addItem({id:1}).payload.id).toBe(1)" },
    ],
    hints: [
      'The `payload` key is a Redux community convention (Flux Standard Action).',
      'The payload can be any value: a string, number, object, or array.',
    ],
    tags: ['redux', 'action-creator', 'payload', 'beginner'],
    usageExample: {
      code: `function addItem(item) {
  return { type: 'ADD_ITEM', payload: item }
}

store.dispatch(addItem('apple'))
// dispatches → { type: 'ADD_ITEM', payload: 'apple' }`,
      explanation: {
        en: 'Passing the payload as a parameter lets you reuse one action creator for any value instead of hard-coding it.',
        es: 'Pasar el payload como parámetro permite reutilizar un mismo creador de acciones para cualquier valor en lugar de codificarlo.',
      },
    },
  },
  {
    slug: 'redux-legacy-action-type-constants',
    title: 'Action Type Constants',
    description: `## Action Type Constants

Defining action type strings as **named constants** eliminates typos and enables autocomplete:

\`\`\`js
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
\`\`\`

If you mistype a constant name, JavaScript throws a \`ReferenceError\`. If you mistype a raw string, the action silently fails.

**Challenge:** Define string constants \`ADD_TODO\`, \`REMOVE_TODO\`, and \`TOGGLE_TODO\`, then implement \`addTodo(text)\` that returns \`{ type: ADD_TODO, payload: text }\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-legacy',
    method: 'action-creator',
    initialCode: `// Define your action type constants
const ADD_TODO = undefined
const REMOVE_TODO = undefined
const TOGGLE_TODO = undefined

function addTodo(text) {
  // Return the correct action object using ADD_TODO
}`,
    solution: `const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

function addTodo(text) {
  return { type: ADD_TODO, payload: text }
}`,
    tests: [
      { description: 'ADD_TODO constant has correct value', assertion: "expect(ADD_TODO).toBe('ADD_TODO')" },
      { description: 'REMOVE_TODO constant has correct value', assertion: "expect(REMOVE_TODO).toBe('REMOVE_TODO')" },
      { description: 'TOGGLE_TODO constant has correct value', assertion: "expect(TOGGLE_TODO).toBe('TOGGLE_TODO')" },
      { description: 'addTodo action type uses ADD_TODO', assertion: "expect(addTodo('buy milk').type).toBe('ADD_TODO')" },
      { description: 'addTodo payload is the text', assertion: "expect(addTodo('buy milk').payload).toBe('buy milk')" },
    ],
    hints: [
      'Constants are typically placed at the top of a file or in a dedicated `actionTypes.js` file.',
      'Using constants in both the action creator and the reducer means a typo causes an error rather than a silent bug.',
    ],
    tags: ['redux', 'action-creator', 'constants', 'best-practices', 'beginner'],
    usageExample: {
      code: `const ADD_TODO = 'ADD_TODO'

function addTodo(text) {
  return { type: ADD_TODO, payload: text }
}

// Typo-safe: ADD_TODOO would throw ReferenceError`,
      explanation: {
        en: 'Constants make action types refactor-safe and provide a single source of truth for each string value.',
        es: 'Las constantes hacen que los tipos de acción sean seguros para refactorizar y proveen una única fuente de verdad para cada cadena.',
      },
    },
  },
]
