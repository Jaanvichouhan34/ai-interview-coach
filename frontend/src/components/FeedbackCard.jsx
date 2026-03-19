import React from 'react';
import { CheckCircle, XCircle, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeedbackCard({ feedback, onNext, isLast }) {
  if (!feedback) return null;

  // Strict scoring color logic
  const scoreColor = feedback.score >= 8 
    ? 'var(--success-color)' 
    : feedback.score >= 5 
      ? 'var(--warning-color)' 
      : 'var(--danger-color)';

  const scoreLabel = feedback.score >= 8 
    ? 'Excellent' 
    : feedback.score >= 5 
      ? 'Needs Improvement' 
      : 'Poor Response';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flat-card" 
      style={{ padding: '2.5rem', marginTop: '2rem', borderTop: `6px solid ${scoreColor}` }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h3 style={{ fontSize: '1.6rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Target size={28} color="var(--primary-color)" /> AI Evaluation
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>{scoreLabel}</span>
          <div style={{ 
            background: `rgba(${feedback.score >= 8 ? '16,185,129' : feedback.score >= 5 ? '245,158,11' : '239,68,68'}, 0.1)`, 
            border: `1px solid ${scoreColor}`,
            padding: '8px 20px', 
            borderRadius: '20px', 
            fontWeight: 'bold' 
          }}>
            Score: <span style={{ color: scoreColor, fontSize: '1.3rem' }}>{feedback.score}/10</span>
          </div>
        </div>
      </div>

      <div className="grid-cols-2" style={{ marginBottom: '2rem' }}>
        <div style={{ border: '1px solid var(--border-color)', padding: '1.5rem', borderRadius: 'var(--border-radius-sm)', background: 'var(--surface-color)' }}>
          <h4 style={{ color: 'var(--success-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
            <CheckCircle size={20} /> Strengths
          </h4>
          <p style={{ margin: 0, fontSize: '1rem' }}>{feedback.good}</p>
        </div>

        <div style={{ border: '1px solid var(--border-color)', padding: '1.5rem', borderRadius: 'var(--border-radius-sm)', background: 'var(--surface-color)' }}>
          <h4 style={{ color: 'var(--danger-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
            <XCircle size={20} /> Identified Weaknesses
          </h4>
          <p style={{ margin: 0, fontSize: '1rem' }}>{feedback.missing}</p>
        </div>
      </div>

      <div style={{ background: 'var(--surface-hover)', padding: '1.5rem', borderRadius: 'var(--border-radius-sm)', marginBottom: '2.5rem', borderLeft: '4px solid var(--accent-color)' }}>
        <h4 style={{ color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
          <Award size={20} color="var(--accent-color)" /> The Ideal Answer
        </h4>
        <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-main)', lineHeight: '1.6' }}>{feedback.ideal}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="btn btn-primary clickable" onClick={onNext} style={{ padding: '0.8rem 2.5rem' }}>
          {isLast ? 'Complete Interview Session' : 'Proceed to Next Question'}
        </button>
      </div>
    </motion.div>
  );
}
