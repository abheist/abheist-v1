// import type { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from "node-fetch";

// this function is for newsletter subscription, calling convertkit
export default async (request, response) => {
  const { CONVERTKIT_API_KEY } = process.env;

  // getting the email out of request
  const body = JSON.parse(request.body);
  const email = body.email;

  try {
    const res = await fetch(`https://api.convertkit.com/v3/forms/1922220/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        api_key: CONVERTKIT_API_KEY
      })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    if (res.error) {
      console.error(res.error);
      return res
        .status(200)
        .send({ statusCode: 500, body: JSON.stringify(res.error.message) });
    }

    return response.status(200).send({ statusCode: 200, body: "success" });
  } catch (error) {
    return response
      .status(200)
      .send({ statusCode: 500, body: JSON.stringify(error.message) });
  }
}
