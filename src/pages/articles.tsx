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
    <Layout title={siteTitle} location={location}>
      <SEO
        title="All articles"
        description="Sort and detailed notes of my learnings of software development, design, life and world. They are the diary or record of my contemplative life. This page will constantly update as my second brain, so bookmark it if you want to check back in a few months."
        // TODO: Need to put the articles image
        // image={{
        //   src: post.frontmatter.image.childImageSharp.fluid.src,
        //   height:
        //     post.frontmatter.image.childImageSharp.fluid.presentationHeight,
        //   width: post.frontmatter.image.childImageSharp.fluid.presentationWidth,
        // }}
        pathname={location.pathname}
      />
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
  {
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
    tagsGroup: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
