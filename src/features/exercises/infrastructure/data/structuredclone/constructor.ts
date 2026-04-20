import type { Exercise } from '@/shared/types/exercises'

export const structuredCloneExercises: Exercise[] = [
  {
    slug: 'structuredclone-deep-clone-object',
    title: 'Deep Clone an Object',
    description: 'Use structuredClone() to create a deep copy of a plain object.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'structuredClone',
    initialCode: `function deepClone<T>(obj: T): T {
  // Return a deep clone of the given object using structuredClone
}`,
    solution: `function deepClone<T>(obj: T): T {
  return structuredClone(obj);
}`,
    tests: [
      {
        description: 'Clone equals the original',
        assertion:`expect(deepClone({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });`,
      },
      {
        description: 'Clone is not the same reference',
        assertion:`const original = { a: 1 }; const clone = deepClone(original); expect(clone === original).toBe(false);`,
      },
      {
        description: 'Clone has the same value for property a',
        assertion:`expect(deepClone({ a: 42 }).a).toBe(42);`,
      },
      {
        description: 'Modifying clone does not affect original',
        assertion:`const orig = { x: 1 }; const c = deepClone(orig); c.x = 99; expect(orig.x).toBe(1);`,
      },
      {
        description: 'Works with multiple properties',
        assertion:`expect(deepClone({ x: 1, y: 2, z: 3 })).toEqual({ x: 1, y: 2, z: 3 });`,
      },
    ],
    hints: ['structuredClone() performs a deep copy'],
    tags: [],
  },
  {
    slug: 'structuredclone-nested-object',
    title: 'Deep Clone Nested Objects',
    description: 'Verify that structuredClone() creates deep copies of nested objects, not shallow copies.',
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'structuredClone',
    initialCode: `function cloneNested<T>(obj: T): T {
  // Return a deep clone of the given nested object
}`,
    solution: `function cloneNested<T>(obj: T): T {
  return structuredClone(obj);
}`,
    tests: [
      {
        description: 'Clone of nested object equals original',
        assertion:`expect(cloneNested({ a: { b: 1 } })).toEqual({ a: { b: 1 } });`,
      },
      {
        description: 'Nested object is not the same reference',
        assertion:`const orig = { nested: { val: 1 } }; const clone = cloneNested(orig); expect(clone.nested === orig.nested).toBe(false);`,
      },
      {
        description: 'Modifying nested clone does not affect original',
        assertion:`const orig = { nested: { val: 1 } }; const clone = cloneNested(orig); (clone).nested.val = 99; expect(orig.nested.val).toBe(1);`,
      },
      {
        description: 'Deeply nested values are preserved',
        assertion:`expect(cloneNested({ a: { b: { c: 42 } } })).toEqual({ a: { b: { c: 42 } } });`,
      },
      {
        description: 'Top-level reference is different',
        assertion:`const orig = { nested: { val: 5 } }; expect(cloneNested(orig) !== orig).toBeTruthy();`,
      },
    ],
    hints: ['structuredClone deep-copies all nested levels'],
    tags: [],
  },
  {
    slug: 'structuredclone-array',
    title: 'Deep Clone an Array',
    description: 'Use structuredClone() to create a deep copy of a nested array.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'structuredClone',
    initialCode: `function cloneArray<T>(arr: T): T {
  // Return a deep clone of the given array
}`,
    solution: `function cloneArray<T>(arr: T): T {
  return structuredClone(arr);
}`,
    tests: [
      {
        description: 'Clone equals original array',
        assertion:`expect(cloneArray([1, [2, 3]])).toEqual([1, [2, 3]]);`,
      },
      {
        description: 'Clone is not same reference',
        assertion:`const orig = [1, [2, 3]]; const clone = cloneArray(orig); expect(clone === orig).toBe(false);`,
      },
      {
        description: 'Nested array is not same reference',
        assertion:`const orig = [1, [2, 3]] as [number, number[]]; const clone = cloneArray(orig); expect(clone[1] === orig[1]).toBe(false);`,
      },
      {
        description: 'First element is correct',
        assertion:`expect((cloneArray([1, [2, 3]]))[0]).toBe(1);`,
      },
      {
        description: 'Nested element is correct',
        assertion:`expect((cloneArray([1, [2, 3]]))[1][0]).toBe(2);`,
      },
    ],
    hints: ['structuredClone works with arrays and nested arrays'],
    tags: [],
  },
  {
    slug: 'structuredclone-date',
    title: 'Deep Clone a Date',
    description: 'Use structuredClone() to clone a Date object. The clone is a separate Date instance.',
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'structuredClone',
    initialCode: `function cloneDate(date: Date): Date {
  // Return a deep clone of the given Date
}`,
    solution: `function cloneDate(date: Date): Date {
  return structuredClone(date);
}`,
    tests: [
      {
        description: 'Clone is a Date instance',
        assertion:`expect(cloneDate(new Date(0)) instanceof Date).toBeTruthy();`,
      },
      {
        description: 'Clone has the same timestamp',
        assertion:`expect(cloneDate(new Date(0)).getTime()).toBe(0);`,
      },
      {
        description: 'Clone is not the same reference',
        assertion:`const d = new Date(0); expect(cloneDate(d) === d).toBe(false);`,
      },
      {
        description: 'Modifying clone does not affect original',
        assertion:`const d = new Date(1000); const c = cloneDate(d); c.setTime(9999); expect(d.getTime()).toBe(1000);`,
      },
      {
        description: 'Clone preserves arbitrary timestamp',
        assertion:`expect(cloneDate(new Date(12345)).getTime()).toBe(12345);`,
      },
    ],
    hints: ['structuredClone supports Date objects'],
    tags: [],
  },
  {
    slug: 'structuredclone-map',
    title: 'Deep Clone a Map',
    description: 'Use structuredClone() to clone a Map. The clone is a separate Map instance with the same entries.',
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'structuredClone',
    initialCode: `function cloneMap<K, V>(map: Map<K, V>): Map<K, V> {
  // Return a deep clone of the given Map
}`,
    solution: `function cloneMap<K, V>(map: Map<K, V>): Map<K, V> {
  return structuredClone(map);
}`,
    tests: [
      {
        description: 'Clone is a Map instance',
        assertion:`expect(cloneMap(new Map([['a', 1]])) instanceof Map).toBeTruthy();`,
      },
      {
        description: 'Clone is not same reference',
        assertion:`const m = new Map([['a', 1]]); expect(cloneMap(m) === m).toBe(false);`,
      },
      {
        description: 'Clone has same size',
        assertion:`expect(cloneMap(new Map([['a', 1], ['b', 2]])).size).toBe(2);`,
      },
      {
        description: 'Clone has correct value for key "a"',
        assertion:`expect(cloneMap(new Map([['a', 1]])).get('a')).toBe(1);`,
      },
      {
        description: 'Modifying clone does not affect original',
        assertion:`const m = new Map([['a', 1]]); const c = cloneMap(m); c.set('a', 99); expect(m.get('a')).toBe(1);`,
      },
    ],
    hints: ['structuredClone supports Map objects'],
    tags: [],
  },
]
