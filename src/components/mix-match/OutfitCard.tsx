import type { OutfitItem } from '../../types'
import { GarmentIllustration } from './GarmentIllustration'

interface Props {
  item: OutfitItem
  onLike: (id: number) => void
  onRemix: (id: number) => void
}

export function OutfitCard({ item, onLike, onRemix }: Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-cream-dark group transition-all duration-200 hover:shadow-[0_8px_32px_rgba(54,69,79,0.10)] cursor-default">
      {/* Garment visual */}
      <div
        className="flex items-center justify-center py-6"
        style={{ background: `linear-gradient(135deg, ${item.colorA}22 0%, ${item.colorB}22 100%)` }}
      >
        <GarmentIllustration category={item.category} colorA={item.colorA} colorB={item.colorB} />
      </div>

      {/* Info */}
      <div className="px-4 py-3 border-t border-cream-dark">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <div className="text-xs font-semibold text-charcoal leading-tight">{item.name}</div>
            <div className="text-[10px] text-charcoal/50 mt-0.5">{item.brand}</div>
          </div>
          <div className="text-xs font-bold text-charcoal flex-shrink-0">
            ${item.price.toLocaleString()}
          </div>
        </div>

        {/* Actions: Like / Buy / Remix */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onLike(item.id)}
            className="flex items-center justify-center w-8 h-8 rounded-xl border transition-all duration-200 cursor-pointer"
            style={{
              borderColor: item.liked ? '#B85042' : '#E6DED4',
              background: item.liked ? 'rgba(184,80,66,0.08)' : 'transparent',
            }}
            aria-label={item.liked ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill={item.liked ? '#B85042' : 'none'} stroke={item.liked ? '#B85042' : '#36454F'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          <a
            href="#"
            className="flex-1 h-8 rounded-xl flex items-center justify-center gap-1.5 text-[10px] font-semibold tracking-wide transition-colors duration-200 cursor-pointer"
            style={{ background: '#36454F', color: '#F7F3EE' }}
            aria-label={`Buy ${item.name} at ${item.brand}`}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            Buy
          </a>

          <button
            onClick={() => onRemix(item.id)}
            className="flex items-center justify-center w-8 h-8 rounded-xl border border-cream-dark transition-all duration-200 hover:border-charcoal/30 cursor-pointer"
            aria-label="Remix — swap this item"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#36454F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="16 3 21 3 21 8" />
              <line x1="4" y1="20" x2="21" y2="3" />
              <polyline points="21 16 21 21 16 21" />
              <line x1="15" y1="15" x2="21" y2="21" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
