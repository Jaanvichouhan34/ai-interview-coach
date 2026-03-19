import React from 'react';
import { HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function QuestionCard({ question, current, total }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flat-card" 
      style={{ padding: '2rem', marginBottom: '2rem', position: 'relative' }}
    >
      <div 
        style={{ 
          position: 'absolute', 
          top: '-15px', 
          left: '2rem',
          background: 'var(--primary-color)',
          color: '#fff',
          padding: '4px 16px',
          borderRadius: '20px',
          fontSize: '0.875rem',
          fontWeight: '600',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        Question {current} of {total}
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginTop: '0.5rem' }}>
        <div style={{ 
          background: 'var(--surface-hover)', 
          padding: '10px', 
          borderRadius: '12px', 
          color: 'var(--primary-color)',
          flexShrink: 0
        }}>
          <HelpCircle size={24} />
        </div>
        <h2 style={{ fontSize: '1.5rem', lineHeight: '1.4', margin: 0, paddingTop: '4px' }}>
          {question}
        </h2>
      </div>
    </motion.div>
  );
}
