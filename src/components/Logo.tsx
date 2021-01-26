import { Link } from 'gatsby'
import React from 'react'

interface LogoProps {
  title?: string
  color?: 'light' | 'dark'
}

const Logo = ({
  title = 'Abhishek Kumar Singh',
  color = 'dark',
}: LogoProps) => {
  let fontColor: '#374151' | '#FFFFFF'
  if (color === 'dark') {
    fontColor = '#374151'
  } else {
    fontColor = '#FFFFFF'
  }
  return (
    <div>
      <Link
        to="/"
        className="flex-1 font-serif text-xl font-medium text-gray-800 uppercase"
        style={{
          letterSpacing: '2.25px',
          color: fontColor,
        }}
      >
        {title}
      </Link>
    </div>
  )
}

export default Logo
