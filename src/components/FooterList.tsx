import { Link } from 'gatsby'
import React from 'react'
import { Body2, Subtitle1 } from './typography'

interface FooterListProp {
  listItems: { name: string; link: string }[]
  title?: string
  hidden?: boolean
}

const FooterList = ({
  title = 'PAGES',
  listItems,
  hidden = false,
}: FooterListProp) => {
  return (
    <div className="flex flex-col">
      <Subtitle1 className={`uppercase text-gray-500 ${hidden && 'invisible'}`}>
        {title}
      </Subtitle1>
      <ol className={`grid mt-8 gap-y-4`}>
        {listItems.map(item => (
          <li key={item.name}>
            <Link to={item.link}>
              <Body2 style={{ color: '#FFFFFF' }}>{item.name}</Body2>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default FooterList
