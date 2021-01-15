import { Link } from 'gatsby'
import React from 'react'
import Logo from './Logo'

const Navigation = ({ title }) => {
  const activeStyle = 'text-indigo-500 font-bold'

  function pathIncludes(word: string) {
    return window.location.href.includes(word) ? activeStyle : ''
  }

  const pages = [
    { name: 'Articles', path: '/articles/' },
    { name: 'Book Notes', path: '/book-notes/' },
    { name: 'About Me', path: '/me/' },
  ]

  return (
    <div className="container px-4 mx-auto">
      <nav className="flex flex-row justify-between w-full py-8">
        <Logo title={title} />
        <div className="flex flex-row items-center justify-end gap-x-32">
          {pages.map(page => (
            <div>
              <Link
                to={page.path}
                className={`text-sm ${pathIncludes(page.path)}`}
              >
                {page.name}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Navigation
