import { Exercise } from '@/shared/types/exercises';

export const intlRelativeTimeFormatExercises: Exercise[] = [
  {
    slug: 'intl-relativetimeformat-constructor',
    title: 'Create RelativeTimeFormat',
    description: 'Create an Intl.RelativeTimeFormat instance.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Intl',
    method: 'RelativeTimeFormat',
    initialCode: `function createRelativeTimeFormat() {
  // Create an Intl.RelativeTimeFormat for 'en' locale
}`,
    solution: `function createRelativeTimeFormat() {
  return new Intl.RelativeTimeFormat('en');
}`,
    tests: [
      {
        description: 'Returns an Intl.RelativeTimeFormat instance',
        assertion: `expect(createRelativeTimeFormat() instanceof Intl.RelativeTimeFormat).toBeTruthy();`
      },
      {
        description: 'Has a format method',
        assertion: `expect(typeof createRelativeTimeFormat().format).toBe('function');`
      },
      {
        description: 'Has a formatToParts method',
        assertion: `expect(typeof createRelativeTimeFormat().formatToParts).toBe('function');`
      },
      {
        description: 'Has a resolvedOptions method',
        assertion: `expect(typeof createRelativeTimeFormat().resolvedOptions).toBe('function');`
      },
      {
        description: 'Locale is en',
        assertion: `expect(typeof createRelativeTimeFormat().resolvedOptions().locale).toBe('string');`
      },
    ],
    hints: ['Use new Intl.RelativeTimeFormat(locale)'],
    tags: [],
  },
  {
    slug: 'intl-relativetimeformat-format-negative',
    title: 'Format negative relative time',
    description: 'Use Intl.RelativeTimeFormat to format a negative relative time.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Intl',
    method: 'RelativeTimeFormat',
    initialCode: `function formatYesterday() {
  // Format -1 day ago
}`,
    solution: `function formatYesterday() {
  return new Intl.RelativeTimeFormat('en').format(-1, 'day');
}`,
    tests: [
      {
        description: 'Returns a string',
        assertion: `const result = formatYesterday(); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Result contains "day" or "yesterday"',
        assertion: `const result = formatYesterday(); expect(result.toLowerCase().includes('day') || result.toLowerCase().includes('yesterday')).toBeTruthy();`
      },
      {
        description: 'Works for -1',
        assertion: `const result = formatYesterday(); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for en locale',
        assertion: `const result = formatYesterday(); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Result is not empty',
        assertion: `const result = formatYesterday(); expect(result.length > 0).toBeTruthy();`
      },
    ],
    hints: ['Use .format(-1, "day")'],
    tags: [],
  },
  {
    slug: 'intl-relativetimeformat-format-positive',
    title: 'Format positive relative time',
    description: 'Use Intl.RelativeTimeFormat to format a positive relative time.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Intl',
    method: 'RelativeTimeFormat',
    initialCode: `function formatInThreeMonths() {
  // Format 3 months from now
}`,
    solution: `function formatInThreeMonths() {
  return new Intl.RelativeTimeFormat('en').format(3, 'month');
}`,
    tests: [
      {
        description: 'Returns a string',
        assertion: `const result = formatInThreeMonths(); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Result contains "month"',
        assertion: `const result = formatInThreeMonths(); expect(result.toLowerCase().includes('month')).toBeTruthy();`
      },
      {
        description: 'Works for 3',
        assertion: `const result = formatInThreeMonths(); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Works for en locale',
        assertion: `const result = formatInThreeMonths(); expect(typeof result === 'string').toBeTruthy();`
      },
      {
        description: 'Result is not empty',
        assertion: `const result = formatInThreeMonths(); expect(result.length > 0).toBeTruthy();`
      },
    ],
    hints: ['Use .format(3, "month")'],
    tags: [],
  },
  {
    slug: 'intl-relativetimeformat-formatToParts',
    title: 'Format to parts',
    description: 'Use Intl.RelativeTimeFormat.formatToParts to get parts.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'RelativeTimeFormat',
    initialCode: `function formatRelativeParts() {
  // Use formatToParts to get parts
}`,
    solution: `function formatRelativeParts() {
  return new Intl.RelativeTimeFormat('en').formatToParts(1, 'week');
}`,
    tests: [
      {
        description: 'Returns an array',
        assertion: `const result = formatRelativeParts(); expect(Array.isArray(result)).toBeTruthy();`
      },
      {
        description: 'Array has at least 1 part',
        assertion: `const result = formatRelativeParts(); expect(result.length > 0).toBeTruthy();`
      },
      {
        description: 'Each part has type and value',
        assertion: `const result = formatRelativeParts(); expect(result[0] && typeof result[0].type === 'string' && typeof result[0].value === 'string').toBeTruthy();`
      },
      {
        description: 'Works for 1 week',
        assertion: `const result = formatRelativeParts(); expect(Array.isArray(result)).toBeTruthy();`
      },
      {
        description: 'Works for en locale',
        assertion: `const result = formatRelativeParts(); expect(Array.isArray(result)).toBeTruthy();`
      },
    ],
    hints: ['Use .formatToParts(1, "week")'],
    tags: [],
  },
  {
    slug: 'intl-relativetimeformat-resolvedOptions',
    title: 'RelativeTimeFormat resolvedOptions',
    description: 'Get resolved options from Intl.RelativeTimeFormat.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'RelativeTimeFormat',
    initialCode: `function getRelativeTimeFormatOptions() {
  // Return resolved options
}`,
    solution: `function getRelativeTimeFormatOptions() {
  return new Intl.RelativeTimeFormat('en').resolvedOptions();
}`,
    tests: [
      {
        description: 'Returns an object',
        assertion: `const result = getRelativeTimeFormatOptions(); expect(typeof result === 'object' && result !== null).toBeTruthy();`
      },
      {
        description: 'Has locale property',
        assertion: `const result = getRelativeTimeFormatOptions(); expect(typeof result.locale === 'string').toBeTruthy();`
      },
      {
        description: 'Has numeric property',
        assertion: `const result = getRelativeTimeFormatOptions(); expect(typeof result.numeric === 'string').toBeTruthy();`
      },
      {
        description: 'Has style property',
        assertion: `const result = getRelativeTimeFormatOptions(); expect(typeof result.style === 'string').toBeTruthy();`
      },
      {
        description: 'Has numberingSystem property',
        assertion: `const result = getRelativeTimeFormatOptions(); expect(typeof result.numberingSystem === 'string').toBeTruthy();`
      },
    ],
    hints: ['Use .resolvedOptions()'],
    tags: [],
  },
];
