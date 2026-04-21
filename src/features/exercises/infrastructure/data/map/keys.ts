import type { Exercise } from '@/shared/types/exercises'

export const mapKeysExercises: Exercise[] = [
  {
    slug: 'map-keys-1',
    title: 'Map keys() — spread to array',
    description: `## Map.prototype.keys()\n\n\`keys()\` returns an iterator of the Map's keys in insertion order.\n\n**Challenge:** Verify that spreading keys() gives the correct array.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'keys',
    initialCode: `// Spread keys() into an array\nconst m = new Map([['a',1],['b',2]])\n`,
    solution: `[...new Map([['a',1],['b',2]]).keys()]`,
    tests: [
      { description: "keys are ['a','b']", assertion: "expect(result).toEqual(['a','b'])" },
      { description: 'result is an array', assertion: "expect(Array.isArray([...new Map([['a',1]]).keys()])).toBe(true)" },
      { description: 'array length equals map size', assertion: "const m = new Map([['a',1],['b',2]]); expect([...m.keys()].length).toBe(m.size)" },
      { description: "first key is 'a'", assertion: "expect(result[0]).toBe('a')" },
      { description: 'keys is an iterable', assertion: "expect(result[Symbol.iterator]).toBe('function')" },
    ],
    hints: ['Spread the iterator with [...map.keys()] to get an array'],
    tags: ['Map', 'keys', 'iterator'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const k of m.keys()) {
  console.log(k) // 'a', 'b'
}`,
      explanation: {
        en: 'Use Map.keys() to iterate over all keys in insertion order.',
        es: 'Usa Map.keys() para iterar sobre todas las claves en orden de inserción.',
      },
    },
  },
  {
    slug: 'map-keys-2',
    title: 'Map keys() — insertion order',
    description: `## Map.prototype.keys()\n\nKeys are iterated in insertion order.\n\n**Challenge:** Verify that keys come out in the order they were inserted.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'keys',
    initialCode: `// Check key order\nconst m = new Map([['c',3],['a',1],['b',2]])\n`,
    solution: `[...new Map([['c',3],['a',1],['b',2]]).keys()]`,
    tests: [
      { description: "keys in insertion order ['c','a','b']", assertion: "expect(result).toEqual(['c','a','b'])" },
      { description: 'first key is first inserted', assertion: "expect([...new Map([['z',1],['a',2]]).keys()][0]).toBe('z')" },
      { description: 'order preserved for 3 keys', assertion: "const m = new Map([['x',1],['y',2],['z',3]]); expect([...m.keys()]).toEqual(['x','y','z'])" },
      { description: 'updating value does not change key order', assertion: "const m = new Map([['a',1],['b',2]]); m.set('a',99); expect([...m.keys()]).toEqual(['a','b'])" },
      { description: 'delete and re-add changes order', assertion: "const m = new Map([['a',1],['b',2]]); m.delete('a'); m.set('a',1); expect([...m.keys()]).toEqual(['b','a'])" },
    ],
    hints: ['Map.keys() respects insertion order, unlike plain object keys'],
    tags: ['Map', 'keys', 'order'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const k of m.keys()) {
  console.log(k) // 'a', 'b'
}`,
      explanation: {
        en: 'Use Map.keys() to iterate over all keys in insertion order.',
        es: 'Usa Map.keys() para iterar sobre todas las claves en orden de inserción.',
      },
    },
  },
  {
    slug: 'map-keys-3',
    title: 'Map keys() — type of iterator',
    description: `## Map.prototype.keys()\n\nkeys() returns a MapIterator.\n\n**Challenge:** Verify the type of the keys() return value.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'keys',
    initialCode: `// Check the type returned by keys()\nconst m = new Map([['a',1]])\n`,
    solution: `typeof new Map([['a',1]]).keys()`,
    tests: [
      { description: "keys() returns an object (iterator)", assertion: "expect(result).toBe('object')" },
      { description: 'keys() is iterable', assertion: "expect(result[Symbol.iterator]).toBe('function')" },
      { description: 'keys() has next() method', assertion: "expect(result.next).toBe('function')" },
      { description: 'next() returns {value, done} shape', assertion: "const it = new Map([['a',1]]).keys(); const n = it.next(); expect('value' in n && 'done' in n).toBe(true)" },
      { description: 'keys is a function', assertion: "expect(typeof new Map().keys).toBe('function')" },
    ],
    hints: ['keys() returns a MapIterator — an iterable iterator object'],
    tags: ['Map', 'keys', 'type'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const k of m.keys()) {
  console.log(k) // 'a', 'b'
}`,
      explanation: {
        en: 'Use Map.keys() to iterate over all keys in insertion order.',
        es: 'Usa Map.keys() para iterar sobre todas las claves en orden de inserción.',
      },
    },
  },
  {
    slug: 'map-keys-4',
    title: 'Map keys() — empty Map',
    description: `## Map.prototype.keys()\n\nkeys() on an empty Map produces an empty iterator.\n\n**Challenge:** Verify that spreading keys() of an empty Map gives an empty array.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'keys',
    initialCode: `// Spread keys of empty Map\nconst m = new Map()\n`,
    solution: `[...new Map().keys()]`,
    tests: [
      { description: 'empty map keys is empty array', assertion: "expect(result).toEqual([])" },
      { description: 'empty map keys has length 0', assertion: "expect(result.length).toBe(0)" },
      { description: 'iterator is immediately done', assertion: "expect(new Map().keys().next().done).toBe(true)" },
      { description: 'result is an array', assertion: "expect(Array.isArray(result)).toBe(true)" },
      { description: 'no keys to iterate', assertion: "const keys = []; for(const k of new Map().keys()) keys.push(k); expect(keys.length).toBe(0)" },
    ],
    hints: ['keys() on an empty Map yields no values'],
    tags: ['Map', 'keys', 'empty'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const k of m.keys()) {
  console.log(k) // 'a', 'b'
}`,
      explanation: {
        en: 'Use Map.keys() to iterate over all keys in insertion order.',
        es: 'Usa Map.keys() para iterar sobre todas las claves en orden de inserción.',
      },
    },
  },
  {
    slug: 'map-keys-5',
    title: 'Map keys() — mixed key types',
    description: `## Map.prototype.keys()\n\nMap keys can be any type — strings, numbers, objects, etc.\n\n**Challenge:** Verify that keys() works with mixed key types.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Map',
    method: 'keys',
    initialCode: `// Mixed key types\nconst m = new Map([[1,'one'],['two',2],[true,'bool']])\n`,
    solution: `[...new Map([[1,'one'],['two',2],[true,'bool']]).keys()]`,
    tests: [
      { description: 'keys include number 1', assertion: "expect([...new Map([[1,'one'],['two',2]]).keys()]).toContain(1)" },
      { description: "keys include string 'two'", assertion: "expect([...new Map([[1,'one'],['two',2]]).keys()]).toContain('two')" },
      { description: 'keys length is 3 for 3 different types', assertion: "expect(new Map([[1,'a'],['2','b'],[true,'c']]).size).toBe(3)" },
      { description: 'number and string keys are distinct', assertion: "const m = new Map([[1,'num'],['1','str']]); expect(m.size).toBe(2)" },
      { description: 'all key types iterable', assertion: "const m = new Map([[null,'n'],[undefined,'u']]); expect([...m.keys()].length).toBe(2)" },
    ],
    hints: ['Map accepts any value as a key, including numbers, booleans, null, objects'],
    tags: ['Map', 'keys', 'mixedTypes'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const k of m.keys()) {
  console.log(k) // 'a', 'b'
}`,
      explanation: {
        en: 'Use Map.keys() to iterate over all keys in insertion order.',
        es: 'Usa Map.keys() para iterar sobre todas las claves en orden de inserción.',
      },
    },
  },
]
