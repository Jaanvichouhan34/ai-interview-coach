import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import QuestionCard from '../components/QuestionCard';
import AnswerInput from '../components/AnswerInput';
import FeedbackCard from '../components/FeedbackCard';
import { Loader2, ArrowLeft, CheckCircle2, TrendingUp, AlertTriangle, Home, RotateCcw } from 'lucide-react';

export default function InterviewSession() {
  const location = useLocation();
  const navigate = useNavigate();
  const { role: urlRole } = useParams();
  
  const role = location.state?.role || urlRole;

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
  
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState(null);
  
  const [error, setError] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  
  // Track all results for summary
  const [allFeedbacks, setAllFeedbacks] = useState([]);

  useEffect(() => {
    if (!role || role === 'start') {
      navigate('/practice');
      return;
    }

    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/interview/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ role })
        });
        const data = await response.json();
        
        if (data.questions) {
          setQuestions(data.questions);
        } else {
          setError('Failed to load questions from server.');
        }
      } catch (err) {
        setError('Connection error. Is the backend running?');
      } finally {
        setIsLoadingQuestions(false);
      }
    };

    fetchQuestions();
  }, [role, navigate]);

  const handleAnswerSubmit = async (answer) => {
    setIsEvaluating(true);
    try {
      const response = await fetch('http://localhost:5000/api/interview/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: questions[currentIndex],
          answer,
          role
        })
      });
      const data = await response.json();
      
      if (data.feedback) {
        setFeedback(data.feedback);
        setAllFeedbacks(prev => [...prev, { ...data.feedback, question: questions[currentIndex] }]);
      } else {
        alert("Failed to get feedback from the server.");
      }
    } catch (err) {
      alert("Error evaluating answer. Check backend connection.");
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setFeedback(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsFinished(true);
    }
  };

  if (!role) return null;

  if (isLoadingQuestions) {
    return (
      <div className="flex-center" style={{ minHeight: '60vh', flexDirection: 'column', gap: '1.5rem' }}>
        <Loader2 size={56} className="text-primary" style={{ animation: 'spin 2s linear infinite' }} />
        <h2 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Preparing your {role} Interview...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container flex-center" style={{ minHeight: '60vh' }}>
        <div className="flat-card" style={{ maxWidth: '500px', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--danger-color)' }}>Error</h2>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={() => navigate('/practice')}>Go Back</button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    const avgScore = allFeedbacks.reduce((acc, curr) => acc + curr.score, 0) / allFeedbacks.length;
    const bestAnswer = [...allFeedbacks].sort((a, b) => b.score - a.score)[0];
    const weakestArea = [...allFeedbacks].sort((a, b) => a.score - b.score)[0];
    
    let grade = 'D';
    if (avgScore >= 8.5) grade = 'A';
    else if (avgScore >= 7) grade = 'B';
    else if (avgScore >= 5) grade = 'C';

    return (
      <div className="container" style={{ maxWidth: '900px', paddingBottom: '4rem' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: '800' }}>Interview <span className="text-primary">Summary</span></h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Role: {role} • Questions: {questions.length}</p>
          </div>

          <div className="grid-cols-2" style={{ marginBottom: '2rem' }}>
            <div className="flat-card" style={{ textAlign: 'center', background: 'var(--surface-hover)' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Average Score</h3>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--primary-color)' }}>{avgScore.toFixed(1)}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent-color)' }}>Grade: {grade}</div>
            </div>
            
            <div className="flat-card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                 <TrendingUp color="var(--success-color)"/> Performance Highlights
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Best Response</div>
                <p style={{ margin: '5px 0', fontWeight: '600' }}>{bestAnswer?.question.substring(0, 60)}...</p>
                <span style={{ color: 'var(--success-color)', fontWeight: 'bold' }}>Score: {bestAnswer?.score}/10</span>
              </div>
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Weakest Area</div>
                <p style={{ margin: '5px 0', fontWeight: '600' }}>{weakestArea?.question.substring(0, 60)}...</p>
                <span style={{ color: 'var(--danger-color)', fontWeight: 'bold' }}>Score: {weakestArea?.score}/10</span>
              </div>
            </div>
          </div>

          <div className="flat-card" style={{ marginBottom: '3rem' }}>
             <h3>Improvement Roadmap</h3>
             <p style={{ marginTop: '1rem' }}>Based on your weakest area, our AI suggests focusing on: <strong>{weakestArea?.missing}</strong></p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-outline clickable" onClick={() => window.location.reload()}>
              <RotateCcw size={18}/> Try Again
            </button>
            <button className="btn btn-primary clickable" onClick={() => navigate('/')}>
              <Home size={18}/> Go Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: '800px', paddingBottom: '4rem' }}>
      <button 
        className="btn clickable" 
        style={{ padding: '0 0 1.5rem 0', color: 'var(--text-muted)', background: 'transparent' }}
        onClick={() => navigate('/practice')}
      >
        <ArrowLeft size={18} /> Exit Interview
      </button>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '1.8rem', margin: 0, color: 'var(--text-main)' }}>{role} Session</h1>
        <div style={{ background: 'var(--primary-color)', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontWeight: 'bold' }}>
          Question {currentIndex + 1} of {questions.length}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <QuestionCard 
            question={questions[currentIndex]} 
            current={currentIndex + 1} 
            total={questions.length} 
          />

          <AnswerInput 
            onSubmit={handleAnswerSubmit} 
            isLoading={isEvaluating} 
            disabled={feedback !== null} 
          />
        </motion.div>
      </AnimatePresence>

      {feedback && (
        <FeedbackCard 
          feedback={feedback} 
          onNext={handleNext}
          isLast={currentIndex === questions.length - 1}
        />
      )}
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
