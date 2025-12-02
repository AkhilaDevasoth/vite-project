import React from 'react'

const categories = [
  { title: 'Occasionwear', description: 'Hand-beaded gowns for ceremonial evenings.' },
  { title: 'Everyday Silk', description: 'Bias cuts that move with you from desk to dinner.' },
  { title: 'Statement Minis', description: 'Structured tailoring with couture-inspired finishes.' },
]

const trends = [
  {
    title: "Architected draping",
    detail: "Inspired by Paris ateliers",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Muted metallics",
    detail: "Champagne, copper, steel",
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sheer overlays",
    detail: "Layered texture, subtle drama",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
]


const featured = [
  {
    title: 'Satin Column',
    price: '$420',
    tag: 'Editor pick',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Feathered Midi',
    price: '$560',
    tag: 'Back in stock',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Velvet Slip',
    price: '$350',
    tag: 'Limited run',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
  },
]

function Home() {
  return (
    <div>
      <section className="hero page-section">
        <article className="hero-card hero-card--accent">
          <p className="pill">New·Season 2025</p>
          <h1 className="section-title">
            Dresses curated for the modern wardrobe.
          </h1>
          <p className="section-description">
            LuxeLoom focuses on timeless silhouettes cut from premium textiles.
            Every release is designed with tailoring houses across Milan,
            London, and Mumbai.
          </p>
          <div className="hero-meta">
            <div>
              <p className="hero-stat">280+</p>
              <small>atelier-crafted gowns</small>
            </div>
            <div>
              <p className="hero-stat">72</p>
              <small>made-to-measure slots</small>
            </div>
          </div>
        </article>
        <article className="hero-card">
          <h3>Stylist insights</h3>
          <p>
            Our in-house stylists collaborate with you to plan complete looks —
            fabrics, accessories, and after-care.
          </p>
          <ul>
            <li>1:1 fittings in our Manhattan atelier</li>
            <li>Worldwide shipping & alterations</li>
            <li>Concierge for events and travel</li>
          </ul>
        </article>
      </section>

      <section className="page-section">
        <p className="pill">Wardrobe foundations</p>
        <h2 className="section-title">Signature categories</h2>
        <p className="section-description">
          Discover the silhouettes our community returns to each season.
        </p>
        <div className="category-grid">
          {categories.map((category) => (
            <article key={category.title} className="category-card">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="badge">Explore →</span>
            </article>
          ))}
        </div>
      </section>

      <section className="trend-grid page-section">
  {trends.map((trend) => (
    <article key={trend.title} className="trend-card">
      <div className="trend-card__image">
        <img
          src={trend.image}
          alt={trend.title}
          className="w-full h-full object-cover rounded-xl"
          loading="lazy"
        />
      </div>
      <span className="badge">Trend report</span>
      <h3>{trend.title}</h3>
      <p>{trend.detail}</p>
    </article>
  ))}
</section>


      <section className="page-section">
        <div className="inset-card">
          <p className="pill" style={{ background: 'rgba(255,255,255,0.15)' }}>
            Private client services
          </p>
          <h2>Bespoke dressing, perfected.</h2>
          <p>
            Schedule a styling appointment for bridal parties, destination
            wardrobes, or gala calendars. We coordinate fittings, textiles, and
            global delivery.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-title">Featured pieces</h2>
        <div className="product-grid">
          {featured.map((item) => (
            <article key={item.title} className="product-card">
              <div className="product-card__image">
                <img src={item.image} alt={`${item.title} dress`} loading="lazy" />
              </div>
              <h3>{item.title}</h3>
              <p className="product-tag">{item.tag}</p>
              <div className="product-card__meta">
                <span>{item.price}</span>
                <button className="btn-secondary" type="button">
                  View
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="cta-panel">
          <h2>Stylist hotline</h2>
          <p>
            Text +1 234 567 890 for instant size checks, fit videos, or to hold
            a runway sample for try-on.
          </p>
          <div className="cta-actions">
            <button className="btn-primary" type="button">
              Book fitting
            </button>
            <button className="btn-secondary" type="button">
              Download lookbook
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home