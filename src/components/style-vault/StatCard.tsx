interface Props {
  label: string
  value: string
  sub: string
  accent: string
  visible: boolean
  delay: number
}

export function StatCard({ label, value, sub, accent, visible, delay }: Props) {
  return (
    <div
      className="rounded-2xl p-5 border border-cream-dark bg-white transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(16px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="text-[10px] tracking-[0.18em] uppercase text-charcoal/40 mb-3">{label}</div>
      <div className="font-serif font-light mb-1" style={{ fontSize: '2.2rem', color: accent }}>{value}</div>
      <div className="text-[11px] text-charcoal/50">{sub}</div>
    </div>
  )
}
