import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "How do I start an interview?",
    a: "Navigate to the 'Practice' tab on the navbar, or click 'Get Started Free' on the home page. Then, select the specific role you want to interview for (e.g., Frontend, Backend). The AI will automatically generate your questions."
  },
  {
    q: "Is this platform free?",
    a: "Yes! InterviewAI is currently completely free to use. We believe in accessible preparation for all aspiring software engineers."
  },
  {
    q: "How does AI scoring work?",
    a: "We use the Groq Llama 3 API to evaluate your answers with a STRICT technical rubric. Nonsense or incorrect answers yield low scores (1-3/10), while comprehensive answers with examples yield high scores (8-10/10)."
  },
  {
    q: "Can I use voice input?",
    a: "Absolutely. When answering a question, click 'Speak Answer' to use the Web Speech API built into your browser. Speak clearly into your microphone, and your speech will be converted to text."
  },
  {
    q: "How do I track my progress?",
    a: "Create an account and navigate to the 'Dashboard'. There, you can see your average scores, total completed interviews, recent session history, and your daily streak to keep you motivated."
  }
];

export default function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container" style={{ padding: '6rem 1.5rem', maxWidth: '800px', minHeight: 'calc(100vh - 80px)' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(127, 119, 221, 0.1)', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
          <HelpCircle size={40} />
        </div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Help Center</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Frequently asked questions about using the InterviewAI platform.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, index) => (
          <div key={index} className="flat-card clickable" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => toggleAccordion(index)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{faq.q}</h3>
              <div style={{ color: 'var(--primary-color)' }}>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
