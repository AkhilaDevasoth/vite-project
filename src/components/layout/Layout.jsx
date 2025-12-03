import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../routers/Routers'
import { BrowserRouter as Router } from 'react-router-dom'

function Layout() {
  return (
    <div className="app-shell">
      <Router>
        <Header />
        <main className="page-body">
          <Routers />
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default Layout
