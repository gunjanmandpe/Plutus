import { useEffect, useState } from 'react'

export default function HeroSlider() {
  const heroSlides = [
    {
      src: '/hero-slide-1.png',
      badge: 'Trusted SEO & Marketing Experts',
      title: ['Boost Your SEO', 'Marketing', 'Save Time Effortlessly'],
      description: 'Drive more traffic, improve search rankings, and increase conversions with our professional SEO solutions. From on-page optimization to link building.',
    },
    {
      src: '/hero-slide-2.png',
      badge: 'Performance-Driven Creative Strategy',
      title: ['Grow Your Brand', 'With Smart Campaigns', 'And Faster Results'],
      description: 'Create impactful campaigns, sharpen your online presence, and convert attention into measurable growth for your business.',
    },
    {
      src: '/hero-slide-3.png',
      badge: 'Digital Growth Made Simple',
      title: ['Scale Visibility', 'Across Every Channel', 'With Confidence'],
      description: 'From SEO to social and content strategy, we build a digital presence that stays visible and keeps delivering.',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [heroSlides.length])

  const heroSlide = heroSlides[activeIndex]

  return (
    <div className="dg-hero hero-bg-slider">
      <div className="hero-bg-slide">
        <img key={heroSlide.src} src={heroSlide.src} alt={heroSlide.badge} />
      </div>

      <div className="dg-overlay"></div>

      <div className="container position-relative">
        <div className="hero-copy text-white">
          <span className="hero-badge">{heroSlide.badge}</span>
          <h1 className="fw-bold">
            {heroSlide.title.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="mb-4">{heroSlide.description}</p>
          <div className="hero-btns">
            <a href="/contact" className="btn-hero-primary">
              Get Started Now <i className="bi bi-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
