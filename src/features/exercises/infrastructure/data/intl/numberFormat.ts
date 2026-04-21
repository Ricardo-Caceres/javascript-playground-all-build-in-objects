import { Exercise } from '@/shared/types/exercises';

export const intlNumberFormatExercises: Exercise[] = [
  {
    slug: 'intl-numberformat-constructor',
    title: 'Create NumberFormat',
    description: 'Create an Intl.NumberFormat instance.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Intl',
    method: 'NumberFormat',
    initialCode: `function createNumberFormatter() {
  // Create an Intl.NumberFormat for 'en' locale
}`,
    solution: `function createNumberFormatter() {
  return new Intl.NumberFormat('en');
}`,
    tests: [
      {
        description: 'Returns an Intl.NumberFormat instance',
        assertion: `expect(createNumberFormatter() instanceof Intl.NumberFormat).toBeTruthy();`
      },
      {
        description: 'Has a format method',
        assertion: `expect(typeof createNumberFormatter().format).toBe('function');`
      },
      {
        description: 'Has a formatToParts method',
        assertion: `expect(typeof createNumberFormatter().formatToParts).toBe('function');`
      },
      {
        description: 'Has a resolvedOptions method',
        assertion: `expect(typeof createNumberFormatter().resolvedOptions).toBe('function');`
      },
      {
        description: 'Locale is en',
        assertion: `expect(typeof createNumberFormatter().resolvedOptions().locale).toBe('string');`
      },
    ],
    hints: ['Use new Intl.NumberFormat(locale)'],
    tags: [],
    usageExample: {
      code: `const nf = new Intl.NumberFormat('en-US');
// Creates a number formatter for en-US locale`,
      explanation: {
        en: "Intl.NumberFormat creates a locale-aware number formatter.",
        es: "Intl.NumberFormat crea un formateador de números que respeta las reglas del idioma.",
      },
    },
  },
  {
    slug: 'intl-numberformat-format',
    title: 'Format a number',
    description: 'Use Intl.NumberFormat to format a number.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Intl',
    method: 'NumberFormat',
    initialCode: `function formatNumber(num) {
  // Format the number using Intl.NumberFormat
}`,
    solution: `function formatNumber(num) {
  return new Intl.NumberFormat('en').format(num);
}`,
    tests: [
      {
        description: 'Returns a string',
        assertion: `const result = formatNumber(1234.56); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for 0',
        assertion: `const result = formatNumber(0); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for negative',
        assertion: `const result = formatNumber(-42); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for large number',
        assertion: `const result = formatNumber(1000000); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for decimal',
        assertion: `const result = formatNumber(3.1415); expect(typeof result === 'string').toBeTruthy();`
      },
    ],
    hints: ['Use .format(number)'],
    tags: [],
    usageExample: {
      code: `new Intl.NumberFormat('de-DE').format(1234567.89);
// '1.234.567,89' (German format)`,
      explanation: {
        en: "format() converts a number to a locale-specific string with proper separators.",
        es: "format() convierte un número en una cadena con separadores del idioma correspondiente.",
      },
    },
  },
  {
    slug: 'intl-numberformat-currency',
    title: 'Format as currency',
    description: 'Use Intl.NumberFormat with currency style.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'NumberFormat',
    initialCode: `function formatCurrency(num) {
  // Format as USD currency
}`,
    solution: `function formatCurrency(num) {
  return new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(num);
}`,
    tests: [
      {
        description: 'Returns a string',
        assertion: `const result = formatCurrency(100); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for 0',
        assertion: `const result = formatCurrency(0); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for negative',
        assertion: `const result = formatCurrency(-42); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for decimal',
        assertion: `const result = formatCurrency(3.14); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for large number',
        assertion: `const result = formatCurrency(1000000); expect(typeof result === 'string').toBeTruthy();`
      },
    ],
    hints: ['Use style: "currency" and currency: "USD"'],
    tags: [],
    usageExample: {
      code: `new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(1234.5);
// '$1,234.50'`,
      explanation: {
        en: "Use the currency style to format monetary values with the correct symbol.",
        es: "Usa el estilo currency para formatear valores monetarios con el símbolo correcto.",
      },
    },
  },
  {
    slug: 'intl-numberformat-formatToParts',
    title: 'Format number to parts',
    description: 'Use Intl.NumberFormat.formatToParts to get parts of a number.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'NumberFormat',
    initialCode: `function formatNumberParts(num) {
  // Use formatToParts to get parts
}`,
    solution: `function formatNumberParts(num) {
  return new Intl.NumberFormat('en').formatToParts(num);
}`,
    tests: [
      {
        description: 'Returns an array',
        assertion: `const result = formatNumberParts(1234.56); expect(Array.isArray(result)).toBeTruthy();`
      },
      {
        description: 'Array has at least 1 part',
        assertion: `const result = formatNumberParts(1234.56); expect(result.length > 0).toBeTruthy();`
      },
      {
        description: 'Each part has type and value',
        assertion: `const result = formatNumberParts(1234.56); expect(result[0] && typeof result[0].type === 'string' && typeof result[0].value === 'string').toBeTruthy();`
      },
      {
        description: 'Works for 0',
        assertion: `const result = formatNumberParts(0); expect(Array.isArray(result)).toBeTruthy();`
      },
      {
        description: 'Works for negative',
        assertion: `const result = formatNumberParts(-42); expect(Array.isArray(result)).toBeTruthy();`
      },
    ],
    hints: ['Use .formatToParts(number)'],
    tags: [],
    usageExample: {
      code: `const parts = new Intl.NumberFormat('en-US').formatToParts(1234.5);
// [{type:'integer',value:'1'},{type:'group',value:','}, ...]`,
      explanation: {
        en: "formatToParts() returns the formatted number as labeled token segments.",
        es: "formatToParts() devuelve el número formateado como segmentos de tokens etiquetados.",
      },
    },
  },
  {
    slug: 'intl-numberformat-resolvedOptions',
    title: 'Resolved Options',
    description: 'Get resolved options from Intl.NumberFormat.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'NumberFormat',
    initialCode: `function getNumberFormatOptions() {
  // Return resolved options
}`,
    solution: `function getNumberFormatOptions() {
  return new Intl.NumberFormat('en').resolvedOptions();
}`,
    tests: [
      {
        description: 'Returns an object',
        assertion: `const result = getNumberFormatOptions(); expect(typeof result === 'object' && result !== null).toBeTruthy();`
      },
      {
        description: 'Has locale property',
        assertion: `const result = getNumberFormatOptions(); expect(typeof result.locale === 'string').toBeTruthy();`
      },
      {
        description: 'Has numberingSystem property',
        assertion: `const result = getNumberFormatOptions(); expect(typeof result.numberingSystem === 'string').toBeTruthy();`
      },
      {
        description: 'Has style property',
        assertion: `const result = getNumberFormatOptions(); expect(typeof result.style === 'string').toBeTruthy();`
      },
      {
        description: 'Has maximumFractionDigits property',
        assertion: `const result = getNumberFormatOptions(); expect(typeof result.maximumFractionDigits === 'number').toBeTruthy();`
      },
    ],
    hints: ['Use .resolvedOptions()'],
    tags: [],
    usageExample: {
      code: `const opts = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).resolvedOptions();
// { locale: 'en-US', maximumFractionDigits: 2, ... }`,
      explanation: {
        en: "resolvedOptions() returns the resolved locale and formatting options.",
        es: "resolvedOptions() devuelve el idioma resuelto y las opciones de formato.",
      },
    },
  },
];
