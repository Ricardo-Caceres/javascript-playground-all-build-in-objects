import type { Exercise } from '@/shared/types/exercises'

export const mapForEachExercises: Exercise[] = [
  {
    slug: 'map-foreach-1',
    title: 'Map forEach() — collect values',
    description: `## Map.prototype.forEach()\n\n\`forEach()\` calls a callback for each entry. The callback receives (value, key, map).\n\n**Challenge:** Use forEach to collect all values into an array.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'forEach',
    initialCode: `// Collect values with forEach\nconst m = new Map([['a',1],['b',2]])\nconst vals = []\nm.forEach((value) => vals.push(value))\n`,
    solution: `const m = new Map([['a',1],['b',2]]); const vals = []; m.forEach((v) => vals.push(v)); vals`,
    tests: [
      { description: 'values collected correctly', assertion:"const m = new Map([['a',1],['b',2]]); const vals = []; m.forEach(v => vals.push(v)); expect(vals).toEqual([1,2])" },
      { description: 'collected array length equals map size', assertion:"const m = new Map([['a',1],['b',2]]); const vals = []; m.forEach(v => vals.push(v)); expect(vals.length).toBe(m.size)" },
      { description: 'first value is correct', assertion:"const m = new Map([['a',1],['b',2]]); const vals = []; m.forEach(v => vals.push(v)); expect(vals[0]).toBe(1)" },
      { description: 'values in insertion order', assertion:"const m = new Map([['x',10],['y',20]]); const vals = []; m.forEach(v => vals.push(v)); expect(vals).toEqual([10,20])" },
      { description: 'forEach is a function', assertion:"expect(typeof new Map().forEach).toBe('function')" },
    ],
    hints: ['forEach callback signature is (value, key, map)'],
    tags: ['Map', 'forEach', 'method'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
m.forEach((val, key) => console.log(key, val))
// 'a' 1, then 'b' 2`,
      explanation: {
        en: 'Use Map.forEach() to execute a callback for each key-value pair in the map.',
        es: 'Usa Map.forEach() para ejecutar un callback por cada par clave-valor del mapa.',
      },
    },
  },
  {
    slug: 'map-foreach-2',
    title: 'Map forEach() — collect keys',
    description: `## Map.prototype.forEach()\n\nThe second argument to the callback is the key.\n\n**Challenge:** Use forEach to collect all keys into an array.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'forEach',
    initialCode: `// Collect keys with forEach\nconst m = new Map([['a',1],['b',2]])\nconst keys = []\nm.forEach((value, key) => keys.push(key))\n`,
    solution: `const m = new Map([['a',1],['b',2]]); const keys = []; m.forEach((v,k) => keys.push(k)); keys`,
    tests: [
      { description: 'keys collected correctly', assertion:"const m = new Map([['a',1],['b',2]]); const keys = []; m.forEach((v,k) => keys.push(k)); expect(keys).toEqual(['a','b'])" },
      { description: 'first key is correct', assertion:"const m = new Map([['a',1],['b',2]]); const keys = []; m.forEach((v,k) => keys.push(k)); expect(keys[0]).toBe('a')" },
      { description: 'keys length equals size', assertion:"const m = new Map([['a',1],['b',2]]); const keys = []; m.forEach((v,k) => keys.push(k)); expect(keys.length).toBe(2)" },
      { description: 'callback receives key as second argument', assertion:"const m = new Map([['z',9]]); let gotKey; m.forEach((v,k) => { gotKey = k; }); expect(gotKey).toBe('z')" },
      { description: 'keys in insertion order', assertion:"const m = new Map([['c',3],['a',1]]); const keys = []; m.forEach((v,k) => keys.push(k)); expect(keys[0]).toBe('c')" },
    ],
    hints: ['forEach callback: first arg is value, second is key'],
    tags: ['Map', 'forEach', 'keys'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
m.forEach((val, key) => console.log(key, val))
// 'a' 1, then 'b' 2`,
      explanation: {
        en: 'Use Map.forEach() to execute a callback for each key-value pair in the map.',
        es: 'Usa Map.forEach() para ejecutar un callback por cada par clave-valor del mapa.',
      },
    },
  },
  {
    slug: 'map-foreach-3',
    title: 'Map forEach() — third arg is Map',
    description: `## Map.prototype.forEach()\n\nThe third argument to the callback is the Map itself.\n\n**Challenge:** Verify that the callback receives the Map as the third argument.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Map',
    method: 'forEach',
    initialCode: `// Check the third callback argument\nconst m = new Map([['a', 1]])\nlet receivedMap\nm.forEach((v, k, map) => { receivedMap = map })\n`,
    solution: `const m = new Map([['a',1]]); let received; m.forEach((v,k,map) => { received = map; }); received === m`,
    tests: [
      { description: 'third arg is the Map itself', assertion:"const m = new Map([['a',1]]); let r; m.forEach((v,k,map) => r = map); expect(r).toBe(m)" },
      { description: 'received map has correct size', assertion:"const m = new Map([['a',1],['b',2]]); let r; m.forEach((v,k,map) => r = map); expect(r.size).toBe(2)" },
      { description: 'received map is Map instance', assertion:"const m = new Map([['a',1]]); let r; m.forEach((v,k,map) => r = map); expect(r instanceof Map).toBe(true)" },
      { description: 'third arg === original map', assertion:"const m = new Map([['a',1]]); let same; m.forEach((v,k,map) => same = map === m); expect(same).toBe(true)" },
      { description: 'forEach returns undefined', assertion:"expect(new Map([['a',1]]).forEach(() => {})).toBeUndefined()" },
    ],
    hints: ['The third argument lets you reference the Map inside the callback'],
    tags: ['Map', 'forEach', 'thirdArg'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
m.forEach((val, key) => console.log(key, val))
// 'a' 1, then 'b' 2`,
      explanation: {
        en: 'Use Map.forEach() to execute a callback for each key-value pair in the map.',
        es: 'Usa Map.forEach() para ejecutar un callback por cada par clave-valor del mapa.',
      },
    },
  },
  {
    slug: 'map-foreach-4',
    title: 'Map forEach() — empty Map is fine',
    description: `## Map.prototype.forEach()\n\nCalling forEach on an empty Map does not invoke the callback.\n\n**Challenge:** Verify that forEach on an empty Map calls the callback 0 times.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'forEach',
    initialCode: `// forEach on empty Map\nconst m = new Map()\nlet count = 0\nm.forEach(() => count++)\n`,
    solution: `const m = new Map(); let count = 0; m.forEach(() => count++); count`,
    tests: [
      { description: 'callback not called for empty Map', assertion:"let c = 0; new Map().forEach(() => c++); expect(c).toBe(0)" },
      { description: 'forEach does not throw on empty Map', assertion:"expect((() => { try { (() => new Map().forEach(() => {}))(); return true; } catch(e) { return false; } })()).toBe(true)" },
      { description: 'forEach returns undefined for empty Map', assertion:"expect(new Map().forEach(() => {})).toBeUndefined()" },
      { description: 'count stays at 0', assertion:"let count = 0; new Map().forEach(() => count++); expect(count).toBe(0)" },
      { description: 'forEach is callable on empty Map', assertion:"const m = new Map(); expect((() => { try { (() => m.forEach(() => {}))(); return true; } catch(e) { return false; } })()).toBe(true)" },
    ],
    hints: ['forEach on an empty Map is a no-op'],
    tags: ['Map', 'forEach', 'empty'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
m.forEach((val, key) => console.log(key, val))
// 'a' 1, then 'b' 2`,
      explanation: {
        en: 'Use Map.forEach() to execute a callback for each key-value pair in the map.',
        es: 'Usa Map.forEach() para ejecutar un callback por cada par clave-valor del mapa.',
      },
    },
  },
  {
    slug: 'map-foreach-5',
    title: 'Map forEach() — insertion order',
    description: `## Map.prototype.forEach()\n\nforEach visits entries in insertion order.\n\n**Challenge:** Verify that forEach processes entries in insertion order.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'forEach',
    initialCode: `// Check forEach order\nconst m = new Map([['c',3],['a',1],['b',2]])\nconst order = []\nm.forEach((v, k) => order.push(k))\n`,
    solution: `const m = new Map([['c',3],['a',1],['b',2]]); const order = []; m.forEach((v,k) => order.push(k)); order`,
    tests: [
      { description: 'keys visited in insertion order', assertion:"const m = new Map([['c',3],['a',1],['b',2]]); const order = []; m.forEach((v,k) => order.push(k)); expect(order).toEqual(['c','a','b'])" },
      { description: 'values visited in insertion order', assertion:"const m = new Map([['c',3],['a',1],['b',2]]); const vals = []; m.forEach(v => vals.push(v)); expect(vals).toEqual([3,1,2])" },
      { description: 'first visited key is first inserted', assertion:"const m = new Map([['z',9],['a',1]]); let first; m.forEach((v,k) => { if(!first) first = k; }); expect(first).toBe('z')" },
      { description: 'callback called once per entry', assertion:"const m = new Map([['a',1],['b',2]]); let c = 0; m.forEach(() => c++); expect(c).toBe(2)" },
      { description: 'total calls equal size', assertion:"const m = new Map([['a',1],['b',2],['c',3]]); let c = 0; m.forEach(() => c++); expect(c).toBe(m.size)" },
    ],
    hints: ['forEach visits entries in the order they were inserted'],
    tags: ['Map', 'forEach', 'order'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
m.forEach((val, key) => console.log(key, val))
// 'a' 1, then 'b' 2`,
      explanation: {
        en: 'Use Map.forEach() to execute a callback for each key-value pair in the map.',
        es: 'Usa Map.forEach() para ejecutar un callback por cada par clave-valor del mapa.',
      },
    },
  },
]
