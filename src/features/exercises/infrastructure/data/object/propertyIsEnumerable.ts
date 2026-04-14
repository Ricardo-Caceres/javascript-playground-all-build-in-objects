import type { Exercise } from '@/shared/types/exercises'

export const propertyIsEnumerableExercises: Exercise[] = [
  {
    slug: 'object-propertyIsEnumerable-1',
    title: 'propertyIsEnumerable() — basics',
    description: `## Object.prototype.propertyIsEnumerable()

\`obj.propertyIsEnumerable(key)\` returns \`true\` if the specified property is an **own** property AND is **enumerable**.

**Challenge:** Implement \`isEnumerable(obj, key)\` that returns whether the property is own and enumerable.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'propertyIsEnumerable',
    initialCode: `function isEnumerable(obj, key) {
  // Return true if key is an own enumerable property of obj
}`,
    solution: `function isEnumerable(obj, key) {
  return obj.propertyIsEnumerable(key);
}`,
    tests: [
      {
        description: 'Regular own property is enumerable',
        assertion: "expect({ a: 1 }.propertyIsEnumerable('a')).toBe(true)"
      },
      {
        description: 'Missing property returns false',
        assertion: "expect({ a: 1 }.propertyIsEnumerable('b')).toBe(false)"
      },
      {
        description: 'Inherited property returns false',
        assertion: "expect(({}).propertyIsEnumerable('toString')).toBe(false)"
      },
      {
        description: 'Non-enumerable own property returns false',
        assertion: "(() => { const obj = {}; Object.defineProperty(obj, 'x', { value: 1, enumerable: false }); return obj.propertyIsEnumerable('x') === false; })()"
      },
      {
        description: 'Array index is own and enumerable',
        assertion: "expect(['a', 'b'].propertyIsEnumerable('0')).toBe(true)"
      },
    ],
    hints: ['propertyIsEnumerable checks both ownership AND enumerability'],
    tags: ['Object', 'propertyIsEnumerable', 'instance-method', 'enumerable'],
  },
  {
    slug: 'object-propertyIsEnumerable-2',
    title: 'propertyIsEnumerable() — inherited property',
    description: `## propertyIsEnumerable() — inherited properties

\`propertyIsEnumerable()\` always returns \`false\` for inherited properties, even if they are enumerable on the prototype.

**Challenge:** Show that inherited properties return false even when enumerable on the prototype.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'propertyIsEnumerable',
    initialCode: `function checkInherited(proto, obj, key) {
  // Return whether the inherited key is enumerable on obj
}`,
    solution: `function checkInherited(proto, obj, key) {
  return obj.propertyIsEnumerable(key);
}`,
    tests: [
      {
        description: 'Inherited property is not enumerable via propertyIsEnumerable',
        assertion: "(() => { const proto = { x: 1 }; const obj = Object.create(proto); return obj.propertyIsEnumerable('x') === false; })()"
      },
      {
        description: 'But for..in iterates inherited enumerable',
        assertion: "(() => { const proto = { x: 1 }; const obj = Object.create(proto); const keys = []; for (const k in obj) keys.push(k); return keys.includes('x'); })()"
      },
      {
        description: 'Own property IS enumerable via propertyIsEnumerable',
        assertion: "(() => { const proto = { x: 1 }; const obj = Object.create(proto); obj.own = 2; return obj.propertyIsEnumerable('own'); })()"
      },
      {
        description: 'toString is inherited and returns false',
        assertion: "expect(({}).propertyIsEnumerable('toString')).toBe(false)"
      },
      {
        description: 'Prototype property enumerable on proto itself',
        assertion: "(() => { const proto = { x: 1 }; return proto.propertyIsEnumerable('x'); })()"
      },
    ],
    hints: ['propertyIsEnumerable only considers own properties'],
    tags: ['Object', 'propertyIsEnumerable', 'instance-method', 'inherited'],
  },
  {
    slug: 'object-propertyIsEnumerable-3',
    title: 'propertyIsEnumerable() — non-enumerable via defineProperty',
    description: `## propertyIsEnumerable() — defineProperty

Properties created with \`Object.defineProperty\` and \`enumerable: false\` will return \`false\` from \`propertyIsEnumerable()\`.

**Challenge:** Define a non-enumerable property and verify with \`propertyIsEnumerable()\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'propertyIsEnumerable',
    initialCode: `function defineNonEnum(obj, key, value) {
  // Define key as non-enumerable and return propertyIsEnumerable result
}`,
    solution: `function defineNonEnum(obj, key, value) {
  Object.defineProperty(obj, key, { value, enumerable: false, configurable: true, writable: true });
  return obj.propertyIsEnumerable(key);
}`,
    tests: [
      {
        description: 'Non-enumerable defineProperty returns false',
        assertion: "(() => { const obj = {}; Object.defineProperty(obj, 'x', { value: 1, enumerable: false }); return obj.propertyIsEnumerable('x') === false; })()"
      },
      {
        description: 'Enumerable defineProperty returns true',
        assertion: "(() => { const obj = {}; Object.defineProperty(obj, 'x', { value: 1, enumerable: true }); return obj.propertyIsEnumerable('x') === true; })()"
      },
      {
        description: 'Non-enumerable property still accessible by key',
        assertion: "(() => { const obj = {}; Object.defineProperty(obj, 'x', { value: 42, enumerable: false }); return obj.x === 42; })()"
      },
      {
        description: 'Non-enumerable not in Object.keys',
        assertion: "(() => { const obj = {}; Object.defineProperty(obj, 'x', { value: 1, enumerable: false }); return !Object.keys(obj).includes('x'); })()"
      },
      {
        description: 'Regular assignment creates enumerable property',
        assertion: "(() => { const obj = {}; obj.x = 1; return obj.propertyIsEnumerable('x'); })()"
      },
    ],
    hints: ['defineProperty defaults enumerable to false if not specified'],
    tags: ['Object', 'propertyIsEnumerable', 'instance-method', 'defineProperty'],
  },
  {
    slug: 'object-propertyIsEnumerable-4',
    title: 'propertyIsEnumerable() — array indices',
    description: `## propertyIsEnumerable() — arrays

Array elements at numeric indices are own enumerable properties. \`propertyIsEnumerable('0')\` returns \`true\` for arrays.

However, the \`length\` property of an array is NOT enumerable.

**Challenge:** Verify array index enumerability.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'propertyIsEnumerable',
    initialCode: `function checkArrayEnum(arr, index) {
  // Return whether the array index is own and enumerable
}`,
    solution: `function checkArrayEnum(arr, index) {
  return arr.propertyIsEnumerable(String(index));
}`,
    tests: [
      {
        description: 'Array index 0 is own enumerable',
        assertion: "expect(['a', 'b', 'c'].propertyIsEnumerable('0')).toBe(true)"
      },
      {
        description: 'Array index 1 is own enumerable',
        assertion: "expect([10, 20].propertyIsEnumerable('1')).toBe(true)"
      },
      {
        description: 'Array length is NOT enumerable',
        assertion: "expect([1, 2, 3].propertyIsEnumerable('length')).toBe(false)"
      },
      {
        description: 'Out-of-bounds index returns false',
        assertion: "expect([1, 2].propertyIsEnumerable('5')).toBe(false)"
      },
      {
        description: 'Array methods not enumerable',
        assertion: "expect([].propertyIsEnumerable('push')).toBe(false)"
      },
    ],
    hints: ['Array indices are strings in property lookup'],
    tags: ['Object', 'propertyIsEnumerable', 'instance-method', 'array'],
  },
  {
    slug: 'object-propertyIsEnumerable-5',
    title: 'propertyIsEnumerable() — after defineProperty with enumerable:false',
    description: `## propertyIsEnumerable() — changing enumerability

You can change enumerability of an existing property with \`Object.defineProperty\`.

**Challenge:** Change a property from enumerable to non-enumerable and verify with \`propertyIsEnumerable()\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Object',
    method: 'propertyIsEnumerable',
    initialCode: `function makeNonEnumerable(obj, key) {
  // Make the property non-enumerable and return propertyIsEnumerable result
}`,
    solution: `function makeNonEnumerable(obj, key) {
  Object.defineProperty(obj, key, { enumerable: false });
  return obj.propertyIsEnumerable(key);
}`,
    tests: [
      {
        description: 'Property starts as enumerable',
        assertion: "expect({ a: 1 }.propertyIsEnumerable('a')).toBe(true)"
      },
      {
        description: 'After redefine as non-enumerable, returns false',
        assertion: "(() => { const obj = { a: 1 }; Object.defineProperty(obj, 'a', { enumerable: false }); return obj.propertyIsEnumerable('a') === false; })()"
      },
      {
        description: 'Value still accessible after making non-enumerable',
        assertion: "(() => { const obj = { a: 42 }; Object.defineProperty(obj, 'a', { enumerable: false }); return obj.a === 42; })()"
      },
      {
        description: 'Non-enumerable property excluded from for..in',
        assertion: "(() => { const obj = { a: 1, b: 2 }; Object.defineProperty(obj, 'b', { enumerable: false }); const keys = []; for (const k in obj) keys.push(k); return !keys.includes('b'); })()"
      },
      {
        description: 'Can restore enumerability',
        assertion: "(() => { const obj = { a: 1 }; Object.defineProperty(obj, 'a', { enumerable: false }); Object.defineProperty(obj, 'a', { enumerable: true }); return obj.propertyIsEnumerable('a'); })()"
      },
    ],
    hints: ['Enumerability can be toggled with defineProperty on configurable properties'],
    tags: ['Object', 'propertyIsEnumerable', 'instance-method', 'enumerable', 'defineProperty'],
  },
]
