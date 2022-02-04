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

  let posts = data.postsRemark.nodes
  const latestPost = posts[0]
  posts = posts.slice(1)

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
        image={{
          src: data.avatar.childImageSharp.gatsbyImageData.images.fallback.src,
        }}
        pathname={location.pathname}
      />
      <HomeHeader avatar={data.avatar} />
      <div className="mt-40">
        <PicPageSection data={articlesSection} />
        <BookPageSection
          data={bookNotesSection}
          backgroundColor="bg-indigo-50"
        />
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 95
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          layout: FULL_WIDTH
        )
      }
    }
    postsRemark: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/blogs/" }
        frontmatter: { featured: { eq: true } }
      }
      limit: 4
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
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
    booksRemark: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/book-notes/" }
        frontmatter: { featured: { eq: true } }
      }
      limit: 5
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
          published
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  }
`
