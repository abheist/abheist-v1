import { graphql } from 'gatsby'
import React from 'react'
import BookList from '../components/BookList'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const BookNotes = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const books = data.postsRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {books.length === 0 ? (
        <p>No blog books found.</p>
      ) : (
        <BookList books={books} />
      )}
    </Layout>
  )
}

export default BookNotes

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    postsRemark: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { in: "book" } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          image {
            childImageSharp {
              sizes(maxWidth: 630) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
