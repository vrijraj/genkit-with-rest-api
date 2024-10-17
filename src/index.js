const express = require("express");
const app = express();

const { generate } = require("@genkit-ai/ai");
const { configureGenkit } = require("@genkit-ai/core");
const { googleAI, gemini15Flash } = require("@genkit-ai/googleai");

const PORT = 3002;

configureGenkit({
  plugins: [googleAI({ apiKey: "YOUR_API_KEY" })],
});

app.get("/", async (req, res) => {
  const llmResponse = await generate({
    prompt: `Make Travel Itinerary from India to Baku for 4 Days`,
    model: gemini15Flash,
    config: {
      temperature: 1,
    },
  });

  res.send({
    success: true,
    data: llmResponse.text(),
  });
});


app.listen(PORT, () => console.log("Backend is Running"));