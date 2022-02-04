import React from 'react'
import Container from './Container'
import EasyMediumHardChips from './EasyMediumHardChips'
import { Body1, H3 } from './Typography'

interface AlgoPageSectionProps {
  backgroundColor?: string
  picSide?: 'left' | 'right'
  data: {
    heading: string
    description: string
    to?: string
    linkName?: string
    latestArticle?: {
      pic: any
      overline: string
      heading: string
      description: string
      to: string
    }
    featured?: {
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        data: string
        description: string
        featured: boolean
        image: any
        title: string
      }
    }[]
  }
}

const AlgoPageSection = ({
  backgroundColor,
  picSide = 'left',
  data: { heading, description, to, linkName, latestArticle, featured },
}: AlgoPageSectionProps) => {
  return (
    <div className={backgroundColor}>
      <Container className="pt-0 pb-24 lg:pt-24">
        <div className="flex w-full flex-col justify-between lg:flex-row lg:gap-32">
          <div
            className={`order-1 ${
              picSide === 'left' ? 'lg:order-2' : 'lg:order-1'
            } py-8`}
          >
            <H3>{heading}</H3>
            <Body1 className="mt-8">{description}</Body1>
          </div>
        </div>
        <EasyMediumHardChips />
      </Container>
    </div>
  )
}

export default AlgoPageSection
