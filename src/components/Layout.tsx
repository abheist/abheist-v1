import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import type {} from 'styled-components/cssprop'
import Footer from './Footer'
import mdxComponent from './mdx'
import Navigation from './Navigation'
import Newsletter from './Newsletter'

const Layout = ({ title, children, background = '' }) => {
  return (
    <div className={background}>
      <Navigation title={title} />
      <MDXProvider components={mdxComponent}>
        <main>{children}</main>
      </MDXProvider>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Layout
