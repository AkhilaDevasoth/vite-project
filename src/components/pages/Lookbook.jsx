import React from 'react'

const looks = [
  { title: 'City gala', detail: 'Satin column with a sharp blazer and minimal gold.' },
  { title: 'Destination wedding', detail: 'Feathered midi in muted sunset tones.' },
  { title: 'Gallery opening', detail: 'Velvet slip layered with a sheer organza coat.' },
]

function Lookbook() {
  return (
    <section className="page-section">
      <p className="pill">Lookbook</p>
      <h1 className="section-title">Seasonal styling ideas</h1>
      <p className="section-description">
        A few ways our community is wearing LuxeLoom this season. Use these as
        starting points with your stylist.
      </p>
      <div className="category-grid">
        {looks.map((look) => (
          <article key={look.title} className="category-card">
            <h3>{look.title}</h3>
            <p>{look.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Lookbook


