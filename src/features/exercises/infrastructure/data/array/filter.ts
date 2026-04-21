import type { Exercise } from '@/shared/types/exercises'

export const filterExercises: Exercise[] = [
  {
    slug: 'array-filter-even',
    title: 'Array.prototype.filter() — keep even numbers',
    description: `## Array.prototype.filter()

\`Array.prototype.filter(callback)\` returns a **new** array containing only the elements for which the callback returns a truthy value. The original array is not modified.

**Challenge:** Implement \`filterEven(nums)\` that returns only even numbers from the array.

\`\`\`ts
filterEven([1, 2, 3, 4, 5, 6]) // → [2, 4, 6]
filterEven([1, 3, 5])          // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.filter',
    initialCode: `function filterEven(nums: number[]): number[] {
  // Use nums.filter(n => n % 2 === 0)
}`,
    solution: `function filterEven(nums: number[]): number[] {
  return nums.filter(n => n % 2 === 0)
}`,
    tests: [
      { description: 'returns only even numbers', assertion: "expect(filterEven([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6])" },
      { description: 'returns empty when no evens', assertion: "expect(filterEven([1, 3, 5])).toEqual([])" },
      { description: 'empty array returns empty', assertion: "expect(filterEven([])).toEqual([])" },
      { description: 'all even returns all', assertion: "expect(filterEven([2, 4, 6])).toEqual([2, 4, 6])" },
      { description: 'original array not mutated', assertion: "const a = [1,2,3]; filterEven(a); expect(a).toEqual([1,2,3])" },
    ],
    hints: [
      '`n % 2 === 0` is the classic even check.',
      '`filter()` never modifies the original array — it always returns a new one.',
    ],
    tags: ['Array', 'Array.prototype.filter', 'even', 'beginner'],
    usageExample: {
      code: `const nums = [1, 2, 3, 4, 5, 6]
nums.filter(n => n % 2 === 0)  // → [2, 4, 6]`,
      explanation: {
        en: 'Use filter() with a condition to create a new array containing only matching elements.',
        es: 'Usa filter() con una condición para crear un nuevo array que contenga solo los elementos que coincidan.',
      },
    },
  },
  {
    slug: 'array-filter-long-strings',
    title: 'Array.prototype.filter() — filter by string length',
    description: `## Array.prototype.filter() — strings

\`filter()\` can be used on any array type. Filtering strings by their length is a common pattern for text processing.

**Challenge:** Implement \`filterLong(strs, minLen)\` that returns only strings with length \`>= minLen\`.

\`\`\`ts
filterLong(['hi', 'hello', 'world', 'ok'], 4) // → ['hello', 'world']
filterLong(['a', 'bb', 'ccc'], 2)             // → ['bb', 'ccc']
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.filter',
    initialCode: `function filterLong(strs: string[], minLen: number): string[] {
  // Use strs.filter(s => s.length >= minLen)
}`,
    solution: `function filterLong(strs: string[], minLen: number): string[] {
  return strs.filter(s => s.length >= minLen)
}`,
    tests: [
      { description: 'filters strings with length >= 4', assertion: "expect(filterLong(['hi', 'hello', 'world', 'ok'], 4)).toEqual(['hello', 'world'])" },
      { description: 'filters strings with length >= 2', assertion: "expect(filterLong(['a', 'bb', 'ccc'], 2)).toEqual(['bb', 'ccc'])" },
      { description: 'minLen 0 returns all', assertion: "expect(filterLong(['a', 'bb'], 0)).toEqual(['a', 'bb'])" },
      { description: 'returns empty when none qualify', assertion: "expect(filterLong(['a', 'b'], 5)).toEqual([])" },
      { description: 'empty array returns empty', assertion: "expect(filterLong([], 3)).toEqual([])" },
    ],
    hints: [
      '`s.length >= minLen` checks if the string meets the minimum length requirement.',
      '`filter` preserves the order of elements.',
    ],
    tags: ['Array', 'Array.prototype.filter', 'string', 'length', 'beginner'],
    usageExample: {
      code: `const words = ['hi', 'hello', 'hey', 'howdy']
words.filter(w => w.length > 3)  // → ['hello', 'howdy']`,
      explanation: {
        en: 'Use filter() to keep only strings that meet a length or pattern requirement.',
        es: 'Usa filter() para conservar solo las cadenas que cumplan un requisito de longitud o patrón.',
      },
    },
  },
  {
    slug: 'array-filter-objects',
    title: 'Array.prototype.filter() — filter objects by property',
    description: `## Array.prototype.filter() — objects

\`filter()\` is very commonly used with arrays of objects to keep only those satisfying some property condition.

**Challenge:** Implement \`filterActive(users)\` that returns only users where \`active\` is \`true\`.

\`\`\`ts
filterActive([{name:'A', active:true}, {name:'B', active:false}])
// → [{name:'A', active:true}]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.filter',
    initialCode: `function filterActive(users: {name: string, active: boolean}[]): {name: string, active: boolean}[] {
  // Use users.filter(u => u.active)
}`,
    solution: `function filterActive(users: {name: string, active: boolean}[]): {name: string, active: boolean}[] {
  return users.filter(u => u.active)
}`,
    tests: [
      { description: 'returns only active users', assertion: "expect(filterActive([{name:'A',active:true},{name:'B',active:false}])).toEqual([{name:'A',active:true}])" },
      { description: 'returns empty when none active', assertion: "expect(filterActive([{name:'A',active:false}])).toEqual([])" },
      { description: 'returns all when all active', assertion: "expect(filterActive([{name:'A',active:true},{name:'B',active:true}])).toHaveLength(2)" },
      { description: 'empty array returns empty', assertion: "expect(filterActive([])).toEqual([])" },
      { description: 'original array not mutated', assertion: "const u = [{name:'A',active:true}]; filterActive(u); expect(u).toHaveLength(1)" },
    ],
    hints: [
      '`u.active` is already a boolean, so `u => u.active` is sufficient.',
      '`filter` preserves the original object references — it does not deep-copy them.',
    ],
    tags: ['Array', 'Array.prototype.filter', 'objects', 'intermediate'],
    usageExample: {
      code: `const items = [{done: true}, {done: false}, {done: true}]
items.filter(i => i.done)  // → [{done:true}, {done:true}]`,
      explanation: {
        en: 'Use filter() to extract objects from an array based on a boolean property.',
        es: 'Usa filter() para extraer objetos de un array basándose en una propiedad booleana.',
      },
    },
  },
  {
    slug: 'array-filter-unique',
    title: 'Array.prototype.filter() — keep unique values',
    description: `## Array.prototype.filter() — deduplication

By using \`filter\` with \`indexOf\`, you can keep only the elements whose **first occurrence** equals the current index, effectively removing duplicates.

**Challenge:** Implement \`filterUnique(arr)\` that returns items appearing exactly once (i.e. not duplicated).

\`\`\`ts
filterUnique([1, 2, 2, 3, 3, 4]) // → [1, 4]
filterUnique([1, 2, 3])          // → [1, 2, 3]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.filter',
    initialCode: `function filterUnique(arr: number[]): number[] {
  // Keep only elements that appear exactly once
  // Hint: indexOf and lastIndexOf are equal for unique elements
}`,
    solution: `function filterUnique(arr: number[]): number[] {
  return arr.filter(val => arr.indexOf(val) === arr.lastIndexOf(val))
}`,
    tests: [
      { description: 'keeps only unique values', assertion: "expect(filterUnique([1, 2, 2, 3, 3, 4])).toEqual([1, 4])" },
      { description: 'all unique returns all', assertion: "expect(filterUnique([1, 2, 3])).toEqual([1, 2, 3])" },
      { description: 'all duplicated returns empty', assertion: "expect(filterUnique([1, 1, 2, 2])).toEqual([])" },
      { description: 'empty array returns empty', assertion: "expect(filterUnique([])).toEqual([])" },
      { description: 'single element returns it', assertion: "expect(filterUnique([5])).toEqual([5])" },
    ],
    hints: [
      'An element is unique if `arr.indexOf(val) === arr.lastIndexOf(val)`.',
      'This checks that the first and last occurrence are the same index.',
    ],
    tags: ['Array', 'Array.prototype.filter', 'unique', 'intermediate'],
    usageExample: {
      code: `const nums = [1, 2, 2, 3, 3, 4]
nums.filter((v, i, a) => a.indexOf(v) === i)
// → [1, 2, 3, 4]  (first occurrences only)`,
      explanation: {
        en: 'Use filter() with indexOf() to deduplicate an array by keeping only the first occurrence of each value.',
        es: 'Usa filter() con indexOf() para deduplicar un array conservando solo la primera ocurrencia de cada valor.',
      },
    },
  },
  {
    slug: 'array-filter-falsy',
    title: 'Array.prototype.filter() — remove falsy values',
    description: `## Array.prototype.filter() — compact

A common utility pattern is to remove all falsy values (\`false\`, \`null\`, \`undefined\`, \`0\`, \`""\`, \`NaN\`) from an array by passing \`Boolean\` as the filter callback.

**Challenge:** Implement \`compact(arr)\` that removes all falsy values from the array.

\`\`\`ts
compact([0, 1, false, 2, '', 3, null]) // → [1, 2, 3]
compact([null, undefined, NaN])        // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.filter',
    initialCode: `function compact(arr: unknown[]): unknown[] {
  // Use arr.filter(Boolean) to remove all falsy values
}`,
    solution: `function compact(arr: unknown[]): unknown[] {
  return arr.filter(Boolean)
}`,
    tests: [
      { description: 'removes falsy values', assertion: "expect(compact([0, 1, false, 2, '', 3, null])).toEqual([1, 2, 3])" },
      { description: 'removes null and undefined', assertion: "expect(compact([null, undefined, 1])).toEqual([1])" },
      { description: 'removes NaN', assertion: "expect(compact([NaN, 1, 2])).toEqual([1, 2])" },
      { description: 'empty array returns empty', assertion: "expect(compact([])).toEqual([])" },
      { description: 'all truthy returns all', assertion: "expect(compact([1, 'hi', true])).toEqual([1, 'hi', true])" },
    ],
    hints: [
      '`Boolean` as a callback is equivalent to `x => !!x` — it converts each element to boolean.',
      'Falsy values in JS: `false`, `0`, `""`, `null`, `undefined`, `NaN`.',
    ],
    tags: ['Array', 'Array.prototype.filter', 'falsy', 'compact', 'intermediate'],
    usageExample: {
      code: `const mixed = [0, 1, '', 'hello', null, true]
mixed.filter(Boolean)  // → [1, 'hello', true]`,
      explanation: {
        en: 'Pass Boolean as the callback to filter() to remove all falsy values in one step.',
        es: 'Pasa Boolean como callback a filter() para eliminar todos los valores falsy en un solo paso.',
      },
    },
  },
]
