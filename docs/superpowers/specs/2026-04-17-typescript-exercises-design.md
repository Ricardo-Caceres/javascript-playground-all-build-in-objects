# Design Spec: Phase 23 — TypeScript Exercises

**Date:** 2026-04-17  
**Status:** Approved

---

## Problem

The JavaScript Playground covers 22 phases of JavaScript built-in objects and advanced patterns, but has no TypeScript-specific exercises. TypeScript is the language of the codebase itself and a core skill for modern JavaScript developers. This phase adds ~100 TypeScript exercises as a dedicated section.

---

## Scope

**In scope:**
- 5 TypeScript subtopics, ~20 exercises each (~100 total)
- New `ExerciseCategory` values for TypeScript concepts
- Integration into the existing exercise list UI under a "TypeScript" section
- Automatic Spanish translation via `scripts/translate-exercises.mjs`

**Out of scope:**
- Runtime TypeScript type checking (Babel strips types at runtime)
- A separate TypeScript compiler integration
- TypeScript-specific UI (type-level error display)

---

## Exercise Topics

### Subtopic 1: Basic Types (~20 exercises)
**`builtIn: 'TypeScript'`, `category: 'type-guard'`**

Focus: runtime-verifiable behavior of TypeScript type concepts.
- `typeof` narrowing (string, number, boolean, undefined)
- `instanceof` narrowing (class instances)
- Custom type guard functions (`value is Type` predicate pattern)
- `unknown` vs `any` — functions that safely handle `unknown` via narrowing
- `never` exhaustiveness checks (switch over discriminant)
- Literal types and union narrowing
- Nullability checks (`null` / `undefined` narrowing)

All tests check runtime behavior: type guard returns `true`/`false`, narrowed paths execute correctly, etc.

### Subtopic 2: Interfaces & Type Aliases (~20 exercises)
**`builtIn: 'TypeScript'`, `category: 'instance-method'`**

Focus: structural typing as a design pattern, tested behaviorally.
- Defining and implementing interfaces (factory functions returning conforming objects)
- Extending interfaces (`extends`)
- Optional properties (`?`)
- Readonly properties (`readonly` — enforced via `Object.freeze` in solution or class)
- Index signatures (`[key: string]: value`)
- Discriminated unions (tagged unions with a `kind` or `type` field)
- `interface` vs `type` alias — practical differences via intersection types

Tests verify that returned objects have the correct shape and that values satisfy contracts.

### Subtopic 3: Generics (~20 exercises)
**`builtIn: 'TypeScript'`, `category: 'generic'`**

Focus: generic functions with real runtime logic.
- Identity function `<T>(x: T): T`
- Generic array utilities: `head<T>`, `tail<T>`, `last<T>`, `nth<T>`
- Generic constraints (`<T extends object>`, `<T extends string | number>`)
- `keyof` with generics (`<T, K extends keyof T>(obj: T, key: K): T[K]`)
- Generic classes (Stack<T>, Queue<T>, Maybe<T>)
- Multiple type parameters (`<T, U>(pair: [T, U]): [U, T]`)
- Default type parameters

All tests call functions with concrete values and check runtime output.

### Subtopic 4: Utility Types (~20 exercises)
**`builtIn: 'TypeScript'`, `category: 'utility-type'`**

Focus: use utility types in function signatures, test behavioral correctness.

Exercises use utility types in the TypeScript signature, and tests verify that the implementation respects the semantics implied by the type:
- `Partial<T>` — merge function that accepts partial updates, all fields optional
- `Required<T>` — validator that checks all required fields are present
- `Readonly<T>` — implementation returns frozen object
- `Pick<T, K>` — function that extracts only specified keys
- `Omit<T, K>` — function that removes specified keys
- `Record<K, V>` — build a lookup map from arrays
- `ReturnType<T>` — exercises using inferred return types
- `Parameters<T>` — exercises using parameter extraction
- `Exclude<T, U>` / `Extract<T, U>` — filter union members at runtime

Tests check that the returned values have the correct shape (correct keys present/absent, correct values).

### Subtopic 5: Conditional & Mapped Types (~20 exercises)
**`builtIn: 'TypeScript'`, `category: 'utility-type'`**

Focus: implement the runtime equivalent of type-level operations.

TypeScript conditional and mapped types describe transformations. Exercises ask the user to implement functions that perform the equivalent transformation at runtime:
- `DeepReadonly<T>` → implement `deepFreeze(obj)`
- `DeepPartial<T>` → implement `deepMerge(target, partial)`
- `NonNullable<T>` → implement `filterNullish(arr)` that removes null/undefined
- `Awaited<T>` → implement `resolveAll(promises)` that unwraps nested promises
- `FlattenArray<T[][]>` → implement `flatten(arr)`
- Template literal types → implement string transform functions
- `infer` keyword concept → implement `unwrapPromise`, `unwrapArray` runtime equivalents
- Mapped type iteration → implement `mapObject(obj, fn)` that transforms all values

---

## Data Organization

```
src/features/exercises/infrastructure/data/typescript/
├── basic-types.ts          // ~20 exercises, category: 'type-guard'
├── interfaces.ts           // ~20 exercises, category: 'instance-method'
├── generics.ts             // ~20 exercises, category: 'generic'
├── utility-types.ts        // ~20 exercises, category: 'utility-type'
├── conditional-mapped.ts   // ~20 exercises, category: 'utility-type'
└── index.ts                // exports all arrays, adds to master registry
```

`builtIn` is `'TypeScript'` for all exercises. Slugs follow the pattern `ts-<subtopic>-<n>` (e.g., `ts-type-guard-1`, `ts-generic-array-head`).

---

## Type Changes

`src/shared/types/exercises.ts` — extend `ExerciseCategory`:

```ts
export type ExerciseCategory =
  | 'constructor'
  | 'static-property'
  | 'static-method'
  | 'instance-method'
  | 'instance-property'
  | 'inheritance'
  | 'type-guard'    // NEW — runtime type narrowing exercises
  | 'generic'       // NEW — generic function/class exercises
  | 'utility-type'  // NEW — utility type and mapped type exercises
```

---

## UI Integration

No new routes or pages are needed. The existing exercise list groups by `builtIn`. Adding exercises with `builtIn: 'TypeScript'` automatically creates a "TypeScript" group in the sidebar/nav alongside "Array", "Algorithms", etc.

If the current grouping logic hard-codes specific `builtIn` values for "Advanced Patterns", verify that `'TypeScript'` will also appear. If not, update the grouping/display logic.

---

## Translation

Run the translation script after adding all exercises:

```bash
ANTHROPIC_API_KEY=sk-ant-... node scripts/translate-exercises.mjs --locale es --batch 20
```

The script is idempotent — only untranslated slugs are processed.

---

## Exercise Quality Guidelines

- Every exercise has exactly 5 tests
- Test descriptions are in English (translated separately)
- `initialCode` always includes correct TypeScript types — the user fills in the implementation
- `solution` is the minimal correct implementation
- Hints guide toward the TypeScript-specific concept, not just the algorithm
- Difficulty distribution per subtopic: ~40% beginner, ~40% intermediate, ~20% advanced
