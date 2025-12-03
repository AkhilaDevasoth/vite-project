import React from 'react'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import About from '../pages/About'
import Lookbook from '../pages/Lookbook'
import Journal from '../pages/Journal'
import GiftCards from '../pages/GiftCards'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProductDetail from '../pages/ProductDetail'

import { Routes, Route } from 'react-router-dom'
function Routers() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/lookbook' element={<Lookbook />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/gift-cards' element={<GiftCards />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/product/:slug' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default Routers
