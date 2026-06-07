// GA4 wrapper — only loads when the user has accepted cookies.
// Configure VITE_GA_ID in your environment (Vercel dashboard or .env.local).

const GA_ID = import.meta.env.VITE_GA_ID

let initialised = false

export function initAnalytics() {
  if (initialised || !GA_ID || typeof window === 'undefined') return
  initialised = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_ID, { anonymize_ip: true })
}

export function hasGAConfigured() {
  return Boolean(GA_ID)
}
