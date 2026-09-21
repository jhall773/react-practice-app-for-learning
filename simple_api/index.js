const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');
app.use(cors());
// CORS = Cross-Origin Resource Sharing
// ------------------------------------
// Browsers block requests from one origin to another unless the server says it's allowed.
//
// Example:
//   Frontend: http://localhost:3000
//   Backend:  http://localhost:3001
//
// These are DIFFERENT origins (different ports = different origins).
//
// When your React app tries to fetch the backend:
//   fetch("http://localhost:3001/test")
//
// The browser asks the backend:
//   "Do you allow requests from http://localhost:3000?"
//
// If the backend does NOT respond with:
//   Access-Control-Allow-Origin: http://localhost:3000
// or
//   Access-Control-Allow-Origin: *
//
// The browser BLOCKS the response for security reasons.

// Health check (Kubernetes uses this)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Sample API route
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from your Node API!' });
});

// Quick test endpoint for React (App) -> Node (Backend API) Communication Test
app.get('/test', (req, res) => {
  res.json({ message: 'React successfully reached Node!' });
});

// Used for general localhost:port
app.get('/', (req, res) => {
  res.send('API is running');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
