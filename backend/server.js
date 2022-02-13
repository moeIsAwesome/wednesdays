const getAllPlayers = require('./db');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());

// NOTE Creating a server:
const port = 3050;

app.listen(port, () => {
  console.log(`app running on port: ${port}...`);
});

// NOTE Handling GET requests:
app.get('/api/v1/players', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'Hello from the server!',
  });
});

getAllPlayers();
