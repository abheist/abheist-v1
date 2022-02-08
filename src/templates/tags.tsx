import { graphql } from 'gatsby'
import React from 'react'
import {
  DiAngularSimple,
  DiCss3Full,
  DiHtml5,
  DiJavascript1,
  DiPython,
  DiReact,
} from 'react-icons/di'
import { GiLifeInTheBalance, GiWaveCrest } from 'react-icons/gi'
import { ImNpm } from 'react-icons/im'
import { MdBusiness } from 'react-icons/md'
import { SiDjango, SiMaterialdesignicons } from 'react-icons/si'
import Card from '../components/Card'
import Container from '../components/Container'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { H3 } from '../components/Typography'

const Tags = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { tag } = pageContext
  const { edges } = data.allMdx
  const tagIconClasses = 'fill-current text-7xl'

  const tagImage = {
    react: <DiReact className={tagIconClasses} />,
    angular: <DiAngularSimple className={tagIconClasses} />,
    javascript: <DiJavascript1 className={tagIconClasses} />,
    python: <DiPython className={tagIconClasses} />,
    django: <SiDjango className={tagIconClasses} />,
    life: <GiLifeInTheBalance className={tagIconClasses} />,
    design: <SiMaterialdesignicons className={tagIconClasses} />,
    business: <MdBusiness className={tagIconClasses} />,
    css: <DiCss3Full className={tagIconClasses} />,
    html: <DiHtml5 className={tagIconClasses} />,
    npm: <ImNpm className={tagIconClasses} />,
    poem: <GiWaveCrest className={tagIconClasses} />,
  }

  return (
    <Layout title={siteTitle} background="bg-indigo-50" location={location}>
      <SEO
        title={tag.charAt(0).toUpperCase() + tag.slice(1)}
        // description={post.frontmatter.description || post.excerpt}
        // image={{
        //   src: post.frontmatter.image.childImageSharp.fluid.src,
        //   height:
        //     post.frontmatter.image.childImageSharp.fluid.presentationHeight,
        //   width: post.frontmatter.image.childImageSharp.fluid.presentationWidth,
        // }}
        pathname={location.pathname}
      />
      <Container>
        <div className="flex w-full flex-row justify-between gap-32"></div>
        <div className="flex flex-row items-center gap-x-4 divide-x-4 divide-solid divide-gray-900">
          <span>{tagImage[tag.toLowerCase()]}</span>
          <H3 className="pl-4">{tag}</H3>
        </div>
      </Container>
      <Container className="pt-20 pb-40">
        {edges ? (
          <div className="grid w-full grid-cols-2 gap-y-20 gap-x-10">
            {edges.map(({ node: card }) => (
              <Card key={card.fields.slug} data={card} />
            ))}
          </div>
        ) : (
          <p>No blog posts found.</p>
        )}
      </Container>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
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
    }
  }
`
