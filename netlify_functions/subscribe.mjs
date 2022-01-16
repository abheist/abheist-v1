import fetch from 'node-fetch'

export async function handler(event, context) {
  const { CK_FORM_ID: formId, CK_API_KEY: netlifyAPIKey } = process.env
  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`
  // const url = `http://localhost:8888/.netlify/functions/subscribe​`

  console.log(url)
  const { email } = JSON.parse(event.body)

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: netlifyAPIKey,
        email,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => {
        throw new Error(error)
      })
    return {
      statusCode: 301,
      headers: {
        // Location: '/success/',
      },
      // body is unused in 3xx codes, but required in all function responses
      body: 'success',
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    }
  }
}
