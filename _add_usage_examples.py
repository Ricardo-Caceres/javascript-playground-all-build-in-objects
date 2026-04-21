#!/usr/bin/env python3
"""Add usageExample fields to all exercise objects in the four topic folders."""
import re
import os

BASE = '/Users/salem/Desktop/React/react-playground/src/features/exercises/infrastructure/data'

# Each entry: (folder, stem) -> { code, en, es }
EXAMPLES = {
    # ─── SET ───────────────────────────────────────────────────────────────────
    ('set', 'add'): {
        'code': """const s = new Set()
s.add(1).add(2).add(3)
console.log(s.size)   // → 3""",
        'en': "Use add() to insert unique values into a Set, chaining calls since add() returns the Set itself.",
        'es': "Usa add() para insertar valores únicos en un Set, encadenando llamadas ya que add() devuelve el propio Set.",
    },
    ('set', 'clear'): {
        'code': """const s = new Set([1, 2, 3])
s.clear()
console.log(s.size)   // → 0""",
        'en': "Use clear() to remove all values from a Set at once, resetting its size to zero.",
        'es': "Usa clear() para eliminar todos los valores de un Set a la vez, restableciendo su tamaño a cero.",
    },
    ('set', 'constructor'): {
        'code': """const s1 = new Set([1, 2, 2, 3])
console.log(s1.size)   // → 3 (duplicates removed)
const s2 = new Set()
console.log(s2.size)   // → 0""",
        'en': "Use the Set constructor to create a collection of unique values, optionally initialized from an iterable.",
        'es': "Usa el constructor Set para crear una colección de valores únicos, opcionalmente inicializada desde un iterable.",
    },
    ('set', 'delete'): {
        'code': """const s = new Set([1, 2, 3])
console.log(s.delete(2))   // → true (existed)
console.log(s.size)        // → 2
console.log(s.delete(99))  // → false (not found)""",
        'en': "Use delete() to remove a specific value from a Set, returning true if it existed or false if it did not.",
        'es': "Usa delete() para eliminar un valor específico de un Set, devolviendo true si existía o false si no existía.",
    },
    ('set', 'difference'): {
        'code': """const a = new Set([1, 2, 3, 4])
const b = new Set([3, 4, 5])
const d = a.difference(b)
console.log([...d])   // → [1, 2]""",
        'en': "Use difference() to get a new Set of elements that are in the first Set but not in the second.",
        'es': "Usa difference() para obtener un nuevo Set con los elementos que están en el primer Set pero no en el segundo.",
    },
    ('set', 'entries'): {
        'code': """const s = new Set(['a', 'b'])
for (const [key, val] of s.entries()) {
  console.log(key, val)   // 'a' 'a', then 'b' 'b'
}""",
        'en': "Use entries() to iterate over a Set as [value, value] pairs, matching the Map entries() API shape.",
        'es': "Usa entries() para iterar sobre un Set como pares [valor, valor], igualando la forma de la API entries() de Map.",
    },
    ('set', 'forEach'): {
        'code': """const s = new Set([10, 20, 30])
s.forEach(value => {
  console.log(value)   // 10, then 20, then 30
})""",
        'en': "Use forEach() to execute a callback for each value in a Set without needing to create an explicit iterator.",
        'es': "Usa forEach() para ejecutar un callback por cada valor en un Set sin necesitar crear un iterador explícito.",
    },
    ('set', 'has'): {
        'code': """const s = new Set([1, 2, 3])
console.log(s.has(2))   // → true
console.log(s.has(9))   // → false""",
        'en': "Use has() to check in O(1) time whether a specific value exists in a Set.",
        'es': "Usa has() para comprobar en tiempo O(1) si un valor específico existe en un Set.",
    },
    ('set', 'intersection'): {
        'code': """const a = new Set([1, 2, 3])
const b = new Set([2, 3, 4])
const i = a.intersection(b)
console.log([...i])   // → [2, 3]""",
        'en': "Use intersection() to get a new Set containing only the elements that exist in both Sets.",
        'es': "Usa intersection() para obtener un nuevo Set con solo los elementos que existen en ambos Sets.",
    },
    ('set', 'isDisjointFrom'): {
        'code': """const a = new Set([1, 2])
const b = new Set([3, 4])
console.log(a.isDisjointFrom(b))   // → true (no overlap)
const c = new Set([2, 5])
console.log(a.isDisjointFrom(c))   // → false (2 is shared)""",
        'en': "Use isDisjointFrom() to check whether two Sets share no common elements at all.",
        'es': "Usa isDisjointFrom() para comprobar si dos Sets no tienen ningún elemento en común.",
    },
    ('set', 'isSubsetOf'): {
        'code': """const a = new Set([1, 2])
const b = new Set([1, 2, 3])
console.log(a.isSubsetOf(b))   // → true (all of a in b)
console.log(b.isSubsetOf(a))   // → false""",
        'en': "Use isSubsetOf() to check whether every element of one Set is contained in another Set.",
        'es': "Usa isSubsetOf() para comprobar si cada elemento de un Set está contenido en otro Set.",
    },
    ('set', 'isSupersetOf'): {
        'code': """const a = new Set([1, 2, 3])
const b = new Set([1, 2])
console.log(a.isSupersetOf(b))   // → true (a contains all of b)
console.log(b.isSupersetOf(a))   // → false""",
        'en': "Use isSupersetOf() to check whether one Set contains every element of another Set.",
        'es': "Usa isSupersetOf() para comprobar si un Set contiene todos los elementos de otro Set.",
    },
    ('set', 'keys'): {
        'code': """const s = new Set([1, 2, 3])
for (const k of s.keys()) {
  console.log(k)   // 1, 2, 3
}
// keys() is an alias for values() on Set""",
        'en': "Use keys() to iterate over Set values; for Sets, keys() is an alias for values() unlike Map.",
        'es': "Usa keys() para iterar sobre los valores de un Set; en Sets, keys() es un alias de values() a diferencia de Map.",
    },
    ('set', 'size'): {
        'code': """const s = new Set([1, 2, 3])
console.log(s.size)   // → 3
s.add(4)
console.log(s.size)   // → 4
s.delete(1)
console.log(s.size)   // → 3""",
        'en': "Read the size property to get the count of unique values currently stored in a Set.",
        'es': "Lee la propiedad size para obtener el número de valores únicos almacenados actualmente en un Set.",
    },
    ('set', 'symmetricDifference'): {
        'code': """const a = new Set([1, 2, 3])
const b = new Set([2, 3, 4])
const sd = a.symmetricDifference(b)
console.log([...sd])   // → [1, 4]""",
        'en': "Use symmetricDifference() to get elements that are in either Set but not in both.",
        'es': "Usa symmetricDifference() para obtener los elementos que están en cualquiera de los Sets pero no en ambos.",
    },
    ('set', 'union'): {
        'code': """const a = new Set([1, 2])
const b = new Set([2, 3])
const u = a.union(b)
console.log([...u])   // → [1, 2, 3]""",
        'en': "Use union() to combine all unique elements from two Sets into a new Set.",
        'es': "Usa union() para combinar todos los elementos únicos de dos Sets en un nuevo Set.",
    },
    ('set', 'values'): {
        'code': """const s = new Set([1, 2, 3])
for (const v of s.values()) {
  console.log(v)   // 1, 2, 3
}""",
        'en': "Use values() to get an iterator over all values in a Set in insertion order.",
        'es': "Usa values() para obtener un iterador sobre todos los valores de un Set en orden de inserción.",
    },

    # ─── MAP ───────────────────────────────────────────────────────────────────
    ('map', 'clear'): {
        'code': """const m = new Map([['a', 1], ['b', 2]])
m.clear()
console.log(m.size)   // → 0""",
        'en': "Use clear() to remove all key-value pairs from a Map, resetting it to an empty state.",
        'es': "Usa clear() para eliminar todos los pares clave-valor de un Map, restableciendo a estado vacío.",
    },
    ('map', 'constructor'): {
        'code': """const m = new Map([['name', 'Alice'], ['age', 30]])
console.log(m.get('name'))   // → 'Alice'
console.log(m.size)          // → 2""",
        'en': "Use the Map constructor to create a key-value store, optionally initialized from an array of [key, value] pairs.",
        'es': "Usa el constructor Map para crear un almacén clave-valor, opcionalmente inicializado desde un array de pares [clave, valor].",
    },
    ('map', 'delete'): {
        'code': """const m = new Map([['a', 1], ['b', 2]])
console.log(m.delete('a'))   // → true (existed)
console.log(m.has('a'))      // → false
console.log(m.delete('z'))   // → false (not found)""",
        'en': "Use delete() to remove a key-value pair from a Map, returning true if the key existed.",
        'es': "Usa delete() para eliminar un par clave-valor de un Map, devolviendo true si la clave existía.",
    },
    ('map', 'entries'): {
        'code': """const m = new Map([['x', 1], ['y', 2]])
for (const [key, val] of m.entries()) {
  console.log(key, val)   // x 1, then y 2
}""",
        'en': "Use entries() to iterate over all key-value pairs of a Map as [key, value] tuples in insertion order.",
        'es': "Usa entries() para iterar sobre todos los pares clave-valor de un Map como tuplas [clave, valor] en orden de inserción.",
    },
    ('map', 'forEach'): {
        'code': """const m = new Map([['a', 1], ['b', 2]])
m.forEach((value, key) => {
  console.log(key, value)   // a 1, then b 2
})""",
        'en': "Use forEach() to execute a callback for each key-value pair in a Map without needing an explicit iterator.",
        'es': "Usa forEach() para ejecutar un callback por cada par clave-valor en un Map sin necesitar un iterador explícito.",
    },
    ('map', 'get'): {
        'code': """const m = new Map([['key', 'value']])
console.log(m.get('key'))    // → 'value'
console.log(m.get('nope'))   // → undefined""",
        'en': "Use get() to retrieve the value associated with a key, returning undefined if the key is not present.",
        'es': "Usa get() para recuperar el valor asociado a una clave, devolviendo undefined si la clave no está presente.",
    },
    ('map', 'has'): {
        'code': """const m = new Map([['a', 1]])
console.log(m.has('a'))   // → true
console.log(m.has('z'))   // → false""",
        'en': "Use has() to check in O(1) time whether a specific key exists in a Map.",
        'es': "Usa has() para comprobar en tiempo O(1) si una clave específica existe en un Map.",
    },
    ('map', 'keys'): {
        'code': """const m = new Map([['a', 1], ['b', 2]])
for (const k of m.keys()) {
  console.log(k)   // 'a', then 'b'
}""",
        'en': "Use keys() to iterate over only the keys of a Map in insertion order.",
        'es': "Usa keys() para iterar solo sobre las claves de un Map en orden de inserción.",
    },
    ('map', 'set'): {
        'code': """const m = new Map()
m.set('name', 'Alice').set('age', 30)
console.log(m.get('name'))   // → 'Alice'
console.log(m.size)          // → 2""",
        'en': "Use set() to add or update a key-value pair in a Map, chaining calls since set() returns the Map itself.",
        'es': "Usa set() para agregar o actualizar un par clave-valor en un Map, encadenando llamadas ya que set() devuelve el propio Map.",
    },
    ('map', 'size'): {
        'code': """const m = new Map([['a', 1], ['b', 2]])
console.log(m.size)   // → 2
m.set('c', 3)
console.log(m.size)   // → 3""",
        'en': "Read the size property to get the number of key-value pairs currently stored in a Map.",
        'es': "Lee la propiedad size para obtener el número de pares clave-valor almacenados actualmente en un Map.",
    },
    ('map', 'values'): {
        'code': """const m = new Map([['a', 1], ['b', 2]])
for (const v of m.values()) {
  console.log(v)   // 1, then 2
}""",
        'en': "Use values() to iterate over only the values of a Map in insertion order.",
        'es': "Usa values() para iterar solo sobre los valores de un Map en orden de inserción.",
    },

    # ─── DATE ──────────────────────────────────────────────────────────────────
    ('date', 'constructor'): {
        'code': """const d1 = new Date(0)
console.log(d1.getFullYear())   // → 1970 (Unix epoch)
const d2 = new Date(2024, 0, 15)
console.log(d2.getFullYear())   // → 2024""",
        'en': "Use the Date constructor to create date objects from timestamps, ISO strings, or year/month/day arguments.",
        'es': "Usa el constructor Date para crear objetos de fecha desde timestamps, cadenas ISO o argumentos año/mes/día.",
    },
    ('date', 'dateValueOf'): {
        'code': """const d = new Date(2024, 0, 15)
console.log(d.valueOf())     // → ms since epoch (number)
console.log(typeof d.valueOf())  // → 'number'""",
        'en': "Use valueOf() to get the numeric timestamp of a Date, enabling arithmetic and comparisons between dates.",
        'es': "Usa valueOf() para obtener el timestamp numérico de un Date, lo que permite aritmética y comparaciones entre fechas.",
    },
    ('date', 'getDate'): {
        'code': """const d = new Date(2024, 2, 25)
console.log(d.getDate())   // → 25 (day of month, 1-31)""",
        'en': "Use getDate() to read the day of the month (1-31) from a Date in local time.",
        'es': "Usa getDate() para leer el día del mes (1-31) de un Date en hora local.",
    },
    ('date', 'getDay'): {
        'code': """const d = new Date(2024, 0, 7)
console.log(d.getDay())   // → 0 (Sunday)
// 0=Sun 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat""",
        'en': "Use getDay() to read the day of the week (0=Sunday through 6=Saturday) from a Date in local time.",
        'es': "Usa getDay() para leer el día de la semana (0=domingo a 6=sábado) de un Date en hora local.",
    },
    ('date', 'getFullYear'): {
        'code': """const d = new Date(2024, 5, 15)
console.log(d.getFullYear())   // → 2024""",
        'en': "Use getFullYear() to read the four-digit year from a Date in local time.",
        'es': "Usa getFullYear() para leer el año de cuatro dígitos de un Date en hora local.",
    },
    ('date', 'getHours'): {
        'code': """const d = new Date(2024, 0, 1, 14, 30)
console.log(d.getHours())   // → 14""",
        'en': "Use getHours() to read the hour component (0-23) from a Date in local time.",
        'es': "Usa getHours() para leer el componente de hora (0-23) de un Date en hora local.",
    },
    ('date', 'getMilliseconds'): {
        'code': """const d = new Date(2024, 0, 1, 0, 0, 0, 500)
console.log(d.getMilliseconds())   // → 500""",
        'en': "Use getMilliseconds() to read the millisecond component (0-999) from a Date in local time.",
        'es': "Usa getMilliseconds() para leer el componente de milisegundos (0-999) de un Date en hora local.",
    },
    ('date', 'getMinutes'): {
        'code': """const d = new Date(2024, 0, 1, 10, 45)
console.log(d.getMinutes())   // → 45""",
        'en': "Use getMinutes() to read the minutes component (0-59) from a Date in local time.",
        'es': "Usa getMinutes() para leer el componente de minutos (0-59) de un Date en hora local.",
    },
    ('date', 'getMonth'): {
        'code': """const d = new Date(2024, 2, 15)
console.log(d.getMonth())   // → 2 (March; months are 0-indexed)""",
        'en': "Use getMonth() to read the month (0-11) from a Date in local time, where January is 0.",
        'es': "Usa getMonth() para leer el mes (0-11) de un Date en hora local, donde enero es 0.",
    },
    ('date', 'getSeconds'): {
        'code': """const d = new Date(2024, 0, 1, 10, 30, 45)
console.log(d.getSeconds())   // → 45""",
        'en': "Use getSeconds() to read the seconds component (0-59) from a Date in local time.",
        'es': "Usa getSeconds() para leer el componente de segundos (0-59) de un Date en hora local.",
    },
    ('date', 'getTime'): {
        'code': """const d = new Date(0)
console.log(d.getTime())   // → 0 (Unix epoch)
const d2 = new Date(2024, 0, 1)
console.log(d2.getTime() > 0)   // → true""",
        'en': "Use getTime() to get milliseconds since the Unix epoch, enabling date arithmetic and storage.",
        'es': "Usa getTime() para obtener los milisegundos desde el epoch Unix, lo que permite aritmética de fechas y almacenamiento.",
    },
    ('date', 'getUTCDate'): {
        'code': """const d = new Date('2024-03-25T00:00:00Z')
console.log(d.getUTCDate())   // → 25""",
        'en': "Use getUTCDate() to read the day of the month in UTC, avoiding local-timezone shifts.",
        'es': "Usa getUTCDate() para leer el día del mes en UTC, evitando desplazamientos de zona horaria local.",
    },
    ('date', 'getUTCFullYear'): {
        'code': """const d = new Date('2024-06-15T00:00:00Z')
console.log(d.getUTCFullYear())   // → 2024""",
        'en': "Use getUTCFullYear() to read the year in UTC, avoiding timezone-related year discrepancies near midnight.",
        'es': "Usa getUTCFullYear() para leer el año en UTC, evitando discrepancias de año por zona horaria cerca de la medianoche.",
    },
    ('date', 'getUTCMonth'): {
        'code': """const d = new Date('2024-03-15T00:00:00Z')
console.log(d.getUTCMonth())   // → 2 (March; 0-indexed)""",
        'en': "Use getUTCMonth() to read the month (0-indexed) in UTC, avoiding timezone-related month discrepancies.",
        'es': "Usa getUTCMonth() para leer el mes (índice 0) en UTC, evitando discrepancias de mes por zona horaria.",
    },
    ('date', 'now'): {
        'code': """const ms = Date.now()
console.log(typeof ms)   // → 'number'
console.log(ms > 0)      // → true""",
        'en': "Use Date.now() to get the current timestamp in milliseconds without creating a Date object.",
        'es': "Usa Date.now() para obtener el timestamp actual en milisegundos sin crear un objeto Date.",
    },
    ('date', 'parse'): {
        'code': """const ms = Date.parse('2024-01-15')
console.log(typeof ms)   // → 'number'
const d = new Date(ms)
console.log(d.getFullYear())   // → 2024""",
        'en': "Use Date.parse() to convert a date string into a millisecond timestamp without creating a Date object.",
        'es': "Usa Date.parse() para convertir una cadena de fecha en un timestamp en milisegundos sin crear un objeto Date.",
    },
    ('date', 'setDate'): {
        'code': """const d = new Date(2024, 0, 15)
d.setDate(25)
console.log(d.getDate())   // → 25""",
        'en': "Use setDate() to mutate the day-of-month on an existing Date object in local time.",
        'es': "Usa setDate() para mutar el día del mes en un objeto Date existente en hora local.",
    },
    ('date', 'setFullYear'): {
        'code': """const d = new Date(2024, 0, 15)
d.setFullYear(2030)
console.log(d.getFullYear())   // → 2030""",
        'en': "Use setFullYear() to mutate the year on an existing Date object in local time.",
        'es': "Usa setFullYear() para mutar el año en un objeto Date existente en hora local.",
    },
    ('date', 'setMonth'): {
        'code': """const d = new Date(2024, 0, 15)
d.setMonth(11)
console.log(d.getMonth())   // → 11 (December)""",
        'en': "Use setMonth() to mutate the month (0-indexed) on an existing Date object in local time.",
        'es': "Usa setMonth() para mutar el mes (índice 0) en un objeto Date existente en hora local.",
    },
    ('date', 'toDateString'): {
        'code': """const d = new Date(2024, 0, 15)
console.log(d.toDateString())
// → 'Mon Jan 15 2024' (format is engine-defined)""",
        'en': "Use toDateString() to get a human-readable date-only string from a Date, useful for quick display.",
        'es': "Usa toDateString() para obtener una cadena de solo fecha legible desde un Date, útil para mostrar rápidamente.",
    },
    ('date', 'toISOString'): {
        'code': """const d = new Date(0)
console.log(d.toISOString())
// → '1970-01-01T00:00:00.000Z'""",
        'en': "Use toISOString() to serialize a Date to ISO 8601 format in UTC, ideal for APIs and data storage.",
        'es': "Usa toISOString() para serializar un Date al formato ISO 8601 en UTC, ideal para APIs y almacenamiento.",
    },
    ('date', 'toJSON'): {
        'code': """const d = new Date(0)
console.log(d.toJSON())
// → '1970-01-01T00:00:00.000Z'
console.log(JSON.stringify({ date: d }))
// → '{"date":"1970-01-01T00:00:00.000Z"}'""",
        'en': "Use toJSON() (called automatically by JSON.stringify) to serialize a Date to its ISO string representation.",
        'es': "Usa toJSON() (llamado automáticamente por JSON.stringify) para serializar un Date a su representación ISO.",
    },
    ('date', 'toUTCString'): {
        'code': """const d = new Date(0)
console.log(d.toUTCString())
// → 'Thu, 01 Jan 1970 00:00:00 GMT'""",
        'en': "Use toUTCString() to get a human-readable UTC date string, commonly used in HTTP headers.",
        'es': "Usa toUTCString() para obtener una cadena de fecha UTC legible, comúnmente usada en cabeceras HTTP.",
    },
    ('date', 'utc'): {
        'code': """const ms = Date.UTC(2024, 5, 15)   // month is 0-indexed
console.log(new Date(ms).toISOString())
// → '2024-06-15T00:00:00.000Z'""",
        'en': "Use Date.UTC() to compute a UTC timestamp in milliseconds without creating a Date or worrying about local timezone.",
        'es': "Usa Date.UTC() para calcular un timestamp UTC en milisegundos sin crear un Date ni preocuparse por la zona horaria local.",
    },

    # ─── REGEXP ────────────────────────────────────────────────────────────────
    ('regexp', 'constructor'): {
        'code': """// Literal form (preferred for static patterns)
const re1 = /hello/gi
console.log(re1.test('Hello World'))   // → true

// Constructor form (for dynamic patterns)
const pattern = 'hello'
const re2 = new RegExp(pattern, 'i')
console.log(re2.test('Hello'))   // → true""",
        'en': "Create RegExp objects using literals (/pattern/flags) or the RegExp constructor when the pattern is dynamic.",
        'es': "Crea objetos RegExp usando literales (/patron/flags) o el constructor RegExp cuando el patrón es dinámico.",
    },
    ('regexp', 'exec'): {
        'code': """const re = /(\d+)/
const match = re.exec('abc 42 def')
console.log(match[0])   // → '42' (full match)
console.log(match[1])   // → '42' (capture group 1)
console.log(match.index)   // → 4 (position in string)""",
        'en': "Use exec() to run a pattern against a string and get detailed match results including capture groups and position.",
        'es': "Usa exec() para ejecutar un patrón contra una cadena y obtener resultados detallados incluyendo grupos de captura y posición.",
    },
    ('regexp', 'flags'): {
        'code': """const re = /hello/gi
console.log(re.flags)   // → 'gi'
const re2 = /test/m
console.log(re2.flags)  // → 'm'""",
        'en': "Read the flags property to inspect which flags (g, i, m, s, u, y) are active on a RegExp.",
        'es': "Lee la propiedad flags para inspeccionar qué flags (g, i, m, s, u, y) están activos en un RegExp.",
    },
    ('regexp', 'global'): {
        'code': """const re1 = /hello/g
console.log(re1.global)   // → true
const re2 = /hello/
console.log(re2.global)   // → false""",
        'en': "Check the global property to see if the g flag is set, which makes the pattern find all matches instead of just the first.",
        'es': "Comprueba la propiedad global para ver si el flag g está activo, lo que hace que el patrón encuentre todos los matches.",
    },
    ('regexp', 'ignoreCase'): {
        'code': """const re1 = /hello/i
console.log(re1.ignoreCase)   // → true
const re2 = /hello/
console.log(re2.ignoreCase)   // → false""",
        'en': "Check the ignoreCase property to see if the i flag is set, which makes pattern matching case-insensitive.",
        'es': "Comprueba la propiedad ignoreCase para ver si el flag i está activo, lo que hace el patrón insensible a mayúsculas.",
    },
    ('regexp', 'multiline'): {
        'code': """const re1 = /^hello/m
console.log(re1.multiline)   // → true
const re2 = /^hello/
console.log(re2.multiline)   // → false""",
        'en': "Check the multiline property to see if the m flag is set, which makes ^ and $ match line boundaries.",
        'es': "Comprueba la propiedad multiline para ver si el flag m está activo, lo que hace que ^ y $ coincidan con límites de línea.",
    },
    ('regexp', 'regexpToString'): {
        'code': """const re = /hello/gi
console.log(re.toString())   // → '/hello/gi'""",
        'en': "Use toString() to convert a RegExp to its source representation including slashes and flags, useful for debugging.",
        'es': "Usa toString() para convertir un RegExp a su representación de cadena incluyendo barras y flags, útil para depuración.",
    },
    ('regexp', 'source'): {
        'code': """const re = /hello world/gi
console.log(re.source)   // → 'hello world'""",
        'en': "Read the source property to get the pattern text of a RegExp without the surrounding slashes or flags.",
        'es': "Lee la propiedad source para obtener el texto del patrón de un RegExp sin las barras delimitadoras ni los flags.",
    },
    ('regexp', 'test'): {
        'code': """const re = /^\d+$/
console.log(re.test('123'))   // → true
console.log(re.test('abc'))   // → false""",
        'en': "Use test() to quickly check whether a pattern matches anywhere in a string, returning a simple boolean.",
        'es': "Usa test() para comprobar rápidamente si un patrón coincide en algún lugar de una cadena, devolviendo un booleano.",
    },
}


