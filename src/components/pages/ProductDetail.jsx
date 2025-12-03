import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function ProductDetail() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { slug } = useParams()

  const product = state?.product

  if (!product) {
    return (
      <section className="page-section">
        <h1 className="section-title">Product preview</h1>
        <p className="section-description">
          This preview was opened without product data. Please return to the
          home page and open a dress from Featured pieces.
        </p>
        <button
          type="button"
          className="btn-secondary"
          onClick={() => navigate('/')}
        >
          Back to home
        </button>
        <p className="product-tag">Code: {slug}</p>
      </section>
    )
  }

  return (
    <section className="page-section product-detail">
      <div className="product-detail__image">
        <img src={product.image} alt={`${product.title} dress`} />
      </div>
      <div className="product-detail__info">
        <p className="pill">Featured piece</p>
        <h1 className="section-title">{product.title}</h1>
        <p className="product-tag">{product.tag}</p>
        <p className="product-detail__price">{product.price}</p>
        <p>
          A closer look at the texture, drape, and cut of <strong>{product.title}</strong>.
          Use this view before adding the dress to your fitting or cart.
        </p>
        <div className="cta-actions">
          <button type="button" className="btn-primary">
            Add to bag
          </button>
          <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail


