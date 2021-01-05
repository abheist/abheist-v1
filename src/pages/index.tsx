import { graphql } from 'gatsby'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Layout from '../components/Layout'
import PicPageSection from '../components/PicPageSection'
import SEO from '../components/Seo'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.postsRemark.nodes
  const tags = data.tagsGroup.group

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <HomeHeader />
      <PicPageSection
        picSide="left"
        pic="./profile-pic.jpg"
        picOverline="Latest"
        picHeading="Atomic Habits"
        picBody="I love exploring ideas, strategies & tools to develop a good software. Expore more about happiness, health and more product life."
        picLinkTo="/"
        sectionHeading="Book Notes"
        sectionBody="Most of my essays are about business, education, and what it means to be a citizen of the Internet. These essays are a record of my intellectual quest to make sense of the world. They’re the diary of my contemplative life."
        sectionLinkName="All Book Notes"
        sectionLinkTo="/"
      />
      <PicPageSection
        picSide="right"
        pic="./profile-pic.jpg"
        picOverline="Latest"
        picHeading="Material Headers"
        picBody="I love exploring ideas, strategies & tools to develop a good software. Expore more about happiness, health and more product life."
        picLinkTo="/"
        sectionHeading="Development Articles"
        sectionBody="Most of my essays are about business, education, and what it means to be a citizen of the Internet. These essays are a record of my intellectual quest to make sense of the world. They’re the diary of my contemplative life."
        sectionLinkName="All Articles"
        sectionLinkTo="/"
      />
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
