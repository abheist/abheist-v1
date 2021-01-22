import React from 'react'
import { Body2, Caption } from './Typography'

const NameIcon = ({ name, icon, value }) => {
  return (
    <div className="flex flex-col items-center">
      <Caption>{name}</Caption>
      {icon}
      <Body2>{value}</Body2>
    </div>
  )
}

export default NameIcon
