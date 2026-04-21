import type { Exercise } from '@/shared/types/exercises'

export const reduxLegacySelectorsExercises: Exercise[] = [
  {
    slug: 'redux-legacy-selector-function',
    title: 'Selector Functions',
    description: `## Selector Functions

**Selectors** are plain functions that extract a specific piece of data from the Redux state tree:

\`\`\`js
function getCounter(state) { return state.counter }
function getUser(state) { return state.user }
\`\`\`

They centralise access to state shape, so if you rename a key you only update the selector — not every component that reads it.

**Challenge:** Implement three selectors:
- \`getCounter(state)\` → \`state.counter\`
- \`getUser(state)\` → \`state.user\`
- \`getUsername(state)\` → \`state.user.name\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'redux-legacy',
    method: 'selector',
    initialCode: `function getCounter(state) {
  // Return state.counter
}

function getUser(state) {
  // Return state.user
}

function getUsername(state) {
  // Return state.user.name
}`,
    solution: `function getCounter(state) { return state.counter }
function getUser(state) { return state.user }
function getUsername(state) { return state.user.name }`,
    tests: [
      { description: 'getCounter returns counter', assertion: "var state={counter:5,user:{name:'Alice',age:30}}; expect(getCounter(state)).toBe(5)" },
      { description: 'getUsername returns user name', assertion: "var state2={counter:5,user:{name:'Alice',age:30}}; expect(getUsername(state2)).toBe('Alice')" },
      { description: 'getCounter returns 0', assertion: "var state3={counter:0,user:{name:'Bob',age:20}}; expect(getCounter(state3)).toBe(0)" },
      { description: 'getUser returns user object with age', assertion: "var state4={counter:0,user:{name:'Bob',age:20}}; expect(getUser(state4).age).toBe(20)" },
    ],
    hints: [
      'A selector is just a function: `function getCounter(state) { return state.counter }`.',
      'Keeping selectors in one place means renaming a state key only requires updating the selector.',
    ],
    tags: ['redux', 'selector', 'state', 'beginner'],
    usageExample: {
      code: `function getCounter(state) { return state.counter }
function getUsername(state) { return state.user.name }

// In a component:
const count = getCounter(store.getState())
const name  = getUsername(store.getState())`,
      explanation: {
        en: 'Selectors decouple components from the shape of the state tree, making refactoring easier.',
        es: 'Los selectores desacoplan los componentes de la forma del árbol de estado, facilitando la refactorización.',
      },
    },
  },
  {
    slug: 'redux-legacy-memoized-selector',
    title: 'Memoized Selector',
    description: `## Memoized Selector

A **memoized selector** caches its last result and skips recomputation when the input hasn't changed:

\`\`\`js
function createMemoSelector(selector) {
  var lastInput, lastResult, called = false
  return function(state) {
    if (called && state === lastInput) return lastResult
    // ... compute and cache
  }
}
\`\`\`

This is the core idea behind **Reselect** — expensive derived data is only recalculated when relevant state changes.

**Challenge:** Implement \`createMemoSelector(fn)\` that wraps a selector function with last-result caching based on input reference equality (\`===\`).`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'redux-legacy',
    method: 'createMemoSelector',
    initialCode: `function createMemoSelector(selector) {
  // Cache the last input and result
  // Return the cached result when the same input reference is passed
}`,
    solution: `function createMemoSelector(selector) {
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
}`,
    tests: [
      {
        description: 'does not recompute on same reference',
        assertion: "var callCount=0; var sel=createMemoSelector(function(s){callCount++;return s.value*2}); var st={value:5}; sel(st); sel(st); expect(callCount).toBe(1)",
      },
      {
        description: 'recomputes when reference changes',
        assertion: "var callCount2=0; var sel2=createMemoSelector(function(s){callCount2++;return s.value}); var st2={value:5}; var st3={value:10}; sel2(st2); sel2(st3); expect(callCount2).toBe(2)",
      },
      {
        description: 'returns same result reference for same input',
        assertion: "var sel3=createMemoSelector(function(s){return s.items.filter(function(x){return x>0})}); var st4={items:[1,-2,3]}; var r1=sel3(st4); var r2=sel3(st4); expect(r1).toEqual(r2)",
      },
    ],
    hints: [
      'Store the previous input with `var lastInput` and compare with `===` (reference equality).',
      'The first call must always compute — use a `called` flag to handle the initial invocation.',
    ],
    tags: ['redux', 'selector', 'memoization', 'reselect', 'advanced'],
    usageExample: {
      code: `var getVisibleTodos = createMemoSelector(function(state) {
  return state.todos.filter(function(t) { return !t.done })
})

getVisibleTodos(state) // computes
getVisibleTodos(state) // returns cached result`,
      explanation: {
        en: 'Memoised selectors prevent expensive recomputation when the state reference has not changed, improving render performance.',
        es: 'Los selectores memorizados evitan recomputaciones costosas cuando la referencia de estado no ha cambiado, mejorando el rendimiento de renderizado.',
      },
    },
  },
]
