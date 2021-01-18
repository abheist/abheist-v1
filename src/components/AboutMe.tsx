import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import React from 'react'
import MEHeader from './MeHeader'
import PopularContent from './PopularContent'
import { Body1, Body2, H2, H5, Subtitle1 } from './Typography'

const AboutMe = ({ posts, picsGrid, headerImage }) => {
  return (
    <div>
      <header
        className="w-full"
        style={{ height: '524px', background: `#F8CD5F` }}
      >
        <MEHeader />
      </header>
      <div className="container flex flex-row mx-auto mt-52">
        <div className="flex flex-col w-1/4 gap-y-6">
          <H5 className="mt-8 normal-case">
            <OutboundLink href="mailto:hi@abheist.com" target="_blank">
              hi@abheist.com
            </OutboundLink>
          </H5>
          <Body2>
            ----------{' '}
            <OutboundLink href="https://twitter.com/abheist">
              Twitter
            </OutboundLink>
          </Body2>
          <Body2>
            ----------{' '}
            <OutboundLink href="https://instagram.com/abheist">
              Instagram
            </OutboundLink>
          </Body2>
          <Body2>
            ----------{' '}
            <OutboundLink href="https://linkedin.com/in/abheist">
              LinkedIn
            </OutboundLink>
          </Body2>
          <Body2>
            ----------{' '}
            <OutboundLink href="https://unsplash.com/@abheist/">
              Unsplash
            </OutboundLink>
          </Body2>
        </div>
        <div className="w-3/4">
          <H2>Hi Friends</H2>
          <div className="mt-10 prose">
            <Body1>
              Product Developer and Designer who is passionate about the
              intersection of design and technology. And, how it can be used to
              make a positive impact on earth and its being.
            </Body1>
            <Body1>
              A Pragmatic, Persistent and have an eye for Innovation. I'm into
              perfection, but also live by the quote when designing and
              developing:
            </Body1>
            <blockquote>
              First do it, then do it right, then do it better
            </blockquote>
            <Body1>
              I'm a keen learner and believe in an interdisciplinary approach to
              understanding the world with focus on Agriculture, Education and
              Business, currently looking into economic side of world, focus on
              personal finance and development. Four years of Engineering and 48
              months in a Full Stack role has given me a strong foothold on the
              technical aspects and pathways to tackle real-world problems.
            </Body1>
            <Body1>
              Outside of work and academics, I’m food & nature lover, reader and
              a writer. I have also been actively involved in sports through my
              teenage years, represented my school at the district level Chess
              tournaments and participated in Basketball and Table-tennis at the
              college and company level. At times, test my hands and heart by
              sketching and writing poems.
            </Body1>
            <Body1 className="mt-10">Thanks</Body1>
            <Body1 className="mt-2">Abhishek Kumar Singh</Body1>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-52">
        <H2>Popular Links</H2>
        <Subtitle1 className="mt-10">
          To help you find something that interests you, I’ve made a list of my
          favourite creations below.
        </Subtitle1>
        <div className="flex flex-row justify-between gap-16 mt-16">
          <PopularContent posts={posts} heading="Blog post" />
          <PopularContent posts={posts} heading="Long blog post" />
          <PopularContent posts={posts} heading="Book notes" />
        </div>
      </div>
      <div className="bg-indigo-50">
        <div className="container py-40 mx-auto">
          <H2>Photography</H2>
          <Subtitle1 className="mt-10">
            Some of my favourite photography work below. To look more, you can
            check out my Unsplash profile.
          </Subtitle1>
          <div className="grid grid-cols-3 grid-rows-3 gap-1 mt-16">
            {picsGrid.map(image => (
              <Img
                fluid={{
                  ...image.node.childImageSharp.fluid,
                  aspectRatio: 1 / 1,
                }}
                key={image.node.childImageSharp.fluid.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
