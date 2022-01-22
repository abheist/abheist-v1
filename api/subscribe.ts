import type { VercelRequest, VercelResponse } from '@vercel/node'

export default (request: VercelRequest, response: VercelResponse) => {
  const { name } = request.query
  response.status(200).send(`Hello ${name}!`)
}

// export async function handler(event, context) {
//   const { REVUE_API_KEY } = process.env
//   const url = `https://www.getrevue.co/api/v2/subscribers`

//   const { email } = JSON.parse(event.body)

//   try {
//     await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Token ${REVUE_API_KEY}`,
//       },
//       body: JSON.stringify({
//         email,
//         double_opt_in: false,
//       }),
//     })
//       .then(res => res.json())
//       .then(res => console.log(res))
//       .catch(error => {
//         throw new Error(error)
//       })
//     return {
//       statusCode: 200,
//       body: 'success',
//     }
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify(error.message),
//     }
//   }
// }
