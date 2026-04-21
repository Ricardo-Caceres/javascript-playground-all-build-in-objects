import type { Exercise } from '@/shared/types/exercises'

export const tsGenericsExercises: Exercise[] = [
  {
    slug: 'ts-generic-1',
    title: 'Generics — identity<T>',
    description: `## Generics: The Identity Function

The simplest generic function is **identity** — it accepts a value of any type and returns it unchanged.  
**\`<T>\`** declares a type parameter that TypeScript infers from the argument.

**Challenge:** Implement \`identity<T>(x: T): T\`.

\`\`\`ts
identity(42)       // → 42
identity('hello') // → 'hello'
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function identity<T>(x: T): T {
  // Return x unchanged
}`,
    solution: `function identity<T>(x: T): T {
  return x
}`,
    tests: [
      { description: 'returns number', assertion: "expect(identity(42)).toBe(42)" },
      { description: 'returns string', assertion: "expect(identity('hello')).toBe('hello')" },
      { description: 'returns boolean', assertion: "expect(identity(true)).toBe(true)" },
      { description: 'returns array', assertion: "expect(identity([1,2])).toEqual([1,2])" },
      { description: 'returns null', assertion: "expect(identity(null)).toBeNull()" },
    ],
    hints: ['The simplest generic function — just return what you receive.'],
    tags: ['TypeScript', 'generic', 'identity', 'beginner'],
    usageExample: {
      code: `function identity<T>(x: T): T { return x }
identity(42)        // → 42
identity('hello')   // → 'hello'`,
      explanation: {
        en: 'The identity function is the simplest generic — it preserves the type of its input.',
        es: 'La función identity es el genérico más simple: preserva el tipo de su entrada.',
      },
    },
  },
  {
    slug: 'ts-generic-2',
    title: 'Generics — head<T>',
    description: `## Generics: head<T>

**Challenge:** Implement \`head<T>(arr: T[]): T | undefined\` returning the first element, or \`undefined\` for empty arrays.

\`\`\`ts
head([1, 2, 3])  // → 1
head([])         // → undefined
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function head<T>(arr: T[]): T | undefined {
  // Return first element
}`,
    solution: `function head<T>(arr: T[]): T | undefined {
  return arr[0]
}`,
    tests: [
      { description: 'first of numbers', assertion: "expect(head([1,2,3])).toBe(1)" },
      { description: 'first of strings', assertion: "expect(head(['a','b'])).toBe('a')" },
      { description: 'empty array', assertion: "expect(head([])).toBeUndefined()" },
      { description: 'single element', assertion: "expect(head([42])).toBe(42)" },
      { description: 'first of booleans', assertion: "expect(head([true, false])).toBe(true)" },
    ],
    hints: ['arr[0] returns undefined for empty arrays naturally.'],
    tags: ['TypeScript', 'generic', 'array', 'beginner'],
    usageExample: {
      code: `function head<T>(arr: T[]): T | undefined { return arr[0] }
head([1, 2, 3])   // → 1
head([])          // → undefined`,
      explanation: {
        en: 'head<T> returns the first element, preserving the array element type via generic inference.',
        es: 'head<T> devuelve el primer elemento, preservando el tipo de los elementos por inferencia genérica.',
      },
    },
  },
  {
    slug: 'ts-generic-3',
    title: 'Generics — tail<T>',
    description: `## Generics: tail<T>

**Challenge:** Implement \`tail<T>(arr: T[]): T[]\` returning all elements except the first.

\`\`\`ts
tail([1, 2, 3])  // → [2, 3]
tail([1])        // → []
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function tail<T>(arr: T[]): T[] {
  // Return all but first element
}`,
    solution: `function tail<T>(arr: T[]): T[] {
  return arr.slice(1)
}`,
    tests: [
      { description: 'removes first element', assertion: "expect(tail([1,2,3])).toEqual([2,3])" },
      { description: 'single element gives empty', assertion: "expect(tail([1])).toEqual([])" },
      { description: 'empty stays empty', assertion: "expect(tail([])).toEqual([])" },
      { description: 'works with strings', assertion: "expect(tail(['a','b','c'])).toEqual(['b','c'])" },
      { description: 'correct length', assertion: "expect(tail([1,2,3,4])).toHaveLength(3)" },
    ],
    hints: ['arr.slice(1) starts at index 1 and goes to the end.'],
    tags: ['TypeScript', 'generic', 'array', 'beginner'],
    usageExample: {
      code: `function tail<T>(arr: T[]): T[] { return arr.slice(1) }
tail([1, 2, 3])   // → [2, 3]
tail([1])         // → []`,
      explanation: {
        en: 'tail<T> returns all elements except the first, preserving the generic element type.',
        es: 'tail<T> devuelve todos los elementos excepto el primero, preservando el tipo genérico.',
      },
    },
  },
  {
    slug: 'ts-generic-4',
    title: 'Generics — last<T>',
    description: `## Generics: last<T>

**Challenge:** Implement \`last<T>(arr: T[]): T | undefined\` returning the last element.

\`\`\`ts
last([1, 2, 3])  // → 3
last([])         // → undefined
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function last<T>(arr: T[]): T | undefined {
  // Return last element
}`,
    solution: `function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1]
}`,
    tests: [
      { description: 'last of numbers', assertion: "expect(last([1,2,3])).toBe(3)" },
      { description: 'single element', assertion: "expect(last(['a'])).toBe('a')" },
      { description: 'empty array', assertion: "expect(last([])).toBeUndefined()" },
      { description: 'last boolean', assertion: "expect(last([true, false])).toBe(false)" },
      { description: 'last of 4 elements', assertion: "expect(last([10,20,30,40])).toBe(40)" },
    ],
    hints: ['arr[arr.length - 1] returns undefined for empty arrays.'],
    tags: ['TypeScript', 'generic', 'array', 'beginner'],
    usageExample: {
      code: `function last<T>(arr: T[]): T | undefined { return arr[arr.length - 1] }
last([1, 2, 3])   // → 3
last([])          // → undefined`,
      explanation: {
        en: 'last<T> returns the final element, or undefined for an empty array.',
        es: 'last<T> devuelve el último elemento, o undefined para un array vacío.',
      },
    },
  },
  {
    slug: 'ts-generic-5',
    title: 'Generics — nth<T>',
    description: `## Generics: nth<T>

**Challenge:** Implement \`nth<T>(arr: T[], n: number): T | undefined\` returning the element at index \`n\`.

\`\`\`ts
nth([10, 20, 30], 1)  // → 20
nth([1, 2, 3], 5)     // → undefined
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function nth<T>(arr: T[], n: number): T | undefined {
  // Return element at index n
}`,
    solution: `function nth<T>(arr: T[], n: number): T | undefined {
  return arr[n]
}`,
    tests: [
      { description: 'element at index 1', assertion: "expect(nth([10,20,30], 1)).toBe(20)" },
      { description: 'first element', assertion: "expect(nth([1,2,3], 0)).toBe(1)" },
      { description: 'out of bounds', assertion: "expect(nth([1,2,3], 5)).toBeUndefined()" },
      { description: 'last element by index', assertion: "expect(nth(['a','b','c'], 2)).toBe('c')" },
      { description: 'empty array', assertion: "expect(nth([], 0)).toBeUndefined()" },
    ],
    hints: ['arr[n] is fine — returns undefined automatically when out of range.'],
    tags: ['TypeScript', 'generic', 'array', 'beginner'],
    usageExample: {
      code: `function nth<T>(arr: T[], n: number): T | undefined { return arr[n] }
nth([10, 20, 30], 1)   // → 20`,
      explanation: {
        en: 'nth<T> retrieves the element at index n, returning undefined for out-of-bounds indices.',
        es: 'nth<T> recupera el elemento en el índice n, devolviendo undefined para índices fuera de rango.',
      },
    },
  },
  {
    slug: 'ts-generic-6',
    title: 'Generics — swap<T, U>',
    description: `## Generics: swap a Pair

**Challenge:** Implement \`swap<T, U>(pair: [T, U]): [U, T]\` that reverses a two-element tuple.

\`\`\`ts
swap([1, 'a'])     // → ['a', 1]
swap([true, 42])   // → [42, true]
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function swap<T, U>(pair: [T, U]): [U, T] {
  // Swap the two elements
}`,
    solution: `function swap<T, U>(pair: [T, U]): [U, T] {
  return [pair[1], pair[0]]
}`,
    tests: [
      { description: 'swaps number and string', assertion: "expect(swap([1, 'a'])).toEqual(['a', 1])" },
      { description: 'swaps string and number', assertion: "expect(swap(['hello', 42])).toEqual([42, 'hello'])" },
      { description: 'swaps booleans', assertion: "expect(swap([true, false])).toEqual([false, true])" },
      { description: 'swaps null and undefined', assertion: "expect(swap([null, undefined])).toEqual([undefined, null])" },
      { description: 'first element is second', assertion: "expect(swap([1, 2])[0]).toBe(2)" },
    ],
    hints: ['Just destructure or index into the tuple.'],
    tags: ['TypeScript', 'generic', 'tuple', 'beginner'],
    usageExample: {
      code: `function swap<T, U>(pair: [T, U]): [U, T] { return [pair[1], pair[0]] }
swap([1, 'hello'])   // → ['hello', 1]`,
      explanation: {
        en: 'swap<T, U> reverses a two-element tuple, preserving the individual types.',
        es: 'swap<T, U> invierte una tupla de dos elementos, preservando los tipos individuales.',
      },
    },
  },
  {
    slug: 'ts-generic-7',
    title: 'Generics — pick<T, K>',
    description: `## Generics: pick<T, K extends keyof T>

**Challenge:** Implement \`pick<T, K extends keyof T>(obj: T, key: K): T[K]\` returning the value at \`key\`.

\`\`\`ts
pick({ a: 1, b: 2 }, 'a')           // → 1
pick({ name: 'Alice', age: 30 }, 'name')  // → 'Alice'
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function pick<T, K extends keyof T>(obj: T, key: K): T[K] {
  // Return obj[key]
}`,
    solution: `function pick<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}`,
    tests: [
      { description: 'picks number', assertion: "expect(pick({a:1, b:2}, 'a')).toBe(1)" },
      { description: 'picks string', assertion: "expect(pick({name:'Alice', age:30}, 'name')).toBe('Alice')" },
      { description: 'picks last key', assertion: "expect(pick({x:10, y:20, z:30}, 'z')).toBe(30)" },
      { description: 'picks boolean', assertion: "expect(pick({flag:true}, 'flag')).toBe(true)" },
      { description: 'picks array', assertion: "expect(pick({items:[1,2]}, 'items')).toEqual([1,2])" },
    ],
    hints: ['K extends keyof T guarantees the key exists — TypeScript will catch mistakes.'],
    tags: ['TypeScript', 'generic', 'keyof', 'intermediate'],
    usageExample: {
      code: `function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const r = {} as Pick<T, K>
  for (const k of keys) r[k] = obj[k]
  return r
}`,
      explanation: {
        en: 'pick<T, K> uses keyof and Pick<T, K> to return a type-safe subset of an object.',
        es: 'pick<T, K> usa keyof y Pick<T, K> para devolver un subconjunto con tipo seguro de un objeto.',
      },
    },
  },
  {
    slug: 'ts-generic-8',
    title: 'Generics — getLength<T extends {length}>',
    description: `## Generic Constraints

**\`T extends { length: number }\`** is a **constraint** — it allows any type that has a \`length\` property (arrays, strings, etc.).

**Challenge:** Implement \`getLength<T extends { length: number }>(x: T): number\`.

\`\`\`ts
getLength([1, 2, 3])  // → 3
getLength('hello')   // → 5
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function getLength<T extends { length: number }>(x: T): number {
  // Return x.length
}`,
    solution: `function getLength<T extends { length: number }>(x: T): number {
  return x.length
}`,
    tests: [
      { description: 'array length', assertion: "expect(getLength([1,2,3])).toBe(3)" },
      { description: 'string length', assertion: "expect(getLength('hello')).toBe(5)" },
      { description: 'empty array', assertion: "expect(getLength([])).toBe(0)" },
      { description: 'empty string', assertion: "expect(getLength('')).toBe(0)" },
      { description: '5-element array', assertion: "expect(getLength([1,2,3,4,5])).toBe(5)" },
    ],
    hints: ['The constraint T extends { length: number } ensures .length is always available.'],
    tags: ['TypeScript', 'generic', 'constraint', 'intermediate'],
    usageExample: {
      code: `function getLength<T extends { length: number }>(x: T): number { return x.length }
getLength([1, 2, 3])   // → 3
getLength('hello')     // → 5`,
      explanation: {
        en: 'A generic constraint T extends { length: number } allows the function to work on any \'lengthable\'.',
        es: 'Una restricción T extends { length: number } permite que la función opere sobre cualquier \'longitable\'.',
      },
    },
  },
  {
    slug: 'ts-generic-9',
    title: 'Generics — Generic Stack Class',
    description: `## Generic Classes: Stack<T>

**Challenge:** Implement a generic \`Stack<T>\` class with \`push\`, \`pop\`, \`peek\`, and a \`size\` getter.

\`\`\`ts
const s = new Stack<number>()
s.push(1); s.push(2)
s.peek()  // → 2
s.pop()   // → 2
s.size    // → 1
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `class Stack<T> {
  private items: T[] = []

  push(item: T): void {
    // Add to top
  }

  pop(): T | undefined {
    // Remove and return top
  }

  peek(): T | undefined {
    // Return top without removing
  }

  get size(): number {
    // Return number of items
  }
}`,
    solution: `class Stack<T> {
  private items: T[] = []

  push(item: T): void {
    this.items.push(item)
  }

  pop(): T | undefined {
    return this.items.pop()
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1]
  }

  get size(): number {
    return this.items.length
  }
}`,
    tests: [
      { description: 'size after two pushes', assertion: "const s = new Stack(); s.push(1); s.push(2); expect(s.size).toBe(2)" },
      { description: 'pop returns last', assertion: "const s = new Stack(); s.push('a'); expect(s.pop()).toBe('a')" },
      { description: 'peek does not remove', assertion: "const s = new Stack(); s.push(10); expect(s.peek()).toBe(10)" },
      { description: 'pop empty is undefined', assertion: "const s = new Stack(); expect(s.pop()).toBeUndefined()" },
      { description: 'size decreases after pop', assertion: "const s = new Stack(); s.push(1); s.pop(); expect(s.size).toBe(0)" },
    ],
    hints: ['Arrays have push/pop built-in which map directly to stack operations.'],
    tags: ['TypeScript', 'generic', 'class', 'stack', 'intermediate'],
    usageExample: {
      code: `const stack = new Stack<number>()
stack.push(1)
stack.push(2)
stack.pop()   // → 2`,
      explanation: {
        en: 'A generic Stack<T> class enforces a single element type across push, pop, and peek.',
        es: 'Una clase genérica Stack<T> impone un único tipo de elemento en push, pop y peek.',
      },
    },
  },
  {
    slug: 'ts-generic-10',
    title: 'Generics — Generic Queue Class',
    description: `## Generic Classes: Queue<T>

**Challenge:** Implement a generic \`Queue<T>\` class with \`enqueue\`, \`dequeue\`, \`peek\`, and \`size\`.

\`\`\`ts
const q = new Queue<number>()
q.enqueue(1); q.enqueue(2)
q.dequeue()  // → 1 (FIFO)
q.size       // → 1
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `class Queue<T> {
  private items: T[] = []

  enqueue(item: T): void {
    // Add to back
  }

  dequeue(): T | undefined {
    // Remove and return front
  }

  peek(): T | undefined {
    // Return front without removing
  }

  get size(): number {
    // Return count
  }
}`,
    solution: `class Queue<T> {
  private items: T[] = []

  enqueue(item: T): void {
    this.items.push(item)
  }

  dequeue(): T | undefined {
    return this.items.shift()
  }

  peek(): T | undefined {
    return this.items[0]
  }

  get size(): number {
    return this.items.length
  }
}`,
    tests: [
      { description: 'FIFO order', assertion: "const q = new Queue(); q.enqueue(1); q.enqueue(2); expect(q.dequeue()).toBe(1)" },
      { description: 'size after two enqueues', assertion: "const q = new Queue(); q.enqueue('a'); q.enqueue('b'); expect(q.size).toBe(2)" },
      { description: 'dequeue empty is undefined', assertion: "const q = new Queue(); expect(q.dequeue()).toBeUndefined()" },
      { description: 'peek does not remove', assertion: "const q = new Queue(); q.enqueue(5); expect(q.peek()).toBe(5); expect(q.size).toBe(1)" },
      { description: 'size decreases after dequeue', assertion: "const q = new Queue(); q.enqueue(1); q.enqueue(2); q.dequeue(); expect(q.size).toBe(1)" },
    ],
    hints: ['shift() removes and returns the first element — use it for dequeue.'],
    tags: ['TypeScript', 'generic', 'class', 'queue', 'intermediate'],
    usageExample: {
      code: `const q = new Queue<string>()
q.enqueue('a')
q.enqueue('b')
q.dequeue()   // → 'a'`,
      explanation: {
        en: 'A generic Queue<T> class enforces a single element type with FIFO semantics.',
        es: 'Una clase genérica Queue<T> impone un único tipo de elemento con semántica FIFO.',
      },
    },
  },
  {
    slug: 'ts-generic-11',
    title: 'Generics — zip<T, U>',
    description: `## Generics: zip<T, U>

**Challenge:** Implement \`zip<T, U>(a: T[], b: U[]): [T, U][]\` that pairs elements by index, stopping at the shorter array.

\`\`\`ts
zip([1,2,3], ['a','b','c'])  // → [[1,'a'],[2,'b'],[3,'c']]
zip([1,2], ['a','b','c'])    // → [[1,'a'],[2,'b']]
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function zip<T, U>(a: T[], b: U[]): [T, U][] {
  // Pair elements up to the shorter length
}`,
    solution: `function zip<T, U>(a: T[], b: U[]): [T, U][] {
  const len = Math.min(a.length, b.length)
  return Array.from({ length: len }, (_, i) => [a[i], b[i]] as [T, U])
}`,
    tests: [
      { description: 'same-length arrays', assertion: "expect(zip([1,2,3], ['a','b','c'])).toEqual([[1,'a'],[2,'b'],[3,'c']])" },
      { description: 'truncates to shorter', assertion: "expect(zip([1,2], ['a','b','c'])).toHaveLength(2)" },
      { description: 'empty arrays', assertion: "expect(zip([], [])).toEqual([])" },
      { description: 'single pair', assertion: "expect(zip([1], ['a'])[0]).toEqual([1,'a'])" },
      { description: 'shorter first arg', assertion: "expect(zip([1,2,3], ['a'])).toEqual([[1,'a']])" },
    ],
    hints: ['Math.min(a.length, b.length) gives the safe iteration count.'],
    tags: ['TypeScript', 'generic', 'zip', 'intermediate'],
    usageExample: {
      code: `zip([1, 2, 3], ['a', 'b', 'c'])   // → [[1,'a'], [2,'b'], [3,'c']]`,
      explanation: {
        en: 'zip<T, U> pairs elements from two arrays into tuples, stopping at the shorter array.',
        es: 'zip<T, U> empareja elementos de dos arrays en tuplas, deteniéndose en el array más corto.',
      },
    },
  },
  {
    slug: 'ts-generic-12',
    title: 'Generics — unique<T>',
    description: `## Generics: unique<T>

**Challenge:** Implement \`unique<T>(arr: T[]): T[]\` returning only the distinct values, preserving order.

\`\`\`ts
unique([1, 2, 2, 3, 3])  // → [1, 2, 3]
unique(['a', 'b', 'a'])  // → ['a', 'b']
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function unique<T>(arr: T[]): T[] {
  // Return deduplicated array
}`,
    solution: `function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)]
}`,
    tests: [
      { description: 'removes duplicates', assertion: "expect(unique([1,2,2,3,3])).toEqual([1,2,3])" },
      { description: 'works with strings', assertion: "expect(unique(['a','b','a'])).toEqual(['a','b'])" },
      { description: 'empty array', assertion: "expect(unique([])).toEqual([])" },
      { description: 'no duplicates unchanged', assertion: "expect(unique([1])).toEqual([1])" },
      { description: 'all same gives length 1', assertion: "expect(unique([1,1,1])).toHaveLength(1)" },
    ],
    hints: ['Set preserves insertion order and removes duplicates.'],
    tags: ['TypeScript', 'generic', 'Set', 'beginner'],
    usageExample: {
      code: `unique([1, 2, 2, 3, 3, 3])   // → [1, 2, 3]
unique(['a', 'a', 'b'])       // → ['a', 'b']`,
      explanation: {
        en: 'unique<T> removes duplicates by passing the array through a Set, preserving insertion order.',
        es: 'unique<T> elimina duplicados pasando el array por un Set, preservando el orden de inserción.',
      },
    },
  },
  {
    slug: 'ts-generic-13',
    title: 'Generics — mapValues<T, U>',
    description: `## Generics: mapValues

**Challenge:** Implement \`mapValues<T, U>(obj: Record<string, T>, fn: (v: T) => U): Record<string, U>\` transforming every value.

\`\`\`ts
mapValues({ a: 1, b: 2 }, x => x * 2)   // → { a: 2, b: 4 }
mapValues({ x: 'hi' }, s => s.length)   // → { x: 2 }
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function mapValues<T, U>(obj: Record<string, T>, fn: (v: T) => U): Record<string, U> {
  // Transform each value
}`,
    solution: `function mapValues<T, U>(obj: Record<string, T>, fn: (v: T) => U): Record<string, U> {
  const result: Record<string, U> = {}
  for (const key of Object.keys(obj)) result[key] = fn(obj[key])
  return result
}`,
    tests: [
      { description: 'doubles values', assertion: "expect(mapValues({a:1,b:2}, x=>x*2)).toEqual({a:2,b:4})" },
      { description: 'maps string to length', assertion: "expect(mapValues({x:'hello'}, s=>s.length)).toEqual({x:5})" },
      { description: 'empty object', assertion: "expect(mapValues({}, x=>x)).toEqual({})" },
      { description: 'adds to value', assertion: "expect(mapValues({n:3}, x=>x+1)).toEqual({n:4})" },
      { description: 'preserves key count', assertion: "expect(Object.keys(mapValues({a:1,b:2,c:3},x=>x))).toHaveLength(3)" },
    ],
    hints: ['Object.keys gives all own enumerable keys.'],
    tags: ['TypeScript', 'generic', 'record', 'intermediate'],
    usageExample: {
      code: `mapValues({ a: 1, b: 2 }, v => v * 10)   // → { a: 10, b: 20 }`,
      explanation: {
        en: 'mapValues<T, U> transforms every value in a Record, preserving keys and type-checking the result.',
        es: 'mapValues<T, U> transforma cada valor de un Record, preservando las claves y comprobando el tipo.',
      },
    },
  },
  {
    slug: 'ts-generic-14',
    title: 'Generics — filter<T>',
    description: `## Generics: filter<T>

**Challenge:** Implement \`filter<T>(arr: T[], pred: (x: T) => boolean): T[]\`.

\`\`\`ts
filter([1,2,3,4,5], x => x % 2 === 0)  // → [2, 4]
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function filter<T>(arr: T[], pred: (x: T) => boolean): T[] {
  // Return elements satisfying pred
}`,
    solution: `function filter<T>(arr: T[], pred: (x: T) => boolean): T[] {
  return arr.filter(pred)
}`,
    tests: [
      { description: 'filters even numbers', assertion: "expect(filter([1,2,3,4,5], x=>x%2===0)).toEqual([2,4])" },
      { description: 'filters by string length', assertion: "expect(filter(['a','bb','ccc'], s=>s.length>1)).toEqual(['bb','ccc'])" },
      { description: 'empty input', assertion: "expect(filter([], x=>true)).toEqual([])" },
      { description: 'no matches', assertion: "expect(filter([1,2,3], x=>x>10)).toEqual([])" },
      { description: 'filters null values', assertion: "expect(filter([null, 1, null, 2], x=>x!==null)).toEqual([1,2])" },
    ],
    hints: ['Delegate to Array.prototype.filter.'],
    tags: ['TypeScript', 'generic', 'filter', 'beginner'],
    usageExample: {
      code: `filter([1, 2, 3, 4, 5], x => x % 2 === 0)   // → [2, 4]`,
      explanation: {
        en: 'A generic filter<T> accepts a predicate and returns only elements for which it is true.',
        es: 'Un genérico filter<T> acepta un predicado y devuelve solo los elementos para los que es verdadero.',
      },
    },
  },
  {
    slug: 'ts-generic-15',
    title: 'Generics — reduce<T, U>',
    description: `## Generics: reduce<T, U>

**Challenge:** Implement \`reduce<T, U>(arr: T[], fn: (acc: U, x: T) => U, init: U): U\`.

\`\`\`ts
reduce([1,2,3,4], (acc, x) => acc + x, 0)  // → 10
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function reduce<T, U>(arr: T[], fn: (acc: U, x: T) => U, init: U): U {
  // Fold the array
}`,
    solution: `function reduce<T, U>(arr: T[], fn: (acc: U, x: T) => U, init: U): U {
  return arr.reduce(fn, init)
}`,
    tests: [
      { description: 'sums numbers', assertion: "expect(reduce([1,2,3,4], (acc,x)=>acc+x, 0)).toBe(10)" },
      { description: 'concatenates strings', assertion: "expect(reduce(['a','b','c'], (acc,x)=>acc+x, '')).toBe('abc')" },
      { description: 'empty array', assertion: "expect(reduce([], (acc,x)=>acc+x, 0)).toBe(0)" },
      { description: 'builds array', assertion: "expect(reduce([1,2,3], (acc,x)=>[...acc,x*2], [])).toEqual([2,4,6])" },
      { description: 'max value', assertion: "expect(reduce([1,2,3,4,5], (acc,x)=>Math.max(acc,x), 0)).toBe(5)" },
    ],
    hints: ['Delegate to Array.prototype.reduce.'],
    tags: ['TypeScript', 'generic', 'reduce', 'intermediate'],
    usageExample: {
      code: `reduce([1, 2, 3, 4], (acc, x) => acc + x, 0)   // → 10`,
      explanation: {
        en: 'reduce<T, U> folds an array into a single value using an accumulator function.',
        es: 'reduce<T, U> reduce un array a un único valor usando una función acumuladora.',
      },
    },
  },
  {
    slug: 'ts-generic-16',
    title: 'Generics — chunk<T>',
    description: `## Generics: chunk<T>

**Challenge:** Implement \`chunk<T>(arr: T[], size: number): T[][]\` splitting \`arr\` into subarrays of \`size\`.

\`\`\`ts
chunk([1,2,3,4], 2)    // → [[1,2],[3,4]]
chunk([1,2,3,4,5], 2)  // → [[1,2],[3,4],[5]]
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function chunk<T>(arr: T[], size: number): T[][] {
  // Split into chunks of given size
}`,
    solution: `function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size))
  return result
}`,
    tests: [
      { description: 'even split', assertion: "expect(chunk([1,2,3,4], 2)).toEqual([[1,2],[3,4]])" },
      { description: 'remainder chunk', assertion: "expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]])" },
      { description: 'empty array', assertion: "expect(chunk([], 2)).toEqual([])" },
      { description: 'size 1 gives n chunks', assertion: "expect(chunk([1,2,3], 1)).toHaveLength(3)" },
      { description: 'size equals length', assertion: "expect(chunk([1,2,3,4,5,6], 3)).toEqual([[1,2,3],[4,5,6]])" },
    ],
    hints: ['Loop with step = size, use slice to grab each chunk.'],
    tags: ['TypeScript', 'generic', 'chunk', 'intermediate'],
    usageExample: {
      code: `chunk([1, 2, 3, 4, 5], 2)   // → [[1, 2], [3, 4], [5]]`,
      explanation: {
        en: 'chunk<T> splits an array into sub-arrays of a fixed size, preserving the element type.',
        es: 'chunk<T> divide un array en sub-arrays de tamaño fijo, preservando el tipo de los elementos.',
      },
    },
  },
  {
    slug: 'ts-generic-17',
    title: 'Generics — flatten<T>',
    description: `## Generics: flatten<T>

**Challenge:** Implement \`flatten<T>(arr: T[][]): T[]\` collapsing one level of nesting.

\`\`\`ts
flatten([[1,2],[3,4]])  // → [1,2,3,4]
\`\`\``,
    category: 'generic',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function flatten<T>(arr: T[][]): T[] {
  // Flatten one level
}`,
    solution: `function flatten<T>(arr: T[][]): T[] {
  return arr.flat()
}`,
    tests: [
      { description: 'flattens nested arrays', assertion: "expect(flatten([[1,2],[3,4]])).toEqual([1,2,3,4])" },
      { description: 'single-element subarrays', assertion: "expect(flatten([[1],[2],[3]])).toEqual([1,2,3])" },
      { description: 'empty input', assertion: "expect(flatten([])).toEqual([])" },
      { description: 'single subarray', assertion: "expect(flatten([[1,2,3]])).toEqual([1,2,3])" },
      { description: 'correct length', assertion: "expect(flatten([[1,2],[3,4],[5]])).toHaveLength(5)" },
    ],
    hints: ['Array.prototype.flat() with default depth=1 does exactly this.'],
    tags: ['TypeScript', 'generic', 'flatten', 'beginner'],
    usageExample: {
      code: `flatten([[1, 2], [3, 4], [5]])   // → [1, 2, 3, 4, 5]`,
      explanation: {
        en: 'flatten<T> collapses one level of nesting, returning a flat array of the same element type.',
        es: 'flatten<T> colapsa un nivel de anidamiento, devolviendo un array plano del mismo tipo de elementos.',
      },
    },
  },
  {
    slug: 'ts-generic-18',
    title: 'Generics — partition<T>',
    description: `## Generics: partition<T>

**Challenge:** Implement \`partition<T>(arr: T[], pred: (x: T) => boolean): [T[], T[]]\` splitting into \`[matches, nonMatches]\`.

\`\`\`ts
partition([1,2,3,4,5], x => x % 2 === 0)  // → [[2,4],[1,3,5]]
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function partition<T>(arr: T[], pred: (x: T) => boolean): [T[], T[]] {
  // Split into matching and non-matching
}`,
    solution: `function partition<T>(arr: T[], pred: (x: T) => boolean): [T[], T[]] {
  const yes: T[] = [], no: T[] = []
  for (const x of arr) (pred(x) ? yes : no).push(x)
  return [yes, no]
}`,
    tests: [
      { description: 'splits evens and odds', assertion: "expect(partition([1,2,3,4,5], x=>x%2===0)).toEqual([[2,4],[1,3,5]])" },
      { description: 'empty array', assertion: "expect(partition([], x=>true)).toEqual([[],[]])" },
      { description: 'all no-match', assertion: "expect(partition([1,2,3], x=>x>10)).toEqual([[],[1,2,3]])" },
      { description: 'matches part', assertion: "expect(partition([1,2,3,4], x=>x<3)[0]).toEqual([1,2])" },
      { description: 'string partition', assertion: "expect(partition(['a','bb','ccc'], s=>s.length===1)[0]).toEqual(['a'])" },
    ],
    hints: ['Use a conditional push to two separate arrays, then return them as a tuple.'],
    tags: ['TypeScript', 'generic', 'partition', 'intermediate'],
    usageExample: {
      code: `partition([1, 2, 3, 4, 5], x => x % 2 === 0)
// → [[2, 4], [1, 3, 5]]`,
      explanation: {
        en: 'partition<T> splits an array into two groups — those matching a predicate and those that don\'t.',
        es: 'partition<T> divide un array en dos grupos: los que cumplen el predicado y los que no.',
      },
    },
  },
  {
    slug: 'ts-generic-19',
    title: 'Generics — groupBy<T>',
    description: `## Generics: groupBy<T>

**Challenge:** Implement \`groupBy<T extends object>(arr: T[], key: keyof T): Record<string, T[]>\`.

\`\`\`ts
groupBy([{type:'a',v:1},{type:'b',v:2},{type:'a',v:3}], 'type')
// → { a: [{type:'a',v:1},{type:'a',v:3}], b: [{type:'b',v:2}] }
\`\`\``,
    category: 'generic',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function groupBy<T extends object>(arr: T[], key: keyof T): Record<string, T[]> {
  // Group items by the value at key
}`,
    solution: `function groupBy<T extends object>(arr: T[], key: keyof T): Record<string, T[]> {
  const result: Record<string, T[]> = {}
  for (const item of arr) {
    const k = String(item[key])
    if (!result[k]) result[k] = []
    result[k].push(item)
  }
  return result
}`,
    tests: [
      { description: 'groups by string key', assertion: "const r = groupBy([{k:'a',v:1},{k:'b',v:2},{k:'a',v:3}], 'k'); expect(r['a']).toHaveLength(2)" },
      { description: 'correct group count', assertion: "const r = groupBy([{type:'x'},{type:'y'},{type:'x'}], 'type'); expect(Object.keys(r)).toHaveLength(2)" },
      { description: 'empty array', assertion: "expect(groupBy([], 'x')).toEqual({})" },
      { description: 'groups by number key', assertion: "const r = groupBy([{n:1},{n:2},{n:1}], 'n'); expect(r['1']).toHaveLength(2)" },
      { description: 'single item group', assertion: "const r = groupBy([{t:'a'}], 't'); expect(r['a']).toHaveLength(1)" },
    ],
    hints: ['Convert the key value to string for the Record key.'],
    tags: ['TypeScript', 'generic', 'groupBy', 'intermediate'],
    usageExample: {
      code: `groupBy(['a', 'bb', 'ccc', 'dd'], s => s.length)
// → { 1: ['a'], 2: ['bb', 'dd'], 3: ['ccc'] }`,
      explanation: {
        en: 'groupBy<T> clusters array elements by a derived key, building a Record of arrays.',
        es: 'groupBy<T> agrupa elementos de un array por una clave derivada, construyendo un Record de arrays.',
      },
    },
  },
  {
    slug: 'ts-generic-20',
    title: 'Generics — pipe<T>',
    description: `## Generics: Function Composition with pipe<T>

**Challenge:** Implement \`pipe<T>(...fns: ((x: T) => T)[]): (x: T) => T\` — a left-to-right function composer.

\`\`\`ts
pipe(x => x + 1, x => x * 2)(3)  // → (3+1)*2 = 8
pipe()(42)                         // → 42
\`\`\``,
    category: 'generic',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `function pipe<T>(...fns: ((x: T) => T)[]): (x: T) => T {
  // Apply fns left-to-right
}`,
    solution: `function pipe<T>(...fns: ((x: T) => T)[]): (x: T) => T {
  return (x: T) => fns.reduce((v, fn) => fn(v), x)
}`,
    tests: [
      { description: 'adds then doubles', assertion: "expect(pipe(x=>x+1, x=>x*2)(3)).toBe(8)" },
      { description: 'doubles then adds', assertion: "expect(pipe(x=>x*2, x=>x+1)(5)).toBe(11)" },
      { description: 'no-op pipe', assertion: "expect(pipe()(42)).toBe(42)" },
      { description: 'single fn pipe', assertion: "expect(pipe(x=>x+1)(0)).toBe(1)" },
      { description: 'three fns', assertion: "expect(pipe(x=>x*2, x=>x*2, x=>x*2)(1)).toBe(8)" },
    ],
    hints: ['reduce with the initial value x threads the value through all functions.'],
    tags: ['TypeScript', 'generic', 'pipe', 'composition', 'advanced'],
    usageExample: {
      code: `const result = pipe(
  5,
  x => x * 2,
  x => x + 1
)  // → 11`,
      explanation: {
        en: 'pipe<T> threads a value through a sequence of transformations left-to-right.',
        es: 'pipe<T> hace pasar un valor por una secuencia de transformaciones de izquierda a derecha.',
      },
    },
  },
]
