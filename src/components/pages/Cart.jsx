import React from 'react'

const cartItems = [
  { name: 'Aurora Silk Gown', size: 'US 6', color: 'Pearl', price: 640 },
  { name: 'Marais Mini', size: 'US 4', color: 'Rosewood', price: 520 },
]

function Cart() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const shipping = 35
  const total = subtotal + shipping

  return (
    <section className="page-section cart-grid">
      <div className="cart-items">
        <h2 className="section-title">Your selections</h2>
        {cartItems.map((item) => (
          <div key={item.name} className="cart-row">
            <div>
              <strong>{item.name}</strong>
              <p className="product-tag">
                Size {item.size} · {item.color}
              </p>
            </div>
            <span>${item.price}</span>
          </div>
        ))}
      </div>

      <aside className="cart-summary">
        <h3>Order summary</h3>
        <div className="cart-row">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="cart-row">
          <span>Insured shipping</span>
          <span>${shipping}</span>
        </div>
        <div className="cart-total">
          <span>Total</span>
          <span>${total}</span>
        </div>
        <button className="btn-primary" type="button" style={{ width: '100%' }}>
          Continue to checkout
        </button>
      </aside>
    </section>
  )
}

export default Cart