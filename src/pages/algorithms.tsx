import { graphql } from 'gatsby'
import React from 'react'
import AlgoList from '../components/AlgoList'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Algos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.algosRemark.nodes

  return (
    <Layout title={siteTitle} location={location}>
      <SEO
        title="Algorithms"
        description="All the algorithms which I'm learning can be found here, from easy, medium to hard."
        image={{
          src:
            data.pageImage.childImageSharp.gatsbyImageData.images.fallback.src,
        }}
        pathname={location.pathname}
      />
      {posts.length === 0 ? (
        <p>No Algorithms posts found.</p>
      ) : (
        <>
          <AlgoList posts={posts} />
        </>
      )}
    </Layout>
  )
}

export default Algos

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    pageImage: file(absolutePath: { regex: "/algos.png/" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 95
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            color: "#5945e4"
          }
          placeholder: TRACED_SVG
          layout: FULL_WIDTH
        )
      }
    }
    algosRemark: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/algos/" } }
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
          difficulty
          category
          image {
            childImageSharp {
              gatsbyImageData(
                tracedSVGOptions: {
                  turnPolicy: TURNPOLICY_MAJORITY
                  color: "#5945e4"
                }
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  }
`
