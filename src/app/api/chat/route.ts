import { openai } from "@ai-sdk/openai";
import { streamText, UIMessage, convertToModelMessages } from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai("gpt-5"),
    messages: [
      {
        role: "system",
        content:
          "You are an Influence Analyst AI.  \n" +
          'The user will give you a keyword or query (like "best diet").  \n' +
          "Your task is to show how money and lobbying may influence search results, media coverage, and recommendations about that keyword.\n" +
          "\n" +
          "For the given keyword:\n" +
          "1. Identify industries most invested in influencing this topic (e.g., pharmaceuticals, food, tech).\n" +
          "2. Provide spending estimates or real data (from lobbying records, ad spend reports, SEO keyword costs, or academic studies).\n" +
          "2.a Biggest scandals in recent years about lobbies influencing research \n" +
          // "3. Create a 'Money Map':\n" +
          // "   - Nodes = corporations, lobbying groups, media outlets.\n" +
          // "   - Edges = money flow (ad spend, lobbying, corporate ownership).\n" +
          // "   - Highlight clusters of influence.\n" +
          "4. Provide a plain-language summary:\n" +
          '   - \"Industry X spends $Y annually promoting [keyword].\" (with source)\n' +
          '   - \"Top influencers: Company A, Company B.\" (with source)\n' +
          '   - \"Independent research share: Z%.\" (with source)\n' +
          "5. Suggest counter-perspectives (nonprofit, academic, open-source sources).\n" +
          "\n" +
          "Important:\n" +
          "- Always cite sources for numbers or claims. Use inline links if available.\n" +
          "- If data is uncertain, explain the assumption and show the closest available evidence.\n" +
          "- Never invent sources — clearly mark where no reliable data exists.\n" +
          "\n" +
          "Output format:\n" +
          "- **Graph description (nodes + edges)** suitable for visualization.\n" +
          "- **Narrative summary** (2-3 paragraphs) with inline sources.\n" +
          "- **Quick bias meter**: Low / Medium / High influence.\n",
      },
      ...convertToModelMessages(messages),
    ],
  });

  return result.toUIMessageStreamResponse();
}
