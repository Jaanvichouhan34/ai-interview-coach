const express = require('express');
const router = express.Router();
const { evaluateCommunication, chatWithAI } = require('../controllers/geminiController');

router.post('/evaluate', evaluateCommunication);
router.post('/chat', chatWithAI);

module.exports = router;