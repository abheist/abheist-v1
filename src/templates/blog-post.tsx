import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import { HitCounter } from '../components/HitCounter'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { H2, H6, Overline } from '../components/Typography'

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
          {post.frontmatter.description && (
            <H6 className="mt-6">{post.frontmatter.description}</H6>
          )}
          {post.frontmatter.image && (
            <Img
              className="mt-8"
              fluid={post.frontmatter.image.childImageSharp.fluid}
              alt="A corgi smiling happily"
            />
          )}
          {/* <p>{post.frontmatter.date}</p> */}
        </header>

        <div className="max-w-2xl px-4 mx-auto prose prose-indigo wrap">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <div className="flex flex-row items-center justify-end my-16 gap-x-8">
          <div className="flex-1 divide-y divide-gray-300 bg-red-50">
            <div></div>
            <div></div>
          </div>
          <Overline className="text-gray-500">Share Article</Overline>
          <a
            href={`http://twitter.com/share?text=${post.frontmatter.title} by @abheist &url=${location.href}`}
            target="_blank"
            className="hover:text-indigo-primary"
          >
            Twitter
          </a>
          <a
            href={`http://www.facebook.com/sharer.php?u=${location.href}&p[title]=${post.frontmatter.title} by @abheist`}
            target="_blank"
            className="hover:text-indigo-primary"
          >
            Facebook
          </a>
          <a
            href={`http://www.linkedin.com/shareArticle?mini=true&url=${location.href}&title=${post.frontmatter.title}&source=${location.origin}`}
            target="_blank"
            className="hover:text-indigo-primary"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:?subject=${post.frontmatter.title} | Abhishek Kumar Singh&body=${location.href}`}
            target="_blank"
            className="hover:text-indigo-primary"
          >
            Mail to Friend
          </a>
        </div>
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
