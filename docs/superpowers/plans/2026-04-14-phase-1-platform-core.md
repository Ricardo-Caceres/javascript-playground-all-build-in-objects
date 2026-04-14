# Phase 1 — Platform Core Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete platform infrastructure — Monaco editor, Web Worker code execution, test framework, Redux progress store, and routing — validated by one working demo exercise (`Array.from()` with 5 test cases).

**Architecture:** Exercises are static TypeScript data files. User code is transpiled by Babel inside a Web Worker (background thread, 5s timeout), then executed via `new Function()`. Results flow back to the UI via `postMessage`. Progress is tracked in Redux and persisted to localStorage via a middleware designed to be swapped for Supabase in Phase 13.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind v4, `@monaco-editor/react`, `@babel/standalone`, Redux Toolkit

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `src/shared/types/exercises.ts` | `Exercise`, `TestCase`, `RunResult`, `TestResult` types |
| Create | `src/shared/lib/worker/testFramework.ts` | `describe/it/expect` mini-framework (runs in Worker) |
| Create | `src/shared/lib/worker/executor.worker.ts` | Web Worker: Babel transpile → execute user code → return results |
| Create | `src/shared/lib/worker/workerEngine.ts` | Client-side class wrapping worker lifecycle + timeout |
| Create | `src/features/progress/domain/entities/index.ts` | `ExerciseProgress`, `ProgressState` types |
| Create | `src/features/progress/presentation/store/progressSlice.ts` | Redux slice for progress |
| Create | `src/features/progress/infrastructure/adapters/storageAdapter.ts` | `StorageAdapter` interface + `localStorageAdapter` impl |
| Create | `src/features/progress/infrastructure/middleware/localStorageMiddleware.ts` | Persist progress on every Redux action |
| Modify | `src/shared/lib/store/rootReducer.ts` | Add `progress` reducer |
| Modify | `src/shared/lib/store/index.ts` | Add localStorage middleware + hydrate on startup |
| Create | `src/features/exercises/infrastructure/data/array/demo.ts` | Demo `Array.from()` exercise (5 tests) |
| Create | `src/features/exercises/infrastructure/data/index.ts` | Aggregate all exercise data |
| Create | `src/features/exercises/infrastructure/repositories/exerciseRepository.ts` | `getExerciseBySlug`, `getAllExercisesByObject`, `getAvailableObjects` |
| Create | `src/features/exercises/presentation/hooks/useExerciseRunner.ts` | Hook: code state, run, results, dispatch progress |
| Create | `src/features/exercises/presentation/components/TestPanel.tsx` | Renders ✅/❌ per test case |
| Create | `src/features/exercises/presentation/components/ExerciseSidebar.tsx` | Category nav with completion icons |
| Create | `src/features/exercises/presentation/components/ExerciseCard.tsx` | Card for exercise list |
| Create | `src/features/exercises/presentation/components/ExerciseListView.tsx` | Grouped exercise list (client) |
| Create | `src/features/exercises/presentation/components/ExerciseRunner.tsx` | Monaco + Run button + TestPanel (client) |
| Create | `src/features/exercises/presentation/components/ExerciseDetailView.tsx` | Layout: sidebar + description + runner |
| Create | `src/app/exercises/[object]/page.tsx` | Exercise list route (server) |
| Create | `src/app/exercises/[object]/[slug]/page.tsx` | Exercise detail route (server) |
| Modify | `src/app/layout.tsx` | Add `StoreProvider`, update metadata |
| Modify | `src/features/home/presentation/components/HomeView.tsx` | Add link to exercises |

---

## Task 1: Install Dependencies

**Files:**
- Modify: `package.json` (via pnpm)

- [ ] **Step 1: Install runtime packages**

```bash
cd /path/to/project
pnpm add @monaco-editor/react @babel/standalone
```

Expected output: packages added, `pnpm-lock.yaml` updated.

- [ ] **Step 2: Install type declarations**

```bash
pnpm add -D @types/babel__standalone
```

Expected output: dev dependency added.

- [ ] **Step 3: Verify install**

```bash
pnpm build 2>&1 | tail -5
```

Expected: build succeeds (no new errors introduced by the empty installs).

- [ ] **Step 4: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "deps: add @monaco-editor/react and @babel/standalone"
```

---

## Task 2: Shared Exercise Types

**Files:**
- Create: `src/shared/types/exercises.ts`

- [ ] **Step 1: Create the types file**

```typescript
// src/shared/types/exercises.ts

export type ExerciseCategory =
  | 'constructor'
  | 'static-property'
  | 'static-method'
  | 'instance-method'
  | 'instance-property'
  | 'inheritance'

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface TestCase {
  description: string
  /** Inline JS/TS expression using the `expect()` API, e.g. `expect(fn('a')).toEqual(['a'])` */
  assertion: string
}

export interface Exercise {
  slug: string
  title: string
  description: string
  category: ExerciseCategory
  difficulty: Difficulty
  builtIn: string      // e.g. 'Array'
  method?: string      // e.g. 'Array.from'
  initialCode: string
  solution: string
  tests: TestCase[]
  hints?: string[]
  tags: string[]
}

export interface TestResult {
  description: string
  passed: boolean
  error?: string
}

