import React, { useEffect, useState } from 'react'
import AlgoCard from './AlgoCard'
import AlgoPageSection from './AlgoPageSection'
import Container from './Container'
import { H6 } from './Typography'

const AlgoList = ({ posts: articles }) => {
  const latestPost = articles[0]
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState(() => articles)

  useEffect(() => {
    let posts_ = articles.filter(
      article =>
        article.frontmatter.title.toLowerCase().search(search.toLowerCase()) !==
        -1
    )
    setPosts(posts_)
  }, [search])

  const articlesSection = {
    heading: 'Algorithms',
    description:
      'Here, I try to put all the algorithms which I learn and learned from some of the places. Mostly learned from HackerRank, LeetCode, AlgoExpert or CodeChef. If you have any questions, please email me. Thank you 🙏',
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
    <>
      <AlgoPageSection picSide="right" data={articlesSection} />
      <Container className="mb-32">
        <div>
          <input
            type="text"
            placeholder="Search these algos..."
            className="w-full p-3 mb-16 border border-gray-500"
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
        </div>

        <div>
          <H6 className="font-bold">RECENTLY ADDED</H6>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-y-8 gap-x-8">
            {posts.map(post => (
              <AlgoCard key={post.fields.slug} algo={post} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default AlgoList
