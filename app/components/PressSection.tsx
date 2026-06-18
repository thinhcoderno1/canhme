import type { PressItem } from './data'

export default function PressSection({
  items,
  index,
  onPrevious,
  onNext,
}: {
  items: PressItem[]
  index: number
  onPrevious: () => void
  onNext: () => void
}) {
  const visibleItems = items.slice(index, index + 4)

  return (
    <section className="cm-section cm-carousel">
      <div className="cm-carousel-head">
        <h2>📰 Báo chí nói gì về InterData?</h2>
        <div>
          <button onClick={onPrevious} type="button">‹</button>
          <button onClick={onNext} type="button">›</button>
        </div>
      </div>
      <div className="cm-card-row">
        {visibleItems.map((item) => (
          <article className="cm-press-card" key={item.title}>
            <span>{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
