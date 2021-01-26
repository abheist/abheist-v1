import React from 'react'
import BookGridCard from './BookGridCard'

const BooksGrid = ({ books }) => {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-x-12 gap-y-16">
      {books.map(book => (
        <BookGridCard key={book.fields.slug} book={book} />
      ))}
    </div>
  )
}

export default BooksGrid
