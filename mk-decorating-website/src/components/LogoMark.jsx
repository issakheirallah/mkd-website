export default function LogoMark({ className = '', title = 'MK Decorating logo' }) {
  return (
    <svg
      viewBox="0 0 144 82"
      role="img"
      aria-label={title}
      className={className}
    >
      <polygon points="0.816 80.973 72 80.973 36.406 18.688" fill="#00aeae" />
      <polygon points="72 80.973 143.184 80.973 107.594 18.688" fill="#00aeae" />
      <polygon points="36.305 1.027 107.59 1.027 72 63.313" fill="#1d3557" />
    </svg>
  )
}
