import { Link } from 'gatsby'
import React from 'react'
import { Caption, H6 } from './Typography'

const BlogCard = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug

  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className="my-16 group"
    >
      <Link to={post.fields.slug} itemProp="url">
        <header>
          <div
            className={`w-full bg-blue-400 h-52`}
            style={{
              background: `url(${post.frontmatter.image.childImageSharp.fluid.src})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          ></div>
          <H6 className="mt-4 font-bold group-hover:text-indigo-700">
            <span itemProp="headline">{title}</span>
          </H6>
        </header>
        <section className="mt-2">
          <p
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
