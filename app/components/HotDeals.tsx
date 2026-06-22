'use client'

import { useEffect, useMemo, useState } from 'react'
import type { Deal, DealProgram } from './data'
import { CheckIcon } from './Icons'

function getCollapsedSpecCount(specs: string[]) {
  const networkPortIndex = specs.findIndex((spec) => spec.toLowerCase().includes('network port'))
  return networkPortIndex >= 0 ? networkPortIndex + 1 : specs.length
}

function getEndOfMonthTime() {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime() - 1
}

function useEndOfMonthCountdown() {
  const endOfMonth = useMemo(() => getEndOfMonthTime(), [])
  const [left, setLeft] = useState<number | null>(null)

  useEffect(() => {
    const updateLeft = () => setLeft(Math.max(0, endOfMonth - Date.now()))
    updateLeft()
    const timer = window.setInterval(() => {
      updateLeft()
    }, 1000)

    return () => window.clearInterval(timer)
  }, [endOfMonth])

  return useMemo(() => {
    if (left === null) {
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      }
    }

    let seconds = Math.floor(left / 1000)
    const days = Math.floor(seconds / 86400)
    seconds -= days * 86400
    const hours = Math.floor(seconds / 3600)
    seconds -= hours * 3600
    const minutes = Math.floor(seconds / 60)
    seconds -= minutes * 60
    const pad = (value: number) => String(value).padStart(2, '0')

    return {
      days: pad(days),
      hours: pad(hours),
      minutes: pad(minutes),
      seconds: pad(seconds),
    }
  }, [left])
}

function ProgramCountdown({
  countdown,
}: {
  countdown: ReturnType<typeof useEndOfMonthCountdown>
}) {
  return (
    <div className="cm-program-countdown" aria-label="Sắp kết thúc">
      <div className="cm-program-countdown-label">Sắp kết thúc</div>
      <div className="cm-program-countdown-time">
        {[
          ['Ngày', countdown.days],
          ['Giờ', countdown.hours],
          ['Phút', countdown.minutes],
          ['Giây', countdown.seconds],
        ].map(([label, value]) => (
          <span key={label}>
            <strong>{value}</strong>
            <small>{label}</small>
          </span>
        ))}
      </div>
    </div>
  )
}

const PROGRAM_URGENCY_NOTE = 'Có thể kết thúc sớm hơn dự kiến, do số lượng ưu đãi có hạn'

function ProgramIcon({ variant = 'cloud' }: { variant?: DealProgram['iconVariant'] }) {
  return (
    <div className={`cm-program-icon is-${variant}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  )
}

function DealCard({
  deal,
  isExpanded,
  onToggle,
  toggleKey,
}: {
  deal: Deal
  isExpanded: boolean
  onToggle: (key: string) => void
  toggleKey: string
}) {
  const collapsedSpecCount = getCollapsedSpecCount(deal.specs)
  const visibleSpecs = isExpanded ? deal.specs : deal.specs.slice(0, collapsedSpecCount)
  const hasHiddenSpecs = deal.specs.length > collapsedSpecCount

  return (
    <article className={`cm-deal-card ${deal.featured ? 'is-featured' : ''}`} key={deal.name}>
      {deal.featured ? <div className="cm-featured-label">Gói được lựa chọn nhiều</div> : null}
      <div className="cm-deal-body">
        <div className="cm-deal-top">
          <h3>{deal.name}</h3>
        </div>
        <ul>
          {visibleSpecs.map((spec) => (
            <li key={spec}>
              <CheckIcon />
              {spec}
            </li>
          ))}
        </ul>
        {hasHiddenSpecs ? (
          <button className="cm-deal-toggle" onClick={() => onToggle(toggleKey)} type="button" aria-expanded={isExpanded}>
            {isExpanded ? 'Thu gọn' : 'Xem chi tiết'}
            <span>{isExpanded ? '⌃' : '⌄'}</span>
          </button>
        ) : null}
        {deal.oldPrice ? <del>{deal.oldPrice}</del> : null}
        <div className="cm-price">
          {deal.price}
          <span>{deal.period ?? '/năm'}</span>
        </div>
        <a href={deal.href ?? 'https://www.facebook.com/interdata.com.vn'} target="_blank" rel="noopener noreferrer">
          Đăng ký ngay
        </a>
      </div>
    </article>
  )
}

export default function HotDeals({ deals }: { deals: DealProgram[] }) {
  const countdown = useEndOfMonthCountdown()
  const visibleDeals = useMemo(() => deals.filter((program) => !program.hidden), [deals])
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      visibleDeals.flatMap((program) => program.deals.map((deal) => [`${program.eyebrow}:${deal.name}`, false])),
    ),
  )
  const [collapsedPrograms, setCollapsedPrograms] = useState<Record<string, boolean>>({})

  const toggleCard = (key: string) => {
    setExpandedCards((current) => ({ ...current, [key]: !current[key] }))
  }

  const toggleProgram = (key: string) => {
    setCollapsedPrograms((current) => ({ ...current, [key]: !current[key] }))
  }

  return (
    <section className="cm-section cm-hotdeals" id="hotdeals">
      <div className="cm-section-heading">
        <div className="cm-pill">Tối ưu chi phí đến 81%</div>
        <h2>BEST OFFER PLANS</h2>
        <p>Các chương trình ưu đãi VPS và Cloud Server nổi bật, tối ưu chi phí cho từng nhu cầu triển khai.</p>
      </div>
      {visibleDeals.map((program) => {
        const programKey = program.eyebrow
        const isProgramCollapsed = collapsedPrograms[programKey] ?? false
        const pricingGridId = `pricing-${programKey.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

        return (
        <div className="cm-deal-program" key={programKey}>
          <div className="cm-program-intro">
            <ProgramIcon variant={program.iconVariant} />
            <div className="cm-program-copy">
              <h3 className="cm-program-eyebrow">{program.eyebrow}</h3>
              <p className="cm-program-subheadline">{program.title}</p>
              <div className="cm-program-note">{PROGRAM_URGENCY_NOTE}</div>
              <p>{program.description}</p>
              <div className="cm-program-footer">
                <ProgramCountdown countdown={countdown} />
                <button
                  aria-controls={pricingGridId}
                  aria-expanded={!isProgramCollapsed}
                  className="cm-program-pricing-toggle"
                  onClick={() => toggleProgram(programKey)}
                  type="button"
                >
                  {isProgramCollapsed ? 'Chi tiết ↓' : 'Thu gọn ↑'}
                </button>
              </div>
            </div>
          </div>
          {isProgramCollapsed ? null : (
            <div className={`cm-deal-grid ${program.deals.length === 4 ? 'is-four' : ''}`} id={pricingGridId}>
              {program.deals.map((deal) => {
                const dealKey = `${program.eyebrow}:${deal.name}`

                return (
                  <DealCard
                    deal={deal}
                    isExpanded={expandedCards[dealKey]}
                    key={dealKey}
                    onToggle={toggleCard}
                    toggleKey={dealKey}
                  />
                )
              })}
            </div>
          )}
        </div>
        )
      })}
    </section>
  )
}
