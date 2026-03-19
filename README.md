# 🎯 InterviewAI — AI-Powered Interview Coach

A full-stack web application that helps students crack 
tech interviews using AI-generated questions, real-time 
feedback, and a communication coach.

🌐 **Live Demo:** https://ai-interview-coach-steel-three.vercel.app

---

## ✨ Features

- 🎤 **Mock Interviews** — Role-based AI questions with strict scoring
- 💬 **Communication Coach** — Talk to AI, improve English fluency
- 📊 **Progress Tracker** — Track your interview performance over time
- 🧠 **Quiz Mode** — MCQ quizzes for each tech role
- 🎙️ **Voice Input** — Speak your answers, no typing needed
- 🏆 **Leaderboard** — Compete with peers
- 🌙 **Dark/Light Mode** — Toggle between themes
- 📱 **Responsive Design** — Works on all devices

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- CSS3 with CSS Variables
- Web Speech API (Voice Input)

### Backend
- Node.js
- Express.js
- Google Gemini API (AI features)
- CORS

### Deployment
- Frontend → Vercel
- Backend → Render

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Google Gemini API Key

### Installation

1. Clone the repository
```bash
   git clone https://github.com/Jaanvichouhan34/ai-interview-coach.git
   cd ai-interview-coach
```

2. Install backend dependencies
```bash
   cd backend
   npm install
```

3. Create `.env` file in backend folder
```
   GEMINI_API_KEY=your_gemini_api_key_here
```

4. Install frontend dependencies
```bash
   cd ../frontend
   npm install
```

5. Create `.env` file in frontend folder
```
   VITE_BACKEND_URL=http://localhost:5000
```

### Running Locally

Start backend (in one terminal):
```bash
cd backend
node server.js
```

Start frontend (in another terminal):
```bash
cd frontend
npm run dev
```

Open http://localhost:5173 in your browser 🎉

---

## 📁 Project Structure
```
ai-interview-coach/
├── backend/
│   ├── controllers/
│   │   └── geminiController.js
│   ├── routes/
│   │   ├── interview.js
│   │   └── communication.js
│   └── server.js
│
└── frontend/
    └── src/
        ├── components/
        │   ├── Navbar.jsx
        │   ├── Hero.jsx
        │   ├── Features.jsx
        │   ├── Testimonials.jsx
        │   ├── ContactForm.jsx
        │   └── Footer.jsx
        ├── pages/
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
        │   ├── Leaderboard.jsx
        │   ├── PrivacyPolicy.jsx
        │   └── TermsOfService.jsx
        └── App.jsx
```

---

## 🔑 Environment Variables

### Backend (`backend/.env`)
| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Google Gemini API key |

### Frontend (`frontend/.env`)
| Variable | Description |
|----------|-------------|
| `VITE_BACKEND_URL` | Backend server URL |

---

## 🎯 Interview Tracks

| Track | Questions |
|-------|-----------|
| Frontend Developer | React, JS, CSS, HTML |
| Backend Developer | Node.js, APIs, Databases |
| DSA & Algorithms | Data structures, Problem solving |
| HR & Behavioral | Soft skills, Situational questions |
| Full Stack | Combined frontend + backend |

---

## 👩‍💻 Developer

**Jaanvi Chouhan**
- 🎓 B.Tech CSE — MERN Stack Developer
- 💼 [LinkedIn](https://www.linkedin.com/in/jaanvi-chouhan)
- 🐙 [GitHub](https://github.com/Jaanvichouhan34)
- 📸 [Instagram](https://www.instagram.com/jaanvi_chouhan18)
- 📧 jaanvichouhan18805@gmail.com

---

## 🤝 Contributors & Testers

Special thanks to:
- **Himanshu Kumar Tiwari** — Full Stack Developer
- **Mohit Chouhan** — Retail Operations Professional  
- **Hemant Sharma** — AI/ML Engineer

---

## 📄 License

This project is open source and available under the 
[MIT License](LICENSE).

---

⭐ If you found this helpful, please give it a star!
