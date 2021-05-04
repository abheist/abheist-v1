import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from 'react'

const Bio = () => {
  const data = useStaticQuery(graphql`query BioQuery {
  avatar: file(absolutePath: {regex: "/profile-pic.jpeg/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 64
        height: 64
        quality: 95
        placeholder: TRACED_SVG
        layout: FIXED
      )
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

  const avatar = data?.avatar?.childImageSharp?.gatsbyImageData

  return (
    <div className="flex flex-col items-start justify-center px-4 mx-auto my-24 sm:flex-row gap-x-4">
      {avatar && (
        <GatsbyImage
          image={avatar}
          alt={author?.name || ``}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <p className="prose sm:w-10/12">
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
