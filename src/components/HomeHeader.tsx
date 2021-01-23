import Img from 'gatsby-image'
import React from 'react'
import { Body1, H2 } from './Typography'

const HomeHeader = ({ avatar }) => {
  return (
    <div
      className="flex flex-col justify-end w-full
                  lg:flex-row lg:items-end"
    >
      <div
        className="z-10 p-2 mt-8 order-2 
                  lg:p-10 lg:pl-0 lg:-mb-56 lg:bg-white lg:-mr-64 lg:order-1
                  xl:-mb-32"
        style={{ maxWidth: '560px' }}
      >
        <H2>
          Hi, I'm <span className="strike">Abhishek</span> a Product Developer
        </H2>
        <Body1 className="mt-8">
          I love exploring ideas, strategies & tools to develop a good software.
          Expore more about happiness, health and more product life.
        </Body1>
      </div>
      <Img
        className="w-full lg:w-2/3 order-1 lg:order-2"
        style={{
          boxShadow: '-16px 16px  var(--primary-color)',
        }}
        fluid={avatar.childImageSharp.fluid}
      />
    </div>
  )
}

export default HomeHeader
