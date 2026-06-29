'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'

import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

const subscribe = () => () => {}

export function Reveal({
  children,
  className,
  delay = 0,
  threshold = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)

  useEffect(() => {
    if (!mounted) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [mounted, threshold])

  return (
    <div
      ref={ref}
      suppressHydrationWarning
      className={cn('reveal', mounted && visible && 'reveal-visible', className)}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
