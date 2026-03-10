import { useEffect, useRef, useState } from 'react'
import { PhoneMockup } from './PhoneMockup'
import type { ScrollStep } from '../../types'

const STEPS: ScrollStep[] = [
  {
    num: '01',
    label: 'See It',
    heading: 'From Screenshot\nto Mirror.',
    body: 'Upload any image — a Pinterest pin, a runway shot, street style. The AI breaks it down into individual components: shoes, jacket, trousers. Brand and price for each, instantly.',
  },
  {
    num: '02',
    label: 'Scan It',
    heading: 'AI Visual DNA.',
    body: 'Our visual engine recognizes specific textures, patterns, and logos to provide the most accurate product matching on the market. Find the exact item — or its perfect dupe.',
  },
  {
    num: '03',
    label: 'Wear It',
    heading: 'Try It Before\nYou Buy It.',
    body: "Eliminate online shopping uncertainty by simulating the fabric's fit and fall on your specific body. Shop with complete visual confidence before committing.",
  },
]

function useScrollStory(sectionRef: React.RefObject<HTMLDivElement | null>) {
  const [activeStep, setActiveStep] = useState(0)
  const [stepProgress, setStepProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      const total = Math.min(1, scrolled / sectionHeight)
      const step = Math.min(2, Math.floor(total * 3))
      const sp = (total * 3) % 1
      setActiveStep(step)
      setStepProgress(step === 2 ? 1 : sp)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionRef])

  return { activeStep, stepProgress }
}

export default function ScrollStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { activeStep, stepProgress } = useScrollStory(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      style={{ height: '400vh', background: '#0F0E11' }}
      className="relative"
    >
      {/* Top label */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pt-16 pointer-events-none" aria-hidden="true">
        <p
          className="text-[10px] tracking-[0.28em] uppercase"
          style={{ color: 'rgba(240,235,229,0.22)' }}
        >
          Visual Search · Smart Dupe · Virtual Try-On
        </p>
      </div>

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── Left: Step copy ── */}
            <div className="order-2 lg:order-1 max-w-lg">
              {/* Step tabs */}
              <div className="flex items-center gap-8 mb-10">
                {STEPS.map((s, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-2 transition-all duration-400 cursor-pointer"
                    style={{ opacity: activeStep === i ? 1 : 0.28 }}
                  >
                    <span
                      className="text-[10px] font-bold tracking-[0.18em]"
                      style={{ color: activeStep === i ? '#B85042' : '#F0EBE5' }}
                    >
                      {s.num}
                    </span>
                    <span
                      className="text-[10px] tracking-[0.14em] uppercase font-medium"
                      style={{ color: '#F0EBE5' }}
                    >
                      {s.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Heading */}
              <div className="relative overflow-hidden mb-6" style={{ height: '10rem' }}>
                {STEPS.map((s, i) => (
                  <h2
                    key={i}
                    className="absolute top-0 left-0 font-serif font-light leading-tight whitespace-pre-line transition-all"
                    style={{
                      fontSize: 'clamp(2.8rem, 5vw, 4.8rem)',
                      color: '#F0EBE5',
                      opacity: activeStep === i ? 1 : 0,
                      transform: activeStep === i
                        ? 'translateY(0)'
                        : activeStep > i
                          ? 'translateY(-28px)'
                          : 'translateY(28px)',
                      transitionDuration: '550ms',
                      transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    {s.heading}
                  </h2>
                ))}
              </div>

              {/* Body */}
              <div className="relative mb-12" style={{ height: '7rem' }}>
                {STEPS.map((s, i) => (
                  <p
                    key={i}
                    className="absolute top-0 left-0 text-base font-light leading-[1.8] transition-all"
                    style={{
                      color: 'rgba(240,235,229,0.55)',
                      opacity: activeStep === i ? 1 : 0,
                      transform: activeStep === i
                        ? 'translateY(0)'
                        : activeStep > i
                          ? 'translateY(-16px)'
                          : 'translateY(16px)',
                      transitionDuration: '550ms',
                      transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    {s.body}
                  </p>
                ))}
              </div>

              {/* Progress bars */}
              <div className="flex gap-2">
                {STEPS.map((_, i) => (
                  <div
                    key={i}
                    className="h-px flex-1 overflow-hidden"
                    style={{ background: 'rgba(240,235,229,0.12)', borderRadius: '1px' }}
                  >
                    <div
                      className="h-full transition-all duration-300"
                      style={{
                        background: '#B85042',
                        width: i < activeStep ? '100%' : i === activeStep ? `${stepProgress * 100}%` : '0%',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Phone ── */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
              <PhoneMockup activeStep={activeStep} />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
