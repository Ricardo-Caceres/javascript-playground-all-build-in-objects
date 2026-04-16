interface TimedModeToggleProps {
  enabled: boolean
  onToggle: () => void
  disabled?: boolean
}

export function TimedModeToggle({ enabled, onToggle, disabled }: TimedModeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      title={enabled ? 'Disable timed mode' : 'Enable timed mode (bonus XP)'}
      className={
        'flex items-center gap-1.5 rounded-lg border px-3 py-1 text-xs font-medium transition-colors ' +
        (enabled
          ? 'border-yellow-400/60 bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400/20'
          : 'border-white/20 bg-transparent text-white/40 hover:text-white/70') +
        (disabled ? ' cursor-not-allowed opacity-50' : '')
      }
    >
      ⏱️ {enabled ? 'Timed ON' : 'Timed OFF'}
    </button>
  )
}
