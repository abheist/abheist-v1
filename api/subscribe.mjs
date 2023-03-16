import fetch from "node-fetch";

export default async (request, response) => {
  const { CONVERTKIT_API_KEY } = process.env;

  const body = JSON.parse(request.body);
  const email = body.email;

  const res = await subscribeToConvertKit(email, CONVERTKIT_API_KEY);
  return res.status(200).send({ statusCode: 200, body: "success" });

  if (res.error) {
    console.error(res.error);
    return res
      .status(200)
      .send({ statusCode: 500, body: JSON.stringify(res.error.message) });
  }
}

export default async function subscribeToConvertKit(email, apiKey) {
  try {
    const response = await fetch(`https://api.convertkit.com/v3/forms/1922220/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        api_key: apiKey
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}
