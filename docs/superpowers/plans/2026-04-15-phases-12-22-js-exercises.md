# JS Built-in Objects & Concepts — Phases 12–22

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add ~400 exercises across 11 phases covering all remaining Web API built-in objects and six JS pure concept categories.

**Architecture:** Each phase creates a new git branch from main, adds `Exercise[]` data files under `src/features/exercises/infrastructure/data/<name>/`, registers exports in `src/features/exercises/infrastructure/data/index.ts`, then opens a PR. Exercises follow the `Exercise` interface exactly (`slug`, `title`, `description`, `category`, `difficulty`, `builtIn`, `initialCode`, `solution`, `tests[5]`, `hints`, `tags`).

**Tech Stack:** TypeScript, Next.js 16, React 19, existing exercise infrastructure. Tests run in Web Worker sandbox — all assertions must be synchronous `expect(...)` expressions.

---

## Critical Conventions

**File naming:** `src/features/exercises/infrastructure/data/<builtInName>/<topicName>.ts`  
**Export name:** `<camelCase>Exercises` matching the export in `index.ts`  
**`builtIn` field:** exactly the display name string, e.g. `'URL'`, `'URLSearchParams'`, `'Closures'`  
**`slug` format:** `<builtinname>-<topic>-<n>` e.g. `url-constructor-1`, `closures-counter-1`  
**`category` values:** only these are valid: `'constructor'`, `'static-property'`, `'static-method'`, `'instance-method'`, `'instance-property'`, `'inheritance'`  
**5 tests per exercise** — each an inline `expect(...)` string using Jest-like API (`toBe`, `toEqual`, `toBeTruthy`, `toBeFalsy`, `toBeUndefined`, `toBeNull`, `toContain`, `toBeGreaterThan`, `toMatch`, `toBeInstanceOf`)  
**No async** in `assertion` strings — the worker runs assertions synchronously  
**Register in `index.ts`:** import the export at the top, spread into the main `allExercises` array at the bottom  

**index.ts top** (add imports with other imports in the group):
```ts
import { urlConstructorExercises } from './url/constructor'
```
**index.ts bottom** (add spreads at end of allExercises array):
```ts
...urlConstructorExercises,
```

---

## Part A — Web API Built-in Objects (Phases 12–16)

---

### Phase 12 — URL + URLSearchParams

**Branch:** `phase-12-url-urlsearchparams`  
**~55 exercises, 9 files**

#### Files to create

| File | Export | builtIn | category |
|------|--------|---------|----------|
| `src/features/exercises/infrastructure/data/url/constructor.ts` | `urlConstructorExercises` | `'URL'` | `'constructor'` |
| `src/features/exercises/infrastructure/data/url/properties.ts` | `urlPropertiesExercises` | `'URL'` | `'instance-property'` |
| `src/features/exercises/infrastructure/data/url/instance-methods.ts` | `urlInstanceMethodsExercises` | `'URL'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/url/static-methods.ts` | `urlStaticMethodsExercises` | `'URL'` | `'static-method'` |
| `src/features/exercises/infrastructure/data/urlsearchparams/constructor.ts` | `urlSearchParamsConstructorExercises` | `'URLSearchParams'` | `'constructor'` |
| `src/features/exercises/infrastructure/data/urlsearchparams/get-set.ts` | `urlSearchParamsGetSetExercises` | `'URLSearchParams'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/urlsearchparams/append-delete.ts` | `urlSearchParamsAppendDeleteExercises` | `'URLSearchParams'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/urlsearchparams/iteration.ts` | `urlSearchParamsIterationExercises` | `'URLSearchParams'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/urlsearchparams/properties.ts` | `urlSearchParamsPropExercises` | `'URLSearchParams'` | `'instance-property'` |

#### Task 12.1 — url/constructor.ts

**Cover (5 exercises each topic):**
- `new URL('https://example.com')` — basic construction  
- `new URL('/path', 'https://example.com')` — relative URL with base  
- Invalid URL throws TypeError  
- Full URL parsing (protocol + hostname + pathname at once)  
- `new URL(url.href)` round-trip  

- [ ] **Create `src/features/exercises/infrastructure/data/url/constructor.ts`**

