import React from 'react'
import { Body1, Caption, H3, Subtitle1 } from './Typography'

const Newsletter = () => {
  const handleSubmit = event => {
    event.preventDefault()

    console.log(event.target)
    const data = new FormData(event.target)

    fetch('/.netlify/functions/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        email: data.get('email'),
      }),
    }).then(res => {
      console.log(res)

      if (res.status === 200 && res.redirected === true) {
        window.location.href = res.url
      }
    })
  }

  return (
    <div className="bg-yellow-50">
      <div className="container flex flex-row py-40 mx-auto">
        <div className="w-1/2">
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
        <div className="w-1/2 h-full pl-16">
          <div className="px-4 py-16 bg-white">
            <Subtitle1 className="px-16 font-bold text-center">
              Design, Development & Life Improvement tips
            </Subtitle1>
            <form action="/api/subscribe" method="POST" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email address is..."
                className="w-full p-4 mt-8 text-center border-2 border-yellow-300"
              />
              <button className="w-full py-3 mt-2 text-lg font-bold text-center text-gray-800 bg-yellow-300 hover:bg-yellow-400">
                Try the free newsletter
              </button>
            </form>
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
