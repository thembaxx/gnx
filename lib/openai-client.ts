import { createOpenAI } from "@ai-sdk/openai";

export const openai = createOpenAI({
  // custom settings, e.g.
  apiKey: process.env.OPENAI_API_KEY as string,
  compatibility: "strict", // strict mode, enable when using the OpenAI API
});