export interface RunResult {
  results: TestResult[]
  runtimeError?: string
}
```

- [ ] **Step 2: Export from shared types barrel**

Open `src/shared/types/index.ts` and add:

```typescript
// src/shared/types/index.ts
export * from './exercises'
```

- [ ] **Step 3: Verify TypeScript**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no new errors.

- [ ] **Step 4: Commit**

```bash
git add src/shared/types/
git commit -m "feat: add shared exercise types"
```

---

## Task 3: Test Framework (runs inside Web Worker)

**Files:**
- Create: `src/shared/lib/worker/testFramework.ts`

- [ ] **Step 1: Create the test framework**

```typescript
// src/shared/lib/worker/testFramework.ts

import type { TestResult } from '@/shared/types/exercises'

interface Matchers {
  toBe(expected: unknown): void
  toEqual(expected: unknown): void
  toStrictEqual(expected: unknown): void
  toBeTruthy(): void
  toBeFalsy(): void
  toContain(item: unknown): void
  toHaveLength(length: number): void
  toBeNull(): void
  toBeUndefined(): void
  toThrow(message?: string): void
}

export interface TestFramework {
  describe: (name: string, fn: () => void) => void
  it: (description: string, fn: () => void) => void
  expect: (actual: unknown) => Matchers
  getResults: () => TestResult[]
}

export function createTestFramework(): TestFramework {
  const results: TestResult[] = []

  const makeMatchers = (actual: unknown): Matchers => ({
    toBe(expected: unknown) {
      if (!Object.is(actual, expected)) {
        throw new Error(`Expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`)
      }
    },
    toEqual(expected: unknown) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}`)
      }
    },
    toStrictEqual(expected: unknown) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${JSON.stringify(actual)} to strictly equal ${JSON.stringify(expected)}`)
      }
    },
    toBeTruthy() {
      if (!actual) throw new Error(`Expected ${JSON.stringify(actual)} to be truthy`)
    },
    toBeFalsy() {
      if (actual) throw new Error(`Expected ${JSON.stringify(actual)} to be falsy`)
    },
    toContain(item: unknown) {
      if (Array.isArray(actual)) {
        if (!actual.includes(item)) {
          throw new Error(`Expected array to contain ${JSON.stringify(item)}`)
        }
      } else if (typeof actual === 'string') {
        if (!actual.includes(String(item))) {
          throw new Error(`Expected string to contain ${JSON.stringify(item)}`)
        }
      } else {
        throw new Error('toContain can only be used with arrays or strings')
      }
    },
    toHaveLength(length: number) {
      const actual_ = actual as { length?: number }
      if (actual_?.length !== length) {
        throw new Error(`Expected length ${actual_?.length} to be ${length}`)
      }
    },
    toBeNull() {
      if (actual !== null) throw new Error(`Expected ${JSON.stringify(actual)} to be null`)
    },
    toBeUndefined() {
      if (actual !== undefined) {
        throw new Error(`Expected ${JSON.stringify(actual)} to be undefined`)
      }
    },
    toThrow(message?: string) {
      if (typeof actual !== 'function') throw new Error('toThrow requires a function argument')
      let threw = false
      try {
        ;(actual as () => void)()
      } catch (err) {
        threw = true
        if (message && !(err as Error).message?.includes(message)) {
          throw new Error(
            `Expected error message to include "${message}" but got "${(err as Error).message}"`,
          )
        }
      }
      if (!threw) throw new Error('Expected function to throw, but it did not')
    },
  })

  const it = (description: string, fn: () => void) => {
    try {
      fn()
      results.push({ description, passed: true })
    } catch (err) {
      results.push({ description, passed: false, error: (err as Error).message })
    }
  }

  const describe = (_name: string, fn: () => void) => {
    fn()
  }

  return {
    describe,
    it,
    expect: makeMatchers,
    getResults: () => [...results],
  }
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no new errors.

- [ ] **Step 3: Commit**

```bash
git add src/shared/lib/worker/testFramework.ts
git commit -m "feat: add in-worker test framework (describe/it/expect)"
```

---

## Task 4: Web Worker Executor

**Files:**
- Create: `src/shared/lib/worker/executor.worker.ts`

- [ ] **Step 1: Create the worker file**

```typescript
// src/shared/lib/worker/executor.worker.ts
/// <reference lib="webworker" />

import * as Babel from '@babel/standalone'
import { createTestFramework } from './testFramework'
import type { TestCase, RunResult } from '@/shared/types/exercises'

interface WorkerInput {
  code: string
  tests: TestCase[]
}

self.onmessage = (event: MessageEvent<WorkerInput>) => {
  const { code, tests } = event.data
  const result = executeCode(code, tests)
  self.postMessage(result)
}

function executeCode(code: string, tests: TestCase[]): RunResult {
  try {
    const transpileResult = Babel.transform(code, {
      presets: ['typescript'],
      filename: 'exercise.ts',
    })
    const transpiled = transpileResult.code ?? ''

    const { describe, it, expect, getResults } = createTestFramework()

    const testBlock = tests
      .map((t) => `it(${JSON.stringify(t.description)}, () => { ${t.assertion} })`)
      .join('\n')

    // eslint-disable-next-line no-new-func
    const runner = new Function('describe', 'it', 'expect', `${transpiled}\n${testBlock}`)
    runner(describe, it, expect)

    return { results: getResults() }
  } catch (err) {
    return {
      results: [],
      runtimeError: (err as Error).message,
    }
  }
}
```

- [ ] **Step 2: Verify TypeScript compiles (worker errors may show; the `/// <reference lib="webworker" />` may conflict with `dom` lib — that is expected and acceptable at build time since Next.js/webpack bundles the worker separately)**

```bash
pnpm build 2>&1 | grep -E "executor.worker" | head -10
```

