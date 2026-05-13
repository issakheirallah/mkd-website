import { siteContent } from '../content/siteContent'
import LogoMark from './LogoMark'

export default function Footer() {
  const { businessInfo } = siteContent

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-row">
            <LogoMark className="footer-logo" />
            <h3>{businessInfo.companyName}</h3>
          </div>
          <p>{businessInfo.footerDescription}</p>
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
