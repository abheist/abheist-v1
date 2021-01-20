import Img from 'gatsby-image'
import React from 'react'

const ImageWithShadow = ({ fluid, style, className }) => {
  return (
    <div className={`relative transition-all ${className}`}>
      <Img fluid={fluid} className="z-10" style={{ ...style }} />
      <Img
        fluid={fluid}
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
