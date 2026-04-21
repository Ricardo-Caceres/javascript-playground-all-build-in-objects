import type { Exercise } from '@/shared/types/exercises'

export const findLastExercises: Exercise[] = [
  {
    slug: 'array-find-last-basic',
    title: 'Array.prototype.findLast() — find last even number',
    description: `## Array.prototype.findLast()

\`Array.prototype.findLast(callback)\` is the reverse of \`find()\` — it iterates from the **end** of the array and returns the last element for which the callback is truthy.

**Challenge:** Implement \`findLastEven(nums)\` that returns the last even number in the array.

\`\`\`ts
findLastEven([1, 2, 3, 4, 5]) // → 4
findLastEven([1, 3, 5])       // → undefined
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.findLast',
    initialCode: `function findLastEven(nums: number[]): number | undefined {
  // Use nums.findLast(n => n % 2 === 0)
}`,
    solution: `function findLastEven(nums: number[]): number | undefined {
  return nums.findLast(n => n % 2 === 0)
}`,
    tests: [
      { description: 'returns last even from [1,2,3,4,5]', assertion: "expect(findLastEven([1, 2, 3, 4, 5])).toBe(4)" },
      { description: 'returns undefined for all odd', assertion: "expect(findLastEven([1, 3, 5])).toBeUndefined()" },
      { description: 'returns last even not first', assertion: "expect(findLastEven([2, 4, 6])).toBe(6)" },
      { description: 'empty array returns undefined', assertion: "expect(findLastEven([])).toBeUndefined()" },
      { description: 'single even returns it', assertion: "expect(findLastEven([4])).toBe(4)" },
    ],
    hints: [
      '`findLast()` scans from the end — the opposite direction from `find()`.',
      'Returns `undefined` (not `null`) when no match is found.',
    ],
    tags: ['Array', 'Array.prototype.findLast', 'beginner'],
    usageExample: {
      code: `const nums = [5, 12, 8, 130, 44]
nums.findLast(n => n > 10)  // → 44  (last match)`,
      explanation: {
        en: 'Use findLast() to get the last element that satisfies a condition, searching from the end.',
        es: 'Usa findLast() para obtener el último elemento que satisfaga una condición, buscando desde el final.',
      },
    },
  },
  {
    slug: 'array-find-last-object',
    title: 'Array.prototype.findLast() — last active user',
    description: `## Array.prototype.findLast() — objects

Like \`find()\`, \`findLast()\` works on any element type, including objects. It returns the last object in the array that satisfies the predicate.

**Challenge:** Implement \`findLastActive(users)\` that returns the last user with \`active: true\`.

\`\`\`ts
findLastActive([{name:'A',active:true},{name:'B',active:false},{name:'C',active:true}])
// → {name:'C', active:true}
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.findLast',
    initialCode: `function findLastActive(users: {name: string, active: boolean}[]): {name: string, active: boolean} | undefined {
  // Use users.findLast(u => u.active)
}`,
    solution: `function findLastActive(users: {name: string, active: boolean}[]): {name: string, active: boolean} | undefined {
  return users.findLast(u => u.active)
}`,
    tests: [
      { description: 'returns last active user', assertion: "expect(findLastActive([{name:'A',active:true},{name:'B',active:false},{name:'C',active:true}])).toEqual({name:'C',active:true})" },
      { description: 'returns undefined when none active', assertion: "expect(findLastActive([{name:'A',active:false}])).toBeUndefined()" },
      { description: 'returns only element if it is active', assertion: "expect(findLastActive([{name:'X',active:true}])).toEqual({name:'X',active:true})" },
      { description: 'empty array returns undefined', assertion: "expect(findLastActive([])).toBeUndefined()" },
      { description: 'returns last not first active', assertion: "expect(findLastActive([{name:'A',active:true},{name:'B',active:true}])).toEqual({name:'B',active:true})" },
    ],
    hints: [
      '`findLast` traverses from the end, so it naturally finds the last matching object.',
      'The predicate is identical to what you would write for `find` — just the traversal direction differs.',
    ],
    tags: ['Array', 'Array.prototype.findLast', 'objects', 'intermediate'],
    usageExample: {
      code: `const logs = [{type:'err'}, {type:'info'}, {type:'err'}]
logs.findLast(l => l.type === 'err')  // → {type:'err'} (last one)`,
      explanation: {
        en: 'Use findLast() to locate the most recent object in an array matching a property condition.',
        es: 'Usa findLast() para localizar el objeto más reciente en un array que coincida con una condición.',
      },
    },
  },
  {
    slug: 'array-find-last-undefined',
    title: 'Array.prototype.findLast() — returns undefined when not found',
    description: `## Array.prototype.findLast() — no match

Just like \`find()\`, \`findLast()\` returns \`undefined\` when no element satisfies the predicate.

**Challenge:** Implement \`findLastNegative(nums)\` that returns the last negative number, or \`undefined\` if none.

\`\`\`ts
findLastNegative([1, -2, 3, -4]) // → -4
findLastNegative([1, 2, 3])      // → undefined
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.findLast',
    initialCode: `function findLastNegative(nums: number[]): number | undefined {
  // Use nums.findLast(n => n < 0)
}`,
    solution: `function findLastNegative(nums: number[]): number | undefined {
  return nums.findLast(n => n < 0)
}`,
    tests: [
      { description: 'returns last negative number', assertion: "expect(findLastNegative([1, -2, 3, -4])).toBe(-4)" },
      { description: 'returns undefined for all positive', assertion: "expect(findLastNegative([1, 2, 3])).toBeUndefined()" },
      { description: 'empty array returns undefined', assertion: "expect(findLastNegative([])).toBeUndefined()" },
      { description: 'returns last not first negative', assertion: "expect(findLastNegative([-1, -2, -3])).toBe(-3)" },
      { description: 'zero does not qualify', assertion: "expect(findLastNegative([0])).toBeUndefined()" },
    ],
    hints: [
      '`n < 0` excludes zero — use `n <= 0` to include it.',
      'When no element matches, `findLast()` returns `undefined`, just like `find()`.',
    ],
    tags: ['Array', 'Array.prototype.findLast', 'undefined', 'beginner'],
    usageExample: {
      code: `const arr = [1, 2, 3]
arr.findLast(n => n > 10)  // → undefined  (no match)`,
      explanation: {
        en: 'findLast() returns undefined when no element satisfies the predicate.',
        es: 'findLast() devuelve undefined cuando ningún elemento satisface el predicado.',
      },
    },
  },
  {
    slug: 'array-find-last-string',
    title: 'Array.prototype.findLast() — last short string',
    description: `## Array.prototype.findLast() — with strings

\`findLast()\` can be used to search for strings matching a length or content condition, scanning from the end.

**Challenge:** Implement \`findLastShort(strs, maxLen)\` that returns the last string with length \`< maxLen\`.

\`\`\`ts
findLastShort(['hello', 'hi', 'world', 'ok'], 5) // → 'ok'
findLastShort(['long string', 'another'], 3)     // → undefined
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.findLast',
    initialCode: `function findLastShort(strs: string[], maxLen: number): string | undefined {
  // Use strs.findLast(s => s.length < maxLen)
}`,
    solution: `function findLastShort(strs: string[], maxLen: number): string | undefined {
  return strs.findLast(s => s.length < maxLen)
}`,
    tests: [
      { description: 'returns last string shorter than maxLen', assertion: "expect(findLastShort(['hello', 'hi', 'world', 'ok'], 5)).toBe('ok')" },
      { description: 'returns undefined when none short enough', assertion: "expect(findLastShort(['long string', 'another'], 3)).toBeUndefined()" },
      { description: 'returns last qualifying string', assertion: "expect(findLastShort(['a', 'bb', 'c'], 3)).toBe('c')" },
      { description: 'empty array returns undefined', assertion: "expect(findLastShort([], 5)).toBeUndefined()" },
      { description: 'exact maxLen does not qualify', assertion: "expect(findLastShort(['hi'], 2)).toBeUndefined()" },
    ],
    hints: [
      '`s.length < maxLen` is strictly less than.',
      '`findLast` scans from the end, so it returns the last qualifying string in order.',
    ],
    tags: ['Array', 'Array.prototype.findLast', 'string', 'intermediate'],
    usageExample: {
      code: `const words = ['cat', 'elephant', 'ant']
words.findLast(w => w.length > 3)  // → 'elephant'`,
      explanation: {
        en: 'Use findLast() to find the last string in an array that meets a specific condition.',
        es: 'Usa findLast() para encontrar la última cadena en un array que cumpla una condición específica.',
      },
    },
  },
  {
    slug: 'array-find-last-vs-find',
    title: 'Array.prototype.findLast() — first vs last match',
    description: `## Array.prototype.findLast() — comparing with find()

The difference between \`find()\` and \`findLast()\` becomes clear when the predicate matches multiple elements. \`find()\` returns the first; \`findLast()\` returns the last.

**Challenge:** Implement \`firstVsLast(nums, pred)\` that returns a tuple \`[find result, findLast result]\`.

\`\`\`ts
firstVsLast([1, 2, 3, 4, 5], n => n % 2 === 0) // → [2, 4]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.findLast',
    initialCode: `function firstVsLast(nums: number[], pred: (n: number) => boolean): [number | undefined, number | undefined] {
  // Return [nums.find(pred), nums.findLast(pred)]
}`,
    solution: `function firstVsLast(nums: number[], pred: (n: number) => boolean): [number | undefined, number | undefined] {
  return [nums.find(pred), nums.findLast(pred)]
}`,
    tests: [
      { description: 'returns [first even, last even]', assertion: "expect(firstVsLast([1,2,3,4,5], n => n%2===0)).toEqual([2, 4])" },
      { description: 'both undefined when no match', assertion: "expect(firstVsLast([1,3,5], n => n%2===0)).toEqual([undefined, undefined])" },
      { description: 'same value when only one match', assertion: "expect(firstVsLast([1,2,3], n => n===2)).toEqual([2, 2])" },
      { description: 'empty array gives [undefined, undefined]', assertion: "expect(firstVsLast([], n => n>0)).toEqual([undefined, undefined])" },
      { description: 'returns first and last of all matching', assertion: "expect(firstVsLast([2,4,6,8], n => n>3)).toEqual([4, 8])" },
    ],
    hints: [
      '`find()` returns the first match scanning left to right.',
      '`findLast()` returns the last match scanning right to left.',
    ],
    tags: ['Array', 'Array.prototype.findLast', 'find', 'compare', 'intermediate'],
    usageExample: {
      code: `const nums = [1, 3, 5, 2, 4]
nums.find(n => n % 2 === 0)      // → 2  (first even)
nums.findLast(n => n % 2 === 0)  // → 4  (last even)`,
      explanation: {
        en: 'Use findLast() instead of find() when you need the last matching element rather than the first.',
        es: 'Usa findLast() en lugar de find() cuando necesites el último elemento que coincida, no el primero.',
      },
    },
  },
]
