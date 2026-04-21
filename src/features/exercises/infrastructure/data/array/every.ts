import type { Exercise } from '@/shared/types/exercises'

export const everyExercises: Exercise[] = [
  {
    slug: 'array-every-positive',
    title: 'Array.prototype.every() — check all positive',
    description: `## Array.prototype.every()

\`Array.prototype.every(callback)\` returns \`true\` if the callback returns a truthy value for **every** element, and \`false\` as soon as any element fails the test. It short-circuits on the first failing element.

**Challenge:** Implement \`allPositive(nums)\` that returns \`true\` if every number in the array is greater than 0.

\`\`\`ts
allPositive([1, 2, 3])    // → true
allPositive([1, -1, 3])   // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.every',
    initialCode: `function allPositive(nums: number[]): boolean {
  // Use nums.every(n => n > 0)
}`,
    solution: `function allPositive(nums: number[]): boolean {
  return nums.every(n => n > 0)
}`,
    tests: [
      { description: 'returns true for all positive', assertion: "expect(allPositive([1, 2, 3])).toBe(true)" },
      { description: 'returns false when one is negative', assertion: "expect(allPositive([1, -1, 3])).toBe(false)" },
      { description: 'returns false when one is zero', assertion: "expect(allPositive([1, 0, 3])).toBe(false)" },
      { description: 'single positive element returns true', assertion: "expect(allPositive([5])).toBe(true)" },
      { description: 'empty array returns true (vacuous)', assertion: "expect(allPositive([])).toBe(true)" },
    ],
    hints: [
      '`every()` short-circuits — it stops as soon as it finds a failing element.',
      'An empty array always returns `true` with `every()` — this is called vacuous truth.',
    ],
    tags: ['Array', 'Array.prototype.every', 'predicate', 'beginner'],
    usageExample: {
      code: `const nums = [2, 4, 6, 8]
nums.every(n => n > 0)  // → true
nums.every(n => n > 5)  // → false`,
      explanation: {
        en: 'Use every() to check whether all elements in an array satisfy a condition.',
        es: 'Usa every() para comprobar si todos los elementos de un array cumplen una condición.',
      },
    },
  },
  {
    slug: 'array-every-strings',
    title: 'Array.prototype.every() — check non-empty strings',
    description: `## Array.prototype.every() — string validation

\`every()\` can test any condition on any element type. Testing string length is a common use case for input validation.

**Challenge:** Implement \`allNonEmpty(strs)\` that returns \`true\` if every string in the array has a length greater than 0.

\`\`\`ts
allNonEmpty(['hello', 'world']) // → true
allNonEmpty(['hello', ''])     // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.every',
    initialCode: `function allNonEmpty(strs: string[]): boolean {
  // Use strs.every(s => s.length > 0)
}`,
    solution: `function allNonEmpty(strs: string[]): boolean {
  return strs.every(s => s.length > 0)
}`,
    tests: [
      { description: 'returns true when all non-empty', assertion: "expect(allNonEmpty(['hello', 'world'])).toBe(true)" },
      { description: 'returns false when one is empty', assertion: "expect(allNonEmpty(['hello', ''])).toBe(false)" },
      { description: 'single empty string returns false', assertion: "expect(allNonEmpty([''])).toBe(false)" },
      { description: 'single non-empty string returns true', assertion: "expect(allNonEmpty(['hi'])).toBe(true)" },
      { description: 'empty array returns true', assertion: "expect(allNonEmpty([])).toBe(true)" },
    ],
    hints: [
      '`s.length > 0` is truthy for any non-empty string.',
      'You can also write `s => !!s` or `Boolean` as the callback.',
    ],
    tags: ['Array', 'Array.prototype.every', 'string', 'validation', 'beginner'],
    usageExample: {
      code: `const words = ['hello', 'world']
words.every(w => w.length > 3)   // → true
words.every(w => w.startsWith('h'))  // → false`,
      explanation: {
        en: 'Use every() to validate that all strings in an array meet a specific criterion.',
        es: 'Usa every() para validar que todas las cadenas de un array cumplan un criterio específico.',
      },
    },
  },
  {
    slug: 'array-every-empty',
    title: 'Array.prototype.every() — vacuous truth',
    description: `## Array.prototype.every() — empty arrays

By mathematical convention, \`[].every(anything)\` always returns \`true\`. This is called **vacuous truth** — there are no elements to violate the condition.

**Challenge:** Implement \`isEveryLong(strs)\` that returns \`true\` if every string has length > 5. Observe that an empty array returns \`true\`.

\`\`\`ts
isEveryLong(['hello world', 'goodbye']) // → true
isEveryLong(['hi'])                     // → false
isEveryLong([])                         // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.every',
    initialCode: `function isEveryLong(strs: string[]): boolean {
  // Use strs.every(s => s.length > 5)
}`,
    solution: `function isEveryLong(strs: string[]): boolean {
  return strs.every(s => s.length > 5)
}`,
    tests: [
      { description: 'all long strings returns true', assertion: "expect(isEveryLong(['hello world', 'goodbye'])).toBe(true)" },
      { description: 'short string returns false', assertion: "expect(isEveryLong(['hi'])).toBe(false)" },
      { description: 'empty array returns true (vacuous truth)', assertion: "expect(isEveryLong([])).toBe(true)" },
      { description: 'mixed long and short returns false', assertion: "expect(isEveryLong(['long string', 'hi'])).toBe(false)" },
      { description: 'exactly 6 chars returns true (> 5)', assertion: "expect(isEveryLong(['sixchr'])).toBe(true)" },
    ],
    hints: [
      'This is intentional JavaScript behavior — `[].every()` always returns `true`.',
      'Think of it as: "there are no elements that fail the condition".',
    ],
    tags: ['Array', 'Array.prototype.every', 'vacuous-truth', 'beginner'],
    usageExample: {
      code: `const empty = []
empty.every(x => x > 0)  // → true  (vacuous truth)`,
      explanation: {
        en: 'every() returns true for empty arrays — there are no elements to violate the condition.',
        es: 'every() devuelve true para arrays vacíos, ya que no hay elementos que violen la condición.',
      },
    },
  },
  {
    slug: 'array-every-objects',
    title: 'Array.prototype.every() — check object properties',
    description: `## Array.prototype.every() — object arrays

\`every()\` works on any array, including arrays of objects. You can check that all objects satisfy a structural requirement.

**Challenge:** Implement \`allHaveName(objs)\` that returns \`true\` if every object in the array has a \`.name\` property that is a non-empty string.

\`\`\`ts
allHaveName([{name:'Alice'},{name:'Bob'}]) // → true
allHaveName([{name:'Alice'},{age:30}])     // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.every',
    initialCode: `function allHaveName(objs: object[]): boolean {
  // Use objs.every(o => 'name' in o && typeof (o as Record<string,unknown>).name === 'string')
}`,
    solution: `function allHaveName(objs: object[]): boolean {
  return objs.every(o => {
    const obj = o as Record<string, unknown>
    return typeof obj.name === 'string' && obj.name.length > 0
  })
}`,
    tests: [
      { description: 'all with name property returns true', assertion: "expect(allHaveName([{name:'Alice'},{name:'Bob'}])).toBe(true)" },
      { description: 'missing name returns false', assertion: "expect(allHaveName([{name:'Alice'},{age:30}])).toBe(false)" },
      { description: 'empty name string returns false', assertion: "expect(allHaveName([{name:''}])).toBe(false)" },
      { description: 'empty array returns true', assertion: "expect(allHaveName([])).toBe(true)" },
      { description: 'single valid object returns true', assertion: "expect(allHaveName([{name:'X'}])).toBe(true)" },
    ],
    hints: [
      'Use `\'name\' in obj` to check property existence, or just check `typeof obj.name === \'string\'`.',
      'Cast to `Record<string, unknown>` to access dynamic properties without TypeScript errors.',
    ],
    tags: ['Array', 'Array.prototype.every', 'objects', 'intermediate'],
    usageExample: {
      code: `const users = [{active: true}, {active: true}]
users.every(u => u.active)  // → true`,
      explanation: {
        en: 'Use every() to confirm that a property holds true for all objects in an array.',
        es: 'Usa every() para confirmar que una propiedad es verdadera en todos los objetos de un array.',
      },
    },
  },
  {
    slug: 'array-every-vs-some',
    title: 'Array.prototype.every() — check all even',
    description: `## Array.prototype.every() vs some()

\`every()\` requires **all** elements to pass; \`some()\` requires **at least one**. Understanding this distinction is essential for writing correct predicates.

**Challenge:** Implement \`allEven(nums)\` that returns \`true\` if every number in the array is even.

\`\`\`ts
allEven([2, 4, 6])   // → true
allEven([2, 3, 6])   // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.every',
    initialCode: `function allEven(nums: number[]): boolean {
  // Use nums.every(n => n % 2 === 0)
}`,
    solution: `function allEven(nums: number[]): boolean {
  return nums.every(n => n % 2 === 0)
}`,
    tests: [
      { description: 'returns true for all even numbers', assertion: "expect(allEven([2, 4, 6])).toBe(true)" },
      { description: 'returns false when one is odd', assertion: "expect(allEven([2, 3, 6])).toBe(false)" },
      { description: 'returns false for all odd', assertion: "expect(allEven([1, 3, 5])).toBe(false)" },
      { description: 'empty array returns true', assertion: "expect(allEven([])).toBe(true)" },
      { description: 'single even returns true', assertion: "expect(allEven([4])).toBe(true)" },
    ],
    hints: [
      '`n % 2 === 0` is true for even numbers.',
      'To check if at least one is even, you would use `some()` instead.',
    ],
    tags: ['Array', 'Array.prototype.every', 'even', 'intermediate'],
    usageExample: {
      code: `const nums = [1, 2, 3, 4]
nums.every(n => n > 0)  // → true  (all positive)
nums.some(n => n > 3)   // → true  (at least one > 3)`,
      explanation: {
        en: 'Use every() when all elements must pass, and some() when at least one must pass.',
        es: 'Usa every() cuando todos los elementos deben pasar y some() cuando al menos uno debe pasar.',
      },
    },
  },
]
