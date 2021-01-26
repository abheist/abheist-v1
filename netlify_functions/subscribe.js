const fetch = require('node-fetch')

exports.handler = async event => {
  const { CK_FORM_ID: formId, CK_API_KEY: netlifyAPIKey } = process.env
  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`
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
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    }
  }
}
