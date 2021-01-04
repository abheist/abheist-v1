import React from 'react'
import { GlobalStyles } from 'twin.macro'
import Footer from './Footer'
import Navigation from './Navigation'
import Newsletter from './Newletter'

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
