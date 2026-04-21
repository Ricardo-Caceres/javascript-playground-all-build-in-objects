import type { Exercise } from '@/shared/types/exercises'

export const reduxLegacyCompositionExercises: Exercise[] = [
  {
    slug: 'redux-legacy-combine-reducers-manual',
    title: 'Combine Reducers (Manual)',
    description: `## Combine Reducers (Manual)

\`combineReducers\` is one of Redux's most important utilities. It takes an object of reducer functions and returns a single **root reducer** that calls each one for its slice of state:

\`\`\`js
function combineReducers(reducers) {
  return function(state = {}, action) {
    // call each reducer with its slice of state
  }
}
\`\`\`

The resulting state object has the same keys as the \`reducers\` object, each key holding the result of the corresponding sub-reducer.

**Challenge:** Implement \`combineReducers(reducers)\` from scratch.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-legacy',
    method: 'combineReducers',
    initialCode: `function combineReducers(reducers) {
  // Return a root reducer that delegates to each sub-reducer
  // Each key in reducers maps to a slice of state
}`,
    solution: `function combineReducers(reducers) {
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
}`,
    tests: [
      {
        description: 'initialises slice to default state',
        assertion: "var cr = function(s,a){if(s===undefined)s=0;if(a.type==='INC')return s+1;return s}; var root=combineReducers({count:cr}); var s0=root(undefined,{type:'@@INIT'}); expect(s0.count).toBe(0)",
      },
      {
        description: 'dispatches action to correct slice',
        assertion: "var cr2=function(s,a){if(s===undefined)s=0;if(a.type==='INC')return s+1;return s}; var root2=combineReducers({count:cr2}); var s1=root2({count:5},{type:'INC'}); expect(s1.count).toBe(6)",
      },
      {
        description: 'supports multiple slices',
        assertion: "var cr3=function(s,a){if(s===undefined)s=''; if(a.type==='SET')return a.payload; return s}; var nr=function(s,a){if(s===undefined)s=0; return s}; var root3=combineReducers({name:cr3,num:nr}); var r=root3(undefined,{type:'SET',payload:'hello'}); expect(r.name).toBe('hello')",
      },
    ],
    hints: [
      'Iterate over `Object.keys(reducers)` and call each reducer with `state[key]` and the action.',
      'If `state` is undefined (first call), initialise it to `{}` so each sub-reducer receives `undefined` and can use its own default.',
    ],
    tags: ['redux', 'combineReducers', 'composition', 'intermediate'],
    usageExample: {
      code: `const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
})

store.getState()
// → { counter: 0, user: { name: '' } }`,
      explanation: {
        en: 'combineReducers delegates each slice of state to a dedicated reducer, keeping each reducer focused and small.',
        es: 'combineReducers delega cada parte del estado a un reducer dedicado, manteniendo cada reducer enfocado y pequeño.',
      },
    },
  },
  {
    slug: 'redux-legacy-root-reducer',
    title: 'Root Reducer Pattern',
    description: `## Root Reducer Pattern

A **root reducer** combines multiple sub-reducers by manually routing state slices:

\`\`\`js
function rootReducer(state = {}, action) {
  return {
    counter: counterReducer(state.counter, action),
    name: nameReducer(state.name, action),
  }
}
\`\`\`

Each sub-reducer only sees and manages its own slice. The root reducer assembles the final state object.

**Challenge:** Implement \`counterReducer\`, \`nameReducer\`, and \`rootReducer\` that compose them together.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-legacy',
    method: 'rootReducer',
    initialCode: `function counterReducer(state, action) {
  // default state = 0, handle INCREMENT
}

function nameReducer(state, action) {
  // default state = '', handle SET_NAME
}

function rootReducer(state, action) {
  // Combine counterReducer and nameReducer into { counter, name }
}`,
    solution: `function counterReducer(state, action) {
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
}`,
    tests: [
      { description: 'initial counter is 0', assertion: "var s0=rootReducer(undefined,{type:'@@INIT'}); expect(s0.counter).toBe(0)" },
      { description: 'initial name is empty string', assertion: "var s1=rootReducer(undefined,{type:'@@INIT'}); expect(s1.name).toBe('')" },
      { description: 'INCREMENT updates counter', assertion: "var base=rootReducer(undefined,{type:'@@INIT'}); var s2=rootReducer(base,{type:'INCREMENT'}); expect(s2.counter).toBe(1)" },
      { description: 'SET_NAME updates name', assertion: "var base2=rootReducer(undefined,{type:'@@INIT'}); var s3=rootReducer(base2,{type:'SET_NAME',payload:'Bob'}); expect(s3.name).toBe('Bob')" },
    ],
    hints: [
      'Each sub-reducer handles its default state independently with `state = 0` or `state = \'\'`.',
      'The root reducer passes `state.counter` to `counterReducer` — it only sees its own slice.',
    ],
    tags: ['redux', 'rootReducer', 'composition', 'intermediate'],
    usageExample: {
      code: `function rootReducer(state = {}, action) {
  return {
    counter: counterReducer(state.counter, action),
    name: nameReducer(state.name, action),
  }
}`,
      explanation: {
        en: 'Manually building a root reducer clarifies how combineReducers works under the hood.',
        es: 'Construir manualmente un root reducer aclara cómo funciona combineReducers internamente.',
      },
    },
  },
]
