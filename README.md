# PageWeave 📖

**PageWeave** is an AI-powered book summary application that generates detailed summaries of books and presents them in an interactive page-flipping format. Built using React.js, Express.js, and Google Gemini API, this project provides a seamless reading experience with a real-time book-flipping effect.

#✅ Successfully Deployed on Netlify 🎉
 PageHeive is live at: https://pageweivee.netlify.app/

# 🚀 Features

- 📚 **AI-Powered Book Summaries** – Fetches in-depth summaries of books.

- 🎨 **Realistic Page-Flipping Effect** – Uses HTMLFlipBook to mimic real book pages.

- 🔍 **Chapter-Based Formatting** – Organizes summaries with proper headings.

- 🌐 **MERN-Stack Ready** – Backend powered by Node.js and Express.js.

- 💾 **MongoDB Integration (Optional)** – Store and retrieve summaries efficiently.

# 🛠️ Tech Stack

 Frontend:

- React.js

- HTMLFlipBook

- Axios

- CSS (for styling)

 Backend:

- Node.js

- Express.js

- Google Gemini API (for AI-generated summaries)

- MongoDB (Optional for storing summaries)

# Project Structure

````

PageWeive/
├── backend/
│   ├── node_modules/
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
└── frontend/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── App.css
    │   ├── App.js
    │   ├── App.test.js
    │   ├── index.css
    │   ├── index.js
    │   ├── logo.svg
    │   ├── reportWebVitals.js
    │   └── setupTests.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

````


# 📦 Installation & Setup

- 1️⃣ Clone the Repository

````
$ git clone https://github.com/bhanuudhay/PageWeave.git
$ cd PageWeaven

````

- 2️⃣ Backend Setup
````
$ cd backend
$ npm install
$ npm start 

````

- Create a .env file inside the server folder and add:

````
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
MONGODB_URI=your_mongodb_connection_string  # If using MongoDB

````

- Start the backend server:

````
$ npm start

````

- 3️⃣ Frontend Setup
````
$ cd frontend
$ npm install
$ npm start

````

# 🚀 Usage

- Enter the book title and author name.

- Click "Get Summary".

- The AI-generated summary will be formatted into pages.

- Use the flip effect to read the summary interactively.


# 🔮 Future Enhancements

- 📖 User Accounts & Authentication – Allow users to save and revisit summaries.

- 🌍 Multi-Language Support – Translate summaries into different languages.

- 🎙️ Text-to-Speech (TTS) – Enable audio narration for summaries.

- 📊 Analytics Dashboard – Track popular books and user engagement.

- 📝 Custom Summaries – Users can edit or request a more detailed summary.

- 💾 Offline Mode – Save summaries for reading without an internet connection.


# ⚖️ License

This project is licensed under the MIT License.

# 📩 Contact

For any questions, reach out via [udhaybhanu3@gmail.com].
