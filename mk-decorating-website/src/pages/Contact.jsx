import { useState } from 'react'
import { siteContent } from '../content/siteContent'

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
  const { businessInfo, contactPage } = siteContent
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

    if (!formData.name.trim()) nextErrors.name = contactPage.form.errors.name
    if (!formData.email.trim()) nextErrors.email = contactPage.form.errors.email
    if (!formData.service) nextErrors.service = contactPage.form.errors.service
    if (!formData.details.trim()) nextErrors.details = contactPage.form.errors.details

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validateForm()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus(contactPage.form.errors.incomplete)
      return
    }

    if (!hasConfiguredEmail) {
      setStatus(contactPage.form.errors.missingEmail)
      return
    }

    const subject = encodeURIComponent(`${contactPage.form.mailto.subjectPrefix} ${formData.name}`)
    const body = encodeURIComponent(
      [
        `${contactPage.form.mailto.labels.name}: ${formData.name}`,
        `${contactPage.form.mailto.labels.email}: ${formData.email}`,
        `${contactPage.form.mailto.labels.phone}: ${formData.phone || contactPage.form.mailto.emptyValue}`,
        `${contactPage.form.mailto.labels.propertyType}: ${formData.propertyType || contactPage.form.mailto.emptyValue}`,
        `${contactPage.form.mailto.labels.service}: ${formData.service}`,
        `${contactPage.form.mailto.labels.postcode}: ${formData.postcode || contactPage.form.mailto.emptyValue}`,
        `${contactPage.form.mailto.labels.timeline}: ${formData.timeline || contactPage.form.mailto.emptyValue}`,
        '',
        contactPage.form.mailto.labels.projectDetails,
        formData.details,
      ].join('\n')
    )

    window.location.href = `mailto:${businessInfo.email}?subject=${subject}&body=${body}`
    setStatus(contactPage.form.errors.ready)
    setFormData(initialForm)
  }

  return (
    <section className="section">
      <div className="container two-column">
        <div>
          <p className="eyebrow">{contactPage.eyebrow}</p>
          <h1>{contactPage.heading}</h1>
          <p className="section-text">{contactPage.intro}</p>

          <form className="quote-form card" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                {contactPage.form.labels.name}
                <input name="name" value={formData.name} onChange={updateField} />
                {errors.name ? <span className="field-error">{errors.name}</span> : null}
              </label>
              <label>
                {contactPage.form.labels.email}
                <input name="email" type="email" value={formData.email} onChange={updateField} />
                {errors.email ? <span className="field-error">{errors.email}</span> : null}
              </label>
              <label>
                {contactPage.form.labels.phone}
                <input name="phone" value={formData.phone} onChange={updateField} />
              </label>
              <label>
                {contactPage.form.labels.propertyType}
                <select name="propertyType" value={formData.propertyType} onChange={updateField}>
                  <option value="">{contactPage.form.placeholders.select}</option>
                  {contactPage.form.options.propertyTypes.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                {contactPage.form.labels.service}
                <select name="service" value={formData.service} onChange={updateField}>
                  <option value="">{contactPage.form.placeholders.select}</option>
                  {contactPage.form.options.services.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.service ? <span className="field-error">{errors.service}</span> : null}
              </label>
              <label>
                {contactPage.form.labels.postcode}
                <input name="postcode" value={formData.postcode} onChange={updateField} />
              </label>
              <label>
                {contactPage.form.labels.timeline}
                <input
                  name="timeline"
                  placeholder={contactPage.form.placeholders.timeline}
                  value={formData.timeline}
                  onChange={updateField}
                />
              </label>
            </div>

            <label>
              {contactPage.form.labels.details}
              <textarea
                name="details"
                rows="6"
                placeholder={contactPage.form.placeholders.details}
                value={formData.details}
                onChange={updateField}
              />
              {errors.details ? <span className="field-error">{errors.details}</span> : null}
            </label>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">{contactPage.form.submitLabel}</button>
              <p className="form-note">{contactPage.form.note}</p>
            </div>

            {status ? <p className="form-status">{status}</p> : null}
          </form>
        </div>

        <aside className="contact-sidebar">
          <div className="card dark-panel">
            <h3>{contactPage.directContact.heading}</h3>
            <div className="contact-block">
              <strong>{contactPage.directContact.phoneLabel}</strong>
              <p>{businessInfo.phone}</p>
            </div>
            <div className="contact-block">
              <strong>{contactPage.directContact.emailLabel}</strong>
              <p>{businessInfo.email}</p>
            </div>
            <div className="contact-block">
              <strong>{contactPage.directContact.serviceAreaLabel}</strong>
              <p>{businessInfo.serviceArea}</p>
            </div>
          </div>

          <div className="card contact-sidecard">
            <p className="eyebrow">{contactPage.helpCard.eyebrow}</p>
            <h3>{contactPage.helpCard.heading}</h3>
            <ul className="clean-list">
              {contactPage.helpCard.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="contact-side-note">{businessInfo.responsePromise}</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
