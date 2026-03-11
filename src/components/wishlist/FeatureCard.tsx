interface Props {
  icon: React.ReactNode
  title: string
  description: string
  accent: string
  visible: boolean
  delay: number
}

export function FeatureCard({ icon, title, description, accent, visible, delay }: Props) {
  return (
    <div
      className="rounded-2xl p-5 border border-cream-dark bg-white transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(16px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${accent}14` }}
      >
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-charcoal mb-2">{title}</h3>
      <p className="text-xs font-light text-charcoal/55 leading-relaxed">{description}</p>
    </div>
  )
}