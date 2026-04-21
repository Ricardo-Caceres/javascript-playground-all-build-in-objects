'use client'

import { useState } from 'react'

interface StatePanelProps {
  state: any
  title?: string
}

export function StatePanel({ state, title = 'State' }: StatePanelProps) {
  const [expanded, setExpanded] = useState(false)
  const jsonString = JSON.stringify(state, null, 2)

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString)
  }

  const handleToggle = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-zinc-300">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="px-2 py-1 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded transition-colors"
            type="button"
          >
            Copy
          </button>
          <button
            onClick={handleToggle}
            className="px-2 py-1 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded transition-colors"
            type="button"
          >
            {expanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
      </div>

      {expanded ? (
        <pre className="text-xs text-zinc-400 overflow-x-auto max-h-96 overflow-y-auto bg-zinc-950 p-3 rounded font-mono whitespace-pre-wrap">
          {jsonString}
        </pre>
      ) : (
        <pre className="text-xs text-zinc-400 overflow-x-auto max-h-20 overflow-y-hidden bg-zinc-950 p-3 rounded font-mono line-clamp-3">
          {jsonString}
        </pre>
      )}
    </div>
  )
}
