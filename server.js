const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(compression()); // Compress responses
app.use(helmet()); // Set security headers
app.use(morgan('combined')); // Log requests

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Africa Web Server!');
});

// API example
app.get('/api/data', (req, res) => {
    res.json({
        message: 'This is an example API response.',
        data: []
    });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});