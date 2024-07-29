import dotenv from 'dotenv';

const { GoogleGenerativeAI } = require("@google/generative-ai")

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY)

export const generateStory = async (prompt: string) => {
  const response = await genAI.getGenerativeAI({
    model: 'gemini-1.5-flash',
    prompt,
    max_tokens: 300,
    temperature: 0.9,
  });
  return response.body.generations[0].text;
};
