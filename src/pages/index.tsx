import { graphql } from 'gatsby'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Layout from '../components/Layout'
import PicPageSection from '../components/PicPageSection'
import SEO from '../components/SEO'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const latestPost = data.latestPostRemark.nodes[0]
  const posts = data.postsRemark.nodes
  const latestBook = data.latestBookRemark.nodes[0]
  const books = data.booksRemark.nodes

  const bookNotesSection = {
    heading: 'Book Notes',
    description:
      'Most of my essays are about business, education, and what it means to be a citizen of the Internet. These essays are a record of my intellectual quest to make sense of the world. They’re the diary of my contemplative life.',
    to: '/book-notes',
    linkName: 'All Book Notes',
    latestArticle: {
      pic: latestBook.frontmatter.image,
      overline: 'Latest',
      heading: latestBook.frontmatter.title,
      description:
        latestBook.frontmatter.description || latestBook.frontmatter.excerpt,
      to: latestBook.fields.slug,
    },
    featured: books,
  }

  const articlesSection = {
    heading: 'Book Notes',
    description:
      'Most of my essays are about business, education, and what it means to be a citizen of the Internet. These essays are a record of my intellectual quest to make sense of the world. They’re the diary of my contemplative life.',
    to: '/book-notes',
    linkName: 'All Book Notes',
    latestArticle: {
      pic: latestPost.frontmatter.image,
      overline: 'Latest',
      heading: latestPost.frontmatter.title,
      description:
        latestPost.frontmatter.description || latestPost.frontmatter.excerpt,
      to: latestPost.fields.slug,
    },
    featured: posts,
  }

  return (
    <Layout title={siteTitle}>
      <SEO title="All posts" />
      <HomeHeader />
      <div className="mt-40">
        <PicPageSection data={bookNotesSection} />
        <PicPageSection
          backgroundColor="bg-indigo-50"
          picSide="right"
          data={articlesSection}
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
    latestPostRemark: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { ne: "book" } } }
      limit: 1
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
              sizes(maxWidth: 630) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
    postsRemark: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { ne: "book" }, featured: { eq: true } } }
      limit: 3
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
              sizes(maxWidth: 630) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
    latestBookRemark: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { in: "book" } } }
      limit: 1
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
              sizes(maxWidth: 630) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
    booksRemark: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { in: "book" }, featured: { eq: true } } }
      limit: 3
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
              sizes(maxWidth: 630) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
