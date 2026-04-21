import type { Exercise } from '@/shared/types/exercises'

export const closuresFactoryExercises: Exercise[] = [
  {
    slug: 'closures-factory-1',
    title: 'Closures — Add factory',
    description: `## Function Factory for Addition

Create a factory function that produces functions with preset behavior.

**Challenge:** Create a \`makeAdder(n)\` function that returns a function. The returned function takes a value and returns the sum of the preset value and the argument.

Example:
\`\`\`javascript
const add5 = makeAdder(5)
add5(3)   // 8
add5(10)  // 15
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Closures',
    initialCode: `function makeAdder(n) {
  // Your code here
}

const add5 = makeAdder(5)
add5(3)`,
    solution: `function makeAdder(n) {
  return x => x + n
}

const add5 = makeAdder(5)
add5(3)`,
    tests: [
      { description: 'makeAdder(5)(3) is 8', assertion: "expect(makeAdder(5)(3)).toBe(8)" },
      { description: 'makeAdder(0) returns identity function', assertion: "expect(makeAdder(0)(42)).toBe(42)" },
      { description: 'makeAdder works with negative numbers', assertion: "expect(makeAdder(-10)(25)).toBe(15)" },
      { description: 'multiple adders are independent', assertion: "const add10=makeAdder(10), add5=makeAdder(5); expect(add10(5)).toBe(15); expect(add5(5)).toBe(10)" },
      { description: 'works with decimal numbers', assertion: "expect(makeAdder(2.5)(3.5)).toBe(6)" },
    ],
    hints: ['Return a function that adds the captured value to its argument', 'The factory captures the preset value in closure'],
    tags: ['closures', 'factory', 'higher-order-functions', 'adder'],
    usageExample: {
      code: `function makeAdder(n) {
  return x => x + n
}
const add5 = makeAdder(5)
add5(3)   // → 8
add5(10)  // → 15`,
      explanation: {
        en: 'Factory functions use closures to capture a preset value, producing specialized functions without repeating configuration.',
        es: 'Las funciones de fábrica usan closures para capturar un valor preestablecido, produciendo funciones especializadas sin repetir configuración.',
      },
    },
  },
  {
    slug: 'closures-factory-2',
    title: 'Closures — Multiply factory',
    description: `## Function Factory for Multiplication

Create a factory function that produces multiplication functions.

**Challenge:** Create a \`makeMultiplier(n)\` function that returns a function. The returned function takes a value and returns the product of the preset value and the argument.

Example:
\`\`\`javascript
const mult4 = makeMultiplier(4)
mult4(7)  // 28
mult4(3)  // 12
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Closures',
    initialCode: `function makeMultiplier(n) {
  // Your code here
}

const mult4 = makeMultiplier(4)
mult4(7)`,
    solution: `function makeMultiplier(n) {
  return x => x * n
}

const mult4 = makeMultiplier(4)
mult4(7)`,
    tests: [
      { description: 'makeMultiplier(4)(7) is 28', assertion: "expect(makeMultiplier(4)(7)).toBe(28)" },
      { description: 'makeMultiplier(1) returns identity', assertion: "expect(makeMultiplier(1)(42)).toBe(42)" },
      { description: 'makeMultiplier(0) always returns 0', assertion: "expect(makeMultiplier(0)(999)).toBe(0)" },
      { description: 'works with negative multipliers', assertion: "expect(makeMultiplier(-3)(4)).toBe(-12)" },
      { description: 'multiple multipliers are independent', assertion: "const m2=makeMultiplier(2),m3=makeMultiplier(3); expect(m2(5)).toBe(10); expect(m3(5)).toBe(15)" },
    ],
    hints: ['Return a function that multiplies the captured value by its argument', 'Use the * operator for multiplication'],
    tags: ['closures', 'factory', 'higher-order-functions', 'multiplier'],
    usageExample: {
      code: `function makeMultiplier(n) {
  return x => x * n
}
const double = makeMultiplier(2)
const triple = makeMultiplier(3)
double(5)  // → 10
triple(5)  // → 15`,
      explanation: {
        en: 'Each call to the factory creates an independent closure capturing its own multiplier, so different instances never interfere with each other.',
        es: 'Cada llamada a la fábrica crea un closure independiente que captura su propio multiplicador, por lo que distintas instancias nunca interfieren entre sí.',
      },
    },
  },
  {
    slug: 'closures-factory-3',
    title: 'Closures — Greeter factory',
    description: `## String Concatenation Factory

Create a factory that produces greeting functions with a custom prefix.

**Challenge:** Create a \`makeGreeter(prefix)\` function that returns a function. The returned function takes a name and returns a greeting string in the format \`"{prefix} {name}"\`.

Example:
\`\`\`javascript
const greetHello = makeGreeter('Hello')
greetHello('World')   // 'Hello World'
greetHello('Alice')   // 'Hello Alice'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Closures',
    initialCode: `function makeGreeter(prefix) {
  // Your code here
}

const greetHello = makeGreeter('Hello')
greetHello('World')`,
    solution: `function makeGreeter(prefix) {
  return name => \`\${prefix} \${name}\`
}

const greetHello = makeGreeter('Hello')
greetHello('World')`,
    tests: [
      { description: 'greeter with Hello prefix', assertion: "expect(makeGreeter('Hello')('World')).toBe('Hello World')" },
      { description: 'greeter with Hey prefix', assertion: "expect(makeGreeter('Hey')('Alice')).toBe('Hey Alice')" },
      { description: 'greeter with empty prefix', assertion: "expect(makeGreeter('')('Bob')).toBe(' Bob')" },
      { description: 'multiple greeters with different prefixes', assertion: "const g1=makeGreeter('Hi'),g2=makeGreeter('Goodbye'); expect(g1('John')).toBe('Hi John'); expect(g2('John')).toBe('Goodbye John')" },
      { description: 'works with special characters in name', assertion: "expect(makeGreeter('Welcome')(\"O'Brien\")).toBe(\"Welcome O'Brien\")" },
    ],
    hints: ['Use template literals to construct the greeting string', 'Capture the prefix in closure'],
    tags: ['closures', 'factory', 'string-formatting', 'greeter'],
    usageExample: {
      code: `function makeGreeter(prefix) {
  return name => \`\${prefix} \${name}\`
}
const greetHi = makeGreeter('Hi')
greetHi('Alice')  // → 'Hi Alice'
greetHi('Bob')    // → 'Hi Bob'`,
      explanation: {
        en: 'The greeter factory closes over the prefix string, so each produced function always prepends the same greeting without needing extra parameters.',
        es: 'La fábrica de saludos cierra sobre la cadena de prefijo, por lo que cada función producida siempre antepone el mismo saludo sin necesitar parámetros adicionales.',
      },
    },
  },
  {
    slug: 'closures-factory-4',
    title: 'Closures — Range validator factory',
    description: `## Range Validation Factory

Create a factory that produces validator functions for checking if values fall within a range.

**Challenge:** Create a \`makeValidator(min, max)\` function that returns a function. The returned function takes a value and returns \`true\` if the value is between \`min\` and \`max\` (inclusive), otherwise \`false\`.

Example:
\`\`\`javascript
const isInRange = makeValidator(10, 20)
isInRange(15)  // true
isInRange(5)   // false
isInRange(25)  // false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Closures',
    initialCode: `function makeValidator(min, max) {
  // Your code here
}

const isInRange = makeValidator(10, 20)
isInRange(15)`,
    solution: `function makeValidator(min, max) {
  return value => value >= min && value <= max
}

const isInRange = makeValidator(10, 20)
isInRange(15)`,
    tests: [
      { description: 'value in range returns true', assertion: "const v=makeValidator(10,20); expect(v(15)).toBe(true)" },
      { description: 'value below range returns false', assertion: "const v=makeValidator(10,20); expect(v(5)).toBe(false)" },
      { description: 'value above range returns false', assertion: "const v=makeValidator(10,20); expect(v(25)).toBe(false)" },
      { description: 'boundary values are included', assertion: "const v=makeValidator(10,20); expect(v(10)).toBe(true); expect(v(20)).toBe(true)" },
      { description: 'multiple validators are independent', assertion: "const v1=makeValidator(0,10),v2=makeValidator(100,200); expect(v1(5)).toBe(true); expect(v2(150)).toBe(true); expect(v1(150)).toBe(false)" },
    ],
    hints: ['Use comparison operators to check if value is in range', 'Boundary values should be included in the range'],
    tags: ['closures', 'factory', 'validation', 'range-checking'],
    usageExample: {
      code: `function makeValidator(min, max) {
  return value => value >= min && value <= max
}
const isAdult = makeValidator(18, 120)
isAdult(25)  // → true
isAdult(15)  // → false`,
      explanation: {
        en: 'Validator factories close over min and max bounds, allowing reusable range-checking functions to be created with any boundary values.',
        es: 'Las fábricas de validadores cierran sobre los límites mínimo y máximo, permitiendo crear funciones de comprobación de rango reutilizables con cualquier valor de límite.',
      },
    },
  },
  {
    slug: 'closures-factory-5',
    title: 'Closures — Power function factory (advanced)',
    description: `## Exponentiation Factory with Composition

Create a factory for exponentiation and combine factories to create more complex functions.

**Challenge:** Create a \`makePower(exp)\` function that returns a function. The returned function takes a base and returns \`base ** exp\`.

Then, create a \`makeCompose(fns)\` function (advanced) that takes an array of functions and returns a new function. When the new function is called with an argument, it passes the argument through each function in sequence, using the output of one as the input to the next.

Example:
\`\`\`javascript
const square = makePower(2)
square(5)     // 25

const cube = makePower(3)
cube(2)       // 8

const addTwo = x => x + 2
const composed = makeCompose([square, addTwo])
composed(3)   // square(3) = 9, then 9 + 2 = 11
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Closures',
    initialCode: `function makePower(exp) {
  // Your code here
}

function makeCompose(fns) {
  // Your code here
}

const square = makePower(2)
square(5)`,
    solution: `function makePower(exp) {
  return base => base ** exp
}

function makeCompose(fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value)
}