def make_insertion(code: str, en: str, es: str) -> str:
    """Build the usageExample block to insert after the tags line."""
    return (
        '\n'
        '    usageExample: {\n'
        f'      code: `{code}`,\n'
        '      explanation: {\n'
        f"        en: '{en}',\n"
        f"        es: '{es}',\n"
        '      },\n'
        '    },'
    )


def process_file(filepath: str, data: dict) -> bool:
    with open(filepath, encoding='utf-8') as f:
        content = f.read()

    insertion = make_insertion(data['code'], data['en'], data['es'])

    pattern = re.compile(r'^    tags: \[.*\],$', re.MULTILINE)

    count = len(pattern.findall(content))
    if count == 0:
        print(f'WARNING: no tags line matched in {filepath}')
        return False

    def replacer(m: re.Match) -> str:
        return m.group(0) + insertion

    new_content = pattern.sub(replacer, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f'Updated {count} exercise(s) in {os.path.basename(filepath)}')
    return True


def main() -> None:
    total_files = 0
    total_ok = 0

    for (folder, stem), data in EXAMPLES.items():
        filepath = os.path.join(BASE, folder, stem + '.ts')
        if not os.path.exists(filepath):
            print(f'MISSING: {filepath}')
            continue
        total_files += 1
        if process_file(filepath, data):
            total_ok += 1

    print(f'\nDone: {total_ok}/{total_files} files updated successfully.')


if __name__ == '__main__':
    main()
