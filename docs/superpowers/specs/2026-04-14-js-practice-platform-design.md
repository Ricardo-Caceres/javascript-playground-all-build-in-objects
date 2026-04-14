# JS Practice Platform — Design Spec

**Date:** 2026-04-14  
**Status:** Approved

## Problem Statement

Transform this Next.js playground into a JavaScript/TypeScript practice platform inspired by Codewars and Codility, focused on deep coverage of JavaScript Standard Built-in Objects. Each built-in is explored across all its surface area: constructors, static properties, static methods, instance properties, instance methods, and inheritance.

## Goals

- Interactive code editor (Monaco) with TypeScript support
- Automated test validation running in the browser (no server required)
- Progress tracking per exercise (localStorage, extensible to Supabase)
- Structured coverage: ≥5 exercises per constructor, ≥5 per static property, ≥5 per static method, ≥5 per instance method, ≥5 per instance property, ≥5 for inheritance
- Starting scope: `Array`, `String`, `Object` — then all other standard built-ins
- TypeScript-first exercises with type annotations in both problem and solution

---

## Architecture

### Tech Stack

| Concern | Technology |
|---------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind v4 |
| Editor | `@monaco-editor/react` |
| Code execution | Web Worker + `@babel/standalone` (TypeScript→JS transpile) |
| State | Redux Toolkit (progress) + localStorage middleware |
| Language | TypeScript |

### Routing

```
/                              → Home: grid of all built-in objects with progress
/exercises/[object]            → List of exercises for one built-in (e.g. /exercises/array)
/exercises/[object]/[slug]     → Individual exercise: editor + tests + nav
```

### Core Components

| Component | Responsibility |
|-----------|---------------|
| `ExerciseRunner` | Mounts Monaco Editor, run button, dispatches code to Worker |
| `TestPanel` | Renders ✅/❌ per test case with diff/message |
| `ExerciseSidebar` | Categories tree (Constructor, Static Methods…) with completion badges |
| `WorkerEngine` | Manages lifecycle of Web Worker: transpile → execute → return results |
| `ProgressBar` | Per-object completion percentage |

### Code Execution Flow

```
User clicks "Run"
  → WorkerEngine.run(code: string, tests: TestCase[])
    → Web Worker: Babel.transform(code, { presets: ['typescript'] })
    → Web Worker: new Function(transpiledCode)() 
    → Web Worker: run each TestCase assertion
    → postMessage({ results: TestResult[] })
  → TestPanel re-renders with results
```

The Worker runs in a separate thread. Execution is timeout-guarded (5s max). The Worker has no access to DOM, fetch, or localStorage — only pure JS execution.

### Test Framework (minimal, in-Worker)

A lightweight `describe/it/expect` API injected before the user's code runs:

```ts
describe('Array.from', () => {
  it('converts a string to array', () => {
    expect(Array.from('abc')).toEqual(['a', 'b', 'c'])
  })
})
```

Supported matchers: `toBe`, `toEqual`, `toStrictEqual`, `toBeTruthy`, `toBeFalsy`, `toThrow`, `toContain`, `toHaveLength`, `toBeNull`, `toBeUndefined`.

### Exercise Data Schema

```ts
interface Exercise {
  slug: string               // 'array-from-string'
  title: string              // 'Array.from() with a string'
  description: string        // Markdown, explains the challenge
  category: ExerciseCategory
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  builtIn: string            // 'Array'
  method?: string            // 'Array.from'
  initialCode: string        // TypeScript starter code shown in editor
  solution: string           // Correct solution (hidden; shown on demand after 3 attempts)
  tests: TestCase[]
  hints?: string[]
  tags: string[]
}

type ExerciseCategory =
  | 'constructor'
  | 'static-property'
  | 'static-method'
  | 'instance-method'
  | 'instance-property'
  | 'inheritance'

interface TestCase {
  description: string
  assertion: string          // inline runnable code, returns boolean or throws
}
```

All exercise data lives in `src/features/exercises/data/[object]/` as TypeScript files. They are imported statically — no database needed until Supabase phase.

### Progress Store

```ts
// Redux slice: src/features/progress/progressSlice.ts
interface ProgressState {
  exercises: Record<string, ExerciseProgress>
}

interface ExerciseProgress {
  status: 'not-started' | 'attempted' | 'completed'
  attempts: number
  lastCode: string
  completedAt?: string
}
```

A Redux middleware serializes `state.progress` to `localStorage` on every change. When the app loads, the store is hydrated from localStorage. The middleware interface is abstracted (`StorageAdapter`) so a future Supabase adapter can be swapped in without touching components or reducers.

---

## Phase Plan

### Phase 1 — Platform Core
**Deliverable:** Full platform infrastructure with zero exercises. A demo exercise is seeded to prove the system works end-to-end.

