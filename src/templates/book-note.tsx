import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import { AiOutlineBarcode } from 'react-icons/ai'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import AmazonButton from '../components/AmazonButton'
import Bio from '../components/Bio'
import BlogNav from '../components/BlogNav'
import Container from '../components/Container'
import ImageWithShadow from '../components/ImageWithShadow'
import Layout from '../components/Layout'
import NameIcon from '../components/NameIcon'
import SEO from '../components/SEO'
import SocialShare from '../components/SocialShare'
import { H2, H6, Subtitle2 } from '../components/Typography'

const BookNoteTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next, slug } = pageContext

  const getStars = times => {
    let stars = []
    let i = parseInt(times)
    while (i) {
      stars.push(
        <BsStarFill key={i} className="fill-current text-yellow-500" />
      )
      i--
    }
    let remaining = parseFloat(times) - parseInt(times)
    if (remaining) {
      stars.push(
        <BsStarHalf key={times} className="fill-current text-yellow-500" />
      )
    }
    let j = 5
    while (j > parseFloat(times) + remaining) {
      stars.push(<BsStar key={j} className="fill-current text-yellow-500" />)
      j--
    }
    return stars
  }

  return (
    <Layout title={siteTitle} location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={{
          src:
            post.frontmatter.bannerImage?.childImageSharp?.gatsbyImageData
              .images.fallback.src ||
            post.frontmatter.image?.childImageSharp?.gatsbyImageData.images
              .fallback.src,
          height:
            1200 *
              post.frontmatter.bannerImage?.childImageSharp?.gatsbyImageData
                .height ||
            post.frontmatter.image?.childImageSharp?.gatsbyImageData.height,
          width:
            1200 *
              post.frontmatter.bannerImage?.childImageSharp?.gatsbyImageData
                .width ||
            post.frontmatter.image?.childImageSharp?.gatsbyImageData.width,
        }}
        pathname={location.pathname}
      />
      <Container>
        <article itemScope itemType="http://schema.org/Article">
          <header className="py-16">
            <H2>{post.frontmatter.title}</H2>
            <H6 className="mt-6">{post.frontmatter.description}</H6>
            <div className="mt-8 flex flex-col gap-x-12 lg:flex-row">
              <ImageWithShadow
                style={{ height: '400px', width: '270px' }}
                image={post.frontmatter.image.childImageSharp.gatsbyImageData}
              />
              <div className="mt-8 flex w-full flex-col justify-between lg:mt-0">
                <div>
                  <p className="font-serif text-xl font-bold">
                    Favourite Quote
                  </p>
                  <div className="prose mt-4">
                    <blockquote>{post.frontmatter.favouriteQuote}</blockquote>
                  </div>
                  <div className="mt-8">
                    <Subtitle2 className="font-bold">
                      How strongly I recommending
                    </Subtitle2>
                    <div className="mt-2 flex flex-row gap-x-1">
                      {getStars(post.frontmatter.rating)}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex w-full flex-col items-start gap-x-4 sm:flex-row sm:items-center sm:justify-between">
                  <AmazonButton
                    className="order-2 mt-8 sm:order-1 sm:mt-0"
                    link={post?.frontmatter?.amazon}
                  />
                  <div className="order-1 mt-8 flex flex-row gap-x-12 sm:order-2 sm:mt-0">
                    <NameIcon
                      name="ISBN-10"
                      icon={<AiOutlineBarcode className="text-4xl" />}
                      value={post.frontmatter.isbn10}
                    />
                    <NameIcon
                      name="ISBN-13"
                      icon={<AiOutlineBarcode className="text-4xl" />}
                      value={post.frontmatter.isbn13}
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="wrap prose prose-sm prose-indigo mx-auto max-w-3xl px-4 md:prose-lg">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
          <SocialShare title={post.frontmatter.title} location={location} />
        </article>
      </Container>
      <BlogNav previous={previous} next={next} parent="/book-notes" />
      <Bio />
    </Layout>
  )
}

export default BookNoteTemplate

export const pageQuery = graphql`
  query BookNoteBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      headings {
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        isbn10
        isbn13
        rating
        amazon
        favouriteQuote
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              tracedSVGOptions: {
                turnPolicy: TURNPOLICY_MAJORITY
                color: "#5945e4"
              }
              formats: [AUTO, AVIF]
              layout: CONSTRAINED
              quality: 50
            )
          }
        }
        bannerImage {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              tracedSVGOptions: {
                turnPolicy: TURNPOLICY_MAJORITY
                color: "#5945e4"
              }
              formats: [AUTO, AVIF]
              layout: CONSTRAINED
              quality: 50
            )
          }
        }
      }
    }
  }
`
