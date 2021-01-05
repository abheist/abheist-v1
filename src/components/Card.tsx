import React from 'react'
import { Body1, H6 } from './typography'

interface CardProp {
  variant?: 'image-heading-body' | 'image-drop-heading-body'
  data: { pic: string; heading: string; excerpt: string }
}

const Card = ({ variant, data: { pic, heading, excerpt } }: CardProp) => {
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
      <H6 className="mt-4">{heading}</H6>
      <Body1 className="mt-4">{excerpt}</Body1>
    </div>
  )
}

export default Card
