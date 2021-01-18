import React from 'react'
import { animated, useSpring } from 'react-spring'
import './index.css'

const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8}px,${y / -30}px,0)`
const trans3 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

const arrayOfTrans = [trans1, trans2, trans3]

function MEHeader({}) {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))
  return (
    <div
      className="relative flex items-center justify-center w-full h-full top-2 left-2"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: [x, y] })}
    >
      <animated.div
        className="absolute font-serif text-6xl font-normal tracking-normal capitalize left-80 top-24"
        style={{ transform: props.xy.interpolate(trans1) }}
      >
        About Me
      </animated.div>
      <animated.div
        className="absolute card1"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        className="absolute card2"
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        className="card3"
        style={{ transform: props.xy.interpolate(trans3) }}
      />
    </div>
  )
}

export default MEHeader
