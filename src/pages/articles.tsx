import { graphql } from 'gatsby'
import React from 'react'
import BlogList from '../components/BlogList'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Articles = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.postsRemark.nodes
  const tags = data.tagsGroup.group

  return (
    <Layout title={siteTitle}>
      <SEO title="All posts" />
      {posts.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <>
          <BlogList posts={posts} tags={tags} />
        </>
      )}
    </Layout>
  )
}

export default Articles

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    postsRemark: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { ne: "book" } } }
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
              fluid {
                srcSet
                tracedSVG
                aspectRatio
                src
                sizes
              }
            }
          }
        }
      }
    }
    tagsGroup: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
