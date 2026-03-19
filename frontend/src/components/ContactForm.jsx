import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github, Instagram } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Simulate sending
      setTimeout(() => setIsSent(true), 800);
    }
  };

  return (
    <div id="contact" style={{ padding: '6rem 0', background: 'var(--bg-color)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get in Touch</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Have questions about the platform, want to provide feedback, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="grid-cols-2">
          
          {/* Left: Developer Info */}
          <div className="flat-card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Jaanvi Chouhan</h3>
              <p>MERN Stack Developer</p>
              <p style={{ marginTop: '1rem' }}>
                I built InterviewAI to help students prepare for technical rounds with confidence using the power of AI.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="mailto:jaanvichouhan18805@gmail.com" className="clickable" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-main)', textDecoration: 'none' }}>
                <div style={{ background: 'var(--surface-hover)', padding: '10px', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <Mail size={20} />
                </div>
                jaanvichouhan18805@gmail.com
              </a>
              <a href="https://linkedin.com/in/jaanvi-chouhan" target="_blank" rel="noreferrer" className="clickable" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-main)', textDecoration: 'none' }}>
                <div style={{ background: 'var(--surface-hover)', padding: '10px', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <Linkedin size={20} />
                </div>
                linkedin.com/in/jaanvi-chouhan
              </a>
              <a href="https://github.com/Jaanvichouhan34" target="_blank" rel="noreferrer" className="clickable" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-main)', textDecoration: 'none' }}>
                <div style={{ background: 'var(--surface-hover)', padding: '10px', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <Github size={20} />
                </div>
                github.com/Jaanvichouhan34
              </a>
              <a href="https://instagram.com/jaanvi_chouhan18" target="_blank" rel="noreferrer" className="clickable" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-main)', textDecoration: 'none' }}>
                <div style={{ background: 'var(--surface-hover)', padding: '10px', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <Instagram size={20} />
                </div>
                @jaanvi_chouhan18
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flat-card">
            {isSent ? (
              <div className="flex-center" style={{ height: '100%', flexDirection: 'column', textAlign: 'center' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-color)', padding: '20px', borderRadius: '50%', marginBottom: '1.5rem' }}>
                  <Send size={40} />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p style={{ marginTop: '0.5rem' }}>Thank you for reaching out. I'll get back to you soon.</p>
                <button className="btn btn-outline clickable" style={{ marginTop: '2rem' }} onClick={() => setIsSent(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Send a Message</h3>
                <div>
                  <input 
                    type="text" 
                    className="input-base" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    className="input-base" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    className="input-base" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div>
                  <textarea 
                    className="input-base" 
                    placeholder="Your Message" 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    style={{ resize: 'vertical' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary clickable" style={{ alignSelf: 'flex-start' }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
