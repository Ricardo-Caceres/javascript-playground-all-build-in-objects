import type { Exercise } from '@/shared/types/exercises'

export const algoSearchingExercises: Exercise[] = [
  {
    slug: 'algo-search-1',
    title: 'Linear Search',
    description: `## Linear Search

Linear search (also called sequential search) is the simplest search algorithm. It iterates through the array from the first element until it finds the target value or reaches the end.

Time Complexity: O(n)
Space Complexity: O(1)

\`\`\`ts
function linearSearch(arr: number[], target: number): number {
  // Find the index of target in arr
  // Return -1 if not found
}

linearSearch([10, 20, 30, 40, 50], 30) // 2
linearSearch([10, 20, 30], 99) // -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Algorithms',
    initialCode: `function linearSearch(arr: number[], target: number): number {
  // Iterate through the array and return the index when found
  // Return -1 if not found
}`,
    solution: `function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }
  return -1
}`,
    tests: [
      { description: 'finds element in middle of array', assertion: `expect(linearSearch([10, 20, 30, 40, 50], 30)).toBe(2)` },
      { description: 'finds element at start', assertion: `expect(linearSearch([10, 20, 30], 10)).toBe(0)` },
      { description: 'finds element at end', assertion: `expect(linearSearch([10, 20, 30], 30)).toBe(2)` },
      { description: 'returns -1 when element not found', assertion: `expect(linearSearch([10, 20, 30], 99)).toBe(-1)` },
      { description: 'handles empty array', assertion: `expect(linearSearch([], 5)).toBe(-1)` },
    ],
    hints: [
      'Loop through each element starting at index 0.',
      'Compare each element with the target.',
      'Return the index immediately when found.',
      'Return -1 if the loop completes without finding it.',
    ],
    tags: ['searching', 'linear-search', 'sequential-search', 'loop'],
  },
  {
    slug: 'algo-search-2',
    title: 'Check Element Exists',
    description: `## Check Element Exists

This exercise focuses on checking if an element exists in an array without needing its index. This is useful when you only care about presence, not location.

\`\`\`ts
function elementExists(arr: number[], target: number): boolean {
  // Return true if target exists in arr, false otherwise
}

elementExists([10, 20, 30], 20) // true
elementExists([10, 20, 30], 99) // false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Algorithms',
    initialCode: `function elementExists(arr: number[], target: number): boolean {
  // Return true if the target element exists in the array
  // You may use built-in array methods or loops
}`,
    solution: `function elementExists(arr: number[], target: number): boolean {
  return arr.includes(target)
}`,
    tests: [
      { description: 'returns true when element exists', assertion: `expect(elementExists([10, 20, 30, 40], 30)).toBe(true)` },
      { description: 'returns false when element does not exist', assertion: `expect(elementExists([10, 20, 30], 99)).toBe(false)` },
      { description: 'handles empty array', assertion: `expect(elementExists([], 5)).toBe(false)` },
      { description: 'finds element at start', assertion: `expect(elementExists([1, 2, 3], 1)).toBe(true)` },
      { description: 'finds element with zero value', assertion: `expect(elementExists([0, 1, 2], 0)).toBe(true)` },
    ],
    hints: [
      'You can use the `includes()` method for simplicity.',
      'Alternatively, use a loop with a boolean flag.',
      'Compare each element with the target.',
    ],
    tags: ['searching', 'element-existence', 'includes', 'boolean'],
  },
  {
    slug: 'algo-search-3',
    title: 'Binary Search',
    description: `## Binary Search

Binary Search is an efficient algorithm for finding a target in a **sorted array**. It works by repeatedly dividing the search space in half.

Time Complexity: O(log n)
Space Complexity: O(1)

\`\`\`ts
function binarySearch(arr: number[], target: number): number {
  // Find the index of target in a sorted array
  // Return -1 if not found
}

binarySearch([10, 20, 30, 40, 50], 30) // 2
binarySearch([10, 20, 30], 99) // -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Algorithms',
    initialCode: `function binarySearch(arr: number[], target: number): number {
  // Implement binary search on a sorted array
  // Use left and right pointers
}`,
    solution: `function binarySearch(arr: number[], target: number): number {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) return mid
    if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}`,
    tests: [
      { description: 'finds element in sorted array', assertion: `expect(binarySearch([10, 20, 30, 40, 50], 30)).toBe(2)` },
      { description: 'finds element at start', assertion: `expect(binarySearch([10, 20, 30, 40], 10)).toBe(0)` },
      { description: 'finds element at end', assertion: `expect(binarySearch([10, 20, 30, 40], 40)).toBe(3)` },
      { description: 'returns -1 when element not found', assertion: `expect(binarySearch([10, 20, 30, 40], 25)).toBe(-1)` },
      { description: 'handles single element array', assertion: `expect(binarySearch([42], 42)).toBe(0)` },
    ],
    hints: [
      'Maintain left and right pointers.',
      'Calculate mid as Math.floor((left + right) / 2).',
      'Adjust left and right based on comparison with mid.',
      'Continue until left > right.',
    ],
    tags: ['searching', 'binary-search', 'divide-and-conquer', 'sorted-array'],
  },
  {
    slug: 'algo-search-4',
    title: 'Find by Predicate',
    description: `## Find by Predicate

