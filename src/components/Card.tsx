import { Link } from 'gatsby'
import React from 'react'
import { Body1, H6 } from './typography'

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
    <div className="flex-1">
      <div
        className={`w-full bg-blue-400 h-52`}
        style={{
          background: `url(${data.frontmatter.image.childImageSharp.sizes.src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>
      <Link to={data.fields.slug}>
        <H6 className="mt-4 font-bold">{data.frontmatter.title}</H6>
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
