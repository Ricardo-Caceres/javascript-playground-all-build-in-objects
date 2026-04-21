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
    usageExample: {
      code: `const pr = new Intl.PluralRules('en-US');
// Creates a plural rules classifier for English`,
      explanation: {
        en: "Intl.PluralRules determines the plural category for a given number in a locale.",
        es: "Intl.PluralRules determina la categoría plural de un número en un idioma dado.",
      },
    },
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
    usageExample: {
      code: `const pr = new Intl.PluralRules('en');
pr.select(1); // 'one'
pr.select(2); // 'other'`,
      explanation: {
        en: "select() returns the plural category ('one', 'other', 'few', etc.) for a count.",
        es: "select() devuelve la categoría plural ('one', 'other', 'few', etc.) para una cantidad.",
      },
    },
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
    usageExample: {
      code: `const pr = new Intl.PluralRules('en-US', { type: 'ordinal' });
pr.select(1); // 'one'  (1st)
pr.select(2); // 'two'  (2nd)`,
      explanation: {
        en: "Use type:'ordinal' for ordinal numbers (1st, 2nd, 3rd...).",
        es: "Usa type:'ordinal' para números ordinales (1.º, 2.º, 3.º...).",
      },
    },
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
    usageExample: {
      code: `const supported = Intl.PluralRules.supportedLocalesOf(['en', 'ar', 'xx']);
// ['en', 'ar']`,
      explanation: {
        en: "supportedLocalesOf() lists which locales have plural rule data available.",
        es: "supportedLocalesOf() lista qué idiomas tienen datos de reglas plurales disponibles.",
      },
    },
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
    usageExample: {
      code: `const opts = new Intl.PluralRules('en').resolvedOptions();
// { locale: 'en', type: 'cardinal', ... }`,
      explanation: {
        en: "resolvedOptions() shows the exact locale and type the PluralRules instance uses.",
        es: "resolvedOptions() muestra el idioma y tipo exactos que usa la instancia de PluralRules.",
      },
    },
  },
];
