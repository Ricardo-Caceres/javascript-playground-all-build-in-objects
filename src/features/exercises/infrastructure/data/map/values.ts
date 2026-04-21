import type { Exercise } from '@/shared/types/exercises'

export const mapValuesExercises: Exercise[] = [
  {
    slug: 'map-values-1',
    title: 'Map values() — spread to array',
    description: `## Map.prototype.values()\n\n\`values()\` returns an iterator of the Map's values in insertion order.\n\n**Challenge:** Verify that spreading values() gives the correct array.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'values',
    initialCode: `// Spread values() into an array\nconst m = new Map([['a',1],['b',2]])\n`,
    solution: `[...new Map([['a',1],['b',2]]).values()]`,
    tests: [
      { description: 'values are [1,2]', assertion: "expect(result).toEqual([1,2])" },
      { description: 'result is an array', assertion: "expect(Array.isArray([...new Map([['a',1]]).values()])).toBe(true)" },
      { description: 'array length equals map size', assertion: "const m = new Map([['a',1],['b',2]]); expect([...m.values()].length).toBe(m.size)" },
      { description: 'first value is correct', assertion: "expect(result[0]).toBe(1)" },
      { description: 'values is iterable', assertion: "expect(result[Symbol.iterator]).toBe('function')" },
    ],
    hints: ['Spread the iterator with [...map.values()] to get an array of values'],
    tags: ['Map', 'values', 'iterator'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const v of m.values()) {
  console.log(v) // 1, 2
}`,
      explanation: {
        en: 'Use Map.values() to iterate over all values in insertion order.',
        es: 'Usa Map.values() para iterar sobre todos los valores en orden de inserción.',
      },
    },
  },
  {
    slug: 'map-values-2',
    title: 'Map values() — insertion order',
    description: `## Map.prototype.values()\n\nValues are yielded in the order their keys were inserted.\n\n**Challenge:** Verify that values are in insertion order.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'values',
    initialCode: `// Check value order\nconst m = new Map([['c',30],['a',10],['b',20]])\n`,
    solution: `[...new Map([['c',30],['a',10],['b',20]]).values()]`,
    tests: [
      { description: 'values in insertion order [30,10,20]', assertion: "expect(result).toEqual([30,10,20])" },
      { description: 'first value is from first inserted key', assertion: "expect([...new Map([['z',99],['a',1]]).values()][0]).toBe(99)" },
      { description: 'values order matches key order', assertion: "const m = new Map([['x',3],['y',1],['z',2]]); expect([...m.values()]).toEqual([3,1,2])" },
      { description: 'update value in place does not change order', assertion: "const m = new Map([['a',1],['b',2]]); m.set('a',99); expect([...m.values()][0]).toBe(99)" },
      { description: 'values length matches keys length', assertion: "const m = new Map([['a',1],['b',2]]); expect([...m.values()].length).toBe([...m.keys()].length)" },
    ],
    hints: ['values() yields values in the same order as keys() and entries()'],
    tags: ['Map', 'values', 'order'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const v of m.values()) {
  console.log(v) // 1, 2
}`,
      explanation: {
        en: 'Use Map.values() to iterate over all values in insertion order.',
        es: 'Usa Map.values() para iterar sobre todos los valores en orden de inserción.',
      },
    },
  },
  {
    slug: 'map-values-3',
    title: 'Map values() — type of iterator',
    description: `## Map.prototype.values()\n\nvalues() returns a MapIterator.\n\n**Challenge:** Verify the type of the values() return value.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'values',
    initialCode: `// Check the type returned by values()\n`,
    solution: `typeof new Map([['a',1]]).values()`,
    tests: [
      { description: "values() returns an object (iterator)", assertion: "expect(result).toBe('object')" },
      { description: 'values() is iterable', assertion: "expect(result[Symbol.iterator]).toBe('function')" },
      { description: 'values() has next() method', assertion: "expect(result.next).toBe('function')" },
      { description: 'next() returns value', assertion: "expect(new Map([['a',42]]).values().next().value).toBe(42)" },
      { description: 'values is a function', assertion: "expect(typeof new Map().values).toBe('function')" },
    ],
    hints: ['values() returns a MapIterator — an iterable iterator'],
    tags: ['Map', 'values', 'type'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const v of m.values()) {
  console.log(v) // 1, 2
}`,
      explanation: {
        en: 'Use Map.values() to iterate over all values in insertion order.',
        es: 'Usa Map.values() para iterar sobre todos los valores en orden de inserción.',
      },
    },
  },
  {
    slug: 'map-values-4',
    title: 'Map values() — empty Map',
    description: `## Map.prototype.values()\n\nvalues() on an empty Map produces an empty iterator.\n\n**Challenge:** Verify that spreading values() of an empty Map gives an empty array.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'values',
    initialCode: `// Spread values of empty Map\n`,
    solution: `[...new Map().values()]`,
    tests: [
      { description: 'empty map values is empty array', assertion: "expect(result).toEqual([])" },
      { description: 'length is 0', assertion: "expect(result.length).toBe(0)" },
      { description: 'iterator is immediately done', assertion: "expect(new Map().values().next().done).toBe(true)" },
      { description: 'result is an array', assertion: "expect(Array.isArray(result)).toBe(true)" },
      { description: 'no values to iterate', assertion: "const vals = []; for(const v of new Map().values()) vals.push(v); expect(vals.length).toBe(0)" },
    ],
    hints: ['An empty Map has no values to iterate'],
    tags: ['Map', 'values', 'empty'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const v of m.values()) {
  console.log(v) // 1, 2
}`,
      explanation: {
        en: 'Use Map.values() to iterate over all values in insertion order.',
        es: 'Usa Map.values() para iterar sobre todos los valores en orden de inserción.',
      },
    },
  },
  {
    slug: 'map-values-5',
    title: 'Map values() — mixed value types',
    description: `## Map.prototype.values()\n\nMap values can be any type — strings, numbers, objects, null, etc.\n\n**Challenge:** Verify that values() works with mixed value types.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Map',
    method: 'values',
    initialCode: `// Mixed value types\nconst m = new Map([['a',1],['b','two'],['c',true]])\n`,
    solution: `[...new Map([['a',1],['b','two'],['c',true]]).values()]`,
    tests: [
      { description: 'values include number 1', assertion: "expect([...new Map([['a',1],['b','x']]).values()]).toContain(1)" },
      { description: "values include string 'two'", assertion: "expect([...new Map([['a',1],['b','two']]).values()]).toContain('two')" },
      { description: 'null value is included', assertion: "expect([...new Map([['a',null]]).values()]).toContain(null)" },
      { description: 'undefined value is included', assertion: "const m = new Map([['a',undefined]]); expect([...m.values()]).toContain(undefined)" },
      { description: 'object value is included', assertion: "const obj = {x:1}; const m = new Map([['a',obj]]); expect([...m.values()][0]).toBe(obj)" },
    ],
    hints: ['Map values can be any JavaScript value, including null and undefined'],
    tags: ['Map', 'values', 'mixedTypes'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const v of m.values()) {
  console.log(v) // 1, 2
}`,
      explanation: {
        en: 'Use Map.values() to iterate over all values in insertion order.',
        es: 'Usa Map.values() para iterar sobre todos los valores en orden de inserción.',
      },
    },
  },
]
