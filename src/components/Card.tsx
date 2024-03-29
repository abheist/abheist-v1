import { Link } from 'gatsby'
import React from 'react'
import { Body1, H6 } from './Typography'

interface CardProp {
  data: {
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
  }
}

const Card = ({ data }: CardProp) => {
  return (
    <div className="group flex-1">
      {data.frontmatter.image && (
        <Link to={data.fields.slug}>
          <div
            className={`h-52 w-full bg-blue-400`}
            role="img"
            aria-label={data.frontmatter.title}
            style={{
              background: `url(${data.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <p className="hidden">{data.frontmatter.title} image</p>
          </div>
        </Link>
      )}
      <Link to={data.fields.slug}>
        <H6
          level={3}
          className="mt-4 font-bold group-hover:text-indigo-primary"
        >
          {data.frontmatter.title}
        </H6>
      </Link>
      {(data.frontmatter.description || data.excerpt) && (
        <Link
          to={data.fields.slug}
          aria-label={
            data.frontmatter.description ||
            data.excerpt ||
            'Article Card Description'
          }
        >
          <Body1 className="mt-4">
            {data.frontmatter.description || data.excerpt}
          </Body1>
        </Link>
      )}
    </div>
  )
}

export default Card
