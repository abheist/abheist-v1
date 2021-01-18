import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import React from 'react'
import { Caption, H6 } from './Typography'

const BlogCard = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug

  return (
    <article itemScope itemType="http://schema.org/Article" className="group">
      <Link to={post.fields.slug} itemProp="url">
        <header>
          {post.frontmatter.image && (
            <Img
              objectFit="cover"
              objectPosition="center"
              fluid={post.frontmatter.image.childImageSharp.fluid}
              className="w-full h-52"
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
          <Caption className="flex items-end mt-2 font-bold gap-x-1 group-hover:text-indigo-700">
            Read more
          </Caption>
        </section>
      </Link>
    </article>
  )
}

export default BlogCard
