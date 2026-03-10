type AlertType = 'suggestion' | 'restock' | 'saving'

interface Props {
  text: string
  type: AlertType
}

const CONFIG: Record<AlertType, { bg: string; border: string; iconColor: string }> = {
  suggestion: { bg: 'rgba(119,140,88,0.1)',  border: '#778C58', iconColor: '#778C58' },
  restock:    { bg: 'rgba(184,80,66,0.08)',   border: '#B85042', iconColor: '#B85042' },
  saving:     { bg: 'rgba(54,69,79,0.06)',    border: '#36454F', iconColor: '#36454F' },
}

const ICONS: Record<AlertType, (color: string) => React.ReactNode> = {
  suggestion: (c) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  restock: (c) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  saving: (c) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
}

export function GapAlert({ text, type }: Props) {
  const { bg, border, iconColor } = CONFIG[type]

  return (
    <div
      className="flex items-start gap-3 rounded-xl p-3.5 border"
      style={{ background: bg, borderColor: border }}
    >
      <div className="flex-shrink-0 mt-0.5">{ICONS[type](iconColor)}</div>
      <p className="text-xs leading-relaxed text-charcoal/75">{text}</p>
    </div>
  )
}