Expected: no errors specific to `executor.worker.ts`.

- [ ] **Step 3: Commit**

```bash
git add src/shared/lib/worker/executor.worker.ts
git commit -m "feat: add web worker executor with Babel TypeScript transpilation"
```

---

## Task 5: WorkerEngine Class

**Files:**
- Create: `src/shared/lib/worker/workerEngine.ts`

- [ ] **Step 1: Create the WorkerEngine**

```typescript
// src/shared/lib/worker/workerEngine.ts

import type { TestCase, RunResult } from '@/shared/types/exercises'

const TIMEOUT_MS = 5000

export class WorkerEngine {
  private worker: Worker

  constructor() {
    this.worker = new Worker(
      new URL('./executor.worker.ts', import.meta.url),
      { type: 'module' },
    )
  }

  run(code: string, tests: TestCase[]): Promise<RunResult> {
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        this.reset()
        resolve({
          results: [],
          runtimeError: 'Execution timed out (5 second limit). Check for infinite loops.',
        })
      }, TIMEOUT_MS)

      const messageHandler = (event: MessageEvent<RunResult>) => {
        clearTimeout(timeout)
        this.worker.removeEventListener('message', messageHandler)
        this.worker.removeEventListener('error', errorHandler)
        resolve(event.data)
      }

      const errorHandler = (event: ErrorEvent) => {
        clearTimeout(timeout)
        this.worker.removeEventListener('message', messageHandler)
        this.worker.removeEventListener('error', errorHandler)
        resolve({ results: [], runtimeError: event.message })
      }

      this.worker.addEventListener('message', messageHandler)
      this.worker.addEventListener('error', errorHandler)
      this.worker.postMessage({ code, tests })
    })
  }

  /** Terminates the current worker and spawns a fresh one (used after timeout). */
  private reset() {
    this.worker.terminate()
    this.worker = new Worker(
      new URL('./executor.worker.ts', import.meta.url),
      { type: 'module' },
    )
  }

  terminate() {
    this.worker.terminate()
  }
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no new errors.

- [ ] **Step 3: Commit**

```bash
git add src/shared/lib/worker/workerEngine.ts
git commit -m "feat: add WorkerEngine (lifecycle, timeout, reset)"
```

---

## Task 6: Progress Domain Types + Redux Slice

**Files:**
- Create: `src/features/progress/domain/entities/index.ts`
- Create: `src/features/progress/presentation/store/progressSlice.ts`

- [ ] **Step 1: Create domain entities**

```typescript
// src/features/progress/domain/entities/index.ts

export interface ExerciseProgress {
  status: 'not-started' | 'attempted' | 'completed'
  attempts: number
  lastCode: string
  completedAt?: string
}

export interface ProgressState {
  exercises: Record<string, ExerciseProgress>
}
```

- [ ] **Step 2: Create the Redux slice**

```typescript
// src/features/progress/presentation/store/progressSlice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ExerciseProgress, ProgressState } from '@/features/progress/domain/entities'

const initialState: ProgressState = {
  exercises: {},
}

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    updateProgress: (
      state,
      action: PayloadAction<{
        slug: string
        status: ExerciseProgress['status']
        lastCode: string
      }>,
    ) => {
      const { slug, status, lastCode } = action.payload
      const existing = state.exercises[slug]
      state.exercises[slug] = {
        status,
        attempts: (existing?.attempts ?? 0) + 1,
        lastCode,
        completedAt:
          status === 'completed'
            ? new Date().toISOString()
            : existing?.completedAt,
      }
    },
    hydrateProgress: (_state, action: PayloadAction<ProgressState>) => {
      return action.payload
    },
  },
})

export const { updateProgress, hydrateProgress } = progressSlice.actions
export default progressSlice.reducer
```

- [ ] **Step 3: Verify TypeScript**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/features/progress/
git commit -m "feat: add progress domain types and Redux slice"
```

---

## Task 7: Storage Adapter + localStorage Middleware

**Files:**
- Create: `src/features/progress/infrastructure/adapters/storageAdapter.ts`
- Create: `src/features/progress/infrastructure/middleware/localStorageMiddleware.ts`

- [ ] **Step 1: Create the storage adapter interface + localStorage implementation**

```typescript
// src/features/progress/infrastructure/adapters/storageAdapter.ts

import type { ProgressState } from '@/features/progress/domain/entities'

const STORAGE_KEY = 'js-practice-progress'

export interface StorageAdapter {
  load(): ProgressState | null
  save(state: ProgressState): void
}

export const localStorageAdapter: StorageAdapter = {
  load(): ProgressState | null {
    if (typeof window === 'undefined') return null
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as ProgressState) : null
    } catch {
      return null
    }
  },

  save(state: ProgressState): void {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Storage quota exceeded or unavailable — silently ignore
    }
  },
}
```

- [ ] **Step 2: Create the localStorage middleware**

```typescript
// src/features/progress/infrastructure/middleware/localStorageMiddleware.ts

import type { Middleware } from '@reduxjs/toolkit'
import type { RootState } from '@/shared/lib/store'
import { localStorageAdapter } from '../adapters/storageAdapter'

export const localStorageMiddleware: Middleware<Record<string, never>, RootState> =
  (store) => (next) => (action) => {
    const result = next(action)
    localStorageAdapter.save(store.getState().progress)
    return result
  }
```

- [ ] **Step 3: Verify TypeScript**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no errors. (Note: `RootState` import in the middleware may temporarily fail until Task 8 adds `progress` to the store — that is expected and will be resolved in Task 8.)

