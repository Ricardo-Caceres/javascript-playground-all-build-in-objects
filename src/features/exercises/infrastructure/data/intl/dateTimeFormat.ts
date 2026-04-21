import { Exercise } from '@/shared/types/exercises';

export const intlDateTimeFormatExercises: Exercise[] = [
  {
    slug: 'intl-datetimeformat-constructor',
    title: 'Create DateTimeFormat',
    description: 'Create an Intl.DateTimeFormat instance.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Intl',
    method: 'DateTimeFormat',
    initialCode: `function createFormatter() {
  // Create an Intl.DateTimeFormat for 'en' locale
}`,
    solution: `function createFormatter() {
  return new Intl.DateTimeFormat('en');
}`,
    tests: [
      {
        description: 'Returns an Intl.DateTimeFormat instance',
        assertion: `expect(createFormatter() instanceof Intl.DateTimeFormat).toBeTruthy();`
      },
      {
        description: 'Has a format method',
        assertion: `expect(typeof createFormatter().format).toBe('function');`
      },
      {
        description: 'Has a formatToParts method',
        assertion: `expect(typeof createFormatter().formatToParts).toBe('function');`
      },
      {
        description: 'Has a resolvedOptions method',
        assertion: `expect(typeof createFormatter().resolvedOptions).toBe('function');`
      },
      {
        description: 'Locale is en',
        assertion: `expect(typeof createFormatter().resolvedOptions().locale).toBe('string');`
      },
    ],
    hints: ['Use new Intl.DateTimeFormat(locale)'],
    tags: [],
    usageExample: {
      code: `const dtf = new Intl.DateTimeFormat('en-US');
// Creates a date formatter for the en-US locale`,
      explanation: {
        en: "Intl.DateTimeFormat creates a locale-aware date/time formatter.",
        es: "Intl.DateTimeFormat crea un formateador de fechas que respeta las reglas del idioma.",
      },
    },
  },
  {
    slug: 'intl-datetimeformat-format',
    title: 'Format a date',
    description: 'Use Intl.DateTimeFormat to format a date.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Intl',
    method: 'DateTimeFormat',
    initialCode: `function formatDate(date) {
  // Format the date using Intl.DateTimeFormat
}`,
    solution: `function formatDate(date) {
  return new Intl.DateTimeFormat('en').format(date);
}`,
    tests: [
      {
        description: 'Returns a string',
        assertion: `const result = formatDate(new Date()); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for 2000-01-01',
        assertion: `const result = formatDate(new Date('2000-01-01')); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for 2020-12-31',
        assertion: `const result = formatDate(new Date('2020-12-31')); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for epoch',
        assertion: `const result = formatDate(new Date(0)); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for now',
        assertion: `const result = formatDate(new Date()); expect(typeof result === 'string').toBeTruthy();`
      },
    ],
    hints: ['Use .format(date)'],
    tags: [],
    usageExample: {
      code: `const date = new Date('2024-01-15');
new Intl.DateTimeFormat('en-US').format(date);
// '1/15/2024'`,
      explanation: {
        en: "format() converts a Date object into a locale-appropriate string.",
        es: "format() convierte un objeto Date en una cadena con formato del idioma.",
      },
    },
  },
  {
    slug: 'intl-datetimeformat-formatToParts',
    title: 'Format to parts',
    description: 'Use Intl.DateTimeFormat.formatToParts to get parts of a date.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'DateTimeFormat',
    initialCode: `function formatDateParts(date) {
  // Use formatToParts to get parts
}`,
    solution: `function formatDateParts(date) {
  return new Intl.DateTimeFormat('en').formatToParts(date);
}`,
    tests: [
      {
        description: 'Returns an array',
        assertion: `const result = formatDateParts(new Date()); expect(Array.isArray(result)).toBeTruthy();`
      },
      {
        description: 'Array has at least 1 part',
        assertion: `const result = formatDateParts(new Date()); expect(result.length > 0).toBeTruthy();`
      },
      {
        description: 'Each part has type and value',
        assertion: `const result = formatDateParts(new Date()); expect(result[0] && typeof result[0].type === 'string' && typeof result[0].value === 'string').toBeTruthy();`
      },
      {
        description: 'Works for 2020-01-01',
        assertion: `const result = formatDateParts(new Date('2020-01-01')); expect(Array.isArray(result)).toBeTruthy();`
      },
      {
        description: 'Works for epoch',
        assertion: `const result = formatDateParts(new Date(0)); expect(Array.isArray(result)).toBeTruthy();`
      },
    ],
    hints: ['Use .formatToParts(date)'],
    tags: [],
    usageExample: {
      code: `const parts = new Intl.DateTimeFormat('en-US').formatToParts(new Date());
// [{type:'month',value:'1'}, {type:'literal',value:'/'}, ...]`,
      explanation: {
        en: "formatToParts() breaks the formatted date into labeled parts for custom rendering.",
        es: "formatToParts() divide la fecha formateada en partes etiquetadas para renderizado personalizado.",
      },
    },
  },
  {
    slug: 'intl-datetimeformat-supportedLocalesOf',
    title: 'Supported Locales Of',
    description: 'Use Intl.DateTimeFormat.supportedLocalesOf to check supported locales.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'DateTimeFormat',
    initialCode: `function getSupportedLocales(locales) {
  // Use supportedLocalesOf
}`,
    solution: `function getSupportedLocales(locales) {
  return Intl.DateTimeFormat.supportedLocalesOf(locales);
}`,
    tests: [
      {
        description: 'Returns an array',
        assertion: `const result = getSupportedLocales(['en', 'fr']); expect(Array.isArray(result)).toBeTruthy();`
      },
      {
        description: 'en is supported',
        assertion: `const result = getSupportedLocales(['en']); expect(result.includes('en')).toBeTruthy();`
      },
      {
        description: 'fr is supported',
        assertion: `const result = getSupportedLocales(['fr']); expect(result.includes('fr')).toBeTruthy();`
      },
      {
        description: 'Returns empty array for nonsense',
        assertion: `const result = getSupportedLocales(['zz-zz']); expect(Array.isArray(result)).toBeTruthy();`
      },
      {
        description: 'Returns array for empty input',
        assertion: `const result = getSupportedLocales([]); expect(Array.isArray(result)).toBeTruthy();`
      },
    ],
    hints: ['Use Intl.DateTimeFormat.supportedLocalesOf(locales)'],
    tags: [],
    usageExample: {
      code: `const supported = Intl.DateTimeFormat.supportedLocalesOf(['en', 'de', 'xx']);
// ['en', 'de']`,
      explanation: {
        en: "supportedLocalesOf() returns locales that can be formatted without fallback.",
        es: "supportedLocalesOf() devuelve los idiomas que se pueden formatear sin alternativa.",
      },
    },
  },
  {
    slug: 'intl-datetimeformat-resolvedOptions',
    title: 'Resolved Options',
    description: 'Get resolved options from Intl.DateTimeFormat.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'DateTimeFormat',
    initialCode: `function getResolvedOptions() {
  // Return resolved options
}`,
    solution: `function getResolvedOptions() {
  return new Intl.DateTimeFormat('en').resolvedOptions();
}`,
    tests: [
      {
        description: 'Returns an object',
        assertion: `const result = getResolvedOptions(); expect(typeof result === 'object' && result !== null).toBeTruthy();`
      },
      {
        description: 'Has locale property',
        assertion: `const result = getResolvedOptions(); expect(typeof result.locale === 'string').toBeTruthy();`
      },
      {
        description: 'Has calendar property',
        assertion: `const result = getResolvedOptions(); expect(typeof result.calendar === 'string').toBeTruthy();`
      },
      {
        description: 'Has numberingSystem property',
        assertion: `const result = getResolvedOptions(); expect(typeof result.numberingSystem === 'string').toBeTruthy();`
      },
      {
        description: 'Has timeZone property',
        assertion: `const result = getResolvedOptions(); expect(typeof result.timeZone === 'string').toBeTruthy();`
      },
    ],
    hints: ['Use .resolvedOptions()'],
    tags: [],
    usageExample: {
      code: `const opts = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).resolvedOptions();
// { locale: 'en-US', year: 'numeric', month: 'long', ... }`,
      explanation: {
        en: "resolvedOptions() reveals the exact options and locale the formatter is using.",
        es: "resolvedOptions() revela las opciones exactas y el idioma que usa el formateador.",
      },
    },
  },
];
