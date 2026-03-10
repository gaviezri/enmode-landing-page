import type { MeasurementPoint } from '../../types'

interface Props {
  point: MeasurementPoint
  visible: boolean
  delay: number
}

/** Animated measurement callout that slides in from the left or right. */
export function LabelCard({ point, visible, delay }: Props) {
  const isLeft = point.side === 'left'

  return (
    <div
      className="absolute flex items-center gap-2 transition-all"
      style={{
        left: point.cx,
        top: point.cy,
        opacity: visible ? 1 : 0,
        transform: isLeft
          ? (visible ? 'translateY(-50%) translateX(-104%)' : 'translateY(-50%) translateX(-120%)')
          : (visible ? 'translateY(-50%) translateX(4%)' : 'translateY(-50%) translateX(20%)'),
        transitionDuration: `${400 + delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {isLeft ? (
        <>
          <div className="text-right">
            <div className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(247,243,238,0.4)' }}>{point.label}</div>
            <div className="text-sm font-semibold" style={{ color: '#F7F3EE' }}>{point.value}</div>
          </div>
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#B85042' }} />
        </>
      ) : (
        <>
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#B85042' }} />
          <div>
            <div className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(247,243,238,0.4)' }}>{point.label}</div>
            <div className="text-sm font-semibold" style={{ color: '#F7F3EE' }}>{point.value}</div>
          </div>
        </>
      )}
    </div>
  )
}
