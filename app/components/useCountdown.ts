'use client'

import { useEffect, useMemo, useState } from 'react'

export function useCountdown() {
  const duration = ((1 * 86400) + (8 * 3600) + (24 * 60) + 36) * 1000
  const [left, setLeft] = useState(duration)

  useEffect(() => {
    const target = Date.now() + duration
    const timer = window.setInterval(() => setLeft(Math.max(0, target - Date.now())), 1000)
    return () => window.clearInterval(timer)
  }, [duration])

  return useMemo(() => {
    let seconds = Math.floor(left / 1000)
    const d = Math.floor(seconds / 86400)
    seconds -= d * 86400
    const h = Math.floor(seconds / 3600)
    seconds -= h * 3600
    const m = Math.floor(seconds / 60)
    seconds -= m * 60
    const pad = (n: number) => String(n).padStart(2, '0')
    return { d: pad(d), h: pad(h), m: pad(m), s: pad(seconds) }
  }, [left])
}
