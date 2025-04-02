import React, { useState } from "react";
import axios from "axios";
import HTMLFlipBook from "react-pageflip";
import "./App.css";

function App() {
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://pageweave.onrender.com/api/summarize",
        {
          book,
          author,
        }
      );

      const text = response.data.summary;
      const wordsPerPage = 150;
      const words = text.split(" ");
      const pages = [];
      let currentPage = [];

      words.forEach((word, index) => {
        // If "Chapter" is detected, push the current page and start a new one
        if (word.toLowerCase().includes("chapter") && currentPage.length > 0) {
          pages.push(currentPage.join(" ").trim());
          currentPage = []; // Start a new page for the chapter
        }

        currentPage.push(word);

        // If the page is full, push it and start a new one
        if (currentPage.length >= wordsPerPage) {
          pages.push(currentPage.join(" ").trim());
          currentPage = [];
        }
      });

      // Push any remaining words as the last page
      if (currentPage.length > 0) {
        pages.push(currentPage.join(" ").trim());
      }

      setSummary(pages);
    } catch (err) {
      console.error("Error fetching summary", err);
      setError(
        "Failed to fetch summary. Please check your inputs and try again."
      );
    }

    setLoading(false);
  };

  return (
    <div className="book-container">
      <h1>📖 BookFlip AI</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Summarizing..." : "Get Summary"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {summary.length > 0 && (
        <div className="flip-container">
          <HTMLFlipBook width={450} height={600} className="book">
            {/* Cover Page */}
            <div className="cover-page">
              <h2>{book}</h2>
              <h3 className="author-name">By {author}</h3>
            </div>

            {/* Summary Pages */}
            {summary.map((page, index) => (
              <div key={index} className="page">
                <p>{page}</p>
              </div>
            ))}

            {/* Back Cover */}
            <div className="cover-page back-cover">
              <h2>📚 The End</h2>
            </div>
          </HTMLFlipBook>
        </div>
      )}
    </div>
  );
}

export default App;
