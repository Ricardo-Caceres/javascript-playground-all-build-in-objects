import type { Exercise } from '@/shared/types/exercises'

export const prototypeObjectCreateExercises: Exercise[] = [
  {
    slug: 'prototypes-create-1',
    title: 'Prototypes — Object.create with prototype',
    description: `## Creating Objects with Specific Prototypes

\`Object.create(proto)\` creates a new object with the specified prototype object. This is the standard way to set up prototype inheritance without using constructor functions.

**Challenge:** Use \`Object.create()\` to create objects that inherit methods from a custom prototype.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Prototypes',
    initialCode: `// Create a prototype with methods
const proto = {
  double() {
    return this.n * 2
  }
}

// Create an object with this prototype
const obj = Object.create(proto)
obj.n = 5

// Call the inherited method
const result = obj.double()`,
    solution: `// Create a prototype with methods
const proto = {
  double() {
    return this.n * 2
  }
}

// Create an object with this prototype
const obj = Object.create(proto)
obj.n = 5

// Call the inherited method
const result = obj.double()`,
    tests: [
      { description: 'inherits method from proto', assertion: "const p={double(){return this.n*2}}; const o=Object.create(p); o.n=5; expect(o.double()).toBe(10)" },
      { description: 'method uses correct this binding', assertion: "const p={getValue(){return this.val}}; const o=Object.create(p); o.val=42; expect(o.getValue()).toBe(42)" },
      { description: 'can add own properties after creation', assertion: "const p={greet(){return 'hi'}}; const o=Object.create(p); o.name='Alice'; expect(o.name).toBe('Alice')" },
      { description: 'multiple objects can share prototype', assertion: "const p={m(){return 'same'}}; const a=Object.create(p),b=Object.create(p); expect(a.m()).toBe(b.m())" },
      { description: 'prototype is correctly set', assertion: "const p={}; const o=Object.create(p); expect(Object.getPrototypeOf(o)).toBe(p)" },
    ],
    hints: ['Object.create(proto) sets up the prototype chain', 'Properties added after creation are own properties'],
    tags: ['prototypes', 'Object.create', 'static-methods', 'inheritance'],
  },
  {
    slug: 'prototypes-create-2',
    title: 'Prototypes — Object.create with null prototype',
    description: `## Creating Objects Without Prototype Chain

You can create objects with \`Object.create(null)\` to create objects that have no prototype at all. This creates truly bare objects that don't even inherit from Object.prototype.

**Challenge:** Create a prototype-less object and understand what methods are unavailable.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Prototypes',
    initialCode: `// Create an object with no prototype
const obj = Object.create(null)

// Try to access common methods
const hasToString = typeof obj.toString === 'function'

// Add your own properties
obj.x = 42`,
    solution: `// Create an object with no prototype
const obj = Object.create(null)

// Try to access common methods
const hasToString = typeof obj.toString === 'function'

// Add your own properties
obj.x = 42`,
    tests: [
      { description: 'null prototype object', assertion: "const o=Object.create(null); expect(Object.getPrototypeOf(o)).toBeNull()" },
      { description: 'no toString method', assertion: "const o=Object.create(null); expect(typeof o.toString).toBe('undefined')" },
      { description: 'can still add properties', assertion: "const o=Object.create(null); o.x=5; expect(o.x).toBe(5)" },
      { description: 'hasOwnProperty unavailable', assertion: "const o=Object.create(null); expect(typeof o.hasOwnProperty).toBe('undefined')" },
      { description: 'can be used as plain map', assertion: "const o=Object.create(null); o['key']='value'; expect(o['key']).toBe('value')" },
    ],
    hints: ['null-prototype objects are useful for storing arbitrary properties without inherited methods', 'They do not have access to Object.prototype methods'],
    tags: ['prototypes', 'Object.create', 'null-prototype', 'edge-cases'],
  },
  {
    slug: 'prototypes-create-3',
    title: 'Prototypes — Object.create with property descriptors',
    description: `## Creating Objects with Defined Properties

The second argument to \`Object.create()\` allows you to define properties with descriptors. You can specify if properties are writable, enumerable, or configurable.

**Challenge:** Use property descriptors to create objects with read-only properties and other constraints.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Prototypes',
    initialCode: `// Create object with descriptor-defined properties
const obj = Object.create({}, {
  x: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  },
  y: {
    value: 10,
    writable: false
  }
})

const xValue = obj.x
const yValue = obj.y`,
    solution: `// Create object with descriptor-defined properties
const obj = Object.create({}, {
  x: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  },
  y: {
    value: 10,
    writable: false
  }
})

const xValue = obj.x
const yValue = obj.y`,
    tests: [
      { description: 'descriptor defines property', assertion: "const o=Object.create({},{x:{value:42,writable:true}}); expect(o.x).toBe(42)" },
      { description: 'writable false makes property immutable', assertion: "const o=Object.create({},{x:{value:5,writable:false}}); o.x=10; expect(o.x).toBe(5)" },
      { description: 'enumerable controls for...in loop', assertion: "const o=Object.create({},{x:{value:1,enumerable:true},y:{value:2,enumerable:false}}); const keys=[]; for(let k in o)keys.push(k); expect(keys.length).toBe(1)" },
      { description: 'multiple descriptors work together', assertion: "const o=Object.create({},{a:{value:1},b:{value:2}}); expect(o.a+o.b).toBe(3)" },
      { description: 'inherited proto and own properties coexist', assertion: "const p={m(){return 'proto'}}; const o=Object.create(p,{x:{value:10}}); expect(o.x).toBe(10); expect(o.m()).toBe('proto')" },
    ],
    hints: ['Descriptors specify value, writable, enumerable, and configurable', 'writable:false prevents assignment', 'enumerable:false hides from for...in loops'],
    tags: ['prototypes', 'Object.create', 'descriptors', 'property-control'],
  },
  {
    slug: 'prototypes-create-4',
    title: 'Prototypes — Property inheritance through Object.create',
    description: `## Inheriting Properties Across Multiple Levels

