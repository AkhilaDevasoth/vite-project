import React from 'react'

const catalog = [
  {
    name: 'Aurora Silk Gown',
    color: 'Pearl',
    price: '$640',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=640&q=80',
  },
  {
    name: 'Solstice Midi',
    color: 'Copper',
    price: '$480',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=640&q=80',
  },
  {
    name: 'Noir Slip',
    color: 'Charcoal',
    price: '$360',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=640&q=80',
  },
  {
    name: 'Marais Mini',
    color: 'Rosewood',
    price: '$520',
    image: 'https://images.unsplash.com/photo-1494871262121-49703927c794?auto=format&fit=crop&w=640&q=80',
  },
  {
    name: 'Harbor Column',
    color: 'Seafoam',
    price: '$410',
    image: 'https://images.unsplash.com/photo-1454972699295-5ebc0fb0e95b?auto=format&fit=crop&w=640&q=80',
  },
  {
    name: 'Muse Wrap Dress',
    color: 'Desert',
    price: '$395',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=640&q=80',
  },
]

function Products() {
  return (
    <section className="page-section">
      <p className="pill">Ready to ship</p>
      <h1 className="section-title">The dress catalogue</h1>
      <p className="section-description">
        Each silhouette is produced in small batches to maintain quality.
        Custom lengths and color stories are available through our atelier.
      </p>
      <div className="product-grid">
        {catalog.map((item) => (
          <article key={item.name} className="product-card">
            <div className="product-card__image">
              <img src={item.image} alt={`${item.name} dress`} loading="lazy" />
            </div>
            <h3>{item.name}</h3>
            <p className="product-tag">Color · {item.color}</p>
            <div className="product-card__meta">
              <span>{item.price}</span>
              <button className="btn-primary" type="button">
                Add
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Products