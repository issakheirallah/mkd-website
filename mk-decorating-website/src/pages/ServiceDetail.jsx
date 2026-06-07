import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Icon from '../components/Icon'
import usePageMeta from '../hooks/usePageMeta'
import { getServiceBySlug, projectDisclaimer, services } from '../content/siteContent'

function useServiceSchema(service) {
  useEffect(() => {
    if (!service) return
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      serviceType: service.title,
      description: service.intro,
      provider: {
        '@type': 'GeneralContractor',
        name: 'MK Decorating',
        url: 'https://mkdecorating.net',
        telephone: '+447788914110',
        email: 'info@mkdecorating.net',
      },
      areaServed: { '@type': 'City', name: 'London' },
      url: `https://mkdecorating.net/services/${service.slug}`,
    }
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.dataset.scope = 'service-schema'
    el.textContent = JSON.stringify(schema)
    document.head.appendChild(el)
    return () => {
      document.head.querySelectorAll('script[data-scope="service-schema"]').forEach((n) => n.remove())
    }
  }, [service])
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  usePageMeta({
    title: service ? `${service.title} | MK Decorating` : 'Services | MK Decorating',
    description: service ? service.intro : undefined,
    path: service ? `/services/${service.slug}` : '/services',
  })
  useServiceSchema(service)

  if (!service) return <Navigate to="/services" replace />

  // Suggest 3 other services at the bottom
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <div className="mk-pagehead">
        <p className="mk-eyebrow">
          <Link to="/services" className="mk-pagehead__crumb">Services</Link> / {service.title}
        </p>
        <h1>{service.title}</h1>
      </div>

      <section className="mk-section">
        <div className="mk-section__inner mk-service-detail">
          <div className="mk-service-detail__grid">
            <div className="mk-service-detail__main">
              <p className="mk-service-detail__lead">{service.intro}</p>

              <h2 className="mk-service-detail__h2">What's included</h2>
              <ul className="mk-service-detail__list">
                {service.includes.map((item) => (
                  <li key={item}>
                    <span className="mk-service-detail__tick" aria-hidden="true">
                      <Icon name="check" size={14} strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="mk-service-detail__h2">How we typically work</h2>
              <p className="mk-service-detail__hint">
                An outline of how a project of this kind might run — exact stages, sequence, and
                timing are agreed for each project on a case-by-case basis.
              </p>
              <ol className="mk-service-detail__steps">
                {service.process.map((step, i) => (
                  <li key={step.title}>
                    <span className="mk-service-detail__step-num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="mk-service-detail__step-title">{step.title}</h3>
                      <p className="mk-service-detail__step-desc">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="mk-service-detail__aside">
              <div className="mk-service-detail__card">
                <div className="mk-service-detail__icon">
                  <Icon name={service.icon} size={22} color="currentColor" />
                </div>
                <div className="mk-service-detail__card-label">Note on scope</div>
                <p className="mk-service-detail__card-note">{projectDisclaimer}</p>
              </div>

              <div className="mk-service-detail__card mk-service-detail__card--dark">
                <h3 className="mk-service-detail__card-title">Get a free quote</h3>
                <p className="mk-service-detail__card-text">
                  Tell us about your project. We'll come to you, assess the work, and send a
                  written estimate based on your specific brief.
                </p>
                <Link to="/contact" className="mk-btn mk-btn--primary mk-btn--sm">
                  Request a Quote <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mk-section mk-section--subtle">
        <div className="mk-section__inner">
          <div className="mk-section__header">
            <p className="mk-eyebrow">More Services</p>
            <h2 className="mk-section__title">Other ways we can help</h2>
          </div>
          <div className="mk-services-grid">
            {related.map((s) => (
              <Link to={`/services/${s.slug}`} key={s.slug} className="mk-service-card">
                <div className="mk-service-card__icon">
                  <Icon name={s.icon} size={20} color="currentColor" />
                </div>
                <h3 className="mk-service-card__title">{s.title}</h3>
                <p className="mk-service-card__desc">{s.desc}</p>
                <div className="mk-service-card__link">
                  Learn more <Icon name="chevronRight" size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mk-section mk-section--accent">
        <div className="mk-cta">
          <h2 className="mk-cta__title">Ready to transform your space?</h2>
          <p className="mk-cta__lead">
            Get a free, no-obligation quote.
          </p>
          <Link to="/contact" className="mk-btn mk-btn--navy">
            Get a Free Quote <Icon name="arrowRight" size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
