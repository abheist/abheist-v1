import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import { AiOutlineBarcode } from 'react-icons/ai'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import AmazonButton from '../components/AmazonButton'
import { HitCounter } from '../components/HitCounter'
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
      <article
        className="container px-2 mx-auto"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="py-16">
          {post.frontmatter.tags &&
            post.frontmatter.tags.map((tag, i) => (
              <span
                style={{
                  color: 'darkgray',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                }}
                key={tag}
              >
                {tag}
                {post.frontmatter.tags.length - 1 !== i && ', '}
              </span>
            ))}
          <H2>{post.frontmatter.title}</H2>
          <H6 className="mt-6">
            {post.frontmatter.description || post.excerpt}
          </H6>
          <div className="flex flex-row mt-8 gap-x-12">
            <ImageWithShadow
              style={{ height: '400px', width: '270px' }}
              fluid={post.frontmatter.image.childImageSharp.fluid}
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <p className="font-serif text-xl font-bold">Favourite Quote</p>
                <div className="mt-4 prose">
                  <blockquote>
                    Filled with his trademark humor and straight talk, The Hard
                    Thing About Hard Things is invaluable for veteran
                    entrepreneurs as well as those aspiring to their own new
                    ventures, drawing from Horowitz's personal and often
                    humbling experiences.
                  </blockquote>
                </div>
                <div className="mt-8">
                  <Subtitle2 className="font-bold">
                    How strongly I recommending
                  </Subtitle2>
                  <div className="flex flex-row mt-2 gap-x-1">
                    <BsStarFill className="text-yellow-500 fill-current" />
                    <BsStarFill className="text-yellow-500 fill-current" />
                    <BsStarFill className="text-yellow-500 fill-current" />
                    <BsStarHalf className="text-yellow-500 fill-current" />
                    <BsStar className="text-yellow-500 fill-current" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full mt-4 gap-x-4">
                <AmazonButton link="https://amzn.to/39nubLg" />
                <div className="flex flex-row gap-x-12">
                  <NameIcon
                    name="ISBN-10"
                    icon={<AiOutlineBarcode className="text-4xl" />}
                    value="0062273205"
                  />
                  <NameIcon
                    name="ISBN-13"
                    icon={<AiOutlineBarcode className="text-4xl" />}
                    value="978-0062641540"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <p>{post.frontmatter.date}</p> */}
        </header>

        <div className="max-w-2xl px-4 mx-auto prose prose-indigo wrap">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <SocialShare title={post.frontmatter.title} location={location} />
        <div className="px-24 py-8">{HitCounter({ slug })}</div>
      </article>
      <nav className="container px-24 py-20 mx-auto">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
        ISBN
        rating
        amazon
        image {
          childImageSharp {
            fluid {
              srcSet
              tracedSVG
              aspectRatio
              src
              sizes
              presentationHeight
              presentationWidth
            }
          }
        }
        tableContent
      }
    }
  }
`
