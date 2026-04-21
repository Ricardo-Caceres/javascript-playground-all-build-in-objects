import type { Exercise } from '@/shared/types/exercises'

export const objectToStringExercises: Exercise[] = [
  {
    slug: 'object-toString-1',
    title: 'toString() — plain object default',
    description: `## Object.prototype.toString()

\`obj.toString()\` returns \`"[object Object]"\` by default for plain objects.

**Challenge:** Implement \`getStringRep(obj)\` that returns the string representation of the object.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'toString',
    initialCode: `function getStringRep(obj) {
  // Return the string representation of the object
}`,
    solution: `function getStringRep(obj) {
  return obj.toString();
}`,
    tests: [
      {
        description: 'Plain object toString returns [object Object]',
        assertion: "expect(({}).toString()).toBe('[object Object]')"
      },
      {
        description: 'Object with properties still returns [object Object]',
        assertion: "expect(({ a: 1, b: 2 }).toString()).toBe('[object Object]')"
      },
      {
        description: 'toString returns a string',
        assertion: "expect(typeof ({}).toString()).toBe('string')"
      },
      {
        description: 'toString is inherited from Object.prototype',
        assertion: "expect(({}).toString === Object.prototype.toString).toBe(true)"
      },
      {
        description: 'Empty object toString returns [object Object]',
        assertion: "expect(({}).toString()).toBe('[object Object]')"
      },
    ],
    hints: ['Object.prototype.toString() is the default string conversion for objects'],
    tags: ['Object', 'toString', 'instance-method'],
    usageExample: {
      code: `// Get string representation of an object
const obj = { a: 1 }
obj.toString()   // → '[object Object]'
Object.prototype.toString.call([])   // → '[object Array]'`,
      explanation: {
        en: 'Use toString() to convert an object to a string; calling it via Object.prototype.toString.call() reveals the internal type tag.',
        es: 'Usa toString() para convertir un objeto en cadena; llamarlo vía Object.prototype.toString.call() revela la etiqueta de tipo interno.',
      },
    },
  },
  {
    slug: 'object-toString-2',
    title: 'toString() — Object.prototype.toString.call(null)',
    description: `## Object.prototype.toString.call() — type detection

\`Object.prototype.toString.call(value)\` is a reliable way to detect the type of any value. It returns tags like \`"[object Null]"\`, \`"[object Array]"\`, etc.

**Challenge:** Use \`Object.prototype.toString.call()\` to get the type tag of \`null\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'toString',
    initialCode: `function getTypeTag(value) {
  // Use Object.prototype.toString.call to return the type tag
}`,
    solution: `function getTypeTag(value) {
  return Object.prototype.toString.call(value);
}`,
    tests: [
      {
        description: 'null returns [object Null]',
        assertion: "expect(Object.prototype.toString.call(null)).toBe('[object Null]')"
      },
      {
        description: 'undefined returns [object Undefined]',
        assertion: "expect(Object.prototype.toString.call(undefined)).toBe('[object Undefined]')"
      },
      {
        description: 'Array returns [object Array]',
        assertion: "expect(Object.prototype.toString.call([])).toBe('[object Array]')"
      },
      {
        description: 'Number returns [object Number]',
        assertion: "expect(Object.prototype.toString.call(42)).toBe('[object Number]')"
      },
      {
        description: 'Plain object returns [object Object]',
        assertion: "expect(Object.prototype.toString.call({})).toBe('[object Object]')"
      },
    ],
    hints: ['Object.prototype.toString.call is the classic type-detection idiom'],
    tags: ['Object', 'toString', 'instance-method', 'type-detection'],
    usageExample: {
      code: `// Get string representation of an object
const obj = { a: 1 }
obj.toString()   // → '[object Object]'
Object.prototype.toString.call([])   // → '[object Array]'`,
      explanation: {
        en: 'Use toString() to convert an object to a string; calling it via Object.prototype.toString.call() reveals the internal type tag.',
        es: 'Usa toString() para convertir un objeto en cadena; llamarlo vía Object.prototype.toString.call() revela la etiqueta de tipo interno.',
      },
    },
  },
  {
    slug: 'object-toString-3',
    title: 'toString() — Object.prototype.toString.call([]) for arrays',
    description: `## Object.prototype.toString.call() — arrays

Calling \`Object.prototype.toString.call([])\` returns \`"[object Array]"\`, which is more reliable than \`typeof\` for detecting arrays.

**Challenge:** Use the toString type-tag pattern to detect different built-in types.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'toString',
    initialCode: `function isArray(value) {
  // Use Object.prototype.toString.call to check if value is an array
}`,
    solution: `function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}`,
    tests: [
      {
        description: 'Array has [object Array] tag',
        assertion: "expect(Object.prototype.toString.call([])).toBe('[object Array]')"
      },
      {
        description: 'String has [object String] tag',
        assertion: "expect(Object.prototype.toString.call('hello')).toBe('[object String]')"
      },
      {
        description: 'Boolean has [object Boolean] tag',
        assertion: "expect(Object.prototype.toString.call(true)).toBe('[object Boolean]')"
      },
      {
        description: 'Function has [object Function] tag',
        assertion: "expect(Object.prototype.toString.call(function(){})).toBe('[object Function]')"
      },
      {
        description: 'RegExp has [object RegExp] tag',
        assertion: "expect(Object.prototype.toString.call(/abc/)).toBe('[object RegExp]')"
      },
    ],
    hints: ['Object.prototype.toString.call is used for reliable type checking'],
    tags: ['Object', 'toString', 'instance-method', 'type-detection', 'array'],
    usageExample: {
      code: `// Get string representation of an object
