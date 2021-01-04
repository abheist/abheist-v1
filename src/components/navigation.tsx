import { Link } from 'gatsby'
import React from 'react'

const Navigation = ({ title }) => {
  return (
    <div className="container mx-auto">
      <nav className="flex flex-row justify-between w-full">
        <div>
          <Link
            to="/"
            className="flex-1 font-serif text-4xl font-black leading-loose"
          >
            {title}
          </Link>
        </div>
        <div className="flex flex-row items-center justify-end gap-x-32">
          <div>
            <Link to="/book-notes" className="text-sm">
              Book Notes
            </Link>
          </div>
          <div>
            <Link to="/articles" className="text-sm">
              Articles
            </Link>
          </div>
          <div>
            <Link to="/me" className="text-sm">
              About Me
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
