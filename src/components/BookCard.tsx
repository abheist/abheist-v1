import { Link } from 'gatsby'
import React, { useState } from 'react'
import AmazonButton from './AmazonButton'
import ImageWithShadow from './ImageWithShadow'
import { H4, Subtitle2 } from './Typography'

const BookCard = ({ post }): JSX.Element => {
  const title = post.frontmatter.title || `/book-notes${post.fields.slug}`
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
          className="-m-4 flex cursor-not-allowed flex-row border border-gray-200 border-opacity-0 p-4 transition-all duration-300 hover:border-opacity-100"
        >
          {post.frontmatter.image && (
            <ImageWithShadow
              style={{ height: '300px', width: '200px' }}
              image={post.frontmatter.image.childImageSharp.gatsbyImageData}
            />
          )}
          <div className="flex w-4/5 flex-col justify-between px-8">
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
                className={`my-2 inline-block bg-yellow-400 px-4 py-2 ${
                  shake && 'shake-horizontal'
                }`}
              >
                Notes under progress, Coming Soon!
              </div>
            </div>
            <AmazonButton link={post.frontmatter.amazon} />
          </div>
        </article>
      ) : (
        <article
          itemScope
          itemType="http://schema.org/Article"
          className="group -m-4 flex flex-row border border-gray-200 border-opacity-0 p-4 transition-all duration-300 hover:border-opacity-100"
        >
          {post.frontmatter.image && (
            <Link to={`/book-notes${post.fields.slug}`}>
              <ImageWithShadow
                style={{ height: '300px', width: '200px' }}
                image={post.frontmatter.image.childImageSharp.gatsbyImageData}
              />
            </Link>
          )}
          <div className="flex w-4/5 flex-col justify-between px-8">
            <div>
              <Link to={`/book-notes${post.fields.slug}`}>
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
            <AmazonButton link={post.frontmatter.amazon} />
          </div>
        </article>
      )}
    </div>
  )
}

export default BookCard