- Next.js routing setup
- Monaco Editor (`@monaco-editor/react`) with TypeScript language service
- Web Worker + Babel execution engine
- Mini test framework (describe/it/expect)
- Redux progress slice + localStorage middleware
- Home page (object grid)
- Exercise list page
- Exercise detail page (editor + test panel + sidebar nav)
- Demo exercise: one `Array.from()` exercise to validate the full pipeline

### Phase 2 — Array (Complete Coverage)
Sub-phases to keep PRs manageable:

| Sub-phase | Content | ~Exercises |
|-----------|---------|-----------|
| 2a | Constructor (3 signatures) | 5 |
| 2b | Static Properties (`Array[Symbol.species]` note, `Array.length`) | 10 |
| 2c | Static Methods: `Array.from`, `Array.fromAsync`, `Array.isArray`, `Array.of` | 20 |
| 2d | Instance Methods — mutation: `push`, `pop`, `shift`, `unshift`, `splice`, `fill`, `copyWithin`, `reverse`, `sort` | 45 |
| 2e | Instance Methods — search/iteration: `find`, `findIndex`, `findLast`, `findLastIndex`, `indexOf`, `lastIndexOf`, `includes`, `some`, `every`, `forEach` | 50 |
| 2f | Instance Methods — transform: `map`, `filter`, `reduce`, `reduceRight`, `flat`, `flatMap`, `concat`, `slice`, `join` | 45 |
| 2g | Instance Methods — iterators + modern: `entries`, `keys`, `values`, `at`, `toReversed`, `toSorted`, `toSpliced`, `with`, `toString`, `toLocaleString` | 50 |
| 2h | Instance Properties (`length`) + Inheritance (Object.prototype methods on arrays) | 10 |

**Total Phase 2: ~235 exercises**

### Phase 3 — String (Complete Coverage)
Sub-phases:

| Sub-phase | Content | ~Exercises |
|-----------|---------|-----------|
| 3a | Constructor + Static Methods (`String.fromCharCode`, `String.fromCodePoint`, `String.raw`) | 20 |
| 3b | Instance Methods — search: `at`, `charAt`, `charCodeAt`, `codePointAt`, `indexOf`, `lastIndexOf`, `startsWith`, `endsWith`, `includes`, `search`, `match`, `matchAll` | 60 |
| 3c | Instance Methods — transform: `concat`, `padStart`, `padEnd`, `repeat`, `replace`, `replaceAll`, `slice`, `substring`, `toLowerCase`, `toUpperCase`, `toLocaleLowerCase`, `toLocaleUpperCase`, `trim`, `trimStart`, `trimEnd` | 75 |
| 3d | Instance Methods — misc: `split`, `normalize`, `localeCompare`, `toString`, `valueOf`, `[Symbol.iterator]` | 30 |
| 3e | Instance Properties (`length`) + Inheritance | 10 |

**Total Phase 3: ~195 exercises**

### Phase 4 — Object (Complete Coverage)

| Sub-phase | Content | ~Exercises |
|-----------|---------|-----------|
| 4a | Constructor + Static Properties | 10 |
| 4b | Static Methods — definition: `create`, `assign`, `defineProperty`, `defineProperties`, `freeze`, `seal`, `isFrozen`, `isSealed`, `preventExtensions`, `isExtensible` | 50 |
| 4c | Static Methods — inspection: `keys`, `values`, `entries`, `fromEntries`, `getOwnPropertyNames`, `getOwnPropertySymbols`, `getOwnPropertyDescriptor`, `getOwnPropertyDescriptors`, `getPrototypeOf`, `setPrototypeOf`, `hasOwn` | 55 |
| 4d | Instance Methods (`hasOwnProperty`, `isPrototypeOf`, `propertyIsEnumerable`, `toString`, `valueOf`, `toLocaleString`) + Inheritance | 35 |

**Total Phase 4: ~150 exercises**

### Phase 5 — Number, Boolean, BigInt
- `Number`: constructor, static props (`MAX_SAFE_INTEGER`, `MIN_SAFE_INTEGER`, `NaN`, `POSITIVE_INFINITY`, etc.), static methods (`isFinite`, `isInteger`, `isNaN`, `isSafeInteger`, `parseFloat`, `parseInt`), instance methods (`toFixed`, `toPrecision`, `toString`, `valueOf`)
- `Boolean`: constructor, instance methods
- `BigInt`: constructor, static methods, instance methods
- **~120 exercises**

### Phase 6 — Math
- All static properties (`PI`, `E`, `LN2`, `LOG2E`, etc.)
- All static methods (`abs`, `ceil`, `floor`, `round`, `sqrt`, `pow`, `min`, `max`, `random`, `sin`, `cos`, `tan`, `log`, `log2`, `log10`, `sign`, `trunc`, `hypot`, `clz32`, `fround`, `imul`, etc.)
- **~120 exercises**

