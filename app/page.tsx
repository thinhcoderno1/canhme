'use client'

import { useState } from 'react'
import AllServiceCoupons from './components/AllServiceCoupons'
import FAQSection from './components/FAQSection'
import FlashSale from './components/FlashSale'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HotDeals from './components/HotDeals'
import InfoSection from './components/InfoSection'
import Navbar from './components/Navbar'
import PressSection from './components/PressSection'
import RenewalBonus from './components/RenewalBonus'
import TestimonialsSection from './components/TestimonialsSection'
import ZaloHotDealsSection from './components/ZaloHotDealsSection'
import { useCountdown } from './components/useCountdown'
import { deals, faqs } from './components/data'

export default function Page() {
  const countdown = useCountdown()
  const [copied, setCopied] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({})

  const copyCode = async (code: string, copiedKey = code) => {
    try {
      await navigator.clipboard?.writeText(code)
    } catch {}
    setCopied(copiedKey)
    window.setTimeout(() => setCopied(null), 5000)
  }

  const toggleFaq = (index: number) => setOpenFaq((current) => ({ ...current, [index]: !current[index] }))

  return (
    <>
      <Navbar />
      <main className="cm-page">
        <Hero />
        <HotDeals deals={deals} />
        <FlashSale countdown={countdown} copied={copied} onCopy={copyCode} />
        <AllServiceCoupons copied={copied} onCopy={copyCode} />
        <RenewalBonus />
        <ZaloHotDealsSection />
        <TestimonialsSection />
        <PressSection />
        <FAQSection
          items={faqs}
          openFaq={openFaq}
          onToggle={toggleFaq}
        />
        <InfoSection />
      </main>
      <Footer />
    </>
  )
}
