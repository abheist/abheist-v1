import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Card from './Card'
import Container from './Container'
import MEHeader, { getFluid } from './MeHeader'
import { Body1, Body2, H2, H5, Subtitle1 } from './Typography'

const AboutMe = ({ posts, picsGrid, headerImages }) => {
  let headerStaticImage = getFluid(headerImages, 'me-header-static')

  return (
    <div className="overflow-x-hidden">
      <header className="w-full xl:hidden">
        <div
          className={`w-full`}
          style={{
            background: `#F8CD5F`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        >
          <Container className="relative">
            <H2 className="absolute z-10 top-24 left-8">About Me</H2>
          </Container>
          <GatsbyImage
            image={headerStaticImage}
            style={{ maxWidth: '1200px' }}
            className="self-end mx-auto"
            alt="Abhishek Kumar Singh"
          />
        </div>
      </header>
      <header
        className="hidden xl:block"
        style={{ height: '524px', background: `#F8CD5F` }}
      >
        <MEHeader headerImages={headerImages} />
      </header>
      <Container className="flex flex-col mt-8 md:flex-row md:mt-52">
        <div className="flex flex-col order-2 md:w-1/4 gap-y-6 md:order-1">
          <H5 className="mt-8 normal-case">
            <OutboundLink
              href="mailto:hi@abheist.com"
              className="hover:text-indigo-primary"
              target="_blank"
            >
              hi@abheist.com
            </OutboundLink>
          </H5>
          <Body2>
            ----------{' '}
            <OutboundLink
              href="https://twitter.com/abheist"
              className="hover:text-indigo-primary"
              target="_blank"
            >
              Twitter
            </OutboundLink>
          </Body2>
          <Body2>
            ----------{' '}
            <OutboundLink
              href="https://instagram.com/abheist"
              className="hover:text-indigo-primary"
              target="_blank"
            >
              Instagram
            </OutboundLink>
          </Body2>
          <Body2>
            ----------{' '}
            <OutboundLink
              href="https://linkedin.com/in/abheist"
              className="hover:text-indigo-primary"
              target="_blank"
            >
              LinkedIn
            </OutboundLink>
          </Body2>
          <Body2>
            ----------{' '}
            <OutboundLink
              href="https://unsplash.com/@abheist/"
              className="hover:text-indigo-primary"
              target="_blank"
            >
              Unsplash
            </OutboundLink>
          </Body2>
          <Body2>
            ----------{' '}
            <OutboundLink
              href="https://github.com/abheist/"
              className="hover:text-indigo-primary"
              target="_blank"
            >
              Github
            </OutboundLink>
          </Body2>
          <Body2>
            ----------{' '}
            <OutboundLink
              href="https://dribbble.com/abheist"
              className="hover:text-indigo-primary"
              target="_blank"
            >
              Dribbble
            </OutboundLink>
          </Body2>
        </div>
        <div className="order-1 md:w-3/4 md:order-2">
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
      </Container>
      <Container className="py-16 md:py-52">
        <H2>Popular Articles</H2>
        <Subtitle1 className="mt-10">
          To help you find something that interests you, I’ve made a list of my
          favourite creations below.
        </Subtitle1>
        {posts && (
          <div className="grid gap-8 mt-8 grid-col-1 lg:grid-cols-3">
            {posts.map(card => (
              <Card key={card.fields.slug} data={card} />
            ))}
          </div>
        )}
      </Container>
      <div className="bg-indigo-50">
        <Container className="py-40">
          <H2>Photography</H2>
          <Subtitle1 className="mt-10">
            Some of my favourite photography work below. To look more, you can
            check out my Unsplash profile.
          </Subtitle1>
          <div className="grid gap-1 mt-16 sm:grid-cols-2 md:grid-cols-3">
            {picsGrid.map(image => (
              <GatsbyImage
                image={{
                  ...image.node.childImageSharp.gatsbyImageData,
                  aspectRatio: 1 / 1,
                }}
                alt=""
                key={image.node.childImageSharp.gatsbyImageData.src}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default AboutMe
