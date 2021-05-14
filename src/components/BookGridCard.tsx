import { Link } from 'gatsby'
import React, { useState } from 'react'
import ImageWithShadow from './ImageWithShadow'
import { Subtitle2 } from './Typography'

const BookGridCard = ({ book }) => {
  const [shake, setShake] = useState(false)

  const animate = () => {
    setShake(true)
    setTimeout(() => setShake(false), 300)
  }

  return (
    <>
      {book.frontmatter.published === false ? (
        <span
          className={`relative transition-all duration-300 hover:-mt-2 cursor-not-allowed group`}
          onClick={animate}
        >
          <ImageWithShadow
            className={`group-hover:opacity-80`}
            image={book.frontmatter.image.childImageSharp.gatsbyImageData}
            style={{ height: '300px', width: '200px' }}
            alt={book.frontmatter.title}
          />
          <Subtitle2
            className={`absolute z-10 px-2 py-1 -mt-1 -ml-8 transform -rotate-90 bg-yellow-500 border-r-4 rounded-l-sm top-10 ${
              shake ? `shake` : null
            }`}
          >
            Coming Soon!
          </Subtitle2>
        </span>
      ) : (
        <Link
          key={book.fields.slug}
          to={book.fields.slug}
          itemProp="url"
          className={`relative transition-all duration-300 hover:-mt-2`}
        >
          <ImageWithShadow
            className={`group-hover:opacity-80`}
            style={{ height: '300px', width: '200px' }}
            image={book.frontmatter.image.childImageSharp.gatsbyImageData}
            alt={book.frontmatter.title}
          />
        </Link>
      )}
    </>
  )
}

export default BookGridCard
