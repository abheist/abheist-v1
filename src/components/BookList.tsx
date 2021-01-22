import React, { useEffect, useState } from 'react'
import { FiGrid, FiList } from 'react-icons/fi'
import BookCard from './BookCard'
import BookPageSection from './BookPageSection'
import BooksGrid from './BooksGrid'
import Container from './Container'
import { H6 } from './Typography'

export const getLatestBook = books => {
  let latest = undefined
  for (let i = 0; i < books.length; i++) {
    if (books[i].frontmatter.published !== false) {
      latest = books[i]
      break
    }
  }
  return latest
}

const BookList = ({ books: bookList }) => {
  const latestPost = getLatestBook(bookList)
  const [layout, setLayout] = useState('grid')
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState(() => bookList)

  useEffect(() => {
    let books_ = bookList.filter(
      book =>
        book.frontmatter.title.toLowerCase().search(search.toLowerCase()) !== -1
    )
    setBooks(books_)
  }, [search])

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
    <>
      <BookPageSection picSide="right" data={booksSection} />
      <Container className="pb-40">
        <div className="flex flex-row items-center justify-between">
          <input
            type="text"
            placeholder="Search these books..."
            className="w-5/6 p-3 border border-gray-500"
            value={search}
            onChange={event => setSearch(event.target.value)}
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
            <BooksGrid books={books} />
          ) : (
            <div className="grid gap-y-40">
              {books.map(book => (
                <BookCard key={book.fields.slug} post={book} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  )
}

export default BookList
