import { useState } from 'react'
import { businessInfo } from '../content/siteContent'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  propertyType: '',
  service: '',
  postcode: '',
  timeline: '',
  details: '',
}

export default function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const hasConfiguredEmail = !businessInfo.email.toLowerCase().includes('add your')

  function updateField(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  function validateForm() {
    const nextErrors = {}

    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.email.trim()) nextErrors.email = 'Email is required.'
    if (!formData.service) nextErrors.service = 'Select the service you need.'
    if (!formData.details.trim()) nextErrors.details = 'Add a short project summary.'

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validateForm()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('Please complete the required fields before sending your request.')
      return
    }

    if (!hasConfiguredEmail) {
      setStatus('Update the business email in site content before enabling email-based quote requests.')
      return
    }

    const subject = encodeURIComponent(`Quote request from ${formData.name}`)
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone || 'Not provided'}`,
        `Property type: ${formData.propertyType || 'Not provided'}`,
        `Service needed: ${formData.service}`,
        `Postcode / area: ${formData.postcode || 'Not provided'}`,
        `Preferred timeline: ${formData.timeline || 'Not provided'}`,
        '',
        'Project details:',
        formData.details,
      ].join('\n')
    )

    window.location.href = `mailto:${businessInfo.email}?subject=${subject}&body=${body}`
    setStatus('Your email draft is ready. Send it from your mail app to submit the quote request.')
    setFormData(initialForm)
  }

  return (
    <section className="section">
      <div className="container two-column">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Ready to discuss your project?</h1>
          <p className="section-text">
            Use the form to collect the exact details needed for a quote, or contact MK Decorating
            directly using the details alongside it.
          </p>

          <form className="quote-form card" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Full name
                <input name="name" value={formData.name} onChange={updateField} />
                {errors.name ? <span className="field-error">{errors.name}</span> : null}
              </label>
              <label>
                Email address
                <input name="email" type="email" value={formData.email} onChange={updateField} />
                {errors.email ? <span className="field-error">{errors.email}</span> : null}
              </label>
              <label>
                Phone number
                <input name="phone" value={formData.phone} onChange={updateField} />
              </label>
              <label>
                Property type
                <select name="propertyType" value={formData.propertyType} onChange={updateField}>
                  <option value="">Select</option>
                  <option value="Home">Home</option>
                  <option value="Rental property">Rental property</option>
                  <option value="Office">Office</option>
                  <option value="Retail / commercial">Retail / commercial</option>
                </select>
              </label>
              <label>
                Service needed
                <select name="service" value={formData.service} onChange={updateField}>
                  <option value="">Select</option>
                  <option value="Interior decorating">Interior decorating</option>
                  <option value="Refurbishment works">Refurbishment works</option>
                  <option value="Property maintenance">Property maintenance</option>
                </select>
                {errors.service ? <span className="field-error">{errors.service}</span> : null}
              </label>
              <label>
                Postcode or area
                <input name="postcode" value={formData.postcode} onChange={updateField} />
              </label>
              <label>
                Preferred timeline
                <input
                  name="timeline"
                  placeholder="e.g. Next month"
                  value={formData.timeline}
                  onChange={updateField}
                />
              </label>
            </div>

            <label>
              Project details
              <textarea
                name="details"
                rows="6"
                placeholder="Tell us what needs decorating, the number of rooms, access constraints, and any deadlines."
                value={formData.details}
                onChange={updateField}
              />
              {errors.details ? <span className="field-error">{errors.details}</span> : null}
            </label>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Create quote email</button>
              <p className="form-note">
                This version opens your mail app with the quote details pre-filled.
              </p>
            </div>

            {status ? <p className="form-status">{status}</p> : null}
          </form>
        </div>

        <aside className="contact-sidebar">
          <div className="card dark-panel">
            <h3>Direct contact</h3>
            <div className="contact-block">
              <strong>Phone</strong>
              <p>{businessInfo.phone}</p>
            </div>
            <div className="contact-block">
              <strong>Email</strong>
              <p>{businessInfo.email}</p>
            </div>
            <div className="contact-block">
              <strong>Service area</strong>
              <p>{businessInfo.serviceArea}</p>
            </div>
          </div>

          <div className="card contact-sidecard">
            <p className="eyebrow">What helps</p>
            <h3>Send enough detail for a faster quote.</h3>
            <ul className="clean-list">
              <li>Approximate room count or property size</li>
              <li>Photos of the current condition</li>
              <li>Your preferred dates and access times</li>
              <li>Whether materials need to be supplied</li>
            </ul>
            <p className="contact-side-note">{businessInfo.responsePromise}</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
