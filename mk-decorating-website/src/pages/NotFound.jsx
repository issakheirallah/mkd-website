import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import usePageMeta from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Page not found | MK Decorating',
    description: 'The page you were looking for could not be found.',
  })

  return (
    <section className="mk-section mk-section--subtle mk-notfound">
      <div className="mk-section__inner mk-notfound__inner">
        <p className="mk-notfound__code">404</p>
        <h1 className="mk-notfound__title">Page not found</h1>
        <p className="mk-notfound__lead">
          The page you were looking for has moved, been renamed, or never existed.
        </p>
        <div className="mk-notfound__actions">
          <Link to="/" className="mk-btn mk-btn--primary">
            Back to Home <Icon name="arrowRight" size={18} />
          </Link>
          <Link to="/services" className="mk-btn mk-btn--ghost">
            Browse Services
          </Link>
        </div>
      </div>
    </section>
  )
}