This exercise focuses on finding an element that matches a condition (predicate). The \`Array.prototype.find()\` method returns the first element that satisfies the condition.

\`\`\`ts
function findEven(arr: number[]): number | undefined {
  // Return the first even number in the array
}

findEven([1, 3, 4, 5]) // 4
findEven([1, 3, 5]) // undefined
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Algorithms',
    initialCode: `function findEven(arr: number[]): number | undefined {
  // Return the first even number in the array
  // Return undefined if no even number exists
}`,
    solution: `function findEven(arr: number[]): number | undefined {
  return arr.find(n => n % 2 === 0)
}`,
    tests: [
      { description: 'finds first even number', assertion: `expect(findEven([1, 3, 4, 5, 6])).toBe(4)` },
      { description: 'returns first occurrence', assertion: `expect(findEven([1, 2, 3, 2])).toBe(2)` },
      { description: 'returns undefined when no even number exists', assertion: `expect(findEven([1, 3, 5])).toBeUndefined()` },
      { description: 'handles array starting with even', assertion: `expect(findEven([2, 3, 5])).toBe(2)` },
      { description: 'handles empty array', assertion: `expect(findEven([])).toBeUndefined()` },
    ],
    hints: [
      'Use the `find()` method with a predicate function.',
      'The predicate should return true for elements matching the condition.',
      'For even numbers, check if `n % 2 === 0`.',
      '`find()` returns undefined if no element matches.',
    ],
    tags: ['searching', 'find', 'predicate', 'higher-order-function'],
  },
  {
    slug: 'algo-search-5',
    title: 'Binary Search Returns Correct Index or -1',
    description: `## Binary Search Edge Cases

This advanced exercise tests edge cases of binary search: ensuring it returns the exact index of the target, or -1 if not found. Pay attention to the correctness of the mid calculation and pointer adjustments.

Time Complexity: O(log n)
Space Complexity: O(1)

\`\`\`ts
function binarySearchStrict(arr: number[], target: number): number {
  // Binary search that correctly handles all edge cases
  // Must return exact index or -1
}

binarySearchStrict([1, 3, 5, 7, 9], 5) // 2
binarySearchStrict([1, 3, 5, 7, 9], 6) // -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Algorithms',
    initialCode: `function binarySearchStrict(arr: number[], target: number): number {
  // Implement binary search with correct pointer management
  // Handle all edge cases properly
}`,
    solution: `function binarySearchStrict(arr: number[], target: number): number {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) return mid
    else if (arr[mid] < target) left = mid + 1
    else right = mid - 1
  }
  return -1
}`,
    tests: [
      { description: 'finds element in middle', assertion: `expect(binarySearchStrict([1, 3, 5, 7, 9], 5)).toBe(2)` },
      { description: 'finds first element', assertion: `expect(binarySearchStrict([1, 3, 5, 7, 9], 1)).toBe(0)` },
      { description: 'finds last element', assertion: `expect(binarySearchStrict([1, 3, 5, 7, 9], 9)).toBe(4)` },
      { description: 'returns -1 for element not in array', assertion: `expect(binarySearchStrict([1, 3, 5, 7, 9], 6)).toBe(-1)` },
      { description: 'handles large sorted array', assertion: `const large = Array.from({length: 1000}, (_, i) => i * 2); expect(binarySearchStrict(large, 500)).toBe(250)` },
    ],
    hints: [
      'Use bitwise right shift for mid calculation: `(left + right) >> 1` is equivalent to `Math.floor((left + right) / 2)`.',
      'Ensure left and right pointers correctly narrow the search space.',
      'The loop condition is `left <= right`.',
      'After finding the target, return immediately.',
    ],
    tags: ['searching', 'binary-search', 'edge-cases', 'pointer-arithmetic'],
  },
]
