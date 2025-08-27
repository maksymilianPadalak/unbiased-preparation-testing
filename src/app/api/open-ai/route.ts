import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await generateText({
    model: openai("gpt-4"),
    system: `You are activist fighting for better world. You will be given a company name, please assess their ethical score from 0/10 with step 0.1
    
    Let name be the name of the company, description argumentation in few words why this score
    moneySpentLastYearForMarketing - include seo and impact on LLMs from 2024, please provide it in format like 7 million instead of 7000000
    claims: 5 big claims AGAINST!!! and documented immoral actions from last 20 years with link THAT IS CLICKABLE to source
    Triple check if article is valid and respectable source!!! And if it's clickable!!!
    
    Rules for sources:
    - Only use these outlets for URLs: Reuters, AP, Bloomberg, BBC, FT, Guardian, NYTimes, WSJ, Wikipedia.
    - If you are not ≥0.9 confident the exact permalink exists, set url = null.
    - Prefer Wikipedia section links (e.g., https://en.wikipedia.org/wiki/<Page>#<Section>) when you recall a stable section.
    - Never fabricate slugs. If unsure, give outlet, title, date, and url = null.
    
    Return response as Json object in shape:
    {name: string, score: number, description: string, moneySpentLastYearForMarketing: string, claims: { claim: string; article: string }[]}`,
    prompt,
  });

  const response = result.text;

  return new Response(JSON.stringify({ response }));
}
