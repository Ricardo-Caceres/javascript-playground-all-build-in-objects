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
