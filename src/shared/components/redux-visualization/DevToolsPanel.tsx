'use client'

import { useState } from 'react'

interface ActionEntry {
  id: string
  type: string
  payload?: any
  timestamp: number
  duration?: number
  status?: 'pending' | 'fulfilled' | 'rejected'
}

interface DevToolsPanelProps {
  actions: ActionEntry[]
  state: any
  title?: string
}

type ViewMode = 'actions' | 'tree'

function StateTreeNode({
  value,
  path,
  depth = 0,
}: {
  value: any
  path: string
  depth?: number
}) {
  const [isExpanded, setIsExpanded] = useState(depth < 2)

  if (value === null) {
    return <span className="text-zinc-400">null</span>
  }

  if (typeof value !== 'object') {
    if (typeof value === 'string') {
      return <span className="text-yellow-400">"{value}"</span>
    }
    if (typeof value === 'number') {
      return <span className="text-yellow-400">{value}</span>
    }
    if (typeof value === 'boolean') {
      return <span className="text-yellow-400">{String(value)}</span>
    }
    return <span className="text-zinc-400">{String(value)}</span>
  }

  const isArray = Array.isArray(value)
  const entries = isArray ? value.entries() : Object.entries(value)
  const items = Array.from(entries)

  if (items.length === 0) {
    return (
      <span className="text-cyan-400">
        {isArray ? '[]' : '{}'}
      </span>
    )
  }

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-cyan-400 hover:text-cyan-300 cursor-pointer font-mono text-xs"
        type="button"
      >
        {isExpanded ? '▼' : '▶'} {isArray ? '[' : '{'}
      </button>
      {isExpanded && (
        <div className="ml-4 border-l border-zinc-700">
          {items.map(([key, val]) => (
            <div key={`${path}-${key}`} className="text-xs">
              <span className="text-blue-400">
                {isArray ? `[${key}]` : `${key}:`}
              </span>
              <span className="ml-2">
                <StateTreeNode
                  value={val}
                  path={`${path}.${key}`}
                  depth={depth + 1}
                />
              </span>
            </div>
          ))}
        </div>
      )}
      <span className="text-cyan-400">
        {isArray ? ']' : '}'}
      </span>
    </div>
  )
}

export function DevToolsPanel({
  actions,
  state,
  title = 'DevTools',
}: DevToolsPanelProps) {
  const [view, setView] = useState<ViewMode>('actions')
  const [selectedActionId, setSelectedActionId] = useState<string | null>(
    actions.length > 0 ? actions[actions.length - 1].id : null
  )

  const selectedAction = actions.find((a) => a.id === selectedActionId)

  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-zinc-300">{title}</h3>
        <div className="flex gap-2 bg-zinc-800 rounded p-1">
          <button
            onClick={() => setView('actions')}
            className={`px-3 py-1 text-xs rounded transition-colors ${
              view === 'actions'
                ? 'bg-zinc-700 text-zinc-100'
                : 'text-zinc-400 hover:text-zinc-300'
            }`}
            type="button"
          >
            Actions
          </button>
          <button
            onClick={() => setView('tree')}
            className={`px-3 py-1 text-xs rounded transition-colors ${
              view === 'tree'
                ? 'bg-zinc-700 text-zinc-100'
                : 'text-zinc-400 hover:text-zinc-300'
            }`}
            type="button"
          >
            State Tree
          </button>
        </div>
      </div>

      <div className="border border-zinc-700 rounded bg-zinc-950 p-3 h-96 overflow-y-auto font-mono text-xs">
        {view === 'actions' ? (
          <div>
            {actions.length === 0 ? (
              <div className="text-zinc-500 italic">No actions</div>
            ) : (
              <div className="space-y-2">
                {actions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => setSelectedActionId(action.id)}
                    className={`block w-full text-left p-2 rounded transition-colors ${
                      selectedActionId === action.id
                        ? 'bg-zinc-700 text-zinc-100'
                        : 'hover:bg-zinc-800 text-zinc-400'
                    }`}
                    type="button"
                  >
                    <div className="text-yellow-400">{action.type}</div>
                    {action.duration && (
                      <div className="text-zinc-500 text-xs">
                        {action.duration}ms
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
            {selectedAction && (
              <div className="mt-4 pt-4 border-t border-zinc-700">
                <div className="text-zinc-400 mb-2">Payload:</div>
                <pre className="text-xs text-zinc-300 whitespace-pre-wrap">
                  {JSON.stringify(selectedAction.payload, null, 2)}
                </pre>
              </div>
            )}
          </div>
        ) : (
          <div className="text-zinc-300">
            <StateTreeNode value={state} path="root" />
          </div>
        )}
      </div>
    </div>
  )
}
