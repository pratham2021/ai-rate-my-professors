'use server'

import { ChatOpenAI } from "@langchain/openai";

const chatModel = new ChatOpenAI({
  apiKey: process.env.OpenAI_API_KEY
})

export async function generateStuff(something) {
  prompt = ``;
  const response = await chatModel.invoke(prompt);
  return JSON.parse(String(response.content));
}