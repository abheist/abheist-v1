import { Link } from 'gatsby'
import React from 'react'

const BlogNav = ({ previous, next }) => {
  return (
    <div className="container px-24 mx-auto">
      <nav className="px-8 py-6 pb-4 border border-gray-500 rounded-md ">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link
                to={previous.fields.slug}
                rel="prev"
                className="hover:text-indigo-primary"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                to={next.fields.slug}
                rel="next"
                className="hover:text-indigo-primary"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default BlogNav