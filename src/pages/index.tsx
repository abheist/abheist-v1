import { graphql } from 'gatsby'
import React from 'react'
import BlogList from '../components/blog-list'
import HomeHeader from '../components/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TagList from '../components/tag-list'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.postsRemark.nodes
  const tags = data.tagsGroup.group

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <>
          <HomeHeader />
          <TagList tags={tags} />
          <BlogList posts={posts} />
        </>
      )}
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
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
