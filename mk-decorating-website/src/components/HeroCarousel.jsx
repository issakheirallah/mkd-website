import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

export default function HeroCarousel({ images, alt = 'Project photo', interval = 5000 }) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)
  const count = images.length

  const goTo = (i) => setIndex(((i % count) + count) % count)
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  // Auto-advance
  useEffect(() => {
    if (isPaused || count <= 1) return
    timerRef.current = setTimeout(() => goTo(index + 1), interval)
    return () => clearTimeout(timerRef.current)
  }, [index, isPaused, count, interval])

  // Keyboard arrow support
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  if (count === 0) return null

  return (
    <div
      className="mk-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Project photo gallery"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="mk-carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div
            key={src}
            className="mk-carousel__slide"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
          >
            <img src={src} alt={`${alt} ${i + 1}`} loading={i === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="mk-carousel__arrow mk-carousel__arrow--prev"
            onClick={prev}
            aria-label="Previous photo"
          >
            <Icon name="chevronRight" size={20} />
          </button>
          <button
            type="button"
            className="mk-carousel__arrow mk-carousel__arrow--next"
            onClick={next}
            aria-label="Next photo"
          >
            <Icon name="chevronRight" size={20} />
          </button>

          <div className="mk-carousel__dots" role="tablist">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                className={`mk-carousel__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
