import React from 'react'
import { animated, useSpring } from 'react-spring'

const transHeading = (x, y) => `translate3d(${x / 12}px,${y / 10}px,0)`
const trans1 = (x, y) => `translate3d(${x / 8 - 50}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 - 50}px,${y / -30}px,0)`
const trans3 = (x, y) => `translate3d(${x / 8 - 50}px,${y / 10}px,0)`

export const getFluid = (images, fileName) => {
  let fluidImg = images.filter(image =>
    image.node.childImageSharp.fluid.originalName.includes(fileName)
  )
  return fluidImg[0].node.childImageSharp.fluid
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
      className="relative z-0 flex items-center justify-center w-full h-full"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: [x, y] })}
    >
      <animated.div
        className="absolute z-10 font-serif text-6xl font-normal tracking-normal capitalize left-80 top-24"
        style={{ transform: props.xy.interpolate(transHeading) }}
      >
        About Me
      </animated.div>
      <animated.div
        className="absolute"
        style={{
          width: '100%',
          height: '500px',
          backgroundImage: `url(${langImg.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 2,
          willChange: 'transform',
          transform: props.xy.interpolate(trans1),
        }}
      />
      <animated.div
        className="absolute"
        style={{
          width: '100%',
          height: '550px',
          backgroundImage: `url(${rectImg.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          willChange: 'transform',
          transform: props.xy.interpolate(trans2),
        }}
      />
      <animated.div
        className="absolute"
        style={{
          opacity: '0.9',
          width: '400px',
          height: '400px',
          backgroundImage: `url(${profileImg.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
          transform: props.xy.interpolate(trans3),
        }}
      />
    </div>
  )
}

export default MEHeader
