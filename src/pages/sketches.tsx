import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.postsRemark.nodes
  const tags = data.tagsGroup.group

  return (
    <Layout title={siteTitle} location={location}>
      <SEO
        title="Sketches"
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
      About me
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
    postsRemark: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
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
