import { Link } from 'gatsby'
import React from 'react'
import Container from './Container'

const BlogNav = ({ previous, next }) => {
  return (
    <Container className="lg:px-24">
      <nav className="border border-gray-500 rounded-md">
        <div className="flex md:flex-row justify-center">
          {previous && (
            <Link
              to={previous.fields.slug}
              rel="prev"
              className="hover:text-indigo-primary px-8 py-6 hover:bg-yellow-50 block flex-grow rounded-md"
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link
              to={next.fields.slug}
              rel="next"
              className="hover:text-indigo-primary px-8 py-6 hover:bg-yellow-50 block flex-grow rounded-md"
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
