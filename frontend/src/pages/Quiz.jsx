import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import RoleSelector from '../components/RoleSelector';

const BASE_URL = 'http://localhost:5000';

export default function Quiz() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const fetchQuiz = async (role) => {
    setIsLoading(true);
    setError(null);
    console.log('Fetching quiz for role:', role);
    try {
      const res = await fetch(`${BASE_URL}/api/interview/quiz`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role })
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      console.log('Quiz data received:', data);
      
      // Adapt to either 'quiz' or 'questions' key
      const qData = data.questions || data.quiz;
      if (qData && qData.length > 0) {
        setQuestions(qData);
      } else {
        throw new Error('No questions received');
      }
    } catch (err) {
      console.error('Quiz error:', err);
      setError(`Failed to load quiz: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    fetchQuiz(role);
  };

  const handleAnswer = (index, opt) => {
    setSelectedAnswers({ ...selectedAnswers, [index]: opt });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (!selectedRole) {
    return (
      <div className="container" style={{ padding: '6rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Select Quiz Topic</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Choose a track to start a rapid-fire multiple choice quiz to test your foundational knowledge.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Frontend', 'Backend', 'DSA', 'HR', 'Full Stack'].map(role => (
              <button 
                key={role}
                onClick={() => handleRoleSelect(role)}
                style={{
                  background: 'white',
                  border: '2px solid #534AB7',
                  color: '#534AB7',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex-center" style={{ minHeight: '60vh', flexDirection: 'column', gap: '1.5rem' }}>
        <Loader2 size={56} className="text-primary" style={{ animation: 'spin 2s linear infinite' }} />
        <h2 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Generating {selectedRole} questions...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container flex-center" style={{ minHeight: '60vh' }}>
        <div className="flat-card" style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--danger-color)', marginBottom: '1rem' }}>Error</h2>
          <p>{error}</p>
          <button className="btn btn-primary clickable" onClick={() => setSelectedRole(null)}>Try Again</button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    let score = 0;
    questions.forEach((q, i) => {
      // Check if correct is a letter or full string
      const userAns = selectedAnswers[i];
      if (userAns) {
        const isLetter = q.correct.length === 1;
        if (isLetter) {
          if (userAns.startsWith(q.correct)) score++;
        } else {
          if (userAns === q.correct) score++;
        }
      }
    });

    return (
      <div className="container flex-center" style={{ minHeight: '60vh' }}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flat-card" style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
          <CheckCircle2 size={64} color="var(--success-color)" style={{ margin: '0 auto 1.5rem auto' }} />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }} className="text-primary">Quiz Complete!</h2>
          <div style={{ background: 'var(--surface-hover)', padding: '2rem', borderRadius: '12px', marginBottom: '2.5rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Performance Score</h3>
            <div style={{ fontSize: '3.5rem', fontWeight: '800' }}>
              {score} / {questions.length}
            </div>
          </div>
          <button className="btn btn-primary clickable" onClick={() => setSelectedRole(null)}>Try Another Quiz</button>
        </motion.div>
      </div>
    );
  }

  const q = questions[currentIndex];

  return (
    <div className="container" style={{ maxWidth: '800px', paddingBottom: '4rem', paddingTop: '2rem' }}>
      <button className="btn clickable" style={{ padding: '0 0 1.5rem 0', color: 'var(--text-muted)', background: 'transparent' }} onClick={() => setSelectedRole(null)}>
        <ArrowLeft size={18} /> Exit Quiz
      </button>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '1.8rem', margin: 0 }}>{selectedRole} Quiz</h1>
        <div style={{ background: 'var(--primary-color)', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontWeight: 'bold' }}>
          Question {currentIndex + 1} of {questions.length}
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Q{currentIndex + 1}: {q.question}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.5rem' }}>
          {q.options.map((opt, i) => (
            <button 
              key={i}
              onClick={() => handleAnswer(currentIndex, opt)}
              className="clickable"
              style={{
                background: selectedAnswers[currentIndex] === opt 
                  ? 'var(--primary-color)' : 'var(--surface-color)',
                color: selectedAnswers[currentIndex] === opt 
                  ? 'white' : 'var(--text-main)',
                border: '1px solid var(--border-color)',
                padding: '12px 16px',
                borderRadius: '8px',
                width: '100%',
                marginBottom: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '1rem',
                transition: 'var(--transition)'
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
        <button 
          className="btn btn-primary clickable" 
          onClick={handleNext}
          disabled={!selectedAnswers[currentIndex]}
        >
          {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </button>
      </div>
    </div>
  );
}
