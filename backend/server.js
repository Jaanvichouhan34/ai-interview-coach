require('dotenv').config({ path: __dirname + '/.env' });
console.log("API KEY:", process.env.GEMINI_API_KEY ? "Loaded" : "Not Loaded");

const express = require('express');
const cors = require('cors');

const interviewRoutes = require('./routes/interview');
const communicationRoutes = require('./routes/communication');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/interview', interviewRoutes);
app.use('/api/communication', communicationRoutes);

// Error handler
app.use((err, req, res, next) => {
    console.error("Global Error Handler:", err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

const PORT = 5000;
const server = app.listen(PORT, () => {
    console.log(`[DEBUG] Server successfully started on port ${PORT}`);
});

server.on('error', (err) => {
    console.error("[DEBUG] Server Error event:", err);
});

process.on('uncaughtException', (err) => {
    console.error("[DEBUG] Uncaught Exception:", err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error("[DEBUG] Unhandled Rejection at:", promise, "reason:", reason);
});