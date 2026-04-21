import type { Exercise } from '@/shared/types/exercises'

export const prototypeChainExercises: Exercise[] = [
  {
    slug: 'prototypes-chain-1',
    title: 'Prototypes — Object.getPrototypeOf basics',
    description: `## Understanding Object.getPrototypeOf

The \`Object.getPrototypeOf()\` method returns the prototype of a specified object. Every object has an internal prototype that other objects can inherit from.

**Challenge:** Use \`Object.getPrototypeOf()\` to verify the prototype chain and understand how objects inherit from Object.prototype.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Prototypes',
    initialCode: `// Get the prototype of a plain object
const obj = {}
const proto = Object.getPrototypeOf(obj)

// Check if it's Object.prototype
const isObjectPrototype = proto === Object.prototype`,
    solution: `// Get the prototype of a plain object
const obj = {}
const proto = Object.getPrototypeOf(obj)

// Check if it's Object.prototype
const isObjectPrototype = proto === Object.prototype`,
    tests: [
      { description: 'Object.getPrototypeOf({}) is Object.prototype', assertion:"expect(Object.getPrototypeOf({})).toBe(Object.prototype)" },
      { description: 'null has no prototype chain', assertion:"expect(Object.getPrototypeOf(Object.create(null))).toBeNull()" },
      { description: 'arrays inherit from Array.prototype', assertion:"expect(Object.getPrototypeOf([]) instanceof Object).toBe(true)" },
      { description: 'functions are instances of Function', assertion:"const f=()=>{}; expect(typeof Object.getPrototypeOf(f)).toBe('function')" },
      { description: 'prototype chain is accessible', assertion:"const o={}; const p=Object.getPrototypeOf(o); expect(p).toBe(Object.prototype)" },
    ],
    hints: ['Object.getPrototypeOf retrieves the internal [[Prototype]]', 'Every object (except null-prototype objects) has Object.prototype at the end of the chain'],
    tags: ['prototypes', 'prototype-chain', 'object-model', 'inheritance'],
    usageExample: {
      code: `const obj = {};
Object.getPrototypeOf(obj) === Object.prototype; // true`,
      explanation: {
        en: "Every plain object's prototype is Object.prototype at the top of the chain.",
        es: "El prototipo de todo objeto simple es Object.prototype en la cima de la cadena.",
      },
    },
  },
  {
    slug: 'prototypes-chain-2',
    title: 'Prototypes — Methods from prototype',
    description: `## Accessing Methods Through the Prototype Chain

When you access a property or method on an object, JavaScript first looks on the object itself. If not found, it searches the prototype. This is the foundation of prototype-based inheritance.

**Challenge:** Create an object that inherits a method from its prototype without having the method as its own property.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Prototypes',
    initialCode: `// Create a prototype with a method
const proto = {
  greet() {
    return 'hello'
  }
}

// Create an object with this prototype
const obj = Object.create(proto)

// Access the inherited method
const greeting = obj.greet()`,
    solution: `// Create a prototype with a method
const proto = {
  greet() {
    return 'hello'
  }
}

// Create an object with this prototype
const obj = Object.create(proto)

// Access the inherited method
const greeting = obj.greet()`,
    tests: [
      { description: 'method on prototype is accessible', assertion:"const proto={greet(){return 'hi'}}; const obj=Object.create(proto); expect(obj.greet()).toBe('hi')" },
      { description: 'method returns correct value', assertion:"const proto={add(a,b){return a+b}}; const obj=Object.create(proto); expect(obj.add(2,3)).toBe(5)" },
      { description: 'this refers to the object', assertion:"const proto={getName(){return this.name}}; const obj=Object.create(proto); obj.name='Alice'; expect(obj.getName()).toBe('Alice')" },
      { description: 'multiple objects share same method', assertion:"const proto={greet(){return 'hi'}}; const a=Object.create(proto),b=Object.create(proto); expect(a.greet()).toBe(b.greet())" },
      { description: 'method callable multiple times', assertion:"const proto={double(x){return x*2}}; const obj=Object.create(proto); expect(obj.double(5)).toBe(10); expect(obj.double(3)).toBe(6)" },
    ],
    hints: ['Use Object.create() to set up the prototype chain', 'Properties not found on object are looked up on prototype'],
    tags: ['prototypes', 'inheritance', 'method-lookup', 'property-access'],
    usageExample: {
      code: `const proto = { greet() { return 'hello'; } };
const obj = Object.create(proto);
obj.greet(); // found via prototype chain`,
      explanation: {
        en: "JavaScript walks up the prototype chain to find properties not on the object itself.",
        es: "JavaScript recorre la cadena de prototipos para encontrar propiedades que no están en el objeto.",
      },
    },
  },
  {
    slug: 'prototypes-chain-3',
    title: 'Prototypes — hasOwnProperty for own properties',
    description: `## Distinguishing Own Properties from Inherited Properties

The \`hasOwnProperty()\` method determines if an object has a property as its own, not inherited from the prototype chain. This is crucial for filtering inherited properties.

**Challenge:** Use \`hasOwnProperty()\` to check if a property belongs to an object itself versus its prototype.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Prototypes',
    initialCode: `// Create a prototype with a property
const proto = { x: 1 }

// Create an object with this prototype and add own property
const obj = Object.create(proto)
obj.y = 2

// Check which properties are own
const xIsOwn = obj.hasOwnProperty('x')
const yIsOwn = obj.hasOwnProperty('y')`,
    solution: `// Create a prototype with a property
const proto = { x: 1 }

// Create an object with this prototype and add own property
const obj = Object.create(proto)
obj.y = 2

// Check which properties are own
const xIsOwn = obj.hasOwnProperty('x')
const yIsOwn = obj.hasOwnProperty('y')`,
    tests: [
      { description: 'hasOwnProperty false for inherited', assertion:"const proto={x:1}; const obj=Object.create(proto); expect(obj.hasOwnProperty('x')).toBe(false)" },
      { description: 'hasOwnProperty true for own', assertion:"const obj=Object.create({x:1}); obj.y=2; expect(obj.hasOwnProperty('y')).toBe(true)" },
      { description: 'inherited properties are accessible but not own', assertion:"const proto={method(){}}; const obj=Object.create(proto); expect(obj.method).toBeTruthy(); expect(obj.hasOwnProperty('method')).toBe(false)" },
      { description: 'own property can shadow inherited', assertion:"const proto={x:1}; const obj=Object.create(proto); obj.x=2; expect(obj.x).toBe(2); expect(obj.hasOwnProperty('x')).toBe(true)" },
      { description: 'distinguishes inherited from own in loop', assertion:"const proto={a:1}; const obj=Object.create(proto); obj.b=2; let own=[]; for(let k in obj)if(obj.hasOwnProperty(k))own.push(k); expect(own.length).toBe(1)" },
    ],
    hints: ['hasOwnProperty only returns true for properties directly on the object', 'Inherited properties exist but are not own properties'],
    tags: ['prototypes', 'hasOwnProperty', 'property-ownership', 'inheritance'],
    usageExample: {
      code: `function Person(name) { this.name = name; }
Person.prototype.greet = function() { return 'Hi, ' + this.name; };
new Person('Alice').greet(); // 'Hi, Alice'`,
      explanation: {
        en: "Add methods to a constructor prototype to share them across all instances.",
        es: "Añade métodos al prototipo de un constructor para compartirlos entre todas las instancias.",
      },
    },
  },
  {
    slug: 'prototypes-chain-4',
    title: 'Prototypes — Chain traversal with getPrototypeOf',
    description: `## Walking the Prototype Chain

The prototype chain is a linked structure. Each object has a prototype, which has its own prototype, forming a chain. You can walk this chain using \`Object.getPrototypeOf()\`.

**Challenge:** Traverse the prototype chain starting from an object to understand how objects are linked together.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Prototypes',
    initialCode: `// Create a simple chain
const a = {}
const b = Object.create(a)
const c = Object.create(b)

// Walk the chain
const proto_c = Object.getPrototypeOf(c)
const proto_b = Object.getPrototypeOf(b)
const proto_a = Object.getPrototypeOf(a)`,
    solution: `// Create a simple chain
const a = {}
const b = Object.create(a)
const c = Object.create(b)

// Walk the chain
const proto_c = Object.getPrototypeOf(c)
const proto_b = Object.getPrototypeOf(b)
const proto_a = Object.getPrototypeOf(a)`,
    tests: [
      { description: 'prototype chain traversal', assertion:"const a={}; const b=Object.create(a); expect(Object.getPrototypeOf(b)).toBe(a)" },
      { description: 'multi-level chain traversal', assertion:"const a={}; const b=Object.create(a); const c=Object.create(b); expect(Object.getPrototypeOf(Object.getPrototypeOf(c))).toBe(a)" },
      { description: 'chain ends at Object.prototype', assertion:"const a={}; expect(Object.getPrototypeOf(Object.getPrototypeOf(a))).toBe(null)" },
      { description: 'each level can have different prototype', assertion:"const x={}; const y={}; const a=Object.create(x); const b=Object.create(y); expect(Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)).toBe(true)" },
      { description: 'chain allows property lookup', assertion:"const a={value:42}; const b=Object.create(a); expect(b.value).toBe(42)" },
    ],
    hints: ['Each call to Object.getPrototypeOf moves up one level in the chain', 'Eventually the chain reaches null (after Object.prototype)'],
    tags: ['prototypes', 'chain-traversal', 'getPrototypeOf', 'inheritance'],
    usageExample: {
      code: `class Animal {}
class Dog extends Animal {}
const d = new Dog();
d instanceof Dog; // true
d instanceof Animal; // true`,
      explanation: {
        en: "instanceof traverses the prototype chain — a Dog is also an Animal.",
        es: "instanceof recorre la cadena de prototipos — un Dog también es un Animal.",
      },
    },
  },
  {
    slug: 'prototypes-chain-5',
    title: 'Prototypes — Complex prototype chains',
    description: `## Understanding Multi-Level Inheritance

Prototype chains can be multiple levels deep. Properties and methods are inherited through the entire chain, with each level potentially adding or overriding properties.

**Challenge:** Build and navigate a multi-level prototype chain, understanding how properties are resolved and overridden at different levels.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Prototypes',
    initialCode: `// Build a multi-level chain
const animal = { 
  speak() { return 'sound' } 
}
const dog = Object.create(animal)
dog.bark = () => 'woof'

const myDog = Object.create(dog)
myDog.name = 'Rex'

// Access methods from different levels
const sound = myDog.speak()
const bark = myDog.bark()
const name = myDog.name`,
    solution: `// Build a multi-level chain
const animal = { 
  speak() { return 'sound' } 
}
const dog = Object.create(animal)
dog.bark = () => 'woof'

const myDog = Object.create(dog)
myDog.name = 'Rex'

// Access methods from different levels
const sound = myDog.speak()
const bark = myDog.bark()
const name = myDog.name`,
    tests: [
      { description: 'accesses own property first', assertion:"const a={x:1}; const b=Object.create(a); b.x=2; expect(b.x).toBe(2)" },
      { description: 'inherits from immediate prototype', assertion:"const a={x:1}; const b=Object.create(a); expect(b.x).toBe(1)" },
      { description: 'inherits through multi-level chain', assertion:"const a={x:1}; const b=Object.create(a); const c=Object.create(b); expect(c.x).toBe(1)" },
      { description: 'method overriding in chain', assertion:"const a={m(){return 'a'}}; const b=Object.create(a); b.m=()=>'b'; expect(b.m()).toBe('b'); expect(Object.create(a).m()).toBe('a')" },
      { description: 'this context in inherited methods', assertion:"const a={getValue(){return this.v}}; const b=Object.create(a); b.v=10; expect(b.getValue()).toBe(10)" },
    ],
    hints: ['Property lookup continues up the chain until found', 'Own properties shadow inherited ones', 'this always refers to the object on which the method was called'],
    tags: ['prototypes', 'complex-chains', 'inheritance', 'property-resolution'],
    usageExample: {
      code: `const obj = { x: 1 };
const child = Object.create(obj);
child.hasOwnProperty('x'); // false
'x' in child; // true`,
      explanation: {
        en: "hasOwnProperty distinguishes own properties from inherited ones; 'in' checks the whole chain.",
        es: "hasOwnProperty distingue propiedades propias de heredadas; 'in' comprueba toda la cadena.",
      },
    },
  },
]
