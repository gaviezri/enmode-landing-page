/** Screen 03 — Virtual Try-On with fit score overlay */
export function TryOnScreen() {
  return (
    <div className="h-full flex flex-col" style={{ background: '#16141A' }}>
      {/* Status bar */}
      <div className="flex justify-between px-5 pt-12 pb-2 text-[10px] font-semibold" style={{ color: 'rgba(240,235,229,0.4)' }}>
        <span>9:41</span>
        <span>●●●</span>
      </div>

      {/* Header */}
      <div className="px-5 pb-3 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div>
          <p className="text-[9px] tracking-[0.2em] uppercase mb-0.5" style={{ color: 'rgba(240,235,229,0.28)' }}>Virtual Fitting Room</p>
          <p className="text-[14px] font-semibold" style={{ color: '#F0EBE5', fontFamily: 'var(--font-serif)' }}>Try It On</p>
        </div>
        <div
          className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-semibold tracking-wide"
          style={{ background: 'rgba(184,80,66,0.2)', border: '1px solid rgba(184,80,66,0.35)', color: '#CD6655' }}
        >
          <span className="w-1 h-1 rounded-full bg-terra animate-pulse" />
          LIVE
        </div>
      </div>

      {/* Try-on canvas */}
      <div className="relative flex-1 mx-4 mt-3 rounded-2xl overflow-hidden" style={{ minHeight: 0, background: 'linear-gradient(160deg, #242028 0%, #1A181E 100%)' }}>
        {/* Avatar with outfit */}
        <div className="absolute inset-0 flex items-end justify-center pb-3">
          <svg viewBox="0 0 100 200" width="88" height="175" aria-hidden="true">
            {/* Head */}
            <ellipse cx="50" cy="22" rx="13" ry="15" fill="rgba(210,175,145,0.92)" />
            <rect x="44" y="35" width="12" height="10" rx="3" fill="rgba(210,175,145,0.92)" />
            {/* Coat in terra */}
            <path d="M22 46 Q50 40 78 46 L82 130 Q50 137 18 130 Z" fill="rgba(184,80,66,0.9)" />
            <path d="M38 46 L34 70 L50 60 L66 70 L62 46" fill="rgba(143,52,40,0.95)" />
            <path d="M22 48 L10 100 Q8 105 14 106 L26 105 L34 60 Z" fill="rgba(184,80,66,0.9)" />
            <path d="M78 48 L90 100 Q92 105 86 106 L74 105 L66 60 Z" fill="rgba(184,80,66,0.9)" />
            {/* Trousers */}
            <rect x="26" y="128" width="20" height="62" rx="4" fill="rgba(20,18,24,0.95)" />
            <rect x="54" y="128" width="20" height="62" rx="4" fill="rgba(20,18,24,0.95)" />
            <ellipse cx="36" cy="192" rx="14" ry="6" fill="rgba(10,8,12,1)" />
            <ellipse cx="64" cy="192" rx="14" ry="6" fill="rgba(10,8,12,1)" />
          </svg>
        </div>

        {/* Fit score overlay — top */}
        <div
          className="absolute top-3 left-3 right-3 rounded-xl px-3 py-2.5 flex items-center justify-between"
          style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(10px)' }}
        >
          <div>
            <div className="text-[9px] tracking-[0.15em] uppercase mb-0.5" style={{ color: 'rgba(240,235,229,0.4)' }}>Fit Score</div>
            <div className="text-[15px] font-bold" style={{ color: '#F0EBE5' }}>95%</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] tracking-[0.15em] uppercase mb-0.5" style={{ color: 'rgba(240,235,229,0.4)' }}>Shape match</div>
            <div className="text-[11px] font-semibold" style={{ color: '#9AAD7A' }}>Excellent</div>
          </div>
        </div>

        {/* Body note — bottom */}
        <div
          className="absolute bottom-3 left-3 right-3 rounded-xl px-3 py-2"
          style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)' }}
        >
          <p className="text-[10px] leading-relaxed" style={{ color: 'rgba(240,235,229,0.65)' }}>
            This cut is a{' '}
            <span style={{ color: '#9AAD7A', fontWeight: 700 }}>95% match</span>{' '}
            for your body shape. Structured shoulders complement your proportions perfectly.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 px-4 mt-3 mb-5">
        <button
          className="flex-1 py-3 rounded-xl text-[10px] font-semibold cursor-pointer flex items-center justify-center gap-1.5"
          style={{ background: '#B85042', color: '#F9F6F2' }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          Save to Vault
        </button>
        <button
          className="flex-1 py-3 rounded-xl text-[10px] font-semibold cursor-pointer"
          style={{ background: 'rgba(240,235,229,0.08)', border: '1px solid rgba(240,235,229,0.12)', color: '#F0EBE5' }}
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}
