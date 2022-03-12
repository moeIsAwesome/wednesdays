const mongoose = require('mongoose');
require('dotenv').config();

// // NOTE Connecting to Database
const url = process.env.REACT_APP_DBSTR;

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('Database connected:', url);
});

db.on('error', (err) => {
  console.error('connection error:', err);
});

// NOTE Creating the schema of the document:

const playerSchema = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  Defence: { type: Number },
  Shoot: { type: Number },
  Pass: { type: Number },
  Dribble: { type: Number },
  Speed: { type: Number },
  lineupImg: { type: String },
});

// NOTE Create a collection:

const Player = mongoose.model('players', playerSchema);

// NOTE Adding a document (player) to collection:

// Player.create({
//   name: 'Moe',
//   img: 'https://lh3.google.com/u/2/d/10TBd4k3IiTvYvBV8n3MWor2cBZFAZuoz=w1920-h937-iv1',
//   Defence: 6,
//   Shoot: 8,
//   Pass: 9,
//   Dribble: 8,
//   Speed: 9,
//   lineupImg:
//     'https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1',
// });

module.exports = Player;
