import type { Exercise } from '@/shared/types/exercises'

export const prototypeClassBasicsExercises: Exercise[] = [
  {
    slug: 'prototypes-class-1',
    title: 'Prototypes — Class constructor and methods',
    description: `## ES6 Class Syntax

ES6 introduced the \`class\` keyword, which is syntactic sugar over JavaScript's prototype-based model. A class can have a \`constructor\` method that runs when you create an instance, and methods that become part of the prototype.

**Challenge:** Create a class with a constructor and a method that returns a formatted string.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Prototypes',
    initialCode: `class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    return \`\${this.name} makes a noise\`
  }
}

const dog = new Animal('Dog')
const sound = dog.speak()`,
    solution: `class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    return \`\${this.name} makes a noise\`
  }
}

const dog = new Animal('Dog')
const sound = dog.speak()`,
    tests: [
      { description: 'returns correct string', assertion: "class Animal{constructor(n){this.name=n}speak(){return `${this.name} makes a noise`}} expect(new Animal('Dog').speak()).toBe('Dog makes a noise')" },
      { description: 'constructor sets properties', assertion: "class Animal{constructor(n,a){this.name=n;this.age=a}} const a=new Animal('Cat',3); expect(a.name).toBe('Cat'); expect(a.age).toBe(3)" },
      { description: 'multiple instances are independent', assertion: "class Animal{constructor(n){this.name=n}} const a=new Animal('Dog'),b=new Animal('Cat'); expect(a.name).not.toBe(b.name)" },
      { description: 'method can access properties', assertion: "class Animal{constructor(n){this.name=n}getName(){return this.name}} expect(new Animal('Fox').getName()).toBe('Fox')" },
      { description: 'constructor creates new instance each time', assertion: "class Animal{constructor(n){this.n=n}} const a=new Animal(1),b=new Animal(2); expect(a.n).not.toBe(b.n)" },
    ],
    hints: ['constructor is called when you use new', 'this refers to the instance being created', 'Methods are called on instances'],
    tags: ['class', 'constructor', 'methods', 'basics'],
  },
  {
    slug: 'prototypes-class-2',
    title: 'Prototypes — instanceof operator',
    description: `## Testing Instance Relationships

The \`instanceof\` operator checks if an object is an instance of a class or constructor function. It returns true if the object's prototype chain includes the constructor's prototype.

**Challenge:** Use \`instanceof\` to verify class instances and understand the instance relationship.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Prototypes',
    initialCode: `class Animal {}
class Dog extends Animal {}

const dog = new Dog()

const isDog = dog instanceof Dog
const isAnimal = dog instanceof Animal
const isString = dog instanceof String`,
    solution: `class Animal {}
class Dog extends Animal {}

const dog = new Dog()

const isDog = dog instanceof Dog
const isAnimal = dog instanceof Animal
const isString = dog instanceof String`,
    tests: [
      { description: 'instanceof Animal', assertion: "class Animal{constructor(n){this.name=n}} expect(new Animal('Cat') instanceof Animal).toBeTruthy()" },
      { description: 'instance of correct class', assertion: "class Car{} const c=new Car(); expect(c instanceof Car).toBe(true)" },
      { description: 'not instance of unrelated class', assertion: "class A{} class B{} expect(new A() instanceof B).toBe(false)" },
      { description: 'inheritance instanceof works', assertion: "class A{} class B extends A{} expect(new B() instanceof A).toBe(true)" },
      { description: 'regular objects fail instanceof check', assertion: "class Animal{} const obj={}; expect(obj instanceof Animal).toBe(false)" },
    ],
    hints: ['instanceof checks the prototype chain', 'It returns true for both direct and inherited classes'],
    tags: ['class', 'instanceof', 'type-checking', 'instance'],
  },
  {
    slug: 'prototypes-class-3',
    title: 'Prototypes — Class properties from constructor',
    description: `## Setting Properties in Constructor

Properties set in the constructor become own properties of each instance. They are not shared across instances and are directly settable and readable.

**Challenge:** Create a class that assigns multiple properties in the constructor and verify they work correctly.`,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Prototypes',
    initialCode: `class Person {
  constructor(name, age, email) {
    this.name = name
    this.age = age
    this.email = email
  }

  describe() {
    return \`\${this.name} is \${this.age}\`
  }
}

const person = new Person('Alice', 30, 'alice@example.com')
const description = person.describe()
const name = person.name`,
    solution: `class Person {
  constructor(name, age, email) {
    this.name = name
    this.age = age
    this.email = email
  }

  describe() {
    return \`\${this.name} is \${this.age}\`
  }
}

const person = new Person('Alice', 30, 'alice@example.com')
const description = person.describe()
const name = person.name`,
    tests: [
      { description: 'name property set', assertion: "class Animal{constructor(n){this.name=n}} expect(new Animal('Fish').name).toBe('Fish')" },
      { description: 'multiple properties set', assertion: "class Person{constructor(n,a){this.name=n;this.age=a}} const p=new Person('Bob',25); expect(p.name).toBe('Bob'); expect(p.age).toBe(25)" },
      { description: 'properties independent per instance', assertion: "class Box{constructor(s){this.size=s}} const b1=new Box(10),b2=new Box(20); expect(b1.size).not.toBe(b2.size)" },
      { description: 'hasOwnProperty true for constructor properties', assertion: "class C{constructor(){this.x=1}} const c=new C(); expect(c.hasOwnProperty('x')).toBe(true)" },
      { description: 'properties can be modified after creation', assertion: "class C{constructor(x){this.x=x}} const c=new C(5); c.x=10; expect(c.x).toBe(10)" },
    ],
    hints: ['Use this.propertyName to set properties', 'Each instance gets its own copy of properties', 'Properties set in constructor are own properties'],
    tags: ['class', 'constructor', 'properties', 'instance-properties'],
  },
  {
    slug: 'prototypes-class-4',
    title: 'Prototypes — Getters and setters',
    description: `## Using get and set Keywords

Classes support getter and setter syntax using the \`get\` and \`set\` keywords. Getters allow you to compute values, and setters allow you to validate or transform data when properties are assigned.

**Challenge:** Create a class with getter and setter to manage a computed property with validation.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Prototypes',
    initialCode: `class Temperature {
  constructor(celsius) {
    this._celsius = celsius
  }

  get fahrenheit() {
    return this._celsius * 9/5 + 32
  }

  set celsius(value) {
    this._celsius = value
  }

  get celsius() {
    return this._celsius
  }
}

const temp = new Temperature(0)
const f = temp.fahrenheit
temp.celsius = 100
const c = temp.celsius`,
    solution: `class Temperature {
  constructor(celsius) {
    this._celsius = celsius
  }

  get fahrenheit() {
    return this._celsius * 9/5 + 32
  }

  set celsius(value) {
    this._celsius = value
  }

  get celsius() {
    return this._celsius
  }
}

const temp = new Temperature(0)
const f = temp.fahrenheit
temp.celsius = 100
const c = temp.celsius`,
    tests: [
      { description: 'getter computes value', assertion: "class T{constructor(c){this._c=c}get f(){return this._c*9/5+32}} expect(new T(0).f).toBe(32)" },
      { description: 'getter can access internal properties', assertion: "class P{constructor(n){this._n=n}get name(){return this._n}} expect(new P('Alice').name).toBe('Alice')" },
      { description: 'setter updates internal state', assertion: "class C{constructor(x){this._x=x}set x(v){this._x=v}get x(){return this._x}} const c=new C(1); c.x=5; expect(c.x).toBe(5)" },
      { description: 'getter after setter works', assertion: "class N{constructor(){this._v=0}set val(v){this._v=v*2}get val(){return this._v}} const n=new N(); n.val=5; expect(n.val).toBe(10)" },
      { description: 'multiple getters/setters', assertion: "class Box{constructor(w,h){this._w=w;this._h=h}get area(){return this._w*this._h}set width(w){this._w=w}} const b=new Box(3,4); expect(b.area).toBe(12)" },
    ],
    hints: ['get keyword defines a property getter', 'set keyword defines a property setter', 'Use _ prefix convention for internal properties'],
    tags: ['class', 'getters', 'setters', 'properties'],
  },
  {
    slug: 'prototypes-class-5',
    title: 'Prototypes — Static methods',
    description: `## Static Methods on Classes

Static methods belong to the class itself, not to instances. They're useful for utility functions or factory methods that relate to the class but don't need instance data.

**Challenge:** Create a class with static methods for creating instances or performing calculations.`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Prototypes',
    initialCode: `class Calculator {
  static add(a, b) {
    return a + b
  }

  static multiply(a, b) {
    return a * b
  }

  static fromString(expr) {
    const [a, op, b] = expr.split(' ')
    if (op === '+') return this.add(Number(a), Number(b))
    if (op === '*') return this.multiply(Number(a), Number(b))
  }
}

const sum = Calculator.add(5, 3)
const product = Calculator.multiply(4, 7)
const result = Calculator.fromString('10 + 5')`,
    solution: `class Calculator {
  static add(a, b) {
    return a + b
  }

  static multiply(a, b) {
    return a * b
  }

  static fromString(expr) {
    const [a, op, b] = expr.split(' ')
    if (op === '+') return this.add(Number(a), Number(b))
    if (op === '*') return this.multiply(Number(a), Number(b))
  }
}

const sum = Calculator.add(5, 3)
const product = Calculator.multiply(4, 7)
const result = Calculator.fromString('10 + 5')`,
    tests: [
      { description: 'static method callable on class', assertion: "class M{static greet(){return 'hi'}} expect(M.greet()).toBe('hi')" },
      { description: 'static method cannot access instance properties', assertion: "class C{constructor(){this.x=5}static getX(){return typeof this.x}} expect(C.getX()).toBe('undefined')" },
      { description: 'static methods can call other static methods', assertion: "class M{static a(){return 1}static b(){return this.a()+1}} expect(M.b()).toBe(2)" },
      { description: 'not accessible from instances', assertion: "class C{static m(){return 42}} const c=new C(); expect(typeof c.m).toBe('undefined')" },
      { description: 'static method with multiple calls', assertion: "class Add{static compute(a,b){return a+b}} expect(Add.compute(2,3)).toBe(5); expect(Add.compute(10,20)).toBe(30)" },
    ],
    hints: ['Static methods use the static keyword', 'They are called on the class, not instances', 'this inside static method refers to the class'],
    tags: ['class', 'static-methods', 'utility', 'factory'],
  },
]
