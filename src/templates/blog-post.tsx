import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import Bio from '../components/Bio'
import BlogNav from '../components/BlogNav'
import Container from '../components/Container'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SocialShare from '../components/SocialShare'
import { H2, H6 } from '../components/Typography'

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
          src:
            post.frontmatter.image?.childImageSharp?.gatsbyImageData.images
              .fallback.src || '',
          height:
            post.frontmatter.image?.childImageSharp?.gatsbyImageData
              .presentationHeight,
          width:
            post.frontmatter.image?.childImageSharp?.gatsbyImageData
              .presentationWidth,
        }}
        pathname={location.pathname}
      />
      <Container>
        <article itemScope itemType="http://schema.org/Article">
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
            {post.frontmatter.description && (
              <H6 className="mt-6">{post.frontmatter.description}</H6>
            )}
            {post.frontmatter.image && (
              <GatsbyImage
                className="mt-8"
                image={post.frontmatter.image.childImageSharp.gatsbyImageData}
                alt="A corgi smiling happily"
              />
            )}
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
  query BlogPostBySlug($slug: String!) {
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
        tags
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
`
