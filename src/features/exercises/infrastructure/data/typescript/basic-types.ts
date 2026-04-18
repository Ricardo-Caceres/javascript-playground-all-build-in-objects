import type { Exercise } from '@/shared/types/exercises'

export const typescriptBasicTypesExercises: Exercise[] = [
  {
    slug: 'ts-type-guard-1',
    title: 'Type Guard — isString',
    description: `## Type Guards: isString

A *type guard* is a function that returns a **type predicate** (e.g. \`x is string\`).  
At runtime it's just a boolean, but TypeScript uses it to *narrow* the type in the calling scope.

**Challenge:** Implement \`isString(x: unknown): x is string\`.

\`\`\`ts
isString('hello')  // → true
isString(42)       // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isString(x: unknown): x is string {
  // Check if x is a string
}`,
    solution: `function isString(x: unknown): x is string {
  return typeof x === 'string'
}`,
    tests: [
      { description: 'true for string', assertion: "expect(isString('hello')).toBe(true)" },
      { description: 'false for number', assertion: "expect(isString(42)).toBe(false)" },
      { description: 'false for boolean', assertion: "expect(isString(true)).toBe(false)" },
      { description: 'false for null', assertion: "expect(isString(null)).toBe(false)" },
      { description: 'true for empty string', assertion: "expect(isString('')).toBe(true)" },
    ],
    hints: ['typeof x === "string" is the standard runtime check.'],
    tags: ['TypeScript', 'type-guard', 'string', 'beginner'],
  },
  {
    slug: 'ts-type-guard-2',
    title: 'Type Guard — isNumber',
    description: `## Type Guards: isNumber

**Challenge:** Implement \`isNumber(x: unknown): x is number\`.  
Note: \`NaN\` is of type \`number\` in JavaScript — it should return \`true\`.

\`\`\`ts
isNumber(42)      // → true
isNumber(NaN)     // → true  (NaN is type number!)
isNumber('42')    // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isNumber(x: unknown): x is number {
  // Check if x is a number (including NaN)
}`,
    solution: `function isNumber(x: unknown): x is number {
  return typeof x === 'number'
}`,
    tests: [
      { description: 'true for integer', assertion: "expect(isNumber(42)).toBe(true)" },
      { description: 'true for float', assertion: "expect(isNumber(3.14)).toBe(true)" },
      { description: 'false for string', assertion: "expect(isNumber('42')).toBe(false)" },
      { description: 'true for NaN', assertion: "expect(isNumber(NaN)).toBe(true)" },
      { description: 'false for null', assertion: "expect(isNumber(null)).toBe(false)" },
    ],
    hints: ['typeof NaN === "number" is true in JavaScript.'],
    tags: ['TypeScript', 'type-guard', 'number', 'beginner'],
  },
  {
    slug: 'ts-type-guard-3',
    title: 'Type Guard — isBoolean',
    description: `## Type Guards: isBoolean

**Challenge:** Implement \`isBoolean(x: unknown): x is boolean\`.

\`\`\`ts
isBoolean(true)   // → true
isBoolean(false)  // → true
isBoolean(1)      // → false  (1 is truthy, not boolean)
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isBoolean(x: unknown): x is boolean {
  // Check if x is a boolean
}`,
    solution: `function isBoolean(x: unknown): x is boolean {
  return typeof x === 'boolean'
}`,
    tests: [
      { description: 'true for true', assertion: "expect(isBoolean(true)).toBe(true)" },
      { description: 'true for false', assertion: "expect(isBoolean(false)).toBe(true)" },
      { description: 'false for 1', assertion: "expect(isBoolean(1)).toBe(false)" },
      { description: 'false for string', assertion: "expect(isBoolean('true')).toBe(false)" },
      { description: 'false for null', assertion: "expect(isBoolean(null)).toBe(false)" },
    ],
    hints: ['typeof x === "boolean" narrows to exactly true or false.'],
    tags: ['TypeScript', 'type-guard', 'boolean', 'beginner'],
  },
  {
    slug: 'ts-type-guard-4',
    title: 'Type Guard — isArray',
    description: `## Type Guards: isArray

**Challenge:** Implement \`isArray(x: unknown): x is unknown[]\`.

\`\`\`ts
isArray([1, 2, 3])  // → true
isArray({})         // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isArray(x: unknown): x is unknown[] {
  // Check if x is an array
}`,
    solution: `function isArray(x: unknown): x is unknown[] {
  return Array.isArray(x)
}`,
    tests: [
      { description: 'true for array', assertion: "expect(isArray([1,2,3])).toBe(true)" },
      { description: 'true for empty array', assertion: "expect(isArray([])).toBe(true)" },
      { description: 'false for object', assertion: "expect(isArray({})).toBe(false)" },
      { description: 'false for string', assertion: "expect(isArray('hello')).toBe(false)" },
      { description: 'false for null', assertion: "expect(isArray(null)).toBe(false)" },
    ],
    hints: ['Array.isArray() is the standard way to check for arrays.'],
    tags: ['TypeScript', 'type-guard', 'array', 'beginner'],
  },
  {
    slug: 'ts-type-guard-5',
    title: 'Type Guard — isObject',
    description: `## Type Guards: isObject

**Challenge:** Implement \`isObject(x: unknown): x is Record<string, unknown>\`.  
Arrays and null should return **false**.

\`\`\`ts
isObject({})     // → true
isObject([])     // → false  (arrays are not plain objects)
isObject(null)   // → false  (typeof null === 'object' — a classic JS gotcha)
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isObject(x: unknown): x is Record<string, unknown> {
  // true for plain objects, false for null and arrays
}`,
    solution: `function isObject(x: unknown): x is Record<string, unknown> {
  return typeof x === 'object' && x !== null && !Array.isArray(x)
}`,
    tests: [
      { description: 'true for plain object', assertion: "expect(isObject({a:1})).toBe(true)" },
      { description: 'false for null', assertion: "expect(isObject(null)).toBe(false)" },
      { description: 'false for array', assertion: "expect(isObject([])).toBe(false)" },
      { description: 'false for number', assertion: "expect(isObject(42)).toBe(false)" },
      { description: 'true for empty object', assertion: "expect(isObject({})).toBe(true)" },
    ],
    hints: ['Check typeof, exclude null, exclude arrays.'],
    tags: ['TypeScript', 'type-guard', 'object', 'beginner'],
  },
  {
    slug: 'ts-type-guard-6',
    title: 'Type Guard — isNullOrUndefined',
    description: `## Type Guards: isNullOrUndefined

**Challenge:** Implement \`isNullOrUndefined(x: unknown): x is null | undefined\`.

\`\`\`ts
isNullOrUndefined(null)      // → true
isNullOrUndefined(undefined) // → true
isNullOrUndefined(0)         // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isNullOrUndefined(x: unknown): x is null | undefined {
  // Return true for null or undefined only
}`,
    solution: `function isNullOrUndefined(x: unknown): x is null | undefined {
  return x === null || x === undefined
}`,
    tests: [
      { description: 'true for null', assertion: "expect(isNullOrUndefined(null)).toBe(true)" },
      { description: 'true for undefined', assertion: "expect(isNullOrUndefined(undefined)).toBe(true)" },
      { description: 'false for 0', assertion: "expect(isNullOrUndefined(0)).toBe(false)" },
      { description: 'false for empty string', assertion: "expect(isNullOrUndefined('')).toBe(false)" },
      { description: 'false for false', assertion: "expect(isNullOrUndefined(false)).toBe(false)" },
    ],
    hints: ['Use strict equality (===) with both null and undefined.'],
    tags: ['TypeScript', 'type-guard', 'nullish', 'beginner'],
  },
  {
    slug: 'ts-type-guard-7',
    title: 'Type Guard — hasProperty',
    description: `## Type Guards: hasProperty

**Challenge:** Implement \`hasProperty<K extends string>(obj: unknown, key: K): obj is Record<K, unknown>\` — returning true if \`obj\` is a non-null object that has the given key.

\`\`\`ts
hasProperty({ name: 'Alice' }, 'name')  // → true
hasProperty({ name: 'Alice' }, 'age')   // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function hasProperty<K extends string>(obj: unknown, key: K): obj is Record<K, unknown> {
  // Return true if obj is a non-null object with the given key
}`,
    solution: `function hasProperty<K extends string>(obj: unknown, key: K): obj is Record<K, unknown> {
  return typeof obj === 'object' && obj !== null && key in obj
}`,
    tests: [
      { description: 'true when key exists', assertion: "expect(hasProperty({name:'Alice'}, 'name')).toBe(true)" },
      { description: 'false when key missing', assertion: "expect(hasProperty({name:'Alice'}, 'age')).toBe(false)" },
      { description: 'false for null', assertion: "expect(hasProperty(null, 'key')).toBe(false)" },
      { description: 'false for primitive', assertion: "expect(hasProperty(42, 'toString')).toBe(false)" },
      { description: 'true for nested', assertion: "expect(hasProperty({a:{b:1}}, 'a')).toBe(true)" },
    ],
    hints: ['Combine a null check with the in operator.'],
    tags: ['TypeScript', 'type-guard', 'property', 'intermediate'],
  },
  {
    slug: 'ts-type-guard-8',
    title: 'Type Guard — isStringArray',
    description: `## Type Guards: isStringArray

**Challenge:** Implement \`isStringArray(x: unknown): x is string[]\` — every element must be a string.

\`\`\`ts
isStringArray(['a', 'b', 'c'])  // → true
isStringArray(['a', 1, 'c'])    // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function isStringArray(x: unknown): x is string[] {
  // Check that x is an array where every element is a string
}`,
    solution: `function isStringArray(x: unknown): x is string[] {
  return Array.isArray(x) && x.every(item => typeof item === 'string')
}`,
    tests: [
      { description: 'true for string array', assertion: "expect(isStringArray(['a','b','c'])).toBe(true)" },
      { description: 'false for mixed array', assertion: "expect(isStringArray(['a',1,'c'])).toBe(false)" },
      { description: 'true for empty array', assertion: "expect(isStringArray([])).toBe(true)" },
      { description: 'false for non-array', assertion: "expect(isStringArray('hello')).toBe(false)" },
      { description: 'false for number array', assertion: "expect(isStringArray([1,2,3])).toBe(false)" },
    ],
    hints: ['Array.isArray + every(item => typeof item === "string").'],
    tags: ['TypeScript', 'type-guard', 'array', 'intermediate'],
  },
  {
    slug: 'ts-type-guard-9',
    title: 'Type Guard — isInstance',
    description: `## Type Guards: isInstance

**Challenge:** Implement \`isInstance<T>(x: unknown, ctor: new (...args: any[]) => T): x is T\` — a generic instanceof check.

\`\`\`ts
isInstance(new Date(), Date)       // → true
isInstance('hello', Date)          // → false
isInstance(new Error('e'), Error)  // → true
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function isInstance<T>(x: unknown, ctor: new (...args: any[]) => T): x is T {
  // Use instanceof
}`,
    solution: `function isInstance<T>(x: unknown, ctor: new (...args: any[]) => T): x is T {
  return x instanceof ctor
}`,
    tests: [
      { description: 'true for Date', assertion: "expect(isInstance(new Date(), Date)).toBe(true)" },
      { description: 'false for string vs Date', assertion: "expect(isInstance('hello', Date)).toBe(false)" },
      { description: 'true for Error', assertion: "expect(isInstance(new Error('e'), Error)).toBe(true)" },
      { description: 'false for null', assertion: "expect(isInstance(null, Date)).toBe(false)" },
      { description: 'true for Array', assertion: "expect(isInstance([1,2,3], Array)).toBe(true)" },
    ],
    hints: ['x instanceof ctor is the built-in mechanism for checking prototype chain membership.'],
    tags: ['TypeScript', 'type-guard', 'instanceof', 'intermediate'],
  },
  {
    slug: 'ts-type-guard-10',
    title: 'Type Guard — assertNonNull',
    description: `## Type Guards: Assertion Functions

TypeScript 3.7 introduced **assertion functions** — functions that throw instead of returning false.  
Use the \`asserts x is T\` return type to tell TypeScript the value is narrowed after the call.

**Challenge:** Implement \`assertNonNull<T>(x: T | null | undefined, msg?: string): asserts x is T\`.

\`\`\`ts
assertNonNull('hello')   // does nothing (no throw)
assertNonNull(null)      // throws Error
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function assertNonNull<T>(x: T | null | undefined, msg?: string): asserts x is T {
  // Throw if x is null or undefined
}`,
    solution: `function assertNonNull<T>(x: T | null | undefined, msg?: string): asserts x is T {
  if (x === null || x === undefined) throw new Error(msg ?? 'Assertion failed: value is null or undefined')
}`,
    tests: [
      { description: 'does not throw for value', assertion: "expect(() => assertNonNull('hello')).not.toThrow()" },
      { description: 'throws for null', assertion: "expect(() => assertNonNull(null)).toThrow()" },
      { description: 'throws for undefined', assertion: "expect(() => assertNonNull(undefined)).toThrow()" },
      { description: 'custom message in throw', assertion: "expect(() => assertNonNull(null, 'custom')).toThrow()" },
      { description: 'does not throw for 0', assertion: "expect(() => assertNonNull(0)).not.toThrow()" },
    ],
    hints: ['Throw if x === null || x === undefined, otherwise do nothing.'],
    tags: ['TypeScript', 'type-guard', 'assertion', 'intermediate'],
  },
  {
    slug: 'ts-type-guard-11',
    title: 'Type Guard — isPositiveNumber',
    description: `## Type Guards: Combined Conditions

**Challenge:** Implement \`isPositiveNumber(x: unknown): x is number\` — true only if \`x\` is a finite, positive number (not NaN, not Infinity, not zero).

\`\`\`ts
isPositiveNumber(5)        // → true
isPositiveNumber(-1)       // → false
isPositiveNumber(0)        // → false
isPositiveNumber(Infinity) // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function isPositiveNumber(x: unknown): x is number {
  // True only for finite, positive numbers
}`,
    solution: `function isPositiveNumber(x: unknown): x is number {
  return typeof x === 'number' && Number.isFinite(x) && x > 0
}`,
    tests: [
      { description: 'true for positive', assertion: "expect(isPositiveNumber(5)).toBe(true)" },
      { description: 'false for negative', assertion: "expect(isPositiveNumber(-1)).toBe(false)" },
      { description: 'false for zero', assertion: "expect(isPositiveNumber(0)).toBe(false)" },
      { description: 'false for Infinity', assertion: "expect(isPositiveNumber(Infinity)).toBe(false)" },
      { description: 'false for string', assertion: "expect(isPositiveNumber('5')).toBe(false)" },
    ],
    hints: ['typeof check + Number.isFinite + x > 0.'],
    tags: ['TypeScript', 'type-guard', 'number', 'intermediate'],
  },
  {
    slug: 'ts-type-guard-12',
    title: 'Type Guard — isNonEmptyString',
    description: `## Type Guards: Refined String Guard

**Challenge:** Implement \`isNonEmptyString(x: unknown): x is string\` — true only for non-empty strings.

\`\`\`ts
isNonEmptyString('hello')  // → true
isNonEmptyString('')       // → false
isNonEmptyString(null)     // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function isNonEmptyString(x: unknown): x is string {
  // True only for non-empty strings
}`,
    solution: `function isNonEmptyString(x: unknown): x is string {
  return typeof x === 'string' && x.length > 0
}`,
    tests: [
      { description: 'true for non-empty string', assertion: "expect(isNonEmptyString('hello')).toBe(true)" },
      { description: 'false for empty string', assertion: "expect(isNonEmptyString('')).toBe(false)" },
      { description: 'false for null', assertion: "expect(isNonEmptyString(null)).toBe(false)" },
      { description: 'false for number', assertion: "expect(isNonEmptyString(42)).toBe(false)" },
      { description: 'true for whitespace (still a string)', assertion: "expect(isNonEmptyString(' ')).toBe(true)" },
    ],
    hints: ['Check typeof and length > 0.'],
    tags: ['TypeScript', 'type-guard', 'string', 'beginner'],
  },
  {
    slug: 'ts-type-guard-13',
    title: 'Type Guard — discriminated union',
    description: `## Type Guards: Discriminated Unions

A **discriminated union** uses a shared literal \`kind\` field to distinguish variants.  
Use a regular switch or if-check on the literal to narrow the type.

**Challenge:** Implement \`getArea(shape: Shape): number\` using a switch on \`shape.kind\`.

\`\`\`ts
getArea({ kind: 'circle', radius: 5 })         // → Math.PI * 25
getArea({ kind: 'rectangle', width: 4, height: 3 })  // → 12
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number }
  | { kind: 'triangle'; base: number; height: number }

function getArea(shape: Shape): number {
  // Switch on shape.kind and compute the area
}`,
    solution: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number }
  | { kind: 'triangle'; base: number; height: number }

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle': return Math.PI * shape.radius ** 2
    case 'rectangle': return shape.width * shape.height
    case 'triangle': return 0.5 * shape.base * shape.height
  }
}`,
    tests: [
      { description: 'circle area', assertion: "expect(getArea({kind:'circle',radius:1})).toBe(Math.PI)" },
      { description: 'rectangle area', assertion: "expect(getArea({kind:'rectangle',width:4,height:3})).toBe(12)" },
      { description: 'triangle area', assertion: "expect(getArea({kind:'triangle',base:6,height:4})).toBe(12)" },
      { description: 'large circle', assertion: "expect(getArea({kind:'circle',radius:2})).toBe(Math.PI*4)" },
      { description: 'square is rectangle', assertion: "expect(getArea({kind:'rectangle',width:5,height:5})).toBe(25)" },
    ],
    hints: ['switch(shape.kind) with exhaustive cases — TypeScript narrows the type in each branch.'],
    tags: ['TypeScript', 'type-guard', 'discriminated-union', 'intermediate'],
  },
  {
    slug: 'ts-type-guard-14',
    title: 'Type Guard — parseJSON',
    description: `## Type Guards: Runtime Validation

