import React from 'react'
import Navigation from './Navigation'
import Community from './Community'
import Products from './Products'
import OurClients from './OurClients'
import Footer from './Footer'

function index() {
  return (
    <div>
    <Navigation/>
    <Community/>
    <Products/>
    <OurClients/>
    <Footer/>
    </div>
  )
}

export default index