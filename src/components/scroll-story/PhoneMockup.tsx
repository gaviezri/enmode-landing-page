import { VisualSearchScreen } from './screens/VisualSearchScreen'
import { DupeFinderScreen } from './screens/DupeFinderScreen'
import { TryOnScreen } from './screens/TryOnScreen'

interface Props {
  activeStep: number
}

const SCREENS = [<VisualSearchScreen />, <DupeFinderScreen />, <TryOnScreen />]

/** iPhone-style frame that transitions between the 3 scroll-story screens. */
export function PhoneMockup({ activeStep }: Props) {
  return (
    <div className="relative" style={{ width: '270px', height: '545px' }}>
      {/* Outer frame */}
      <div
        className="absolute inset-0 shadow-[0_40px_100px_rgba(0,0,0,0.28)]"
        style={{ borderRadius: '44px', background: '#1A1B1E', padding: '8px' }}
      >
        {/* Inner screen */}
        <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: '38px', background: '#0E0E10' }}>
          {/* Notch */}
          <div
            className="absolute z-20 left-1/2 -translate-x-1/2"
            style={{ top: '10px', width: '88px', height: '24px', background: '#0E0E10', borderRadius: '12px' }}
            aria-hidden="true"
          />

          {/* Screens */}
          {SCREENS.map((screen, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-all"
              style={{
                opacity: activeStep === i ? 1 : 0,
                transform: activeStep === i ? 'scale(1)' : 'scale(0.97)',
                transitionDuration: '600ms',
                transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
                pointerEvents: activeStep === i ? 'auto' : 'none',
              }}
            >
              {screen}
            </div>
          ))}
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute" style={{ right: '-3px', top: '88px', width: '3px', height: '44px', background: '#2E2F35', borderRadius: '0 4px 4px 0' }} aria-hidden="true" />
      <div className="absolute" style={{ left: '-3px', top: '72px', width: '3px', height: '28px', background: '#2E2F35', borderRadius: '4px 0 0 4px' }} aria-hidden="true" />
      <div className="absolute" style={{ left: '-3px', top: '112px', width: '3px', height: '28px', background: '#2E2F35', borderRadius: '4px 0 0 4px' }} aria-hidden="true" />
    </div>
  )
}
