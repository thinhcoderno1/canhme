'use client'

import { useState } from 'react'
import FAQSection from './FAQSection'
import { faqs } from './data'

export default function FAQClient() {
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({})
  const toggleFaq = (index: number) => setOpenFaq((current) => ({ ...current, [index]: !current[index] }))
  return <FAQSection items={faqs} openFaq={openFaq} onToggle={toggleFaq} />
}
