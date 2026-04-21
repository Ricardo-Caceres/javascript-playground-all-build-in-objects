# Redux Exercises Design

**Date:** 2026-04-21  
**Status:** Approved

## Problem

The platform has two Redux demo pages (`/redux-legacy`, `/redux-toolkit`) with only an interactive counter — no explanations, no code examples, no exercises. The platform is meant for learning, not just practicing.

## Goal

Add 22 Redux Legacy + 22 Redux Toolkit interactive exercises (Monaco editor + automated tests) that teach Redux from fundamentals to advanced patterns.

---

## Architecture

### Exercise data location

```
src/features/exercises/infrastructure/data/
  redux-legacy/        ← 22 .ts exercise files
  redux-toolkit/       ← 22 .ts exercise files
```

Each file exports an `Exercise` object with `builtIn: 'redux-legacy'` or `builtIn: 'redux-toolkit'`.

Both sets are registered in `src/features/exercises/infrastructure/data/index.ts` alongside existing topics.

### Routing

The existing dynamic route `/exercises/[object]/[slug]` handles Redux exercises automatically. No new routes needed.

Exercise list pages:
- `/exercises/redux-legacy`
- `/exercises/redux-toolkit`

### Home page

`HomeView` filters `redux-legacy` and `redux-toolkit` out of the main objects grid (they must not appear alongside `Array`, `String`, etc.).

The "Redux Architecture Examples" section cards update their `href` values:
- `/redux-legacy` → `/exercises/redux-legacy`
- `/redux-toolkit` → `/exercises/redux-toolkit`

The demo pages (`/redux-legacy`, `/redux-toolkit`) remain accessible as supplementary material. Each exercise list page links to the corresponding demo at the bottom.

### Topic metadata

Both topics get entries in `topicMetaMap` with bilingual descriptions (`en`/`es`).

---

## Worker Changes (RTK only)

**Redux Legacy exercises** use only plain JavaScript — no worker changes needed.

**Redux Toolkit exercises** require RTK globals injected into the sandbox.

### Implementation

`executor.worker.ts` receives a new optional field `globals` on `WorkerInput`:

```ts
interface WorkerInput {
  code: string
  tests: TestCase[]
  globals?: Record<string, unknown>
}
```

When `globals` is provided, each key is passed as an extra parameter to `new Function(...)` alongside `describe`, `it`, `expect`.

The exercise runner (`ExerciseRunner.tsx`) detects `exercise.builtIn === 'redux-toolkit'` and imports the RTK UMD bundle, passing it as `{ ReduxToolkit: RTK }` in the worker message.

### Student-facing API

RTK exercises begin with this initialCode comment:

```ts
// ReduxToolkit is available as a global object.
// const { createSlice, configureStore, createAsyncThunk, ... } = ReduxToolkit
```

Redux Legacy exercises need no preamble — they use plain JS functions.

---

## Exercise Lists

### Redux Legacy (22 exercises — pure functions, no imports)

