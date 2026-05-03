import type { LearningPathSection } from './learningPathConfig'

interface LocalizedTopic {
  title: string
  description: string
}

type Locale = 'es' | 'en'

const translations: Record<Locale, Record<string, LocalizedTopic>> = {
  en: {
    variables: {
      title: "Variables & Scope",
      description: "Master let, const, var, hoisting, and block scope — the foundation of JavaScript."
    },
    boolean: {
      title: "Data Types - Boolean",
      description: "Working with boolean values and truthiness — fundamental to conditional logic."
    },
    number: {
      title: "Data Types - Numbers",
      description: "Numeric operations, special values (NaN, Infinity), and precision — handling numbers correctly."
    },
    bigint: {
      title: "Data Types - BigInt",
      description: "Arbitrary-precision integers — working with numbers beyond JavaScript's safe integer limit."
    },
    operators: {
      title: "Operators",
      description: "Arithmetic, comparison, logical, nullish coalescing, and modern ES2021+ operators."
    },
    typecoercion: {
      title: "Type Coercion",
      description: "Understand implicit and explicit type conversion — one of JavaScript's most misunderstood features."
    },
    controlflow: {
      title: "Control Flow",
      description: "if/else, switch, loops, break/continue, generators — how JavaScript makes decisions."
    },
    function: {
      title: "Functions",
      description: "Function declarations, arrow functions, closures, and higher-order functions — mastering code organization."
    },
    closures: {
      title: "Closures",
      description: "Lexical scoping, closures, variable capture — advanced scope concepts."
    },
    object: {
      title: "Objects & Prototypes",
      description: "Object creation, property access, prototype chain — understanding JavaScript's object model."
    },
    prototypes: {
      title: "Prototypes & Inheritance",
      description: "Prototype chain, inheritance patterns, Object.create — deep dive into object inheritance."
    },
    array: {
      title: "Arrays",
      description: "Array methods, iteration, transformation — working with collections of data."
    },
    string: {
      title: "Strings",
      description: "String methods, template literals, pattern matching — text manipulation in JavaScript."
    },
    destructuring: {
      title: "Destructuring",
      description: "Array and object destructuring — extracting values efficiently from complex data structures."
    },
    strictmode: {
      title: "Strict Mode",
      description: "Opt into safer JavaScript with 'use strict' — prevents silent errors and bad patterns."
    },
    promise: {
      title: "Promises & Async",
      description: "Promises, async/await, error handling — managing asynchronous operations."
    },
    asyncpatterns: {
      title: "Advanced Async Patterns",
      description: "Async iterators, generators, and patterns — mastering complex asynchronous flows."
    },
    error: {
      title: "Error Handling",
      description: "Try/catch, error types, custom errors — robust error management."
    },
    modules: {
      title: "Modules",
      description: "ES module system: named/default exports, dynamic import, and module patterns."
    },
    symbol: {
      title: "Symbols",
      description: "Creating unique and immutable symbols — advanced identity and privacy patterns."
    },
    generator: {
      title: "Generators & Iterators",
      description: "Generator functions, iterators, and the iterable protocol — advanced iteration patterns."
    },
    regex: {
      title: "Regular Expressions",
      description: "Pattern matching with regex — powerful text search and validation."
    },
    json: {
      title: "JSON",
      description: "JSON serialization and parsing — working with structured data."
    },
    map: {
      title: "Map & Set",
      description: "Map and Set collections — better alternatives to objects and arrays for specific use cases."
    },
    weakmap: {
      title: "WeakMap & WeakSet",
      description: "Weak references for garbage collection — memory-efficient data structures."
    },
    proxy: {
      title: "Proxies & Reflect",
      description: "Metaprogramming with proxies — intercept and customize operations on objects."
    },
    reflect: {
      title: "Reflect API",
      description: "Metaprogramming with Reflect — cleaner way to manipulate objects."
    },
    math: {
      title: "Math Object",
      description: "Mathematical functions and constants — performing calculations and random operations."
    },
    date: {
      title: "Date & Time",
      description: "Working with dates and timezones — managing temporal data."
    },
    url: {
      title: "URL & URLSearchParams",
      description: "Working with URLs and query parameters — parsing and manipulating URLs."
    },
    designpatterns: {
      title: "Design Patterns",
      description: "Common JavaScript design patterns — proven solutions to recurring problems."
    },
    functionalprogramming: {
      title: "Functional Programming",
      description: "Functional paradigms in JavaScript — pure functions, immutability, composition."
    },
    algorithms: {
      title: "Algorithms",
      description: "Core algorithms — sorting, searching, and graph traversal."
    },
    typedarrays: {
      title: "TypedArrays & Buffers",
      description: "Low-level binary data handling — working with ArrayBuffer and typed arrays."
    },
  },
  es: {
    variables: {
      title: "Variables y Alcance",
      description: "Domina let, const, var, hoisting y scope de bloque — los fundamentos de JavaScript."
    },
    boolean: {
      title: "Tipo de Dato - Boolean",
      description: "Trabaja con valores booleanos y veracidad — fundamental para la lógica condicional."
    },
    number: {
      title: "Tipo de Dato - Números",
      description: "Operaciones numéricas, valores especiales (NaN, Infinity), precisión — maneja números correctamente."
    },
    bigint: {
      title: "Tipo de Dato - BigInt",
      description: "Enteros de precisión arbitraria — trabaja con números más allá del límite seguro de JavaScript."
    },
    operators: {
      title: "Operadores",
      description: "Aritmética, comparación, lógica, coalescencia nula y operadores modernos ES2021+."
    },
    typecoercion: {
      title: "Coerción de Tipos",
      description: "Entiende la conversión de tipos implícita y explícita — una de las características más malentendidas de JavaScript."
    },
    controlflow: {
      title: "Flujo de Control",
      description: "if/else, switch, bucles, break/continue, generadores — cómo JavaScript toma decisiones."
    },
    function: {
      title: "Funciones",
      description: "Declaraciones de función, funciones flecha, closures, funciones de orden superior — domina la organización del código."
    },
    closures: {
      title: "Closures",
      description: "Alcance léxico, closures, captura de variables — conceptos avanzados de scope."
    },
    object: {
      title: "Objetos y Prototipos",
      description: "Creación de objetos, acceso a propiedades, cadena de prototipos — entiende el modelo de objetos de JavaScript."
    },
    prototypes: {
      title: "Prototipos e Herencia",
      description: "Cadena de prototipos, patrones de herencia, Object.create — análisis profundo de la herencia de objetos."
    },
    array: {
      title: "Arrays",
      description: "Métodos de array, iteración, transformación — trabaja con colecciones de datos."
    },
    string: {
      title: "Strings",
      description: "Métodos de string, template literals, coincidencia de patrones — manipulación de texto en JavaScript."
    },
    destructuring: {
      title: "Desestructuración",
      description: "Desestructuración de arrays y objetos — extrae valores eficientemente de estructuras de datos complejas."
    },
    strictmode: {
      title: "Modo Estricto",
      description: "Opta por un JavaScript más seguro con 'use strict' — previene errores silenciosos y patrones incorrectos."
    },
    promise: {
      title: "Promises y Async",
      description: "Promises, async/await, manejo de errores — gestiona operaciones asincrónicas."
    },
    asyncpatterns: {
      title: "Patrones Async Avanzados",
      description: "Iteradores async, generadores y patrones — domina flujos asincróicos complejos."
    },
    error: {
      title: "Manejo de Errores",
      description: "Try/catch, tipos de errores, errores personalizados — gestión robusta de errores."
    },
    modules: {
      title: "Módulos",
      description: "Sistema de módulos ES: exports nombrados/por defecto, import dinámico, patrones de módulos."
    },
    symbol: {
      title: "Símbolos",
      description: "Crea símbolos únicos e inmutables — patrones avanzados de identidad y privacidad."
    },
    generator: {
      title: "Generadores e Iteradores",
      description: "Funciones generadoras, iteradores y el protocolo iterable — patrones de iteración avanzados."
    },
    regex: {
      title: "Expresiones Regulares",
      description: "Coincidencia de patrones con regex — búsqueda y validación de texto potente."
    },
    json: {
      title: "JSON",
      description: "Serialización y parsing de JSON — trabaja con datos estructurados."
    },
    map: {
      title: "Map y Set",
      description: "Colecciones Map y Set — mejores alternativas a objetos y arrays para casos específicos."
    },
    weakmap: {
      title: "WeakMap y WeakSet",
      description: "Referencias débiles para recolección de basura — estructuras de datos eficientes en memoria."
    },
    proxy: {
      title: "Proxies y Reflect",
      description: "Metaprogramación con proxies — intercepta y personaliza operaciones en objetos."
    },
    reflect: {
      title: "API Reflect",
      description: "Metaprogramación con Reflect — forma más limpia de manipular objetos."
    },
    math: {
      title: "Objeto Math",
      description: "Funciones matemáticas y constantes — realiza cálculos y operaciones aleatorias."
    },
    date: {
      title: "Fecha y Hora",
      description: "Trabaja con fechas y zonas horarias — gestión de datos temporales."
    },
    url: {
      title: "URL y URLSearchParams",
      description: "Trabaja con URLs y parámetros de consulta — análisis y manipulación de URLs."
    },
    designpatterns: {
      title: "Patrones de Diseño",
      description: "Patrones comunes de JavaScript — soluciones probadas para problemas recurrentes."
    },
    functionalprogramming: {
      title: "Programación Funcional",
      description: "Paradigmas funcionales en JavaScript — funciones puras, inmutabilidad, composición."
    },
    algorithms: {
      title: "Algoritmos",
      description: "Algoritmos fundamentales — ordenamiento, búsqueda y recorrido de grafos."
    },
    typedarrays: {
      title: "TypedArrays y Buffers",
      description: "Manejo de datos binarios de bajo nivel — trabaja con ArrayBuffer y typed arrays."
    },
  }
}

export function getLocalizedLearningPathSection(
  section: LearningPathSection,
  locale: string
): LearningPathSection {
  const t = translations[locale as Locale]?.[section.topicKey]
  if (!t) return section
  
  return {
    ...section,
    title: t.title,
    description: t.description
  }
}

export function getLocalizedLearningPath(
  sections: LearningPathSection[],
  locale: string
): LearningPathSection[] {
  return sections.map(section => getLocalizedLearningPathSection(section, locale))
}
