/** SVG body silhouette with dashed measurement lines and marker dots. */
export function BodySilhouette() {
  const measurementLines = [
    // [x1, y1, x2, y2, opacity]
    [60, 84, 140, 84, 0.5],
    [64, 104, 136, 104, 0.4],
    [66, 148, 134, 148, 0.5],
    [62, 178, 138, 178, 0.4],
  ] as const

  const markerDots = [
    { x: 54, y: 84 }, { x: 146, y: 84 },
    { x: 66, y: 148 }, { x: 134, y: 148 },
    { x: 78, y: 295 },
  ]

  return (
    <svg viewBox="0 0 200 420" width="200" height="420" className="mx-auto" aria-hidden="true">
      <defs>
        <radialGradient id="bodyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B85042" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#B85042" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bodyFill" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2B2F36" />
          <stop offset="100%" stopColor="#1A1B1E" />
        </radialGradient>
      </defs>

      <ellipse cx="100" cy="210" rx="90" ry="200" fill="url(#bodyGlow)" />

      {/* Head */}
      <ellipse cx="100" cy="38" rx="24" ry="28" fill="url(#bodyFill)" stroke="rgba(247,243,238,0.08)" strokeWidth="1" />
      {/* Neck */}
      <rect x="91" y="63" width="18" height="16" rx="5" fill="url(#bodyFill)" />
      {/* Torso */}
      <path d="M54 79 Q100 72 146 79 L154 220 Q100 230 46 220 Z" fill="url(#bodyFill)" stroke="rgba(247,243,238,0.06)" strokeWidth="1" />
      {/* Left arm */}
      <path d="M54 82 L30 180 Q27 188 34 190 L46 188 L60 96 Z" fill="url(#bodyFill)" stroke="rgba(247,243,238,0.06)" strokeWidth="1" />
      <ellipse cx="37" cy="196" rx="9" ry="12" fill="url(#bodyFill)" />
      {/* Right arm */}
      <path d="M146 82 L170 180 Q173 188 166 190 L154 188 L140 96 Z" fill="url(#bodyFill)" stroke="rgba(247,243,238,0.06)" strokeWidth="1" />
      <ellipse cx="163" cy="196" rx="9" ry="12" fill="url(#bodyFill)" />
      {/* Left leg */}
      <path d="M68 218 L62 370 Q60 382 70 384 L86 384 L92 222 Z" fill="url(#bodyFill)" stroke="rgba(247,243,238,0.06)" strokeWidth="1" />
      <ellipse cx="76" cy="390" rx="18" ry="8" fill="url(#bodyFill)" />
      {/* Right leg */}
      <path d="M132 218 L138 370 Q140 382 130 384 L114 384 L108 222 Z" fill="url(#bodyFill)" stroke="rgba(247,243,238,0.06)" strokeWidth="1" />
      <ellipse cx="124" cy="390" rx="18" ry="8" fill="url(#bodyFill)" />

      {/* Measurement lines */}
      {measurementLines.map(([x1, y1, x2, y2, opacity], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`rgba(184,80,66,${opacity})`} strokeWidth="0.8" strokeDasharray="3,3" />
      ))}
      {/* Inseam vertical */}
      <line x1="78" y1="222" x2="78" y2="370" stroke="rgba(184,80,66,0.4)" strokeWidth="0.8" strokeDasharray="3,3" />

      {/* Marker dots */}
      {markerDots.map((dot, i) => (
        <g key={i}>
          <circle cx={dot.x} cy={dot.y} r="4" fill="#B85042" opacity="0.9" />
          <circle cx={dot.x} cy={dot.y} r="7" fill="#B85042" opacity="0.2" />
        </g>
      ))}
    </svg>
  )
}
