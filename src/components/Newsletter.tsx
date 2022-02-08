import React, { useState } from 'react'
import Container from './Container'
import { Body1, Caption, H5 } from './Typography'

const Newsletter = () => {
  const [status, setStatus] = useState(() => false)

  const handleSubmit = event => {
    event.preventDefault()

    const data = new FormData(event.target)

    fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        email: data.get('email'),
      }),
    }).then(res => {
      if (res.status === 200) {
        setStatus(true)
      }
    })
  }

  return (
    <div className="bg-indigo-50">
      <Container className="py-24">
        {status ? (
          <div className="flex h-full flex-row items-center justify-center bg-green-50">
            <div className="w-60 py-20 text-center">
              You've signed up to the mailing list, thanks for subscribing!
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-white px-4 py-12 sm:px-8">
            <H5 className="xs:px-16 font-bold">Subscribe to my newsletter</H5>
            <Body1 className="mt-8">
              Get email from me about my ideas, full-stack development
              resources, tricks and tips as well as exclusive previews of
              upcoming articles.
            </Body1>
            <form
              action="/api/subscribe"
              method="POST"
              onSubmit={handleSubmit}
              className="mt-8 flex w-full flex-row"
            >
              <input
                type="email"
                name="email"
                id="email"
                title="email"
                aria-label="email"
                required
                placeholder="Email address is..."
                className="flex-1 rounded-l-lg border-2 border-indigo-500 p-4 focus:border-blue-500 focus:outline-none focus:ring"
              />
              <button className="flex-initial rounded-r-lg bg-indigo-600 px-6 text-center text-sm font-bold text-white hover:bg-indigo-700 sm:text-lg">
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
