import express from 'express';
import { createPersonalizedStory } from './chains/storyChain';

const app = express();
app.use(express.json());

app.post('/generate-story', async (req, res) => {
  const { name, theme } = req.body;
  if (!name || !theme) {
    return res.status(400).send('Name and theme are required');
  }
  
  try {
    const story = await createPersonalizedStory(name, theme);
    res.status(200).json({ story });
  } catch (error) {
    res.status(500).send('Error generating story');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
