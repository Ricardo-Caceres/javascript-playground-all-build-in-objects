import type { Exercise } from '@/shared/types/exercises'

export const prototypeInheritanceExercises: Exercise[] = [
  {
    slug: 'prototypes-inherit-1',
    title: 'Prototypes — Inheritance with extends',
    description: `## Creating Subclasses with extends

The \`extends\` keyword allows a class to inherit from another class. The subclass gets all the methods and properties of the parent class.

**Challenge:** Create a subclass that inherits methods from a parent class.`,
    category: 'inheritance',
    difficulty: 'beginner',
    builtIn: 'Prototypes',
    initialCode: `class Animal {
  greet() {
    return 'hello'
  }
}

class Dog extends Animal {
}

const dog = new Dog()
const greeting = dog.greet()`,
    solution: `class Animal {
  greet() {
    return 'hello'
  }
}

class Dog extends Animal {
}

const dog = new Dog()
const greeting = dog.greet()`,
    tests: [
      { description: 'extends inherits method', assertion: "class A{greet(){return 'hello'}} class B extends A{} expect(new B().greet()).toBe('hello')" },
      { description: 'subclass has inherited method', assertion: "class Parent{method(){return 42}} class Child extends Parent{} expect(new Child().method()).toBe(42)" },
      { description: 'multiple subclasses inherit same method', assertion: "class A{m(){return 'x'}} class B extends A{} class C extends A{} expect(new B().m()).toBe(new C().m())" },
      { description: 'instanceof works with inheritance', assertion: "class A{} class B extends A{} expect(new B() instanceof A).toBe(true)" },
      { description: 'inherited method uses correct this', assertion: "class A{getValue(){return this.v}} class B extends A{} const b=new B(); b.v=5; expect(b.getValue()).toBe(5)" },
    ],
    hints: ['extends creates a subclass relationship', 'Child class inherits all parent methods', 'instanceof returns true for parent class'],
    tags: ['inheritance', 'extends', 'subclass', 'class-hierarchy'],
  },
  {
    slug: 'prototypes-inherit-2',
    title: 'Prototypes — super() calls parent constructor',
    description: `## Calling Parent Constructor with super()

When a subclass has its own constructor, you must call \`super()\` to call the parent's constructor. This initializes the parent's properties. Without super(), the parent properties won't be set up.

**Challenge:** Create a subclass constructor that calls the parent constructor using super().`,
    category: 'inheritance',
    difficulty: 'beginner',
    builtIn: 'Prototypes',
    initialCode: `class Animal {
  constructor(name) {
    this.name = name
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

const dog = new Dog('Rex', 'Labrador')
const name = dog.name
const breed = dog.breed`,
    solution: `class Animal {
  constructor(name) {
    this.name = name
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

const dog = new Dog('Rex', 'Labrador')
const name = dog.name
const breed = dog.breed`,
    tests: [
      { description: 'super() calls parent constructor', assertion: "class A{constructor(x){this.x=x}} class B extends A{constructor(x){super(x)}} expect(new B(7).x).toBe(7)" },
      { description: 'parent properties initialized', assertion: "class A{constructor(n){this.name=n}} class B extends A{constructor(n){super(n)}} expect(new B('Cat').name).toBe('Cat')" },
      { description: 'subclass can add own properties', assertion: "class A{constructor(a){this.a=a}} class B extends A{constructor(a,b){super(a);this.b=b}} const b=new B(1,2); expect(b.a).toBe(1); expect(b.b).toBe(2)" },
      { description: 'multiple parameters through super', assertion: "class A{constructor(a,b){this.a=a;this.b=b}} class B extends A{constructor(a,b){super(a,b)}} const x=new B(3,4); expect(x.a).toBe(3); expect(x.b).toBe(4)" },
      { description: 'super must be called before this', assertion: "class A{constructor(){}} class B extends A{constructor(){this.x=1;super()}} const b=new B(); expect(b.x).toBe(1)" },
    ],
    hints: ['super() must be called before using this in subclass constructor', 'Arguments passed to super() go to parent constructor', 'Parent properties are initialized through super()'],
    tags: ['inheritance', 'super', 'constructor', 'initialization'],
  },
  {
    slug: 'prototypes-inherit-3',
    title: 'Prototypes — Overriding parent methods',
    description: `## Replacing Parent Methods in Subclass

A subclass can override (redefine) methods from the parent class. When you call the method on a subclass instance, the subclass version is used instead of the parent's.

**Challenge:** Create a subclass that overrides a parent method with different behavior.`,
    category: 'inheritance',
    difficulty: 'intermediate',
    builtIn: 'Prototypes',
    initialCode: `class Animal {
  speak() {
    return 'sound'
  }
}

class Dog extends Animal {
  speak() {
    return 'woof'
  }
}

const dog = new Dog()
const sound = dog.speak()

const animal = new Animal()
const animalSound = animal.speak()`,
    solution: `class Animal {
  speak() {
    return 'sound'
  }
}

class Dog extends Animal {
  speak() {
    return 'woof'
  }
}

const dog = new Dog()
const sound = dog.speak()

const animal = new Animal()
const animalSound = animal.speak()`,
    tests: [
      { description: 'override method', assertion: "class A{greet(){return 'A'}} class B extends A{greet(){return 'B'}} expect(new B().greet()).toBe('B')" },
      { description: 'parent method unchanged', assertion: "class A{m(){return 1}} class B extends A{m(){return 2}} expect(new A().m()).toBe(1)" },
      { description: 'can override multiple methods', assertion: "class A{m1(){return 'a1'}m2(){return 'a2'}} class B extends A{m1(){return 'b1'}m2(){return 'b2'}} const b=new B(); expect(b.m1()).toBe('b1'); expect(b.m2()).toBe('b2')" },
      { description: 'override only some methods', assertion: "class A{m1(){return 1}m2(){return 2}} class B extends A{m1(){return 10}} expect(new B().m1()).toBe(10); expect(new B().m2()).toBe(2)" },
      { description: 'instanceof still works with override', assertion: "class A{m(){return 'A'}} class B extends A{m(){return 'B'}} expect(new B() instanceof A).toBe(true)" },
    ],
    hints: ['Override by defining the method in the subclass', 'The subclass version shadows the parent version', 'Parent method is not affected'],
    tags: ['inheritance', 'override', 'polymorphism', 'methods'],
  },
  {
    slug: 'prototypes-inherit-4',
    title: 'Prototypes — super.method() calls parent',
    description: `## Calling Parent Methods with super.method()

The \`super\` keyword can be used to call parent methods, not just the constructor. This is useful when you want to extend parent behavior instead of replacing it completely.

**Challenge:** Override a method but call the parent's version from within the override using super.method().`,
    category: 'inheritance',
    difficulty: 'intermediate',
    builtIn: 'Prototypes',
    initialCode: `class Animal {
  greet() {
    return 'hello'
  }
}

class Dog extends Animal {
  greet() {
    return super.greet() + ' from dog'
  }
}

const dog = new Dog()
const greeting = dog.greet()`,
    solution: `class Animal {
  greet() {
    return 'hello'
  }
}

class Dog extends Animal {
  greet() {
    return super.greet() + ' from dog'
  }
}

const dog = new Dog()
const greeting = dog.greet()`,
    tests: [
      { description: 'super.method() calls parent', assertion: "class A{greet(){return 'A'}} class B extends A{greet(){return super.greet()+'B'}} expect(new B().greet()).toBe('AB')" },
      { description: 'can build on parent result', assertion: "class A{getValue(){return 10}} class B extends A{getValue(){return super.getValue()*2}} expect(new B().getValue()).toBe(20)" },
      { description: 'parent method not affected', assertion: "class A{m(){return 'A'}} class B extends A{m(){return super.m()+'B'}} expect(new A().m()).toBe('A')" },
      { description: 'super works with multiple methods', assertion: "class A{m1(){return 'a1'}m2(){return 'a2'}} class B extends A{m1(){return super.m1()+'b'}m2(){return super.m2()+'b'}} const b=new B(); expect(b.m1()).toBe('a1b'); expect(b.m2()).toBe('a2b')" },
      { description: 'super preserves this context', assertion: "class A{describe(){return this.name}} class B extends A{describe(){return super.describe()}} const b=new B(); b.name='X'; expect(b.describe()).toBe('X')" },
    ],
    hints: ['super.methodName() calls the parent version', 'Useful for extending rather than replacing behavior', 'super preserves the this context'],
    tags: ['inheritance', 'super', 'method-calling', 'polymorphism'],
  },
  {
    slug: 'prototypes-inherit-5',
    title: 'Prototypes — Complex inheritance hierarchies',
    description: `## Multi-Level Class Inheritance

Classes can form deep hierarchies where a class extends another class which itself extends another. The instanceof operator works through the entire chain, and super() needs proper initialization at each level.

**Challenge:** Create a multi-level class hierarchy with proper initialization and method overriding.`,
    category: 'inheritance',
    difficulty: 'advanced',
    builtIn: 'Prototypes',
    initialCode: `class Being {
  constructor(name) {
    this.name = name
  }

  describe() {
    return \`\${this.name}\`
  }
}

class Animal extends Being {
  constructor(name, species) {
    super(name)
    this.species = species
  }

  describe() {
    return super.describe() + ' (\${this.species})'
  }
}

class Dog extends Animal {
  constructor(name, species, breed) {
    super(name, species)
    this.breed = breed
  }

  describe() {
    return super.describe() + ' [\${this.breed}]'
  }
}

const dog = new Dog('Rex', 'Canis familiaris', 'Labrador')
const description = dog.describe()`,
    solution: `class Being {
  constructor(name) {
    this.name = name
  }

  describe() {
    return \`\${this.name}\`
  }
}

class Animal extends Being {
  constructor(name, species) {
    super(name)
    this.species = species
  }

  describe() {
    return super.describe() + \` (\${this.species})\`
  }
}

class Dog extends Animal {
  constructor(name, species, breed) {
    super(name, species)
    this.breed = breed
  }

  describe() {
    return super.describe() + \` [\${this.breed}]\`
  }
}

const dog = new Dog('Rex', 'Canis familiaris', 'Labrador')
const description = dog.describe()`,
    tests: [
      { description: 'instanceof parent true', assertion: "class A{} class B extends A{} expect(new B() instanceof A).toBe(true)" },
      { description: 'multi-level instanceof chain', assertion: "class L1{} class L2 extends L1{} class L3 extends L2{} const obj=new L3(); expect(obj instanceof L1).toBe(true); expect(obj instanceof L2).toBe(true)" },
      { description: 'super chain initialization', assertion: "class L1{constructor(a){this.a=a}} class L2 extends L1{constructor(a,b){super(a);this.b=b}} class L3 extends L2{constructor(a,b,c){super(a,b);this.c=c}} const obj=new L3(1,2,3); expect(obj.a).toBe(1); expect(obj.b).toBe(2); expect(obj.c).toBe(3)" },
      { description: 'multi-level method override with super', assertion: "class L1{m(){return 'L1'}} class L2 extends L1{m(){return super.m()+'L2'}} class L3 extends L2{m(){return super.m()+'L3'}} expect(new L3().m()).toBe('L1L2L3')" },
      { description: 'mixed inherited and overridden', assertion: "class L1{m1(){return 1}m2(){return 2}} class L2 extends L1{m1(){return 10}} class L3 extends L2{m2(){return 20}} expect(new L3().m1()).toBe(10); expect(new L3().m2()).toBe(20)" },
    ],
    hints: ['super() calls parent constructor and must pass appropriate arguments', 'super.method() walks up the chain', 'instanceof works through entire hierarchy', 'Each class adds its own layer of functionality'],
    tags: ['inheritance', 'multi-level', 'complex-hierarchy', 'instanceof'],
  },
]
