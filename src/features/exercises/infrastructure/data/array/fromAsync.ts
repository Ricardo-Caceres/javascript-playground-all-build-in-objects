import type { Exercise } from '@/shared/types/exercises'

// Array.fromAsync exercises — the test framework runs synchronously, so these
// exercises demonstrate the *concept* of Array.fromAsync using synchronous
// equivalents (Promise.all + Array.from). method is kept as 'Array.fromAsync'
// so learners know which built-in is being taught.

export const fromAsyncExercises: Exercise[] = [
  {
    slug: 'array-from-async-basic',
    title: 'Array.fromAsync() — resolve an array of promises',
    description: `## Array.fromAsync()

\`Array.fromAsync()\` is the async counterpart of \`Array.from()\`. It accepts an async iterable, a sync iterable, or an array-like object of promises and resolves them all into a plain array.

The synchronous equivalent is \`Promise.all(promises).then(Array.from)\`, which this exercise uses so the tests can run synchronously.

**Challenge:** Implement \`resolveAll\` that takes an array of already-resolved numbers and returns them as a plain array (simulating what \`Array.fromAsync\` would do).

\`\`\`ts
resolveAll([1, 2, 3]) // → [1, 2, 3]
\`\`\``,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.fromAsync',
    initialCode: `function resolveAll(values: number[]): number[] {
  // Simulate Array.fromAsync by returning a copy of the values array
  // In real code: Array.fromAsync(promises) resolves each promise in order
}`,
    solution: `function resolveAll(values: number[]): number[] {
  return Array.from(values)
}`,
    tests: [
      { description: 'resolveAll([1,2,3]) returns [1,2,3]', assertion: 'expect(resolveAll([1, 2, 3])).toEqual([1, 2, 3])' },
      { description: 'resolveAll([]) returns []', assertion: 'expect(resolveAll([])).toEqual([])' },
      { description: 'result is an array', assertion: 'expect(Array.isArray(resolveAll([1]))).toBe(true)' },
      { description: 'values are preserved in order', assertion: 'expect(resolveAll([10, 20, 30])[1]).toBe(20)' },
      { description: 'has correct length', assertion: 'expect(resolveAll([1, 2, 3, 4])).toHaveLength(4)' },
    ],
    hints: [
      '`Array.fromAsync(arrayOfPromises)` awaits each promise and collects results.',
      'The sync equivalent for already-resolved values is simply `Array.from(values)`.',
    ],
    tags: ['Array', 'Array.fromAsync', 'async', 'advanced'],
    usageExample: {
      code: `// Real usage (async context):
const promises = [Promise.resolve(1), Promise.resolve(2)]
const result = await Array.fromAsync(promises)
// → [1, 2]`,
      explanation: {
        en: 'Use Array.fromAsync() to resolve an iterable of promises into a plain array.',
        es: 'Usa Array.fromAsync() para resolver un iterable de promesas en un array plano.',
      },
    },
  },
  {
    slug: 'array-from-async-generator',
    title: 'Array.fromAsync() — collect from a generator',
    description: `## Array.fromAsync() — async generators

\`Array.fromAsync()\` can consume an **async generator** — a \`function*\` or \`async function*\` — and collect every yielded value into a plain array.

This exercise simulates that behaviour synchronously: collect values from a regular generator using \`Array.from()\`.

**Challenge:** Implement \`collectFromGenerator\` that runs a generator yielding 1, 2, 3 and returns \`[1, 2, 3]\`.

\`\`\`ts
collectFromGenerator() // → [1, 2, 3]
\`\`\``,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.fromAsync',
    initialCode: `function* threeValues() {
  yield 1
  yield 2
  yield 3
}

function collectFromGenerator(): number[] {
  // Use Array.from() on the generator (sync equivalent of Array.fromAsync)
}`,
    solution: `function* threeValues() {
  yield 1
  yield 2
  yield 3
}

function collectFromGenerator(): number[] {
  return Array.from(threeValues())
}`,
    tests: [
      { description: 'collectFromGenerator() returns [1,2,3]', assertion: 'expect(collectFromGenerator()).toEqual([1, 2, 3])' },
      { description: 'result has length 3', assertion: 'expect(collectFromGenerator()).toHaveLength(3)' },
      { description: 'first element is 1', assertion: 'expect(collectFromGenerator()[0]).toBe(1)' },
      { description: 'last element is 3', assertion: 'expect(collectFromGenerator()[2]).toBe(3)' },
      { description: 'result is a real array', assertion: 'expect(Array.isArray(collectFromGenerator())).toBe(true)' },
    ],
    hints: [
      'Generators are iterable — both `Array.from()` and `Array.fromAsync()` accept them.',
      '`Array.fromAsync` would be used if the generator were `async function*` and yielded promises.',
    ],
    tags: ['Array', 'Array.fromAsync', 'generator', 'iterable', 'advanced'],
    usageExample: {
      code: `async function* gen() { yield 1; yield 2; yield 3 }
const arr = await Array.fromAsync(gen())
// → [1, 2, 3]`,
      explanation: {
        en: 'Use Array.fromAsync() to collect all yielded values from an async generator into an array.',
        es: 'Usa Array.fromAsync() para recopilar todos los valores producidos por un generador asíncrono en un array.',
      },
    },
  },
  {
    slug: 'array-from-async-map',
    title: 'Array.fromAsync() — map each element',
    description: `## Array.fromAsync() — with a mapping function

Like \`Array.from()\`, \`Array.fromAsync()\` accepts an optional mapping function as its second argument. The mapper can itself be async (returning a promise).

This exercise simulates the pattern synchronously.

**Challenge:** Implement \`doubleAll\` that doubles every number in an array using \`Array.from\` with a mapping function.

\`\`\`ts
doubleAll([1, 2, 3]) // → [2, 4, 6]
\`\`\``,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.fromAsync',
    initialCode: `function doubleAll(arr: number[]): number[] {
  // Use Array.from(arr, x => x * 2) — mirrors Array.fromAsync(arr, async x => x * 2)
}`,
    solution: `function doubleAll(arr: number[]): number[] {
  return Array.from(arr, x => x * 2)
}`,
    tests: [
      { description: 'doubleAll([1,2,3]) returns [2,4,6]', assertion: 'expect(doubleAll([1, 2, 3])).toEqual([2, 4, 6])' },
      { description: 'doubleAll([]) returns []', assertion: 'expect(doubleAll([])).toEqual([])' },
      { description: 'doubleAll([5]) returns [10]', assertion: 'expect(doubleAll([5])).toEqual([10])' },
      { description: 'all values are doubled', assertion: 'expect(doubleAll([2, 4, 6]).every((v, i) => v === [4, 8, 12][i])).toBe(true)' },
      { description: 'result has same length as input', assertion: 'expect(doubleAll([1, 2, 3, 4])).toHaveLength(4)' },
    ],
    hints: [
      '`Array.from(iterable, mapFn)` applies `mapFn` to each element during construction.',
      'The async version `Array.fromAsync(iterable, async x => ...)` awaits each mapped value.',
    ],
    tags: ['Array', 'Array.fromAsync', 'map', 'advanced'],
    usageExample: {
      code: `const nums = [1, 2, 3]
const doubled = await Array.fromAsync(nums, async n => n * 2)
// → [2, 4, 6]`,
      explanation: {
        en: 'Pass an async mapping function to Array.fromAsync() to transform each element as it resolves.',
        es: 'Pasa una función de mapeo asíncrono a Array.fromAsync() para transformar cada elemento al resolverse.',
      },
    },
  },
  {
    slug: 'array-from-async-sync-iterable',
    title: 'Array.fromAsync() — works with sync iterables',
    description: `## Array.fromAsync() — sync iterable input

\`Array.fromAsync()\` is not limited to async iterables. It also accepts **sync iterables** (like plain arrays or Sets), returning a Promise that resolves to the collected elements. This makes it a drop-in for \`Array.from\` when you need a Promise regardless.

This exercise demonstrates the pattern synchronously using \`Array.from\` on a \`Set\`.

**Challenge:** Implement \`syncToArray\` that converts a \`Set<number>\` to an array using \`Array.from\`.

\`\`\`ts
syncToArray(new Set([1, 2, 3])) // → [1, 2, 3]
\`\`\``,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.fromAsync',
    initialCode: `function syncToArray(set: Set<number>): number[] {
  // Use Array.from(set) — mirrors how Array.fromAsync works with sync iterables
}`,
    solution: `function syncToArray(set: Set<number>): number[] {
  return Array.from(set)
}`,
    tests: [
      { description: 'converts Set([1,2,3]) to [1,2,3]', assertion: 'expect(syncToArray(new Set([1, 2, 3]))).toEqual([1, 2, 3])' },
      { description: 'empty Set returns []', assertion: 'expect(syncToArray(new Set())).toEqual([])' },
      { description: 'result is an array', assertion: 'expect(Array.isArray(syncToArray(new Set([1])))).toBe(true)' },
      { description: 'single element Set', assertion: 'expect(syncToArray(new Set([42]))).toEqual([42])' },
      { description: 'has correct length', assertion: 'expect(syncToArray(new Set([1, 2, 3, 4]))).toHaveLength(4)' },
    ],
    hints: [
      '`Array.fromAsync` wraps the result in a Promise even for sync inputs.',
      '`Array.from` and `Array.fromAsync` accept any iterable (arrays, Sets, Maps, generators, strings).',
    ],
    tags: ['Array', 'Array.fromAsync', 'Set', 'iterable', 'advanced'],
    usageExample: {
      code: `const set = new Set([10, 20, 30])
const arr = await Array.fromAsync(set)
// → [10, 20, 30]`,
      explanation: {
        en: 'Array.fromAsync() also works with synchronous iterables like Set or Map.',
        es: 'Array.fromAsync() también funciona con iterables síncronos como Set o Map.',
      },
    },
  },
  {
    slug: 'array-from-async-error-handling',
    title: 'Array.fromAsync() — safe collection with fallback',
    description: `## Array.fromAsync() — error handling

When using \`Array.fromAsync\`, if any promise in the iterable rejects, the entire operation rejects. A \`try/catch\` around the \`await\` lets you return a fallback value (like \`null\`) instead of propagating the error.

This exercise simulates the pattern synchronously: attempt to map each value, returning \`null\` if any mapper throws.

**Challenge:** Implement \`safeCollect\` that takes an array of numbers and an optional flag. When \`shouldFail\` is \`true\`, return \`null\`; otherwise return the array as-is.

\`\`\`ts
safeCollect([1, 2, 3], false) // → [1, 2, 3]
safeCollect([1, 2, 3], true)  // → null
\`\`\``,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.fromAsync',
    initialCode: `function safeCollect(items: number[], shouldFail: boolean): number[] | null {
  // Return null if shouldFail is true, otherwise return Array.from(items)
  // In real code: wrap Array.fromAsync in try/catch to handle rejections
}`,
    solution: `function safeCollect(items: number[], shouldFail: boolean): number[] | null {
  try {
    if (shouldFail) throw new Error('Collection failed')
    return Array.from(items)
  } catch {
    return null
  }
}`,
    tests: [
      { description: 'safeCollect([1,2,3], false) returns [1,2,3]', assertion: 'expect(safeCollect([1, 2, 3], false)).toEqual([1, 2, 3])' },
      { description: 'safeCollect([1,2,3], true) returns null', assertion: 'expect(safeCollect([1, 2, 3], true)).toBeNull()' },
      { description: 'safeCollect([], false) returns []', assertion: 'expect(safeCollect([], false)).toEqual([])' },
      { description: 'result is null when shouldFail', assertion: 'expect(safeCollect([10], true)).toBeNull()' },
      { description: 'result is an array when not failing', assertion: 'expect(Array.isArray(safeCollect([1, 2], false))).toBe(true)' },
    ],
    hints: [
      'With `Array.fromAsync`, wrap the `await` in a `try/catch` to handle any rejected promise.',
      'Returning `null` from the `catch` block is a common safe-fallback pattern.',
    ],
    tags: ['Array', 'Array.fromAsync', 'error-handling', 'advanced'],
    usageExample: {
      code: `try {
  const arr = await Array.fromAsync([Promise.reject(new Error('oops'))])
} catch (e) {
  console.error(e.message)  // 'oops'
}`,
      explanation: {
        en: 'Wrap Array.fromAsync() in try/catch to handle rejections from any promise in the iterable.',
        es: 'Envuelve Array.fromAsync() en try/catch para manejar rechazos de cualquier promesa en el iterable.',
      },
    },
  },
]
