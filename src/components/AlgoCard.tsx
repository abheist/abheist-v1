import { Link } from 'gatsby'
import React from 'react'
import { Overline, Subtitle1 } from './Typography'

// export interface AlgoCardProp {
//   excerpt: string
//   fields: {
//     slug: string
//   }
//   frontmatter: {
//     data: string
//     description: string
//     featured: boolean
//     image: any
//     title: string
//     difficulty: string
//     category: string
//   }
// }

const AlgoCard = ({ algo }) => {
  return (
    <div
      className="p-2 border border-l-8 rounded-lg group"
      style={{
        borderLeftColor: `${
          algo.frontmatter.difficulty === 'easy'
            ? 'rgba(16, 185, 129)'
            : algo.frontmatter.difficulty === 'medium'
            ? 'rgba(59, 130, 246)'
            : 'rgba(239, 68, 68)'
        }`,
      }}
    >
      <Link to={algo.fields.slug}>
        <div className="flex flex-row items-center justify-between">
          <Subtitle1
            level={3}
            className={`text-sm font-bold group-hover:text-indigo-primary`}
          >
            {algo.frontmatter.title}
          </Subtitle1>
          <Overline className="px-2 py-0.5 bg-green-300 rounded-xl">
            {algo.frontmatter.category}
          </Overline>
        </div>
      </Link>
    </div>
  )
}

export default AlgoCard
