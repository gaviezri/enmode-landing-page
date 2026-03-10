/** Screen 02 — Smart Dupe Finder: original vs. visual match comparison */
export function DupeFinderScreen() {
  return (
    <div className="h-full flex flex-col" style={{ background: '#F9F6F2' }}>
      {/* Status bar */}
      <div className="flex justify-between px-5 pt-12 pb-2 text-[10px] font-semibold" style={{ color: 'rgba(13,12,16,0.5)' }}>
        <span>9:41</span>
        <span style={{ letterSpacing: '0.05em' }}>●●●</span>
      </div>

      {/* Header */}
      <div className="px-5 pb-3" style={{ borderBottom: '1px solid rgba(13,12,16,0.06)' }}>
        <p className="text-[9px] tracking-[0.2em] uppercase mb-0.5" style={{ color: 'rgba(13,12,16,0.32)' }}>Smart Dupe Finder</p>
        <p className="text-[14px] font-semibold" style={{ color: '#0D0C10', fontFamily: 'var(--font-serif)' }}>AI Visual DNA</p>
      </div>

      {/* Match banner */}
      <div className="mx-4 mt-3 rounded-xl px-3 py-2.5 flex items-center gap-2.5" style={{ background: '#0D0C10' }}>
        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.12)' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F9F6F2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <span className="text-[11px] font-semibold" style={{ color: '#F9F6F2' }}>95% Visual Match Found</span>
      </div>

      {/* Side-by-side */}
      <div className="flex gap-2.5 px-4 mt-3">
        {/* Original */}
        <div className="flex-1 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(13,12,16,0.08)' }}>
          <div className="h-24 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #D4C4B0, #9E8070)' }}>
            <svg viewBox="0 0 60 80" width="42" height="56" aria-hidden="true">
              <ellipse cx="30" cy="12" rx="8" ry="9" fill="rgba(200,165,130,0.9)" />
              <path d="M14 22 Q30 18 46 22 L48 72 Q30 76 12 72 Z" fill="rgba(28,24,22,0.88)" />
            </svg>
          </div>
          <div className="p-2.5" style={{ background: 'white' }}>
            <div className="text-[9px] tracking-widest uppercase mb-0.5" style={{ color: 'rgba(13,12,16,0.35)' }}>Original</div>
            <div className="text-[11px] font-semibold" style={{ color: '#0D0C10' }}>Saint Laurent</div>
            <div className="text-[12px] font-bold" style={{ color: '#B85042' }}>$1,290</div>
          </div>
        </div>

        {/* Dupe */}
        <div className="flex-1 rounded-2xl overflow-hidden" style={{ border: '2px solid #778C58' }}>
          <div className="relative h-24 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C8D4B8, #8EA070)' }}>
            <svg viewBox="0 0 60 80" width="42" height="56" aria-hidden="true">
              <ellipse cx="30" cy="12" rx="8" ry="9" fill="rgba(200,165,130,0.9)" />
              <path d="M14 22 Q30 18 46 22 L48 72 Q30 76 12 72 Z" fill="rgba(28,24,22,0.88)" />
            </svg>
            <div className="absolute top-2 right-2 rounded-lg px-1.5 py-0.5 text-[8px] font-bold" style={{ background: '#778C58', color: 'white' }}>
              DUPE
            </div>
          </div>
          <div className="p-2.5" style={{ background: 'white' }}>
            <div className="text-[9px] tracking-widest uppercase mb-0.5" style={{ color: '#778C58' }}>Smart Match</div>
            <div className="text-[11px] font-semibold" style={{ color: '#0D0C10' }}>Massimo Dutti</div>
            <div className="text-[12px] font-bold" style={{ color: '#778C58' }}>$89</div>
          </div>
        </div>
      </div>

      {/* Savings badge */}
      <div className="mx-4 mt-2.5 rounded-xl px-3 py-2.5 text-center" style={{ background: 'rgba(119,140,88,0.1)', border: '1px solid rgba(119,140,88,0.2)' }}>
        <span className="text-[11px] font-medium" style={{ color: 'rgba(13,12,16,0.65)' }}>Save </span>
        <span className="text-[12px] font-bold" style={{ color: '#778C58' }}>$1,201</span>
        <span className="text-[11px]" style={{ color: 'rgba(13,12,16,0.5)' }}> with the smart alternative</span>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 px-4 mt-3 mb-4">
        <button
          className="flex-1 py-3 rounded-xl text-[10px] font-semibold cursor-pointer"
          style={{ border: '1px solid rgba(13,12,16,0.12)', color: 'rgba(13,12,16,0.6)', background: 'transparent' }}
        >
          Shop Original
        </button>
        <button
          className="flex-1 py-3 rounded-xl text-[10px] font-semibold cursor-pointer"
          style={{ background: '#778C58', color: 'white' }}
        >
          Shop Dupe
        </button>
      </div>
    </div>
  )
}
