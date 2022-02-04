import { graphql } from 'gatsby'
import React from 'react'
import BookList from '../components/BookList'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const BookNotes = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const books = data.postsRemark.nodes

  return (
    <Layout title={siteTitle} location={location}>
      <SEO
        title="All Books"
        description="Tiny summary but detailed notes for some of the books I read. Use the ISBN number to find it from your local library or use Amazon link. This page will constantly update as I read more, so bookmark it if you want to check back in a few months."
        // TODO: Need to put the articles image
        // image={{
        //   src: post.frontmatter.image.childImageSharp.fluid.src,
        //   height:
        //     post.frontmatter.image.childImageSharp.fluid.presentationHeight,
        //   width: post.frontmatter.image.childImageSharp.fluid.presentationWidth,
        // }}
        pathname={location.pathname}
      />
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
  {
    site {
      siteMetadata {
        title
      }
    }
    postsRemark: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/book-notes/" } }
      sort: { fields: [frontmatter___date], order: DESC }
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
          published
          amazon
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: [AUTO, AVIF]
                layout: CONSTRAINED
                quality: 50
              )
            }
          }
        }
      }
    }
  }
`
