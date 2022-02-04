import { graphql, useStaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import React from 'react'
import Container from './Container'
import { Subtitle2 } from './Typography'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const social = data.site.siteMetadata?.social

  return (
    <div className="mt-16 mb-16">
      <Container className="lg:px-24 ">
        <Subtitle2 className="text-lg leading-loose">
          Do you have any questions, or simply wish to contact me privately?
          Don't hesitate to shoot me a DM on{' '}
          <OutboundLink
            href={`https://twitter.com/${social?.twitter || ``}`}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600"
          >
            Twitter
          </OutboundLink>
          .
        </Subtitle2>
        <p className="mt-8 text-lg leading-loose">
          Have a wonderful day.
          <br /> Abhishek 🙏
        </p>
      </Container>
    </div>
  )
}

export default Bio
