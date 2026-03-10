export function CoatIcon({ color }: { color: string }) {
  return (
    <svg width="64" height="72" viewBox="0 0 64 72" fill="none" aria-hidden="true">
      <path
        d="M20 18 L8 28 L8 66 L28 66 L28 38 L32 42 L36 38 L36 66 L56 66 L56 28 L44 18"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M20 18 L24 10 L32 20 L28 38"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M44 18 L40 10 L32 20 L36 38"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M24 10 C26 6 38 6 40 10"
        stroke={color} strokeWidth="1.5" strokeLinecap="round"
      />
      <path
        d="M8 28 L2 44 L10 46 L14 32"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M56 28 L62 44 L54 46 L50 32"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="32" cy="46" r="1.2" fill={color} />
      <circle cx="32" cy="54" r="1.2" fill={color} />
      <circle cx="32" cy="62" r="1.2" fill={color} />
    </svg>
  )
}

export function ShirtIcon({ color }: { color: string }) {
  return (
    <svg width="64" height="72" viewBox="0 0 64 72" fill="none" aria-hidden="true">
      <path
        d="M20 14 L8 24 L14 32 L18 28 L18 66 L46 66 L46 28 L50 32 L56 24 L44 14"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M20 14 L28 24 L32 16"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M44 14 L36 24 L32 16"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M20 14 C24 10 28 10 32 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M44 14 C40 10 36 10 32 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="20" y="34" width="9" height="8" rx="1" stroke={color} strokeWidth="1.2" />
      <circle cx="32" cy="36" r="1.2" fill={color} />
      <circle cx="32" cy="44" r="1.2" fill={color} />
      <circle cx="32" cy="52" r="1.2" fill={color} />
      <circle cx="32" cy="60" r="1.2" fill={color} />
    </svg>
  )
}

export function PantsIcon({ color }: { color: string }) {
  return (
    <svg width="64" height="72" viewBox="0 0 64 72" fill="none" aria-hidden="true">
      <rect x="10" y="8" width="44" height="7" rx="1.5" stroke={color} strokeWidth="1.5" />
      <rect x="29" y="6" width="6" height="4" rx="1" stroke={color} strokeWidth="1.2" />
      <path
        d="M10 15 L10 52 Q10 66 20 68 L32 68 L36 36"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M54 15 L54 52 Q54 66 44 68 L32 68 L28 36"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M28 36 Q32 42 36 36"
        stroke={color} strokeWidth="1.5" strokeLinecap="round"
      />
      <path d="M30 15 L30 30" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" />
      <path d="M13 44 L22 46" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M51 44 L42 46" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}
