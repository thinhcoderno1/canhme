'use client'

import { useState } from 'react'
import CouponBox from './components/CouponBox'
import FAQSection from './components/FAQSection'
import FlashSale from './components/FlashSale'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HotDeals from './components/HotDeals'
import Navbar from './components/Navbar'
import PressSection from './components/PressSection'
import TestimonialsSection from './components/TestimonialsSection'
import { useCountdown } from './components/useCountdown'
import { cloudTabs, deals, faqs, press, testimonials, vpsTabs } from './components/data'

export default function Page() {
  const countdown = useCountdown()
  const [copied, setCopied] = useState<string | null>(null)
  const [vpsTab, setVpsTab] = useState(0)
  const [cloudTab, setCloudTab] = useState(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [pressIndex, setPressIndex] = useState(0)
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({})

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard?.writeText(code)
    } catch {}
    setCopied(code)
    window.setTimeout(() => setCopied(null), 5000)
  }

  const expandAllFaq = () => setOpenFaq(Object.fromEntries(faqs.map((_, index) => [index, true])))
  const collapseAllFaq = () => setOpenFaq({})
  const toggleFaq = (index: number) => setOpenFaq((current) => ({ ...current, [index]: !current[index] }))

  return (
    <>
      <Navbar />
      <main className="cm-page">
        <Hero />
        <HotDeals deals={deals} />
        <FlashSale countdown={countdown} copied={copied} onCopy={copyCode} />
        <CouponBox
          type="vps"
          code="VPSSAVE50"
          tabs={vpsTabs}
          copied={copied === 'VPSSAVE50'}
          activeTab={vpsTab}
          onTab={setVpsTab}
          onCopy={copyCode}
        />
        <CouponBox
          type="cloud"
          code="CLOUD30"
          tabs={cloudTabs}
          copied={copied === 'CLOUD30'}
          activeTab={cloudTab}
          onTab={setCloudTab}
          onCopy={copyCode}
        />
        <TestimonialsSection
          items={testimonials}
          index={testimonialIndex}
          onPrevious={() => setTestimonialIndex(Math.max(0, testimonialIndex - 1))}
          onNext={() => setTestimonialIndex(Math.min(testimonials.length - 4, testimonialIndex + 1))}
        />
        <PressSection
          items={press}
          index={pressIndex}
          onPrevious={() => setPressIndex(Math.max(0, pressIndex - 1))}
          onNext={() => setPressIndex(Math.min(press.length - 4, pressIndex + 1))}
        />
        <FAQSection
          items={faqs}
          openFaq={openFaq}
          onToggle={toggleFaq}
          onExpandAll={expandAllFaq}
          onCollapseAll={collapseAllFaq}
        />
      </main>
      <Footer />
    </>
  )
}
