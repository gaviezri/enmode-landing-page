interface Props {
  children: React.ReactNode
  /** When provided, fades in once true. Omit to always show. */
  visible?: boolean
  className?: string
}

/**
 * Eyebrow label used above section headings.
 * e.g. "AI Mix & Match Stylist"
 */
export function SectionLabel({ children, visible, className = '' }: Props) {
  const isHidden = visible === false

  return (
    <p
      className={`text-[10px] tracking-[0.25em] uppercase text-charcoal/35 mb-4 transition-all duration-700 ${className}`}
      style={{
        opacity: isHidden ? 0 : 1,
        transform: isHidden ? 'translateY(16px)' : 'none',
      }}
    >
      {children}
    </p>
  )
}
