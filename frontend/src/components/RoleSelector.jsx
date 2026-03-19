import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Users, Layers } from 'lucide-react';

const roles = [
  { id: 'Frontend', title: 'Frontend Developer', icon: <Code size={24} />, desc: 'React, UI/UX, DOM', qCount: '5 Questions' },
  { id: 'Backend', title: 'Backend Developer', icon: <Terminal size={24} />, desc: 'Node.js, APIs, Auth', qCount: '5 Questions' },
  { id: 'Full Stack', title: 'Full Stack Developer', icon: <Layers size={24} />, desc: 'MERN, Architecture', qCount: '7 Questions' },
  { id: 'DSA', title: 'Data Structures & Algos', icon: <Database size={24} />, desc: 'Problem Solving, Trees', qCount: '5 Questions' },
  { id: 'HR', title: 'HR & Behavioral', icon: <Users size={24} />, desc: 'Culture fit, Leadership', qCount: '5 Questions' }
];

export default function RoleSelector({ destination = '/interview' }) {
  const navigate = useNavigate();

  const handleSelect = (roleId) => {
    navigate(`${destination}`, { state: { role: roleId } });
  };

  return (
    <div className="grid-cols-3">
      {roles.map((role, idx) => (
        <motion.div 
          key={role.id}
          className="flat-card clickable"
          whileHover={{ 
            scale: 1.03, 
            boxShadow: "0 20px 25px -5px rgba(83, 74, 183, 0.15)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ 
            cursor: 'none', // to rely on custom cursor
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          onClick={() => handleSelect(role.id)}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ 
                padding: '0.75rem', 
                borderRadius: '12px', 
                background: 'var(--surface-hover)',
                color: 'var(--primary-color)'
              }}>
                {role.icon}
              </div>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{role.title}</h3>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              {role.desc}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
              {role.qCount}
            </span>
            <span style={{ fontSize: '0.9rem', color: 'var(--primary-color)', fontWeight: '600' }}>
              Start →
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
