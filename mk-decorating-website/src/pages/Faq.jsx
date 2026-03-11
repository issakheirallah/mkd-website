const faqs = [
  {
    question: 'How do you price decorating work?',
    answer:
      'Pricing depends on the size of the space, the condition of the surfaces, the level of preparation needed, and whether materials are being supplied. Smaller refresh jobs may be quoted as a fixed price, while larger or more detailed projects are usually priced after a site visit or a clear written scope.',
  },
  {
    question: 'How much preparation is included before painting or decorating?',
    answer:
      'Preparation is a core part of the job. This can include protecting floors and furniture, filling minor cracks, sanding, cleaning surfaces, masking, and priming where needed. If a property needs heavier repairs or extensive remedial work, that is normally identified and priced separately before work begins.',
  },
  {
    question: 'How long will the work take?',
    answer:
      'Timing depends on the scale and complexity of the project, drying times, access, and whether multiple rooms or trades are involved. A single-room refresh may take a short period, while full-property decorating or refurbishment work will be scheduled across a longer programme. Expected timing is set out clearly during quoting.',
  },
  {
    question: 'Do you supply the paint and materials?',
    answer:
      'This can be handled either way. MK Decorating can supply paints and decorating materials as part of the quote, or work with products the client has already chosen. If you want guidance on finish, durability, or colour selection, recommendations can be provided before materials are ordered.',
  },
  {
    question: 'Do you clean up after the job is finished?',
    answer:
      'Yes. Clean working practices and end-of-day tidiness are part of the service. Protective coverings are removed, waste is gathered, and the space is left presentable so the finished work can be handed over properly.',
  },
]

export default function Faq() {
  return (
    <section className="section">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="eyebrow">FAQ</p>
          <h1>Clear answers before the project starts.</h1>
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
    </section>
  )
}
