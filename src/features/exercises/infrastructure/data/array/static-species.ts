import type { Exercise } from '@/shared/types/exercises'

export const staticSpeciesExercises: Exercise[] = [
  {
    slug: 'array-species-subclass-map',
    title: 'Array[Symbol.species] — subclass map()',
    description: `## Array[Symbol.species]

\`Symbol.species\` is a well-known symbol that lets built-in methods (like \`.map()\`, \`.filter()\`, \`.slice()\`) know which constructor to use when creating a derived object. When a class extends \`Array\`, those methods return instances of the subclass by default.

**Challenge:** Create \`ArraySubclass\` that extends \`Array\`. Implement \`mapReturnsSubclass\` that returns \`true\` when \`.map()\` on an \`ArraySubclass\` instance produces another \`ArraySubclass\` instance.

\`\`\`ts
mapReturnsSubclass() // → true
\`\`\``,
    category: 'static-property',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array[Symbol.species]',
    initialCode: `class ArraySubclass extends Array {}

function mapReturnsSubclass(): boolean {
  // Create an ArraySubclass instance and check that .map() returns an ArraySubclass
}`,
    solution: `class ArraySubclass extends Array {}

function mapReturnsSubclass(): boolean {
  const sub = new ArraySubclass(1, 2, 3)
  const mapped = sub.map(x => x * 2)
  return mapped instanceof ArraySubclass
}`,
    tests: [
      { description: 'mapReturnsSubclass() is true', assertion: 'expect(mapReturnsSubclass()).toBe(true)' },
      { description: 'mapped result is an ArraySubclass', assertion: 'const s = new ArraySubclass(1,2); expect(s.map(x => x) instanceof ArraySubclass).toBe(true)' },
      { description: 'mapped result is also an Array', assertion: 'const s = new ArraySubclass(1,2); expect(Array.isArray(s.map(x => x))).toBe(true)' },
      { description: 'ArraySubclass instance is an Array', assertion: 'expect(new ArraySubclass(1) instanceof Array).toBe(true)' },
      { description: 'mapped values are correct', assertion: 'const s = new ArraySubclass(1,2,3); expect([...s.map(x => x * 2)]).toEqual([2,4,6])' },
    ],
    hints: [
      'When a class extends Array, iterating methods like `.map()` use `Symbol.species` to decide the result type.',
      'By default, subclasses return instances of themselves from `.map()` — no extra code needed.',
    ],
    tags: ['Array', 'Symbol.species', 'subclass', 'advanced'],
    usageExample: {
      code: `class MyArr extends Array {}
const a = new MyArr(1, 2, 3)
a.map(x => x * 2) instanceof MyArr  // → true`,
      explanation: {
        en: 'Array[Symbol.species] controls which constructor methods like map() use for the return type.',
        es: 'Array[Symbol.species] controla qué constructor usan métodos como map() para el tipo de retorno.',
      },
    },
  },
  {
    slug: 'array-species-subclass-filter',
    title: 'Array[Symbol.species] — subclass filter()',
    description: `## Array[Symbol.species] and filter()

Just like \`.map()\`, the \`.filter()\` method also respects \`Symbol.species\`. When called on an \`Array\` subclass, it returns an instance of the subclass rather than a plain \`Array\`.

**Challenge:** Create \`TypedArray\` that extends \`Array\`. Implement \`filterReturnsSubclass\` that returns \`true\` when \`.filter()\` on a \`TypedArray\` instance produces another \`TypedArray\` instance.

\`\`\`ts
filterReturnsSubclass() // → true
\`\`\``,
    category: 'static-property',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array[Symbol.species]',
    initialCode: `class TypedArray extends Array {}

function filterReturnsSubclass(): boolean {
  // Create a TypedArray and verify .filter() returns a TypedArray
}`,
    solution: `class TypedArray extends Array {}

function filterReturnsSubclass(): boolean {
  const arr = new TypedArray(1, 2, 3, 4)
  const filtered = arr.filter(x => x > 2)
  return filtered instanceof TypedArray
}`,
    tests: [
      { description: 'filterReturnsSubclass() is true', assertion: 'expect(filterReturnsSubclass()).toBe(true)' },
      { description: 'filtered result is a TypedArray', assertion: 'const a = new TypedArray(1,2,3); expect(a.filter(x => x > 1) instanceof TypedArray).toBe(true)' },
      { description: 'filtered result is also an Array', assertion: 'const a = new TypedArray(1,2,3); expect(Array.isArray(a.filter(x => x > 1))).toBe(true)' },
      { description: 'filter values are correct', assertion: 'const a = new TypedArray(1,2,3,4); expect([...a.filter(x => x % 2 === 0)]).toEqual([2,4])' },
      { description: 'TypedArray inherits from Array', assertion: 'expect(new TypedArray() instanceof Array).toBe(true)' },
    ],
    hints: [
      '`.filter()` uses `Symbol.species` internally to construct its return value.',
      'Extending `Array` is enough — no need to override `Symbol.species` for the default behaviour.',
    ],
    tags: ['Array', 'Symbol.species', 'subclass', 'filter', 'advanced'],
    usageExample: {
      code: `class MyArr extends Array {}
const a = new MyArr(1, 2, 3, 4)
a.filter(x => x > 2) instanceof MyArr  // → true`,
      explanation: {
        en: 'filter() on a subclass of Array returns an instance of that subclass via Symbol.species.',
        es: 'filter() en una subclase de Array devuelve una instancia de esa subclase mediante Symbol.species.',
      },
    },
  },
  {
    slug: 'array-species-override-species',
    title: 'Array[Symbol.species] — override to return plain Array',
    description: `## Overriding Symbol.species

You can override \`Symbol.species\` in a subclass to control which constructor derived methods use. Returning \`Array\` (the base class) makes \`.map()\` and \`.filter()\` return plain arrays instead of subclass instances.

**Challenge:** Create \`PlainResultArray\` that extends \`Array\` but overrides \`Symbol.species\` so that \`.map()\` returns a plain \`Array\`, not a \`PlainResultArray\`. Implement \`mapReturnsPlainArray\` that returns \`true\` when this is verified.

\`\`\`ts
mapReturnsPlainArray() // → true
\`\`\``,
    category: 'static-property',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array[Symbol.species]',
    initialCode: `class PlainResultArray extends Array {
  // Override Symbol.species to return the base Array constructor
}

function mapReturnsPlainArray(): boolean {
  // Verify that .map() returns a plain Array, not a PlainResultArray
}`,
    solution: `class PlainResultArray extends Array {
  static get [Symbol.species]() {
    return Array
  }
}

function mapReturnsPlainArray(): boolean {
  const arr = new PlainResultArray(1, 2, 3)
  const mapped = arr.map(x => x * 2)
  return !(mapped instanceof PlainResultArray) && Array.isArray(mapped)
}`,
    tests: [
      { description: 'mapReturnsPlainArray() is true', assertion: 'expect(mapReturnsPlainArray()).toBe(true)' },
      { description: 'map result is NOT a PlainResultArray', assertion: 'const a = new PlainResultArray(1,2); expect(a.map(x=>x) instanceof PlainResultArray).toBe(false)' },
      { description: 'map result IS a plain Array', assertion: 'const a = new PlainResultArray(1,2); expect(Array.isArray(a.map(x=>x))).toBe(true)' },
      { description: 'PlainResultArray itself is still an Array', assertion: 'expect(new PlainResultArray() instanceof Array).toBe(true)' },
      { description: 'map values are still correct', assertion: 'const a = new PlainResultArray(1,2,3); expect([...a.map(x => x + 1)]).toEqual([2,3,4])' },
    ],
    hints: [
      'Add `static get [Symbol.species]() { return Array }` inside the class.',
      'After this override, `.map()` calls `new Array(...)` instead of `new PlainResultArray(...)`.',
    ],
    tags: ['Array', 'Symbol.species', 'override', 'advanced'],
    usageExample: {
      code: `class MyArr extends Array {
  static get [Symbol.species]() { return Array }
}
const a = new MyArr(1, 2, 3)
a.map(x => x) instanceof Array  // → true (not MyArr)`,
      explanation: {
        en: 'Override Symbol.species to make derived methods return a plain Array instead of the subclass.',
        es: 'Sobreescribe Symbol.species para que los métodos derivados devuelvan un Array simple en lugar de la subclase.',
      },
    },
  },
  {
    slug: 'array-species-concat',
    title: 'Array[Symbol.species] — subclass concat()',
    description: `## Array[Symbol.species] and concat()

The \`.concat()\` method also honours \`Symbol.species\`. When called on an \`Array\` subclass (and no species override is present), it returns an instance of the subclass.

**Challenge:** Create \`ConcatArray\` that extends \`Array\`. Implement \`concatReturnsSubclass\` that returns \`true\` when \`.concat()\` on a \`ConcatArray\` instance produces another \`ConcatArray\` instance.

\`\`\`ts
concatReturnsSubclass() // → true
\`\`\``,
    category: 'static-property',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array[Symbol.species]',
    initialCode: `class ConcatArray extends Array {}

function concatReturnsSubclass(): boolean {
  // Create a ConcatArray and verify .concat() returns a ConcatArray
}`,
    solution: `class ConcatArray extends Array {}

function concatReturnsSubclass(): boolean {
  const arr = new ConcatArray(1, 2)
  const result = arr.concat([3, 4])
  return result instanceof ConcatArray
}`,
    tests: [
      { description: 'concatReturnsSubclass() is true', assertion: 'expect(concatReturnsSubclass()).toBe(true)' },
      { description: 'concat result is a ConcatArray', assertion: 'const a = new ConcatArray(1); expect(a.concat([2]) instanceof ConcatArray).toBe(true)' },
      { description: 'concat result is an Array', assertion: 'const a = new ConcatArray(1); expect(Array.isArray(a.concat([2]))).toBe(true)' },
      { description: 'concat values are correct', assertion: 'const a = new ConcatArray(1,2); expect([...a.concat([3,4])]).toEqual([1,2,3,4])' },
      { description: 'ConcatArray is an Array', assertion: 'expect(new ConcatArray(1,2) instanceof Array).toBe(true)' },
    ],
    hints: [
      '`.concat()` creates a new array via `Symbol.species`, just like `.map()` and `.filter()`.',
      'No override is needed — subclasses inherit this behaviour automatically.',
    ],
    tags: ['Array', 'Symbol.species', 'subclass', 'concat', 'advanced'],
    usageExample: {
      code: `class MyArr extends Array {}
const a = new MyArr(1, 2)
const b = a.concat([3, 4])
b instanceof MyArr  // → true`,
      explanation: {
        en: 'concat() also respects Symbol.species when called on an Array subclass instance.',
        es: 'concat() también respeta Symbol.species cuando se llama en una instancia de subclase de Array.',
      },
    },
  },
  {
    slug: 'array-species-check-instance',
    title: 'Array[Symbol.species] — Array.isArray on subclass result',
    description: `## Array.isArray() with subclass instances

\`Array.isArray()\` returns \`true\` for any object that is an exotic Array object — including subclass instances. This means a class that extends \`Array\` produces instances that pass \`Array.isArray()\`.

**Challenge:** Create \`SpecialArray\` that extends \`Array\`. Implement \`checkSubclassIsArray\` that returns \`true\` when \`Array.isArray\` reports \`true\` for a \`SpecialArray\` instance, even though it is **not** an instance of plain \`Array\` constructed directly.

\`\`\`ts
checkSubclassIsArray() // → true
\`\`\``,
    category: 'static-property',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array[Symbol.species]',
    initialCode: `class SpecialArray extends Array {}

function checkSubclassIsArray(): boolean {
  // Verify Array.isArray returns true for a SpecialArray instance
}`,
    solution: `class SpecialArray extends Array {}

function checkSubclassIsArray(): boolean {
  const special = new SpecialArray(1, 2, 3)
  return Array.isArray(special) && special instanceof SpecialArray
}`,
    tests: [
      { description: 'checkSubclassIsArray() is true', assertion: 'expect(checkSubclassIsArray()).toBe(true)' },
      { description: 'Array.isArray detects SpecialArray instance', assertion: 'expect(Array.isArray(new SpecialArray(1,2))).toBe(true)' },
      { description: 'SpecialArray instance is instanceof SpecialArray', assertion: 'expect(new SpecialArray(1) instanceof SpecialArray).toBe(true)' },
      { description: 'SpecialArray instance is instanceof Array', assertion: 'expect(new SpecialArray(1) instanceof Array).toBe(true)' },
      { description: 'plain array is not instanceof SpecialArray', assertion: 'expect([1,2,3] instanceof SpecialArray).toBe(false)' },
    ],
    hints: [
      '`Array.isArray` checks the internal [[IsArray]] slot, which subclass instances have.',
      'You can use both `Array.isArray` and `instanceof` to understand subclass arrays.',
    ],
    tags: ['Array', 'Symbol.species', 'isArray', 'subclass', 'advanced'],
    usageExample: {
      code: `class MyArr extends Array {}
const a = new MyArr(1, 2, 3)
console.log(a instanceof MyArr)   // → true
console.log(a instanceof Array)   // → true`,
      explanation: {
        en: 'Subclasses of Array are instances of both the subclass and Array due to prototype chain.',
        es: 'Las subclases de Array son instancias tanto de la subclase como de Array gracias a la cadena de prototipos.',
      },
    },
  },
]