- [ ] **Step 4: Commit**

```bash
git add src/features/progress/infrastructure/
git commit -m "feat: add StorageAdapter interface and localStorage middleware"
```

---

## Task 8: Wire Progress into the Redux Store

**Files:**
- Modify: `src/shared/lib/store/rootReducer.ts`
- Modify: `src/shared/lib/store/index.ts`

- [ ] **Step 1: Add `progress` reducer to rootReducer**

Replace the entire contents of `src/shared/lib/store/rootReducer.ts`:

```typescript
// src/shared/lib/store/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit'
import homeReducer from '@/features/home/presentation/store/homeSlice'
import progressReducer from '@/features/progress/presentation/store/progressSlice'

export const rootReducer = combineReducers({
  home: homeReducer,
  progress: progressReducer,
})

export type RootState = ReturnType<typeof rootReducer>
```

- [ ] **Step 2: Add middleware and localStorage hydration to the store**

Replace the entire contents of `src/shared/lib/store/index.ts`:

```typescript
// src/shared/lib/store/index.ts

import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { localStorageMiddleware } from '@/features/progress/infrastructure/middleware/localStorageMiddleware'
import { localStorageAdapter } from '@/features/progress/infrastructure/adapters/storageAdapter'
import { hydrateProgress } from '@/features/progress/presentation/store/progressSlice'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})

// Hydrate progress from localStorage on startup (client-side only)
const savedProgress = localStorageAdapter.load()
if (savedProgress) {
  store.dispatch(hydrateProgress(savedProgress))
}

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
```

- [ ] **Step 3: Verify build passes**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/shared/lib/store/
git commit -m "feat: wire progress reducer and localStorage middleware into Redux store"
```

---

## Task 9: Demo Exercise Data

**Files:**
- Create: `src/features/exercises/infrastructure/data/array/demo.ts`
- Create: `src/features/exercises/infrastructure/data/index.ts`

- [ ] **Step 1: Create the demo Array.from() exercise**

```typescript
// src/features/exercises/infrastructure/data/array/demo.ts

import type { Exercise } from '@/shared/types/exercises'

export const arrayFromString: Exercise = {
  slug: 'array-from-string',
  title: 'Array.from() — convert a string to chars',
  description: `## Array.from()

\`Array.from()\` creates a new array from an iterable or array-like object.
Since strings are iterable in JavaScript, you can use \`Array.from()\` to split them into individual characters.

**Challenge:** Implement \`stringToChars\` using \`Array.from()\` to convert a string into an array of its characters.

\`\`\`ts
stringToChars('hello') // → ['h', 'e', 'l', 'l', 'o']
stringToChars('')      // → []
\`\`\``,
  category: 'static-method',
  difficulty: 'beginner',
  builtIn: 'Array',
  method: 'Array.from',
  initialCode: `function stringToChars(str: string): string[] {
  // Use Array.from() to convert the string into an array of characters
}`,
  solution: `function stringToChars(str: string): string[] {
  return Array.from(str)
}`,
  tests: [
    {
      description: "stringToChars('hello') returns ['h','e','l','l','o']",
      assertion: "expect(stringToChars('hello')).toEqual(['h', 'e', 'l', 'l', 'o'])",
    },
    {
      description: 'empty string returns empty array',
      assertion: "expect(stringToChars('')).toEqual([])",
    },
    {
      description: 'single character returns single-element array',
      assertion: "expect(stringToChars('a')).toEqual(['a'])",
    },
    {
      description: 'special characters are preserved',
      assertion: "expect(stringToChars('!@#')).toEqual(['!', '@', '#'])",
    },
    {
      description: 'result has correct length',
      assertion: "expect(stringToChars('world')).toHaveLength(5)",
    },
  ],
  hints: [
    'Strings are iterable — Array.from() works on any iterable.',
    'Array.from(someString) iterates over each character.',
  ],
  tags: ['Array', 'Array.from', 'string', 'iterable', 'static-method'],
}
```

- [ ] **Step 2: Create the data aggregator**

```typescript
// src/features/exercises/infrastructure/data/index.ts

import type { Exercise } from '@/shared/types/exercises'
import { arrayFromString } from './array/demo'

export const allExercises: Exercise[] = [
  arrayFromString,
]
```

- [ ] **Step 3: Verify TypeScript**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/features/exercises/infrastructure/data/
git commit -m "feat: add demo Array.from() exercise"
```

---

## Task 10: Exercise Repository

**Files:**
- Create: `src/features/exercises/infrastructure/repositories/exerciseRepository.ts`

- [ ] **Step 1: Create the repository**

```typescript
// src/features/exercises/infrastructure/repositories/exerciseRepository.ts

import { allExercises } from '../data'
import type { Exercise } from '@/shared/types/exercises'

export function getExerciseBySlug(slug: string): Exercise | undefined {
  return allExercises.find((e) => e.slug === slug)
}

export function getAllExercisesByObject(objectName: string): Exercise[] {
  return allExercises.filter(
    (e) => e.builtIn.toLowerCase() === objectName.toLowerCase(),
  )
}

export function getAvailableObjects(): string[] {
  return [...new Set(allExercises.map((e) => e.builtIn))]
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/exercises/infrastructure/repositories/
git commit -m "feat: add exercise repository (getBySlug, getByObject, getObjects)"
```

---

## Task 11: useExerciseRunner Hook

