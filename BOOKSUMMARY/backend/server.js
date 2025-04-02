const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: "*" })); // Allow all origins
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/summarize", async (req, res) => {
  try {
    const { bookName, authorName } = req.body;

    
    const prompt = `Summarize the book '${bookName}' by ${authorName} in a detailed yet simple manner. Explain the main plot, key themes, important characters, and major takeaways in easy-to-understand language. Keep the summary engaging and structured so that anyone can grasp the book's essence without prior knowledge.`;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const text = result.response.text(); // Ensure this is correct

    res.json({ summary: text });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate summary" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
