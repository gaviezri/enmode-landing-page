import { useState } from 'react'
import { RevealWrapper } from '../ui/RevealWrapper'
import { OutfitCard } from './OutfitCard'
import { OUTFIT_ITEMS } from './data'
import type { BudgetTier, OutfitItem } from '../../types'

const TIERS: BudgetTier[] = ['Basic', 'Premium', 'Luxury']

const TIER_ACTIVE: Record<BudgetTier, { background: string; color: string }> = {
  Basic:   { background: '#0D0C10', color: '#F9F6F2' },
  Premium: { background: '#B85042', color: '#F9F6F2' },
  Luxury:  { background: '#C4A054', color: '#F9F6F2' },
}

function reveal(visible: boolean, delay = 0) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(20px)',
    transition: `opacity 700ms ${delay}ms cubic-bezier(0.22,1,0.36,1), transform 700ms ${delay}ms cubic-bezier(0.22,1,0.36,1)`,
  }
}

export default function MixMatchSection() {
  const [activeTier, setActiveTier] = useState<BudgetTier>('Premium')
  const [items, setItems] = useState<OutfitItem[]>(OUTFIT_ITEMS)

  const tierItems = items.filter(item => item.tier === activeTier)
  const likedCount = items.filter(i => i.liked && i.tier === activeTier).length
  const totalPrice = tierItems.reduce((sum, i) => sum + i.price, 0)

  const handleLike = (id: number) =>
    setItems(prev => prev.map(item => item.id === id ? { ...item, liked: !item.liked } : item))

  const handleRemix = (_id: number) => { /* visual affordance only */ }

  return (
    <RevealWrapper threshold={0.08}>
      {(visible) => (
        <section
          id="mix-match"
          className="py-28 px-6 lg:px-10"
          style={{ background: '#F9F6F2' }}
        >
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
              <div>
                <p
                  className="text-[10px] tracking-[0.25em] uppercase mb-4 transition-all duration-700"
                  style={{ color: 'rgba(13,12,16,0.3)', ...reveal(visible) }}
                >
                  AI Mix & Match Stylist
                </p>
                <h2
                  className="font-serif font-light leading-tight"
                  style={{
                    fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
                    color: '#0D0C10',
                    ...reveal(visible, 100),
                  }}
                >
                  Your AI Stylist.<br />
                  <em className="italic" style={{ color: '#B85042' }}>Any Budget.</em>
                </h2>
              </div>

              <div style={reveal(visible, 200)}>
                <p
                  className="text-base font-light leading-[1.8] mb-7"
                  style={{ color: 'rgba(13,12,16,0.52)' }}
                >
                  Upload a style inspiration image. The AI performs a deep analysis
                  of silhouettes, fabric, colors, and textures — then generates curated looks
                  tailored to your selected budget tier.
                </p>

                {/* Budget tier selector */}
                <div className="flex items-center gap-2.5">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase mr-1"
                    style={{ color: 'rgba(13,12,16,0.32)' }}
                  >
                    Budget
                  </span>
                  {TIERS.map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setActiveTier(tier)}
                      className="px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wide transition-all duration-200 cursor-pointer"
                      style={
                        activeTier === tier
                          ? TIER_ACTIVE[tier]
                          : { background: 'rgba(13,12,16,0.06)', color: 'rgba(13,12,16,0.5)' }
                      }
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Outfit grid */}
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 500ms 300ms' }}
            >
              {tierItems.map((item) => (
                <OutfitCard key={item.id} item={item} onLike={handleLike} onRemix={handleRemix} />
              ))}
            </div>

            {/* Summary bar */}
            <div
              className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 p-5 rounded-2xl"
              style={{
                background: 'rgba(13,12,16,0.04)',
                border: '1px solid rgba(13,12,16,0.08)',
                ...reveal(visible, 400),
              }}
            >
              <div className="flex items-center gap-5">
                <div>
                  <div className="text-[10px] tracking-[0.18em] uppercase mb-0.5" style={{ color: 'rgba(13,12,16,0.35)' }}>
                    Outfit total
                  </div>
                  <div className="font-serif font-light" style={{ fontSize: '1.8rem', color: '#0D0C10' }}>
                    ${totalPrice.toLocaleString()}
                  </div>
                </div>
                <div className="w-px h-10" style={{ background: 'rgba(13,12,16,0.1)' }} />
                <div>
                  <div className="text-[10px] tracking-[0.18em] uppercase mb-0.5" style={{ color: 'rgba(13,12,16,0.35)' }}>
                    Saved to vault
                  </div>
                  <div className="font-serif font-light" style={{ fontSize: '1.8rem', color: '#0D0C10' }}>
                    {likedCount}
                  </div>
                </div>
              </div>

              <a
                href="#waitlist"
                className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
                style={{ background: '#0D0C10', color: '#F9F6F2' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#B85042')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#0D0C10')}
              >
                Get All 3 Looks
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </section>
      )}
    </RevealWrapper>
  )
}
