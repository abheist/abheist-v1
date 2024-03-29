import { Link } from 'gatsby'
import React from 'react'
import Card from './Card'
import Container from './Container'
import { Body1, H3, H6, Overline } from './Typography'

interface PicPageSectionProps {
  backgroundColor?: string
  picSide?: 'left' | 'right'
  data: {
    heading: string
    description: string
    to?: string
    linkName?: string
    latestArticle?: {
      pic: any
      overline: string
      heading: string
      description: string
      to: string
    }
    featured?: {
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        data: string
        description: string
        featured: boolean
        image: any
        title: string
      }
    }[]
  }
}

const PicPageSection = ({
  backgroundColor,
  picSide = 'left',
  data: { heading, description, to, linkName, latestArticle, featured },
}: PicPageSectionProps) => {
  return (
    <div className={backgroundColor}>
      <Container className="pt-0 pb-24 lg:pt-24">
        <div className="flex w-full flex-col justify-between lg:flex-row lg:gap-32">
          <Link
            to={latestArticle.to}
            className={`order-2 flex flex-shrink-0 flex-row items-end justify-end ${
              picSide === 'left' ? 'lg:order-1' : 'lg:order-2'
            } w-full bg-blue-400 lg:w-1/2`}
            style={{
              height: '400px',
              background: `url(${latestArticle.pic.childImageSharp.gatsbyImageData.images.fallback.src})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              boxShadow: '16px 16px  var(--primary-color)',
            }}
          >
            <div
              className={`bg-white bg-opacity-90 p-10 lg:-mr-4 lg:-mb-28 lg:w-96 lg:bg-opacity-100 lg:pr-8 ${backgroundColor}`}
            >
              <Overline className="mb-2">{latestArticle.overline}</Overline>
              <H3 className="text-indigo-primary">{latestArticle.heading}</H3>
              <Body1 className="mt-8">{latestArticle.description}</Body1>
            </div>
          </Link>
          <div
            className={`order-1 ${
              picSide === 'left' ? 'lg:order-2' : 'lg:order-1'
            } py-8`}
          >
            <H3>{heading}</H3>
            <Body1 className="mt-8">{description}</Body1>
            {to && linkName && (
              <div className="mt-10">
                <Link
                  to={to}
                  className="border border-indigo-500 px-10 py-3 text-lg text-indigo-700 hover:bg-indigo-500 hover:text-white"
                >
                  {linkName}
                </Link>
              </div>
            )}
          </div>
        </div>
        {featured && (
          <div className="mt-44">
            <H6>FEATURED</H6>
            <div className="grid-col-1 mt-8 grid gap-8 lg:grid-cols-3">
              {featured.map(card => (
                <Card key={card.fields.slug} data={card} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}

export default PicPageSection
