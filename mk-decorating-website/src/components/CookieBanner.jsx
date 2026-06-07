import { useEffect, useState } from 'react'
import { initAnalytics } from '../lib/analytics'

const STORAGE_KEY = 'mk-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'accepted') {
      initAnalytics()
    } else if (stored === null) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
    initAnalytics()
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="mk-cookie" role="dialog" aria-label="Cookie consent">
      <div className="mk-cookie__inner">
        <p className="mk-cookie__text">
          We use essential cookies to make this site work and optional analytics cookies to
          understand how visitors use it. You can read more in our{' '}
          <a href="/privacy" className="mk-cookie__link">Privacy Policy</a>.
        </p>
        <div className="mk-cookie__actions">
          <button type="button" onClick={reject} className="mk-btn mk-btn--ghost mk-btn--sm">
            Reject non-essential
          </button>
          <button type="button" onClick={accept} className="mk-btn mk-btn--primary mk-btn--sm">
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
