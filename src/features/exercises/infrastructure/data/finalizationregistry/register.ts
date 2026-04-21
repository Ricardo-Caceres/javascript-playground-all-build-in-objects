import type { Exercise } from '@/shared/types/exercises'

export const finalizationRegistryRegisterExercises: Exercise[] = [
  {
    slug: 'finalizationregistry-register-1',
    title: 'FinalizationRegistry.register — is a function',
    description: `## register Method\n\n\`typeof FinalizationRegistry.prototype.register\` is \`'function'\`.\n\n**Challenge:** Verify register is on the prototype.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FinalizationRegistry',
    method: 'register',
    initialCode: `typeof FinalizationRegistry.prototype.register`,
    solution: `typeof FinalizationRegistry.prototype.register === 'function'`,
    tests: [
      { description: "typeof prototype.register === 'function'", assertion:"expect(typeof FinalizationRegistry.prototype.register).toBe('function')" },
      { description: 'is truthy', assertion:'expect(FinalizationRegistry.prototype.register).toBeTruthy()' },
      { description: 'is on prototype', assertion:'expect(FinalizationRegistry.prototype.hasOwnProperty("register")).toBe(true)' },
      { description: 'not null', assertion:'expect(FinalizationRegistry.prototype.register !== null).toBe(true)' },
      { description: "FinalizationRegistry typeof === 'function'", assertion:"expect(typeof FinalizationRegistry).toBe('function')" },
    ],
    hints: ['register is defined on FinalizationRegistry.prototype.'],
    tags: ['finalizationregistry', 'register', 'prototype'],
    usageExample: {
      code: `const reg = new FinalizationRegistry(k => console.log(k, 'collected'))
let obj = { data: 42 }
reg.register(obj, 'myKey')`,
      explanation: {
        en: "register() links an object to a cleanup key; the callback fires with the key when the object is GC-ed.",
        es: "register() vincula un objeto a una clave de limpieza; el callback se dispara con la clave cuando el objeto es recolectado.",
      },
    },
  },
  {
    slug: 'finalizationregistry-register-2',
    title: 'FinalizationRegistry.register — does not throw',
    description: `## register Does Not Throw\n\nCalling \`reg.register(obj, 'token')\` does not throw an error.\n\n**Challenge:** Verify register executes without error.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FinalizationRegistry',
    method: 'register',
    initialCode: `const reg = new FinalizationRegistry(() => {});\nconst obj = {};\nreg.register(obj, 'token');`,
    solution: `const reg = new FinalizationRegistry(() => {}); const obj = {}; reg.register(obj, 'token'); typeof reg === 'object'`,
    tests: [
      { description: 'register does not throw', assertion:"expect((() => { try { (() => { const reg = new FinalizationRegistry(() => {}); reg.register({}, 'token'); })(); return true; } catch(e) { return false; } })()).toBe(true)" },
      { description: 'instanceof FinalizationRegistry', assertion:"const reg = new FinalizationRegistry(() => {}); reg.register({}, 'x'); expect(reg instanceof FinalizationRegistry).toBe(true)" },
      { description: "typeof reg is 'object'", assertion:"const reg = new FinalizationRegistry(() => {}); reg.register({}, 'x'); expect(typeof reg).toBe('object')" },
      { description: 'register is callable', assertion:"expect(typeof FinalizationRegistry.prototype.register).toBe('function')" },
      { description: 'reg is truthy', assertion:"const reg = new FinalizationRegistry(() => {}); reg.register({}, 'x'); expect(reg).toBeTruthy()" },
    ],
    hints: ['register(target, heldValue) registers an object for cleanup notification.'],
    tags: ['finalizationregistry', 'register', 'instance-method'],
    usageExample: {
      code: `const reg = new FinalizationRegistry(k => releaseResource(k))
let resource = acquireResource()
reg.register(resource, resource.id)`,
      explanation: {
        en: "Use register() to track external resource handles tied to JavaScript object lifetimes.",
        es: "Usa register() para rastrear manejadores de recursos externos vinculados a las vidas de objetos JavaScript.",
      },
    },
  },
  {
    slug: 'finalizationregistry-register-3',
    title: 'FinalizationRegistry.register — unregister available',
    description: `## unregister After register\n\nAfter creating a registry, \`typeof reg.unregister\` is \`'function'\`.\n\n**Challenge:** Verify unregister is available.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FinalizationRegistry',
    method: 'register',
    initialCode: `const reg = new FinalizationRegistry(() => {});\ntypeof reg.unregister`,
    solution: `const reg = new FinalizationRegistry(() => {}); typeof reg.unregister === 'function'`,
    tests: [
      { description: "typeof unregister === 'function'", assertion:"const reg = new FinalizationRegistry(() => {}); expect(typeof reg.unregister).toBe('function')" },
      { description: 'unregister is on prototype', assertion:"expect(typeof FinalizationRegistry.prototype.unregister).toBe('function')" },
      { description: 'is truthy', assertion:'const reg = new FinalizationRegistry(() => {}); expect(reg.unregister).toBeTruthy()' },
      { description: 'not null', assertion:'const reg = new FinalizationRegistry(() => {}); expect(reg.unregister !== null).toBe(true)' },
      { description: 'instanceof FinalizationRegistry', assertion:'expect(result).toBe(true)' },
    ],
    hints: ['unregister allows you to cancel a previously registered cleanup callback.'],
    tags: ['finalizationregistry', 'register', 'unregister'],
    usageExample: {
      code: `const reg = new FinalizationRegistry(k => {})
let obj = {}
const token = {}
reg.register(obj, 'key', token)
reg.unregister(token)  // cancels the cleanup`,
      explanation: {
        en: "Pass a third (token) argument to register() so you can later unregister before GC.",
        es: "Pasa un tercer argumento (token) a register() para poder cancelar el registro antes del GC.",
      },
    },
  },
  {
    slug: 'finalizationregistry-register-4',
    title: 'FinalizationRegistry — instanceof check',
    description: `## FinalizationRegistry instanceof\n\n\`new FinalizationRegistry(() => {}) instanceof FinalizationRegistry\` is \`true\`.\n\n**Challenge:** Verify the instanceof check.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FinalizationRegistry',
    method: 'register',
    initialCode: `new FinalizationRegistry(() => {}) instanceof FinalizationRegistry`,
    solution: `new FinalizationRegistry(() => {}) instanceof FinalizationRegistry`,
    tests: [
      { description: 'instanceof FinalizationRegistry is true', assertion:'expect(result).toBe(true)' },
      { description: 'instanceof Object is true', assertion:'expect(new FinalizationRegistry(() => {}) instanceof Object).toBe(true)' },
      { description: 'is truthy', assertion:'expect(new FinalizationRegistry(() => {})).toBeTruthy()' },
      { description: 'not null', assertion:'expect(new FinalizationRegistry(() => {}) !== null).toBe(true)' },
      { description: 'has register method', assertion:"expect(typeof new FinalizationRegistry(() => {}).register).toBe('function')" },
    ],
    hints: ['instanceof checks the prototype chain.'],
    tags: ['finalizationregistry', 'register', 'instanceof'],
    usageExample: {
      code: `const reg = new FinalizationRegistry(k => console.log('GC:', k))
let tmp = { id: 1 }
reg.register(tmp, tmp.id)
tmp = null  // allows GC`,
      explanation: {
        en: "Set the variable to null to allow the garbage collector to reclaim the object.",
        es: "Establece la variable a null para permitir que el recolector de basura reclame el objeto.",
      },
    },
  },
  {
    slug: 'finalizationregistry-register-5',
    title: 'FinalizationRegistry — unregister on prototype',
    description: `## unregister on Prototype\n\n\`typeof FinalizationRegistry.prototype.unregister\` is \`'function'\`.\n\n**Challenge:** Verify unregister exists on the prototype.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FinalizationRegistry',
    method: 'register',
    initialCode: `typeof FinalizationRegistry.prototype.unregister`,
    solution: `typeof FinalizationRegistry.prototype.unregister === 'function'`,
    tests: [
      { description: "typeof prototype.unregister === 'function'", assertion:"expect(typeof FinalizationRegistry.prototype.unregister).toBe('function')" },
      { description: 'is truthy', assertion:'expect(FinalizationRegistry.prototype.unregister).toBeTruthy()' },
      { description: 'is on prototype', assertion:'expect(FinalizationRegistry.prototype.hasOwnProperty("unregister")).toBe(true)' },
      { description: 'not null', assertion:'expect(FinalizationRegistry.prototype.unregister !== null).toBe(true)' },
      { description: "typeof prototype.register === 'function'", assertion:"expect(typeof FinalizationRegistry.prototype.register).toBe('function')" },
    ],
    hints: ['Both register and unregister are defined on FinalizationRegistry.prototype.'],
    tags: ['finalizationregistry', 'register', 'unregister', 'prototype'],
    usageExample: {
      code: `const reg = new FinalizationRegistry(k => {})
let o = {}
reg.register(o, 'data')
// reg holds a weak reference; o can still be GC-ed`,
      explanation: {
        en: "FinalizationRegistry holds only a weak reference, so it does not prevent garbage collection.",
        es: "FinalizationRegistry mantiene solo una referencia débil, por lo que no impide la recolección de basura.",
      },
    },
  },
]
