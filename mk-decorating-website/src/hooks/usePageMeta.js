import { useEffect } from 'react'

const DEFAULT_TITLE = 'MK Decorating | Renovation, Refurbishment & Maintenance'
const DEFAULT_DESCRIPTION =
  'MK Decorating delivers full-service property renovation, refurbishment, and maintenance across London — from kitchens and bathrooms to fitted joinery, flooring, and decorating.'
const SITE_ORIGIN = 'https://mkdecorating.net'

function setMeta(selector, attr, value) {
  if (typeof document === 'undefined') return
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/**
 * Update the document <title>, meta description, canonical URL, and Open Graph
 * title/description/url for the current page. Pass nothing on the homepage to
 * leave the defaults from index.html in place.
 */
export default function usePageMeta({ title, description, path } = {}) {
  useEffect(() => {
    const nextTitle = title || DEFAULT_TITLE
    const nextDescription = description || DEFAULT_DESCRIPTION
    const nextUrl = path ? `${SITE_ORIGIN}${path}` : SITE_ORIGIN

    const prevTitle = document.title
    document.title = nextTitle
    setMeta('meta[name="description"]', 'content', nextDescription)
    setMeta('meta[property="og:title"]', 'content', nextTitle)
    setMeta('meta[property="og:description"]', 'content', nextDescription)
    setMeta('meta[property="og:url"]', 'content', nextUrl)
    setMeta('meta[name="twitter:title"]', 'content', nextTitle)
    setMeta('meta[name="twitter:description"]', 'content', nextDescription)

    // Canonical link
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', nextUrl)

    return () => {
      document.title = prevTitle
    }
  }, [title, description, path])
}
