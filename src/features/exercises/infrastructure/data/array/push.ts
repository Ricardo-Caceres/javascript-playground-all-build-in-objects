import type { Exercise } from '@/shared/types/exercises'

export const pushExercises: Exercise[] = [
  {
    slug: 'array-push-basic',
    title: 'Array.prototype.push() — add to end',
    description: `## Array.prototype.push()\n\n\`push()\` appends one or more elements to the end of an array and returns the **new length** of the array.\n\n\`\`\`ts\nconst arr = [1, 2]\nconst newLen = arr.push(3) // newLen === 3, arr === [1, 2, 3]\n\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.push',
    initialCode: `function addToEnd(arr: number[], val: number): number {\n  // Push val onto arr and return the new length\n}`,
    solution: `function addToEnd(arr: number[], val: number): number {\n  return arr.push(val)\n}`,
    tests: [
      { description: 'returns new length after push', assertion: `expect(addToEnd([1, 2, 3], 4)).toBe(4)` },
      { description: 'works on an empty array', assertion: `expect(addToEnd([], 7)).toBe(1)` },
      { description: 'returns correct length for two-element array', assertion: `expect(addToEnd([10, 20], 30)).toBe(3)` },
      { description: 'mutates the original array', assertion: `const a = [1]; addToEnd(a, 2); expect(a).toEqual([1, 2])` },
      { description: 'pushes zero correctly', assertion: `expect(addToEnd([5], 0)).toBe(2)` },
    ],
    hints: [
      '`push` returns the new length of the array, not the pushed element.',
      'You can directly return the result of `arr.push(val)`.',
    ],
    tags: ['array', 'push', 'mutation', 'length'],
    usageExample: {
      code: `const arr = [1, 2]
arr.push(3)  // returns 3 (new length)
arr  // → [1, 2, 3]`,
      explanation: {
        en: 'Use push() to add one element to the end of an array and get the new length.',
        es: 'Usa push() para agregar un elemento al final de un array y obtener la nueva longitud.',
      },
    },
  },
  {
    slug: 'array-push-multiple',
    title: 'Array.prototype.push() — push multiple values',
    description: `## Array.prototype.push() — multiple arguments\n\n\`push()\` accepts multiple arguments and appends all of them in order.\n\n\`\`\`ts\nconst arr = [1]\narr.push(2, 3, 4) // returns 4, arr === [1, 2, 3, 4]\n\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.push',
    initialCode: `function pushAll(arr: number[], ...vals: number[]): number {\n  // Push all vals onto arr and return the new length\n}`,
    solution: `function pushAll(arr: number[], ...vals: number[]): number {\n  return arr.push(...vals)\n}`,
    tests: [
      { description: 'pushes multiple values at once', assertion: `expect(pushAll([1], 2, 3)).toBe(3)` },
      { description: 'returns current length when no extra args given', assertion: `expect(pushAll([1, 2])).toBe(2)` },
      { description: 'pushes into an empty array', assertion: `expect(pushAll([], 1, 2, 3)).toBe(3)` },
      { description: 'mutates the array with all values in order', assertion: `const a = [0]; pushAll(a, 1, 2); expect(a).toEqual([0, 1, 2])` },
      { description: 'returns the correct new length for five elements', assertion: `expect(pushAll([1, 2, 3], 4, 5)).toBe(5)` },
    ],
    hints: [
      'Use the spread operator to forward all rest params: `arr.push(...vals)`.',
      'Rest parameters (`...vals`) collect all extra arguments into an array.',
    ],
    tags: ['array', 'push', 'spread', 'rest-parameters'],
    usageExample: {
      code: `const arr = [1]
arr.push(2, 3, 4)  // returns 4
arr  // → [1, 2, 3, 4]`,
      explanation: {
        en: 'Pass multiple arguments to push() to append several elements in one call.',
        es: 'Pasa múltiples argumentos a push() para agregar varios elementos en una sola llamada.',
      },
    },
  },
  {
    slug: 'array-push-returns-length',
    title: 'Array.prototype.push() — return value is the new length',
    description: `## push() returns the new length\n\nUnlike many array methods, \`push()\` returns the **new length** of the array — not the element added, not the array itself.\n\n\`\`\`ts\nconst len = [1, 2].push(3) // len === 3\n\`\`\`\n\nThis is a common source of bugs when developers expect it to return the pushed element.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.push',
    initialCode: `function pushReturns(arr: number[], val: number): number {\n  // Return the value that push() itself returns\n}`,
    solution: `function pushReturns(arr: number[], val: number): number {\n  return arr.push(val)\n}`,
    tests: [
      { description: 'returns a number', assertion: `expect(typeof pushReturns([1], 2)).toBe('number')` },
      { description: 'returns 1 when pushing to an empty array', assertion: `expect(pushReturns([], 5)).toBe(1)` },
      { description: 'returns 4 after pushing to a 3-element array', assertion: `expect(pushReturns([1, 2, 3], 4)).toBe(4)` },
      { description: 'return value equals the new array length', assertion: `const a = [1, 2]; const len = pushReturns(a, 3); expect(len).toBe(a.length)` },
      { description: 'return value is not the pushed element itself', assertion: `expect(pushReturns([1, 2], 99)).toBe(3)` },
    ],
    hints: [
      '`push()` does NOT return the pushed element — it returns the new array length.',
      'After pushing one element to a 2-element array, the new length is 3.',
    ],
    tags: ['array', 'push', 'return-value', 'length'],
    usageExample: {
      code: `const arr = ['a', 'b']
const newLength = arr.push('c')  // → 3
arr  // → ['a', 'b', 'c']`,
      explanation: {
        en: 'push() returns the new length of the array, which you can use without a separate length check.',
        es: 'push() devuelve la nueva longitud del array, que puedes usar sin una comprobación de longitud separada.',
      },
    },
  },
  {
    slug: 'array-push-build-array',
    title: 'Array.prototype.push() — build an array with a loop',
    description: `## Building arrays with push\n\nA classic pattern: start with an empty array and \`push\` values in a loop.\n\n\`\`\`ts\nconst result: number[] = []\nfor (let i = 1; i <= 3; i++) result.push(i)\n// result === [1, 2, 3]\n\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.push',
    initialCode: `function buildArray(n: number): number[] {\n  // Return [1, 2, ..., n] by pushing values in a loop\n}`,
    solution: `function buildArray(n: number): number[] {\n  const result: number[] = []\n  for (let i = 1; i <= n; i++) {\n    result.push(i)\n  }\n  return result\n}`,
    tests: [
      { description: 'builds [1, 2, 3] for n=3', assertion: `expect(buildArray(3)).toEqual([1, 2, 3])` },
      { description: 'builds [1] for n=1', assertion: `expect(buildArray(1)).toEqual([1])` },
      { description: 'returns empty array for n=0', assertion: `expect(buildArray(0)).toEqual([])` },
      { description: 'returns array of length n', assertion: `expect(buildArray(5)).toHaveLength(5)` },
      { description: 'last element equals n', assertion: `const arr = buildArray(7); expect(arr[arr.length - 1]).toBe(7)` },
    ],
    hints: [
      'Start with `const result: number[] = []`.',
      'Loop from `1` to `n` inclusive with `i <= n`.',
      'Call `result.push(i)` on each iteration.',
    ],
    tags: ['array', 'push', 'loop', 'build'],
    usageExample: {
      code: `const result = []
for (let i = 1; i <= 3; i++) result.push(i)
result  // → [1, 2, 3]`,
      explanation: {
        en: 'Use push() inside a loop to progressively build an array one element at a time.',
        es: 'Usa push() dentro de un bucle para construir progresivamente un array elemento a elemento.',
      },
    },
  },
  {
    slug: 'array-push-collect',
    title: 'Array.prototype.push() — collect evens with forEach',
    description: `## Collecting values with push\n\nA common pattern: use \`forEach\` to iterate and \`push\` to collect matching elements into a new array.\n\n\`\`\`ts\nconst evens: number[] = []\n[1, 2, 3, 4].forEach(n => { if (n % 2 === 0) evens.push(n) })\n// evens === [2, 4]\n\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.push',
    initialCode: `function collectEvens(nums: number[]): number[] {\n  // Use forEach + push to collect even numbers\n}`,
    solution: `function collectEvens(nums: number[]): number[] {\n  const result: number[] = []\n  nums.forEach(n => {\n    if (n % 2 === 0) result.push(n)\n  })\n  return result\n}`,
    tests: [
      { description: 'collects only even numbers', assertion: `expect(collectEvens([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6])` },
      { description: 'returns empty array when no evens present', assertion: `expect(collectEvens([1, 3, 5])).toEqual([])` },
      { description: 'works when all numbers are even', assertion: `expect(collectEvens([2, 4, 6])).toEqual([2, 4, 6])` },
      { description: 'treats zero as even', assertion: `expect(collectEvens([0, 1, 2])).toEqual([0, 2])` },
      { description: 'returns empty array for empty input', assertion: `expect(collectEvens([])).toEqual([])` },
    ],
    hints: [
      'Use `n % 2 === 0` to check for even numbers.',
      'Declare `const result: number[] = []` before the loop.',
      'Call `result.push(n)` inside the `if` block.',
    ],
    tags: ['array', 'push', 'forEach', 'filter-pattern', 'even'],
    usageExample: {
      code: `const evens = []
[1,2,3,4,5].forEach(n => { if (n%2===0) evens.push(n) })
evens  // → [2, 4]`,
      explanation: {
        en: 'Use push() to collect matching elements into a result array during iteration.',
        es: 'Usa push() para recopilar elementos coincidentes en un array de resultados durante la iteración.',
      },
    },
  },
]
