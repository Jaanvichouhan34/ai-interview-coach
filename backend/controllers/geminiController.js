const axios = require('axios');

const generateQuestions = async (req, res) => {
    const { role } = req.body;

    const prompt = `You are an expert technical interviewer. Generate 7 interview questions for a ${role} developer position. 
  Return ONLY a JSON array like this format:
  ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7"]
  No extra text, just the JSON array.`;

    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: prompt }] }]
            }
        );

        const text = response.data.candidates[0].content.parts[0].text;
        const cleaned = text.replace(/```json|```/g, '').trim();
        const questions = JSON.parse(cleaned);
        res.json({ questions });

    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        // Fallback to mock data for development if the API key is not valid
        if (error.response && error.response.status === 400) {
            console.log("Using mock data due to invalid API key.");
            return res.json({
                questions: [
                    "What is the Virtual DOM in React and why is it useful?",
                    "Explain the main differences between let, const, and var.",
                    "How do you manage state in a complex React application?",
                    "What are React Hooks and can you name a few common ones?",
                    "Describe the CSS Box Model and its components.",
                    "What is the purpose of the 'useEffect' hook in React?",
                    "How does the 'this' keyword work in JavaScript?"
                ]
            });
        }
        res.status(500).json({ error: 'Failed to generate questions' });
    }
};

const evaluateAnswer = async (req, res) => {
    const { question, answer, role } = req.body;

    const prompt = `You are a STRICT technical interviewer. 
  Question: [${question}]
  Candidate answer: [${answer}]
  
  Evaluate STRICTLY:
  - If answer is irrelevant, nonsense, or off-topic -> score 1-2/10
  - If answer is partially correct but incomplete -> score 3-5/10  
  - If answer is mostly correct -> score 6-7/10
  - If answer is excellent with examples -> score 8-10/10
  - NEVER give high scores for wrong or vague answers
  
  Return JSON only:
  {
    "score": number,
    "good": "string",
    "missing": "string",
    "ideal": "string"
  }`;

    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: prompt }] }]
            }
        );

        const text = response.data.candidates[0].content.parts[0].text;
        const cleaned = text.replace(/```json|```/g, '').trim();
        const feedback = JSON.parse(cleaned);
        res.json({ feedback });

    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        // Fallback to mock data for development if the API key is not valid
        if (error.response && error.response.status === 400) {
            console.log("Using mock data due to invalid API key.");
            return res.json({
                feedback: {
                    score: 8,
                    good: "You explained the core concept clearly and your understanding is solid.",
                    missing: "It would be better to provide a concrete real-world example.",
                    ideal: "An ideal answer defines the concept, explains why it's used, and gives a brief, practical example."
                }
            });
        }
        res.status(500).json({ error: 'Failed to evaluate answer' });
    }
};

const generateQuiz = async (req, res) => {
    const { role } = req.body;

    const prompt = `You are an expert technical interviewer. Generate 5 MCQ quiz questions for a ${role} developer position.
    Return ONLY a JSON array in this exact format:
    [
      {
        "question": "string",
        "options": ["A. opt1", "B. opt2", "C. opt3", "D. opt4"],
        "correct": "A",
        "explanation": "string"
      }
    ]
    No extra text or markdown code blocks outside the JSON array.`;

    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: prompt }] }]
            }
        );

        const text = response.data.candidates[0].content.parts[0].text;
        const cleaned = text.replace(/```json|```/g, '').trim();
        const quiz = JSON.parse(cleaned);
        res.json({ quiz });

    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        if (error.response && error.response.status === 400) {
            console.log("Using mock data due to invalid API key.");
            return res.json({
                quiz: [
                    {
                        question: "What is the primary use of a Virtual DOM in React?",
                        options: [
                          "A. Directly manipulating the browser DOM", 
                          "B. Improving performance by minimizing direct DOM manipulation", 
                          "C. Creating virtual reality interfaces", 
                          "D. Storing component state globally"
                        ],
                        correct: "B",
                        explanation: "The Virtual DOM creates a lightweight copy of the real DOM. When state changes, React compares the Virtual DOM to a snapshot and only updates the changed parts in the real DOM."
                    }
                ]
            });
        }
        res.status(500).json({ error: 'Failed to generate quiz' });
    }
};

const evaluateCommunication = async (req, res) => {
  const { topic, response } = req.body;
  
  if (!response || response.trim().length < 3) {
    return res.json({
      feedback: {
        fluency: 1, vocabulary: 1, confidence: 1,
        coachNote: 'No meaningful response detected.',
        proTip: 'Try speaking at least 2-3 sentences.'
      }
    });
  }

  const prompt = `You are a STRICT English communication evaluator.
Topic: "${topic}"
Student response: "${response}"

STRICT scoring rules:
- Only filler words (uh, um, i don't know) → 1-2/10
- Off-topic or nonsense → 1-3/10  
- Partially relevant → 4-6/10
- Clear and relevant → 7-8/10
- Excellent with examples → 9-10/10

Return ONLY this exact JSON, nothing else:
{
  "fluency": <number 1-10>,
  "vocabulary": <number 1-10>,
  "confidence": <number 1-10>,
  "coachNote": "<specific feedback about their response>",
  "proTip": "<one actionable improvement tip>"
}`;

  try {
    const response2 = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: prompt }] }] }
    );
    const text = response2.data.candidates[0].content.parts[0].text;
    const cleaned = text.replace(/```json|```/g,'').trim();
    const feedback = JSON.parse(cleaned);
    res.json({ feedback });
  } catch (error) {
    console.error('Evaluate error:', error.message);
    res.status(500).json({ error: 'Evaluation failed' });
  }
};

const chatWithAI = async (req, res) => {
  const { message, history, mode } = req.body;

  const systemPrompt = mode === 'interview'
    ? `You are a strict but helpful interview coach. 
       Correct any grammar mistakes the user makes.
       Show corrections like: "Correction: 'I goes' → 'I go'"
       Ask interview-style follow up questions.`
    : `You are a friendly AI English companion named Alex.
       Chat naturally like a friend.
       Gently correct grammar mistakes inline.
       Show corrections like: "Correction: 'I goes' → 'I go'"
       Keep responses short (2-3 sentences max).
       Be warm, encouraging and fun.`;

  const conversationHistory = (history || []).map(m => ({
    role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        system_instruction: {
          parts: [{ text: systemPrompt }]
        },
        contents: [
          ...conversationHistory.filter(m => m.parts[0].text),
          { role: 'user', parts: [{ text: message }] }
        ]
      }
    );
    const reply = response.data.candidates[0].content.parts[0].text;
    res.json({ reply });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Chat failed' });
  }
};

module.exports = { generateQuestions, evaluateAnswer, generateQuiz, evaluateCommunication, chatWithAI };