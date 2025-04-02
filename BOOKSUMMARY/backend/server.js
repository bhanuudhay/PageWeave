require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const API_KEY = process.env.GEMINI_API_KEY;

// Route to summarize a book with a longer summary
app.post("/summarize", async (req, res) => {
  const { book, author } = req.body;

  if (!book || !author) {
    return res
      .status(400)
      .json({ error: "Book title and author are required" });
  }

  const prompt = `
  Write a detailed summary of the book "${book}" by ${author}. 
  - The summary should be **10-20 pages long** and written in **simple, easy-to-understand language**.
  - Break the summary into **sections or chapters** with proper headings.
  - Use a **storytelling approach** while explaining the book.
  - Capture the **main themes, characters, and important events**.
  - Avoid unnecessary details and focus on the core message.
  - Present the information in a way that a general audience can grasp without prior knowledge of the book.
  `;

  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      { headers: { "Content-Type": "application/json" } }
    );

    const fullSummary =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No summary available";

    res.json({ summary: fullSummary });
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to get summary from Gemini API" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
