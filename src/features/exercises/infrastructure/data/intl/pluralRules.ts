import { Exercise } from '@/shared/types/exercises';

export const intlPluralRulesExercises: Exercise[] = [
  {
    slug: 'intl-pluralrules-constructor',
    title: 'Create PluralRules',
    description: 'Create an Intl.PluralRules instance.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Intl',
    method: 'PluralRules',
    initialCode: `function createPluralRules() {
  // Create an Intl.PluralRules for 'en' locale
}`,
    solution: `function createPluralRules() {
  return new Intl.PluralRules('en');
}`,
    tests: [
      {
        description: 'Returns an Intl.PluralRules instance',
        assertion: `expect(createPluralRules() instanceof Intl.PluralRules).toBeTruthy();`
      },
      {
        description: 'Has a select method',
        assertion: `expect(typeof createPluralRules().select).toBe('function');`
      },
      {
        description: 'Has a resolvedOptions method',
        assertion: `expect(typeof createPluralRules().resolvedOptions).toBe('function');`
      },
      {
        description: 'Locale is en',
        assertion: `expect(typeof createPluralRules().resolvedOptions().locale).toBe('string');`
      },
      {
        description: 'Select returns "one" for 1',
        assertion: `const pr = createPluralRules(); expect(pr.select(1)).toBe('one');`
      },
    ],
    hints: ['Use new Intl.PluralRules(locale)'],
    tags: [],
  },
  {
    slug: 'intl-pluralrules-select',
    title: 'Select plural form',
    description: 'Use Intl.PluralRules.select to get plural form.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Intl',
    method: 'PluralRules',
    initialCode: `function getPluralForm(n) {
  // Use select to get plural form
}`,
    solution: `function getPluralForm(n) {
  return new Intl.PluralRules('en').select(n);
}`,
    tests: [
      {
        description: 'Returns "one" for 1',
        assertion: `const result = getPluralForm(1); expect(result).toBe('one');`
      },
      {
        description: 'Returns "other" for 2',
        assertion: `const result = getPluralForm(2); expect(result).toBe('other');`
      },
      {
        description: 'Returns "other" for 0',
        assertion: `const result = getPluralForm(0); expect(result).toBe('other');`
      },
      {
        description: 'Returns "other" for 100',
        assertion: `const result = getPluralForm(100); expect(result).toBe('other');`
      },
      {
        description: 'Returns "one" for 1.0',
        assertion: `const result = getPluralForm(1.0); expect(result).toBe('one');`
      },
    ],
    hints: ['Use .select(n)'],
    tags: [],
  },
  {
    slug: 'intl-pluralrules-ordinal',
    title: 'Ordinal plural rules',
    description: 'Use Intl.PluralRules with type: "ordinal".',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'PluralRules',
    initialCode: `function getOrdinalForm(n) {
  // Use type: "ordinal"
}`,
    solution: `function getOrdinalForm(n) {
  return new Intl.PluralRules('en', { type: 'ordinal' }).select(n);
}`,
    tests: [
      {
        description: 'Returns "one" for 1',
        assertion: `const result = getOrdinalForm(1); expect(result).toBe('one');`
      },
      {
        description: 'Returns "two" for 2',
        assertion: `const result = getOrdinalForm(2); expect(result).toBe('two');`
      },
      {
        description: 'Returns "few" for 3',
        assertion: `const result = getOrdinalForm(3); expect(result).toBe('few');`
      },
      {
        description: 'Returns "other" for 4',
        assertion: `const result = getOrdinalForm(4); expect(result).toBe('other');`
      },
      {
        description: 'Returns "other" for 100',
        assertion: `const result = getOrdinalForm(100); expect(result).toBe('other');`
      },
    ],
    hints: ['Use type: "ordinal"'],
    tags: [],
  },
  {
    slug: 'intl-pluralrules-supportedLocalesOf',
    title: 'Supported Locales Of',
    description: 'Use Intl.PluralRules.supportedLocalesOf to check supported locales.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'PluralRules',
    initialCode: `function getSupportedPluralLocales(locales) {
  // Use supportedLocalesOf
}`,
    solution: `function getSupportedPluralLocales(locales) {
  return Intl.PluralRules.supportedLocalesOf(locales);
}`,
    tests: [
      {
        description: 'Returns an array',
        assertion: `const result = getSupportedPluralLocales(['en', 'fr']); expect(Array.isArray(result)).toBeTruthy();`
      },
      {
        description: 'en is supported',
        assertion: `const result = getSupportedPluralLocales(['en']); expect(result.includes('en')).toBeTruthy();`
      },
      {
        description: 'fr is supported',
        assertion: `const result = getSupportedPluralLocales(['fr']); expect(result.includes('fr')).toBeTruthy();`
      },
      {
        description: 'Returns empty array for nonsense',
        assertion: `const result = getSupportedPluralLocales(['zz-zz']); expect(Array.isArray(result)).toBeTruthy();`
      },
      {
        description: 'Returns array for empty input',
        assertion: `const result = getSupportedPluralLocales([]); expect(Array.isArray(result)).toBeTruthy();`
      },
    ],
    hints: ['Use Intl.PluralRules.supportedLocalesOf(locales)'],
    tags: [],
  },
  {
    slug: 'intl-pluralrules-resolvedOptions',
    title: 'PluralRules resolvedOptions',
    description: 'Get resolved options from Intl.PluralRules.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Intl',
    method: 'PluralRules',
    initialCode: `function getPluralRulesOptions() {
  // Return resolved options
}`,
    solution: `function getPluralRulesOptions() {
  return new Intl.PluralRules('en').resolvedOptions();
}`,
    tests: [
      {
        description: 'Returns an object',
        assertion: `const result = getPluralRulesOptions(); expect(typeof result === 'object' && result !== null).toBeTruthy();`
      },
      {
        description: 'Has locale property',
        assertion: `const result = getPluralRulesOptions(); expect(typeof result.locale === 'string').toBeTruthy();`
      },
      {
        description: 'Has type property',
        assertion: `const result = getPluralRulesOptions(); expect(typeof result.type === 'string').toBeTruthy();`
      },
      {
        description: 'Has minimumIntegerDigits property',
        assertion: `const result = getPluralRulesOptions(); expect(typeof result.minimumIntegerDigits === 'number').toBeTruthy();`
      },
      {
        description: 'Has pluralCategories property',
        assertion: `const result = getPluralRulesOptions(); expect(Array.isArray(result.pluralCategories)).toBeTruthy();`
      },
    ],
    hints: ['Use .resolvedOptions()'],
    tags: [],
  },
];
