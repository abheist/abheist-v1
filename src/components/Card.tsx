import { Link } from 'gatsby'
import React from 'react'
import { Body1, H3 } from './Typography'

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
    <div className="flex-1 group">
      {data.frontmatter.image && (
        <Link to={data.fields.slug}>
          <div
            className={`w-full bg-blue-400 h-52`}
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
        <H3 className="mt-4 font-sans text-xl font-normal tracking-normal group-hover:text-indigo-primary">
          {data.frontmatter.title}
        </H3>
      </Link>
      <Link to={data.fields.slug}>
        <Body1 className="mt-4">
          {data.frontmatter.description || data.excerpt}
        </Body1>
      </Link>
    </div>
  )
}

export default Card
