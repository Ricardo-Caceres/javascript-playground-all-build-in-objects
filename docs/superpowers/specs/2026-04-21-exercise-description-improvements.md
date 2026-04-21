# Exercise Description Improvements

**Status:** Not implemented — documented for next session

## Goal

1. **Descriptions más explicativas** — los ejercicios deben explicar mejor el concepto antes del reto.
2. **Test cases visibles** — mostrar en la UI qué tiene que pasar cada test (su `description`) antes de ejecutar el código, para que el usuario sepa exactamente qué se está evaluando.

---

## Feature 1: Test cases visibles antes de ejecutar

### Comportamiento esperado

En la página de ejercicio, debajo del enunciado y antes del editor, mostrar una lista de los test cases con su `description`. Al ejecutar, cada ítem se marca ✅ / ❌.

### Implementación

Los test cases ya existen en el tipo `Exercise`:
```ts
tests: { description: string; assertion: string }[]
```

Solo hay que renderizarlos en la UI. Buscar el componente que muestra resultados de tests (probablemente en `src/features/exercises/presentation/`) y añadir una lista pre-ejecución:

```tsx
// Antes de ejecutar: mostrar descripciones como lista pendiente
<ul>
  {exercise.tests.map((test, i) => (
    <li key={i}>
      <span className="test-status">{result ? (result[i].passed ? '✅' : '❌') : '⬜'}</span>
      {test.description}
    </li>
  ))}
</ul>
```

### Archivos a tocar

| Archivo | Cambio |
|---------|--------|
| Componente de ejercicio en `src/features/exercises/presentation/` | Render de test descriptions + estado por test |
| Worker output type | Asegurarse de que el resultado incluye `passed: boolean` por test (verificar si ya existe) |

---

## Feature 2: Descripciones más explicativas en los ejercicios existentes

### Qué falta

Las descripciones actuales son breves. El estándar debería ser:

1. **Concepto** — 2-3 frases explicando qué es y para qué sirve
2. **Ejemplo de uso** — bloque de código mostrando el comportamiento esperado
3. **Reto** — frase clara: "Implementa X que haga Y"
4. **Test cases** — lista de lo que se valida (puede derivarse de `tests[].description`)

### Plantilla de descripción

```markdown
## Título del ejercicio

[Concepto: 2-3 frases explicando el patrón o función]

**Ejemplo:**
\`\`\`js
miFuncion(input)  // → output esperado
miFuncion(otro)   // → otro output
\`\`\`

**Reto:** Implementa `miFuncion(arg)` que [descripción del comportamiento].

**Los tests comprueban:**
- [descripción test 1]
- [descripción test 2]
- ...
```

### Ejercicios a actualizar

Prioritarios (los más visitados probablemente):
- Todos los ejercicios de Redux Legacy (22) y Redux Toolkit (22) — son nuevos y sus descripciones son básicas
- Array exercises si tienen descripciones cortas

### Estrategia de actualización

Lanzar un agente por topic (redux-legacy, redux-toolkit, array, etc.) que reescriba las descripciones siguiendo la plantilla. Cada agente puede actualizar todos los archivos de un topic en paralelo.

---

## Esfuerzo estimado

| Feature | Esfuerzo |
|---------|----------|
| Test cases visibles en UI | ~1–2 horas (1 componente) |
| Reescribir descripciones Redux (44 ejercicios) | ~1 hora con agentes paralelos |
| Reescribir descripciones resto de ejercicios | ~2–3 horas con agentes paralelos |
