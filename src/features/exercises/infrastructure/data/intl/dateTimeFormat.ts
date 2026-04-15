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
  },
];
