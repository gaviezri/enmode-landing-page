import type { VaultItem } from '../../types'

interface Props {
  item: VaultItem
}

export function WishlistCard({ item }: Props) {
  const savings = item.originalPrice ? item.originalPrice - item.price : 0

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-cream-dark hover:shadow-[0_8px_28px_rgba(54,69,79,0.09)] transition-all duration-200 cursor-default group">
      {/* Visual */}
      <div
        className="relative flex items-center justify-center py-8"
        style={{ background: `linear-gradient(135deg, ${item.colorA}18 0%, ${item.colorB}25 100%)` }}
      >
        <div
          className="w-14 h-14 rounded-2xl shadow-sm"
          style={{ background: `linear-gradient(135deg, ${item.colorA}, ${item.colorB})` }}
        />

        {/* Alert badge */}
        {item.alert && (
          <div
            className="absolute top-2.5 right-2.5 text-[9px] font-bold tracking-wide px-2 py-1 rounded-lg"
            style={{ background: item.alert === 'price-drop' ? '#B85042' : '#778C58', color: 'white' }}
          >
            {item.alert === 'price-drop' ? '↓ Price Drop' : 'Low Stock'}
          </div>
        )}

        {/* Try On Me hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 group-hover:bg-charcoal/5 transition-all duration-200">
          <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-charcoal text-[10px] font-semibold px-3 py-1.5 rounded-full shadow-md cursor-pointer flex items-center gap-1.5">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B85042" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            Try On Me
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-3.5 py-3">
        <div className="text-[10px] text-charcoal/40 tracking-wide mb-0.5">{item.brand}</div>
        <div className="text-xs font-semibold text-charcoal leading-tight mb-2">{item.name}</div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-charcoal">${item.price.toLocaleString()}</span>
          {item.originalPrice && (
            <span className="text-[10px] text-charcoal/35 line-through">${item.originalPrice.toLocaleString()}</span>
          )}
          {savings > 0 && (
            <span className="ml-auto text-[9px] font-bold text-terra">-${savings}</span>
          )}
        </div>
      </div>
    </div>
  )
}