const express = require('express');
const app = express();
const port = 3000;

// Middleware for compression
const compression = require('compression');
app.use(compression());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
