import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import React from 'react'

const TagList = ({ tags, className }) => {
  return (
    <div className={className}>
      {tags.map(tag => (
        <span key={tag.fieldValue}>
          <Link
            to={`/tags/${kebabCase(tag.fieldValue)}/`}
            className="inline-block px-2 py-1 m-1 text-sm capitalize bg-yellow-400 rounded-sm"
          >
            {tag.fieldValue}
            {/* ({tag.totalCount}) */}
          </Link>
        </span>
      ))}
    </div>
  )
}

export default TagList
