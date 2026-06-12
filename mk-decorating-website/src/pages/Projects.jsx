import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Icon from '../components/Icon'
import FadeIn from '../components/FadeIn'
import usePageMeta from '../hooks/usePageMeta'

import wardrobeOpen from '../assets/projects/wardrobe-open.jpeg'
import wardrobeChandelier from '../assets/projects/wardrobe-chandelier.jpeg'
import bedroomMattress from '../assets/projects/bedroom-mattress.jpeg'
import joineryDetail from '../assets/projects/joinery-detail.jpeg'
import marbleTiling from '../assets/projects/marble-tiling.jpeg'
import featureWall from '../assets/projects/feature-wall.jpeg'
import livingRoom from '../assets/projects/living-room.jpeg'

// Order tuned so the 3-col grid fills cleanly (wide=2 cols).
// Row 1: wide + 1 (3) | Row 2: 1 + 1 + 1 (3) | Row 3: wide + 1 (3)
const items = [
  { label: 'Fitted Wardrobes', area: 'Residential', img: wardrobeOpen, wide: true },
  { label: 'Bespoke Joinery', area: 'Residential', img: joineryDetail },
  { label: 'Bedroom Refurbishment', area: 'Residential', img: wardrobeChandelier },
  { label: 'Bathroom Tiling', area: 'Residential', img: marbleTiling },
  { label: 'Feature Wall', area: 'Interior', img: featureWall },
  { label: 'Full Property Refurbishment', area: 'Residential', img: bedroomMattress, wide: true },
  { label: 'Living Room Refresh', area: 'Residential', img: livingRoom },
]

export default function Projects() {
  usePageMeta({
    title: 'Our Work | MK Decorating',
    description: 'A selection of recent renovation and refurbishment projects in London — fitted wardrobes, bespoke joinery, bathrooms, bedrooms, and feature walls.',
    path: '/projects',
  })

  const categories = useMemo(() => ['All', ...Array.from(new Set(items.map((i) => i.area)))], [])
  const [filter, setFilter] = useState('All')
  const [openIndex, setOpenIndex] = useState(-1)

  const filtered = filter === 'All' ? items : items.filter((i) => i.area === filter)

  const slides = filtered.map((item) => ({
    src: item.img,
    alt: item.label,
    title: item.label,
    description: item.area,
  }))

  return (
    <>
      <div className="mk-pagehead">
        <p className="mk-eyebrow">Portfolio</p>
        <h1>Our Work</h1>
      </div>

      <section className="mk-section mk-section--subtle">
        <div className="mk-section__inner">
          <FadeIn>
            <div className="mk-filter" role="tablist" aria-label="Filter projects by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={filter === cat}
                  className={`mk-filter__pill ${filter === cat ? 'is-active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="mk-gallery-grid">
            {filtered.map((item, i) => (
              <FadeIn key={`${item.label}-${i}`} delay={i * 0.05}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className={`mk-gallery__item mk-gallery__item--photo ${item.wide && filter === 'All' ? 'mk-gallery__item--wide' : ''}`}
                  style={{ backgroundImage: `url(${item.img})` }}
                  aria-label={`Open ${item.label} in lightbox`}
                >
                  <div className="mk-gallery__overlay" />
                  <div className="mk-gallery__category">{item.area}</div>
                  <div className="mk-gallery__title">{item.label}</div>
                  <div className="mk-gallery__zoom" aria-hidden="true">
                    <Icon name="chevronRight" size={16} />
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        index={openIndex < 0 ? 0 : openIndex}
        slides={slides}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: { backgroundColor: 'rgba(15, 30, 50, 0.94)' },
        }}
      />

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
