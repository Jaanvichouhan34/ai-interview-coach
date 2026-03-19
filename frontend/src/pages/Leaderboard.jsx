import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, ArrowUp, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DUMMY_LEADERBOARD = [
  { id: 1, name: "Aarav Sharma", score: 9.8, completed: 42, color: "#FFD700" },
  { id: 2, name: "Priya Patel", score: 9.6, completed: 38, color: "#C0C0C0" },
  { id: 3, name: "Rahul Varma", score: 9.5, completed: 35, color: "#CD7F32" },
  { id: 4, name: "Jaanvi Chouhan", score: 9.4, completed: 31, color: "var(--primary-color)", current: true },
  { id: 5, name: "Kunal Singh", score: 9.2, completed: 28, color: "var(--text-muted)" },
  { id: 6, name: "Sneha Reddy", score: 9.0, completed: 25, color: "var(--text-muted)" },
  { id: 7, name: "Ishaan Gupta", score: 8.9, completed: 22, color: "var(--text-muted)" },
  { id: 8, name: "Ananya Das", score: 8.7, completed: 19, color: "var(--text-muted)" },
  { id: 9, name: "Vikram Malhotra", score: 8.6, completed: 17, color: "var(--text-muted)" },
  { id: 10, name: "Riya Kapoor", score: 8.5, completed: 15, color: "var(--text-muted)" },
];

export default function Leaderboard() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{ 
            display: 'inline-flex', background: 'var(--accent-color)', 
            padding: '1rem', borderRadius: '50%', color: 'white', marginBottom: '1.5rem',
            boxShadow: '0 10px 20px rgba(239, 159, 39, 0.3)'
          }}
        >
          <Trophy size={40} />
        </motion.div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Global <span className="text-secondary">Leaderboard</span></h1>
        
        <div style={{ 
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', 
          background: 'rgba(127, 119, 221, 0.1)', color: 'var(--primary-color)',
          padding: '8px 16px', borderRadius: '25px', width: 'fit-content', margin: '1rem auto'
        }}>
          <Info size={16} /> 
          <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Coming Soon - Live leaderboard when users sign up!</span>
        </div>
      </div>

      <div className="flat-card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ 
          display: 'grid', gridTemplateColumns: '80px 1fr 100px 120px', 
          padding: '1.25rem 2rem', background: 'var(--surface-hover)',
          borderBottom: '1px solid var(--border-color)', fontWeight: '700', fontSize: '0.9rem',
          color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px'
        }}>
          <div>Rank</div>
          <div>Name</div>
          <div style={{ textAlign: 'center' }}>Score</div>
          <div style={{ textAlign: 'right' }}>Sessions</div>
        </div>

        <div className="custom-scroll" style={{ maxHeight: '600px', overflowY: 'auto' }}>
          {DUMMY_LEADERBOARD.map((user, index) => (
            <motion.div 
              key={user.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              style={{ 
                display: 'grid', gridTemplateColumns: '80px 1fr 100px 120px', 
                padding: '1.25rem 2rem', borderBottom: '1px solid var(--border-color)',
                alignItems: 'center', background: user.current ? 'rgba(127, 119, 221, 0.08)' : 'transparent',
                borderLeft: user.current ? '4px solid var(--primary-color)' : 'none'
              }}
            >
              <div style={{ fontWeight: '800', fontSize: '1.1rem', color: user.color }}>
                #{index + 1}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '32px', height: '32px', borderRadius: '50%', 
                  background: user.current ? 'var(--primary-color)' : 'var(--surface-hover)',
                  color: user.current ? 'white' : 'var(--text-main)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: '700'
                }}>
                  {user.name.charAt(0)}
                </div>
                <span style={{ fontWeight: user.current ? '700' : '500' }}>{user.name}</span>
              </div>
              <div style={{ textAlign: 'center', fontWeight: '700', color: 'var(--primary-color)' }}>
                {user.score}
              </div>
              <div style={{ textAlign: 'right', fontWeight: '500' }}>
                {user.completed} done
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <button className="btn btn-outline clickable" onClick={() => navigate('/practice')}>
          Start Competition Now
        </button>
      </div>

    </div>
  );
}
