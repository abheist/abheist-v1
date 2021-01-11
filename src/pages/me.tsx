import { graphql } from 'gatsby'
import React from 'react'
import AboutMe from '../components/AboutMe'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Me = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.postsRemark.nodes
  const headerImage = data.headerImage.edges[0].node.fluid
  const unsplashPics = data.unsplashPics.edges

  return (
    <Layout title={siteTitle}>
      <SEO title="All posts" />
      <AboutMe
        posts={posts}
        picsGrid={unsplashPics}
        headerImage={headerImage}
      />
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
    headerImage: allImageSharp(
      filter: { fixed: { originalName: { eq: "me-header-1.png" } } }
    ) {
      edges {
        node {
          id
          fluid {
            src
            srcSet
            aspectRatio
            sizes
            tracedSVG
            base64
            srcWebp
            srcSetWebp
          }
        }
      }
    }
    unsplashPics: allFile(filter: { dir: { regex: "/unsplash-pics/g" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
              srcSet
              srcSetWebp
              tracedSVG
              base64
              aspectRatio
              sizes
            }
          }
        }
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