const square = makePower(2)
square(5)`,
    tests: [
      { description: 'makePower(2) squares numbers', assertion: "const sq=makePower(2); expect(sq(5)).toBe(25)" },
      { description: 'makePower(3) cubes numbers', assertion: "const cb=makePower(3); expect(cb(2)).toBe(8)" },
      { description: 'makePower(0) returns 1', assertion: "const p0=makePower(0); expect(p0(100)).toBe(1)" },
      { description: 'makeCompose applies functions in sequence', assertion: "const sq=makePower(2); const add2=(x)=>x+2; const comp=makeCompose([sq,add2]); expect(comp(3)).toBe(11)" },
      { description: 'makeCompose with multiple functions', assertion: "const add1=(x)=>x+1; const mult2=(x)=>x*2; const comp=makeCompose([add1,mult2,add1]); expect(comp(5)).toBe(13)" },
    ],
    hints: ['makePower uses the ** exponentiation operator', 'makeCompose uses reduce to chain function calls', 'Each function\'s output becomes the next function\'s input'],
    tags: ['closures', 'factory', 'composition', 'function-chaining', 'advanced'],
    usageExample: {
      code: `function makePower(exp) {
  return base => base ** exp
}
const square = makePower(2)
const cube = makePower(3)
square(4)  // → 16
cube(2)    // → 8`,
      explanation: {
        en: 'Closures let the power factory capture the exponent, producing named math functions like square and cube without any duplicate logic.',
        es: 'Los closures permiten que la fábrica de potencias capture el exponente, produciendo funciones matemáticas nombradas como cuadrado y cubo sin lógica duplicada.',
      },
    },
  },
]