**Files:**
- Create: `src/features/exercises/presentation/hooks/useExerciseRunner.ts`

- [ ] **Step 1: Create the hook**

```typescript
// src/features/exercises/presentation/hooks/useExerciseRunner.ts
'use client'

import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WorkerEngine } from '@/shared/lib/worker/workerEngine'
import { updateProgress } from '@/features/progress/presentation/store/progressSlice'
import type { Exercise, RunResult } from '@/shared/types/exercises'
import type { AppDispatch, RootState } from '@/shared/lib/store'

export function useExerciseRunner(exercise: Exercise) {
  const dispatch = useDispatch<AppDispatch>()
  const savedProgress = useSelector(
    (state: RootState) => state.progress.exercises[exercise.slug],
  )

  const [code, setCode] = useState<string>(
    savedProgress?.lastCode ?? exercise.initialCode,
  )
  const [isRunning, setIsRunning] = useState(false)
  const [runResult, setRunResult] = useState<RunResult | null>(null)
  const engineRef = useRef<WorkerEngine | null>(null)

  useEffect(() => {
    engineRef.current = new WorkerEngine()
    return () => {
      engineRef.current?.terminate()
    }
  }, [])

  const run = async () => {
    if (!engineRef.current) return
    setIsRunning(true)
    try {
      const result = await engineRef.current.run(code, exercise.tests)
      setRunResult(result)
      const allPassed =
        result.results.length > 0 && result.results.every((r) => r.passed)
      dispatch(
        updateProgress({
          slug: exercise.slug,
          status: allPassed ? 'completed' : 'attempted',
          lastCode: code,
        }),
      )
    } finally {
      setIsRunning(false)
    }
  }

  const reset = () => {
    setCode(exercise.initialCode)
    setRunResult(null)
  }

  return { code, setCode, run, reset, isRunning, runResult }
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/exercises/presentation/hooks/
git commit -m "feat: add useExerciseRunner hook"
```

---

## Task 12: TestPanel Component

**Files:**
- Create: `src/features/exercises/presentation/components/TestPanel.tsx`

- [ ] **Step 1: Create TestPanel**

```tsx
// src/features/exercises/presentation/components/TestPanel.tsx
'use client'

import type { RunResult } from '@/shared/types/exercises'

interface TestPanelProps {
  result: RunResult
}

export function TestPanel({ result }: TestPanelProps) {
  const { results, runtimeError } = result
  const passedCount = results.filter((r) => r.passed).length
  const totalCount = results.length

  if (runtimeError) {
    return (
      <div className="border-t border-red-800 bg-red-950/60 p-4">
        <p className="text-sm font-semibold text-red-400">⚠ Runtime Error</p>
        <pre className="mt-2 overflow-auto text-xs text-red-300">{runtimeError}</pre>
      </div>
    )
  }

  return (
    <div className="border-t border-zinc-700 bg-zinc-900/80 p-4">
      <p className="mb-3 text-sm font-semibold text-zinc-300">
        Tests:{' '}
        <span className={passedCount === totalCount ? 'text-emerald-400' : 'text-amber-400'}>
          {passedCount}/{totalCount} passed
        </span>
      </p>
      <ul className="space-y-2">
        {results.map((r, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span
              className={`mt-0.5 shrink-0 font-mono font-bold ${
                r.passed ? 'text-emerald-400' : 'text-red-400'
              }`}
            >
              {r.passed ? '✓' : '✗'}
            </span>
            <div className="min-w-0">
              <span className="text-zinc-300">{r.description}</span>
              {r.error && (
                <pre className="mt-1 overflow-auto whitespace-pre-wrap text-xs text-red-400">
                  {r.error}
                </pre>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/exercises/presentation/components/TestPanel.tsx
git commit -m "feat: add TestPanel component"
```

---

## Task 13: ExerciseRunner Component (Monaco + Worker)

**Files:**
- Create: `src/features/exercises/presentation/components/ExerciseRunner.tsx`

- [ ] **Step 1: Create ExerciseRunner**

```tsx
// src/features/exercises/presentation/components/ExerciseRunner.tsx
'use client'

import dynamic from 'next/dynamic'
import { useExerciseRunner } from '../hooks/useExerciseRunner'
import { TestPanel } from './TestPanel'
import type { Exercise } from '@/shared/types/exercises'

// Load Monaco only on the client — it accesses browser globals
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

interface ExerciseRunnerProps {
  exercise: Exercise
}

export function ExerciseRunner({ exercise }: ExerciseRunnerProps) {
  const { code, setCode, run, reset, isRunning, runResult } = useExerciseRunner(exercise)

  return (
    <div className="flex h-full flex-col">
      {/* Editor */}
      <div className="min-h-0 flex-1">
        <MonacoEditor
          language="typescript"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value ?? '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            padding: { top: 16, bottom: 16 },
            fontFamily: 'var(--font-geist-mono), monospace',
          }}
        />
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3 border-t border-zinc-700 bg-zinc-900 px-4 py-3">
        <button
          onClick={run}
          disabled={isRunning}
          className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isRunning ? 'Running…' : '▶ Run Tests'}
        </button>
        <button
          onClick={reset}
          className="rounded-lg border border-zinc-600 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-400 hover:text-zinc-200"
        >
          Reset
        </button>
      </div>

      {/* Test Results */}
      {runResult && <TestPanel result={runResult} />}
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/exercises/presentation/components/ExerciseRunner.tsx
git commit -m "feat: add ExerciseRunner (Monaco Editor + Web Worker + TestPanel)"
```

