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
      <Container className="py-24">
        {status ? (
          <div className="flex flex-row items-center justify-center h-full bg-green-50">
            <div className="py-20 text-center w-60">
              You've signed up to the mailing list, thanks for subscribing!
            </div>
          </div>
        ) : (
          <div
            className="px-4 py-12 bg-white sm:px-8 rounded-xl"
            id="revue-embed"
          >
            <H5 className="font-bold xs:px-16">Subscribe to my newsletter</H5>
            <Body1 className="mt-8">
              Get email from me about my ideas, full-stack development
              resources, tricks and tips as well as exclusive previews of
              upcoming articles.
            </Body1>
            <form
              action="http://newsletter.abheist.com/add_subscriber"
              method="post"
              className="flex flex-row w-full mt-8"
              id="revue-form"
              name="revue-form"
              target="_blank"
            >
              <input
                type="email"
                name="member[email]"
                id="member_email"
                title="email"
                aria-label="email"
                required
                placeholder="Email address is..."
                className="flex-1 p-4 border-2 border-indigo-500 rounded-l-lg focus:outline-none focus:ring focus:border-blue-500"
              />
              <input
                className="flex-initial px-6 text-sm font-bold text-center text-white bg-indigo-600 rounded-r-lg sm:text-lg hover:bg-indigo-700"
                type="submit"
                value="Sign me up!"
                name="member[subscribe]"
                id="member_submit"
              ></input>
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
