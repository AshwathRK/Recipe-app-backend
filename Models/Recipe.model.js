const m = require('mongoose');

const booksSchema = new m.Schema({
    Recipe_key: {type: Number, required: true, unique: true}, 
    RecipeName: {type: String, required: true},
    Ingredients: {type: Array, required: true},
    Recipetype: {type: Date, enum: ['veg', 'non-veg']},
},{ timestamps: true })

const books = m.model('books', booksSchema, 'BooksDetails')

module.exports = books;