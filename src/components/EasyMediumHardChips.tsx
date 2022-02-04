import React from 'react'
import { Overline } from './Typography'

const EasyMediumHardChips = () => {
  return (
    <div className="flex items-center justify-start space-x-4">
      <div
        className="group border border-l-8 p-2"
        style={{ borderLeftColor: 'rgba(16, 185, 129)' }}
      >
        <div className="flex flex-row items-center justify-between">
          <Overline>Easy</Overline>
        </div>
      </div>
      <div
        className="group border border-l-8 p-2"
        style={{ borderLeftColor: 'rgba(59, 130,246)' }}
      >
        <div className="flex flex-row items-center justify-between">
          <Overline>Medium</Overline>
        </div>
      </div>
      <div
        className="group border border-l-8 p-2"
        style={{ borderLeftColor: 'rgba(239, 68, 68)' }}
      >
        <div className="flex flex-row items-center justify-between">
          <Overline>Hard</Overline>
        </div>
      </div>
    </div>
  )
}

export default EasyMediumHardChips
