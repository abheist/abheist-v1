import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import Newsletter from './Newletter'

const Layout = ({ location, title, children }) => {
  return (
    <>
      <Navigation title={title} />
      <main>{children}</main>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Layout
