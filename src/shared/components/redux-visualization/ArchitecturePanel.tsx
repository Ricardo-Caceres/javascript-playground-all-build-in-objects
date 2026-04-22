'use client'

interface ArchitecturePanelProps {
  storeName: 'legacy' | 'toolkit'
}

export function ArchitecturePanel({ storeName }: ArchitecturePanelProps) {
  const isLegacy = storeName === 'legacy'

  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 space-y-4">
      <h3 className="text-sm font-semibold text-zinc-300">
        {isLegacy ? '🏛️ Redux Legacy Architecture' : '⚡ Redux Toolkit Architecture'}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Store Configuration */}
        <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
          <h4 className="text-xs font-semibold text-zinc-400 mb-2">📦 Store Creation</h4>
          <p className="text-xs text-zinc-500 font-mono">
            {isLegacy ? 'legacy_createStore(\n  reducer,\n  applyMiddleware(...)\n)' : 'configureStore({\n  reducer: {...},\n  middleware: [...]\n})'}
          </p>
        </div>

        {/* Action Creators */}
        <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
          <h4 className="text-xs font-semibold text-zinc-400 mb-2">📤 Action Creators</h4>
          <p className="text-xs text-zinc-500 font-mono">
            {isLegacy ? 'export function\nincrement() {\n  return { type: ... }\n}' : 'export const slice =\ncreateSlice({\n  name: ...,\n  reducers: {...}\n})'}
          </p>
        </div>

        {/* Reducer Pattern */}
        <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
          <h4 className="text-xs font-semibold text-zinc-400 mb-2">⚙️ Reducer Pattern</h4>
          <p className="text-xs text-zinc-500 font-mono">
            {isLegacy ? 'switch (action.type)\n  case A:\n    return {\n      ...state,\n      value: ...\n    }' : 'builder.addCase(\n  action,\n  (state) => {\n    state.value = ...\n  }\n)'}
          </p>
        </div>

        {/* State Updates */}
        <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
          <h4 className="text-xs font-semibold text-zinc-400 mb-2">📝 State Updates</h4>
          <p className="text-xs text-zinc-500">
            {isLegacy ? (
              <span>
                <span className="text-yellow-400">Manual Immutability</span>
                <br/>
                {'{ ...state, field: value }'}
              </span>
            ) : (
              <span>
                <span className="text-green-400">Immer Drafts</span>
                <br/>
                {'state.field = value // Mutative syntax'}
              </span>
            )}
          </p>
        </div>

        {/* Middleware Chain */}
        <div className="bg-zinc-950 p-3 rounded border border-zinc-800 md:col-span-2">
          <h4 className="text-xs font-semibold text-zinc-400 mb-2">🔗 Middleware Chain</h4>
          <div className="space-y-1">
            {isLegacy ? (
              <>
                <p className="text-xs text-zinc-500">1️⃣ redux-thunk (default)</p>
                <p className="text-xs text-zinc-500 pl-3">→ Passes normal actions through</p>
                <p className="text-xs text-zinc-500">2️⃣ timelineMiddleware (custom)</p>
                <p className="text-xs text-zinc-500 pl-3">→ Records all actions to timeline</p>
              </>
            ) : (
              <>
                <p className="text-xs text-zinc-500">1️⃣ redux-thunk (auto-included)</p>
                <p className="text-xs text-zinc-500 pl-3">→ Handles async thunks</p>
                <p className="text-xs text-zinc-500">2️⃣ Immer middleware</p>
                <p className="text-xs text-zinc-500 pl-3">→ Enables frozen state in dev mode</p>
                <p className="text-xs text-zinc-500">3️⃣ Redux DevTools middleware</p>
                <p className="text-xs text-zinc-500 pl-3">→ Time-travel debugging</p>
                <p className="text-xs text-zinc-500">4️⃣ timelineMiddleware (custom)</p>
                <p className="text-xs text-zinc-500 pl-3">→ Records all actions to timeline</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Key Characteristics */}
      <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
        <h4 className="text-xs font-semibold text-zinc-400 mb-2">✅ Key Characteristics</h4>
        <ul className="space-y-1 text-xs text-zinc-500">
          {isLegacy ? (
            <>
              <li>• Manual reducer combination with combineReducers</li>
              <li>• Explicit action type constants</li>
              <li>• Manual type safety (no auto-generation)</li>
              <li>• Only configured middleware runs</li>
              <li>• More boilerplate, explicit control</li>
            </>
          ) : (
            <>
              <li>• Automatic reducer combination</li>
              <li>• Auto-generated action types (namespaced)</li>
              <li>• Built-in type safety and inference</li>
              <li>• Batteries-included middleware</li>
              <li>• Less boilerplate, more conventions</li>
              <li>• Immer integration for immutable updates</li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}
