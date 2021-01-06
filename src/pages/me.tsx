import { graphql } from 'gatsby'
import React from 'react'
import AboutMe from '../components/AboutMe'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.postsRemark.nodes

  const instaImages = [
    './me0.jpeg',
    './me1.jpeg',
    './me2.jpeg',
    './me3.jpeg',
    './me4.jpeg',
    './me5.jpeg',
    './me6.jpeg',
    './me7.jpeg',
    './me8.jpeg',
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <AboutMe posts={posts} instaImages={instaImages} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    postsRemark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`
