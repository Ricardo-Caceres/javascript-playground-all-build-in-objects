import type { Exercise } from '@/shared/types/exercises'

export const stringConstructorExercises: Exercise[] = [
  {
    slug: 'string-constructor-coerce-number',
    title: 'String() — convert number to string',
    description: `## String Constructor

\`String(value)\` converts any value to its string representation without \`new\`.

**Challenge:** Implement \`numToString(n)\` that uses \`String(n)\` to convert a number to a string.

\`\`\`ts
numToString(42)   // → '42'
numToString(3.14) // → '3.14'
\`\`\``,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String',
    initialCode: `function numToString(n: number): string {
  // Use String(n) to convert the number to a string
}`,
    solution: `function numToString(n: number): string {
  return String(n)
}`,
    tests: [
      { description: 'converts integer', assertion: "expect(numToString(42)).toBe('42')" },
      { description: 'converts float', assertion: "expect(numToString(3.14)).toBe('3.14')" },
      { description: 'converts zero', assertion: "expect(numToString(0)).toBe('0')" },
      { description: 'converts negative', assertion: "expect(numToString(-7)).toBe('-7')" },
      { description: 'result is a string', assertion: "expect(typeof numToString(1)).toBe('string')" },
    ],
    hints: [
      '`String(value)` is the function form — no `new` keyword needed.',
      'It calls the internal `ToString` abstract operation on the value.',
    ],
    tags: ['String', 'String constructor', 'coercion', 'beginner'],
  },
  {
    slug: 'string-constructor-coerce-boolean',
    title: 'String() — convert boolean to string',
    description: `## String Constructor — Boolean Coercion

\`String(true)\` → \`'true'\`, \`String(false)\` → \`'false'\`.

**Challenge:** Implement \`boolToString(b)\` that uses \`String(b)\` to convert a boolean.

\`\`\`ts
boolToString(true)  // → 'true'
boolToString(false) // → 'false'
\`\`\``,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String',
    initialCode: `function boolToString(b: boolean): string {
  // Use String(b) to convert the boolean to a string
}`,
    solution: `function boolToString(b: boolean): string {
  return String(b)
}`,
    tests: [
      { description: 'converts true', assertion: "expect(boolToString(true)).toBe('true')" },
      { description: 'converts false', assertion: "expect(boolToString(false)).toBe('false')" },
      { description: 'result is a string', assertion: "expect(typeof boolToString(true)).toBe('string')" },
      { description: 'length of true string', assertion: "expect(boolToString(true)).toHaveLength(4)" },
      { description: 'length of false string', assertion: "expect(boolToString(false)).toHaveLength(5)" },
    ],
    hints: [
      '`String(true)` produces the literal string `"true"`, not `1`.',
    ],
    tags: ['String', 'String constructor', 'coercion', 'beginner'],
  },
  {
    slug: 'string-constructor-coerce-null-undefined',
    title: 'String() — convert null and undefined',
    description: `## String Constructor — null & undefined

Unlike template literals via concatenation, \`String(null)\` → \`'null'\` and \`String(undefined)\` → \`'undefined'\`.

**Challenge:** Implement \`toStr(val)\` that uses \`String(val)\` and returns the result.

\`\`\`ts
toStr(null)      // → 'null'
toStr(undefined) // → 'undefined'
\`\`\``,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String',
    initialCode: `function toStr(val: null | undefined | number): string {
  // Use String(val) to safely convert null/undefined
}`,
    solution: `function toStr(val: null | undefined | number): string {
  return String(val)
}`,
    tests: [
      { description: 'converts null', assertion: "expect(toStr(null)).toBe('null')" },
      { description: 'converts undefined', assertion: "expect(toStr(undefined)).toBe('undefined')" },
      { description: 'still works for numbers', assertion: "expect(toStr(0)).toBe('0')" },
      { description: 'null result is string', assertion: "expect(typeof toStr(null)).toBe('string')" },
      { description: 'undefined result is string', assertion: "expect(typeof toStr(undefined)).toBe('string')" },
    ],
    hints: [
      '`String(null)` is safe — it will not throw like `null.toString()` would.',
    ],
    tags: ['String', 'String constructor', 'null', 'undefined', 'beginner'],
  },
  {
    slug: 'string-constructor-primitive-vs-object',
    title: 'String() vs new String() — primitive vs object',
    description: `## String Primitive vs String Object

\`String(value)\` returns a **primitive** string. \`new String(value)\` returns a **String object** (rarely used).

**Challenge:** Implement \`isPrimitiveString(val)\` that returns \`true\` when \`val\` is a primitive string (not a String object).

\`\`\`ts
isPrimitiveString(String('hi'))     // → true
isPrimitiveString(new String('hi')) // → false
\`\`\``,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String',
    initialCode: `function isPrimitiveString(val: unknown): boolean {
  // Return true if val is a string primitive (typeof === 'string')
}`,
    solution: `function isPrimitiveString(val: unknown): boolean {
  return typeof val === 'string'
}`,
    tests: [
      { description: 'String() is primitive', assertion: "expect(isPrimitiveString(String('hi'))).toBe(true)" },
      { description: 'new String() is not primitive', assertion: "expect(isPrimitiveString(new String('hi'))).toBe(false)" },
      { description: 'string literal is primitive', assertion: "expect(isPrimitiveString('hello')).toBe(true)" },
      { description: 'number is not a string', assertion: "expect(isPrimitiveString(42)).toBe(false)" },
      { description: 'empty string is primitive', assertion: "expect(isPrimitiveString('')).toBe(true)" },
    ],
    hints: [
      '`typeof new String("x")` is `"object"`, not `"string"`.',
      '`typeof String("x")` is `"string"` — a primitive.',
    ],
    tags: ['String', 'String constructor', 'primitive', 'typeof', 'intermediate'],
  },
  {
    slug: 'string-constructor-coerce-array',
    title: 'String() — convert array to string',
    description: `## String Constructor — Array Coercion

\`String([1, 2, 3])\` calls \`.toString()\` on the array, joining with commas: \`'1,2,3'\`.

**Challenge:** Implement \`arrayToStr(arr)\` that uses \`String(arr)\` to convert a number array.

\`\`\`ts
arrayToStr([1, 2, 3])  // → '1,2,3'
arrayToStr([42])       // → '42'
\`\`\``,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String',
    initialCode: `function arrayToStr(arr: number[]): string {
  // Use String(arr) to convert the array to a string
}`,
    solution: `function arrayToStr(arr: number[]): string {
  return String(arr)
}`,
    tests: [
      { description: 'converts [1,2,3]', assertion: "expect(arrayToStr([1, 2, 3])).toBe('1,2,3')" },
      { description: 'converts single-element', assertion: "expect(arrayToStr([42])).toBe('42')" },
      { description: 'converts empty array', assertion: "expect(arrayToStr([])).toBe('')" },
      { description: 'result is a string', assertion: "expect(typeof arrayToStr([1, 2])).toBe('string')" },
      { description: 'converts two-element array', assertion: "expect(arrayToStr([5, 10])).toBe('5,10')" },
    ],
    hints: [
      '`String(arr)` internally calls `arr.toString()`, which joins elements with commas.',
    ],
    tags: ['String', 'String constructor', 'array', 'coercion', 'intermediate'],
  },
]
