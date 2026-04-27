import type { Exercise } from '@/shared/types/exercises'

export const operatorsModernExercises: Exercise[] = [
  {
    slug: 'operators-nullish-coalescing',
    title: 'Operators — ?? nullish coalescing',
    description: `## ?? only falls back for null/undefined\n\nUnlike \`||\`, which falls back for any falsy value, \`??\` only falls back when the left side is \`null\` or \`undefined\`. This means \`0\`, \`''\`, and \`false\` are **not** replaced.\n\n**Challenge:** Write \`withDefault(val)\` that returns \`val ?? 'default'\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Operators',
    initialCode: `function withDefault(val) {
  // return val ?? 'default'
}`,
    solution: `function withDefault(val) {
  return val ?? 'default'
}`,
    tests: [
      { description: 'null gets default', assertion: "expect(withDefault(null)).toBe('default')" },
      { description: 'undefined gets default', assertion: "expect(withDefault(undefined)).toBe('default')" },
      { description: '0 is preserved (not falsy-replaced)', assertion: "expect(withDefault(0)).toBe(0)" },
      { description: 'empty string is preserved', assertion: "expect(withDefault('')).toBe('')" },
      { description: 'false is preserved', assertion: "expect(withDefault(false)).toBe(false)" },
    ],
    hints: ['?? only triggers for null or undefined, not 0, false, or empty string'],
    tags: ['operators', 'nullish-coalescing', 'modern-js'],
  },
  {
    slug: 'operators-optional-chaining',
    title: 'Operators — ?. optional chaining',
    description: `## ?. safely navigates nested properties\n\n\`obj?.prop\` returns \`undefined\` instead of throwing if \`obj\` is \`null\` or \`undefined\`.\n\n**Challenge:** Write \`safeAccess(obj)\` that returns:\n- \`name\`: \`obj?.user?.name ?? 'anonymous'\`\n- \`city\`: \`obj?.user?.address?.city ?? 'unknown'\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Operators',
    initialCode: `function safeAccess(obj) {
  return {
    name: 'anonymous',
    city: 'unknown',
  }
}`,
    solution: `function safeAccess(obj) {
  return {
    name: obj?.user?.name ?? 'anonymous',
    city: obj?.user?.address?.city ?? 'unknown',
  }
}`,
    tests: [
      { description: 'returns name when present', assertion: "expect(safeAccess({ user: { name: 'Alice', address: { city: 'NYC' } } }).name).toBe('Alice')" },
      { description: 'returns city when present', assertion: "expect(safeAccess({ user: { name: 'Bob', address: { city: 'LA' } } }).city).toBe('LA')" },
      { description: 'returns anonymous for null input', assertion: "expect(safeAccess(null).name).toBe('anonymous')" },
      { description: 'returns unknown when city missing', assertion: "expect(safeAccess({ user: { name: 'Carol' } }).city).toBe('unknown')" },
    ],
    hints: ['Chain ?. for each level: obj?.user?.address?.city'],
    tags: ['operators', 'optional-chaining', 'modern-js'],
  },
  {
    slug: 'operators-spread',
    title: 'Operators — ... spread: merge arrays and objects',
    description: `## Spread operator expands iterables\n\n\`...\` spreads the elements of an array or properties of an object inline.\n\n**Challenge:** Write \`mergeAll(arr1, arr2, obj1, obj2)\` that returns:\n- \`arr\`: \`arr1\` and \`arr2\` merged into one array using spread\n- \`obj\`: \`obj1\` and \`obj2\` merged into one object using spread (obj2 properties win)`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Operators',
    initialCode: `function mergeAll(arr1, arr2, obj1, obj2) {
  return {
    arr: [],  // spread arr1 and arr2
    obj: {},  // spread obj1 and obj2
  }
}`,
    solution: `function mergeAll(arr1, arr2, obj1, obj2) {
  return {
    arr: [...arr1, ...arr2],
    obj: { ...obj1, ...obj2 },
  }
}`,
    tests: [
      { description: 'merges arrays', assertion: "expect(mergeAll([1,2],[3,4],{},{}).arr).toEqual([1,2,3,4])" },
      { description: 'merges objects', assertion: "expect(mergeAll([],[],{a:1},{b:2}).obj).toEqual({a:1,b:2})" },
      { description: 'obj2 overwrites obj1 on conflict', assertion: "expect(mergeAll([],[],{x:1},{x:99}).obj.x).toBe(99)" },
    ],
    hints: ['[...a, ...b] spreads both arrays', '{ ...a, ...b } merges both objects (later props win)'],
    tags: ['operators', 'spread', 'modern-js'],
  },
  {
    slug: 'operators-rest-params',
    title: 'Operators — ...rest parameters',
    description: `## Rest collects remaining arguments\n\nWhen \`...\` appears in a **function parameter**, it collects all remaining arguments into an array.\n\n**Challenge:** Write \`sumAll(first, ...rest)\` that returns the sum of \`first\` plus all elements of \`rest\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Operators',
    initialCode: `function sumAll(first, ...rest) {
  // sum first + all rest elements
}`,
    solution: `function sumAll(first, ...rest) {
  return rest.reduce((acc, n) => acc + n, first)
}`,
    tests: [
      { description: 'sumAll(1,2,3,4) is 10', assertion: "expect(sumAll(1,2,3,4)).toBe(10)" },
      { description: 'sumAll(5) is 5', assertion: "expect(sumAll(5)).toBe(5)" },
      { description: 'sumAll(0,1,2) is 3', assertion: "expect(sumAll(0,1,2)).toBe(3)" },
    ],
    hints: ['rest is an array — use .reduce() or a for loop'],
    tags: ['operators', 'rest', 'modern-js'],
  },
  {
    slug: 'operators-logical-assignment',
    title: 'Operators — &&=, ||=, ??= logical assignment',
    description: `## Logical assignment operators (ES2021)\n\n- \`a &&= b\` — assigns \`b\` only if \`a\` is truthy\n- \`a ||= b\` — assigns \`b\` only if \`a\` is falsy\n- \`a ??= b\` — assigns \`b\` only if \`a\` is null/undefined\n\n**Challenge:** Write \`logicalAssignment()\` that:\n1. \`let a = 1; a &&= 99\` → return a\n2. \`let b = 0; b ||= 42\` → return b\n3. \`let c = null; c ??= 'hello'\` → return c`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Operators',
    initialCode: `function logicalAssignment() {
  let a = 1
  // a &&= 99
  let b = 0
  // b ||= 42
  let c = null
  // c ??= 'hello'
  return { a, b, c }
}`,
    solution: `function logicalAssignment() {
  let a = 1
  a &&= 99
  let b = 0
  b ||= 42
  let c = null
  c ??= 'hello'
  return { a, b, c }
}`,
    tests: [
      { description: '&&= assigns when truthy', assertion: "expect(logicalAssignment().a).toBe(99)" },
      { description: '||= assigns when falsy', assertion: "expect(logicalAssignment().b).toBe(42)" },
      { description: '??= assigns when null', assertion: "expect(logicalAssignment().c).toBe('hello')" },
    ],
    hints: ['&&= only assigns if left side is truthy', '||= only assigns if left side is falsy', '??= only assigns if left side is null/undefined'],
    tags: ['operators', 'logical-assignment', 'es2021'],
  },
]
