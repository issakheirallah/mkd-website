import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { services } from '../content/siteContent'

export default function Services() {
  return (
    <>
      <div className="mk-pagehead">
        <p className="mk-eyebrow">What We Offer</p>
        <h1>Our Services</h1>
      </div>

      <section className="mk-section">
        <div className="mk-section__inner">
          <div className="mk-services-grid">
            {services.map((s) => (
              <Link to="/contact" key={s.title} className="mk-service-card">
                <div className="mk-service-card__icon">
                  <Icon name={s.icon} size={20} color="currentColor" />
                </div>
                <h3 className="mk-service-card__title">{s.title}</h3>
                <p className="mk-service-card__desc">{s.desc}</p>
                <div className="mk-service-card__link">
                  Request a quote <Icon name="chevronRight" size={14} />
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
            Tell us about your project. We'll come to you, assess the work, and send a detailed estimate.
          </p>
          <Link to="/contact" className="mk-btn mk-btn--navy">
            Get a Free Quote <Icon name="arrowRight" size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
