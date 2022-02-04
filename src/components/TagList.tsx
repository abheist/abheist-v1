import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import React from 'react'

const TagList = ({ tags, className }) => {
  return (
    <div className={className}>
      {tags.map(tag => (
        <span key={tag.fieldValue}>
          <Link
            to={`/${kebabCase(tag.fieldValue)}/`}
            className="m-1 inline-block rounded-sm bg-yellow-400 px-2 py-1 text-sm capitalize"
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
