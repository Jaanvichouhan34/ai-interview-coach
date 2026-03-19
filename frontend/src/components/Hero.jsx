import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ 
      position: 'relative', 
      paddingTop: '8rem', 
      paddingBottom: '4rem', 
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Animated Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100vw',
        height: '100vh',
        background: 'radial-gradient(ellipse at top, rgba(127, 119, 221, 0.15) 0%, transparent 60%)',
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'inline-block', marginBottom: '1.5rem' }}
        >
          <div style={{ 
            background: 'var(--surface-color)', 
            border: '1px solid var(--border-color)', 
            padding: '8px 16px', 
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--primary-color)',
            fontWeight: '600',
            fontSize: '0.9rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <Sparkles size={16} /> AI-Powered Interview Preparation
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            lineHeight: '1.1', 
            marginBottom: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto 1.5rem auto'
          }}
        >
          Crack Your Next Tech Interview <br />
          <span className="text-primary">with AI</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}
        >
          Practice with our Gemini-powered AI coach, get real-time feedback, improve your communication skills, and land your dream job with confidence.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}
        >
          <Link to="/interview" className="btn btn-accent clickable" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Get Started Free
          </Link>
          <a href="#demo" className="btn btn-outline clickable" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Watch Demo <Play size={18} />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ 
            marginTop: '4rem', 
            padding: '1.25rem 2.5rem',
            background: 'var(--surface-color)',
            border: '1px solid var(--border-color)',
            borderRadius: '100px',
            boxShadow: 'var(--shadow-sm)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1.5rem',
            fontSize: '1rem',
            fontWeight: '600',
            color: 'var(--text-muted)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <span>5+ Interview Tracks</span>
          <span style={{ color: 'var(--border-color)' }}>|</span>
          <span>Voice Input</span>
          <span style={{ color: 'var(--border-color)' }}>|</span>
          <span>Real AI Feedback</span>
          <span style={{ color: 'var(--border-color)' }}>|</span>
          <span style={{ color: 'var(--primary-color)' }}>Free Forever</span>
        </motion.div>
      </div>
    </section>
  );
}
