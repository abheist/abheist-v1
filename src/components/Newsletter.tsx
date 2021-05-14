import React, { useState } from 'react'
import Container from './Container'
import { Body1, Caption, H3, Subtitle1 } from './Typography'

const Newsletter = () => {
  const [status, setStatus] = useState(() => false)

  const handleSubmit = event => {
    event.preventDefault()

    const data = new FormData(event.target)

    fetch('/.netlify/functions/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        email: data.get('email'),
      }),
    }).then(res => {
      if (res.status === 301) {
        setStatus(true)
      }
    })
  }

  return (
    <div className="bg-yellow-50">
      <Container className="grid grid-cols-1 py-40 lg:grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-8">
        <div>
          <H3>Join Me</H3>
          <Body1 className="mt-8">
            I am fortunate enough to share my work with a you. Thanks to you and
            other people who subscribe to my email newsletter.
          </Body1>
          <ol className="grid gap-4 mt-8 list-disc list-inside">
            <li>
              The TechLife Thursday newsletter, which contains weekly updates in
              the tech and design industry and some of the life advices from the
              top mentors of the industry (Weekly)
            </li>
            <li>
              Long-form articles on how to live better and healthier as a
              developer (Once or twice per month)
            </li>
            <li>
              Discounts and offers on courses and products out there (A few
              times per year)
            </li>
          </ol>
        </div>
        <div className="h-full bg-blue-100">
          {status ? (
            <div className="flex flex-row items-center justify-center h-full bg-green-50">
              <div className="py-20 text-center w-60">
                You've signed up to the mailing list, thanks for suscribing!
              </div>
            </div>
          ) : (
            <div className="px-4 py-16 bg-white">
              <Subtitle1 className="font-bold text-center xs:px-16">
                Design, Development & Life Improvement tips
              </Subtitle1>
              <form
                action="/api/subscribe"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  title="email"
                  aria-label="email"
                  required
                  placeholder="Email address is..."
                  className="w-full p-4 mt-8 text-center border-2 border-yellow-300"
                />
                <button className="w-full py-3 mt-2 text-lg font-bold text-center text-gray-800 bg-yellow-300 hover:bg-yellow-400">
                  Try the free newsletter
                </button>
              </form>
              <Caption className="mt-16 text-center sm:px-20">
                No spam. Just the highest quality ideas you’ll find on the web.
              </Caption>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Newsletter
