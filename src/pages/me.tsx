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
    <Layout title={siteTitle} location={location}>
      <SEO
        title="About"
        description="Product Developer and Designer who is passionate about the intersection of design and technology. And, how it can be used to make a positive impact on earth and its being."
        // TODO: Need to put the articles image
        // image={{
        //   src: post.frontmatter.image.childImageSharp.fluid.src,
        //   height:
        //     post.frontmatter.image.childImageSharp.fluid.presentationHeight,
        //   width: post.frontmatter.image.childImageSharp.fluid.presentationWidth,
        // }}
        pathname={location.pathname}
      />
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
            presentationHeight
            presentationWidth
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
              presentationHeight
              presentationWidth
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
