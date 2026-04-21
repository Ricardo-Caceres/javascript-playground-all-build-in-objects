import type { Exercise } from '@/shared/types/exercises'

export const reduxLegacyMiddlewareExercises: Exercise[] = [
  {
    slug: 'redux-legacy-logger-middleware',
    title: 'Logger Middleware',
    description: `## Logger Middleware

Redux middleware uses a **curried function** signature:

\`\`\`js
const middleware = store => next => action => {
  // do something
  return next(action)
}
\`\`\`

- \`store\` — the Redux store (gives access to \`getState\` and \`dispatch\`)
- \`next\` — the next middleware in the chain (or the real \`dispatch\`)
- \`action\` — the dispatched action

Calling \`next(action)\` passes the action along the chain. Always return the result so callers can chain the return value.

**Challenge:** Implement \`logger\` middleware that simply calls \`next(action)\` and returns the result.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-legacy',
    method: 'middleware',
    initialCode: `function logger(store) {
  return function(next) {
    return function(action) {
      // Call next(action) and return the result
    }
  }
}`,
    solution: `function logger(store) {
  return function(next) {
    return function(action) {
      return next(action)
    }
  }
}`,
    tests: [
      {
        description: 'passes action to next',
        assertion: "var dispatched=[]; var fakeStore={getState:function(){return{}}}; var fakeNext=function(action){dispatched.push(action);return action}; var dispatch=logger(fakeStore)(fakeNext); dispatch({type:'TEST'}); expect(dispatched).toHaveLength(1)",
      },
      {
        description: 'passes correct action type',
        assertion: "var dispatched2=[]; var fakeStore2={getState:function(){return{}}}; var fakeNext2=function(action){dispatched2.push(action);return action}; var dispatch2=logger(fakeStore2)(fakeNext2); dispatch2({type:'A'}); expect(dispatched2[0].type).toBe('A')",
      },
      {
        description: 'returns the result of next(action)',
        assertion: "var fakeStore3={getState:function(){return{}}}; var result=null; var fakeNext3=function(a){return 42}; var dispatch3=logger(fakeStore3)(fakeNext3); result=dispatch3({type:'X'}); expect(result).toBe(42)",
      },
    ],
    hints: [
      'The three-level curried signature is required by Redux\'s `applyMiddleware`.',
      'Always `return next(action)` so callers receive the return value (especially important for thunks).',
    ],
    tags: ['redux', 'middleware', 'logger', 'currying', 'intermediate'],
    usageExample: {
      code: `const logger = store => next => action => {
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  return result
}

const store = createStore(reducer, applyMiddleware(logger))`,
      explanation: {
        en: 'Logger middleware intercepts every dispatched action, logs it, passes it along, then logs the resulting state.',
        es: 'El middleware logger intercepta cada acción despachada, la registra, la pasa al siguiente middleware y luego registra el estado resultante.',
      },
    },
  },
  {
    slug: 'redux-legacy-thunk-middleware',
    title: 'Thunk Middleware',
    description: `## Thunk Middleware

**Redux Thunk** lets you dispatch functions instead of plain objects. When the middleware sees a function, it calls it with \`(dispatch, getState)\`:

\`\`\`js
const thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  return next(action)
}
\`\`\`

This enables async logic inside action creators.

**Challenge:** Implement \`thunk\` middleware that intercepts function actions and calls them, or forwards plain object actions to \`next\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-legacy',
    method: 'middleware',
    initialCode: `function thunk(store) {
  return function(next) {
    return function(action) {
      // If action is a function, call it with (store.dispatch, store.getState)
      // Otherwise call next(action)
    }
  }
}`,
    solution: `function thunk(store) {
  return function(next) {
    return function(action) {
      if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
      }
      return next(action)
    }
  }
}`,
    tests: [
      {
        description: 'forwards plain actions to next',
        assertion: "var results=[]; var fakeStore={dispatch:function(a){results.push(a)},getState:function(){return{value:42}}}; var fakeNext=function(a){results.push(a)}; var dispatch=thunk(fakeStore)(fakeNext); dispatch({type:'PLAIN'}); expect(results).toHaveLength(1)",
      },
      {
        description: 'calls thunk function with dispatch',
        assertion: "var results2=[]; var fakeStore2={dispatch:function(a){results2.push(a)},getState:function(){return{value:42}}}; var fakeNext2=function(a){results2.push(a)}; var dispatch2=thunk(fakeStore2)(fakeNext2); dispatch2(function(d,getState){d({type:'THUNK_RESULT',value:getState().value})}); expect(results2).toHaveLength(1)",
      },
      {
        description: 'thunk receives correct getState value',
        assertion: "var results3=[]; var fakeStore3={dispatch:function(a){results3.push(a)},getState:function(){return{value:99}}}; var fakeNext3=function(a){results3.push(a)}; var dispatch3=thunk(fakeStore3)(fakeNext3); dispatch3(function(d,gs){d({type:'VAL',v:gs().value})}); expect(results3[0].v).toBe(99)",
      },
    ],
    hints: [
      '`typeof action === \'function\'` is the check that distinguishes a thunk from a plain action.',
      'Pass `store.dispatch` (not `next`) to the thunk so it can dispatch additional actions.',
    ],
    tags: ['redux', 'middleware', 'thunk', 'async', 'intermediate'],
    usageExample: {
      code: `const thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  return next(action)
}

// Thunk action creator:
function loadUser(id) {
  return function(dispatch) {
    dispatch({ type: 'LOADING' })
    fetch('/users/' + id).then(r => r.json()).then(user =>
      dispatch({ type: 'LOADED', payload: user })
    )
  }
}`,
      explanation: {
        en: 'Thunk middleware enables async operations by letting action creators return functions that are called with dispatch and getState.',
        es: 'El middleware thunk habilita operaciones asíncronas permitiendo que los creadores de acciones devuelvan funciones que se llaman con dispatch y getState.',
      },
    },
  },
  {
    slug: 'redux-legacy-async-action-pattern',
    title: 'Async Action Pattern',
    description: `## Async Action Pattern

A typical **thunk action creator** dispatches three actions for async operations:
1. A \`REQUEST\` action immediately (shows a loading state)
2. A \`SUCCESS\` action when the data arrives
3. A \`FAILURE\` action if something goes wrong

\`\`\`js
function fetchUser(id) {
  return function(dispatch) {
    dispatch({ type: 'FETCH_USER_REQUEST' })
    return fetch('/users/' + id)
      .then(r => r.json())
      .then(user => dispatch({ type: 'FETCH_USER_SUCCESS', payload: user }))
  }
}
\`\`\`

**Challenge:** Implement \`fetchUser(id)\` that dispatches \`'FETCH_USER_REQUEST'\` immediately and returns a Promise that resolves with a success dispatch.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'redux-legacy',
    method: 'action-creator',
    initialCode: `function fetchUser(id) {
  // Return a thunk (function) that:
  // 1. Dispatches FETCH_USER_REQUEST immediately
  // 2. Returns a resolved Promise with FETCH_USER_SUCCESS
}`,
    solution: `function fetchUser(id) {
  return function(dispatch) {
    dispatch({ type: 'FETCH_USER_REQUEST' })
    return Promise.resolve({ id: id, name: 'Alice' }).then(function(user) {
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: user })
    })
  }
}`,
    tests: [
      {
        description: 'dispatches FETCH_USER_REQUEST synchronously',
        assertion: "var dispatched=[]; var fakeDispatch=function(a){dispatched.push(a)}; var thunkAction=fetchUser(1); thunkAction(fakeDispatch); expect(dispatched[0].type).toBe('FETCH_USER_REQUEST')",
      },
      {
        description: 'dispatches exactly one action synchronously',
        assertion: "var dispatched2=[]; var fakeDispatch2=function(a){dispatched2.push(a)}; fetchUser(5)(fakeDispatch2); expect(dispatched2).toHaveLength(1)",
      },
      {
        description: 'fetchUser returns a function',
        assertion: "expect(typeof fetchUser(1)).toBe('function')",
      },
    ],
    hints: [
      'The thunk must dispatch `FETCH_USER_REQUEST` before the async operation starts.',
      'Only the synchronous request dispatch is tested here — the Promise resolves asynchronously.',
    ],
    tags: ['redux', 'thunk', 'async', 'action-creator', 'intermediate'],
    usageExample: {
      code: `function fetchUser(id) {
  return function(dispatch) {
    dispatch({ type: 'FETCH_USER_REQUEST' })
    return fetch('/users/' + id)
      .then(r => r.json())
      .then(user => dispatch({ type: 'FETCH_USER_SUCCESS', payload: user }))
      .catch(err => dispatch({ type: 'FETCH_USER_FAILURE', error: err.message }))
  }
}`,
      explanation: {
        en: 'The request/success/failure pattern gives the UI clear signals to show loading spinners and error messages.',
        es: 'El patrón request/success/failure da a la UI señales claras para mostrar indicadores de carga y mensajes de error.',
      },
    },
  },
]
