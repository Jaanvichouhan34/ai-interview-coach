import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Clock, Target, Calendar } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Welcome Back, Jaanvi</h1>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>Here is your study progress and analytics overview.</p>
        </div>
        <button className="btn btn-primary clickable" onClick={() => navigate('/practice')}>Start Practice Session</button>
      </div>

      {/* Top Stats */}
      <div className="grid-cols-3" style={{ marginBottom: '3rem' }}>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="flat-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
          <div style={{ background: 'rgba(127, 119, 221, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--primary-color)' }}>
            <Target size={32} />
          </div>
          <div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Interviews Completed</h4>
            <h2 style={{ fontSize: '2rem', margin: 0 }}>0</h2>
          </div>
        </motion.div>
        
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flat-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
          <div style={{ background: 'rgba(239, 159, 39, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--accent-color)' }}>
            <BarChart3 size={32} />
          </div>
          <div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Average Score</h4>
            <h2 style={{ fontSize: '2rem', margin: 0 }}>N/A<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}></span></h2>
          </div>
        </motion.div>
        
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flat-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--success-color)' }}>
            <TrendingUp size={32} />
          </div>
          <div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Improvement Rate</h4>
            <h2 style={{ fontSize: '2rem', margin: 0 }}>0%</h2>
          </div>
        </motion.div>
      </div>

      <div className="grid-cols-2">
        <div className="flat-card">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={20} color="var(--primary-color)" /> Recent History
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)' }}>
            <p>No interviews yet</p>
            <p style={{ fontSize: '0.9rem' }}>Complete your first interview to see stats!</p>
          </div>
        </div>

        <div className="flat-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--surface-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            <Calendar size={40} />
          </div>
          <h3 style={{ marginBottom: '0.5rem' }}>0 Day Streak</h3>
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '300px' }}>
            Complete your first interview to start your daily streak!
          </p>
        </div>
      </div>
    </div>
  );
}
