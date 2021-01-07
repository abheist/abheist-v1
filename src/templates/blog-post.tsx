import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import kebabCase from 'lodash/kebabCase'
import * as React from 'react'
import Bio from '../components/Bio'
import { HitCounter } from '../components/HitCounter'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { H2, H6 } from '../components/typography'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next, slug } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="container px-2 mx-auto"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="py-16">
          {post.frontmatter.tags.map((tag, i) => (
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
          <H6 className="mt-6">{post.frontmatter.title}</H6>
          <Img
            className="mt-8"
            fluid={post.frontmatter.image.childImageSharp.fluid}
            alt="A corgi smiling happily"
          />
          {/* <p>{post.frontmatter.date}</p> */}
        </header>
        {post.frontmatter.tableContent ? (
          <div
            style={{
              display: 'flex',
            }}
          >
            <div
              style={{
                minWidth: '250px',
                position: 'sticky',
                top: '148px',
                maxHeight: 'calc(100vh - 148px)',
                marginLeft: '-354px',
                marginRight: '100px',
              }}
            >
              {post.headings.map(heading => (
                <pre key={heading.value}>
                  <Link
                    to={`#${kebabCase(heading.value)}/`}
                    style={{
                      overflow: 'hidden',
                      display: 'inline-block',
                      width: '250px',
                      maxWidth: '250px',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {heading.value}
                  </Link>
                  <br />
                </pre>
              ))}
            </div>
            <div className="max-w-2xl px-4 mx-auto prose prose-indigo">
              <MDXRenderer>{post.body}</MDXRenderer>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl px-4 mx-auto prose prose-indigo">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        )}
        {HitCounter({ slug })}
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
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
            fluid {
              srcSet
              tracedSVG
              aspectRatio
              src
              sizes
            }
          }
        }
        tableContent
      }
    }
  }
`
