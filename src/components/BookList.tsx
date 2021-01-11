import React from 'react'
import BookCard from './BookCard'
import PicPageSection from './PicPageSection'
import { H6 } from './Typography'

const BookList = ({ books }) => {
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
