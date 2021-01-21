import { Link } from 'gatsby'
import React from 'react'
import BookGridCard from './BookGridCard'
import ImageWithShadow from './ImageWithShadow'
import { Body1, H3, H6 } from './Typography'

interface BookPageSectionProps {
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

const BookPageSection = ({
  backgroundColor,
  picSide = 'left',
  data: { heading, description, to, linkName, latestArticle, featured },
}: BookPageSectionProps) => {
  return (
    <div className={backgroundColor}>
      <div className="container py-24 mx-auto">
        <div className="flex flex-row items-stretch justify-between w-full gap-32">
          <div
            className={`transition-all duration-300 hover:-mt-2 hover:mb-2 ${
              picSide === 'left' ? 'order-1' : 'order-2'
            }`}
          >
            <Link to={latestArticle.to}>
              <ImageWithShadow
                style={{ height: '400px', width: '270px' }}
                fluid={latestArticle.pic.childImageSharp.fluid}
              />
            </Link>
          </div>
          <div className={`${picSide === 'left' ? 'order-2' : 'order-1'} py-8`}>
            <H3>{heading}</H3>
            <Body1 className="mt-8">{description}</Body1>
            {to && linkName && (
              <div className="mt-10">
                <Link
                  to={to}
                  className="px-10 py-3 text-lg text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white"
                >
                  {linkName}
                </Link>
              </div>
            )}
          </div>
        </div>
        {featured && (
          <div className="mt-28">
            <H6>FEATURED</H6>
            <div className="grid grid-cols-4 mt-8 gap-x-12 gap-y-16">
              {featured.map(post => (
                <BookGridCard key={post.fields.slug} book={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookPageSection
