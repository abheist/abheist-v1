import { Link } from 'gatsby'
import React from 'react'
import BookGridCard from './BookGridCard'
import Container from './Container'
import ImageWithShadow from './ImageWithShadow'
import { Body1, H3, H6 } from './Typography'

interface BookPageSectionProps {
  backgroundColor?: string
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
  data: { heading, description, to, linkName, latestArticle, featured },
}: BookPageSectionProps) => {
  return (
    <div className={backgroundColor}>
      <Container className="py-24">
        <div className="flex w-full flex-col items-stretch justify-between sm:flex-row sm:gap-8 md:gap-32">
          <div className={`mb-20  sm:mb-auto md:py-8 `}>
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
          <div
            className={`order-1 transition-all duration-300 sm:hover:-mt-2 sm:hover:mb-2`}
          >
            <Link to={`/book-notes${latestArticle.to}`}>
              <ImageWithShadow
                style={{ height: '400px', width: '270px' }}
                image={latestArticle.pic.childImageSharp.gatsbyImageData}
              />
            </Link>
          </div>
        </div>
        {featured && (
          <div className="mt-28">
            <H6>FEATURED</H6>
            <div className="mt-8 flex flex-row flex-wrap justify-between gap-x-2 gap-y-16 md:gap-x-12">
              {featured.map(post => (
                <BookGridCard key={post.fields.slug} book={post} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}

export default BookPageSection
