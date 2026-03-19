import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Target, LogOut, User } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Mock state
  const userName = "Jaanvi";

  const handleSignOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate('/login');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.avatar-circle')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  return (
    <nav className="nav-glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Left: Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ background: 'var(--accent-color)', padding: '6px', borderRadius: '8px', color: '#fff' }}>
            <Target size={24} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-color)' }}>
            InterviewAI
          </span>
        </Link>
        
        {/* Middle: Links */}
        <div style={{ display: 'flex', gap: '2rem', display: window.innerWidth < 768 ? 'none' : 'flex' }}>
          <Link to="/" className="clickable" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
          <Link to="/practice" className="clickable" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>Practice</Link>
          <Link to="/communication" className="clickable" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>Communication</Link>
          <Link to="/about" className="clickable" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>About</Link>
          <Link to="/help" className="clickable" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>Help</Link>
        </div>
        
        {/* Right: Theme Toggle & Auth Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleTheme} 
            className="clickable"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: '50%',
              transition: 'var(--transition)',
            }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          {isLoggedIn ? (
            <div style={{ position: 'relative' }}>
              <div 
                className="avatar-circle clickable"
                onClick={() => setShowDropdown(!showDropdown)}
                style={{
                  width: '36px', height: '36px',
                  borderRadius: '50%',
                  background: 'var(--primary-color)',
                  color: 'white',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '600', cursor: 'pointer'
                }}
              >
                {userName?.charAt(0).toUpperCase()}
              </div>
              
              <AnimatePresence>
                {showDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    style={{
                      position: 'absolute', right: 0, top: '45px',
                      background: 'var(--surface-color)', 
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px', padding: '8px',
                      minWidth: '180px', zIndex: 1000,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div 
                      onClick={() => { navigate('/dashboard'); setShowDropdown(false); }}
                      className="clickable"
                      style={{ 
                        padding: '10px 16px', borderRadius: '8px', fontSize: '14px',
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        color: 'var(--text-main)'
                      }}
                    >
                      <User size={16} /> Dashboard
                    </div>
                    <div 
                      onClick={handleSignOut}
                      className="clickable"
                      style={{ 
                        padding: '10px 16px', borderRadius: '8px', fontSize: '14px', 
                        color: 'var(--danger-color)',
                        display: 'flex', alignItems: 'center', gap: '0.5rem'
                      }}
                    >
                      <LogOut size={16} /> Sign Out
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline clickable" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary clickable" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
