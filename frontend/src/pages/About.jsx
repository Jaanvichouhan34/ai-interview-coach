import React from 'react';
import { Target, Users, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="container" style={{ padding: '6rem 1.5rem', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>About InterviewAI</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Empowering the next generation of engineers to interview with confidence.
        </p>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flat-card" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Target color="var(--accent-color)" /> Our Mission
        </h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          We believe that technical interviews shouldn't be a roadblock to your dream job. Our mission is to democratize interview preparation by providing free, accessible, and highly accurate AI-driven mock interviews. Whether you're a frontend wizard or a backend guru, InterviewAI gives you the practice you need to shine.
        </p>
      </motion.div>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2.5rem' }}>How It Works</h2>
        <div className="grid-cols-3">
          <div className="flat-card" style={{ textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--primary-color)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontSize: '1.2rem', fontWeight: 'bold' }}>1</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Choose a Track</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Select your specialized role like Frontend, Backend, or Full Stack.</p>
          </div>
          <div className="flat-card" style={{ textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--primary-color)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontSize: '1.2rem', fontWeight: 'bold' }}>2</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Answer Questions</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Type or speak your answers to tailored AI-generated questions.</p>
          </div>
          <div className="flat-card" style={{ textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--primary-color)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontSize: '1.2rem', fontWeight: 'bold' }}>3</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Get Feedback</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Receive instant strict scoring and detailed improvement notes.</p>
          </div>
        </div>
      </div>

      <div className="grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flat-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Zap color="var(--warning-color)" /> Tech Stack
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="var(--success-color)" size={20} /> <strong>Frontend:</strong> React (Vite), Framer Motion</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="var(--success-color)" size={20} /> <strong>Backend:</strong> Node.js, Express</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="var(--success-color)" size={20} /> <strong>AI Engine:</strong> Groq Llama 3 API</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="var(--success-color)" size={20} /> <strong>Voice:</strong> Web Speech API</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flat-card" style={{ background: 'var(--surface-hover)', borderLeft: '4px solid var(--primary-color)' }}>
          <h2 style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Users color="var(--primary-color)" /> Platform Developer
          </h2>
          <h3 style={{ color: 'var(--primary-color)', fontSize: '1.4rem', marginBottom: '0.25rem' }}>Jaanvi Chouhan</h3>
          <p style={{ fontWeight: '500', marginBottom: '1rem' }}>MERN Stack Developer</p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            Passionate about building scalable web applications and leveraging artificial intelligence to solve real-world educational problems.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