const obj = { a: 1 }
obj.toString()   // → '[object Object]'
Object.prototype.toString.call([])   // → '[object Array]'`,
      explanation: {
        en: 'Use toString() to convert an object to a string; calling it via Object.prototype.toString.call() reveals the internal type tag.',
        es: 'Usa toString() para convertir un objeto en cadena; llamarlo vía Object.prototype.toString.call() revela la etiqueta de tipo interno.',
      },
    },
  },
  {
    slug: 'object-toString-4',
    title: 'toString() — custom override',
    description: `## toString() — custom override

You can override \`toString()\` on your own objects to return a meaningful string representation.

**Challenge:** Create an object with a custom \`toString()\` method.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'toString',
    initialCode: `function makePoint(x, y) {
  // Return an object with x, y and a custom toString that returns 'Point(x,y)'
}`,
    solution: `function makePoint(x, y) {
  return {
    x,
    y,
    toString() { return 'Point(' + this.x + ',' + this.y + ')'; }
  };
}`,
    tests: [
      {
        description: 'Custom toString returns expected value',
        assertion: "expect((() => { const obj = { val: 42, toString() { return 'val=' + this.val; } }; return obj.toString() === 'val=42'; })()).toBe(true)"
      },
      {
        description: 'Custom toString used in string concatenation',
        assertion: "expect((() => { const obj = { toString() { return 'X'; } }; return ('pre-' + obj) === 'pre-X'; })()).toBe(true)"
      },
      {
        description: 'Custom toString returns a string',
        assertion: "expect((() => { const obj = { toString() { return 'custom'; } }; return typeof obj.toString() === 'string'; })()).toBe(true)"
      },
      {
        description: 'Override takes precedence over Object.prototype.toString',
        assertion: "expect((() => { const obj = { toString() { return 'mine'; } }; return obj.toString() !== '[object Object]'; })()).toBe(true)"
      },
      {
        description: 'Without override, plain object returns [object Object]',
        assertion: "expect(({}).toString()).toBe('[object Object]')"
      },
    ],
    hints: ['Override toString to provide a meaningful string representation for your objects'],
    tags: ['Object', 'toString', 'instance-method', 'override'],
    usageExample: {
      code: `// Get string representation of an object
const obj = { a: 1 }
obj.toString()   // → '[object Object]'
Object.prototype.toString.call([])   // → '[object Array]'`,
      explanation: {
        en: 'Use toString() to convert an object to a string; calling it via Object.prototype.toString.call() reveals the internal type tag.',
        es: 'Usa toString() para convertir un objeto en cadena; llamarlo vía Object.prototype.toString.call() revela la etiqueta de tipo interno.',
      },
    },
  },
  {
    slug: 'object-toString-5',
    title: 'toString() — Object.prototype.toString.call(42)',
    description: `## Object.prototype.toString.call() — number type tag

Using \`Object.prototype.toString.call(42)\` returns \`"[object Number]"\`, regardless of whether 42 is a primitive or a Number object.

**Challenge:** Use the toString type-tag to identify various value types.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'toString',
    initialCode: `function getTag(value) {
  // Return the [object Type] tag for any value
}`,
    solution: `function getTag(value) {
  return Object.prototype.toString.call(value);
}`,
    tests: [
      {
        description: 'Number primitive has [object Number] tag',
        assertion: "expect(Object.prototype.toString.call(42)).toBe('[object Number]')"
      },
      {
        description: 'Number object also has [object Number] tag',
        assertion: "expect(Object.prototype.toString.call(new Number(42))).toBe('[object Number]')"
      },
      {
        description: 'Zero has [object Number] tag',
        assertion: "expect(Object.prototype.toString.call(0)).toBe('[object Number]')"
      },
      {
        description: 'NaN has [object Number] tag',
        assertion: "expect(Object.prototype.toString.call(NaN)).toBe('[object Number]')"
      },
      {
        description: 'Symbol has [object Symbol] tag',
        assertion: "expect(Object.prototype.toString.call(Symbol('x'))).toBe('[object Symbol]')"
      },
    ],
    hints: ['Object.prototype.toString.call works on primitives too, boxing them internally'],
    tags: ['Object', 'toString', 'instance-method', 'type-detection', 'number'],
    usageExample: {
      code: `// Get string representation of an object
const obj = { a: 1 }
obj.toString()   // → '[object Object]'
Object.prototype.toString.call([])   // → '[object Array]'`,
      explanation: {
        en: 'Use toString() to convert an object to a string; calling it via Object.prototype.toString.call() reveals the internal type tag.',
        es: 'Usa toString() para convertir un objeto en cadena; llamarlo vía Object.prototype.toString.call() revela la etiqueta de tipo interno.',
      },
    },
  },
]
