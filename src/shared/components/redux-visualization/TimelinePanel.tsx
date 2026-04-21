'use client'

import { useState } from 'react'

interface ActionEntry {
  id: string
  type: string
  payload?: any
  timestamp: number
  duration?: number
  status?: 'pending' | 'fulfilled' | 'rejected'
  synced?: boolean
}

interface TimelinePanelProps {
  actions: ActionEntry[]
  onClear?: () => void
  title?: string
}

function getStatusBadge(status?: string) {
  switch (status) {
    case 'pending':
      return '🟡'
    case 'fulfilled':
      return '🟢'
    case 'rejected':
      return '🔴'
    default:
      return '⚪'
  }
}

export function TimelinePanel({
  actions,
  onClear,
  title = 'Action Timeline',
}: TimelinePanelProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedAction = actions.find((a) => a.id === selectedId)

  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-zinc-300">{title}</h3>
        {onClear && (
          <button
            onClick={onClear}
            className="px-2 py-1 text-xs bg-zinc-800 hover:bg-red-900 text-zinc-300 rounded transition-colors"
            type="button"
          >
            Clear
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 h-80">
        {/* Actions list */}
        <div className="border border-zinc-700 rounded bg-zinc-950 overflow-y-auto">
          {actions.length === 0 ? (
            <div className="p-3 text-xs text-zinc-500 italic">No actions yet</div>
          ) : (
            <div className="divide-y divide-zinc-800">
              {[...actions].reverse().map((action) => (
                <button
                  key={action.id}
                  onClick={() => setSelectedId(action.id)}
                  className={`w-full px-3 py-2 text-xs text-left transition-colors ${
                    selectedId === action.id
                      ? 'bg-zinc-700 text-zinc-100'
                      : 'hover:bg-zinc-800 text-zinc-400'
                  }`}
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <span>{getStatusBadge(action.status)}</span>
                    {action.synced && <span className="text-blue-400">🔗</span>}
                    <span className="font-mono text-xs truncate">
                      {action.type}
                    </span>
                    {action.duration && (
                      <span className="ml-auto text-zinc-500 text-xs">
                        {action.duration}ms
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Detail view */}
        <div className="border border-zinc-700 rounded bg-zinc-950 overflow-y-auto p-3">
          {selectedAction ? (
            <div className="text-xs">
              <div className="mb-2">
                <span className="text-zinc-500">Type:</span>
                <div className="font-mono text-yellow-400 break-all">
                  {selectedAction.type}
                </div>
              </div>
              {selectedAction.payload !== undefined && (
                <div className="mb-2">
                  <span className="text-zinc-500">Payload:</span>
                  <pre className="text-zinc-400 font-mono text-xs overflow-auto max-h-40 mt-1 whitespace-pre-wrap">
                    {JSON.stringify(selectedAction.payload, null, 2)}
                  </pre>
                </div>
              )}
              <div className="flex gap-4 text-zinc-500 text-xs">
                <div>
                  <span className="text-zinc-600">Time:</span>
                  <div>{new Date(selectedAction.timestamp).toLocaleTimeString()}</div>
                </div>
                {selectedAction.duration && (
                  <div>
                    <span className="text-zinc-600">Duration:</span>
                    <div>{selectedAction.duration}ms</div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-xs text-zinc-500 italic">
              Select an action to view details
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
