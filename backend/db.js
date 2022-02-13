const mongoose = require('mongoose');
require('dotenv').config();

// // NOTE Connecting to Database
const url =
  'mongodb+srv://moeIsAwesome:aA13711371@moeisawesome.tdrzi.mongodb.net/wednesdays?retryWrites=true&w=majority';
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
  Name: { type: String },
  Defence: { type: Number },
  Shoot: { type: Number },
  Pass: { type: Number },
  Dribble: { type: Number },
  Speed: { type: Number },
});

// NOTE Create a collection:

const Player = mongoose.model('players', playerSchema);

// NOTE Adding a document (player) to collection:

// Player.create({
//   Name: 'Moe',
//   Defence: 6,
//   Shoot: 8,
//   Pass: 9,
//   Dribble: 8,
//   Speed: 9,
// });

const getAllPlayers = async () => {
  try {
    const result = await Player.find({}, { Name: 1, _id: 0 });
    const namesAsArray = result.map(({ Name }) => Name);
    console.log(namesAsArray);
  } catch (error) {
    alert(error);
  }
};

module.exports = getAllPlayers;
