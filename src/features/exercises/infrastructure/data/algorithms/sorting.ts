import type { Exercise } from '@/shared/types/exercises'

export const algoSortingExercises: Exercise[] = [
  {
    slug: 'algo-sort-1',
    title: 'Bubble Sort',
    description: `## Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they're in the wrong order. The pass through the list is repeated until the list is sorted.

Time Complexity: O(n²)
Space Complexity: O(1)

\`\`\`ts
function bubbleSort(arr: number[]): number[] {
  // Implement bubble sort
  // Return the sorted array
}

bubbleSort([64, 34, 25, 12, 22]) // [12, 22, 25, 34, 64]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Algorithms',
    initialCode: `function bubbleSort(arr: number[]): number[] {
  // Implement bubble sort
  // Repeatedly compare adjacent elements and swap if needed
}`,
    solution: `function bubbleSort(arr: number[]): number[] {
  const result = [...arr]
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]]
      }
    }
  }
  return result
}`,
    tests: [
      { description: 'sorts an unsorted array', assertion: `expect(bubbleSort([64, 34, 25, 12, 22])).toEqual([12, 22, 25, 34, 64])` },
      { description: 'handles already sorted array', assertion: `expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])` },
      { description: 'handles reverse sorted array', assertion: `expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])` },
      { description: 'handles single element', assertion: `expect(bubbleSort([42])).toEqual([42])` },
      { description: 'handles empty array', assertion: `expect(bubbleSort([])).toEqual([])` },
    ],
    hints: [
      'Use a spread operator `[...arr]` to avoid mutating the original array.',
      'Use nested loops: outer loop for passes, inner loop for comparisons.',
      'Swap adjacent elements if they are in wrong order using destructuring: `[a, b] = [b, a]`.',
    ],
    tags: ['sorting', 'bubble-sort', 'algorithm', 'nested-loops'],
    usageExample: {
      code: `function bubbleSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length; i++)
    for (let j = 0; j < a.length - i - 1; j++)
      if (a[j] > a[j+1]) [a[j], a[j+1]] = [a[j+1], a[j]];
  return a;
}
bubbleSort([5, 3, 1]); // [1, 3, 5]`,
      explanation: {
        en: "Bubble sort repeatedly swaps adjacent elements that are out of order — O(n^2).",
        es: "Bubble sort intercambia repetidamente elementos adyacentes que están fuera de orden — O(n^2).",
      },
    },
  },
  {
    slug: 'algo-sort-2',
    title: 'Selection Sort',
    description: `## Selection Sort

Selection Sort divides the array into two parts: sorted and unsorted. It repeatedly finds the minimum element from the unsorted part and moves it to the end of the sorted part.

Time Complexity: O(n²)
Space Complexity: O(1)

\`\`\`ts
function selectionSort(arr: number[]): number[] {
  // Implement selection sort
  // Find minimum and swap it to correct position
}

selectionSort([64, 25, 12, 22, 11]) // [11, 12, 22, 25, 64]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Algorithms',
    initialCode: `function selectionSort(arr: number[]): number[] {
  // Implement selection sort
  // Find the minimum element and place it in correct position
}`,
    solution: `function selectionSort(arr: number[]): number[] {
  const result = [...arr]
  for (let i = 0; i < result.length - 1; i++) {
    let minIdx = i
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIdx]) {
        minIdx = j
      }
    }
    if (minIdx !== i) {
      [result[i], result[minIdx]] = [result[minIdx], result[i]]
    }
  }
  return result
}`,
    tests: [
      { description: 'sorts an unsorted array', assertion: `expect(selectionSort([64, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 64])` },
      { description: 'handles already sorted array', assertion: `expect(selectionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])` },
      { description: 'handles duplicates', assertion: `expect(selectionSort([3, 1, 3, 2, 1])).toEqual([1, 1, 2, 3, 3])` },
      { description: 'handles single element', assertion: `expect(selectionSort([5])).toEqual([5])` },
      { description: 'handles two elements', assertion: `expect(selectionSort([2, 1])).toEqual([1, 2])` },
    ],
    hints: [
      'Create a copy of the array with `[...arr]` to avoid mutation.',
      'For each position, find the minimum element in the remaining array.',
      'Swap the minimum element with the current position.',
    ],
    tags: ['sorting', 'selection-sort', 'algorithm', 'minimum-finding'],
    usageExample: {
      code: `function selectionSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    let min = i;
    for (let j = i+1; j < a.length; j++) if (a[j] < a[min]) min = j;
    [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
}`,
      explanation: {
        en: "Selection sort finds the minimum of the unsorted portion and moves it to the front.",
        es: "Selection sort encuentra el mínimo de la porción sin ordenar y lo mueve al frente.",
      },
    },
  },
  {
    slug: 'algo-sort-3',
    title: 'Insertion Sort',
    description: `## Insertion Sort

