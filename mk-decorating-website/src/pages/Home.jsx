import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import HeroCarousel from '../components/HeroCarousel'
import FadeIn from '../components/FadeIn'
import BeforeAfter from '../components/BeforeAfter'
import usePageMeta from '../hooks/usePageMeta'
import { services, whyUs, testimonials } from '../content/siteContent'

// Before/after pairs live in /public/projects/before-after/
const beforeAfterPair = {
  before: '/projects/before-after/pair-01-before.jpeg',
  after: '/projects/before-after/pair-01-after.jpeg',
}

const heroCarouselImages = [
  '/projects/project-002/project-002-01.jpeg',
  '/projects/project-002/project-002-02.jpeg',
  '/projects/project-002/project-002-03.jpeg',
  '/projects/project-002/project-002-04.jpeg',
  '/projects/project-002/project-002-05.jpeg',
  '/projects/project-002/project-002-06.jpeg',
]

export default function Home() {
  usePageMeta({ path: '/' })
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
            <FadeIn y={16} delay={0.05}>
              <p className="mk-eyebrow">Renovation & Refurbishment</p>
            </FadeIn>
            <FadeIn y={20} delay={0.15}>
              <h1 className="mk-hero__title">
                Your Space,
                <br />
                <span className="mk-hero__title-accent">Reimagined.</span>
              </h1>
            </FadeIn>
            <FadeIn y={16} delay={0.3}>
              <p className="mk-hero__lead">
                MK Decorating delivers full-service property renovation, from kitchens and bathrooms to fitted joinery, flooring, and finishing. One team from start to finish.
              </p>
            </FadeIn>
            <FadeIn y={12} delay={0.4}>
              <div className="mk-hero__actions">
                <Link to="/contact" className="mk-btn mk-btn--primary">
                  Get a Free Quote <Icon name="arrowRight" size={18} />
                </Link>
                <Link to="/projects" className="mk-btn mk-btn--ghost">See Our Work</Link>
              </div>
            </FadeIn>
          </div>
          <FadeIn y={24} delay={0.2} className="mk-hero__visual">
            <div className="mk-hero__visual-inner mk-hero__visual-inner--photo">
              <HeroCarousel images={heroCarouselImages} alt="MK Decorating project photo" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="mk-section">
        <div className="mk-section__inner">
          <FadeIn>
            <div className="mk-section__header">
              <p className="mk-eyebrow">What We Do</p>
              <h2 className="mk-section__title">Our Services</h2>
            </div>
          </FadeIn>
          <div className="mk-services-grid">
            {services.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.07}>
                <Link to={`/services/${s.slug}`} className="mk-service-card">
                  <div className="mk-service-card__icon">
                    <Icon name={s.icon} size={20} color="currentColor" />
                  </div>
                  <h3 className="mk-service-card__title">{s.title}</h3>
                  <p className="mk-service-card__desc">{s.desc}</p>
                  <div className="mk-service-card__link">
                    Learn more <Icon name="chevronRight" size={14} />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="mk-section mk-section--subtle mk-areas-section">
        <div className="mk-section__inner">
          <div className="mk-areas">
            <FadeIn className="mk-areas__copy">
              <p className="mk-eyebrow">Areas Covered</p>
              <h2 className="mk-areas__title">Working across London.</h2>
              <p className="mk-areas__lead">
                We deliver projects right across the capital — homes, rentals, and commercial
                spaces in every quarter of the city.
              </p>
            </FadeIn>
            <div className="mk-areas__grid">
              {['Central London', 'North London', 'West London', 'South London', 'East London', 'Greater London'].map((area, i) => (
                <FadeIn key={area} delay={0.1 + i * 0.05}>
                  <div className="mk-areas__chip">
                    <Icon name="mapPin" size={14} />
                    <span>{area}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="mk-section">
        <div className="mk-section__inner">
          <FadeIn>
            <div className="mk-section__header">
              <p className="mk-eyebrow">See the Difference</p>
              <h2 className="mk-section__title">Before &amp; after.</h2>
            </div>
          </FadeIn>
          <FadeIn>
            <BeforeAfter
              before={beforeAfterPair.before}
              after={beforeAfterPair.after}
              beforeAlt="Room before the MK Decorating refurbishment"
              afterAlt="Room after the MK Decorating refurbishment"
              beforeObjectPosition="center 85%"
            />
          </FadeIn>
          <FadeIn>
            <p className="mk-beforeafter__caption">
              Drag the slider to reveal the transformation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Us */}
      <section className="mk-section mk-section--dark">
        <div className="mk-section__inner">
          <FadeIn>
            <div className="mk-section__header">
              <p className="mk-eyebrow">Why MK Decorating</p>
              <h2 className="mk-section__title">Precision at every stage of the build.</h2>
            </div>
          </FadeIn>
          <div className="mk-why__grid">
            {whyUs.map((w, i) => (
              <FadeIn key={w.title} delay={i * 0.08}>
                <div className="mk-why__item">
                  <div className="mk-why__icon">
                    <Icon name={w.icon} size={22} color="currentColor" />
                  </div>
                  <h4 className="mk-why__title">{w.title}</h4>
                  <p className="mk-why__desc">{w.desc}</p>
                </div>
              </FadeIn>
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
        <FadeIn className="mk-cta">
          <h2 className="mk-cta__title">Ready to transform your space?</h2>
          <p className="mk-cta__lead">
            Get a free, no-obligation quote. We'll come to you, assess the project, and provide a detailed estimate.
          </p>
          <Link to="/contact" className="mk-btn mk-btn--navy">
            Get a Free Quote <Icon name="arrowRight" size={18} />
          </Link>
        </FadeIn>
      </section>
    </>
  )
}
