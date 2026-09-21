const express = require('express');
const app = express();
const PORT = 3001;

// Health check (Kubernetes uses this)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Sample API route
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from your Node API!' });
});

// Used for general localhost:port
app.get('/', (req, res) => {
  res.send('API is running');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
