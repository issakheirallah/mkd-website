export default function Services() {
  const services = [
    {
      title: 'Interior Decorating',
      description:
        'High-quality painting, wall finishes, woodwork, and detail-led decorating for homes and commercial spaces.'
    },
    {
      title: 'Refurbishment Works',
      description:
        'Practical, reliable refurbishment support for properties that need updating, refreshing, or preparing for sale or let.'
    },
    {
      title: 'Property Maintenance',
      description:
        'Ongoing maintenance and repair work delivered with care, clear communication, and a professional finish.'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Services</p>
        <h1>Built around presentation, upkeep, and value.</h1>
        <p className="section-text">
          Whether you need a property refreshed, restored, or maintained, MK Decorating provides
          practical support with a professional standard of finish.
        </p>

        <div className="card-grid three">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