---

## Task 14: ExerciseSidebar + ExerciseCard + ExerciseListView

**Files:**
- Create: `src/features/exercises/presentation/components/ExerciseSidebar.tsx`
- Create: `src/features/exercises/presentation/components/ExerciseCard.tsx`
- Create: `src/features/exercises/presentation/components/ExerciseListView.tsx`

- [ ] **Step 1: Create ExerciseSidebar**

```tsx
// src/features/exercises/presentation/components/ExerciseSidebar.tsx
'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import type { Exercise, ExerciseCategory } from '@/shared/types/exercises'

const CATEGORY_LABELS: Record<ExerciseCategory, string> = {
  constructor: 'Constructor',
  'static-property': 'Static Properties',
  'static-method': 'Static Methods',
  'instance-method': 'Instance Methods',
  'instance-property': 'Instance Properties',
  inheritance: 'Inheritance',
}

const STATUS_ICON: Record<string, string> = {
  completed: '✓',
  attempted: '○',
  'not-started': '·',
}

interface ExerciseSidebarProps {
  exercises: Exercise[]
  activeSlug: string
  objectName: string
}

export function ExerciseSidebar({ exercises, activeSlug, objectName }: ExerciseSidebarProps) {
  const progressMap = useSelector((state: RootState) => state.progress.exercises)

  const grouped = exercises.reduce<Partial<Record<ExerciseCategory, Exercise[]>>>(
    (acc, ex) => {
      if (!acc[ex.category]) acc[ex.category] = []
      acc[ex.category]!.push(ex)
      return acc
    },
    {},
  )

  return (
    <nav className="w-56 shrink-0 overflow-y-auto border-r border-zinc-700 bg-zinc-900 p-4">
      <Link
        href={`/exercises/${objectName}`}
        className="mb-5 block text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-zinc-300"
      >
        ← {objectName}
      </Link>
      {(Object.entries(grouped) as [ExerciseCategory, Exercise[]][]).map(([cat, items]) => (
        <div key={cat} className="mb-5">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-600">
            {CATEGORY_LABELS[cat]}
          </p>
          <ul className="space-y-0.5">
            {items.map((ex) => {
              const prog = progressMap[ex.slug]
              const isActive = ex.slug === activeSlug
              const icon = STATUS_ICON[prog?.status ?? 'not-started']
              return (
                <li key={ex.slug}>
                  <Link
                    href={`/exercises/${objectName}/${ex.slug}`}
                    className={`flex items-center gap-2 rounded px-2 py-1.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-zinc-700 text-white'
                        : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
                    }`}
                  >
                    <span
                      className={`text-xs ${
                        prog?.status === 'completed' ? 'text-emerald-400' : 'text-zinc-600'
                      }`}
                    >
                      {icon}
                    </span>
                    <span className="truncate">{ex.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
```

- [ ] **Step 2: Create ExerciseCard**

```tsx
// src/features/exercises/presentation/components/ExerciseCard.tsx
'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import type { Exercise } from '@/shared/types/exercises'

const DIFFICULTY_STYLES = {
  beginner: 'text-emerald-400 bg-emerald-900/40',
  intermediate: 'text-amber-400 bg-amber-900/40',
  advanced: 'text-red-400 bg-red-900/40',
}

interface ExerciseCardProps {
  exercise: Exercise
  objectName: string
}

export function ExerciseCard({ exercise, objectName }: ExerciseCardProps) {
  const progress = useSelector(
    (state: RootState) => state.progress.exercises[exercise.slug],
  )
  const isCompleted = progress?.status === 'completed'

  return (
    <Link
      href={`/exercises/${objectName}/${exercise.slug}`}
      className={`block rounded-xl border p-4 transition-colors ${
        isCompleted
          ? 'border-emerald-800/60 bg-emerald-900/20'
          : 'border-zinc-700 bg-zinc-800 hover:border-zinc-500'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold leading-snug text-zinc-200">{exercise.title}</h3>
        {isCompleted && <span className="shrink-0 text-emerald-400">✓</span>}
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span
          className={`rounded px-2 py-0.5 text-xs font-medium ${DIFFICULTY_STYLES[exercise.difficulty]}`}
        >
          {exercise.difficulty}
        </span>
        {exercise.method && (
          <code className="rounded bg-zinc-700 px-1.5 py-0.5 text-xs text-zinc-400">
            {exercise.method}
          </code>
        )}
      </div>
    </Link>
  )
}
```

- [ ] **Step 3: Create ExerciseListView**

```tsx
// src/features/exercises/presentation/components/ExerciseListView.tsx
'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { ExerciseCard } from './ExerciseCard'
import type { Exercise, ExerciseCategory } from '@/shared/types/exercises'

const CATEGORY_LABELS: Record<ExerciseCategory, string> = {
  constructor: 'Constructor',
  'static-property': 'Static Properties',
  'static-method': 'Static Methods',
  'instance-method': 'Instance Methods',
  'instance-property': 'Instance Properties',
  inheritance: 'Inheritance',
}

interface ExerciseListViewProps {
  objectName: string
  exercises: Exercise[]
}

