import React from 'react'

const Container = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 max-w-5xl ${className}`}>
      {children}
    </div>
  )
}
export default Container
