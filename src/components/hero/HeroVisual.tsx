import { TagDot } from './TagDot'

export function HeroVisual() {
  return (
    <div className="relative w-[300px] mx-auto animate-float" style={{ animationDuration: '5s' }}>
      {/* Soft shadow behind card */}
      <div
        className="absolute -inset-6 rounded-[40px] blur-2xl opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D6CFC6 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Post card */}
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(13,12,16,0.07)',
          boxShadow: '0 24px 64px rgba(13,12,16,0.1), 0 2px 8px rgba(13,12,16,0.06)',
        }}
      >
        {/* Post header */}
        <div
          className="flex items-center gap-3 px-4 py-3.5"
          style={{ borderBottom: '1px solid rgba(13,12,16,0.06)' }}
        >
          <div className="w-8 h-8 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #B85042 0%, #8C3A2E 100%)' }} />
          <div>
            <div className="text-[12px] font-semibold" style={{ color: '#0D0C10' }}>@sofiastyle</div>
            <div className="text-[10px]" style={{ color: 'rgba(13,12,16,0.38)' }}>2 hours ago</div>
          </div>
          <div
            className="ml-auto flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] tracking-[0.15em] uppercase font-medium"
            style={{ background: 'rgba(184,80,66,0.1)', color: '#B85042' }}
          >
            <span className="w-1 h-1 rounded-full bg-terra animate-pulse inline-block" aria-hidden="true" />
            Live
          </div>
        </div>

        {/* Photo area */}
        <div className="relative" style={{ height: '240px' }}>
          {/* Fashion editorial gradient bg */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, #C8B8A8 0%, #A09080 40%, #8C7060 100%)' }}
          />

          {/* Warm overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(13,12,16,0.25) 100%)' }}
          />

          {/* Stylized silhouette */}
          <div className="absolute inset-0 flex items-end justify-center">
            <svg viewBox="0 0 120 230" width="110" height="230" aria-hidden="true">
              {/* Head */}
              <ellipse cx="60" cy="28" rx="15" ry="17" fill="rgba(215,185,155,0.95)" />
              {/* Neck */}
              <rect x="55" y="43" width="10" height="9" rx="3" fill="rgba(215,185,155,0.95)" />
              {/* Body / coat */}
              <path d="M28 52 Q60 46 92 52 L97 145 Q60 150 23 145 Z" fill="rgba(30,25,20,0.9)" />
              {/* Inner top */}
              <path d="M46 52 L40 80 L60 68 L80 80 L74 52" fill="rgba(50,40,35,0.9)" />
              {/* Left arm */}
              <path d="M28 54 L14 108 Q12 114 18 115 L30 114 L40 72 Z" fill="rgba(30,25,20,0.9)" />
              {/* Right arm */}
              <path d="M92 54 L106 108 Q108 114 102 115 L90 114 L80 72 Z" fill="rgba(30,25,20,0.9)" />
              {/* Left leg */}
              <rect x="32" y="143" width="22" height="78" rx="5" fill="rgba(20,16,22,0.92)" />
              {/* Right leg */}
              <rect x="58" y="143" width="22" height="78" rx="5" fill="rgba(20,16,22,0.92)" />
              {/* Shoes */}
              <ellipse cx="43" cy="224" rx="15" ry="5.5" fill="rgba(10,8,12,0.97)" />
              <ellipse cx="69" cy="224" rx="15" ry="5.5" fill="rgba(10,8,12,0.97)" />
            </svg>
          </div>

          {/* Tag dots */}
          <TagDot x={63} y={58}  label="Coat"     brand="Acne Studios"    price="$895" active />
          <TagDot x={48} y={155} label="Trousers"  brand="COS"             price="$145" />
          <TagDot x={70} y={210} label="Boots"     brand="& Other Stories" price="$195" />
        </div>

        {/* Caption */}
        <div className="px-4 py-3.5">
          <p className="text-[12px] leading-relaxed" style={{ color: 'rgba(13,12,16,0.6)' }}>
            Autumn uniform.{' '}
            <span style={{ color: '#B85042' }}>#OOTD</span>{' '}
            <span style={{ color: '#B85042' }}>#minimalist</span>
          </p>
        </div>
      </div>

      {/* Earnings badge */}
      <div
        className="absolute -bottom-4 -right-6 rounded-2xl px-4 py-3 opacity-0 animate-badge-pop"
        style={{
          animationDelay: '1100ms',
          animationFillMode: 'forwards',
          background: '#B85042',
          boxShadow: '0 8px 28px rgba(184,80,66,0.35)',
        }}
      >
        <div className="text-[10px] tracking-widest uppercase mb-0.5" style={{ color: 'rgba(249,246,242,0.65)' }}>
          Commission
        </div>
        <div className="text-sm font-semibold" style={{ color: '#F9F6F2' }}>+$42 earned</div>
        <div className="text-[10px] mt-0.5" style={{ color: 'rgba(249,246,242,0.55)' }}>
          3 links auto-generated
        </div>
      </div>

      {/* AI scanning badge */}
      <div
        className="absolute -top-3 -left-6 rounded-xl px-3.5 py-2.5 opacity-0 animate-badge-pop"
        style={{
          animationDelay: '900ms',
          animationFillMode: 'forwards',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(13,12,16,0.08)',
          boxShadow: '0 4px 16px rgba(13,12,16,0.08)',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#778C58' }} aria-hidden="true" />
          <span className="text-[10px] font-medium tracking-wide" style={{ color: 'rgba(13,12,16,0.7)' }}>
            AI scanning…
          </span>
        </div>
        <div className="text-[11px] font-semibold mt-0.5" style={{ color: '#0D0C10' }}>
          3 items recognized
        </div>
      </div>
    </div>
  )
}
