import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React, { useState } from 'react'
import BookCard from './BookCard'
import PicPageSection from './PicPageSection'
import { H6 } from './Typography'

const BookList = ({ books }) => {
  const [layout, setLayout] = useState('grid')
  const latestPost = books[0]

  const booksSection = {
    heading: 'Book Notes',
    description:
      'Tiny summary but detailed notes for each book. Use the ISBN number to find it from your local library or use Amazon link. This page will constantly update as I read more, so bookmark it if you want to check back in a few months. If you have any questions. You can also email me. Thank you 🙏',
    latestArticle: {
      pic: latestPost.frontmatter.image,
      overline: 'Latest',
      heading: latestPost.frontmatter.title,
      description:
        latestPost.frontmatter.description || latestPost.frontmatter.excerpt,
      to: latestPost.fields.slug,
    },
  }

  return (
    <div className="container px-4 pb-40 mx-auto">
      <PicPageSection picSide="right" data={booksSection} />
      <input
        type="text"
        placeholder="Search these books..."
        className="w-full p-3 mt-8 mb-16 border border-gray-500"
      />
      <div>
        <H6 className="mb-16 font-bold">RECENTLY READ</H6>
        {layout === 'grid' ? (
          <div className="grid grid-cols-4 gap-x-12 gap-y-16">
            {books.map(post => (
              <Link to={post.fields.slug} itemProp="url">
                <Img
                  key={post.fields.slug}
                  style={{ height: '300px', width: '200px' }}
                  fluid={post.frontmatter.image.childImageSharp.fluid}
                />
              </Link>
            ))}
          </div>
        ) : (
          books.map(post => <BookCard key={post.fields.slug} post={post} />)
        )}
      </div>
    </div>
  )
}

export default BookList