Insertion Sort builds the sorted array one item at a time. It iterates through the array, and for each element, finds the correct position in the sorted portion and inserts it there.

Time Complexity: O(n²) worst case, O(n) best case
Space Complexity: O(1)

\`\`\`ts
function insertionSort(arr: number[]): number[] {
  // Implement insertion sort
  // Insert each element into its correct position
}

insertionSort([64, 34, 25, 12, 22]) // [12, 22, 25, 34, 64]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Algorithms',
    initialCode: `function insertionSort(arr: number[]): number[] {
  // Implement insertion sort
  // For each element, insert it into the sorted portion
}`,
    solution: `function insertionSort(arr: number[]): number[] {
  const result = [...arr]
  for (let i = 1; i < result.length; i++) {
    const key = result[i]
    let j = i - 1
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j]
      j--
    }
    result[j + 1] = key
  }
  return result
}`,
    tests: [
      { description: 'sorts an unsorted array', assertion: `expect(insertionSort([64, 34, 25, 12, 22])).toEqual([12, 22, 25, 34, 64])` },
      { description: 'handles already sorted array', assertion: `expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])` },
      { description: 'handles reverse sorted array', assertion: `expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])` },
      { description: 'handles duplicates', assertion: `expect(insertionSort([2, 1, 2, 1, 2])).toEqual([1, 1, 2, 2, 2])` },
      { description: 'handles negative numbers', assertion: `expect(insertionSort([3, -1, 4, -2])).toEqual([-2, -1, 3, 4])` },
    ],
    hints: [
      'Start from index 1 and build the sorted portion from left to right.',
      'For each element, shift larger elements to the right until you find the correct position.',
      'Use a while loop to find the insertion point.',
    ],
    tags: ['sorting', 'insertion-sort', 'algorithm', 'linear-insertion'],
    usageExample: {
      code: `function insertionSort(arr) {
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    const key = a[i]; let j = i - 1;
    while (j >= 0 && a[j] > key) { a[j+1] = a[j]; j--; }
    a[j+1] = key;
  }
  return a;
}`,
      explanation: {
        en: "Insertion sort builds the sorted array one element at a time by shifting larger values.",
        es: "Insertion sort construye el array ordenado un elemento a la vez desplazando valores mayores.",
      },
    },
  },
  {
    slug: 'algo-sort-4',
    title: 'Merge Sort',
    description: `## Merge Sort

Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts them, and then merges them back together.

Time Complexity: O(n log n)
Space Complexity: O(n)

