import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login
    navigate('/dashboard');
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 80px)', display: 'flex' }}>
      {/* Left side: Branding / Illustration */}
      <div style={{ 
        flex: 1, 
        background: 'var(--surface-hover)', 
        display: window.innerWidth < 768 ? 'none' : 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem',
        borderRight: '1px solid var(--border-color)'
      }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: '400px' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Welcome Back</h2>
          <p style={{ fontSize: '1.1rem' }}>Log in to access your dashboard, resume your preparation, and view your detailed progress analytics.</p>
        </motion.div>
      </div>

      {/* Right side: Form */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flat-card"
          style={{ width: '100%', maxWidth: '450px' }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Login</h2>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Email Option</label>
              <input type="email" required className="input-base" placeholder="you@example.com" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Password</label>
              <input type="password" required className="input-base" placeholder="••••••••" />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'none' }} className="clickable">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="clickable" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Forgot Password?</a>
            </div>

            <button type="submit" className="btn btn-primary clickable" style={{ width: '100%', padding: '1rem' }}>
              Sign In
            </button>
            
            <div style={{ position: 'relative', textAlign: 'center', margin: '1rem 0' }}>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--border-color)', zIndex: 1 }}></div>
              <span style={{ position: 'relative', zIndex: 2, background: 'var(--surface-color)', padding: '0 10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Or continue with</span>
            </div>

            <button type="button" onClick={() => alert("Google login coming soon! Please use email login.")} className="btn btn-outline clickable" style={{ width: '100%', padding: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"/></svg>
              Google
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.95rem' }}>
            Don't have an account? <Link to="/signup" className="clickable" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>Sign up</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
