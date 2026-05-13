import { useState } from 'react'
import Icon from '../components/Icon'
import { businessInfo } from '../content/siteContent'

const initialForm = {
  first: '',
  last: '',
  email: '',
  phone: '',
  service: 'Full Property Refurbishment',
  message: '',
}

const serviceOptions = [
  'Full Property Refurbishment',
  'Kitchen & Bathroom Renovation',
  'Fitted Wardrobes & Joinery',
  'Flooring & Tiling',
  'Plastering & Decorating',
  'Property Maintenance',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const hasConfiguredEmail = !businessInfo.email.toLowerCase().includes('add your')

  function update(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = {}
    if (!form.first.trim()) errs.first = 'Required'
    if (!form.last.trim()) errs.last = 'Required'
    if (!form.email.trim()) errs.email = 'Required'
    if (!form.message.trim()) errs.message = 'Required'
    setErrors(errs)
    if (Object.keys(errs).length) return

    if (hasConfiguredEmail) {
      const subject = encodeURIComponent(`Quote request from ${form.first} ${form.last}`)
      const body = encodeURIComponent([
        `Name: ${form.first} ${form.last}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || 'Not provided'}`,
        `Service: ${form.service}`,
        '',
        'Message:',
        form.message,
      ].join('\n'))
      window.location.href = `mailto:${businessInfo.email}?subject=${subject}&body=${body}`
    }
    setSubmitted(true)
  }

  return (
    <>
      <div className="mk-pagehead">
        <p className="mk-eyebrow">Get In Touch</p>
        <h1>Free Quote</h1>
      </div>

      <section className="mk-section mk-section--subtle">
        <div className="mk-contact-grid">
          <div className="mk-form-card">
            {submitted ? (
              <div className="mk-success">
                <div className="mk-success__icon">
                  <Icon name="check" size={28} color="currentColor" strokeWidth={2.5} />
                </div>
                <h3>Quote Request Sent!</h3>
                <p>We'll be in touch within 24 hours to arrange your free on-site assessment.</p>
                <button
                  className="mk-btn mk-btn--primary mk-btn--sm"
                  onClick={() => { setSubmitted(false); setForm(initialForm) }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2>Request a Free Quote</h2>
                <p className="mk-form-card__lead">
                  Fill in your details and we'll get back to you within 24 hours.
                </p>

                <div className="mk-form-grid-2">
                  <div className="mk-field">
                    <label htmlFor="first">First Name</label>
                    <input
                      id="first" name="first" className="mk-input"
                      placeholder="Jane" value={form.first} onChange={update}
                    />
                    {errors.first && <span className="field-error">{errors.first}</span>}
                  </div>
                  <div className="mk-field">
                    <label htmlFor="last">Last Name</label>
                    <input
                      id="last" name="last" className="mk-input"
                      placeholder="Smith" value={form.last} onChange={update}
                    />
                    {errors.last && <span className="field-error">{errors.last}</span>}
                  </div>
                </div>

                <div className="mk-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email" className="mk-input"
                    placeholder="jane@example.com" value={form.email} onChange={update}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="mk-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone" name="phone" type="tel" className="mk-input"
                    placeholder="+44 7700 900 000" value={form.phone} onChange={update}
                  />
                </div>

                <div className="mk-field">
                  <label htmlFor="service">Service Required</label>
                  <select id="service" name="service" className="mk-select" value={form.service} onChange={update}>
                    {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className="mk-field mk-field--full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" className="mk-textarea"
                    placeholder="Tell us about your project…" value={form.message} onChange={update}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <button type="submit" className="mk-btn mk-btn--primary mk-form-submit">
                  Send Quote Request <Icon name="arrowRight" size={18} />
                </button>
              </form>
            )}
          </div>

          <aside className="mk-contact-aside">
            <h3>Get in touch</h3>

            <div className="mk-contact-aside__row">
              <div className="mk-contact-aside__ico"><Icon name="phone" size={18} color="currentColor" /></div>
              <div>
                <div className="mk-contact-aside__label">Phone</div>
                <div className="mk-contact-aside__value">{businessInfo.phone}</div>
              </div>
            </div>

            <div className="mk-contact-aside__row">
              <div className="mk-contact-aside__ico"><Icon name="mail" size={18} color="currentColor" /></div>
              <div>
                <div className="mk-contact-aside__label">Email</div>
                <div className="mk-contact-aside__value">{businessInfo.email}</div>
              </div>
            </div>

            <div className="mk-contact-aside__row">
              <div className="mk-contact-aside__ico"><Icon name="mapPin" size={18} color="currentColor" /></div>
              <div>
                <div className="mk-contact-aside__label">Based in</div>
                <div className="mk-contact-aside__value">{businessInfo.serviceArea}</div>
              </div>
            </div>

            <div className="mk-contact-aside__card">
              <div className="mk-contact-aside__card-title">Free on-site assessment</div>
              <p>
                We come to you, assess the project, and provide a detailed written quote — completely free, no obligation.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
