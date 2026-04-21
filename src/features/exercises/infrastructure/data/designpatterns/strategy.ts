import type { Exercise } from '@/shared/types/exercises'

export const dpStrategyExercises: Exercise[] = [
  {
    slug: 'dp-strategy-1',
    title: 'Strategy — Ascending sort',
    description: `## Strategy Pattern — Sorting Strategies

The Strategy pattern allows swapping algorithms at runtime. Here, different sorting strategies can be plugged in.

**Challenge:** Implement a \`Sorter\` class that accepts a \`strategy\` (a comparison function) and uses it to sort an array in ascending order.

Example:
\`\`\`javascript
const ascending = (a, b) => a - b
const sorter = new Sorter(ascending)
sorter.sort([3, 1, 2]) // [1, 2, 3]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'DesignPatterns',
    initialCode: `class Sorter {
  // Your code here
}

const ascending = (a, b) => a - b
const sorter = new Sorter(ascending)
sorter.sort([3, 1, 2])`,
    solution: `class Sorter {
  constructor(strategy) {
    this.strategy = strategy
  }
  sort(arr) {
    return arr.slice().sort(this.strategy)
  }
}

const ascending = (a, b) => a - b
const sorter = new Sorter(ascending)
sorter.sort([3, 1, 2])`,
    tests: [
      { description: 'ascending strategy sorts in ascending order', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const asc=(a,b)=>a-b; const s=new Sorter(asc); expect(s.sort([3,1,2])).toEqual([1,2,3])" },
      { description: 'returns new array (does not mutate original)', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const asc=(a,b)=>a-b; const s=new Sorter(asc); const orig=[3,1,2]; const res=s.sort(orig); expect(orig).toEqual([3,1,2]); expect(res).toEqual([1,2,3])" },
      { description: 'works with single element', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const asc=(a,b)=>a-b; const s=new Sorter(asc); expect(s.sort([5])).toEqual([5])" },
      { description: 'works with already sorted array', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const asc=(a,b)=>a-b; const s=new Sorter(asc); expect(s.sort([1,2,3])).toEqual([1,2,3])" },
      { description: 'strategy is stored and used', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const asc=(a,b)=>a-b; const s=new Sorter(asc); expect(s.s).toBe(asc)" },
    ],
    hints: ['Store strategy in constructor', 'Use the strategy function in sort', 'Use slice to avoid mutating original array'],
    tags: ['strategy', 'design-pattern', 'sorting', 'algorithm-selection'],
    usageExample: {
      code: `function sorter(data, strategy) {
  return [...data].sort(strategy);
}
const asc = (a, b) => a - b;
sorter([3, 1, 2], asc); // [1, 2, 3]`,
      explanation: {
        en: "The Strategy pattern swaps algorithms at runtime by passing them as parameters.",
        es: "El patrón Strategy intercambia algoritmos en tiempo de ejecución pasándolos como parámetros.",
      },
    },
  },
  {
    slug: 'dp-strategy-2',
    title: 'Strategy — Descending sort',
    description: `## Strategy Pattern — Different Sorting Strategy

The same \`Sorter\` class can use a different strategy to sort in descending order.

**Challenge:** Implement a \`Sorter\` class that works with both ascending and descending strategies.

Example:
\`\`\`javascript
const ascending = (a, b) => a - b
const descending = (a, b) => b - a
const asc = new Sorter(ascending)
const desc = new Sorter(descending)
asc.sort([3, 1, 2]) // [1, 2, 3]
desc.sort([3, 1, 2]) // [3, 2, 1]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'DesignPatterns',
    initialCode: `class Sorter {
  // Your code here
}

const ascending = (a, b) => a - b
const descending = (a, b) => b - a
const asc = new Sorter(ascending)
const desc = new Sorter(descending)`,
    solution: `class Sorter {
  constructor(strategy) {
    this.strategy = strategy
  }
  sort(arr) {
    return arr.slice().sort(this.strategy)
  }
}

const ascending = (a, b) => a - b
const descending = (a, b) => b - a
const asc = new Sorter(ascending)
const desc = new Sorter(descending)`,
    tests: [
      { description: 'descending strategy sorts in descending order', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const desc=(a,b)=>b-a; const s=new Sorter(desc); expect(s.sort([3,1,2])).toEqual([3,2,1])" },
      { description: 'ascending and descending produce opposite results', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const asc=(a,b)=>a-b; const desc=(a,b)=>b-a; const s1=new Sorter(asc); const s2=new Sorter(desc); const arr=[3,1,2]; expect(s1.sort(arr)).toEqual([1,2,3]); expect(s2.sort(arr)).toEqual([3,2,1])" },
      { description: 'descending strategy works with duplicates', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const desc=(a,b)=>b-a; const s=new Sorter(desc); expect(s.sort([3,1,3,2])).toEqual([3,3,2,1])" },
      { description: 'descending preserves order for equal elements', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const desc=(a,b)=>b-a; const s=new Sorter(desc); const res=s.sort([5,5,5]); expect(res).toEqual([5,5,5])" },
      { description: 'each strategy instance is independent', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const asc=(a,b)=>a-b; const desc=(a,b)=>b-a; const s1=new Sorter(asc); const s2=new Sorter(desc); expect(s1.s !== s2.s).toBe(true)" },
    ],
    hints: ['Create two different strategies', 'Pass different strategies to Sorter instances', 'Same Sorter class works with both'],
    tags: ['strategy', 'design-pattern', 'sorting', 'polymorphism'],
    usageExample: {
      code: `const desc = (a, b) => b - a;
sorter([3, 1, 2], desc); // [3, 2, 1]`,
      explanation: {
        en: "Pass a descending comparator to change sorting behavior without changing the sorter.",
        es: "Pasa un comparador descendente para cambiar el comportamiento sin cambiar el sorter.",
      },
    },
  },
  {
    slug: 'dp-strategy-3',
    title: 'Strategy — Runtime strategy swap',
    description: `## Strategy Pattern — Changing Strategy at Runtime

The strategy can be changed after the Sorter is created.

**Challenge:** Implement a \`Sorter\` class with a \`setStrategy(strategy)\` method to change the sorting algorithm at runtime.

Example:
\`\`\`javascript
const sorter = new Sorter()
sorter.setStrategy((a, b) => a - b)
sorter.sort([3, 1, 2]) // [1, 2, 3]
sorter.setStrategy((a, b) => b - a)
sorter.sort([3, 1, 2]) // [3, 2, 1]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'DesignPatterns',
    initialCode: `class Sorter {
  // Your code here
}

const sorter = new Sorter()
sorter.setStrategy((a, b) => a - b)
sorter.sort([3, 1, 2])`,
    solution: `class Sorter {
  constructor(strategy = null) {
    this.strategy = strategy
  }
  setStrategy(strategy) {
    this.strategy = strategy
  }
  sort(arr) {
    return arr.slice().sort(this.strategy)
  }
}

const sorter = new Sorter()
sorter.setStrategy((a, b) => a - b)
sorter.sort([3, 1, 2])`,
    tests: [
      { description: 'can set strategy after creation', assertion:"class Sorter{constructor(s=null){this.s=s}setStrategy(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const sorter=new Sorter(); sorter.setStrategy((a,b)=>a-b); expect(sorter.sort([3,1,2])).toEqual([1,2,3])" },
      { description: 'can swap strategy at runtime', assertion:"class Sorter{constructor(s=null){this.s=s}setStrategy(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const sorter=new Sorter(); sorter.setStrategy((a,b)=>a-b); sorter.sort([3,1,2]); sorter.setStrategy((a,b)=>b-a); expect(sorter.sort([3,1,2])).toEqual([3,2,1])" },
      { description: 'strategy persists across multiple sorts', assertion:"class Sorter{constructor(s=null){this.s=s}setStrategy(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const sorter=new Sorter(); sorter.setStrategy((a,b)=>a-b); expect(sorter.sort([3,1])).toEqual([1,3]); expect(sorter.sort([5,2])).toEqual([2,5])" },
      { description: 'multiple setStrategy calls work', assertion:"class Sorter{constructor(s=null){this.s=s}setStrategy(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const sorter=new Sorter(); sorter.setStrategy((a,b)=>a-b); sorter.setStrategy((a,b)=>b-a); expect(sorter.sort([1,3,2])).toEqual([3,2,1])" },
      { description: 'setStrategy updates the strategy property', assertion:"class Sorter{constructor(s=null){this.s=s}setStrategy(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const sorter=new Sorter(); const strat=(a,b)=>a-b; sorter.setStrategy(strat); expect(sorter.s).toBe(strat)" },
    ],
    hints: ['Initialize strategy to null or undefined', 'Add setStrategy method', 'Update this.strategy in setStrategy', 'Use current strategy in sort'],
    tags: ['strategy', 'runtime-swap', 'design-pattern', 'flexibility'],
    usageExample: {
      code: `let strategy = (a, b) => a - b;
function sort(arr) { return [...arr].sort(strategy); }
// change strategy at runtime:
strategy = (a, b) => b - a;`,
      explanation: {
        en: "Swap the strategy variable at runtime to change behavior without modifying calling code.",
        es: "Intercambia la variable de estrategia en tiempo de ejecución sin modificar el código llamador.",
      },
    },
  },
  {
    slug: 'dp-strategy-4',
    title: 'Strategy — Custom comparator',
    description: `## Strategy Pattern — Sorting Objects by Property

Strategies can be used to sort complex objects based on specific criteria.

**Challenge:** Create a \`Sorter\` that can sort objects using a strategy. Implement a strategy that sorts users by their \`age\` property in ascending order.

Example:
\`\`\`javascript
const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
]
const byAge = (a, b) => a.age - b.age
const sorter = new Sorter(byAge)
sorter.sort(users)
// [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'DesignPatterns',
    initialCode: `class Sorter {
  // Your code here
}

const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
]
const byAge = (a, b) => a.age - b.age
const sorter = new Sorter(byAge)
sorter.sort(users)`,
    solution: `class Sorter {
  constructor(strategy) {
    this.strategy = strategy
  }
  sort(arr) {
    return arr.slice().sort(this.strategy)
  }
}

