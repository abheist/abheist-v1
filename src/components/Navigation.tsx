import { Link } from 'gatsby'
import React from 'react'
import Container from './Container'
import Logo from './Logo'

const Navigation = ({ title, location }) => {
  const activeStyle = 'text-indigo-700 font-bold bg-indigo-50'

  function pathIncludes(word: string) {
    return location.pathname.includes(word) ? activeStyle : ''
  }

  const pages = [
    { name: 'Articles', path: '/articles/' },
    { name: 'Book Notes', path: '/book-notes/' },
    { name: 'About Me', path: '/about/' },
  ]

  return (
    <Container>
      <nav className="flex w-full flex-col items-center justify-between py-8 md:flex-row">
        <Logo title={title} />
        <div className="mt-8 flex flex-row items-center justify-end gap-x-8 md:mt-0 lg:gap-x-32">
          {pages.map(page => (
            <div key={page.name}>
              <Link
                to={page.path}
                className={`rounded-md py-2 px-4 text-sm hover:bg-indigo-50 ${pathIncludes(
                  page.path
                )}`}
              >
                {page.name}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </Container>
  )
}

export default Navigation
