import type { Exercise } from '@/shared/types/exercises'

export const tsInterfacesExercises: Exercise[] = [
  {
    slug: 'ts-interface-1',
    title: 'Interface — createUser',
    description: `## Interfaces: Basic Shape

Interfaces define the **shape** of an object. TypeScript uses **structural typing** — any object with matching properties satisfies an interface.

**Challenge:** Implement \`createUser(name, age)\` returning an object with \`name: string\` and \`age: number\`.

\`\`\`ts
createUser('Alice', 30)  // → { name: 'Alice', age: 30 }
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `interface User { name: string; age: number }

function createUser(name: string, age: number): User {
  // Return an object matching the User interface
}`,
    solution: `interface User { name: string; age: number }

function createUser(name: string, age: number): User {
  return { name, age }
}`,
    tests: [
      { description: 'name is set', assertion: "expect(createUser('Alice', 30).name).toBe('Alice')" },
      { description: 'age is set', assertion: "expect(createUser('Bob', 25).age).toBe(25)" },
      { description: 'name is string', assertion: "expect(typeof createUser('Carol', 20).name).toBe('string')" },
      { description: 'age is number', assertion: "expect(typeof createUser('Dave', 35).age).toBe('number')" },
      { description: 'full object shape', assertion: "expect(createUser('Eve', 28)).toEqual({ name: 'Eve', age: 28 })" },
    ],
    hints: ['Object shorthand: { name, age } is shorthand for { name: name, age: age }.'],
    tags: ['TypeScript', 'interface', 'structural-typing', 'beginner'],
    usageExample: {
      code: `interface User { name: string; age: number }
const u: User = createUser('Alice', 30)
// → { name: 'Alice', age: 30 }`,
      explanation: {
        en: 'An interface defines the required shape — any object with matching properties satisfies it.',
        es: 'Una interfaz define la forma requerida: cualquier objeto con propiedades coincidentes la satisface.',
      },
    },
  },
  {
    slug: 'ts-interface-2',
    title: 'Interface — Optional Properties',
    description: `## Interfaces: Optional Properties

A \`?\` suffix marks a property as optional. The object can exist with or without it.

**Challenge:** Implement \`createPoint(x, y, z?)\` returning a \`Point\` with optional \`z\`.

\`\`\`ts
createPoint(1, 2)     // → { x: 1, y: 2 }
createPoint(1, 2, 3)  // → { x: 1, y: 2, z: 3 }
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `interface Point { x: number; y: number; z?: number }

function createPoint(x: number, y: number, z?: number): Point {
  // Include z only when provided
}`,
    solution: `interface Point { x: number; y: number; z?: number }

function createPoint(x: number, y: number, z?: number): Point {
  return z !== undefined ? { x, y, z } : { x, y }
}`,
    tests: [
      { description: 'x is set', assertion: "expect(createPoint(1, 2).x).toBe(1)" },
      { description: 'z is undefined when omitted', assertion: "expect(createPoint(1, 2).z).toBeUndefined()" },
      { description: 'z is set when provided', assertion: "expect(createPoint(1, 2, 3).z).toBe(3)" },
      { description: '2D point shape', assertion: "expect(createPoint(0, 0)).toEqual({ x: 0, y: 0 })" },
      { description: '3D point shape', assertion: "expect(createPoint(1, 2, 3)).toEqual({ x: 1, y: 2, z: 3 })" },
    ],
    hints: ['Check z !== undefined before including it, to avoid { x, y, z: undefined }.'],
    tags: ['TypeScript', 'interface', 'optional', 'beginner'],
    usageExample: {
      code: `interface Point { x: number; y: number; z?: number }
createPoint(1, 2)      // → { x: 1, y: 2 }
createPoint(1, 2, 3)   // → { x: 1, y: 2, z: 3 }`,
      explanation: {
        en: 'A ? suffix marks an interface property as optional — it may be omitted from the object.',
        es: 'El sufijo ? marca una propiedad de interfaz como opcional; puede omitirse del objeto.',
      },
    },
  },
  {
    slug: 'ts-interface-3',
    title: 'Interface — Readonly Properties',
    description: `## Interfaces: readonly + Object.freeze

**\`readonly\`** properties can be set at creation but not mutated afterward. \`Object.freeze()\` enforces this at **runtime**.

**Challenge:** Implement \`createFrozenConfig(host, port)\` returning a frozen object.

\`\`\`ts
const cfg = createFrozenConfig('localhost', 3000)
Object.isFrozen(cfg) // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `interface Config { readonly host: string; readonly port: number }

function createFrozenConfig(host: string, port: number): Readonly<Config> {
  // Use Object.freeze
}`,
    solution: `interface Config { readonly host: string; readonly port: number }

function createFrozenConfig(host: string, port: number): Readonly<Config> {
  return Object.freeze({ host, port })
}`,
    tests: [
      { description: 'host is set', assertion: "expect(createFrozenConfig('localhost', 3000).host).toBe('localhost')" },
      { description: 'port is set', assertion: "expect(createFrozenConfig('localhost', 3000).port).toBe(3000)" },
      { description: 'object is frozen', assertion: "expect(Object.isFrozen(createFrozenConfig('a', 80))).toBeTruthy()" },
      { description: 'accepts real host', assertion: "expect(createFrozenConfig('api.example.com', 443).host).toBe('api.example.com')" },
      { description: 'full shape', assertion: "expect(createFrozenConfig('0.0.0.0', 8080)).toEqual({ host: '0.0.0.0', port: 8080 })" },
    ],
    hints: ['Object.freeze prevents property mutation at runtime.'],
    tags: ['TypeScript', 'interface', 'readonly', 'beginner'],
    usageExample: {
      code: `interface Config { readonly host: string; readonly port: number }
const cfg = createFrozenConfig('localhost', 3000)
Object.isFrozen(cfg)   // → true`,
      explanation: {
        en: 'readonly interface properties cannot be reassigned; Object.freeze enforces this at runtime.',
        es: 'Las propiedades readonly no pueden reasignarse; Object.freeze lo impone en tiempo de ejecución.',
      },
    },
  },
  {
    slug: 'ts-interface-4',
    title: 'Interface — Index Signature',
    description: `## Interfaces: Index Signatures

An **index signature** \`{ [key: string]: string }\` allows an object to have any string keys, all pointing to the same value type.

**Challenge:** Implement \`createDict()\` returning an empty dictionary \`{ [key: string]: string }\`.

\`\`\`ts
const d = createDict()
d['hello'] = 'world'
d['hello'] // → 'world'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function createDict(): { [key: string]: string } {
  // Return an empty object
}`,
    solution: `function createDict(): { [key: string]: string } {
  return {}
}`,
    tests: [
      { description: 'stores and retrieves value', assertion: "const d = createDict(); d['key'] = 'value'; expect(d['key']).toBe('value')" },
      { description: 'starts empty', assertion: "expect(createDict()).toEqual({})" },
      { description: 'stores multiple keys', assertion: "const d = createDict(); d['a'] = '1'; d['b'] = '2'; expect(Object.keys(d)).toHaveLength(2)" },
      { description: 'stores by name', assertion: "const d = createDict(); d['name'] = 'alice'; expect(d['name']).toBe('alice')" },
      { description: 'is an object', assertion: "expect(typeof createDict()).toBe('object')" },
    ],
    hints: ['An empty object literal {} satisfies any index signature.'],
    tags: ['TypeScript', 'interface', 'index-signature', 'beginner'],
    usageExample: {
      code: `interface Dict { [key: string]: number }
const d: Dict = { a: 1, b: 2 }
d['c'] = 3`,
      explanation: {
        en: 'An index signature [key: string]: T allows any string key while enforcing a value type.',
        es: 'Una firma de índice [key: string]: T permite cualquier clave string imponiendo un tipo de valor.',
      },
    },
  },
  {
    slug: 'ts-interface-5',
    title: 'Interface — Discriminated Union',
    description: `## Discriminated Unions

A **discriminated union** uses a shared literal property (the **discriminant**) to distinguish union members.

**Challenge:** Implement \`processShape(shape)\` that calculates area for circles and rectangles.

\`\`\`ts
processShape({ kind: 'circle', radius: 1 })           // → Math.PI
processShape({ kind: 'rect', width: 3, height: 4 })   // → 12
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rect'; width: number; height: number }

function processShape(shape: Shape): number {
  // Use shape.kind to discriminate
}`,
    solution: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rect'; width: number; height: number }

function processShape(shape: Shape): number {
  if (shape.kind === 'circle') return Math.PI * shape.radius ** 2
  return shape.width * shape.height
}`,
    tests: [
      { description: 'circle area radius 1', assertion: "expect(processShape({ kind: 'circle', radius: 1 })).toBe(Math.PI)" },
      { description: 'rect area 3x4', assertion: "expect(processShape({ kind: 'rect', width: 3, height: 4 })).toBe(12)" },
      { description: 'circle area radius 2', assertion: "expect(processShape({ kind: 'circle', radius: 2 })).toBe(Math.PI * 4)" },
      { description: 'rect area 5x5', assertion: "expect(processShape({ kind: 'rect', width: 5, height: 5 })).toBe(25)" },
      { description: 'circle area radius 0', assertion: "expect(processShape({ kind: 'circle', radius: 0 })).toBe(0)" },
    ],
    hints: ['After the if check, TypeScript knows exactly which shape you have — no cast needed.'],
    tags: ['TypeScript', 'interface', 'discriminated-union', 'intermediate'],
    usageExample: {
      code: `type Shape = { kind: 'circle'; r: number } | { kind: 'rect'; w: number; h: number }
switch (shape.kind) {
  case 'circle': return Math.PI * shape.r ** 2
  case 'rect':   return shape.w * shape.h
}`,
      explanation: {
        en: 'A discriminated union uses a shared literal property to select the correct variant.',
        es: 'Una unión discriminada usa una propiedad literal compartida para seleccionar la variante correcta.',
      },
    },
  },
  {
    slug: 'ts-interface-6',
    title: 'Interface — Extends',
    description: `## Interface Extends

An interface can **extend** another to inherit its properties, then add more.

**Challenge:** Implement \`createDog(name, breed)\` returning a \`Dog\` that extends \`Animal\`.

\`\`\`ts
createDog('Rex', 'Lab')  // → { name: 'Rex', breed: 'Lab', sound: 'woof' }
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `interface Animal { name: string; sound: string }
interface Dog extends Animal { breed: string }

function createDog(name: string, breed: string): Dog {
  // Return a Dog — don't forget the sound!
}`,
    solution: `interface Animal { name: string; sound: string }
interface Dog extends Animal { breed: string }

function createDog(name: string, breed: string): Dog {
  return { name, breed, sound: 'woof' }
}`,
    tests: [
      { description: 'name is set', assertion: "expect(createDog('Rex', 'Labrador').name).toBe('Rex')" },
      { description: 'breed is set', assertion: "expect(createDog('Rex', 'Labrador').breed).toBe('Labrador')" },
      { description: 'sound is woof', assertion: "expect(createDog('Rex', 'Labrador').sound).toBe('woof')" },
      { description: 'full shape', assertion: "expect(createDog('Buddy', 'Poodle')).toEqual({ name: 'Buddy', breed: 'Poodle', sound: 'woof' })" },
      { description: 'sound is string', assertion: "expect(typeof createDog('Max', 'Beagle').sound).toBe('string')" },
    ],
    hints: ['The Dog interface inherits name and sound from Animal.'],
    tags: ['TypeScript', 'interface', 'extends', 'beginner'],
    usageExample: {
      code: `interface Animal { name: string }
interface Dog extends Animal { breed: string }
const d: Dog = { name: 'Rex', breed: 'Labrador' }`,
      explanation: {
        en: 'Interface extends inherits all properties from a base interface and adds new ones.',
        es: 'La extensión de interfaz hereda todas las propiedades de la interfaz base y añade nuevas.',
      },
    },
  },
  {
    slug: 'ts-interface-7',
    title: 'Interface — Intersection Types',
    description: `## Intersection Types (&)

An **intersection type** \`A & B\` combines all properties of both types.

**Challenge:** Implement \`mergeObjects<T, U>(a, b)\` returning \`T & U\`.

\`\`\`ts
mergeObjects({ a: 1 }, { b: 2 })  // → { a: 1, b: 2 }
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function mergeObjects<T extends object, U extends object>(a: T, b: U): T & U {
  // Use Object.assign to merge a and b
}`,
    solution: `function mergeObjects<T extends object, U extends object>(a: T, b: U): T & U {
  return Object.assign({}, a, b) as T & U
}`,
    tests: [
      { description: 'merges two objects', assertion: "expect(mergeObjects({a: 1}, {b: 2})).toEqual({a: 1, b: 2})" },
      { description: 'x property accessible', assertion: "expect(mergeObjects({x: 'hello'}, {y: 42}).x).toBe('hello')" },
      { description: 'y property accessible', assertion: "expect(mergeObjects({x: 'hello'}, {y: 42}).y).toBe(42)" },
      { description: 'b overrides a', assertion: "expect(mergeObjects({a: 1}, {a: 99}).a).toBe(99)" },
      { description: 'merges three keys', assertion: "expect(mergeObjects({a: 1, b: 2}, {c: 3})).toEqual({a: 1, b: 2, c: 3})" },
    ],
    hints: ['Object.assign({}, a, b) spreads both objects into a fresh one.'],
    tags: ['TypeScript', 'interface', 'intersection', 'intermediate'],
    usageExample: {
      code: `type AB = { a: number } & { b: string }
const v: AB = { a: 1, b: 'hello' }  // must have both a and b`,
      explanation: {
        en: 'An intersection type (A & B) requires an object to satisfy all constituent types simultaneously.',
        es: 'Un tipo intersección (A & B) requiere que un objeto satisfaga todos los tipos constituyentes.',
      },
    },
  },
  {
    slug: 'ts-interface-8',
    title: 'Interface — Union Type Parser',
    description: `## Union Types: parseValue

**Challenge:** Implement \`parseValue(input)\` that converts a string to its native JS type:
- \`'true'\` → \`true\`, \`'false'\` → \`false\`
- Numeric strings → \`number\`
- Everything else → \`string\`

\`\`\`ts
parseValue('42')     // → 42
parseValue('true')  // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `function parseValue(input: string): string | number | boolean {
  // Convert 'true'/'false' to boolean, numeric strings to number, rest to string
}`,
    solution: `function parseValue(input: string): string | number | boolean {
  if (input === 'true') return true
  if (input === 'false') return false
  const n = Number(input)
  if (!isNaN(n)) return n
  return input
}`,
    tests: [
      { description: 'converts number string', assertion: "expect(parseValue('42')).toBe(42)" },
      { description: 'converts true', assertion: "expect(parseValue('true')).toBe(true)" },
      { description: 'converts false', assertion: "expect(parseValue('false')).toBe(false)" },
      { description: 'keeps plain string', assertion: "expect(parseValue('hello')).toBe('hello')" },
      { description: 'converts float string', assertion: "expect(parseValue('3.14')).toBe(3.14)" },
    ],
    hints: ['Number(str) returns NaN for non-numeric strings — isNaN() can detect this.'],
    tags: ['TypeScript', 'interface', 'union', 'intermediate'],
    usageExample: {
      code: `type Input = string | number
function toString(x: Input): string {
  return typeof x === 'string' ? x : x.toString()
}`,
      explanation: {
        en: 'A union type A | B accepts either type; narrowing with typeof enables type-specific operations.',
        es: 'Un tipo unión A | B acepta cualquiera de los tipos; typeof permite operaciones específicas.',
      },
    },
  },
  {
    slug: 'ts-interface-9',
    title: 'Interface — Function Type',
    description: `## Function Types as Interface Members

Interfaces can describe **function signatures**. A \`Comparator<T>\` is a function \`(a: T, b: T) => number\`.

**Challenge:** Implement \`compareByAge\` matching the \`Comparator<Person>\` type.

\`\`\`ts
compareByAge({ name: 'a', age: 30 }, { name: 'b', age: 25 })  // → 5
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `interface Person { name: string; age: number }
type Comparator<T> = (a: T, b: T) => number

const compareByAge: Comparator<Person> = (a, b) => {
  // Return a.age - b.age
}`,
    solution: `interface Person { name: string; age: number }
type Comparator<T> = (a: T, b: T) => number

const compareByAge: Comparator<Person> = (a, b) => {
  return a.age - b.age
}`,
    tests: [
      { description: 'positive when a > b', assertion: "expect(compareByAge({name:'a', age:30}, {name:'b', age:25})).toBe(5)" },
      { description: 'negative when a < b', assertion: "expect(compareByAge({name:'a', age:20}, {name:'b', age:30})).toBe(-10)" },
      { description: 'zero when equal', assertion: "expect(compareByAge({name:'a', age:25}, {name:'b', age:25})).toBe(0)" },
      { description: 'sorts array correctly', assertion: "const people = [{name:'b',age:30},{name:'a',age:20}]; people.sort(compareByAge); expect(people[0].name).toBe('a')" },
      { description: 'is a function', assertion: "expect(typeof compareByAge).toBe('function')" },
    ],
    hints: ['Array.sort uses negative/zero/positive to determine order.'],
    tags: ['TypeScript', 'interface', 'function-type', 'beginner'],
    usageExample: {
      code: `interface Transformer { (input: string): string }
const upper: Transformer = s => s.toUpperCase()
upper('hello')   // → 'HELLO'`,
      explanation: {
        en: 'A call signature in an interface declares the shape of a function type with full TypeScript checking.',
        es: 'Una firma de llamada en una interfaz declara la forma de un tipo función con verificación TypeScript.',
      },
    },
  },
  {
    slug: 'ts-interface-10',
    title: 'Interface — Recursive Type',
    description: `## Recursive Interfaces: Tree Node

An interface can reference itself, enabling recursive data structures.

**Challenge:** Implement \`createTreeNode<T>(value, children?)\` returning a \`TreeNode<T>\`.

\`\`\`ts
createTreeNode(1)                // → { value: 1, children: [] }
createTreeNode(1, [createTreeNode(2)])  // → { value: 1, children: [{ value: 2, children: [] }] }
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `interface TreeNode<T> { value: T; children: TreeNode<T>[] }

function createTreeNode<T>(value: T, children: TreeNode<T>[] = []): TreeNode<T> {
  // Return a tree node
}`,
    solution: `interface TreeNode<T> { value: T; children: TreeNode<T>[] }

function createTreeNode<T>(value: T, children: TreeNode<T>[] = []): TreeNode<T> {
  return { value, children }
}`,
    tests: [
      { description: 'value is set', assertion: "expect(createTreeNode(1).value).toBe(1)" },
      { description: 'default children is empty', assertion: "expect(createTreeNode(1).children).toHaveLength(0)" },
      { description: 'child value accessible', assertion: "const child = createTreeNode(2); const root = createTreeNode(1, [child]); expect(root.children[0].value).toBe(2)" },
      { description: 'works with string value', assertion: "expect(createTreeNode('root').value).toBe('root')" },
      { description: 'empty children is array', assertion: "expect(createTreeNode(42, []).children).toEqual([])" },
    ],
    hints: ['Default parameter values are evaluated per call, so [] is safe here.'],
    tags: ['TypeScript', 'interface', 'recursive', 'intermediate'],
    usageExample: {
      code: `interface TreeNode<T> {
  value: T
  children: TreeNode<T>[]
}
const root: TreeNode<number> = { value: 1, children: [] }`,
      explanation: {
        en: 'A recursive interface refers to itself, enabling tree and nested data structures.',
        es: 'Una interfaz recursiva se refiere a sí misma, habilitando estructuras de datos anidadas como árboles.',
      },
    },
  },
  {
    slug: 'ts-interface-11',
    title: 'Interface — with Method',
    description: `## Interfaces with Methods

Interfaces can include **method signatures**. Implement an object that satisfies the interface.

**Challenge:** Implement \`createPrintable(label, value)\` returning an object with a \`toString()\` method.

\`\`\`ts
createPrintable('Name', 'Alice').toString()  // → 'Name: Alice'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `interface Printable { toString(): string }

function createPrintable(label: string, value: unknown): Printable {
  // Return object with toString returning "label: value"
}`,
    solution: `interface Printable { toString(): string }

function createPrintable(label: string, value: unknown): Printable {
  return { toString: () => \`\${label}: \${value}\` }
}`,
    tests: [
      { description: 'string label and value', assertion: "expect(createPrintable('Name', 'Alice').toString()).toBe('Name: Alice')" },
      { description: 'numeric value', assertion: "expect(createPrintable('Count', 42).toString()).toBe('Count: 42')" },
      { description: 'toString is a function', assertion: "expect(typeof createPrintable('x', 1).toString).toBe('function')" },
      { description: 'boolean value', assertion: "expect(createPrintable('Flag', true).toString()).toBe('Flag: true')" },
      { description: 'empty label', assertion: "expect(createPrintable('', 0).toString()).toBe(': 0')" },
    ],
    hints: ['Template literals automatically call toString() on values.'],
    tags: ['TypeScript', 'interface', 'method', 'beginner'],
    usageExample: {
      code: `interface Counter { count: number; increment(): void; decrement(): void }
const c = createCounter()
c.increment()
c.count   // → 1`,
      explanation: {
        en: 'Interface method signatures declare both the function shape and ensure objects provide implementations.',
        es: 'Las firmas de métodos en interfaces declaran la forma de la función y aseguran que los objetos la provean.',
      },
    },
  },
  {
    slug: 'ts-interface-12',
    title: 'Interface — Tuple Type',
    description: `## Tuple Types

A **tuple** is a fixed-length array where each position has a specific type.

**Challenge:** Implement \`createPair<T, U>(first, second)\` returning a \`[T, U]\` tuple.

\`\`\`ts
createPair(1, 'a')   // → [1, 'a']
createPair('x', true) // → ['x', true]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `type Pair<T, U> = [T, U]

function createPair<T, U>(first: T, second: U): Pair<T, U> {
  // Return a tuple
}`,
    solution: `type Pair<T, U> = [T, U]

function createPair<T, U>(first: T, second: U): Pair<T, U> {
  return [first, second]
}`,
    tests: [
      { description: 'correct shape', assertion: "expect(createPair(1, 'a')).toEqual([1, 'a'])" },
      { description: 'first element', assertion: "expect(createPair('x', true)[0]).toBe('x')" },
      { description: 'second element', assertion: "expect(createPair('x', true)[1]).toBe(true)" },
      { description: 'null/undefined pair', assertion: "expect(createPair(null, undefined)).toEqual([null, undefined])" },
      { description: 'has length 2', assertion: "expect(createPair(1, 2)).toHaveLength(2)" },
    ],
    hints: ['Tuples are just arrays. [first, second] is all you need.'],
    tags: ['TypeScript', 'interface', 'tuple', 'beginner'],
    usageExample: {
      code: `type Pair = [string, number]
const entry: Pair = ['age', 30]
entry[0]   // → 'age'  (string)
entry[1]   // → 30     (number)`,
      explanation: {
        en: 'Tuple types enforce fixed-length arrays with specific types at each position.',
        es: 'Los tipos tupla imponen arrays de longitud fija con tipos específicos en cada posición.',
      },
    },
  },
  {
    slug: 'ts-interface-13',
    title: 'Interface — Opaque/Brand Type',
    description: `## Brand / Opaque Types

A **branded type** adds a phantom property to distinguish types that share the same underlying representation.

**Challenge:** Implement \`createUserId(id)\` that casts a string to \`UserId\`.

\`\`\`ts
type UserId = string & { __brand: 'UserId' }
createUserId('user-1')  // → 'user-1' (as UserId)
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `type UserId = string & { __brand: 'UserId' }

function createUserId(id: string): UserId {
  // Cast id to UserId
}`,
    solution: `type UserId = string & { __brand: 'UserId' }

function createUserId(id: string): UserId {
  return id as UserId
}`,
    tests: [
      { description: 'returns the id string', assertion: "expect(createUserId('user-1')).toBe('user-1')" },
      { description: 'still a string type', assertion: "expect(typeof createUserId('abc')).toBe('string')" },
      { description: 'correct length', assertion: "expect(createUserId('123').length).toBe(3)" },
      { description: 'empty string', assertion: "expect(createUserId('')).toBe('')" },
      { description: 'uuid-like string', assertion: "expect(createUserId('uuid-xyz')).toBe('uuid-xyz')" },
    ],
    hints: ['At runtime, a branded type is just the underlying primitive. The brand only exists at the type level.'],
    tags: ['TypeScript', 'interface', 'brand', 'intermediate'],
    usageExample: {
      code: `type UserId = string & { readonly __brand: 'UserId' }
function createUserId(id: string): UserId {
  return id as UserId
}`,
      explanation: {
        en: 'A branded type uses an intersection with a phantom property to distinguish nominally equal types.',
        es: 'Un tipo marcado usa una intersección con una propiedad fantasma para distinguir tipos nominalmente iguales.',
      },
    },
  },
  {
    slug: 'ts-interface-14',
    title: 'Interface — Readonly Array',
    description: `## ReadonlyArray<T>

**Challenge:** Implement \`createReadonlyArray<T>(items)\` returning a frozen copy of the array.

\`\`\`ts
const arr = createReadonlyArray([1, 2, 3])
Object.isFrozen(arr)  // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `function createReadonlyArray<T>(items: T[]): ReadonlyArray<T> {
  // Return a frozen copy
}`,
    solution: `function createReadonlyArray<T>(items: T[]): ReadonlyArray<T> {
  return Object.freeze([...items])
}`,
    tests: [
      { description: 'contains items', assertion: "expect(createReadonlyArray([1,2,3])).toEqual([1,2,3])" },
      { description: 'correct length', assertion: "expect(createReadonlyArray(['a','b'])).toHaveLength(2)" },
      { description: 'empty array', assertion: "expect(createReadonlyArray([])).toHaveLength(0)" },
      { description: 'first element', assertion: "expect(createReadonlyArray([1,2,3])[0]).toBe(1)" },
      { description: 'is frozen', assertion: "expect(Object.isFrozen(createReadonlyArray([1]))).toBeTruthy()" },
    ],
    hints: ['Spread the array first so the original is not frozen.'],
    tags: ['TypeScript', 'interface', 'readonly-array', 'beginner'],
    usageExample: {
      code: `interface Config { readonly options: ReadonlyArray<string> }
const c: Config = { options: ['a', 'b', 'c'] }
// c.options.push('d')  → Error: read-only array`,
      explanation: {
        en: 'ReadonlyArray<T> prevents mutation methods like push and splice on array-type properties.',
        es: 'ReadonlyArray<T> impide métodos de mutación como push y splice en propiedades de tipo array.',
      },
    },
  },
  {
    slug: 'ts-interface-15',
    title: 'Interface — Optional Chaining Display Name',
    description: `## Optional Properties & Nullish Coalescing

**Challenge:** Implement \`getUserDisplayName(user)\` following this priority:
1. \`nickname\` if present
2. \`firstName + ' ' + lastName\` if \`lastName\` exists
3. \`firstName\` alone

\`\`\`ts
getUserDisplayName({ firstName: 'Alice', lastName: 'Smith' })  // → 'Alice Smith'
getUserDisplayName({ firstName: 'Bob' })                       // → 'Bob'
getUserDisplayName({ firstName: 'Carol', nickname: 'Caz' })   // → 'Caz'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `interface UserProfile { firstName: string; lastName?: string; nickname?: string }

function getUserDisplayName(user: UserProfile): string {
  // Use ?? and conditional logic
}`,
    solution: `interface UserProfile { firstName: string; lastName?: string; nickname?: string }

function getUserDisplayName(user: UserProfile): string {
  return user.nickname ?? (user.lastName ? \`\${user.firstName} \${user.lastName}\` : user.firstName)
}`,
    tests: [
      { description: 'first + last name', assertion: "expect(getUserDisplayName({firstName:'Alice', lastName:'Smith'})).toBe('Alice Smith')" },
      { description: 'first name only', assertion: "expect(getUserDisplayName({firstName:'Bob'})).toBe('Bob')" },
      { description: 'nickname takes priority', assertion: "expect(getUserDisplayName({firstName:'Carol', nickname:'Caz'})).toBe('Caz')" },
      { description: 'nickname beats full name', assertion: "expect(getUserDisplayName({firstName:'Dave', lastName:'Brown', nickname:'D'})).toBe('D')" },
      { description: 'first + last when no nickname', assertion: "expect(getUserDisplayName({firstName:'Eve', lastName:'Jones'})).toBe('Eve Jones')" },
    ],
    hints: ['?? only falls back on null/undefined, not empty string.'],
    tags: ['TypeScript', 'interface', 'optional-chaining', 'nullish-coalescing', 'intermediate'],
    usageExample: {
      code: `interface Profile { displayName?: string; username: string }
function getName(p: Profile): string {
  return p.displayName ?? p.username
}`,
      explanation: {
        en: 'The nullish coalescing operator (??) provides a fallback when an optional property is undefined.',
        es: 'El operador nullish coalescing (??) proporciona un valor alternativo cuando una propiedad opcional es undefined.',
      },
    },
  },
  {
    slug: 'ts-interface-16',
    title: 'Interface — Structural Typing Guard',
    description: `## Structural Typing at Runtime

TypeScript uses structural typing — but at **runtime**, you must check the shape manually.

**Challenge:** Implement \`isConformingShape(value)\` returning \`true\` if \`value\` has a \`name\` property of type \`string\`.

\`\`\`ts
isConformingShape({ name: 'Alice' })  // → true
isConformingShape({ name: 42 })       // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `interface HasName { name: string }

function isConformingShape(value: unknown): value is HasName {
  // Check object, not null, has name property, name is string
}`,
    solution: `interface HasName { name: string }

function isConformingShape(value: unknown): value is HasName {
  return (
    typeof value === 'object' &&
    value !== null &&
    'name' in value &&
    typeof (value as Record<string, unknown>).name === 'string'
  )
}`,
    tests: [
      { description: 'valid HasName', assertion: "expect(isConformingShape({name: 'Alice'})).toBeTruthy()" },
      { description: 'name must be string', assertion: "expect(isConformingShape({name: 42})).toBeFalsy()" },
      { description: 'missing name', assertion: "expect(isConformingShape({age: 30})).toBeFalsy()" },
      { description: 'null fails', assertion: "expect(isConformingShape(null)).toBeFalsy()" },
      { description: 'extra props OK', assertion: "expect(isConformingShape({name: '', age: 30})).toBeTruthy()" },
    ],
    hints: ['Check object, not null, then property existence, then property type.'],
    tags: ['TypeScript', 'interface', 'structural-typing', 'runtime-guard', 'intermediate'],
    usageExample: {
      code: `interface Serializable { serialize(): string }
function isSerializable(x: unknown): x is Serializable {
  return typeof x === 'object' && x !== null &&
    typeof (x as any).serialize === 'function'
}`,
      explanation: {
        en: 'TypeScript\'s structural typing means any object with the right methods satisfies an interface at runtime.',
        es: 'El tipado estructural de TypeScript significa que cualquier objeto con los métodos correctos satisface una interfaz.',
      },
    },
  },
  {
    slug: 'ts-interface-17',
    title: 'Interface — Implement a Stack',
    description: `## Interfaces as Contracts: Stack

**Challenge:** Implement \`createStack<T>()\` returning an object satisfying the \`Stack<T>\` interface.

\`\`\`ts
const s = createStack<number>()
s.push(1); s.push(2)
s.pop()   // → 2
s.peek()  // → 1
s.size    // → 1
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `interface Stack<T> {
  push(item: T): void
  pop(): T | undefined
  peek(): T | undefined
  size: number
}

function createStack<T>(): Stack<T> {
  // Implement using a closure over an array
}`,
    solution: `interface Stack<T> {
  push(item: T): void
  pop(): T | undefined
  peek(): T | undefined
  size: number
}

function createStack<T>(): Stack<T> {
  const items: T[] = []
  return {
    push: (item: T) => { items.push(item) },
    pop: () => items.pop(),
    peek: () => items[items.length - 1],
    get size() { return items.length }
  }
}`,
    tests: [
      { description: 'size after two pushes', assertion: "const s = createStack(); s.push(1); s.push(2); expect(s.size).toBe(2)" },
      { description: 'pop returns last', assertion: "const s = createStack(); s.push('a'); expect(s.pop()).toBe('a')" },
      { description: 'peek does not remove', assertion: "const s = createStack(); s.push(10); expect(s.peek()).toBe(10); expect(s.size).toBe(1)" },
      { description: 'pop empty returns undefined', assertion: "const s = createStack(); expect(s.pop()).toBeUndefined()" },
      { description: 'size decreases on pop', assertion: "const s = createStack(); s.push(1); s.push(2); s.pop(); expect(s.size).toBe(1)" },
    ],
    hints: ['Use a getter for size so it reflects the current array length.'],
    tags: ['TypeScript', 'interface', 'stack', 'closure', 'intermediate'],
    usageExample: {
      code: `function createStack<T>() {
  const items: T[] = []
  return {
    push: (x: T) => items.push(x),
    pop: () => items.pop(),
  }
}`,
      explanation: {
        en: 'Closures can implement interfaces without classes — returning an object with typed method signatures.',
        es: 'Las closures pueden implementar interfaces sin clases, devolviendo un objeto con firmas de métodos tipadas.',
      },
    },
  },
  {
    slug: 'ts-interface-18',
    title: 'Interface — Function as Argument',
    description: `## Function Types in Signatures

**Challenge:** Implement \`applyCallback<T, U>(value, callback)\` that applies \`callback\` to \`value\` and returns the result.

\`\`\`ts
applyCallback(5, x => x * 2)            // → 10
applyCallback('hello', s => s.length)  // → 5
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypeScript',
    initialCode: `type Transform<T, U> = (value: T) => U

function applyCallback<T, U>(value: T, callback: Transform<T, U>): U {
  // Call callback with value
}`,
    solution: `type Transform<T, U> = (value: T) => U

function applyCallback<T, U>(value: T, callback: Transform<T, U>): U {
  return callback(value)
}`,
    tests: [
      { description: 'doubles number', assertion: "expect(applyCallback(5, x => x * 2)).toBe(10)" },
      { description: 'uppercases string', assertion: "expect(applyCallback('hello', s => s.toUpperCase())).toBe('HELLO')" },
      { description: 'gets array length', assertion: "expect(applyCallback([1,2,3], arr => arr.length)).toBe(3)" },
      { description: 'negates boolean', assertion: "expect(applyCallback(true, b => !b)).toBe(false)" },
      { description: 'trims string', assertion: "expect(applyCallback('  ', s => s.trim())).toBe('')" },
    ],
    hints: ['Just call callback(value).'],
    tags: ['TypeScript', 'interface', 'function-type', 'beginner'],
    usageExample: {
      code: `interface Predicate<T> { (x: T): boolean }
function keepIf<T>(arr: T[], pred: Predicate<T>): T[] {
  return arr.filter(pred)
}`,
      explanation: {
        en: 'Passing a typed function interface as an argument enforces the callback signature at compile time.',
        es: 'Pasar una interfaz de función tipada como argumento impone la firma del callback en tiempo de compilación.',
      },
    },
  },
  {
    slug: 'ts-interface-19',
    title: 'Interface — Exhaustive Switch',
    description: `## Exhaustive Unions with switch

A **switch** over a discriminated union's \`type\` field is exhaustive when all cases are handled.

**Challenge:** Implement \`processStatus(status)\` for all three union variants.

\`\`\`ts
processStatus({ type: 'ok', value: 'data' })           // → 'OK: data'
processStatus({ type: 'error', message: 'not found' }) // → 'Error: not found'
processStatus({ type: 'pending' })                     // → 'Pending'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypeScript',
    initialCode: `type Status =
  | { type: 'ok'; value: string }
  | { type: 'error'; message: string }
  | { type: 'pending' }

function processStatus(status: Status): string {
  // switch on status.type
}`,
    solution: `type Status =
  | { type: 'ok'; value: string }
  | { type: 'error'; message: string }
  | { type: 'pending' }

function processStatus(status: Status): string {
  switch (status.type) {
    case 'ok': return \`OK: \${status.value}\`
    case 'error': return \`Error: \${status.message}\`
    case 'pending': return 'Pending'
  }
}`,
    tests: [
      { description: 'ok with value', assertion: "expect(processStatus({type:'ok', value:'data'})).toBe('OK: data')" },
      { description: 'error with message', assertion: "expect(processStatus({type:'error', message:'not found'})).toBe('Error: not found')" },
      { description: 'pending', assertion: "expect(processStatus({type:'pending'})).toBe('Pending')" },
      { description: 'ok with empty value', assertion: "expect(processStatus({type:'ok', value:''})).toBe('OK: ')" },
      { description: 'error with empty message', assertion: "expect(processStatus({type:'error', message:''})).toBe('Error: ')" },
    ],
    hints: ['TypeScript narrows status inside each case branch.'],
    tags: ['TypeScript', 'interface', 'discriminated-union', 'switch', 'intermediate'],
    usageExample: {
      code: `type Dir = 'N' | 'S' | 'E' | 'W'
// switch with default assigned to never
// will cause a compile error if any member is unhandled`,
      explanation: {
        en: 'An exhaustive switch assigns the default to never, causing a compile error if a union member is unhandled.',
        es: 'Un switch exhaustivo asigna el default a never, causando un error de compilación si falta un miembro.',
      },
    },
  },
  {
    slug: 'ts-interface-20',
    title: 'Interface — Generic Container',
    description: `## Fluent Generic Interface: Container<T>

**Challenge:** Implement \`createContainer<T>(value)\` returning a \`Container<T>\` with a \`map\` method for transformation.

\`\`\`ts
createContainer(5).map(x => x * 2).value   // → 10
createContainer('hi').map(s => s.length).value // → 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'TypeScript',
    initialCode: `interface Container<T> {
  value: T
  map: <U>(fn: (v: T) => U) => Container<U>
}

function createContainer<T>(value: T): Container<T> {
  // Return an object with value and map
}`,
    solution: `interface Container<T> {
  value: T
  map: <U>(fn: (v: T) => U) => Container<U>
}

function createContainer<T>(value: T): Container<T> {
  return {
    value,
    map: <U>(fn: (v: T) => U): Container<U> => createContainer(fn(value))
  }
}`,
    tests: [
      { description: 'holds value', assertion: "expect(createContainer(42).value).toBe(42)" },
      { description: 'maps number', assertion: "expect(createContainer(5).map(x => x * 2).value).toBe(10)" },
      { description: 'maps string', assertion: "expect(createContainer('hello').map(s => s.toUpperCase()).value).toBe('HELLO')" },
      { description: 'chains maps', assertion: "expect(createContainer(1).map(x => x + 1).map(x => x * 3).value).toBe(6)" },
      { description: 'holds any type', assertion: "expect(createContainer('hi').value).toBe('hi')" },
    ],
    hints: ['map should call createContainer recursively to return a new Container.'],
    tags: ['TypeScript', 'interface', 'generic', 'functor', 'advanced'],
    usageExample: {
      code: `interface Container<T> { map<U>(f: (x: T) => U): Container<U> }
const box: Container<number> = createBox(5)
box.map(x => x.toString())   // Container<string>`,
      explanation: {
        en: 'A generic Container interface with a map method models the Functor pattern from functional programming.',
        es: 'Una interfaz genérica Container con un método map modela el patrón Functor de la programación funcional.',
      },
    },
  },
]
