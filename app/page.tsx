import FAQClient from './components/FAQClient'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HotDeals from './components/HotDeals'
import InfoSection from './components/InfoSection'
import Navbar from './components/Navbar'
import PageInteractive from './components/PageInteractive'
import PressSection from './components/PressSection'
import RenewalBonus from './components/RenewalBonus'
import TestimonialsSection from './components/TestimonialsSection'
import ZaloHotDealsSection from './components/ZaloHotDealsSection'
import { deals, GID_ORDER, type DealProgram } from './components/data'
import { fetchAllGroupPricing } from './lib/packages'

export default async function Page() {
  const visibleGids = GID_ORDER.filter((gid) => {
    const program = deals.find((p) => p.gid === gid)
    return program && !program.hidden
  })
  const pricingByGid = await fetchAllGroupPricing(visibleGids)

  const orderedDeals = GID_ORDER.map((gid) => deals.find((p) => p.gid === gid)).filter(
    (p): p is DealProgram => p !== undefined,
  )

  return (
    <>
      <Navbar />
      <main className="cm-page">
        <Hero />
        <HotDeals deals={orderedDeals} pricingByGid={pricingByGid} />
        <PageInteractive />
        <RenewalBonus />
        <ZaloHotDealsSection />
        <TestimonialsSection />
        <PressSection />
        <FAQClient />
        <InfoSection />
      </main>
      <Footer />
    </>
  )
}
