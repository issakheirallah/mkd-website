import { siteContent } from '../content/siteContent'

export default function Faq() {
  const { faqPage } = siteContent

  return (
    <section className="section">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="eyebrow">{faqPage.eyebrow}</p>
          <h1>{faqPage.heading}</h1>
          <p className="section-text">{faqPage.intro}</p>
        </div>

        <div className="faq-list">
          {faqPage.items.map((item) => (
            <details className="faq-item card" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
