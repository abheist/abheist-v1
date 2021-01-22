import React from 'react'

const Pic = ({ url }) => {
  return (
    <div
      style={{
        height: '300px',
        background: `url(${url})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    ></div>
  )
}

export default Pic
