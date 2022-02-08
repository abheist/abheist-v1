// import type { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'node-fetch'

export default async (request, response) => {
  const { REVUE_API_KEY } = process.env
  const url = `https://www.getrevue.co/api/v2/subscribers`

  const body = JSON.parse(request.body)
  const email = body.email

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${REVUE_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        double_opt_in: false,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => {
        throw new Error(error)
      })
    return response.status(200).send({ statusCode: 200, body: 'success' })
  } catch (error) {
    return response
      .status(200)
      .send({ statusCode: 500, body: JSON.stringify(error.message) })
  }
}