### Phase 7 — Date
- Constructor (multiple signatures)
- Static methods (`Date.now`, `Date.parse`, `Date.UTC`)
- Instance methods (get*/set* family, `toISOString`, `toLocaleDateString`, etc.)
- **~150 exercises**

### Phase 8 — RegExp
- Constructor (literal + `new RegExp`)
- Static/instance properties (`flags`, `source`, `global`, `sticky`, etc.)
- Instance methods (`exec`, `test`, `toString`)
- Integration with String methods
- **~80 exercises**

### Phase 9 — Map, Set, WeakMap, WeakSet
- `Map`: constructor, size, `set`, `get`, `has`, `delete`, `clear`, `forEach`, `entries`, `keys`, `values`
- `Set`: constructor, size, `add`, `has`, `delete`, `clear`, `forEach`, `entries`, `keys`, `values`
- `WeakMap`, `WeakSet`: constructor + limited API
- **~120 exercises**

### Phase 10 — Promise, Async Patterns
- `Promise`: constructor, static methods (`resolve`, `reject`, `all`, `allSettled`, `any`, `race`), instance methods (`then`, `catch`, `finally`)
- `async/await` patterns as exercises
- **~80 exercises**

### Phase 11 — Symbol, Proxy, Reflect
- `Symbol`: constructor, well-known symbols (`Symbol.iterator`, `Symbol.toPrimitive`, etc.), static methods
- `Proxy`: constructor, all handler traps
- `Reflect`: all static methods
- **~100 exercises**

### Phase 12 — Error Types, JSON, Globals
- `Error` and subtypes (`TypeError`, `RangeError`, `SyntaxError`, etc.)
- `JSON`: `parse`, `stringify` with all options
- `globalThis`, `parseInt`, `parseFloat`, `isNaN`, `isFinite`, `encodeURIComponent`, `decodeURIComponent`
- **~80 exercises**

### Phase 13 — Supabase Integration
- Auth (email/password or GitHub OAuth)
- Migrate progress from localStorage to Supabase using the `StorageAdapter` interface
- Per-user progress dashboard
- **No new exercises — infrastructure only**

---

## Exercise Count Summary

| Phase | Built-in(s) | ~Exercises |
|-------|-------------|-----------|
| 1 | Platform Core (1 demo) | 1 |
| 2 | Array | 235 |
| 3 | String | 195 |
| 4 | Object | 150 |
| 5 | Number, Boolean, BigInt | 120 |
| 6 | Math | 120 |
| 7 | Date | 150 |
| 8 | RegExp | 80 |
| 9 | Map, Set, WeakMap, WeakSet | 120 |
| 10 | Promise | 80 |
| 11 | Symbol, Proxy, Reflect | 100 |
| 12 | Error, JSON, Globals | 80 |
| **Total** | | **~1,431 exercises** |

---

## File Structure (target)

```
src/
├── app/
│   ├── page.tsx                          # Home
│   └── exercises/
│       ├── [object]/
│       │   ├── page.tsx                  # Exercise list
│       │   └── [slug]/
│       │       └── page.tsx              # Exercise detail
├── features/
│   ├── exercises/
│   │   ├── data/
│   │   │   ├── array/
│   │   │   │   ├── constructor.ts
│   │   │   │   ├── static-methods.ts
│   │   │   │   ├── instance-methods-mutation.ts
│   │   │   │   ├── instance-methods-search.ts
│   │   │   │   ├── instance-methods-transform.ts
│   │   │   │   ├── instance-methods-iterators.ts
│   │   │   │   └── instance-properties.ts
│   │   │   ├── string/
│   │   │   ├── object/
│   │   │   └── index.ts                 # Aggregates all exercises
│   │   ├── components/
│   │   │   ├── ExerciseRunner.tsx
│   │   │   ├── TestPanel.tsx
│   │   │   ├── ExerciseSidebar.tsx
│   │   │   └── ExerciseCard.tsx
│   │   ├── hooks/
│   │   │   └── useExerciseRunner.ts
│   │   └── worker/
│   │       ├── executor.worker.ts
│   │       └── testFramework.ts
│   └── progress/
│       ├── progressSlice.ts
│       ├── localStorageMiddleware.ts
│       └── storageAdapter.ts            # Interface for localStorage → Supabase swap
└── shared/
    ├── components/
    │   └── ProgressBadge.tsx
    └── types/
        └── exercises.ts
```

---

## Constraints & Decisions

- **No server required** until Phase 13 (Supabase). The platform works fully offline.
- **Babel `@babel/standalone`** is loaded lazily only when the first exercise is opened (~500kb gzipped).
- **Solution visibility**: shown only after ≥3 failed attempts, with a "Show solution" button.
- **Exercise data is static TypeScript files** — no CMS, no database in phases 1–12.
- **TypeScript exercises**: initial code and tests include type annotations; the Worker strips them with Babel before execution.
- **Each phase is a self-contained implementation unit** with its own writing-plans spec and PR.
