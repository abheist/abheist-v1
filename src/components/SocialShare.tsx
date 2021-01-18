import React from 'react'
import { Overline } from './Typography'

const SocialShare = ({ title, location }) => {
  return (
    <div className="flex flex-row items-center justify-end px-24 my-16 gap-x-8">
      <div className="flex-1 divide-y divide-gray-300 bg-red-50">
        <div></div>
        <div></div>
      </div>
      <Overline className="text-gray-500">Share Article</Overline>
      <a
        href={`http://twitter.com/share?text=${title} by @abheist &url=${location.href}`}
        target="_blank"
        className="hover:text-indigo-primary"
      >
        Twitter
      </a>
      <a
        href={`http://www.facebook.com/sharer.php?u=${location.href}&p[title]=${title} by @abheist`}
        target="_blank"
        className="hover:text-indigo-primary"
      >
        Facebook
      </a>
      <a
        href={`http://www.linkedin.com/shareArticle?mini=true&url=${location.href}&title=${title}&source=${location.origin}`}
        target="_blank"
        className="hover:text-indigo-primary"
      >
        LinkedIn
      </a>
      <a
        href={`mailto:?subject=${title} | Abhishek Kumar Singh&body=${location.href}`}
        target="_blank"
        className="hover:text-indigo-primary"
      >
        Mail to Friend
      </a>
    </div>
  )
}

export default SocialShare
