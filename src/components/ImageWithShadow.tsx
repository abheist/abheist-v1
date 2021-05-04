import { GatsbyImage } from "gatsby-plugin-image"
import React from 'react'

const ImageWithShadow = ({ image, style, className = '' }) => {
  return (
    <div className={`relative transition-all ${className}`}>
      <GatsbyImage image={image} alt="" className="z-10" style={{ ...style }} />
      <GatsbyImage
        image={image}
        alt=""
        className="absolute left-2 top-32"
        style={{
          position: 'absolute',
          opacity: 1,
          filter: 'blur(60px)',
          ...style,
          height: '200px',
          width: '170px',
        }}
      />
    </div>
  )
}

export default ImageWithShadow
