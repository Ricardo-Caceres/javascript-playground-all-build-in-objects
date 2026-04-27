import type { TopicMeta } from '@/shared/types/exercises'

export const topicMetaMap: Record<string, TopicMeta> = {
  abortcontroller: {
    description: {
      en: 'AbortController lets you cancel async operations like fetch requests. You create a controller, pass its signal to an async API, and call abort() whenever you want to stop it — preventing wasted work and memory leaks.',
      es: 'AbortController permite cancelar operaciones asíncronas como peticiones fetch. Creas un controlador, pasas su signal a una API asíncrona y llamas a abort() cuando quieras detenerla, evitando trabajo innecesario y fugas de memoria.',
    },
  },
  abortsignal: {
    description: {
      en: 'AbortSignal is the read-only token produced by AbortController. It carries the cancelled state and fires the "abort" event. APIs like fetch and streams accept a signal so they can stop themselves when the controller fires abort().',
      es: 'AbortSignal es el token de solo lectura que produce AbortController. Lleva el estado de cancelación y dispara el evento "abort". APIs como fetch y streams aceptan un signal para poder detenerse cuando el controlador llama a abort().',
    },
  },
  aggregateerror: {
    description: {
      en: 'AggregateError wraps multiple errors into a single error object with an errors array. It is thrown by Promise.any() when all promises reject, and is useful any time you want to surface several failures at once.',
      es: 'AggregateError agrupa varios errores en un único objeto error con una propiedad errors. Lo lanza Promise.any() cuando todas las promesas son rechazadas, y es útil cuando quieres exponer varios fallos al mismo tiempo.',
    },
  },
  algorithms: {
    description: {
      en: 'Classic computer-science algorithms implemented in JavaScript — sorting, searching, recursion, string manipulation, and data structures. Understanding these patterns sharpens problem-solving skills applicable across every language and framework.',
      es: 'Algoritmos clásicos de ciencias de la computación implementados en JavaScript: ordenamiento, búsqueda, recursión, manipulación de cadenas y estructuras de datos. Dominar estos patrones mejora la resolución de problemas en cualquier lenguaje o framework.',
    },
  },
  array: {
    description: {
      en: 'Array is JavaScript\'s most-used ordered collection. It stores elements by numeric index and offers a rich set of built-in methods for transforming, searching, filtering, and reducing data — the foundation of most data-manipulation code.',
      es: 'Array es la colección ordenada más usada en JavaScript. Almacena elementos por índice numérico y ofrece un amplio conjunto de métodos para transformar, buscar, filtrar y reducir datos — la base de la mayoría del código de manipulación de datos.',
    },
  },
  arraybuffer: {
    description: {
      en: 'ArrayBuffer is a fixed-size block of raw binary memory. It has no methods for reading or writing on its own — you access it through typed array views (Uint8Array, Float32Array, etc.) or a DataView. It is the building block for binary data handling in JS.',
      es: 'ArrayBuffer es un bloque de memoria binaria de tamaño fijo. Por sí solo no tiene métodos de lectura o escritura — se accede a través de vistas de array tipado (Uint8Array, Float32Array, etc.) o DataView. Es el bloque fundamental para manejar datos binarios en JS.',
    },
  },
  asyncpatterns: {
    description: {
      en: 'Async patterns are idiomatic ways to handle asynchronous code in JavaScript: Promises, async/await, parallel execution with Promise.all, cancellation with AbortController, retry logic, and more. Mastering these patterns is essential for real-world web development.',
      es: 'Los patrones asíncronos son formas idiomáticas de manejar código asíncrono en JavaScript: Promises, async/await, ejecución paralela con Promise.all, cancelación con AbortController, lógica de reintentos y más. Dominarlos es esencial para el desarrollo web profesional.',
    },
  },
  atomics: {
    description: {
      en: 'Atomics provides low-level atomic operations on SharedArrayBuffer memory shared between workers. It ensures operations like add, load, store, and wait are performed without race conditions — critical for concurrent JavaScript across threads.',
      es: 'Atomics proporciona operaciones atómicas de bajo nivel en memoria SharedArrayBuffer compartida entre workers. Garantiza que operaciones como add, load, store y wait se ejecuten sin condiciones de carrera, algo crítico para JavaScript concurrente en múltiples hilos.',
    },
  },
  bigint: {
    description: {
      en: 'BigInt represents integers of arbitrary precision, beyond the safe integer limit of Number (2^53−1). You write them with an n suffix (42n) or BigInt(). They are useful for cryptography, large IDs, and financial calculations that need exact integer arithmetic.',
      es: 'BigInt representa enteros de precisión arbitraria, más allá del límite de entero seguro de Number (2^53−1). Se escriben con el sufijo n (42n) o BigInt(). Son útiles en criptografía, IDs grandes y cálculos financieros que requieren aritmética exacta.',
    },
  },
  blob: {
    description: {
      en: 'Blob (Binary Large Object) represents raw immutable binary data with an optional MIME type. It is the standard way to handle files, images, audio, and any binary content in browser APIs — used with FileReader, URL.createObjectURL, and fetch.',
      es: 'Blob (Binary Large Object) representa datos binarios inmutables con un tipo MIME opcional. Es la forma estándar de manejar archivos, imágenes, audio y cualquier contenido binario en APIs del navegador — se usa con FileReader, URL.createObjectURL y fetch.',
    },
  },
  boolean: {
    description: {
      en: 'Boolean is the simplest type in JavaScript — true or false. The Boolean() function converts any value to its boolean equivalent using JavaScript\'s "truthiness" rules. Understanding truthy/falsy values is fundamental to writing correct conditionals.',
      es: 'Boolean es el tipo más simple en JavaScript — true o false. La función Boolean() convierte cualquier valor a su equivalente booleano usando las reglas de "veracidad" de JavaScript. Entender los valores truthy/falsy es fundamental para escribir condicionales correctas.',
    },
  },
  closures: {
    description: {
      en: 'A closure is a function that captures and remembers variables from its surrounding scope even after that scope has finished executing. Closures are the mechanism behind private state, factory functions, callbacks, and most functional patterns in JavaScript.',
      es: 'Un closure es una función que captura y recuerda las variables de su ámbito circundante incluso después de que ese ámbito haya terminado de ejecutarse. Los closures son el mecanismo detrás del estado privado, funciones factory, callbacks y la mayoría de los patrones funcionales en JavaScript.',
    },
  },
  console: {
    description: {
      en: 'The console object provides debugging output methods: log, warn, error, table, group, time, and more. Knowing how to use console effectively — including formatted output, grouping, and timing — speeds up everyday debugging and profiling.',
      es: 'El objeto console proporciona métodos de salida para depuración: log, warn, error, table, group, time y más. Saber usar console eficazmente — incluyendo salida formateada, agrupación y temporización — acelera la depuración y el profiling cotidiano.',
    },
  },
  crypto: {
    description: {
      en: 'The Web Crypto API (globalThis.crypto) provides cryptographic operations: secure random numbers, hashing (SHA-256), HMAC, and key generation. It is the standard way to do security-sensitive operations in the browser and Node.js without third-party libraries.',
      es: 'La Web Crypto API (globalThis.crypto) proporciona operaciones criptográficas: números aleatorios seguros, hashing (SHA-256), HMAC y generación de claves. Es la forma estándar de realizar operaciones sensibles a la seguridad en el navegador y Node.js sin librerías externas.',
    },
  },
  dataview: {
    description: {
      en: 'DataView provides a low-level interface to read and write multiple numeric types (Int8, Uint32, Float64, etc.) at arbitrary byte offsets within an ArrayBuffer, with explicit control over byte order (endianness). Essential for parsing binary protocols and file formats.',
      es: 'DataView proporciona una interfaz de bajo nivel para leer y escribir múltiples tipos numéricos (Int8, Uint32, Float64, etc.) en desplazamientos de bytes arbitrarios dentro de un ArrayBuffer, con control explícito del orden de bytes (endianness). Esencial para parsear protocolos binarios y formatos de archivo.',
    },
  },
  date: {
    description: {
      en: 'Date represents a single point in time as milliseconds since the Unix epoch (Jan 1, 1970 UTC). It provides methods to get/set year, month, day, hours, and to format dates. For complex timezone and calendar work, consider the Temporal API or a library like date-fns.',
      es: 'Date representa un instante en el tiempo como milisegundos desde el epoch Unix (1 de enero de 1970 UTC). Proporciona métodos para obtener/establecer año, mes, día, horas y formatear fechas. Para trabajos complejos con zonas horarias, considera la API Temporal o una librería como date-fns.',
    },
  },
  designpatterns: {
    description: {
      en: 'Design patterns are reusable solutions to common software-design problems — Singleton, Factory, Observer, Strategy, and more. Learning them in JavaScript shows how idiomatic JS (closures, prototypes, modules) maps onto classic object-oriented patterns.',
      es: 'Los patrones de diseño son soluciones reutilizables a problemas comunes de diseño de software — Singleton, Factory, Observer, Strategy y más. Aprenderlos en JavaScript muestra cómo el JS idiomático (closures, prototipos, módulos) se mapea sobre los patrones clásicos orientados a objetos.',
    },
  },
  error: {
    description: {
      en: 'Error is the base class for runtime errors. You can throw built-in errors (TypeError, RangeError…) or extend Error to create custom ones. Understanding the error hierarchy and how to attach useful messages and stack traces is key to robust error handling.',
      es: 'Error es la clase base para los errores en tiempo de ejecución. Puedes lanzar errores integrados (TypeError, RangeError…) o extender Error para crear los tuyos. Entender la jerarquía de errores y cómo adjuntar mensajes y stack traces útiles es clave para un manejo de errores robusto.',
    },
  },
  event: {
    description: {
      en: 'Event is the base interface for every browser event — mouse clicks, keyboard presses, network responses, and custom events. Understanding how to create, dispatch, listen to, and cancel events is fundamental to interactive web programming.',
      es: 'Event es la interfaz base para cada evento del navegador — clics de ratón, pulsaciones de teclado, respuestas de red y eventos personalizados. Entender cómo crear, despachar, escuchar y cancelar eventos es fundamental para la programación web interactiva.',
    },
  },
  eventtarget: {
    description: {
      en: 'EventTarget is the DOM interface implemented by any object that can receive and dispatch events — Elements, Window, XMLHttpRequest, AudioNode, and more. Its three methods (addEventListener, removeEventListener, dispatchEvent) are the backbone of the browser event system.',
      es: 'EventTarget es la interfaz DOM implementada por cualquier objeto que puede recibir y despachar eventos — Elements, Window, XMLHttpRequest, AudioNode y más. Sus tres métodos (addEventListener, removeEventListener, dispatchEvent) son la columna vertebral del sistema de eventos del navegador.',
    },
  },
  file: {
    description: {
      en: 'File extends Blob and represents an actual file from the user\'s filesystem — with a name, last modified date, and MIME type. It is what you get from <input type="file"> or drag-and-drop, and you can read its contents with FileReader or arrayBuffer().',
      es: 'File extiende Blob y representa un archivo real del sistema de archivos del usuario — con nombre, fecha de última modificación y tipo MIME. Es lo que obtienes de <input type="file"> o drag-and-drop, y puedes leer su contenido con FileReader o arrayBuffer().',
    },
  },
  finalizationregistry: {
    description: {
      en: 'FinalizationRegistry lets you register a cleanup callback that fires after an object is garbage-collected. It is a last-resort tool for releasing external resources (native handles, unmanaged memory) and should not be used for logic that must run reliably.',
      es: 'FinalizationRegistry permite registrar un callback de limpieza que se ejecuta después de que un objeto sea recolectado por el garbage collector. Es una herramienta de último recurso para liberar recursos externos (handles nativos, memoria no gestionada) y no debe usarse para lógica que deba ejecutarse de forma fiable.',
    },
  },
  formdata: {
    description: {
      en: 'FormData constructs key-value pairs that mirror HTML form submissions. It is the standard way to send multipart data (including file uploads) with fetch — no need to set Content-Type manually, the browser handles multipart encoding automatically.',
      es: 'FormData construye pares clave-valor que imitan los envíos de formularios HTML. Es la forma estándar de enviar datos multiparte (incluyendo subida de archivos) con fetch — sin necesidad de establecer Content-Type manualmente, el navegador gestiona la codificación multiparte automáticamente.',
    },
  },
  function: {
    description: {
      en: 'Functions are first-class values in JavaScript — they can be stored in variables, passed as arguments, returned from other functions, and have properties. Mastering function declarations, expressions, arrow functions, closures, and higher-order patterns is essential.',
      es: 'Las funciones son valores de primera clase en JavaScript — pueden almacenarse en variables, pasarse como argumentos, retornarse de otras funciones y tener propiedades. Dominar declaraciones de función, expresiones, arrow functions, closures y patrones de orden superior es fundamental.',
    },
  },
  functionalprogramming: {
    description: {
      en: 'Functional programming treats computation as the evaluation of pure functions, avoiding mutable state and side effects. In JavaScript this means using map/filter/reduce, currying, function composition, immutable data, and higher-order functions to write predictable, testable code.',
      es: 'La programación funcional trata la computación como evaluación de funciones puras, evitando estado mutable y efectos secundarios. En JavaScript esto significa usar map/filter/reduce, currying, composición de funciones, datos inmutables y funciones de orden superior para escribir código predecible y testeable.',
    },
  },
  generator: {
    description: {
      en: 'Generators are functions that can pause and resume execution using yield. They produce lazy sequences on demand, making them ideal for infinite series, custom iterators, async workflows, and cooperative multitasking in JavaScript.',
      es: 'Los generadores son funciones que pueden pausar y reanudar la ejecución usando yield. Producen secuencias de forma perezosa bajo demanda, lo que los hace ideales para series infinitas, iteradores personalizados, flujos asíncronos y multitarea cooperativa en JavaScript.',
    },
  },
  globalfunctions: {
    description: {
      en: 'JavaScript\'s global functions (parseInt, parseFloat, isNaN, isFinite, encodeURIComponent, decodeURIComponent, eval…) are available everywhere without import. Knowing their edge cases — especially around NaN, coercion, and URI encoding — prevents subtle bugs.',
      es: 'Las funciones globales de JavaScript (parseInt, parseFloat, isNaN, isFinite, encodeURIComponent, decodeURIComponent, eval…) están disponibles en todas partes sin importar. Conocer sus casos límite — especialmente en torno a NaN, coerción y codificación de URI — previene bugs sutiles.',
    },
  },
  globalthis: {
    description: {
      en: 'globalThis is a standardised way to access the global object regardless of environment — browser (window), Node.js (global), Web Worker (self), or others. It is the portable replacement for checking typeof window !== "undefined" hacks.',
      es: 'globalThis es una forma estandarizada de acceder al objeto global independientemente del entorno — navegador (window), Node.js (global), Web Worker (self) u otros. Es el reemplazo portable para los hacks de verificar typeof window !== "undefined".',
    },
  },
  intl: {
    description: {
      en: 'The Intl API provides language-sensitive formatting for numbers, dates, currencies, lists, and relative times. Instead of writing your own locale logic, Intl.NumberFormat, Intl.DateTimeFormat, and Intl.RelativeTimeFormat handle the complexities of internationalisation automatically.',
      es: 'La API Intl proporciona formateo sensible al idioma para números, fechas, monedas, listas y tiempos relativos. En vez de escribir tu propia lógica de locale, Intl.NumberFormat, Intl.DateTimeFormat e Intl.RelativeTimeFormat gestionan automáticamente las complejidades de la internacionalización.',
    },
  },
  iterator: {
    description: {
      en: 'The Iterator protocol defines how objects expose a sequence of values through a next() method. Any object that implements Symbol.iterator becomes iterable — usable in for...of loops, destructuring, and spread syntax. Custom iterators give you full control over data traversal.',
      es: 'El protocolo Iterator define cómo los objetos exponen una secuencia de valores a través de un método next(). Cualquier objeto que implemente Symbol.iterator se vuelve iterable — utilizable en bucles for...of, desestructuración y spread syntax. Los iteradores personalizados te dan control total sobre el recorrido de datos.',
    },
  },
  json: {
    description: {
      en: 'JSON (JavaScript Object Notation) is the universal data interchange format. JSON.stringify converts JS values to JSON strings and JSON.parse does the reverse. Knowing the replacer/reviver arguments lets you control how values are serialised and deserialised.',
      es: 'JSON (JavaScript Object Notation) es el formato universal de intercambio de datos. JSON.stringify convierte valores JS a cadenas JSON y JSON.parse hace lo inverso. Conocer los argumentos replacer/reviver permite controlar cómo se serializan y deserializan los valores.',
    },
  },
  map: {
    description: {
      en: 'Map is a key-value collection where any value — including objects and functions — can be a key. Unlike plain objects, Map preserves insertion order, has a size property, and is faster for frequent additions and deletions. It is the right choice when keys are not strings.',
      es: 'Map es una colección clave-valor donde cualquier valor — incluidos objetos y funciones — puede ser una clave. A diferencia de los objetos planos, Map preserva el orden de inserción, tiene una propiedad size y es más rápido para adiciones y eliminaciones frecuentes. Es la opción correcta cuando las claves no son strings.',
    },
  },
  math: {
    description: {
      en: 'Math is a built-in object with properties and methods for mathematical operations — constants like Math.PI and Math.E, rounding functions, trigonometry, logarithms, random number generation, and more. All methods are static; you never instantiate Math.',
      es: 'Math es un objeto integrado con propiedades y métodos para operaciones matemáticas — constantes como Math.PI y Math.E, funciones de redondeo, trigonometría, logaritmos, generación de números aleatorios y más. Todos los métodos son estáticos; nunca instancias Math.',
    },
  },
  number: {
    description: {
      en: 'Number wraps JavaScript\'s 64-bit floating-point values and provides parsing, formatting, and limit constants (Number.MAX_SAFE_INTEGER, Number.EPSILON, Infinity, NaN). Understanding how floating-point arithmetic works is essential for avoiding precision bugs.',
      es: 'Number envuelve los valores de punto flotante de 64 bits de JavaScript y proporciona parsing, formateo y constantes de límite (Number.MAX_SAFE_INTEGER, Number.EPSILON, Infinity, NaN). Entender cómo funciona la aritmética de punto flotante es esencial para evitar bugs de precisión.',
    },
  },
  object: {
    description: {
      en: 'Object is the foundation of JavaScript — almost everything is one. The Object built-in provides static methods to inspect and transform objects: Object.keys, Object.values, Object.entries, Object.assign, Object.freeze, Object.create, and more.',
      es: 'Object es la base de JavaScript — casi todo es uno. El built-in Object proporciona métodos estáticos para inspeccionar y transformar objetos: Object.keys, Object.values, Object.entries, Object.assign, Object.freeze, Object.create y más.',
    },
  },
  performance: {
    description: {
      en: 'The Performance API gives you high-resolution timestamps (performance.now()), user timing marks, resource timing entries, and navigation timing. It is the standard way to measure how fast your code actually runs in the browser.',
      es: 'La API Performance te proporciona timestamps de alta resolución (performance.now()), marcas de tiempo de usuario, entradas de temporización de recursos y temporización de navegación. Es la forma estándar de medir qué tan rápido se ejecuta realmente tu código en el navegador.',
    },
  },
  promise: {
    description: {
      en: 'Promise represents an asynchronous operation that will eventually resolve with a value or reject with an error. Promises are the foundation of async/await, the Fetch API, and virtually all async code in modern JavaScript.',
      es: 'Promise representa una operación asíncrona que eventualmente se resolverá con un valor o se rechazará con un error. Las promesas son la base de async/await, la API Fetch y prácticamente todo el código asíncrono en JavaScript moderno.',
    },
  },
  prototypes: {
    description: {
      en: 'JavaScript\'s prototype chain is the mechanism behind inheritance. Every object has a prototype it delegates property lookups to. Understanding prototypes explains how class syntax works under the hood, how method sharing works, and how to extend built-ins safely.',
      es: 'La cadena de prototipos de JavaScript es el mecanismo detrás de la herencia. Cada objeto tiene un prototipo al que delega las búsquedas de propiedades. Entender los prototipos explica cómo funciona la sintaxis de clase internamente, cómo funciona el compartir métodos y cómo extender los built-ins de forma segura.',
    },
  },
  proxy: {
    description: {
      en: 'Proxy lets you intercept and redefine fundamental operations on an object — property access, assignment, function calls, new instantiation, and more — using "traps". It is the backbone of reactive systems, validation layers, and observable data patterns.',
      es: 'Proxy permite interceptar y redefinir operaciones fundamentales en un objeto — acceso a propiedades, asignación, llamadas a funciones, instanciación con new y más — usando "traps". Es la columna vertebral de los sistemas reactivos, capas de validación y patrones de datos observables.',
    },
  },
  rangeerror: {
    description: {
      en: 'RangeError is thrown when a value is not within the set or range of allowed values — for example, passing an invalid array length, a number outside toFixed\'s precision range, or a recursion depth exceeding the call stack limit.',
      es: 'RangeError se lanza cuando un valor no está dentro del conjunto o rango de valores permitidos — por ejemplo, al pasar una longitud de array inválida, un número fuera del rango de precisión de toFixed, o una profundidad de recursión que supera el límite de la pila de llamadas.',
    },
  },
  referenceerror: {
    description: {
      en: 'ReferenceError is thrown when code tries to use a variable that does not exist in the current scope — most commonly caused by typos, accessing variables before declaration (temporal dead zone), or accessing undeclared globals in strict mode.',
      es: 'ReferenceError se lanza cuando el código intenta usar una variable que no existe en el ámbito actual — causado normalmente por errores tipográficos, acceso a variables antes de su declaración (zona muerta temporal) o acceso a globales no declaradas en modo estricto.',
    },
  },
  reflect: {
    description: {
      en: 'Reflect is a built-in object providing methods that mirror the internal operations of the JavaScript engine — Reflect.get, Reflect.set, Reflect.apply, Reflect.construct, and more. It is commonly used alongside Proxy to forward intercepted operations to the target.',
      es: 'Reflect es un objeto integrado que proporciona métodos que reflejan las operaciones internas del motor JavaScript — Reflect.get, Reflect.set, Reflect.apply, Reflect.construct y más. Se usa habitualmente junto con Proxy para reenviar operaciones interceptadas al objetivo.',
    },
  },
  regexp: {
    description: {
      en: 'RegExp (Regular Expression) is a pattern for matching text. JavaScript\'s RegExp supports character classes, quantifiers, groups, lookaheads, named captures, and flags like g, i, m, s, u, and y. Mastering RegExp unlocks powerful string searching and transformation.',
      es: 'RegExp (Expresión Regular) es un patrón para hacer coincidir texto. El RegExp de JavaScript soporta clases de caracteres, cuantificadores, grupos, lookaheads, capturas nombradas y flags como g, i, m, s, u e y. Dominar RegExp abre potentes capacidades de búsqueda y transformación de cadenas.',
    },
  },
  set: {
    description: {
      en: 'Set is a collection of unique values — duplicates are automatically ignored. It maintains insertion order, provides O(1) has() lookups, and has a clean API for adding, deleting, and iterating. Perfect for deduplication, membership testing, and set algebra.',
      es: 'Set es una colección de valores únicos — los duplicados se ignoran automáticamente. Mantiene el orden de inserción, proporciona búsquedas has() en O(1) y tiene una API limpia para añadir, eliminar e iterar. Perfecto para deduplicación, comprobación de membresía y álgebra de conjuntos.',
    },
  },
  sharedarraybuffer: {
    description: {
      en: 'SharedArrayBuffer is a fixed-size raw memory buffer that can be shared across Web Workers without copying. Combined with Atomics for synchronisation, it enables true shared-memory concurrency in JavaScript — important for compute-intensive workloads.',
      es: 'SharedArrayBuffer es un buffer de memoria cruda de tamaño fijo que puede compartirse entre Web Workers sin copiar. Combinado con Atomics para sincronización, permite verdadera concurrencia de memoria compartida en JavaScript — importante para cargas de trabajo intensivas en cómputo.',
    },
  },
  string: {
    description: {
      en: 'String is JavaScript\'s text type. It is immutable — every string operation returns a new string. The String prototype has over 30 methods for searching, slicing, replacing, padding, splitting, and converting case, making it one of the most-used built-ins.',
      es: 'String es el tipo de texto de JavaScript. Es inmutable — cada operación sobre una cadena devuelve una nueva cadena. El prototipo String tiene más de 30 métodos para buscar, cortar, reemplazar, rellenar, dividir y convertir mayúsculas/minúsculas, convirtiéndolo en uno de los built-ins más usados.',
    },
  },
  structuredclone: {
    description: {
      en: 'structuredClone() performs a deep copy of almost any JavaScript value — including nested objects, Arrays, Maps, Sets, Dates, RegExps, and ArrayBuffers. It is the native, safe alternative to the JSON.parse(JSON.stringify(x)) hack.',
      es: 'structuredClone() realiza una copia profunda de casi cualquier valor JavaScript — incluidos objetos anidados, Arrays, Maps, Sets, Dates, RegExps y ArrayBuffers. Es la alternativa nativa y segura al hack de JSON.parse(JSON.stringify(x)).',
    },
  },
  symbol: {
    description: {
      en: 'Symbol creates a guaranteed-unique primitive value. Symbols are used as non-string property keys to avoid naming collisions, to define well-known hooks (Symbol.iterator, Symbol.toPrimitive), and to attach metadata to objects without polluting their enumerable properties.',
      es: 'Symbol crea un valor primitivo garantizadamente único. Los Symbols se usan como claves de propiedad no-string para evitar colisiones de nombres, para definir hooks well-known (Symbol.iterator, Symbol.toPrimitive) y para adjuntar metadatos a objetos sin contaminar sus propiedades enumerables.',
    },
  },
  syntaxerror: {
    description: {
      en: 'SyntaxError is thrown when the JavaScript engine encounters code that is not syntactically valid — during parsing or in eval()/new Function() calls. It is also used by JSON.parse when the input string is not valid JSON.',
      es: 'SyntaxError se lanza cuando el motor JavaScript encuentra código que no es sintácticamente válido — durante el parsing o en llamadas a eval()/new Function(). También lo usa JSON.parse cuando la cadena de entrada no es JSON válido.',
    },
  },
  textdecoder: {
    description: {
      en: 'TextDecoder converts raw binary data (ArrayBuffer, TypedArray) into a JavaScript string using a specified encoding (UTF-8, UTF-16, ISO-8859-1, etc.). It is the browser-native way to decode network responses or file contents without third-party libraries.',
      es: 'TextDecoder convierte datos binarios crudos (ArrayBuffer, TypedArray) en una cadena JavaScript usando una codificación especificada (UTF-8, UTF-16, ISO-8859-1, etc.). Es la forma nativa del navegador para decodificar respuestas de red o contenidos de archivos sin librerías externas.',
    },
  },
  textencoder: {
    description: {
      en: 'TextEncoder converts a JavaScript string into a Uint8Array of UTF-8 bytes. It is the complement of TextDecoder and is used when you need to send text over a binary channel — WebSockets, WebRTC data channels, or writing to ArrayBuffers.',
      es: 'TextEncoder convierte una cadena JavaScript en un Uint8Array de bytes UTF-8. Es el complemento de TextDecoder y se usa cuando necesitas enviar texto por un canal binario — WebSockets, canales de datos WebRTC o escritura en ArrayBuffers.',
    },
  },
  typedarray: {
    description: {
      en: 'Typed arrays (Uint8Array, Int32Array, Float64Array, etc.) are array-like views over an ArrayBuffer that hold homogeneous binary data with a fixed element type and size. They offer near-native performance for numerical computation, audio processing, and WebGL.',
      es: 'Los arrays tipados (Uint8Array, Int32Array, Float64Array, etc.) son vistas similares a arrays sobre un ArrayBuffer que almacenan datos binarios homogéneos con un tipo y tamaño de elemento fijo. Ofrecen un rendimiento casi nativo para cómputo numérico, procesamiento de audio y WebGL.',
    },
  },
  typeerror: {
    description: {
      en: 'TypeError is the most common runtime error in JavaScript — thrown when an operation is performed on a value of the wrong type: calling a non-function, reading a property of null or undefined, using the wrong argument type in a built-in, or violating a class contract.',
      es: 'TypeError es el error en tiempo de ejecución más común en JavaScript — se lanza cuando se realiza una operación sobre un valor del tipo incorrecto: llamar a un no-función, leer una propiedad de null o undefined, usar el tipo de argumento incorrecto en un built-in, o violar el contrato de una clase.',
    },
  },
  typescript: {
    description: {
      en: 'TypeScript is a typed superset of JavaScript that compiles to plain JS. Its type system — interfaces, generics, union types, conditional types, and utility types — catches errors at compile time that would otherwise blow up at runtime, and powers IDE tooling like autocomplete and refactoring.',
      es: 'TypeScript es un superconjunto tipado de JavaScript que compila a JS plano. Su sistema de tipos — interfaces, genéricos, tipos unión, tipos condicionales y tipos de utilidad — detecta errores en tiempo de compilación que de otro modo explotan en tiempo de ejecución, y potencia las herramientas de IDE como el autocompletado y la refactorización.',
    },
  },
  url: {
    description: {
      en: 'The URL API parses, constructs, normalises, and encodes URLs. A URL object gives you structured access to protocol, hostname, pathname, search params, hash, and more — far safer and more readable than manipulating URL strings by hand.',
      es: 'La API URL analiza, construye, normaliza y codifica URLs. Un objeto URL te da acceso estructurado al protocolo, hostname, pathname, parámetros de búsqueda, hash y más — mucho más seguro y legible que manipular cadenas de URL a mano.',
    },
  },
  urlsearchparams: {
    description: {
      en: 'URLSearchParams provides a utility interface for working with query strings — parsing, appending, setting, deleting, and iterating parameters. It handles URL encoding automatically and integrates directly with the URL API and fetch.',
      es: 'URLSearchParams proporciona una interfaz de utilidad para trabajar con cadenas de consulta — analizar, añadir, establecer, eliminar e iterar parámetros. Gestiona automáticamente la codificación URL e integra directamente con la API URL y fetch.',
    },
  },
  weakmap: {
    description: {
      en: 'WeakMap is a key-value map where keys must be objects (or non-registered symbols) and are held weakly — they do not prevent garbage collection. WeakMap is ideal for associating private metadata with objects without causing memory leaks.',
      es: 'WeakMap es un mapa clave-valor donde las claves deben ser objetos (o símbolos no registrados) y se mantienen débilmente — no impiden la recolección de basura. WeakMap es ideal para asociar metadatos privados con objetos sin causar fugas de memoria.',
    },
  },
  weakref: {
    description: {
      en: 'WeakRef holds a weak reference to an object — a reference that does not prevent the garbage collector from reclaiming it. You deref() a WeakRef to get the object if it is still alive, or undefined if it has been collected. Use it cautiously as GC timing is non-deterministic.',
      es: 'WeakRef mantiene una referencia débil a un objeto — una referencia que no impide al garbage collector recuperarlo. Llamas a deref() sobre un WeakRef para obtener el objeto si sigue vivo, o undefined si ha sido recolectado. Úsalo con cautela ya que el timing del GC no es determinista.',
    },
  },
  weakset: {
    description: {
      en: 'WeakSet is a collection of objects held weakly — its members do not prevent garbage collection. Unlike Set it is not iterable and has no size. It is useful for tagging objects (e.g. "has this element been processed?") without preventing their cleanup.',
      es: 'WeakSet es una colección de objetos mantenidos débilmente — sus miembros no impiden la recolección de basura. A diferencia de Set no es iterable y no tiene size. Es útil para etiquetar objetos (ej. "¿se ha procesado este elemento?") sin impedir su limpieza.',
    },
  },
  'redux-legacy': {
    description: {
      en: 'Redux is a predictable state container for JavaScript apps. These exercises cover the foundational patterns: reducers, action creators, middleware, and store from scratch — no abstractions, pure functions only.',
      es: 'Redux es un contenedor de estado predecible para aplicaciones JavaScript. Estos ejercicios cubren los patrones fundamentales: reducers, action creators, middleware y store desde cero — sin abstracciones, solo funciones puras.',
    },
  },
  'redux-toolkit': {
    description: {
      en: 'Redux Toolkit is the official, opinionated toolset for Redux development. These exercises cover createSlice, configureStore, createAsyncThunk, createEntityAdapter, and more — using the modern RTK API.',
      es: 'Redux Toolkit es el conjunto de herramientas oficial y con opiniones para el desarrollo con Redux. Estos ejercicios cubren createSlice, configureStore, createAsyncThunk, createEntityAdapter y más — usando la API moderna de RTK.',
    },
  },
  variables: {
    description: {
      en: 'var, let, and const declarations, hoisting behavior, and block vs function scope. Understanding how JavaScript lifts declarations and how let/const differ from var is fundamental to writing predictable code.',
      es: 'Declaraciones var, let y const, comportamiento del hoisting y alcance de bloque frente a función. Entender cómo JavaScript eleva las declaraciones y en qué difieren let/const de var es fundamental para escribir código predecible.',
    },
  },
  operators: {
    description: {
      en: 'Arithmetic, comparison, logical, and modern operators including nullish coalescing (??) and optional chaining (?.). These are the building blocks for expressions and conditions throughout any JavaScript program.',
      es: 'Operadores aritméticos, de comparación, lógicos y modernos como la fusión nula (??) y el encadenamiento opcional (?.). Son los bloques fundamentales para expresiones y condiciones en cualquier programa JavaScript.',
    },
  },
  controlflow: {
    description: {
      en: 'if/else, switch, ternary expressions, for/while loops, break/continue, and iteration patterns with for...of and for...in. Control flow determines the order in which statements execute in a program.',
      es: 'if/else, switch, expresiones ternarias, bucles for/while, break/continue y patrones de iteración con for...of y for...in. El flujo de control determina el orden en que se ejecutan las instrucciones de un programa.',
    },
  },
  typecoercion: {
    description: {
      en: 'Implicit and explicit type conversion in JavaScript — how values are coerced during comparisons, arithmetic, and logical operations. Understanding coercion helps avoid subtle bugs caused by loose equality and unexpected conversions.',
      es: 'Conversión de tipos implícita y explícita en JavaScript — cómo se convierten los valores en comparaciones, operaciones aritméticas y lógicas. Entender la coerción ayuda a evitar errores sutiles causados por la igualdad débil y conversiones inesperadas.',
    },
  },
  strictmode: {
    description: {
      en: "'use strict' enables a restricted variant of JavaScript that catches silent errors, prevents unsafe features, and makes code more optimizable. It is automatically active in ES modules and class bodies.",
      es: "'use strict' activa una variante restringida de JavaScript que detecta errores silenciosos, impide características inseguras y facilita la optimización del código. Está activo de forma automática en módulos ES y cuerpos de clase.",
    },
  },
  modules: {
    description: {
      en: 'ES module syntax — named and default exports, static imports, re-exports, and dynamic import(). Modules give JavaScript a standard system for splitting code across files with clear dependency boundaries.',
      es: 'Sintaxis de módulos ES — exportaciones con nombre y por defecto, importaciones estáticas, re-exportaciones e import() dinámico. Los módulos ofrecen a JavaScript un sistema estándar para dividir el código en archivos con límites de dependencia claros.',
    },
  },
}
