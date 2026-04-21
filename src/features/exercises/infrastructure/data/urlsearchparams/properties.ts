import type { Exercise } from '@/shared/types/exercises'

export const urlSearchParamsPropExercises: Exercise[] = [
  {
    slug: 'urlsearchparams-properties-1',
    title: 'URLSearchParams#size — empty params is 0',
    description: `## URLSearchParams#size\n\nThe \`size\` property returns the total number of key-value entries.\n\n**Challenge:** Verify that an empty \`URLSearchParams\` has size \`0\`.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'URLSearchParams',
    initialCode: `const params = new URLSearchParams()\n// params.size\n`,
    solution: `new URLSearchParams().size`,
    tests: [
      { description: 'size of empty params is 0', assertion:"expect(result).toBe(0)" },
      { description: 'size is a number', assertion:"expect(typeof result).toBe('number')" },
      { description: 'size is 0 not undefined', assertion:"expect(result !== undefined).toBe(true)" },
      { description: 'size is falsy when 0', assertion:"expect(result).toBeFalsy()" },
      { description: 'empty string init also has size 0', assertion:"expect(new URLSearchParams('').size).toBe(0)" },
    ],
    hints: ['size reflects the number of entries, not unique keys'],
    tags: ['URLSearchParams', 'instance-property', 'size'],
    usageExample: {
      code: `const p = new URLSearchParams('a=1&b=2')
p.size  // → 2`,
      explanation: {
        en: "size returns the total number of key-value pairs in the URLSearchParams object.",
        es: "size devuelve el número total de pares clave-valor en el objeto URLSearchParams.",
      },
    },
  },
  {
    slug: 'urlsearchparams-properties-2',
    title: 'URLSearchParams#size — increases after append',
    description: `## URLSearchParams#size — append\n\nEach \`append()\` call adds one entry and increases \`size\` by 1.\n\n**Challenge:** Verify \`size\` after appending entries.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'URLSearchParams',
    initialCode: `const params = new URLSearchParams()\nparams.append('a', '1')\n// params.size should be 1\n`,
    solution: `const p = new URLSearchParams(); p.append('a','1'); p.size`,
    tests: [
      { description: 'size after one append is 1', assertion:"const p=new URLSearchParams(); p.append('a','1'); expect(p.size).toBe(1)" },
      { description: 'size after two appends is 2', assertion:"const p2=new URLSearchParams(); p2.append('a','1'); p2.append('b','2'); expect(p2.size).toBe(2)" },
      { description: 'append same key increases size', assertion:"const p3=new URLSearchParams(); p3.append('a','1'); p3.append('a','2'); expect(p3.size).toBe(2)" },
      { description: 'size is truthy after append', assertion:"const p4=new URLSearchParams(); p4.append('x','1'); expect(p4.size).toBeTruthy()" },
      { description: 'size is a number after append', assertion:"const p5=new URLSearchParams(); p5.append('a','1'); expect(typeof p5.size).toBe('number')" },
    ],
    hints: ['append() always adds a new entry, even for existing keys'],
    tags: ['URLSearchParams', 'instance-property', 'size', 'append'],
    usageExample: {
      code: `const p = new URLSearchParams()
p.size  // → 0`,
      explanation: {
        en: "An empty URLSearchParams has a size of 0.",
        es: "Un URLSearchParams vacío tiene un size de 0.",
      },
    },
  },
  {
    slug: 'urlsearchparams-properties-3',
    title: 'URLSearchParams#size — set does not add duplicate',
    description: `## URLSearchParams#size — set\n\n\`set()\` replaces all values for a key with one entry, so it does not increase size for existing keys.\n\n**Challenge:** Verify \`size\` after \`set()\` on an existing key.`,
    category: 'instance-property',
    difficulty: 'intermediate',
    builtIn: 'URLSearchParams',
    initialCode: `const params = new URLSearchParams('a=1&a=2')\nparams.set('a', 'new')\n// params.size should be 1\n`,
    solution: `const p = new URLSearchParams('a=1&a=2'); p.set('a','new'); p.size`,
    tests: [
      { description: 'set on duplicate collapses to 1', assertion:"const p=new URLSearchParams('a=1&a=2'); p.set('a','new'); expect(p.size).toBe(1)" },
      { description: 'set on existing key keeps size same', assertion:"const p2=new URLSearchParams('a=1&b=2'); p2.set('a','new'); expect(p2.size).toBe(2)" },
      { description: 'set new key increases size by 1', assertion:"const p3=new URLSearchParams('a=1'); p3.set('b','2'); expect(p3.size).toBe(2)" },
      { description: 'size reflects single value after set', assertion:"const p4=new URLSearchParams('a=1&a=2'); p4.set('a','x'); expect(p4.getAll('a')).toHaveLength(1)" },
      { description: 'set on empty params gives size 1', assertion:"const p5=new URLSearchParams(); p5.set('x','1'); expect(p5.size).toBe(1)" },
    ],
    hints: ['set() removes all existing entries for the key before adding one new one'],
    tags: ['URLSearchParams', 'instance-property', 'size', 'set'],
    usageExample: {
      code: `const p = new URLSearchParams('a=1&a=2')
p.size  // → 2 (counts each entry)`,
      explanation: {
        en: "size counts each key-value entry individually, including duplicate keys.",
        es: "size cuenta cada entrada clave-valor individualmente, incluidas las claves duplicadas.",
      },
    },
  },
  {
    slug: 'urlsearchparams-properties-4',
    title: 'URLSearchParams#size — decreases after delete',
    description: `## URLSearchParams#size — delete\n\n\`delete()\` removes all entries for a key, decreasing \`size\` accordingly.\n\n**Challenge:** Verify \`size\` after \`delete()\`.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'URLSearchParams',
    initialCode: `const params = new URLSearchParams('a=1&b=2&c=3')\nparams.delete('b')\n// params.size should be 2\n`,
    solution: `const p = new URLSearchParams('a=1&b=2&c=3'); p.delete('b'); p.size`,
    tests: [
      { description: 'size decreases after delete', assertion:"const p=new URLSearchParams('a=1&b=2'); p.delete('a'); expect(p.size).toBe(1)" },
      { description: 'delete all keys gives size 0', assertion:"const p2=new URLSearchParams('a=1'); p2.delete('a'); expect(p2.size).toBe(0)" },
      { description: 'delete duplicate key reduces by count', assertion:"const p3=new URLSearchParams('a=1&a=2&b=3'); p3.delete('a'); expect(p3.size).toBe(1)" },
      { description: 'delete non-existent key keeps size', assertion:"const p4=new URLSearchParams('a=1'); p4.delete('z'); expect(p4.size).toBe(1)" },
      { description: 'size after full clear is 0', assertion:"const p5=new URLSearchParams('a=1&b=2'); p5.delete('a'); p5.delete('b'); expect(p5.size).toBe(0)" },
    ],
    hints: ['Deleting a key that appears multiple times removes all its entries'],
    tags: ['URLSearchParams', 'instance-property', 'size', 'delete'],
    usageExample: {
      code: `const p = new URLSearchParams('x=1')
p.delete('x')
p.size  // → 0`,
      explanation: {
        en: "size reflects the current state after mutations like delete().",
        es: "size refleja el estado actual después de mutaciones como delete().",
      },
    },
  },
  {
    slug: 'urlsearchparams-properties-5',
    title: 'URLSearchParams#size — from string init',
    description: `## URLSearchParams#size — string init\n\n\`size\` reflects the number of key-value pairs parsed from the constructor string.\n\n**Challenge:** Verify \`size\` after initializing from a query string.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'URLSearchParams',
    initialCode: `const params = new URLSearchParams('a=1&b=2&c=3')\n// params.size\n`,
    solution: `new URLSearchParams('a=1&b=2&c=3').size`,
    tests: [
      { description: 'size from 2-param string is 2', assertion:"expect(new URLSearchParams('a=1&b=2').size).toBe(2)" },
      { description: 'size from 3-param string is 3', assertion:"expect(result).toBe(3)" },
      { description: 'duplicate keys counted separately', assertion:"expect(new URLSearchParams('a=1&a=2').size).toBe(2)" },
      { description: 'size from single param is 1', assertion:"expect(new URLSearchParams('x=hello').size).toBe(1)" },
      { description: 'size is a number', assertion:"expect(typeof new URLSearchParams('a=1').size).toBe('number')" },
    ],
    hints: ['size counts total entries, so duplicate keys each count as one entry'],
    tags: ['URLSearchParams', 'instance-property', 'size'],
    usageExample: {
      code: `const p = new URLSearchParams('a=1&b=2&c=3')
p.size === 3  // → true`,
      explanation: {
        en: "Use size to quickly check how many parameters are present.",
        es: "Usa size para verificar rápidamente cuántos parámetros están presentes.",
      },
    },
  },
]
