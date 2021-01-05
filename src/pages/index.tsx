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

  const bookNotesSection = {
    heading: 'Book Notes',
    description:
      'Most of my essays are about business, education, and what it means to be a citizen of the Internet. These essays are a record of my intellectual quest to make sense of the world. They’re the diary of my contemplative life.',
    to: '/',
    linkName: 'All Book Notes',
    latestArticle: {
      pic: './book-notes.jpg',
      overline: 'Latest',
      heading: 'Atomic Habits',
      description:
        'I love exploring ideas, strategies & tools to develop a good software. Expore more about happiness, health and more product life.',
      to: '/',
    },
    featured: [
      {
        pic: './1.jpeg',
        heading: 'Pracatically generated content for this page',
        excerpt:
          'Hello metaDescription posts found route for this page with content for this page with content for',
      },
      {
        pic: './2.jpeg',
        heading: 'Pracatically generated content for this page',
        excerpt:
          'Hello metaDescription posts found route for this page with content for this page with content for',
      },
      {
        pic: './3.jpeg',
        heading: 'Pracatically generated content for this page',
        excerpt:
          'Hello metaDescription posts found route for this page with content for this page with content for',
      },
    ],
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <HomeHeader />
      <div className="mt-40">
        <PicPageSection data={bookNotesSection} />
        <PicPageSection
          backgroundColor="bg-indigo-50"
          picSide="right"
          data={bookNotesSection}
        />
      </div>
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
