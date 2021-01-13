import React from 'react'
import { GrAmazon } from 'react-icons/gr'

const AmazonButton = ({ link }) => {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        className="flex flex-row items-center text-sm font-semibold leading-7 w-52 gap-x-4"
        style={{
          border: '1px',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: '#a88734 #9c7e31 #846a29',
          color: '#111',
          borderRadius: '3px',
          overflow: 'hidden',
          width: 'content-width',
          padding: '6px 40px',
          background: 'linear-gradient(to bottom,#f7dfa5,#f0c14b)',
        }}
      >
        <GrAmazon className="-mb-0.5 text-gray-900 fill-current" />
        Amazon Page
      </a>
    </div>
  )
}

export default AmazonButton
