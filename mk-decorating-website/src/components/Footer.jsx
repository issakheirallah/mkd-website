import { businessInfo } from '../content/siteContent'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3>MK Decorating</h3>
          <p>Professional decorating, refurbishment, and maintenance services.</p>
        </div>
        <div>
          <p>Phone: {businessInfo.phone}</p>
          <p>Email: {businessInfo.email}</p>
          <p>Areas Covered: {businessInfo.serviceArea}</p>
        </div>
      </div>
    </footer>
  )
}
