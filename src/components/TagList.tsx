import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import React from 'react'

const TagList = ({ tags }) => {
  return (
    <div>
      {tags.map((tag, i) => (
        <span key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
          {tags.length - 1 !== i && ', '}
        </span>
      ))}
    </div>
  )
}

export default TagList
