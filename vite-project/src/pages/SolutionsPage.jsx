export default function SolutionsPage() {
  const solutions = [
    {
      icon: 'briefcase2',
      title: 'Portfolio Management',
      text: 'Facilitates seamless integration with various exchanges and wallets, enabling users to manage account details, view balances, and monitor holdings across all linked accounts for informed decision-making.',
      color: 'rgba(123, 67, 250, 0.1)'
    },
    {
      icon: 'shield-exclamation',
      title: 'Risk Management',
      text: 'Empowers users to strategically manage imported assets and execute buy decisions based on detailed analysis, identifying potential risks and losses for proactive investment strategies.',
      color: 'rgba(236, 72, 153, 0.1)'
    },
    {
      icon: 'cpu',
      title: 'Crypto Algorithms',
      text: 'Empowers users with comprehensive market insights, real-time analysis, and asset strategies developed by our in-house team, designed to achieve superior long-term returns.',
      color: 'rgba(16, 185, 129, 0.1)'
    },
    {
      icon: 'building',
      title: 'Institutional Solutions',
      text: 'Tailored for hedge funds, family offices, and asset managers. Access prime brokerage services, custodial integrations, and regulatory reporting tools in a single, compliant environment.',
      color: 'rgba(245, 158, 11, 0.1)'
    },
    {
      icon: 'bar-chart',
      title: 'Market Intelligence',
      text: 'Real-time sentiment analytics, on-chain data feeds, and proprietary market signals to help you identify emerging opportunities before the crowd moves.',
      color: 'rgba(59, 130, 246, 0.1)'
    },
    {
      icon: 'arrow-left-right',
      title: 'OTC & Liquidity',
      text: 'Access over-the-counter trading desks and deep liquidity networks for large block orders, minimizing market impact while securing best-in-class pricing on every trade.',
      color: 'rgba(139, 92, 246, 0.1)'
    },
  ]

  return (
    <main className="main">
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="hero-wrapper text-center">
        <section className="container position-relative d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
          <span className="hero-badge mb-3" data-aos="fade-down">Solutions</span>
          <h1 className="fw-bold mb-4 text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2', maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up" data-aos-delay="100">
            Purpose-built digital asset solutions for every stage of growth.
          </h1>
          <p className="mb-0" style={{ maxWidth: '680px', fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6', margin: '0 auto' }} data-aos="fade-up" data-aos-delay="200">
            Built for modern investors and institutions, our solutions combine secure workflows, actionable insights, and operational control in one professional environment.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-5" data-aos="fade-up" data-aos-delay="300">
            <a href="/contact" className="btn-hero-primary">
              Request Demo <i className="bi bi-arrow-right ms-1"></i>
            </a>
            <a href="/login" className="btn-hero-outline">
              Access Platform
            </a>
          </div>
        </section>
      </div>

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="section py-5 bg-light">
        <div className="container py-4">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 pe-lg-5" data-aos="fade-right">
              <span className="text-primary fw-bold text-uppercase tracking-wider mb-2 d-block" style={{ letterSpacing: '2px', fontSize: '0.85rem' }}>The Plutus Advantage</span>
              <h2 className="fw-bold mb-4 text-dark display-6">Why teams choose Plutus</h2>
              <p className="text-muted mb-4 fs-5" style={{ lineHeight: '1.8' }}>
                From portfolio oversight to risk analysis and algorithmic intelligence, every capability is designed to support confident, scalable decision-making.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row gy-4">
                {[
                  { icon: 'diagram-3', title: 'Unified multi-exchange connectivity' },
                  { icon: 'shield-check', title: 'Real-time risk monitoring & alerts' },
                  { icon: 'cpu', title: 'Proprietary crypto algorithms' },
                  { icon: 'building-lock', title: 'Institutional compliance tools' },
                  { icon: 'headset', title: '24/7 dedicated support' }
                ].map((item, idx) => (
                  <div className="col-md-6" key={item.title} data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
                    <div className="d-flex align-items-start gap-3 p-3 bg-white rounded-4 shadow-sm h-100 transition-hover">
                      <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-circle" style={{ width: '48px', height: '48px', flexShrink: 0, fontSize: '1.25rem' }}>
                        <i className={`bi bi-${item.icon}`}></i>
                      </div>
                      <div className="pt-2">
                        <h6 className="fw-bold text-dark mb-0">{item.title}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions Grid ────────────────────────────────── */}
      <section className="section py-5">
        <div className="container">
          <div className="section-title text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Our Solutions</h2>
            <p className="fs-5 text-muted">Comprehensive tools for every investment strategy</p>
          </div>
          <div className="row gy-4">
            {solutions.map(({ icon, title, text, color }) => (
              <div className="col-lg-4 col-md-6" key={title}>
                <article className="content-card h-100 p-4">
                  <div
                    className="mb-4 d-inline-flex align-items-center justify-content-center"
                    style={{ width: '64px', height: '64px', background: color, borderRadius: '16px', color: 'var(--brand)', fontSize: '1.6rem' }}
                  >
                    <i className={`bi bi-${icon}`}></i>
                  </div>
                  <h3 className="mb-3">{title}</h3>
                  <p className="text-muted mb-0">{text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="cta-card text-center p-5">
            <h2 className="fw-bold mb-3 text-white">Start with a personalized demo</h2>
            <p className="mb-4" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem' }}>
              Speak with our team to discover which solutions best match your investment goals and operational needs.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="/contact" className="btn-cta-white">
                Request a Demo
              </a>
              <a href="/login" className="btn-cta-outline">
                Access Platform
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
