interface Props {
  x: number
  y: number
  label: string
  brand: string
  price: string
  active?: boolean
}

export function TagDot({ x, y, label, brand, price, active }: Props) {
  return (
    <div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <div className="relative">
        {active && (
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: '#B85042', opacity: 0.3, animationDuration: '2s' }}
            aria-hidden="true"
          />
        )}
        <div
          className="relative w-3 h-3 rounded-full border-2"
          style={{
            background: active ? '#B85042' : 'rgba(255,255,255,0.85)',
            borderColor: 'rgba(255,255,255,0.7)',
            boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
          }}
        />
        {active && (
          <div
            className="absolute top-5 left-4 rounded-xl px-3 py-2 whitespace-nowrap"
            style={{
              background: 'rgba(255,255,255,0.94)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(13,12,16,0.07)',
              boxShadow: '0 4px 16px rgba(13,12,16,0.1)',
            }}
          >
            <div className="text-[10px] font-semibold" style={{ color: '#0D0C10' }}>{brand}</div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[9px]" style={{ color: 'rgba(13,12,16,0.45)' }}>{label}</span>
              <span className="text-[10px] font-semibold" style={{ color: '#B85042' }}>{price}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
