import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Square, Loader2, MessageSquare, BookOpen, Trophy, Play, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Communication() {
  const navigate = useNavigate();
  
  // States
  const [level, setLevel] = useState(localStorage.getItem('english_level') || null);
  const [activeTab, setActiveTab] = useState('chat');
  const [streak, setStreak] = useState(parseInt(localStorage.getItem('comms_streak') || '0'));
  const [lastQuizDate, setLastQuizDate] = useState(localStorage.getItem('last_quiz_date') || '');
  const [mode, setMode] = useState('casual'); // 'casual' or 'interview'

  // Chat Tab State
  const [chatMessages, setChatMessages] = useState([
    { role: 'ai', content: "Hi there! I'm your AI English friend. How was your day? Feel free to speak or type!" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);

  // Topic Tab State
  const [topic, setTopic] = useState("Discuss the importance of remote work in today's world.");
  const [topicTranscript, setTopicTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Quiz Tab State
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([
    { q: "Which of these is a more professional way to say 'I'm sorry I'm late'?", options: ["My bad", "I apologize for the delay", "So sorry for not being on time", "Late again, oops"], correct: 1 },
    { q: "What does 'Thinking outside the box' mean?", options: ["Thinking inside a small container", "Thinking creatively", "Thinking about cardboard", "Thinking only about facts"], correct: 1 },
    { q: "Choose the correct formal greeting:", options: ["Yo what's up", "Hey you", "Dear Hiring Manager", "Hi buddy"], correct: 2 },
    { q: "Which word best replaces 'good' in: 'The project results were very good'?", options: ["Nice", "Okay-ish", "Exceptional", "Fine"], correct: 2 },
    { q: "What is an 'Ice Breaker' in communication?", options: ["A tool for crushing ice", "A cold beverage", "A remark that starts a conversation", "An awkward silence"], correct: 2 }
  ]);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Voice logic (continuous = false prevents duplicates)
  const startListening = (target) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Speech API not supported");

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsRecording(true);
    recognition.onend = () => setIsRecording(false);
    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      if (target === 'chat') {
        processChatMessage(result);
      } else {
        setTopicTranscript(result);
      }
    };
    recognition.start();
  };

  // Chat Processing Logic
  const processChatMessage = async (userMessage) => {
    const newMessages = [
      ...chatMessages,
      { role: 'user', content: userMessage }
    ];
    setChatMessages(newMessages);
    setIsAiTyping(true);
    setUserInput('');

    try {
      const res = await fetch(
        'http://localhost:5000/api/communication/chat',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: userMessage,
            history: newMessages,
            mode: mode
          })
        }
      );
      const data = await res.json();
      setChatMessages([
        ...newMessages,
        { role: 'assistant', content: data.reply }
      ]);
    } catch {
      setChatMessages([...newMessages, {
        role: 'assistant',
        content: 'Sorry, connection error. Try again!'
      }]);
    } finally {
      setIsAiTyping(false);
    }
  };

  // Topic Evaluation logic
  const handleEvaluate = async () => {
    if (!topicTranscript || topicTranscript.trim() === '') {
      alert('Please speak or type something first!');
      return;
    }
    setIsEvaluating(true);
    try {
      const res = await fetch(
        'http://localhost:5000/api/communication/evaluate',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            topic: topic, 
            response: topicTranscript 
          })
        }
      );
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      const data = await res.json();
      setFeedback(data.feedback);
    } catch (err) {
      console.error('Evaluation error:', err);
      alert(`Evaluation failed: ${err.message}\nMake sure backend is running on port 5000`);
    } finally {
      setIsEvaluating(false);
    }
  };

  // Streak logic
  const handleQuizFinish = (score) => {
      setQuizFinished(true);
      const today = new Date().toDateString();
      if (lastQuizDate !== today) {
          const newStreak = streak + 1;
          setStreak(newStreak);
          setLastQuizDate(today);
          localStorage.setItem('comms_streak', newStreak);
          localStorage.setItem('last_quiz_date', today);
      }
  };

  // Save Level
  const selectLevel = (lvl) => {
    localStorage.setItem('english_level', lvl);
    setLevel(lvl);
  };

  if (!level) {
    return (
      <div className="container flex-center" style={{ minHeight: '80vh' }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flat-card" style={{ maxWidth: '500px', textAlign: 'center', padding: '3rem' }}>
          <h1 style={{ marginBottom: '1rem' }}>Welcome to Coach AI</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>First, what is your current English speaking level?</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Beginner', 'Intermediate', 'Advanced'].map(l => (
              <button key={l} className="btn btn-outline clickable" style={{ padding: '1.2rem' }} onClick={() => selectLevel(l)}>{l}</button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1000px' }}>
      
      {/* Header & Streak */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 className="text-primary" style={{ margin: 0 }}>Communication Coach</h1>
          <p style={{ color: 'var(--text-muted)' }}>Level: {level} • Status: {mode === 'casual' ? 'Casual Chat' : 'Strict Interview'}</p>
        </div>
        <div style={{ background: 'rgba(239, 159, 39, 0.1)', color: 'var(--accent-color)', padding: '10px 20px', borderRadius: '30px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          🔥 {streak} day streak!
        </div>
      </div>

      {/* Mode Toggle */}
      <div style={{ display: 'flex', background: 'var(--surface-hover)', padding: '4px', borderRadius: '30px', maxWidth: '300px', margin: '0 auto 3rem auto' }}>
        <button 
          onClick={() => setMode('casual')}
          style={{ flex: 1, padding: '8px', border: 'none', borderRadius: '25px', cursor: 'none', background: mode === 'casual' ? 'var(--primary-color)' : 'transparent', color: mode === 'casual' ? '#fff' : 'var(--text-muted)', fontWeight: '600' }}
          className="clickable"
        >Casual</button>
        <button 
          onClick={() => setMode('interview')}
          style={{ flex: 1, padding: '8px', border: 'none', borderRadius: '25px', cursor: 'none', background: mode === 'interview' ? 'var(--primary-color)' : 'transparent', color: mode === 'interview' ? '#fff' : 'var(--text-muted)', fontWeight: '600' }}
          className="clickable"
        >Interview</button>
      </div>

      {/* Tabs Layout */}
      <div className="flat-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'flex', background: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)' }}>
          {['chat', 'topic', 'quiz'].map(t => (
            <button 
              key={t}
              onClick={() => setActiveTab(t)}
              style={{ flex: 1, padding: '1.2rem', border: 'none', background: activeTab === t ? 'var(--surface-color)' : 'transparent', color: activeTab === t ? 'var(--primary-color)' : 'var(--text-muted)', fontWeight: '700', borderBottom: activeTab === t ? '3px solid var(--primary-color)' : 'none', cursor: 'none' }}
              className="clickable"
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        <div style={{ padding: '2rem' }}>
          <AnimatePresence mode="wait">
            
            {/* Tab 1: Chat */}
            {activeTab === 'chat' && (
              <motion.div key="chat" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div style={{ height: '400px', overflowY: 'auto', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }} className="custom-scroll">
                  {chatMessages.map((m, i) => (
                    <div key={i} style={{ alignSelf: m.role === 'ai' ? 'flex-start' : 'flex-end', maxWidth: '80%', background: m.role === 'ai' ? 'var(--surface-hover)' : 'var(--primary-color)', color: m.role === 'ai' ? 'var(--text-main)' : '#fff', padding: '1rem', borderRadius: '15px' }}>
                      {m.content}
                    </div>
                  ))}
                  {isAiTyping && <div style={{ alignSelf: 'flex-start', padding: '0.5rem', color: 'var(--text-muted)' }}>AI is thinking...</div>}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input className="input-base" placeholder="Type a message..." value={userInput} onChange={e => setUserInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && processChatMessage(userInput)} />
                  <button className="btn btn-primary clickable" onClick={() => startListening('chat')}><Mic size={20}/></button>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Speak a Topic */}
            {activeTab === 'topic' && (
              <motion.div key="topic" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="flat-card" style={{ background: 'var(--bg-color)', border: '1px solid var(--primary-light)', marginBottom: '2rem' }}>
                  <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Topic:</h3>
                  <p style={{ fontSize: '1.3rem', fontWeight: '600' }}>"{topic}"</p>
                </div>
                {!feedback ? (
                  <div style={{ textAlign: 'center' }}>
                    <button 
                      className={`btn clickable ${isRecording ? 'btn-danger animate-pulse' : 'btn-primary'}`} 
                      style={{ borderRadius: '50%', width: '80px', height: '80px', marginBottom: '1.5rem' }}
                      onClick={() => startListening('topic')}
                    >
                      {isRecording ? <Square fill="white" /> : <Mic size={32}/>}
                    </button>
                    <p>{isRecording ? "Listening..." : "Tap to Speak"}</p>
                    {topicTranscript && (
                      <div className="flat-card" style={{ marginTop: '2rem', textAlign: 'left' }}>
                        <p><strong>Your Input:</strong> {topicTranscript}</p>
                        <button className="btn btn-accent clickable" style={{ width: '100%' }} onClick={handleEvaluate} disabled={isEvaluating}>
                          {isEvaluating ? 'Evaluating...' : "Evaluate Performance"}
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="grid-cols-2">
                    <div className="flat-card">
                       <h4 style={{ color: 'var(--primary-color)' }}>Scores</h4>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                         <div style={{ display: 'flex', justifyContent: 'space-between' }}>Fluency: <strong>{feedback.fluency}/10</strong></div>
                         <div style={{ display: 'flex', justifyContent: 'space-between' }}>Vocab: <strong>{feedback.vocabulary}/10</strong></div>
                         <div style={{ display: 'flex', justifyContent: 'space-between' }}>Confidence: <strong>{feedback.confidence}/10</strong></div>
                       </div>
                    </div>
                    <div className="flat-card">
                       <h4 style={{ color: 'var(--accent-color)' }}>Pro Tip</h4>
                       <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>{feedback.proTip}</p>
                       <button className="btn btn-outline clickable" style={{ marginTop: '1rem', width: '100%' }} onClick={() => setFeedback(null)}>Try Again</button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab 3: Quiz */}
            {activeTab === 'quiz' && (
              <motion.div key="quiz" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                {!quizStarted ? (
                  <div style={{ textAlign: 'center', padding: '3rem' }}>
                    <BookOpen size={48} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
                    <h2>Daily Grammar Quiz</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Complete this 5-minute quiz to maintain your 🔥 {streak} day streak!</p>
                    <button className="btn btn-primary clickable" onClick={() => setQuizStarted(true)}>Start Quiz</button>
                  </div>
                ) : quizFinished ? (
                   <div style={{ textAlign: 'center', padding: '3rem' }}>
                      <CheckCircle2 size={64} color="var(--success-color)" style={{ marginBottom: '1rem' }} />
                      <h2>Daily Mission Accomplished!</h2>
                      <div style={{ fontSize: '3rem', margin: '1rem 0', fontWeight: '800' }}>🔥 {streak}</div>
                      <p>Streak Updated! Great job practicing today.</p>
                      <button className="btn btn-outline clickable" style={{ marginTop: '2rem' }} onClick={() => { setQuizStarted(false); setQuizFinished(false); }}>Review Quiz</button>
                   </div>
                ) : (
                  <div>
                    {/* Placeholder for real question loop to keep it simple in this mock */}
                    <div className="flat-card" style={{ marginBottom: '2rem' }}>
                       <h3>Select the missing word: "I ___ to the store yesterday."</h3>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.5rem' }}>
                         {['go', 'goes', 'went', 'gone'].map((o, idx) => (
                           <button key={o} className="btn btn-outline clickable" onClick={() => handleQuizFinish(100)}>{o}</button>
                         ))}
                       </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