\`\`\`ts
function mergeSort(arr: number[]): number[] {
  // Implement merge sort
  // Divide array, sort, and merge
}

mergeSort([64, 34, 25, 12, 22]) // [12, 22, 25, 34, 64]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Algorithms',
    initialCode: `function mergeSort(arr: number[]): number[] {
  // Implement merge sort using divide-and-conquer
  // Split array in half, recursively sort, then merge
}`,
    solution: `function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  
  const merge = (l: number[], r: number[]): number[] => {
    const result: number[] = []
    let i = 0, j = 0
    while (i < l.length && j < r.length) {
      if (l[i] <= r[j]) {
        result.push(l[i++])
      } else {
        result.push(r[j++])
      }
    }
    return result.concat(l.slice(i), r.slice(j))
  }
  
  return merge(left, right)
}`,
    tests: [
      { description: 'sorts an unsorted array', assertion: `expect(mergeSort([64, 34, 25, 12, 22])).toEqual([12, 22, 25, 34, 64])` },
      { description: 'handles already sorted array', assertion: `expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])` },
      { description: 'handles reverse sorted array', assertion: `expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])` },
      { description: 'handles duplicates', assertion: `expect(mergeSort([3, 1, 3, 1, 2])).toEqual([1, 1, 2, 3, 3])` },
      { description: 'handles single element', assertion: `expect(mergeSort([42])).toEqual([42])` },
    ],
    hints: [
      'Use recursion to divide the array into halves.',
      'Base case: array with 0 or 1 element is already sorted.',
      'Implement a merge function that combines two sorted arrays.',
      'Compare elements from both arrays and add the smaller one first.',
    ],
    tags: ['sorting', 'merge-sort', 'divide-and-conquer', 'recursion'],
    usageExample: {
      code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  // merge left and right...
}`,
      explanation: {
        en: "Merge sort divides the array recursively then merges sorted halves — O(n log n).",
        es: "Merge sort divide el array recursivamente y fusiona las mitades ordenadas — O(n log n).",
      },
    },
  },
  {
    slug: 'algo-sort-5',
    title: 'Custom Sort with Comparator',
    description: `## Custom Sort with Comparator

JavaScript's \`Array.prototype.sort()\` accepts a comparator function. A stable sort maintains the relative order of equal elements. The default sort is stable in modern engines.

Time Complexity: O(n log n)
Space Complexity: O(n)

\`\`\`ts
function sortByProperty(arr: {name: string, age: number}[], prop: string): {name: string, age: number}[] {
  // Sort using a custom comparator
}

const people = [{name: 'Alice', age: 30}, {name: 'Bob', age: 25}]
sortByProperty(people, 'age')
// [{name: 'Bob', age: 25}, {name: 'Alice', age: 30}]
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Algorithms',
    initialCode: `function sortByProperty(arr: {name: string, age: number}[], prop: keyof {name: string, age: number}): {name: string, age: number}[] {
  // Sort array of objects by the given property
  // Use Array.prototype.sort with a comparator
}`,
    solution: `function sortByProperty(arr: {name: string, age: number}[], prop: keyof {name: string, age: number}): {name: string, age: number}[] {
  return [...arr].sort((a, b) => {
    if (a[prop] < b[prop]) return -1
    if (a[prop] > b[prop]) return 1
    return 0
  })
}`,
    tests: [
      { description: 'sorts array of objects by age property', assertion: `expect(sortByProperty([{name: 'Alice', age: 30}, {name: 'Bob', age: 25}], 'age')).toEqual([{name: 'Bob', age: 25}, {name: 'Alice', age: 30}])` },
      { description: 'sorts by name property alphabetically', assertion: `expect(sortByProperty([{name: 'Zoe', age: 20}, {name: 'Alice', age: 25}], 'name')).toEqual([{name: 'Alice', age: 25}, {name: 'Zoe', age: 20}])` },
      { description: 'maintains stable sort for equal values', assertion: `expect(sortByProperty([{name: 'Bob', age: 25}, {name: 'Charlie', age: 25}], 'age')).toEqual([{name: 'Bob', age: 25}, {name: 'Charlie', age: 25}])` },
      { description: 'handles single element array', assertion: `expect(sortByProperty([{name: 'Alice', age: 30}], 'age')).toEqual([{name: 'Alice', age: 30}])` },
      { description: 'does not mutate original array', assertion: `const arr = [{name: 'Bob', age: 25}, {name: 'Alice', age: 30}]; sortByProperty(arr, 'age'); expect(arr[0].name).toBe('Bob')` },
    ],
    hints: [
      'Use the spread operator to create a copy of the array.',
      'The comparator function should return -1, 0, or 1.',
      'Return -1 if a should come before b, 1 if after, 0 if equal.',
    ],
    tags: ['sorting', 'comparator', 'custom-sort', 'stable-sort'],
    usageExample: {
      code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x <= pivot);
  const right = arr.slice(1).filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
      explanation: {
        en: "Quick sort picks a pivot and partitions the array into smaller and larger elements.",
        es: "Quick sort elige un pivote y divide el array en elementos menores y mayores.",
      },
    },
  },
]
