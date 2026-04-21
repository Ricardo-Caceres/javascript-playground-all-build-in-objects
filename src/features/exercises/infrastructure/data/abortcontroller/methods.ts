import type { Exercise } from '@/shared/types/exercises'

export const abortControllerMethodsExercises: Exercise[] = [
  {
    slug: 'abortcontroller-methods-1',
    title: 'AbortController — abort() sets signal.aborted to true',
    description: `## AbortController.abort()\n\nCalling \`abort()\` on the controller sets \`signal.aborted\` to \`true\`.\n\n**Challenge:** Create a controller, call \`abort()\`, and verify \`signal.aborted\` is \`true\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'AbortController',
    initialCode: `const c = new AbortController();\n// call abort() then check signal.aborted\n`,
    solution: `const c = new AbortController(); c.abort(); c.signal.aborted`,
    tests: [
      { description: 'signal.aborted is true after abort()', assertion: "const c=new AbortController(); c.abort(); expect(c.signal.aborted).toBe(true)" },
      { description: 'signal.aborted is false before abort()', assertion: "expect(new AbortController().signal.aborted).toBe(false)" },
      { description: "abort('timeout') sets reason", assertion: "const c=new AbortController(); c.abort('timeout'); expect(c.signal.reason).toBe('timeout')" },
      { description: 'abort with Error sets Error reason', assertion: "const c=new AbortController(); c.abort(new Error('x')); expect(c.signal.reason instanceof Error).toBe(true)" },
      { description: 'first reason wins on multiple aborts', assertion: "const c=new AbortController(); c.abort('first'); c.abort('second'); expect(c.signal.reason).toBe('first')" },
    ],
    hints: ['abort() transitions the signal from not-aborted to aborted permanently'],
    tags: ['AbortController', 'abort', 'instance-method'],
    usageExample: {
      code: `const ac = new AbortController()
ac.abort()
ac.signal.aborted  // → true`,
      explanation: {
        en: "abort() signals cancellation to anything listening to the controller's signal.",
        es: "abort() señala la cancelación a todo lo que escucha la señal del controlador.",
      },
    },
  },
  {
    slug: 'abortcontroller-methods-2',
    title: 'AbortController — abort(reason) sets signal.reason',
    description: `## AbortController.abort(reason)\n\n\`abort(reason)\` stores the given reason on \`signal.reason\`.\n\n**Challenge:** Abort with \`'timeout'\` as the reason and verify \`signal.reason === 'timeout'\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'AbortController',
    initialCode: `const c = new AbortController();\n// abort with reason 'timeout'\n`,
    solution: `const c = new AbortController(); c.abort('timeout'); c.signal.reason`,
    tests: [
      { description: "reason is 'timeout'", assertion: "const c=new AbortController(); c.abort('timeout'); expect(c.signal.reason).toBe('timeout')" },
      { description: 'signal.aborted is true after abort()', assertion: "const c=new AbortController(); c.abort(); expect(c.signal.aborted).toBe(true)" },
      { description: 'signal.reason is undefined before abort', assertion: "expect(new AbortController().signal.reason).toBeUndefined()" },
      { description: 'abort with Error sets Error reason', assertion: "const c=new AbortController(); c.abort(new Error('x')); expect(c.signal.reason instanceof Error).toBe(true)" },
      { description: 'first reason wins on multiple aborts', assertion: "const c=new AbortController(); c.abort('first'); c.abort('second'); expect(c.signal.reason).toBe('first')" },
    ],
    hints: ['Any value can be passed as reason — string, Error, number, object, etc.'],
    tags: ['AbortController', 'abort', 'reason', 'instance-method'],
    usageExample: {
      code: `const ac = new AbortController()
ac.abort('timeout')
ac.signal.reason  // → 'timeout'`,
      explanation: {
        en: "Pass a reason to abort() to explain why the operation was cancelled.",
        es: "Pasa una razón a abort() para explicar por qué se canceló la operación.",
      },
    },
  },
  {
    slug: 'abortcontroller-methods-3',
    title: 'AbortController — abort(new Error()) sets Error reason',
    description: `## AbortController.abort() with Error\n\nYou can pass an \`Error\` instance as the abort reason, which is then accessible on \`signal.reason\`.\n\n**Challenge:** Abort with \`new Error('x')\` and verify \`signal.reason instanceof Error\` is \`true\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'AbortController',
    initialCode: `const c = new AbortController();\n// abort with an Error instance\n`,
    solution: `const c = new AbortController(); c.abort(new Error('x')); c.signal.reason instanceof Error`,
    tests: [
      { description: 'signal.reason instanceof Error', assertion: "const c=new AbortController(); c.abort(new Error('x')); expect(c.signal.reason instanceof Error).toBe(true)" },
      { description: 'signal.aborted is true', assertion: "const c=new AbortController(); c.abort(new Error('x')); expect(c.signal.aborted).toBe(true)" },
      { description: 'reason.message is preserved', assertion: "const c=new AbortController(); c.abort(new Error('x')); expect(c.signal.reason.message).toBe('x')" },
      { description: "abort('timeout') sets reason", assertion: "const c=new AbortController(); c.abort('timeout'); expect(c.signal.reason).toBe('timeout')" },
      { description: 'first reason wins on multiple aborts', assertion: "const c=new AbortController(); c.abort('first'); c.abort('second'); expect(c.signal.reason).toBe('first')" },
    ],
    hints: ['Passing an Error as reason is idiomatic — it provides a stack trace and message'],
    tags: ['AbortController', 'abort', 'Error', 'reason', 'instance-method'],
    usageExample: {
      code: `const ac = new AbortController()
ac.abort(new Error('User cancelled'))
ac.signal.reason.message  // → 'User cancelled'`,
      explanation: {
        en: "Abort reasons can be any value, including Error objects.",
        es: "Las razones de aborto pueden ser cualquier valor, incluidos objetos Error.",
      },
    },
  },
  {
    slug: 'abortcontroller-methods-4',
    title: 'AbortController — abort is idempotent (first reason wins)',
    description: `## AbortController idempotency\n\nOnce aborted, calling \`abort()\` again has no effect — the original reason is preserved.\n\n**Challenge:** Abort twice with different reasons and verify the first reason is kept.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'AbortController',
    initialCode: `const c = new AbortController();\nc.abort('first');\n// abort again with 'second' — which reason wins?\n`,
    solution: `const c = new AbortController(); c.abort('first'); c.abort('second'); c.signal.reason`,
    tests: [
      { description: "first reason wins", assertion: "const c=new AbortController(); c.abort('first'); c.abort('second'); expect(c.signal.reason).toBe('first')" },
      { description: 'signal.aborted stays true', assertion: "const c=new AbortController(); c.abort('first'); c.abort('second'); expect(c.signal.aborted).toBe(true)" },
      { description: 'signal.aborted is true after first abort', assertion: "const c=new AbortController(); c.abort('first'); expect(c.signal.aborted).toBe(true)" },
      { description: "abort('timeout') sets reason", assertion: "const c=new AbortController(); c.abort('timeout'); expect(c.signal.reason).toBe('timeout')" },
      { description: 'abort with Error sets Error reason', assertion: "const c=new AbortController(); c.abort(new Error('x')); expect(c.signal.reason instanceof Error).toBe(true)" },
    ],
    hints: ['Once a signal is aborted, subsequent calls to abort() are ignored — the signal is immutable after the first abort'],
    tags: ['AbortController', 'abort', 'idempotent', 'instance-method'],
    usageExample: {
      code: `const ac = new AbortController()
ac.abort()
ac.abort()  // calling again has no effect`,
      explanation: {
        en: "Calling abort() more than once is safe; only the first call has effect.",
        es: "Llamar a abort() más de una vez es seguro; solo la primera llamada tiene efecto.",
      },
    },
  },
  {
    slug: 'abortcontroller-methods-5',
    title: 'AbortController — signal.aborted stays true after multiple aborts',
    description: `## AbortController multiple abort calls\n\n\`signal.aborted\` remains \`true\` even if \`abort()\` is called multiple times.\n\n**Challenge:** Call \`abort()\` twice and verify \`signal.aborted\` is still \`true\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'AbortController',
    initialCode: `const c = new AbortController();\nc.abort();\n// abort again and check signal.aborted\n`,
    solution: `const c = new AbortController(); c.abort(); c.abort(); c.signal.aborted`,
    tests: [
      { description: 'signal.aborted stays true', assertion: "const c=new AbortController(); c.abort(); c.abort(); expect(c.signal.aborted).toBe(true)" },
      { description: 'signal.aborted is false before abort', assertion: "expect(new AbortController().signal.aborted).toBe(false)" },
      { description: 'signal.aborted is true after one abort', assertion: "const c=new AbortController(); c.abort(); expect(c.signal.aborted).toBe(true)" },
      { description: "abort('timeout') sets reason", assertion: "const c=new AbortController(); c.abort('timeout'); expect(c.signal.reason).toBe('timeout')" },
      { description: 'first reason wins on multiple aborts', assertion: "const c=new AbortController(); c.abort('first'); c.abort('second'); expect(c.signal.reason).toBe('first')" },
    ],
    hints: ['abort() is idempotent: calling it multiple times does not change the already-aborted state'],
    tags: ['AbortController', 'abort', 'instance-method'],
    usageExample: {
      code: `const ac = new AbortController()
ac.signal.addEventListener('abort', () => console.log('aborted!'))
ac.abort()  // → logs 'aborted!'`,
      explanation: {
        en: "Listen to the 'abort' event on signal to react when cancellation occurs.",
        es: "Escucha el evento 'abort' en signal para reaccionar cuando ocurra la cancelación.",
      },
    },
  },
]