const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
]
const byAge = (a, b) => a.age - b.age
const sorter = new Sorter(byAge)
sorter.sort(users)`,
    tests: [
      { description: 'sorts objects by age in ascending order', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const users=[{n:'A',a:30},{n:'B',a:25}]; const byAge=(a,b)=>a.a-b.a; const res=new Sorter(byAge).sort(users); expect(res[0].a).toBe(25); expect(res[1].a).toBe(30)" },
      { description: 'preserves object structure', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const users=[{n:'A',a:30},{n:'B',a:25}]; const byAge=(a,b)=>a.a-b.a; const res=new Sorter(byAge).sort(users); expect(res[0].n).toBe('B')" },
      { description: 'works with multiple sort fields', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const items=[{v:2},{v:1},{v:3}]; const byV=(a,b)=>a.v-b.v; const res=new Sorter(byV).sort(items); expect(res[0].v).toBe(1); expect(res[1].v).toBe(2); expect(res[2].v).toBe(3)" },
      { description: 'custom strategy can sort by different property', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const items=[{p:30,q:'x'},{p:10,q:'y'}]; const byP=(a,b)=>a.p-b.p; const res=new Sorter(byP).sort(items); expect(res[0].p).toBe(10); expect(res[1].p).toBe(30)" },
      { description: 'does not mutate original array', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const orig=[{a:3},{a:1}]; const byA=(a,b)=>a.a-b.a; new Sorter(byA).sort(orig); expect(orig[0].a).toBe(3)" },
    ],
    hints: ['Access properties within strategy function', 'Use a, b to compare objects', 'Return difference or comparison result'],
    tags: ['strategy', 'object-sorting', 'comparator', 'design-pattern'],
    usageExample: {
      code: `const byName = (a, b) => a.name.localeCompare(b.name);
