import type { Exercise } from '@/shared/types/exercises'

export const sortExercises: Exercise[] = [
  {
    slug: 'array-sort-strings',
    title: 'Array.prototype.sort() — alphabetical order',
    description: `## Array.prototype.sort()

\`Array.prototype.sort(compareFn?)\` sorts elements **in place** and returns the sorted array. Without a comparator, elements are converted to strings and sorted lexicographically.

> ⚠️ \`sort()\` mutates the original array. Use \`slice().sort()\` to sort a copy.

**Challenge:** Implement \`sortAlpha(words)\` that returns a sorted copy without mutating the original.

\`\`\`ts
sortAlpha(['banana', 'apple', 'cherry']) // → ['apple', 'banana', 'cherry']
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.sort',
    initialCode: `function sortAlpha(words: string[]): string[] {
  // Use words.slice().sort() to avoid mutating the input
}`,
    solution: `function sortAlpha(words: string[]): string[] {
  return words.slice().sort()
}`,
    tests: [
      { description: 'sorts alphabetically', assertion: "expect(sortAlpha(['banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry'])" },
      { description: 'empty array returns empty', assertion: "expect(sortAlpha([])).toEqual([])" },
      { description: 'single element unchanged', assertion: "expect(sortAlpha(['only'])).toEqual(['only'])" },
      { description: 'does not mutate original', assertion: "const w = ['b', 'a']; sortAlpha(w); expect(w[0]).toBe('b')" },
      { description: 'two elements sorted', assertion: "expect(sortAlpha(['z', 'a'])).toEqual(['a', 'z'])" },
    ],
    hints: [
      '`slice()` creates a copy so the original array is not mutated.',
      'Default sort is lexicographic — useful for strings but wrong for numbers (e.g. `[10, 9]` would sort as `[10, 9]` not `[9, 10]`).',
    ],
    tags: ['Array', 'Array.prototype.sort', 'string', 'beginner'],
    usageExample: {
      code: `const words = ['banana', 'apple', 'cherry']
words.sort()  // → ['apple', 'banana', 'cherry']`,
      explanation: {
        en: 'Call sort() without arguments to sort strings in ascending Unicode (alphabetical) order.',
        es: 'Llama a sort() sin argumentos para ordenar cadenas en orden Unicode ascendente (alfabético).',
      },
    },
  },
  {
    slug: 'array-sort-numbers',
    title: 'Array.prototype.sort() — numeric ascending',
    description: `## Array.prototype.sort() — numeric comparator

Without a comparator, \`sort()\` converts numbers to strings which causes incorrect ordering (e.g. \`10\` comes before \`9\`). Pass \`(a, b) => a - b\` to sort numerically ascending.

**Challenge:** Implement \`sortAsc(nums)\` that sorts a copy of the array in ascending numeric order.

\`\`\`ts
sortAsc([3, 1, 4, 1, 5]) // → [1, 1, 3, 4, 5]
sortAsc([10, 9, 2])      // → [2, 9, 10]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.sort',
    initialCode: `function sortAsc(nums: number[]): number[] {
  // Use .sort((a, b) => a - b) on a copy
}`,
    solution: `function sortAsc(nums: number[]): number[] {
  return nums.slice().sort((a, b) => a - b)
}`,
    tests: [
      { description: 'sorts numerically ascending', assertion: 'expect(sortAsc([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5])' },
      { description: 'handles larger numbers correctly', assertion: 'expect(sortAsc([10, 9, 2])).toEqual([2, 9, 10])' },
      { description: 'empty array returns empty', assertion: 'expect(sortAsc([])).toEqual([])' },
      { description: 'does not mutate original', assertion: 'const a = [3, 1, 2]; sortAsc(a); expect(a[0]).toBe(3)' },
      { description: 'negative numbers sorted correctly', assertion: 'expect(sortAsc([-3, 0, -1, 2])).toEqual([-3, -1, 0, 2])' },
    ],
    hints: [
      'The comparator `(a, b) => a - b` returns negative when `a < b`, 0 when equal, positive when `a > b`.',
      'Always copy first with `.slice()` unless you intentionally want to mutate the original.',
    ],
    tags: ['Array', 'Array.prototype.sort', 'numeric', 'comparator', 'beginner'],
    usageExample: {
      code: `const nums = [10, 1, 5, 3]
nums.sort((a, b) => a - b)  // → [1, 3, 5, 10]`,
      explanation: {
        en: 'Always pass a numeric comparator (a - b) to sort() when sorting numbers.',
        es: 'Siempre pasa un comparador numérico (a - b) a sort() al ordenar números.',
      },
    },
  },
  {
    slug: 'array-sort-desc',
    title: 'Array.prototype.sort() — numeric descending',
    description: `## Array.prototype.sort() — descending order

To sort numbers in **descending** order, reverse the comparator: \`(a, b) => b - a\`.

**Challenge:** Implement \`sortDesc(nums)\` that sorts a copy of the array in descending numeric order.

\`\`\`ts
sortDesc([3, 1, 4, 1, 5]) // → [5, 4, 3, 1, 1]
sortDesc([10, 9, 2])      // → [10, 9, 2]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.sort',
    initialCode: `function sortDesc(nums: number[]): number[] {
  // Use .sort((a, b) => b - a) on a copy
}`,
    solution: `function sortDesc(nums: number[]): number[] {
  return nums.slice().sort((a, b) => b - a)
}`,
    tests: [
      { description: 'sorts numerically descending', assertion: 'expect(sortDesc([3, 1, 4, 1, 5])).toEqual([5, 4, 3, 1, 1])' },
      { description: 'already descending stays same', assertion: 'expect(sortDesc([10, 9, 2])).toEqual([10, 9, 2])' },
      { description: 'empty array returns empty', assertion: 'expect(sortDesc([])).toEqual([])' },
      { description: 'first element is largest', assertion: 'expect(sortDesc([1, 5, 3])[0]).toBe(5)' },
      { description: 'does not mutate original', assertion: 'const a = [1, 3, 2]; sortDesc(a); expect(a[0]).toBe(1)' },
    ],
    hints: [
      'Swapping `a` and `b` in the subtraction flips the sort order.',
      'You can also sort ascending then call `.reverse()`, but `(a, b) => b - a` is cleaner.',
    ],
    tags: ['Array', 'Array.prototype.sort', 'numeric', 'descending', 'intermediate'],
    usageExample: {
      code: `const nums = [3, 1, 4, 1, 5]
nums.sort((a, b) => b - a)  // → [5, 4, 3, 1, 1]`,
      explanation: {
        en: 'Swap the arguments in the comparator (b - a) to sort numbers in descending order.',
        es: 'Intercambia los argumentos en el comparador (b - a) para ordenar números en orden descendente.',
      },
    },
  },
  {
    slug: 'array-sort-objects',
    title: 'Array.prototype.sort() — sort objects by property',
    description: `## Array.prototype.sort() — objects

You can sort an array of objects by accessing a property inside the comparator. This is one of the most common real-world uses of \`sort()\`.

**Challenge:** Implement \`sortByAge(people)\` that returns a copy of the array sorted by \`age\` ascending.

\`\`\`ts
sortByAge([{name:'Bob',age:30},{name:'Alice',age:25}])
// → [{name:'Alice',age:25},{name:'Bob',age:30}]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.sort',
    initialCode: `function sortByAge(people: { name: string; age: number }[]): { name: string; age: number }[] {
  // Use slice().sort((a, b) => a.age - b.age)
}`,
    solution: `function sortByAge(people: { name: string; age: number }[]): { name: string; age: number }[] {
  return people.slice().sort((a, b) => a.age - b.age)
}`,
    tests: [
      { description: 'youngest is first', assertion: "expect(sortByAge([{name:'Bob',age:30},{name:'Alice',age:25}])[0].name).toBe('Alice')" },
      { description: 'oldest is last', assertion: "expect(sortByAge([{name:'Bob',age:30},{name:'Alice',age:25}])[1].name).toBe('Bob')" },
      { description: 'empty array returns empty', assertion: 'expect(sortByAge([])).toEqual([])' },
      { description: 'single element unchanged', assertion: "expect(sortByAge([{name:'A',age:1}])[0].name).toBe('A')" },
      { description: 'does not mutate original', assertion: "const p=[{name:'B',age:30},{name:'A',age:25}]; sortByAge(p); expect(p[0].name).toBe('B')" },
    ],
    hints: [
      'Access the property inside the comparator: `(a, b) => a.age - b.age`.',
      'Use `.slice()` first to avoid mutating the input array.',
    ],
    tags: ['Array', 'Array.prototype.sort', 'objects', 'intermediate'],
    usageExample: {
      code: `const users = [{name:'Bob'},{name:'Alice'},{name:'Carol'}]
users.sort((a, b) => a.name.localeCompare(b.name))
// → [{name:'Alice'}, {name:'Bob'}, {name:'Carol'}]`,
      explanation: {
        en: 'Use sort() with a comparator that accesses a property to sort an array of objects.',
        es: 'Usa sort() con un comparador que accede a una propiedad para ordenar un array de objetos.',
      },
    },
  },
  {
    slug: 'array-sort-stable',
    title: 'Array.prototype.sort() — stable sort by last name',
    description: `## Array.prototype.sort() — multi-key stable sort

Modern JavaScript engines guarantee a **stable** sort. When two elements are equal on the primary key, their relative order is preserved. You can make this explicit with a secondary comparator.

**Challenge:** Implement \`sortByLastName(people)\` that sorts by \`last\` name ascending, using \`first\` name as a tiebreaker.

\`\`\`ts
sortByLastName([
  {first:'Bob',  last:'Smith'},
  {first:'Alice',last:'Jones'},
  {first:'Anna', last:'Jones'},
])
// → [{first:'Alice',last:'Jones'},{first:'Anna',last:'Jones'},{first:'Bob',last:'Smith'}]
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.prototype.sort',
    initialCode: `function sortByLastName(people: { first: string; last: string }[]): { first: string; last: string }[] {
  // Sort by last name; use first name as tiebreaker
  // Use localeCompare for string comparison
}`,
    solution: `function sortByLastName(people: { first: string; last: string }[]): { first: string; last: string }[] {
  return people.slice().sort((a, b) => {
    const lastCmp = a.last.localeCompare(b.last)
    return lastCmp !== 0 ? lastCmp : a.first.localeCompare(b.first)
  })
}`,
    tests: [
      { description: 'sorts by last name', assertion: "expect(sortByLastName([{first:'Bob',last:'Smith'},{first:'Alice',last:'Jones'}])[0].last).toBe('Jones')" },
      { description: 'tiebreaker uses first name', assertion: "expect(sortByLastName([{first:'Bob',last:'Jones'},{first:'Alice',last:'Jones'}])[0].first).toBe('Alice')" },
      { description: 'empty array returns empty', assertion: 'expect(sortByLastName([])).toEqual([])' },
      { description: 'single element unchanged', assertion: "expect(sortByLastName([{first:'A',last:'B'}])[0].first).toBe('A')" },
      { description: 'does not mutate original', assertion: "const p=[{first:'Z',last:'Z'},{first:'A',last:'A'}]; sortByLastName(p); expect(p[0].first).toBe('Z')" },
    ],
    hints: [
      '`localeCompare` returns a negative, zero, or positive number — exactly what `sort` expects.',
      'Only fall through to the secondary comparator when `lastCmp === 0`.',
    ],
    tags: ['Array', 'Array.prototype.sort', 'localeCompare', 'stable', 'advanced'],
    usageExample: {
      code: `const items = [{rank:1,name:'A'},{rank:2,name:'B'},{rank:1,name:'C'}]
items.sort((a, b) => a.rank - b.rank)
// A and C remain in original order (stable sort)`,
      explanation: {
        en: 'Modern JS engines guarantee a stable sort — elements with equal keys preserve their original order.',
        es: 'Los motores JS modernos garantizan un ordenamiento estable; los elementos con claves iguales conservan su orden original.',
      },
    },
  },
]
