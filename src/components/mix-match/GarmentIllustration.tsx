import type { GarmentCategory } from '../../types'

interface Props {
  category: GarmentCategory
  colorA: string
  colorB: string
}

/** SVG illustration of a garment. Each category has a unique silhouette. */
export function GarmentIllustration({ category, colorA, colorB }: Props) {
  // Unique gradient ID per color combo to avoid SVG defs collisions
  const gradId = `grad-${colorA.replace('#', '')}-${colorB.replace('#', '')}`

  return (
    <svg viewBox="0 0 80 80" width="64" height="64" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colorA} />
          <stop offset="100%" stopColor={colorB} />
        </linearGradient>
      </defs>

      {category === 'top' && (
        <path d="M16 20 L10 35 L22 33 L22 62 L58 62 L58 33 L70 35 L64 20 Q55 14 40 16 Q25 14 16 20 Z" fill={`url(#${gradId})`} />
      )}
      {category === 'bottom' && (
        <>
          <path d="M18 18 L14 70 L35 70 L40 42 L45 70 L66 70 L62 18 Z" fill={`url(#${gradId})`} />
          <line x1="40" y1="18" x2="40" y2="42" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
        </>
      )}
      {category === 'outerwear' && (
        <>
          <path d="M12 18 L6 36 L18 34 L18 68 L62 68 L62 34 L74 36 L68 18 Q58 10 40 12 Q22 10 12 18 Z" fill={`url(#${gradId})`} />
          <path d="M34 18 L30 36 L40 30 L50 36 L46 18" fill={colorB} />
        </>
      )}
      {category === 'shoes' && (
        <>
          <ellipse cx="40" cy="54" rx="28" ry="10" fill={`url(#${gradId})`} />
          <path d="M20 54 L18 40 Q20 28 36 26 L44 26 Q52 28 54 38 L56 54 Z" fill={`url(#${gradId})`} />
          <rect x="36" y="22" width="8" height="8" rx="2" fill={colorB} />
        </>
      )}
      {category === 'accessory' && (
        <>
          <rect x="16" y="26" width="48" height="34" rx="8" fill={`url(#${gradId})`} />
          <path d="M28 26 Q30 16 40 14 Q50 16 52 26" fill="none" stroke={colorB} strokeWidth="3" strokeLinecap="round" />
          <line x1="16" y1="43" x2="64" y2="43" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        </>
      )}
    </svg>
  )
}
