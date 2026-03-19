import { useState } from 'react';

const AnswerInput = ({ onSubmit, disabled }) => {
  const [answer, setAnswer] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition 
      || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert('Voice input not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setIsActive(true);
    };

    recognition.onresult = (event) => {
      const transcript = 
        event.results[0][0].transcript;
      setAnswer(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
      setIsActive(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech error:', event.error);
      setIsListening(false);
      setIsActive(false);
    };

    recognition.start();
  };

  const handleSubmit = () => {
    if (answer.trim()) {
      onSubmit(answer);
      setAnswer('');
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer here..."
        disabled={disabled}
        style={{
          width: '100%',
          minHeight: '120px',
          padding: '12px 16px',
          borderRadius: '12px',
          border: isActive 
            ? '2px solid #534AB7' 
            : '1px solid #e0e0e0',
          fontSize: '14px',
          fontFamily: 'inherit',
          resize: 'vertical',
          outline: 'none',
          background: 'white',
          color: '#1a1535'
        }}
      />
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        marginTop: '12px' 
      }}>
        <button
          onClick={startListening}
          disabled={isListening || disabled}
          style={{
            background: isListening 
              ? '#e74c3c' : '#f0eeff',
            color: isListening 
              ? 'white' : '#534AB7',
            border: '1px solid #534AB7',
            padding: '10px 20px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {isListening ? '🔴 Listening...' : '🎙️ Use Voice'}
        </button>
        <button
          onClick={handleSubmit}
          disabled={!answer.trim() || disabled}
          style={{
            background: '#534AB7',
            color: 'white',
            border: 'none',
            padding: '10px 24px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '14px',
            flex: 1
          }}
        >
          Submit Answer →
        </button>
      </div>
    </div>
  );
};

export default AnswerInput;
