import type { Exercise } from '@/shared/types/exercises'

export const abortSignalStaticExercises: Exercise[] = [
  {
    slug: 'abortsignal-static-1',
    title: 'AbortSignal.abort() — already aborted',
    description: `## AbortSignal.abort()\n\n\`AbortSignal.abort()\` returns an \`AbortSignal\` that is already aborted.\n\n**Challenge:** Verify that \`AbortSignal.abort().aborted\` is \`true\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'AbortSignal',
    initialCode: `// Check AbortSignal.abort().aborted\n`,
    solution: `AbortSignal.abort().aborted`,
    tests: [
      { description: 'aborted is true', assertion: "expect(result).toBe(true)" },
      { description: 'instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
      { description: "abort('reason').reason is 'reason'", assertion: "expect(result).toBe('reason')" },
      { description: 'timeout(1000) instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
      { description: 'timeout(99999).aborted is false', assertion: "expect(result).toBe(false)" },
    ],
    hints: ['AbortSignal.abort() is a shorthand for creating a pre-aborted signal without needing an AbortController'],
    tags: ['AbortSignal', 'abort', 'static-method'],
    usageExample: {
      code: `const sig = AbortSignal.abort()
sig.aborted  // → true`,
      explanation: {
        en: "AbortSignal.abort() creates a signal that is already in the aborted state.",
        es: "AbortSignal.abort() crea una señal que ya está en estado abortado.",
      },
    },
  },
  {
    slug: 'abortsignal-static-2',
    title: 'AbortSignal.abort(reason) — sets reason',
    description: `## AbortSignal.abort(reason)\n\n\`AbortSignal.abort(reason)\` creates an already-aborted signal with the given reason.\n\n**Challenge:** Verify that \`AbortSignal.abort('reason').reason\` is \`'reason'\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'AbortSignal',
    initialCode: `// Check AbortSignal.abort('reason').reason\n`,
    solution: `AbortSignal.abort('reason').reason`,
    tests: [
      { description: "reason is 'reason'", assertion: "expect(result).toBe('reason')" },
      { description: 'aborted is true', assertion: "expect(result).toBe(true)" },
      { description: 'instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
      { description: 'timeout(1000) instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
      { description: 'timeout(99999).aborted is false', assertion: "expect(result).toBe(false)" },
    ],
    hints: ['Pass any value to AbortSignal.abort(reason) — it becomes the reason property of the returned signal'],
    tags: ['AbortSignal', 'abort', 'reason', 'static-method'],
    usageExample: {
      code: `const sig = AbortSignal.timeout(5000)
// auto-aborts after 5 seconds`,
      explanation: {
        en: "AbortSignal.timeout(ms) creates a signal that automatically aborts after the given delay.",
        es: "AbortSignal.timeout(ms) crea una señal que se aborta automáticamente después del retraso dado.",
      },
    },
  },
  {
    slug: 'abortsignal-static-3',
    title: 'AbortSignal.timeout() — returns AbortSignal',
    description: `## AbortSignal.timeout()\n\n\`AbortSignal.timeout(milliseconds)\` returns an \`AbortSignal\` that will abort after the given time.\n\n**Challenge:** Verify that \`AbortSignal.timeout(1000) instanceof AbortSignal\` is truthy.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'AbortSignal',
    initialCode: `// Check AbortSignal.timeout(1000) instanceof AbortSignal\n`,
    solution: `AbortSignal.timeout(1000) instanceof AbortSignal`,
    tests: [
      { description: 'instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
      { description: 'timeout(99999).aborted is false', assertion: "expect(result).toBe(false)" },
      { description: 'aborted is true for AbortSignal.abort()', assertion: "expect(result).toBe(true)" },
      { description: "abort('reason').reason is 'reason'", assertion: "expect(result).toBe('reason')" },
      { description: 'abort() instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
    ],
    hints: ['AbortSignal.timeout() is available in Node.js 17.3+ and modern browsers'],
    tags: ['AbortSignal', 'timeout', 'static-method'],
    usageExample: {
      code: `const sig = AbortSignal.any([AbortSignal.abort(), new AbortController().signal])
sig.aborted  // → true (because first is already aborted)`,
      explanation: {
        en: "AbortSignal.any() creates a signal that aborts when any of the given signals abort.",
        es: "AbortSignal.any() crea una señal que se aborta cuando cualquiera de las señales dadas se aborta.",
      },
    },
  },
  {
    slug: 'abortsignal-static-4',
    title: 'AbortSignal.timeout() — not yet aborted',
    description: `## AbortSignal.timeout() — initial state\n\nA signal created with \`AbortSignal.timeout(ms)\` is not aborted immediately — it fires after the delay.\n\n**Challenge:** Verify that \`AbortSignal.timeout(99999).aborted\` is \`false\` right after creation.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'AbortSignal',
    initialCode: `// Check AbortSignal.timeout(99999).aborted\n`,
    solution: `AbortSignal.timeout(99999).aborted`,
    tests: [
      { description: 'timeout(99999).aborted is false', assertion: "expect(result).toBe(false)" },
      { description: 'timeout instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
      { description: 'result is true', assertion: "expect(result).toBe(true)" },
      { description: "abort('reason').reason is 'reason'", assertion: "expect(result).toBe('reason')" },
      { description: 'abort() instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
    ],
    hints: ['timeout() schedules the abort in the future — it is not aborted at construction time'],
    tags: ['AbortSignal', 'timeout', 'static-method'],
    usageExample: {
      code: `AbortSignal.abort() instanceof AbortSignal  // → true`,
      explanation: {
        en: "Static factory methods return AbortSignal instances.",
        es: "Los métodos de fábrica estáticos devuelven instancias de AbortSignal.",
      },
    },
  },
  {
    slug: 'abortsignal-static-5',
    title: 'AbortSignal.abort() — instanceof AbortSignal',
    description: `## AbortSignal.abort() instanceof\n\n\`AbortSignal.abort()\` returns an instance of \`AbortSignal\`.\n\n**Challenge:** Verify that \`AbortSignal.abort() instanceof AbortSignal\` is truthy.`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'AbortSignal',
    initialCode: `// Check AbortSignal.abort() instanceof AbortSignal\n`,
    solution: `AbortSignal.abort() instanceof AbortSignal`,
    tests: [
      { description: 'instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
      { description: 'aborted is true', assertion: "expect(result).toBe(true)" },
      { description: "abort('reason').reason is 'reason'", assertion: "expect(result).toBe('reason')" },
      { description: 'timeout(1000) instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
      { description: 'timeout(99999).aborted is false', assertion: "expect(result).toBe(false)" },
    ],
    hints: ['Both AbortSignal.abort() and AbortSignal.timeout() return AbortSignal instances — they are factory methods'],
    tags: ['AbortSignal', 'abort', 'instanceof', 'static-method'],
    usageExample: {
      code: `const s = AbortSignal.abort('reason')
s.reason  // → 'reason'`,
      explanation: {
        en: "Pass a reason to AbortSignal.abort() to provide context for the abort.",
        es: "Pasa una razón a AbortSignal.abort() para proporcionar contexto del aborto.",
      },
    },
  },
]