export function ExerciseListView({ objectName, exercises }: ExerciseListViewProps) {
  const progressMap = useSelector((state: RootState) => state.progress.exercises)
  const completedCount = exercises.filter(
    (e) => progressMap[e.slug]?.status === 'completed',
  ).length

  const grouped = exercises.reduce<Partial<Record<ExerciseCategory, Exercise[]>>>(
    (acc, ex) => {
      if (!acc[ex.category]) acc[ex.category] = []
      acc[ex.category]!.push(ex)
      return acc
    },
    {},
  )

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-100">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-6 inline-block text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-zinc-300"
        >
          ← Home
        </Link>
        <div className="mb-8 flex items-end justify-between">
          <h1 className="text-3xl font-bold">
            <code className="text-emerald-400">{objectName}</code>
          </h1>
          <p className="text-sm text-zinc-400">
            {completedCount}/{exercises.length} completed
          </p>
        </div>
        <div className="space-y-10">
          {(Object.entries(grouped) as [ExerciseCategory, Exercise[]][]).map(
            ([cat, items]) => (
              <section key={cat}>
                <h2 className="mb-4 text-lg font-semibold text-zinc-300">
                  {CATEGORY_LABELS[cat]}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((ex) => (
                    <ExerciseCard
                      key={ex.slug}
                      exercise={ex}
                      objectName={objectName.toLowerCase()}
                    />
                  ))}
                </div>
              </section>
            ),
          )}
        </div>
      </div>
    </main>
  )
}
```

- [ ] **Step 4: Verify TypeScript**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/features/exercises/presentation/components/
git commit -m "feat: add ExerciseSidebar, ExerciseCard, and ExerciseListView components"
```

---

## Task 15: ExerciseDetailView

**Files:**
- Create: `src/features/exercises/presentation/components/ExerciseDetailView.tsx`

- [ ] **Step 1: Create ExerciseDetailView**

```tsx
// src/features/exercises/presentation/components/ExerciseDetailView.tsx

import { ExerciseRunner } from './ExerciseRunner'
import { ExerciseSidebar } from './ExerciseSidebar'
import { getAllExercisesByObject } from '../../infrastructure/repositories/exerciseRepository'
import type { Exercise } from '@/shared/types/exercises'

interface ExerciseDetailViewProps {
  exercise: Exercise
}

export function ExerciseDetailView({ exercise }: ExerciseDetailViewProps) {
  const objectName = exercise.builtIn.toLowerCase()
  const allObjectExercises = getAllExercisesByObject(objectName)

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Sidebar */}
      <ExerciseSidebar
        exercises={allObjectExercises}
        activeSlug={exercise.slug}
        objectName={objectName}
      />

      {/* Main area */}
      <div className="flex min-w-0 flex-1">
        {/* Description panel */}
        <div className="w-96 shrink-0 overflow-y-auto border-r border-zinc-700 p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded bg-zinc-800 px-2 py-1 text-xs font-medium text-emerald-400">
              {exercise.builtIn}
            </span>
            {exercise.method && (
              <code className="rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-400">
                {exercise.method}
              </code>
            )}
            <span
              className={`rounded px-2 py-1 text-xs font-medium capitalize ${
                exercise.difficulty === 'beginner'
                  ? 'bg-emerald-900/40 text-emerald-400'
                  : exercise.difficulty === 'intermediate'
                    ? 'bg-amber-900/40 text-amber-400'
                    : 'bg-red-900/40 text-red-400'
              }`}
            >
              {exercise.difficulty}
            </span>
          </div>
          <h1 className="mb-4 text-xl font-bold leading-snug">{exercise.title}</h1>
          <div className="whitespace-pre-wrap text-sm leading-7 text-zinc-300">
            {exercise.description}
          </div>
          {exercise.hints && exercise.hints.length > 0 && (
            <details className="mt-6">
              <summary className="cursor-pointer text-sm font-semibold text-zinc-500 hover:text-zinc-300">
                💡 Hints ({exercise.hints.length})
              </summary>
              <ul className="mt-3 space-y-2">
                {exercise.hints.map((hint, i) => (
                  <li key={i} className="text-sm text-zinc-400">
                    • {hint}
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>

        {/* Editor + Tests */}
        <div className="flex min-w-0 flex-1 flex-col">
          <ExerciseRunner exercise={exercise} />
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/exercises/presentation/components/ExerciseDetailView.tsx
git commit -m "feat: add ExerciseDetailView layout (sidebar + description + editor)"
```

---

## Task 16: App Routes

**Files:**
- Create: `src/app/exercises/[object]/page.tsx`
- Create: `src/app/exercises/[object]/[slug]/page.tsx`

- [ ] **Step 1: Create exercise list route**

```tsx
// src/app/exercises/[object]/page.tsx

import { notFound } from 'next/navigation'
import {
  getAllExercisesByObject,
} from '@/features/exercises/infrastructure/repositories/exerciseRepository'
import { ExerciseListView } from '@/features/exercises/presentation/components/ExerciseListView'

interface Props {
  params: Promise<{ object: string }>
}

export default async function ExerciseListPage({ params }: Props) {
  const { object } = await params
  const exercises = getAllExercisesByObject(object)
  if (exercises.length === 0) notFound()
  return <ExerciseListView objectName={object} exercises={exercises} />
}
```

- [ ] **Step 2: Create exercise detail route**

```tsx
// src/app/exercises/[object]/[slug]/page.tsx

import { notFound } from 'next/navigation'
import { getExerciseBySlug } from '@/features/exercises/infrastructure/repositories/exerciseRepository'
import { ExerciseDetailView } from '@/features/exercises/presentation/components/ExerciseDetailView'

interface Props {
  params: Promise<{ object: string; slug: string }>
}

export default async function ExerciseDetailPage({ params }: Props) {
  const { slug } = await params
  const exercise = getExerciseBySlug(slug)
  if (!exercise) notFound()
  return <ExerciseDetailView exercise={exercise} />
}
```

