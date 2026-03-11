import { RevealWrapper } from '../ui/RevealWrapper'
import { SNOW, reveal } from './constants'
import AnatomicCard from './AnatomicCard'
import MixMatchCard from './MixMatchCard'
import VisualSearchCard from './VisualSearchCard'

export default function ToolboxSection() {
  return (
    <RevealWrapper threshold={0.08}>
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

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section heading */}
            <div className="text-center mb-16">
              <p
                className="text-[10px] tracking-[0.28em] uppercase mb-6"
                style={{ color: `${SNOW}0.28)`, ...reveal(visible) }}
              >
                The Toolbox
              </p>
              <h2
                className="font-serif font-light leading-tight mb-5"
                style={{
                  fontSize: 'clamp(2.6rem, 5vw, 4.5rem)',
                  color: '#F0EBE5',
                  ...reveal(visible, 100),
                }}
              >
                Everything You Need.<br />
                {/* <em className="italic" style={{ color: '#B85042' }}>Nothing You Don't.</em> */}
              </h2>
              <p
                className="text-base font-light max-w-xl mx-auto leading-[1.8]"
                style={{ color: `${SNOW}0.48)`, ...reveal(visible, 200) }}
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
