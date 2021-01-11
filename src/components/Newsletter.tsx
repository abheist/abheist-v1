import { Link } from 'gatsby'
import React from 'react'
import { Body1, Caption, H3, Subtitle1 } from './Typography'

const Newsletter = () => {
  return (
    <div className="bg-yellow-50">
      <div className="container flex flex-row mx-auto">
        <div className="w-1/2 py-40">
          <H3>Join Me</H3>
          <Body1 className="mt-4">
            I am fortunate to share my work with a broad audience. Over
            1,000,000 people subscribe to my weekly email newsletter.
          </Body1>
          <ol className="grid gap-4 mt-8 list-disc list-inside">
            <li>The 3-2-1 Thursday newsletter (Weekly)</li>
            <li>
              Long-form articles on how to live better (Once or twice per month)
            </li>
            <li>
              Discounts and offers on my books and products (A few times per
              year)
            </li>
          </ol>
        </div>
        <div className="w-1/2 h-full py-24 pl-16">
          <div className="px-4 py-16 bg-white">
            <Subtitle1 className="px-16 font-bold text-center">
              Self-improvement tips based on proven scientific research.
            </Subtitle1>
            <input
              type="text"
              placeholder="My email address is..."
              className="w-full p-4 mt-8 text-center border-2 border-yellow-300"
            />
            <Link to="/">
              <div className="px-10 py-3 mt-2 text-lg font-bold text-center text-gray-900 bg-yellow-300">
                Try the free newsletter
              </div>
            </Link>
            <Caption className="px-20 mt-16 text-center">
              No spam. Just the highest quality ideas you’ll find on the web.
            </Caption>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
