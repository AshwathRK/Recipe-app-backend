const m = require('mongoose');

const RecipeSchema = new m.Schema({
    Recipe_key: {type: Number, required: true, unique: true}, 
    RecipeName: {type: String, required: true},
    Ingredients: {type: Array, required: true},
    Recipetype: {type: String, enum: ['veg', 'non-veg']},
},{ timestamps: true })

const Recipe = m.model('Recipes', RecipeSchema, 'Recipes')

module.exports = Recipe;