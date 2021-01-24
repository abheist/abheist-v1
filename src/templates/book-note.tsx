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

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next, slug } = pageContext

  const getStars = times => {
    let stars = []
    let i = parseInt(times)
    while (i) {
      stars.push(
        <BsStarFill key={i} className="text-yellow-500 fill-current" />
      )
      i--
    }
    let remaining = parseFloat(times) - parseInt(times)
    if (remaining) {
      stars.push(
        <BsStarHalf key={times} className="text-yellow-500 fill-current" />
      )
    }
    let j = 5
    while (j > parseFloat(times) + remaining) {
      stars.push(<BsStar key={j} className="text-yellow-500 fill-current" />)
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
          src: post.frontmatter.image?.childImageSharp.fluid.src,
          height:
            post.frontmatter.image?.childImageSharp.fluid.presentationHeight,
          width:
            post.frontmatter.image?.childImageSharp.fluid.presentationWidth,
        }}
        pathname={location.pathname}
      />
      <Container>
        <article itemScope itemType="http://schema.org/Article">
          <header className="py-16">
            <H2>{post.frontmatter.title}</H2>
            <H6 className="mt-6">{post.frontmatter.description}</H6>
            <div className="flex flex-col mt-8 lg:flex-row gap-x-12">
              <ImageWithShadow
                style={{ height: '400px', width: '270px' }}
                fluid={post.frontmatter.image.childImageSharp.fluid}
              />
              <div className="flex flex-col justify-between w-full mt-8 lg:mt-0">
                <div>
                  <p className="font-serif text-xl font-bold">
                    Favourite Quote
                  </p>
                  <div className="mt-4 prose">
                    <blockquote>{post.frontmatter.favouriteQuote}</blockquote>
                  </div>
                  <div className="mt-8">
                    <Subtitle2 className="font-bold">
                      How strongly I recommending
                    </Subtitle2>
                    <div className="flex flex-row mt-2 gap-x-1">
                      {getStars(post.frontmatter.rating)}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full mt-4 sm:flex-row sm:items-center sm:justify-between gap-x-4">
                  <AmazonButton
                    className="order-2 mt-8 sm:order-1 sm:mt-0"
                    link={post?.frontmatter?.amazon}
                  />
                  <div className="flex flex-row order-1 mt-8 gap-x-12 sm:order-2 sm:mt-0">
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

          <div className="max-w-3xl px-4 mx-auto prose-sm prose md:prose-lg prose-indigo wrap">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
          <SocialShare title={post.frontmatter.title} location={location} />
        </article>
      </Container>
      <BlogNav previous={previous} next={next} />
      <Bio />
    </Layout>
  )
}

export default BlogPostTemplate

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
`
