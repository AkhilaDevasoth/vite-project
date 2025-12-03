import React from 'react'
import { NavLink } from 'react-router-dom'

const menu = [
  { label: 'About', to: '/about' },
  { label: 'Lookbook', to: '/lookbook' },
  { label: 'Journal', to: '/journal' },
  { label: 'Gift cards', to: '/gift-cards' },
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
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <p>
            118 Mercer Street
            <br />
            New York, NY
          </p>
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