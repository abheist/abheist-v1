import { Link } from 'gatsby'
import React from 'react'
import AmazonButton from './AmazonButton'
import ImageWithShadow from './ImageWithShadow'
import { H4, Subtitle2 } from './Typography'

const BookCard = ({ post }): JSX.Element => {
  const title = post.frontmatter.title || post.fields.slug
  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className="flex flex-row group"
    >
      <Link to={post.fields.slug}>
        <ImageWithShadow
          style={{ height: '300px', width: '200px' }}
          fluid={post.frontmatter.image.childImageSharp.fluid}
        />
      </Link>
      <div className="flex flex-col justify-between w-4/5 px-8">
        <div>
          <Link to={post.fields.slug}>
            <H4 className="group-hover:text-indigo-700">
              <span itemProp="headline">{title}</span>
            </H4>
            <Subtitle2 className="mt-6 font-bold uppercase">
              read: {post.frontmatter.date}, how strongly I recommend: 9/10
            </Subtitle2>
            <p
              className="mt-4"
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
              itemProp="description"
            />

            <div className="mt-2 group-hover:text-indigo-700">read more →</div>
          </Link>
        </div>
        <AmazonButton link="/" />
      </div>
    </article>
  )
}

export default BookCard
