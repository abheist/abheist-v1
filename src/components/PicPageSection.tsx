import { Link } from 'gatsby'
import React from 'react'
import Card from './Card'
import { Body1, H3, H6, Overline } from './typography'

interface PicPageSectionProps {
  backgroundColor?: string
  picSide: 'left' | 'right'
  pic: string
  picOverline: string
  picHeading: string
  picBody: string
  picLinkTo: string
  sectionHeading: string
  sectionBody: string
  sectionLinkName: string
  sectionLinkTo: string
}

const PicPageSection = ({
  backgroundColor,
  picSide = 'left',
  pic,
  picOverline = 'Latest',
  picHeading,
  picBody,
  picLinkTo,
  sectionHeading,
  sectionBody,
  sectionLinkName,
  sectionLinkTo,
}: PicPageSectionProps) => {
  return (
    <div className={backgroundColor}>
      <div className="container py-40 mx-auto">
        <div className="flex flex-row justify-between w-full gap-32">
          <div
            className={`flex flex-row items-end justify-end flex-shrink-0 ${
              picSide === 'left' ? 'order-1' : 'order-2'
            } w-full bg-blue-400 md:w-1/2`}
            style={{
              height: '400px',
              background: `url(${pic})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              boxShadow: '16px 16px  var(--primary-color)',
            }}
          >
            <div
              className="p-10 pr-8 -mr-4 bg-white -mb-28"
              style={{ width: '450px' }}
            >
              <Overline className="mb-2">{picOverline}</Overline>
              <Link to={picLinkTo}>
                <H3
                  style={{
                    color: 'var(--primary-color)',
                  }}
                >
                  {picHeading}
                </H3>
              </Link>
              <Body1 className="mt-8">{picBody}</Body1>
            </div>
          </div>
          <div className={`${picSide === 'left' ? 'order-2' : 'order-1'} py-8`}>
            <H3>{sectionHeading}</H3>
            <Body1 className="mt-8">{sectionBody}</Body1>
            <div className="mt-10">
              <Link
                to={sectionLinkTo}
                className="px-10 py-3 text-lg text-indigo-500 border border-indigo-500"
              >
                {sectionLinkName}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-44">
          <H6>FEATURED</H6>
          <div className="flex flex-row justify-between w-full gap-8 mt-8">
            <Card pic={pic} />
            <Card pic={pic} />
            <Card pic={pic} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PicPageSection
