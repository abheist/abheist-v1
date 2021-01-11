import { Link } from 'gatsby'
import React from 'react'
import BlogCard from './BlogCard'
import PicPageSection from './PicPageSection'
import TagList from './TagList'
import { H6, Subtitle1 } from './Typography'

const BlogList = ({ posts, tags }) => {
  const latestPost = posts[0]

  const articlesSection = {
    heading: 'Articles',
    description:
      'Sort and detailed notes of my learnings of software development, design, life and world. They are the diary or record of my contemplative life. This page will constantly update as my second brain, so bookmark it if you want to check back in a few months. If you have any questions. You can also email me. Thank you 🙏',
    latestArticle: {
      pic: latestPost.frontmatter.image,
      overline: 'Latest',
      heading: latestPost.frontmatter.title,
      description:
        latestPost.frontmatter.description || latestPost.frontmatter.excerpt,
      to: latestPost.fields.slug,
    },
  }

  return (
    <div className="container px-4 mx-auto">
      <PicPageSection picSide="right" data={articlesSection} />
      <div>
        <input
          type="text"
          placeholder="Search these articles..."
          className="w-full p-3 mt-8 mb-16 border border-gray-500"
        />
      </div>
      <div className="flex flex-row gap-16 mb-32">
        <div className="w-2/3">
          <H6 className="font-bold">RECENTLY PUBLISHED</H6>
          {posts.map(post => (
            <BlogCard key={post.fields.slug} post={post} />
          ))}
        </div>
        <div className="w-1/3">
          <div>
            <H6 className="font-bold">TOP CATEGORIES</H6>
            <TagList tags={tags} className="mt-8" />
          </div>
          <div className="mt-16">
            <H6 className="font-bold">POPULAR CONTENT</H6>
            {posts.map(post => (
              <Subtitle1 key={post.fields.slug} className="mt-4">
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{post.frontmatter.title}</span>
                </Link>
              </Subtitle1>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogList
