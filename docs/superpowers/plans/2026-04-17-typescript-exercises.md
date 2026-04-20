# TypeScript Exercises Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add ~100 TypeScript exercises across 5 subtopics (Type Guards, Interfaces, Generics, Utility Types, Conditional/Mapped) to the JavaScript Playground app.

**Architecture:** New exercise data lives in `src/features/exercises/infrastructure/data/typescript/`, each subtopic in its own file. Three new `ExerciseCategory` values are added. All exercises use `builtIn: 'TypeScript'` which auto-creates a "TypeScript" group in the existing sidebar UI. No new routes needed.

**Tech Stack:** TypeScript, Next.js 16, React 19, Redux Toolkit, next-intl. Exercise assertions run in a Web Worker via Babel (TypeScript preset) — types are stripped, only runtime behavior is tested.

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/shared/types/exercises.ts` | Modify | Add `'type-guard' \| 'generic' \| 'utility-type'` to `ExerciseCategory` |
| `src/features/exercises/infrastructure/data/typescript/basic-types.ts` | Create | 20 type guard exercises |
| `src/features/exercises/infrastructure/data/typescript/interfaces.ts` | Create | 20 interface/structural-typing exercises |
| `src/features/exercises/infrastructure/data/typescript/generics.ts` | Create | 20 generic function/class exercises |
| `src/features/exercises/infrastructure/data/typescript/utility-types.ts` | Create | 20 utility type pattern exercises |
| `src/features/exercises/infrastructure/data/typescript/conditional-mapped.ts` | Create | 20 advanced type pattern exercises |
| `src/features/exercises/infrastructure/data/typescript/index.ts` | Create | Re-exports all 5 arrays |
| `src/features/exercises/infrastructure/data/index.ts` | Modify | Import and spread TypeScript exercises into `allExercises` |

## Critical Constraints
- **Assertion strings are NOT transpiled** — must be valid plain JS (no `as`, no TS syntax)
- **Only supported matchers**: `toBe`, `toEqual`, `toStrictEqual`, `toBeTruthy`, `toBeFalsy`, `toContain`, `toHaveLength`, `toBeNull`, `toBeUndefined`, `toThrow`
- **No `.not` modifier** in assertions
- **5 tests per exercise** (exactly)
- **TypeScript types** in `initialCode`/`solution` are fine (Babel strips them), but assertion strings must be pure JS
- Each assertion is a self-contained statement — use semicolons to chain setup+expect in one string

---
### Task 1: Add New ExerciseCategory Values

**Files:**
- Modify: `src/shared/types/exercises.ts`

- [ ] **Step 1: Update ExerciseCategory type**

Replace the current union in `src/shared/types/exercises.ts`:

```ts
export type ExerciseCategory =
  | 'constructor'
  | 'static-property'
  | 'static-method'
  | 'instance-method'
  | 'instance-property'
  | 'inheritance'
  | 'type-guard'
  | 'generic'
  | 'utility-type'
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /path/to/project && npx tsc --noEmit 2>&1 | head -20
```
Expected: no errors from the type change.

- [ ] **Step 3: Commit**

```bash
git add src/shared/types/exercises.ts
git commit -m "feat(types): add type-guard, generic, utility-type exercise categories"
```

---

### Task 2: Create basic-types.ts (20 Type Guard Exercises)

**Files:**
- Create: `src/features/exercises/infrastructure/data/typescript/basic-types.ts`

- [ ] **Step 1: Create the file**

Create `src/features/exercises/infrastructure/data/typescript/basic-types.ts`:

```ts
import type { Exercise } from '@/shared/types/exercises'

