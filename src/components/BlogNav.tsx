import { Link } from 'gatsby'
import React from 'react'
import Container from './Container'

const BlogNav = ({ previous, next, parent = '' }) => {
  return (
    <Container className="lg:px-24">
      <nav className="rounded-md border border-gray-500">
        <div className="flex justify-center md:flex-row">
          {previous && (
            <Link
              to={parent + previous.fields.slug}
              rel="prev"
              className="block flex-grow rounded-md px-8 py-6 hover:bg-yellow-50 hover:text-indigo-primary"
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link
              to={parent + next.fields.slug}
              rel="next"
              className="block flex-grow rounded-md px-8 py-6 text-right hover:bg-yellow-50 hover:text-indigo-primary"
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
