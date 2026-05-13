import { useEffect, useState } from 'react'
import { siteContent } from '../content/siteContent'

export default function Projects() {
  const { featuredProjects, projectsPage } = siteContent
  const [activeGallery, setActiveGallery] = useState(null)

  useEffect(() => {
    function handleKeydown(event) {
      if (!activeGallery) return

      if (event.key === 'Escape') {
        setActiveGallery(null)
      } else if (event.key === 'ArrowRight') {
        setActiveGallery((current) => {
          if (!current) return current
          return {
            ...current,
            index: (current.index + 1) % current.images.length,
          }
        })
      } else if (event.key === 'ArrowLeft') {
        setActiveGallery((current) => {
          if (!current) return current
          return {
            ...current,
            index: (current.index - 1 + current.images.length) % current.images.length,
          }
        })
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [activeGallery])

  function openGallery(project, index = 0) {
    if (!project.images?.length) return

    setActiveGallery({
      name: project.name,
      images: project.images,
      index,
    })
  }

  function stepGallery(direction) {
    setActiveGallery((current) => {
      if (!current) return current
      return {
        ...current,
        index: (current.index + direction + current.images.length) % current.images.length,
      }
    })
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow">{projectsPage.eyebrow}</p>
          <h1>{projectsPage.heading}</h1>
          <p className="section-text">{projectsPage.body}</p>

          <div className="card-grid three">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.name}>
                {project.images?.length ? (
                  <button
                    type="button"
                    className="project-image project-image-photo project-image-button"
                    onClick={() => openGallery(project, 0)}
                    aria-label={`Open ${project.name} gallery`}
                  >
                    <img
                      src={project.images[0]}
                      alt={`${project.name} featured view`}
                      className="project-photo"
                    />
                    <div className="project-badges">
                      <span>{project.category}</span>
                      <span>{project.timeframe}</span>
                    </div>
                    <span className="project-image-cta">View full screen</span>
                  </button>
                ) : (
                  <div className={`project-image ${project.accent}`}>
                    <div className="project-badges">
                      <span>{project.category}</span>
                      <span>{project.timeframe}</span>
                    </div>
                  </div>
                )}
                <div className="project-body">
                  <p className="project-type">{project.location}</p>
                  <h3>{project.name}</h3>
                  <ul className="project-list">
                    {project.scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="project-result">{project.result}</p>
                  {project.images?.length ? (
                    <div className="project-thumb-grid">
                      {project.images.slice(1, 5).map((imagePath, index) => (
                        <button
                          type="button"
                          key={imagePath}
                          className="project-thumb-button"
                          onClick={() => openGallery(project, index + 1)}
                          aria-label={`Open ${project.name} image ${index + 2}`}
                        >
                          <img
                            src={imagePath}
                            alt={`${project.name} view ${index + 2}`}
                            className="project-thumb"
                          />
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeGallery ? (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeGallery.name} gallery`}
          onClick={() => setActiveGallery(null)}
        >
          <div className="project-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="project-lightbox-close"
              onClick={() => setActiveGallery(null)}
              aria-label="Close gallery"
            >
              Close
            </button>

            <div className="project-lightbox-main">
              <button
                type="button"
                className="project-lightbox-nav"
                onClick={() => stepGallery(-1)}
                aria-label="Previous image"
              >
                ‹
              </button>

              <img
                src={activeGallery.images[activeGallery.index]}
                alt={`${activeGallery.name} full view ${activeGallery.index + 1}`}
                className="project-lightbox-image"
              />

              <button
                type="button"
                className="project-lightbox-nav"
                onClick={() => stepGallery(1)}
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            <div className="project-lightbox-meta">
              <p>{activeGallery.name}</p>
              <span>{activeGallery.index + 1} / {activeGallery.images.length}</span>
            </div>

            <div className="project-lightbox-thumbs">
              {activeGallery.images.map((imagePath, index) => (
                <button
                  type="button"
                  key={imagePath}
                  className={`project-lightbox-thumb ${index === activeGallery.index ? 'is-active' : ''}`}
                  onClick={() => setActiveGallery((current) => current ? { ...current, index } : current)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={imagePath}
                    alt={`${activeGallery.name} thumbnail ${index + 1}`}
                    className="project-lightbox-thumb-image"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
