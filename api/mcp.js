export const config = {
  runtime: "nodejs"
};

export default async function handler(req, res) {

  const response = await fetch("https://mcp.brevo.com/v1/brevo/mcp", {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
      "Accept": "text/event-stream"
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.text();

  res.status(response.status).send(data);
}
