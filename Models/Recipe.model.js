const mongoose = require('mongoose');

// Replace with your actual MongoDB Atlas username and password
const username = encodeURIComponent('ashwathamanr6');
const password = encodeURIComponent('0EqI3qLt4i8f1ix3');

// Your cluster URL and DB name
const clusterUrl = 'atlas-sql-6820e32e832ab3049376222f-htlpyt.a.query.mongodb.net';
const dbName = 'sample_mflix';

const uri = `mongodb://${username}:${password}@${clusterUrl}/${dbName}?ssl=true&authSource=admin`;

const RecipeSchema = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => {
        console.error('Connection error:', err);
    });

const books = m.model('Recipes', RecipeSchema, 'Recipes')

module.exports = books;
