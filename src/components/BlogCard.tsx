import { Link } from 'gatsby'
import React from 'react'
import { H5 } from './Typography'

const BlogCard = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug

  return (
    <article itemScope itemType="http://schema.org/Article" className="my-16">
      <header>
        <Link to={post.fields.slug} itemProp="url">
          <div
            className={`w-full bg-blue-400 h-52`}
            style={{
              background: `url(${post.frontmatter.image.childImageSharp.fluid.src})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          ></div>
        </Link>
        <H5 className="mt-4">
          <Link to={post.fields.slug} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </H5>
      </header>
      <section className="mt-2">
        <Link to={post.fields.slug} itemProp="url">
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </Link>
      </section>
    </article>
  )
}

export default BlogCard
