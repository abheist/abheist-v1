import { Link } from 'gatsby'
import React, { useState } from 'react'
import { FiGrid, FiList } from 'react-icons/fi'
import BookCard from './BookCard'
import BookPageSection from './BookPageSection'
import ImageWithShadow from './ImageWithShadow'
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
      <BookPageSection picSide="right" data={booksSection} />
      <div className="flex flex-row items-center justify-between">
        <input
          type="text"
          placeholder="Search these books..."
          className="w-5/6 p-3 border border-gray-500"
        />
        <div className="flex gap-x-2">
          <button
            className={`p-4 border border-gray-500 focus:outline-none focus:ring focus:border-indigo-300 ${
              layout === 'grid' && 'bg-indigo-200'
            }`}
            onClick={() => setLayout('grid')}
          >
            <FiGrid
              className={`fill-current ${
                layout === 'grid' && 'text-indigo-500'
              }`}
            />
          </button>
          <button
            className={`p-4 border focus:outline-none focus:ring focus:border-indigo-300-300 ${
              layout === 'list' && 'bg-indigo-200'
            }  border-gray-500
            `}
            onClick={() => setLayout('list')}
          >
            <FiList
              className={`fill-current ${
                layout === 'list' && 'text-indigo-500'
              }`}
            />
          </button>
        </div>
      </div>
      <div>
        <H6 className="mt-16 mb-16 font-bold">RECENTLY READ</H6>
        {layout === 'grid' ? (
          <div className="grid grid-cols-4 gap-x-12 gap-y-16">
            {books.map(post => (
              <Link
                key={post.fields.slug}
                to={post.fields.slug}
                itemProp="url"
                className="transition-all duration-300 hover:-mt-2"
              >
                <ImageWithShadow
                  style={{ height: '300px', width: '200px' }}
                  fluid={post.frontmatter.image.childImageSharp.fluid}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid gap-y-40">
            {books.map(post => (
              <BookCard key={post.fields.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default BookList
