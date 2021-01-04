import React from 'react'
import { GlobalStyles } from 'twin.macro'
import Footer from './footer'
import Navigation from './navigation'
import Newsletter from './newletter'

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <GlobalStyles />
      <Navigation title={title} />
      <main>{children}</main>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Layout
