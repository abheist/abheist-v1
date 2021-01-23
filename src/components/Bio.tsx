import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import React from 'react'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 64, height: 64, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
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

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="flex flex-col sm:flex-row items-start justify-center mx-auto my-24 px-4 gap-x-4">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <p className="sm:w-10/12 prose">
          <strong>{author.name}</strong>, {author?.summary || null}
          {` `}
          <OutboundLink
            href={`https://twitter.com/${social?.twitter || ``}`}
            target="_blank"
            rel="noreferrer"
          >
            Follow on Twitter for updates.
          </OutboundLink>
        </p>
      )}
    </div>
  )
}

export default Bio
