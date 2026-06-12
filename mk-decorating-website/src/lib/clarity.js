// Microsoft Clarity wrapper.
// Configure VITE_CLARITY_ID at https://clarity.microsoft.com/ → Settings → Setup.
// Clarity is privacy-friendly (no PII), but we still gate it on cookie consent.

const CLARITY_ID = import.meta.env.VITE_CLARITY_ID

let initialised = false

export function initClarity() {
  if (initialised || !CLARITY_ID || typeof window === 'undefined') return
  initialised = true

  // Standard Clarity install snippet
  ;(function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        ;(c[a].q = c[a].q || []).push(arguments)
      }
    t = l.createElement(r)
    t.async = 1
    t.src = 'https://www.clarity.ms/tag/' + i
    y = l.getElementsByTagName(r)[0]
    y.parentNode.insertBefore(t, y)
  })(window, document, 'clarity', 'script', CLARITY_ID)
}
