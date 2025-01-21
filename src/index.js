import express from "express";
import { genkit } from "genkit";
import { googleAI, gemini15Flash } from "@genkit-ai/googleai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3002;

const apiKey = process.env.API_KEY;

const ai = genkit({
  plugins: [googleAI({ apiKey })],
  model: gemini15Flash,
});

app.get("/", async (req, res) => {
  try {
    const { text } = await ai.generate("say Make Travel Itinerary from India to Baku for 4 Days");
    res.send({
      success: true,
      data: text,
    });
  } catch (error) {
    console.error("Error generating AI response:", error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
    });
  }
});

app.listen(PORT, () => console.log(`Backend is running on port ${PORT}`));