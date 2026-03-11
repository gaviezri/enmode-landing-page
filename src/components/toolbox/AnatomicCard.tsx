import { SNOW, reveal } from './constants'

const brands = [
  { brand: 'Zara',   yours: 'M',  actual: 'S' },
  { brand: 'H&M',    yours: 'M',  actual: 'M' },
  { brand: 'Nike',   yours: 'M',  actual: 'L' },
  { brand: 'Uniqlo', yours: 'M',  actual: 'S' },
]

export default function AnatomicCard({ visible }: { visible: boolean }) {
  return (
    <div
      className="rounded-2xl p-6 lg:p-8"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        ...reveal(visible, 200),
      }}
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold tracking-[0.18em]" style={{ color: '#B85042' }}>01</span>
            <span className="text-[10px] tracking-[0.14em] uppercase font-medium" style={{ color: `${SNOW}0.5)` }}>Anatomic Precision</span>
          </div>
          <h3
            className="font-serif font-light leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#F0EBE5' }}
          >
            Your Actual Size,<br />
            <em className="italic" style={{ color: '#B85042' }}>Every Brand.</em>
          </h3>
          <p className="text-sm font-light leading-[1.8] max-w-md" style={{ color: `${SNOW}0.52)` }}>
            No more "size M here, size L there." Our system learns the conversion between brands and suggests
            your exact size based on items you already own. Take a quick photo with your phone — our platform
            recognises your fit with 95% accuracy. Forget about returns.
          </p>
        </div>

        {/* Visual: brand size table */}
        <div
          className="rounded-xl p-4 min-w-[200px]"
          style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B85042" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M3 3h18v18H3zM3 9h18M9 3v18" />
            </svg>
            <span style={{ fontSize: 9, color: `${SNOW}0.4)`, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Size Intelligence</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 40px', gap: 4, paddingBottom: 4, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: 8, color: `${SNOW}0.3)`, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Brand</span>
              <span style={{ fontSize: 8, color: `${SNOW}0.3)`, textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>You</span>
              <span style={{ fontSize: 8, color: '#B85042', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', fontWeight: 700 }}>Fit</span>
            </div>
            {brands.map((b, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 40px 40px', gap: 4, padding: '3px 0' }}>
                <span style={{ fontSize: 10, color: `${SNOW}0.6)` }}>{b.brand}</span>
                <span style={{ fontSize: 10, color: `${SNOW}0.3)`, textAlign: 'center', textDecoration: 'line-through' }}>{b.yours}</span>
                <span style={{ fontSize: 10, color: '#9AAD7A', textAlign: 'center', fontWeight: 700 }}>{b.actual}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2" style={{ padding: '6px 8px', borderRadius: 8, background: 'rgba(154,173,122,0.1)', border: '1px solid rgba(154,173,122,0.2)' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9AAD7A" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span style={{ fontSize: 9, color: '#9AAD7A', fontWeight: 600 }}>95% fit accuracy</span>
          </div>
        </div>
      </div>
    </div>
  )
}