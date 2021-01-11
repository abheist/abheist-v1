import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import type {} from 'styled-components/cssprop'
import Footer from './footer'
import mdxComponent from './mdx'
import Navigation from './navigation'
import Newsletter from './Newsletter'

const Layout = ({ title, children }) => {
  return (
    <>
      <Navigation title={title} />
      <MDXProvider components={mdxComponent}>
        <main>{children}</main>
      </MDXProvider>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Layout