```ts
import type { Exercise } from '@/shared/types/exercises'

export const urlConstructorExercises: Exercise[] = [
  {
    slug: 'url-constructor-1',
    title: 'URL Constructor — basic',
    description: `## URL Constructor\n\n\`new URL(href)\` parses an absolute URL string.\n\n**Challenge:** Verify that \`new URL('https://example.com').hostname\` equals \`'example.com'\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'URL',
    initialCode: `// Use new URL('https://example.com').hostname\n`,
    solution: `new URL('https://example.com').hostname`,
    tests: [
      { description: "hostname is 'example.com'", assertion: "expect(new URL('https://example.com').hostname).toBe('example.com')" },
      { description: 'is URL instance', assertion: "expect(new URL('https://example.com') instanceof URL).toBeTruthy()" },
      { description: 'protocol is https:', assertion: "expect(new URL('https://example.com').protocol).toBe('https:')" },
      { description: 'pathname is /', assertion: "expect(new URL('https://example.com').pathname).toBe('/')" },
      { description: 'href includes hostname', assertion: "expect(new URL('https://example.com').href).toContain('example.com')" },
    ],
    hints: ['new URL() takes an absolute URL string as its first argument'],
    tags: ['URL', 'constructor'],
  },
  // Exercises 2–5: relative URL with base, TypeError on invalid, full URL parsing, round-trip
  // Follow same structure: 5 tests, beginner/intermediate difficulty, matching hints
]
```

*(Repeat pattern for exercises 2–5. Each exercise: unique slug, unique assertion angle, 5 tests, matching hints.)*

- [ ] **Add import + spread to `src/features/exercises/infrastructure/data/index.ts`**
- [ ] **Run `pnpm build` — expect exit 0**
- [ ] **Commit:** `git commit -m "feat(phase-12): add URL constructor exercises"`

#### Task 12.2 — url/properties.ts

**Cover (5 exercises each):** `href`, `protocol`, `hostname`, `port`, `pathname`, `search`, `hash`, `origin`, `host`, `username`, `password`

Each exercise: parse a specific URL and assert one property value. Sample:
```ts
{ description: "port is '8080'", assertion: "expect(new URL('http://host:8080/p').port).toBe('8080')" }
```

- [ ] **Create file, 5 exercises per property group (group related props)**
- [ ] **Register in index.ts**
- [ ] **`pnpm build` → exit 0**
- [ ] **Commit:** `git commit -m "feat(phase-12): add URL instance property exercises"`

#### Task 12.3 — url/instance-methods.ts

**Cover (5 exercises each):** `toString()`, `toJSON()`

```ts
{ description: 'toString equals href', assertion: "expect(new URL('https://a.com/p').toString()).toBe(new URL('https://a.com/p').href)" }
{ description: 'toJSON returns string', assertion: "expect(typeof new URL('https://a.com').toJSON()).toBe('string')" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-12): add URL instance method exercises`

#### Task 12.4 — url/static-methods.ts

**Cover (5 exercises each):** `URL.canParse(href)`, `URL.canParse(relative, base)`

```ts
{ description: 'canParse valid URL returns true', assertion: "expect(URL.canParse('https://example.com')).toBe(true)" }
{ description: 'canParse invalid returns false', assertion: "expect(URL.canParse('not-a-url')).toBe(false)" }
{ description: 'canParse relative with base returns true', assertion: "expect(URL.canParse('/path', 'https://example.com')).toBe(true)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-12): add URL static method exercises`

#### Task 12.5 — urlsearchparams/constructor.ts

**Cover:** `new URLSearchParams()`, `new URLSearchParams('key=val&k2=v2')`, `new URLSearchParams({key: 'val'})`, `new URLSearchParams([['k','v']])`, `new URLSearchParams(url.searchParams)`

Sample:
```ts
{
  slug: 'urlsearchparams-constructor-1',
  builtIn: 'URLSearchParams',
  solution: `new URLSearchParams('a=1&b=2').get('a')`,
  tests: [
    { description: "get('a') is '1'", assertion: "expect(new URLSearchParams('a=1&b=2').get('a')).toBe('1')" },
    { description: "get('b') is '2'", assertion: "expect(new URLSearchParams('a=1&b=2').get('b')).toBe('2')" },
    { description: 'instance of URLSearchParams', assertion: "expect(new URLSearchParams() instanceof URLSearchParams).toBeTruthy()" },
    { description: 'empty size is 0', assertion: "expect(new URLSearchParams().size).toBe(0)" },
    { description: 'string init sets size', assertion: "expect(new URLSearchParams('a=1&b=2').size).toBe(2)" },
  ],
}
```

- [ ] **Create file, register, build, commit:** `feat(phase-12): add URLSearchParams constructor exercises`

#### Task 12.6 — urlsearchparams/get-set.ts

**Cover (5 exercises each):** `get(name)`, `getAll(name)`, `has(name)`, `set(name, val)`

- [ ] **Create file, register, build, commit:** `feat(phase-12): add URLSearchParams get/set exercises`

#### Task 12.7 — urlsearchparams/append-delete.ts

**Cover (5 exercises each):** `append(name, val)`, `delete(name)`, `toString()`

- [ ] **Create file, register, build, commit:** `feat(phase-12): add URLSearchParams append/delete exercises`

#### Task 12.8 — urlsearchparams/iteration.ts

**Cover (5 exercises each):** `keys()`, `values()`, `entries()`, `forEach()`, `sort()`  
Use `Array.from()` to convert iterators for assertions.

Sample:
```ts
{ description: 'keys returns iterator', assertion: "expect(typeof new URLSearchParams('a=1').keys()[Symbol.iterator]).toBe('function')" }
{ description: 'Array.from keys', assertion: "expect(Array.from(new URLSearchParams('a=1&b=2').keys())).toEqual(['a','b'])" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-12): add URLSearchParams iteration exercises`

#### Task 12.9 — urlsearchparams/properties.ts

**Cover (5 exercises):** `size` property

```ts
{ description: 'size of empty params is 0', assertion: "expect(new URLSearchParams().size).toBe(0)" }
{ description: 'size after append', assertion: "const p = new URLSearchParams(); p.append('a','1'); expect(p.size).toBe(1)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-12): add URLSearchParams size property exercises`

#### Task 12.10 — Final phase-12 verification

- [ ] **`pnpm build` → exit 0**
- [ ] **Push branch, open PR into main**

---

### Phase 13 — TextEncoder + TextDecoder + Blob + File

**Branch:** `phase-13-encoder-blob`  
**~55 exercises, 8 files**

#### Files to create

| File | Export | builtIn | category |
|------|--------|---------|----------|
| `src/features/exercises/infrastructure/data/textencoder/constructor.ts` | `textEncoderConstructorExercises` | `'TextEncoder'` | `'constructor'` |
| `src/features/exercises/infrastructure/data/textencoder/methods.ts` | `textEncoderMethodsExercises` | `'TextEncoder'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/textdecoder/constructor.ts` | `textDecoderConstructorExercises` | `'TextDecoder'` | `'constructor'` |
| `src/features/exercises/infrastructure/data/textdecoder/methods.ts` | `textDecoderMethodsExercises` | `'TextDecoder'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/blob/constructor.ts` | `blobConstructorExercises` | `'Blob'` | `'constructor'` |
| `src/features/exercises/infrastructure/data/blob/properties.ts` | `blobPropertiesExercises` | `'Blob'` | `'instance-property'` |
| `src/features/exercises/infrastructure/data/blob/slice.ts` | `blobSliceExercises` | `'Blob'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/file/constructor.ts` | `fileConstructorExercises` | `'File'` | `'constructor'` |

#### Task 13.1 — textencoder/constructor.ts

**5 exercises** on `new TextEncoder()`:
- `encoding` property equals `'utf-8'`
- `instanceof TextEncoder`
- `encode('')` returns Uint8Array
- `encode('A')` returns Uint8Array with 1 byte
- `encode('€')` returns Uint8Array with 3 bytes (UTF-8)

Sample:
```ts
{
  slug: 'textencoder-constructor-1',
  builtIn: 'TextEncoder',
  category: 'constructor',
  solution: `new TextEncoder().encoding`,
  tests: [
    { description: "encoding is 'utf-8'", assertion: "expect(new TextEncoder().encoding).toBe('utf-8')" },
    { description: 'instanceof TextEncoder', assertion: "expect(new TextEncoder() instanceof TextEncoder).toBeTruthy()" },
    { description: 'encode returns Uint8Array', assertion: "expect(new TextEncoder().encode('A') instanceof Uint8Array).toBeTruthy()" },
    { description: 'encode empty string length 0', assertion: "expect(new TextEncoder().encode('').length).toBe(0)" },
    { description: 'encode A has length 1', assertion: "expect(new TextEncoder().encode('A').length).toBe(1)" },
  ],
}
```

- [ ] **Create file, register, build, commit:** `feat(phase-13): add TextEncoder constructor exercises`

#### Task 13.2 — textencoder/methods.ts

**Cover (5 exercises each):** `encode(string)` → Uint8Array values, `encodeInto(string, uint8array)` → `{read, written}`

Sample for `encode`:
```ts
{ description: 'encode H is 72', assertion: "expect(new TextEncoder().encode('H')[0]).toBe(72)" }
{ description: 'encode hello length 5', assertion: "expect(new TextEncoder().encode('hello').length).toBe(5)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-13): add TextEncoder method exercises`

#### Task 13.3 — textdecoder/constructor.ts

**5 exercises:**
- `new TextDecoder().encoding` equals `'utf-8'`
- `new TextDecoder('utf-8').encoding` equals `'utf-8'`
- `new TextDecoder('utf-16le').encoding` equals `'utf-16le'`
- `fatal` defaults to false
- `ignoreBOM` defaults to false

```ts
{ description: 'default encoding utf-8', assertion: "expect(new TextDecoder().encoding).toBe('utf-8')" }
{ description: 'fatal defaults false', assertion: "expect(new TextDecoder().fatal).toBe(false)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-13): add TextDecoder constructor exercises`

#### Task 13.4 — textdecoder/methods.ts

**Cover (5 exercises each):** `decode(buffer)` — round-trip with TextEncoder

```ts
{ description: 'decode round-trip hello', assertion: "expect(new TextDecoder().decode(new TextEncoder().encode('hello'))).toBe('hello')" }
{ description: 'decode empty returns empty string', assertion: "expect(new TextDecoder().decode(new Uint8Array())).toBe('')" }
{ description: 'decode byte 72 is H', assertion: "expect(new TextDecoder().decode(new Uint8Array([72]))).toBe('H')" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-13): add TextDecoder method exercises`

#### Task 13.5 — blob/constructor.ts

**5 exercises** — Blob constructor (avoid async methods):
- `new Blob(['hello']).size` equals 5
- `new Blob(['hello'], {type: 'text/plain'}).type` equals `'text/plain'`
- `new Blob([]).size` equals 0
- `new Blob(['a','b']).size` equals 2 (concatenation)
- `new Blob(['€']).size` equals 3 (UTF-8 encoding)

```ts
{
  slug: 'blob-constructor-1',
  builtIn: 'Blob',
  category: 'constructor',
  solution: `new Blob(['hello']).size`,
  tests: [
    { description: "size of 'hello' blob is 5", assertion: "expect(new Blob(['hello']).size).toBe(5)" },
    { description: 'instanceof Blob', assertion: "expect(new Blob(['hello']) instanceof Blob).toBeTruthy()" },
    { description: 'empty blob size 0', assertion: "expect(new Blob([]).size).toBe(0)" },
    { description: 'default type is empty string', assertion: "expect(new Blob(['x']).type).toBe('')" },
    { description: 'custom type is preserved', assertion: "expect(new Blob(['x'],{type:'text/plain'}).type).toBe('text/plain')" },
  ],
}
```

- [ ] **Create file, register, build, commit:** `feat(phase-13): add Blob constructor exercises`

#### Task 13.6 — blob/properties.ts

**Cover (5 exercises each):** `size`, `type`

- [ ] **Create file, register, build, commit:** `feat(phase-13): add Blob property exercises`

#### Task 13.7 — blob/slice.ts

**5 exercises** on `blob.slice(start?, end?, contentType?)`:
- `new Blob(['hello']).slice(0,3).size` equals 3
- `slice` returns a Blob instance
- `slice` with contentType sets type
- `slice` from end
- empty slice size 0

```ts
{ description: 'slice(0,3) size is 3', assertion: "expect(new Blob(['hello']).slice(0,3).size).toBe(3)" }
{ description: 'slice returns Blob', assertion: "expect(new Blob(['hello']).slice(0,3) instanceof Blob).toBeTruthy()" }
{ description: 'slice sets type', assertion: "expect(new Blob(['hi']).slice(0,1,'text/plain').type).toBe('text/plain')" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-13): add Blob slice exercises`

#### Task 13.8 — file/constructor.ts

**5 exercises** — File extends Blob:
- `new File(['hello'], 'test.txt').name` equals `'test.txt'`
- `new File(['hello'], 'test.txt').size` equals 5
- `new File(['x'], 'f.txt', {type:'text/plain'}).type` equals `'text/plain'`
- `new File(['x'], 'f.txt') instanceof Blob` is true
- `new File(['x'], 'f.txt') instanceof File` is true

```ts
{
  slug: 'file-constructor-1',
  builtIn: 'File',
  category: 'constructor',
  solution: `new File(['hello'], 'test.txt').name`,
  tests: [
    { description: "name is 'test.txt'", assertion: "expect(new File(['hello'],'test.txt').name).toBe('test.txt')" },
    { description: 'instanceof File', assertion: "expect(new File(['hello'],'test.txt') instanceof File).toBeTruthy()" },
    { description: 'extends Blob', assertion: "expect(new File(['hello'],'test.txt') instanceof Blob).toBeTruthy()" },
    { description: 'size is 5', assertion: "expect(new File(['hello'],'test.txt').size).toBe(5)" },
    { description: 'lastModified is a number', assertion: "expect(typeof new File(['x'],'f.txt').lastModified).toBe('number')" },
  ],
}
```

- [ ] **Create file, register, build, commit:** `feat(phase-13): add File constructor exercises`

#### Task 13.9 — Final phase-13 verification

- [ ] **`pnpm build` → exit 0**
- [ ] **Push branch, open PR into main**

---

### Phase 14 — FormData + AbortController + AbortSignal

**Branch:** `phase-14-formdata-abort`  
**~40 exercises, 6 files**

#### Files to create

| File | Export | builtIn | category |
|------|--------|---------|----------|
| `src/features/exercises/infrastructure/data/formdata/constructor.ts` | `formDataConstructorExercises` | `'FormData'` | `'constructor'` |
| `src/features/exercises/infrastructure/data/formdata/methods.ts` | `formDataMethodsExercises` | `'FormData'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/formdata/iteration.ts` | `formDataIterationExercises` | `'FormData'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/abortcontroller/constructor.ts` | `abortControllerConstructorExercises` | `'AbortController'` | `'constructor'` |
| `src/features/exercises/infrastructure/data/abortcontroller/methods.ts` | `abortControllerMethodsExercises` | `'AbortController'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/abortsignal/static.ts` | `abortSignalStaticExercises` | `'AbortSignal'` | `'static-method'` |

#### Task 14.1 — formdata/constructor.ts

**5 exercises:**
```ts
{ description: 'new FormData() is instanceof FormData', assertion: "expect(new FormData() instanceof FormData).toBeTruthy()" }
{ description: 'empty FormData has no entries', assertion: "expect(Array.from(new FormData().entries()).length).toBe(0)" }
{ description: 'FormData is truthy', assertion: "expect(new FormData()).toBeTruthy()" }
{ description: 'typeof new FormData() is object', assertion: "expect(typeof new FormData()).toBe('object')" }
{ description: 'append then get works', assertion: "const fd=new FormData(); fd.append('k','v'); expect(fd.get('k')).toBe('v')" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-14): add FormData constructor exercises`

#### Task 14.2 — formdata/methods.ts

**Cover (5 exercises each):** `append(k,v)`, `get(k)`, `getAll(k)`, `has(k)`, `set(k,v)`, `delete(k)`

Sample for `has`:
```ts
{ description: 'has returns true after append', assertion: "const fd=new FormData(); fd.append('x','1'); expect(fd.has('x')).toBe(true)" }
{ description: 'has returns false for missing', assertion: "expect(new FormData().has('missing')).toBe(false)" }
```

Sample for `set` vs `append`:
```ts
{ description: 'set overwrites duplicate', assertion: "const fd=new FormData(); fd.append('k','v1'); fd.set('k','v2'); expect(fd.get('k')).toBe('v2')" }
{ description: 'append keeps duplicate', assertion: "const fd=new FormData(); fd.append('k','v1'); fd.append('k','v2'); expect(fd.getAll('k').length).toBe(2)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-14): add FormData method exercises`

#### Task 14.3 — formdata/iteration.ts

**Cover (5 exercises each):** `entries()`, `keys()`, `values()`, `forEach()`

```ts
{ description: 'keys() yields appended key', assertion: "const fd=new FormData(); fd.append('a','1'); expect(Array.from(fd.keys())).toEqual(['a'])" }
{ description: 'values() yields appended value', assertion: "const fd=new FormData(); fd.append('a','1'); expect(Array.from(fd.values())).toEqual(['1'])" }
{ description: 'entries() yields [key,val] pair', assertion: "const fd=new FormData(); fd.append('k','v'); expect(Array.from(fd.entries())[0]).toEqual(['k','v'])" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-14): add FormData iteration exercises`

#### Task 14.4 — abortcontroller/constructor.ts

**5 exercises:**
```ts
{ description: 'new AbortController() is truthy', assertion: "expect(new AbortController()).toBeTruthy()" }
{ description: 'signal is not aborted', assertion: "expect(new AbortController().signal.aborted).toBe(false)" }
{ description: 'signal is AbortSignal instance', assertion: "expect(new AbortController().signal instanceof AbortSignal).toBeTruthy()" }
{ description: 'reason is undefined initially', assertion: "expect(new AbortController().signal.reason).toBeUndefined()" }
{ description: 'instanceof AbortController', assertion: "expect(new AbortController() instanceof AbortController).toBeTruthy()" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-14): add AbortController constructor exercises`

#### Task 14.5 — abortcontroller/methods.ts

**5 exercises each:** `abort()`, `abort(reason)`

```ts
{ description: 'abort() sets signal.aborted to true', assertion: "const c=new AbortController(); c.abort(); expect(c.signal.aborted).toBe(true)" }
{ description: 'abort(reason) sets reason', assertion: "const c=new AbortController(); c.abort('timeout'); expect(c.signal.reason).toBe('timeout')" }
{ description: 'abort with Error reason', assertion: "const c=new AbortController(); c.abort(new Error('x')); expect(c.signal.reason instanceof Error).toBe(true)" }
{ description: 'abort is idempotent', assertion: "const c=new AbortController(); c.abort(); c.abort('second'); expect(c.signal.aborted).toBe(true)" }
{ description: 'first abort reason wins', assertion: "const c=new AbortController(); c.abort('first'); c.abort('second'); expect(c.signal.reason).toBe('first')" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-14): add AbortController method exercises`

#### Task 14.6 — abortsignal/static.ts

**5 exercises each:** `AbortSignal.abort()`, `AbortSignal.abort(reason)`, `AbortSignal.timeout(ms)`

```ts
{ description: 'AbortSignal.abort() is already aborted', assertion: "expect(AbortSignal.abort().aborted).toBe(true)" }
{ description: 'AbortSignal.abort(reason) sets reason', assertion: "expect(AbortSignal.abort('reason').reason).toBe('reason')" }
{ description: 'AbortSignal.timeout returns AbortSignal', assertion: "expect(AbortSignal.timeout(1000) instanceof AbortSignal).toBeTruthy()" }
{ description: 'AbortSignal.timeout not yet aborted', assertion: "expect(AbortSignal.timeout(99999).aborted).toBe(false)" }
{ description: 'AbortSignal.abort() instanceof AbortSignal', assertion: "expect(AbortSignal.abort() instanceof AbortSignal).toBeTruthy()" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-14): add AbortSignal static method exercises`

#### Task 14.7 — Final phase-14 verification

- [ ] **`pnpm build` → exit 0**
- [ ] **Push branch, open PR into main**

---

### Phase 15 — EventTarget + Event + performance

**Branch:** `phase-15-events-performance`  
**~50 exercises, 7 files**

#### Files to create

| File | Export | builtIn | category |
|------|--------|---------|----------|
| `src/features/exercises/infrastructure/data/eventtarget/constructor.ts` | `eventTargetConstructorExercises` | `'EventTarget'` | `'constructor'` |
| `src/features/exercises/infrastructure/data/eventtarget/methods.ts` | `eventTargetMethodsExercises` | `'EventTarget'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/event/constructor.ts` | `eventConstructorExercises` | `'Event'` | `'constructor'` |
| `src/features/exercises/infrastructure/data/event/properties.ts` | `eventPropertiesExercises` | `'Event'` | `'instance-property'` |
| `src/features/exercises/infrastructure/data/event/methods.ts` | `eventMethodsExercises` | `'Event'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/performance/methods.ts` | `performanceMethodsExercises` | `'performance'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/performance/properties.ts` | `performancePropertiesExercises` | `'performance'` | `'instance-property'` |

#### Task 15.1 — eventtarget/constructor.ts

**5 exercises:**
```ts
{ description: 'instanceof EventTarget', assertion: "expect(new EventTarget() instanceof EventTarget).toBeTruthy()" }
{ description: 'typeof addEventListener', assertion: "expect(typeof new EventTarget().addEventListener).toBe('function')" }
{ description: 'typeof removeEventListener', assertion: "expect(typeof new EventTarget().removeEventListener).toBe('function')" }
{ description: 'typeof dispatchEvent', assertion: "expect(typeof new EventTarget().dispatchEvent).toBe('function')" }
{ description: 'EventTarget is truthy', assertion: "expect(new EventTarget()).toBeTruthy()" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-15): add EventTarget constructor exercises`

#### Task 15.2 — eventtarget/methods.ts

**Cover (5 exercises each):** `addEventListener`, `removeEventListener`, `dispatchEvent`

Sample for `addEventListener` + `dispatchEvent`:
```ts
{ description: 'listener fires on dispatch', assertion: "const t=new EventTarget(); let fired=false; t.addEventListener('x',()=>{fired=true}); t.dispatchEvent(new Event('x')); expect(fired).toBe(true)" }
{ description: 'removed listener does not fire', assertion: "const t=new EventTarget(); let n=0; const h=()=>{n++}; t.addEventListener('e',h); t.removeEventListener('e',h); t.dispatchEvent(new Event('e')); expect(n).toBe(0)" }
{ description: 'dispatchEvent returns true (not cancelled)', assertion: "const t=new EventTarget(); t.addEventListener('e',()=>{}); expect(t.dispatchEvent(new Event('e'))).toBe(true)" }
{ description: 'listener receives event object', assertion: "const t=new EventTarget(); let type=''; t.addEventListener('foo',(e)=>{type=e.type}); t.dispatchEvent(new Event('foo')); expect(type).toBe('foo')" }
{ description: 'once option fires only once', assertion: "const t=new EventTarget(); let n=0; t.addEventListener('e',()=>{n++},{once:true}); t.dispatchEvent(new Event('e')); t.dispatchEvent(new Event('e')); expect(n).toBe(1)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-15): add EventTarget method exercises`

#### Task 15.3 — event/constructor.ts

**5 exercises:**
```ts
{ description: "type is 'click'", assertion: "expect(new Event('click').type).toBe('click')" }
{ description: 'instanceof Event', assertion: "expect(new Event('x') instanceof Event).toBeTruthy()" }
{ description: 'bubbles defaults to false', assertion: "expect(new Event('x').bubbles).toBe(false)" }
{ description: 'bubbles:true option', assertion: "expect(new Event('x',{bubbles:true}).bubbles).toBe(true)" }
{ description: 'cancelable defaults to false', assertion: "expect(new Event('x').cancelable).toBe(false)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-15): add Event constructor exercises`

#### Task 15.4 — event/properties.ts

**Cover (5 exercises each):** `type`, `bubbles`, `cancelable`, `composed`, `defaultPrevented`, `isTrusted`

```ts
{ description: "type reflects constructor arg", assertion: "expect(new Event('submit').type).toBe('submit')" }
{ description: 'isTrusted is false for constructed events', assertion: "expect(new Event('x').isTrusted).toBe(false)" }
{ description: 'defaultPrevented is false initially', assertion: "expect(new Event('x',{cancelable:true}).defaultPrevented).toBe(false)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-15): add Event property exercises`

#### Task 15.5 — event/methods.ts

**Cover (5 exercises each):** `preventDefault()`, `stopPropagation()`, `stopImmediatePropagation()`

```ts
{ description: 'preventDefault sets defaultPrevented', assertion: "const e=new Event('x',{cancelable:true}); e.preventDefault(); expect(e.defaultPrevented).toBe(true)" }
{ description: 'preventDefault on non-cancelable has no effect', assertion: "const e=new Event('x',{cancelable:false}); e.preventDefault(); expect(e.defaultPrevented).toBe(false)" }
{ description: 'stopPropagation is a function', assertion: "expect(typeof new Event('x').stopPropagation).toBe('function')" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-15): add Event method exercises`

#### Task 15.6 — performance/methods.ts

**Cover (5 exercises each):** `performance.now()`, `performance.mark(name)`, `performance.measure(name, start, end)`, `performance.getEntriesByName(name)`, `performance.clearMarks()`, `performance.clearMeasures()`

```ts
{ description: 'performance.now() returns a number', assertion: "expect(typeof performance.now()).toBe('number')" }
{ description: 'performance.now() is positive', assertion: "expect(performance.now()).toBeGreaterThan(0)" }
{ description: 'mark returns PerformanceMark', assertion: "expect(performance.mark('test') instanceof PerformanceMark).toBeTruthy()" }
{ description: 'getEntriesByName after mark returns 1 entry', assertion: "performance.clearMarks(); performance.mark('m1'); expect(performance.getEntriesByName('m1').length).toBe(1)" }
{ description: 'clearMarks removes entries', assertion: "performance.mark('cm'); performance.clearMarks('cm'); expect(performance.getEntriesByName('cm').length).toBe(0)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-15): add performance method exercises`

#### Task 15.7 — performance/properties.ts

**Cover (5 exercises):** `performance.timeOrigin`

```ts
{ description: 'timeOrigin is a number', assertion: "expect(typeof performance.timeOrigin).toBe('number')" }
{ description: 'timeOrigin is positive', assertion: "expect(performance.timeOrigin).toBeGreaterThan(0)" }
{ description: 'timeOrigin is less than Date.now()', assertion: "expect(performance.timeOrigin).toBeLessThan(Date.now()+1)" }
{ description: 'timeOrigin + now() approximates Date.now()', assertion: "expect(performance.timeOrigin + performance.now()).toBeGreaterThan(0)" }
{ description: 'timeOrigin is a finite number', assertion: "expect(Number.isFinite(performance.timeOrigin)).toBe(true)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-15): add performance property exercises`

#### Task 15.8 — Final phase-15 verification

- [ ] **`pnpm build` → exit 0**
- [ ] **Push branch, open PR into main**

---

### Phase 16 — console + crypto

**Branch:** `phase-16-console-crypto`  
**~25 exercises, 4 files**

#### Files to create

| File | Export | builtIn | category |
|------|--------|---------|----------|
| `src/features/exercises/infrastructure/data/console/methods.ts` | `consoleMethodsExercises` | `'console'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/console/assert.ts` | `consoleAssertExercises` | `'console'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/crypto/random.ts` | `cryptoRandomExercises` | `'crypto'` | `'static-method'` |
| `src/features/exercises/infrastructure/data/crypto/uuid.ts` | `cryptoUuidExercises` | `'crypto'` | `'static-method'` |

> **Note:** `console` methods return `undefined` — assertions focus on `typeof`, existence, and return-value checks rather than captured output.

#### Task 16.1 — console/methods.ts

**5 exercises:**
```ts
{ description: 'console.log is a function', assertion: "expect(typeof console.log).toBe('function')" }
{ description: 'console.error is a function', assertion: "expect(typeof console.error).toBe('function')" }
{ description: 'console.warn is a function', assertion: "expect(typeof console.warn).toBe('function')" }
{ description: 'console.info is a function', assertion: "expect(typeof console.info).toBe('function')" }
{ description: 'console.log returns undefined', assertion: "expect(console.log('test')).toBeUndefined()" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-16): add console method exercises`

#### Task 16.2 — console/assert.ts

**5 exercises on `console.assert(condition, msg)`:**
```ts
{ description: 'console.assert is a function', assertion: "expect(typeof console.assert).toBe('function')" }
{ description: 'assert(true) returns undefined', assertion: "expect(console.assert(true,'msg')).toBeUndefined()" }
{ description: 'assert(false) returns undefined (no throw)', assertion: "expect(console.assert(false,'msg')).toBeUndefined()" }
{ description: 'console.count is a function', assertion: "expect(typeof console.count).toBe('function')" }
{ description: 'console.table is a function', assertion: "expect(typeof console.table).toBe('function')" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-16): add console.assert exercises`

#### Task 16.3 — crypto/random.ts

**5 exercises on `crypto.getRandomValues(typedArray)`:**
```ts
{ description: 'getRandomValues returns same typed array', assertion: "const a=new Uint8Array(4); expect(crypto.getRandomValues(a)).toBe(a)" }
{ description: 'returned array has correct length', assertion: "expect(crypto.getRandomValues(new Uint8Array(8)).length).toBe(8)" }
{ description: 'values are numbers', assertion: "expect(typeof crypto.getRandomValues(new Uint8Array(1))[0]).toBe('number')" }
{ description: 'values are in 0-255 range', assertion: "const v=crypto.getRandomValues(new Uint8Array(1))[0]; expect(v>=0 && v<=255).toBe(true)" }
{ description: 'works with Uint32Array', assertion: "expect(crypto.getRandomValues(new Uint32Array(2)).length).toBe(2)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-16): add crypto.getRandomValues exercises`

#### Task 16.4 — crypto/uuid.ts

**5 exercises on `crypto.randomUUID()`:**
```ts
{ description: 'randomUUID returns a string', assertion: "expect(typeof crypto.randomUUID()).toBe('string')" }
{ description: 'UUID has length 36', assertion: "expect(crypto.randomUUID().length).toBe(36)" }
{ description: 'UUID contains dashes', assertion: "expect(crypto.randomUUID().includes('-')).toBe(true)" }
{ description: 'UUID matches format', assertion: "expect(crypto.randomUUID()).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)" }
{ description: 'consecutive UUIDs are different', assertion: "expect(crypto.randomUUID()).not.toBe(crypto.randomUUID())" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-16): add crypto.randomUUID exercises`

#### Task 16.5 — Final phase-16 verification

- [ ] **`pnpm build` → exit 0**
- [ ] **Push branch, open PR into main**

---

## Part B — JS Pure Concepts (Phases 17–22)

> **Convention for JS concepts:** `builtIn` is the concept name (e.g. `'Closures'`). Use `category: 'instance-method'` for functional exercises unless another category fits better. The `initialCode` gives a stub; the `solution` is the minimal correct answer.

---

### Phase 17 — Closures & Scope

**Branch:** `phase-17-closures`  
**~35 exercises, 4 files**

#### Files to create

| File | Export | builtIn | category |
|------|--------|---------|----------|
| `src/features/exercises/infrastructure/data/closures/counter.ts` | `closuresCounterExercises` | `'Closures'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/closures/private-state.ts` | `closuresPrivateStateExercises` | `'Closures'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/closures/factory.ts` | `closuresFactoryExercises` | `'Closures'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/closures/scope.ts` | `closuresScopeExercises` | `'Closures'` | `'instance-method'` |

#### Task 17.1 — closures/counter.ts

**5 exercises** building counter closures:

```ts
{
  slug: 'closures-counter-1',
  title: 'Closures — makeCounter',
  description: `## Closures — Counter\n\nA closure can remember a private variable across calls.\n\n**Challenge:** Complete \`makeCounter\` so each call to \`counter()\` increments and returns the count.`,
  category: 'instance-method',
  difficulty: 'beginner',
  builtIn: 'Closures',
  initialCode: `function makeCounter() {\n  // your code\n}\nconst counter = makeCounter()\ncounter()`,
  solution: `function makeCounter() {\n  let n = 0\n  return () => ++n\n}\nconst counter = makeCounter()\ncounter()`,
  tests: [
    { description: 'first call returns 1', assertion: "function makeCounter(){let n=0;return()=>++n} const c=makeCounter(); expect(c()).toBe(1)" },
    { description: 'second call returns 2', assertion: "function makeCounter(){let n=0;return()=>++n} const c=makeCounter(); c(); expect(c()).toBe(2)" },
    { description: 'two counters are independent', assertion: "function makeCounter(){let n=0;return()=>++n} const a=makeCounter(),b=makeCounter(); a();a(); expect(b()).toBe(1)" },
    { description: 'returns a function', assertion: "function makeCounter(){let n=0;return()=>++n} expect(typeof makeCounter()).toBe('function')" },
    { description: '10 calls returns 10', assertion: "function makeCounter(){let n=0;return()=>++n} const c=makeCounter(); for(let i=0;i<9;i++)c(); expect(c()).toBe(10)" },
  ],
  hints: ['Declare a variable in the outer function; the returned function captures it via closure'],
  tags: ['Closures', 'counter', 'scope'],
},
```

*(Exercises 2–5: reset counter, step counter (increment by n), countdown, memoize single value)*

- [ ] **Create file, register, build, commit:** `feat(phase-17): add closure counter exercises`

#### Task 17.2 — closures/private-state.ts

**5 exercises:** encapsulate private state — bank account balance, toggle, once (run function only once), partial application

Sample (`once`):
```ts
{
  slug: 'closures-once-1',
  solution: `function once(fn) {\n  let called = false, result\n  return function(...args) {\n    if (!called) { called = true; result = fn(...args) }\n    return result\n  }\n}`,
  tests: [
    { description: 'fn called only once', assertion: "function once(fn){let c=false,r;return(...a)=>{if(!c){c=true;r=fn(...a)}return r}} let n=0; const o=once(()=>++n); o();o(); expect(n).toBe(1)" },
    { description: 'returns first result on repeat calls', assertion: "function once(fn){let c=false,r;return(...a)=>{if(!c){c=true;r=fn(...a)}return r}} const o=once((x)=>x*2); expect(o(5)).toBe(10); expect(o(99)).toBe(10)" },
  ],
}
```

- [ ] **Create file, register, build, commit:** `feat(phase-17): add closure private-state exercises`

#### Task 17.3 — closures/factory.ts

**5 exercises:** function factories — `makeAdder(n)`, `makeMultiplier(n)`, `makeGreeter(prefix)`, `makeValidator(min,max)`, `makePower(exp)`

```ts
{ description: 'makeAdder(5)(3) is 8', assertion: "function makeAdder(n){return x=>x+n} expect(makeAdder(5)(3)).toBe(8)" }
{ description: 'makeMultiplier(4)(7) is 28', assertion: "function makeMultiplier(n){return x=>x*n} expect(makeMultiplier(4)(7)).toBe(28)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-17): add closure factory exercises`

#### Task 17.4 — closures/scope.ts

**5 exercises:** `var` vs `let` in loops, IIFE, `this` binding in closures, temporal dead zone awareness

```ts
{ description: 'let in loop closure captures correct i', assertion: "const fns=[]; for(let i=0;i<3;i++) fns.push(()=>i); expect(fns[2]()).toBe(2)" }
{ description: 'IIFE returns value immediately', assertion: "const result=(function(){return 42})(); expect(result).toBe(42)" }
{ description: 'closure over const', assertion: "const x=10; const f=()=>x; expect(f()).toBe(10)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-17): add closure scope exercises`

#### Task 17.5 — Final phase-17 verification

- [ ] **`pnpm build` → exit 0**
- [ ] **Push branch, open PR into main**

---

### Phase 18 — Prototype & Class

**Branch:** `phase-18-prototypes`  
**~35 exercises, 4 files**

#### Files to create

| File | Export | builtIn | category |
|------|--------|---------|----------|
| `src/features/exercises/infrastructure/data/prototypes/prototype-chain.ts` | `prototypeChainExercises` | `'Prototypes'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/prototypes/object-create.ts` | `prototypeObjectCreateExercises` | `'Prototypes'` | `'static-method'` |
| `src/features/exercises/infrastructure/data/prototypes/class-basics.ts` | `prototypeClassBasicsExercises` | `'Prototypes'` | `'constructor'` |
| `src/features/exercises/infrastructure/data/prototypes/inheritance.ts` | `prototypeInheritanceExercises` | `'Prototypes'` | `'inheritance'` |

#### Task 18.1 — prototypes/prototype-chain.ts

**5 exercises** on `Object.getPrototypeOf`, `hasOwnProperty`, prototype chain lookup:

```ts
{ description: 'Object.getPrototypeOf({}) is Object.prototype', assertion: "expect(Object.getPrototypeOf({})).toBe(Object.prototype)" }
{ description: 'method on prototype is accessible', assertion: "const proto={greet(){return 'hi'}}; const obj=Object.create(proto); expect(obj.greet()).toBe('hi')" }
{ description: 'hasOwnProperty false for inherited', assertion: "const proto={x:1}; const obj=Object.create(proto); expect(obj.hasOwnProperty('x')).toBe(false)" }
{ description: 'hasOwnProperty true for own', assertion: "const obj=Object.create({x:1}); obj.y=2; expect(obj.hasOwnProperty('y')).toBe(true)" }
{ description: 'prototype chain length', assertion: "const a={}; const b=Object.create(a); expect(Object.getPrototypeOf(b)).toBe(a)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-18): add prototype chain exercises`

#### Task 18.2 — prototypes/object-create.ts

**5 exercises** on `Object.create(proto, descriptors)`:

```ts
{ description: 'inherits method from proto', assertion: "const p={double(){return this.n*2}}; const o=Object.create(p); o.n=5; expect(o.double()).toBe(10)" }
{ description: 'null prototype object', assertion: "const o=Object.create(null); expect(Object.getPrototypeOf(o)).toBeNull()" }
{ description: 'descriptor defines property', assertion: "const o=Object.create({},{x:{value:42,writable:true}}); expect(o.x).toBe(42)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-18): add Object.create exercises`

#### Task 18.3 — prototypes/class-basics.ts

**5 exercises** on `class` syntax, constructor, methods, getters/setters:

```ts
{
  slug: 'prototypes-class-1',
  solution: `class Animal {\n  constructor(name) { this.name = name }\n  speak() { return \`\${this.name} makes a noise\` }\n}\nnew Animal('Dog').speak()`,
  tests: [
    { description: 'returns correct string', assertion: "class Animal{constructor(n){this.name=n}speak(){return `${this.name} makes a noise`}} expect(new Animal('Dog').speak()).toBe('Dog makes a noise')" },
    { description: 'instanceof Animal', assertion: "class Animal{constructor(n){this.name=n}} expect(new Animal('Cat') instanceof Animal).toBeTruthy()" },
    { description: 'name property set', assertion: "class Animal{constructor(n){this.name=n}} expect(new Animal('Fish').name).toBe('Fish')" },
  ],
}
```

- [ ] **Create file, register, build, commit:** `feat(phase-18): add class basics exercises`

#### Task 18.4 — prototypes/inheritance.ts

**5 exercises** on `extends`, `super()`, `super.method()`, method override, `instanceof` with hierarchy:

```ts
{ description: 'extends inherits method', assertion: "class A{greet(){return 'hello'}} class B extends A{} expect(new B().greet()).toBe('hello')" }
{ description: 'super() calls parent constructor', assertion: "class A{constructor(x){this.x=x}} class B extends A{constructor(x){super(x)}} expect(new B(7).x).toBe(7)" }
{ description: 'override method', assertion: "class A{greet(){return 'A'}} class B extends A{greet(){return 'B'}} expect(new B().greet()).toBe('B')" }
{ description: 'super.method() calls parent', assertion: "class A{greet(){return 'A'}} class B extends A{greet(){return super.greet()+'B'}} expect(new B().greet()).toBe('AB')" }
{ description: 'instanceof parent true', assertion: "class A{} class B extends A{} expect(new B() instanceof A).toBe(true)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-18): add class inheritance exercises`

#### Task 18.5 — Final phase-18 verification

- [ ] **`pnpm build` → exit 0**
- [ ] **Push branch, open PR into main**

---

### Phase 19 — Async Patterns

**Branch:** `phase-19-async`  
**~30 exercises, 4 files**

> **Note:** Exercises must use synchronous assertions. Test `instanceof Promise`, return values of `.then()`/`Promise.all()`, or synchronous aspects of Promise APIs.

#### Files to create

| File | Export | builtIn | category |
|------|--------|---------|----------|
| `src/features/exercises/infrastructure/data/asyncpatterns/promise-basics.ts` | `asyncPromiseBasicsExercises` | `'AsyncPatterns'` | `'constructor'` |
| `src/features/exercises/infrastructure/data/asyncpatterns/combinators.ts` | `asyncCombinatorsExercises` | `'AsyncPatterns'` | `'static-method'` |
| `src/features/exercises/infrastructure/data/asyncpatterns/async-await.ts` | `asyncAwaitExercises` | `'AsyncPatterns'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/asyncpatterns/error-handling.ts` | `asyncErrorHandlingExercises` | `'AsyncPatterns'` | `'instance-method'` |

#### Task 19.1 — asyncpatterns/promise-basics.ts

**5 exercises** — synchronous-testable Promise properties:

```ts
{ description: 'Promise.resolve returns a Promise', assertion: "expect(Promise.resolve(42) instanceof Promise).toBeTruthy()" }
{ description: 'async function returns Promise', assertion: "async function f(){return 1} expect(f() instanceof Promise).toBeTruthy()" }
{ description: 'Promise.reject returns a Promise', assertion: "const p=Promise.reject('e').catch(()=>{}); expect(p instanceof Promise).toBeTruthy()" }
{ description: '.then returns a new Promise', assertion: "expect(Promise.resolve(1).then(x=>x) instanceof Promise).toBeTruthy()" }
{ description: 'new Promise executor runs synchronously', assertion: "let ran=false; new Promise(r=>{ran=true;r()}); expect(ran).toBe(true)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-19): add Promise basics exercises`

#### Task 19.2 — asyncpatterns/combinators.ts

**5 exercises each:** `Promise.all`, `Promise.allSettled`, `Promise.race`, `Promise.any` — test return types synchronously:

```ts
{ description: 'Promise.all returns Promise', assertion: "expect(Promise.all([Promise.resolve(1)]) instanceof Promise).toBeTruthy()" }
{ description: 'Promise.allSettled returns Promise', assertion: "expect(Promise.allSettled([Promise.resolve(1)]) instanceof Promise).toBeTruthy()" }
{ description: 'Promise.race returns Promise', assertion: "expect(Promise.race([Promise.resolve(1)]) instanceof Promise).toBeTruthy()" }
{ description: 'Promise.any returns Promise', assertion: "expect(Promise.any([Promise.resolve(1)]) instanceof Promise).toBeTruthy()" }
{ description: 'Promise.all([]) resolves array', assertion: "let result; Promise.all([]).then(r=>{result=r}); expect(Array.isArray(result)).toBeTruthy()" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-19): add Promise combinator exercises`

#### Task 19.3 — asyncpatterns/async-await.ts

**5 exercises** showing `async function` return values and `await` patterns (synchronously testable aspects):

```ts
{ description: 'async fn returns Promise', assertion: "async function f(){return 42} expect(f() instanceof Promise).toBe(true)" }
{ description: 'async fn with no return resolves undefined', assertion: "async function f(){} let r=null; f().then(v=>{r=v}); expect(r).toBe(undefined)" }
{ description: 'async arrow function', assertion: "const f=async()=>99; expect(f() instanceof Promise).toBe(true)" }
{ description: 'Promise.resolve().then synchronous callback', assertion: "let x=0; Promise.resolve().then(()=>{x=1}); expect(x).toBe(0)" }
{ description: 'executor runs sync, then is async', assertion: "let order=[]; new Promise(r=>{order.push(1);r()}).then(()=>order.push(3)); order.push(2); expect(order).toEqual([1,2])" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-19): add async/await exercises`

#### Task 19.4 — asyncpatterns/error-handling.ts

**5 exercises** on `.catch`, `Promise.reject`, error propagation (synchronously testable):

```ts
{ description: '.catch returns a Promise', assertion: "expect(Promise.reject('e').catch(()=>{}) instanceof Promise).toBeTruthy()" }
{ description: 'Promise.reject with error type', assertion: "Promise.reject(new TypeError('bad')).catch(e=>expect(e instanceof TypeError).toBe(true))" }
{ description: '.finally returns a Promise', assertion: "expect(Promise.resolve(1).finally(()=>{}) instanceof Promise).toBeTruthy()" }
{ description: 'try/catch in async fn', assertion: "async function f(){try{throw new Error('e')}catch(e){return e.message}} expect(f() instanceof Promise).toBe(true)" }
{ description: 'unhandled rejection is a Promise', assertion: "const p=Promise.reject(new Error('x')); p.catch(()=>{}); expect(p instanceof Promise).toBe(true)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-19): add async error handling exercises`

#### Task 19.5 — Final phase-19 verification

- [ ] **`pnpm build` → exit 0**
- [ ] **Push branch, open PR into main**

---

### Phase 20 — Functional Programming

**Branch:** `phase-20-functional`  
**~35 exercises, 5 files**

#### Files to create

| File | Export | builtIn | category |
|------|--------|---------|----------|
| `src/features/exercises/infrastructure/data/functionalprogramming/pure-functions.ts` | `fpPureFunctionsExercises` | `'FunctionalProgramming'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/functionalprogramming/currying.ts` | `fpCurryingExercises` | `'FunctionalProgramming'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/functionalprogramming/composition.ts` | `fpCompositionExercises` | `'FunctionalProgramming'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/functionalprogramming/higher-order.ts` | `fpHigherOrderExercises` | `'FunctionalProgramming'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/functionalprogramming/memoization.ts` | `fpMemoizationExercises` | `'FunctionalProgramming'` | `'instance-method'` |

#### Task 20.1 — functionalprogramming/pure-functions.ts

**5 exercises** on pure functions (no side effects, same output for same input):

```ts
{
  slug: 'fp-pure-1',
  title: 'Functional — pure add',
  solution: `function add(a, b) { return a + b }`,
  tests: [
    { description: 'add(2,3) is 5', assertion: "function add(a,b){return a+b} expect(add(2,3)).toBe(5)" },
    { description: 'same input same output', assertion: "function add(a,b){return a+b} expect(add(1,1)).toBe(add(1,1))" },
    { description: 'no mutation', assertion: "function add(a,b){return a+b} const x=5; add(x,1); expect(x).toBe(5)" },
    { description: 'add(0,0) is 0', assertion: "function add(a,b){return a+b} expect(add(0,0)).toBe(0)" },
    { description: 'add(-1,1) is 0', assertion: "function add(a,b){return a+b} expect(add(-1,1)).toBe(0)" },
  ],
}
```

- [ ] **Create file, register, build, commit:** `feat(phase-20): add pure function exercises`

#### Task 20.2 — functionalprogramming/currying.ts

**5 exercises:** curry a 2-arg function, curry a 3-arg function, partial application via `bind`, manual partial application:

```ts
{ description: 'curry(add)(2)(3) is 5', assertion: "function curry(fn){return a=>b=>fn(a,b)} const add=(a,b)=>a+b; expect(curry(add)(2)(3)).toBe(5)" }
{ description: 'partial add5 works', assertion: "const add5=x=>x+5; expect(add5(10)).toBe(15)" }
{ description: 'curried fn reusable', assertion: "function curry(fn){return a=>b=>fn(a,b)} const mul=(a,b)=>a*b; const double=curry(mul)(2); expect(double(7)).toBe(14)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-20): add currying exercises`

#### Task 20.3 — functionalprogramming/composition.ts

**5 exercises:** `compose(f,g)(x)`, `pipe(f,g)(x)`, composing 3 functions:

```ts
{ description: 'pipe(f,g)(x) applies left-to-right', assertion: "const pipe=(...fns)=>x=>fns.reduce((v,f)=>f(v),x); const add1=x=>x+1; const double=x=>x*2; expect(pipe(add1,double)(3)).toBe(8)" }
{ description: 'compose(f,g)(x) applies right-to-left', assertion: "const compose=(...fns)=>x=>fns.reduceRight((v,f)=>f(v),x); const add1=x=>x+1; const double=x=>x*2; expect(compose(add1,double)(3)).toBe(7)" }
{ description: 'composing 3 functions', assertion: "const pipe=(...fns)=>x=>fns.reduce((v,f)=>f(v),x); expect(pipe(x=>x+1,x=>x*2,x=>x-1)(5)).toBe(11)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-20): add function composition exercises`

#### Task 20.4 — functionalprogramming/higher-order.ts

**5 exercises:** implement `map`, `filter`, `reduce` from scratch (for educational value):

```ts
{ description: 'custom map doubles array', assertion: "function myMap(arr,fn){return arr.reduce((a,x)=>[...a,fn(x)],[])} expect(myMap([1,2,3],x=>x*2)).toEqual([2,4,6])" }
{ description: 'custom filter keeps evens', assertion: "function myFilter(arr,fn){return arr.reduce((a,x)=>fn(x)?[...a,x]:a,[])} expect(myFilter([1,2,3,4],x=>x%2===0)).toEqual([2,4])" }
{ description: 'custom reduce sums array', assertion: "function myReduce(arr,fn,init){return arr.reduce(fn,init)} expect(myReduce([1,2,3],(a,x)=>a+x,0)).toBe(6)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-20): add higher-order function exercises`

#### Task 20.5 — functionalprogramming/memoization.ts

**5 exercises:** implement `memoize(fn)`, memoize with string keys, cache hit count:

```ts
{ description: 'memoize caches result', assertion: "function memoize(fn){const c={};return x=>x in c?c[x]:(c[x]=fn(x))} let n=0; const f=memoize(x=>{n++;return x*2}); f(5);f(5); expect(n).toBe(1)" }
{ description: 'memoize returns correct value', assertion: "function memoize(fn){const c={};return x=>x in c?c[x]:(c[x]=fn(x))} const f=memoize(x=>x**2); expect(f(4)).toBe(16)" }
{ description: 'cache miss still computes', assertion: "function memoize(fn){const c={};return x=>x in c?c[x]:(c[x]=fn(x))} const f=memoize(x=>x+1); expect(f(9)).toBe(10)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-20): add memoization exercises`

#### Task 20.6 — Final phase-20 verification

- [ ] **`pnpm build` → exit 0**
- [ ] **Push branch, open PR into main**

---

### Phase 21 — Design Patterns

**Branch:** `phase-21-design-patterns`  
**~35 exercises, 5 files**

#### Files to create

| File | Export | builtIn | category |
|------|--------|---------|----------|
| `src/features/exercises/infrastructure/data/designpatterns/singleton.ts` | `dpSingletonExercises` | `'DesignPatterns'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/designpatterns/observer.ts` | `dpObserverExercises` | `'DesignPatterns'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/designpatterns/factory.ts` | `dpFactoryExercises` | `'DesignPatterns'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/designpatterns/decorator.ts` | `dpDecoratorExercises` | `'DesignPatterns'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/designpatterns/strategy.ts` | `dpStrategyExercises` | `'DesignPatterns'` | `'instance-method'` |

#### Task 21.1 — designpatterns/singleton.ts

**5 exercises** implementing a Singleton:
```ts
{ description: 'getInstance returns same instance', assertion: "class S{static i=null;static getInstance(){return S.i??(S.i=new S())}} expect(S.getInstance()).toBe(S.getInstance())" }
{ description: 'Singleton is truthy', assertion: "class S{static i=null;static getInstance(){return S.i??(S.i=new S())}} expect(S.getInstance()).toBeTruthy()" }
{ description: 'module-level singleton (closure)', assertion: "const getInstance=(()=>{let i=null;return()=>i??(i={})})(); expect(getInstance()).toBe(getInstance())" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-21): add Singleton pattern exercises`

#### Task 21.2 — designpatterns/observer.ts

**5 exercises** implementing basic pub/sub:
```ts
{ description: 'subscriber receives event', assertion: "class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}} const ee=new E(); let v=0; ee.on('x',n=>{v=n}); ee.emit('x',42); expect(v).toBe(42)" }
{ description: 'multiple subscribers fire', assertion: "class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e){(this._l[e]??[]).forEach(f=>f())}} const ee=new E(); let n=0; ee.on('e',()=>n++); ee.on('e',()=>n++); ee.emit('e'); expect(n).toBe(2)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-21): add Observer pattern exercises`

#### Task 21.3 — designpatterns/factory.ts

**5 exercises** implementing Factory pattern:
```ts
{ description: 'factory creates correct type', assertion: "function createAnimal(type){return type==='dog'?{speak:()=>'woof'}:{speak:()=>'meow'}} expect(createAnimal('dog').speak()).toBe('woof')" }
{ description: 'factory hides constructor', assertion: "function createUser(name){return{name,greet(){return `Hi ${this.name}`}}} expect(createUser('Ana').greet()).toBe('Hi Ana')" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-21): add Factory pattern exercises`

#### Task 21.4 — designpatterns/decorator.ts

**5 exercises** implementing function decorators:
```ts
{ description: 'logged decorator wraps fn', assertion: "function logged(fn){return(...a)=>fn(...a)} expect(logged(x=>x*2)(5)).toBe(10)" }
{ description: 'timed decorator returns result', assertion: "function timed(fn){return(...a)=>{const r=fn(...a);return r}} expect(timed(x=>x+1)(9)).toBe(10)" }
{ description: 'readonly decorator blocks mutation', assertion: "function readonly(obj){return Object.freeze({...obj})} const o=readonly({x:1}); expect(()=>{o.x=2}).not.toBe(undefined)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-21): add Decorator pattern exercises`

#### Task 21.5 — designpatterns/strategy.ts

**5 exercises** implementing Strategy pattern (swappable algorithms):
```ts
{ description: 'sort strategy ascending', assertion: "const sorter={strategy:(a,b)=>a-b,sort(arr){return[...arr].sort(this.strategy)}}; expect(sorter.sort([3,1,2])).toEqual([1,2,3])" }
{ description: 'sort strategy descending', assertion: "const s={strategy:(a,b)=>b-a,sort(arr){return[...arr].sort(this.strategy)}}; expect(s.sort([1,3,2])).toEqual([3,2,1])" }
{ description: 'strategy is swappable', assertion: "const s={strategy:null,sort(arr){return[...arr].sort(this.strategy)}}; s.strategy=(a,b)=>a-b; expect(s.sort([2,1])).toEqual([1,2])" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-21): add Strategy pattern exercises`

#### Task 21.6 — Final phase-21 verification

- [ ] **`pnpm build` → exit 0**
- [ ] **Push branch, open PR into main**

---

### Phase 22 — Algorithms

**Branch:** `phase-22-algorithms`  
**~35 exercises, 5 files**

#### Files to create

| File | Export | builtIn | category |
|------|--------|---------|----------|
| `src/features/exercises/infrastructure/data/algorithms/sorting.ts` | `algoSortingExercises` | `'Algorithms'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/algorithms/searching.ts` | `algoSearchingExercises` | `'Algorithms'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/algorithms/recursion.ts` | `algoRecursionExercises` | `'Algorithms'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/algorithms/strings.ts` | `algoStringsExercises` | `'Algorithms'` | `'instance-method'` |
| `src/features/exercises/infrastructure/data/algorithms/data-structures.ts` | `algoDataStructuresExercises` | `'Algorithms'` | `'instance-method'` |

#### Task 22.1 — algorithms/sorting.ts

**5 exercises:** implement bubble sort, selection sort, insertion sort, verify `Array.prototype.sort` behavior, stable sort:

```ts
{
  slug: 'algo-sort-bubble-1',
  title: 'Algorithms — Bubble Sort',
  solution: `function bubbleSort(arr) {\n  const a = [...arr]\n  for (let i=0; i<a.length; i++)\n    for (let j=0; j<a.length-i-1; j++)\n      if (a[j]>a[j+1]) [a[j],a[j+1]]=[a[j+1],a[j]]\n  return a\n}`,
  tests: [
    { description: 'sorts [3,1,2]', assertion: "function bubbleSort(a){const r=[...a];for(let i=0;i<r.length;i++)for(let j=0;j<r.length-i-1;j++)if(r[j]>r[j+1])[r[j],r[j+1]]=[r[j+1],r[j]];return r} expect(bubbleSort([3,1,2])).toEqual([1,2,3])" },
    { description: 'does not mutate input', assertion: "function bubbleSort(a){const r=[...a];for(let i=0;i<r.length;i++)for(let j=0;j<r.length-i-1;j++)if(r[j]>r[j+1])[r[j],r[j+1]]=[r[j+1],r[j]];return r} const a=[3,1,2]; bubbleSort(a); expect(a).toEqual([3,1,2])" },
    { description: 'empty array returns empty', assertion: "function bubbleSort(a){const r=[...a];for(let i=0;i<r.length;i++)for(let j=0;j<r.length-i-1;j++)if(r[j]>r[j+1])[r[j],r[j+1]]=[r[j+1],r[j]];return r} expect(bubbleSort([])).toEqual([])" },
    { description: 'already sorted', assertion: "function bubbleSort(a){const r=[...a];for(let i=0;i<r.length;i++)for(let j=0;j<r.length-i-1;j++)if(r[j]>r[j+1])[r[j],r[j+1]]=[r[j+1],r[j]];return r} expect(bubbleSort([1,2,3])).toEqual([1,2,3])" },
    { description: 'single element', assertion: "function bubbleSort(a){const r=[...a];for(let i=0;i<r.length;i++)for(let j=0;j<r.length-i-1;j++)if(r[j]>r[j+1])[r[j],r[j+1]]=[r[j+1],r[j]];return r} expect(bubbleSort([5])).toEqual([5])" },
  ],
}
```

*(Exercises 2–5: selection sort, insertion sort, merge sort, verify `[].sort((a,b)=>a-b)` is stable)*

- [ ] **Create file, register, build, commit:** `feat(phase-22): add sorting algorithm exercises`

#### Task 22.2 — algorithms/searching.ts

**5 exercises:** linear search, binary search, find index by predicate, includes check, search in objects array:

```ts
{ description: 'binary search finds target', assertion: "function bsearch(a,t){let l=0,r=a.length-1;while(l<=r){const m=(l+r)>>1;if(a[m]===t)return m;a[m]<t?l=m+1:r=m-1}return-1} expect(bsearch([1,3,5,7,9],5)).toBe(2)" }
{ description: 'binary search returns -1 if missing', assertion: "function bsearch(a,t){let l=0,r=a.length-1;while(l<=r){const m=(l+r)>>1;if(a[m]===t)return m;a[m]<t?l=m+1:r=m-1}return-1} expect(bsearch([1,3,5],4)).toBe(-1)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-22): add searching algorithm exercises`

#### Task 22.3 — algorithms/recursion.ts

**5 exercises:** factorial, fibonacci, flatten array, power function, palindrome check:

```ts
{ description: 'factorial(5) is 120', assertion: "function factorial(n){return n<=1?1:n*factorial(n-1)} expect(factorial(5)).toBe(120)" }
{ description: 'fibonacci(7) is 13', assertion: "function fib(n){return n<=1?n:fib(n-1)+fib(n-2)} expect(fib(7)).toBe(13)" }
{ description: 'flatten nested array', assertion: "function flat(a){return a.reduce((r,x)=>r.concat(Array.isArray(x)?flat(x):x),[])} expect(flat([1,[2,[3]]])).toEqual([1,2,3])" }
{ description: 'power(2,10) is 1024', assertion: "function power(b,e){return e===0?1:b*power(b,e-1)} expect(power(2,10)).toBe(1024)" }
{ description: 'isPalindrome racecar', assertion: "function isPalindrome(s){return s===s.split('').reverse().join('')} expect(isPalindrome('racecar')).toBe(true)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-22): add recursion exercises`

#### Task 22.4 — algorithms/strings.ts

**5 exercises:** anagram check, reverse words, count vowels, camelCase to snake_case, longest common prefix:

```ts
{ description: 'anagram check', assertion: "function isAnagram(a,b){const s=x=>x.toLowerCase().split('').sort().join('');return s(a)===s(b)} expect(isAnagram('listen','silent')).toBe(true)" }
{ description: 'reverse words', assertion: "function reverseWords(s){return s.split(' ').reverse().join(' ')} expect(reverseWords('hello world')).toBe('world hello')" }
{ description: 'count vowels', assertion: "function countVowels(s){return(s.match(/[aeiou]/gi)||[]).length} expect(countVowels('hello')).toBe(2)" }
{ description: 'camelCase to snake_case', assertion: "function toSnake(s){return s.replace(/([A-Z])/g,m=>'_'+m.toLowerCase())} expect(toSnake('helloWorld')).toBe('hello_world')" }
{ description: 'longest common prefix', assertion: "function lcp(a){return a.reduce((p,s)=>{while(!s.startsWith(p))p=p.slice(0,-1);return p})} expect(lcp(['flower','flow','flight'])).toBe('fl')" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-22): add string algorithm exercises`

#### Task 22.5 — algorithms/data-structures.ts

**5 exercises:** stack (push/pop), queue (enqueue/dequeue), linked list (append/length), stack-based balanced brackets, queue using two stacks:

```ts
{ description: 'stack push and pop', assertion: "class Stack{constructor(){this.s=[]}push(x){this.s.push(x)}pop(){return this.s.pop()}} const st=new Stack(); st.push(1); st.push(2); expect(st.pop()).toBe(2)" }
{ description: 'queue FIFO order', assertion: "class Queue{constructor(){this.q=[]}enqueue(x){this.q.push(x)}dequeue(){return this.q.shift()}} const q=new Queue(); q.enqueue(1); q.enqueue(2); expect(q.dequeue()).toBe(1)" }
{ description: 'balanced brackets', assertion: "function balanced(s){const st=[];for(const c of s){if('([{'.includes(c))st.push(c);else{const m={')':`(`,']}':'[','}':`{`};if(st.pop()!==m[c])return false}}return st.length===0} expect(balanced('()[]{}')).toBe(true)" }
{ description: 'unbalanced brackets returns false', assertion: "function balanced(s){const st=[];for(const c of s){if('([{'.includes(c))st.push(c);else{const m={')':'(',']}':'[','}':'{`};if(st.pop()!==m[c])return false}}return st.length===0} expect(balanced('([)')).toBe(false)" }
{ description: 'linked list length', assertion: "class Node{constructor(v){this.v=v;this.next=null}} class LL{constructor(){this.h=null}append(v){const n=new Node(v);if(!this.h){this.h=n;return}let c=this.h;while(c.next)c=c.next;c.next=n}length(){let c=this.h,n=0;while(c){n++;c=c.next}return n}} const l=new LL();l.append(1);l.append(2);l.append(3); expect(l.length()).toBe(3)" }
```

- [ ] **Create file, register, build, commit:** `feat(phase-22): add data structures exercises`

#### Task 22.6 — Final phase-22 verification

- [ ] **`pnpm build` → exit 0**
- [ ] **Push branch, open PR into main**

---

## Summary Table

| Phase | Branch | Built-in / Topic | ~Exercises | Files |
|-------|--------|-----------------|-----------|-------|
| 12 | `phase-12-url-urlsearchparams` | URL + URLSearchParams | 55 | 9 |
| 13 | `phase-13-encoder-blob` | TextEncoder + TextDecoder + Blob + File | 55 | 8 |
| 14 | `phase-14-formdata-abort` | FormData + AbortController + AbortSignal | 40 | 6 |
| 15 | `phase-15-events-performance` | EventTarget + Event + performance | 50 | 7 |
| 16 | `phase-16-console-crypto` | console + crypto | 25 | 4 |
| 17 | `phase-17-closures` | Closures & Scope | 35 | 4 |
| 18 | `phase-18-prototypes` | Prototype & Class | 35 | 4 |
| 19 | `phase-19-async` | Async Patterns | 30 | 4 |
| 20 | `phase-20-functional` | Functional Programming | 35 | 5 |
| 21 | `phase-21-design-patterns` | Design Patterns | 35 | 5 |
| 22 | `phase-22-algorithms` | Algorithms | 35 | 5 |
| **Total** | | | **~430** | **61** |
