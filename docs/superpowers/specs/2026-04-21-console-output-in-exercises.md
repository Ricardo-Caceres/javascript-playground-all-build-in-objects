# Console Output in Exercises

**Status:** Not implemented — documented for next session

## Goal

Show `console.log` / `console.warn` / `console.error` output from user code in a panel below the Monaco editor.

## Approach

### 1. `executor.worker.ts` — intercept console before eval

```ts
const consoleLogs: { type: string; message: string }[] = []
const _log = console.log
const _warn = console.warn
const _error = console.error

console.log = (...args: unknown[]) => consoleLogs.push({ type: 'log', message: args.map(String).join(' ') })
console.warn = (...args: unknown[]) => consoleLogs.push({ type: 'warn', message: args.map(String).join(' ') })
console.error = (...args: unknown[]) => consoleLogs.push({ type: 'error', message: args.map(String).join(' ') })

// ... run user code ...

console.log = _log
console.warn = _warn
console.error = _error

// include in postMessage result:
// { results: [...], consoleLogs }
```

### 2. Worker output type (wherever `WorkerOutput` is defined)

Add `consoleLogs: { type: string; message: string }[]` to the result type.

### 3. UI — console panel

In the exercise result component, add a collapsible panel below the test results:

```tsx
{consoleLogs.length > 0 && (
  <div className="console-panel">
    <h4>Console</h4>
    {consoleLogs.map((entry, i) => (
      <div key={i} className={`console-entry console-${entry.type}`}>
        {entry.message}
      </div>
    ))}
  </div>
)}
```

## Files to touch

| File | Change |
|------|--------|
| `src/shared/lib/worker/executor.worker.ts` | Intercept console before eval, restore after, include in result |
| `src/shared/types/exercises.ts` (or worker types) | Add `consoleLogs` to worker output type |
| Exercise result/output UI component | Render console panel below test results |

## Effort

~1–2 hours, 3–4 files.
