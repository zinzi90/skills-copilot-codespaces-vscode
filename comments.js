// Create web server
// npm install express
// npm install body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Create a comments array
const comments = [
  { id: 1, author: 'John Doe', text: 'Hello World' },
  { id: 2, author: 'Jane Doe', text: 'Hi, planet!' }
];

// Create a GET /comments route to send all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a POST /comments route to add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Test the server with curl
// curl -X GET http://localhost:3000/comments
// curl -X POST -d '{"author": "Alice", "text": "Hello"}' -H 'Content-Type: application/json' http://localhost:3000/comments
// curl -X GET http://localhost:3000/comments