| # | Slug | Title | Category | Difficulty |
|---|------|-------|----------|------------|
| 1 | `basic-reducer` | Basic Reducer | instance-method | beginner |
| 2 | `reducer-initial-state` | Reducer with Initial State | instance-method | beginner |
| 3 | `multiple-action-types` | Multiple Action Types | instance-method | beginner |
| 4 | `reducer-with-payload` | Reducer with Payload | instance-method | beginner |
| 5 | `array-state-add` | Array State — Add Item | instance-method | beginner |
| 6 | `array-state-remove` | Array State — Remove Item | instance-method | beginner |
| 7 | `nested-object-state` | Nested Object State | instance-method | intermediate |
| 8 | `simple-action-creator` | Simple Action Creator | static-method | beginner |
| 9 | `action-creator-payload` | Action Creator with Payload | static-method | beginner |
| 10 | `action-type-constants` | Action Type Constants | static-property | beginner |
| 11 | `combine-reducers-manual` | combineReducers (Manual) | static-method | intermediate |
| 12 | `root-reducer` | Root Reducer | static-method | intermediate |
| 13 | `selector-function` | Selector Function | static-method | intermediate |
| 14 | `memoized-selector` | Memoized Selector (Manual) | static-method | intermediate |
| 15 | `logger-middleware` | Logger Middleware | static-method | intermediate |
| 16 | `thunk-middleware` | Thunk Middleware | static-method | intermediate |
| 17 | `async-action-pattern` | Async Action Pattern | static-method | intermediate |
| 18 | `store-from-scratch` | Store from Scratch | constructor | advanced |
| 19 | `enhancer-pattern` | Enhancer Pattern | static-method | advanced |
| 20 | `immutable-deep-update` | Immutable Deep Update | instance-method | advanced |
| 21 | `reducer-composition` | Reducer Composition | static-method | advanced |
| 22 | `state-history` | State History (Time-Travel) | static-method | advanced |

### Redux Toolkit (22 exercises — `ReduxToolkit` global available)

| # | Slug | Title | Category | Difficulty |
|---|------|-------|----------|------------|
| 1 | `create-slice-basics` | createSlice Basics | constructor | beginner |
| 2 | `slice-action-creators` | Slice Action Creators | static-method | beginner |
| 3 | `immer-mutations` | Immer Mutations in Reducers | instance-method | beginner |
| 4 | `configure-store-basic` | configureStore Basic | constructor | beginner |
| 5 | `configure-store-multi-slice` | configureStore Multi-Slice | constructor | intermediate |
| 6 | `create-action` | createAction | static-method | beginner |
| 7 | `create-reducer` | createReducer Builder | static-method | intermediate |
| 8 | `typed-selector` | Typed Selector | static-method | intermediate |
| 9 | `create-selector` | createSelector (Reselect) | static-method | intermediate |
| 10 | `derived-selector` | Derived Selector | static-method | intermediate |
| 11 | `async-thunk-basics` | createAsyncThunk Basics | static-method | intermediate |
| 12 | `thunk-pending-state` | Thunk Pending State | static-method | intermediate |
| 13 | `thunk-fulfilled-state` | Thunk Fulfilled State | static-method | intermediate |
| 14 | `thunk-rejected-state` | Thunk Rejected State | static-method | advanced |
| 15 | `extra-reducers-builder` | extraReducers Builder | static-method | intermediate |
| 16 | `create-entity-adapter` | createEntityAdapter | constructor | advanced |
| 17 | `entity-selectors` | Entity Selectors | static-method | advanced |
| 18 | `listener-middleware` | Listener Middleware | static-method | advanced |
| 19 | `middleware-config` | RTK Middleware Config | constructor | advanced |
| 20 | `slice-reset-action` | Slice with Reset Action | instance-method | intermediate |
| 21 | `nested-slice-state` | Nested Slice State | instance-method | intermediate |
| 22 | `full-counter-app` | Full Counter App | constructor | advanced |

---

## Test Constraints

All exercise `tests[].assertion` strings run as raw JS (not Babel-transpiled). Only the user's `code` field is transpiled.

Supported matchers: `toBe`, `toEqual`, `toStrictEqual`, `toBeTruthy`, `toBeFalsy`, `toContain`, `toHaveLength`, `toBeNull`, `toBeUndefined`, `toThrow`.

No `.not`, no `toBeGreaterThan`, no `toHaveProperty`.

RTK assertions use the store's `getState()` return value — pure data, no React components.

---

## Scope — Explicitly Out

- No RTK Query (`createApi`) exercises — too complex for the sandbox model, separate feature if needed.
- No React-Redux (`useSelector`, `useDispatch`) exercises — requires a React render environment.
- Demo pages (`/redux-legacy`, `/redux-toolkit`) are not modified beyond adding a link to the exercise list.
