import { Link } from 'gatsby'
import React from 'react'
import { H6, Subtitle1 } from './Typography'

const PopularContent = ({ posts, heading }) => {
  return (
    <div>
      <H6 className="font-bold uppercase">{heading}</H6>
      {posts.map(post => (
        <Subtitle1 key={post.fields.slug} className="mt-4">
          <Link to={post.fields.slug} itemProp="url">
            <span itemProp="headline" className="hover:text-indigo-primary">
              {post.frontmatter.title}
            </span>
          </Link>
        </Subtitle1>
      ))}
    </div>
  )
}

export default PopularContent
