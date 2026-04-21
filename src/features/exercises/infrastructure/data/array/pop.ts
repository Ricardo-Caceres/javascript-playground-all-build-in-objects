import type { Exercise } from '@/shared/types/exercises'

export const popExercises: Exercise[] = [
  {
    slug: 'array-pop-basic',
    title: 'Array.prototype.pop() — remove and return last element',
    description: `## Array.prototype.pop()

\`Array.prototype.pop()\` **removes** the last element from an array and **returns** it. The array is mutated in place (its length decreases by 1).

**Challenge:** Implement \`removeLast(arr)\` that pops and returns the removed element.

\`\`\`ts
removeLast([1, 2, 3]) // → 3  (arr is now [1, 2])
removeLast([42])      // → 42 (arr is now [])
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.pop',
    initialCode: `function removeLast(arr: number[]): number | undefined {
  // Use arr.pop()
}`,
    solution: `function removeLast(arr: number[]): number | undefined {
  return arr.pop()
}`,
    tests: [
      { description: 'returns the last element', assertion:'expect(removeLast([1, 2, 3])).toBe(3)' },
      { description: 'returns only element of single-item array', assertion:'expect(removeLast([42])).toBe(42)' },
      { description: 'removes the last element from array', assertion:'const a = [1, 2, 3]; removeLast(a); expect(a).toEqual([1, 2])' },
      { description: 'works with negative numbers', assertion:'expect(removeLast([-1, -2, -3])).toBe(-3)' },
      { description: 'result is the value at the last index', assertion:'const a = [10, 20, 30]; expect(removeLast(a)).toBe(30)' },
    ],
    hints: [
      '`pop()` both mutates the array and returns the removed element.',
      'The element returned is the one at index `arr.length - 1`.',
    ],
    tags: ['Array', 'Array.prototype.pop', 'mutation', 'beginner'],
    usageExample: {
      code: `const stack = [1, 2, 3]
const top = stack.pop()  // → 3
stack  // → [1, 2]`,
      explanation: {
        en: 'Use pop() to remove and return the last element of an array.',
        es: 'Usa pop() para eliminar y devolver el último elemento de un array.',
      },
    },
  },
  {
    slug: 'array-pop-empty',
    title: 'Array.prototype.pop() — returns undefined for empty array',
    description: `## Array.prototype.pop() — empty array

Calling \`pop()\` on an **empty array** does nothing and returns \`undefined\`. The array remains empty and no error is thrown.

**Challenge:** Implement \`popEmpty()\` that calls \`pop()\` on an empty array and returns the result.

\`\`\`ts
popEmpty() // → undefined
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.pop',
    initialCode: `function popEmpty(): number | undefined {
  // Call pop() on an empty array and return the result
}`,
    solution: `function popEmpty(): number | undefined {
  return ([] as number[]).pop()
}`,
    tests: [
      { description: 'returns undefined', assertion:'expect(popEmpty()).toBeUndefined()' },
      { description: 'is not null', assertion:'expect(popEmpty() !== null).toBe(true)' },
      { description: 'is falsy', assertion:'expect(popEmpty()).toBeFalsy()' },
      { description: 'return type includes undefined', assertion:"expect(typeof popEmpty()).toBe('undefined')" },
      { description: 'does not throw', assertion:'expect((() => { try { (() => popEmpty())(); return true; } catch(e) { return false; } })()).toBe(true)' },
    ],
    hints: [
      'Calling `pop()` on `[]` is safe — it returns `undefined` without throwing.',
      'Cast with `([] as number[]).pop()` to satisfy the TypeScript return type.',
    ],
    tags: ['Array', 'Array.prototype.pop', 'undefined', 'empty', 'beginner'],
    usageExample: {
      code: `const arr = []
arr.pop()  // → undefined  (empty array)`,
      explanation: {
        en: 'pop() returns undefined when called on an empty array — guard against this if needed.',
        es: 'pop() devuelve undefined al llamarse en un array vacío; protégete contra esto si es necesario.',
      },
    },
  },
  {
    slug: 'array-pop-mutates',
    title: 'Array.prototype.pop() — verify array is mutated',
    description: `## Array.prototype.pop() — mutation

\`pop()\` is a **mutating** method: it changes the original array. After popping, the array has one fewer element. This exercise focuses on observing that side-effect.

**Challenge:** Implement \`popAndCheck(arr)\` that pops from \`arr\` and returns the mutated array (not the popped value).

\`\`\`ts
popAndCheck([1, 2, 3]) // → [1, 2]
popAndCheck([10])      // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.pop',
    initialCode: `function popAndCheck(arr: number[]): number[] {
  // Pop from arr, then return arr
}`,
    solution: `function popAndCheck(arr: number[]): number[] {
  arr.pop()
  return arr
}`,
    tests: [
      { description: 'returns the array without the last element', assertion:'expect(popAndCheck([1, 2, 3])).toEqual([1, 2])' },
      { description: 'returns empty array when single element popped', assertion:'expect(popAndCheck([10])).toEqual([])' },
      { description: 'returned array has length - 1', assertion:'expect(popAndCheck([1, 2, 3, 4])).toHaveLength(3)' },
      { description: 'mutates the original reference', assertion:'const a = [1, 2, 3]; popAndCheck(a); expect(a).toHaveLength(2)' },
      { description: 'returns the same reference', assertion:'const a = [1, 2]; expect(popAndCheck(a)).toBe(a)' },
    ],
    hints: [
      'Call `arr.pop()` and then `return arr` — the array has already been mutated.',
      'Note that the returned array is the **same object** as the input.',
    ],
    tags: ['Array', 'Array.prototype.pop', 'mutation', 'intermediate'],
    usageExample: {
      code: `const arr = ['a', 'b', 'c']
arr.pop()
console.log(arr)  // → ['a', 'b']  (mutated!)`,
      explanation: {
        en: 'pop() mutates the original array — if you need immutability, use slice(0, -1) instead.',
        es: 'pop() muta el array original; si necesitas inmutabilidad, usa slice(0, -1) en su lugar.',
      },
    },
  },
  {
    slug: 'array-pop-stack',
    title: 'Array.prototype.pop() — implement a stack pop',
    description: `## Array.prototype.pop() — stack data structure

Arrays in JavaScript naturally model a **stack** (LIFO — last in, first out). \`push\` adds to the top; \`pop\` removes from the top. This is the classic stack-pop operation.

**Challenge:** Implement \`stackPop(stack)\` — a named stack-pop function that removes and returns the top element of the stack.

\`\`\`ts
stackPop([1, 2, 3]) // → 3  (stack is now [1, 2])
stackPop([99])      // → 99 (stack is now [])
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.pop',
    initialCode: `function stackPop(stack: number[]): number | undefined {
  // Remove and return the top (last) element
}`,
    solution: `function stackPop(stack: number[]): number | undefined {
  return stack.pop()
}`,
    tests: [
      { description: 'returns the top element', assertion:'expect(stackPop([1, 2, 3])).toBe(3)' },
      { description: 'stack shrinks by one', assertion:'const s = [1, 2, 3]; stackPop(s); expect(s).toHaveLength(2)' },
      { description: 'returns undefined for empty stack', assertion:'expect(stackPop([])).toBeUndefined()' },
      { description: 'sequential pops follow LIFO order', assertion:'const s = [1, 2, 3]; expect(stackPop(s)).toBe(3); expect(stackPop(s)).toBe(2)' },
      { description: 'works with single-element stack', assertion:'expect(stackPop([7])).toBe(7)' },
    ],
    hints: [
      'A stack\'s "top" is the last element of the array.',
      '`pop()` is the natural implementation of a stack pop — O(1) and mutation-based.',
    ],
    tags: ['Array', 'Array.prototype.pop', 'stack', 'LIFO', 'intermediate'],
    usageExample: {
      code: `const stack = []
stack.push(1)
stack.push(2)
stack.pop()   // → 2  (LIFO)
stack.pop()   // → 1`,
      explanation: {
        en: 'Use push() and pop() together to implement a last-in, first-out (LIFO) stack.',
        es: 'Usa push() y pop() juntos para implementar una pila LIFO (último en entrar, primero en salir).',
      },
    },
  },
  {
    slug: 'array-pop-last-word',
    title: 'Array.prototype.pop() — remove the last word',
    description: `## Array.prototype.pop() — string arrays

\`pop()\` works on any typed array, not just numbers. This exercise applies it to a string array to remove and return the last word in a list.

**Challenge:** Implement \`removeLastWord(words)\` that pops and returns the last string from the array.

\`\`\`ts
removeLastWord(['hello', 'world']) // → 'world'
removeLastWord(['only'])           // → 'only'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.pop',
    initialCode: `function removeLastWord(words: string[]): string | undefined {
  // Pop and return the last word
}`,
    solution: `function removeLastWord(words: string[]): string | undefined {
  return words.pop()
}`,
    tests: [
      { description: "returns 'world' from ['hello', 'world']", assertion:"expect(removeLastWord(['hello', 'world'])).toBe('world')" },
      { description: 'returns the only element', assertion:"expect(removeLastWord(['only'])).toBe('only')" },
      { description: 'removes the word from the array', assertion:"const w = ['a', 'b', 'c']; removeLastWord(w); expect(w).toEqual(['a', 'b'])" },
      { description: 'returns undefined for empty array', assertion:"expect(removeLastWord([])).toBeUndefined()" },
      { description: 'returns a string', assertion:"expect(typeof removeLastWord(['foo', 'bar'])).toBe('string')" },
    ],
    hints: [
      '`pop()` works identically for string arrays — it removes and returns the last element.',
      'The return type is `string | undefined` because `pop()` on an empty array returns `undefined`.',
    ],
    tags: ['Array', 'Array.prototype.pop', 'string', 'intermediate'],
    usageExample: {
      code: `const words = ['foo', 'bar', 'baz']
const last = words.pop()  // → 'baz'
words  // → ['foo', 'bar']`,
      explanation: {
        en: 'Use pop() to consume the last string element from a queue or word list.',
        es: 'Usa pop() para consumir el último elemento de cadena de una cola o lista de palabras.',
      },
    },
  },
]