export const tsBasicTypesExercises: Exercise[] = [
  {
    slug: 'ts-type-guard-1',
    title: 'Type Guard — isString',
    description: `## Type Guards: isString

A **type guard** is a function that narrows the TypeScript type of a value using a runtime check.  
\`typeof\`, \`instanceof\`, and \`in\` are the most common primitives.

**Challenge:** Implement \`isString(value)\` that returns \`true\` if \`value\` is a string.

\`\`\`ts
isString('hello')  // → true
isString(42)      // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isString(value: unknown): value is string {
  // Use typeof to check if value is a string
}`,
    solution: `function isString(value: unknown): value is string {
  return typeof value === 'string'
}`,
    tests: [
      { description: 'returns true for string', assertion: "expect(isString('hello')).toBeTruthy()" },
      { description: 'returns false for number', assertion: "expect(isString(42)).toBeFalsy()" },
      { description: 'returns true for empty string', assertion: "expect(isString('')).toBeTruthy()" },
      { description: 'returns false for null', assertion: "expect(isString(null)).toBeFalsy()" },
      { description: 'returns false for boolean', assertion: "expect(isString(true)).toBeFalsy()" },
    ],
    hints: ['Use typeof value === \'string\''],
    tags: ['TypeScript', 'type-guard', 'typeof', 'beginner'],
  },
  {
    slug: 'ts-type-guard-2',
    title: 'Type Guard — isNumber',
    description: `## Type Guards: isNumber

**Challenge:** Implement \`isNumber(value)\` returning \`true\` if \`value\` is a number (including \`NaN\`).

\`\`\`ts
isNumber(42)     // → true
isNumber('42')  // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isNumber(value: unknown): value is number {
  // Use typeof to check
}`,
    solution: `function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}`,
    tests: [
      { description: 'returns true for integer', assertion: "expect(isNumber(42)).toBeTruthy()" },
      { description: 'returns false for string', assertion: "expect(isNumber('42')).toBeFalsy()" },
      { description: 'returns true for 0', assertion: "expect(isNumber(0)).toBeTruthy()" },
      { description: 'returns true for NaN', assertion: "expect(isNumber(NaN)).toBeTruthy()" },
      { description: 'returns false for null', assertion: "expect(isNumber(null)).toBeFalsy()" },
    ],
    hints: ['typeof NaN === \'number\' — NaN is still a number type!'],
    tags: ['TypeScript', 'type-guard', 'typeof', 'beginner'],
  },
  {
    slug: 'ts-type-guard-3',
    title: 'Type Guard — isBoolean',
    description: `## Type Guards: isBoolean

**Challenge:** Implement \`isBoolean(value)\` returning \`true\` only for booleans.

\`\`\`ts
isBoolean(true)   // → true
isBoolean(0)      // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isBoolean(value: unknown): value is boolean {
  // Use typeof
}`,
    solution: `function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}`,
    tests: [
      { description: 'returns true for true', assertion: "expect(isBoolean(true)).toBeTruthy()" },
      { description: 'returns true for false', assertion: "expect(isBoolean(false)).toBeTruthy()" },
      { description: 'returns false for 0', assertion: "expect(isBoolean(0)).toBeFalsy()" },
      { description: 'returns false for string', assertion: "expect(isBoolean('true')).toBeFalsy()" },
      { description: 'returns false for null', assertion: "expect(isBoolean(null)).toBeFalsy()" },
    ],
    hints: ['typeof value === \'boolean\''],
    tags: ['TypeScript', 'type-guard', 'typeof', 'beginner'],
  },
  {
    slug: 'ts-type-guard-4',
    title: 'Type Guard — isNullish',
    description: `## Type Guards: isNullish

**Challenge:** Implement \`isNullish(value)\` returning \`true\` if \`value\` is \`null\` or \`undefined\`.

\`\`\`ts
isNullish(null)       // → true
isNullish(undefined)  // → true
isNullish(0)          // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isNullish(value: unknown): value is null | undefined {
  // Check for null or undefined
}`,
    solution: `function isNullish(value: unknown): value is null | undefined {
  return value === null || value === undefined
}`,
    tests: [
      { description: 'returns true for null', assertion: "expect(isNullish(null)).toBeTruthy()" },
      { description: 'returns true for undefined', assertion: "expect(isNullish(undefined)).toBeTruthy()" },
      { description: 'returns false for 0', assertion: "expect(isNullish(0)).toBeFalsy()" },
      { description: 'returns false for empty string', assertion: "expect(isNullish('')).toBeFalsy()" },
      { description: 'returns false for false', assertion: "expect(isNullish(false)).toBeFalsy()" },
    ],
    hints: ['Use strict equality ===, not loose =='],
    tags: ['TypeScript', 'type-guard', 'nullish', 'beginner'],
  },
  {
    slug: 'ts-type-guard-5',
    title: 'Type Guard — isObject',
    description: `## Type Guards: isObject

**Challenge:** Implement \`isObject(value)\` returning \`true\` if \`value\` is a non-null object (arrays count as objects).

\`\`\`ts
isObject({})     // → true
isObject([])     // → true
isObject(null)   // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isObject(value: unknown): value is Record<string, unknown> {
  // typeof object, but exclude null
}`,
    solution: `function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}`,
    tests: [
      { description: 'returns true for plain object', assertion: "expect(isObject({})).toBeTruthy()" },
      { description: 'returns true for array', assertion: "expect(isObject([])).toBeTruthy()" },
      { description: 'returns false for null', assertion: "expect(isObject(null)).toBeFalsy()" },
      { description: 'returns false for string', assertion: "expect(isObject('str')).toBeFalsy()" },
      { description: 'returns false for number', assertion: "expect(isObject(42)).toBeFalsy()" },
    ],
    hints: ['typeof null === \'object\' — that\'s the famous JS quirk. Guard against it explicitly.'],
    tags: ['TypeScript', 'type-guard', 'object', 'beginner'],
  },
  {
    slug: 'ts-type-guard-6',
    title: 'Type Guard — isArray',
    description: `## Type Guards: isArray

**Challenge:** Implement \`isArray(value)\` using \`Array.isArray\`.

\`\`\`ts
isArray([1, 2, 3])  // → true
isArray({})         // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isArray(value: unknown): value is unknown[] {
  // Use Array.isArray
}`,
    solution: `function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}`,
    tests: [
      { description: 'returns true for empty array', assertion: "expect(isArray([])).toBeTruthy()" },
      { description: 'returns true for array with items', assertion: "expect(isArray([1,2,3])).toBeTruthy()" },
      { description: 'returns false for object', assertion: "expect(isArray({})).toBeFalsy()" },
      { description: 'returns false for string', assertion: "expect(isArray('string')).toBeFalsy()" },
      { description: 'returns false for null', assertion: "expect(isArray(null)).toBeFalsy()" },
    ],
    hints: ['Array.isArray is the reliable way — typeof [] === \'object\' won\'t distinguish arrays.'],
    tags: ['TypeScript', 'type-guard', 'array', 'beginner'],
  },
  {
    slug: 'ts-type-guard-7',
    title: 'Type Guard — isFunction',
    description: `## Type Guards: isFunction

**Challenge:** Implement \`isFunction(value)\` returning \`true\` if \`value\` is callable.

\`\`\`ts
isFunction(() => {})    // → true
isFunction('fn')        // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isFunction(value: unknown): value is Function {
  // Use typeof
}`,
    solution: `function isFunction(value: unknown): value is Function {
  return typeof value === 'function'
}`,
    tests: [
      { description: 'returns true for arrow fn', assertion: "expect(isFunction(() => {})).toBeTruthy()" },
      { description: 'returns true for function expression', assertion: "expect(isFunction(function() {})).toBeTruthy()" },
      { description: 'returns false for number', assertion: "expect(isFunction(42)).toBeFalsy()" },
      { description: 'returns false for string', assertion: "expect(isFunction('fn')).toBeFalsy()" },
      { description: 'returns false for object', assertion: "expect(isFunction({})).toBeFalsy()" },
    ],
    hints: ['typeof value === \'function\''],
    tags: ['TypeScript', 'type-guard', 'function', 'beginner'],
  },
  {
    slug: 'ts-type-guard-8',
    title: 'Type Guard — isPrimitive',
    description: `## Type Guards: isPrimitive

**Challenge:** Implement \`isPrimitive(value)\` that returns \`true\` for strings, numbers, booleans, \`null\`, \`undefined\`, and symbols — anything that is **not** an object or function.

\`\`\`ts
isPrimitive('hi')  // → true
isPrimitive({})   // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function isPrimitive(value: unknown): boolean {
  // A primitive is anything that is not an object (or null) and not a function
}`,
    solution: `function isPrimitive(value: unknown): boolean {
  return value === null || (typeof value !== 'object' && typeof value !== 'function')
}`,
    tests: [
      { description: 'returns true for string', assertion: "expect(isPrimitive('hello')).toBeTruthy()" },
      { description: 'returns true for number', assertion: "expect(isPrimitive(42)).toBeTruthy()" },
      { description: 'returns true for boolean', assertion: "expect(isPrimitive(true)).toBeTruthy()" },
      { description: 'returns false for object', assertion: "expect(isPrimitive({})).toBeFalsy()" },
      { description: 'returns false for array', assertion: "expect(isPrimitive([])).toBeFalsy()" },
    ],
    hints: ['null has typeof === \'object\' so handle it explicitly.'],
    tags: ['TypeScript', 'type-guard', 'primitive', 'intermediate'],
  },
  {
    slug: 'ts-type-guard-9',
    title: 'Type Guard — isDate',
    description: `## Type Guards: isDate (instanceof)

**Challenge:** Implement \`isDate(value)\` using \`instanceof Date\`.

\`\`\`ts
isDate(new Date())       // → true
isDate('2024-01-01')   // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isDate(value: unknown): value is Date {
  // Use instanceof
}`,
    solution: `function isDate(value: unknown): value is Date {
  return value instanceof Date
}`,
    tests: [
      { description: 'returns true for Date instance', assertion: "expect(isDate(new Date())).toBeTruthy()" },
      { description: 'returns false for date string', assertion: "expect(isDate('2024-01-01')).toBeFalsy()" },
      { description: 'returns false for null', assertion: "expect(isDate(null)).toBeFalsy()" },
      { description: 'returns false for plain object', assertion: "expect(isDate({})).toBeFalsy()" },
      { description: 'returns false for timestamp number', assertion: "expect(isDate(Date.now())).toBeFalsy()" },
    ],
    hints: ['instanceof checks the prototype chain.'],
    tags: ['TypeScript', 'type-guard', 'instanceof', 'beginner'],
  },
  {
    slug: 'ts-type-guard-10',
    title: 'Type Guard — isError',
    description: `## Type Guards: isError (instanceof)

**Challenge:** Implement \`isError(value)\` that returns \`true\` for any \`Error\` instance (including subclasses like \`TypeError\`).

\`\`\`ts
isError(new Error('msg'))    // → true
isError({ message: 'oops' }) // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isError(value: unknown): value is Error {
  // instanceof Error
}`,
    solution: `function isError(value: unknown): value is Error {
  return value instanceof Error
}`,
    tests: [
      { description: 'returns true for Error', assertion: "expect(isError(new Error('msg'))).toBeTruthy()" },
      { description: 'returns true for TypeError', assertion: "expect(isError(new TypeError('t'))).toBeTruthy()" },
      { description: 'returns false for string', assertion: "expect(isError('error')).toBeFalsy()" },
      { description: 'returns false for error-shaped object', assertion: "expect(isError({ message: 'oops' })).toBeFalsy()" },
      { description: 'returns false for null', assertion: "expect(isError(null)).toBeFalsy()" },
    ],
    hints: ['instanceof works with subclasses — TypeError extends Error.'],
    tags: ['TypeScript', 'type-guard', 'instanceof', 'Error', 'beginner'],
  },
  {
    slug: 'ts-type-guard-11',
    title: 'Type Guard — hasProperty',
    description: `## Type Guards: hasProperty (in operator)

The **\`in\`** operator checks if a property exists on an object (including its prototype chain).

**Challenge:** Implement \`hasProperty(obj, key)\` that returns \`true\` if \`key in obj\`.

\`\`\`ts
hasProperty({ a: 1 }, 'a')  // → true
hasProperty({ a: 1 }, 'b')  // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function hasProperty<T extends object>(obj: T, key: string): boolean {
  // Use the 'in' operator
}`,
    solution: `function hasProperty<T extends object>(obj: T, key: string): boolean {
  return key in obj
}`,
    tests: [
      { description: 'returns true for own property', assertion: "expect(hasProperty({a: 1}, 'a')).toBeTruthy()" },
      { description: 'returns false for missing property', assertion: "expect(hasProperty({a: 1}, 'b')).toBeFalsy()" },
      { description: 'returns true for string key', assertion: "expect(hasProperty({name: 'alice'}, 'name')).toBeTruthy()" },
      { description: 'returns true for inherited property', assertion: "expect(hasProperty({}, 'toString')).toBeTruthy()" },
      { description: 'returns true for undefined value', assertion: "expect(hasProperty({x: undefined}, 'x')).toBeTruthy()" },
    ],
    hints: ['The \`in\` operator also finds properties in the prototype chain.'],
    tags: ['TypeScript', 'type-guard', 'in-operator', 'intermediate'],
  },
  {
    slug: 'ts-type-guard-12',
    title: 'Type Guard — isStringOrNumber',
    description: `## Type Guards: Union Narrowing

**Challenge:** Implement \`isStringOrNumber(value)\` returning \`true\` for strings or numbers.

\`\`\`ts
isStringOrNumber('hello')  // → true
isStringOrNumber(42)       // → true
isStringOrNumber(true)     // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isStringOrNumber(value: unknown): value is string | number {
  // Check for string or number
}`,
    solution: `function isStringOrNumber(value: unknown): value is string | number {
  return typeof value === 'string' || typeof value === 'number'
}`,
    tests: [
      { description: 'returns true for string', assertion: "expect(isStringOrNumber('hello')).toBeTruthy()" },
      { description: 'returns true for number', assertion: "expect(isStringOrNumber(42)).toBeTruthy()" },
      { description: 'returns false for boolean', assertion: "expect(isStringOrNumber(true)).toBeFalsy()" },
      { description: 'returns false for null', assertion: "expect(isStringOrNumber(null)).toBeFalsy()" },
      { description: 'returns false for object', assertion: "expect(isStringOrNumber({})).toBeFalsy()" },
    ],
    hints: ['Combine two typeof checks with ||.'],
    tags: ['TypeScript', 'type-guard', 'union', 'beginner'],
  },
  {
    slug: 'ts-type-guard-13',
    title: 'Type Guard — getTypeTag',
    description: `## typeof Tag

**Challenge:** Implement \`getTypeTag(value)\` that returns the \`typeof\` string for any value.

\`\`\`ts
getTypeTag('hello')  // → 'string'
getTypeTag(42)       // → 'number'
getTypeTag(null)     // → 'object'
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function getTypeTag(value: unknown): string {
  // Return typeof value
}`,
    solution: `function getTypeTag(value: unknown): string {
  return typeof value
}`,
    tests: [
      { description: 'string tag', assertion: "expect(getTypeTag('hello')).toBe('string')" },
      { description: 'number tag', assertion: "expect(getTypeTag(42)).toBe('number')" },
      { description: 'boolean tag', assertion: "expect(getTypeTag(true)).toBe('boolean')" },
      { description: 'null tag is object', assertion: "expect(getTypeTag(null)).toBe('object')" },
      { description: 'undefined tag', assertion: "expect(getTypeTag(undefined)).toBe('undefined')" },
    ],
    hints: ['Remember typeof null === \'object\' — a historical JavaScript quirk.'],
    tags: ['TypeScript', 'type-guard', 'typeof', 'beginner'],
  },
  {
    slug: 'ts-type-guard-14',
    title: 'Type Guard — assertDefined',
    description: `## assertDefined — Throwing Type Guard

**Challenge:** Implement \`assertDefined<T>(value, message?)\` that **throws** an \`Error\` if \`value\` is \`null\` or \`undefined\`, otherwise returns the value unchanged.

\`\`\`ts
assertDefined('hello')     // → 'hello'
assertDefined(null)         // throws Error
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function assertDefined<T>(value: T | null | undefined, message?: string): T {
  // Throw if null or undefined, return value otherwise
}`,
    solution: `function assertDefined<T>(value: T | null | undefined, message?: string): T {
  if (value === null || value === undefined) {
    throw new Error(message ?? 'Value is null or undefined')
  }
  return value
}`,
    tests: [
      { description: 'returns string value', assertion: "expect(assertDefined('hello')).toBe('hello')" },
      { description: 'returns number value', assertion: "expect(assertDefined(42)).toBe(42)" },
      { description: 'returns falsy 0', assertion: "expect(assertDefined(0)).toBe(0)" },
      { description: 'returns false boolean', assertion: "expect(assertDefined(false)).toBe(false)" },
      { description: 'throws for null', assertion: "expect(() => assertDefined(null)).toThrow()" },
    ],
    hints: ['0, false, and empty string are NOT nullish — only null/undefined.'],
    tags: ['TypeScript', 'type-guard', 'assertion-function', 'intermediate'],
  },
  {
    slug: 'ts-type-guard-15',
    title: 'Type Guard — safeLength',
    description: `## safeLength — Safe Property Access

**Challenge:** Implement \`safeLength(value)\` that returns the \`length\` of a string or array, and \`0\` for anything else.

\`\`\`ts
safeLength('hello')   // → 5
safeLength([1, 2, 3]) // → 3
safeLength({})        // → 0
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function safeLength(value: unknown): number {
  // Return length for strings and arrays, 0 otherwise
}`,
    solution: `function safeLength(value: unknown): number {
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length
  }
  return 0
}`,
    tests: [
      { description: 'string length', assertion: "expect(safeLength('hello')).toBe(5)" },
      { description: 'array length', assertion: "expect(safeLength([1,2,3])).toBe(3)" },
      { description: 'empty string', assertion: "expect(safeLength('')).toBe(0)" },
      { description: 'object returns 0', assertion: "expect(safeLength({})).toBe(0)" },
      { description: 'number returns 0', assertion: "expect(safeLength(42)).toBe(0)" },
    ],
    hints: ['Check for string with typeof, array with Array.isArray.'],
    tags: ['TypeScript', 'type-guard', 'narrowing', 'intermediate'],
  },
  {
    slug: 'ts-type-guard-16',
    title: 'Type Guard — narrowToString',
    description: `## Narrowing to String

**Challenge:** Implement \`narrowToString(value)\` that returns \`value\` unchanged if it is already a string, or converts it to a string using \`String()\`.

\`\`\`ts
narrowToString('hello')  // → 'hello'
narrowToString(42)        // → '42'
narrowToString(true)      // → 'true'
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function narrowToString(value: string | number | boolean): string {
  // Return string as-is, convert others
}`,
    solution: `function narrowToString(value: string | number | boolean): string {
  if (typeof value === 'string') return value
  return String(value)
}`,
    tests: [
      { description: 'string stays string', assertion: "expect(narrowToString('hello')).toBe('hello')" },
      { description: 'converts number', assertion: "expect(narrowToString(42)).toBe('42')" },
      { description: 'converts true', assertion: "expect(narrowToString(true)).toBe('true')" },
      { description: 'converts false', assertion: "expect(narrowToString(false)).toBe('false')" },
      { description: 'converts 0', assertion: "expect(narrowToString(0)).toBe('0')" },
    ],
    hints: ['String(value) coerces numbers and booleans cleanly.'],
    tags: ['TypeScript', 'type-guard', 'narrowing', 'beginner'],
  },
  {
    slug: 'ts-type-guard-17',
    title: 'Type Guard — isNonEmptyString',
    description: `## Compound Type Guard

**Challenge:** Implement \`isNonEmptyString(value)\` returning \`true\` only when \`value\` is a string **and** has at least one character.

\`\`\`ts
isNonEmptyString('hi')  // → true
isNonEmptyString('')    // → false
isNonEmptyString(42)    // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isNonEmptyString(value: unknown): boolean {
  // Check both type and length
}`,
    solution: `function isNonEmptyString(value: unknown): boolean {
  return typeof value === 'string' && value.length > 0
}`,
    tests: [
      { description: 'returns true for non-empty string', assertion: "expect(isNonEmptyString('hello')).toBeTruthy()" },
      { description: 'returns false for empty string', assertion: "expect(isNonEmptyString('')).toBeFalsy()" },
      { description: 'returns false for number', assertion: "expect(isNonEmptyString(42)).toBeFalsy()" },
      { description: 'returns false for null', assertion: "expect(isNonEmptyString(null)).toBeFalsy()" },
      { description: 'returns true for whitespace string', assertion: "expect(isNonEmptyString('  ')).toBeTruthy()" },
    ],
    hints: ['Combine typeof check with length check using &&.'],
    tags: ['TypeScript', 'type-guard', 'compound', 'beginner'],
  },
  {
    slug: 'ts-type-guard-18',
    title: 'Type Guard — isPositiveNumber',
    description: `## Compound Type Guard: isPositiveNumber

**Challenge:** Implement \`isPositiveNumber(value)\` returning \`true\` only when \`value\` is a number **and** greater than zero.

\`\`\`ts
isPositiveNumber(1)     // → true
isPositiveNumber(0)     // → false
isPositiveNumber(-1)    // → false
isPositiveNumber('1')  // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isPositiveNumber(value: unknown): boolean {
  // Check both type and sign
}`,
    solution: `function isPositiveNumber(value: unknown): boolean {
  return typeof value === 'number' && value > 0
}`,
    tests: [
      { description: 'returns true for positive', assertion: "expect(isPositiveNumber(1)).toBeTruthy()" },
      { description: 'returns true for 0.5', assertion: "expect(isPositiveNumber(0.5)).toBeTruthy()" },
      { description: 'returns false for 0', assertion: "expect(isPositiveNumber(0)).toBeFalsy()" },
      { description: 'returns false for negative', assertion: "expect(isPositiveNumber(-1)).toBeFalsy()" },
      { description: 'returns false for string', assertion: "expect(isPositiveNumber('1')).toBeFalsy()" },
    ],
    hints: ['0 is not positive.'],
    tags: ['TypeScript', 'type-guard', 'compound', 'beginner'],
  },
  {
    slug: 'ts-type-guard-19',
    title: 'Type Guard — classifyValue',
    description: `## Exhaustive Type Classification

**Challenge:** Implement \`classifyValue(value)\` that returns one of: \`'string'\`, \`'number'\`, \`'boolean'\`, \`'null'\`, \`'undefined'\`, \`'object'\`, or \`'other'\`.

\`\`\`ts
classifyValue('hello')    // → 'string'
classifyValue(null)        // → 'null'
classifyValue(undefined)   // → 'undefined'
classifyValue(() => {})    // → 'other'
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function classifyValue(value: unknown): 'string' | 'number' | 'boolean' | 'null' | 'undefined' | 'object' | 'other' {
  // Handle null first (typeof null === 'object')
}`,
    solution: `function classifyValue(value: unknown): 'string' | 'number' | 'boolean' | 'null' | 'undefined' | 'object' | 'other' {
  if (value === null) return 'null'
  if (value === undefined) return 'undefined'
  const t = typeof value
  if (t === 'string' || t === 'number' || t === 'boolean') return t
  if (t === 'object') return 'object'
  return 'other'
}`,
    tests: [
      { description: 'classifies string', assertion: "expect(classifyValue('hello')).toBe('string')" },
      { description: 'classifies number', assertion: "expect(classifyValue(42)).toBe('number')" },
      { description: 'classifies null', assertion: "expect(classifyValue(null)).toBe('null')" },
      { description: 'classifies undefined', assertion: "expect(classifyValue(undefined)).toBe('undefined')" },
      { description: 'classifies object', assertion: "expect(classifyValue({})).toBe('object')" },
    ],
    hints: ['Check null before using typeof, because typeof null === \'object\'.'],
    tags: ['TypeScript', 'type-guard', 'classification', 'intermediate'],
  },
  {
    slug: 'ts-type-guard-20',
    title: 'Type Guard — isLiteral',
    description: `## Literal Type Guard

**Challenge:** Implement \`isLiteral<T>(value, literal)\` returning \`true\` when \`value === literal\`.

\`\`\`ts
isLiteral('yes', 'yes')  // → true
isLiteral('no', 'yes')   // → false
isLiteral(42, 42)        // → true
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function isLiteral<T extends string | number | boolean>(value: unknown, literal: T): value is T {
  // Strict equality check
}`,
    solution: `function isLiteral<T extends string | number | boolean>(value: unknown, literal: T): value is T {
  return value === literal
}`,
    tests: [
      { description: 'matches string literal', assertion: "expect(isLiteral('yes', 'yes')).toBeTruthy()" },
      { description: 'rejects wrong string', assertion: "expect(isLiteral('no', 'yes')).toBeFalsy()" },
      { description: 'matches number literal', assertion: "expect(isLiteral(42, 42)).toBeTruthy()" },
      { description: 'rejects string vs number', assertion: "expect(isLiteral('42', 42)).toBeFalsy()" },
      { description: 'matches boolean literal', assertion: "expect(isLiteral(true, true)).toBeTruthy()" },
    ],
    hints: ['Use strict === not ==, to avoid type coercion.'],
    tags: ['TypeScript', 'type-guard', 'literal', 'intermediate'],
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/features/exercises/infrastructure/data/typescript/basic-types.ts
git commit -m "feat(ts): add 20 type guard exercises"
```

---
### Task 3: Create interfaces.ts (20 Interface Exercises)

**Files:**
- Create: `src/features/exercises/infrastructure/data/typescript/interfaces.ts`

- [ ] **Step 1: Create the file**

```ts
import type { Exercise } from '@/shared/types/exercises'

export const tsInterfacesExercises: Exercise[] = [
  {
    slug: 'ts-interface-1',
    title: 'Interface — createUser',
    description: `## Interfaces: Basic Shape

Interfaces define the **shape** of an object. TypeScript uses **structural typing** — any object with matching properties satisfies an interface.

**Challenge:** Implement \`createUser(name, age)\` returning an object with \`name: string\` and \`age: number\`.

\`\`\`ts
createUser('Alice', 30)  // → { name: 'Alice', age: 30 }
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `interface User { name: string; age: number }

function createUser(name: string, age: number): User {
  // Return an object matching the User interface
}`,
    solution: `interface User { name: string; age: number }

function createUser(name: string, age: number): User {
  return { name, age }
}`,
    tests: [
      { description: 'name is set', assertion: "expect(createUser('Alice', 30).name).toBe('Alice')" },
      { description: 'age is set', assertion: "expect(createUser('Bob', 25).age).toBe(25)" },
      { description: 'name is string', assertion: "expect(typeof createUser('Carol', 20).name).toBe('string')" },
      { description: 'age is number', assertion: "expect(typeof createUser('Dave', 35).age).toBe('number')" },
      { description: 'full object shape', assertion: "expect(createUser('Eve', 28)).toEqual({ name: 'Eve', age: 28 })" },
    ],
    hints: ['Object shorthand: { name, age } is shorthand for { name: name, age: age }.'],
    tags: ['TypeScript', 'interface', 'structural-typing', 'beginner'],
  },
  {
    slug: 'ts-interface-2',
    title: 'Interface — Optional Properties',
    description: `## Interfaces: Optional Properties

A \`?\` suffix marks a property as optional. The object can exist with or without it.

**Challenge:** Implement \`createPoint(x, y, z?)\` returning a \`Point\` with optional \`z\`.

\`\`\`ts
createPoint(1, 2)     // → { x: 1, y: 2 }
createPoint(1, 2, 3)  // → { x: 1, y: 2, z: 3 }
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `interface Point { x: number; y: number; z?: number }

function createPoint(x: number, y: number, z?: number): Point {
  // Include z only when provided
}`,
    solution: `interface Point { x: number; y: number; z?: number }

function createPoint(x: number, y: number, z?: number): Point {
  return z !== undefined ? { x, y, z } : { x, y }
}`,
    tests: [
      { description: 'x is set', assertion: "expect(createPoint(1, 2).x).toBe(1)" },
      { description: 'z is undefined when omitted', assertion: "expect(createPoint(1, 2).z).toBeUndefined()" },
      { description: 'z is set when provided', assertion: "expect(createPoint(1, 2, 3).z).toBe(3)" },
      { description: '2D point shape', assertion: "expect(createPoint(0, 0)).toEqual({ x: 0, y: 0 })" },
      { description: '3D point shape', assertion: "expect(createPoint(1, 2, 3)).toEqual({ x: 1, y: 2, z: 3 })" },
    ],
    hints: ['Check z !== undefined before including it, to avoid { x, y, z: undefined }.'],
    tags: ['TypeScript', 'interface', 'optional', 'beginner'],
  },
  {
    slug: 'ts-interface-3',
    title: 'Interface — Readonly Properties',
    description: `## Interfaces: readonly + Object.freeze

**\`readonly\`** properties can be set at creation but not mutated afterward. \`Object.freeze()\` enforces this at **runtime**.

**Challenge:** Implement \`createFrozenConfig(host, port)\` returning a frozen object.

\`\`\`ts
const cfg = createFrozenConfig('localhost', 3000)
Object.isFrozen(cfg) // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `interface Config { readonly host: string; readonly port: number }

function createFrozenConfig(host: string, port: number): Readonly<Config> {
  // Use Object.freeze
}`,
    solution: `interface Config { readonly host: string; readonly port: number }

function createFrozenConfig(host: string, port: number): Readonly<Config> {
  return Object.freeze({ host, port })
}`,
    tests: [
      { description: 'host is set', assertion: "expect(createFrozenConfig('localhost', 3000).host).toBe('localhost')" },
      { description: 'port is set', assertion: "expect(createFrozenConfig('localhost', 3000).port).toBe(3000)" },
      { description: 'object is frozen', assertion: "expect(Object.isFrozen(createFrozenConfig('a', 80))).toBeTruthy()" },
      { description: 'accepts real host', assertion: "expect(createFrozenConfig('api.example.com', 443).host).toBe('api.example.com')" },
      { description: 'full shape', assertion: "expect(createFrozenConfig('0.0.0.0', 8080)).toEqual({ host: '0.0.0.0', port: 8080 })" },
    ],
    hints: ['Object.freeze prevents property mutation at runtime.'],
    tags: ['TypeScript', 'interface', 'readonly', 'beginner'],
  },
  {
    slug: 'ts-interface-4',
    title: 'Interface — Index Signature',
    description: `## Interfaces: Index Signatures

An **index signature** \`{ [key: string]: string }\` allows an object to have any string keys, all pointing to the same value type.

**Challenge:** Implement \`createDict()\` returning an empty dictionary \`{ [key: string]: string }\`.

\`\`\`ts
const d = createDict()
d['hello'] = 'world'
d['hello'] // → 'world'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function createDict(): { [key: string]: string } {
  // Return an empty object
}`,
    solution: `function createDict(): { [key: string]: string } {
  return {}
}`,
    tests: [
      { description: 'stores and retrieves value', assertion: "const d = createDict(); d['key'] = 'value'; expect(d['key']).toBe('value')" },
      { description: 'starts empty', assertion: "expect(createDict()).toEqual({})" },
      { description: 'stores multiple keys', assertion: "const d = createDict(); d['a'] = '1'; d['b'] = '2'; expect(Object.keys(d)).toHaveLength(2)" },
      { description: 'stores by name', assertion: "const d = createDict(); d['name'] = 'alice'; expect(d['name']).toBe('alice')" },
      { description: 'is an object', assertion: "expect(typeof createDict()).toBe('object')" },
    ],
    hints: ['An empty object literal {} satisfies any index signature.'],
    tags: ['TypeScript', 'interface', 'index-signature', 'beginner'],
  },
  {
    slug: 'ts-interface-5',
    title: 'Interface — Discriminated Union',
    description: `## Discriminated Unions

A **discriminated union** uses a shared literal property (the **discriminant**) to distinguish union members.

**Challenge:** Implement \`processShape(shape)\` that calculates area for circles and rectangles.

\`\`\`ts
processShape({ kind: 'circle', radius: 1 })           // → Math.PI
processShape({ kind: 'rect', width: 3, height: 4 })   // → 12
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rect'; width: number; height: number }

function processShape(shape: Shape): number {
  // Use shape.kind to discriminate
}`,
    solution: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rect'; width: number; height: number }

function processShape(shape: Shape): number {
  if (shape.kind === 'circle') return Math.PI * shape.radius ** 2
  return shape.width * shape.height
}`,
    tests: [
      { description: 'circle area radius 1', assertion: "expect(processShape({ kind: 'circle', radius: 1 })).toBe(Math.PI)" },
      { description: 'rect area 3x4', assertion: "expect(processShape({ kind: 'rect', width: 3, height: 4 })).toBe(12)" },
      { description: 'circle area radius 2', assertion: "expect(processShape({ kind: 'circle', radius: 2 })).toBe(Math.PI * 4)" },
      { description: 'rect area 5x5', assertion: "expect(processShape({ kind: 'rect', width: 5, height: 5 })).toBe(25)" },
      { description: 'circle area radius 0', assertion: "expect(processShape({ kind: 'circle', radius: 0 })).toBe(0)" },
    ],
    hints: ['After the if check, TypeScript knows exactly which shape you have — no cast needed.'],
    tags: ['TypeScript', 'interface', 'discriminated-union', 'intermediate'],
  },
  {
    slug: 'ts-interface-6',
    title: 'Interface — Extends',
    description: `## Interface Extends

An interface can **extend** another to inherit its properties, then add more.

**Challenge:** Implement \`createDog(name, breed)\` returning a \`Dog\` that extends \`Animal\`.

\`\`\`ts
createDog('Rex', 'Lab')  // → { name: 'Rex', breed: 'Lab', sound: 'woof' }
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `interface Animal { name: string; sound: string }
interface Dog extends Animal { breed: string }

function createDog(name: string, breed: string): Dog {
  // Return a Dog — don't forget the sound!
}`,
    solution: `interface Animal { name: string; sound: string }
interface Dog extends Animal { breed: string }

function createDog(name: string, breed: string): Dog {
  return { name, breed, sound: 'woof' }
}`,
    tests: [
      { description: 'name is set', assertion: "expect(createDog('Rex', 'Labrador').name).toBe('Rex')" },
      { description: 'breed is set', assertion: "expect(createDog('Rex', 'Labrador').breed).toBe('Labrador')" },
      { description: 'sound is woof', assertion: "expect(createDog('Rex', 'Labrador').sound).toBe('woof')" },
      { description: 'full shape', assertion: "expect(createDog('Buddy', 'Poodle')).toEqual({ name: 'Buddy', breed: 'Poodle', sound: 'woof' })" },
      { description: 'sound is string', assertion: "expect(typeof createDog('Max', 'Beagle').sound).toBe('string')" },
    ],
    hints: ['The Dog interface inherits name and sound from Animal.'],
    tags: ['TypeScript', 'interface', 'extends', 'beginner'],
  },
  {
    slug: 'ts-interface-7',
    title: 'Interface — Intersection Types',
    description: `## Intersection Types (&)

An **intersection type** \`A & B\` combines all properties of both types.

**Challenge:** Implement \`mergeObjects<T, U>(a, b)\` returning \`T & U\`.

\`\`\`ts
mergeObjects({ a: 1 }, { b: 2 })  // → { a: 1, b: 2 }
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function mergeObjects<T extends object, U extends object>(a: T, b: U): T & U {
  // Use Object.assign to merge a and b
}`,
    solution: `function mergeObjects<T extends object, U extends object>(a: T, b: U): T & U {
  return Object.assign({}, a, b) as T & U
}`,
    tests: [
      { description: 'merges two objects', assertion: "expect(mergeObjects({a: 1}, {b: 2})).toEqual({a: 1, b: 2})" },
      { description: 'x property accessible', assertion: "expect(mergeObjects({x: 'hello'}, {y: 42}).x).toBe('hello')" },
      { description: 'y property accessible', assertion: "expect(mergeObjects({x: 'hello'}, {y: 42}).y).toBe(42)" },
      { description: 'b overrides a', assertion: "expect(mergeObjects({a: 1}, {a: 99}).a).toBe(99)" },
      { description: 'merges three keys', assertion: "expect(mergeObjects({a: 1, b: 2}, {c: 3})).toEqual({a: 1, b: 2, c: 3})" },
    ],
    hints: ['Object.assign({}, a, b) spreads both objects into a fresh one.'],
    tags: ['TypeScript', 'interface', 'intersection', 'intermediate'],
  },
  {
    slug: 'ts-interface-8',
    title: 'Interface — Union Type Parser',
    description: `## Union Types: parseValue

**Challenge:** Implement \`parseValue(input)\` that converts a string to its native JS type:
- \`'true'\` → \`true\`, \`'false'\` → \`false\`
- Numeric strings → \`number\`
- Everything else → \`string\`

\`\`\`ts
parseValue('42')     // → 42
parseValue('true')  // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function parseValue(input: string): string | number | boolean {
  // Convert 'true'/'false' to boolean, numeric strings to number, rest to string
}`,
    solution: `function parseValue(input: string): string | number | boolean {
  if (input === 'true') return true
  if (input === 'false') return false
  const n = Number(input)
  if (!isNaN(n)) return n
  return input
}`,
    tests: [
      { description: 'converts number string', assertion: "expect(parseValue('42')).toBe(42)" },
      { description: 'converts true', assertion: "expect(parseValue('true')).toBe(true)" },
      { description: 'converts false', assertion: "expect(parseValue('false')).toBe(false)" },
      { description: 'keeps plain string', assertion: "expect(parseValue('hello')).toBe('hello')" },
      { description: 'converts float string', assertion: "expect(parseValue('3.14')).toBe(3.14)" },
    ],
    hints: ['Number(str) returns NaN for non-numeric strings — isNaN() can detect this.'],
    tags: ['TypeScript', 'interface', 'union', 'intermediate'],
  },
  {
    slug: 'ts-interface-9',
    title: 'Interface — Function Type',
    description: `## Function Types as Interface Members

Interfaces can describe **function signatures**. A \`Comparator<T>\` is a function \`(a: T, b: T) => number\`.

**Challenge:** Implement \`compareByAge\` matching the \`Comparator<Person>\` type.

\`\`\`ts
compareByAge({ name: 'a', age: 30 }, { name: 'b', age: 25 })  // → 5
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `interface Person { name: string; age: number }
type Comparator<T> = (a: T, b: T) => number

const compareByAge: Comparator<Person> = (a, b) => {
  // Return a.age - b.age
}`,
    solution: `interface Person { name: string; age: number }
type Comparator<T> = (a: T, b: T) => number

const compareByAge: Comparator<Person> = (a, b) => {
  return a.age - b.age
}`,
    tests: [
      { description: 'positive when a > b', assertion: "expect(compareByAge({name:'a', age:30}, {name:'b', age:25})).toBe(5)" },
      { description: 'negative when a < b', assertion: "expect(compareByAge({name:'a', age:20}, {name:'b', age:30})).toBe(-10)" },
      { description: 'zero when equal', assertion: "expect(compareByAge({name:'a', age:25}, {name:'b', age:25})).toBe(0)" },
      { description: 'sorts array correctly', assertion: "const people = [{name:'b',age:30},{name:'a',age:20}]; people.sort(compareByAge); expect(people[0].name).toBe('a')" },
      { description: 'is a function', assertion: "expect(typeof compareByAge).toBe('function')" },
    ],
    hints: ['Array.sort uses negative/zero/positive to determine order.'],
    tags: ['TypeScript', 'interface', 'function-type', 'beginner'],
  },
  {
    slug: 'ts-interface-10',
    title: 'Interface — Recursive Type',
    description: `## Recursive Interfaces: Tree Node

An interface can reference itself, enabling recursive data structures.

**Challenge:** Implement \`createTreeNode<T>(value, children?)\` returning a \`TreeNode<T>\`.

\`\`\`ts
createTreeNode(1)                // → { value: 1, children: [] }
createTreeNode(1, [createTreeNode(2)])  // → { value: 1, children: [{ value: 2, children: [] }] }
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `interface TreeNode<T> { value: T; children: TreeNode<T>[] }

function createTreeNode<T>(value: T, children: TreeNode<T>[] = []): TreeNode<T> {
  // Return a tree node
}`,
    solution: `interface TreeNode<T> { value: T; children: TreeNode<T>[] }

function createTreeNode<T>(value: T, children: TreeNode<T>[] = []): TreeNode<T> {
  return { value, children }
}`,
    tests: [
      { description: 'value is set', assertion: "expect(createTreeNode(1).value).toBe(1)" },
      { description: 'default children is empty', assertion: "expect(createTreeNode(1).children).toHaveLength(0)" },
      { description: 'child value accessible', assertion: "const child = createTreeNode(2); const root = createTreeNode(1, [child]); expect(root.children[0].value).toBe(2)" },
      { description: 'works with string value', assertion: "expect(createTreeNode('root').value).toBe('root')" },
      { description: 'empty children is array', assertion: "expect(createTreeNode(42, []).children).toEqual([])" },
    ],
    hints: ['Default parameter values are evaluated per call, so [] is safe here.'],
    tags: ['TypeScript', 'interface', 'recursive', 'intermediate'],
  },
  {
    slug: 'ts-interface-11',
    title: 'Interface — with Method',
    description: `## Interfaces with Methods

Interfaces can include **method signatures**. Implement an object that satisfies the interface.

**Challenge:** Implement \`createPrintable(label, value)\` returning an object with a \`toString()\` method.

\`\`\`ts
createPrintable('Name', 'Alice').toString()  // → 'Name: Alice'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `interface Printable { toString(): string }

function createPrintable(label: string, value: unknown): Printable {
  // Return object with toString returning "label: value"
}`,
    solution: `interface Printable { toString(): string }

function createPrintable(label: string, value: unknown): Printable {
  return { toString: () => \`\${label}: \${value}\` }
}`,
    tests: [
      { description: 'string label and value', assertion: "expect(createPrintable('Name', 'Alice').toString()).toBe('Name: Alice')" },
      { description: 'numeric value', assertion: "expect(createPrintable('Count', 42).toString()).toBe('Count: 42')" },
      { description: 'toString is a function', assertion: "expect(typeof createPrintable('x', 1).toString).toBe('function')" },
      { description: 'boolean value', assertion: "expect(createPrintable('Flag', true).toString()).toBe('Flag: true')" },
      { description: 'empty label', assertion: "expect(createPrintable('', 0).toString()).toBe(': 0')" },
    ],
    hints: ['Template literals automatically call toString() on values.'],
    tags: ['TypeScript', 'interface', 'method', 'beginner'],
  },
  {
    slug: 'ts-interface-12',
    title: 'Interface — Tuple Type',
    description: `## Tuple Types

A **tuple** is a fixed-length array where each position has a specific type.

**Challenge:** Implement \`createPair<T, U>(first, second)\` returning a \`[T, U]\` tuple.

\`\`\`ts
createPair(1, 'a')   // → [1, 'a']
createPair('x', true) // → ['x', true]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `type Pair<T, U> = [T, U]

function createPair<T, U>(first: T, second: U): Pair<T, U> {
  // Return a tuple
}`,
    solution: `type Pair<T, U> = [T, U]

function createPair<T, U>(first: T, second: U): Pair<T, U> {
  return [first, second]
}`,
    tests: [
      { description: 'correct shape', assertion: "expect(createPair(1, 'a')).toEqual([1, 'a'])" },
      { description: 'first element', assertion: "expect(createPair('x', true)[0]).toBe('x')" },
      { description: 'second element', assertion: "expect(createPair('x', true)[1]).toBe(true)" },
      { description: 'null/undefined pair', assertion: "expect(createPair(null, undefined)).toEqual([null, undefined])" },
      { description: 'has length 2', assertion: "expect(createPair(1, 2)).toHaveLength(2)" },
    ],
    hints: ['Tuples are just arrays. [first, second] is all you need.'],
    tags: ['TypeScript', 'interface', 'tuple', 'beginner'],
  },
  {
    slug: 'ts-interface-13',
    title: 'Interface — Opaque/Brand Type',
    description: `## Brand / Opaque Types

A **branded type** adds a phantom property to distinguish types that share the same underlying representation.

**Challenge:** Implement \`createUserId(id)\` that casts a string to \`UserId\`.

\`\`\`ts
type UserId = string & { __brand: 'UserId' }
createUserId('user-1')  // → 'user-1' (as UserId)
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `type UserId = string & { __brand: 'UserId' }

function createUserId(id: string): UserId {
  // Cast id to UserId
}`,
    solution: `type UserId = string & { __brand: 'UserId' }

function createUserId(id: string): UserId {
  return id as UserId
}`,
    tests: [
      { description: 'returns the id string', assertion: "expect(createUserId('user-1')).toBe('user-1')" },
      { description: 'still a string type', assertion: "expect(typeof createUserId('abc')).toBe('string')" },
      { description: 'correct length', assertion: "expect(createUserId('123').length).toBe(3)" },
      { description: 'empty string', assertion: "expect(createUserId('')).toBe('')" },
      { description: 'uuid-like string', assertion: "expect(createUserId('uuid-xyz')).toBe('uuid-xyz')" },
    ],
    hints: ['At runtime, a branded type is just the underlying primitive. The brand only exists at the type level.'],
    tags: ['TypeScript', 'interface', 'brand', 'intermediate'],
  },
  {
    slug: 'ts-interface-14',
    title: 'Interface — Readonly Array',
    description: `## ReadonlyArray<T>

**Challenge:** Implement \`createReadonlyArray<T>(items)\` returning a frozen copy of the array.

\`\`\`ts
const arr = createReadonlyArray([1, 2, 3])
Object.isFrozen(arr)  // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function createReadonlyArray<T>(items: T[]): ReadonlyArray<T> {
  // Return a frozen copy
}`,
    solution: `function createReadonlyArray<T>(items: T[]): ReadonlyArray<T> {
  return Object.freeze([...items])
}`,
    tests: [
      { description: 'contains items', assertion: "expect(createReadonlyArray([1,2,3])).toEqual([1,2,3])" },
      { description: 'correct length', assertion: "expect(createReadonlyArray(['a','b'])).toHaveLength(2)" },
      { description: 'empty array', assertion: "expect(createReadonlyArray([])).toHaveLength(0)" },
      { description: 'first element', assertion: "expect(createReadonlyArray([1,2,3])[0]).toBe(1)" },
      { description: 'is frozen', assertion: "expect(Object.isFrozen(createReadonlyArray([1]))).toBeTruthy()" },
    ],
    hints: ['Spread the array first so the original is not frozen.'],
    tags: ['TypeScript', 'interface', 'readonly-array', 'beginner'],
  },
  {
    slug: 'ts-interface-15',
    title: 'Interface — Optional Chaining Display Name',
    description: `## Optional Properties & Nullish Coalescing

**Challenge:** Implement \`getUserDisplayName(user)\` following this priority:
1. \`nickname\` if present
2. \`firstName + ' ' + lastName\` if \`lastName\` exists
3. \`firstName\` alone

\`\`\`ts
getUserDisplayName({ firstName: 'Alice', lastName: 'Smith' })  // → 'Alice Smith'
getUserDisplayName({ firstName: 'Bob' })                       // → 'Bob'
getUserDisplayName({ firstName: 'Carol', nickname: 'Caz' })   // → 'Caz'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `interface UserProfile { firstName: string; lastName?: string; nickname?: string }

function getUserDisplayName(user: UserProfile): string {
  // Use ?? and conditional logic
}`,
    solution: `interface UserProfile { firstName: string; lastName?: string; nickname?: string }

function getUserDisplayName(user: UserProfile): string {
  return user.nickname ?? (user.lastName ? \`\${user.firstName} \${user.lastName}\` : user.firstName)
}`,
    tests: [
      { description: 'first + last name', assertion: "expect(getUserDisplayName({firstName:'Alice', lastName:'Smith'})).toBe('Alice Smith')" },
      { description: 'first name only', assertion: "expect(getUserDisplayName({firstName:'Bob'})).toBe('Bob')" },
      { description: 'nickname takes priority', assertion: "expect(getUserDisplayName({firstName:'Carol', nickname:'Caz'})).toBe('Caz')" },
      { description: 'nickname beats full name', assertion: "expect(getUserDisplayName({firstName:'Dave', lastName:'Brown', nickname:'D'})).toBe('D')" },
      { description: 'first + last when no nickname', assertion: "expect(getUserDisplayName({firstName:'Eve', lastName:'Jones'})).toBe('Eve Jones')" },
    ],
    hints: ['?? only falls back on null/undefined, not empty string.'],
    tags: ['TypeScript', 'interface', 'optional-chaining', 'nullish-coalescing', 'intermediate'],
  },
  {
    slug: 'ts-interface-16',
    title: 'Interface — Structural Typing Guard',
    description: `## Structural Typing at Runtime

TypeScript uses structural typing — but at **runtime**, you must check the shape manually.

**Challenge:** Implement \`isConformingShape(value)\` returning \`true\` if \`value\` has a \`name\` property of type \`string\`.

\`\`\`ts
isConformingShape({ name: 'Alice' })  // → true
isConformingShape({ name: 42 })       // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `interface HasName { name: string }

function isConformingShape(value: unknown): value is HasName {
  // Check object, not null, has name property, name is string
}`,
    solution: `interface HasName { name: string }

function isConformingShape(value: unknown): value is HasName {
  return (
    typeof value === 'object' &&
    value !== null &&
    'name' in value &&
    typeof (value as Record<string, unknown>).name === 'string'
  )
}`,
    tests: [
      { description: 'valid HasName', assertion: "expect(isConformingShape({name: 'Alice'})).toBeTruthy()" },
      { description: 'name must be string', assertion: "expect(isConformingShape({name: 42})).toBeFalsy()" },
      { description: 'missing name', assertion: "expect(isConformingShape({age: 30})).toBeFalsy()" },
      { description: 'null fails', assertion: "expect(isConformingShape(null)).toBeFalsy()" },
      { description: 'extra props OK', assertion: "expect(isConformingShape({name: '', age: 30})).toBeTruthy()" },
    ],
    hints: ['Check object, not null, then property existence, then property type.'],
    tags: ['TypeScript', 'interface', 'structural-typing', 'runtime-guard', 'intermediate'],
  },
  {
    slug: 'ts-interface-17',
    title: 'Interface — Implement a Stack',
    description: `## Interfaces as Contracts: Stack

**Challenge:** Implement \`createStack<T>()\` returning an object satisfying the \`Stack<T>\` interface.

\`\`\`ts
const s = createStack<number>()
s.push(1); s.push(2)
s.pop()   // → 2
s.peek()  // → 1
s.size    // → 1
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `interface Stack<T> {
  push(item: T): void
  pop(): T | undefined
  peek(): T | undefined
  size: number
}

function createStack<T>(): Stack<T> {
  // Implement using a closure over an array
}`,
    solution: `interface Stack<T> {
  push(item: T): void
  pop(): T | undefined
  peek(): T | undefined
  size: number
}

function createStack<T>(): Stack<T> {
  const items: T[] = []
  return {
    push: (item: T) => { items.push(item) },
    pop: () => items.pop(),
    peek: () => items[items.length - 1],
    get size() { return items.length }
  }
}`,
    tests: [
      { description: 'size after two pushes', assertion: "const s = createStack(); s.push(1); s.push(2); expect(s.size).toBe(2)" },
      { description: 'pop returns last', assertion: "const s = createStack(); s.push('a'); expect(s.pop()).toBe('a')" },
      { description: 'peek does not remove', assertion: "const s = createStack(); s.push(10); expect(s.peek()).toBe(10); expect(s.size).toBe(1)" },
      { description: 'pop empty returns undefined', assertion: "const s = createStack(); expect(s.pop()).toBeUndefined()" },
      { description: 'size decreases on pop', assertion: "const s = createStack(); s.push(1); s.push(2); s.pop(); expect(s.size).toBe(1)" },
    ],
    hints: ['Use a getter for size so it reflects the current array length.'],
    tags: ['TypeScript', 'interface', 'stack', 'closure', 'intermediate'],
  },
  {
    slug: 'ts-interface-18',
    title: 'Interface — Function as Argument',
    description: `## Function Types in Signatures

**Challenge:** Implement \`applyCallback<T, U>(value, callback)\` that applies \`callback\` to \`value\` and returns the result.

\`\`\`ts
applyCallback(5, x => x * 2)            // → 10
applyCallback('hello', s => s.length)  // → 5
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `type Transform<T, U> = (value: T) => U

function applyCallback<T, U>(value: T, callback: Transform<T, U>): U {
  // Call callback with value
}`,
    solution: `type Transform<T, U> = (value: T) => U

function applyCallback<T, U>(value: T, callback: Transform<T, U>): U {
  return callback(value)
}`,
    tests: [
      { description: 'doubles number', assertion: "expect(applyCallback(5, x => x * 2)).toBe(10)" },
      { description: 'uppercases string', assertion: "expect(applyCallback('hello', s => s.toUpperCase())).toBe('HELLO')" },
      { description: 'gets array length', assertion: "expect(applyCallback([1,2,3], arr => arr.length)).toBe(3)" },
      { description: 'negates boolean', assertion: "expect(applyCallback(true, b => !b)).toBe(false)" },
      { description: 'trims string', assertion: "expect(applyCallback('  ', s => s.trim())).toBe('')" },
    ],
    hints: ['Just call callback(value).'],
    tags: ['TypeScript', 'interface', 'function-type', 'beginner'],
  },
  {
    slug: 'ts-interface-19',
    title: 'Interface — Exhaustive Switch',
    description: `## Exhaustive Unions with switch

A **switch** over a discriminated union's \`type\` field is exhaustive when all cases are handled.

**Challenge:** Implement \`processStatus(status)\` for all three union variants.

\`\`\`ts
processStatus({ type: 'ok', value: 'data' })           // → 'OK: data'
processStatus({ type: 'error', message: 'not found' }) // → 'Error: not found'
processStatus({ type: 'pending' })                     // → 'Pending'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `type Status =
  | { type: 'ok'; value: string }
  | { type: 'error'; message: string }
  | { type: 'pending' }

function processStatus(status: Status): string {
  // switch on status.type
}`,
    solution: `type Status =
  | { type: 'ok'; value: string }
  | { type: 'error'; message: string }
  | { type: 'pending' }

function processStatus(status: Status): string {
  switch (status.type) {
    case 'ok': return \`OK: \${status.value}\`
    case 'error': return \`Error: \${status.message}\`
    case 'pending': return 'Pending'
  }
}`,
    tests: [
      { description: 'ok with value', assertion: "expect(processStatus({type:'ok', value:'data'})).toBe('OK: data')" },
      { description: 'error with message', assertion: "expect(processStatus({type:'error', message:'not found'})).toBe('Error: not found')" },
      { description: 'pending', assertion: "expect(processStatus({type:'pending'})).toBe('Pending')" },
      { description: 'ok with empty value', assertion: "expect(processStatus({type:'ok', value:''})).toBe('OK: ')" },
      { description: 'error with empty message', assertion: "expect(processStatus({type:'error', message:''})).toBe('Error: ')" },
    ],
    hints: ['TypeScript narrows status inside each case branch.'],
    tags: ['TypeScript', 'interface', 'discriminated-union', 'switch', 'intermediate'],
  },
  {
    slug: 'ts-interface-20',
    title: 'Interface — Generic Container',
    description: `## Fluent Generic Interface: Container<T>

**Challenge:** Implement \`createContainer<T>(value)\` returning a \`Container<T>\` with a \`map\` method for transformation.

\`\`\`ts
createContainer(5).map(x => x * 2).value   // → 10
createContainer('hi').map(s => s.length).value // → 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `interface Container<T> {
  value: T
  map: <U>(fn: (v: T) => U) => Container<U>
}

function createContainer<T>(value: T): Container<T> {
  // Return an object with value and map
}`,
    solution: `interface Container<T> {
  value: T
  map: <U>(fn: (v: T) => U) => Container<U>
}

function createContainer<T>(value: T): Container<T> {
  return {
    value,
    map: <U>(fn: (v: T) => U): Container<U> => createContainer(fn(value))
  }
}`,
    tests: [
      { description: 'holds value', assertion: "expect(createContainer(42).value).toBe(42)" },
      { description: 'maps number', assertion: "expect(createContainer(5).map(x => x * 2).value).toBe(10)" },
      { description: 'maps string', assertion: "expect(createContainer('hello').map(s => s.toUpperCase()).value).toBe('HELLO')" },
      { description: 'chains maps', assertion: "expect(createContainer(1).map(x => x + 1).map(x => x * 3).value).toBe(6)" },
      { description: 'holds any type', assertion: "expect(createContainer('hi').value).toBe('hi')" },
    ],
    hints: ['map should call createContainer recursively to return a new Container.'],
    tags: ['TypeScript', 'interface', 'generic', 'functor', 'advanced'],
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/features/exercises/infrastructure/data/typescript/interfaces.ts
git commit -m "feat(ts): add 20 interface exercises"
```

---
### Task 4: Create generics.ts (20 Generic Exercises)

**Files:**
- Create: `src/features/exercises/infrastructure/data/typescript/generics.ts`

- [ ] **Step 1: Create the file**

```ts
import type { Exercise } from '@/shared/types/exercises'

export const tsGenericsExercises: Exercise[] = [
  {
    slug: 'ts-generic-1',
    title: 'Generics — identity<T>',
    description: `## Generics: The Identity Function

The simplest generic function is **identity** — it accepts a value of any type and returns it unchanged.  
**\`<T>\`** declares a type parameter that TypeScript infers from the argument.

**Challenge:** Implement \`identity<T>(x: T): T\`.

\`\`\`ts
identity(42)       // → 42
identity('hello') // → 'hello'
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function identity<T>(x: T): T {
  // Return x unchanged
}`,
    solution: `function identity<T>(x: T): T {
  return x
}`,
    tests: [
      { description: 'returns number', assertion: "expect(identity(42)).toBe(42)" },
      { description: 'returns string', assertion: "expect(identity('hello')).toBe('hello')" },
      { description: 'returns boolean', assertion: "expect(identity(true)).toBe(true)" },
      { description: 'returns array', assertion: "expect(identity([1,2])).toEqual([1,2])" },
      { description: 'returns null', assertion: "expect(identity(null)).toBeNull()" },
    ],
    hints: ['The simplest generic function — just return what you receive.'],
    tags: ['TypeScript', 'generic', 'identity', 'beginner'],
  },
  {
    slug: 'ts-generic-2',
    title: 'Generics — head<T>',
    description: `## Generics: head<T>

**Challenge:** Implement \`head<T>(arr: T[]): T | undefined\` returning the first element, or \`undefined\` for empty arrays.

\`\`\`ts
head([1, 2, 3])  // → 1
head([])         // → undefined
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function head<T>(arr: T[]): T | undefined {
  // Return first element
}`,
    solution: `function head<T>(arr: T[]): T | undefined {
  return arr[0]
}`,
    tests: [
      { description: 'first of numbers', assertion: "expect(head([1,2,3])).toBe(1)" },
      { description: 'first of strings', assertion: "expect(head(['a','b'])).toBe('a')" },
      { description: 'empty array', assertion: "expect(head([])).toBeUndefined()" },
      { description: 'single element', assertion: "expect(head([42])).toBe(42)" },
      { description: 'first of booleans', assertion: "expect(head([true, false])).toBe(true)" },
    ],
    hints: ['arr[0] returns undefined for empty arrays naturally.'],
    tags: ['TypeScript', 'generic', 'array', 'beginner'],
  },
  {
    slug: 'ts-generic-3',
    title: 'Generics — tail<T>',
    description: `## Generics: tail<T>

**Challenge:** Implement \`tail<T>(arr: T[]): T[]\` returning all elements except the first.

\`\`\`ts
tail([1, 2, 3])  // → [2, 3]
tail([1])        // → []
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function tail<T>(arr: T[]): T[] {
  // Return all but first element
}`,
    solution: `function tail<T>(arr: T[]): T[] {
  return arr.slice(1)
}`,
    tests: [
      { description: 'removes first element', assertion: "expect(tail([1,2,3])).toEqual([2,3])" },
      { description: 'single element gives empty', assertion: "expect(tail([1])).toEqual([])" },
      { description: 'empty stays empty', assertion: "expect(tail([])).toEqual([])" },
      { description: 'works with strings', assertion: "expect(tail(['a','b','c'])).toEqual(['b','c'])" },
      { description: 'correct length', assertion: "expect(tail([1,2,3,4])).toHaveLength(3)" },
    ],
    hints: ['arr.slice(1) starts at index 1 and goes to the end.'],
    tags: ['TypeScript', 'generic', 'array', 'beginner'],
  },
  {
    slug: 'ts-generic-4',
    title: 'Generics — last<T>',
    description: `## Generics: last<T>

**Challenge:** Implement \`last<T>(arr: T[]): T | undefined\` returning the last element.

\`\`\`ts
last([1, 2, 3])  // → 3
last([])         // → undefined
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function last<T>(arr: T[]): T | undefined {
  // Return last element
}`,
    solution: `function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1]
}`,
    tests: [
      { description: 'last of numbers', assertion: "expect(last([1,2,3])).toBe(3)" },
      { description: 'single element', assertion: "expect(last(['a'])).toBe('a')" },
      { description: 'empty array', assertion: "expect(last([])).toBeUndefined()" },
      { description: 'last boolean', assertion: "expect(last([true, false])).toBe(false)" },
      { description: 'last of 4 elements', assertion: "expect(last([10,20,30,40])).toBe(40)" },
    ],
    hints: ['arr[arr.length - 1] returns undefined for empty arrays.'],
    tags: ['TypeScript', 'generic', 'array', 'beginner'],
  },
  {
    slug: 'ts-generic-5',
    title: 'Generics — nth<T>',
    description: `## Generics: nth<T>

**Challenge:** Implement \`nth<T>(arr: T[], n: number): T | undefined\` returning the element at index \`n\`.

\`\`\`ts
nth([10, 20, 30], 1)  // → 20
nth([1, 2, 3], 5)     // → undefined
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function nth<T>(arr: T[], n: number): T | undefined {
  // Return element at index n
}`,
    solution: `function nth<T>(arr: T[], n: number): T | undefined {
  return arr[n]
}`,
    tests: [
      { description: 'element at index 1', assertion: "expect(nth([10,20,30], 1)).toBe(20)" },
      { description: 'first element', assertion: "expect(nth([1,2,3], 0)).toBe(1)" },
      { description: 'out of bounds', assertion: "expect(nth([1,2,3], 5)).toBeUndefined()" },
      { description: 'last element by index', assertion: "expect(nth(['a','b','c'], 2)).toBe('c')" },
      { description: 'empty array', assertion: "expect(nth([], 0)).toBeUndefined()" },
    ],
    hints: ['arr[n] is fine — returns undefined automatically when out of range.'],
    tags: ['TypeScript', 'generic', 'array', 'beginner'],
  },
  {
    slug: 'ts-generic-6',
    title: 'Generics — swap<T, U>',
    description: `## Generics: swap a Pair

**Challenge:** Implement \`swap<T, U>(pair: [T, U]): [U, T]\` that reverses a two-element tuple.

\`\`\`ts
swap([1, 'a'])     // → ['a', 1]
swap([true, 42])   // → [42, true]
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function swap<T, U>(pair: [T, U]): [U, T] {
  // Swap the two elements
}`,
    solution: `function swap<T, U>(pair: [T, U]): [U, T] {
  return [pair[1], pair[0]]
}`,
    tests: [
      { description: 'swaps number and string', assertion: "expect(swap([1, 'a'])).toEqual(['a', 1])" },
      { description: 'swaps string and number', assertion: "expect(swap(['hello', 42])).toEqual([42, 'hello'])" },
      { description: 'swaps booleans', assertion: "expect(swap([true, false])).toEqual([false, true])" },
      { description: 'swaps null and undefined', assertion: "expect(swap([null, undefined])).toEqual([undefined, null])" },
      { description: 'first element is second', assertion: "expect(swap([1, 2])[0]).toBe(2)" },
    ],
    hints: ['Just destructure or index into the tuple.'],
    tags: ['TypeScript', 'generic', 'tuple', 'beginner'],
  },
  {
    slug: 'ts-generic-7',
    title: 'Generics — pick<T, K>',
    description: `## Generics: pick<T, K extends keyof T>

**Challenge:** Implement \`pick<T, K extends keyof T>(obj: T, key: K): T[K]\` returning the value at \`key\`.

\`\`\`ts
pick({ a: 1, b: 2 }, 'a')           // → 1
pick({ name: 'Alice', age: 30 }, 'name')  // → 'Alice'
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function pick<T, K extends keyof T>(obj: T, key: K): T[K] {
  // Return obj[key]
}`,
    solution: `function pick<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}`,
    tests: [
      { description: 'picks number', assertion: "expect(pick({a:1, b:2}, 'a')).toBe(1)" },
      { description: 'picks string', assertion: "expect(pick({name:'Alice', age:30}, 'name')).toBe('Alice')" },
      { description: 'picks last key', assertion: "expect(pick({x:10, y:20, z:30}, 'z')).toBe(30)" },
      { description: 'picks boolean', assertion: "expect(pick({flag:true}, 'flag')).toBe(true)" },
      { description: 'picks array', assertion: "expect(pick({items:[1,2]}, 'items')).toEqual([1,2])" },
    ],
    hints: ['K extends keyof T guarantees the key exists — TypeScript will catch mistakes.'],
    tags: ['TypeScript', 'generic', 'keyof', 'intermediate'],
  },
  {
    slug: 'ts-generic-8',
    title: 'Generics — getLength<T extends {length}>',
    description: `## Generic Constraints

**\`T extends { length: number }\`** is a **constraint** — it allows any type that has a \`length\` property (arrays, strings, etc.).

**Challenge:** Implement \`getLength<T extends { length: number }>(x: T): number\`.

\`\`\`ts
getLength([1, 2, 3])  // → 3
getLength('hello')   // → 5
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function getLength<T extends { length: number }>(x: T): number {
  // Return x.length
}`,
    solution: `function getLength<T extends { length: number }>(x: T): number {
  return x.length
}`,
    tests: [
      { description: 'array length', assertion: "expect(getLength([1,2,3])).toBe(3)" },
      { description: 'string length', assertion: "expect(getLength('hello')).toBe(5)" },
      { description: 'empty array', assertion: "expect(getLength([])).toBe(0)" },
      { description: 'empty string', assertion: "expect(getLength('')).toBe(0)" },
      { description: '5-element array', assertion: "expect(getLength([1,2,3,4,5])).toBe(5)" },
    ],
    hints: ['The constraint T extends { length: number } ensures .length is always available.'],
    tags: ['TypeScript', 'generic', 'constraint', 'intermediate'],
  },
  {
    slug: 'ts-generic-9',
    title: 'Generics — Generic Stack Class',
    description: `## Generic Classes: Stack<T>

**Challenge:** Implement a generic \`Stack<T>\` class with \`push\`, \`pop\`, \`peek\`, and a \`size\` getter.

\`\`\`ts
const s = new Stack<number>()
s.push(1); s.push(2)
s.peek()  // → 2
s.pop()   // → 2
s.size    // → 1
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `class Stack<T> {
  private items: T[] = []

  push(item: T): void {
    // Add to top
  }

  pop(): T | undefined {
    // Remove and return top
  }

  peek(): T | undefined {
    // Return top without removing
  }

  get size(): number {
    // Return number of items
  }
}`,
    solution: `class Stack<T> {
  private items: T[] = []

  push(item: T): void {
    this.items.push(item)
  }

  pop(): T | undefined {
    return this.items.pop()
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1]
  }

  get size(): number {
    return this.items.length
  }
}`,
    tests: [
      { description: 'size after two pushes', assertion: "const s = new Stack(); s.push(1); s.push(2); expect(s.size).toBe(2)" },
      { description: 'pop returns last', assertion: "const s = new Stack(); s.push('a'); expect(s.pop()).toBe('a')" },
      { description: 'peek does not remove', assertion: "const s = new Stack(); s.push(10); expect(s.peek()).toBe(10)" },
      { description: 'pop empty is undefined', assertion: "const s = new Stack(); expect(s.pop()).toBeUndefined()" },
      { description: 'size decreases after pop', assertion: "const s = new Stack(); s.push(1); s.pop(); expect(s.size).toBe(0)" },
    ],
    hints: ['Arrays have push/pop built-in which map directly to stack operations.'],
    tags: ['TypeScript', 'generic', 'class', 'stack', 'intermediate'],
  },
  {
    slug: 'ts-generic-10',
    title: 'Generics — Generic Queue Class',
    description: `## Generic Classes: Queue<T>

**Challenge:** Implement a generic \`Queue<T>\` class with \`enqueue\`, \`dequeue\`, \`peek\`, and \`size\`.

\`\`\`ts
const q = new Queue<number>()
q.enqueue(1); q.enqueue(2)
q.dequeue()  // → 1 (FIFO)
q.size       // → 1
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `class Queue<T> {
  private items: T[] = []

  enqueue(item: T): void {
    // Add to back
  }

  dequeue(): T | undefined {
    // Remove and return front
  }

  peek(): T | undefined {
    // Return front without removing
  }

  get size(): number {
    // Return count
  }
}`,
    solution: `class Queue<T> {
  private items: T[] = []

  enqueue(item: T): void {
    this.items.push(item)
  }

  dequeue(): T | undefined {
    return this.items.shift()
  }

  peek(): T | undefined {
    return this.items[0]
  }

  get size(): number {
    return this.items.length
  }
}`,
    tests: [
      { description: 'FIFO order', assertion: "const q = new Queue(); q.enqueue(1); q.enqueue(2); expect(q.dequeue()).toBe(1)" },
      { description: 'size after two enqueues', assertion: "const q = new Queue(); q.enqueue('a'); q.enqueue('b'); expect(q.size).toBe(2)" },
      { description: 'dequeue empty is undefined', assertion: "const q = new Queue(); expect(q.dequeue()).toBeUndefined()" },
      { description: 'peek does not remove', assertion: "const q = new Queue(); q.enqueue(5); expect(q.peek()).toBe(5); expect(q.size).toBe(1)" },
      { description: 'size decreases after dequeue', assertion: "const q = new Queue(); q.enqueue(1); q.enqueue(2); q.dequeue(); expect(q.size).toBe(1)" },
    ],
    hints: ['shift() removes and returns the first element — use it for dequeue.'],
    tags: ['TypeScript', 'generic', 'class', 'queue', 'intermediate'],
  },
  {
    slug: 'ts-generic-11',
    title: 'Generics — zip<T, U>',
    description: `## Generics: zip<T, U>

**Challenge:** Implement \`zip<T, U>(a: T[], b: U[]): [T, U][]\` that pairs elements by index, stopping at the shorter array.

\`\`\`ts
zip([1,2,3], ['a','b','c'])  // → [[1,'a'],[2,'b'],[3,'c']]
zip([1,2], ['a','b','c'])    // → [[1,'a'],[2,'b']]
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function zip<T, U>(a: T[], b: U[]): [T, U][] {
  // Pair elements up to the shorter length
}`,
    solution: `function zip<T, U>(a: T[], b: U[]): [T, U][] {
  const len = Math.min(a.length, b.length)
  return Array.from({ length: len }, (_, i) => [a[i], b[i]] as [T, U])
}`,
    tests: [
      { description: 'same-length arrays', assertion: "expect(zip([1,2,3], ['a','b','c'])).toEqual([[1,'a'],[2,'b'],[3,'c']])" },
      { description: 'truncates to shorter', assertion: "expect(zip([1,2], ['a','b','c'])).toHaveLength(2)" },
      { description: 'empty arrays', assertion: "expect(zip([], [])).toEqual([])" },
      { description: 'single pair', assertion: "expect(zip([1], ['a'])[0]).toEqual([1,'a'])" },
      { description: 'shorter first arg', assertion: "expect(zip([1,2,3], ['a'])).toEqual([[1,'a']])" },
    ],
    hints: ['Math.min(a.length, b.length) gives the safe iteration count.'],
    tags: ['TypeScript', 'generic', 'zip', 'intermediate'],
  },
  {
    slug: 'ts-generic-12',
    title: 'Generics — unique<T>',
    description: `## Generics: unique<T>

**Challenge:** Implement \`unique<T>(arr: T[]): T[]\` returning only the distinct values, preserving order.

\`\`\`ts
unique([1, 2, 2, 3, 3])  // → [1, 2, 3]
unique(['a', 'b', 'a'])  // → ['a', 'b']
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function unique<T>(arr: T[]): T[] {
  // Return deduplicated array
}`,
    solution: `function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)]
}`,
    tests: [
      { description: 'removes duplicates', assertion: "expect(unique([1,2,2,3,3])).toEqual([1,2,3])" },
      { description: 'works with strings', assertion: "expect(unique(['a','b','a'])).toEqual(['a','b'])" },
      { description: 'empty array', assertion: "expect(unique([])).toEqual([])" },
      { description: 'no duplicates unchanged', assertion: "expect(unique([1])).toEqual([1])" },
      { description: 'all same gives length 1', assertion: "expect(unique([1,1,1])).toHaveLength(1)" },
    ],
    hints: ['Set preserves insertion order and removes duplicates.'],
    tags: ['TypeScript', 'generic', 'Set', 'beginner'],
  },
  {
    slug: 'ts-generic-13',
    title: 'Generics — mapValues<T, U>',
    description: `## Generics: mapValues

**Challenge:** Implement \`mapValues<T, U>(obj: Record<string, T>, fn: (v: T) => U): Record<string, U>\` transforming every value.

\`\`\`ts
mapValues({ a: 1, b: 2 }, x => x * 2)   // → { a: 2, b: 4 }
mapValues({ x: 'hi' }, s => s.length)   // → { x: 2 }
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function mapValues<T, U>(obj: Record<string, T>, fn: (v: T) => U): Record<string, U> {
  // Transform each value
}`,
    solution: `function mapValues<T, U>(obj: Record<string, T>, fn: (v: T) => U): Record<string, U> {
  const result: Record<string, U> = {}
  for (const key of Object.keys(obj)) result[key] = fn(obj[key])
  return result
}`,
    tests: [
      { description: 'doubles values', assertion: "expect(mapValues({a:1,b:2}, x=>x*2)).toEqual({a:2,b:4})" },
      { description: 'maps string to length', assertion: "expect(mapValues({x:'hello'}, s=>s.length)).toEqual({x:5})" },
      { description: 'empty object', assertion: "expect(mapValues({}, x=>x)).toEqual({})" },
      { description: 'adds to value', assertion: "expect(mapValues({n:3}, x=>x+1)).toEqual({n:4})" },
      { description: 'preserves key count', assertion: "expect(Object.keys(mapValues({a:1,b:2,c:3},x=>x))).toHaveLength(3)" },
    ],
    hints: ['Object.keys gives all own enumerable keys.'],
    tags: ['TypeScript', 'generic', 'record', 'intermediate'],
  },
  {
    slug: 'ts-generic-14',
    title: 'Generics — filter<T>',
    description: `## Generics: filter<T>

**Challenge:** Implement \`filter<T>(arr: T[], pred: (x: T) => boolean): T[]\`.

\`\`\`ts
filter([1,2,3,4,5], x => x % 2 === 0)  // → [2, 4]
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function filter<T>(arr: T[], pred: (x: T) => boolean): T[] {
  // Return elements satisfying pred
}`,
    solution: `function filter<T>(arr: T[], pred: (x: T) => boolean): T[] {
  return arr.filter(pred)
}`,
    tests: [
      { description: 'filters even numbers', assertion: "expect(filter([1,2,3,4,5], x=>x%2===0)).toEqual([2,4])" },
      { description: 'filters by string length', assertion: "expect(filter(['a','bb','ccc'], s=>s.length>1)).toEqual(['bb','ccc'])" },
      { description: 'empty input', assertion: "expect(filter([], x=>true)).toEqual([])" },
      { description: 'no matches', assertion: "expect(filter([1,2,3], x=>x>10)).toEqual([])" },
      { description: 'filters null values', assertion: "expect(filter([null, 1, null, 2], x=>x!==null)).toEqual([1,2])" },
    ],
    hints: ['Delegate to Array.prototype.filter.'],
    tags: ['TypeScript', 'generic', 'filter', 'beginner'],
  },
  {
    slug: 'ts-generic-15',
    title: 'Generics — reduce<T, U>',
    description: `## Generics: reduce<T, U>

**Challenge:** Implement \`reduce<T, U>(arr: T[], fn: (acc: U, x: T) => U, init: U): U\`.

\`\`\`ts
reduce([1,2,3,4], (acc, x) => acc + x, 0)  // → 10
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function reduce<T, U>(arr: T[], fn: (acc: U, x: T) => U, init: U): U {
  // Fold the array
}`,
    solution: `function reduce<T, U>(arr: T[], fn: (acc: U, x: T) => U, init: U): U {
  return arr.reduce(fn, init)
}`,
    tests: [
      { description: 'sums numbers', assertion: "expect(reduce([1,2,3,4], (acc,x)=>acc+x, 0)).toBe(10)" },
      { description: 'concatenates strings', assertion: "expect(reduce(['a','b','c'], (acc,x)=>acc+x, '')).toBe('abc')" },
      { description: 'empty array', assertion: "expect(reduce([], (acc,x)=>acc+x, 0)).toBe(0)" },
      { description: 'builds array', assertion: "expect(reduce([1,2,3], (acc,x)=>[...acc,x*2], [])).toEqual([2,4,6])" },
      { description: 'max value', assertion: "expect(reduce([1,2,3,4,5], (acc,x)=>Math.max(acc,x), 0)).toBe(5)" },
    ],
    hints: ['Delegate to Array.prototype.reduce.'],
    tags: ['TypeScript', 'generic', 'reduce', 'intermediate'],
  },
  {
    slug: 'ts-generic-16',
    title: 'Generics — chunk<T>',
    description: `## Generics: chunk<T>

**Challenge:** Implement \`chunk<T>(arr: T[], size: number): T[][]\` splitting \`arr\` into subarrays of \`size\`.

\`\`\`ts
chunk([1,2,3,4], 2)    // → [[1,2],[3,4]]
chunk([1,2,3,4,5], 2)  // → [[1,2],[3,4],[5]]
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function chunk<T>(arr: T[], size: number): T[][] {
  // Split into chunks of given size
}`,
    solution: `function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size))
  return result
}`,
    tests: [
      { description: 'even split', assertion: "expect(chunk([1,2,3,4], 2)).toEqual([[1,2],[3,4]])" },
      { description: 'remainder chunk', assertion: "expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]])" },
      { description: 'empty array', assertion: "expect(chunk([], 2)).toEqual([])" },
      { description: 'size 1 gives n chunks', assertion: "expect(chunk([1,2,3], 1)).toHaveLength(3)" },
      { description: 'size equals length', assertion: "expect(chunk([1,2,3,4,5,6], 3)).toEqual([[1,2,3],[4,5,6]])" },
    ],
    hints: ['Loop with step = size, use slice to grab each chunk.'],
    tags: ['TypeScript', 'generic', 'chunk', 'intermediate'],
  },
  {
    slug: 'ts-generic-17',
    title: 'Generics — flatten<T>',
    description: `## Generics: flatten<T>

**Challenge:** Implement \`flatten<T>(arr: T[][]): T[]\` collapsing one level of nesting.

\`\`\`ts
flatten([[1,2],[3,4]])  // → [1,2,3,4]
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function flatten<T>(arr: T[][]): T[] {
  // Flatten one level
}`,
    solution: `function flatten<T>(arr: T[][]): T[] {
  return arr.flat()
}`,
    tests: [
      { description: 'flattens nested arrays', assertion: "expect(flatten([[1,2],[3,4]])).toEqual([1,2,3,4])" },
      { description: 'single-element subarrays', assertion: "expect(flatten([[1],[2],[3]])).toEqual([1,2,3])" },
      { description: 'empty input', assertion: "expect(flatten([])).toEqual([])" },
      { description: 'single subarray', assertion: "expect(flatten([[1,2,3]])).toEqual([1,2,3])" },
      { description: 'correct length', assertion: "expect(flatten([[1,2],[3,4],[5]])).toHaveLength(5)" },
    ],
    hints: ['Array.prototype.flat() with default depth=1 does exactly this.'],
    tags: ['TypeScript', 'generic', 'flatten', 'beginner'],
  },
  {
    slug: 'ts-generic-18',
    title: 'Generics — partition<T>',
    description: `## Generics: partition<T>

**Challenge:** Implement \`partition<T>(arr: T[], pred: (x: T) => boolean): [T[], T[]]\` splitting into \`[matches, nonMatches]\`.

\`\`\`ts
partition([1,2,3,4,5], x => x % 2 === 0)  // → [[2,4],[1,3,5]]
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function partition<T>(arr: T[], pred: (x: T) => boolean): [T[], T[]] {
  // Split into matching and non-matching
}`,
    solution: `function partition<T>(arr: T[], pred: (x: T) => boolean): [T[], T[]] {
  const yes: T[] = [], no: T[] = []
  for (const x of arr) (pred(x) ? yes : no).push(x)
  return [yes, no]
}`,
    tests: [
      { description: 'splits evens and odds', assertion: "expect(partition([1,2,3,4,5], x=>x%2===0)).toEqual([[2,4],[1,3,5]])" },
      { description: 'empty array', assertion: "expect(partition([], x=>true)).toEqual([[],[]])" },
      { description: 'all no-match', assertion: "expect(partition([1,2,3], x=>x>10)).toEqual([[],[1,2,3]])" },
      { description: 'matches part', assertion: "expect(partition([1,2,3,4], x=>x<3)[0]).toEqual([1,2])" },
      { description: 'string partition', assertion: "expect(partition(['a','bb','ccc'], s=>s.length===1)[0]).toEqual(['a'])" },
    ],
    hints: ['Use a conditional push to two separate arrays, then return them as a tuple.'],
    tags: ['TypeScript', 'generic', 'partition', 'intermediate'],
  },
  {
    slug: 'ts-generic-19',
    title: 'Generics — groupBy<T>',
    description: `## Generics: groupBy<T>

**Challenge:** Implement \`groupBy<T extends object>(arr: T[], key: keyof T): Record<string, T[]>\`.

\`\`\`ts
groupBy([{type:'a',v:1},{type:'b',v:2},{type:'a',v:3}], 'type')
// → { a: [{type:'a',v:1},{type:'a',v:3}], b: [{type:'b',v:2}] }
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function groupBy<T extends object>(arr: T[], key: keyof T): Record<string, T[]> {
  // Group items by the value at key
}`,
    solution: `function groupBy<T extends object>(arr: T[], key: keyof T): Record<string, T[]> {
  const result: Record<string, T[]> = {}
  for (const item of arr) {
    const k = String(item[key])
    if (!result[k]) result[k] = []
    result[k].push(item)
  }
  return result
}`,
    tests: [
      { description: 'groups by string key', assertion: "const r = groupBy([{k:'a',v:1},{k:'b',v:2},{k:'a',v:3}], 'k'); expect(r['a']).toHaveLength(2)" },
      { description: 'correct group count', assertion: "const r = groupBy([{type:'x'},{type:'y'},{type:'x'}], 'type'); expect(Object.keys(r)).toHaveLength(2)" },
      { description: 'empty array', assertion: "expect(groupBy([], 'x')).toEqual({})" },
      { description: 'groups by number key', assertion: "const r = groupBy([{n:1},{n:2},{n:1}], 'n'); expect(r['1']).toHaveLength(2)" },
      { description: 'single item group', assertion: "const r = groupBy([{t:'a'}], 't'); expect(r['a']).toHaveLength(1)" },
    ],
    hints: ['Convert the key value to string for the Record key.'],
    tags: ['TypeScript', 'generic', 'groupBy', 'intermediate'],
  },
  {
    slug: 'ts-generic-20',
    title: 'Generics — pipe<T>',
    description: `## Generics: Function Composition with pipe<T>

**Challenge:** Implement \`pipe<T>(...fns: ((x: T) => T)[]): (x: T) => T\` — a left-to-right function composer.

\`\`\`ts
pipe(x => x + 1, x => x * 2)(3)  // → (3+1)*2 = 8
pipe()(42)                         // → 42
\`\`\``,
    category: 'generic',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function pipe<T>(...fns: ((x: T) => T)[]): (x: T) => T {
  // Apply fns left-to-right
}`,
    solution: `function pipe<T>(...fns: ((x: T) => T)[]): (x: T) => T {
  return (x: T) => fns.reduce((v, fn) => fn(v), x)
}`,
    tests: [
      { description: 'adds then doubles', assertion: "expect(pipe(x=>x+1, x=>x*2)(3)).toBe(8)" },
      { description: 'doubles then adds', assertion: "expect(pipe(x=>x*2, x=>x+1)(5)).toBe(11)" },
      { description: 'no-op pipe', assertion: "expect(pipe()(42)).toBe(42)" },
      { description: 'single fn pipe', assertion: "expect(pipe(x=>x+1)(0)).toBe(1)" },
      { description: 'three fns', assertion: "expect(pipe(x=>x*2, x=>x*2, x=>x*2)(1)).toBe(8)" },
    ],
    hints: ['reduce with the initial value x threads the value through all functions.'],
    tags: ['TypeScript', 'generic', 'pipe', 'composition', 'advanced'],
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/features/exercises/infrastructure/data/typescript/generics.ts
git commit -m "feat(ts): add 20 generic exercises"
```

---
### Task 5: Create utility-types.ts (20 Utility Type Exercises)

**Files:**
- Create: `src/features/exercises/infrastructure/data/typescript/utility-types.ts`

- [ ] **Step 1: Create the file**

```ts
import type { Exercise } from '@/shared/types/exercises'

export const tsUtilityTypesExercises: Exercise[] = [
  {
    slug: 'ts-utility-1',
    title: 'Utility Types — Partial<T>',
    description: `## Utility Types: Partial<T>

**\`Partial<T>\`** makes every property of \`T\` optional.  
Useful for update functions where you only want to provide changed fields.

**Challenge:** Implement \`mergePartial<T extends object>(base: T, patch: Partial<T>): T\` that merges a partial update into a base object.

\`\`\`ts
mergePartial({ a: 1, b: 2 }, { b: 99 })  // → { a: 1, b: 99 }
\`\`\``,
    category: 'utility-type',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function mergePartial<T extends object>(base: T, patch: Partial<T>): T {
  // Merge patch into base
}`,
    solution: `function mergePartial<T extends object>(base: T, patch: Partial<T>): T {
  return { ...base, ...patch }
}`,
    tests: [
      { description: 'merges partial update', assertion: "expect(mergePartial({a:1,b:2}, {b:99})).toEqual({a:1,b:99})" },
      { description: 'empty patch unchanged', assertion: "expect(mergePartial({a:1}, {})).toEqual({a:1})" },
      { description: 'adds new property from base', assertion: "expect(mergePartial({x:1,y:2}, {x:5})).toEqual({x:5,y:2})" },
      { description: 'string values', assertion: "expect(mergePartial({name:'Alice'}, {name:'Bob'})).toEqual({name:'Bob'})" },
      { description: 'empty base with patch', assertion: "expect(mergePartial({}, {})).toEqual({})" },
    ],
    hints: ['Spread operators: { ...base, ...patch } — the patch overwrites base fields.'],
    tags: ['TypeScript', 'utility-type', 'Partial', 'beginner'],
  },
  {
    slug: 'ts-utility-2',
    title: 'Utility Types — Pick<T, K>',
    description: `## Utility Types: Pick<T, K>

**\`Pick<T, K>\`** constructs a type with only the properties \`K\` from \`T\`.

**Challenge:** Implement \`pickKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>\`.

\`\`\`ts
pickKeys({ a: 1, b: 2, c: 3 }, ['a', 'c'])  // → { a: 1, c: 3 }
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function pickKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  // Return new object with only the listed keys
}`,
    solution: `function pickKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>
  for (const k of keys) result[k] = obj[k]
  return result
}`,
    tests: [
      { description: 'picks two keys', assertion: "expect(pickKeys({a:1,b:2,c:3}, ['a','c'])).toEqual({a:1,c:3})" },
      { description: 'single key', assertion: "expect(pickKeys({x:1,y:2}, ['x'])).toEqual({x:1})" },
      { description: 'no keys', assertion: "expect(pickKeys({a:1}, [])).toEqual({})" },
      { description: 'all keys', assertion: "expect(pickKeys({a:1,b:2}, ['a','b'])).toEqual({a:1,b:2})" },
      { description: 'string values', assertion: "expect(pickKeys({name:'Alice',age:30}, ['name'])).toEqual({name:'Alice'})" },
    ],
    hints: ['Loop through keys and copy each to a new object.'],
    tags: ['TypeScript', 'utility-type', 'Pick', 'intermediate'],
  },
  {
    slug: 'ts-utility-3',
    title: 'Utility Types — Omit<T, K>',
    description: `## Utility Types: Omit<T, K>

**\`Omit<T, K>\`** removes the keys \`K\` from type \`T\`.

**Challenge:** Implement \`omitKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>\`.

\`\`\`ts
omitKeys({ a: 1, b: 2, c: 3 }, ['b'])  // → { a: 1, c: 3 }
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function omitKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  // Return new object without the listed keys
}`,
    solution: `function omitKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj }
  for (const k of keys) delete (result as any)[k]
  return result as Omit<T, K>
}`,
    tests: [
      { description: 'omits one key', assertion: "expect(omitKeys({a:1,b:2,c:3}, ['b'])).toEqual({a:1,c:3})" },
      { description: 'omits two keys', assertion: "expect(omitKeys({a:1,b:2,c:3}, ['a','b'])).toEqual({c:3})" },
      { description: 'no keys to omit', assertion: "expect(omitKeys({a:1,b:2}, [])).toEqual({a:1,b:2})" },
      { description: 'single remaining key', assertion: "expect(Object.keys(omitKeys({a:1,b:2,c:3}, ['a','b']))).toHaveLength(1)" },
      { description: 'string values preserved', assertion: "expect(omitKeys({x:'hello',y:42}, ['y'])).toEqual({x:'hello'})" },
    ],
    hints: ['Copy the object, then delete the unwanted keys.'],
    tags: ['TypeScript', 'utility-type', 'Omit', 'intermediate'],
  },
  {
    slug: 'ts-utility-4',
    title: 'Utility Types — Readonly<T>',
    description: `## Utility Types: Readonly<T>

**\`Readonly<T>\`** marks all properties as non-writable at the type level.

**Challenge:** Implement \`createReadonly<T extends object>(obj: T): Readonly<T>\` that prevents mutations using \`Object.freeze\`.

\`\`\`ts
const ro = createReadonly({ x: 1, y: 2 })
ro.x  // → 1  (but writing would throw in strict mode)
\`\`\``,
    category: 'utility-type',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function createReadonly<T extends object>(obj: T): Readonly<T> {
  // Prevent mutations
}`,
    solution: `function createReadonly<T extends object>(obj: T): Readonly<T> {
  return Object.freeze({ ...obj })
}`,
    tests: [
      { description: 'returns value correctly', assertion: "expect(createReadonly({x:1}).x).toBe(1)" },
      { description: 'properties accessible', assertion: "expect(createReadonly({name:'Alice'})).toEqual({name:'Alice'})" },
      { description: 'multiple properties', assertion: "const r = createReadonly({a:1,b:2}); expect(r.a).toBe(1); expect(r.b).toBe(2)" },
      { description: 'is frozen', assertion: "expect(Object.isFrozen(createReadonly({a:1}))).toBe(true)" },
      { description: 'empty object', assertion: "expect(createReadonly({})).toEqual({})" },
    ],
    hints: ['Object.freeze prevents property mutation at runtime.'],
    tags: ['TypeScript', 'utility-type', 'Readonly', 'beginner'],
  },
  {
    slug: 'ts-utility-5',
    title: 'Utility Types — Record<K, V>',
    description: `## Utility Types: Record<K, V>

**\`Record<K, V>\`** creates an object type with keys of type \`K\` and values of type \`V\`.

**Challenge:** Implement \`buildRecord<K extends string, V>(keys: K[], value: V): Record<K, V>\` that creates an object mapping every key to \`value\`.

\`\`\`ts
buildRecord(['a', 'b', 'c'], 0)  // → { a: 0, b: 0, c: 0 }
\`\`\``,
    category: 'utility-type',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function buildRecord<K extends string, V>(keys: K[], value: V): Record<K, V> {
  // Create record mapping each key to value
}`,
    solution: `function buildRecord<K extends string, V>(keys: K[], value: V): Record<K, V> {
  const result = {} as Record<K, V>
  for (const k of keys) result[k] = value
  return result
}`,
    tests: [
      { description: 'maps all keys to value', assertion: "expect(buildRecord(['a','b','c'], 0)).toEqual({a:0,b:0,c:0})" },
      { description: 'string value', assertion: "expect(buildRecord(['x','y'], 'yes')).toEqual({x:'yes',y:'yes'})" },
      { description: 'empty keys', assertion: "expect(buildRecord([], 1)).toEqual({})" },
      { description: 'single key', assertion: "expect(buildRecord(['k'], 42)).toEqual({k:42})" },
      { description: 'boolean value', assertion: "expect(buildRecord(['a','b'], true)).toEqual({a:true,b:true})" },
    ],
    hints: ['Loop through keys and assign the same value to each.'],
    tags: ['TypeScript', 'utility-type', 'Record', 'beginner'],
  },
  {
    slug: 'ts-utility-6',
    title: 'Utility Types — Required<T>',
    description: `## Utility Types: Required<T>

**\`Required<T>\`** makes every optional property mandatory.

**Challenge:** Implement \`requireAll<T extends object>(obj: T): Required<T>\` — since properties can be undefined in JS, this function should throw if any own value is \`undefined\`.

\`\`\`ts
requireAll({ a: 1, b: 2 })      // → { a: 1, b: 2 } ✅
requireAll({ a: 1, b: undefined }) // throws
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function requireAll<T extends object>(obj: T): Required<T> {
  // Throw if any property is undefined
}`,
    solution: `function requireAll<T extends object>(obj: T): Required<T> {
  for (const key of Object.keys(obj)) {
    if ((obj as any)[key] === undefined) throw new Error(\`Missing: \${key}\`)
  }
  return obj as Required<T>
}`,
    tests: [
      { description: 'passes complete object', assertion: "expect(requireAll({a:1,b:2})).toEqual({a:1,b:2})" },
      { description: 'throws on undefined', assertion: "expect(() => requireAll({a:1, b:undefined})).toThrow()" },
      { description: 'passes empty object', assertion: "expect(requireAll({})).toEqual({})" },
      { description: 'null is allowed', assertion: "expect(requireAll({a:null})).toEqual({a:null})" },
      { description: 'returns same ref content', assertion: "const o = {x:42}; expect(requireAll(o).x).toBe(42)" },
    ],
    hints: ['Check each property for undefined and throw with a descriptive message.'],
    tags: ['TypeScript', 'utility-type', 'Required', 'intermediate'],
  },
  {
    slug: 'ts-utility-7',
    title: 'Utility Types — NonNullable<T>',
    description: `## Utility Types: NonNullable<T>

**\`NonNullable<T>\`** removes \`null\` and \`undefined\` from a type.

**Challenge:** Implement \`getNonNull<T>(value: T): NonNullable<T>\` that returns the value or throws if it is null/undefined.

\`\`\`ts
getNonNull(42)    // → 42
getNonNull(null)  // throws
\`\`\``,
    category: 'utility-type',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function getNonNull<T>(value: T): NonNullable<T> {
  // Throw if null or undefined
}`,
    solution: `function getNonNull<T>(value: T): NonNullable<T> {
  if (value === null || value === undefined) throw new Error('Value is null or undefined')
  return value as NonNullable<T>
}`,
    tests: [
      { description: 'returns number', assertion: "expect(getNonNull(42)).toBe(42)" },
      { description: 'throws on null', assertion: "expect(() => getNonNull(null)).toThrow()" },
      { description: 'throws on undefined', assertion: "expect(() => getNonNull(undefined)).toThrow()" },
      { description: 'returns string', assertion: "expect(getNonNull('hello')).toBe('hello')" },
      { description: 'returns zero (falsy but valid)', assertion: "expect(getNonNull(0)).toBe(0)" },
    ],
    hints: ['Check for both null and undefined explicitly.'],
    tags: ['TypeScript', 'utility-type', 'NonNullable', 'beginner'],
  },
  {
    slug: 'ts-utility-8',
    title: 'Utility Types — keyof Operator',
    description: `## The keyof Operator

**\`keyof T\`** produces a union of all property names of \`T\`.

**Challenge:** Implement \`getKeys<T extends object>(obj: T): (keyof T)[]\` returning all own keys.

\`\`\`ts
getKeys({ a: 1, b: 2, c: 3 })  // → ['a', 'b', 'c']
\`\`\``,
    category: 'utility-type',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function getKeys<T extends object>(obj: T): (keyof T)[] {
  // Return all keys
}`,
    solution: `function getKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}`,
    tests: [
      { description: 'returns keys', assertion: "expect(getKeys({a:1,b:2})).toContain('a')" },
      { description: 'key count', assertion: "expect(getKeys({a:1,b:2,c:3})).toHaveLength(3)" },
      { description: 'empty object', assertion: "expect(getKeys({})).toEqual([])" },
      { description: 'single key', assertion: "expect(getKeys({x:1})).toEqual(['x'])" },
      { description: 'contains all keys', assertion: "const k = getKeys({p:1,q:2}); expect(k).toContain('p'); expect(k).toContain('q')" },
    ],
    hints: ['Object.keys returns string[] — cast it to (keyof T)[].'],
    tags: ['TypeScript', 'utility-type', 'keyof', 'beginner'],
  },
  {
    slug: 'ts-utility-9',
    title: 'Utility Types — typeof + ReturnType<T>',
    description: `## Utility Types: ReturnType<T>

**\`ReturnType<T>\`** extracts the return type of a function type \`T\`.

**Challenge:** Implement \`getValues<T extends object>(obj: T): T[keyof T][]\` returning all values of an object.

\`\`\`ts
getValues({ a: 1, b: 2, c: 3 })  // → [1, 2, 3]
\`\`\``,
    category: 'utility-type',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function getValues<T extends object>(obj: T): T[keyof T][] {
  // Return all values
}`,
    solution: `function getValues<T extends object>(obj: T): T[keyof T][] {
  return Object.values(obj) as T[keyof T][]
}`,
    tests: [
      { description: 'returns values array', assertion: "expect(getValues({a:1,b:2})).toContain(1)" },
      { description: 'length matches keys', assertion: "expect(getValues({a:1,b:2,c:3})).toHaveLength(3)" },
      { description: 'empty object', assertion: "expect(getValues({})).toEqual([])" },
      { description: 'string values', assertion: "expect(getValues({x:'hello'})).toContain('hello')" },
      { description: 'contains all values', assertion: "const v = getValues({p:10,q:20}); expect(v).toContain(10); expect(v).toContain(20)" },
    ],
    hints: ['Object.values is the runtime equivalent.'],
    tags: ['TypeScript', 'utility-type', 'values', 'beginner'],
  },
  {
    slug: 'ts-utility-10',
    title: 'Utility Types — transformRecord<T, U>',
    description: `## Utility Types: Mapped Object Transformation

**Challenge:** Implement \`transformRecord<T extends Record<string, unknown>, U>(obj: T, fn: (key: keyof T, value: T[keyof T]) => U): Record<keyof T, U>\` transforming each value with access to both key and value.

\`\`\`ts
transformRecord({ a: 1, b: 2 }, (k, v) => \`\${k}=\${v}\`)
// → { a: 'a=1', b: 'b=2' }
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function transformRecord<T extends Record<string, unknown>, U>(
  obj: T,
  fn: (key: keyof T, value: T[keyof T]) => U
): Record<keyof T, U> {
  // Transform each entry
}`,
    solution: `function transformRecord<T extends Record<string, unknown>, U>(
  obj: T,
  fn: (key: keyof T, value: T[keyof T]) => U
): Record<keyof T, U> {
  const result = {} as Record<keyof T, U>
  for (const key of Object.keys(obj) as (keyof T)[]) {
    result[key] = fn(key, obj[key])
  }
  return result
}`,
    tests: [
      { description: 'formats key=value', assertion: "expect(transformRecord({a:1,b:2}, (k,v)=>k+'='+v)).toEqual({a:'a=1',b:'b=2'})" },
      { description: 'doubles values', assertion: "expect(transformRecord({x:3,y:4}, (k,v)=>v*2)).toEqual({x:6,y:8})" },
      { description: 'empty object', assertion: "expect(transformRecord({}, (k,v)=>v)).toEqual({})" },
      { description: 'key used in transform', assertion: "expect(transformRecord({hello:1}, (k,v)=>k.toUpperCase())).toEqual({hello:'HELLO'})" },
      { description: 'result key count', assertion: "expect(Object.keys(transformRecord({a:1,b:2,c:3}, (k,v)=>v))).toHaveLength(3)" },
    ],
    hints: ['Access both key and value in the transform function.'],
    tags: ['TypeScript', 'utility-type', 'record', 'intermediate'],
  },
  {
    slug: 'ts-utility-11',
    title: 'Utility Types — hasAllKeys<T>',
    description: `## Runtime Key Checking

**Challenge:** Implement \`hasAllKeys<T extends object>(obj: unknown, keys: (keyof T)[]): obj is T\` — a type guard checking that \`obj\` has all specified keys.

\`\`\`ts
hasAllKeys<{a:number}>(obj, ['a'])  // → true if obj.a exists
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function hasAllKeys<T extends object>(obj: unknown, keys: (keyof T)[]): obj is T {
  // Return true if obj has all keys
}`,
    solution: `function hasAllKeys<T extends object>(obj: unknown, keys: (keyof T)[]): obj is T {
  if (typeof obj !== 'object' || obj === null) return false
  return keys.every(k => k in obj)
}`,
    tests: [
      { description: 'all keys present', assertion: "expect(hasAllKeys({a:1,b:2}, ['a','b'])).toBe(true)" },
      { description: 'missing key', assertion: "expect(hasAllKeys({a:1}, ['a','b'])).toBe(false)" },
      { description: 'empty keys array', assertion: "expect(hasAllKeys({a:1}, [])).toBe(true)" },
      { description: 'null returns false', assertion: "expect(hasAllKeys(null, ['a'])).toBe(false)" },
      { description: 'non-object returns false', assertion: "expect(hasAllKeys(42, ['a'])).toBe(false)" },
    ],
    hints: ['Use the \`in\` operator to check key existence.'],
    tags: ['TypeScript', 'utility-type', 'type-guard', 'intermediate'],
  },
  {
    slug: 'ts-utility-12',
    title: 'Utility Types — Object.fromEntries',
    description: `## Utility Types: fromEntries

**Challenge:** Implement \`fromEntries<K extends string, V>(entries: [K, V][]): Record<K, V>\` building an object from key-value pairs.

\`\`\`ts
fromEntries([['a', 1], ['b', 2]])  // → { a: 1, b: 2 }
\`\`\``,
    category: 'utility-type',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function fromEntries<K extends string, V>(entries: [K, V][]): Record<K, V> {
  // Build object from entries
}`,
    solution: `function fromEntries<K extends string, V>(entries: [K, V][]): Record<K, V> {
  return Object.fromEntries(entries) as Record<K, V>
}`,
    tests: [
      { description: 'builds object from entries', assertion: "expect(fromEntries([['a',1],['b',2]])).toEqual({a:1,b:2})" },
      { description: 'empty entries', assertion: "expect(fromEntries([])).toEqual({})" },
      { description: 'single entry', assertion: "expect(fromEntries([['x',42]])).toEqual({x:42})" },
      { description: 'string values', assertion: "expect(fromEntries([['name','Alice']])).toEqual({name:'Alice'})" },
      { description: 'key count', assertion: "expect(Object.keys(fromEntries([['a',1],['b',2],['c',3]]))).toHaveLength(3)" },
    ],
    hints: ['Object.fromEntries handles this directly.'],
    tags: ['TypeScript', 'utility-type', 'entries', 'beginner'],
  },
  {
    slug: 'ts-utility-13',
    title: 'Utility Types — deepMerge',
    description: `## Utility Types: Shallow Deep Merge

**Challenge:** Implement \`deepMerge<T extends object, U extends object>(a: T, b: U): T & U\` performing a one-level deep merge (nested objects are merged, not replaced).

\`\`\`ts
deepMerge({ a: { x: 1 }, b: 2 }, { a: { y: 3 } })
// → { a: { x: 1, y: 3 }, b: 2 }
\`\`\``,
    category: 'utility-type',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function deepMerge<T extends object, U extends object>(a: T, b: U): T & U {
  // One-level deep merge
}`,
    solution: `function deepMerge<T extends object, U extends object>(a: T, b: U): T & U {
  const result: Record<string, unknown> = { ...a }
  for (const key of Object.keys(b) as (keyof U)[]) {
    const bVal = b[key]
    const aVal = (a as any)[key]
    if (typeof bVal === 'object' && bVal !== null && typeof aVal === 'object' && aVal !== null) {
      result[key as string] = { ...aVal, ...bVal }
    } else {
      result[key as string] = bVal
    }
  }
  return result as T & U
}`,
    tests: [
      { description: 'merges nested objects', assertion: "expect(deepMerge({a:{x:1}},{a:{y:3}})).toEqual({a:{x:1,y:3}})" },
      { description: 'primitive overwrite', assertion: "expect(deepMerge({a:1},{a:2})).toEqual({a:2})" },
      { description: 'adds new key', assertion: "expect(deepMerge({a:1},{b:2})).toEqual({a:1,b:2})" },
      { description: 'preserves all keys', assertion: "const r = deepMerge({a:1,b:2},{c:3}); expect(r.a).toBe(1); expect(r.c).toBe(3)" },
      { description: 'empty second arg', assertion: "expect(deepMerge({a:1},{})).toEqual({a:1})" },
    ],
    hints: ['Check if both values are objects before merging at that level.'],
    tags: ['TypeScript', 'utility-type', 'merge', 'advanced'],
  },
  {
    slug: 'ts-utility-14',
    title: 'Utility Types — pluck<T>',
    description: `## Utility Types: pluck

**Challenge:** Implement \`pluck<T extends object, K extends keyof T>(arr: T[], key: K): T[K][]\` extracting a single property from each object in an array.

\`\`\`ts
pluck([{name:'Alice',age:30},{name:'Bob',age:25}], 'name')
// → ['Alice', 'Bob']
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function pluck<T extends object, K extends keyof T>(arr: T[], key: K): T[K][] {
  // Extract single key from each object
}`,
    solution: `function pluck<T extends object, K extends keyof T>(arr: T[], key: K): T[K][] {
  return arr.map(item => item[key])
}`,
    tests: [
      { description: 'plucks names', assertion: "expect(pluck([{name:'Alice'},{name:'Bob'}], 'name')).toEqual(['Alice','Bob'])" },
      { description: 'plucks numbers', assertion: "expect(pluck([{age:30},{age:25}], 'age')).toEqual([30,25])" },
      { description: 'empty array', assertion: "expect(pluck([], 'name')).toEqual([])" },
      { description: 'single item', assertion: "expect(pluck([{x:1}], 'x')).toEqual([1])" },
      { description: 'length matches', assertion: "expect(pluck([{a:1},{a:2},{a:3}], 'a')).toHaveLength(3)" },
    ],
    hints: ['map over the array extracting item[key].'],
    tags: ['TypeScript', 'utility-type', 'pluck', 'intermediate'],
  },
  {
    slug: 'ts-utility-15',
    title: 'Utility Types — invertRecord',
    description: `## Utility Types: Invert Keys and Values

**Challenge:** Implement \`invertRecord(obj: Record<string, string>): Record<string, string>\` swapping each key-value pair.

\`\`\`ts
invertRecord({ a: 'x', b: 'y' })  // → { x: 'a', y: 'b' }
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function invertRecord(obj: Record<string, string>): Record<string, string> {
  // Swap keys and values
}`,
    solution: `function invertRecord(obj: Record<string, string>): Record<string, string> {
  const result: Record<string, string> = {}
  for (const [k, v] of Object.entries(obj)) result[v] = k
  return result
}`,
    tests: [
      { description: 'inverts two entries', assertion: "expect(invertRecord({a:'x',b:'y'})).toEqual({x:'a',y:'b'})" },
      { description: 'empty object', assertion: "expect(invertRecord({})).toEqual({})" },
      { description: 'single entry', assertion: "expect(invertRecord({hello:'world'})).toEqual({world:'hello'})" },
      { description: 'original key becomes value', assertion: "expect(invertRecord({k:'v'}).v).toBe('k')" },
      { description: 'key count preserved', assertion: "expect(Object.keys(invertRecord({a:'1',b:'2'}))).toHaveLength(2)" },
    ],
    hints: ['Object.entries gives [key, value] pairs you can swap.'],
    tags: ['TypeScript', 'utility-type', 'invert', 'intermediate'],
  },
  {
    slug: 'ts-utility-16',
    title: 'Utility Types — keyValuePairs',
    description: `## Utility Types: Object Entries to Typed Array

**Challenge:** Implement \`keyValuePairs<T extends object>(obj: T): [keyof T, T[keyof T]][]\` returning all entries as typed tuples.

\`\`\`ts
keyValuePairs({ a: 1, b: 'x' })  // → [['a', 1], ['b', 'x']]
\`\`\``,
    category: 'utility-type',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function keyValuePairs<T extends object>(obj: T): [keyof T, T[keyof T]][] {
  // Return all entries as typed tuples
}`,
    solution: `function keyValuePairs<T extends object>(obj: T): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][]
}`,
    tests: [
      { description: 'returns pairs', assertion: "expect(keyValuePairs({a:1,b:2})).toContain(['a',1])" },
      { description: 'length matches', assertion: "expect(keyValuePairs({a:1,b:2,c:3})).toHaveLength(3)" },
      { description: 'empty object', assertion: "expect(keyValuePairs({})).toEqual([])" },
      { description: 'first pair key', assertion: "expect(keyValuePairs({x:42})[0][0]).toBe('x')" },
      { description: 'first pair value', assertion: "expect(keyValuePairs({x:42})[0][1]).toBe(42)" },
    ],
    hints: ['Object.entries returns [key, value] pairs — just cast for TypeScript.'],
    tags: ['TypeScript', 'utility-type', 'entries', 'beginner'],
  },
  {
    slug: 'ts-utility-17',
    title: 'Utility Types — withDefaults',
    description: `## Utility Types: withDefaults using Required + Partial

**Challenge:** Implement \`withDefaults<T extends object>(input: Partial<T>, defaults: Required<T>): Required<T>\` filling missing fields from defaults.

\`\`\`ts
withDefaults({ a: 1 }, { a: 10, b: 20 })  // → { a: 1, b: 20 }
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function withDefaults<T extends object>(input: Partial<T>, defaults: Required<T>): Required<T> {
  // Fill missing values from defaults
}`,
    solution: `function withDefaults<T extends object>(input: Partial<T>, defaults: Required<T>): Required<T> {
  return { ...defaults, ...input } as Required<T>
}`,
    tests: [
      { description: 'uses provided value', assertion: "expect(withDefaults({a:1},{a:10,b:20}).a).toBe(1)" },
      { description: 'fills missing from defaults', assertion: "expect(withDefaults({a:1},{a:10,b:20}).b).toBe(20)" },
      { description: 'empty input uses all defaults', assertion: "expect(withDefaults({},{a:1,b:2})).toEqual({a:1,b:2})" },
      { description: 'full input overrides all', assertion: "expect(withDefaults({a:9,b:8},{a:1,b:2})).toEqual({a:9,b:8})" },
      { description: 'string defaults', assertion: "expect(withDefaults({},{name:'default'})).toEqual({name:'default'})" },
    ],
    hints: ['Spread defaults first, then input — later spreads overwrite earlier ones.'],
    tags: ['TypeScript', 'utility-type', 'defaults', 'intermediate'],
  },
  {
    slug: 'ts-utility-18',
    title: 'Utility Types — pickByPredicate',
    description: `## Utility Types: Filter Object Properties

**Challenge:** Implement \`pickByPredicate<T extends object>(obj: T, pred: (v: T[keyof T]) => boolean): Partial<T>\` keeping only the entries where the value passes the predicate.

\`\`\`ts
pickByPredicate({ a: 1, b: 2, c: 3 }, v => v > 1)  // → { b: 2, c: 3 }
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function pickByPredicate<T extends object>(obj: T, pred: (v: T[keyof T]) => boolean): Partial<T> {
  // Keep entries where pred(value) is true
}`,
    solution: `function pickByPredicate<T extends object>(obj: T, pred: (v: T[keyof T]) => boolean): Partial<T> {
  const result: Partial<T> = {}
  for (const key of Object.keys(obj) as (keyof T)[]) {
    if (pred(obj[key])) (result as any)[key] = obj[key]
  }
  return result
}`,
    tests: [
      { description: 'keeps values > 1', assertion: "expect(pickByPredicate({a:1,b:2,c:3}, v=>v>1)).toEqual({b:2,c:3})" },
      { description: 'empty result', assertion: "expect(pickByPredicate({a:1,b:2}, v=>v>10)).toEqual({})" },
      { description: 'all values pass', assertion: "expect(pickByPredicate({a:1,b:2}, v=>v>0)).toEqual({a:1,b:2})" },
      { description: 'string predicate', assertion: "expect(pickByPredicate({x:'hi',y:'world'}, v=>v.length>2)).toEqual({y:'world'})" },
      { description: 'empty object', assertion: "expect(pickByPredicate({}, v=>true)).toEqual({})" },
    ],
    hints: ['Iterate object entries; push only those where pred returns true.'],
    tags: ['TypeScript', 'utility-type', 'predicate', 'intermediate'],
  },
  {
    slug: 'ts-utility-19',
    title: 'Utility Types — mapKeys',
    description: `## Utility Types: mapKeys

**Challenge:** Implement \`mapKeys<T>(obj: Record<string, T>, fn: (k: string) => string): Record<string, T>\` transforming every key while keeping values.

\`\`\`ts
mapKeys({ a: 1, b: 2 }, k => k.toUpperCase())  // → { A: 1, B: 2 }
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function mapKeys<T>(obj: Record<string, T>, fn: (k: string) => string): Record<string, T> {
  // Transform each key
}`,
    solution: `function mapKeys<T>(obj: Record<string, T>, fn: (k: string) => string): Record<string, T> {
  const result: Record<string, T> = {}
  for (const key of Object.keys(obj)) result[fn(key)] = obj[key]
  return result
}`,
    tests: [
      { description: 'uppercases keys', assertion: "expect(mapKeys({a:1,b:2}, k=>k.toUpperCase())).toEqual({A:1,B:2})" },
      { description: 'prefixes keys', assertion: "expect(mapKeys({x:1}, k=>'_'+k)).toEqual({_x:1})" },
      { description: 'empty object', assertion: "expect(mapKeys({}, k=>k)).toEqual({})" },
      { description: 'identity transform', assertion: "expect(mapKeys({a:1,b:2}, k=>k)).toEqual({a:1,b:2})" },
      { description: 'values unchanged', assertion: "expect(Object.values(mapKeys({a:42}, k=>'B'))).toEqual([42])" },
    ],
    hints: ['Iterate keys, transform each via fn, assign the value to the new key.'],
    tags: ['TypeScript', 'utility-type', 'mapKeys', 'intermediate'],
  },
  {
    slug: 'ts-utility-20',
    title: 'Utility Types — countBy',
    description: `## Utility Types: countBy

**Challenge:** Implement \`countBy<T>(arr: T[], fn: (x: T) => string): Record<string, number>\` counting items grouped by a computed key.

\`\`\`ts
countBy(['a', 'b', 'aa', 'bb', 'aaa'], s => String(s.length))
// → { '1': 2, '2': 2, '3': 1 }
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function countBy<T>(arr: T[], fn: (x: T) => string): Record<string, number> {
  // Count items grouped by fn(x)
}`,
    solution: `function countBy<T>(arr: T[], fn: (x: T) => string): Record<string, number> {
  const result: Record<string, number> = {}
  for (const x of arr) {
    const key = fn(x)
    result[key] = (result[key] ?? 0) + 1
  }
  return result
}`,
    tests: [
      { description: 'counts by length', assertion: "expect(countBy(['a','b','aa'], s=>String(s.length))).toEqual({'1':2,'2':1})" },
      { description: 'empty array', assertion: "expect(countBy([], x=>x)).toEqual({})" },
      { description: 'single group', assertion: "expect(countBy([1,2,3], x=>'all')).toEqual({all:3})" },
      { description: 'unique groups', assertion: "expect(Object.keys(countBy(['a','b','c'], x=>x))).toHaveLength(3)" },
      { description: 'counts by even/odd', assertion: "expect(countBy([1,2,3,4,5], n=>n%2===0?'even':'odd')).toEqual({odd:3,even:2})" },
    ],
    hints: ['Nullish coalescing (??) initializes missing counters to 0.'],
    tags: ['TypeScript', 'utility-type', 'countBy', 'intermediate'],
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/features/exercises/infrastructure/data/typescript/utility-types.ts
git commit -m "feat(ts): add 20 utility type exercises"
```

---
### Task 6: Create conditional-mapped.ts (20 Advanced Exercises)

**Files:**
- Create: `src/features/exercises/infrastructure/data/typescript/conditional-mapped.ts`

- [ ] **Step 1: Create the file**

```ts
import type { Exercise } from '@/shared/types/exercises'

export const tsConditionalMappedExercises: Exercise[] = [
  {
    slug: 'ts-advanced-1',
    title: 'Advanced — deepFreeze',
    description: `## Advanced Patterns: deepFreeze

**Challenge:** Implement \`deepFreeze<T extends object>(obj: T): Readonly<T>\` that recursively freezes an object and all its nested objects.

\`\`\`ts
const obj = deepFreeze({ a: { b: 1 } })
Object.isFrozen(obj.a)  // → true
\`\`\``,
    category: 'utility-type',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function deepFreeze<T extends object>(obj: T): Readonly<T> {
  // Recursively freeze
}`,
    solution: `function deepFreeze<T extends object>(obj: T): Readonly<T> {
  Object.keys(obj).forEach(key => {
    const val = (obj as any)[key]
    if (typeof val === 'object' && val !== null) deepFreeze(val)
  })
  return Object.freeze(obj)
}`,
    tests: [
      { description: 'top level frozen', assertion: "expect(Object.isFrozen(deepFreeze({a:1}))).toBe(true)" },
      { description: 'nested object frozen', assertion: "const o = deepFreeze({a:{b:1}}); expect(Object.isFrozen(o.a)).toBe(true)" },
      { description: 'returns same structure', assertion: "expect(deepFreeze({x:1})).toEqual({x:1})" },
      { description: 'empty object frozen', assertion: "expect(Object.isFrozen(deepFreeze({}))).toBe(true)" },
      { description: 'deep nesting frozen', assertion: "const o = deepFreeze({a:{b:{c:1}}}); expect(Object.isFrozen(o.a.b)).toBe(true)" },
    ],
    hints: ['Recurse into each value that is an object before freezing the parent.'],
    tags: ['TypeScript', 'advanced', 'freeze', 'recursion'],
  },
  {
    slug: 'ts-advanced-2',
    title: 'Advanced — filterNullish',
    description: `## Advanced Patterns: filterNullish

**Challenge:** Implement \`filterNullish<T>(arr: (T | null | undefined)[]): T[]\` returning only non-null, non-undefined values.

\`\`\`ts
filterNullish([1, null, 2, undefined, 3])  // → [1, 2, 3]
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function filterNullish<T>(arr: (T | null | undefined)[]): T[] {
  // Remove null and undefined
}`,
    solution: `function filterNullish<T>(arr: (T | null | undefined)[]): T[] {
  return arr.filter((x): x is T => x !== null && x !== undefined)
}`,
    tests: [
      { description: 'removes null and undefined', assertion: "expect(filterNullish([1,null,2,undefined,3])).toEqual([1,2,3])" },
      { description: 'empty array', assertion: "expect(filterNullish([])).toEqual([])" },
      { description: 'all nullish', assertion: "expect(filterNullish([null, undefined])).toEqual([])" },
      { description: 'no nullish', assertion: "expect(filterNullish([1,2,3])).toEqual([1,2,3])" },
      { description: 'preserves zero and false', assertion: "expect(filterNullish([0, false, null])).toEqual([0, false])" },
    ],
    hints: ['A type predicate (x): x is T allows TypeScript to narrow the return type.'],
    tags: ['TypeScript', 'advanced', 'filter', 'nullish', 'intermediate'],
  },
  {
    slug: 'ts-advanced-3',
    title: 'Advanced — flatMap<T, U>',
    description: `## Advanced: flatMap

**Challenge:** Implement \`flatMap<T, U>(arr: T[], fn: (x: T) => U[]): U[]\` mapping then flattening one level.

\`\`\`ts
flatMap([1, 2, 3], x => [x, x * 2])  // → [1, 2, 2, 4, 3, 6]
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function flatMap<T, U>(arr: T[], fn: (x: T) => U[]): U[] {
  // Map and flatten one level
}`,
    solution: `function flatMap<T, U>(arr: T[], fn: (x: T) => U[]): U[] {
  return arr.flatMap(fn)
}`,
    tests: [
      { description: 'maps and flattens', assertion: "expect(flatMap([1,2,3], x=>[x,x*2])).toEqual([1,2,2,4,3,6])" },
      { description: 'empty array', assertion: "expect(flatMap([], x=>[x])).toEqual([])" },
      { description: 'empty sub-arrays', assertion: "expect(flatMap([1,2,3], x=>[])).toEqual([])" },
      { description: 'string expansion', assertion: "expect(flatMap(['ab','cd'], s=>s.split(''))).toEqual(['a','b','c','d'])" },
      { description: 'length check', assertion: "expect(flatMap([1,2,3,4], x=>[x,x])).toHaveLength(8)" },
    ],
    hints: ['Array.prototype.flatMap maps then flattens one level.'],
    tags: ['TypeScript', 'advanced', 'flatMap', 'intermediate'],
  },
  {
    slug: 'ts-advanced-4',
    title: 'Advanced — flattenDeep',
    description: `## Advanced: Recursive Flatten

**Challenge:** Implement \`flattenDeep(arr: unknown[]): unknown[]\` flattening arbitrarily nested arrays.

\`\`\`ts
flattenDeep([1, [2, [3, [4]]]])  // → [1, 2, 3, 4]
\`\`\``,
    category: 'utility-type',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function flattenDeep(arr: unknown[]): unknown[] {
  // Flatten all nesting levels
}`,
    solution: `function flattenDeep(arr: unknown[]): unknown[] {
  return arr.flat(Infinity) as unknown[]
}`,
    tests: [
      { description: 'flattens deep nesting', assertion: "expect(flattenDeep([1,[2,[3,[4]]]])).toEqual([1,2,3,4])" },
      { description: 'empty array', assertion: "expect(flattenDeep([])).toEqual([])" },
      { description: 'already flat', assertion: "expect(flattenDeep([1,2,3])).toEqual([1,2,3])" },
      { description: 'single nested', assertion: "expect(flattenDeep([[1],[2],[3]])).toEqual([1,2,3])" },
      { description: 'correct length', assertion: "expect(flattenDeep([1,[2,[3]]])).toHaveLength(3)" },
    ],
    hints: ['Array.flat(Infinity) recursively flattens all levels.'],
    tags: ['TypeScript', 'advanced', 'flatten', 'recursion'],
  },
  {
    slug: 'ts-advanced-5',
    title: 'Advanced — mapObject',
    description: `## Advanced: mapObject

**Challenge:** Implement \`mapObject<T extends object, U>(obj: T, fn: (k: keyof T, v: T[keyof T]) => U): Record<keyof T, U>\` transforming both keys and values.

\`\`\`ts
mapObject({ a: 1, b: 2 }, (k, v) => v * 10)  // → { a: 10, b: 20 }
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function mapObject<T extends object, U>(obj: T, fn: (k: keyof T, v: T[keyof T]) => U): Record<keyof T, U> {
  // Transform each value with key access
}`,
    solution: `function mapObject<T extends object, U>(obj: T, fn: (k: keyof T, v: T[keyof T]) => U): Record<keyof T, U> {
  const result = {} as Record<keyof T, U>
  for (const k of Object.keys(obj) as (keyof T)[]) result[k] = fn(k, obj[k])
  return result
}`,
    tests: [
      { description: 'multiplies values', assertion: "expect(mapObject({a:1,b:2}, (k,v)=>v*10)).toEqual({a:10,b:20})" },
      { description: 'uses key in transform', assertion: "expect(mapObject({x:1}, (k,v)=>String(k)+String(v))).toEqual({x:'x1'})" },
      { description: 'empty object', assertion: "expect(mapObject({}, (k,v)=>v)).toEqual({})" },
      { description: 'key count preserved', assertion: "expect(Object.keys(mapObject({a:1,b:2,c:3}, (k,v)=>v))).toHaveLength(3)" },
      { description: 'string values', assertion: "expect(mapObject({n:'hello'}, (k,v)=>v.toUpperCase())).toEqual({n:'HELLO'})" },
    ],
    hints: ['Both key and value are passed to fn — use both or either.'],
    tags: ['TypeScript', 'advanced', 'mapObject', 'intermediate'],
  },
  {
    slug: 'ts-advanced-6',
    title: 'Advanced — invertObject',
    description: `## Advanced: Invert Object with Uniqueness Check

**Challenge:** Implement \`invertObject<T extends Record<string, string>>(obj: T): Record<string, keyof T>\` throwing if duplicate values exist.

\`\`\`ts
invertObject({ a: '1', b: '2' })  // → { '1': 'a', '2': 'b' }
invertObject({ a: '1', b: '1' })  // throws
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function invertObject<T extends Record<string, string>>(obj: T): Record<string, keyof T> {
  // Swap keys and values, throw on duplicates
}`,
    solution: `function invertObject<T extends Record<string, string>>(obj: T): Record<string, keyof T> {
  const result: Record<string, keyof T> = {}
  for (const [k, v] of Object.entries(obj)) {
    if (v in result) throw new Error(\`Duplicate value: \${v}\`)
    result[v] = k
  }
  return result
}`,
    tests: [
      { description: 'inverts correctly', assertion: "expect(invertObject({a:'1',b:'2'})).toEqual({'1':'a','2':'b'})" },
      { description: 'throws on duplicate values', assertion: "expect(() => invertObject({a:'x',b:'x'})).toThrow()" },
      { description: 'empty object', assertion: "expect(invertObject({})).toEqual({})" },
      { description: 'single entry', assertion: "expect(invertObject({hello:'world'})).toEqual({world:'hello'})" },
      { description: 'key count preserved', assertion: "expect(Object.keys(invertObject({a:'1',b:'2'}))).toHaveLength(2)" },
    ],
    hints: ['Check the result object before assigning to detect duplicate values.'],
    tags: ['TypeScript', 'advanced', 'invert', 'intermediate'],
  },
  {
    slug: 'ts-advanced-7',
    title: 'Advanced — deepEqual',
    description: `## Advanced: Deep Equality Check

**Challenge:** Implement \`deepEqual(a: unknown, b: unknown): boolean\` returning true if the two values are recursively equal.

\`\`\`ts
deepEqual({ a: { b: 1 } }, { a: { b: 1 } })  // → true
deepEqual({ a: 1 }, { a: 2 })                  // → false
\`\`\``,
    category: 'utility-type',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function deepEqual(a: unknown, b: unknown): boolean {
  // Recursively compare two values
}`,
    solution: `function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true
  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) return false
  const keysA = Object.keys(a as object), keysB = Object.keys(b as object)
  if (keysA.length !== keysB.length) return false
  return keysA.every(k => deepEqual((a as any)[k], (b as any)[k]))
}`,
    tests: [
      { description: 'equal nested objects', assertion: "expect(deepEqual({a:{b:1}},{a:{b:1}})).toBe(true)" },
      { description: 'unequal nested', assertion: "expect(deepEqual({a:{b:1}},{a:{b:2}})).toBe(false)" },
      { description: 'primitives', assertion: "expect(deepEqual(42,42)).toBe(true)" },
      { description: 'different types', assertion: "expect(deepEqual(1,'1')).toBe(false)" },
      { description: 'empty objects', assertion: "expect(deepEqual({},{})).toBe(true)" },
    ],
    hints: ['Start with strict equality, then recurse into object keys.'],
    tags: ['TypeScript', 'advanced', 'deepEqual', 'recursion'],
  },
  {
    slug: 'ts-advanced-8',
    title: 'Advanced — toCamelCase',
    description: `## Advanced: String Transformation — camelCase

**Challenge:** Implement \`toCamelCase(str: string): string\` converting a snake_case or kebab-case string to camelCase.

\`\`\`ts
toCamelCase('hello_world')    // → 'helloWorld'
toCamelCase('foo-bar-baz')    // → 'fooBarBaz'
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function toCamelCase(str: string): string {
  // Convert snake_case / kebab-case to camelCase
}`,
    solution: `function toCamelCase(str: string): string {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
}`,
    tests: [
      { description: 'snake_case', assertion: "expect(toCamelCase('hello_world')).toBe('helloWorld')" },
      { description: 'kebab-case', assertion: "expect(toCamelCase('foo-bar-baz')).toBe('fooBarBaz')" },
      { description: 'no separator', assertion: "expect(toCamelCase('hello')).toBe('hello')" },
      { description: 'multiple words', assertion: "expect(toCamelCase('one_two_three')).toBe('oneTwoThree')" },
      { description: 'mixed separators', assertion: "expect(toCamelCase('a_b-c')).toBe('aBC')" },
    ],
    hints: ['A regex replacing [-_] followed by a char, capitalizing that char, works cleanly.'],
    tags: ['TypeScript', 'advanced', 'string', 'camelCase', 'intermediate'],
  },
  {
    slug: 'ts-advanced-9',
    title: 'Advanced — toSnakeCase',
    description: `## Advanced: String Transformation — snake_case

**Challenge:** Implement \`toSnakeCase(str: string): string\` converting a camelCase string to snake_case.

\`\`\`ts
toSnakeCase('helloWorld')    // → 'hello_world'
toSnakeCase('fooBarBaz')    // → 'foo_bar_baz'
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function toSnakeCase(str: string): string {
  // Convert camelCase to snake_case
}`,
    solution: `function toSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, c => '_' + c.toLowerCase())
}`,
    tests: [
      { description: 'camelCase to snake_case', assertion: "expect(toSnakeCase('helloWorld')).toBe('hello_world')" },
      { description: 'multiple capitals', assertion: "expect(toSnakeCase('fooBarBaz')).toBe('foo_bar_baz')" },
      { description: 'no capitals', assertion: "expect(toSnakeCase('hello')).toBe('hello')" },
      { description: 'single capital', assertion: "expect(toSnakeCase('helloA')).toBe('hello_a')" },
      { description: 'all lowercase preserved', assertion: "expect(toSnakeCase('abc')).toBe('abc')" },
    ],
    hints: ['Replace each uppercase letter with _lowercase using a regex.'],
    tags: ['TypeScript', 'advanced', 'string', 'snakeCase', 'intermediate'],
  },
  {
    slug: 'ts-advanced-10',
    title: 'Advanced — zipWith<T, U, R>',
    description: `## Advanced: zipWith

**Challenge:** Implement \`zipWith<T, U, R>(a: T[], b: U[], fn: (x: T, y: U) => R): R[]\` combining two arrays element-wise using a function.

\`\`\`ts
zipWith([1,2,3], [4,5,6], (a,b) => a + b)  // → [5, 7, 9]
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function zipWith<T, U, R>(a: T[], b: U[], fn: (x: T, y: U) => R): R[] {
  // Combine element-wise with fn
}`,
    solution: `function zipWith<T, U, R>(a: T[], b: U[], fn: (x: T, y: U) => R): R[] {
  const len = Math.min(a.length, b.length)
  return Array.from({ length: len }, (_, i) => fn(a[i], b[i]))
}`,
    tests: [
      { description: 'sums pair-wise', assertion: "expect(zipWith([1,2,3],[4,5,6],(a,b)=>a+b)).toEqual([5,7,9])" },
      { description: 'makes tuples', assertion: "expect(zipWith([1,2],['a','b'],(a,b)=>[a,b])).toEqual([[1,'a'],[2,'b']])" },
      { description: 'empty arrays', assertion: "expect(zipWith([],[],()=>0)).toEqual([])" },
      { description: 'truncates to shorter', assertion: "expect(zipWith([1,2,3],[4,5],(a,b)=>a+b)).toEqual([5,7])" },
      { description: 'correct length', assertion: "expect(zipWith([1,2,3],[1,2,3],(a,b)=>a+b)).toHaveLength(3)" },
    ],
    hints: ['Like zip, but apply fn to each pair instead of wrapping in a tuple.'],
    tags: ['TypeScript', 'advanced', 'zipWith', 'intermediate'],
  },
  {
    slug: 'ts-advanced-11',
    title: 'Advanced — splitEvery<T>',
    description: `## Advanced: splitEvery

**Challenge:** Implement \`splitEvery<T>(n: number, arr: T[]): T[][]\` splitting an array into chunks of size \`n\`.

\`\`\`ts
splitEvery(2, [1,2,3,4,5])  // → [[1,2],[3,4],[5]]
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function splitEvery<T>(n: number, arr: T[]): T[][] {
  // Split arr into chunks of n
}`,
    solution: `function splitEvery<T>(n: number, arr: T[]): T[][] {
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += n) result.push(arr.slice(i, i + n))
  return result
}`,
    tests: [
      { description: 'splits into pairs', assertion: "expect(splitEvery(2,[1,2,3,4,5])).toEqual([[1,2],[3,4],[5]])" },
      { description: 'size 3', assertion: "expect(splitEvery(3,[1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]])" },
      { description: 'empty array', assertion: "expect(splitEvery(2,[])).toEqual([])" },
      { description: 'size larger than array', assertion: "expect(splitEvery(10,[1,2,3])).toEqual([[1,2,3]])" },
      { description: 'size 1', assertion: "expect(splitEvery(1,[1,2,3])).toHaveLength(3)" },
    ],
    hints: ['Same as chunk with swapped argument order.'],
    tags: ['TypeScript', 'advanced', 'chunk', 'intermediate'],
  },
  {
    slug: 'ts-advanced-12',
    title: 'Advanced — transpose<T>',
    description: `## Advanced: Matrix Transpose

**Challenge:** Implement \`transpose<T>(matrix: T[][]): T[][]\` rotating a 2D matrix 90° by swapping rows and columns.

\`\`\`ts
transpose([[1,2,3],[4,5,6]])  // → [[1,4],[2,5],[3,6]]
\`\`\``,
    category: 'utility-type',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function transpose<T>(matrix: T[][]): T[][] {
  // Swap rows and columns
}`,
    solution: `function transpose<T>(matrix: T[][]): T[][] {
  if (matrix.length === 0) return []
  return matrix[0].map((_, i) => matrix.map(row => row[i]))
}`,
    tests: [
      { description: '2x3 to 3x2', assertion: "expect(transpose([[1,2,3],[4,5,6]])).toEqual([[1,4],[2,5],[3,6]])" },
      { description: 'square matrix', assertion: "expect(transpose([[1,2],[3,4]])).toEqual([[1,3],[2,4]])" },
      { description: 'empty matrix', assertion: "expect(transpose([])).toEqual([])" },
      { description: '1x3 to 3x1', assertion: "expect(transpose([[1,2,3]])).toEqual([[1],[2],[3]])" },
      { description: 'row count becomes column count', assertion: "expect(transpose([[1,2,3],[4,5,6]])[0]).toHaveLength(2)" },
    ],
    hints: ['Map over the columns index of the first row, then map each row to that column.'],
    tags: ['TypeScript', 'advanced', 'matrix', 'transpose'],
  },
  {
    slug: 'ts-advanced-13',
    title: 'Advanced — cartesianProduct',
    description: `## Advanced: Cartesian Product

**Challenge:** Implement \`cartesianProduct<T, U>(a: T[], b: U[]): [T, U][]\` generating all combinations.

\`\`\`ts
cartesianProduct([1,2], ['a','b'])
// → [[1,'a'],[1,'b'],[2,'a'],[2,'b']]
\`\`\``,
    category: 'utility-type',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function cartesianProduct<T, U>(a: T[], b: U[]): [T, U][] {
  // All combinations
}`,
    solution: `function cartesianProduct<T, U>(a: T[], b: U[]): [T, U][] {
  return a.flatMap(x => b.map(y => [x, y] as [T, U]))
}`,
    tests: [
      { description: 'all combinations', assertion: "expect(cartesianProduct([1,2],['a','b'])).toEqual([[1,'a'],[1,'b'],[2,'a'],[2,'b']])" },
      { description: 'length is product', assertion: "expect(cartesianProduct([1,2,3],['a','b'])).toHaveLength(6)" },
      { description: 'empty first', assertion: "expect(cartesianProduct([],['a','b'])).toEqual([])" },
      { description: 'empty second', assertion: "expect(cartesianProduct([1,2],[])).toEqual([])" },
      { description: 'single element each', assertion: "expect(cartesianProduct([1],['a'])).toEqual([[1,'a']])" },
    ],
    hints: ['flatMap on a, inner map on b, combine into [x, y] tuples.'],
    tags: ['TypeScript', 'advanced', 'cartesian', 'combinations'],
  },
  {
    slug: 'ts-advanced-14',
    title: 'Advanced — interleave<T>',
    description: `## Advanced: Interleave Two Arrays

**Challenge:** Implement \`interleave<T>(a: T[], b: T[]): T[]\` alternating elements from both arrays.

\`\`\`ts
interleave([1,3,5], [2,4,6])  // → [1,2,3,4,5,6]
interleave([1,2], ['a','b','c'])  // → [1,'a',2,'b','c']
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function interleave<T>(a: T[], b: T[]): T[] {
  // Alternate elements from a and b
}`,
    solution: `function interleave<T>(a: T[], b: T[]): T[] {
  const result: T[] = []
  const len = Math.max(a.length, b.length)
  for (let i = 0; i < len; i++) {
    if (i < a.length) result.push(a[i])
    if (i < b.length) result.push(b[i])
  }
  return result
}`,
    tests: [
      { description: 'alternates same-length', assertion: "expect(interleave([1,3,5],[2,4,6])).toEqual([1,2,3,4,5,6])" },
      { description: 'appends remainder', assertion: "expect(interleave([1],[2,3,4])).toEqual([1,2,3,4])" },
      { description: 'empty first', assertion: "expect(interleave([],[1,2,3])).toEqual([1,2,3])" },
      { description: 'empty second', assertion: "expect(interleave([1,2,3],[])).toEqual([1,2,3])" },
      { description: 'both empty', assertion: "expect(interleave([],[])).toEqual([])" },
    ],
    hints: ['Iterate up to max(a.length, b.length), push each element when it exists.'],
    tags: ['TypeScript', 'advanced', 'interleave', 'intermediate'],
  },
  {
    slug: 'ts-advanced-15',
    title: 'Advanced — countOccurrences',
    description: `## Advanced: Count Element Occurrences

**Challenge:** Implement \`countOccurrences<T>(arr: T[], value: T): number\` counting how many times \`value\` appears.

\`\`\`ts
countOccurrences([1,2,3,2,1,2], 2)  // → 3
\`\`\``,
    category: 'utility-type',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function countOccurrences<T>(arr: T[], value: T): number {
  // Count how many times value appears
}`,
    solution: `function countOccurrences<T>(arr: T[], value: T): number {
  return arr.filter(x => x === value).length
}`,
    tests: [
      { description: 'counts occurrences', assertion: "expect(countOccurrences([1,2,3,2,1,2], 2)).toBe(3)" },
      { description: 'no occurrences', assertion: "expect(countOccurrences([1,2,3], 4)).toBe(0)" },
      { description: 'empty array', assertion: "expect(countOccurrences([], 1)).toBe(0)" },
      { description: 'all same', assertion: "expect(countOccurrences([1,1,1,1], 1)).toBe(4)" },
      { description: 'string occurrences', assertion: "expect(countOccurrences(['a','b','a','c'], 'a')).toBe(2)" },
    ],
    hints: ['Filter by strict equality, then check the length.'],
    tags: ['TypeScript', 'advanced', 'count', 'beginner'],
  },
  {
    slug: 'ts-advanced-16',
    title: 'Advanced — rotateLeft',
    description: `## Advanced: Array Rotation

**Challenge:** Implement \`rotateLeft<T>(arr: T[], n: number): T[]\` shifting elements left by \`n\` positions (wraps around).

\`\`\`ts
rotateLeft([1,2,3,4,5], 2)  // → [3,4,5,1,2]
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function rotateLeft<T>(arr: T[], n: number): T[] {
  // Rotate left by n positions
}`,
    solution: `function rotateLeft<T>(arr: T[], n: number): T[] {
  if (arr.length === 0) return []
  const offset = n % arr.length
  return [...arr.slice(offset), ...arr.slice(0, offset)]
}`,
    tests: [
      { description: 'rotates by 2', assertion: "expect(rotateLeft([1,2,3,4,5], 2)).toEqual([3,4,5,1,2])" },
      { description: 'rotates by 0', assertion: "expect(rotateLeft([1,2,3], 0)).toEqual([1,2,3])" },
      { description: 'rotates by length', assertion: "expect(rotateLeft([1,2,3], 3)).toEqual([1,2,3])" },
      { description: 'empty array', assertion: "expect(rotateLeft([], 5)).toEqual([])" },
      { description: 'rotates by 1', assertion: "expect(rotateLeft([1,2,3,4], 1)).toEqual([2,3,4,1])" },
    ],
    hints: ['Modulo n by length to handle over-rotation, then slice and spread.'],
    tags: ['TypeScript', 'advanced', 'rotate', 'intermediate'],
  },
  {
    slug: 'ts-advanced-17',
    title: 'Advanced — windowed',
    description: `## Advanced: Sliding Window

**Challenge:** Implement \`windowed<T>(arr: T[], size: number): T[][]\` returning all contiguous subarrays of length \`size\`.

\`\`\`ts
windowed([1,2,3,4,5], 3)  // → [[1,2,3],[2,3,4],[3,4,5]]
\`\`\``,
    category: 'utility-type',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function windowed<T>(arr: T[], size: number): T[][] {
  // Generate sliding windows of given size
}`,
    solution: `function windowed<T>(arr: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i <= arr.length - size; i++) result.push(arr.slice(i, i + size))
  return result
}`,
    tests: [
      { description: 'size-3 windows', assertion: "expect(windowed([1,2,3,4,5], 3)).toEqual([[1,2,3],[2,3,4],[3,4,5]])" },
      { description: 'size equals length', assertion: "expect(windowed([1,2,3], 3)).toEqual([[1,2,3]])" },
      { description: 'size 1', assertion: "expect(windowed([1,2,3], 1)).toHaveLength(3)" },
      { description: 'empty array', assertion: "expect(windowed([], 2)).toEqual([])" },
      { description: 'size larger than array', assertion: "expect(windowed([1,2], 5)).toEqual([])" },
    ],
    hints: ['Iterate while i + size <= arr.length, slice from i to i+size.'],
    tags: ['TypeScript', 'advanced', 'windowed', 'intermediate'],
  },
  {
    slug: 'ts-advanced-18',
    title: 'Advanced — groupByMultiple',
    description: `## Advanced: Multi-Key Grouping

**Challenge:** Implement \`groupByMultiple<T extends object>(arr: T[], keys: (keyof T)[]): Record<string, T[]>\` creating a compound group key from multiple fields.

\`\`\`ts
groupByMultiple([{a:1,b:'x'},{a:1,b:'y'},{a:2,b:'x'}], ['a','b'])
// { '1-x': [...], '1-y': [...], '2-x': [...] }
\`\`\``,
    category: 'utility-type',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function groupByMultiple<T extends object>(arr: T[], keys: (keyof T)[]): Record<string, T[]> {
  // Group by compound key
}`,
    solution: `function groupByMultiple<T extends object>(arr: T[], keys: (keyof T)[]): Record<string, T[]> {
  const result: Record<string, T[]> = {}
  for (const item of arr) {
    const k = keys.map(key => String(item[key])).join('-')
    if (!result[k]) result[k] = []
    result[k].push(item)
  }
  return result
}`,
    tests: [
      { description: 'groups by two keys', assertion: "const r = groupByMultiple([{a:1,b:'x'},{a:1,b:'y'},{a:1,b:'x'}], ['a','b']); expect(r['1-x']).toHaveLength(2)" },
      { description: 'empty array', assertion: "expect(groupByMultiple([], ['a'])).toEqual({})" },
      { description: 'single key same as groupBy', assertion: "const r = groupByMultiple([{a:1},{a:2},{a:1}], ['a']); expect(r['1']).toHaveLength(2)" },
      { description: 'unique groups', assertion: "const r = groupByMultiple([{a:1,b:'x'},{a:2,b:'y'}], ['a','b']); expect(Object.keys(r)).toHaveLength(2)" },
      { description: 'three key groups', assertion: "const r = groupByMultiple([{a:1,b:'x',c:true},{a:1,b:'x',c:false}], ['a','b','c']); expect(Object.keys(r)).toHaveLength(2)" },
    ],
    hints: ['Join the values at each key with a separator to form the compound key.'],
    tags: ['TypeScript', 'advanced', 'groupBy', 'multi-key'],
  },
  {
    slug: 'ts-advanced-19',
    title: 'Advanced — memoize',
    description: `## Advanced: Generic Memoize

**Challenge:** Implement \`memoize<T extends unknown[], R>(fn: (...args: T) => R): (...args: T) => R\` caching results by serialized arguments.

\`\`\`ts
const expensiveFn = memoize((n: number) => n * 2)
expensiveFn(5)  // → 10 (computed)
expensiveFn(5)  // → 10 (cached)
\`\`\``,
    category: 'utility-type',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function memoize<T extends unknown[], R>(fn: (...args: T) => R): (...args: T) => R {
  // Cache results by serialized args
}`,
    solution: `function memoize<T extends unknown[], R>(fn: (...args: T) => R): (...args: T) => R {
  const cache = new Map<string, R>()
  return (...args: T): R => {
    const key = JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)!
    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}`,
    tests: [
      { description: 'returns correct result', assertion: "const f = memoize(n=>n*2); expect(f(5)).toBe(10)" },
      { description: 'caches result', assertion: "let calls=0; const f = memoize(n=>{calls++;return n*2}); f(5); f(5); expect(calls).toBe(1)" },
      { description: 'different args computed', assertion: "let c=0; const f=memoize(n=>{c++;return n}); f(1); f(2); expect(c).toBe(2)" },
      { description: 'works with strings', assertion: "const f = memoize(s=>s.toUpperCase()); expect(f('hello')).toBe('HELLO')" },
      { description: 'works with two args', assertion: "const f = memoize((a,b)=>a+b); expect(f(3,4)).toBe(7)" },
    ],
    hints: ['JSON.stringify(args) creates a cache key that handles multiple arguments.'],
    tags: ['TypeScript', 'advanced', 'memoize', 'cache'],
  },
  {
    slug: 'ts-advanced-20',
    title: 'Advanced — curry',
    description: `## Advanced: Generic curry

**Challenge:** Implement \`curry<A, B, C>(fn: (a: A, b: B) => C): (a: A) => (b: B) => C\` — a curried form of a two-argument function.

\`\`\`ts
const add = curry((a: number, b: number) => a + b)
add(3)(4)  // → 7
\`\`\``,
    category: 'utility-type',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function curry<A, B, C>(fn: (a: A, b: B) => C): (a: A) => (b: B) => C {
  // Return curried function
}`,
    solution: `function curry<A, B, C>(fn: (a: A, b: B) => C): (a: A) => (b: B) => C {
  return (a: A) => (b: B) => fn(a, b)
}`,
    tests: [
      { description: 'adds two numbers', assertion: "const add = curry((a,b)=>a+b); expect(add(3)(4)).toBe(7)" },
      { description: 'partially applies', assertion: "const add5 = curry((a,b)=>a+b)(5); expect(add5(3)).toBe(8)" },
      { description: 'works with strings', assertion: "const concat = curry((a,b)=>a+b); expect(concat('hi')('there')).toBe('hithere')" },
      { description: 'multiplies', assertion: "const mul = curry((a,b)=>a*b); expect(mul(3)(3)).toBe(9)" },
      { description: 'returns function first', assertion: "const f = curry((a,b)=>a+b); expect(typeof f(1)).toBe('function')" },
    ],
    hints: ['Simply return a => b => fn(a, b).'],
    tags: ['TypeScript', 'advanced', 'curry', 'functional'],
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/features/exercises/infrastructure/data/typescript/conditional-mapped.ts
git commit -m "feat(ts): add 20 advanced conditional/mapped type exercises"
```

---
### Task 7: Create typescript/index.ts Re-export Barrel

**Files:**
- Create: `src/features/exercises/infrastructure/data/typescript/index.ts`

- [ ] **Step 1: Create the barrel file**

```ts
export { tsBasicTypesExercises } from './basic-types'
export { tsInterfacesExercises } from './interfaces'
export { tsGenericsExercises } from './generics'
export { tsUtilityTypesExercises } from './utility-types'
export { tsConditionalMappedExercises } from './conditional-mapped'
```

- [ ] **Step 2: Commit**

```bash
git add src/features/exercises/infrastructure/data/typescript/index.ts
git commit -m "feat(ts): add typescript exercises barrel"
```

---

### Task 8: Register TypeScript Exercises in data/index.ts

**Files:**
- Modify: `src/features/exercises/infrastructure/data/index.ts`

- [ ] **Step 1: Add import at the top of the import block (after existing imports)**

Find the last existing import line (likely something like `import { ... } from './string/...'`) and add after it:

```ts
import {
  tsBasicTypesExercises,
  tsInterfacesExercises,
  tsGenericsExercises,
  tsUtilityTypesExercises,
  tsConditionalMappedExercises,
} from './typescript'
```

- [ ] **Step 2: Spread into allExercises**

Find the `allExercises` array and add the TypeScript arrays:

```ts
export const allExercises: Exercise[] = [
  // ... existing spreads ...
  ...tsBasicTypesExercises,
  ...tsInterfacesExercises,
  ...tsGenericsExercises,
  ...tsUtilityTypesExercises,
  ...tsConditionalMappedExercises,
]
```

- [ ] **Step 3: Commit**

```bash
git add src/features/exercises/infrastructure/data/index.ts
git commit -m "feat(ts): register TypeScript exercises in allExercises"
```

---

### Task 9: Update ExerciseCategory Type

**Files:**
- Modify: `src/shared/types/exercises.ts`

- [ ] **Step 1: Add new category values**

Find the `ExerciseCategory` type and add:

```ts
export type ExerciseCategory =
  | 'for-of'
  | 'for-in'
  // ... existing values ...
  | 'type-guard'
  | 'generic'
  | 'utility-type'
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/shared/types/exercises.ts
git commit -m "feat(ts): add type-guard, generic, utility-type categories"
```

---

### Task 10: Run Translation Script

- [ ] **Step 1: Translate new exercises to Spanish**

```bash
node scripts/translate-exercises.mjs --locale es
```

Expected: Script detects ~100 new untranslated exercises and translates them.

---

### Task 11: Build Check and PR

- [ ] **Step 1: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 2: Commit any remaining changes and push**

```bash
git add -A
git commit -m "feat(ts): complete TypeScript exercises - 100 exercises across 5 subtopics"
git push
```

- [ ] **Step 3: Create PR**

```bash
gh pr create --title "feat(ts): Add 100 TypeScript exercises" --body "Adds ~100 TypeScript exercises across 5 subtopics:
- Type Guards (basic-types.ts) — 20 exercises
- Interfaces (interfaces.ts) — 20 exercises
- Generics (generics.ts) — 20 exercises
- Utility Types (utility-types.ts) — 20 exercises
- Advanced/Conditional/Mapped (conditional-mapped.ts) — 20 exercises

All exercises:
- Use builtIn: TypeScript for sidebar grouping
- Follow the 5-tests-per-exercise constraint
- Have plain-JS assertion strings (no TypeScript syntax in test assertions)
- Include hints and tags"
```

---
