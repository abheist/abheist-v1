import React from 'react'
import BookCard from './BookCard'
import PicPageSection from './PicPageSection'
import { H6 } from './Typography'

const BookList = ({ books }) => {
  const latestPost = books[0]

  const booksSection = {
    heading: 'Book Notes',
    description:
      'Most of my essays are about business, education, and what it means to be a citizen of the Internet. These essays are a record of my intellectual quest to make sense of the world. They’re the diary of my contemplative life.',
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
    <div className="container px-4 mx-auto">
      <PicPageSection picSide="right" data={booksSection} />
      <div>
        <input
          type="text"
          placeholder="Search these books..."
          className="w-full p-3 mt-8 mb-16 border border-gray-500"
        />
      </div>
      <div className="flex flex-row gap-16 mb-32">
        <div>
          <H6 className="font-bold">RECENTLY READ</H6>
          {books.map(post => (
            <BookCard key={post.fields.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookList
