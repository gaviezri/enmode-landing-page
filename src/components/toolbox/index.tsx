import { RevealWrapper } from '../ui/RevealWrapper'
import { SNOW, reveal } from './constants'
import AnatomicCard from './AnatomicCard'
import MixMatchCard from './MixMatchCard'
import VisualSearchCard from './VisualSearchCard'

export default function ToolboxSection() {
  return (
    <RevealWrapper threshold={0.06}>
      {(visible) => (
        <section
          id="features"
          className="relative py-28 px-6 lg:px-10 overflow-hidden"
          style={{ background: '#0F0E11' }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 30%, rgba(184,80,66,0.06) 0%, transparent 70%)' }}
          />

          {/* Glass door reveal overlay */}
          <div
            className="absolute inset-0 z-20 pointer-events-none flex"
            aria-hidden="true"
            style={{ opacity: visible ? 0 : 1, transition: 'opacity 0.1s 1.3s' }}
          >
            <div
              style={{
                width: '50%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(15,14,17,0.95) 0%, rgba(15,14,17,0.85) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRight: '1px solid rgba(255,255,255,0.06)',
                transform: visible ? 'translateX(-105%)' : 'translateX(0)',
                transition: 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />
            <div
              style={{
                width: '50%',
                height: '100%',
                background: 'linear-gradient(225deg, rgba(15,14,17,0.95) 0%, rgba(15,14,17,0.85) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderLeft: '1px solid rgba(255,255,255,0.06)',
                transform: visible ? 'translateX(105%)' : 'translateX(0)',
                transition: 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section heading */}
            <div className="text-center mb-16">
              <p
                className="text-[10px] tracking-[0.28em] uppercase mb-6"
                style={{ color: `${SNOW}0.35)`, ...reveal(visible) }}
              >
                The Toolbox
              </p>
              <h2
                className="font-serif font-bold leading-tight mb-5"
                style={{
                  fontSize: 'clamp(2.6rem, 5vw, 4.5rem)',
                  color: '#F0EBE5',
                  ...reveal(visible, 100),
                }}
              >
                Your Wardrobe, Alive.
              </h2>
              <p
                className="text-base font-light max-w-xl mx-auto leading-[1.8]"
                style={{ color: `${SNOW}0.58)`, ...reveal(visible, 200) }}
              >
                Three AI-powered tools that turn your wardrobe into a precision-fitted, endlessly styled, income-generating machine.
              </p>
            </div>

            {/* Tool cards */}
            <div className="flex flex-col gap-6">
              <AnatomicCard visible={visible} />
              <MixMatchCard visible={visible} />
              <VisualSearchCard visible={visible} />
            </div>
          </div>
        </section>
      )}
    </RevealWrapper>
  )
}
