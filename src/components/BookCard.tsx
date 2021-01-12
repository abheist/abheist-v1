import { Link } from 'gatsby'
import React from 'react'
import { H4, Subtitle2 } from './Typography'

const BookCard = ({ post }): JSX.Element => {
  const title = post.frontmatter.title || post.fields.slug
  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className="flex flex-row my-16"
    >
      <div
        className={`w-1/5 bg-blue-400 h-64`}
        style={{
          background: `url(${post.frontmatter.image.childImageSharp.fluid.src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="flex flex-col justify-between w-4/5 px-8">
        <div>
          <H4>
            <Link to={post.fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </H4>
          <section className="mt-6">
            <Subtitle2 className="font-bold uppercase">
              read: {post.frontmatter.date}, how strongly I recommend: 9/10
            </Subtitle2>
            <p
              className="mt-4"
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
              itemProp="description"
            />
            <Link to={post.fields.slug} className="mt-2">
              read more →
            </Link>
          </section>
        </div>
        <a
          href="/"
          className="self-start px-4 py-2 border border-yellow-500 rounded-md bg-gradient-to-b from-yellow-400 to-yellow-500"
        >
          Get from Amazon
        </a>
      </div>
    </article>
  )
}

export default BookCard
