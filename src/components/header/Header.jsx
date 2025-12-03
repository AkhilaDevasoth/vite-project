import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { label: 'Home', to: '/' },
  { label: 'New Arrivals', to: '/products' },
  { label: 'Styling', to: '/contact' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand */}
        <div className="brand">
          <Logo />
          <div>
            <p className="brand-name">LuxeLoom</p>
            <p className="brand-tagline">Dress Boutique</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="header-cta">
          <NavLink to="/login" className="nav-link">
            Sign in
          </NavLink>
          <NavLink to="/cart" className="btn-circle">
            Bag
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header