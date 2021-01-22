import Img from 'gatsby-image'
import React from 'react'
import { Body1, H2 } from './Typography'

const HomeHeader = ({ avatar }) => {
  return (
    <div className="flex flex-row items-end justify-end w-full">
      <div
        className="z-10 p-10 pl-0 -mb-32 bg-white -mr-60"
        style={{ maxWidth: '600px' }}
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
        className="w-full md:w-2/3"
        style={{
          height: '627px',
          boxShadow: '-16px 16px  var(--primary-color)',
        }}
        fixed={avatar.childImageSharp.fixed}
      />
    </div>
  )
}

export default HomeHeader
