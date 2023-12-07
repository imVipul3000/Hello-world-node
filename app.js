// app.js
const express = require('express');
const app = express();
const port = 3000; // Choose any port number you prefer

// Define a route to handle requests and send "Hello, World!" as a response
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
