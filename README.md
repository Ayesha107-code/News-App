# 📰 React News App

A React-based news application that fetches and displays the latest technology news using the News API. This project demonstrates API integration, React hooks, and dynamic rendering of data.

## 🚀 Features

- Fetches latest news articles from News API
- Displays news dynamically using React
- Shows:
  - News image
  - Author name
  - Article title
  - Description
- Loading state while fetching data
- Responsive news card layout
- Clean user interface

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- CSS3
- News API
- Vite

## 📂 Project Structure

```text
src
│
├── App.jsx
├── App.css
└── main.jsx
```

## ⚙️ Installation and Setup

Clone the repository:

```bash
git clone https://github.com/Ayesha107-code/News-App.git
```

Navigate to the project folder:

```bash
cd News-App
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 🔑 API Setup

This project uses News API to fetch news articles.

1. Create an account at:

https://newsapi.org/

2. Generate your API key.

3. Add your API key in `App.jsx`:

```javascript
fetch(
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=YOUR_API_KEY"
)
```

Replace `YOUR_API_KEY` with your actual API key.

## 📸 Screenshot

![News App Screenshot](./image.png)

## 📚 Learning Outcomes

- Working with REST APIs
- Using React hooks (`useState`, `useEffect`)
- Managing state in React
- Rendering API data using `.map()`
- Creating responsive layouts with CSS

## 👩‍💻 Author

**Ayesha Faqeer Hussain**

GitHub:
https://github.com/Ayesha107-code