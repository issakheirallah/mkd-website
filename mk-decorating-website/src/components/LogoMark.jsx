export default function LogoMark({ className = '', title = 'MK Decorating logo' }) {
  return (
    <svg
      viewBox="0 0 240 140"
      role="img"
      aria-label={title}
      className={className}
    >
      <path d="M20 120L80 20L140 120H20Z" fill="#00aeae" />
      <path d="M100 120L160 20L220 120H100Z" fill="#00aeae" />
      <path d="M80 20H160L120 88L80 20Z" fill="#1d3557" />
    </svg>
  )
}
