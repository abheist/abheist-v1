import React from "react"
import { Link } from "gatsby"
import { GlobalStyles } from "twin.macro"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <GlobalStyles />
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        &copy; {new Date().getFullYear()}, Abhishek Kumar Singh
        {` `}🤘
      </footer>
    </div>
  )
}

export default Layout
