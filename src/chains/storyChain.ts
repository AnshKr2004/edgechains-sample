import { generateStory } from '../api/gemini';

export const createPersonalizedStory = async (name: string, theme: string) => {
  const prompt = `Create a personalized story for a person named ${name}. The theme of the story is ${theme}.`;
  const story = await generateStory(prompt);
  return story;
};
