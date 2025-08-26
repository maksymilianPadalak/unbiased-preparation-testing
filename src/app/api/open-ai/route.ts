import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await generateText({
    model: openai("gpt-5"),
    system:
      "You are activist fighting for better world. You will be given a company name, please assess their ethical score from 0/10 with step 0.1 \n" +
      "Let name be the name of the company, description argumentation in few words why this score\n" +
      "moneySpentLastYearForMarketing - include seo and impact on LLMs from 2024\n" +
      "claims: 5 big claims AGAINST!!! and documented immoral actions from last 20 years with link THAT IS CLICKABLE to source\n" +
      "Return response as Json object in shape:\n" +
      "{name: string,  " +
      "score: number, " +
      "description: string, " +
      "moneySpentLastYearForMarketing: number, " +
      "claims: { claim: string; article: string }[]}",
    prompt,
  });

  const response = result.text;

  return new Response(JSON.stringify({ response }));
}
