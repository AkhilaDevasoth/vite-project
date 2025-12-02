import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement actual registration logic
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    console.log('Signup attempt:', formData)
    // For now, redirect to products page after "signup"
    navigate('/products')
  }

  return (
    <div className="page-body">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="section-title">Create your account</h1>
            <p className="section-description">
              Join LuxeLoom to start ordering beautiful dresses and enjoy
              exclusive styling services.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                required
                minLength={8}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>
                  I agree to the{' '}
                  <a href="/terms" className="auth-link">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="auth-link">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            <button type="submit" className="btn-primary btn-full">
              Create account
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <div className="auth-footer">
            <p>
              Already have an account?{' '}
              <NavLink to="/login" className="auth-link auth-link--accent">
                Sign in
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

