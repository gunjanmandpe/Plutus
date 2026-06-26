import { useEffect } from 'react'
import IconCard from '../components/IconCard'

export default function PlatformPage() {
  const features = [
    {
      icon: 'bar-chart-line',
      title: 'Order Execution Management',
      text: 'Our OEMS provides smart order routing across multiple venues, ensuring best-price execution with minimal slippage. Access deep liquidity pools and institutional-grade order types from a single interface.'
    },
    {
      icon: 'briefcase',
      title: 'Portfolio Management System',
      text: 'Manage all your digital asset holdings with a unified dashboard. Monitor real-time performance, track P&L, and maintain full visibility across multiple wallets and exchange accounts.'
    },
    {
      icon: 'shield-exclamation',
      title: 'Risk Management Tools',
      text: 'Protect your capital with advanced risk analytics. Set automated position limits, stop-loss triggers, and exposure controls that align with your investment mandate and risk appetite.'
    },
    {
      icon: 'diagram-3',
      title: 'API Access & Integration',
      text: 'Seamlessly connect existing systems via our REST and WebSocket APIs. Our infrastructure-agnostic design allows institutions to integrate Plutus into existing workflows with minimal friction.'
    },
    {
      icon: 'graph-up',
      title: 'Market Analytics',
      text: 'Access institutional-quality market data, charting tools, and trade analytics. Make data-driven decisions backed by real-time insights across all supported assets and venues.'
    },
    {
      icon: 'lock',
      title: 'Institutional Security',
      text: 'Multi-signature wallets, hardware security module (HSM) support, audit trails, and compliance-ready infrastructure ensure your assets and operations meet the highest security standards.'
    },
  ]

  return (
    <main className="main">
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="hero-wrapper">
        <section className="container position-relative">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7 hero-copy">
              <span className="hero-badge" data-aos="fade-down">Platform Overview</span>
              <h1 className="fw-bold" data-aos="fade-up" data-aos-delay="100">Plutus Digital Asset Platform</h1>
              <p style={{ maxWidth: 620 }} data-aos="fade-up" data-aos-delay="200">
                Our blockchain-focused platform provides an Order Execution Management System along with a
                complete Portfolio Management System, equipped with robust Risk Management tools, creating a
                pathway for institutional investment in digital assets.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4" data-aos="fade-up" data-aos-delay="300">
                <a href="/login" className="btn-hero-primary">
                  Access Platform <i className="bi bi-arrow-right ms-1"></i>
                </a>
                <a href="/contact" className="btn-hero-outline">
                  Request Demo
                </a>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-end" data-aos="zoom-in" data-aos-delay="200">
              <div className="platform-hero-graphic">
                <img
                  src="https://plutusdigitalasset.com/assets/img/features.png"
                  alt="Platform features"
                  className="img-fluid floating-img"
                  style={{ maxWidth: '360px', borderRadius: '20px' }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Unified access ────────────────────────────────── */}
      <section className="about section py-5">
        <div className="container" data-aos="fade-up">
          <div className="content-card p-4 p-lg-5">
            <div className="row align-items-center gy-4">
              <div className="col-lg-8">
                <h2 className="mb-3">Unified access to digital markets</h2>
                <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                  These solutions are available through our user interface and/or API. Our specialized
                  infrastructure offers a unified access point for digital assets trading, linking a
                  fragmented ecosystem to deliver deep liquidity and optimal price execution. Whether
                  you're connecting exchanges, managing multi-asset portfolios, or running algorithmic
                  strategies, Plutus handles the complexity so you can focus on performance.
                </p>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <a href="/login" className="btn-request-demo">
                  Start Trading <i className="bi bi-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform Features ─────────────────────────────── */}
      <section className="section py-5">
        <div className="container">
          <div className="section-title text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Platform Capabilities</h2>
            <p className="fs-5 text-muted">Everything you need to manage digital assets at scale</p>
          </div>
          <div className="row gy-4">
            {features.map(({ icon, title, text }, idx) => (
              <IconCard
                key={title}
                icon={icon}
                title={title}
                text={text}
                delay={100 * (idx + 1)}
                iconSize="64px"
                iconRadius="16px"
                iconFontSize="1.6rem"
                cardClassName="content-card h-100 p-4 transition-hover"
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
