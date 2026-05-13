import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoMark from '../components/LogoMark'
import { siteContent } from '../content/siteContent'

export default function Home() {
  const {
    businessInfo,
    featuredProjects,
    home,
    servicesPage,
  } = siteContent
  const featuredProject = featuredProjects[0]
  const heroMedia = (home.hero.media?.length
    ? home.hero.media
    : featuredProject.images?.slice(0, 5).map((src, index) => ({
        type: 'image',
        src,
        alt: `${featuredProject.name} media ${index + 1}`,
        label: index === 0 ? 'Featured finish' : `Project view ${index + 1}`,
      }))) ?? []
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)
  const activeMedia = heroMedia[activeMediaIndex] ?? heroMedia[0]

  useEffect(() => {
    const nodes = document.querySelectorAll('.motion-reveal')

    if (!nodes.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setActiveMediaIndex(0)
  }, [heroMedia.length])

  return (
    <>
      <section className="hero hero-minimal">
        <div className="container hero-minimal-grid">
          <div className="hero-minimal-copy motion-reveal motion-reveal-left">
            <div className="hero-minimal-brand">
              <LogoMark className="hero-minimal-logo" />
              <p className="eyebrow">{home.hero.eyebrow}</p>
            </div>
            <h1 className="hero-minimal-title">{home.hero.heading}</h1>
            <p className="lead hero-minimal-lead">{home.hero.lead}</p>
            <div className="button-row hero-minimal-actions">
              <Link to="/contact" className="btn btn-primary">{home.hero.primaryCta}</Link>
              <Link to="/projects" className="btn btn-secondary">View projects</Link>
            </div>
            <div className="hero-minimal-meta">
              {home.hero.meta.map((item) => (
                <div className="hero-minimal-meta-item" key={item.label}>
                  <span className="hero-meta-label">{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-minimal-visual motion-reveal motion-reveal-right" style={{ '--motion-delay': '0.14s' }}>
            <div className="hero-minimal-stage">
              {activeMedia?.type === 'video' ? (
                <video
                  src={activeMedia.src}
                  poster={activeMedia.poster}
                  className="hero-minimal-photo"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              ) : activeMedia?.src ? (
                <img
                  src={activeMedia.src}
                  alt={activeMedia.alt ?? `${featuredProject.name} featured project`}
                  className="hero-minimal-photo"
                />
              ) : null}
            </div>
            <div className="hero-minimal-caption">
              <p className="hero-meta-label">Featured project</p>
              <h3>{featuredProject.name}</h3>
              <p>{featuredProject.location} · {featuredProject.timeframe}</p>
            </div>
            {heroMedia.length ? (
              <div className="hero-media-strip">
                {heroMedia.map((item, index) => (
                  <button
                    type="button"
                    key={item.src}
                    className={`hero-media-thumb ${index === activeMediaIndex ? 'is-active' : ''}`}
                    onClick={() => setActiveMediaIndex(index)}
                    aria-label={`Show ${item.label ?? `media item ${index + 1}`}`}
                  >
                    {item.type === 'video' ? (
                      <>
                        <img
                          src={item.poster ?? featuredProject.images?.[0]}
                          alt={item.alt ?? `${featuredProject.name} video preview`}
                          className="hero-media-thumb-image"
                        />
                        <span className="hero-media-thumb-badge">Video</span>
                      </>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt ?? `${featuredProject.name} preview ${index + 1}`}
                        className="hero-media-thumb-image"
                      />
                    )}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section showcase-section showcase-minimal">
        <div className="container">
          <div className="section-header motion-reveal">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Real projects presented with more clarity and less noise.</h2>
            </div>
            <Link to="/projects" className="section-link">{home.showcase.cta}</Link>
          </div>

          <div className="showcase-grid showcase-grid-minimal">
            {featuredProjects.map((project, index) => (
              <article
                className={`showcase-card motion-reveal ${index === 0 ? 'showcase-card-featured' : ''}`}
                key={project.name}
                style={{ '--motion-delay': `${0.08 + index * 0.09}s` }}
              >
                <div className={`showcase-visual ${!project.images?.length ? project.accent : ''}`}>
                  {project.images?.[0] ? (
                    <img
                      src={project.images[0]}
                      alt={`${project.name} preview`}
                      className="showcase-photo"
                    />
                  ) : null}
                  <div className="project-badges">
                    <span>{project.category}</span>
                    <span>{project.timeframe}</span>
                  </div>
                </div>
                <div className="showcase-body">
                  <p className="project-type">{project.location}</p>
                  <h3>{project.name}</h3>
                  <p>{project.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-minimal">
        <div className="container services-minimal-grid">
          <div className="motion-reveal motion-reveal-left">
            <p className="eyebrow">{servicesPage.eyebrow}</p>
            <h2>Services defined clearly, delivered consistently.</h2>
            <p className="section-text">
              A quieter homepage should show range without overselling. These are the core services,
              kept concise so the work itself stays central.
            </p>
          </div>
          <div className="services-minimal-list">
            {servicesPage.services.map((service, index) => (
              <article
                className="services-minimal-item motion-reveal"
                key={service.title}
                style={{ '--motion-delay': `${0.1 + index * 0.08}s` }}
              >
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-cta-section">
        <div className="container home-cta-panel motion-reveal" style={{ '--motion-delay': '0.08s' }}>
          <div>
            <p className="eyebrow">Request a quote</p>
            <h2>For a clearer scope, cleaner finish, and more confident result.</h2>
            <p className="section-text">
              Contact MK Decorating for a written quote and a straightforward conversation about the work.
            </p>
          </div>
          <div className="home-cta-actions">
            <Link to="/contact" className="btn btn-primary">Request a quote</Link>
            <div className="home-cta-details">
              <p>{businessInfo.phone}</p>
              <p>{businessInfo.email}</p>
              <p>{businessInfo.serviceArea}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
