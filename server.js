const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to Shop Easy App!</h1>
    <p>Docker Lab 7 Version 2.</p>
    <p>GHCR Deployment Successful.</p>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
