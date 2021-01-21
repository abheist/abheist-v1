import { graphql } from 'gatsby'
import React from 'react'
import { getLatestBook } from '../components/BookList'
import BookPageSection from '../components/BookPageSection'
import HomeHeader from '../components/HomeHeader'
import Layout from '../components/Layout'
import PicPageSection from '../components/PicPageSection'
import SEO from '../components/SEO'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const latestPost = data.latestPostRemark.nodes[0]
  const posts = data.postsRemark.nodes
  let books = data.booksRemark.nodes
  const latestBook = getLatestBook(books)

  books = books.filter(
    (book: any) => book.fields.slug !== latestBook.fields.slug
  )

  const bookNotesSection = {
    heading: 'Book Notes',
    description:
      'Tiny summary but detailed notes for each book, contains the gist of every book with best quotes and essence in just few words.',
    to: '/book-notes/',
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
    heading: 'Articles',
    description:
      "Most of my articles are about Software Design, Development, business, education and life. These articles are a record of my intellectual quest to make sense of the things I'm learning. They’re the diary of my contemplative life.",
    to: '/articles/',
    linkName: 'All Articles',
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
    <Layout title={siteTitle} location={location}>
      <SEO
        title="Home"
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
      <HomeHeader avatar={data.avatar} />
      <div className="mt-40">
        <PicPageSection data={articlesSection} />
        <BookPageSection
          data={bookNotesSection}
          picSide="right"
          backgroundColor="bg-indigo-50"
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
    avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
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
    }
    booksRemark: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { in: "book" }, featured: { eq: true } } }
      limit: 5
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
          published
          image {
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
    }
  }
`
