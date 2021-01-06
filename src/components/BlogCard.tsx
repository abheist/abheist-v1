import { Link } from 'gatsby'
import React from 'react'
import { H5 } from './typography'

const BlogCard = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  return (
    <article itemScope itemType="http://schema.org/Article" className="my-16">
      <header>
        <div
          className={`w-full bg-blue-400 h-52`}
          style={{
            background: `url(${post.frontmatter.image.childImageSharp.sizes.src})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        <H5 className="mt-4">
          <Link to={post.fields.slug} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </H5>
      </header>
      <section className="mt-2">
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </section>
    </article>
  )
}

export default BlogCard
