import React from 'react'

const menu = [
  'About',
  'Lookbook',
  'Journal',
  'Gift cards',
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>LuxeLoom Atelier</h3>
          <p>Curated dresses for elevated evenings.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {menu.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <p>118 Mercer Street<br />New York, NY</p>
          <p>Open 10am - 8pm</p>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p>Weekly styling notes and private drops.</p>
        </div>
      </div>
      <small>© {new Date().getFullYear()} LuxeLoom. All rights reserved.</small>
    </footer>
  )
}

export default Footer