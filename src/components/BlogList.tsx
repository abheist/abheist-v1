import { Link } from 'gatsby'
import React from 'react'
import BlogCard from './BlogCard'
import PicPageSection from './PicPageSection'
import TagList from './TagList'
import { H6, Subtitle1 } from './typography'

const BlogList = ({ posts, tags }) => {
  const latestPost = posts[0]

  const articlesSection = {
    heading: 'Book Notes',
    description:
      'Most of my essays are about business, education, and what it means to be a citizen of the Internet. These essays are a record of my intellectual quest to make sense of the world. They’re the diary of my contemplative life.',
    to: '/book-notes',
    linkName: 'All Book Notes',
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
              <Subtitle1 className="mt-4">
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
