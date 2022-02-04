import { Link } from 'gatsby'
import React from 'react'
import Container from './Container'

const BlogNav = ({ previous, next, parent = '' }) => {
  return (
    <Container className="lg:px-24">
      <nav className="border border-gray-500 rounded-md">
        <div className="flex justify-center md:flex-row">
          {previous && (
            <Link
              to={parent + previous.fields.slug}
              rel="prev"
              className="flex-grow block px-8 py-6 rounded-md hover:text-indigo-primary hover:bg-yellow-50"
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link
              to={parent + next.fields.slug}
              rel="next"
              className="flex-grow block px-8 py-6 text-right rounded-md hover:text-indigo-primary hover:bg-yellow-50"
            >
              {next.frontmatter.title} →
            </Link>
          )}
        </div>
      </nav>
    </Container>
  )
}

export default BlogNav
