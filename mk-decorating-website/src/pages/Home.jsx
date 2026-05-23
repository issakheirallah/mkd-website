import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import HeroCarousel from '../components/HeroCarousel'
import { services, whyUs, testimonials } from '../content/siteContent'

const heroCarouselImages = [
  '/projects/project-002/project-002-01.jpeg',
  '/projects/project-002/project-002-02.jpeg',
  '/projects/project-002/project-002-03.jpeg',
  '/projects/project-002/project-002-04.jpeg',
  '/projects/project-002/project-002-05.jpeg',
  '/projects/project-002/project-002-06.jpeg',
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mk-hero">
        <div className="mk-hero__accents">
          <div className="mk-hero__tri mk-hero__tri--one" />
          <div className="mk-hero__tri mk-hero__tri--two" />
        </div>
        <div className="mk-hero__grid">
          <div>
            <p className="mk-eyebrow">Renovation & Refurbishment</p>
            <h1 className="mk-hero__title">
              Your Space,
              <br />
              <span className="mk-hero__title-accent">Reimagined.</span>
            </h1>
            <p className="mk-hero__lead">
              MK Decorating delivers full-service property renovation, from kitchens and bathrooms to fitted joinery, flooring, and finishing. One team from start to finish.
            </p>
            <div className="mk-hero__actions">
              <Link to="/contact" className="mk-btn mk-btn--primary">
                Get a Free Quote <Icon name="arrowRight" size={18} />
              </Link>
              <Link to="/projects" className="mk-btn mk-btn--ghost">See Our Work</Link>
            </div>
          </div>
          <div className="mk-hero__visual">
            <div className="mk-hero__visual-inner mk-hero__visual-inner--photo">
              <HeroCarousel images={heroCarouselImages} alt="MK Decorating project photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mk-section">
        <div className="mk-section__inner">
          <div className="mk-section__header">
            <p className="mk-eyebrow">What We Do</p>
            <h2 className="mk-section__title">Our Services</h2>
          </div>
          <div className="mk-services-grid">
            {services.map((s) => (
              <Link to="/services" key={s.title} className="mk-service-card">
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

      {/* Why Us */}
      <section className="mk-section mk-section--dark">
        <div className="mk-section__inner">
          <div className="mk-section__header">
            <p className="mk-eyebrow">Why MK Decorating</p>
            <h2 className="mk-section__title">Precision at every stage of the build.</h2>
          </div>
          <div className="mk-why__grid">
            {whyUs.map((w) => (
              <div key={w.title} className="mk-why__item">
                <div className="mk-why__icon">
                  <Icon name={w.icon} size={22} color="currentColor" />
                </div>
                <h4 className="mk-why__title">{w.title}</h4>
                <p className="mk-why__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — hidden for now, keep for future use
      <section className="mk-section mk-section--subtle">
        <div className="mk-section__inner">
          <div className="mk-section__header">
            <p className="mk-eyebrow">What Our Clients Say</p>
            <h2 className="mk-section__title">Trusted by hundreds.</h2>
          </div>
          <div className="mk-testimonials-grid">
            {testimonials.map((t) => (
              <article key={`${t.author}-${t.context}`} className="mk-testimonial">
                <div className="mk-testimonial__stars">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" size={14} color="var(--color-teal)" fill="var(--color-teal)" strokeWidth={0} />
                  ))}
                </div>
                <p className="mk-testimonial__quote">"{t.quote}"</p>
                <div className="mk-testimonial__author-row">
                  <div className="mk-testimonial__avatar">{t.author[0]}</div>
                  <div>
                    <div className="mk-testimonial__author-name">{t.author}</div>
                    <div className="mk-testimonial__author-loc">{t.context}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA */}
      <section className="mk-section mk-section--accent">
        <div className="mk-cta">
          <h2 className="mk-cta__title">Ready to transform your space?</h2>
          <p className="mk-cta__lead">
            Get a free, no-obligation quote. We'll come to you, assess the project, and provide a detailed estimate.
          </p>
          <Link to="/contact" className="mk-btn mk-btn--navy">
            Get a Free Quote <Icon name="arrowRight" size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
