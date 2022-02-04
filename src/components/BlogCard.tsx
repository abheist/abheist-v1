import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Caption, H6 } from './Typography'

const BlogCard = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug

  return (
    <article itemScope itemType="http://schema.org/Article" className="group">
      <Link to={post.fields.slug} itemProp="url">
        <header>
          {post.frontmatter.image && (
            <GatsbyImage
              objectFit="cover"
              objectPosition="center"
              image={post.frontmatter.image.childImageSharp.gatsbyImageData}
              alt=""
              className="h-52 w-full"
            />
          )}
        </header>
        <section className="mt-4">
          <H6 className="font-bold group-hover:text-indigo-700">
            <span itemProp="headline">{title}</span>
          </H6>
          <p
            className="mt-2"
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
          <Caption className="mt-2 flex items-end gap-x-1 font-bold group-hover:text-indigo-700">
            Read more
          </Caption>
        </section>
      </Link>
    </article>
  )
}

export default BlogCard
