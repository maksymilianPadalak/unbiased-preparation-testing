export type OpenAiResponse = {
  name: string;
  score: number;
  description: string;
  moneySpentLastYearForMarketing: number;
  claims: { claim: string; article: string }[];
};
