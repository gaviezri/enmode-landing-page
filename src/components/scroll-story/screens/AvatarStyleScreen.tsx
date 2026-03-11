/** Screen 02 — AI stylist generates looks, rendered on your avatar */
export function AvatarStyleScreen() {
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
          <p className="text-[9px] tracking-[0.2em] uppercase mb-0.5" style={{ color: 'rgba(240,235,229,0.28)' }}>AI Stylist</p>
          <p className="text-[14px] font-semibold" style={{ color: '#F0EBE5', fontFamily: 'var(--font-serif)' }}>Suggested Look</p>
        </div>
        <div className="flex gap-1">
          {['Trending', 'Your Taste'].map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-full text-[8px] font-semibold"
              style={{
                background: i === 0 ? 'rgba(196,160,84,0.18)' : 'rgba(184,80,66,0.18)',
                color: i === 0 ? '#C4A054' : '#CD6655',
                border: `1px solid ${i === 0 ? 'rgba(196,160,84,0.3)' : 'rgba(184,80,66,0.3)'}`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Avatar canvas */}
      <div className="relative flex-1 mx-4 mt-3 rounded-2xl overflow-hidden" style={{ minHeight: 0, background: 'linear-gradient(160deg, #242028 0%, #1A181E 100%)' }}>
        {/* Avatar */}
        <div className="absolute inset-0 flex items-end justify-center pb-2">
          <svg viewBox="0 0 100 200" width="90" height="178" aria-hidden="true">
            {/* Head with face suggestion */}
            <ellipse cx="50" cy="22" rx="13" ry="15" fill="rgba(210,175,145,0.92)" />
            <ellipse cx="45" cy="20" rx="2" ry="2.5" fill="rgba(100,70,50,0.7)" />
            <ellipse cx="55" cy="20" rx="2" ry="2.5" fill="rgba(100,70,50,0.7)" />
            <path d="M45 27 Q50 30 55 27" stroke="rgba(100,70,50,0.6)" strokeWidth="1" fill="none" strokeLinecap="round" />
            <rect x="44" y="35" width="12" height="10" rx="3" fill="rgba(210,175,145,0.92)" />
            {/* AI-suggested outfit: structured blazer in gold */}
            <path d="M22 46 Q50 40 78 46 L82 130 Q50 137 18 130 Z" fill="rgba(196,160,84,0.88)" />
            <path d="M38 46 L34 68 L50 58 L66 68 L62 46" fill="rgba(150,118,52,0.95)" />
            <path d="M22 48 L10 98 Q8 103 14 104 L26 103 L34 60 Z" fill="rgba(196,160,84,0.88)" />
            <path d="M78 48 L90 98 Q92 103 86 104 L74 103 L66 60 Z" fill="rgba(196,160,84,0.88)" />
            {/* Trousers - dark */}
            <rect x="26" y="128" width="20" height="64" rx="4" fill="rgba(28,24,32,0.98)" />
            <rect x="54" y="128" width="20" height="64" rx="4" fill="rgba(28,24,32,0.98)" />
          </svg>
        </div>

        {/* AI badge */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)' }}
        >
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#C4A054" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <span className="text-[9px] font-semibold" style={{ color: '#C4A054' }}>Designer Pick</span>
        </div>

        {/* Avatar label */}
        <div
          className="absolute bottom-3 left-3 right-3 rounded-xl px-3 py-2"
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
        >
          <p className="text-[9px] mb-0.5" style={{ color: 'rgba(240,235,229,0.45)' }}>Your AI Avatar · your face · your measurements</p>
          <p className="text-[10px] font-medium" style={{ color: '#F0EBE5' }}>Gold Blazer + Tailored Trousers · From your wardrobe</p>
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
          Save Look
        </button>
        <button
          className="flex-1 py-3 rounded-xl text-[10px] font-semibold cursor-pointer"
          style={{ background: 'rgba(240,235,229,0.08)', border: '1px solid rgba(240,235,229,0.12)', color: '#F0EBE5' }}
        >
          Next Suggestion
        </button>
      </div>
    </div>
  )
}
