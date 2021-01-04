import React from 'react'
import { Link } from 'gatsby'
import { GlobalStyles } from 'twin.macro'

const Layout = ({ location, title, children }) => {
  const header = (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  )

  return (
    <div>
      <GlobalStyles />
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        &copy; {new Date().getFullYear()}, Abhishek Kumar Singh
        {` `}🤘
      </footer>
    </div>
  )
}

export default Layout
