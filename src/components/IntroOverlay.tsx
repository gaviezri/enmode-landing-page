import { useRef, useState } from 'react'
import introMp4 from '../assets/intro-garments-to-money.mp4'

interface Props {
  onDone: () => void
}

const START_VIDEO_OFFSET_MS = 1300;   // ms to skip from the beginning
const END_VIDEO_MS_BEFORE = 2200;

export default function IntroOverlay({ onDone }: Props) {
  const [fading, setFading] = useState(false)
  const dismissed = useRef(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const dismiss = () => {
    if (dismissed.current) return
    dismissed.current = true
    setFading(true)
    setTimeout(onDone, 100)
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const endOffset = END_VIDEO_MS_BEFORE / 1000; // Convert ms to seconds

    if (duration && currentTime >= duration - endOffset) {
      videoRef.current.pause();
      dismiss()
    }
  };


  return (
    <div
      onClick={dismiss}
      onKeyDown={dismiss}
      onTouchStart={dismiss}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#08070B',
        cursor: 'pointer',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.35s ease',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      <video
        ref={videoRef}
        src={introMp4}
        autoPlay
        muted
        playsInline
        onLoadedMetadata={() => {
          if (videoRef.current && START_VIDEO_OFFSET_MS > 0)
            videoRef.current.currentTime = START_VIDEO_OFFSET_MS / 1000
        }}
        onTimeUpdate={handleTimeUpdate}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  )
}