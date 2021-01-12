import { graphql } from 'gatsby'
import React from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'
import PicPageSection from '../components/PicPageSection'
import SEO from '../components/SEO'

const Tags = ({ pageContext, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  const articlesSection = {
    heading: tag,
    description:
      'Sort and detailed notes of my learnings of software development, design, life and world. They are the diary or record of my contemplative life. This page will constantly update as my second brain, so bookmark it if you want to check back in a few months. If you have any questions. You can also email me. Thank you 🙏',
    pic: '../1.jpeg',
  }

  return (
    <Layout title={siteTitle}>
      <SEO title={tag.charAt(0).toUpperCase() + tag.slice(1)} />
      <PicPageSection picSide="right" data={articlesSection} />
      <div className="bg-indigo-50">
        <div className="container py-40 mx-auto">
          {edges ? (
            <div className="grid w-full grid-cols-2 gap-y-20 gap-x-10">
              {edges.map(({ node: card }) => (
                <Card key={card.fields.slug} data={card} />
              ))}
            </div>
          ) : (
            <p>No blog posts found.</p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
                fluid {
                  srcSet
                  tracedSVG
                  aspectRatio
                  src
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`
