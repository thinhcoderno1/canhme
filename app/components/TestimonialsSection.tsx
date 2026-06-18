import type { Testimonial } from './data'

export default function TestimonialsSection({
  items,
  index,
  onPrevious,
  onNext,
}: {
  items: Testimonial[]
  index: number
  onPrevious: () => void
  onNext: () => void
}) {
  const visibleItems = items.slice(index, index + 4)

  return (
    <section className="cm-section cm-carousel">
      <div className="cm-carousel-head">
        <h2>💬 Câu chuyện thành công</h2>
        <div>
          <button onClick={onPrevious} type="button">‹</button>
          <button onClick={onNext} type="button">›</button>
        </div>
      </div>
      <div className="cm-card-row">
        {visibleItems.map((item) => (
          <article className="cm-story-card" key={item.name}>
            <div className="cm-avatar">{item.initials}</div>
            <div>
              <h3>{item.name}</h3>
              <span>{item.role}</span>
            </div>
            <div className="cm-stars">★★★★★</div>
            <p>“{item.quote}”</p>
          </article>
        ))}
      </div>
    </section>
  )
}
