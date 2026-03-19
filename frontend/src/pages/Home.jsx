import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import RoleSelector from '../components/RoleSelector';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="fade-in-section is-visible">
      <Hero />
      <Features />
      
      {/* Interview Tracks Section */}
      <section id="practice" style={{ padding: '6rem 0', background: 'var(--surface-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Interview Tracks</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Select a track to start a mock interview tailored to that specific role.
            </p>
          </div>
          <RoleSelector />
        </div>
      </section>

      {/* Communication Coach Preview */}
      <section id="communication" style={{ padding: '6rem 0', background: 'var(--bg-color)' }}>
        <div className="container grid-cols-2" style={{ alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(239, 159, 39, 0.15)', color: 'var(--accent-color)', padding: '6px 12px', borderRadius: '20px', fontWeight: 'bold', marginBottom: '1rem', fontSize: '0.9rem' }}>
              Daily Practice
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Communication Coach</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Improve your fluency and confidence by talking to our AI friend daily. Get a random topic, speak your thoughts using your microphone, and receive instant feedback on your vocabulary and fluency.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)' }}></div> Daily Topics</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)' }}></div> Fluency Score</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)' }}></div> Voice Analysis</li>
            </ul>
            <a href="/communication" className="btn btn-primary clickable">Try Communication Coach</a>
          </div>
          <div className="flat-card" style={{ background: 'var(--surface-hover)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem', border: '1px solid var(--primary-light)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 0 20px rgba(83, 74, 183, 0.4)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
            </div>
            <h3 style={{ marginBottom: '0.5rem' }}>Topic: "Discuss a challenging bug"</h3>
            <p style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Tap the microphone and start speaking</p>
            <Link to="/practice" className="btn btn-accent clickable" style={{ borderRadius: '30px', padding: '0.75rem 2rem' }}>Speak Now</Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactForm />
    </div>
  );
}
