import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Mic, Activity, CheckSquare, Trophy, Briefcase } from 'lucide-react';

const featureList = [
  { path: '/practice', icon: <Briefcase size={28} />, title: "Mock Interviews", desc: "Role-based AI questions with detailed scoring and feedback." },
  { path: '/communication', icon: <MessageSquare size={28} />, title: "Communication Coach", desc: "Talk to our AI daily to improve your fluency and confidence." },
  { path: '/dashboard', icon: <Activity size={28} />, title: "Progress Tracker", desc: "Comprehensive analytics dashboard to track your performance." },
  { path: '/quiz', icon: <CheckSquare size={28} />, title: "Quiz Mode", desc: "Quick MCQ quizzes designed specifically for your chosen role." },
  { path: '/practice', icon: <Mic size={28} />, title: "Voice Input", desc: "Speak your answers directly using our built-in voice recognition." },
  { path: '/leaderboard', icon: <Trophy size={28} />, title: "Leaderboard", desc: "Compete with peers globally and track your ranking." }
];

export default function Features() {
  const navigate = useNavigate();

  return (
    <section id="features" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Supercharge Your Prep</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Everything you need to master your technical, behavioral, and communication skills in one platform.
          </p>
        </div>

        <div className="grid-cols-3">
          {featureList.map((feature, idx) => (
            <motion.div 
              key={idx}
              className="flat-card clickable"
              onClick={() => navigate(feature.path)}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 10, 
                rotateY: -10,
                boxShadow: "0 20px 25px -5px rgba(83, 74, 183, 0.15), 0 10px 10px -5px rgba(83, 74, 183, 0.08)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem',
                transformPerspective: 1000
              }}
            >
              <div style={{ 
                background: 'var(--surface-hover)', 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--primary-color)',
                marginBottom: '0.5rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>{feature.title}</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
