import { Link } from 'gatsby'
import React from 'react'
import Card from './Card'
import { Body1, H3, H6, Overline } from './Typography'

interface PicPageSectionProps {
  backgroundColor?: string
  picSide?: 'left' | 'right'
  data: {
    heading: string
    description: string
    to?: string
    linkName?: string
    latestArticle: {
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
      <div className="container py-40 mx-auto">
        <div className="flex flex-row justify-between w-full gap-32">
          <div
            className={`flex flex-row items-end justify-end flex-shrink-0 ${
              picSide === 'left' ? 'order-1' : 'order-2'
            } w-full bg-blue-400 md:w-1/2`}
            style={{
              height: '400px',
              background: `url(${latestArticle.pic.childImageSharp.sizes.src})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              boxShadow: '16px 16px  var(--primary-color)',
            }}
          >
            <div
              className={`p-10 pr-8 -mr-4 bg-white -mb-28 ${backgroundColor}`}
              style={{ width: '450px' }}
            >
              <Overline className="mb-2">{latestArticle.overline}</Overline>
              <Link to={latestArticle.to}>
                <H3 className="text-indigo-primary">{latestArticle.heading}</H3>
              </Link>
              <Body1 className="mt-8">{latestArticle.description}</Body1>
            </div>
          </div>
          <div className={`${picSide === 'left' ? 'order-2' : 'order-1'} py-8`}>
            <H3>{heading}</H3>
            <Body1 className="mt-8">{description}</Body1>
            {to && linkName && (
              <div className="mt-10">
                <Link
                  to={to}
                  className="px-10 py-3 text-lg text-indigo-500 border border-indigo-500"
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
            <div className="flex flex-row justify-between w-full gap-8 mt-8">
              {featured.map(card => (
                <Card key={card.fields.slug} data={card} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PicPageSection
