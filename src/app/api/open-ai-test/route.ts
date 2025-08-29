import OpenAI from "openai";

const client = new OpenAI();

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const response = await client.responses.create({
    model: "gpt-5-nano",
    input: prompt,
  });

  return new Response(JSON.stringify({ response: response.output_text }));
}
