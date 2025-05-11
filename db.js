const mongoose = require('mongoose');
const Recipe = require('./Models/Recipe.model');

// Replace with your actual MongoDB Atlas username and password
const username = 'ashwathamanr6';
const password = '0EqI3qLt4i8f1ix3';

const uri = `mongodb+srv://${username}:<${password}>@your-cluster.mongodb.net/sample_mflix?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Connection error:', err));

