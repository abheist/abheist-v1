import React from 'react'
import BookGridCard from './BookGridCard'

const BooksGrid = ({ books }) => {
  return (
    <div className="grid grid-cols-4 gap-x-12 gap-y-16">
      {books.map(book => (
        <BookGridCard key={book.fields.slug} book={book} />
      ))}
    </div>
  )
}

export default BooksGrid