- [ ] **Step 3: Verify build**

```bash
pnpm build 2>&1 | grep -E "error|Error" | head -10
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/exercises/
git commit -m "feat: add exercise list and detail route pages"
```

---

## Task 17: Wire Up Layout + Update Home

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/features/home/presentation/components/HomeView.tsx`

- [ ] **Step 1: Add StoreProvider to root layout and update metadata**

Replace `src/app/layout.tsx`:

```tsx
// src/app/layout.tsx

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { StoreProvider } from '@/shared/providers/StoreProvider'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'JS Practice — Built-in Objects',
  description:
    'Interactive JavaScript/TypeScript exercises for every standard built-in object method, inspired by Codewars.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Update HomeView to include exercises link**

Replace `src/features/home/presentation/components/HomeView.tsx`:

```tsx
// src/features/home/presentation/components/HomeView.tsx

import Link from 'next/link'
import { getAvailableObjects } from '@/features/exercises/infrastructure/repositories/exerciseRepository'

export default function HomeView() {
  const objects = getAvailableObjects()

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8f5ef_0%,#ece7de_100%)] px-6 py-16 text-zinc-950">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Hero */}
        <section className="rounded-[2rem] bg-white/90 p-8 shadow-[0_24px_80px_rgba(32,24,16,0.08)] backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            JavaScript Practice
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Master the Standard Built-in Objects
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
            Interactive TypeScript exercises for every constructor, static method, instance method,
            and property — inspired by Codewars and Codility.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-600">
            <span className="rounded-full bg-stone-100 px-4 py-2">Monaco Editor</span>
            <span className="rounded-full bg-stone-100 px-4 py-2">In-browser tests</span>
            <span className="rounded-full bg-stone-100 px-4 py-2">TypeScript</span>
            <span className="rounded-full bg-stone-100 px-4 py-2">Progress tracking</span>
          </div>
        </section>

        {/* Built-in objects grid */}
        <section>
          <h2 className="mb-5 text-xl font-semibold text-zinc-800">
            Built-in Objects
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {objects.map((obj) => (
              <Link
                key={obj}
                href={`/exercises/${obj.toLowerCase()}`}
                className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-6 py-5 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
              >
                <code className="text-lg font-semibold text-zinc-800">{obj}</code>
                <span className="text-zinc-400">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Legacy demos */}
        <section>
          <h2 className="mb-5 text-xl font-semibold text-zinc-800">
            Redux Architecture Examples
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white transition-transform hover:-translate-y-1"
              href="/redux-legacy"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-stone-300">Página 01</p>
              <h3 className="mt-3 text-2xl font-semibold">Redux legacy</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                Action types, action creators, reducer manual y legacy_createStore.
              </p>
            </Link>
            <Link
              className="rounded-[2rem] border border-emerald-200 bg-emerald-100 p-8 text-emerald-950 transition-transform hover:-translate-y-1"
              href="/redux-toolkit"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">Página 02</p>
              <h3 className="mt-3 text-2xl font-semibold">Redux Toolkit</h3>
              <p className="mt-3 text-sm leading-7 text-emerald-800">
                configureStore, slice, selectors memoizados y thunk.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
```

- [ ] **Step 3: Verify full build**

```bash
pnpm build 2>&1 | tail -20
```

Expected: build completes without errors. All routes listed (`/`, `/exercises/array`, `/exercises/array/array-from-string`).

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx src/features/home/
git commit -m "feat: wire StoreProvider to layout and update Home with exercises grid"
```

---

## Task 18: End-to-End Validation

**No new files.** This task validates the full pipeline works.

- [ ] **Step 1: Start dev server**

```bash
pnpm dev
```

Expected: server starts on `http://localhost:3000`.

- [ ] **Step 2: Verify Home page**

Open `http://localhost:3000`.

Expected: Hero section + "Array" card in the Built-in Objects grid.

- [ ] **Step 3: Verify exercise list**

Open `http://localhost:3000/exercises/array`.

Expected: Page shows "Array" heading + one exercise card "Array.from() — convert a string to chars" under "Static Methods".

- [ ] **Step 4: Verify exercise detail — wrong answer**

Open `http://localhost:3000/exercises/array/array-from-string`.

Expected:
- Sidebar shows the exercise
- Description panel shows the challenge
- Monaco editor pre-filled with `initialCode`
- Click "▶ Run Tests" → 5 tests fail (function returns `undefined`)

- [ ] **Step 5: Verify exercise detail — correct answer**

In the Monaco editor, replace the code with:
```typescript
function stringToChars(str: string): string[] {
  return Array.from(str)
}
```

Click "▶ Run Tests".

Expected: all 5 tests pass (✓). Status updates to "completed" in the sidebar.

- [ ] **Step 6: Verify persistence**

Reload the page (`Ctrl+R` or `Cmd+R`).

Expected: the editor still contains the correct solution (loaded from localStorage), and the sidebar still shows ✓ for the exercise.

- [ ] **Step 7: Final commit**

```bash
git add -A
git commit -m "feat: Phase 1 complete — JS practice platform core infrastructure

- Monaco Editor + Web Worker + Babel TypeScript execution engine
- describe/it/expect test framework running in isolated worker thread
- Redux progress store with localStorage persistence
- Exercise routing: /exercises/[object] and /exercises/[object]/[slug]
- Demo exercise: Array.from() with 5 test cases validates full pipeline"
```
