import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Body1, H2 } from './Typography'

const HomeHeader = ({ avatar }) => {
  return (
    <div className="flex w-full flex-col justify-end lg:flex-row lg:items-end">
      <div
        className="z-10 order-2 mt-8 p-2 lg:order-1 lg:-mb-56 lg:-mr-64 lg:bg-white lg:p-10 lg:pl-0 xl:-mb-32 2xl:-mr-96"
        style={{ maxWidth: '560px' }}
      >
        <H2>
          Hi, I'm <span className="strike">Abhishek</span> a Product Developer
        </H2>
        <Body1 className="mt-8">
          who has a fair experience as a designer and loves to explore ideas,
          strategies and more about health, happiness & more productive life.
        </Body1>
      </div>
      <GatsbyImage
        className="order-1 w-full lg:order-2 lg:w-2/3"
        style={{
          boxShadow: '-16px 16px  var(--primary-color)',
        }}
        image={avatar.childImageSharp.gatsbyImageData}
        alt=""
      />
    </div>
  )
}

export default HomeHeader
