export default function Contact() {
  return (
    <section className="section">
      <div className="container two-column">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Ready to discuss your project?</h1>
          <p className="section-text">
            Add your real phone number, email address, and service areas below.
            You can also later connect this page to a working contact form.
          </p>
        </div>

        <div className="card">
          <div className="contact-block">
            <strong>Phone</strong>
            <p>Add your phone number</p>
          </div>
          <div className="contact-block">
            <strong>Email</strong>
            <p>Add your email address</p>
          </div>
          <div className="contact-block">
            <strong>Service Area</strong>
            <p>Add towns, boroughs, or regions you cover</p>
          </div>
        </div>
      </div>
    </section>
  )
}
