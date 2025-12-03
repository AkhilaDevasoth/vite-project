import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would call your auth API
    console.log('Login attempt:', { email, password })
    // For now, send user to products after "login"
    navigate('/products')
  }

  return (
    <section className="page-section">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="section-title">Welcome back</h1>
            <p className="section-description">
              Sign in to continue ordering your favourite dresses.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn-primary btn-full">
              Sign in
            </button>
          </form>

          <p className="auth-footer">
            New to LuxeLoom?{' '}
            <NavLink to="/signup" className="auth-link">
              Create an account
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login


