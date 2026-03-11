import { useState } from 'react'
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

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const [videoStarted, setVideoStarted] = useState(false)

  return (
    <NavThemeProvider>
      {!introComplete && <IntroOverlay onDone={() => { window.scrollTo(0, 0); setIntroComplete(true) }} onVideoStart={() => setVideoStarted(true)} />}

      <div
        className="min-h-screen"
        style={{
          opacity: videoStarted || introComplete ? 1 : 0,
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
      </div>
    </NavThemeProvider>
  )
}
