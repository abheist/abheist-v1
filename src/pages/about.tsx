import { graphql } from 'gatsby'
import React from 'react'
import AboutMe from '../components/AboutMe'
import Layout from '../components/Layout'
import { getFluid } from '../components/MeHeader'
import SEO from '../components/SEO'

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.postsRemark.nodes
  const headerImages = data.headerImages.edges
  const unsplashPics = data.unsplashPics.edges

  let headerStaticImage = getFluid(headerImages, 'me-header-static')

  return (
    <Layout title={siteTitle} location={location}>
      <SEO
        title="About"
        description="Product Developer and Designer who is passionate about the intersection of design and technology. And, how it can be used to make a positive impact on earth and its being."
        image={{
          src: headerStaticImage.src,
        }}
        pathname={location.pathname}
      />
      <AboutMe
        posts={posts}
        picsGrid={unsplashPics}
        headerImages={headerImages}
      />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    headerImages: allFile(filter: { dir: { regex: "/me-header/g" } }) {
      edges {
        node {
          childImageSharp {
            fluid(
              traceSVG: { turnPolicy: TURNPOLICY_MAJORITY, color: "#5945e4" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
              originalName
              presentationHeight
              presentationWidth
            }
          }
        }
      }
    }
    unsplashPics: allFile(filter: { dir: { regex: "/unsplash-pics/g" } }) {
      edges {
        node {
          childImageSharp {
            fluid(
              traceSVG: { turnPolicy: TURNPOLICY_MAJORITY, color: "#5945e4" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
