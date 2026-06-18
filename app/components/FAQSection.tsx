import type { faqs } from './data'

export default function FAQSection({
  items,
  openFaq,
  onToggle,
}: {
  items: typeof faqs
  openFaq: Record<number, boolean>
  onToggle: (index: number) => void
}) {
  return (
    <section className="cm-section cm-faq">
      <div className="cm-section-heading">
        <div className="cm-pill">FAQs</div>
        <h2>Một số câu hỏi thường gặp</h2>
      </div>
      <div className="cm-faq-grid">
        {items.map(([question, answer], index) => (
          <article className="cm-faq-item" key={question}>
            <button onClick={() => onToggle(index)} type="button">
              <span>{question}</span>
              <b>{openFaq[index] ? '−' : '+'}</b>
            </button>
            {openFaq[index] ? <p>{answer}</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}
