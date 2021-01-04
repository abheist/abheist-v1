import { Link } from 'gatsby'
import React from 'react'

const Navigation = ({ title }) => {
  return (
    <nav>
      <Link to="/">{title}</Link>
    </nav>
  )
}

export default Navigation
