import { useEffect, useRef, useState } from 'react'

interface Props {
  children: (visible: boolean) => React.ReactNode
  threshold?: number
  className?: string
}

/**
 * Triggers a visibility boolean once the wrapper enters the viewport.
 * Passes `visible` to children via render prop so they can drive animations.
 */
export function RevealWrapper({ children, threshold = 0.1, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={ref} className={className}>
      {children(visible)}
    </div>
  )
}
