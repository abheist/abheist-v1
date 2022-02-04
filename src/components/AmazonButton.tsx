import { OutboundLink } from 'gatsby-plugin-google-gtag'
import React from 'react'
import { GrAmazon } from 'react-icons/gr'

interface AmazonButtonProps {
  link: string
  className?: string
}

const AmazonButton = ({ link, className }: AmazonButtonProps) => {
  return (
    <div className={className}>
      <OutboundLink
        href={link}
        target="_blank"
        className={`flex w-52 flex-row items-center gap-x-4 text-sm font-semibold leading-7`}
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
        <GrAmazon className="-mb-0.5 fill-current text-gray-900" />
        Amazon Page
      </OutboundLink>
    </div>
  )
}

export default AmazonButton
