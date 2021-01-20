import { Link } from 'gatsby'
import React, { useState } from 'react'
import AmazonButton from './AmazonButton'
import ImageWithShadow from './ImageWithShadow'
import { H4, Subtitle2 } from './Typography'

const BookCard = ({ post }): JSX.Element => {
  const title = post.frontmatter.title || post.fields.slug
  const [shake, setShake] = useState(false)

  const animate = () => {
    setShake(true)
    setTimeout(() => setShake(false), 300)
  }

  return (
    <div className="">
      {post.frontmatter.published === false ? (
        <article
          itemScope
          itemType="http://schema.org/Article"
          onClick={animate}
          className="flex flex-row p-4 -m-4 transition-all duration-300 border border-gray-200 border-opacity-0 cursor-not-allowed hover:border-opacity-100"
        >
          {post.frontmatter.image && (
            <ImageWithShadow
              style={{ height: '300px', width: '200px' }}
              fluid={post.frontmatter.image.childImageSharp.fluid}
            />
          )}
          <div className="flex flex-col justify-between w-4/5 px-8">
            <div>
              <H4>
                <span itemProp="headline">{title}</span>
              </H4>
              <Subtitle2 className="mt-6 font-bold uppercase">
                <span className="text-gray-400">Started reading on:</span>{' '}
                {post.frontmatter.date}
              </Subtitle2>
              <br />
              <div
                className={`px-4 py-2 my-2 bg-yellow-400 inline-block ${
                  shake && 'shake-horizontal'
                }`}
              >
                Currently Reading, Coming Soon!
              </div>
            </div>
            <AmazonButton link={post.frontmatter.amazon} />
          </div>
        </article>
      ) : (
        <article
          itemScope
          itemType="http://schema.org/Article"
          className="flex flex-row p-4 -m-4 transition-all duration-300 border border-gray-200 border-opacity-0 group hover:border-opacity-100"
        >
          {post.frontmatter.image && (
            <Link to={post.fields.slug}>
              <ImageWithShadow
                style={{ height: '300px', width: '200px' }}
                fluid={post.frontmatter.image.childImageSharp.fluid}
              />
            </Link>
          )}
          <div className="flex flex-col justify-between w-4/5 px-8">
            <div>
              <Link to={post.fields.slug}>
                <H4 className="group-hover:text-indigo-700">
                  <span itemProp="headline">{title}</span>
                </H4>
                <Subtitle2 className="mt-6 font-bold uppercase">
                  <span className="text-gray-400">read:</span>{' '}
                  {post.frontmatter.date},{' '}
                  <span className="text-gray-400">
                    how strongly I recommend:
                  </span>{' '}
                  9/10
                </Subtitle2>
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />

                <div className="mt-2 group-hover:text-indigo-700">
                  read more →
                </div>
              </Link>
            </div>
            <AmazonButton link="/" />
          </div>
        </article>
      )}
    </div>
  )
}

export default BookCard
