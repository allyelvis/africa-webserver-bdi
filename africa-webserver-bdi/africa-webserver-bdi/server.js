const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

// MongoDB and PostgreSQL setup
const mongoose = require('mongoose');
const { Pool } = require('pg');

// Initialize Express app
const app = express();

// Middleware
app.use(compression());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/yourdbname';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// PostgreSQL connection
const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'yourdbname',
  password: 'yourpassword',
  port: 5432
});
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('PostgreSQL connection error:', err);
  } else {
    console.log('PostgreSQL connected:', res.rows[0]);
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Africa Web Server!');
});

app.get('/api/data', (req, res) => {
  res.json({
    message: 'This is an example API response.',
    data: []
  });
});

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'service-worker.js'));
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
