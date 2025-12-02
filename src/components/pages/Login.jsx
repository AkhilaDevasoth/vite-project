import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement actual authentication logic
    console.log('Login attempt:', { email, password })
    // For now, redirect to products page after "login"
    navigate('/products')
  }

  return (
    <div className="page-body">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="section-title">Welcome back</h1>
            <p className="section-description">
              Sign in to continue shopping and manage your orders.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <NavLink to="/forgot-password" className="auth-link">
                Forgot password?
              </NavLink>
            </div>

            <button type="submit" className="btn-primary btn-full">
              Sign in
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <NavLink to="/signup" className="auth-link auth-link--accent">
                Create one
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

