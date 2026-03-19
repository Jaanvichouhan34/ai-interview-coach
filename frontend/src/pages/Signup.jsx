import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Dummy signup
    navigate('/dashboard');
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 80px)', display: 'flex' }}>
      {/* Left side: Form */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flat-card"
          style={{ width: '100%', maxWidth: '450px' }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Create Account</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>Start your interview preparation journey today.</p>
          
          <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Full Name</label>
              <input type="text" required className="input-base" placeholder="John Doe" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Email</label>
              <input type="email" required className="input-base" placeholder="you@example.com" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Password</label>
              <input type="password" required className="input-base" placeholder="••••••••" />
            </div>
            
            <button type="submit" className="btn btn-primary clickable" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}>
              Create Account
            </button>
            
            <div style={{ position: 'relative', textAlign: 'center', margin: '0.5rem 0' }}>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--border-color)', zIndex: 1 }}></div>
              <span style={{ position: 'relative', zIndex: 2, background: 'var(--surface-color)', padding: '0 10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Or continue with</span>
            </div>

            <button type="button" onClick={() => alert("Google login coming soon! Please use email login.")} className="btn btn-outline clickable" style={{ width: '100%', padding: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"/></svg>
              Google
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.95rem' }}>
            Already have an account? <Link to="/login" className="clickable" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>Log in</Link>
          </p>
        </motion.div>
      </div>

      {/* Right side: Branding / Illustration */}
      <div style={{ 
        flex: 1, 
        background: 'var(--surface-hover)', 
        display: window.innerWidth < 768 ? 'none' : 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem',
        borderLeft: '1px solid var(--border-color)'
      }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: '400px' }}
        >
          <div style={{ display: 'inline-flex', background: 'var(--accent-color)', padding: '12px', borderRadius: '16px', color: '#fff', marginBottom: '1.5rem' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>Invest in Your Future</h2>
          <p style={{ fontSize: '1.1rem' }}>Join 10,000+ engineers who have successfully aced their interviews and landed placements at top tech companies.</p>
        </motion.div>
      </div>
    </div>
  );
}
