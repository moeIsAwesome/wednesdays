const Player = require('./db');

const express = require('express');
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
  Player.find({}, (err, result) => {
    if (err) {
      throw new err();
    }

    res.json({
      result,
    });
  });
});
