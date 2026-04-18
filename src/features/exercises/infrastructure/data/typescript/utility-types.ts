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
