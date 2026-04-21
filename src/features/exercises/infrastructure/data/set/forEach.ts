import type { Exercise } from '@/shared/types/exercises'

export const setForEachExercises: Exercise[] = [
  {
    slug: 'set-foreach-1',
    title: 'Set forEach() — collect values',
    description: `## Set.prototype.forEach()\n\nforEach calls a callback for each value. Collect values into an array.\n\n**Challenge:** Use forEach to collect all values.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'forEach',
    initialCode: `// Collect values with forEach\nconst s = new Set([1,2,3])\nconst vals = []\ns.forEach((value) => vals.push(value))\n`,
    solution: `const s = new Set([1,2,3]); const vals = []; s.forEach(v => vals.push(v)); vals`,
    tests: [
      { description: 'values collected correctly', assertion:'const s = new Set([1,2,3]); const vals = []; s.forEach(v => vals.push(v)); expect(vals).toEqual([1,2,3])' },
      { description: 'collected array length equals size', assertion:'const s = new Set([1,2,3]); const vals = []; s.forEach(v => vals.push(v)); expect(vals.length).toBe(s.size)' },
      { description: 'first value is correct', assertion:'const s = new Set([5,6,7]); const vals = []; s.forEach(v => vals.push(v)); expect(vals[0]).toBe(5)' },
      { description: 'values in insertion order', assertion:'const s = new Set([3,1,2]); const vals = []; s.forEach(v => vals.push(v)); expect(vals).toEqual([3,1,2])' },
      { description: 'forEach is a function', assertion:"expect(typeof new Set().forEach).toBe('function')" },
    ],
    hints: ['forEach callback for Set receives (value, value, set)'],
    tags: ['Set', 'forEach', 'method'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
s.forEach(val => console.log(val))
// 1, 2, 3`,
      explanation: {
        en: 'Use Set.forEach() to execute a callback for each value in the set.',
        es: 'Usa Set.forEach() para ejecutar un callback por cada valor del conjunto.',
      },
    },
  },
  {
    slug: 'set-foreach-2',
    title: 'Set forEach() — both args are the value',
    description: `## Set.prototype.forEach()\n\nFor Set, both the first and second callback arguments are the value.\n\n**Challenge:** Verify that both args are the same value.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'forEach',
    initialCode: `// Check both callback arguments\nconst s = new Set([42])\nlet arg1, arg2\ns.forEach((v1, v2) => { arg1 = v1; arg2 = v2 })\n`,
    solution: `const s = new Set([42]); let a1, a2; s.forEach((v1,v2) => { a1=v1; a2=v2; }); a1 === a2`,
    tests: [
      { description: 'arg1 === arg2 for Set forEach', assertion:'const s = new Set([42]); let a,b; s.forEach((v1,v2) => {a=v1; b=v2;}); expect(a).toBe(b)' },
      { description: 'first arg is the value', assertion:'const s = new Set([99]); let v; s.forEach((val) => v=val); expect(v).toBe(99)' },
      { description: 'second arg equals first', assertion:'const s = new Set([7]); let a,b; s.forEach((v1,v2) => {a=v1; b=v2;}); expect(a === b).toBe(true)' },
      { description: 'both args are the value not a key', assertion:'const s = new Set([5]); const args = []; s.forEach((v1,v2) => args.push([v1,v2])); expect(args[0][0]).toBe(5)' },
      { description: 'both args equal 5', assertion:'const s = new Set([5]); let a,b; s.forEach((v1,v2) => {a=v1; b=v2;}); expect(a).toBe(5)' },
    ],
    hints: ['Set.forEach callback: (value, value, set) — first two args are both the value'],
    tags: ['Set', 'forEach', 'bothArgs'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
s.forEach(val => console.log(val))
// 1, 2, 3`,
      explanation: {
        en: 'Use Set.forEach() to execute a callback for each value in the set.',
        es: 'Usa Set.forEach() para ejecutar un callback por cada valor del conjunto.',
      },
    },
  },
  {
    slug: 'set-foreach-3',
    title: 'Set forEach() — third arg is Set',
    description: `## Set.prototype.forEach()\n\nThe third argument to the callback is the Set itself.\n\n**Challenge:** Verify that the callback receives the Set as third arg.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'forEach',
    initialCode: `// Check the third callback argument\nconst s = new Set([1])\nlet receivedSet\ns.forEach((v1, v2, set) => { receivedSet = set })\n`,
    solution: `const s = new Set([1]); let r; s.forEach((v1,v2,set) => { r=set; }); r === s`,
    tests: [
      { description: 'third arg is the Set itself', assertion:'const s = new Set([1]); let r; s.forEach((v1,v2,set) => r=set); expect(r).toBe(s)' },
      { description: 'received set has correct size', assertion:'const s = new Set([1,2,3]); let r; s.forEach((v1,v2,set) => r=set); expect(r.size).toBe(3)' },
      { description: 'received set is Set instance', assertion:'const s = new Set([1]); let r; s.forEach((v1,v2,set) => r=set); expect(r instanceof Set).toBe(true)' },
      { description: 'third arg === original set', assertion:'const s = new Set([1]); let same; s.forEach((v1,v2,set) => same = set===s); expect(same).toBe(true)' },
      { description: 'forEach returns undefined', assertion:'expect(new Set([1]).forEach(() => {})).toBeUndefined()' },
    ],
    hints: ['Third argument lets you reference the Set inside the callback'],
    tags: ['Set', 'forEach', 'thirdArg'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
s.forEach(val => console.log(val))
// 1, 2, 3`,
      explanation: {
        en: 'Use Set.forEach() to execute a callback for each value in the set.',
        es: 'Usa Set.forEach() para ejecutar un callback por cada valor del conjunto.',
      },
    },
  },
  {
    slug: 'set-foreach-4',
    title: 'Set forEach() — empty Set is fine',
    description: `## Set.prototype.forEach()\n\nCalling forEach on an empty Set does not invoke the callback.\n\n**Challenge:** Verify forEach on empty Set calls callback 0 times.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'forEach',
    initialCode: `// forEach on empty Set\nconst s = new Set()\nlet count = 0\ns.forEach(() => count++)\n`,
    solution: `const s = new Set(); let count = 0; s.forEach(() => count++); count`,
    tests: [
      { description: 'callback not called for empty Set', assertion:'let c = 0; new Set().forEach(() => c++); expect(c).toBe(0)' },
      { description: 'forEach does not throw on empty Set', assertion:'expect((() => { try { (() => new Set().forEach(() => {}))(); return true; } catch(e) { return false; } })()).toBe(true)' },
      { description: 'forEach returns undefined for empty Set', assertion:'expect(new Set().forEach(() => {})).toBeUndefined()' },
      { description: 'count stays at 0', assertion:'let count = 0; new Set().forEach(() => count++); expect(count).toBe(0)' },
      { description: 'forEach callable on empty Set', assertion:'const s = new Set(); expect((() => { try { (() => s.forEach(() => {}))(); return true; } catch(e) { return false; } })()).toBe(true)' },
    ],
    hints: ['forEach on an empty Set is a no-op'],
    tags: ['Set', 'forEach', 'empty'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
s.forEach(val => console.log(val))
// 1, 2, 3`,
      explanation: {
        en: 'Use Set.forEach() to execute a callback for each value in the set.',
        es: 'Usa Set.forEach() para ejecutar un callback por cada valor del conjunto.',
      },
    },
  },
  {
    slug: 'set-foreach-5',
    title: 'Set forEach() — insertion order',
    description: `## Set.prototype.forEach()\n\nforEach visits values in insertion order.\n\n**Challenge:** Verify that forEach processes values in insertion order.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'forEach',
    initialCode: `// Check forEach order\nconst s = new Set([3,1,2])\nconst order = []\ns.forEach((v) => order.push(v))\n`,
    solution: `const s = new Set([3,1,2]); const order = []; s.forEach(v => order.push(v)); order`,
    tests: [
      { description: 'values visited in insertion order', assertion:'const s = new Set([3,1,2]); const order = []; s.forEach(v => order.push(v)); expect(order).toEqual([3,1,2])' },
      { description: 'first visited is first inserted', assertion:'const s = new Set([9,5,1]); let first; s.forEach(v => { if(!first) first=v; }); expect(first).toBe(9)' },
      { description: 'callback called once per unique value', assertion:'const s = new Set([1,2,3]); let c = 0; s.forEach(() => c++); expect(c).toBe(3)' },
      { description: 'total calls equal size', assertion:'const s = new Set([1,2,3,4]); let c = 0; s.forEach(() => c++); expect(c).toBe(s.size)' },
      { description: 'dedup means fewer calls', assertion:'const s = new Set([1,1,2,2,3]); let c = 0; s.forEach(() => c++); expect(c).toBe(3)' },
    ],
    hints: ['forEach visits values in insertion order, each unique value exactly once'],
    tags: ['Set', 'forEach', 'order'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
s.forEach(val => console.log(val))
// 1, 2, 3`,
      explanation: {
        en: 'Use Set.forEach() to execute a callback for each value in the set.',
        es: 'Usa Set.forEach() para ejecutar un callback por cada valor del conjunto.',
      },
    },
  },
]
