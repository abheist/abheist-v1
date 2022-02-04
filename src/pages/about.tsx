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
          src: headerStaticImage.images.fallback.src,
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
  {
    site {
      siteMetadata {
        title
      }
    }
    headerImages: allFile(filter: { dir: { regex: "/me-header/g" } }) {
      edges {
        node {
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
    unsplashPics: allFile(filter: { dir: { regex: "/unsplash-pics/g" } }) {
      edges {
        node {
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
    postsRemark: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/blogs/" }
        frontmatter: { featured: { eq: true } }
      }
      limit: 3
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
          featured
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
