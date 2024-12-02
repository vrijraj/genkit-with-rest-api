const express = require("express");
const app = express();

import { genkit } from 'genkit';
import { googleAI, gemini15Flash } from '@genkit-ai/googleai'

const PORT = 3002;

const ai = genkit({
  plugins: [googleAI( {apiKey: "YOUR_API_KEY"} )],
  model: gemini15Flash,
});

app.get("/", async (req, res) => {
  const { text } = await ai.generate('say Make Travel Itinerary from India to Baku for 4 Days');
  res.send({
    success: true,
    data: text
  });
});


app.listen(PORT, () => console.log("Backend is Running"));
