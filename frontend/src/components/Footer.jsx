import React from 'react';
import { Link } from 'react-router-dom';
import { Target } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--surface-color)',
      padding: '4rem 0 2rem 0',
      borderTop: '1px solid var(--border-color)',
      marginTop: 'auto' // Pushes footer to the bottom always
    }}>
      <div className="container">
        <div className="grid-cols-2" style={{ marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ background: 'var(--accent-color)', padding: '6px', borderRadius: '8px', color: '#fff' }}>
                <Target size={20} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-color)' }}>
                InterviewAI
              </span>
            </div>
            <p style={{ maxWidth: '300px' }}>
              Your AI-powered interview preparation platform. Master your tech interviews with real-time feedback and daily communication practice.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '4rem', justifyContent: 'flex-start' }}>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Platform</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><Link to="/practice" className="clickable" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Mock Interviews</Link></li>
                <li><Link to="/communication" className="clickable" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Communication Coach</Link></li>
                <li><Link to="/dashboard" className="clickable" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Progress Tracker</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><Link to="/help" className="clickable" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Help Center</Link></li>
                <li><Link to="/privacy" className="clickable" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</Link></li>
                <li><Link to="/terms" className="clickable" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ margin: 0 }}>© 2025 InterviewAI by Jaanvi Chouhan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
