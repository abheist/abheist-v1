import { Link } from 'gatsby'
import React from 'react'

const Navigation = ({ title }) => {
  return (
    <div className="container mx-auto bg-red-500">
      <nav>
        <Link to="/" className="font-serif">
          {title}
        </Link>
      </nav>
    </div>
  )
}

export default Navigation
