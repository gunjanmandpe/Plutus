import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '', interest: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="main">
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="hero-wrapper" style={{ paddingBottom: '6rem' }}>
        <section className="container position-relative">
          <div className="row">
            <div className="col-lg-8 hero-copy">
              <span className="hero-badge">Get In Touch</span>
              <h1 className="fw-bold">Request a Demo</h1>
              <p>
                Let's build the next chapter of your digital asset strategy. Book a personalized walkthrough and discover how Plutus can support your next finance initiative.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ── Contact Info + Form ───────────────────────────── */}
      <section className="container py-5">
        <div className="row gy-4">
          {/* Contact Details */}
          <div className="col-lg-5">
            <article className="content-card h-100 p-4 p-lg-5">
              <h3 className="text-dark mb-4">Contact Information</h3>

              <div className="contact-info-item mb-5">
                <div className="contact-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <p className="mb-1 fw-semibold text-dark">Email Us</p>
                  <a href="mailto:sales@plutusdigitalasset.com" className="text-muted text-decoration-none">
                    sales@plutusdigitalasset.com
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <p className="fw-semibold text-dark mb-3">Follow Us</p>
                <div className="d-flex gap-3">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="Twitter">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Request Demo Form */}
          <div className="col-lg-7">
            <article className="content-card h-100 p-4 p-lg-5">
              {submitted ? (
                <div className="text-center py-5">
                  <div
                    className="mb-4 d-inline-flex align-items-center justify-content-center"
                    style={{ width: '80px', height: '80px', background: 'rgba(123, 67, 250, 0.1)', borderRadius: '50%', color: 'var(--brand)', fontSize: '2.5rem' }}
                  >
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <h3 className="text-dark mb-3">Thank You!</h3>
                  <p className="text-muted">
                    We've received your demo request and will be in touch within 1 business day.
                  </p>
                  <button className="btn-request-demo mt-3" onClick={() => setSubmitted(false)}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-dark mb-2">Request a Demo</h3>
                  <p className="text-muted mb-4">
                    Fill in the form below and our team will get back to you within 1 business day.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold text-dark">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control contact-input"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold text-dark">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control contact-input"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold text-dark">Company</label>
                        <input
                          type="text"
                          name="company"
                          className="form-control contact-input"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold text-dark">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          className="form-control contact-input"
                          placeholder="+1 234 567 8900"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold text-dark">I'm interested in</label>
                        <select
                          name="interest"
                          className="form-control contact-input"
                          value={formData.interest}
                          onChange={handleChange}
                        >
                          <option value="">Select a solution...</option>
                          <option value="portfolio">Portfolio Management</option>
                          <option value="risk">Risk Management</option>
                          <option value="algo">Crypto Algorithms</option>
                          <option value="institutional">Institutional Solutions</option>
                          <option value="api">API Integration</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold text-dark">Message</label>
                        <textarea
                          name="message"
                          className="form-control contact-input"
                          rows="4"
                          placeholder="Tell us about your needs..."
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="col-12 mt-2">
                        <button type="submit" className="btn-request-demo w-100">
                          Send Request <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