**Challenge:** Implement \`parseJSON<T>(json: string, guard: (x: unknown) => x is T): T | null\` — parse the JSON and validate it with the guard, returning null on failure.

\`\`\`ts
parseJSON('{"n":1}', (x): x is {n:number} => typeof (x as any).n === 'number')  // → { n: 1 }
parseJSON('bad json', () => true)  // → null
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function parseJSON<T>(json: string, guard: (x: unknown) => x is T): T | null {
  // Parse JSON safely, return null on any failure
}`,
    solution: `function parseJSON<T>(json: string, guard: (x: unknown) => x is T): T | null {
  try {
    const parsed = JSON.parse(json)
    return guard(parsed) ? parsed : null
  } catch {
    return null
  }
}`,
    tests: [
      { description: 'returns parsed object', assertion: "const g = x => typeof x === 'object' && x !== null; expect(parseJSON('{\"a\":1}', g)).toEqual({a:1})" },
      { description: 'returns null for bad JSON', assertion: "expect(parseJSON('bad', ()=>true)).toBeNull()" },
      { description: 'returns null when guard fails', assertion: "expect(parseJSON('{\"a\":1}', x=>false)).toBeNull()" },
      { description: 'returns number when guard passes', assertion: "expect(parseJSON('42', x=>typeof x==='number')).toBe(42)" },
      { description: 'returns null for empty string', assertion: "expect(parseJSON('', ()=>true)).toBeNull()" },
    ],
    hints: ['Wrap JSON.parse in a try/catch and apply the guard to the result.'],
    tags: ['TypeScript', 'type-guard', 'JSON', 'intermediate'],
  },
  {
    slug: 'ts-type-guard-15',
    title: 'Type Guard — exhaustiveCheck',
    description: `## Type Guards: Exhaustive Switch

The **never** type is useful for exhaustiveness checking.  
If a case reaches the never branch, TypeScript will emit a compile error.

**Challenge:** Implement \`exhaustiveCheck(x: never): never\` — a utility that throws at runtime while signaling exhaustiveness to TypeScript.

\`\`\`ts
// Used in a switch default:
default: throw exhaustiveCheck(shape)
\`\`\``,
    category: 'type-guard',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function exhaustiveCheck(x: never): never {
  // Throw a descriptive error including x
}`,
    solution: `function exhaustiveCheck(x: never): never {
  throw new Error('Exhaustive check failed: unhandled case ' + JSON.stringify(x))
}`,
    tests: [
      { description: 'always throws', assertion: "expect(() => exhaustiveCheck('unhandled')).toThrow()" },
      { description: 'throws Error', assertion: "expect(() => exhaustiveCheck(42)).toThrow()" },
      { description: 'message includes value', assertion: "try { exhaustiveCheck('test') } catch(e) { expect(e.message).toContain('test') }" },
      { description: 'throws for object', assertion: "expect(() => exhaustiveCheck({k:'unknown'})).toThrow()" },
      { description: 'throws for null passed', assertion: "expect(() => exhaustiveCheck(null)).toThrow()" },
    ],
    hints: ['This function should always throw — its return type is never.'],
    tags: ['TypeScript', 'type-guard', 'never', 'exhaustive', 'advanced'],
  },
  {
    slug: 'ts-type-guard-16',
    title: 'Type Guard — isOneOf',
    description: `## Type Guards: isOneOf

**Challenge:** Implement \`isOneOf<T extends readonly unknown[]>(x: unknown, values: T): x is T[number]\` — checking if \`x\` is one of a fixed set of literal values.

\`\`\`ts
isOneOf('red', ['red', 'green', 'blue'] as const)  // → true
isOneOf('pink', ['red', 'green', 'blue'] as const) // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function isOneOf<T extends readonly unknown[]>(x: unknown, values: T): x is T[number] {
  // Return true if x is in the values array
}`,
    solution: `function isOneOf<T extends readonly unknown[]>(x: unknown, values: T): x is T[number] {
  return (values as readonly unknown[]).includes(x)
}`,
    tests: [
      { description: 'true for included value', assertion: "expect(isOneOf('red', ['red','green','blue'])).toBe(true)" },
      { description: 'false for excluded value', assertion: "expect(isOneOf('pink', ['red','green','blue'])).toBe(false)" },
      { description: 'works with numbers', assertion: "expect(isOneOf(2, [1,2,3])).toBe(true)" },
      { description: 'false for empty array', assertion: "expect(isOneOf('x', [])).toBe(false)" },
      { description: 'strict equality check', assertion: "expect(isOneOf(1, ['1',2,3])).toBe(false)" },
    ],
    hints: ['Array.includes uses strict equality — perfect for value checking.'],
    tags: ['TypeScript', 'type-guard', 'literal', 'intermediate'],
  },
  {
    slug: 'ts-type-guard-17',
    title: 'Type Guard — isTuple',
    description: `## Type Guards: Tuple Checking

**Challenge:** Implement \`isTuple<T, U>(x: unknown, guardA: (a: unknown) => a is T, guardB: (b: unknown) => b is U): x is [T, U]\` — checking that \`x\` is a two-element array with each element matching its guard.

\`\`\`ts
isTuple([1, 'a'], isNumber, isString)  // → true
isTuple([1, 2], isNumber, isString)    // → false
\`\`\``,
    category: 'type-guard',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function isTuple<T, U>(
  x: unknown,
  guardA: (a: unknown) => a is T,
  guardB: (b: unknown) => b is U
): x is [T, U] {
  // Check x is a 2-element array where guardA(x[0]) and guardB(x[1])
}`,
    solution: `function isTuple<T, U>(
  x: unknown,
  guardA: (a: unknown) => a is T,
  guardB: (b: unknown) => b is U
): x is [T, U] {
  return Array.isArray(x) && x.length === 2 && guardA(x[0]) && guardB(x[1])
}`,
    tests: [
      { description: 'true for matching tuple', assertion: "expect(isTuple([1,'a'], x=>typeof x==='number', x=>typeof x==='string')).toBe(true)" },
      { description: 'false for wrong second type', assertion: "expect(isTuple([1,2], x=>typeof x==='number', x=>typeof x==='string')).toBe(false)" },
      { description: 'false for wrong length', assertion: "expect(isTuple([1], x=>typeof x==='number', x=>typeof x==='string')).toBe(false)" },
      { description: 'false for non-array', assertion: "expect(isTuple('hello', x=>true, x=>true)).toBe(false)" },
      { description: 'true for boolean+string', assertion: "expect(isTuple([true,'x'], x=>typeof x==='boolean', x=>typeof x==='string')).toBe(true)" },
    ],
    hints: ['Check Array.isArray, length === 2, and both guards.'],
    tags: ['TypeScript', 'type-guard', 'tuple', 'advanced'],
  },
  {
    slug: 'ts-type-guard-18',
    title: 'Type Guard — narrowUnion',
    description: `## Type Guards: Narrowing Result Union

**Challenge:** Implement \`narrowUnion<T, E extends Error>(result: T | E): [T, null] | [null, E]\` — splitting a "result or error" union into a typed tuple.

\`\`\`ts
narrowUnion('success')     // → ['success', null]
narrowUnion(new Error())   // → [null, Error]
\`\`\``,
    category: 'type-guard',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function narrowUnion<T, E extends Error>(result: T | E): [T, null] | [null, E] {
  // Return [value, null] for non-errors, [null, error] for Error instances
}`,
    solution: `function narrowUnion<T, E extends Error>(result: T | E): [T, null] | [null, E] {
  if (result instanceof Error) return [null, result as E]
  return [result as T, null]
}`,
    tests: [
      { description: 'wraps success value', assertion: "expect(narrowUnion('ok')[0]).toBe('ok')" },
      { description: 'null error for success', assertion: "expect(narrowUnion('ok')[1]).toBeNull()" },
      { description: 'null value for error', assertion: "expect(narrowUnion(new Error())[0]).toBeNull()" },
      { description: 'wraps error', assertion: "const e = new Error('fail'); expect(narrowUnion(e)[1]).toBe(e)" },
      { description: 'works with number', assertion: "expect(narrowUnion(42)[0]).toBe(42)" },
    ],
    hints: ['instanceof Error distinguishes error from success value.'],
    tags: ['TypeScript', 'type-guard', 'result', 'union', 'advanced'],
  },
  {
    slug: 'ts-type-guard-19',
    title: 'Type Guard — safe access',
    description: `## Type Guards: Safe Property Access

**Challenge:** Implement \`safeGet<T, K extends keyof T>(obj: T | null | undefined, key: K): T[K] | undefined\` — returning the property value if \`obj\` exists, or \`undefined\` otherwise.

\`\`\`ts
safeGet({ name: 'Alice' }, 'name')  // → 'Alice'
safeGet(null, 'name')               // → undefined
\`\`\``,
    category: 'type-guard',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function safeGet<T, K extends keyof T>(obj: T | null | undefined, key: K): T[K] | undefined {
  // Return obj[key] if obj exists, otherwise undefined
}`,
    solution: `function safeGet<T, K extends keyof T>(obj: T | null | undefined, key: K): T[K] | undefined {
  return obj != null ? obj[key] : undefined
}`,
    tests: [
      { description: 'returns value for existing object', assertion: "expect(safeGet({name:'Alice'}, 'name')).toBe('Alice')" },
      { description: 'returns undefined for null', assertion: "expect(safeGet(null, 'name')).toBeUndefined()" },
      { description: 'returns undefined for undefined', assertion: "expect(safeGet(undefined, 'name')).toBeUndefined()" },
      { description: 'returns nested value', assertion: "expect(safeGet({x:42}, 'x')).toBe(42)" },
      { description: 'returns undefined property value', assertion: "expect(safeGet({a:undefined}, 'a')).toBeUndefined()" },
    ],
    hints: ['obj != null is true when obj is neither null nor undefined (loose inequality).'],
    tags: ['TypeScript', 'type-guard', 'optional-chaining', 'beginner'],
  },
  {
    slug: 'ts-type-guard-20',
    title: 'Type Guard — validate schema',
    description: `## Type Guards: Schema Validation

**Challenge:** Implement \`validateUser(x: unknown): x is { name: string; age: number }\` — checking all required fields and their types.

\`\`\`ts
validateUser({ name: 'Alice', age: 30 })    // → true
validateUser({ name: 'Bob' })               // → false (missing age)
validateUser({ name: 'Carol', age: 'old' }) // → false (wrong type)
\`\`\``,
    category: 'type-guard',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function validateUser(x: unknown): x is { name: string; age: number } {
  // Validate that x has the correct shape
}`,
    solution: `function validateUser(x: unknown): x is { name: string; age: number } {
  return (
    typeof x === 'object' &&
    x !== null &&
    'name' in x &&
    typeof (x as any).name === 'string' &&
    'age' in x &&
    typeof (x as any).age === 'number'
  )
}`,
    tests: [
      { description: 'true for valid user', assertion: "expect(validateUser({name:'Alice',age:30})).toBe(true)" },
      { description: 'false for missing age', assertion: "expect(validateUser({name:'Bob'})).toBe(false)" },
      { description: 'false for wrong age type', assertion: "expect(validateUser({name:'Carol',age:'old'})).toBe(false)" },
      { description: 'false for null', assertion: "expect(validateUser(null)).toBe(false)" },
      { description: 'false for empty object', assertion: "expect(validateUser({})).toBe(false)" },
    ],
    hints: ['Check typeof for each property after verifying the key exists.'],
    tags: ['TypeScript', 'type-guard', 'validation', 'intermediate'],
  },
]
