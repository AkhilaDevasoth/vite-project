import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    // Here you would call your signup API
    console.log('Signup attempt:', form)
    navigate('/products')
  }

  return (
    <section className="page-section">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="section-title">Create your account</h1>
            <p className="section-description">
              Save your details and order dresses faster next time.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                minLength={8}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat your password"
                required
              />
            </div>

            <button type="submit" className="btn-primary btn-full">
              Create account
            </button>
          </form>

          <p className="auth-footer">
            Already have an account?{' '}
            <NavLink to="/login" className="auth-link">
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Signup


