interface Props {
  step: string
  label: string
  sublabel: string
  delay: number
  accent?: boolean   // subtle terra tint
  highlight?: boolean // terra filled
}

export function FlowCard({ step, label, sublabel, delay, accent, highlight }: Props) {
  const bg = highlight
    ? 'rgba(184,80,66,0.18)'
    : accent
      ? 'rgba(255,255,255,0.07)'
      : 'rgba(255,255,255,0.04)'

  const borderColor = highlight
    ? 'rgba(184,80,66,0.3)'
    : 'rgba(255,255,255,0.08)'

  const labelColor = highlight
    ? '#B85042'
    : 'rgba(237,232,226,0.9)'

  const stepColor = highlight
    ? 'rgba(184,80,66,0.55)'
    : 'rgba(237,232,226,0.22)'

  const subColor = highlight
    ? 'rgba(184,80,66,0.6)'
    : 'rgba(237,232,226,0.38)'

  return (
    <div
      className="flex-1 rounded-2xl p-4 opacity-0 animate-fade-in-up"
      style={{
        background: bg,
        border: `1px solid ${borderColor}`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      <div
        className="text-[9px] tracking-[0.28em] uppercase mb-3"
        style={{ color: stepColor }}
      >
        {step}
      </div>
      <div
        className="font-serif text-xl font-medium leading-tight mb-1"
        style={{ color: labelColor }}
      >
        {label}
      </div>
      <div
        className="text-[11px] leading-relaxed"
        style={{ color: subColor }}
      >
        {sublabel}
      </div>
    </div>
  )
}

export function FlowArrow() {
  return (
    <div className="flex-shrink-0 self-center" style={{ color: 'rgba(237,232,226,0.15)' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  )
}
