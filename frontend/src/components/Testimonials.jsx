import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Himanshu Kumar Tiwari",
    role: "Full Stack Developer",
    initials: "HT",
    color: "purple",
    review: "As a full stack developer, I've tried many interview prep platforms — but InterviewAI's role-based questions and strict AI feedback is on another level. Helped me prepare faster than anything else!"
  },
  {
    name: "Mohit Chouhan",
    role: "Retail Operations Professional",
    initials: "MC",
    color: "gold",
    review: "I was nervous about technical rounds even being from a non-tech background. InterviewAI's communication coach gave me the confidence to speak clearly and present myself professionally. Highly recommend!"
  },
  {
    name: "Hemant Sharma",
    role: "AI/ML Engineer",
    initials: "HS",
    color: "teal",
    review: "The AI scoring is surprisingly accurate — it actually caught gaps in my ML answers that I didn't even notice. Best tool for anyone preparing for AI/ML engineering interviews!"
  }
];

export default function Testimonials() {
  return (
    <section style={{ padding: '6rem 0', background: 'var(--surface-hover)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Success Stories</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Join thousands of students and professionals who cracked their tech interviews with our platform.
          </p>
        </div>

        <div className="grid-cols-3">
          {reviews.map((r, idx) => (
            <div key={idx} className="flat-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', gap: '4px', color: 'var(--accent-color)', marginBottom: '1rem' }}>
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p style={{ color: 'var(--text-main)', fontSize: '1rem', fontStyle: 'italic' }}>
                  "{r.review}"
                </p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                <div style={{ 
                  width: '45px', 
                  height: '45px', 
                  borderRadius: '50%', 
                  background: r.color || 'var(--primary-color)', 
                  color: '#fff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  {r.initials}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>{r.name}</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
