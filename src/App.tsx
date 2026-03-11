import { useCallback, useState } from 'react'
import './App.css'
import { NavThemeProvider } from './context/NavThemeContext'
import IntroOverlay from './components/IntroOverlay'
import Nav from './components/header/Nav'
import HeroSection from './components/hero'
import ScrollStorySection from './components/scroll-story'
import ToolboxSection from './components/toolbox'
import WishlistSection from './components/wishlist'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import FloatingBanner from './components/FloatingBanner'

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)

  const handleVideoStart = useCallback(() => {}, [])

  return (
    <NavThemeProvider>
      {!introComplete && <IntroOverlay onDone={() => { window.scrollTo(0, 0); setIntroComplete(true) }} onVideoStart={handleVideoStart} />}

      <div
        className="min-h-screen"
        style={{
          opacity: introComplete ? 1 : 0,
        }}
      >
        <Nav />
        <main>
          <HeroSection introComplete={introComplete} />
          <ScrollStorySection />
          <ToolboxSection />
          <WishlistSection />
        </main>
        <Footer />
        <BackToTop />
        <FloatingBanner />
      </div>
    </NavThemeProvider>
  )
}
