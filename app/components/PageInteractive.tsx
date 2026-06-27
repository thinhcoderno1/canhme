'use client'

import { useState } from 'react'
import AllServiceCoupons from './AllServiceCoupons'
import FlashSale from './FlashSale'
import { useCountdown } from './useCountdown'

export default function PageInteractive() {
  const countdown = useCountdown()
  const [copied, setCopied] = useState<string | null>(null)

  const copyCode = async (code: string, copiedKey = code) => {
    try {
      await navigator.clipboard?.writeText(code)
    } catch {}
    setCopied(copiedKey)
    window.setTimeout(() => setCopied(null), 5000)
  }

  return (
    <>
      <FlashSale countdown={countdown} copied={copied} onCopy={copyCode} />
      <AllServiceCoupons copied={copied} onCopy={copyCode} />
    </>
  )
}
