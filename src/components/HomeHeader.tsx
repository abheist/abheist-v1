import React from 'react'
import { Body1, H2 } from './Typography'

const HomeHeader = ({ avatar }) => {
  console.log(avatar)
  return (
    <div className="flex flex-row justify-end w-full">
      <div
        className="flex flex-row items-end w-full bg-blue-400 md:w-2/3"
        style={{
          height: '627px',
          background: `url(${avatar.childImageSharp.fluid.src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          boxShadow: '-16px 16px  var(--primary-color)',
        }}
      >
        <div className="p-10 -mb-16 bg-white -ml-52" style={{ width: '600px' }}>
          <H2>
            Hi, I'm <span className="strike">Abhishek</span> a Product Developer
          </H2>
          <Body1 className="mt-8">
            I love exploring ideas, strategies & tools to develop a good
            software. Expore more about happiness, health and more product life.
          </Body1>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
