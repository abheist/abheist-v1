import React, { useState } from 'react'
import Container from './Container'
import { Body1, Caption, H5 } from './Typography'

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
    <div className="bg-indigo-50">
      <Container className="py-40">
        {status ? (
          <div className="flex flex-row items-center justify-center h-full bg-green-50">
            <div className="py-20 text-center w-60">
              You've signed up to the mailing list, thanks for subscribing!
            </div>
          </div>
        ) : (
          <div className="px-8 py-12 bg-white rounded-xl">
            <H5 className="font-bold xs:px-16">Subscribe to my newsletter</H5>
            <Body1 className="mt-8">
              Get email from me about my ideas, full-stack development
              resources, tricks and tips as well as exclusive previews of
              upcoming articles.
            </Body1>
            <form
              action="/api/subscribe"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-row w-full mt-8"
            >
              <input
                type="email"
                name="email"
                id="email"
                title="email"
                aria-label="email"
                required
                placeholder="Email address is..."
                className="flex-1 p-4 border-2 border-yellow-300 rounded-l-lg"
              />
              <button className="flex-initial px-6 text-lg font-bold text-center text-gray-800 bg-yellow-300 hover:bg-yellow-400 rounded-r-lg">
                Sign me up!
              </button>
            </form>
            <Caption className="mt-6">
              No spam. Just the highest quality ideas you’ll find on the web.
            </Caption>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Newsletter
