import React from 'react'
import { Body1, H6 } from './typography'

const Card = ({ pic }) => {
  return (
    <div className="flex-1">
      <div
        className={`w-full bg-blue-400 h-52`}
        style={{
          background: `url(${pic})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>
      <H6 className="mt-4">Pracatically generated content for this page</H6>
      <Body1 className="mt-4">
        Hello metaDescription posts found route for this page with content for
        this page with content for
      </Body1>
    </div>
  )
}

export default Card
