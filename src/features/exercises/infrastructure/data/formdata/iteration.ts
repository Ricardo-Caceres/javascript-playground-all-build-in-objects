import type { Exercise } from '@/shared/types/exercises'

export const formDataIterationExercises: Exercise[] = [
  {
    slug: 'formdata-iteration-1',
    title: 'FormData — keys() yields appended key',
    description: `## FormData.keys()\n\n\`keys()\` returns an iterator over all the keys in the FormData.\n\n**Challenge:** Append \`'a' -> '1'\` and verify \`Array.from(fd.keys())\` equals \`['a']\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FormData',
    initialCode: `const fd = new FormData();\n// append 'a'->'1' and collect keys\n`,
    solution: `const fd = new FormData(); fd.append('a', '1'); Array.from(fd.keys())`,
    tests: [
      { description: "keys yields ['a']", assertion: "const fd=new FormData(); fd.append('a','1'); expect(Array.from(fd.keys())).toEqual(['a'])" },
      { description: "keys empty for no entries", assertion: "expect(Array.from(new FormData().keys())).toEqual([])" },
      { description: "keys yields all keys", assertion: "const fd=new FormData(); fd.append('a','1'); fd.append('b','2'); expect(Array.from(fd.keys())).toEqual(['a','b'])" },
      { description: "values yields appended value", assertion: "const fd=new FormData(); fd.append('a','1'); expect(Array.from(fd.values())).toEqual(['1'])" },
      { description: "entries yields [key,val]", assertion: "const fd=new FormData(); fd.append('k','v'); expect(Array.from(fd.entries())[0]).toEqual(['k','v'])" },
    ],
    hints: ['keys() returns an iterator; wrap with Array.from() to convert to an array'],
    tags: ['FormData', 'keys', 'iteration', 'instance-method'],
    usageExample: {
      code: `const fd = new FormData()
fd.append('a', '1')
fd.append('b', '2')
for (const [k, v] of fd) { console.log(k, v) }`,
      explanation: {
        en: "FormData is iterable; each entry yields a [key, value] pair.",
        es: "FormData es iterable; cada entrada produce un par [clave, valor].",
      },
    },
  },
  {
    slug: 'formdata-iteration-2',
    title: 'FormData — values() yields appended value',
    description: `## FormData.values()\n\n\`values()\` returns an iterator over all the values in the FormData.\n\n**Challenge:** Append \`'a' -> '1'\` and verify \`Array.from(fd.values())\` equals \`['1']\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FormData',
    initialCode: `const fd = new FormData();\n// append 'a'->'1' and collect values\n`,
    solution: `const fd = new FormData(); fd.append('a', '1'); Array.from(fd.values())`,
    tests: [
      { description: "values yields ['1']", assertion: "const fd=new FormData(); fd.append('a','1'); expect(Array.from(fd.values())).toEqual(['1'])" },
      { description: "values empty for no entries", assertion: "expect(Array.from(new FormData().values())).toEqual([])" },
      { description: "keys yields appended key", assertion: "const fd=new FormData(); fd.append('a','1'); expect(Array.from(fd.keys())).toEqual(['a'])" },
      { description: "entries yields [key,val]", assertion: "const fd=new FormData(); fd.append('k','v'); expect(Array.from(fd.entries())[0]).toEqual(['k','v'])" },
      { description: "values yields all values", assertion: "const fd=new FormData(); fd.append('a','1'); fd.append('b','2'); expect(Array.from(fd.values())).toEqual(['1','2'])" },
    ],
    hints: ['values() returns an iterator; wrap with Array.from() to convert to an array'],
    tags: ['FormData', 'values', 'iteration', 'instance-method'],
    usageExample: {
      code: `const fd = new FormData()
fd.append('x', '1')
[...fd.keys()]    // → ['x']
[...fd.values()]  // → ['1']`,
      explanation: {
        en: "keys() and values() return iterators over the FormData field names and values.",
        es: "keys() y values() devuelven iteradores sobre los nombres de campo y valores del FormData.",
      },
    },
  },
  {
    slug: 'formdata-iteration-3',
    title: 'FormData — entries() yields [key, value] pair',
    description: `## FormData.entries()\n\n\`entries()\` returns an iterator of \`[name, value]\` pairs.\n\n**Challenge:** Append \`'k' -> 'v'\` and verify the first entry equals \`['k', 'v']\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'FormData',
    initialCode: `const fd = new FormData();\n// append 'k'->'v' and check first entry\n`,
    solution: `const fd = new FormData(); fd.append('k', 'v'); Array.from(fd.entries())[0]`,
    tests: [
      { description: "first entry is ['k','v']", assertion: "const fd=new FormData(); fd.append('k','v'); expect(Array.from(fd.entries())[0]).toEqual(['k','v'])" },
      { description: "entries empty for no data", assertion: "expect(Array.from(new FormData().entries())).toEqual([])" },
      { description: "keys yields appended key", assertion: "const fd=new FormData(); fd.append('a','1'); expect(Array.from(fd.keys())).toEqual(['a'])" },
      { description: "values yields appended value", assertion: "const fd=new FormData(); fd.append('a','1'); expect(Array.from(fd.values())).toEqual(['1'])" },
      { description: "entries count matches appends", assertion: "const fd=new FormData(); fd.append('a','1'); fd.append('b','2'); expect(Array.from(fd.entries()).length).toBe(2)" },
    ],
    hints: ['entries() returns [name, value] tuples; use Array.from() and index [0] to get the first'],
    tags: ['FormData', 'entries', 'iteration', 'instance-method'],
    usageExample: {
      code: `const fd = new FormData()
fd.append('q', 'hi')
[...fd.entries()]  // → [['q', 'hi']]`,
      explanation: {
        en: "entries() returns an iterator of [key, value] pairs.",
        es: "entries() devuelve un iterador de pares [clave, valor].",
      },
    },
  },
  {
    slug: 'formdata-iteration-4',
    title: 'FormData — forEach() iterates entries',
    description: `## FormData.forEach()\n\n\`forEach(callback)\` calls the callback for each key/value pair in the FormData.\n\n**Challenge:** Use \`forEach\` to count entries after appending \`'a' -> '1'\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'FormData',
    initialCode: `const fd = new FormData();\nfd.append('a', '1');\nlet count = 0;\n// use forEach to increment count\n`,
    solution: `const fd = new FormData(); fd.append('a', '1'); let count = 0; fd.forEach(() => { count++ }); count`,
    tests: [
      { description: "count is 1 after one append", assertion: "const fd=new FormData(); fd.append('a','1'); let count=0; fd.forEach(()=>{count++}); expect(count).toBe(1)" },
      { description: "count is 2 after two appends", assertion: "const fd=new FormData(); fd.append('a','1'); fd.append('b','2'); let count=0; fd.forEach(()=>{count++}); expect(count).toBe(2)" },
      { description: "forEach passes value as first arg", assertion: "const fd=new FormData(); fd.append('k','v'); let val=''; fd.forEach((v)=>{val=v}); expect(val).toBe('v')" },
      { description: "keys yields appended key", assertion: "const fd=new FormData(); fd.append('a','1'); expect(Array.from(fd.keys())).toEqual(['a'])" },
      { description: "entries yields [key,val]", assertion: "const fd=new FormData(); fd.append('k','v'); expect(Array.from(fd.entries())[0]).toEqual(['k','v'])" },
    ],
    hints: ['forEach(callback) passes (value, name, formData) to each call'],
    tags: ['FormData', 'forEach', 'iteration', 'instance-method'],
    usageExample: {
      code: `const fd = new FormData()
fd.append('a', '1')
fd.append('b', '2')
fd.forEach((val, key) => console.log(key, val))`,
      explanation: {
        en: "forEach() iterates over all fields with a callback(value, key) signature.",
        es: "forEach() itera sobre todos los campos con una firma callback(value, key).",
      },
    },
  },
  {
    slug: 'formdata-iteration-5',
    title: 'FormData — entries() iterator has Symbol.iterator',
    description: `## FormData entries iterator protocol\n\nThe iterator returned by \`entries()\` implements the iterable protocol, meaning it has a \`Symbol.iterator\` method.\n\n**Challenge:** Verify that \`typeof fd.entries()[Symbol.iterator]\` is \`'function'\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'FormData',
    initialCode: `const fd = new FormData();\nfd.append('x', '1');\n// check Symbol.iterator on entries()\n`,
    solution: `const fd = new FormData(); fd.append('x', '1'); typeof fd.entries()[Symbol.iterator]`,
    tests: [
      { description: "entries iterator has Symbol.iterator", assertion: "const fd=new FormData(); fd.append('x','1'); expect(typeof fd.entries()[Symbol.iterator]).toBe('function')" },
      { description: "keys iterator has Symbol.iterator", assertion: "const fd=new FormData(); fd.append('x','1'); expect(typeof fd.keys()[Symbol.iterator]).toBe('function')" },
      { description: "values iterator has Symbol.iterator", assertion: "const fd=new FormData(); fd.append('x','1'); expect(typeof fd.values()[Symbol.iterator]).toBe('function')" },
      { description: "entries yields [key,val]", assertion: "const fd=new FormData(); fd.append('k','v'); expect(Array.from(fd.entries())[0]).toEqual(['k','v'])" },
      { description: "for...of works on entries", assertion: "const fd=new FormData(); fd.append('k','v'); const results=[]; for(const [k,v] of fd.entries()){results.push([k,v])}; expect(results[0]).toEqual(['k','v'])" },
    ],
    hints: ['Iterators that also implement Symbol.iterator are called iterables — they can be used in for...of loops'],
    tags: ['FormData', 'entries', 'Symbol.iterator', 'iterator', 'instance-method'],
    usageExample: {
      code: `const fd = new FormData()
fd.append('x', '1')
fd.append('x', '2')
[...fd].length  // → 2 (counts each entry)`,
      explanation: {
        en: "Spreading FormData gives all [key, value] entries including duplicate keys.",
        es: "Expandir FormData da todas las entradas [clave, valor] incluidas las claves duplicadas.",
      },
    },
  },
]
