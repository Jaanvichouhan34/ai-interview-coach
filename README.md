# 🎯 InterviewAI
**Crack your next tech interview with the power of AI.**

[![GitHub stars](https://img.shields.io/github/stars/Jaanvichouhan34/ai-interview-coach?color=7F77DD&style=for-the-badge)](https://github.com/Jaanvichouhan34/ai-interview-coach/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://ai-interview-coach-steel-three.vercel.app)
[![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render)](https://ai-interview-coach-backend-r1mj.onrender.com)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)

[🚀 Live Demo](https://ai-interview-coach-steel-three.vercel.app) • [🐛 Report Bug](https://github.com/Jaanvichouhan34/ai-interview-coach/issues) • [✨ Request Feature](https://github.com/Jaanvichouhan34/ai-interview-coach/issues)

---

## 📸 Preview

> AI-powered mock interviews, communication coaching,
> and quiz mode — all in one premium platform.

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🎤 Mock Interviews | Role-based AI questions with strict scoring |
| 💬 Communication Coach | Talk to AI friend, improve English fluency |
| 🧠 Quiz Mode | MCQ quizzes per tech role with explanations |
| 🎙️ Voice Input | Speak your answers using Web Speech API |
| 📊 Progress Tracker | Track performance and improvement over time |
| 🏆 Leaderboard | Compete with peers and climb the ranks |
| 🌙 Dark / Light Mode | Toggle between premium themes |
| 📱 Fully Responsive | Optimized for all screen sizes |

---

## 🎯 Interview Tracks
```
⚛️  Frontend Developer    →  React, JS, CSS, HTML
⚙️  Backend Developer     →  Node.js, APIs, Databases  
🧮  DSA & Algorithms      →  Data Structures, Problem Solving
👔  HR & Behavioral       →  Soft Skills, Situational Questions
🗄️  Full Stack            →  Combined Frontend + Backend
```

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React (Vite)
- 🔀 React Router DOM
- 🎨 CSS3 with CSS Variables
- 🎙️ Web Speech API

### Backend
- 🟢 Node.js + Express.js
- 🤖 Google Gemini API
- 🔒 dotenv + CORS

### Deployment
- 🔺 Frontend → **Vercel**
- 🟦 Backend → **Render**

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Google Gemini API Key from [aistudio.google.com](https://aistudio.google.com)

### 1. Clone the repo
```bash
git clone https://github.com/Jaanvichouhan34/ai-interview-coach.git
cd ai-interview-coach
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create `backend/.env`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```
```bash
node server.js
# Server running on port 5000 ✅
```

### 3. Setup Frontend
```bash
cd frontend
npm install
```

Create `frontend/.env`:
```env
VITE_BACKEND_URL=http://localhost:5000
```
```bash
npm run dev
# Open http://localhost:5173 🎉
```

---

## 📁 Project Structure
```
ai-interview-coach/
│
├── 📂 backend/
│   ├── 📂 controllers/
│   │   └── geminiController.js    # All Gemini API logic
│   ├── 📂 routes/
│   │   ├── interview.js           # Interview + Quiz routes
│   │   └── communication.js      # Chat + Evaluate routes
│   └── server.js                  # Express server entry
│
└── 📂 frontend/
    └── 📂 src/
        ├── 📂 components/         # Reusable UI components
        │   ├── Navbar.jsx
        │   ├── Hero.jsx
        │   ├── Features.jsx
        │   ├── Testimonials.jsx
        │   ├── ContactForm.jsx
        │   └── Footer.jsx
        ├── 📂 pages/              # Route-based pages
        │   ├── Home.jsx
        │   ├── Interview.jsx
        │   ├── InterviewSession.jsx
        │   ├── Communication.jsx
        │   ├── Dashboard.jsx
        │   ├── Quiz.jsx
        │   ├── Login.jsx
        │   ├── Signup.jsx
        │   ├── About.jsx
        │   ├── Help.jsx
        │   └── Leaderboard.jsx
        ├── config.js              # API base URL config
        └── App.jsx                # Router setup
```

---

## 🔑 Environment Variables

### Backend
| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Your Google Gemini API key |

### Frontend
| Variable | Description |
|----------|-------------|
| `VITE_BACKEND_URL` | Backend server URL |

---

## 🌐 Deployment Guide

### Deploy Frontend on Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Set Root Directory to `frontend`
4. Add env variable `VITE_BACKEND_URL`
5. Deploy ✅

### Deploy Backend on Render
1. Go to [render.com](https://render.com) → New Web Service
2. Set Root Directory to `backend`
3. Build Command: `npm install`
4. Start Command: `node server.js`
5. Add env variable `GEMINI_API_KEY`
6. Deploy ✅

---

## 👩‍💻 Developer

<table>
  <tr>
    <td align="center">
      <b>Jaanvi Chouhan</b><br/>
      MERN Stack Developer<br/>
      B.Tech CSE Student<br/><br/>
      <a href="https://www.linkedin.com/in/jaanvi-chouhan">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
      <a href="https://github.com/Jaanvichouhan34">
        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
      </a>
      <a href="mailto:jaanvichouhan18805@gmail.com">
        <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>

---

## 📄 License

Distributed under the MIT License.
See [LICENSE](LICENSE) for more information.

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with 💜 by [Jaanvi Chouhan](https://github.com/Jaanvichouhan34)

</div>


.....