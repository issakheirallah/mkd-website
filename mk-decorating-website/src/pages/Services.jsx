import { siteContent } from '../content/siteContent'

export default function Services() {
  const { servicesPage } = siteContent

  return (
    <section className="section services-page">
      <div className="container services-page-shell">
        <div className="services-page-backdrop" aria-hidden="true" />

        <div className="services-page-intro">
          <p className="eyebrow">{servicesPage.eyebrow}</p>
          <h1>{servicesPage.heading}</h1>
          <p className="section-text">{servicesPage.body}</p>
        </div>

        <div className="services-page-grid">
          {servicesPage.services.map((service) => (
            <article className="services-page-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
