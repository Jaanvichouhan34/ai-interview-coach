const express = require('express');
const router = express.Router();
const { generateQuestions, evaluateAnswer, generateQuiz, evaluateCommunication } = require('../controllers/geminiController');

router.post('/generate', generateQuestions);
router.post('/evaluate', evaluateAnswer);
router.post('/quiz', generateQuiz);
router.post('/communication/evaluate', evaluateCommunication);

module.exports = router;