When you chain \`Object.create()\` calls, you create multi-level inheritance. Properties are inherited through the entire chain, allowing sophisticated object hierarchies.

**Challenge:** Create a multi-level inheritance hierarchy using \`Object.create()\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Prototypes',
    initialCode: `// Create level 1: base properties
const level1 = {
  speak() { return 'I speak' }
}

// Create level 2: add more functionality
const level2 = Object.create(level1)
level2.move = function() { return 'I move' }

// Create level 3: specific implementation
const level3 = Object.create(level2)
level3.think = function() { return 'I think' }`,
    solution: `// Create level 1: base properties
const level1 = {
  speak() { return 'I speak' }
}

// Create level 2: add more functionality
const level2 = Object.create(level1)
level2.move = function() { return 'I move' }

// Create level 3: specific implementation
const level3 = Object.create(level2)
level3.think = function() { return 'I think' }`,
    tests: [
      { description: 'accesses methods from all levels', assertion: "const l1={a(){return 1}}; const l2=Object.create(l1); l2.b=()=>2; const l3=Object.create(l2); expect(l3.a()).toBe(1); expect(l3.b()).toBe(2)" },
      { description: 'can override inherited methods', assertion: "const l1={x(){return 'L1'}}; const l2=Object.create(l1); l2.x=()=>'L2'; expect(l2.x()).toBe('L2')" },
      { description: 'chain depth does not limit access', assertion: "const l1={x:1}; const l2=Object.create(l1); const l3=Object.create(l2); const l4=Object.create(l3); expect(l4.x).toBe(1)" },
      { description: 'own properties shadow all inherited', assertion: "const l1={x:1}; const l2=Object.create(l1); l2.x=2; expect(l2.x).toBe(2)" },
      { description: 'hasOwnProperty distinguishes levels', assertion: "const l1={a:1}; const l2=Object.create(l1); l2.b=2; expect(l2.hasOwnProperty('a')).toBe(false); expect(l2.hasOwnProperty('b')).toBe(true)" },
    ],
    hints: ['Each Object.create() call adds a new level to the chain', 'Properties can be overridden at any level', 'The entire chain is searched for property access'],
    tags: ['prototypes', 'Object.create', 'inheritance', 'multi-level'],
  },
  {
    slug: 'prototypes-create-5',
    title: 'Prototypes — Object.create patterns',
    description: `## Advanced Object.create Usage

\`Object.create()\` enables several advanced patterns. You can create sealed object hierarchies, controlled property definitions, and sophisticated inheritance structures.

**Challenge:** Combine \`Object.create()\`, property descriptors, and prototype chains to build a flexible object system.`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Prototypes',
    initialCode: `// Create a flexible object factory
const base = {
  getValue() { return this.value },
  setValue(v) { this.value = v }
}

const obj = Object.create(base, {
  value: {
    value: 0,
    writable: true,
    enumerable: true
  },
  id: {
    value: 'OBJ001',
    writable: false,
    enumerable: false
  }
})

obj.setValue(42)
const val = obj.getValue()
const id = obj.id`,
    solution: `// Create a flexible object factory
const base = {
  getValue() { return this.value },
  setValue(v) { this.value = v }
}

const obj = Object.create(base, {
  value: {
    value: 0,
    writable: true,
    enumerable: true
  },
  id: {
    value: 'OBJ001',
    writable: false,
    enumerable: false
  }
})

obj.setValue(42)
const val = obj.getValue()
const id = obj.id`,
    tests: [
      { description: 'methods work with descriptor properties', assertion: "const b={set(v){this.x=v},get(){return this.x}}; const o=Object.create(b,{x:{value:0,writable:true}}); o.set(5); expect(o.get()).toBe(5)" },
      { description: 'non-enumerable properties hidden from for...in', assertion: "const b={}; const o=Object.create(b,{pub:{value:1,enumerable:true},priv:{value:2,enumerable:false}}); let count=0; for(let k in o)count++; expect(count).toBe(1)" },
      { description: 'mixed inherited and descriptor properties', assertion: "const b={method(){return this.x*2}}; const o=Object.create(b,{x:{value:5,writable:true}}); expect(o.method()).toBe(10)" },
      { description: 'write-protected properties cannot change', assertion: "const o=Object.create({},{x:{value:1,writable:false}}); o.x=2; expect(o.x).toBe(1)" },
      { description: 'create complex object graphs', assertion: "const b={sum(){return this.a+this.b}}; const o=Object.create(b,{a:{value:3},b:{value:4}}); expect(o.sum()).toBe(7)" },
    ],
    hints: ['Combine prototypes with descriptors for fine control', 'Use enumerable:false for private properties', 'writable:false creates immutable values'],
    tags: ['prototypes', 'Object.create', 'advanced-patterns', 'descriptors'],
  },
]
