export type OpenAiResponse = {
  name: string;
  score: number;
  description: string;
  moneySpentLastYearForMarketing: string;
  claims: { claim: string; article: string }[];
};
