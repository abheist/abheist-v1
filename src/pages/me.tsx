import { graphql } from 'gatsby'
import React from 'react'
import AboutMe from '../components/AboutMe'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Me = ({ data, location }) => {
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
    <Layout title={siteTitle}>
      <SEO title="All posts" />
      <AboutMe posts={posts} instaImages={instaImages} />
    </Layout>
  )
}

export default Me

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    postsRemark: allMdx(
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
