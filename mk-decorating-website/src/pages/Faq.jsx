const faqs = [
  {
    question: 'How do you price refurbishment work?',
    answer:
      'Pricing depends on the scope of works, the condition of the property, the level of strip-out and preparation needed, and whether materials and fittings are being supplied. Smaller jobs may be quoted as a fixed price, while larger renovations are priced after a site visit and a clear written scope.',
  },
  {
    question: 'Do you cover all trades or just decorating?',
    answer:
      'We cover full-service renovation — carpentry and fitted joinery, kitchen and bathroom installation, flooring, tiling, plastering, decorating, and general property maintenance. One team manages the project from strip-out through to finish, so you do not need to coordinate separate contractors.',
  },
  {
    question: 'How long will the work take?',
    answer:
      'Timing depends on the scale and complexity of the project, the trades involved, lead times on materials, and access. A single-room refresh may take days, while a full-property refurbishment is scheduled across a longer programme. Expected timing is set out clearly during quoting and tracked against a written programme.',
  },
  {
    question: 'Do you supply materials and fittings?',
    answer:
      'This can be handled either way. MK Decorating can supply materials — paint, tiles, flooring, fittings, joinery — as part of the quote, or work with products the client has already chosen. We can advise on finish, durability, and selection before anything is ordered.',
  },
  {
    question: 'Do you clean up after the job is finished?',
    answer:
      'Yes. Clean working practices and end-of-day tidiness are part of the service. Protective coverings are removed, waste is gathered, and the space is left presentable so the finished work can be handed over properly.',
  },
]

export default function Faq() {
  return (
    <>
      <div className="mk-pagehead">
        <p className="mk-eyebrow">FAQ</p>
        <h1>Common Questions</h1>
      </div>

      <section className="mk-section">
        <div className="mk-section__inner">
          <div className="faq-layout">
            <div className="faq-intro">
              <p className="mk-eyebrow">Before you ask</p>
              <h2 className="mk-section__title" style={{ textAlign: 'left', maxWidth: '20ch' }}>
                Clear answers before the project starts.
              </h2>
              <p className="section-text">
                These are the questions clients usually ask first when planning decorating,
                refurbishment, or maintenance work.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-item card" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
