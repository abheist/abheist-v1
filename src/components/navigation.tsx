import { Link } from 'gatsby'
import React from 'react'

const Navigation = ({ title }) => {
  return (
    <nav>
      <Link to="/" className="font-serif">
        {title}
      </Link>
    </nav>
  )
}

export default Navigation