const byAge = (a, b) => a.age - b.age;
const users = [{ name: 'Bob', age: 30 }, { name: 'Alice', age: 25 }];
users.sort(byName); // Alice first`,
      explanation: {
        en: "Custom comparator strategies let you sort objects by any property.",
        es: "Las estrategias de comparador personalizadas permiten ordenar objetos por cualquier propiedad.",
      },
    },
  },
  {
    slug: 'dp-strategy-5',
    title: 'Strategy — Multiple strategy instances',
    description: `## Strategy Pattern — Different Strategy Instances

Two different Sorter instances with different strategies should produce different results.

**Challenge:** Create two \`Sorter\` instances with different strategies. Verify they sort the same array differently.

Example:
\`\`\`javascript
const ascending = (a, b) => a - b
const descending = (a, b) => b - a
const s1 = new Sorter(ascending)
const s2 = new Sorter(descending)
s1.sort([3, 1, 2]) // [1, 2, 3]
s2.sort([3, 1, 2]) // [3, 2, 1]
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'DesignPatterns',
    initialCode: `class Sorter {
  // Your code here
}

const ascending = (a, b) => a - b
const descending = (a, b) => b - a
const s1 = new Sorter(ascending)
const s2 = new Sorter(descending)`,
    solution: `class Sorter {
  constructor(strategy) {
    this.strategy = strategy
  }
  sort(arr) {
    return arr.slice().sort(this.strategy)
  }
}

const ascending = (a, b) => a - b
const descending = (a, b) => b - a
const s1 = new Sorter(ascending)
const s2 = new Sorter(descending)`,
    tests: [
      { description: 'two sorters with different strategies produce different results', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const asc=(a,b)=>a-b; const desc=(a,b)=>b-a; const s1=new Sorter(asc); const s2=new Sorter(desc); expect(s1.sort([3,1,2])).toEqual([1,2,3]); expect(s2.sort([3,1,2])).toEqual([3,2,1])" },
      { description: 'each sorter maintains its own strategy', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const asc=(a,b)=>a-b; const desc=(a,b)=>b-a; const s1=new Sorter(asc); const s2=new Sorter(desc); expect(s1.s !== s2.s).toBe(true)" },
      { description: 'sorter strategies remain independent', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const asc=(a,b)=>a-b; const desc=(a,b)=>b-a; const s1=new Sorter(asc); const s2=new Sorter(desc); s1.sort([5,1]); expect(s2.sort([5,1])).toEqual([5,1])" },
      { description: 'multiple sorters can be used on same array', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const asc=(a,b)=>a-b; const desc=(a,b)=>b-a; const s1=new Sorter(asc); const s2=new Sorter(desc); const arr=[4,2,3,1]; expect(s1.sort(arr)).toEqual([1,2,3,4]); expect(s2.sort(arr)).toEqual([4,3,2,1])" },
      { description: 'three sorters with different strategies work independently', assertion:"class Sorter{constructor(s){this.s=s}sort(a){return a.slice().sort(this.s)}} const asc=(a,b)=>a-b; const desc=(a,b)=>b-a; const mod=(a,b)=>(a%2)-(b%2); const s1=new Sorter(asc); const s2=new Sorter(desc); const s3=new Sorter(mod); const arr=[4,3,2,1]; expect(s1.sort(arr)[0]).toBe(1); expect(s2.sort(arr)[0]).toBe(4); expect(s3.sort(arr)[0]).toBeGreaterThanOrEqual(1)" },
    ],
    hints: ['Each Sorter instance stores its own strategy', 'Different strategies produce different results', 'Instances are independent'],
    tags: ['strategy', 'multiple-instances', 'design-pattern', 'independence'],
    usageExample: {
      code: `const stratA = { sort: arr => [...arr].sort() };
const stratB = { sort: arr => [...arr].sort((a, b) => b - a) };
[stratA, stratB].forEach(s => console.log(s.sort([3, 1, 2])));`,
      explanation: {
        en: "Bundle strategies as objects with a common interface for clean interchangeability.",
        es: "Empaqueta estrategias como objetos con una interfaz común para intercambiabilidad limpia.",
      },
    },
  },
]
