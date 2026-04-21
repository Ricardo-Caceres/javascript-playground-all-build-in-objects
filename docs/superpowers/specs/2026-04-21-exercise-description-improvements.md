# Exercise Description Improvements

**Status:** Not implemented — documented for next session

## Goal

1. **Test cases visibles en la UI** — mostrar qué tiene que pasar cada test antes de ejecutar.
2. **Descripciones mejoradas en TODOS los ejercicios** — concepto + ejemplo + reto + lista de tests.

---

## Feature 1: Test cases visibles antes de ejecutar

### Comportamiento esperado

En la página de ejercicio, mostrar la lista de tests con su `description`. Al ejecutar, cada ítem se marca ✅ / ❌.

### Implementación

Los datos ya existen: `exercise.tests[].description`. Solo hay que renderizarlos.

Buscar el componente de resultados en `src/features/exercises/presentation/` y añadir:

```tsx
<ul>
  {exercise.tests.map((test, i) => (
    <li key={i}>
      <span>{result ? (result[i].passed ? '✅' : '❌') : '⬜'}</span>
      {test.description}
    </li>
  ))}
</ul>
```

**Archivos a tocar:** 1 componente en `src/features/exercises/presentation/` (el que renderiza el ejercicio/resultados).

**Esfuerzo:** ~1–2 horas.

---

## Feature 2: Descripciones mejoradas en todos los ejercicios

### Plantilla estándar

```markdown
## Título

[2-3 frases explicando el concepto y para qué sirve]

**Ejemplo:**
\`\`\`js
miFuncion(input)   // → output esperado
miFuncion(otro)    // → otro output
\`\`\`

**Reto:** Implementa `miFuncion(arg)` que [descripción clara del comportamiento].

**Los tests comprueban:**
- [descripción test 1]
- [descripción test 2]
- ...
```

### Alcance — todos los topics (~426 archivos de ejercicios)

```
abortcontroller, abortsignal, aggregateerror, algorithms, array,
arraybuffer, asyncpatterns, atomics, bigint, blob, boolean, closures,
console, crypto, dataview, date, designpatterns, error, event,
eventtarget, file, finalizationregistry, formdata, function,
functionalprogramming, generator, globalfunctions, globalthis, intl,
iterator, json, map, math, number, object, performance, promise,
prototypes, proxy, rangeerror, redux-legacy, redux-toolkit,
referenceerror, reflect, regexp, set, sharedarraybuffer, string,
structuredclone, symbol, syntaxerror, textdecoder, textencoder,
typedarray, typeerror, typescript, url, urlsearchparams,
weakmap, weakref, weakset
```

---

## Estrategia A: Ejecución con agentes paralelos (recomendada si se tiene tiempo)

Lanzar ~10 agentes en paralelo, cada uno con 5–6 topics. Cada agente:
1. Lee todos los archivos `.ts` del topic
2. Reescribe el campo `description` de cada ejercicio siguiendo la plantilla
3. Hace un commit por topic

Ejemplo de dispatch:
```
Agent 1: array, string, number, math, boolean
Agent 2: object, map, set, weakmap, weakset
Agent 3: promise, asyncpatterns, generator, iterator, function
Agent 4: redux-legacy, redux-toolkit, typescript, closures, prototypes
...
```

---

## Estrategia B: Manual, topic a topic (si el scope es demasiado grande)

Hacer un topic cada vez que se empieza una sesión, antes de trabajar en otra cosa. Orden sugerido por popularidad/uso:

### Prioridad alta (más visitados)
1. `array` — el topic más grande (~46 archivos)
2. `string`
3. `object`
4. `promise` + `asyncpatterns`
5. `redux-legacy` + `redux-toolkit` (recién añadidos)
6. `typescript`

### Prioridad media
7. `map`, `set`, `number`, `math`
8. `function`, `closures`, `prototypes`
9. `generator`, `iterator`
10. `regexp`, `json`, `date`

### Prioridad baja (más nicho)
El resto de topics (error types, typed arrays, web APIs, etc.)

### Cómo actualizar manualmente un ejercicio

```ts
// Antes:
description: `## Array.at()\n\nThe at() method...`,

// Después (siguiendo la plantilla):
description: `## Array.at()

El método \`at()\` devuelve el elemento en el índice dado. Acepta índices negativos para contar desde el final.

**Ejemplo:**
\`\`\`js
[1, 2, 3].at(0)   // → 1
[1, 2, 3].at(-1)  // → 3
\`\`\`

**Reto:** Implementa \`getElement(arr, index)\` usando \`Array.prototype.at()\`.

**Los tests comprueban:**
- Devuelve el primer elemento con índice 0
- Devuelve el último elemento con índice -1
- Devuelve undefined para índices fuera de rango
`,
```

### Checklist por topic

Para cada topic, abrir cada archivo `.ts`, revisar cada `description`, y aplicar la plantilla. Commit al terminar el topic:

```bash
git add src/features/exercises/infrastructure/data/<topic>/
git commit -m "docs(exercises): improve descriptions for <topic>"
```

---

## Notas

- El campo `description` acepta markdown — usar backticks para código inline y triple backtick para bloques.
- La lista "Los tests comprueban" se puede derivar directamente de `tests[].description` de ese mismo ejercicio.
- No cambiar `tests[]`, `solution`, `initialCode` ni ningún otro campo — solo `description`.
