import type { Exercise } from '@/shared/types/exercises'

export const dpFactoryExercises: Exercise[] = [
  {
    slug: 'dp-factory-1',
    title: 'Factory — Basic object creation',
    description: `## Factory Pattern — Basic Object Creation

The Factory pattern encapsulates object creation. Instead of using \`new\`, you call a factory function that returns the object.

**Challenge:** Implement a \`createUser(name, role)\` factory function that returns a user object with \`name\`, \`role\`, and \`type: 'user'\` properties.

Example:
\`\`\`javascript
const user = createUser('Alice', 'admin')
user.type // 'user'
user.name // 'Alice'
user.role // 'admin'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'DesignPatterns',
    initialCode: `function createUser(name, role) {
  // Your code here
}

const user = createUser('Alice', 'admin')`,
    solution: `function createUser(name, role) {
  return { type: 'user', name, role }
}

const user = createUser('Alice', 'admin')`,
    tests: [
      { description: 'returns object with type user', assertion: "function createUser(n,r){return{type:'user',name:n,role:r}} const u=createUser('A','a'); expect(u.type).toBe('user')" },
      { description: 'returns object with name property', assertion: "function createUser(n,r){return{type:'user',name:n,role:r}} const u=createUser('Bob','x'); expect(u.name).toBe('Bob')" },
      { description: 'returns object with role property', assertion: "function createUser(n,r){return{type:'user',name:n,role:r}} const u=createUser('x','admin'); expect(u.role).toBe('admin')" },
      { description: 'returned object is an object', assertion: "function createUser(n,r){return{type:'user',name:n,role:r}} const u=createUser('A','x'); expect(typeof u).toBe('object')" },
      { description: 'multiple calls create different objects', assertion: "function createUser(n,r){return{type:'user',name:n,role:r}} const u1=createUser('A','x'),u2=createUser('B','y'); expect(u1).not.toBe(u2)" },
    ],
    hints: ['Return an object literal with all required properties', 'Use the parameters to populate the object', 'Each call to the factory creates a new object'],
    tags: ['factory', 'design-pattern', 'object-creation', 'encapsulation'],
  },
  {
    slug: 'dp-factory-2',
    title: 'Factory — Creating different types',
    description: `## Factory Pattern — Creating Different Types

A factory can create different types of objects based on input parameters.

**Challenge:** Implement a \`createVehicle(type)\` factory that returns:
- \`{ type: 'car', wheels: 4 }\` when type is 'car'
- \`{ type: 'bike', wheels: 2 }\` when type is 'bike'
- \`{ type: 'truck', wheels: 6 }\` when type is 'truck'

Example:
\`\`\`javascript
const car = createVehicle('car')
car.wheels // 4
const bike = createVehicle('bike')
bike.wheels // 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'DesignPatterns',
    initialCode: `function createVehicle(type) {
  // Your code here
}

const car = createVehicle('car')
const bike = createVehicle('bike')`,
    solution: `function createVehicle(type) {
  if (type === 'car') return { type: 'car', wheels: 4 }
  if (type === 'bike') return { type: 'bike', wheels: 2 }
  if (type === 'truck') return { type: 'truck', wheels: 6 }
}

const car = createVehicle('car')
const bike = createVehicle('bike')`,
    tests: [
      { description: 'car has 4 wheels', assertion: "function createVehicle(t){if(t==='car')return{type:'car',wheels:4};if(t==='bike')return{type:'bike',wheels:2};if(t==='truck')return{type:'truck',wheels:6}} expect(createVehicle('car').wheels).toBe(4)" },
      { description: 'bike has 2 wheels', assertion: "function createVehicle(t){if(t==='car')return{type:'car',wheels:4};if(t==='bike')return{type:'bike',wheels:2};if(t==='truck')return{type:'truck',wheels:6}} expect(createVehicle('bike').wheels).toBe(2)" },
      { description: 'truck has 6 wheels', assertion: "function createVehicle(t){if(t==='car')return{type:'car',wheels:4};if(t==='bike')return{type:'bike',wheels:2};if(t==='truck')return{type:'truck',wheels:6}} expect(createVehicle('truck').wheels).toBe(6)" },
      { description: 'returned object has type property', assertion: "function createVehicle(t){if(t==='car')return{type:'car',wheels:4};if(t==='bike')return{type:'bike',wheels:2};if(t==='truck')return{type:'truck',wheels:6}} expect(createVehicle('car').type).toBe('car')" },
      { description: 'factory creates correct type for all vehicles', assertion: "function createVehicle(t){if(t==='car')return{type:'car',wheels:4};if(t==='bike')return{type:'bike',wheels:2};if(t==='truck')return{type:'truck',wheels:6}} const c=createVehicle('car'),b=createVehicle('bike'),tr=createVehicle('truck'); expect(c.wheels).toBe(4); expect(b.wheels).toBe(2); expect(tr.wheels).toBe(6)" },
    ],
    hints: ['Use if statements or switch to differentiate types', 'Return appropriate object for each type', 'Include both type and wheels properties'],
    tags: ['factory', 'type-creation', 'design-pattern', 'polymorphism'],
  },
  {
    slug: 'dp-factory-3',
    title: 'Factory — Objects with methods',
    description: `## Factory Pattern — Creating Objects with Methods

Factory-created objects can have methods, not just properties.

**Challenge:** Implement a \`createButton(label)\` factory that returns an object with:
- \`label\` property
- \`click()\` method that returns 'button clicked'
- \`getText()\` method that returns the label

Example:
\`\`\`javascript
const btn = createButton('Submit')
btn.label // 'Submit'
btn.click() // 'button clicked'
btn.getText() // 'Submit'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'DesignPatterns',
    initialCode: `function createButton(label) {
  // Your code here
}

const btn = createButton('Submit')
btn.click()`,
    solution: `function createButton(label) {
  return {
    label,
    click() {
      return 'button clicked'
    },
    getText() {
      return this.label
    }
  }
}

const btn = createButton('Submit')
btn.click()`,
    tests: [
      { description: 'object has label property', assertion: "function createButton(l){return{label:l,click(){return'button clicked'},getText(){return this.label}}} expect(createButton('Ok').label).toBe('Ok')" },
      { description: 'click method returns correct string', assertion: "function createButton(l){return{label:l,click(){return'button clicked'},getText(){return this.label}}} expect(createButton('X').click()).toBe('button clicked')" },
      { description: 'getText returns label', assertion: "function createButton(l){return{label:l,click(){return'button clicked'},getText(){return this.label}}} expect(createButton('Submit').getText()).toBe('Submit')" },
      { description: 'click method always returns same string', assertion: "function createButton(l){return{label:l,click(){return'button clicked'},getText(){return this.label}}} const b=createButton('Y'); expect(b.click()).toBe('button clicked'); expect(b.click()).toBe('button clicked')" },
      { description: 'getText uses the label from factory parameter', assertion: "function createButton(l){return{label:l,click(){return'button clicked'},getText(){return this.label}}} const b1=createButton('A'),b2=createButton('B'); expect(b1.getText()).toBe('A'); expect(b2.getText()).toBe('B')" },
    ],
    hints: ['Return object with methods', 'Use this to access the label in methods', 'Each factory call creates a new object with its own label'],
    tags: ['factory', 'methods', 'design-pattern', 'encapsulation'],
  },
  {
    slug: 'dp-factory-4',
    title: 'Factory — Hiding constructor complexity',
    description: `## Factory Pattern — Hiding Complexity

The factory can hide complex initialization logic from the caller.

**Challenge:** Implement a \`createConnection(host, port)\` factory that returns a connection object with:
- \`host\` and \`port\` properties
- \`isConnected\` property (initially false)
- \`connect()\` method that sets \`isConnected\` to true
- \`disconnect()\` method that sets \`isConnected\` to false

Example:
\`\`\`javascript
const conn = createConnection('localhost', 5432)
conn.isConnected // false
conn.connect()
conn.isConnected // true
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'DesignPatterns',
    initialCode: `function createConnection(host, port) {
  // Your code here
}

const conn = createConnection('localhost', 5432)
conn.connect()`,
    solution: `function createConnection(host, port) {
  return {
    host,
    port,
    isConnected: false,
    connect() {
      this.isConnected = true
    },
    disconnect() {
      this.isConnected = false
    }
  }
}

const conn = createConnection('localhost', 5432)
conn.connect()`,
    tests: [
      { description: 'connection starts as not connected', assertion: "function createConnection(h,p){return{host:h,port:p,isConnected:false,connect(){this.isConnected=true},disconnect(){this.isConnected=false}}} expect(createConnection('x',1).isConnected).toBeFalsy()" },
      { description: 'connect sets isConnected to true', assertion: "function createConnection(h,p){return{host:h,port:p,isConnected:false,connect(){this.isConnected=true},disconnect(){this.isConnected=false}}} const c=createConnection('x',1); c.connect(); expect(c.isConnected).toBeTruthy()" },
      { description: 'disconnect sets isConnected to false', assertion: "function createConnection(h,p){return{host:h,port:p,isConnected:false,connect(){this.isConnected=true},disconnect(){this.isConnected=false}}} const c=createConnection('x',1); c.connect(); c.disconnect(); expect(c.isConnected).toBeFalsy()" },
      { description: 'host and port are stored correctly', assertion: "function createConnection(h,p){return{host:h,port:p,isConnected:false,connect(){this.isConnected=true},disconnect(){this.isConnected=false}}} const c=createConnection('localhost',5432); expect(c.host).toBe('localhost'); expect(c.port).toBe(5432)" },
      { description: 'multiple connect/disconnect cycles work', assertion: "function createConnection(h,p){return{host:h,port:p,isConnected:false,connect(){this.isConnected=true},disconnect(){this.isConnected=false}}} const c=createConnection('x',1); c.connect(); expect(c.isConnected).toBeTruthy(); c.disconnect(); expect(c.isConnected).toBeFalsy(); c.connect(); expect(c.isConnected).toBeTruthy()" },
    ],
    hints: ['Initialize isConnected to false', 'Methods modify the isConnected property', 'Store host and port parameters'],
    tags: ['factory', 'state-management', 'design-pattern', 'initialization'],
  },
  {
    slug: 'dp-factory-5',
    title: 'Factory — Registry pattern',
    description: `## Factory Pattern — Registry/Type Map

A factory can use a registry (map of type names to constructors) to manage object creation.

**Challenge:** Implement \`createShape(type)\` factory with a registry that creates:
- \`{ type: 'circle', area: (r) => Math.PI * r * r }\` for 'circle'
- \`{ type: 'square', area: (s) => s * s }\` for 'square'

Use a registry object to store the templates.

Example:
\`\`\`javascript
const circle = createShape('circle')
circle.area(2) // ~12.566...
const square = createShape('square')
square.area(4) // 16
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'DesignPatterns',
    initialCode: `function createShape(type) {
  // Your code here
}

const circle = createShape('circle')
const square = createShape('square')`,
    solution: `function createShape(type) {
  const registry = {
    circle: { type: 'circle', area: (r) => Math.PI * r * r },
    square: { type: 'square', area: (s) => s * s }
  }
  return registry[type]
}

const circle = createShape('circle')
const square = createShape('square')`,
    tests: [
      { description: 'circle has correct type', assertion: "function createShape(t){const r={circle:{type:'circle',area:(r)=>Math.PI*r*r},square:{type:'square',area:(s)=>s*s}};return r[t]} expect(createShape('circle').type).toBe('circle')" },
      { description: 'square has correct type', assertion: "function createShape(t){const r={circle:{type:'circle',area:(r)=>Math.PI*r*r},square:{type:'square',area:(s)=>s*s}};return r[t]} expect(createShape('square').type).toBe('square')" },
      { description: 'circle.area calculates area for radius 2', assertion: "function createShape(t){const r={circle:{type:'circle',area:(r)=>Math.PI*r*r},square:{type:'square',area:(s)=>s*s}};return r[t]} const c=createShape('circle'); expect(Math.abs(c.area(2)-Math.PI*4)<0.01).toBeTruthy()" },
      { description: 'square.area calculates area for side 4', assertion: "function createShape(t){const r={circle:{type:'circle',area:(r)=>Math.PI*r*r},square:{type:'square',area:(s)=>s*s}};return r[t]} expect(createShape('square').area(4)).toBe(16)" },
      { description: 'registry properly maps types to implementations', assertion: "function createShape(t){const r={circle:{type:'circle',area:(r)=>Math.PI*r*r},square:{type:'square',area:(s)=>s*s}};return r[t]} const circ=createShape('circle'),sq=createShape('square'); expect(circ.type).toBe('circle'); expect(sq.type).toBe('square'); expect(sq.area(3)).toBe(9)" },
    ],
    hints: ['Use an object as registry to map type names to shapes', 'Store both type and area function in registry', 'Return the appropriate shape object from registry'],
    tags: ['factory', 'registry', 'design-pattern', 'mapping'],
  },
]
