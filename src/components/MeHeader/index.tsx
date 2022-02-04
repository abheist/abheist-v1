import React from 'react'
import { animated, useSpring } from 'react-spring'

const transHeading = (x, y) => `translate3d(${x / 12}px,${y / 10}px,0)`
const trans1 = (x, y) => `translate3d(${x / 8 - 50}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 - 50}px,${y / -30}px,0)`
const trans3 = (x, y) => `translate3d(${x / 8 - 50}px,${y / 10}px,0)`

export const getFluid = (images, fileName) => {
  let fluidImg = images.filter(image =>
    image.node.childImageSharp.gatsbyImageData.images.fallback.src.includes(
      fileName
    )
  )
  return fluidImg[0].node.childImageSharp.gatsbyImageData
}

function MEHeader({ headerImages }) {
  let langImg = getFluid(headerImages, 'languages')
  let rectImg = getFluid(headerImages, 'rects')
  let profileImg = getFluid(headerImages, 'profile')

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))
  return (
    <div
      className="relative z-0 flex h-full w-full items-center justify-center"
      onMouseMove={({ clientX: x, clientY: y }) => set.start({ xy: [x, y] })}
    >
      <animated.div
        className="absolute left-80 top-24 z-10 font-serif text-6xl font-normal capitalize tracking-normal"
        style={{ transform: props.xy.to(transHeading) }}
      >
        About Me
      </animated.div>
      <animated.div
        className="absolute"
        style={{
          width: '100%',
          height: '500px',
          backgroundImage: `url(${langImg.images.fallback.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 2,
          willChange: 'transform',
          transform: props.xy.to(trans1),
        }}
      />
      <animated.div
        className="absolute"
        style={{
          width: '100%',
          height: '550px',
          backgroundImage: `url(${rectImg.images.fallback.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          willChange: 'transform',
          transform: props.xy.to(trans2),
        }}
      />
      <animated.div
        className="absolute"
        style={{
          opacity: '0.9',
          width: '400px',
          height: '400px',
          backgroundImage: `url(${profileImg.images.fallback.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
          transform: props.xy.to(trans3),
        }}
      />
    </div>
  )
}

export default MEHeader
