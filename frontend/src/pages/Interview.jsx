import React from 'react';
import RoleSelector from '../components/RoleSelector';
import { motion } from 'framer-motion';

export default function Interview() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}
        >
          Mock Interview <span className="text-secondary">Arena</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}
        >
          Select your target role to begin a realistic, AI-powered technical interview session. 
          Be prepared for 7 strict questions designed to test your limits.
        </motion.p>
      </div>

      <RoleSelector destination="/interview/start" />

      <div style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="flat-card" style={{ borderLeft: '4px solid var(--primary-color)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Preparation Phase</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Ensure you are in a quiet environment. Our AI listens carefully to your responses and evaluates fluency, precision, and technical depth.
          </p>
        </div>
        <div className="flat-card" style={{ borderLeft: '4px solid var(--accent-color)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Strict Evaluation</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            We've tuned our Groq AI engine to be a senior tech lead. Expect honest feedback and scores that truly reflect your current interview readiness.
          </p>
        </div>
      </div>
    </div>
  );
}
