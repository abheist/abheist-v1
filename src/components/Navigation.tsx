import { Link } from 'gatsby'
import React from 'react'
import Logo from './Logo'

const Navigation = ({ title }) => {
  return (
    <div className="container px-4 mx-auto">
      <nav className="flex flex-row justify-between w-full py-8">
        <Logo title={title} />
        <div className="flex flex-row items-center justify-end gap-x-32">
          <div>
            <Link to="/articles/" className="text-sm">
              Articles
            </Link>
          </div>
          <div>
            <Link to="/book-notes/" className="text-sm">
              Book Notes
            </Link>
          </div>
          <div>
            <Link to="/me/" className="text-sm">
              About Me
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
