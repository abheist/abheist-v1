import { OutboundLink } from 'gatsby-plugin-google-gtag'
import React from 'react'
import { Overline } from './Typography'

interface shareProps {
  title: string
  location: any
}

const SocialShare = ({ title, location }) => {
  return (
    <div className="my-16 flex flex-col items-center justify-center gap-y-4 gap-x-2 sm:flex-row sm:gap-y-0 sm:gap-x-8 lg:justify-end lg:px-24">
      <div className="hidden flex-1 divide-y divide-gray-300 bg-red-50 lg:block">
        <div></div>
        <div></div>
      </div>
      <Overline className="text-gray-500">Share Article</Overline>
      <OutboundLink
        href={`http://twitter.com/share?text=${title} by @abheist &url=${location.href}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-primary"
      >
        Twitter
      </OutboundLink>
      <OutboundLink
        href={`http://www.facebook.com/sharer.php?u=${location.href}&p[title]=${title} by @abheist`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-primary"
      >
        Facebook
      </OutboundLink>
      <OutboundLink
        href={`http://www.linkedin.com/shareArticle?mini=true&url=${location.href}&title=${title}&source=${location.origin}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-primary"
      >
        LinkedIn
      </OutboundLink>
      <OutboundLink
        href={`mailto:?subject=${title} | Abhishek Kumar Singh&body=${location.href}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-primary"
      >
        Mail to Friend
      </OutboundLink>
    </div>
  )
}

export default SocialShare
