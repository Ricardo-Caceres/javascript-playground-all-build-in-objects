import type { Exercise } from '@/shared/types/exercises'

export const reduxLegacyAdvancedExercises: Exercise[] = [
  {
    slug: 'redux-legacy-store-from-scratch',
    title: 'Store from Scratch',
    description: `## Store from Scratch

The Redux store is a plain object with three methods:

- \`getState()\` — returns the current state
- \`dispatch(action)\` — calls the reducer and notifies subscribers
- \`subscribe(listener)\` — registers a callback; returns an unsubscribe function

\`\`\`js
function createStore(reducer) {
  var state = reducer(undefined, { type: '@@INIT' })
  var listeners = []
  return { getState, dispatch, subscribe }
}
\`\`\`

**Challenge:** Implement \`createStore(reducer)\` with all three methods.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'redux-legacy',
    method: 'createStore',
    initialCode: `function createStore(reducer) {
  // Initialise state by calling reducer with undefined and @@INIT
  // Return { getState, dispatch, subscribe }
}`,
    solution: `function createStore(reducer) {
  var state = reducer(undefined, { type: '@@INIT' })
  var listeners = []
  return {
    getState: function() { return state },
    dispatch: function(action) {
      state = reducer(state, action)
      for (var i = 0; i < listeners.length; i++) listeners[i]()
    },
    subscribe: function(listener) {
      listeners.push(listener)
      return function() {
        listeners = listeners.filter(function(l) { return l !== listener })
      }
    }
  }
}`,
    tests: [
      {
        description: 'getState returns initial state',
        assertion: "var cr=function(s,a){if(s===undefined)s=0;if(a.type==='INC')return s+1;return s}; var store=createStore(cr); expect(store.getState()).toBe(0)",
      },
      {
        description: 'dispatch updates state',
        assertion: "var cr2=function(s,a){if(s===undefined)s=0;if(a.type==='INC')return s+1;return s}; var store2=createStore(cr2); store2.dispatch({type:'INC'}); expect(store2.getState()).toBe(1)",
      },
      {
        description: 'subscribe listener is called on dispatch',
        assertion: "var cr3=function(s,a){if(s===undefined)s=0;if(a.type==='INC')return s+1;return s}; var store3=createStore(cr3); var notified=false; store3.subscribe(function(){notified=true}); store3.dispatch({type:'INC'}); expect(notified).toBeTruthy()",
      },
      {
        description: 'multiple dispatches accumulate correctly',
        assertion: "var cr4=function(s,a){if(s===undefined)s=0;if(a.type==='INC')return s+1;return s}; var store4=createStore(cr4); store4.dispatch({type:'INC'}); store4.dispatch({type:'INC'}); expect(store4.getState()).toBe(2)",
      },
    ],
    hints: [
      'Initialise state with `reducer(undefined, { type: \'@@INIT\' })` so reducers set their defaults.',
      '`subscribe` should return an unsubscribe function that removes the listener from the array.',
    ],
    tags: ['redux', 'createStore', 'store', 'advanced'],
    usageExample: {
      code: `const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'INCREMENT' }) // logs 1
store.dispatch({ type: 'INCREMENT' }) // logs 2`,
      explanation: {
        en: 'Implementing createStore from scratch shows how Redux manages state, subscriptions, and dispatch in only ~20 lines.',
        es: 'Implementar createStore desde cero muestra cómo Redux gestiona estado, suscripciones y dispatch en apenas ~20 líneas.',
      },
    },
  },
  {
    slug: 'redux-legacy-enhancer-pattern',
    title: 'Store Enhancer Pattern',
    description: `## Store Enhancer Pattern

A **store enhancer** wraps \`createStore\` to add capabilities (like middleware). The signature is:

\`\`\`js
const enhancer = createStore => reducer => store
\`\`\`

\`applyMiddleware\` is Redux's built-in enhancer factory. When \`createStore\` receives an enhancer as its second argument it delegates to it:

\`\`\`js
function createStore(reducer, enhancer) {
  if (typeof enhancer === 'function') return enhancer(createStore)(reducer)
  // ...normal store creation
}
\`\`\`

**Challenge:** Implement both \`createStore(reducer, enhancer)\` and \`applyMiddleware(middleware)\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'redux-legacy',
    method: 'createStore',
    initialCode: `function createStore(reducer, enhancer) {
  // If enhancer is provided, delegate to it
  // Otherwise create a basic store with getState and dispatch
}

function applyMiddleware(middleware) {
  // Return an enhancer that wraps dispatch with the middleware
}`,
    solution: `function createStore(reducer, enhancer) {
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer)
  }
  var state = reducer(undefined, { type: '@@INIT' })
  return {
    getState: function() { return state },
    dispatch: function(action) { state = reducer(state, action) }
  }
}
function applyMiddleware(middleware) {
  return function(createStore) {
    return function(reducer) {
      var store = createStore(reducer)
      var dispatch = middleware({ getState: store.getState })(store.dispatch)
      return { getState: store.getState, dispatch: dispatch }
    }
  }
}`,
    tests: [
      {
        description: 'middleware intercepts actions',
        assertion: "var log=[]; var lm=function(store){return function(next){return function(action){log.push(action.type);return next(action)}}}; var cr=function(s,a){if(s===undefined)s=0;if(a.type==='INC')return s+1;return s}; var store=createStore(cr,applyMiddleware(lm)); store.dispatch({type:'INC'}); expect(log).toContain('INC')",
      },
      {
        description: 'state is updated after dispatch through middleware',
        assertion: "var log2=[]; var lm2=function(store){return function(next){return function(action){log2.push(action.type);return next(action)}}}; var cr2=function(s,a){if(s===undefined)s=0;if(a.type==='INC')return s+1;return s}; var store2=createStore(cr2,applyMiddleware(lm2)); store2.dispatch({type:'INC'}); expect(store2.getState()).toBe(1)",
      },
      {
        description: 'createStore works without enhancer',
        assertion: "var cr3=function(s,a){if(s===undefined)s=0;return s}; var store3=createStore(cr3); expect(store3.getState()).toBe(0)",
      },
    ],
    hints: [
      '`if (typeof enhancer === \'function\') return enhancer(createStore)(reducer)` is the only change needed in createStore.',
      '`applyMiddleware` must return a function that takes `createStore`, then `reducer` — matching the enhancer signature.',
    ],
    tags: ['redux', 'enhancer', 'applyMiddleware', 'advanced'],
    usageExample: {
      code: `const store = createStore(reducer, applyMiddleware(logger, thunk))

store.dispatch({ type: 'INCREMENT' })
// → logger logs, thunk checks type, state updates`,
      explanation: {
        en: 'Store enhancers let you wrap createStore to intercept dispatch, enabling middleware, devtools, and more.',
        es: 'Los enhancers de store permiten envolver createStore para interceptar dispatch, habilitando middleware, devtools y más.',
      },
    },
  },
  {
    slug: 'redux-legacy-immutable-deep-update',
    title: 'Immutable Deep Update',
    description: `## Immutable Deep Update

Updating deeply nested state immutably with spread operators can become verbose. A utility like \`setIn(obj, path, value)\` handles this recursively:

\`\`\`js
setIn(state, ['user', 'address', 'city'], 'Barcelona')
// → { ...state, user: { ...state.user, address: { ...state.user.address, city: 'Barcelona' } } }
\`\`\`

**Challenge:** Implement \`setIn(obj, path, value)\` that returns a new object with the value set at the given key path, without mutating the original at any level.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'redux-legacy',
    method: 'setIn',
    initialCode: `function setIn(obj, path, value) {
  // Base case: empty path → return value
  // Otherwise: recursively create new objects at each level
}`,
    solution: `function setIn(obj, path, value) {
  if (path.length === 0) return value
  var key = path[0]
  var rest = path.slice(1)
  var nested = obj && obj[key] !== undefined ? obj[key] : {}
  return Object.assign({}, obj, { [key]: setIn(nested, rest, value) })
}`,
    tests: [
      {
        description: 'updates deeply nested value',
        assertion: "var state={user:{address:{city:'Madrid'}}}; var next=setIn(state,['user','address','city'],'Barcelona'); expect(next.user.address.city).toBe('Barcelona')",
      },
      {
        description: 'does not mutate original',
        assertion: "var state2={user:{address:{city:'Madrid'}}}; setIn(state2,['user','address','city'],'Barcelona'); expect(state2.user.address.city).toBe('Madrid')",
      },
      {
        description: 'creates nested objects for missing keys',
        assertion: "var next2=setIn({},['a','b'],42); expect(next2.a.b).toBe(42)",
      },
      {
        description: 'updates top-level key',
        assertion: "var next3=setIn({x:1},['x'],99); expect(next3.x).toBe(99)",
      },
    ],
    hints: [
      'Use recursion: when `path.length === 0` return `value`, otherwise go one level deeper.',
      '`Object.assign({}, obj, { [key]: ... })` creates a shallow copy with the one key overridden.',
    ],
    tags: ['redux', 'immutability', 'setIn', 'recursion', 'advanced'],
    usageExample: {
      code: `const state = { user: { address: { city: 'Madrid' } } }
const next = setIn(state, ['user', 'address', 'city'], 'Barcelona')

next.user.address.city  // → 'Barcelona'
state.user.address.city // → 'Madrid'  (unchanged)`,
      explanation: {
        en: 'setIn eliminates boilerplate spread chains for deep updates while guaranteeing immutability at every level.',
        es: 'setIn elimina cadenas de spread repetitivas para actualizaciones profundas, garantizando inmutabilidad en cada nivel.',
      },
    },
  },
  {
    slug: 'redux-legacy-reducer-composition',
    title: 'Higher-Order Reducers',
    description: `## Higher-Order Reducers

A **higher-order reducer** wraps another reducer to add cross-cutting behaviour. \`composeReducers\` runs state through multiple reducers in sequence — each one can handle different action types:

\`\`\`js
const combined = composeReducers(reducerA, reducerB)
combined(state, action)
// → reducerB(reducerA(state, action), action)
\`\`\`

This is the functional equivalent of function composition for reducers.

**Challenge:** Implement \`composeReducers(...reducers)\` that takes any number of reducer functions and returns a single reducer that pipes state through each of them.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'redux-legacy',
    method: 'composeReducers',
    initialCode: `function composeReducers() {
  // Collect all reducer arguments
  // Return a reducer that runs state through each one sequentially
}`,
    solution: `function composeReducers() {
  var reducers = Array.prototype.slice.call(arguments)
  return function(state, action) {
    return reducers.reduce(function(s, reducer) { return reducer(s, action) }, state)
  }
}`,
    tests: [
      {
        description: 'first reducer handles its action',
        assertion: "var r1=function(s,a){if(s===undefined)s={};if(a.type==='ADD_ID')return Object.assign({},s,{id:a.payload});return s}; var r2=function(s,a){if(s===undefined)s={};if(a.type==='ADD_NAME')return Object.assign({},s,{name:a.payload});return s}; var combined=composeReducers(r1,r2); var s=combined(undefined,{type:'ADD_ID',payload:1}); expect(s.id).toBe(1)",
      },
      {
        description: 'second reducer handles its action',
        assertion: "var r3=function(s,a){if(s===undefined)s={};if(a.type==='ADD_ID')return Object.assign({},s,{id:a.payload});return s}; var r4=function(s,a){if(s===undefined)s={};if(a.type==='ADD_NAME')return Object.assign({},s,{name:a.payload});return s}; var combined2=composeReducers(r3,r4); var s2=combined2(undefined,{type:'ADD_ID',payload:5}); var s3=combined2(s2,{type:'ADD_NAME',payload:'Alice'}); expect(s3.name).toBe('Alice')",
      },
      {
        description: 'state from first reducer is preserved after second',
        assertion: "var r5=function(s,a){if(s===undefined)s={};if(a.type==='ADD_ID')return Object.assign({},s,{id:a.payload});return s}; var r6=function(s,a){if(s===undefined)s={};if(a.type==='ADD_NAME')return Object.assign({},s,{name:a.payload});return s}; var combined3=composeReducers(r5,r6); var s4=combined3(undefined,{type:'ADD_ID',payload:5}); var s5=combined3(s4,{type:'ADD_NAME',payload:'Alice'}); expect(s5.id).toBe(5)",
      },
    ],
    hints: [
      '`Array.prototype.reduce` is perfect here — start with the initial state and fold each reducer over it.',
      '`Array.prototype.slice.call(arguments)` converts the `arguments` object into a real array.',
    ],
    tags: ['redux', 'higher-order-reducer', 'composition', 'advanced'],
    usageExample: {
      code: `const withLogging = (s, a) => { console.log(a.type); return s }
const combined = composeReducers(myReducer, withLogging)

// Each action is processed by myReducer, then by withLogging`,
      explanation: {
        en: 'Higher-order reducers add cross-cutting concerns (logging, undo, analytics) to any reducer without modifying its source.',
        es: 'Los reducers de orden superior añaden preocupaciones transversales (logging, undo, analíticas) a cualquier reducer sin modificar su código fuente.',
      },
    },
  },
  {
    slug: 'redux-legacy-state-history',
    title: 'Time-Travel with State History',
    description: `## Time-Travel with State History

A **higher-order reducer** can track the history of state to enable undo/redo. Wrap any reducer to store past states:

\`\`\`js
{
  present: currentState,
  past: [previousState1, previousState2, ...]
}
\`\`\`

On a regular action: push current \`present\` onto \`past\` and compute the new \`present\`.  
On \`UNDO\`: pop the last item from \`past\` and make it the new \`present\`.

**Challenge:** Implement \`withHistory(reducer)\` that wraps a reducer with full undo support.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'redux-legacy',
    method: 'withHistory',
    initialCode: `function withHistory(reducer) {
  // Return a new reducer that manages { present, past }
  // Handle UNDO by reverting to the previous present
}`,
    solution: `function withHistory(reducer) {
  var init = reducer(undefined, { type: '@@INIT' })
  return function(state, action) {
    if (state === undefined) state = { present: init, past: [] }
    if (action.type === 'UNDO') {
      if (state.past.length === 0) return state
      var previous = state.past[state.past.length - 1]
      return { present: previous, past: state.past.slice(0, -1) }
    }
    return {
      present: reducer(state.present, action),
      past: state.past.concat([state.present]),
    }
  }
}`,
    tests: [
      {
        description: 'initial present equals reducer default',
        assertion: "var cr=function(s,a){if(s===undefined)s=0;if(a.type==='INC')return s+1;return s}; var hr=withHistory(cr); var s0=hr(undefined,{type:'@@INIT'}); expect(s0.present).toBe(0)",
      },
      {
        description: 'dispatching INC increments present',
        assertion: "var cr2=function(s,a){if(s===undefined)s=0;if(a.type==='INC')return s+1;return s}; var hr2=withHistory(cr2); var s0=hr2(undefined,{type:'@@INIT'}); var s1=hr2(s0,{type:'INC'}); expect(s1.present).toBe(1)",
      },
      {
        description: 'UNDO reverts to previous present',
        assertion: "var cr3=function(s,a){if(s===undefined)s=0;if(a.type==='INC')return s+1;return s}; var hr3=withHistory(cr3); var s0=hr3(undefined,{type:'@@INIT'}); var s1=hr3(s0,{type:'INC'}); var s2=hr3(s1,{type:'UNDO'}); expect(s2.present).toBe(0)",
      },
      {
        description: 'UNDO on empty past is a no-op',
        assertion: "var cr4=function(s,a){if(s===undefined)s=0;if(a.type==='INC')return s+1;return s}; var hr4=withHistory(cr4); var s0=hr4(undefined,{type:'@@INIT'}); var s1=hr4(s0,{type:'UNDO'}); expect(s1.present).toBe(0)",
      },
    ],
    hints: [
      'Store the wrapped reducer\'s initial state with `reducer(undefined, { type: \'@@INIT\' })` outside the returned function.',
      '`state.past.concat([state.present])` creates a new array — never mutate `past` directly.',
    ],
    tags: ['redux', 'undo', 'time-travel', 'higher-order-reducer', 'advanced'],
    usageExample: {
      code: `const counterWithHistory = withHistory(counterReducer)

var s0 = counterWithHistory(undefined, { type: '@@INIT' })
// → { present: 0, past: [] }

var s1 = counterWithHistory(s0, { type: 'INC' })
// → { present: 1, past: [0] }

var s2 = counterWithHistory(s1, { type: 'UNDO' })
// → { present: 0, past: [] }`,
      explanation: {
        en: 'withHistory wraps any reducer to add undo support, demonstrating the power of higher-order reducers in Redux.',
        es: 'withHistory envuelve cualquier reducer para añadir soporte de deshacer, demostrando el poder de los reducers de orden superior en Redux.',
      },
    },
  },
]
